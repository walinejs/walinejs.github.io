if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7d6d73e0c9c920cb291caa2d68986ffd"},{url:"advanced/ecosystem.html",revision:"a6e0f71ee2eaa3c24d97a4aebb753abd"},{url:"advanced/faq.html",revision:"142c18dd1d20bd6b2ccceeddd4ff1973"},{url:"advanced/intro.html",revision:"cc7c6b8f8984f720fe2410fb5541f904"},{url:"advanced/why.html",revision:"55353dd1225dec74ec5b97347d26bf01"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.f20ca8e0.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1709.6141bd13.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.4e5193e8.js",revision:null},{url:"assets/js/696.8533d737.js",revision:null},{url:"assets/js/7769.01dcf3b2.js",revision:null},{url:"assets/js/app.5edcef82.js",revision:null},{url:"assets/js/runtime~app.81c3b9c8.js",revision:null},{url:"assets/js/v-057c9824.b2867691.js",revision:null},{url:"assets/js/v-058f99fc.52dbdc68.js",revision:null},{url:"assets/js/v-0b556720.e2ab95b9.js",revision:null},{url:"assets/js/v-1b1feb10.dc3c3496.js",revision:null},{url:"assets/js/v-1bf8da39.f3c74ed8.js",revision:null},{url:"assets/js/v-271aae61.76f19e62.js",revision:null},{url:"assets/js/v-27d47a79.af67ec2f.js",revision:null},{url:"assets/js/v-2812bd79.7fcbe450.js",revision:null},{url:"assets/js/v-2945f13a.79b2157d.js",revision:null},{url:"assets/js/v-2d0a870d.7f4644d7.js",revision:null},{url:"assets/js/v-2fad59ab.12ca1281.js",revision:null},{url:"assets/js/v-356c0ac4.1d9b1b18.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.be397fbb.js",revision:null},{url:"assets/js/v-396f59cd.3718728e.js",revision:null},{url:"assets/js/v-40608902.753ae4dc.js",revision:null},{url:"assets/js/v-434e7c8c.805cb390.js",revision:null},{url:"assets/js/v-45360123.1840147e.js",revision:null},{url:"assets/js/v-4819d2f6.08def10f.js",revision:null},{url:"assets/js/v-487079c5.aff6e653.js",revision:null},{url:"assets/js/v-4dec5b45.3719a6c5.js",revision:null},{url:"assets/js/v-4f0168b2.c4f1a3b9.js",revision:null},{url:"assets/js/v-4fe1dc58.cfc18d45.js",revision:null},{url:"assets/js/v-50cb2a87.839ad6e9.js",revision:null},{url:"assets/js/v-514365f1.fcfc38fd.js",revision:null},{url:"assets/js/v-533c70f7.fa8cbee3.js",revision:null},{url:"assets/js/v-583b3d0d.ce21722a.js",revision:null},{url:"assets/js/v-5ceabafb.0681e834.js",revision:null},{url:"assets/js/v-61377328.5e6507db.js",revision:null},{url:"assets/js/v-668d9be0.4b5a14fd.js",revision:null},{url:"assets/js/v-66cc4fee.b4119be9.js",revision:null},{url:"assets/js/v-67a66f17.385b91ee.js",revision:null},{url:"assets/js/v-6b4d4a3d.804695bf.js",revision:null},{url:"assets/js/v-6d93dbb2.022c45d5.js",revision:null},{url:"assets/js/v-704e8e37.88210c6f.js",revision:null},{url:"assets/js/v-737ff092.9dc82581.js",revision:null},{url:"assets/js/v-743ff88e.8a5ef495.js",revision:null},{url:"assets/js/v-74a28670.b6193dc7.js",revision:null},{url:"assets/js/v-756ec2fc.d9b649ed.js",revision:null},{url:"assets/js/v-7871496c.668099ab.js",revision:null},{url:"assets/js/v-7898f959.f30a493f.js",revision:null},{url:"assets/js/v-7af875a7.9ab53f1f.js",revision:null},{url:"assets/js/v-81cb4dce.4fe7d075.js",revision:null},{url:"assets/js/v-82949f3e.7132c0cd.js",revision:null},{url:"assets/js/v-8daa1a0e.96c53f22.js",revision:null},{url:"assets/js/v-8dba60f6.6c8e5bb1.js",revision:null},{url:"assets/js/v-a1a49808.c5cfe439.js",revision:null},{url:"assets/js/v-a7534f04.d314520d.js",revision:null},{url:"assets/js/v-aecc6e00.9bfbc674.js",revision:null},{url:"assets/js/v-b032db80.09b50044.js",revision:null},{url:"assets/js/v-b7dac982.07863e76.js",revision:null},{url:"assets/js/v-c9146c5e.e5fde3bd.js",revision:null},{url:"assets/js/v-d8d70e1a.ebe42030.js",revision:null},{url:"assets/js/v-de155fda.51d8a85d.js",revision:null},{url:"assets/js/v-de867450.2d2ec402.js",revision:null},{url:"assets/js/v-e4322366.7ed099db.js",revision:null},{url:"assets/js/v-e565bdda.c56f6a16.js",revision:null},{url:"assets/js/v-e64f5648.d2a9383a.js",revision:null},{url:"assets/js/v-ee77801a.a5220e52.js",revision:null},{url:"assets/js/v-eff96fe2.bad754b1.js",revision:null},{url:"assets/js/v-f3ed9e5a.50d17eeb.js",revision:null},{url:"assets/js/v-f4351e9e.ccaaab03.js",revision:null},{url:"assets/js/v-ffe3a066.96548c62.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"9b6a52cbe5beb8691aa3884b8bd669b9"},{url:"en/advanced/faq.html",revision:"70b0a35e3d25e244fc991487584f7a0f"},{url:"en/advanced/intro.html",revision:"b2c008b89d46c09f9191fe85ba42ab9c"},{url:"en/advanced/why.html",revision:"caba0d5530bad8b364a8830dd8a8d81b"},{url:"en/guide/client/avatar.html",revision:"98a44c2b75917cbd8b2a785942bb3821"},{url:"en/guide/client/count.html",revision:"a3fad79f011fe2fcbacba2358a24d007"},{url:"en/guide/client/emoji.html",revision:"4dbf0b5e1d60bf4fa6d27f97531ac3c2"},{url:"en/guide/client/i18n.html",revision:"a5e19a4f7cbe6605fd576807d5ff228e"},{url:"en/guide/client/import.html",revision:"ef8746245d360f25e37b83cc4e9a40ed"},{url:"en/guide/client/intro.html",revision:"2b06986601dad248df8c9b8eb65c0f9d"},{url:"en/guide/client/recentcomment.html",revision:"48e3144e3fa08d3276b5acee8b73298d"},{url:"en/guide/client/spa.html",revision:"e74212f5c5c8c954618dc80b65796e14"},{url:"en/guide/client/style.html",revision:"346e8f8bafa7c373bee6e401a83992d8"},{url:"en/guide/client/syntax.html",revision:"86033e479eadf531881cd1b8de3bf806"},{url:"en/guide/client/widget/index.html",revision:"c09fec69f7d42c251e7729e17dc2c8a4"},{url:"en/guide/client/widget/recent-comment.html",revision:"678011a42d6668b54a0f7d8be58d97f8"},{url:"en/guide/get-started.html",revision:"f00521f2040449ce3766174ef4de3cf1"},{url:"en/guide/server/databases.html",revision:"3424f89ce0bfbaef82045de6c3193c2a"},{url:"en/guide/server/intro.html",revision:"22bfc47e1b0b4028e1f94c37bf53a903"},{url:"en/guide/server/notification.html",revision:"d451e494e597c41289d2386c68ad6cde"},{url:"en/guide/server/socials.html",revision:"1377db7379ebe2e0cbf3a6876ef028e6"},{url:"en/guide/server/vps-deploy.html",revision:"565a538baab971d433ea13f06b1eaf80"},{url:"en/index.html",revision:"ad1493499c5a9a3ea12ca598167d8451"},{url:"en/migration/client.html",revision:"7a77cf92332444f5d9e1d773414bf292"},{url:"en/migration/tool.html",revision:"1716b2e8f3660fdc5b26e7e50ec07e50"},{url:"en/migration/valine.html",revision:"0ae57c7d3c40f4a7d130c07f3ff0546e"},{url:"en/reference/api.html",revision:"121b44db583edfbbc35328127b4f6fbd"},{url:"en/reference/client.html",revision:"4f9cec39a3db8f10d8928863a2f44ce6"},{url:"en/reference/contribution.html",revision:"0fce9550d635d405cbda401bbc4f7465"},{url:"en/reference/instance.html",revision:"28fec2a480c1434559e3feb3387ab16c"},{url:"en/reference/server.html",revision:"a87b069e88acc2526013c1ea4cebd08d"},{url:"guide/client/avatar.html",revision:"b5f83dd694c30ca60694dbb97df9f607"},{url:"guide/client/count.html",revision:"869ebac900719da40d4f1883f75691e6"},{url:"guide/client/emoji.html",revision:"577fa5f534447119cd1178ac87ddc8f1"},{url:"guide/client/i18n.html",revision:"d1fc65532801eb327d2320df438d02d7"},{url:"guide/client/import.html",revision:"19292d76a87a8e7e897bb1c34c670a0b"},{url:"guide/client/intro.html",revision:"1d4d697bdc5c0d45e61b1313a69d0b04"},{url:"guide/client/spa.html",revision:"efef2b611a534477b79394855ccdc786"},{url:"guide/client/style.html",revision:"567fa5512c860783e93346d229f9735c"},{url:"guide/client/syntax.html",revision:"6d70756c920165ed72cb76f1067273d2"},{url:"guide/client/widget/index.html",revision:"ff285f2f797e02b5045bc2431a3cac0f"},{url:"guide/client/widget/recent-comment.html",revision:"42c8f97478a973c9b53fc1d655c2e323"},{url:"guide/get-started.html",revision:"59e42dbb5c63391b118baea651ed6384"},{url:"guide/server/cloudbase.html",revision:"6a871d0e53526a7fe1d587e718077853"},{url:"guide/server/databases.html",revision:"4e4817bafb053f48d9929b1b67ea126c"},{url:"guide/server/intro.html",revision:"3fe3389ce7a2c3344182766691dcdb88"},{url:"guide/server/notification.html",revision:"eaa0e10588f8cb7bbb50e57058ba4c14"},{url:"guide/server/socials.html",revision:"5f8775469c6364f3a535824cf9779b3a"},{url:"guide/server/vps-deploy.html",revision:"a4c5c2b903327caf117ffbb1300dbce0"},{url:"index.html",revision:"66800cb76d84c789157cdc8044dbf983"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"ff39afdfa2979602d1a39c89b036e8b0"},{url:"migration/tool.html",revision:"311809e720a3637fd7c943786df4cadd"},{url:"migration/valine.html",revision:"539f0145413516a0c4af70c35053dbb5"},{url:"reference/api.html",revision:"b30205c66b689e32c9612c8a869750de"},{url:"reference/client.html",revision:"c341d404e120518132487bd73dc4254a"},{url:"reference/contribution.html",revision:"46b554b7f2f371251800f694883717f0"},{url:"reference/instance.html",revision:"cd8f0cbc36520644187b472e9bb1e7e7"},{url:"reference/server.html",revision:"2c0bb144c690ce24b0ad5b24a11142a7"}],{})}));
