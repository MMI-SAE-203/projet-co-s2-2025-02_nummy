import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, a as renderTemplate, r as renderComponent, F as Fragment, e as renderScript } from '../chunks/astro/server_Ds7egGoB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CgWoF0WD.mjs';
import { b as getEtablissements } from '../chunks/backend_DaEiakY9.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$RestaurantCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$RestaurantCard;
  const {
    id,
    nom,
    adresse,
    ville,
    categorie,
    continent,
    image,
    partenariat,
    distance,
    telephone
  } = Astro2.props;
  const defaultImageUrl = "https://via.placeholder.com/300x200?text=Nummy";
  return renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"> <div${addAttribute(`flex ${partenariat ? "flex-row" : "flex-col"}`, "class")}> <div${addAttribute(partenariat ? "w-1/3" : "w-full h-48", "class")}> <img${addAttribute(image, "src")}${addAttribute(`Photo de ${nom}`, "alt")}${addAttribute(`${partenariat ? "h-full w-full object-cover" : "w-full h-full object-cover"}`, "class")}${addAttribute(`this.src='${defaultImageUrl}'; this.onerror=null;`, "onerror")}> </div> <div${addAttribute(`${partenariat ? "w-2/3 p-4 relative bg-[var(--color-lin)]" : "p-4"}`, "class")}> ${partenariat && renderTemplate`<div class="absolute top-3 right-3 bg-[var(--color-orange)] text-white px-2 py-1 rounded-md text-xs font-semibold">
Partenaire
</div>`} <h3 class="lg:text-xl text-xl font-semibold mb-1">${nom}</h3> ${partenariat ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex items-center text-sm text-gray-600 mb-2"> <span class="mr-2">${categorie}</span> <span class="w-1 h-1 bg-gray-400 rounded-full mx-2"></span> <span>${continent}</span> </div> <p class="text-sm text-gray-700 mb-2"> ${adresse}, ${ville} </p> ${telephone && renderTemplate`<p class="text-sm text-gray-700 mb-2">Tel: ${telephone}</p>`}${distance !== void 0 && renderTemplate`<p class="text-sm font-medium text-[var(--color-orange)] mb-3">
Distance: ${distance.toFixed(1)} km
</p>`}<a${addAttribute(`/restaurants/${id}`, "href")} class="inline-block bg-[var(--color-orange)] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors text-sm">
Voir plus
</a> ` })}` : renderTemplate`<a${addAttribute(`/restaurants/${id}`, "href")} class="block mt-2 text-[var(--color-orange)] hover:underline text-sm">
En savoir plus
</a>`} </div> </div> </div>`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/components/RestaurantCard.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { page = "1" } = Astro2.url.searchParams;
  const currentPage = parseInt(page);
  const itemsPerPage = 4;
  const etablissementsResponse = await getEtablissements();
  const establishments = etablissementsResponse.success ? etablissementsResponse.items : [];
  const continents = [
    ...new Set(establishments.map((item) => item.continent_etablissement))
  ];
  const categories = [
    ...new Set(establishments.map((item) => item.categorie_etablissement))
  ];
  const totalItems = establishments.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentEstablishments = establishments.slice(startIndex, endIndex);
  function getPageUrl(pageNum) {
    const url = new URL(Astro2.url);
    url.searchParams.set("page", pageNum.toString());
    return url.pathname + url.search;
  }
  const maxPagesToShow = 5;
  let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
  let endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);
  if (endPage - startPage + 1 < maxPagesToShow) {
    startPage = Math.max(endPage - maxPagesToShow + 1, 1);
  }
  return renderTemplate(_a || (_a = __template(["", ' <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="anonymous"> <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin="anonymous"><\/script> ', " "])), renderComponent($$result, "Layout", $$Layout, { "title": "Restaurants & Boutiques | Nummy", "data-astro-cid-jep4brkn": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid" data-astro-cid-jep4brkn> <div class="header-section lg:col-span-11" data-astro-cid-jep4brkn> <div class="bg-[var(--color-green)] text-[var(--color-lin)] font-normal px-8 py-20 mb-6" data-astro-cid-jep4brkn> <div class="grid lg:grid-cols-12 lg:gap-4 lg:justify-center lg:items-center" data-astro-cid-jep4brkn> <h1 class="lg:text-6xl pt-10 lg:pt-10 lg:col-start-2 lg:col-span-4" data-astro-cid-jep4brkn>
Restaurants <br data-astro-cid-jep4brkn> & boutiques
</h1> <div class="pt-5 lg:col-start-6 lg:col-span-5" data-astro-cid-jep4brkn> <h2 class="pt-5 text-white p-body3 lg:text-[18px]" data-astro-cid-jep4brkn>
Trouvez les meilleures restaurants et boutiques près de vous!
              Découvrez des adresses incontournables pour savourer des produits
              authentiques et explorer de nouvelles saveurs !
</h2> </div> </div> </div> </div> <div class="map-section col-span-7" data-astro-cid-jep4brkn> <div class="pl-4 mb-2" data-astro-cid-jep4brkn> <h3 class="h3-header" data-astro-cid-jep4brkn>Carte</h3> </div> <hr class="bg-[var(--color-orange)] h-2 w-1/4 border-none my-2 ml-4 mb-6" data-astro-cid-jep4brkn> <div class="px-4 mb-8" data-astro-cid-jep4brkn> <div class="flex items-center gap-4 align-center" data-astro-cid-jep4brkn> <div class="text-sm font-medium text-gray-800" data-astro-cid-jep4brkn>Filtrer par</div> <div class="bg-gray-100 rounded-lg px-3 py-2 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm" data-astro-cid-jep4brkn> <select id="continent" class="bg-transparent border-none text-gray-800 font-normal focus:outline-none w-full cursor-pointer" data-astro-cid-jep4brkn> <option value="" data-astro-cid-jep4brkn>Continents</option> ${continents.map((continent) => renderTemplate`<option${addAttribute(continent, "value")} data-astro-cid-jep4brkn>${continent}</option>`)} </select> </div> <div class="bg-gray-100 rounded-lg px-3 py-2 border border-gray-200 hover:border-gray-300 transition-colors shadow-sm" data-astro-cid-jep4brkn> <select id="category" class="bg-transparent border-none text-gray-800 font-normal focus:outline-none w-full cursor-pointer" data-astro-cid-jep4brkn> <option value="" data-astro-cid-jep4brkn>Catégories</option> ${categories.map((category) => renderTemplate`<option${addAttribute(category, "value")} data-astro-cid-jep4brkn>${category}</option>`)} </select> </div> </div> </div> <div class="py-6 mb-8" data-astro-cid-jep4brkn> <div id="map" class="h-[500px] w-full rounded-lg shadow-md" data-astro-cid-jep4brkn></div> </div> </div> <div class="establishments-section col-span-4" data-astro-cid-jep4brkn> <div class="md:flex pl-6 mb-2 md:justify-center md:items-center md:align-center" data-astro-cid-jep4brkn> <h3 class="h3-header uppercase text-black" data-astro-cid-jep4brkn>
Les plus proches de chez vous
</h3> </div> <hr class="bg-[var(--color-orange)] md:justify-center md:items-center h-2 border-none my-2 ml-6 mb-6" data-astro-cid-jep4brkn> <div class="py-6 mb-12" data-astro-cid-jep4brkn> <div id="loading" class="text-center py-8" data-astro-cid-jep4brkn> <div class="inline-block w-8 h-8 border-4 border-[var(--color-orange)] border-t-transparent rounded-full animate-spin" data-astro-cid-jep4brkn></div> <p class="mt-2" data-astro-cid-jep4brkn>Chargement des établissements...</p> </div> <div id="establishments-list" class="space-y-4 max-h-[600px] overflow-y-auto pr-2" data-astro-cid-jep4brkn> ${currentEstablishments.map((establishment) => {
    const imageUrl = establishment.image_etablissement ? `https://nummy.arthurwicky.fr/api/files/Etablissement/${establishment.id}/${establishment.image_etablissement}` : "";
    return renderTemplate`<div class="establishment-card-desktop" data-astro-cid-jep4brkn> ${renderComponent($$result2, "RestaurantCard", $$RestaurantCard, { "id": establishment.id, "nom": establishment.nom_etablissement, "adresse": establishment.adresse_etablissement, "ville": establishment.ville_etablissement, "categorie": establishment.categorie_etablissement, "continent": establishment.continent_etablissement, "image": imageUrl, "partenariat": establishment.partenariat_etablissement, "data-astro-cid-jep4brkn": true })} </div>`;
  })} </div> ${totalPages > 1 && renderTemplate`<div class="flex justify-center items-center space-x-2 mt-6" data-astro-cid-jep4brkn> ${currentPage > 1 && renderTemplate`<a${addAttribute(getPageUrl(currentPage - 1), "href")} class="bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300 text-sm" data-astro-cid-jep4brkn>
&laquo;
</a>`} ${startPage > 1 && renderTemplate`<a${addAttribute(getPageUrl(1), "href")} class="bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300 text-sm" data-astro-cid-jep4brkn>
1
</a>`} ${startPage > 2 && renderTemplate`<span class="mx-1 text-sm" data-astro-cid-jep4brkn>...</span>`} ${Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  ).map((num) => renderTemplate`<a${addAttribute(getPageUrl(num), "href")}${addAttribute(`rounded-full w-8 h-8 flex justify-center items-center text-sm ${num === currentPage ? "bg-[var(--color-orange)] text-white" : "bg-gray-200 hover:bg-gray-300"}`, "class")} data-astro-cid-jep4brkn> ${num} </a>`)} ${endPage < totalPages - 1 && renderTemplate`<span class="mx-1 text-sm" data-astro-cid-jep4brkn>...</span>`} ${endPage < totalPages && renderTemplate`<a${addAttribute(getPageUrl(totalPages), "href")} class="bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300 text-sm" data-astro-cid-jep4brkn> ${totalPages} </a>`} ${currentPage < totalPages && renderTemplate`<a${addAttribute(getPageUrl(currentPage + 1), "href")} class="bg-gray-200 rounded-full w-8 h-8 flex justify-center items-center hover:bg-gray-300 text-sm" data-astro-cid-jep4brkn>
&raquo;
</a>`} </div>`} <div id="no-results" class="hidden text-center py-8" data-astro-cid-jep4brkn> <p data-astro-cid-jep4brkn>Aucun établissement trouvé dans cette zone.</p> </div> </div> </div> </div> ` }), renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/restaurants/index.astro?astro&type=script&index=0&lang.ts"));
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/restaurants/index.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/restaurants/index.astro";
const $$url = "/restaurants";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
