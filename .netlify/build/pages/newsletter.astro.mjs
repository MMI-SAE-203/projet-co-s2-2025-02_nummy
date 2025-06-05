import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_LuwkeAM4.mjs';
import { $ as $$Button } from '../chunks/Button_CowxkwsK.mjs';
import { I as ImageLettre } from '../chunks/lettre_DGLD_fsI.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Picture } from '../chunks/_astro_assets_aOvdlN-7.mjs';
export { renderers } from '../renderers.mjs';

const ImageNewsletter = new Proxy({"src":"/_astro/newsletter.DmYnblve.webp","width":353,"height":232,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/newsletter.webp";
							}
							
							return target[name];
						}
					});

const ImageNewsletterC = new Proxy({"src":"/_astro/letter2.CzfdjE7a.webp","width":353,"height":232,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/letter2.webp";
							}
							
							return target[name];
						}
					});

const ImageNewsletterF = new Proxy({"src":"/_astro/letter3.u5iBSdFv.webp","width":353,"height":232,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/assets/img/cardimg/letter3.webp";
							}
							
							return target[name];
						}
					});

const $$Newsletter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-[var(--color-orange)]"> <div class="flex flex-col lg:flex-row items-center justify-center text-center pt-25 pb-15"> <!-- image --> <div> ${renderComponent($$result2, "Picture", $$Picture, { "src": ImageLettre, "alt": "image", "loading": "lazy", "class": "mr-7 w-70 lg:w-90 lg:ml-10 h-auto" })} </div> <div> <h1 class="pt-3 lg:text-6xl">
"Restez à l'affût des nouveautés dans <br> notre <span class="text-white">NEWSLETTER</span>!"
</h1> <div> <p class="text-black font-semibold p-body3 lg:text-[16px] px-20 pt-4">
Inscrivez-vous à notre newsletter pour découvrir en avant-première nos
          derniers articles, recettes, bons plans et nouveautés
</p> </div> <div class="text-sm flex justify-center pt-5"> ${renderComponent($$result2, "Button", $$Button, { "class": "", "variant": "lin", "href": "/", "classes": "px-10 py-3" }, { "default": ($$result3) => renderTemplate`
s'inscrire
` })} </div> </div> </div> </div>  <div class="grid grid-cols-1 lg:grid-cols-11 gap-6 px-8 pt-10"> <!-- Card 1 --> <div class="lg:col-start-2 lg:col-span-3"> <div class="max-w-sm border border-gray-200 shadow-sm bg-[var(--color-argent)] mx-auto"> <a href="#"> ${renderComponent($$result2, "Picture", $$Picture, { "src": ImageNewsletterC, "alt": "image", "loading": "lazy", "class": "", "width": 800, "height": 700 })} </a> <div class="p-5"> <hr class="h-[8px] w-50 flex justify-center items-center text-center bg-[var(--color-orange)] ml-15"> <a href="#"> <h3 class="px-6 font-bold flex justify-center text-center leading-6 text-xl mb-2 pt-2">
Recettes exclusives de saison !
</h3> </a> <p class="p-body3 mb-3 font-normal text-black">
Restez au courant des nouvelles recettes de saison créées par notre
            communauté ! Découvrez des plats délicieux du monde entier.
</p> </div> </div> </div> <!-- Card 2 --> <div class="lg:col-start-5 lg:col-span-3"> <div class="max-w-sm border border-gray-200 shadow-sm bg-[var(--color-argent)] mx-auto"> <a href="#"> ${renderComponent($$result2, "Picture", $$Picture, { "src": ImageNewsletterF, "alt": "image", "loading": "lazy", "class": "", "width": 800, "height": 700 })} </a> <div class="p-5"> <hr class="h-[8px] w-50 flex justify-center items-center text-center bg-[var(--color-orange)] ml-15"> <a href="#"> <h3 class="px-6 font-bold flex justify-center text-center leading-6 text-xl mb-2 pt-2">
Offres et promotions exclusives !
</h3> </a> <p class="p-body3 mb-3 font-normal text-black">
Soyez les premiers informés de nos offres spéciales, réductions et
            événements culinaires exclusifs !
</p> </div> </div> </div> <!-- Card 3 --> <div class="lg:col-start-8 lg:col-span-3"> <div class="max-w-sm border border-gray-200 shadow-sm bg-[var(--color-argent)] mx-auto"> <a href="#"> ${renderComponent($$result2, "Picture", $$Picture, { "src": ImageNewsletter, "alt": "image", "loading": "lazy", "class": "", "width": 800, "height": 700 })} </a> <div class="p-5"> <hr class="h-[8px] w-50 flex justify-center items-center text-center bg-[var(--color-orange)] ml-15"> <a href="#"> <h3 class="px-6 font-bold flex justify-center text-center leading-6 text-xl mb-2 pt-2">
Conseils et astuces culinaires !
</h3> </a> <p class="p-body3 mb-3 font-normal text-black">
Découvrez nos conseils d'experts, astuces de cuisine et guides
            pratiques pour améliorer vos compétences culinaires.
</p> </div> </div> </div> </div>  <div class="bg-[var(--color-lin)] text-black p-8 rounded-lg mx-auto w-full lg:w-1/2 lg:mx-auto lg:flex lg:gap-5 lg:mt-20 lg:mb-10"> <div class=""> <h2 class="h2-header text-3xl mb-4">"S'INSCRIRE À LA NEWSLETTER"</h2> <p class="mb-6 text-sm">
Abonnez-vous à la Newsletter <span class="text-[var(--color-orange)] font-medium">sans frais supplémentaires</span> et ne manquez rien des nouveautés du monde !
</p> </div> <form id="newsletter-form" action="#" method="POST" class="space-y-4" autocomplete="off"> <div> <input type="email" id="email" name="email" placeholder="Ex: email.exemple@gmail.com" required class="w-full p-small px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-orange-500 placeholder-gray-400"> </div> <div> <input type="tel" id="telephone" name="telephone" placeholder="Téléphone : 07 xx xx xx xx" class="w-full p-small px-4 py-3 rounded-md bg-white border-0 focus:ring-2 focus:ring-orange-500 placeholder-gray-400"> </div> <div class="flex items-start mt-4"> <div class="flex items-center h-5"> <input id="offers" name="offers" type="checkbox" class="w-4 h-4 border-gray-300 rounded focus:ring-orange-500"> </div> <div class="ml-3 text-xs"> <label for="offers" class="p-small text-black">
En cochant cette case., je valide de recevoir ou être informé(e)
            offres et promotions de Ñummy par e-mail
</label> </div> </div> <div class="flex items-start mt-2"> <div class="flex items-center h-5"> <input id="terms" name="terms" type="checkbox" required class="w-4 h-4 border-gray-300 rounded focus:ring-orange-500"> </div> <div class="ml-3 p-small"> <label for="terms" class="text-black">
En cochant cette case, vous acceptez les conditions générales de
            Ñummy pour la publication d'un article sur le site web. Pour en
            savoir plus sur notre politique de confidentialité, <a href="/politiquesconfi" class="text-blue-800 underline">cliquez ici</a> </label> </div> </div> <div class="flex justify-center mt-6"> <button type="submit" class="px-10 py-3 bg-[var(--color-orange)] text-black font-bold rounded-full uppercase">
S'inscrire
</button> </div> </form> </div> ` })}`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/newsletter.astro", void 0);

const $$file = "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/pages/newsletter.astro";
const $$url = "/newsletter";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Newsletter,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
