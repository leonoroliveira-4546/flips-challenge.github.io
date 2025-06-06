
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/weather"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 677, hash: '345b41c9aa1171f302dd91c315f3ca0aa3ae8b2ea099580a1eefe09558c26426', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: 'f395e7a70eb31de4ee64621729e67cce81ea16f9df80c0a45bbf0b5f041a4a85', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'weather/index.html': {size: 4599, hash: '9384e07201cecfaa7decbd84af0139e06d87b4496d6121cb33cf6f24e35c7ed3', text: () => import('./assets-chunks/weather_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2343, hash: '73ac3459d2678a0de6a68a2cf9a86d188187051edd5080ba39ba5d9ac34d055f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FNE2572F.css': {size: 117, hash: '0R6jdDATT90', text: () => import('./assets-chunks/styles-FNE2572F_css.mjs').then(m => m.default)}
  },
};
