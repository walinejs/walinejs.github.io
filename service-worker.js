if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f6c34f6f8be5dcee844cc80ac0f7543c"},{url:"advanced/ecosystem.html",revision:"9da6330bc5e9e4eadb49b86223d2a540"},{url:"advanced/faq.html",revision:"8f8523d2908082885281c0c9b94977ee"},{url:"advanced/intro.html",revision:"eef1bf1f552188340b84296a114a54ee"},{url:"advanced/why.html",revision:"7b0a4eb233e007d879ba68dc17412ca9"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.4a5f655c.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.2d92ee9f.js",revision:null},{url:"assets/js/runtime~app.0f20aa88.js",revision:null},{url:"assets/js/v-057c9824.d4a386fc.js",revision:null},{url:"assets/js/v-058f99fc.7e48e4a4.js",revision:null},{url:"assets/js/v-0b556720.851b2bf1.js",revision:null},{url:"assets/js/v-1b1feb10.49c4184f.js",revision:null},{url:"assets/js/v-1bf8da39.06167d89.js",revision:null},{url:"assets/js/v-271aae61.f36d429d.js",revision:null},{url:"assets/js/v-27d47a79.cdab4fe0.js",revision:null},{url:"assets/js/v-2812bd79.a3e4f8fd.js",revision:null},{url:"assets/js/v-2945f13a.748a37d2.js",revision:null},{url:"assets/js/v-2d0a870d.807f63cf.js",revision:null},{url:"assets/js/v-2fad59ab.b74b919f.js",revision:null},{url:"assets/js/v-356c0ac4.2a83e666.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.88ccf942.js",revision:null},{url:"assets/js/v-396f59cd.e62debe2.js",revision:null},{url:"assets/js/v-40608902.f960c0e8.js",revision:null},{url:"assets/js/v-434e7c8c.ea2e41df.js",revision:null},{url:"assets/js/v-45360123.aff51586.js",revision:null},{url:"assets/js/v-4819d2f6.a04829c2.js",revision:null},{url:"assets/js/v-487079c5.6960b325.js",revision:null},{url:"assets/js/v-4dec5b45.0b273e43.js",revision:null},{url:"assets/js/v-4f0168b2.f3a6c73d.js",revision:null},{url:"assets/js/v-4fe1dc58.84db8d06.js",revision:null},{url:"assets/js/v-50cb2a87.7ea7d265.js",revision:null},{url:"assets/js/v-514365f1.4bd00c67.js",revision:null},{url:"assets/js/v-533c70f7.298476c3.js",revision:null},{url:"assets/js/v-583b3d0d.7f2451cd.js",revision:null},{url:"assets/js/v-5ceabafb.83addfce.js",revision:null},{url:"assets/js/v-61377328.54242d71.js",revision:null},{url:"assets/js/v-668d9be0.cc3bd6d7.js",revision:null},{url:"assets/js/v-66cc4fee.0772a9e5.js",revision:null},{url:"assets/js/v-67a66f17.f49a51c2.js",revision:null},{url:"assets/js/v-6b4d4a3d.9a49993b.js",revision:null},{url:"assets/js/v-6d93dbb2.22210e6b.js",revision:null},{url:"assets/js/v-704e8e37.94fdb930.js",revision:null},{url:"assets/js/v-737ff092.91d9525c.js",revision:null},{url:"assets/js/v-743ff88e.17d98425.js",revision:null},{url:"assets/js/v-74a28670.51e3639e.js",revision:null},{url:"assets/js/v-756ec2fc.97cb0623.js",revision:null},{url:"assets/js/v-7871496c.58e71e32.js",revision:null},{url:"assets/js/v-7898f959.2b2c2bb8.js",revision:null},{url:"assets/js/v-7af875a7.0305d72c.js",revision:null},{url:"assets/js/v-81cb4dce.6fd19a60.js",revision:null},{url:"assets/js/v-82949f3e.43b7fd58.js",revision:null},{url:"assets/js/v-8daa1a0e.ff6c925a.js",revision:null},{url:"assets/js/v-8dba60f6.6a0e74f3.js",revision:null},{url:"assets/js/v-a1a49808.28adcedb.js",revision:null},{url:"assets/js/v-a7534f04.1689438f.js",revision:null},{url:"assets/js/v-aecc6e00.de95f1fa.js",revision:null},{url:"assets/js/v-b032db80.ec1037f9.js",revision:null},{url:"assets/js/v-b7dac982.91705af2.js",revision:null},{url:"assets/js/v-c9146c5e.3559cc46.js",revision:null},{url:"assets/js/v-d8d70e1a.9ee79e30.js",revision:null},{url:"assets/js/v-de155fda.42e3950c.js",revision:null},{url:"assets/js/v-de867450.98fd43a1.js",revision:null},{url:"assets/js/v-e4322366.3ba20893.js",revision:null},{url:"assets/js/v-e565bdda.d1a09edc.js",revision:null},{url:"assets/js/v-e64f5648.9701ef41.js",revision:null},{url:"assets/js/v-ee77801a.44679e0b.js",revision:null},{url:"assets/js/v-eff96fe2.c981e76e.js",revision:null},{url:"assets/js/v-f3ed9e5a.3e42df45.js",revision:null},{url:"assets/js/v-f4351e9e.ff7e20b0.js",revision:null},{url:"assets/js/v-ffe3a066.42a950ed.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"060fb96cc555845efbad81bde29fc1e9"},{url:"en/advanced/faq.html",revision:"5584a9180e7911a746dfb4ea052de392"},{url:"en/advanced/intro.html",revision:"0ad7b0ddd47b6824c952d523ce157d93"},{url:"en/advanced/why.html",revision:"cfe16e0702ab1d3d48ea5e46a6c45ca8"},{url:"en/guide/client/avatar.html",revision:"788f2d9d67f80dd385f98735bdfdf7c1"},{url:"en/guide/client/count.html",revision:"01b6b6e916dd5ce53f05fcfe72308f47"},{url:"en/guide/client/emoji.html",revision:"46a0487c0d46bbeb69d3810d14c13235"},{url:"en/guide/client/i18n.html",revision:"7825b76514806cfa1b6cec841ea8389f"},{url:"en/guide/client/import.html",revision:"7c6fe5b65b40faacbe95766100a23bb2"},{url:"en/guide/client/intro.html",revision:"8c5279607c19d4a511e359a4c7f48ae3"},{url:"en/guide/client/recentcomment.html",revision:"304f2ecfa1fabaa3089cbb5545c03828"},{url:"en/guide/client/spa.html",revision:"3448bd408ae753983e6549923cf2309d"},{url:"en/guide/client/style.html",revision:"761b4c0f8290b37590414ab6cd871aaa"},{url:"en/guide/client/syntax.html",revision:"da7334596561f857b89f9f79f8ed0751"},{url:"en/guide/client/widget/index.html",revision:"f3689788d900f4358db70f023495b784"},{url:"en/guide/client/widget/recent-comment.html",revision:"ff854a6fdbdbd73919fee477841fa75a"},{url:"en/guide/get-started.html",revision:"79e05f61c4e626033c6726f6bead5030"},{url:"en/guide/server/databases.html",revision:"d75692d1265470c00aa8888632eb5421"},{url:"en/guide/server/intro.html",revision:"5cca8c2df273b14f2a5c5ded13e7f06f"},{url:"en/guide/server/notification.html",revision:"e447b07097c4a1d7e0fdf76d3d9ff8bd"},{url:"en/guide/server/socials.html",revision:"2a522d807374435ee6a18fb338fca188"},{url:"en/guide/server/vps-deploy.html",revision:"e0288f7dd42242d421a8ee7cfbf86b91"},{url:"en/index.html",revision:"ea883a3c62eb6af5c3b4cb382afb666c"},{url:"en/migration/client.html",revision:"a7bf050ec3549d1bc59be74fb01707d8"},{url:"en/migration/tool.html",revision:"7fb393446931951393ce6d37dc4bc349"},{url:"en/migration/valine.html",revision:"0b2c7f60b44739a394f47c722de3a6c0"},{url:"en/reference/api.html",revision:"78496d72c22b03ab928153f43001b65a"},{url:"en/reference/client.html",revision:"697262810407f47d79a6824fc49cebfe"},{url:"en/reference/contribution.html",revision:"6e664e190b81839544240413e895558d"},{url:"en/reference/instance.html",revision:"2a00d78d132a251e4b23f16cc3157567"},{url:"en/reference/server.html",revision:"2d9b5c9d791a10e13484b6175bf9cc49"},{url:"guide/client/avatar.html",revision:"7b037e5e5e9c4ba9d6bde93b458aae0b"},{url:"guide/client/count.html",revision:"06e1fbb345c9b8e841044dde91a5d767"},{url:"guide/client/emoji.html",revision:"8f3404b3f2d463a8e1eeda2f33930369"},{url:"guide/client/i18n.html",revision:"ea52338aef850edec8aff648cd2eee28"},{url:"guide/client/import.html",revision:"7bda2c1c219ded77bd9b115dd3d3dd77"},{url:"guide/client/intro.html",revision:"21cecb148e95cc087c672154a45696c1"},{url:"guide/client/spa.html",revision:"ee4b8d5777953a740dfe63fb399b83d7"},{url:"guide/client/style.html",revision:"b909faa984bffa83c9896ccb918ddaa1"},{url:"guide/client/syntax.html",revision:"c0239e4fed3b0a699a00cbb493dfaa7a"},{url:"guide/client/widget/index.html",revision:"e9c2795b5080af1de766139a32b3fcb6"},{url:"guide/client/widget/recent-comment.html",revision:"c5f331e29a69cee60390866d5c4bfa20"},{url:"guide/get-started.html",revision:"fe7f75b231747bb99ca19cfe18c2a644"},{url:"guide/server/cloudbase.html",revision:"2ead1adfbe811b18bcf7989dc39e7dae"},{url:"guide/server/databases.html",revision:"6f9f8fde2cb865ef38a04e3d167f5abd"},{url:"guide/server/intro.html",revision:"7c20542935a54df539ce46055c023f09"},{url:"guide/server/notification.html",revision:"0cc6f71a1d24360fada9c08c30360e89"},{url:"guide/server/socials.html",revision:"aba6b63b0e225a9f79a6d16c16d77f6b"},{url:"guide/server/vps-deploy.html",revision:"20a6b325f99d6a82bfa020067562b4c7"},{url:"index.html",revision:"96e127be4adbd809867a1f87cd77e90f"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"0e404abef34a5635b0cb726fc0c54933"},{url:"migration/tool.html",revision:"1315a682fd1f0b81a819e3c97286bb50"},{url:"migration/valine.html",revision:"489301d0888fe22913978e1102698b0a"},{url:"reference/api.html",revision:"46b906d9ec791bb7d9208ebde4f96dab"},{url:"reference/client.html",revision:"c11b822e59de6f27f01c046294237dab"},{url:"reference/contribution.html",revision:"e3965071f6af00e568ef8ce82405d871"},{url:"reference/instance.html",revision:"b08956d28191cfe824c68d1f2bba3403"},{url:"reference/server.html",revision:"d32719cfceb641ce477de9ec160ee492"}],{})}));
