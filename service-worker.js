if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"d19d3b604b12fc19be60e36146f45fae"},{url:"advanced/ecosystem.html",revision:"0cd5f78051daab3388883df114bd0f46"},{url:"advanced/faq.html",revision:"ea14641c945ced1f8c422c438af19f20"},{url:"advanced/intro.html",revision:"c16a08b3ea73ad4ac7fca3b8e054477a"},{url:"advanced/why.html",revision:"247ecad67a0dd586db3084cfbc0a6963"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.23382f3f.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1709.9bb28eaa.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.4e5193e8.js",revision:null},{url:"assets/js/696.6c754912.js",revision:null},{url:"assets/js/7769.01dcf3b2.js",revision:null},{url:"assets/js/app.06a99183.js",revision:null},{url:"assets/js/runtime~app.be8a8e9d.js",revision:null},{url:"assets/js/v-057c9824.d525aff8.js",revision:null},{url:"assets/js/v-058f99fc.53d63fef.js",revision:null},{url:"assets/js/v-0b556720.01cad20b.js",revision:null},{url:"assets/js/v-1b1feb10.9748106d.js",revision:null},{url:"assets/js/v-1bf8da39.04af8644.js",revision:null},{url:"assets/js/v-271aae61.226ed3ca.js",revision:null},{url:"assets/js/v-27d47a79.bef8efb7.js",revision:null},{url:"assets/js/v-2812bd79.da5546ed.js",revision:null},{url:"assets/js/v-2945f13a.cfd94046.js",revision:null},{url:"assets/js/v-2d0a870d.5c82a4d3.js",revision:null},{url:"assets/js/v-2fad59ab.7fb0f9d0.js",revision:null},{url:"assets/js/v-356c0ac4.7a5fb006.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.ec920f99.js",revision:null},{url:"assets/js/v-396f59cd.77011aab.js",revision:null},{url:"assets/js/v-40608902.ecd0d246.js",revision:null},{url:"assets/js/v-434e7c8c.1fe85ae1.js",revision:null},{url:"assets/js/v-45360123.0629f3a2.js",revision:null},{url:"assets/js/v-4819d2f6.83d78d9e.js",revision:null},{url:"assets/js/v-487079c5.6fba9cc4.js",revision:null},{url:"assets/js/v-4dec5b45.66df79e2.js",revision:null},{url:"assets/js/v-4f0168b2.fb092dba.js",revision:null},{url:"assets/js/v-4fe1dc58.8ffa9095.js",revision:null},{url:"assets/js/v-50cb2a87.e45f6876.js",revision:null},{url:"assets/js/v-514365f1.5b1f2431.js",revision:null},{url:"assets/js/v-533c70f7.3c001c15.js",revision:null},{url:"assets/js/v-583b3d0d.43b94996.js",revision:null},{url:"assets/js/v-5ceabafb.ba6f2b39.js",revision:null},{url:"assets/js/v-61377328.4271b17b.js",revision:null},{url:"assets/js/v-668d9be0.3d6e5211.js",revision:null},{url:"assets/js/v-66cc4fee.eb374714.js",revision:null},{url:"assets/js/v-67a66f17.3a59b5dd.js",revision:null},{url:"assets/js/v-6b4d4a3d.d286d546.js",revision:null},{url:"assets/js/v-6d93dbb2.9d3b4f3a.js",revision:null},{url:"assets/js/v-704e8e37.2e670305.js",revision:null},{url:"assets/js/v-737ff092.045381b1.js",revision:null},{url:"assets/js/v-743ff88e.2f4c8b72.js",revision:null},{url:"assets/js/v-74a28670.33d49931.js",revision:null},{url:"assets/js/v-756ec2fc.55c52a95.js",revision:null},{url:"assets/js/v-7871496c.c8b8cded.js",revision:null},{url:"assets/js/v-7898f959.588a4788.js",revision:null},{url:"assets/js/v-7af875a7.c36a98b0.js",revision:null},{url:"assets/js/v-81cb4dce.dce76808.js",revision:null},{url:"assets/js/v-82949f3e.0d2692b6.js",revision:null},{url:"assets/js/v-8daa1a0e.a04fe97b.js",revision:null},{url:"assets/js/v-8dba60f6.124a4218.js",revision:null},{url:"assets/js/v-a1a49808.9693e5c5.js",revision:null},{url:"assets/js/v-a7534f04.f223ce8f.js",revision:null},{url:"assets/js/v-aecc6e00.d9b84196.js",revision:null},{url:"assets/js/v-b032db80.33fadb2d.js",revision:null},{url:"assets/js/v-b7dac982.4277ca93.js",revision:null},{url:"assets/js/v-c9146c5e.a8db51f7.js",revision:null},{url:"assets/js/v-d8d70e1a.988a638b.js",revision:null},{url:"assets/js/v-de155fda.dc397d38.js",revision:null},{url:"assets/js/v-de867450.146a906f.js",revision:null},{url:"assets/js/v-e4322366.4152b603.js",revision:null},{url:"assets/js/v-e565bdda.2568e8fd.js",revision:null},{url:"assets/js/v-e64f5648.00cb1abb.js",revision:null},{url:"assets/js/v-ee77801a.596ecb1f.js",revision:null},{url:"assets/js/v-eff96fe2.5316b0ba.js",revision:null},{url:"assets/js/v-f3ed9e5a.b7c9b090.js",revision:null},{url:"assets/js/v-f4351e9e.1cac7538.js",revision:null},{url:"assets/js/v-ffe3a066.4611ad76.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"f2834f96cf724a1fc6f82f0128bf44c8"},{url:"en/advanced/faq.html",revision:"48d2f42ec787b7704897abe498d36425"},{url:"en/advanced/intro.html",revision:"b138a09bbd618581060f089092e5e4b0"},{url:"en/advanced/why.html",revision:"a60bfad7da7fc8dd8e3a11e20f15f315"},{url:"en/guide/client/avatar.html",revision:"c826e8f865e9a18430bc6c4113e9ab64"},{url:"en/guide/client/count.html",revision:"cf08fa52c59ef6340db75f31f92427b8"},{url:"en/guide/client/emoji.html",revision:"d3885ce0ecc0b1d9d568deb2eb054da3"},{url:"en/guide/client/i18n.html",revision:"9bcadf63fa6b18b78829c219c241f8bf"},{url:"en/guide/client/import.html",revision:"401c05a8ba3e2bc13f239f4b5217de58"},{url:"en/guide/client/intro.html",revision:"216e88bcd8c16931444e61109032d5c9"},{url:"en/guide/client/recentcomment.html",revision:"5f52261a1e2f8f210537eb883b5c902d"},{url:"en/guide/client/spa.html",revision:"c23f8bba6f692cd561d4d99324116e52"},{url:"en/guide/client/style.html",revision:"5e79b4136ae2ee48185b87e013b1f6b0"},{url:"en/guide/client/syntax.html",revision:"6cd9c3e4a9a1297aaba77530936da320"},{url:"en/guide/client/widget/index.html",revision:"24b5567903f0beb14e746c2847faed0d"},{url:"en/guide/client/widget/recent-comment.html",revision:"c5994f48d7cdca2b6a54df7297dbeab6"},{url:"en/guide/get-started.html",revision:"26ff3047662ae48da42ef32976179693"},{url:"en/guide/server/databases.html",revision:"a2d939a00e74a0b90f90ca61f211e755"},{url:"en/guide/server/intro.html",revision:"71d7dcdd3a1ce0bd9dc97ecdb34c7616"},{url:"en/guide/server/notification.html",revision:"cfc424fc4b2941e17f5fc937e1e56f67"},{url:"en/guide/server/socials.html",revision:"b8b9dffef77658750afacbaf0fb8c25e"},{url:"en/guide/server/vps-deploy.html",revision:"030f328af3c603558431ef60ffc3eced"},{url:"en/index.html",revision:"549967a97dfc1e26d04d5b6ba9611f0f"},{url:"en/migration/client.html",revision:"0893432bf2952be4f78820b669c4358f"},{url:"en/migration/tool.html",revision:"811516404e7d34be3898f356ec08b113"},{url:"en/migration/valine.html",revision:"4d674a642de17f7433fa3bd84aa5c739"},{url:"en/reference/api.html",revision:"ab87d25b7f99fa776ee7495140824b69"},{url:"en/reference/client.html",revision:"aa4185467b35b5ca83b062521d0684c9"},{url:"en/reference/contribution.html",revision:"f77469bbb1cb537b9a7d6f0fd84380de"},{url:"en/reference/instance.html",revision:"a92283b08051fa062b35f1b0d0479163"},{url:"en/reference/server.html",revision:"396e8973aa0e02bf68e003caa4810385"},{url:"guide/client/avatar.html",revision:"c546718216ef91abe4387acc43c5550c"},{url:"guide/client/count.html",revision:"af4e0cd36ef78d1a5ca8f3d6b86c5fd2"},{url:"guide/client/emoji.html",revision:"eb5119707b4611b24719622b6b741dc3"},{url:"guide/client/i18n.html",revision:"7d5432045793df809ee1fa157e93ec1d"},{url:"guide/client/import.html",revision:"97d6a1f4a7e92386fd5abe016ff847c6"},{url:"guide/client/intro.html",revision:"8676396cae2c3dc0a30320ec6eb21143"},{url:"guide/client/spa.html",revision:"f450356c409905132bcfbca208e4a7d6"},{url:"guide/client/style.html",revision:"00dc044b471e02004f597b7102a1a9ef"},{url:"guide/client/syntax.html",revision:"28568f1758f704e1fe48eeadb20d3c91"},{url:"guide/client/widget/index.html",revision:"c3c0640212ee3f73a8d6ee17bc6aef07"},{url:"guide/client/widget/recent-comment.html",revision:"3d9341a0b6c2f05c8315e745a9e017e9"},{url:"guide/get-started.html",revision:"03dd416cdc00bd7adf0df1e7220b444e"},{url:"guide/server/cloudbase.html",revision:"03db4199b9537a0c4f6085e1fed75290"},{url:"guide/server/databases.html",revision:"ed54326ef5d935bfaacdd94052baf3fa"},{url:"guide/server/intro.html",revision:"10eb2f3106357c0f476a5dfe68f0e691"},{url:"guide/server/notification.html",revision:"7d59cdf182ed9a6417346062acb1ba3f"},{url:"guide/server/socials.html",revision:"cad3e437283891e70e6ab5552a905030"},{url:"guide/server/vps-deploy.html",revision:"4bb2f014591ae06380ff115a269bd9fc"},{url:"index.html",revision:"367909a9a27bd737760a4d3da5092f0f"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"8b42de1547d3c714bd085b821886091b"},{url:"migration/tool.html",revision:"6170a75483a6162921e9e0d2fefb47a9"},{url:"migration/valine.html",revision:"951d8006046abc0212cd3945d7a9b835"},{url:"reference/api.html",revision:"176ca5a522ce271f5b7b884729f7b5cd"},{url:"reference/client.html",revision:"b0f23e9e07b22ced72da9af8a30f0bb2"},{url:"reference/contribution.html",revision:"411129fbfd84e83d6b3b3de456538286"},{url:"reference/instance.html",revision:"da487d226868c9620aa6f60c64709123"},{url:"reference/server.html",revision:"4d54159836c9620f6f32929636c1bed1"}],{})}));
