if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"190b438048ee84752501ea3d6cdfe927"},{url:"advanced/ecosystem.html",revision:"30b9661f814b6d654108248c111dcdab"},{url:"advanced/faq.html",revision:"f64bf1253b2366a1ad606244a98f29ac"},{url:"advanced/intro.html",revision:"2585e13f8074ac143d9fd32f73a46a0d"},{url:"advanced/why.html",revision:"e9d3a8b938f529f91a0ae0b1f414d34a"},{url:"assets/css/959.styles.a6096c8d.css",revision:null},{url:"assets/css/styles.6da75289.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/aliyun-fc-1.c4a09313.jpg",revision:null},{url:"assets/img/aliyun-fc-2.5d0877d2.jpg",revision:null},{url:"assets/img/aliyun-fc-3.3d3605c8.jpg",revision:null},{url:"assets/img/aliyun-fc-4.bada9180.jpg",revision:null},{url:"assets/img/aliyun-fc-5.3137ea34.jpg",revision:null},{url:"assets/img/aliyun-fc-6.09a0ec45.jpg",revision:null},{url:"assets/img/aliyun-fc-7.3e9053aa.jpg",revision:null},{url:"assets/img/aliyun-fc-8.e139b393.jpg",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/baidu-cfc-1.9a60bcf4.jpg",revision:null},{url:"assets/img/baidu-cfc-10.447cc90b.jpg",revision:null},{url:"assets/img/baidu-cfc-11.c24e4673.jpg",revision:null},{url:"assets/img/baidu-cfc-2.3fbebdd2.jpg",revision:null},{url:"assets/img/baidu-cfc-3.bc01ce45.jpg",revision:null},{url:"assets/img/baidu-cfc-4.2b669e0d.jpg",revision:null},{url:"assets/img/baidu-cfc-5.3371a54d.jpg",revision:null},{url:"assets/img/baidu-cfc-6.31675304.jpg",revision:null},{url:"assets/img/baidu-cfc-7.6209fc82.jpg",revision:null},{url:"assets/img/baidu-cfc-8.fc4c62df.jpg",revision:null},{url:"assets/img/baidu-cfc-9.aa188f1c.jpg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/deta-1.a238d26f.png",revision:null},{url:"assets/img/deta-2.295d8a01.png",revision:null},{url:"assets/img/deta-3.31cf0dda.jpg",revision:null},{url:"assets/img/inspirecloud-1.97f7c35a.jpg",revision:null},{url:"assets/img/inspirecloud-2.43e596f5.jpg",revision:null},{url:"assets/img/inspirecloud-3.87c2db3b.jpg",revision:null},{url:"assets/img/inspirecloud-4.1e027d84.jpg",revision:null},{url:"assets/img/inspirecloud-5.56adb0d2.jpg",revision:null},{url:"assets/img/inspirecloud-6.be2e2311.jpg",revision:null},{url:"assets/img/inspirecloud-7.57e6fc24.jpg",revision:null},{url:"assets/img/leancloud-1.4f4daf0f.jpeg",revision:null},{url:"assets/img/leancloud-2.d6247334.jpeg",revision:null},{url:"assets/img/leancloud-3.838c3904.png",revision:null},{url:"assets/img/leancloud-app-1.9c9739de.jpg",revision:null},{url:"assets/img/leancloud-app-2.6d9a4f9c.jpg",revision:null},{url:"assets/img/railway-1.3985b528.jpg",revision:null},{url:"assets/img/railway-2.d075e01b.jpg",revision:null},{url:"assets/img/railway-3.5984dee6.jpg",revision:null},{url:"assets/img/railway-4.4f8f9777.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.a04d3351.js",revision:null},{url:"assets/js/5455.61f1697b.js",revision:null},{url:"assets/js/5950.fb3adfe8.js",revision:null},{url:"assets/js/6725.e432c854.js",revision:null},{url:"assets/js/801.e598a66c.js",revision:null},{url:"assets/js/app.82989796.js",revision:null},{url:"assets/js/runtime~app.2ac6db9c.js",revision:null},{url:"assets/js/v-0418d6cb.ad0b8111.js",revision:null},{url:"assets/js/v-057c9824.a11e2c3d.js",revision:null},{url:"assets/js/v-058f99fc.c3ccfbe5.js",revision:null},{url:"assets/js/v-0b556720.85da8f72.js",revision:null},{url:"assets/js/v-1b1feb10.c567131b.js",revision:null},{url:"assets/js/v-1bf8da39.3e83ccf4.js",revision:null},{url:"assets/js/v-1ddcadc2.8df69436.js",revision:null},{url:"assets/js/v-271aae61.0104b630.js",revision:null},{url:"assets/js/v-27d47a79.280d2f2f.js",revision:null},{url:"assets/js/v-2812bd79.b34a46af.js",revision:null},{url:"assets/js/v-2945f13a.96e8f2a6.js",revision:null},{url:"assets/js/v-2d0a870d.4578b88b.js",revision:null},{url:"assets/js/v-2fad59ab.cdb10aa2.js",revision:null},{url:"assets/js/v-356c0ac4.232f5bba.js",revision:null},{url:"assets/js/v-3706649a.62af1484.js",revision:null},{url:"assets/js/v-38007666.354c3f6e.js",revision:null},{url:"assets/js/v-396f59cd.f37ae36a.js",revision:null},{url:"assets/js/v-3c8a3984.5633369a.js",revision:null},{url:"assets/js/v-40608902.01a723b7.js",revision:null},{url:"assets/js/v-434e7c8c.e7d4d49f.js",revision:null},{url:"assets/js/v-45360123.b6e51279.js",revision:null},{url:"assets/js/v-4819d2f6.4417a60b.js",revision:null},{url:"assets/js/v-487079c5.57ca41a5.js",revision:null},{url:"assets/js/v-4dec5b45.152e6f22.js",revision:null},{url:"assets/js/v-4f0168b2.9ae6fb5a.js",revision:null},{url:"assets/js/v-4fe1dc58.6a317eb3.js",revision:null},{url:"assets/js/v-50cb2a87.00f4c16b.js",revision:null},{url:"assets/js/v-514365f1.8255abdd.js",revision:null},{url:"assets/js/v-533c70f7.b2516e13.js",revision:null},{url:"assets/js/v-547fb6c3.009bc71e.js",revision:null},{url:"assets/js/v-583b3d0d.3827be12.js",revision:null},{url:"assets/js/v-5ceabafb.909040b9.js",revision:null},{url:"assets/js/v-61377328.51d380af.js",revision:null},{url:"assets/js/v-668d9be0.9ecd1967.js",revision:null},{url:"assets/js/v-66cc4fee.fe37e6e6.js",revision:null},{url:"assets/js/v-67a66f17.9a0f187e.js",revision:null},{url:"assets/js/v-6b4d4a3d.da2acfb4.js",revision:null},{url:"assets/js/v-6d93dbb2.a2b9e318.js",revision:null},{url:"assets/js/v-704e8e37.a754f292.js",revision:null},{url:"assets/js/v-737ff092.bf156d47.js",revision:null},{url:"assets/js/v-740dc7ea.9a5a8196.js",revision:null},{url:"assets/js/v-743ff88e.a78a303f.js",revision:null},{url:"assets/js/v-74a28670.e4b39e83.js",revision:null},{url:"assets/js/v-756ec2fc.481ba051.js",revision:null},{url:"assets/js/v-7871496c.694b94f9.js",revision:null},{url:"assets/js/v-7898f959.76f15b5e.js",revision:null},{url:"assets/js/v-7af875a7.371d64d5.js",revision:null},{url:"assets/js/v-81cb4dce.6a5154e4.js",revision:null},{url:"assets/js/v-82949f3e.99ef34a8.js",revision:null},{url:"assets/js/v-8daa1a0e.084a9ef4.js",revision:null},{url:"assets/js/v-8dba60f6.f3a8c04b.js",revision:null},{url:"assets/js/v-a1a49808.9ca1f061.js",revision:null},{url:"assets/js/v-a7534f04.24fce5d8.js",revision:null},{url:"assets/js/v-aecc6e00.e0bf4850.js",revision:null},{url:"assets/js/v-b032db80.b19592e8.js",revision:null},{url:"assets/js/v-bfd0f3b0.72c56515.js",revision:null},{url:"assets/js/v-c9146c5e.7cad2dd3.js",revision:null},{url:"assets/js/v-d8d70e1a.760db3d8.js",revision:null},{url:"assets/js/v-de155fda.17c157bf.js",revision:null},{url:"assets/js/v-de867450.4e80b426.js",revision:null},{url:"assets/js/v-e4322366.ce6beb07.js",revision:null},{url:"assets/js/v-e565bdda.cb329809.js",revision:null},{url:"assets/js/v-e64f5648.fa13f778.js",revision:null},{url:"assets/js/v-ee77801a.27edb2cb.js",revision:null},{url:"assets/js/v-eff96fe2.6dcadf23.js",revision:null},{url:"assets/js/v-f4351e9e.9214a11b.js",revision:null},{url:"assets/js/v-fbe3c888.f46c1e29.js",revision:null},{url:"assets/js/v-ffe3a066.f027dd97.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"c3ae467abd93b223c453a6b41528f9bb"},{url:"en/advanced/faq.html",revision:"251fddf3bb18bef7b0305c73f057180f"},{url:"en/advanced/intro.html",revision:"0ba699ede70df4296b2024431fa5ec94"},{url:"en/advanced/why.html",revision:"756a1eb1c8de3b45daffa24dc4588484"},{url:"en/guide/client/avatar.html",revision:"aec42c6712f64eabfcb3e0cc407a82a3"},{url:"en/guide/client/count.html",revision:"64d7e46572fa3a97fa623695e6296f2d"},{url:"en/guide/client/emoji.html",revision:"61ca3dcf7fce5eda121f402b7a4a6538"},{url:"en/guide/client/i18n.html",revision:"021e232985e2c9171b36ba692bbd073f"},{url:"en/guide/client/import.html",revision:"3284568b4adee07abb3c5a1c36729c78"},{url:"en/guide/client/intro.html",revision:"7a4d009a65ddeb42792e1892d048f2e2"},{url:"en/guide/client/recentcomment.html",revision:"dce9f131b7d7eefe0b61422fe8df654b"},{url:"en/guide/client/spa.html",revision:"7b0c4f48f8213b1f3737f45b531b8b8b"},{url:"en/guide/client/style.html",revision:"470677b5637cf0d8a6bba8f829f5c1c5"},{url:"en/guide/client/syntax.html",revision:"a00abcaba9cede749e42124c6a009853"},{url:"en/guide/client/widget/index.html",revision:"c56f1864033337b10e9a32896306f191"},{url:"en/guide/client/widget/recent-comment.html",revision:"5c0c978b2c03afadd83d6dd29c22a33c"},{url:"en/guide/get-started.html",revision:"e83199d4eaaae1151cba0fe083e3eee6"},{url:"en/guide/server/databases.html",revision:"37e67671a12716ee47f82d6a10da7d2b"},{url:"en/guide/server/deta.html",revision:"1559c3d6d35c4d0c4dcae4a6014c9aa7"},{url:"en/guide/server/intro.html",revision:"13a60be2c9ac83221adc6ad477332582"},{url:"en/guide/server/notification.html",revision:"e042a3f30a1f236893dbb4a956e5fa2d"},{url:"en/guide/server/railway.html",revision:"acd21d626cd3aa30b6dd189a5cdb6d7d"},{url:"en/guide/server/vps-deploy.html",revision:"d2c03490e1daa26f2c0de33264c93e36"},{url:"en/index.html",revision:"0f2a9d995545c7c78785733a74cae28c"},{url:"en/migration/client.html",revision:"0c466e27a1c00b4b5cd6983b48f80281"},{url:"en/migration/tool.html",revision:"10dba6ea83c591ef85023a5650c2cc83"},{url:"en/migration/valine.html",revision:"acb444f5bd92b5a0446c8f4fef0ab9fc"},{url:"en/reference/api.html",revision:"97acfb735b12f8643a7398ba93efbe3a"},{url:"en/reference/client.html",revision:"deb2f1078379a9b9a1b9e91b6327983c"},{url:"en/reference/contribution.html",revision:"e6b7435ee4f550c01874e050e9e8fbf1"},{url:"en/reference/instance.html",revision:"a721f95306ceaf7bb497397c9bba3da2"},{url:"en/reference/server.html",revision:"fc7dc8d6e40c049256afb219b939f902"},{url:"google8b3d888472d9b77d.html",revision:"be690667e96e5c35bcbfa1752270eb69"},{url:"guide/client/avatar.html",revision:"6b219434a8888aceb7a3c9967f652802"},{url:"guide/client/count.html",revision:"d12041eab50307535ee49e6ac8d2c50b"},{url:"guide/client/emoji.html",revision:"128aa29208e1a2dc8ceab687d0e88d9d"},{url:"guide/client/i18n.html",revision:"26cd709aa22c284352bca765b6350153"},{url:"guide/client/import.html",revision:"d5badd986aede47f1fa2fe3170b72dab"},{url:"guide/client/intro.html",revision:"a6486beece36fb02967100feb31f1460"},{url:"guide/client/spa.html",revision:"848fbd1100855d3940f5b6858a03f61d"},{url:"guide/client/style.html",revision:"5f7f046ad03cdd09fa249279968d393c"},{url:"guide/client/syntax.html",revision:"82417af11c5b2761e30299a36bf7f2bc"},{url:"guide/client/widget/index.html",revision:"bb9ac9980d865191982344f9592c4d32"},{url:"guide/client/widget/recent-comment.html",revision:"8d24d662b679b7038eeced640fff4c42"},{url:"guide/get-started.html",revision:"5f4d201b90010c81f164bb6cd416f4ff"},{url:"guide/server/aliyun-fc.html",revision:"d188ba5fca3e1076c9fe43b4d0d9dab7"},{url:"guide/server/baidu-cfc.html",revision:"983670d39c2bb9994d0572821b8a9090"},{url:"guide/server/cloudbase.html",revision:"c972f514c4d8d65dfc50f0edb8ac14f7"},{url:"guide/server/databases.html",revision:"8c9dea377a0a85144327bb04c611a279"},{url:"guide/server/deta.html",revision:"730a7c821c168499164fcebbc3bd3ab6"},{url:"guide/server/inspirecloud.html",revision:"5163e93f657f9c366fa6759f7030ab8e"},{url:"guide/server/intro.html",revision:"536496ffa9d676d835d5674611427674"},{url:"guide/server/notification.html",revision:"384c98bb386e376f6e23e54355780a40"},{url:"guide/server/railway.html",revision:"611a92516e4e16b8017e45e77146549c"},{url:"guide/server/vps-deploy.html",revision:"5b61be908d6cf3a2beb8c0b7b665c916"},{url:"index.html",revision:"1ce2d5331ade6f1752173eef9c6f3ad4"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"e9839ad759211535eb97f590f329c91d"},{url:"migration/tool.html",revision:"3339b35aa38de22c7985c1a86fc73871"},{url:"migration/valine.html",revision:"d6c2253296d4d0b269b3a1891ce9f281"},{url:"reference/api.html",revision:"24bd1f35eadf96db4d717e01050e6536"},{url:"reference/client.html",revision:"5286cb7a68b45ef002fb0ca9dbe7ceaa"},{url:"reference/contribution.html",revision:"78e61fd0a9cbc2e303bbb8f3386bfee5"},{url:"reference/instance.html",revision:"24305b89580d6d761f337ec9792838fc"},{url:"reference/server.html",revision:"4bcc2bb3461c619bb257c73c2fc382e7"}],{})}));
