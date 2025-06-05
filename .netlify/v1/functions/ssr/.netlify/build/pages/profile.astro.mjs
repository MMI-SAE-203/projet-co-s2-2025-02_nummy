import { c as createComponent, b as createAstro, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Ds7egGoB.mjs';
import 'kleur/colors';
import { i as initAuthentication, a as isLoggedIn, p as pb, $ as $$Layout } from '../chunks/Layout_CgWoF0WD.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Profile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Profile;
  initAuthentication();
  const isAuthenticated = isLoggedIn();
  isAuthenticated ? pb.authStore.model : null;
  if (!isAuthenticated) {
    return Astro2.redirect("/login");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mon profil | Nummy" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="container mx-auto px-4 py-8"> <h1 class="text-3xl font-bold mb-8">Mon profil</h1> <div id="profile-content"> <div class="flex items-center justify-center p-8"> <div class="animate-pulse w-12 h-12 rounded-full bg-gray-200"></div> <div class="ml-4 w-48 h-8 bg-gray-200 rounded animate-pulse"></div> </div> </div> </main> ` })} ${renderScript($$result, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/profile.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/profile.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
