if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9c523a44c4004a7c401b1cbf589d74d1"},{url:"advanced/ecosystem.html",revision:"aba9264453e5510fb2d5a9e487482bd1"},{url:"advanced/faq.html",revision:"bad6f173c0ea899ab683820e5877a583"},{url:"advanced/intro.html",revision:"017798741191382a906879a153c715d4"},{url:"advanced/why.html",revision:"91ddbae1d1b7fe4ceccee5a0a25b02c1"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.cc606f82.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/3991.a5913753.js",revision:null},{url:"assets/js/5455.f8a326d1.js",revision:null},{url:"assets/js/5556.fce0e7e2.js",revision:null},{url:"assets/js/801.a3567071.js",revision:null},{url:"assets/js/app.038fa307.js",revision:null},{url:"assets/js/runtime~app.b0b84af1.js",revision:null},{url:"assets/js/v-057c9824.e56139a0.js",revision:null},{url:"assets/js/v-058f99fc.a2912375.js",revision:null},{url:"assets/js/v-0b556720.72a02cc7.js",revision:null},{url:"assets/js/v-1b1feb10.2ce0a7f2.js",revision:null},{url:"assets/js/v-1bf8da39.c250d3ce.js",revision:null},{url:"assets/js/v-271aae61.789ee77d.js",revision:null},{url:"assets/js/v-27d47a79.066530bc.js",revision:null},{url:"assets/js/v-2812bd79.6d1e850f.js",revision:null},{url:"assets/js/v-2945f13a.98348ef4.js",revision:null},{url:"assets/js/v-2d0a870d.c99c18ce.js",revision:null},{url:"assets/js/v-2fad59ab.f51fbda2.js",revision:null},{url:"assets/js/v-356c0ac4.226ae561.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.34d9bc31.js",revision:null},{url:"assets/js/v-396f59cd.22056dff.js",revision:null},{url:"assets/js/v-40608902.30716fc8.js",revision:null},{url:"assets/js/v-434e7c8c.1b4c662b.js",revision:null},{url:"assets/js/v-45360123.0227ec85.js",revision:null},{url:"assets/js/v-4819d2f6.54e77c1e.js",revision:null},{url:"assets/js/v-487079c5.b41224fa.js",revision:null},{url:"assets/js/v-4dec5b45.8c41d45c.js",revision:null},{url:"assets/js/v-4f0168b2.94fe61b5.js",revision:null},{url:"assets/js/v-4fe1dc58.13663dc8.js",revision:null},{url:"assets/js/v-50cb2a87.61ae1f21.js",revision:null},{url:"assets/js/v-514365f1.0a0fb98d.js",revision:null},{url:"assets/js/v-533c70f7.d469914e.js",revision:null},{url:"assets/js/v-583b3d0d.094f219e.js",revision:null},{url:"assets/js/v-5ceabafb.97d004cb.js",revision:null},{url:"assets/js/v-61377328.26a80295.js",revision:null},{url:"assets/js/v-668d9be0.2ea28f2b.js",revision:null},{url:"assets/js/v-66cc4fee.914156e9.js",revision:null},{url:"assets/js/v-67a66f17.0ed8716f.js",revision:null},{url:"assets/js/v-6b4d4a3d.9fe87842.js",revision:null},{url:"assets/js/v-6d93dbb2.4bc2bc0d.js",revision:null},{url:"assets/js/v-704e8e37.033a219a.js",revision:null},{url:"assets/js/v-737ff092.ec243cbc.js",revision:null},{url:"assets/js/v-743ff88e.d0c47b84.js",revision:null},{url:"assets/js/v-74a28670.426dfa25.js",revision:null},{url:"assets/js/v-756ec2fc.fcd89b6e.js",revision:null},{url:"assets/js/v-7871496c.754684fd.js",revision:null},{url:"assets/js/v-7898f959.41bc6413.js",revision:null},{url:"assets/js/v-7af875a7.5664093f.js",revision:null},{url:"assets/js/v-81cb4dce.1b52e03c.js",revision:null},{url:"assets/js/v-82949f3e.71ebb7e7.js",revision:null},{url:"assets/js/v-8daa1a0e.4d3f8de5.js",revision:null},{url:"assets/js/v-8dba60f6.c8d17aa5.js",revision:null},{url:"assets/js/v-a1a49808.e70d5409.js",revision:null},{url:"assets/js/v-a7534f04.548d9943.js",revision:null},{url:"assets/js/v-aecc6e00.c1f7cbe9.js",revision:null},{url:"assets/js/v-b032db80.7ff547b1.js",revision:null},{url:"assets/js/v-b7dac982.9ee3a2e4.js",revision:null},{url:"assets/js/v-c9146c5e.7f1fdf92.js",revision:null},{url:"assets/js/v-d8d70e1a.a3820df1.js",revision:null},{url:"assets/js/v-de155fda.8d2d7cad.js",revision:null},{url:"assets/js/v-de867450.f1b86e29.js",revision:null},{url:"assets/js/v-e4322366.bf705775.js",revision:null},{url:"assets/js/v-e565bdda.7d263d0d.js",revision:null},{url:"assets/js/v-e64f5648.fb7051df.js",revision:null},{url:"assets/js/v-ee77801a.c51d73ec.js",revision:null},{url:"assets/js/v-eff96fe2.c4509916.js",revision:null},{url:"assets/js/v-f3ed9e5a.ece45506.js",revision:null},{url:"assets/js/v-f4351e9e.47660755.js",revision:null},{url:"assets/js/v-ffe3a066.b18b2e33.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"d2c2a7f13499ac9c12bfc0ac2ff57c28"},{url:"en/advanced/faq.html",revision:"04006e3b40b1f3037772401429d9f08b"},{url:"en/advanced/intro.html",revision:"0ee8bf93b1023b901c3aa0e7b3c1ec42"},{url:"en/advanced/why.html",revision:"735facdfa6775871e7f15a1bdf501117"},{url:"en/guide/client/avatar.html",revision:"f63565350786ddce60a744c189315294"},{url:"en/guide/client/count.html",revision:"022f9b822e716240d64aa273d43f035a"},{url:"en/guide/client/emoji.html",revision:"f87ece761b7192ff0fce2f8475c78e40"},{url:"en/guide/client/i18n.html",revision:"9a8cc740571045aea0f3678da92f3707"},{url:"en/guide/client/import.html",revision:"9980eb5180b8c11ee123e1ecf18ea272"},{url:"en/guide/client/intro.html",revision:"205998af8bbe78ef5aa03268f3890e8e"},{url:"en/guide/client/recentcomment.html",revision:"6817ea203abed402808def616d4c292e"},{url:"en/guide/client/spa.html",revision:"a3fd74989bfa9e89c5f4d4b527c81f10"},{url:"en/guide/client/style.html",revision:"6be26dd1506148d9a64e61115ebdd0e2"},{url:"en/guide/client/syntax.html",revision:"c91daab8ad163f84d17d92ebd7c195e9"},{url:"en/guide/client/widget/index.html",revision:"1d5decdfdc5644b7a8b3f8664ec05d7f"},{url:"en/guide/client/widget/recent-comment.html",revision:"37e063543d7b28feff498c8e291a0bc5"},{url:"en/guide/get-started.html",revision:"4ae0f4c93c0e819cec8b96c732399c63"},{url:"en/guide/server/databases.html",revision:"4db8061f21fac2656ce55ee630320ce3"},{url:"en/guide/server/intro.html",revision:"34818cd2f0044b8cef105da61a69385d"},{url:"en/guide/server/notification.html",revision:"04b4f3b2471ae21f8a000b6cabd07afc"},{url:"en/guide/server/socials.html",revision:"e229e844c7393baff20eb8ebe6f57f31"},{url:"en/guide/server/vps-deploy.html",revision:"46e9b0acaf587b6a436863625faf6041"},{url:"en/index.html",revision:"20fe815ec13ee752768ee7df92e6b5b8"},{url:"en/migration/client.html",revision:"cc802707ada07c9ab13f30835a03d587"},{url:"en/migration/tool.html",revision:"c8889c7a5250acc148f7b38c37e36b90"},{url:"en/migration/valine.html",revision:"4842b9da489a93375d4549b74d914211"},{url:"en/reference/api.html",revision:"41c0b32f392a0228f372a037892ba023"},{url:"en/reference/client.html",revision:"765cbcefcf9f3953ed81dda46aad21e4"},{url:"en/reference/contribution.html",revision:"5c9c4f6c1997774ada1b4c0ba933478a"},{url:"en/reference/instance.html",revision:"b4b700f9c480bf6229f8676527b84c12"},{url:"en/reference/server.html",revision:"ce0e1b63f598a286181c40b2a1b9d387"},{url:"guide/client/avatar.html",revision:"d339262cff5d1a6cee485d7d8b2c491f"},{url:"guide/client/count.html",revision:"861c78889310b5b7baa788f235b51167"},{url:"guide/client/emoji.html",revision:"5f01c1a74eed47ed125c7e932f2698a8"},{url:"guide/client/i18n.html",revision:"1f7c03f40efb80e0dd3dc970fd18e333"},{url:"guide/client/import.html",revision:"84feaf28df12c226ce9cf4b0b8ceb0d1"},{url:"guide/client/intro.html",revision:"e0c104ceb6d84d539abc6baa0368a319"},{url:"guide/client/spa.html",revision:"e0ff58c3034ba4d126629fc53b961d29"},{url:"guide/client/style.html",revision:"36eb4c6de3c77ffe9779d3b756d41c3c"},{url:"guide/client/syntax.html",revision:"b7890e22324e52647a2fb203296e6de8"},{url:"guide/client/widget/index.html",revision:"dd8dead47116b71ec5502a172063afaa"},{url:"guide/client/widget/recent-comment.html",revision:"8f4773f9eb60ee779074acfbd54afe03"},{url:"guide/get-started.html",revision:"3c0b0259aaceb5ec25bcd4da2cc26f79"},{url:"guide/server/cloudbase.html",revision:"e163da4a282718b3d360ab254e918123"},{url:"guide/server/databases.html",revision:"7ccb0708ff0369b519899c5272d45595"},{url:"guide/server/intro.html",revision:"1024e13c571eb39b74bb126dbd2c882d"},{url:"guide/server/notification.html",revision:"7de576bdc4f3f8dda8d8044a6d39b7b5"},{url:"guide/server/socials.html",revision:"b575490dcc54943e82db9c5d1c4c9b9f"},{url:"guide/server/vps-deploy.html",revision:"72ee3823c4a680ba672c5eba5f8e6942"},{url:"index.html",revision:"483aa9d0c12e48d01ad348fd3d10529a"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"49ad7a2fc7f8ca120301bfb660ba16bb"},{url:"migration/tool.html",revision:"730b2e3b23fd28c8494c7fe3c94ffe9a"},{url:"migration/valine.html",revision:"b0cc9ae694342c1879d94771f8248054"},{url:"reference/api.html",revision:"efccd15e05e59290a2acf621205b2f89"},{url:"reference/client.html",revision:"575f46040652d63e82ccaeba1798ff05"},{url:"reference/contribution.html",revision:"bbfa991f8c832b0011e4f4a8d02e6568"},{url:"reference/instance.html",revision:"c38168b16b07d2716dc9fb96d811fcfe"},{url:"reference/server.html",revision:"87f9cd4c1bd85f7f1bd2638c8b784b98"}],{})}));
