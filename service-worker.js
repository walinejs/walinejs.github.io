if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7ba0a8667184f0233b267a0c03ed5b25"},{url:"advanced/ecosystem.html",revision:"ca47a197acf4c505ff52fff510cc79f8"},{url:"advanced/faq.html",revision:"cfac99e51050ca20b8672c0647f67804"},{url:"advanced/intro.html",revision:"7a210ddb6798cca7923e5b4496ec67ad"},{url:"advanced/why.html",revision:"6c4e749d9bff7de848a101dd85a78ba8"},{url:"assets/css/959.styles.a6096c8d.css",revision:null},{url:"assets/css/styles.6da75289.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/aliyun-fc-1.c4a09313.jpg",revision:null},{url:"assets/img/aliyun-fc-2.5d0877d2.jpg",revision:null},{url:"assets/img/aliyun-fc-3.3d3605c8.jpg",revision:null},{url:"assets/img/aliyun-fc-4.bada9180.jpg",revision:null},{url:"assets/img/aliyun-fc-5.3137ea34.jpg",revision:null},{url:"assets/img/aliyun-fc-6.09a0ec45.jpg",revision:null},{url:"assets/img/aliyun-fc-7.3e9053aa.jpg",revision:null},{url:"assets/img/aliyun-fc-8.e139b393.jpg",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/baidu-cfc-1.9a60bcf4.jpg",revision:null},{url:"assets/img/baidu-cfc-10.447cc90b.jpg",revision:null},{url:"assets/img/baidu-cfc-11.c24e4673.jpg",revision:null},{url:"assets/img/baidu-cfc-2.3fbebdd2.jpg",revision:null},{url:"assets/img/baidu-cfc-3.bc01ce45.jpg",revision:null},{url:"assets/img/baidu-cfc-4.2b669e0d.jpg",revision:null},{url:"assets/img/baidu-cfc-5.3371a54d.jpg",revision:null},{url:"assets/img/baidu-cfc-6.31675304.jpg",revision:null},{url:"assets/img/baidu-cfc-7.6209fc82.jpg",revision:null},{url:"assets/img/baidu-cfc-8.fc4c62df.jpg",revision:null},{url:"assets/img/baidu-cfc-9.aa188f1c.jpg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/deta-1.a238d26f.png",revision:null},{url:"assets/img/deta-2.295d8a01.png",revision:null},{url:"assets/img/deta-3.31cf0dda.jpg",revision:null},{url:"assets/img/inspirecloud-1.97f7c35a.jpg",revision:null},{url:"assets/img/inspirecloud-2.43e596f5.jpg",revision:null},{url:"assets/img/inspirecloud-3.87c2db3b.jpg",revision:null},{url:"assets/img/inspirecloud-4.1e027d84.jpg",revision:null},{url:"assets/img/inspirecloud-5.56adb0d2.jpg",revision:null},{url:"assets/img/inspirecloud-6.be2e2311.jpg",revision:null},{url:"assets/img/inspirecloud-7.57e6fc24.jpg",revision:null},{url:"assets/img/leancloud-1.4f4daf0f.jpeg",revision:null},{url:"assets/img/leancloud-2.d6247334.jpeg",revision:null},{url:"assets/img/leancloud-3.838c3904.png",revision:null},{url:"assets/img/leancloud-app-1.9c9739de.jpg",revision:null},{url:"assets/img/leancloud-app-2.6d9a4f9c.jpg",revision:null},{url:"assets/img/railway-1.3985b528.jpg",revision:null},{url:"assets/img/railway-2.d075e01b.jpg",revision:null},{url:"assets/img/railway-3.5984dee6.jpg",revision:null},{url:"assets/img/railway-4.4f8f9777.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.45eb7e1b.js",revision:null},{url:"assets/js/5455.61f1697b.js",revision:null},{url:"assets/js/5950.6c623dfa.js",revision:null},{url:"assets/js/6725.bccc9505.js",revision:null},{url:"assets/js/801.e598a66c.js",revision:null},{url:"assets/js/app.add8b938.js",revision:null},{url:"assets/js/runtime~app.5d034a51.js",revision:null},{url:"assets/js/v-0418d6cb.0e1b7ca4.js",revision:null},{url:"assets/js/v-057c9824.491bfe0d.js",revision:null},{url:"assets/js/v-058f99fc.fbcbbbaf.js",revision:null},{url:"assets/js/v-0b556720.c961aaf2.js",revision:null},{url:"assets/js/v-1b1feb10.fc397023.js",revision:null},{url:"assets/js/v-1bf8da39.75c08ded.js",revision:null},{url:"assets/js/v-1ddcadc2.eb066c17.js",revision:null},{url:"assets/js/v-271aae61.4324b4cb.js",revision:null},{url:"assets/js/v-27d47a79.df0d97eb.js",revision:null},{url:"assets/js/v-2812bd79.c5fe3627.js",revision:null},{url:"assets/js/v-2945f13a.fb6545a3.js",revision:null},{url:"assets/js/v-2d0a870d.ca83d2a2.js",revision:null},{url:"assets/js/v-2fad59ab.7aa6d033.js",revision:null},{url:"assets/js/v-356c0ac4.ab9c3ee2.js",revision:null},{url:"assets/js/v-3706649a.62af1484.js",revision:null},{url:"assets/js/v-38007666.f190e2e2.js",revision:null},{url:"assets/js/v-396f59cd.c55db6fa.js",revision:null},{url:"assets/js/v-3c8a3984.f715b06e.js",revision:null},{url:"assets/js/v-40608902.58eee89b.js",revision:null},{url:"assets/js/v-434e7c8c.6ba013d2.js",revision:null},{url:"assets/js/v-45360123.cfde2866.js",revision:null},{url:"assets/js/v-4819d2f6.02b1ff27.js",revision:null},{url:"assets/js/v-487079c5.51def891.js",revision:null},{url:"assets/js/v-4dec5b45.32fb9a46.js",revision:null},{url:"assets/js/v-4f0168b2.310a460e.js",revision:null},{url:"assets/js/v-4fe1dc58.825554d7.js",revision:null},{url:"assets/js/v-50cb2a87.b19523cc.js",revision:null},{url:"assets/js/v-514365f1.c1b480a9.js",revision:null},{url:"assets/js/v-533c70f7.586f6337.js",revision:null},{url:"assets/js/v-547fb6c3.946257c2.js",revision:null},{url:"assets/js/v-583b3d0d.61c662cd.js",revision:null},{url:"assets/js/v-5ceabafb.33fcaa60.js",revision:null},{url:"assets/js/v-61377328.2e8bc3ca.js",revision:null},{url:"assets/js/v-668d9be0.adbca7c5.js",revision:null},{url:"assets/js/v-66cc4fee.da83aef6.js",revision:null},{url:"assets/js/v-67a66f17.438540ee.js",revision:null},{url:"assets/js/v-6b4d4a3d.733ceb90.js",revision:null},{url:"assets/js/v-6d93dbb2.19f48094.js",revision:null},{url:"assets/js/v-704e8e37.083436d5.js",revision:null},{url:"assets/js/v-737ff092.b6a14802.js",revision:null},{url:"assets/js/v-740dc7ea.c519c9ff.js",revision:null},{url:"assets/js/v-743ff88e.4ca3cbf5.js",revision:null},{url:"assets/js/v-74a28670.5311e156.js",revision:null},{url:"assets/js/v-756ec2fc.9eb4b75e.js",revision:null},{url:"assets/js/v-7871496c.925c9d3f.js",revision:null},{url:"assets/js/v-7898f959.6c9270ae.js",revision:null},{url:"assets/js/v-7af875a7.7230305b.js",revision:null},{url:"assets/js/v-81cb4dce.eb5f2b47.js",revision:null},{url:"assets/js/v-82949f3e.b6c467b2.js",revision:null},{url:"assets/js/v-8daa1a0e.367f5d7d.js",revision:null},{url:"assets/js/v-8dba60f6.dcb25d90.js",revision:null},{url:"assets/js/v-a1a49808.3b6fe3c4.js",revision:null},{url:"assets/js/v-a7534f04.893f977a.js",revision:null},{url:"assets/js/v-aecc6e00.6fdd44ee.js",revision:null},{url:"assets/js/v-b032db80.734d2742.js",revision:null},{url:"assets/js/v-bfd0f3b0.4e0a6751.js",revision:null},{url:"assets/js/v-c9146c5e.f69a4a5a.js",revision:null},{url:"assets/js/v-d8d70e1a.efbd83a9.js",revision:null},{url:"assets/js/v-de155fda.83bfe9e4.js",revision:null},{url:"assets/js/v-de867450.6a1518ae.js",revision:null},{url:"assets/js/v-e4322366.c8f3dc1a.js",revision:null},{url:"assets/js/v-e565bdda.1f0f632d.js",revision:null},{url:"assets/js/v-e64f5648.ee030773.js",revision:null},{url:"assets/js/v-ee77801a.1f2ecc9d.js",revision:null},{url:"assets/js/v-eff96fe2.b23a6d75.js",revision:null},{url:"assets/js/v-f4351e9e.1b327b40.js",revision:null},{url:"assets/js/v-fbe3c888.6a286341.js",revision:null},{url:"assets/js/v-ffe3a066.c8aabe74.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"0fa2ff3a6bc4c30c122bdbc46a00d0c2"},{url:"en/advanced/faq.html",revision:"8a44dd4a844c7ef94ec97052b918ab65"},{url:"en/advanced/intro.html",revision:"37f6e2c0840435058161e77bf4599c2b"},{url:"en/advanced/why.html",revision:"006b47357d0b5b731bc83639e755029f"},{url:"en/guide/client/avatar.html",revision:"eebdf8e347f31c0d68ae8237a870d54a"},{url:"en/guide/client/count.html",revision:"7bbc38da6cb0100c04edab043ee1a677"},{url:"en/guide/client/emoji.html",revision:"24aa8d01c06041d7e4799f8a4d08e748"},{url:"en/guide/client/i18n.html",revision:"f3aa12e1bd238348667d09dba3970bbc"},{url:"en/guide/client/import.html",revision:"f3ee23c7ddda9519980460122f885c7f"},{url:"en/guide/client/intro.html",revision:"730ea8dd4bb52cb60b52e1f0245b55cc"},{url:"en/guide/client/recentcomment.html",revision:"aac82d52bce54d7e35dbc7bb3826dcdd"},{url:"en/guide/client/spa.html",revision:"6b78489cbf243fb91506d16bfa75f3ec"},{url:"en/guide/client/style.html",revision:"063fb17d5698f5acc0daa4cdcbc902ff"},{url:"en/guide/client/syntax.html",revision:"055796b3b97e31c7365da2107296dda1"},{url:"en/guide/client/widget/index.html",revision:"13346cbbb1ba5ec472db5d9777758628"},{url:"en/guide/client/widget/recent-comment.html",revision:"20c454f9a45a6b96be00099f903751a1"},{url:"en/guide/get-started.html",revision:"198c6051b6e5866d69eb9c0a64470a38"},{url:"en/guide/server/databases.html",revision:"bca47b32a30c1e1dfda67def81b59655"},{url:"en/guide/server/deta.html",revision:"2484a6d51182d67ee2f60ffbe901409a"},{url:"en/guide/server/intro.html",revision:"2a31e34ed6fb14484a3052d16ff51062"},{url:"en/guide/server/notification.html",revision:"875bc5171c08663df88a68e2f15181e9"},{url:"en/guide/server/railway.html",revision:"9fda8fc20ea186a854a85ce382066f60"},{url:"en/guide/server/vps-deploy.html",revision:"942866fb6821a4c972074875d903a1fc"},{url:"en/index.html",revision:"bfc6dd519f2fb65a99c42e0a4062cb30"},{url:"en/migration/client.html",revision:"badcf61f9362debc57cf902ff6d7614a"},{url:"en/migration/tool.html",revision:"f43cd3b18d60cb54b775474ad415930f"},{url:"en/migration/valine.html",revision:"d885dab86255b7f7dbe1fc296687ec7e"},{url:"en/reference/api.html",revision:"ec44f3eb5f4ba364cc5dd1a2bc8547de"},{url:"en/reference/client.html",revision:"3ca129d037b9aa9688a0c94efbabe353"},{url:"en/reference/contribution.html",revision:"fd63021b4680426bf20f441666665ff0"},{url:"en/reference/instance.html",revision:"f1d2516de09f4136dc2e9ffccffccaa3"},{url:"en/reference/server.html",revision:"b1c4597588df073368e465a860f91b89"},{url:"google8b3d888472d9b77d.html",revision:"be690667e96e5c35bcbfa1752270eb69"},{url:"guide/client/avatar.html",revision:"fb049e9e88aa6d792ae5fa44328041db"},{url:"guide/client/count.html",revision:"ff2e097dbdbf28ca8ac24e18f7dd0e32"},{url:"guide/client/emoji.html",revision:"b39d301a26312b7d406000c018066c8a"},{url:"guide/client/i18n.html",revision:"756922a0ca58be7ca0d93e33460beb1d"},{url:"guide/client/import.html",revision:"1d99602aaa4f429a266c45b55b77ea45"},{url:"guide/client/intro.html",revision:"73cb92dfca9dd93b3895bc34ba84a15d"},{url:"guide/client/spa.html",revision:"4da9eb548ebbab35e14f31498d85f62f"},{url:"guide/client/style.html",revision:"4a6a6a6ff674fa5a3c6c07f108d74596"},{url:"guide/client/syntax.html",revision:"55658ff834b06c99cfac3828ba6f901e"},{url:"guide/client/widget/index.html",revision:"d62528acc717b53753f886d4c38dbafc"},{url:"guide/client/widget/recent-comment.html",revision:"294999501831c234c2971191e6862fd5"},{url:"guide/get-started.html",revision:"4b503b00892b538862c3a72eecaf973c"},{url:"guide/server/aliyun-fc.html",revision:"18f9f0c04a28cb6de4856f194b710459"},{url:"guide/server/baidu-cfc.html",revision:"00d6475480bb32adb336c2dfd16b7959"},{url:"guide/server/cloudbase.html",revision:"2f5f5c40c17623373e5d5861519f9fc3"},{url:"guide/server/databases.html",revision:"efd606fc70d04a7e3f67853b02b308b1"},{url:"guide/server/deta.html",revision:"0371cbb40d35343609d3542904a703b6"},{url:"guide/server/inspirecloud.html",revision:"4d08c38d958fbab820d309444326b133"},{url:"guide/server/intro.html",revision:"2e46adf2e681b683b4395a72445ed44d"},{url:"guide/server/notification.html",revision:"12968047a0a289db0befc580316188b6"},{url:"guide/server/railway.html",revision:"567385ddd9e9fef7421169094339fe38"},{url:"guide/server/vps-deploy.html",revision:"5bba3d105f87c2299e38411d14ce64c5"},{url:"index.html",revision:"3fa58badd3eec191ec3c5e4e4ed088a6"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"53462854f35f1a035397f1dc126d1886"},{url:"migration/tool.html",revision:"513e28d6c34ccd1614964551768dafc7"},{url:"migration/valine.html",revision:"dfce40b1e290684074835ea1f307000b"},{url:"reference/api.html",revision:"c35cf6fe44895e76d4083c5acfffd768"},{url:"reference/client.html",revision:"f39b1242c1ad6b4e5e1931a0dc3d7901"},{url:"reference/contribution.html",revision:"9b3a09baba530c67ecf195f815ec460e"},{url:"reference/instance.html",revision:"419bd31c3de1be1cb784d8715d53a983"},{url:"reference/server.html",revision:"41a073a18e9e0df91c4a686fe42128a2"}],{})}));
