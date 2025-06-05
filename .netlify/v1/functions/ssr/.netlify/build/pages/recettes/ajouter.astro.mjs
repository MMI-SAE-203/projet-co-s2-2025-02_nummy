import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../../chunks/astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_LuwkeAM4.mjs';
import { a as getAllProduits } from '../../chunks/backend_DaEiakY9.mjs';
/* empty css                                      */
export { renderers } from '../../renderers.mjs';

const $$Ajouter = createComponent(async ($$result, $$props, $$slots) => {
  const products = await getAllProduits();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classBody": "colorPage colorNav", "title": "Ajouter une recette | Nummy", "data-astro-cid-3dvi5p3r": true }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="bg-gradient-to-t from-[var(--color-orange)] to-orange-300 text-[var(--color-blanc)] p-6 mt-22" data-astro-cid-3dvi5p3r> <h1 class="text-5xl font-light pt-6 -tracking-tighter items-center text-center" data-astro-cid-3dvi5p3r>
PARTAGEZ-NOUS  VOS RECETTES !
</h1> </div>  <div class="container mx-auto px-4 py-8 max-w-4xl" data-astro-cid-3dvi5p3r> <form id="recipe-form" class="bg-white rounded-xl shadow-lg p-8" data-astro-cid-3dvi5p3r> <!-- Messages --> <div id="success-message" class="hidden bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" data-astro-cid-3dvi5p3r> <strong data-astro-cid-3dvi5p3r>Succès !</strong> Votre recette a été ajoutée avec succès.
</div> <div id="error-message" class="hidden bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" data-astro-cid-3dvi5p3r> <strong data-astro-cid-3dvi5p3r>Erreur :</strong> <span id="error-text" data-astro-cid-3dvi5p3r></span> </div> <!-- Informations de base --> <div class="mb-8" data-astro-cid-3dvi5p3r> <h3 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-3dvi5p3r>Informations de base</h3> <div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-astro-cid-3dvi5p3r> <div data-astro-cid-3dvi5p3r> <label for="nom_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Nom de la recette *
</label> <input type="text" id="nom_recette" name="nom_recette" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Ex: Couscous traditionnel" data-astro-cid-3dvi5p3r> </div> <div data-astro-cid-3dvi5p3r> <label for="pays_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Pays d'origine *
</label> <input type="text" id="pays_recette" name="pays_recette" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Ex: Maroc" data-astro-cid-3dvi5p3r> </div> <div data-astro-cid-3dvi5p3r> <label for="continent_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Continent *
</label> <select id="continent_recette" name="continent_recette" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" data-astro-cid-3dvi5p3r> <option value="" data-astro-cid-3dvi5p3r>Sélectionnez un continent</option> <option value="Afrique" data-astro-cid-3dvi5p3r>Afrique</option> <option value="Asie" data-astro-cid-3dvi5p3r>Asie</option> <option value="Europe" data-astro-cid-3dvi5p3r>Europe</option> <option value="Amérique" data-astro-cid-3dvi5p3r>Amérique du Nord</option> <option value="Amérique du Sud" data-astro-cid-3dvi5p3r>Amérique Latine</option> <option value="Océanie" data-astro-cid-3dvi5p3r>Océanie</option> </select> </div> <div data-astro-cid-3dvi5p3r> <label for="personnes_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Nombre de personnes *
</label> <input type="number" id="personnes_recette" name="personnes_recette" required min="1" max="20" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="4" data-astro-cid-3dvi5p3r> </div> <div data-astro-cid-3dvi5p3r> <label for="temps_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Temps de préparation (minutes) *
</label> <input type="number" id="temps_recette" name="temps_recette" required min="5" max="600" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="60" data-astro-cid-3dvi5p3r> </div> </div> </div> <!-- Image hero --> <div class="mb-8" data-astro-cid-3dvi5p3r> <h3 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-3dvi5p3r>Image principale</h3> <div data-astro-cid-3dvi5p3r> <label for="hero_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Photo de votre recette
</label> <input type="file" id="hero_recette" name="hero_recette" accept="image/*" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" data-astro-cid-3dvi5p3r> <p class="text-sm text-gray-500 mt-1" data-astro-cid-3dvi5p3r>Formats acceptés: JPG, PNG, WebP (max 5MB)</p> </div> </div> <!-- Produits --> <div class="mb-8" data-astro-cid-3dvi5p3r> <h3 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-3dvi5p3r>Produits utilisés</h3> <div data-astro-cid-3dvi5p3r> <label for="produits_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Sélectionnez les produits (optionnel)
</label> <select id="produits_recette" name="produits_recette" multiple class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 h-32" data-astro-cid-3dvi5p3r> ${products.map((product) => renderTemplate`<option${addAttribute(product.id, "value")} data-astro-cid-3dvi5p3r> ${product.nom_produit} - ${product.pays_produit} </option>`)} </select> <p class="text-sm text-gray-500 mt-1" data-astro-cid-3dvi5p3r>Maintenez Ctrl (Cmd sur Mac) pour sélectionner plusieurs produits</p> </div> </div> <!-- Ingrédients --> <div class="mb-8" data-astro-cid-3dvi5p3r> <h3 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-3dvi5p3r>Ingrédients</h3> <div data-astro-cid-3dvi5p3r> <label for="ingredients_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Liste des ingrédients *
</label> <textarea id="ingredients_recette" name="ingredients_recette" required rows="8" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Exemple:
- 500g de semoule de couscous
- 1 kg d'agneau coupé en morceaux
- 3 courgettes
- 2 carottes
- 1 oignon
- Épices ras el hanout
- Sel et poivre" data-astro-cid-3dvi5p3r></textarea> </div> </div> <!-- Préparation --> <div class="mb-8" data-astro-cid-3dvi5p3r> <h3 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-3dvi5p3r>Préparation</h3> <div data-astro-cid-3dvi5p3r> <label for="preparation_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Étapes de préparation *
</label> <textarea id="preparation_recette" name="preparation_recette" required rows="12" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Décrivez étape par étape comment préparer votre recette:

1. Préparer les légumes...
2. Dans une cocotte, faire revenir...
3. Ajouter les épices...
etc." data-astro-cid-3dvi5p3r></textarea> </div> </div> <!-- Images supplémentaires --> <div class="mb-8" data-astro-cid-3dvi5p3r> <h3 class="text-2xl font-bold text-gray-800 mb-4" data-astro-cid-3dvi5p3r>Images supplémentaires</h3> <div data-astro-cid-3dvi5p3r> <label for="images_recette" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-3dvi5p3r>
Photos des étapes (optionnel)
</label> <input type="file" id="images_recette" name="images_recette" accept="image/*" multiple class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" data-astro-cid-3dvi5p3r> <p class="text-sm text-gray-500 mt-1" data-astro-cid-3dvi5p3r>Vous pouvez sélectionner plusieurs images</p> </div> </div> <!-- Boutons --> <div class="flex justify-end space-x-4" data-astro-cid-3dvi5p3r> <a href="/recettes" class="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition-colors" data-astro-cid-3dvi5p3r>
Annuler
</a> <button type="submit" id="submit-btn" class="px-6 button uppercase py-3 bg-[var(--color-orange)] text-white rounded-lg hover:bg-orange-300 transition-colors disabled:opacity-50" data-astro-cid-3dvi5p3r> <span id="submit-text" data-astro-cid-3dvi5p3r>Ajouter la recette</span> <span id="submit-loading" class="hidden" data-astro-cid-3dvi5p3r>Ajout en cours...</span> </button> </div> </form> </div> ` })} ${renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/ajouter.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/ajouter.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/recettes/ajouter.astro";
const $$url = "/recettes/ajouter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ajouter,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
