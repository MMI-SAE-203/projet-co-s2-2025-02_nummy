import { oneIDRecette , sortedrecette } from './backend.mjs'

//une fonction qui retourne les infos d'un film en donnant son id en paramètre



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


