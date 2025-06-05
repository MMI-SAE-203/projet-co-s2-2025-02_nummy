import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, u as unescapeHTML } from '../../chunks/astro/server_Ds7egGoB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CgWoF0WD.mjs';
import { p as pb, g as getRecettesByProduit, a as getAllProduits } from '../../chunks/backend_DaEiakY9.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  try {
    const allProducts = await getAllProduits();
    return allProducts.map((product) => ({
      params: { id: product.id },
      props: { product }
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
  const { product } = Astro2.props;
  let produit = product;
  if (!produit) {
    try {
      produit = await pb.collection("Produit").getOne(id, {
        expand: "recettes_produit"
      });
    } catch (error) {
      console.error("Error al obtener el producto:", error);
      return Astro2.redirect("/continents");
    }
  }
  if (id === "fallback") {
    return Astro2.redirect("/continents");
  }
  let recettesAssociees = [];
  try {
    console.log(`\u{1F50D} En cherchant des recettes ${produit.id}...`);
    recettesAssociees = await getRecettesByProduit(produit.id);
    console.log(`\u2705 Trouv\xE9s ${recettesAssociees.length} recettes associ\xE9s`);
  } catch (error) {
    console.error("Error recettes:", error);
  }
  let produitsSimilaires = [];
  try {
    const allProducts = await getAllProduits();
    produitsSimilaires = allProducts.filter(
      (p) => p.id !== produit.id && p.continent_produit === produit.continent_produit
    ).slice(0, 6);
  } catch (error) {
    console.error("Error al obtener productos similares:", error);
  }
  const imageUrl = produit.img_produit ? `https://nummy.arthurwicky.fr/api/files/Produit/${produit.id}/${produit.img_produit}` : "https://via.placeholder.com/800x400?text=Nummy";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classBody": "colorPage colorNav", "title": `${produit.nom_produit} | Nummy`, "description": `D\xE9couvrez ${produit.nom_produit}, un produit typique de ${produit.pays_produit}` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24"> <div class="bg-white rounded-xl shadow-lg overflow-hidden"> <div class="md:flex"> <div class="md:flex-shrink-0 md:w-1/2"> <img${addAttribute(imageUrl, "src")} loading="lazy"${addAttribute(produit.nom_produit, "alt")} class="h-full w-full object-cover md:h-full md:w-full max-h-[500px]" onerror="this.onerror=null; this.src='https://via.placeholder.com/800x400?text=Nummy';"> </div> <div class="p-8 py-25 md:w-1/2"> <div class="flex items-center"> <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-400 mr-2"> ${produit.continent_produit} </span> <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800"> ${produit.pays_produit} </span> ${produit.favori_produit && renderTemplate`<span class="ml-auto text-yellow-400 text-2xl">★</span>`} </div> <h1 class="mt-4 text-3xl text-gray-900 tracking-tight"> ${produit.nom_produit} </h1> <p class="mt-4 text-black text-lg leading-relaxed">${unescapeHTML(produit.description_produit)}</p> <div class="mt-8 flex gap-4"> <!-- debuguer :,3 j'en peux plus  --> <!-- <div class="w-full mb-4 bg-yellow-100 p-2 rounded">
              Condición: {produit.site_produit && produit.site_produit.trim() !== '' ? "VERDADERA - Botón debe aparecer" : "FALSA - Botón NO aparece"}
            </div> --> ${produit.site_produit && produit.site_produit.trim() !== "" && renderTemplate`<a${addAttribute(produit.site_produit, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[var(--color-orange)] hover:bg-orange-300 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg>
Visiter le site
</a>`} <a${addAttribute(`https://www.google.com/maps/search/${encodeURIComponent(produit.nom_produit + " " + produit.pays_produit)}`, "href")} target="_blank" class="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
Trouver en magasin
</a> </div> </div> </div> </div> <!-- Hmmm délicieux :D / recettes --> <div class="mt-16"> <h2 class="text-3xl h3-header text-gray-900 mb-4">
Recettes avec ${produit.nom_produit} </h2> <hr class="bg-[var(--color-orange)] h-2 w-1/2 mb-8 border-none"> ${recettesAssociees.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${recettesAssociees.map((recette) => {
    const recetteImageUrl = recette.hero_recette ? `https://nummy.arthurwicky.fr/api/files/Recette/${recette.id}/${recette.hero_recette}` : "https://via.placeholder.com/400x300?text=Recette";
    return renderTemplate`<a${addAttribute(`/recettes/${recette.id}`, "href")} class="block group"> <div class="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1"> <img${addAttribute(recetteImageUrl, "src")}${addAttribute(recette.nom_recette, "alt")} loading="lazy" class="w-full h-48 object-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Recette';"> <div class="p-6"> <h3 class="text-lg font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors"> ${recette.nom_recette} </h3> <div class="flex items-center text-sm text-gray-600 mb-4"> <span class="flex items-center mr-4"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> ${recette.temps_recette} min
</span> <span class="flex items-center"> <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path> </svg> ${recette.personnes_recette} pers.
</span> </div> <div class="flex items-center justify-between"> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"> ${recette.pays_recette} </span> ${recette.favori && renderTemplate`<span class="text-yellow-400 text-lg">★</span>`} </div> </div> </div> </a>`;
  })} </div>` : renderTemplate`<div class="bg-gray-50 rounded-xl p-8 text-center"> <div class="text-gray-400 mb-4"> <svg class="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path> </svg> </div> <h3 class="text-lg font-medium text-gray-900 mb-2">
Aucune recette disponible
</h3> <p class="text-gray-500 mb-4">
Nous n'avons pas encore de recettes utilisant${" "} ${produit.nom_produit}.
</p> <a href="/recettes/ajouter" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[var(--color-orange)] hover:bg-orange-300 transition-colors">
Ajouter une recette
</a> </div>`} </div> <!-- button retour recettes--> <div class="mt-8 text-center"> <a href="/recettes" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[var(--color-orange)] hover:bg-green-600 transition-colors">
Voir toutes les recettes
</a> </div> <!-- Productos que se parecenn --> <div class="mt-16"> <h2 class="text-3xl h3-header mt-8 text-gray-900 mb-3">Produits similaires</h2> <hr class="bg-[var(--color-orange)] h-2 w-1/2 mb-8 border-none"> ${produitsSimilaires.length > 0 ? renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> ${produitsSimilaires.map((p) => renderTemplate`<a${addAttribute(`/continents/${p.id}`, "href")} class="block group"> <div class="bg-white rounded-lg shadow border border-gray-200 overflow-hidden h-full flex flex-col transition-transform duration-300 group-hover:shadow-lg group-hover:-translate-y-1"> <img${addAttribute(
    p.img_produit ? `https://nummy.arthurwicky.fr/api/files/Produit/${p.id}/${p.img_produit}` : "https://via.placeholder.com/400x200?text=Nummy",
    "src"
  )}${addAttribute(p.nom_produit, "alt")} loading="lazy" class="w-full h-48 object-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x200?text=Nummy';"> <div class="p-4 flex-1 flex flex-col"> <h3 class="text-lg font-semibold mb-1">${p.nom_produit}</h3> <p class="text-sm text-gray-500 mb-4">${p.pays_produit}</p> <div class="mt-auto flex justify-between items-center"> <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"> ${p.continent_produit} </span> ${p.favori_produit && renderTemplate`<span class="text-yellow-400 text-lg">★</span>`} </div> </div> </div> </a>`)} </div>` : renderTemplate`<p class="text-gray-500 italic">Aucun produit similaire trouvé.</p>`} </div> <!-- we are back baby --> <div class="mt-12 text-center"> <a href="/continents" class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-[var(--color-orange)] cursor-pointer transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path> </svg>
Retour aux produits
</a> </div> </div> ` })}`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/continents/[id].astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/continents/[id].astro";
const $$url = "/continents/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
