if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"aa24b1a87fdda69a3e76ce3f00d18b6b"},{url:"advanced/ecosystem.html",revision:"8f09563d4dd65d3923c729717765d35e"},{url:"advanced/faq.html",revision:"8556cb5851d3e110979b4025db335d01"},{url:"advanced/intro.html",revision:"482b22ec2b3ea0306e3b8dcd6e8a9cf1"},{url:"advanced/why.html",revision:"cb8c3a39e9cb89e6112636f3610767da"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.cc606f82.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/3991.4c08b9f5.js",revision:null},{url:"assets/js/5455.f8a326d1.js",revision:null},{url:"assets/js/5556.265dcb69.js",revision:null},{url:"assets/js/801.7ba88d14.js",revision:null},{url:"assets/js/app.64fa260a.js",revision:null},{url:"assets/js/runtime~app.6a657282.js",revision:null},{url:"assets/js/v-057c9824.2fad97b1.js",revision:null},{url:"assets/js/v-058f99fc.894d6129.js",revision:null},{url:"assets/js/v-0b556720.e904280d.js",revision:null},{url:"assets/js/v-1b1feb10.cd37c8e8.js",revision:null},{url:"assets/js/v-1bf8da39.2bc6469d.js",revision:null},{url:"assets/js/v-271aae61.e18e1ce0.js",revision:null},{url:"assets/js/v-27d47a79.7e10c7bc.js",revision:null},{url:"assets/js/v-2812bd79.92b6ee69.js",revision:null},{url:"assets/js/v-2945f13a.f0f0b7b7.js",revision:null},{url:"assets/js/v-2d0a870d.efc6ebc5.js",revision:null},{url:"assets/js/v-2fad59ab.71a60f64.js",revision:null},{url:"assets/js/v-356c0ac4.d23becf3.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.450c1362.js",revision:null},{url:"assets/js/v-396f59cd.db117a23.js",revision:null},{url:"assets/js/v-40608902.31927fa0.js",revision:null},{url:"assets/js/v-434e7c8c.bb277d13.js",revision:null},{url:"assets/js/v-45360123.e5e119fe.js",revision:null},{url:"assets/js/v-4819d2f6.ed6f5b25.js",revision:null},{url:"assets/js/v-487079c5.6892bf16.js",revision:null},{url:"assets/js/v-4dec5b45.81dfd081.js",revision:null},{url:"assets/js/v-4f0168b2.40b83676.js",revision:null},{url:"assets/js/v-4fe1dc58.83b9550c.js",revision:null},{url:"assets/js/v-50cb2a87.9806a72e.js",revision:null},{url:"assets/js/v-514365f1.1d9c3f59.js",revision:null},{url:"assets/js/v-533c70f7.2c17bdd7.js",revision:null},{url:"assets/js/v-583b3d0d.9ca080ce.js",revision:null},{url:"assets/js/v-5ceabafb.3fef213b.js",revision:null},{url:"assets/js/v-61377328.c5657fa1.js",revision:null},{url:"assets/js/v-668d9be0.a8d64c99.js",revision:null},{url:"assets/js/v-66cc4fee.34632491.js",revision:null},{url:"assets/js/v-67a66f17.d184797e.js",revision:null},{url:"assets/js/v-6b4d4a3d.b010d742.js",revision:null},{url:"assets/js/v-6d93dbb2.a8934413.js",revision:null},{url:"assets/js/v-704e8e37.48605f5e.js",revision:null},{url:"assets/js/v-737ff092.1458d3fb.js",revision:null},{url:"assets/js/v-743ff88e.4161a820.js",revision:null},{url:"assets/js/v-74a28670.993cbbf0.js",revision:null},{url:"assets/js/v-756ec2fc.b80d1d6e.js",revision:null},{url:"assets/js/v-7871496c.85cfc14b.js",revision:null},{url:"assets/js/v-7898f959.51493793.js",revision:null},{url:"assets/js/v-7af875a7.4bab3ba9.js",revision:null},{url:"assets/js/v-81cb4dce.3fac8ba0.js",revision:null},{url:"assets/js/v-82949f3e.c5fd990b.js",revision:null},{url:"assets/js/v-8daa1a0e.0924c117.js",revision:null},{url:"assets/js/v-8dba60f6.0052b448.js",revision:null},{url:"assets/js/v-a1a49808.083a19a1.js",revision:null},{url:"assets/js/v-a7534f04.be782250.js",revision:null},{url:"assets/js/v-aecc6e00.45cec433.js",revision:null},{url:"assets/js/v-b032db80.b598d732.js",revision:null},{url:"assets/js/v-b7dac982.fb2fff1f.js",revision:null},{url:"assets/js/v-c9146c5e.b7484952.js",revision:null},{url:"assets/js/v-d8d70e1a.d28728c2.js",revision:null},{url:"assets/js/v-de155fda.33353e33.js",revision:null},{url:"assets/js/v-de867450.997609fb.js",revision:null},{url:"assets/js/v-e4322366.d52b0984.js",revision:null},{url:"assets/js/v-e565bdda.6894cf7a.js",revision:null},{url:"assets/js/v-e64f5648.412e6e40.js",revision:null},{url:"assets/js/v-ee77801a.8de354e2.js",revision:null},{url:"assets/js/v-eff96fe2.aa9ea35e.js",revision:null},{url:"assets/js/v-f3ed9e5a.f4e023d8.js",revision:null},{url:"assets/js/v-f4351e9e.c811bf92.js",revision:null},{url:"assets/js/v-ffe3a066.632640e6.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"994484b3a070a2a6daf809330b786fad"},{url:"en/advanced/faq.html",revision:"ca5711b1e30a8a1cb28caf2cdc8037c2"},{url:"en/advanced/intro.html",revision:"1094116ed8a80a107e4d708f3aa581e8"},{url:"en/advanced/why.html",revision:"e13e4db7c274e143e5b7c39005745650"},{url:"en/guide/client/avatar.html",revision:"4c3298228940fb1200bf322a22250d93"},{url:"en/guide/client/count.html",revision:"a7d887c2a718df70ce7adfc035df1036"},{url:"en/guide/client/emoji.html",revision:"bf8b12e040c618ec6a881e77ab2af520"},{url:"en/guide/client/i18n.html",revision:"91884230a385f9022c4b067cad65eb2c"},{url:"en/guide/client/import.html",revision:"ed8cf760843a85e632c3922b1db199ca"},{url:"en/guide/client/intro.html",revision:"625744559439ff6fc1290941253960b8"},{url:"en/guide/client/recentcomment.html",revision:"6a541988feee7cb078296d38fe407a67"},{url:"en/guide/client/spa.html",revision:"a60c13afcd70f3fd039f7317ba6907b3"},{url:"en/guide/client/style.html",revision:"70c709b7b97becb01822f596920eb9c4"},{url:"en/guide/client/syntax.html",revision:"7bbdada09b7efb6d35a449c2ef82a1a3"},{url:"en/guide/client/widget/index.html",revision:"7066295ff82970a89e139a139d96bb37"},{url:"en/guide/client/widget/recent-comment.html",revision:"ffbe9a58f5cc1155ca35afa1d1a462e0"},{url:"en/guide/get-started.html",revision:"b3fdffd2a83ad62e6ccc1c77c0e15e04"},{url:"en/guide/server/databases.html",revision:"193e818e63bb57011a9a70d834c823db"},{url:"en/guide/server/intro.html",revision:"6a0935e9125b5a5b3ab7ff0aea532248"},{url:"en/guide/server/notification.html",revision:"06047e8dd9c363d10013cdc7b372352d"},{url:"en/guide/server/socials.html",revision:"80fcf71d03df3f1b1ab56aae8d91b72e"},{url:"en/guide/server/vps-deploy.html",revision:"8c21683a8f17fe83902b922c5f434264"},{url:"en/index.html",revision:"8c9560520db39ed834664bed079eefd2"},{url:"en/migration/client.html",revision:"9d0534b95917c0eb0e5b939bf7f21ccc"},{url:"en/migration/tool.html",revision:"770f161789642769e2bceaf07d912c3a"},{url:"en/migration/valine.html",revision:"8cc2fe96778601b7057399f4607e478f"},{url:"en/reference/api.html",revision:"3140311c5b675d509eea8490724a38c2"},{url:"en/reference/client.html",revision:"af98eaed93603e1c7b1f2d84ee1e69a2"},{url:"en/reference/contribution.html",revision:"967e7ae158f31c0ab624e137134fe295"},{url:"en/reference/instance.html",revision:"64877c5c424013b983bac2d8b5a4405c"},{url:"en/reference/server.html",revision:"4579d226d62bd01077c6c4fdde514286"},{url:"guide/client/avatar.html",revision:"21b9ae550c2c9f9d008974aae11fbf63"},{url:"guide/client/count.html",revision:"e658e0822abdfbcb69405a8038400fe9"},{url:"guide/client/emoji.html",revision:"a02426ea9294369cf065a31c74b6d1b9"},{url:"guide/client/i18n.html",revision:"5d5ee77ba68bef423e474859f1cf4afe"},{url:"guide/client/import.html",revision:"41f58078cd68c4c2f2e026e03362b76d"},{url:"guide/client/intro.html",revision:"1fe434794105d0e20a71ca97dfd1fdbd"},{url:"guide/client/spa.html",revision:"6ff622d08adfcc8bc3efa2346daf8f2f"},{url:"guide/client/style.html",revision:"833b3ea006f2415ea1ee1bc9f186ebcd"},{url:"guide/client/syntax.html",revision:"41fdb34ba8376ed164a6be14666eb3a0"},{url:"guide/client/widget/index.html",revision:"3d80a2a06cbd203c5316d4d3c3477717"},{url:"guide/client/widget/recent-comment.html",revision:"5548a5b12f55aed7279cdca809ff775f"},{url:"guide/get-started.html",revision:"fb5c0d27721c2789a8d3040a4ad06aa3"},{url:"guide/server/cloudbase.html",revision:"daae5bfc358a8aa6c693d198fc4c8a18"},{url:"guide/server/databases.html",revision:"970e73da3b8935f3ba84636a490923c9"},{url:"guide/server/intro.html",revision:"4c4922ea1e8488f5f1a759a4fb48c9b3"},{url:"guide/server/notification.html",revision:"0a9138e0a8657a95a85ef253220cb2da"},{url:"guide/server/socials.html",revision:"6c01a2939068a1aa90255bc1b9af1f33"},{url:"guide/server/vps-deploy.html",revision:"4d7df3d9a0d7b9f301c883ed788e7ab5"},{url:"index.html",revision:"088ba66158909af1496a646eb5745e99"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"bb137cba51cc847975b32dad58d4627a"},{url:"migration/tool.html",revision:"0a6446cad37a17d06bdf1a6c1ba599f7"},{url:"migration/valine.html",revision:"2235cf48e3407c848a0f509fea2f7f65"},{url:"reference/api.html",revision:"a4530820abf58f4929c968ba5206c535"},{url:"reference/client.html",revision:"491afc1ccff62c6d45c264febd4d740f"},{url:"reference/contribution.html",revision:"1236410c1d7aaaba56c73dce4e5af277"},{url:"reference/instance.html",revision:"be7984f3df2c537d6faaa38487cd7758"},{url:"reference/server.html",revision:"c9ee9ef4b7767f73807008e7bf80eae9"}],{})}));
