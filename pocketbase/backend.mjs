// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = "https://nummy.arthurwicky.fr";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase(POCKETBASE_URL);


// Exportation de l'instance PocketBase pour l'utiliser dans d'autres fichiers
export { pb };



export async function Allevents() {
    const record = await pb.collection('Recette').getFullList();
    return record;
}



//une fonction qui retourne les infos d'une recette en donnant son id en paramètre

export async function oneIDRecette(id) {
    const Onerecords = await pb.collection('Recette').getOne(id, { expand: 'Produit' });
    return Onerecords;
}

// fonction pour la création des formulaires pour saisir et modifier des données des recettes
export async function addrecette(recette) {
    try {
        await pb.collection('Recette').create(recette);
        return {
            success: true,
            message: 'Recette ajouté avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant la recette', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant la recette'
        };
    }
}


/* fonction de filtage des recettes par continents*/


export async function filterByContinent(continent) {
    try {
        let data = await pb.collection('Recette').getFullList({
            sort: 'nom',
            filter: `continent_recette ~ '${continent}'`
        });

        console.log(`Recettes filtrés par continents (${continent}):`, data);

        data = data.map((recette) => {
            if (film.image) {
                film.imageFile = pb.files.getFile(recette, recette.image);
            }
            return invite;
        });

        return data;
    } catch (error) {
        console.error(`Erreur lors du filtrage des recettes par continents (${continent}) :`, error);
        return [];
    }
}


// une fonction pour retourner les recettes

export async function sortedrecette() {
    let records = await pb.collection('Recette').getFullList({ sort: 'nom_recette', });
    records = records.map((continent_recette) => {
        continent_recette.imageUrl = pb.files.getURL(continent_recette, continent_recette.images);
        return continent_recette;
    });
    return records;
}
