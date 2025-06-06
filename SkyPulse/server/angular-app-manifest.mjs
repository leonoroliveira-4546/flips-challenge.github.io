
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
    'index.csr.html': {size: 677, hash: 'c7d2c84e0e835744a3fca578eb05123e83aa91911344685f6b3a54970595e851', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: '006c8a21eb8fec79d50b15663f6d4e5b439a63521809c275f565f61d0005f312', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'weather/index.html': {size: 5426, hash: 'b7e4636e770622c7dc8ff9d3294937f10468bef88d74085822d78f8f0f40ffb8', text: () => import('./assets-chunks/weather_index_html.mjs').then(m => m.default)},
    'index.html': {size: 2343, hash: 'cce6caad7e7bf1561ddbdf56b48e5f76df89905db0ba3b68b79eec52e70ddcf4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-FNE2572F.css': {size: 117, hash: '0R6jdDATT90', text: () => import('./assets-chunks/styles-FNE2572F_css.mjs').then(m => m.default)}
  },
};
