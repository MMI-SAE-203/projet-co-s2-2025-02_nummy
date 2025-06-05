import { c as createComponent, b as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Ds7egGoB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CgWoF0WD.mjs';
import { c as getRecetteById, d as getAllRecettes, e as getAvisByRecette, f as getAvisStats } from '../../chunks/backend_DaEiakY9.mjs';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const allRecettes = await getAllRecettes();
    return allRecettes.map((recette) => ({
      params: { id: recette.id },
      props: { recette }
    }));
  } catch (error) {
    console.error("Error en getStaticPaths:", error);
    return [{ params: { id: "fallback" } }];
  }
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const { recette } = Astro2.props;
  let recetteData = recette;
  if (!recetteData) {
    try {
      const result = await getRecetteById(id);
      if (result.success && result.item) {
        recetteData = result.item;
      } else {
        return Astro2.redirect("/recettes");
      }
    } catch (error) {
      console.error("Error al obtener la recette:", error);
      return Astro2.redirect("/recettes");
    }
  }
  if (id === "fallback") {
    return Astro2.redirect("/recettes");
  }
  const heroUrl = recetteData.hero_recette ? `https://nummy.arthurwicky.fr/api/files/Recette/${recetteData.id}/${recetteData.hero_recette}` : "https://via.placeholder.com/800x400?text=Recette";
  let recettesSimilaires = [];
  try {
    const allRecettes = await getAllRecettes();
    recettesSimilaires = allRecettes.filter(
      (r) => r.id !== recetteData.id && r.continent_recette === recetteData.continent_recette
    ).slice(0, 3);
  } catch (error) {
    console.error("Error al obtener recettes similaires:", error);
  }
  let avisList = [];
  let avisStats = {
    total: 0,
    moyenne: 0,
    repartition: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 }
  };
  try {
    const avisResponse = await getAvisByRecette(recetteData.id);
    const statsResponse = await getAvisStats(recetteData.id);
    if (avisResponse.success) {
      avisList = avisResponse.items;
    }
    if (statsResponse.success) {
      avisStats = statsResponse;
    }
  } catch (error) {
    console.error("Error loading avis:", error);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classBody": "colorPage colorNav", "title": `${recetteData.nom_recette} | Nummy`, "data-astro-cid-zih4r22a": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24" data-astro-cid-zih4r22a> <div class="bg-[var(--color-blanc)] rounded-xl shadow-lg overflow-hidden" data-astro-cid-zih4r22a> <div class="md:flex" data-astro-cid-zih4r22a> <!-- Image hero --> <div class="md:flex-shrink-0 md:w-1/2" data-astro-cid-zih4r22a> <img${addAttribute(heroUrl, "src")} loading="lazy"${addAttribute(recetteData.nom_recette, "alt")} class="h-full w-full object-cover md:h-full md:w-full max-h-[500px]" onerror="this.onerror=null; this.src='https://via.placeholder.com/800x400?text=Recette';" data-astro-cid-zih4r22a> </div> <!-- Info principales --> <div class="p-8 md:w-1/2" data-astro-cid-zih4r22a> <div class="flex items-center flex-wrap gap-2" data-astro-cid-zih4r22a> <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-green)] bg-opacity-20 text-white mr-2" data-astro-cid-zih4r22a> ${recetteData.continent_recette} </span> <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--color-bleu)] bg-opacity-20 text-white" data-astro-cid-zih4r22a> ${recetteData.pays_recette} </span> ${recetteData.favori && renderTemplate`<span class="ml-auto text-[var(--color-orange)] text-2xl" data-astro-cid-zih4r22a>
★ Favori
</span>`} </div> <h1 class="mt-4 text-3xl text-[var(--color-noir)] tracking-wide h1-header" data-astro-cid-zih4r22a> ${recetteData.nom_recette} </h1> <!-- Informations pratiques --> <div class="mt-6 grid grid-cols-2 gap-4" data-astro-cid-zih4r22a> <div class="bg-[var(--color-lin)] p-4 rounded-lg text-center" data-astro-cid-zih4r22a> <div class="text-2xl mb-2" data-astro-cid-zih4r22a>👥</div> <div class="p-body2 font-bold text-[var(--color-noir)]" data-astro-cid-zih4r22a> ${recetteData.personnes_recette} </div> <div class="p-body3 text-[var(--color-green)]" data-astro-cid-zih4r22a>Personnes</div> </div> <div class="bg-[var(--color-lin)] p-4 rounded-lg text-center" data-astro-cid-zih4r22a> <div class="text-2xl mb-2" data-astro-cid-zih4r22a>⏱️</div> <div class="p-body2 font-bold text-[var(--color-noir)]" data-astro-cid-zih4r22a> ${recetteData.temps_recette} min
</div> <div class="p-body3 text-[var(--color-green)]" data-astro-cid-zih4r22a>Préparation</div> </div> </div> <!-- Produits utilisés --> ${recetteData.produits_recette && recetteData.produits_recette.length > 0 && renderTemplate`<div class="mt-6" data-astro-cid-zih4r22a> <h3 class="p-body1 font-bold mb-3 text-[var(--color-noir)]" data-astro-cid-zih4r22a>
Produits utilisés:
</h3> <div class="flex flex-wrap gap-2" data-astro-cid-zih4r22a> ${recetteData.produits_recette.map(
    (produit) => renderTemplate`<a${addAttribute(`/continents/${produit.id}`, "href")} class="bg-[var(--color-orange)] bg-opacity-20 text-white px-3 py-1 rounded-full p-body3 hover:bg-opacity-30 transition-colors button" data-astro-cid-zih4r22a> ${produit.nom_produit} </a>`
  )} </div> </div>`} <!-- Boutons d'action --> <div class="mt-8 flex flex-wrap gap-4" data-astro-cid-zih4r22a> <button class="bg-[var(--color-green)] text-[var(--color-blanc)] px-6 py-3 rounded-full hover:opacity-90 transition-all button flex items-center" onclick="window.print()" data-astro-cid-zih4r22a> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zih4r22a> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" data-astro-cid-zih4r22a></path> </svg>
Imprimer la recette
</button> <button class="bg-[var(--color-blanc)] border border-[var(--color-green)] text-[var(--color-green)] px-6 py-3 rounded-full hover:bg-[var(--color-green)] hover:text-[var(--color-blanc)] transition-all button flex items-center" onclick="navigator.share ? navigator.share({title: '{recetteData.nom_recette}', url: window.location.href}) : navigator.clipboard.writeText(window.location.href)" data-astro-cid-zih4r22a> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-zih4r22a> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" data-astro-cid-zih4r22a></path> </svg>
Partager
</button> </div> </div> </div> </div> <!-- Section ingrédients et préparation --> <div class="mt-12 grid md:grid-cols-2 gap-8" data-astro-cid-zih4r22a> <!-- Ingrédients --> <div class="bg-[var(--color-blanc)] rounded-xl shadow-lg p-8" data-astro-cid-zih4r22a> <h2 class="h2-header mb-6 text-[var(--color-noir)] flex items-center" data-astro-cid-zih4r22a> <span class="text-2xl mr-3" data-astro-cid-zih4r22a>🥕</span>
Ingrédients
</h2> <div class="prose prose-sm max-w-none" data-astro-cid-zih4r22a> <div data-astro-cid-zih4r22a>${unescapeHTML(recetteData.ingredients_recette)}</div> </div> </div> <!-- Préparation --> <div class="bg-[var(--color-blanc)] rounded-xl shadow-lg p-8" data-astro-cid-zih4r22a> <h2 class="h2-header mb-6 text-[var(--color-noir)] flex items-center" data-astro-cid-zih4r22a> <span class="text-2xl mr-3" data-astro-cid-zih4r22a>👨‍🍳</span>
Préparation
</h2> <div class="prose prose-sm max-w-none" data-astro-cid-zih4r22a> <div data-astro-cid-zih4r22a>${unescapeHTML(recetteData.preparation_recette)}</div> </div> </div> </div> <!-- Images supplémentaires --> ${recetteData.images_recette && recetteData.images_recette.length > 0 && renderTemplate`<div class="mt-12" data-astro-cid-zih4r22a> <h2 class="h2-header mb-6 text-[var(--color-noir)] text-center" data-astro-cid-zih4r22a>
Photos de la recette
</h2> <div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-astro-cid-zih4r22a> ${recetteData.images_recette.map((image, index) => renderTemplate`<img${addAttribute(`https://nummy.arthurwicky.fr/api/files/Recette/${recetteData.id}/${image}`, "src")}${addAttribute(`${recetteData.nom_recette} - Image ${index + 1}`, "alt")} class="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"${addAttribute(`window.open(this.src, '_blank')`, "onclick")} onerror="this.style.display='none'" data-astro-cid-zih4r22a>`)} </div> </div>`} <!-- Informations sur l'auteur --> ${recetteData.utilisateur_recette && renderTemplate`<div class="mt-12 bg-[var(--color-lin)] rounded-xl p-8" data-astro-cid-zih4r22a> <h3 class="h3-header mb-4 text-[var(--color-noir)]" data-astro-cid-zih4r22a>
À propos de l'auteur
</h3> <div class="flex items-center" data-astro-cid-zih4r22a> <div class="w-16 h-16 bg-[var(--color-green)] rounded-full flex items-center justify-center text-[var(--color-blanc)] text-xl font-bold mr-4" data-astro-cid-zih4r22a> ${recetteData.utilisateur_recette.name ? recetteData.utilisateur_recette.name.charAt(0).toUpperCase() : "U"} </div> <div data-astro-cid-zih4r22a> <p class="p-body1 font-bold text-[var(--color-noir)]" data-astro-cid-zih4r22a> ${recetteData.utilisateur_recette.name || "Utilisateur"} </p> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-zih4r22a>
Membre de la communauté Nummy
</p> </div> </div> </div>`} </div>  ${recettesSimilaires.length > 0 && renderTemplate`<section class="bg-[var(--color-argent)] py-12" data-astro-cid-zih4r22a> <div class="px-4 md:px-20" data-astro-cid-zih4r22a> <h2 class="h2-header text-center mb-8 text-[var(--color-green)]" data-astro-cid-zih4r22a>
Autres recettes de ${recetteData.continent_recette} </h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-zih4r22a> ${recettesSimilaires.map((recette2) => renderTemplate`<article class="bg-[var(--color-blanc)] rounded-lg shadow border border-[var(--color-lin)] overflow-hidden hover:shadow-lg transition-shadow" data-astro-cid-zih4r22a> <img${addAttribute(
    recette2.hero_recette ? `https://nummy.arthurwicky.fr/api/files/Recette/${recette2.id}/${recette2.hero_recette}` : "https://via.placeholder.com/400x300?text=Recette",
    "src"
  )}${addAttribute(recette2.nom_recette, "alt")} class="w-full h-40 object-cover" data-astro-cid-zih4r22a> <div class="p-4 bg-[var(--color-lin)]" data-astro-cid-zih4r22a> <h3 class="p-body1 font-bold mb-2 text-[var(--color-noir)]" data-astro-cid-zih4r22a> ${recette2.nom_recette} </h3> <p class="p-body3 text-[var(--color-green)] mb-3" data-astro-cid-zih4r22a> ${recette2.pays_recette} </p> <div class="flex justify-between items-center text-[var(--color-green)] p-body3 mb-4" data-astro-cid-zih4r22a> <span data-astro-cid-zih4r22a>👥 ${recette2.personnes_recette}</span> <span data-astro-cid-zih4r22a>⏱️ ${recette2.temps_recette}min</span> </div> <a${addAttribute(`/recettes/${recette2.id}`, "href")} class="inline-block w-full text-center bg-[var(--color-green)] text-[var(--color-blanc)] px-4 py-2 rounded-full hover:opacity-90 transition-all button" data-astro-cid-zih4r22a>
Voir la recette
</a> </div> </article>`)} </div> </div> </section>`} <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 mt-20" data-astro-cid-zih4r22a> <div class="bg-[var(--color-blanc)] rounded-xl shadow-lg overflow-hidden" data-astro-cid-zih4r22a> <div class="p-2" data-astro-cid-zih4r22a> <h2 class="h2-header mb-6 text-[var(--color-noir)] flex items-center" data-astro-cid-zih4r22a> <span class="lg:pt-18 lg:pl-4 text-2xl mr-3" data-astro-cid-zih4r22a></span>
Avis et commentaires
</h2> <!-- Statistiques --> <div class="bg-[var(--color-lin)] rounded-lg p-6 mb-8" data-astro-cid-zih4r22a> <div class="flex flex-col md:flex-row items-center justify-between gap-6" data-astro-cid-zih4r22a> <div class="text-center" data-astro-cid-zih4r22a> <div class="text-4xl font-bold text-[var(--color-orange)]" data-astro-cid-zih4r22a> ${avisStats.moyenne} </div> <div class="flex items-center justify-center mt-1" data-astro-cid-zih4r22a> ${Array.from({ length: 5 }, (_, i) => renderTemplate`<span${addAttribute(`text-2xl ${i < Math.round(avisStats.moyenne) ? "text-[var(--color-orange)]" : "text-gray-300"}`, "class")} data-astro-cid-zih4r22a>
★
</span>`)} </div> <div class="p-body3 text-[var(--color-green)] mt-1" data-astro-cid-zih4r22a> ${avisStats.total} avis
</div> </div> <!-- Répartition --> <div class="flex-1 w-full md:ml-8" data-astro-cid-zih4r22a> ${Object.entries(avisStats.repartition).reverse().map(([stars, count]) => renderTemplate`<div class="flex items-center mb-2" data-astro-cid-zih4r22a> <span class="p-body3 text-[var(--color-noir)] w-8" data-astro-cid-zih4r22a> ${stars}★
</span> <div class="flex-1 mx-3 bg-[var(--color-argent)] rounded-full h-2" data-astro-cid-zih4r22a> <div class="bg-[var(--color-orange)] h-2 rounded-full transition-all duration-300"${addAttribute(`width: ${avisStats.total > 0 ? count / avisStats.total * 100 : 0}%`, "style")} data-astro-cid-zih4r22a></div> </div> <span class="p-body3 text-[var(--color-noir)] w-8" data-astro-cid-zih4r22a> ${count} </span> </div>`)} </div> </div> </div> <!-- formualire d'avis --> <div class="bg-[var(--color-lin)] bg-opacity-10 rounded-lg p-6 mb-8" data-astro-cid-zih4r22a> <h3 class="h3-header mb-4 text-[var(--color-noir)]" data-astro-cid-zih4r22a>
Donnez votre avis
</h3> <form id="avis-form" class="space-y-4" data-astro-cid-zih4r22a> <input type="hidden" name="recette_id"${addAttribute(recetteData.id, "value")} data-astro-cid-zih4r22a> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-zih4r22a> <div data-astro-cid-zih4r22a> <label for="nom_auteur" class="block p-body2 font-bold text-[var(--color-noir)] mb-2" data-astro-cid-zih4r22a>Votre nom *</label> <input type="text" id="nom_auteur" name="nom_auteur" required class="w-full px-4 py-3 border bg-white border-[var(--color-orange)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] p-body2" placeholder="Ex: Marie Dupont" data-astro-cid-zih4r22a> </div> <div data-astro-cid-zih4r22a> <label for="email_auteur" class="block p-body2 font-bold text-[var(--color-noir)] mb-2" data-astro-cid-zih4r22a>Votre email *</label> <input type="email" id="email_auteur" name="email_auteur" required class="w-full px-4 py-3 border bg-white border-[var(--color-orange)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] p-body2" placeholder="Ex: marie@email.com" data-astro-cid-zih4r22a> </div> </div> <!-- Étoiles --> <div data-astro-cid-zih4r22a> <label class="block p-body2 font-bold text-[var(--color-noir)] mb-2" data-astro-cid-zih4r22a>Votre note *</label> <div class="flex space-x-1" id="star-rating" data-astro-cid-zih4r22a> ${Array.from({ length: 5 }, (_, i) => renderTemplate`<button type="button"${addAttribute(i + 1, "data-rating")} class="star-btn text-6xl text-gray-300 hover:text-[var(--color-orange)] focus:outline-none transition-colors" data-astro-cid-zih4r22a>
★
</button>`)} </div> <input type="hidden" id="note" name="note" required data-astro-cid-zih4r22a> </div> <!-- Commentaire --> <div data-astro-cid-zih4r22a> <label for="commentaire" class="block p-body2 font-bold text-[var(--color-noir)] mb-2" data-astro-cid-zih4r22a>Votre commentaire *</label> <textarea id="commentaire" name="commentaire" required rows="4" class="w-full px-4 py-3 border bg-white border-[var(--color-orange)] rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)] p-body2" placeholder="Partagez votre expérience avec cette recette..." data-astro-cid-zih4r22a></textarea> </div> <!-- Messages --> <div id="avis-success" class="flex justify-center items-center align-middle hidden bg-[var(--color-green)] bg-opacity-20 border border-[var(--color-vert)] text-[var(--color-lin)] px-4 py-3 rounded p-body2" data-astro-cid-zih4r22a>
Merci ! Votre avis a été publié avec succès.
</div> <div id="avis-error" class="hidden bg-[var(--color-rouge)] bg-opacity-20 border border-[var(--color-rouge)] text-[var(--color-rouge)] px-4 py-3 rounded p-body2" data-astro-cid-zih4r22a> <span id="avis-error-text" data-astro-cid-zih4r22a>Une erreur s'est produite.</span> </div> <button type="submit" id="avis-submit" class="mt-3 p-button lg:flex justify-center items-center lg:mx-60 w-full lg:w-1/2 bg-[var(--color-orange)] uppercase text-[var(--color-blanc)] px-6 py-3 rounded-full hover:opacity-90 transition-all button disabled:opacity-50" data-astro-cid-zih4r22a> <span id="avis-submit-text" data-astro-cid-zih4r22a>Publier mon avis</span> <span id="avis-submit-loading" class="hidden" data-astro-cid-zih4r22a>Publication en cours...</span> </button> </form> </div> <div data-astro-cid-zih4r22a> <h3 class="h3-header mb-4 text-[var(--color-noir)]" data-astro-cid-zih4r22a>
Commentaires (${avisList.length})
</h3> ${avisList.length > 0 ? renderTemplate`<div class="space-y-6" data-astro-cid-zih4r22a> ${avisList.map((avis) => renderTemplate`<div class="border-b border-[var(--color-lin)] pb-6 last:border-b-0" data-astro-cid-zih4r22a> <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-0" data-astro-cid-zih4r22a> <div class="flex items-center space-x-3" data-astro-cid-zih4r22a> <div class="w-12 h-12 bg-[var(--color-orange)] rounded-full flex items-center justify-center text-[var(--color-blanc)] font-bold" data-astro-cid-zih4r22a> ${avis.nom_auteur.charAt(0).toUpperCase()} </div> <div data-astro-cid-zih4r22a> <h4 class="p-body1 font-bold text-[var(--color-noir)]" data-astro-cid-zih4r22a> ${avis.nom_auteur} </h4> <div class="flex items-center mt-1" data-astro-cid-zih4r22a> ${Array.from({ length: 5 }, (_, i) => renderTemplate`<span${addAttribute(`text-lg ${i < avis.note ? "text-[var(--color-orange)]" : "text-gray-300"}`, "class")} data-astro-cid-zih4r22a>
★
</span>`)} </div> </div> </div> <span class="p-body3 text-white" data-astro-cid-zih4r22a> ${new Date(avis.created).toLocaleDateString("fr-FR")} </span> </div> <p class="px-3 p-body2 text-[var(--color-noir)]" data-astro-cid-zih4r22a> ${avis.commentaire} </p> </div>`)} </div>` : renderTemplate`<div class="text-center py-12 text-[var(--color-green)]" data-astro-cid-zih4r22a> <div class="text-6xl mb-4" data-astro-cid-zih4r22a>💬</div> <p class="p-body1" data-astro-cid-zih4r22a>
Aucun avis pour le moment. Soyez le premier à donner votre
                  avis !
</p> </div>`} </div> </div> </div> </div>  <section class="bg-gradient-to-r from-[var(--color-green)] to-[var(--color-bleu)] text-[var(--color-blanc)] py-12" data-astro-cid-zih4r22a> <div class="px-4 md:px-20 text-center" data-astro-cid-zih4r22a> <h2 class="h2-header mb-4" data-astro-cid-zih4r22a>Vous avez aimé cette recette ?</h2> <p class="p-body1 mb-6" data-astro-cid-zih4r22a>
Partagez vos propres créations culinaires avec notre communauté
</p> <div class="space-x-4" data-astro-cid-zih4r22a> <a href="/recettes/ajouter" class="inline-block bg-[var(--color-blanc)] text-[var(--color-green)] ml-3 px-12 py-3 mb-3 rounded-full hover:opacity-90 transition-all button" data-astro-cid-zih4r22a>
Ajouter ma recette
</a> <a href="/recettes" class="inline-block border-2 border-[var(--color-blanc)] text-[var(--color-blanc)] px-6 py-3 rounded-full hover:bg-[var(--color-blanc)] hover:text-[var(--color-green)] transition-all button" data-astro-cid-zih4r22a>
Explorer d'autres recettes
</a> </div> </div> </section> ` })} ${renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/[id].astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/[id].astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/[id].astro";
const $$url = "/recettes/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
