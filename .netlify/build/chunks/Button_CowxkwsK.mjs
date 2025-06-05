import { c as createComponent, b as createAstro, m as maybeRenderHead, d as addAttribute, f as renderSlot, a as renderTemplate } from './astro/server_D0p2hXWS.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, variant, classes } = Astro2.props;
  const variantClass = {
    vert: "bg-[var(--color-green)] text-[var(--color-green)] text-center text-white uppercase font-bold",
    lin: "bg-[var(--color-lin)] text-[var(--color-lin)] text-center text-black uppercase font-bold",
    orange1: "bg-[var(--color-orange)] text-[var(--color-orange)] text-center text-white uppercase font-bold",
    orange2: "bg-[var(--color-orange)] text-[var(--color-orange)] text-center text-black uppercase font-bold"
  };
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    "rounded-4xl inline-flex items-center gap-4 px-7 py-2 transition-300 ease-in-out lg:px-14 lg_py-6 text-center justify-center",
    variantClass[variant] || variantClass.default,
    classes
  ], "class:list")}${addAttribute(href, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/arthurwicky/Documents/projet-co-s2-2025-02_nummy/src/components/Button.astro", void 0);

export { $$Button as $ };
