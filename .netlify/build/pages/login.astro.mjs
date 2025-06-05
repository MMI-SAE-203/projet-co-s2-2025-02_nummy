import { c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LuwkeAM4.mjs';
export { renderers } from '../renderers.mjs';

const $$Login = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "classBody": "colorNav" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-screen py-16 px-6"> <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-lg"> <div class="md:flex"> <div class="p-8 w-full"> <div class="text-center mb-8"> <h1 class="text-2xl font-bold text-gray-900 mb-2">Connexion</h1> <p class="text-sm text-gray-500">
Connectez-vous pour accéder à votre espace personnel
</p> </div> <form id="login-form" class="space-y-6"> <div> <label for="email" class="block text-sm font-medium text-gray-700">Email</label> <input type="email" id="email" name="email" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div> <label for="password" class="block text-sm font-medium text-gray-700">Mot de passe</label> <input type="password" id="password" name="password" required class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-orange)]"> </div> <div class="flex items-center justify-between"> <div class="flex items-center"> <input type="checkbox" id="remember" name="remember" class="h-4 w-4 text-[var(--color-orange)]"> <label for="remember" class="ml-2 block text-sm text-gray-700">Se souvenir de moi</label> </div> <a href="/reset-password" class="text-sm text-[var(--color-orange)] hover:underline">Mot de passe oublié ?</a> </div> <div id="error-message" class="text-red-600 text-sm hidden"></div> <div> <button type="submit" class="w-full bg-[var(--color-orange)] text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300">
Se connecter
</button> </div> </form> <div class="mt-6 text-center"> <p class="text-sm text-gray-600">
Pas encore de compte ?
<a href="/register" class="text-[var(--color-orange)] hover:underline">S'inscrire</a> </p> </div> </div> </div> </div> </div> ` })} ${renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/login.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/login.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
