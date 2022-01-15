if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"0945575a05f434e5810c4fccbbf07f8c"},{url:"advanced/ecosystem.html",revision:"525f67b3d4a06959f2f4d4a29b4a873a"},{url:"advanced/faq.html",revision:"521c3c63788b72b89c8d9dfdf224f2b1"},{url:"advanced/intro.html",revision:"eaa7cc697cb4977b5f71091b3d510f01"},{url:"advanced/why.html",revision:"3eebf10a97e3473258f954e00ea5eaa2"},{url:"assets/css/959.styles.a6096c8d.css",revision:null},{url:"assets/css/styles.6da75289.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/aliyun-fc-1.c4a09313.jpg",revision:null},{url:"assets/img/aliyun-fc-2.5d0877d2.jpg",revision:null},{url:"assets/img/aliyun-fc-3.3d3605c8.jpg",revision:null},{url:"assets/img/aliyun-fc-4.bada9180.jpg",revision:null},{url:"assets/img/aliyun-fc-5.3137ea34.jpg",revision:null},{url:"assets/img/aliyun-fc-6.09a0ec45.jpg",revision:null},{url:"assets/img/aliyun-fc-7.3e9053aa.jpg",revision:null},{url:"assets/img/aliyun-fc-8.e139b393.jpg",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/baidu-cfc-1.9a60bcf4.jpg",revision:null},{url:"assets/img/baidu-cfc-10.447cc90b.jpg",revision:null},{url:"assets/img/baidu-cfc-11.c24e4673.jpg",revision:null},{url:"assets/img/baidu-cfc-2.3fbebdd2.jpg",revision:null},{url:"assets/img/baidu-cfc-3.bc01ce45.jpg",revision:null},{url:"assets/img/baidu-cfc-4.2b669e0d.jpg",revision:null},{url:"assets/img/baidu-cfc-5.3371a54d.jpg",revision:null},{url:"assets/img/baidu-cfc-6.31675304.jpg",revision:null},{url:"assets/img/baidu-cfc-7.6209fc82.jpg",revision:null},{url:"assets/img/baidu-cfc-8.fc4c62df.jpg",revision:null},{url:"assets/img/baidu-cfc-9.aa188f1c.jpg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/deta-1.a238d26f.png",revision:null},{url:"assets/img/deta-2.295d8a01.png",revision:null},{url:"assets/img/deta-3.31cf0dda.jpg",revision:null},{url:"assets/img/inspirecloud-1.97f7c35a.jpg",revision:null},{url:"assets/img/inspirecloud-2.43e596f5.jpg",revision:null},{url:"assets/img/inspirecloud-3.87c2db3b.jpg",revision:null},{url:"assets/img/inspirecloud-4.1e027d84.jpg",revision:null},{url:"assets/img/inspirecloud-5.56adb0d2.jpg",revision:null},{url:"assets/img/inspirecloud-6.be2e2311.jpg",revision:null},{url:"assets/img/inspirecloud-7.57e6fc24.jpg",revision:null},{url:"assets/img/leancloud-1.4f4daf0f.jpeg",revision:null},{url:"assets/img/leancloud-2.d6247334.jpeg",revision:null},{url:"assets/img/leancloud-3.838c3904.png",revision:null},{url:"assets/img/leancloud-app-1.9c9739de.jpg",revision:null},{url:"assets/img/leancloud-app-2.6d9a4f9c.jpg",revision:null},{url:"assets/img/railway-1.3985b528.jpg",revision:null},{url:"assets/img/railway-2.d075e01b.jpg",revision:null},{url:"assets/img/railway-3.5984dee6.jpg",revision:null},{url:"assets/img/railway-4.4f8f9777.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.a04d3351.js",revision:null},{url:"assets/js/5455.61f1697b.js",revision:null},{url:"assets/js/5950.fb3adfe8.js",revision:null},{url:"assets/js/6725.e432c854.js",revision:null},{url:"assets/js/801.e598a66c.js",revision:null},{url:"assets/js/app.5d42befd.js",revision:null},{url:"assets/js/runtime~app.8fbf7176.js",revision:null},{url:"assets/js/v-0418d6cb.a10413f9.js",revision:null},{url:"assets/js/v-057c9824.01698473.js",revision:null},{url:"assets/js/v-058f99fc.96aadcb3.js",revision:null},{url:"assets/js/v-0b556720.3339f542.js",revision:null},{url:"assets/js/v-1b1feb10.fb0cfca2.js",revision:null},{url:"assets/js/v-1bf8da39.ddcd8ce2.js",revision:null},{url:"assets/js/v-1ddcadc2.c7618d4e.js",revision:null},{url:"assets/js/v-271aae61.f9772ad7.js",revision:null},{url:"assets/js/v-27d47a79.34806208.js",revision:null},{url:"assets/js/v-2812bd79.409a6917.js",revision:null},{url:"assets/js/v-2945f13a.40bc3b42.js",revision:null},{url:"assets/js/v-2d0a870d.0ee3735e.js",revision:null},{url:"assets/js/v-2fad59ab.dd15fe36.js",revision:null},{url:"assets/js/v-356c0ac4.d62c8509.js",revision:null},{url:"assets/js/v-3706649a.62af1484.js",revision:null},{url:"assets/js/v-38007666.055c3819.js",revision:null},{url:"assets/js/v-396f59cd.3091b34e.js",revision:null},{url:"assets/js/v-3c8a3984.bcae289f.js",revision:null},{url:"assets/js/v-40608902.fafeb2ba.js",revision:null},{url:"assets/js/v-434e7c8c.e1835c56.js",revision:null},{url:"assets/js/v-45360123.b478927a.js",revision:null},{url:"assets/js/v-4819d2f6.a3811434.js",revision:null},{url:"assets/js/v-487079c5.71ffccbd.js",revision:null},{url:"assets/js/v-4dec5b45.28dc1b42.js",revision:null},{url:"assets/js/v-4f0168b2.ba68906a.js",revision:null},{url:"assets/js/v-4fe1dc58.9bf42248.js",revision:null},{url:"assets/js/v-50cb2a87.6734687f.js",revision:null},{url:"assets/js/v-514365f1.88f659c1.js",revision:null},{url:"assets/js/v-533c70f7.4e091fa3.js",revision:null},{url:"assets/js/v-547fb6c3.f9de721d.js",revision:null},{url:"assets/js/v-583b3d0d.1658aace.js",revision:null},{url:"assets/js/v-5ceabafb.29dbd770.js",revision:null},{url:"assets/js/v-61377328.737f4dd1.js",revision:null},{url:"assets/js/v-668d9be0.301cc415.js",revision:null},{url:"assets/js/v-66cc4fee.c9229ecc.js",revision:null},{url:"assets/js/v-67a66f17.52879988.js",revision:null},{url:"assets/js/v-6b4d4a3d.37974fa8.js",revision:null},{url:"assets/js/v-6d93dbb2.36569e9d.js",revision:null},{url:"assets/js/v-704e8e37.ad9866ee.js",revision:null},{url:"assets/js/v-737ff092.457b8c43.js",revision:null},{url:"assets/js/v-740dc7ea.8f778793.js",revision:null},{url:"assets/js/v-743ff88e.71ab31ee.js",revision:null},{url:"assets/js/v-74a28670.ac8031fe.js",revision:null},{url:"assets/js/v-756ec2fc.60ea260c.js",revision:null},{url:"assets/js/v-7871496c.e7564389.js",revision:null},{url:"assets/js/v-7898f959.27c33ce9.js",revision:null},{url:"assets/js/v-7af875a7.d2790a11.js",revision:null},{url:"assets/js/v-81cb4dce.6728d2c3.js",revision:null},{url:"assets/js/v-82949f3e.9ab9f1bd.js",revision:null},{url:"assets/js/v-8daa1a0e.03ff2f1e.js",revision:null},{url:"assets/js/v-8dba60f6.ec52c557.js",revision:null},{url:"assets/js/v-a1a49808.dcd924ad.js",revision:null},{url:"assets/js/v-a7534f04.9b52b183.js",revision:null},{url:"assets/js/v-aecc6e00.82fd37df.js",revision:null},{url:"assets/js/v-b032db80.780616d0.js",revision:null},{url:"assets/js/v-bfd0f3b0.a5eb2e88.js",revision:null},{url:"assets/js/v-c9146c5e.dd836813.js",revision:null},{url:"assets/js/v-d8d70e1a.135a4688.js",revision:null},{url:"assets/js/v-de155fda.49e7aa7e.js",revision:null},{url:"assets/js/v-de867450.755a37eb.js",revision:null},{url:"assets/js/v-e4322366.e201b486.js",revision:null},{url:"assets/js/v-e565bdda.ac01d3dd.js",revision:null},{url:"assets/js/v-e64f5648.f1f55714.js",revision:null},{url:"assets/js/v-ee77801a.342ffa28.js",revision:null},{url:"assets/js/v-eff96fe2.bce7bf06.js",revision:null},{url:"assets/js/v-f4351e9e.1a391249.js",revision:null},{url:"assets/js/v-fbe3c888.ee89a538.js",revision:null},{url:"assets/js/v-ffe3a066.5a50ee60.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"d3cfe01f8920550a5ba66ef7fb2d7d67"},{url:"en/advanced/faq.html",revision:"6c63ea60305c58dd577f02264a8c4e41"},{url:"en/advanced/intro.html",revision:"75f290de7d18da1e52017200b17f3b9d"},{url:"en/advanced/why.html",revision:"daa9690ae8b010704fc4d8d67b10d836"},{url:"en/guide/client/avatar.html",revision:"85a84ac2e4355e498eafae97f0cbf7ca"},{url:"en/guide/client/count.html",revision:"b350c41234ce47b956b0f894d3720501"},{url:"en/guide/client/emoji.html",revision:"7c08352ae36fe17253d483ac7f86a981"},{url:"en/guide/client/i18n.html",revision:"013cb2faddd267bb324bae2a099cf275"},{url:"en/guide/client/import.html",revision:"f83cff07862919c7332943820506b5d1"},{url:"en/guide/client/intro.html",revision:"300637568768c282cda2712b865ea3b9"},{url:"en/guide/client/recentcomment.html",revision:"f4bc9be531473571d21dc29db56ec320"},{url:"en/guide/client/spa.html",revision:"d21e4da8db8d97ab9b5f10a491e9ca64"},{url:"en/guide/client/style.html",revision:"a74c3d40642b9dbc508012a6526e0471"},{url:"en/guide/client/syntax.html",revision:"52b1f6c8eacf3ec3aa23faac35d3d289"},{url:"en/guide/client/widget/index.html",revision:"f7ecc9d3d730c80e9004dc5fa0e1a205"},{url:"en/guide/client/widget/recent-comment.html",revision:"49a6c71d76aa2e0816e0d4c3d12d66df"},{url:"en/guide/get-started.html",revision:"76ecf2b4054e185b83ef2d4cb6fe71a0"},{url:"en/guide/server/databases.html",revision:"d0d98ca85b2a50fc32cb9078fb76ba69"},{url:"en/guide/server/deta.html",revision:"9d5ed06981f58592710bf6d3772c3778"},{url:"en/guide/server/intro.html",revision:"e23ab8075c3e535818c8dfe89aa71764"},{url:"en/guide/server/notification.html",revision:"a53342f2e18a163afd4272a8c506f24d"},{url:"en/guide/server/railway.html",revision:"ec39bb4112b542dce8182bca4b8a588d"},{url:"en/guide/server/vps-deploy.html",revision:"c885b987404f56de0db87750156dd532"},{url:"en/index.html",revision:"1ecaf50a82a73d9b93dc29bee7700bd5"},{url:"en/migration/client.html",revision:"1d552ae5cf7a7c422cea88806704f03d"},{url:"en/migration/tool.html",revision:"c7aa7f5c48b42bdaf4683f1061a7063f"},{url:"en/migration/valine.html",revision:"8109a97785628be6af28bff570e975da"},{url:"en/reference/api.html",revision:"71650e3207871ca2f8d62acf69825ace"},{url:"en/reference/client.html",revision:"c28ff1b19fe44a3635d38de997a2f924"},{url:"en/reference/contribution.html",revision:"63af196c56277312719ac247d7fc27f4"},{url:"en/reference/instance.html",revision:"c26f048c874e274c1e06d3dbc67a24a4"},{url:"en/reference/server.html",revision:"ca76aacc7ee775967610e42a914293e3"},{url:"google8b3d888472d9b77d.html",revision:"be690667e96e5c35bcbfa1752270eb69"},{url:"guide/client/avatar.html",revision:"33781c2263a4b2af4a35c62c36cd3648"},{url:"guide/client/count.html",revision:"52603d3c41bcd1ca9ecf394da2c4051d"},{url:"guide/client/emoji.html",revision:"34a51ed0089706ac7ec17fa17c3ba3f9"},{url:"guide/client/i18n.html",revision:"4a1d7d7103004417b38d0fb1ddb909ce"},{url:"guide/client/import.html",revision:"05d755fbb71a97839190a19d06952be5"},{url:"guide/client/intro.html",revision:"f5452fd7aa7af6d3135cc5a4c6c51b29"},{url:"guide/client/spa.html",revision:"8ba5f732cb32debcaa703e9fc02bd5a5"},{url:"guide/client/style.html",revision:"df24c2361f9cc4c55c8315b1d27f2ae0"},{url:"guide/client/syntax.html",revision:"e603d4dae0e0fe004513707748362849"},{url:"guide/client/widget/index.html",revision:"181df552b6e8bb04f41ab07bf25686cf"},{url:"guide/client/widget/recent-comment.html",revision:"1cefc0d0f24e6de785994b5314ec3ba5"},{url:"guide/get-started.html",revision:"479ed14d814274fcfd27dab39b66febd"},{url:"guide/server/aliyun-fc.html",revision:"9f20bbebce7891c14e83a085e84c6073"},{url:"guide/server/baidu-cfc.html",revision:"fd717d382095b1ea23e5d0a56d3035c6"},{url:"guide/server/cloudbase.html",revision:"5407d9857a4d1a5302a193cd3e94f6b4"},{url:"guide/server/databases.html",revision:"730d64047e2a5ad8b36abe0455c64239"},{url:"guide/server/deta.html",revision:"3be80c537447bf1a4747122134865ce3"},{url:"guide/server/inspirecloud.html",revision:"36e2a1993385a6cbdc050040f1b91052"},{url:"guide/server/intro.html",revision:"408c5fafae8ec5a67c0564856c03b0b0"},{url:"guide/server/notification.html",revision:"02e3753b67ebf2fb612e6fb12ab2bdfd"},{url:"guide/server/railway.html",revision:"1c09d66d4cae8371c0f7f2a6f0ad85f9"},{url:"guide/server/vps-deploy.html",revision:"74b373525bf7b83e8322d4f88d60ab75"},{url:"index.html",revision:"9e7211b2911996b9e2fdf0ce71dfbd48"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"37a62ef3c8794475da4793e5c36431aa"},{url:"migration/tool.html",revision:"45dcca5ad30a1289eb6e67711e46c84e"},{url:"migration/valine.html",revision:"3258309a4b1a962099309f280a2236c0"},{url:"reference/api.html",revision:"e90a625fc3b491cfdc565e3ee5f226cd"},{url:"reference/client.html",revision:"83bcfb940966484a6bc14e6392b25e90"},{url:"reference/contribution.html",revision:"b26915a5958d781edbe3e1164236591d"},{url:"reference/instance.html",revision:"5dfcb1498eef4d9b92f0295b28ac3aaa"},{url:"reference/server.html",revision:"a63f7fe640c0790654941cba4eed7e84"}],{})}));
