if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"20375ccab8b8db93afe21819c4582f37"},{url:"advanced/ecosystem.html",revision:"fd90ca2bbe4731568b8bc17cee3faaff"},{url:"advanced/faq.html",revision:"483ae933674d18316027490c4e8d5804"},{url:"advanced/intro.html",revision:"aeeb144ae9e972c7c2797902f663c6d7"},{url:"advanced/why.html",revision:"90759264a7b8012e33b5ba8f442bf2e7"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.190d6076.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.359166a6.js",revision:null},{url:"assets/js/5556.04b90fdf.js",revision:null},{url:"assets/js/801.c19c4dc0.js",revision:null},{url:"assets/js/9230.b56a5c5e.js",revision:null},{url:"assets/js/app.4c2020d4.js",revision:null},{url:"assets/js/runtime~app.e5d33e36.js",revision:null},{url:"assets/js/v-057c9824.8dc4ea5d.js",revision:null},{url:"assets/js/v-058f99fc.500c7906.js",revision:null},{url:"assets/js/v-0b556720.5d75e4d9.js",revision:null},{url:"assets/js/v-1b1feb10.7d699cb6.js",revision:null},{url:"assets/js/v-1bf8da39.649b18fd.js",revision:null},{url:"assets/js/v-271aae61.508f2c8b.js",revision:null},{url:"assets/js/v-27d47a79.dcf716b6.js",revision:null},{url:"assets/js/v-2812bd79.a6bb5e4b.js",revision:null},{url:"assets/js/v-2945f13a.ce0af43b.js",revision:null},{url:"assets/js/v-2d0a870d.3e34183d.js",revision:null},{url:"assets/js/v-2fad59ab.3def0f4d.js",revision:null},{url:"assets/js/v-356c0ac4.8a8c07ee.js",revision:null},{url:"assets/js/v-3706649a.809018b0.js",revision:null},{url:"assets/js/v-38007666.b8a6bad3.js",revision:null},{url:"assets/js/v-396f59cd.2fa545bc.js",revision:null},{url:"assets/js/v-40608902.b6455d5c.js",revision:null},{url:"assets/js/v-434e7c8c.7ea4b628.js",revision:null},{url:"assets/js/v-45360123.1b38cadc.js",revision:null},{url:"assets/js/v-4819d2f6.fe37af2e.js",revision:null},{url:"assets/js/v-487079c5.abdc5c53.js",revision:null},{url:"assets/js/v-4dec5b45.72b1eb1a.js",revision:null},{url:"assets/js/v-4f0168b2.60b98778.js",revision:null},{url:"assets/js/v-4fe1dc58.94ba62fd.js",revision:null},{url:"assets/js/v-50cb2a87.13c96ee6.js",revision:null},{url:"assets/js/v-514365f1.624b585e.js",revision:null},{url:"assets/js/v-533c70f7.de9adcb6.js",revision:null},{url:"assets/js/v-583b3d0d.2e8cc585.js",revision:null},{url:"assets/js/v-5ceabafb.9d44f189.js",revision:null},{url:"assets/js/v-61377328.a43b3a46.js",revision:null},{url:"assets/js/v-668d9be0.064c5146.js",revision:null},{url:"assets/js/v-66cc4fee.104e2e54.js",revision:null},{url:"assets/js/v-67a66f17.dfc7124b.js",revision:null},{url:"assets/js/v-6b4d4a3d.c6454aa5.js",revision:null},{url:"assets/js/v-6d93dbb2.5e9baa1b.js",revision:null},{url:"assets/js/v-704e8e37.81ee7fec.js",revision:null},{url:"assets/js/v-737ff092.0928adb1.js",revision:null},{url:"assets/js/v-743ff88e.1f579b62.js",revision:null},{url:"assets/js/v-74a28670.75508de3.js",revision:null},{url:"assets/js/v-756ec2fc.f01e1488.js",revision:null},{url:"assets/js/v-7871496c.2272de3d.js",revision:null},{url:"assets/js/v-7898f959.16309fe9.js",revision:null},{url:"assets/js/v-7af875a7.96ac0417.js",revision:null},{url:"assets/js/v-81cb4dce.60aa906d.js",revision:null},{url:"assets/js/v-82949f3e.2637443d.js",revision:null},{url:"assets/js/v-8daa1a0e.6099a687.js",revision:null},{url:"assets/js/v-8dba60f6.e5e7a5c0.js",revision:null},{url:"assets/js/v-a1a49808.c471f8dc.js",revision:null},{url:"assets/js/v-a7534f04.67b7de9d.js",revision:null},{url:"assets/js/v-aecc6e00.b2ce1542.js",revision:null},{url:"assets/js/v-b032db80.c4531e5c.js",revision:null},{url:"assets/js/v-b7dac982.18ac316f.js",revision:null},{url:"assets/js/v-c9146c5e.0becd44e.js",revision:null},{url:"assets/js/v-d8d70e1a.fabc9df7.js",revision:null},{url:"assets/js/v-de155fda.d6b30796.js",revision:null},{url:"assets/js/v-de867450.974af6ba.js",revision:null},{url:"assets/js/v-e4322366.5ac6725e.js",revision:null},{url:"assets/js/v-e565bdda.4dfbb61e.js",revision:null},{url:"assets/js/v-e64f5648.9d4dc865.js",revision:null},{url:"assets/js/v-ee77801a.f2f21555.js",revision:null},{url:"assets/js/v-eff96fe2.d8bae9e7.js",revision:null},{url:"assets/js/v-f3ed9e5a.d35e7675.js",revision:null},{url:"assets/js/v-f4351e9e.e20a76e3.js",revision:null},{url:"assets/js/v-ffe3a066.c29df5bb.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"75ca57561d9ebe8a0548e790662b2fc0"},{url:"en/advanced/faq.html",revision:"be6fc96ac94cbb1e9a47ff7b296834df"},{url:"en/advanced/intro.html",revision:"36dff3e819e01c26393429d20f235b22"},{url:"en/advanced/why.html",revision:"32e6d22d318eeced8646d39c8c7e2f95"},{url:"en/guide/client/avatar.html",revision:"f7b535f91d0a3faaaaf7c6c385ceb4bb"},{url:"en/guide/client/count.html",revision:"bdffdf91aad3b81f20b8ea0f8ac05e8b"},{url:"en/guide/client/emoji.html",revision:"4216a79bb8f0e230fce4f6866c27276c"},{url:"en/guide/client/i18n.html",revision:"756b32b56c0083118e7a044079be8aca"},{url:"en/guide/client/import.html",revision:"d415ebb1a8f18bbcf22ee9706469fd4b"},{url:"en/guide/client/intro.html",revision:"7252e5134cc025d60bd5f570e9542c3c"},{url:"en/guide/client/recentcomment.html",revision:"b7c0af58d7a77d88146ba97e6463f095"},{url:"en/guide/client/spa.html",revision:"db25eb2054bf636c33b504e6f8e38769"},{url:"en/guide/client/style.html",revision:"a0e7264eca96cf3cccd9affd180d0a7e"},{url:"en/guide/client/syntax.html",revision:"c94af97024e13dd566eb5cb3015386e9"},{url:"en/guide/client/widget/index.html",revision:"0421d31e64d91ac79823f71c6a4c49a3"},{url:"en/guide/client/widget/recent-comment.html",revision:"d0f5f9bfd1e73b31bd797c0c8f64a826"},{url:"en/guide/get-started.html",revision:"60ae373a982ee583a713c98a3aa5dbe5"},{url:"en/guide/server/databases.html",revision:"5db3ccbbbf6244bf27fc7a67c46af94c"},{url:"en/guide/server/intro.html",revision:"030cfee1b1551370e2379e77cf2743bc"},{url:"en/guide/server/notification.html",revision:"f353f3152c34bb731657ada4b2f6476f"},{url:"en/guide/server/socials.html",revision:"b97e55cbd90561d1fb5cbeecc0063357"},{url:"en/guide/server/vps-deploy.html",revision:"e2679103fde19b17246e82c25964cf23"},{url:"en/index.html",revision:"07e4162401b3a50cf82bca16d0cee04a"},{url:"en/migration/client.html",revision:"aa59f56162d03cb8375edd1639a49f3e"},{url:"en/migration/tool.html",revision:"df5645420602ef95b0b2bc091a1d733d"},{url:"en/migration/valine.html",revision:"ed0dcbeb8bcd2dab6c29c3173fefc6be"},{url:"en/reference/api.html",revision:"c6e5842437308791b06d5f2881f3e987"},{url:"en/reference/client.html",revision:"3c6a1d6f8894faff084c0b5a188ad4fa"},{url:"en/reference/contribution.html",revision:"42ea17b489d52402013189355fca835b"},{url:"en/reference/instance.html",revision:"cdc0471d1637554c66ee8b2e15b30e1d"},{url:"en/reference/server.html",revision:"4a0727640eecf9c7db19a2892d5c5a64"},{url:"guide/client/avatar.html",revision:"6accaea4138163d1ce78a84c98d585ae"},{url:"guide/client/count.html",revision:"8c8e19d8c2864753081d073b1a817c0b"},{url:"guide/client/emoji.html",revision:"a1478356915ad06b1d13c600e48ba433"},{url:"guide/client/i18n.html",revision:"424ec4989bd46f1fcffc8bfe1727d86b"},{url:"guide/client/import.html",revision:"fce8ec04b53c5e098e40e63ff00d030f"},{url:"guide/client/intro.html",revision:"a44e0051a1bd386effe5b03c9707a6bc"},{url:"guide/client/spa.html",revision:"9bbecf1512e52f76418b66d82cba3c8b"},{url:"guide/client/style.html",revision:"2aed812a167b186b927b6ebb4c8dc28d"},{url:"guide/client/syntax.html",revision:"7fba53d02e42e7839068985b092c6737"},{url:"guide/client/widget/index.html",revision:"e484ea2f88cc182d86adf1618d454483"},{url:"guide/client/widget/recent-comment.html",revision:"6ea4aee5949c59f2fcc379400475438f"},{url:"guide/get-started.html",revision:"5ac867845440efb454c8e7b59ab18365"},{url:"guide/server/cloudbase.html",revision:"487500362f8f4fd083cc846564102f50"},{url:"guide/server/databases.html",revision:"9bd49c58d339be5b21b642cf195123c4"},{url:"guide/server/intro.html",revision:"85632a4ada9b7e06cb0266f826de2d99"},{url:"guide/server/notification.html",revision:"fa97c47eaeee22ce007ade81d36b6453"},{url:"guide/server/socials.html",revision:"9639f95b9802661496df884b0d1088e3"},{url:"guide/server/vps-deploy.html",revision:"51819a87dabb87b57643580325e71931"},{url:"index.html",revision:"5a8f5e8399e27e02055909748163747d"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"073ca7d4530d551d21ec3a2feb4610e3"},{url:"migration/tool.html",revision:"cef621d7c8f3861e81742416ecf1d5c3"},{url:"migration/valine.html",revision:"5861e53be896ef74804a52b845825844"},{url:"reference/api.html",revision:"4439c4e0e3955e41f2535c39644b6a58"},{url:"reference/client.html",revision:"fb94362101d0381d4a4c3aa466ce8de8"},{url:"reference/contribution.html",revision:"9bf74910cd50b9a7f1cb53014410936c"},{url:"reference/instance.html",revision:"e6d746a246f3ae31c25ff81b49b08b27"},{url:"reference/server.html",revision:"39ac7e0ebc014f217b0459fe5c2cc583"}],{})}));
