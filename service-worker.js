if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"e12bf77f98462b6b398409bcd30dffd2"},{url:"advanced/ecosystem.html",revision:"06063488698b1a1adef135f0325c8f6b"},{url:"advanced/faq.html",revision:"a2ff363caff880af6bfc4cb32688738a"},{url:"advanced/intro.html",revision:"9b69320dc2fce1bba7e83439c05308ad"},{url:"advanced/why.html",revision:"411093554f39d12e6226304c911b96c7"},{url:"assets/css/959.styles.a6096c8d.css",revision:null},{url:"assets/css/styles.6da75289.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/aliyun-fc-1.c4a09313.jpg",revision:null},{url:"assets/img/aliyun-fc-2.5d0877d2.jpg",revision:null},{url:"assets/img/aliyun-fc-3.3d3605c8.jpg",revision:null},{url:"assets/img/aliyun-fc-4.bada9180.jpg",revision:null},{url:"assets/img/aliyun-fc-5.3137ea34.jpg",revision:null},{url:"assets/img/aliyun-fc-6.09a0ec45.jpg",revision:null},{url:"assets/img/aliyun-fc-7.3e9053aa.jpg",revision:null},{url:"assets/img/aliyun-fc-8.e139b393.jpg",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/baidu-cfc-1.9a60bcf4.jpg",revision:null},{url:"assets/img/baidu-cfc-10.447cc90b.jpg",revision:null},{url:"assets/img/baidu-cfc-11.c24e4673.jpg",revision:null},{url:"assets/img/baidu-cfc-2.3fbebdd2.jpg",revision:null},{url:"assets/img/baidu-cfc-3.bc01ce45.jpg",revision:null},{url:"assets/img/baidu-cfc-4.2b669e0d.jpg",revision:null},{url:"assets/img/baidu-cfc-5.3371a54d.jpg",revision:null},{url:"assets/img/baidu-cfc-6.31675304.jpg",revision:null},{url:"assets/img/baidu-cfc-7.6209fc82.jpg",revision:null},{url:"assets/img/baidu-cfc-8.fc4c62df.jpg",revision:null},{url:"assets/img/baidu-cfc-9.aa188f1c.jpg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/deta-1.a238d26f.png",revision:null},{url:"assets/img/deta-2.295d8a01.png",revision:null},{url:"assets/img/deta-3.31cf0dda.jpg",revision:null},{url:"assets/img/inspirecloud-1.97f7c35a.jpg",revision:null},{url:"assets/img/inspirecloud-2.43e596f5.jpg",revision:null},{url:"assets/img/inspirecloud-3.87c2db3b.jpg",revision:null},{url:"assets/img/inspirecloud-4.1e027d84.jpg",revision:null},{url:"assets/img/inspirecloud-5.56adb0d2.jpg",revision:null},{url:"assets/img/inspirecloud-6.be2e2311.jpg",revision:null},{url:"assets/img/inspirecloud-7.57e6fc24.jpg",revision:null},{url:"assets/img/leancloud-1.4f4daf0f.jpeg",revision:null},{url:"assets/img/leancloud-2.d6247334.jpeg",revision:null},{url:"assets/img/leancloud-3.838c3904.png",revision:null},{url:"assets/img/leancloud-app-1.9c9739de.jpg",revision:null},{url:"assets/img/leancloud-app-2.6d9a4f9c.jpg",revision:null},{url:"assets/img/railway-1.3985b528.jpg",revision:null},{url:"assets/img/railway-2.d075e01b.jpg",revision:null},{url:"assets/img/railway-3.5984dee6.jpg",revision:null},{url:"assets/img/railway-4.4f8f9777.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.a04d3351.js",revision:null},{url:"assets/js/5455.61f1697b.js",revision:null},{url:"assets/js/5950.ec117410.js",revision:null},{url:"assets/js/6725.cbe13062.js",revision:null},{url:"assets/js/801.e598a66c.js",revision:null},{url:"assets/js/app.141e6df3.js",revision:null},{url:"assets/js/runtime~app.ccd353a0.js",revision:null},{url:"assets/js/v-0418d6cb.4304d601.js",revision:null},{url:"assets/js/v-057c9824.0e040c09.js",revision:null},{url:"assets/js/v-058f99fc.fb02d1bd.js",revision:null},{url:"assets/js/v-0b556720.ab2d083b.js",revision:null},{url:"assets/js/v-1b1feb10.c4f27882.js",revision:null},{url:"assets/js/v-1bf8da39.1a23134a.js",revision:null},{url:"assets/js/v-1ddcadc2.abdecbf3.js",revision:null},{url:"assets/js/v-271aae61.43dc7a4e.js",revision:null},{url:"assets/js/v-27d47a79.493fc67b.js",revision:null},{url:"assets/js/v-2812bd79.d8e80649.js",revision:null},{url:"assets/js/v-2945f13a.324855de.js",revision:null},{url:"assets/js/v-2d0a870d.93efa7c9.js",revision:null},{url:"assets/js/v-2fad59ab.110d5c7b.js",revision:null},{url:"assets/js/v-356c0ac4.e8a8fd54.js",revision:null},{url:"assets/js/v-3706649a.62af1484.js",revision:null},{url:"assets/js/v-38007666.5432a369.js",revision:null},{url:"assets/js/v-396f59cd.ec130a53.js",revision:null},{url:"assets/js/v-3c8a3984.21efaebe.js",revision:null},{url:"assets/js/v-40608902.1f057fc9.js",revision:null},{url:"assets/js/v-434e7c8c.d7d61556.js",revision:null},{url:"assets/js/v-45360123.fd5e54bf.js",revision:null},{url:"assets/js/v-4819d2f6.939229ca.js",revision:null},{url:"assets/js/v-487079c5.19988386.js",revision:null},{url:"assets/js/v-4dec5b45.123d355a.js",revision:null},{url:"assets/js/v-4f0168b2.d088232b.js",revision:null},{url:"assets/js/v-4fe1dc58.c50dcb0b.js",revision:null},{url:"assets/js/v-50cb2a87.5045dd9f.js",revision:null},{url:"assets/js/v-514365f1.be869916.js",revision:null},{url:"assets/js/v-533c70f7.b4f30f5a.js",revision:null},{url:"assets/js/v-547fb6c3.15b46213.js",revision:null},{url:"assets/js/v-583b3d0d.022e0769.js",revision:null},{url:"assets/js/v-5ceabafb.11652ed2.js",revision:null},{url:"assets/js/v-61377328.4afee24c.js",revision:null},{url:"assets/js/v-668d9be0.f3b62783.js",revision:null},{url:"assets/js/v-66cc4fee.a3a2886b.js",revision:null},{url:"assets/js/v-67a66f17.8b9acc24.js",revision:null},{url:"assets/js/v-6b4d4a3d.c53f50c6.js",revision:null},{url:"assets/js/v-6d93dbb2.df12e9f6.js",revision:null},{url:"assets/js/v-704e8e37.c4ec155d.js",revision:null},{url:"assets/js/v-737ff092.ded93979.js",revision:null},{url:"assets/js/v-740dc7ea.8a9987d2.js",revision:null},{url:"assets/js/v-743ff88e.06f8757f.js",revision:null},{url:"assets/js/v-74a28670.44752e59.js",revision:null},{url:"assets/js/v-756ec2fc.5f39999e.js",revision:null},{url:"assets/js/v-7871496c.0bdfb43a.js",revision:null},{url:"assets/js/v-7898f959.8a2369f3.js",revision:null},{url:"assets/js/v-7af875a7.47ff7929.js",revision:null},{url:"assets/js/v-81cb4dce.5559e909.js",revision:null},{url:"assets/js/v-82949f3e.533b7e59.js",revision:null},{url:"assets/js/v-8daa1a0e.b1cac47c.js",revision:null},{url:"assets/js/v-8dba60f6.8831886c.js",revision:null},{url:"assets/js/v-a1a49808.e5b86ffb.js",revision:null},{url:"assets/js/v-a7534f04.2cc1e686.js",revision:null},{url:"assets/js/v-aecc6e00.774b4ab4.js",revision:null},{url:"assets/js/v-b032db80.73492aaa.js",revision:null},{url:"assets/js/v-bfd0f3b0.f40e4239.js",revision:null},{url:"assets/js/v-c9146c5e.4e9951e9.js",revision:null},{url:"assets/js/v-d8d70e1a.ec8df0e7.js",revision:null},{url:"assets/js/v-de155fda.717562d9.js",revision:null},{url:"assets/js/v-de867450.337e5118.js",revision:null},{url:"assets/js/v-e4322366.9e641700.js",revision:null},{url:"assets/js/v-e565bdda.7ae7eb90.js",revision:null},{url:"assets/js/v-e64f5648.3d53acfe.js",revision:null},{url:"assets/js/v-ee77801a.98c70b47.js",revision:null},{url:"assets/js/v-eff96fe2.7387cf24.js",revision:null},{url:"assets/js/v-f4351e9e.89d6470e.js",revision:null},{url:"assets/js/v-fbe3c888.d24dc780.js",revision:null},{url:"assets/js/v-ffe3a066.baba9a19.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"8010655ae1bcff5303189bba2be18ccf"},{url:"en/advanced/faq.html",revision:"3872d65387fbf51ac9894522addcb96f"},{url:"en/advanced/intro.html",revision:"aab1c12da0a29ed297c28fcaddb16eb5"},{url:"en/advanced/why.html",revision:"95af3928835b502913a094ff61c81eea"},{url:"en/guide/client/avatar.html",revision:"a2d816b4998e3a30c46375d8ba3425a6"},{url:"en/guide/client/count.html",revision:"d620e2ebdfbf99c20b7ec46a663e15fb"},{url:"en/guide/client/emoji.html",revision:"a0c5f32b84efb79bda399fd7b3e17d6f"},{url:"en/guide/client/i18n.html",revision:"1808d643fc80c4e2cbc27a584a0c5b25"},{url:"en/guide/client/import.html",revision:"d4ce8b3eed0f7811ba7bba48dd95389f"},{url:"en/guide/client/intro.html",revision:"2f3cc180780c3168e5586c06c73237ae"},{url:"en/guide/client/recentcomment.html",revision:"2f36b4145f9031a1d28b25dbbb34dcc9"},{url:"en/guide/client/spa.html",revision:"ac20590ce0e7520ba0f90af3bf42f0ce"},{url:"en/guide/client/style.html",revision:"e0de10cb35c154f3c5379fbf3b5ee81e"},{url:"en/guide/client/syntax.html",revision:"445ac6959e0600ad849eec8e173bc647"},{url:"en/guide/client/widget/index.html",revision:"d51bda4ba69fa270b3a80c5e229815a3"},{url:"en/guide/client/widget/recent-comment.html",revision:"46079e7122fc5a51782528ea466790dd"},{url:"en/guide/get-started.html",revision:"330a09c668b32a1b9830b9662311bc1a"},{url:"en/guide/server/databases.html",revision:"8718633f9dda217e24bd3c258839977d"},{url:"en/guide/server/deta.html",revision:"be1d27d1373e6a04b7330e07f4ed3043"},{url:"en/guide/server/intro.html",revision:"f68a49ca4f4c80c2cef8d2ce40b4b707"},{url:"en/guide/server/notification.html",revision:"96fc2175009212ef65aeac4504ea2856"},{url:"en/guide/server/railway.html",revision:"8c33f277ffc85ad33fd0c412459dc3d6"},{url:"en/guide/server/vps-deploy.html",revision:"7144c3081eb956136ca645d0372fe549"},{url:"en/index.html",revision:"6e3b9f0ec14d94473a67d8333db1d8a2"},{url:"en/migration/client.html",revision:"1a1dc2201dbc0a2e7d173f5c11276095"},{url:"en/migration/tool.html",revision:"72bb0f0cc62d9d0960a3986303d88fb0"},{url:"en/migration/valine.html",revision:"45ffe1d22939b8c8ef5b34c279719df2"},{url:"en/reference/api.html",revision:"3110bfd34a20cc94dd1b7cd7598d13f8"},{url:"en/reference/client.html",revision:"b3cbb58bcc06fcf6c91f577a7edfd378"},{url:"en/reference/contribution.html",revision:"535a77ad0e93e6d0ad69c5573d1e71aa"},{url:"en/reference/instance.html",revision:"85e7005587b913422f548a49f149206d"},{url:"en/reference/server.html",revision:"9704bf8c03efeef86e25748934b280b9"},{url:"google8b3d888472d9b77d.html",revision:"be690667e96e5c35bcbfa1752270eb69"},{url:"guide/client/avatar.html",revision:"73dba5e17399a2e084989660d4b7ad39"},{url:"guide/client/count.html",revision:"f16599ddb9c3999b20cbc309e880b954"},{url:"guide/client/emoji.html",revision:"8baec0a7fecc50d6c5849ad75d45adb4"},{url:"guide/client/i18n.html",revision:"55338d0450a2795563ae94f4efaff495"},{url:"guide/client/import.html",revision:"1afbfa5819e516139ad24978ce88f02e"},{url:"guide/client/intro.html",revision:"74804ccc05621e733dbd13d9314762fc"},{url:"guide/client/spa.html",revision:"b3965fb4f639130320472a36ed61bcff"},{url:"guide/client/style.html",revision:"f0ec7a3f7014a8411a0190a06888f334"},{url:"guide/client/syntax.html",revision:"0757ea91098a54c00000efa16e16ca30"},{url:"guide/client/widget/index.html",revision:"6879ab22cc538fd8520e7a964b213883"},{url:"guide/client/widget/recent-comment.html",revision:"8e2fb1b7be2661d71fba940e7cbadc4a"},{url:"guide/get-started.html",revision:"a4bd8ef18ad4bb8cb621f6204290f061"},{url:"guide/server/aliyun-fc.html",revision:"381f6e22e334f593f4fc290a0c682880"},{url:"guide/server/baidu-cfc.html",revision:"784c6c4e3c400ccf7d2310f9e97151b2"},{url:"guide/server/cloudbase.html",revision:"bb8234731a6544ba22bb3a23d59cf57a"},{url:"guide/server/databases.html",revision:"8dd1b36fde149447d2e8be68a2fecc77"},{url:"guide/server/deta.html",revision:"4ef46f763505886cf2fddf57d21a3c96"},{url:"guide/server/inspirecloud.html",revision:"8f513e4c50ad633206fc2c1eeb3bb0d2"},{url:"guide/server/intro.html",revision:"eaa2665be84c616f737ee204fc241991"},{url:"guide/server/notification.html",revision:"fb68c7470b2799b192970216a975ddc0"},{url:"guide/server/railway.html",revision:"fdf7a8869cee09e91dcf6226176ca85f"},{url:"guide/server/vps-deploy.html",revision:"6e9a11f7dc1856e28ca763aeadec12c0"},{url:"index.html",revision:"bded330f106b6c8680d7b2faabab2465"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"796ed41d27f59182155ed3e26e080ccc"},{url:"migration/tool.html",revision:"658754aefb710340669dcf85094c3ceb"},{url:"migration/valine.html",revision:"8c367b4398cd61d0b0736aa53af11bfb"},{url:"reference/api.html",revision:"9ccb75be0405ae86cfa69eca60ab0309"},{url:"reference/client.html",revision:"14f8e3f334062cea4bc9e6053812e41e"},{url:"reference/contribution.html",revision:"7607a6873211a714b9b236fa7b3a2bd4"},{url:"reference/instance.html",revision:"416327b7521434a8529babf922b455d1"},{url:"reference/server.html",revision:"205f8d60442dd7dfb6d747e25c603bd7"}],{})}));
