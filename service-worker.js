if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"59d78ea5122f7b367dfc4d535ac4b7c7"},{url:"advanced/ecosystem.html",revision:"2a488261c911b23f2539c61ab1fc76e4"},{url:"advanced/faq.html",revision:"0725c4e205a15e299d456a806a25be77"},{url:"advanced/intro.html",revision:"c8815eaf72e3ea14b188d3e22e87f49f"},{url:"advanced/why.html",revision:"1084c3f8256a6c7c6043db3b26b84028"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.e7f4cf46.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.ba534b91.js",revision:null},{url:"assets/js/runtime~app.33dee639.js",revision:null},{url:"assets/js/v-057c9824.7caa0ca8.js",revision:null},{url:"assets/js/v-058f99fc.f5df31f4.js",revision:null},{url:"assets/js/v-0b556720.661b085a.js",revision:null},{url:"assets/js/v-1b1feb10.cd461e5d.js",revision:null},{url:"assets/js/v-1bf8da39.f6849203.js",revision:null},{url:"assets/js/v-271aae61.c5b392ee.js",revision:null},{url:"assets/js/v-27d47a79.a2a7b465.js",revision:null},{url:"assets/js/v-2812bd79.381dac56.js",revision:null},{url:"assets/js/v-2945f13a.6b619554.js",revision:null},{url:"assets/js/v-2d0a870d.682c3c5c.js",revision:null},{url:"assets/js/v-2fad59ab.3d6e9a36.js",revision:null},{url:"assets/js/v-356c0ac4.8af7dcb4.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.8cfaf013.js",revision:null},{url:"assets/js/v-396f59cd.9fbd6ba9.js",revision:null},{url:"assets/js/v-40608902.6a62b05e.js",revision:null},{url:"assets/js/v-434e7c8c.046c6484.js",revision:null},{url:"assets/js/v-45360123.3366155c.js",revision:null},{url:"assets/js/v-4819d2f6.1c39a574.js",revision:null},{url:"assets/js/v-487079c5.d265845f.js",revision:null},{url:"assets/js/v-4dec5b45.5efb0840.js",revision:null},{url:"assets/js/v-4f0168b2.6991921e.js",revision:null},{url:"assets/js/v-4fe1dc58.5ef074ef.js",revision:null},{url:"assets/js/v-50cb2a87.12424ac1.js",revision:null},{url:"assets/js/v-514365f1.05ef4615.js",revision:null},{url:"assets/js/v-533c70f7.1a487df0.js",revision:null},{url:"assets/js/v-583b3d0d.2bf1da6d.js",revision:null},{url:"assets/js/v-5ceabafb.8bf18938.js",revision:null},{url:"assets/js/v-61377328.e43b806d.js",revision:null},{url:"assets/js/v-668d9be0.b88a0ac9.js",revision:null},{url:"assets/js/v-66cc4fee.151564b3.js",revision:null},{url:"assets/js/v-67a66f17.59dcab16.js",revision:null},{url:"assets/js/v-6b4d4a3d.b53162f1.js",revision:null},{url:"assets/js/v-6d93dbb2.c3ef0f4a.js",revision:null},{url:"assets/js/v-704e8e37.30a64dd1.js",revision:null},{url:"assets/js/v-737ff092.751b1481.js",revision:null},{url:"assets/js/v-743ff88e.f6b2c56e.js",revision:null},{url:"assets/js/v-74a28670.7800fe53.js",revision:null},{url:"assets/js/v-756ec2fc.652eb817.js",revision:null},{url:"assets/js/v-7871496c.c1862915.js",revision:null},{url:"assets/js/v-7898f959.a5a67a02.js",revision:null},{url:"assets/js/v-7af875a7.a35d8eb7.js",revision:null},{url:"assets/js/v-81cb4dce.8be4c8be.js",revision:null},{url:"assets/js/v-82949f3e.203e4601.js",revision:null},{url:"assets/js/v-8daa1a0e.caef32dd.js",revision:null},{url:"assets/js/v-8dba60f6.bd663ea4.js",revision:null},{url:"assets/js/v-a1a49808.edf34f21.js",revision:null},{url:"assets/js/v-a7534f04.1c6c5b81.js",revision:null},{url:"assets/js/v-aecc6e00.cb4f72e1.js",revision:null},{url:"assets/js/v-b032db80.f477fa3d.js",revision:null},{url:"assets/js/v-b7dac982.30ccb27e.js",revision:null},{url:"assets/js/v-c9146c5e.8c8aa919.js",revision:null},{url:"assets/js/v-d8d70e1a.488a87f9.js",revision:null},{url:"assets/js/v-de155fda.f314964a.js",revision:null},{url:"assets/js/v-de867450.ce46abeb.js",revision:null},{url:"assets/js/v-e4322366.3094097a.js",revision:null},{url:"assets/js/v-e565bdda.ea6569bb.js",revision:null},{url:"assets/js/v-e64f5648.33df38b4.js",revision:null},{url:"assets/js/v-ee77801a.8b3cf15a.js",revision:null},{url:"assets/js/v-eff96fe2.c61411b8.js",revision:null},{url:"assets/js/v-f3ed9e5a.c025e33b.js",revision:null},{url:"assets/js/v-f4351e9e.d7af50f6.js",revision:null},{url:"assets/js/v-ffe3a066.4eb185e3.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"f3482e19f7b967ed63a7d646dd8c2469"},{url:"en/advanced/faq.html",revision:"b8b2bb1e343403cfdb925640527af8fd"},{url:"en/advanced/intro.html",revision:"2b1f4152be70eaf9ac0595edc396a9bc"},{url:"en/advanced/why.html",revision:"eb68e7bcc9484666fa15b9ad794e15c1"},{url:"en/guide/client/avatar.html",revision:"a1cd334a232f0308923f0a6753ff5bff"},{url:"en/guide/client/count.html",revision:"f3ef99220d46ac6ec8229047de8fca24"},{url:"en/guide/client/emoji.html",revision:"4a20d0ca4b42c1de572ee563653298f9"},{url:"en/guide/client/i18n.html",revision:"33a438c5da998360cace915adabe945f"},{url:"en/guide/client/import.html",revision:"2001998923c309092bcd112f34e3c832"},{url:"en/guide/client/intro.html",revision:"e7c00044547852c5c02eebf1f3d488be"},{url:"en/guide/client/recentcomment.html",revision:"59d046c922041f4ca62c7d8915b14bae"},{url:"en/guide/client/spa.html",revision:"d4faba35171f5fab63203a3aef0dfecd"},{url:"en/guide/client/style.html",revision:"56346d0c4f5691bac1806e518a1690a1"},{url:"en/guide/client/syntax.html",revision:"935e02a82d2c74e2cdbe5a3280101b65"},{url:"en/guide/client/widget/index.html",revision:"05273648b5f4f17e3036d8ab9f9cb127"},{url:"en/guide/client/widget/recent-comment.html",revision:"5e389a8d6d2abe87beef849070a1021c"},{url:"en/guide/get-started.html",revision:"cf7ced58086c037ef12de2c4241ed721"},{url:"en/guide/server/databases.html",revision:"6fa29a4aa69728848ba0c049ddd08d1a"},{url:"en/guide/server/intro.html",revision:"df6e9094c7903e08881a513b6669a8fe"},{url:"en/guide/server/notification.html",revision:"d0d5f6c75713234e48d830783df14a9b"},{url:"en/guide/server/socials.html",revision:"2c6fd507d0ef7838281d1543c311517a"},{url:"en/guide/server/vps-deploy.html",revision:"f2c5b93237e6fb75d102f7a7b58e0b73"},{url:"en/index.html",revision:"e54aa5392ed004988344dd3395b7e7eb"},{url:"en/migration/client.html",revision:"f8d2b6193e92e7931281067aec141746"},{url:"en/migration/tool.html",revision:"994af1b5b66827e0562f19ef04f23e9a"},{url:"en/migration/valine.html",revision:"60f526564c53abc435ca7863da497322"},{url:"en/reference/api.html",revision:"2e8f77a318614a6e16a68c9f6df388ed"},{url:"en/reference/client.html",revision:"a267d8319a8d73181b8ca651c2a5307d"},{url:"en/reference/contribution.html",revision:"7132efd0731317ec016b69ae6d7ae768"},{url:"en/reference/instance.html",revision:"bf69dc62a0ed1b395de023ca8e6cfaa8"},{url:"en/reference/server.html",revision:"fa04818704ed4fd1702c9663208ceb14"},{url:"guide/client/avatar.html",revision:"c4fb00ab70f7766d9ed26fdc4d92bfc4"},{url:"guide/client/count.html",revision:"775bb2d6ee79f7efeeed2c87204b5eb7"},{url:"guide/client/emoji.html",revision:"30f2c45f5dd7b54bc89a3da5684cf000"},{url:"guide/client/i18n.html",revision:"7a8cb00592f5aec3f57b17e1ddf1f99d"},{url:"guide/client/import.html",revision:"49917731fff7c5b0150c2183a749d829"},{url:"guide/client/intro.html",revision:"c9efbe4de46eb61b71cb6d5be263f86f"},{url:"guide/client/spa.html",revision:"b26a156351ced8dc8a6f333076307c99"},{url:"guide/client/style.html",revision:"b0c67aac89b4ffb54f8309dce0884c11"},{url:"guide/client/syntax.html",revision:"4e7d489126559046b3a2631416f71b47"},{url:"guide/client/widget/index.html",revision:"2a19398c5826cfd031adefc3972fb317"},{url:"guide/client/widget/recent-comment.html",revision:"701d40a996861a97a3edd457a7fa2780"},{url:"guide/get-started.html",revision:"07dc5051d3b3d2845ffba3c1b7c7e81d"},{url:"guide/server/cloudbase.html",revision:"2fe608293dc34ab6aadddd69259e7814"},{url:"guide/server/databases.html",revision:"41cba5077fc22e3968676613e79f3290"},{url:"guide/server/intro.html",revision:"e8cc7c4b96694199417e1b3ebc3f09a8"},{url:"guide/server/notification.html",revision:"54a9f702db218e48eb2b5ebc562e6a67"},{url:"guide/server/socials.html",revision:"c94d164d00945f371b41282072e7a3f0"},{url:"guide/server/vps-deploy.html",revision:"155cf2ddff90decab37d2dd692e84796"},{url:"index.html",revision:"54d8183633d061893fc5bdf0d9c07c5f"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"9a545860e72040817756cfabdbb01ead"},{url:"migration/tool.html",revision:"d18faf54d230263011a4c116e9fc2b87"},{url:"migration/valine.html",revision:"c6a5051767d6e2024c694448222d4f5f"},{url:"reference/api.html",revision:"b1dce32f96c1ef188d7aa8ea7a84e51d"},{url:"reference/client.html",revision:"48ae2a118ca8c66ccd8f3693c4ad8d2d"},{url:"reference/contribution.html",revision:"ccd49365ab19ba85aaf599195f0aa309"},{url:"reference/instance.html",revision:"d29d2dd73e27e487569df44cfc78f21a"},{url:"reference/server.html",revision:"ecf818cec87d2eec3105cbc20aaaf651"}],{})}));
