import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LuwkeAM4.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inscription | \xD1ummy", "classBody": "colorNav" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-16 px-6"> <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg"> <div class="md:flex"> <div class="p-8 w-full"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-gray-900 mb-2">
Créer un compte
</h1> <p class="text-sm text-gray-500">Rejoignez la communauté Ñummy</p> </div> <form id="register-form" class="space-y-5"> <div> <label for="username" class="block text-sm font-medium text-gray-700">Nom d'utilisateur</label> <input type="text" id="username" name="username" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div> <label for="name" class="block text-sm font-medium text-gray-700">Nom complet</label> <input type="text" id="name" name="name" class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label> <input type="password" id="password" name="password" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div> <label for="passwordConfirm" class="block text-sm font-medium text-gray-700">Confirmer le mot de passe</label> <input type="password" id="passwordConfirm" name="passwordConfirm" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div class="flex items-center"> <input type="checkbox" id="terms" name="terms" required class="h-4 w-4 text-[var(--color-orange)]"> <label for="terms" class="ml-2 block text-sm text-gray-700">
J'accepte les <a href="/politiquesconfi" class="text-[var(--color-orange)] hover:underline">conditions d'utilisation</a> </label> </div> <div id="error-message" class="text-red-600 text-sm hidden"></div> <div> <button type="submit" class="w-full bg-[var(--color-orange)] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">
S'inscrire
</button> </div> </form> <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
Vous avez déjà un compte ?
<a href="/login" class="text-[var(--color-orange)] hover:underline">Se connecter</a> </p> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/register.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/register.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
