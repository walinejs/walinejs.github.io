if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"540e1b0d7a459d9e34145f0a66de55d4"},{url:"advanced/ecosystem.html",revision:"49465b348fcfd8b067029631d00c72d7"},{url:"advanced/faq.html",revision:"acc75812a64cb209f5bb89297d9902a4"},{url:"advanced/intro.html",revision:"61d15eb22385aab10f710f9292492afd"},{url:"advanced/why.html",revision:"01ebda29f64b286be6740ea7751e64f5"},{url:"assets/css/959.styles.1a78020b.css",revision:null},{url:"assets/css/styles.6877a3c5.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.38f8d3c9.js",revision:null},{url:"assets/js/5455.0b091ee5.js",revision:null},{url:"assets/js/5556.6a050015.js",revision:null},{url:"assets/js/801.538d31e1.js",revision:null},{url:"assets/js/9230.aef6cf95.js",revision:null},{url:"assets/js/app.2a2ec873.js",revision:null},{url:"assets/js/runtime~app.6c6f6824.js",revision:null},{url:"assets/js/v-057c9824.709e2249.js",revision:null},{url:"assets/js/v-058f99fc.7400afb4.js",revision:null},{url:"assets/js/v-0b556720.b54f3a71.js",revision:null},{url:"assets/js/v-1b1feb10.6c25699d.js",revision:null},{url:"assets/js/v-1bf8da39.59f1598a.js",revision:null},{url:"assets/js/v-271aae61.28c798d0.js",revision:null},{url:"assets/js/v-27d47a79.a34d34ba.js",revision:null},{url:"assets/js/v-2812bd79.4131b291.js",revision:null},{url:"assets/js/v-2945f13a.c99423f3.js",revision:null},{url:"assets/js/v-2d0a870d.4b858e11.js",revision:null},{url:"assets/js/v-2fad59ab.0fd4208d.js",revision:null},{url:"assets/js/v-356c0ac4.414aba4f.js",revision:null},{url:"assets/js/v-3706649a.b38a5ec8.js",revision:null},{url:"assets/js/v-38007666.c654ad94.js",revision:null},{url:"assets/js/v-396f59cd.a4812e90.js",revision:null},{url:"assets/js/v-40608902.16590c6b.js",revision:null},{url:"assets/js/v-434e7c8c.891723d1.js",revision:null},{url:"assets/js/v-45360123.b1fb7b40.js",revision:null},{url:"assets/js/v-4819d2f6.a01dff4b.js",revision:null},{url:"assets/js/v-487079c5.fb3a3c7c.js",revision:null},{url:"assets/js/v-4dec5b45.46040826.js",revision:null},{url:"assets/js/v-4f0168b2.9e5340c6.js",revision:null},{url:"assets/js/v-4fe1dc58.2b4d508b.js",revision:null},{url:"assets/js/v-50cb2a87.17be1ee9.js",revision:null},{url:"assets/js/v-514365f1.a50038cb.js",revision:null},{url:"assets/js/v-533c70f7.cecac332.js",revision:null},{url:"assets/js/v-583b3d0d.661797cb.js",revision:null},{url:"assets/js/v-5ceabafb.3b770fdb.js",revision:null},{url:"assets/js/v-61377328.8538b77e.js",revision:null},{url:"assets/js/v-668d9be0.96f0fc27.js",revision:null},{url:"assets/js/v-66cc4fee.9f703755.js",revision:null},{url:"assets/js/v-67a66f17.b009c3cd.js",revision:null},{url:"assets/js/v-6b4d4a3d.67f2fe1e.js",revision:null},{url:"assets/js/v-6d93dbb2.bea45162.js",revision:null},{url:"assets/js/v-704e8e37.ba7341fa.js",revision:null},{url:"assets/js/v-737ff092.9f6ccbe4.js",revision:null},{url:"assets/js/v-743ff88e.ec979839.js",revision:null},{url:"assets/js/v-74a28670.4f5d8722.js",revision:null},{url:"assets/js/v-756ec2fc.8ca06783.js",revision:null},{url:"assets/js/v-7871496c.74620023.js",revision:null},{url:"assets/js/v-7898f959.5e01090e.js",revision:null},{url:"assets/js/v-7af875a7.ee748104.js",revision:null},{url:"assets/js/v-81cb4dce.00f68e38.js",revision:null},{url:"assets/js/v-82949f3e.be40ca55.js",revision:null},{url:"assets/js/v-8daa1a0e.64d1e18f.js",revision:null},{url:"assets/js/v-8dba60f6.ea070a07.js",revision:null},{url:"assets/js/v-a1a49808.df55d18a.js",revision:null},{url:"assets/js/v-a7534f04.819c5a74.js",revision:null},{url:"assets/js/v-aecc6e00.375c0930.js",revision:null},{url:"assets/js/v-b032db80.b5d10ff9.js",revision:null},{url:"assets/js/v-b7dac982.4dc4cd08.js",revision:null},{url:"assets/js/v-c9146c5e.1f0674e1.js",revision:null},{url:"assets/js/v-d8d70e1a.3efca444.js",revision:null},{url:"assets/js/v-de155fda.98f442ff.js",revision:null},{url:"assets/js/v-de867450.64e57e57.js",revision:null},{url:"assets/js/v-e4322366.69fe203d.js",revision:null},{url:"assets/js/v-e565bdda.3d0b65c6.js",revision:null},{url:"assets/js/v-e64f5648.f22d10c3.js",revision:null},{url:"assets/js/v-ee77801a.797fb2f2.js",revision:null},{url:"assets/js/v-eff96fe2.1ff3e686.js",revision:null},{url:"assets/js/v-f3ed9e5a.dcbd651f.js",revision:null},{url:"assets/js/v-f4351e9e.a3a06c2a.js",revision:null},{url:"assets/js/v-ffe3a066.faca50e7.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"91a93f1d500c3d88f24f2cf926fdf1ed"},{url:"en/advanced/faq.html",revision:"28555205c5cae52e804e3f608877afd0"},{url:"en/advanced/intro.html",revision:"fc2ce926f0e39a07459236543b10e191"},{url:"en/advanced/why.html",revision:"867a9505fed9dcd8eb3749065e9bb801"},{url:"en/guide/client/avatar.html",revision:"f3bc98f3c844c45045553c8acc7a402a"},{url:"en/guide/client/count.html",revision:"3341686c6489e8c909da2b6f8a51cd6a"},{url:"en/guide/client/emoji.html",revision:"49237095c1e6e96944e2eac6695aab00"},{url:"en/guide/client/i18n.html",revision:"551cbedd611215e20d19756872b32920"},{url:"en/guide/client/import.html",revision:"a0aba9cf5e6c15082e6dde7b0362346e"},{url:"en/guide/client/intro.html",revision:"b57ccb43914a86ba74b34a32fb7ca372"},{url:"en/guide/client/recentcomment.html",revision:"f1479acaaec0863e5a6aa0714b40c613"},{url:"en/guide/client/spa.html",revision:"38c540c5d76c2a81fd0c1810e8c39045"},{url:"en/guide/client/style.html",revision:"dd94fadc0a3ecaf04d58fd41caaf7fa1"},{url:"en/guide/client/syntax.html",revision:"6dc4759cb6c30c1f5b3252c3330e45a1"},{url:"en/guide/client/widget/index.html",revision:"da9a54619836beac8f8a13e7de95fa22"},{url:"en/guide/client/widget/recent-comment.html",revision:"eacb0071b321ee313706a863b52cc6c4"},{url:"en/guide/get-started.html",revision:"6a6e3335e66747d28714fca038b8f01d"},{url:"en/guide/server/databases.html",revision:"182177c00ae7773b40a2c8c6ba841fdb"},{url:"en/guide/server/intro.html",revision:"f8864d2e3cc419d7eaec2510c9ffb0b6"},{url:"en/guide/server/notification.html",revision:"94d9179e837964ebddd0177ffefecd20"},{url:"en/guide/server/socials.html",revision:"e7c141d9c03d9f29535b2afccde5b8c1"},{url:"en/guide/server/vps-deploy.html",revision:"ee381a6e25ed2bd5cf9f8f21f39e5aea"},{url:"en/index.html",revision:"b371b23fb935711117f2f5ee7e68cdf9"},{url:"en/migration/client.html",revision:"f902e0601a331d7af8c7511ab8ab735e"},{url:"en/migration/tool.html",revision:"8e655cd4f3a012334d9bb32a8bb7a28e"},{url:"en/migration/valine.html",revision:"1280ef61da60c239cb04f0b424403c53"},{url:"en/reference/api.html",revision:"49ade86f98d335f49d64b50ee94f166e"},{url:"en/reference/client.html",revision:"2a7d830a6a65b84906d7188274e30fa4"},{url:"en/reference/contribution.html",revision:"392e113b478f386740f358f13e92f776"},{url:"en/reference/instance.html",revision:"75c8bac7707077fcca4facf1f79da788"},{url:"en/reference/server.html",revision:"7e575632df6a6cc3bc0363fb823a8b2b"},{url:"guide/client/avatar.html",revision:"6cee08d62dbb7c6b06c130390becd50b"},{url:"guide/client/count.html",revision:"77b1ba787f43a6f1c2efdba8156b7d2f"},{url:"guide/client/emoji.html",revision:"a9bc57a4e89250d87781427638b19a51"},{url:"guide/client/i18n.html",revision:"258bdc755d6d6449201807ea04f79f11"},{url:"guide/client/import.html",revision:"1e66179ee05867821154230db10272b8"},{url:"guide/client/intro.html",revision:"919ea325100c623d730166c739b57c23"},{url:"guide/client/spa.html",revision:"48a880a9dab9b6332df855c13aa82d60"},{url:"guide/client/style.html",revision:"846e6baf302fd1901cb88638d98a25a0"},{url:"guide/client/syntax.html",revision:"aa09d8ee46a1ac11bad40b90d2437eed"},{url:"guide/client/widget/index.html",revision:"4d600d47b3d94017b57292544d131523"},{url:"guide/client/widget/recent-comment.html",revision:"862feb1b47a8fb5ffe052bc6735feb3c"},{url:"guide/get-started.html",revision:"bb06bdd3a3c854279c0bafb7de7cc8d7"},{url:"guide/server/cloudbase.html",revision:"76c44cb471d65044d1ec05e0a34444b1"},{url:"guide/server/databases.html",revision:"e27cfeac2406482783790924861975c7"},{url:"guide/server/intro.html",revision:"1be33322a067df593a911008d7523890"},{url:"guide/server/notification.html",revision:"528407ad44445b37748866e07fdf4b64"},{url:"guide/server/socials.html",revision:"016fe8b14b3522d2137cd12dbe20bd25"},{url:"guide/server/vps-deploy.html",revision:"88f2dc0c646e5d11b9f599797bfcf6fd"},{url:"index.html",revision:"a66b21e4406e662d374fbd8c4a6359c8"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"5e759015005c7a0b6fae1ccb580709f3"},{url:"migration/tool.html",revision:"72169a7fbdc1dd4b753fed573aea6e69"},{url:"migration/valine.html",revision:"664535e5a0b889363c8e540b67ced976"},{url:"reference/api.html",revision:"3a3fc23470733a9c69d33cb55fb6ab93"},{url:"reference/client.html",revision:"99eec3823ba3c26065b3299ab8e08ab9"},{url:"reference/contribution.html",revision:"ccff10f57dc13c959250874900084671"},{url:"reference/instance.html",revision:"576e2266791f6c89dc0345f0a6a77b75"},{url:"reference/server.html",revision:"72ce73b652ac229b4dfbfae216a7233e"}],{})}));
