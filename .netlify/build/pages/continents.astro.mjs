import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LuwkeAM4.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_aOvdlN-7.mjs';
import { a as getAllProduits, b as getEtablissements } from '../chunks/backend_DaEiakY9.mjs';
import { A as AsieIcon, a as AfriqueIcon, b as AmeriqueIcon, c as AmeriqueLFIcon, E as EuropeIcon } from '../chunks/EuropeF_BWmBBDpy.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { searchParams } = Astro2.url;
  const page = searchParams.get("page") || "1";
  const continent = searchParams.get("continent") || "";
  const type = searchParams.get("type") || "";
  const currentPage = parseInt(page, 10);
  const itemsPerPage = 9;
  const allProducts = await getAllProduits();
  const allRestaurants = await getEtablissements();
  let filtered = [...allProducts];
  if (continent) {
    const continentMap = {
      "asie": "Asie",
      "afrique": "Afrique",
      "amerique": "Am\xE9rique du Nord",
      "amerique-lf": "Am\xE9rique Latine",
      "europe": "Europe"
    };
    const dbValue = continentMap[continent];
    if (dbValue) {
      filtered = filtered.filter((p) => p.continent_produit === dbValue);
    }
  }
  if (type) {
    filtered = filtered.filter((p) => p.type_produit === type);
  }
  const totalItems = filtered.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const validCurrentPage = Math.max(1, Math.min(currentPage, totalPages || 1));
  const startIndex = (validCurrentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filtered.slice(startIndex, endIndex);
  function getPageUrl(pageNum) {
    const url = new URL(Astro2.url);
    url.searchParams.set("page", pageNum.toString());
    return url.pathname + url.search;
  }
  function getFilterUrl(filterType, filterValue) {
    const url = new URL(Astro2.url);
    url.searchParams.delete("page");
    if (filterType === "continent") {
      url.searchParams.set("continent", filterValue);
      url.searchParams.delete("type");
    } else if (filterType === "type") {
      url.searchParams.set("type", filterValue);
      url.searchParams.delete("continent");
    }
    return url.pathname + url.search;
  }
  const restaurantsArray = Array.isArray(allRestaurants) ? allRestaurants : [];
  const randomRestaurants = restaurantsArray.sort(() => 0.5 - Math.random()).slice(0, 6);
  const productStats = {
    total: allProducts.length,
    byContinent: {
      asie: allProducts.filter((p) => p.continent_produit === "Asie").length,
      afrique: allProducts.filter((p) => p.continent_produit === "Afrique").length,
      amerique: allProducts.filter((p) => p.continent_produit === "Am\xE9rique du Nord").length,
      ameriqueLf: allProducts.filter((p) => p.continent_produit === "Am\xE9rique Latine").length,
      europe: allProducts.filter((p) => p.continent_produit === "Europe").length
    },
    byType: [...new Set(allProducts.map((p) => p.type_produit))].filter((t) => t)
  };
  const featuredProducts = allProducts.filter((p) => p.favori_produit === true).slice(0, 3);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classBody": "colorPage colorNav", "title": "Produits par continent | Nummy", "data-astro-cid-f2ppc372": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gradient-to-t from-[var(--color-orange)] to-orange-300 text-[var(--color-blanc)] p-6 mt-22" data-astro-cid-f2ppc372> <h1 class="text-5xl font-light pt-6 -tracking-tighter" data-astro-cid-f2ppc372>
Produits<br data-astro-cid-f2ppc372>par continent
</h1> <h2 class="p-body2 pt-6 lg:w-90 lg:p-body-1" data-astro-cid-f2ppc372>
Explorez les 5 continents à la recherche de vos saveurs préférées et
      renouez avec les produits de votre enfance !
</h2> <div class="mt-2" data-astro-cid-f2ppc372> <div class="flex overflow-x-auto gap-6 py-2 hide-scrollbar" data-astro-cid-f2ppc372> <a href="/continents"${addAttribute(`flex-shrink-0 w-32 ${!continent && !type ? "bg-[var(--color-blanc)] bg-opacity-90" : "bg-[var(--color-lin)]"} rounded-xl px-6 py-2 flex flex-col items-center text-[var(--color-noir)] hover:shadow-md transition-shadow`, "class")} data-astro-cid-f2ppc372> <div class="rounded-full w-20 h-20 flex items-center justify-center mb-1" data-astro-cid-f2ppc372> <span class="text-4xl" data-astro-cid-f2ppc372>🌍</span> </div> <span class="p-body2 text-center uppercase font-bold" data-astro-cid-f2ppc372>Tous</span> </a> ${[
    { name: "Asie", urlValue: "asie", icon: AsieIcon },
    { name: "Afrique", urlValue: "afrique", icon: AfriqueIcon },
    { name: "Am\xE9rique", urlValue: "amerique", icon: AmeriqueIcon },
    { name: "Am\xE9rique Latine", urlValue: "amerique-lf", icon: AmeriqueLFIcon },
    { name: "Europe", urlValue: "europe", icon: EuropeIcon }
  ].map((item) => renderTemplate`<a${addAttribute(getFilterUrl("continent", item.urlValue), "href")}${addAttribute(`flex-shrink-0 w-32 ${continent === item.urlValue ? "bg-[var(--color-blanc)] bg-opacity-90" : "bg-[var(--color-lin)]"} rounded-xl px-6 py-2 flex flex-col items-center text-[var(--color-noir)] hover:shadow-md transition-shadow`, "class")} data-astro-cid-f2ppc372> <div class="rounded-full w-20 h-20 flex items-center justify-center mb-1" data-astro-cid-f2ppc372> ${renderComponent($$result2, "Picture", $$Picture, { "src": item.icon, "alt": item.name, "width": 60, "height": 60, "class": "w-15 h-15 object-cover", "data-astro-cid-f2ppc372": true })} </div> <span class="p-body2 text-center uppercase font-bold" data-astro-cid-f2ppc372>${item.name}</span> </a>`)} </div> </div> </div> <div class="px-4 md:px-20 py-4" data-astro-cid-f2ppc372> <h2 class="lg:text-4xl h2-header pt-12 pb-2" data-astro-cid-f2ppc372>Nos produits</h2> <hr class="w-1/2 h-[8px] bg-[var(--color-orange)] border-none mb-6" data-astro-cid-f2ppc372> <p class="p-body2 text-[var(--color-green)]" data-astro-cid-f2ppc372> ${totalItems} produit${totalItems !== 1 ? "s" : ""} trouvé${totalItems !== 1 ? "s" : ""} ${continent && ` pour ${[
    { urlValue: "asie", name: "l'Asie" },
    { urlValue: "afrique", name: "l'Afrique" },
    { urlValue: "amerique", name: "l'Am\xE9rique du Nord" },
    { urlValue: "amerique-lf", name: "l'Am\xE9rique Latine" },
    { urlValue: "europe", name: "l'Europe" }
  ].find((c) => c.urlValue === continent)?.name || continent}`} ${type && ` de type "${type}"`} </p> <p class="p-body3 text-[var(--color-green)] opacity-75" data-astro-cid-f2ppc372>
Page ${validCurrentPage} sur ${totalPages} - Affichage de ${currentProducts.length} produits
</p> </div> <div class="px-4 md:px-20" data-astro-cid-f2ppc372> ${currentProducts.length === 0 ? renderTemplate`<div class="text-center py-10" data-astro-cid-f2ppc372> <p class="p-body2 text-[var(--color-green)] opacity-75" data-astro-cid-f2ppc372>Aucun produit trouvé pour cette sélection.</p> </div>` : renderTemplate`<div class="grid grid-cols-2 md:grid-cols-3 gap-6" data-astro-cid-f2ppc372> ${currentProducts.map((product) => renderTemplate`<article class="bg-[var(--color-blanc)] rounded-lg shadow border border-[var(--color-lin)] overflow-hidden hover:shadow-lg transition-shadow" data-astro-cid-f2ppc372> <img${addAttribute(product.img_produit ? `https://nummy.arthurwicky.fr/api/files/Produit/${product.id}/${product.img_produit}` : "https://via.placeholder.com/400x300?text=Nummy", "src")}${addAttribute(product.nom_produit, "alt")} class="w-full h-40 object-cover" onerror="this.onerror=null; this.src='https://via.placeholder.com/400x300?text=Nummy';" data-astro-cid-f2ppc372> <div class="p-4" data-astro-cid-f2ppc372> <h3 class="p-body1 font-bold mb-2 text-[var(--color-noir)]" data-astro-cid-f2ppc372>${product.nom_produit}</h3> <p class="p-body3 text-[var(--color-green)] mb-3" data-astro-cid-f2ppc372>${product.pays_produit}</p> <a${addAttribute(`/continents/${product.id}`, "href")} class="inline-block w-full uppercase text-center bg-[var(--color-green)] text-[var(--color-blanc)] px-4 py-2 rounded-full hover:opacity-90 transition-all button text-[12px]" data-astro-cid-f2ppc372>
En savoir plus
</a> </div> </article>`)} </div>`} </div> ${totalPages > 1 && renderTemplate`<div class="flex justify-center items-center space-x-2 mt-8 mb-8" data-astro-cid-f2ppc372> ${validCurrentPage > 1 && renderTemplate`<a${addAttribute(getPageUrl(validCurrentPage - 1), "href")} class="bg-[var(--color-argent)] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[var(--color-lin)] button transition-colors" title="Page précédente" data-astro-cid-f2ppc372>
&laquo;
</a>`} ${Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((num) => renderTemplate`<a${addAttribute(getPageUrl(num), "href")}${addAttribute(`rounded-full w-10 h-10 flex justify-center items-center button transition-colors ${num === validCurrentPage ? "bg-[var(--color-orange)] text-[var(--color-blanc)]" : "bg-[var(--color-argent)] hover:bg-[var(--color-lin)] text-[var(--color-noir)]"}`, "class")}${addAttribute(`Page ${num}`, "title")} data-astro-cid-f2ppc372> ${num} </a>`)} ${validCurrentPage < totalPages && renderTemplate`<a${addAttribute(getPageUrl(validCurrentPage + 1), "href")} class="bg-[var(--color-argent)] rounded-full w-10 h-10 flex justify-center items-center hover:bg-[var(--color-lin)] button transition-colors" title="Page suivante" data-astro-cid-f2ppc372>
&raquo;
</a>`} </div>`} ${featuredProducts.length > 0 && renderTemplate`<section class="py-12 bg-[var(--color-lin)]" data-astro-cid-f2ppc372> <div class="px-4 md:px-20" data-astro-cid-f2ppc372> <h2 class="h3-header text-center mb-2 text-[var(--color-noir)]" data-astro-cid-f2ppc372>Nos Coups de cœur</h2> <p class="p-body2 text-[var(--color-green)] text-center mb-8" data-astro-cid-f2ppc372>Nos produits favoris sélectionnés pour vous</p> <div class="grid grid-cols-2 md:grid-cols-3 gap-6" data-astro-cid-f2ppc372> ${featuredProducts.map((product) => renderTemplate`<article class="bg-[var(--color-blanc)] rounded-lg shadow-lg border border-[var(--color-lin)] overflow-hidden hover:shadow-xl transition-shadow relative" data-astro-cid-f2ppc372> <div class="absolute top-2 right-2 bg-[var(--color-orange)] text-[var(--color-blanc)] px-2 py-1 rounded-full p-body3 font-bold" data-astro-cid-f2ppc372>
⭐ Coup de cœur
</div> <img${addAttribute(product.img_produit ? `https://nummy.arthurwicky.fr/api/files/Produit/${product.id}/${product.img_produit}` : "https://via.placeholder.com/400x300?text=Nummy", "src")}${addAttribute(product.nom_produit, "alt")} class="w-full h-48 object-cover" data-astro-cid-f2ppc372> <div class="p-4" data-astro-cid-f2ppc372> <h3 class="p-body1 font-bold mb-2 text-[var(--color-noir)]" data-astro-cid-f2ppc372>${product.nom_produit}</h3> <p class="p-body3 text-[var(--color-green)] mb-3" data-astro-cid-f2ppc372>${product.pays_produit}</p> <a${addAttribute(`/continents/${product.id}`, "href")} class="inline-block uppercase w-full text-center bg-[var(--color-orange)] text-[var(--color-blanc)] px-4 py-2 rounded-full hover:opacity-90 transition-all text-[12px] font-bold" data-astro-cid-f2ppc372>
Découvrir maintenant
</a> </div> </article>`)} </div> </div> </section>`} <section class="py-12 mt-12" data-astro-cid-f2ppc372> <div class="px-4 md:px-20" data-astro-cid-f2ppc372> <h2 class="h2-header text-center mb-3 text-[var(--color-noir)] uppercase" data-astro-cid-f2ppc372>Total de produits</h2> <div class="flex justify-center mb-8 lg:mb-12" data-astro-cid-f2ppc372> <hr class="w-1/2 h-[6px] border-0 bg-[var(--color-orange)]" data-astro-cid-f2ppc372> </div> <div class="grid grid-cols-2 md:grid-cols-5 gap-6" data-astro-cid-f2ppc372> <div class="text-center" data-astro-cid-f2ppc372> <div class="bg-[var(--color-orange)] text-[var(--color-blanc)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2" data-astro-cid-f2ppc372> <span class="h2-header text-xl" data-astro-cid-f2ppc372>${productStats.total}</span> </div> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-f2ppc372>Produits au total</p> </div> <div class="text-center" data-astro-cid-f2ppc372> <div class="bg-[var(--color-bleu)] text-[var(--color-blanc)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2" data-astro-cid-f2ppc372> <span class="h2-header text-xl" data-astro-cid-f2ppc372>${productStats.byContinent.asie}</span> </div> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-f2ppc372>Produits d'Asie</p> </div> <div class="text-center" data-astro-cid-f2ppc372> <div class="bg-[var(--color-vert)] text-[var(--color-blanc)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2" data-astro-cid-f2ppc372> <span class="h2-header text-xl" data-astro-cid-f2ppc372>${productStats.byContinent.afrique}</span> </div> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-f2ppc372>Produits d'Afrique</p> </div> <div class="text-center" data-astro-cid-f2ppc372> <div class="bg-[var(--color-rouge)] text-[var(--color-blanc)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2" data-astro-cid-f2ppc372> <span class="h2-header text-xl" data-astro-cid-f2ppc372>${productStats.byContinent.amerique + productStats.byContinent.ameriqueLf}</span> </div> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-f2ppc372>Produits d'Amérique</p> </div> <div class="text-center" data-astro-cid-f2ppc372> <div class="bg-[var(--color-marron)] text-[var(--color-blanc)] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2" data-astro-cid-f2ppc372> <span class="h2-header text-xl" data-astro-cid-f2ppc372>${productStats.byContinent.europe}</span> </div> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-f2ppc372>Produits d'Europe</p> </div> </div> </div> </section>  ${randomRestaurants.length > 0 && renderTemplate`<section class="bg-[var(--color-lin)] py-12" data-astro-cid-f2ppc372> <div class="px-4 md:px-20" data-astro-cid-f2ppc372> <h2 class="text-center mb-2 text-[var(--color-noir)]" data-astro-cid-f2ppc372>Trouvez ces produits près de chez vous</h2> <p class="p-body2 text-[var(--color-green)] text-center mb-8" data-astro-cid-f2ppc372>Découvrez nos restaurants partenaires qui proposent ces délicieux produits</p> <!-- Carrousel de restaurants --> <div class="overflow-x-auto pb-4" data-astro-cid-f2ppc372> <div class="flex space-x-4 min-w-max" data-astro-cid-f2ppc372> ${randomRestaurants.map((restaurant) => renderTemplate`<article class="flex-shrink-0 w-80 bg-[var(--color-blanc)] rounded-lg shadow border border-[var(--color-argent)] overflow-hidden hover:shadow-lg transition-shadow" data-astro-cid-f2ppc372> <img${addAttribute(restaurant.img_etablissement ? `https://nummy.arthurwicky.fr/api/files/Etablissement/${restaurant.id}/${restaurant.img_etablissement}` : "https://via.placeholder.com/400x200?text=Restaurant", "src")}${addAttribute(restaurant.nom_etablissement, "alt")} class="w-full h-40 object-cover" data-astro-cid-f2ppc372> <div class="p-4" data-astro-cid-f2ppc372> <h3 class="p-body1 font-bold mb-2 text-[var(--color-noir)]" data-astro-cid-f2ppc372>${restaurant.nom_etablissement}</h3> <p class="p-body3 text-[var(--color-green)] mb-2" data-astro-cid-f2ppc372>${restaurant.adresse_etablissement}</p> <p class="p-body3 text-[var(--color-green)] mb-3" data-astro-cid-f2ppc372>${restaurant.ville_etablissement}</p> <a${addAttribute(`/restaurants/${restaurant.id}`, "href")} class="inline-block w-full text-center bg-[var(--color-orange)] text-[var(--color-blanc)] px-4 py-2 rounded hover:opacity-90 transition-all button" data-astro-cid-f2ppc372>
Voir le restaurant
</a> </div> </article>`)} </div> </div> <div class="text-center mt-6" data-astro-cid-f2ppc372> <a href="/restaurants" class="inline-block bg-[var(--color-orange)] text-[var(--color-blanc)] px-6 py-3 rounded-lg hover:opacity-90 transition-all button" data-astro-cid-f2ppc372>
Voir tous nos restaurants
</a> </div> </div> </section>`} <section class="py-12 pt-25" data-astro-cid-f2ppc372> <div class="px-4 md:px-20" data-astro-cid-f2ppc372> <h2 class="h2-header text-center mb-8 text-[var(--color-noir)]" data-astro-cid-f2ppc372>Explorez par catégorie</h2> <div class="grid grid-cols-2 md:grid-cols-4 gap-4" data-astro-cid-f2ppc372> ${productStats.byType.slice(0, 8).map((type2) => renderTemplate`<a${addAttribute(getFilterUrl("type", type2), "href")}${addAttribute(`bg-[var(--color-blanc)] border border-[var(--color-lin)] rounded-lg p-4 text-center hover:shadow-md transition-shadow hover:bg-[var(--color-lin)] ${type2 === type2 ? "ring-2 ring-[var(--color-orange)]" : ""}`, "class")} data-astro-cid-f2ppc372> <div class="text-3xl mb-2" data-astro-cid-f2ppc372> ${type2 === "Boisson" ? "\u{1F964}" : type2 === "Snack" ? "\u{1F37F}" : type2 === "Confiserie" ? "\u{1F36C}" : type2 === "\xC9pice" ? "\u{1F336}\uFE0F" : type2 === "Conserve" ? "\u{1F96B}" : "\u{1F37D}\uFE0F"} </div> <h3 class="p-body1 font-bold text-[var(--color-noir)]" data-astro-cid-f2ppc372>${type2}</h3> <p class="p-body3 text-[var(--color-green)]" data-astro-cid-f2ppc372> ${allProducts.filter((p) => p.type_produit === type2).length} produits
</p> </a>`)} </div> </div> </section>  <section class="bg-gradient-to-r from-[var(--color-orange)] to-orange-300 text-[var(--color-blanc)] py-12" data-astro-cid-f2ppc372> <div class="px-4 md:px-20 text-center justify-center" data-astro-cid-f2ppc372> <h2 class="h3-header text-4xl mb-4" data-astro-cid-f2ppc372>Prêt pour un voyage culinaire ?</h2> <p class="p-body2 mb-6" data-astro-cid-f2ppc372>Découvrez des saveurs authentiques du monde entier</p> <div class="space-x-4 justify-center items-center" data-astro-cid-f2ppc372> <a href="/restaurants" class="p-button inline-block bg-[var(--color-blanc)] text-[var(--color-orange)] px-6 py-3 rounded-lg hover:opacity-90 transition-all button" data-astro-cid-f2ppc372>
Trouver un restaurant
</a> <a href="/continents" class="p-button inline-block border-2 border-[var(--color-blanc)] text-[var(--color-blanc)] px-6 py-3 rounded-lg hover:bg-[var(--color-blanc)] hover:text-[var(--color-orange)] transition-all button mt-3 -ml-4 " data-astro-cid-f2ppc372>
Explorer les produits
</a> </div> </div> </section> ` })} `;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/continents/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/continents/index.astro";
const $$url = "/continents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
