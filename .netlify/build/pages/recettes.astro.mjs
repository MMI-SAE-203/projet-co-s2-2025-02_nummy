import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LuwkeAM4.mjs';
import 'clsx';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_aOvdlN-7.mjs';
import { d as getAllRecettes } from '../chunks/backend_DaEiakY9.mjs';
import { A as AsieIcon, a as AfriqueIcon, b as AmeriqueIcon, c as AmeriqueLFIcon, E as EuropeIcon } from '../chunks/EuropeF_BWmBBDpy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Recettes = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Recettes;
  const { recette } = Astro2.props;
  const heroUrl = recette.hero_recette ? `https://nummy.arthurwicky.fr/api/files/Recette/${recette.id}/${recette.hero_recette}` : "https://via.placeholder.com/400x300?text=Recette";
  return renderTemplate`${maybeRenderHead()}<article class="bg-[var(--color-lin)] rounded-lg shadow border border-[var(--color-lin)] overflow-hidden hover:shadow-lg transition-shadow"> <div class="relative"> <img${addAttribute(heroUrl, "src")}${addAttribute(recette.nom_recette, "alt")} class="w-full h-48 object-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Recette';"> ${recette.favori && renderTemplate`<div class="absolute top-2 right-2 bg-[var(--color-orange)] text-[var(--color-blanc)] px-2 py-1 rounded-full p-body3 font-bold">
⭐ Favori
</div>`} <div class="absolute top-2 left-2 bg-[var(--color-orange)] bg-opacity-90 text-white px-3 py-1 rounded-full p-body3 font-bold"> ${recette.continent_recette} </div> </div> <div class="p-4 bg-[var(--color-lin)]"> <h3 class="p-body1 font-bold mb-2 text-[var(--color-noir)]">${recette.nom_recette}</h3> <p class="p-body3 text-[var(--color-green)] mb-3">${recette.pays_recette}</p> <div class="flex justify-between items-center text-[var(--color-green)] p-body3 mb-4"> <div class="flex items-center"> <span class="mr-1">👥</span> <span>${recette.personnes_recette} pers.</span> </div> <div class="flex items-center"> <span class="mr-1">⏱️</span> <span>${recette.temps_recette} min</span> </div> </div> ${recette.produits_recette && recette.produits_recette.length > 0 && renderTemplate`<div class="mb-4"> <p class="p-body3 text-[var(--color-green)] mb-2">Produits utilisés:</p> <div class="flex flex-wrap gap-1"> ${recette.produits_recette.slice(0, 3).map((produit) => renderTemplate`<span class="bg-[var(--color-lin)] text-[var(--color-green)] px-2 py-1 rounded text-xs"> ${produit.nom_produit} </span>`)} ${recette.produits_recette.length > 3 && renderTemplate`<span class="bg-[var(--color-lin)] text-[var(--color-green)] px-2 py-1 rounded text-xs">
+${recette.produits_recette.length - 3} </span>`} </div> </div>`} <a${addAttribute(`/recettes/${recette.id}`, "href")} class="inline-block w-full text-center bg-[var(--color-orange)] text-[var(--color-blanc)] px-4 py-2 rounded-full hover:opacity-90 transition-all button">
Voir la recette
</a> </div> </article>`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/components/Recettes.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allRecettes = await getAllRecettes();
  const { searchParams } = Astro2.url;
  const page = searchParams.get("page") || "1";
  const continent = searchParams.get("continent") || "";
  const currentPage = parseInt(page, 10);
  const itemsPerPage = 6;
  let filtered = [...allRecettes];
  if (continent) {
    const continentMap = {
      asie: "Asie",
      afrique: "Afrique",
      amerique: "Am\xE9rique du Nord",
      "amerique-lf": "Am\xE9rique Latine",
      europe: "Europe"
    };
    const dbValue = continentMap[continent];
    if (dbValue) {
      filtered = filtered.filter((r) => r.continent_recette === dbValue);
    }
  }
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRecettes = filtered.slice(startIndex, endIndex);
  function getPageUrl(pageNum) {
    const url = new URL(Astro2.url);
    url.searchParams.set("page", pageNum.toString());
    return url.pathname + url.search;
  }
  const featuredRecettes = allRecettes.filter((r) => r.favori === true).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classBody": "colorPage colorNav", "title": "Recettes du monde | Nummy", "data-astro-cid-clgigdbs": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-[var(--color-green)] text-[var(--color-blanc)] p-6 mt-22" data-astro-cid-clgigdbs> <h1 class="text-5xl font-light pt-6 -tracking-tighter" data-astro-cid-clgigdbs>
Recettes<br data-astro-cid-clgigdbs>du monde
</h1> <h2 class="p-body2 pt-6 lg:w-90" data-astro-cid-clgigdbs>
Découvrez des recettes authentiques du monde entier et partagez vos
      propres créations culinaires !
</h2> <!-- Filtres de continents --> <div class="mt-2" data-astro-cid-clgigdbs> <div class="flex overflow-x-auto gap-6 py-4 hide-scrollbar" data-astro-cid-clgigdbs> <a href="/recettes"${addAttribute(`flex-shrink-0 w-32 ${!continent ? "bg-[var(--color-blanc)] bg-opacity-90" : "bg-[var(--color-lin)]"} rounded-xl px-6 py-2 flex flex-col items-center text-[var(--color-noir)] hover:shadow-md transition-shadow`, "class")} data-astro-cid-clgigdbs> <div class="rounded-full w-20 h-20 flex items-center justify-center mb-1" data-astro-cid-clgigdbs> <span class="text-4xl" data-astro-cid-clgigdbs>🌍</span> </div> <span class="p-body2 text-center uppercase font-bold" data-astro-cid-clgigdbs>Toutes</span> </a> ${[
    { name: "Asie", urlValue: "asie", icon: AsieIcon },
    { name: "Afrique", urlValue: "afrique", icon: AfriqueIcon },
    { name: "Am\xE9rique", urlValue: "amerique", icon: AmeriqueIcon },
    { name: "Am\xE9rique Latine", urlValue: "amerique-lf", icon: AmeriqueLFIcon },
    { name: "Europe", urlValue: "europe", icon: EuropeIcon }
  ].map((item) => renderTemplate`<a${addAttribute(`/recettes?continent=${item.urlValue}`, "href")}${addAttribute(`flex-shrink-0 w-32 ${continent === item.urlValue ? "bg-[var(--color-blanc)] bg-opacity-90" : "bg-[var(--color-lin)]"} rounded-xl px-6 py-2 flex flex-col items-center text-[var(--color-noir)] hover:shadow-md transition-shadow`, "class")} data-astro-cid-clgigdbs> <div class="rounded-full w-20 h-20 flex items-center justify-center mb-1" data-astro-cid-clgigdbs> ${renderComponent($$result2, "Picture", $$Picture, { "src": item.icon, "alt": item.name, "loading": "lazy", "width": 60, "height": 60, "class": "w-15 h-15 object-cover", "data-astro-cid-clgigdbs": true })} </div> <span class="p-body2 text-center uppercase font-bold" data-astro-cid-clgigdbs>${item.name}</span> </a>`)} </div> </div> </div>  <div class="px-4 md:px-20 py-4" data-astro-cid-clgigdbs> <div class="flex flex-col justify-between" data-astro-cid-clgigdbs> <div data-astro-cid-clgigdbs> <h2 class="lg:text-4xl h2-header pt-12 pb-2" data-astro-cid-clgigdbs>Nos recettes</h2> <hr class="w-1/2 h-[8px] bg-[var(--color-green)] border-none mb-8" data-astro-cid-clgigdbs> <p class="p-body2 text-[var(--color-green)]" data-astro-cid-clgigdbs> ${totalItems} recette${totalItems !== 1 ? "s" : ""} trouvée${totalItems !== 1 ? "s" : ""} ${continent && ` pour ${[
    { urlValue: "asie", name: "l'Asie" },
    { urlValue: "afrique", name: "l'Afrique" },
    { urlValue: "amerique", name: "l'Am\xE9rique du Nord" },
    { urlValue: "amerique-lf", name: "l'Am\xE9rique Latine" },
    { urlValue: "europe", name: "l'Europe" }
  ].find((c) => c.urlValue === continent)?.name || continent}`} </p> </div> <!-- Bouton ajouter recette --> <a href="/recettes/ajouter" class="bg-[var(--color-green)] text-[var(--color-blanc)] px-6 py-3 lg:mt-5 mt-2 rounded-full hover:opacity-90 transition-all button flex items-center w-60" data-astro-cid-clgigdbs> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-clgigdbs> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-clgigdbs></path> </svg>
Ajouter une recette
</a> </div> </div>  <div class="px-4 md:px-20" data-astro-cid-clgigdbs> ${currentRecettes.length === 0 ? renderTemplate`<div class="text-center py-10" data-astro-cid-clgigdbs> <p class="p-body2 text-[var(--color-green)] opacity-75" data-astro-cid-clgigdbs>
Aucune recette trouvée pour cette sélection.
</p> <a href="/recettes/ajouter" class="inline-block mt-4 bg-[var(--color-green)] text-[var(--color-blanc)] px-6 py-3 rounded-full hover:opacity-90 transition-all button" data-astro-cid-clgigdbs>
Soyez le premier à ajouter une recette !
</a> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-clgigdbs> ${currentRecettes.map((recette) => renderTemplate`${renderComponent($$result2, "Recettes", $$Recettes, { "recette": recette, "data-astro-cid-clgigdbs": true })}`)} </div>`} </div> ${totalPages > 1 && renderTemplate`<div class="flex justify-center items-center space-x-2 mt-8 mb-8" data-astro-cid-clgigdbs> ${validCurrentPage > 1 && renderTemplate`<a${addAttribute(getPageUrl(validCurrentPage - 1), "href")} class="bg-[var(--color-argent)] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[var(--color-lin)] button transition-colors" title="Page précédente" data-astro-cid-clgigdbs>
&laquo;
</a>`} ${Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((num) => renderTemplate`<a${addAttribute(getPageUrl(num), "href")}${addAttribute(`rounded-full w-10 h-10 flex justify-center items-center button transition-colors ${num === validCurrentPage ? "bg-[var(--color-green)] text-[var(--color-blanc)]" : "bg-[var(--color-argent)] hover:bg-[var(--color-lin)] text-[var(--color-noir)]"}`, "class")}${addAttribute(`Page ${num}`, "title")} data-astro-cid-clgigdbs> ${num} </a>`)} ${validCurrentPage < totalPages && renderTemplate`<a${addAttribute(getPageUrl(validCurrentPage + 1), "href")} class="bg-[var(--color-argent)] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[var(--color-lin)] button transition-colors" title="Page suivante" data-astro-cid-clgigdbs>
&raquo;
</a>`} </div>`} ${featuredRecettes.length > 0 && renderTemplate`<section class="bg-[var(--color-lin)] py-12 mt-25" data-astro-cid-clgigdbs> <div class="px-4 md:px-20" data-astro-cid-clgigdbs> <h2 class="h3-header lg:text-4xl text-center mb-2 text-[var(--color-noir)]" data-astro-cid-clgigdbs>
Recettes favorites
</h2> <p class="p-body2 text-[var(--color-green)] text-center mb-8" data-astro-cid-clgigdbs>
Les recettes les plus appréciées par notre communauté
</p> <div class="grid grid-cols-1 md:grid-cols-3 gap-6" data-astro-cid-clgigdbs> ${featuredRecettes.map((recette) => renderTemplate`${renderComponent($$result2, "Recettes", $$Recettes, { "recette": recette, "data-astro-cid-clgigdbs": true })}`)} </div> </div> </section>`} <section class="bg-gradient-to-r from-[var(--color-green)] to-[var(--color-bleu)] text-[var(--color-blanc)] py-12 mt-10" data-astro-cid-clgigdbs> <div class="px-4 md:px-20 text-center" data-astro-cid-clgigdbs> <h2 class="h2-header mb-4" data-astro-cid-clgigdbs>Partagez vos créations culinaires</h2> <p class="p-body1 mb-6" data-astro-cid-clgigdbs>Rejoignez notre communauté de passionnés de cuisine du monde</p> <div class="space-x-4" data-astro-cid-clgigdbs> <a href="/recettes/ajouter" class="inline-block bg-[var(--color-blanc)] text-[var(--color-green)] px-14 py-3 rounded-full hover:opacity-90 transition-all button ml-4 mb-4" data-astro-cid-clgigdbs>
Ajouter ma recette
</a> <a href="/etablissements" class="inline-block border-2 border-[var(--color-blanc)] text-[var(--color-blanc)] px-6 py-3 rounded-full hover:bg-[var(--color-blanc)] hover:text-[var(--color-green)] transition-all button" data-astro-cid-clgigdbs>
Découvrir les établissements
</a> </div> </div> </section> ` })} `;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/index.astro";
const $$url = "/recettes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
