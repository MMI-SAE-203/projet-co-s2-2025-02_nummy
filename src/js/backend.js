import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://nummy.arthurwicky.fr');

// Función para verificar si el usuario está logueado
export function isLoggedIn() {
    try {
        if (typeof window === 'undefined') {
            return false;
        }
        
        const storedAuthData = localStorage.getItem('pocketbase_auth');
        if (!storedAuthData) {
            return false;
        }
        
        const parsedData = JSON.parse(storedAuthData);
        if (!parsedData.token || !parsedData.model) {
            localStorage.removeItem('pocketbase_auth');
            pb.authStore.clear();
            return false;
        }
        
        if (!pb.authStore.isValid || pb.authStore.token !== parsedData.token) {
            pb.authStore.save(parsedData.token, parsedData.model);
        }
        
        if (pb.authStore.isValid) {
            return true;
        } else {
            localStorage.removeItem('pocketbase_auth');
            pb.authStore.clear();
            return false;
        }
    } catch (error) {
        console.error("Error en isLoggedIn:", error);
        return false;
    }
}

// Función para obtener usuario actual
export function getCurrentUser() {
    try {
        if (typeof window === 'undefined') {
            return null;
        }
        
        if (!isLoggedIn()) {
            return null;
        }
        
        return pb.authStore.model;
    } catch (error) {
        console.error("Error getting current user:", error);
        return null;
    }
}

// Función para récupérer tous les établissements
// Reemplaza la función getEtablissements en backend.js
export async function getEtablissements() {
    try {
        console.log("🔄 Obteniendo establecimientos...");
        
        const records = await pb.collection('Etablissement').getFullList({
            sort: 'created',
            // Agregar timeout
            requestKey: null
        });

        console.log("✅ Establecimientos obtenidos:", records.length);
        
        // Verificar que los records tienen las propiedades necesarias
        const validRecords = records.map(record => ({
            id: record.id,
            nom_etablissement: record.nom_etablissement || '',
            adresse_etablissement: record.adresse_etablissement || '',
            ville_etablissement: record.ville_etablissement || '',
            categorie_etablissement: record.categorie_etablissement || '',
            continent_etablissement: record.continent_etablissement || '',
            image_etablissement: record.image_etablissement || null,
            partenariat_etablissement: !!record.partenariat_etablissement,
            latitude: record.latitude || null,
            longitude: record.longitude || null,
            created: record.created || '',
            updated: record.updated || ''
        }));

        console.log("✅ Records procesados:", validRecords.length);

        return {
            success: true,
            items: validRecords
        };
    } catch (error) {
        console.error("❌ Error obteniendo establecimientos:", error);
        console.error("❌ Error details:", error.response?.data || error.message);
        
        return {
            success: false,
            error: error.message || "Error desconocido",
            items: []
        };
    }
}

// Función para récupérer un établissement par son ID
export async function getEtablissementById(id) {
    try {
        const record = await pb.collection('Etablissement').getOne(id);
        return {
            success: true,
            item: record
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération de l'établissement ${id}:`, error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Función para obtener la localización de l'utilisateur via une API
export async function getUserLocation(){
    try{
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) {
            throw new Error(`Error de red: ${response.status}`);
        }
        const data = await response.json();
        
        console.log("Datos de localización recibidos:", data);

        // Verificar que los datos tengan las propiedades necesarias
        if (!data.latitude || !data.longitude) {
            console.warn("La API no devolvió coordenadas válidas, usando valores predeterminados");
            return {
                success: true,
                latitude: 48.8566,  // París
                longitude: 2.3522,
                city: data.city || "Paris",
                country: data.country_name || "France",
                region: data.region || "Île-de-France",
            };
        }

        return {
            success: true,
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city,
            country: data.country_name,
            region: data.region,
        };
    } catch (error) {
        console.error("Error al obtener la localización:", error);
        return {
            success: true,
            error: error.message,
            latitude: 48.8566,
            longitude: 2.3522,
            city: "Paris",
            country: "France",
        };
    }
}

export async function toggleFavorite(id, isFavorite) {
    try {
        if (!isLoggedIn()) {
            return {
                success: false, 
                error: "Vous devez être connecté pour ajouter des favoris"
            };
        }
        
        const updatedRecord = await pb.collection('Etablissement').update(id, {
            'Favori_etablissement': isFavorite
        });

        return {
            success: true,
            item: updatedRecord
        };
    } catch (error) {
        console.error(`Erreur lors de la mise à jour du favori:`, error);
        return {
            success: false,
            error: error.message
        };
    }
}

export function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Rayon de la Terre en km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon/2) * Math.sin(dLon/2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const distance = R * c;

    return distance;
}

// Función para convertir une adresse en coordonnées
export async function geocodeAdresse(adresse) {
    try {
        console.log(`Tentative de géocodage pour: ${adresse}`);
        
        await new Promise(resolve => setTimeout(resolve, 300));
        
        const query = encodeURIComponent(`${adresse}`);
        const url = `https://nominatim.openstreetmap.org/search?q=${query}&format=json&limit=1`;
        
        console.log(`URL de requête: ${url}`);
        
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Nummy/1.0 (https://nummy.arthurwicky.fr/)'
            }
        });
        
        if (!response.ok) {
            throw new Error(`Erreur réseau: ${response.status}`);
        }
        
        const data = await response.json();
        console.log(`Résultat géocodage:`, data);

        if (data && data.length > 0) {
            return {
                success: true,
                latitude: parseFloat(data[0].lat),
                longitude: parseFloat(data[0].lon)
            };
        } else {
            console.warn(`Aucun résultat pour l'adresse: ${adresse}`);
            return {
                success: false,
                error: "Aucune coordonnée trouvée pour cette adresse."
            };
        }
    } catch (error) {
        console.error('Erreur lors du géocodage de l\'adresse:', error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Produits
export async function getAllProduits() {
    try {
        const records = await pb.collection("Produit").getFullList({
            expand: "magasin_produit,recettes_produit",
        });
    
        return records.map((r) => ({
            id: r.id,
            img_produit: r.img_produit,
            nom_produit: r.nom_produit,
            type_produit: r.type_produit,
            description_produit: r.description_produit,
            magasin_produit: r.expand?.magasin_produit || null,
            continent_produit: r.continent_produit,
            pays_produit: r.pays_produit,
            favori_produit: !!r.favori_produit,
            recettes_produit: r.expand?.recettes_produit || [],
            site_produit: r.site_produit || '',
        }));
    } catch (error) {
        console.error("Error getting products:", error);
        return [];
    }
}

export async function getRecettesByProduit(productId) {
    try {
        const records = await pb.collection('Recette').getList(1, 50, {
            filter: `produits_recette ~ "${productId}"`,
            expand: 'produits_recette,utilisateur_recette',
            sort: '-created'
        });

        return records.items.map((r) => ({
            id: r.id,
            nom_recette: r.nom_recette,
            hero_recette: r.hero_recette,
            pays_recette: r.pays_recette,
            continent_recette: r.continent_recette,
            personnes_recette: r.personnes_recette,
            temps_recette: r.temps_recette,
            ingredients_recette: r.ingredients_recette,
            recettes_produit: r.expand?.recettes_produit || [],
            images_recette: r.images_recette || [],
            preparation_recette: r.preparation_recette,
            favori: !!r.favori,
            utilisateur_recette: r.expand?.utilisateur_recette || null,
            created: r.created
        }));
    } catch (error) {
        console.error("Error getting recipes by product:", error);
        return [];
    }
}

export async function getProduitById(id) {
    try {
        const record = await pb.collection('Produit').getOne(id, {
            expand: 'magasin_produit,recettes_produit'
        });
        
        return {
            success: true,
            item: {
                id: record.id,
                img_produit: record.img_produit,
                nom_produit: record.nom_produit,
                type_produit: record.type_produit,
                description_produit: record.description_produit,
                site_produit: record.site_produit || '',
                magasin_produit: record.expand?.magasin_produit || null,
                continent_produit: record.continent_produit,
                pays_produit: record.pays_produit,
                favori_produit: !!record.favori_produit,
                recettes_produit: record.expand?.recettes_produit || record.recettes_produit || '',
            }
        };
    } catch (error) {
        console.error(`Error al obtener el producto ${id}:`, error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Recettes
export async function getAllRecettes() {
    try {
        const records = await pb.collection("Recette").getFullList({
            expand: "produits_recette,utilisateur_recette",
            sort: '-created'
        });
    
        return records.map((r) => ({
            id: r.id,
            nom_recette: r.nom_recette,
            hero_recette: r.hero_recette,
            pays_recette: r.pays_recette,
            continent_recette: r.continent_recette,
            personnes_recette: r.personnes_recette,
            temps_recette: r.temps_recette,
            ingredients_recette: r.ingredients_recette,
            produits_recette: r.expand?.produits_recette || [],
            images_recette: r.images_recette || [],
            preparation_recette: r.preparation_recette,
            favori: !!r.favori,
            utilisateur_recette: r.expand?.utilisateur_recette || null,
            created: r.created
        }));
    } catch (error) {
        console.error("Erreur lors de la récupération des recettes:", error);
        return [];
    }
}



export async function createRecette(formData) {
    try {
        if (!isLoggedIn()) {
            return {
                success: false,
                error: "Vous devez être connecté pour créer une recette"
            };
        }

        const currentUser = getCurrentUser();
        if (currentUser) {
            formData.append("utilisateur_recette", currentUser.id);
        }

        const record = await pb.collection('Recette').create(formData);
        
        return {
            success: true,
            item: record
        };
    } catch (error) {
        console.error('Erreur lors de la création de la recette:', error);
        return {
            success: false,
            error: error.message || "Erreur lors de la création de la recette"
        };
    }
}

// Avis
export async function getAvisByRecette(recetteId) {
    try {
        const records = await pb.collection('Avis').getList(1, 50, {
            filter: `recette_id = "${recetteId}"`,
            sort: '-created'
        });

        return {
            success: true,
            items: records.items.map(r => ({
                id: r.id,
                nom_auteur: r.nom_auteur,
                email_auteur: r.email_auteur,
                note: r.note,
                commentaire: r.commentaire,
                recette_id: r.recette_id,
                created: r.created
            }))
        };
    } catch (error) {
        console.error("Error getting avis:", error);
        return {
            success: false,
            error: error.message,
            items: []
        };
    }
}

export async function createAvis(avisData) {
    try {
        console.log("📝 Créant nouvel avis:", avisData);
        
        const record = await pb.collection('Avis').create({
            nom_auteur: avisData.nom_auteur,
            email_auteur: avisData.email_auteur,
            note: parseInt(avisData.note),
            commentaire: avisData.commentaire,
            recette_id: avisData.recette_id
        });

        console.log("✅ Avis créé:", record);
        return {
            success: true,
            item: record
        };
    } catch (error) {
        console.error("❌ Error creating avis:", error);
        return {
            success: false,
            error: error.message
        };
    }
}

export async function getAvisStats(recetteId) {
    try {
        const response = await getAvisByRecette(recetteId);
        
        if (!response.success || response.items.length === 0) {
            return {
                success: true,
                total: 0,
                moyenne: 0,
                repartition: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
            };
        }

        const avis = response.items;
        const total = avis.length;
        const somme = avis.reduce((acc, a) => acc + a.note, 0);
        const moyenne = (somme / total).toFixed(1);

        const repartition = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        avis.forEach(a => {
            repartition[a.note] = (repartition[a.note] || 0) + 1;
        });

        return {
            success: true,
            total,
            moyenne: parseFloat(moyenne),
            repartition
        };
    } catch (error) {
        console.error("Error getting avis stats:", error);
        return {
            success: false,
            total: 0,
            moyenne: 0,
            repartition: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
        };
    }
}

export async function getRecetteById(id) {
    try {
        const record = await pb.collection('Recette').getOne(id, {
            expand: 'produits_recette,utilisateur_recette'
        });
        
        return {
            success: true,
            item: {
                id: record.id,
                nom_recette: record.nom_recette,
                hero_recette: record.hero_recette,
                pays_recette: record.pays_recette,
                continent_recette: record.continent_recette,
                personnes_recette: record.personnes_recette,
                temps_recette: record.temps_recette,
                ingredients_recette: record.ingredients_recette,
                produits_recette: record.expand?.produits_recette || [],
                images_recette: record.images_recette || [],
                preparation_recette: record.preparation_recette,
                favori: !!record.favori,
                utilisateur_recette: record.expand?.utilisateur_recette || null,
                created: record.created
            }
        };
    } catch (error) {
        console.error(`Erreur lors de la récupération de la recette ${id}:`, error);
        return {
            success: false,
            error: error.message
        };
    }
}


// Login functions
export async function loginUser(email, password) {
    try {
        console.log("🔄 Intentando login con:", email);
        
        pb.authStore.clear();
        if (typeof window !== 'undefined') {
            localStorage.removeItem('pocketbase_auth');
        }
        
        const authData = await pb.collection('users').authWithPassword(email, password);
        
        if (typeof window !== 'undefined') {
            const authInfo = {
                token: pb.authStore.token,
                model: pb.authStore.model
            };
            localStorage.setItem('pocketbase_auth', JSON.stringify(authInfo));
            console.log("💾 Sesión guardada en localStorage");
        }
        
        console.log("✅ Login exitoso:", authData.record.email);
        return { success: true, user: authData.record };
    } catch (error) {
        console.error('❌ Error de login:', error);
        pb.authStore.clear();
        if (typeof window !== 'undefined') {
            localStorage.removeItem('pocketbase_auth');
        }
        return { success: false, error: error.message };
    }
}

export async function registerUser(userData) {
    try {
        console.log("🔄 Registrando usuario:", userData.email);

        if (!userData.email || !userData.password || !userData.nom_user) {
            return { success: false, error: "Todos los campos obligatorios deben estar completos" };
        }

        const data = {
            email: userData.email,
            password: userData.password,
            passwordConfirm: userData.password,
            nom_user: userData.nom_user,
            emailVisibility: true
        };

        if (userData.prenom_user) {
            data.prenom_user = userData.prenom_user;
        }

        const record = await pb.collection('users').create(data);
        console.log("✅ Usuario registrado:", record.email);
        
        return await loginUser(userData.email, userData.password);
    } catch (error) {
        console.error('❌ Error de registro:', error);
        
        let errorMessage = error.message;
        if (error.data?.data) {
            const messages = [];
            Object.entries(error.data.data).forEach(([field, fieldError]) => {
                if (fieldError?.message) {
                    messages.push(`${field}: ${fieldError.message}`);
                } else {
                    messages.push(`${field}: ${String(fieldError)}`);
                }
            });
            if (messages.length > 0) {
                errorMessage = messages.join('\n');
            }
        }
        
        return { success: false, error: errorMessage };
    }
}

export function logoutUser() {
    pb.authStore.clear();
    if (typeof window !== 'undefined') {
        localStorage.removeItem('pocketbase_auth');
    }
    console.log("🚪 Logout exitoso");
}

export async function updateUserProfile(id, data) {
    try {
        const record = await pb.collection('users').update(id, data);
        
        if (typeof window !== 'undefined') {
            const authInfo = {
                token: pb.authStore.token,
                model: record
            };
            localStorage.setItem('pocketbase_auth', JSON.stringify(authInfo));
        }
        
        return { success: true, user: record };
    } catch (error) {
        console.error('Error updating profile:', error);
        return { success: false, error: error.message };
    }
}

export async function uploadAvatar(id, file) {
    try {
        const formData = new FormData();
        formData.append('avatar', file);

        const record = await pb.collection('users').update(id, formData);
        
        if (typeof window !== 'undefined') {
            const authInfo = {
                token: pb.authStore.token,
                model: record
            };
            localStorage.setItem('pocketbase_auth', JSON.stringify(authInfo));
        }
        
        return { success: true, user: record };
    } catch (error) {
        console.error('Error uploading avatar:', error);
        return { success: false, error: error.message };
    }
}