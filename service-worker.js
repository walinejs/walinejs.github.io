if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f10e265d5546e4bcef7f01b1a853a5b5"},{url:"advanced/ecosystem.html",revision:"215bcd17bfae61be76d0eae77d8fc08f"},{url:"advanced/faq.html",revision:"5cba7e4e1b36f582c5d9a4f6ee98f78d"},{url:"advanced/intro.html",revision:"88d10d1aaa64c746e5aa30e1262d7b4a"},{url:"advanced/why.html",revision:"88b734b304215ab3a4040fd3bbadd79f"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.cc606f82.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/3991.4c08b9f5.js",revision:null},{url:"assets/js/5455.f8a326d1.js",revision:null},{url:"assets/js/5556.265dcb69.js",revision:null},{url:"assets/js/801.7ba88d14.js",revision:null},{url:"assets/js/app.feb9726d.js",revision:null},{url:"assets/js/runtime~app.39670a92.js",revision:null},{url:"assets/js/v-057c9824.fc900ae3.js",revision:null},{url:"assets/js/v-058f99fc.8dbfc5cc.js",revision:null},{url:"assets/js/v-0b556720.e138f6f4.js",revision:null},{url:"assets/js/v-1b1feb10.3303e5b7.js",revision:null},{url:"assets/js/v-1bf8da39.f81fb1bb.js",revision:null},{url:"assets/js/v-271aae61.ce486f89.js",revision:null},{url:"assets/js/v-27d47a79.00f943c9.js",revision:null},{url:"assets/js/v-2812bd79.589be875.js",revision:null},{url:"assets/js/v-2945f13a.cc9b0e2d.js",revision:null},{url:"assets/js/v-2d0a870d.06e5cb26.js",revision:null},{url:"assets/js/v-2fad59ab.279c2fdb.js",revision:null},{url:"assets/js/v-356c0ac4.5fd599aa.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.ba158343.js",revision:null},{url:"assets/js/v-396f59cd.d1f8a232.js",revision:null},{url:"assets/js/v-40608902.b72907df.js",revision:null},{url:"assets/js/v-434e7c8c.d4e43e1b.js",revision:null},{url:"assets/js/v-45360123.94e84d95.js",revision:null},{url:"assets/js/v-4819d2f6.9cc2c1f1.js",revision:null},{url:"assets/js/v-487079c5.1f37b587.js",revision:null},{url:"assets/js/v-4dec5b45.0a728cce.js",revision:null},{url:"assets/js/v-4f0168b2.2a46e005.js",revision:null},{url:"assets/js/v-4fe1dc58.65bf9cc8.js",revision:null},{url:"assets/js/v-50cb2a87.a1610ebd.js",revision:null},{url:"assets/js/v-514365f1.e9e6f9a4.js",revision:null},{url:"assets/js/v-533c70f7.0323aa1d.js",revision:null},{url:"assets/js/v-583b3d0d.60f2193c.js",revision:null},{url:"assets/js/v-5ceabafb.6449ff66.js",revision:null},{url:"assets/js/v-61377328.e846073d.js",revision:null},{url:"assets/js/v-668d9be0.e7a6c6bc.js",revision:null},{url:"assets/js/v-66cc4fee.c034bc00.js",revision:null},{url:"assets/js/v-67a66f17.0a66cea6.js",revision:null},{url:"assets/js/v-6b4d4a3d.05721069.js",revision:null},{url:"assets/js/v-6d93dbb2.43e2a659.js",revision:null},{url:"assets/js/v-704e8e37.26661009.js",revision:null},{url:"assets/js/v-737ff092.2ee80362.js",revision:null},{url:"assets/js/v-743ff88e.32099925.js",revision:null},{url:"assets/js/v-74a28670.d50a9c50.js",revision:null},{url:"assets/js/v-756ec2fc.271b1851.js",revision:null},{url:"assets/js/v-7871496c.a1b5c588.js",revision:null},{url:"assets/js/v-7898f959.8fa06520.js",revision:null},{url:"assets/js/v-7af875a7.bfd04d9c.js",revision:null},{url:"assets/js/v-81cb4dce.34f489b2.js",revision:null},{url:"assets/js/v-82949f3e.448c311b.js",revision:null},{url:"assets/js/v-8daa1a0e.207f5518.js",revision:null},{url:"assets/js/v-8dba60f6.3ad293e1.js",revision:null},{url:"assets/js/v-a1a49808.e073d799.js",revision:null},{url:"assets/js/v-a7534f04.88b6bc33.js",revision:null},{url:"assets/js/v-aecc6e00.6658f1a3.js",revision:null},{url:"assets/js/v-b032db80.8b2c3a73.js",revision:null},{url:"assets/js/v-b7dac982.14ab0c47.js",revision:null},{url:"assets/js/v-c9146c5e.fb01e3ab.js",revision:null},{url:"assets/js/v-d8d70e1a.6db014a3.js",revision:null},{url:"assets/js/v-de155fda.733a0fd6.js",revision:null},{url:"assets/js/v-de867450.69fb75af.js",revision:null},{url:"assets/js/v-e4322366.c2d8e7fe.js",revision:null},{url:"assets/js/v-e565bdda.6afe3191.js",revision:null},{url:"assets/js/v-e64f5648.38545377.js",revision:null},{url:"assets/js/v-ee77801a.af53e99c.js",revision:null},{url:"assets/js/v-eff96fe2.4c2fe93f.js",revision:null},{url:"assets/js/v-f3ed9e5a.5bef8f7d.js",revision:null},{url:"assets/js/v-f4351e9e.08bc5396.js",revision:null},{url:"assets/js/v-ffe3a066.1bc633e0.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"d59226975c1c7a62170ebfb990da981f"},{url:"en/advanced/faq.html",revision:"a930f562660b755800d3c35bbe4bfb5c"},{url:"en/advanced/intro.html",revision:"86f5fb027e9a53f071002aabc4f36993"},{url:"en/advanced/why.html",revision:"ff7033c503b4d0185f6fea1a7d539630"},{url:"en/guide/client/avatar.html",revision:"5c84eb188009e70e1fc147ae4ebbf5fb"},{url:"en/guide/client/count.html",revision:"e505275ddf56d8858a1a0afe93944583"},{url:"en/guide/client/emoji.html",revision:"fab82791380e7e6e739b5cd6c905e7b4"},{url:"en/guide/client/i18n.html",revision:"883c59e9552926f2bf4599f082527c5c"},{url:"en/guide/client/import.html",revision:"7bc417e6731e3f4f8cb932b06d08f08d"},{url:"en/guide/client/intro.html",revision:"4d33dee35a1721b31b9e5426a26cb703"},{url:"en/guide/client/recentcomment.html",revision:"433954103ac9efb8a1090dc13d95fabf"},{url:"en/guide/client/spa.html",revision:"ac11eeebf7a0d7b109670a4c3a117f66"},{url:"en/guide/client/style.html",revision:"17e8a6c6325268e2804796a40f3ab2c5"},{url:"en/guide/client/syntax.html",revision:"cbab85c9bda12eca203f35042fd1b747"},{url:"en/guide/client/widget/index.html",revision:"9251e53a2d3ac6c275609cea117a726c"},{url:"en/guide/client/widget/recent-comment.html",revision:"98bc7b21fd01f086620d03cbf015e686"},{url:"en/guide/get-started.html",revision:"97cdaec30926c62c89e8e0cf7d16f75e"},{url:"en/guide/server/databases.html",revision:"4633b38d7c184b62eddd5c42c845ebd8"},{url:"en/guide/server/intro.html",revision:"670e3621fe02c983cdfefd78a955d2f3"},{url:"en/guide/server/notification.html",revision:"0402a18c2325b13dd4a1961ab10d2024"},{url:"en/guide/server/socials.html",revision:"ff4f74f8539bea1c8fcdfd991b124bb8"},{url:"en/guide/server/vps-deploy.html",revision:"aca2392b97ea3ab821c5f3e6df09a682"},{url:"en/index.html",revision:"0f0c2bbecb44318d2963066f3895f98c"},{url:"en/migration/client.html",revision:"5287edc3b23ef1c7208c7df442bcd9c9"},{url:"en/migration/tool.html",revision:"d12349b9258be31af7bdfdeaddc92d18"},{url:"en/migration/valine.html",revision:"00448637a55d5573b660bb9bb23d05e6"},{url:"en/reference/api.html",revision:"291a5b1a77d43df3d56ceb67455fd2dd"},{url:"en/reference/client.html",revision:"40599f692225eb26966d41d825d34909"},{url:"en/reference/contribution.html",revision:"d8dc35748b1733d9f231868a08659d73"},{url:"en/reference/instance.html",revision:"e7c56b57033600603b19cbc8c7e0b6d0"},{url:"en/reference/server.html",revision:"b654ffcca1be5390b9424a37bd701318"},{url:"guide/client/avatar.html",revision:"931465352f6c154e4fdc7cb42c35b9fe"},{url:"guide/client/count.html",revision:"00af6a00f7ba53131745609c7a0845da"},{url:"guide/client/emoji.html",revision:"19e1f552b6929195e96400cb763dda66"},{url:"guide/client/i18n.html",revision:"c2e1bf01f87b507b07adf472a708513e"},{url:"guide/client/import.html",revision:"a3eb374d2cee0c9907a2425a5e8c91ae"},{url:"guide/client/intro.html",revision:"5606b1c826bc394585866b6eaca9ddd4"},{url:"guide/client/spa.html",revision:"064997ef14a134da5dff836e6eb40080"},{url:"guide/client/style.html",revision:"4fd283f7ab8a47b39bb87b430b585eab"},{url:"guide/client/syntax.html",revision:"20cac0bcf21f31f8a59da045a95b1aa1"},{url:"guide/client/widget/index.html",revision:"0cc6a47ddb91c2e6f51c9c08f851609c"},{url:"guide/client/widget/recent-comment.html",revision:"58d82a375da59372e4971c493aeef14b"},{url:"guide/get-started.html",revision:"6d2285451aa7e9c8d1bf76ca124ec58f"},{url:"guide/server/cloudbase.html",revision:"5fc738e25b7eb9f83dc327c9dc855141"},{url:"guide/server/databases.html",revision:"869953a5beb2e29e03de91f5937d3a83"},{url:"guide/server/intro.html",revision:"75d0e1f387bdbf744bef2ff02d47d979"},{url:"guide/server/notification.html",revision:"6bd3007ecd9dba557a15575804f70faf"},{url:"guide/server/socials.html",revision:"82f1373ec2a020555a54f53ac059fcf3"},{url:"guide/server/vps-deploy.html",revision:"c9f5a62c4e6dee546a9afbd023f4a24c"},{url:"index.html",revision:"502320701bbdd35f570196eabdef416e"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"175f217347067215ff2e0c610e5403dc"},{url:"migration/tool.html",revision:"42c45951dce0579a1afc793f0200c46e"},{url:"migration/valine.html",revision:"c755542b20cb2ce36bab3a067772be6f"},{url:"reference/api.html",revision:"9de8fbc091289346b881ac502f109c10"},{url:"reference/client.html",revision:"fdda04e36fea75de42cfc5280174bab7"},{url:"reference/contribution.html",revision:"4d51328a9c2a2220c0b1696b6a663939"},{url:"reference/instance.html",revision:"aeec6972e43a2843709264b452bbd9d0"},{url:"reference/server.html",revision:"49ff262401324b38d68443659b917b9f"}],{})}));
