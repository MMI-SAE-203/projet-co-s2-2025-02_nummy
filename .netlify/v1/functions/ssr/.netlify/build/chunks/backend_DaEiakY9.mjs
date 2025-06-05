import PocketBase from 'pocketbase';

const pb = new PocketBase('https://nummy.arthurwicky.fr');

// Función para récupérer tous les établissements
// Reemplaza la función getEtablissements en backend.js
async function getEtablissements() {
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
async function getEtablissementById(id) {
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

// Produits
async function getAllProduits() {
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

async function getRecettesByProduit(productId) {
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

// Recettes
async function getAllRecettes() {
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

// Avis
async function getAvisByRecette(recetteId) {
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

async function getAvisStats(recetteId) {
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

async function getRecetteById(id) {
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

export { getAllProduits as a, getEtablissements as b, getRecetteById as c, getAllRecettes as d, getAvisByRecette as e, getAvisStats as f, getRecettesByProduit as g, getEtablissementById as h, pb as p };
