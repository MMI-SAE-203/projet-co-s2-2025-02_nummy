import PocketBase from 'pocketbase';

export const pb = new PocketBase('https://nummy.arthurwicky.fr')

import { isLoggedIn } from './login.js';

// Fonction pour récupérer tous les établissements
export async function getEtablissements(){
try {
    const records = await pb.collection('Etablissement').getList(1, 100, {
        sort: 'created',
        expand: 'continent_etablissement,categorie_etablissement'
    });

        return {
            success: true,
            items: records.items
        };
} catch (error) {
        console.error("Erreur lors de la récupération des établissements:", error);
        return {
            success: false,
            error: error.message
        };
    }
}

// Fonction pour récupérer un établissement par son ID
export async function getEtablissementById(id) {
    try {
        const record = await pb.collection('Etablissement').getOne(id, {
            expand: 'continent_etablissement,categorie_etablissement'
        });
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

// Fonction pour obtenir la localisation de l'utilisateur via une API

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
            success: true, // Cambiado a true para evitar errores en cascada
            error: error.message,
            // Coordenadas de París por defecto
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

// Fonction pour convertir une adresse en coordonnées
export async function geocodeAdresse(adresse) {
    try {
        console.log(`Tentative de géocodage pour: ${adresse}`);
        
        // Ajout d'un délai pour éviter de surcharger l'API
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

