import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CbTgR5Kp.mjs';
import { manifest } from './manifest_BAGQSzvo.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_DY9S0rHP.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_BUn-h4qh.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "1ec8f1d0-3225-485e-b0da-4e96ba291642",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
