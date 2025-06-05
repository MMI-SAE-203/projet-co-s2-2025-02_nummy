import { renderers } from './renderers.mjs';
import { a as actions } from './chunks/_noop-actions_CfKMStZn.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_PCXYzTcX.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/contact.astro.mjs');
const _page2 = () => import('./pages/continents/_id_.astro.mjs');
const _page3 = () => import('./pages/continents.astro.mjs');
const _page4 = () => import('./pages/login.astro.mjs');
const _page5 = () => import('./pages/mentionslegales.astro.mjs');
const _page6 = () => import('./pages/newsletter.astro.mjs');
const _page7 = () => import('./pages/partenaire.astro.mjs');
const _page8 = () => import('./pages/politiquesconfi.astro.mjs');
const _page9 = () => import('./pages/profile.astro.mjs');
const _page10 = () => import('./pages/recettes/ajouter.astro.mjs');
const _page11 = () => import('./pages/recettes/_id_.astro.mjs');
const _page12 = () => import('./pages/recettes.astro.mjs');
const _page13 = () => import('./pages/register.astro.mjs');
const _page14 = () => import('./pages/restaurants/_id_.astro.mjs');
const _page15 = () => import('./pages/restaurants.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/contact.astro", _page1],
    ["src/pages/continents/[id].astro", _page2],
    ["src/pages/continents/index.astro", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/mentionslegales.astro", _page5],
    ["src/pages/newsletter.astro", _page6],
    ["src/pages/partenaire.astro", _page7],
    ["src/pages/politiquesconfi.astro", _page8],
    ["src/pages/profile.astro", _page9],
    ["src/pages/recettes/ajouter.astro", _page10],
    ["src/pages/recettes/[id].astro", _page11],
    ["src/pages/recettes/index.astro", _page12],
    ["src/pages/register.astro", _page13],
    ["src/pages/restaurants/[id].astro", _page14],
    ["src/pages/restaurants/index.astro", _page15],
    ["src/pages/index.astro", _page16]
]);
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "11b3df1d-944f-4bc7-a1c9-87290a4cc2fa"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
