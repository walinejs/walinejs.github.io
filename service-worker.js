if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6440ef31c43ccdc3558274a6d8bb4210"},{url:"advanced/ecosystem.html",revision:"a5783f74518b1cdde3835a9576445a78"},{url:"advanced/faq.html",revision:"e4a2e53b5a9bbabcdae1b4365e57fe13"},{url:"advanced/intro.html",revision:"c434e279a4bd5ec7e6b86f55141a31d2"},{url:"advanced/why.html",revision:"064c5eeb0d5754273667666c0f0b3adb"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.4a5f655c.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.f1b6acfb.js",revision:null},{url:"assets/js/runtime~app.332305bc.js",revision:null},{url:"assets/js/v-057c9824.f14ea4c1.js",revision:null},{url:"assets/js/v-058f99fc.121de14d.js",revision:null},{url:"assets/js/v-0b556720.2d440de6.js",revision:null},{url:"assets/js/v-1b1feb10.a770b807.js",revision:null},{url:"assets/js/v-1bf8da39.314aa59c.js",revision:null},{url:"assets/js/v-271aae61.40f82ac3.js",revision:null},{url:"assets/js/v-27d47a79.d41a68c7.js",revision:null},{url:"assets/js/v-2812bd79.675c531c.js",revision:null},{url:"assets/js/v-2945f13a.d5b56fed.js",revision:null},{url:"assets/js/v-2d0a870d.12d2acdb.js",revision:null},{url:"assets/js/v-2fad59ab.3f6fd271.js",revision:null},{url:"assets/js/v-356c0ac4.bd78814d.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.c1b3ab30.js",revision:null},{url:"assets/js/v-396f59cd.a5683922.js",revision:null},{url:"assets/js/v-40608902.7feda3c5.js",revision:null},{url:"assets/js/v-434e7c8c.77499139.js",revision:null},{url:"assets/js/v-45360123.7c4f0154.js",revision:null},{url:"assets/js/v-4819d2f6.00a5d55d.js",revision:null},{url:"assets/js/v-487079c5.a5a264f2.js",revision:null},{url:"assets/js/v-4dec5b45.e71abce1.js",revision:null},{url:"assets/js/v-4f0168b2.c3887183.js",revision:null},{url:"assets/js/v-4fe1dc58.817061f9.js",revision:null},{url:"assets/js/v-50cb2a87.3d207dcf.js",revision:null},{url:"assets/js/v-514365f1.dbfce461.js",revision:null},{url:"assets/js/v-533c70f7.7761fbc8.js",revision:null},{url:"assets/js/v-583b3d0d.28e6d985.js",revision:null},{url:"assets/js/v-5ceabafb.67c45e64.js",revision:null},{url:"assets/js/v-61377328.b505d865.js",revision:null},{url:"assets/js/v-668d9be0.1dc4a6ce.js",revision:null},{url:"assets/js/v-66cc4fee.f56b4a7d.js",revision:null},{url:"assets/js/v-67a66f17.39e3ecc4.js",revision:null},{url:"assets/js/v-6b4d4a3d.67ebf779.js",revision:null},{url:"assets/js/v-6d93dbb2.5050967e.js",revision:null},{url:"assets/js/v-704e8e37.f24d4bec.js",revision:null},{url:"assets/js/v-737ff092.cba3fa65.js",revision:null},{url:"assets/js/v-743ff88e.d5c1926a.js",revision:null},{url:"assets/js/v-74a28670.3706508a.js",revision:null},{url:"assets/js/v-756ec2fc.35a1bfd0.js",revision:null},{url:"assets/js/v-7871496c.c7860420.js",revision:null},{url:"assets/js/v-7898f959.8fa52ffe.js",revision:null},{url:"assets/js/v-7af875a7.4cde3760.js",revision:null},{url:"assets/js/v-81cb4dce.568f524a.js",revision:null},{url:"assets/js/v-82949f3e.3d3a5fea.js",revision:null},{url:"assets/js/v-8daa1a0e.79e8ebc4.js",revision:null},{url:"assets/js/v-8dba60f6.751b9547.js",revision:null},{url:"assets/js/v-a1a49808.6f392f75.js",revision:null},{url:"assets/js/v-a7534f04.853a7378.js",revision:null},{url:"assets/js/v-aecc6e00.cb914fc1.js",revision:null},{url:"assets/js/v-b032db80.c8065e00.js",revision:null},{url:"assets/js/v-b7dac982.f22cb7d8.js",revision:null},{url:"assets/js/v-c9146c5e.bdcf12ac.js",revision:null},{url:"assets/js/v-d8d70e1a.67083e19.js",revision:null},{url:"assets/js/v-de155fda.70b40cf5.js",revision:null},{url:"assets/js/v-de867450.8e099847.js",revision:null},{url:"assets/js/v-e4322366.220f5abd.js",revision:null},{url:"assets/js/v-e565bdda.b77b1acd.js",revision:null},{url:"assets/js/v-e64f5648.dddcfa31.js",revision:null},{url:"assets/js/v-ee77801a.14ba160a.js",revision:null},{url:"assets/js/v-eff96fe2.47490dc9.js",revision:null},{url:"assets/js/v-f3ed9e5a.46c74ae7.js",revision:null},{url:"assets/js/v-f4351e9e.821c5dff.js",revision:null},{url:"assets/js/v-ffe3a066.30a2ccdf.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"ab21bd778491aaae73869a11ac0c995f"},{url:"en/advanced/faq.html",revision:"399d8fc3c3dcc92bd7be12fbde0f79ab"},{url:"en/advanced/intro.html",revision:"0455fef6d6a6e8c521ad87fd9cc2f32e"},{url:"en/advanced/why.html",revision:"ea3e5a4057054c19208c7181948a63e0"},{url:"en/guide/client/avatar.html",revision:"61a6ec581bdacc18783ab4b9f68279b2"},{url:"en/guide/client/count.html",revision:"6a4e24898db5f69b28d5abebc57ee4c1"},{url:"en/guide/client/emoji.html",revision:"9e341102f21852f3ba3aeac3bab8c604"},{url:"en/guide/client/i18n.html",revision:"3191e4845d898412e9a2a194b921218d"},{url:"en/guide/client/import.html",revision:"de288184ac0baffbdae1c83212d25ac7"},{url:"en/guide/client/intro.html",revision:"18e52632b84827462b1612f915e6a3ed"},{url:"en/guide/client/recentcomment.html",revision:"4c1cebb4234e7f77936c67e4f976219a"},{url:"en/guide/client/spa.html",revision:"d67b69821f391368d9f8921f66a6a727"},{url:"en/guide/client/style.html",revision:"bae8268e69edd1d9a0852162cfe90037"},{url:"en/guide/client/syntax.html",revision:"02a8349f77b17c98aab2bd3fc5262ecb"},{url:"en/guide/client/widget/index.html",revision:"98bfce923275847878692684b0cd1a00"},{url:"en/guide/client/widget/recent-comment.html",revision:"034148e394ee166e2b056c591f1a66db"},{url:"en/guide/get-started.html",revision:"0361d11ce6082dfbe01c4dfe377cc391"},{url:"en/guide/server/databases.html",revision:"9e8b003bcd9d28b32ea9818b33b3a0bc"},{url:"en/guide/server/intro.html",revision:"838ff7e2d3e0d541037423c30bc37adc"},{url:"en/guide/server/notification.html",revision:"39a1adaa2ca670897f2a2dcfdcb61267"},{url:"en/guide/server/socials.html",revision:"2df457f5269bbd06908782b90e9858a8"},{url:"en/guide/server/vps-deploy.html",revision:"7c9ec0e9708c50dfc4979ef4769216a6"},{url:"en/index.html",revision:"b22edc89b7d721349f79907e3b45f0b2"},{url:"en/migration/client.html",revision:"ef0513ef6e5580b48c3ad904036deef3"},{url:"en/migration/tool.html",revision:"a2fa7d6669a0eaa9f052c01f69176067"},{url:"en/migration/valine.html",revision:"5a7691bf686ba921e93aa0f4be2f9219"},{url:"en/reference/api.html",revision:"83aac49ef3da9d87131e97fdbd389352"},{url:"en/reference/client.html",revision:"778ac0455d5331e72919f5836b93be62"},{url:"en/reference/contribution.html",revision:"6ba53bd877fd6f7111d042bf2d431d7d"},{url:"en/reference/instance.html",revision:"160c68ffaeb5009861fb66314f5c0062"},{url:"en/reference/server.html",revision:"5bf7a4e434fb06bbc91a2e3b2bd8ae3d"},{url:"guide/client/avatar.html",revision:"f4336ce842642e8e541864d8dc0d5100"},{url:"guide/client/count.html",revision:"a634ce8214314914acc2ee9560f11cca"},{url:"guide/client/emoji.html",revision:"05b1c5038fc95e0d582c8cf3fccd4b99"},{url:"guide/client/i18n.html",revision:"5e469de1a9eba6b9fe88a6745a0af34f"},{url:"guide/client/import.html",revision:"d5b3ff902edfcd66af5aa7a17082f220"},{url:"guide/client/intro.html",revision:"e460e4e0e63fc8e5798117c460fa735f"},{url:"guide/client/spa.html",revision:"88384e68c707192f7f2f7adcd7312af3"},{url:"guide/client/style.html",revision:"ad9ae30240bdadf7a8848c19a9bcab44"},{url:"guide/client/syntax.html",revision:"ad81864a09e6e6feef67280d7b4f26ea"},{url:"guide/client/widget/index.html",revision:"2575b863c4e1bf936804a2bb9a90cc7e"},{url:"guide/client/widget/recent-comment.html",revision:"8904f64efcdfb9c60a977c87de06d16e"},{url:"guide/get-started.html",revision:"9e837fc3b4b14e86c80457b5e928d38b"},{url:"guide/server/cloudbase.html",revision:"0c86ccbab36f80005d20ee8cab0b04df"},{url:"guide/server/databases.html",revision:"99c1d4e962959a87f5d14e32f2a4d09e"},{url:"guide/server/intro.html",revision:"09cef5106670738c094a62c7ce597b3c"},{url:"guide/server/notification.html",revision:"e4f08efca9e0f5822012c5a554aa2548"},{url:"guide/server/socials.html",revision:"6e01dbdf3d310dfa1a9d5091297ff8f0"},{url:"guide/server/vps-deploy.html",revision:"d83c8438c8e98d43f739d1e33aaad7ad"},{url:"index.html",revision:"38badff86eadd97b86833ca8f7cf52a1"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"b6f138990a66d9773636364d7db1012c"},{url:"migration/tool.html",revision:"55a37cf05e55c125efd5f371c4cacfd0"},{url:"migration/valine.html",revision:"21b08774de7db8b513779fc1652eb572"},{url:"reference/api.html",revision:"02503d0c69fc4e8f3b354c0e36ccb914"},{url:"reference/client.html",revision:"7c2e0c9c3c3b49c09ba344c50761dba4"},{url:"reference/contribution.html",revision:"38529004b6d78e6fb45b8a6eac4f3c49"},{url:"reference/instance.html",revision:"0110097c39326567ebd175a312c04f3e"},{url:"reference/server.html",revision:"d05b847e39c9ac5eb3e52f6128a0a1a8"}],{})}));
