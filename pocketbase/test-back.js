import { oneIDRecette, sortedrecette, allRecetteFavori } from './backend.mjs'


// fonction pour les recettes

//fonction qui retourne les infos d'une recette en donnant son id en paramètre

try {
    const Onerecords = await oneIDRecette('n3ruaoyq5hegf54');
    console.table((Onerecords));
} catch (e) {
    console.error(e);
}



// une fonction pour retourner les recettes



try {
    const records = await sortedrecette();
    console.table((records));
} catch (e) {
    console.error(e);
}


//fonction qui retourne toutes les recettes en favori 

try {
    const records = await allRecetteFavori();
    console.table((records));
} catch (e) {
    console.error(e);
}
