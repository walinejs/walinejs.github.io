if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b521073724319082fd9dc05213e7a0a9"},{url:"advanced/ecosystem.html",revision:"8d5035ffcce93fbef4a774a8379ff938"},{url:"advanced/faq.html",revision:"d5d22d0f933789b13f31bc68df5c0c64"},{url:"advanced/intro.html",revision:"b7ef421a75b3ab70fed6e0b9b716a963"},{url:"advanced/why.html",revision:"68394dcaa76f3773bab36b3edf5c7317"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.190d6076.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.359166a6.js",revision:null},{url:"assets/js/5556.5b13d4eb.js",revision:null},{url:"assets/js/801.c19c4dc0.js",revision:null},{url:"assets/js/9230.b56a5c5e.js",revision:null},{url:"assets/js/app.a1faa1c5.js",revision:null},{url:"assets/js/runtime~app.13a59bbc.js",revision:null},{url:"assets/js/v-057c9824.9f051602.js",revision:null},{url:"assets/js/v-058f99fc.3de67195.js",revision:null},{url:"assets/js/v-0b556720.ec032674.js",revision:null},{url:"assets/js/v-1b1feb10.f6ad0b6c.js",revision:null},{url:"assets/js/v-1bf8da39.a9565a88.js",revision:null},{url:"assets/js/v-271aae61.c1fa948a.js",revision:null},{url:"assets/js/v-27d47a79.2804e2ee.js",revision:null},{url:"assets/js/v-2812bd79.3d67e4d2.js",revision:null},{url:"assets/js/v-2945f13a.1fa132b1.js",revision:null},{url:"assets/js/v-2d0a870d.cd464604.js",revision:null},{url:"assets/js/v-2fad59ab.9170fbed.js",revision:null},{url:"assets/js/v-356c0ac4.9e059915.js",revision:null},{url:"assets/js/v-3706649a.809018b0.js",revision:null},{url:"assets/js/v-38007666.1baf29f4.js",revision:null},{url:"assets/js/v-396f59cd.c7851e63.js",revision:null},{url:"assets/js/v-40608902.7a2786c6.js",revision:null},{url:"assets/js/v-434e7c8c.f855bd4b.js",revision:null},{url:"assets/js/v-45360123.effd1e01.js",revision:null},{url:"assets/js/v-4819d2f6.300fd60a.js",revision:null},{url:"assets/js/v-487079c5.0f91fefa.js",revision:null},{url:"assets/js/v-4dec5b45.ad7357d6.js",revision:null},{url:"assets/js/v-4f0168b2.bd9b3ebc.js",revision:null},{url:"assets/js/v-4fe1dc58.d886da64.js",revision:null},{url:"assets/js/v-50cb2a87.cf2ac93a.js",revision:null},{url:"assets/js/v-514365f1.522eacf0.js",revision:null},{url:"assets/js/v-533c70f7.65d1afd9.js",revision:null},{url:"assets/js/v-583b3d0d.b41203ef.js",revision:null},{url:"assets/js/v-5ceabafb.9d2ce73a.js",revision:null},{url:"assets/js/v-61377328.a9ee5228.js",revision:null},{url:"assets/js/v-668d9be0.31761e96.js",revision:null},{url:"assets/js/v-66cc4fee.02dbdf6a.js",revision:null},{url:"assets/js/v-67a66f17.94e9db65.js",revision:null},{url:"assets/js/v-6b4d4a3d.a868a317.js",revision:null},{url:"assets/js/v-6d93dbb2.c7f45bca.js",revision:null},{url:"assets/js/v-704e8e37.24af6aa4.js",revision:null},{url:"assets/js/v-737ff092.8710138a.js",revision:null},{url:"assets/js/v-743ff88e.834fef7c.js",revision:null},{url:"assets/js/v-74a28670.3cd36d69.js",revision:null},{url:"assets/js/v-756ec2fc.a044c869.js",revision:null},{url:"assets/js/v-7871496c.94343808.js",revision:null},{url:"assets/js/v-7898f959.66234e74.js",revision:null},{url:"assets/js/v-7af875a7.7d17a413.js",revision:null},{url:"assets/js/v-81cb4dce.6d4ca691.js",revision:null},{url:"assets/js/v-82949f3e.2e0322cb.js",revision:null},{url:"assets/js/v-8daa1a0e.c4d1a4ff.js",revision:null},{url:"assets/js/v-8dba60f6.c8f78b6e.js",revision:null},{url:"assets/js/v-a1a49808.524fd07d.js",revision:null},{url:"assets/js/v-a7534f04.76ee7b11.js",revision:null},{url:"assets/js/v-aecc6e00.19a4a620.js",revision:null},{url:"assets/js/v-b032db80.c784b445.js",revision:null},{url:"assets/js/v-b7dac982.7ddc4d39.js",revision:null},{url:"assets/js/v-c9146c5e.d9f15bc9.js",revision:null},{url:"assets/js/v-d8d70e1a.53c54a39.js",revision:null},{url:"assets/js/v-de155fda.a1ff9eef.js",revision:null},{url:"assets/js/v-de867450.72173d70.js",revision:null},{url:"assets/js/v-e4322366.71bd1de8.js",revision:null},{url:"assets/js/v-e565bdda.b5345c54.js",revision:null},{url:"assets/js/v-e64f5648.0e90a6da.js",revision:null},{url:"assets/js/v-ee77801a.55e1b501.js",revision:null},{url:"assets/js/v-eff96fe2.7b74756b.js",revision:null},{url:"assets/js/v-f3ed9e5a.aac78ecb.js",revision:null},{url:"assets/js/v-f4351e9e.48a87c5a.js",revision:null},{url:"assets/js/v-ffe3a066.5df7209c.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"d8265df928b1767189e0dccf698a2c55"},{url:"en/advanced/faq.html",revision:"0a25f3638f1e5f7fe512c936f1c3daf8"},{url:"en/advanced/intro.html",revision:"87c26dcf94637066f7b54656ef6ad6d5"},{url:"en/advanced/why.html",revision:"ed9bcb6bc1d4e072d55b759d125bebc4"},{url:"en/guide/client/avatar.html",revision:"39edb1c61f269f3188ce6f965467c316"},{url:"en/guide/client/count.html",revision:"ee2314dfe526d54625b5e6bb7749c290"},{url:"en/guide/client/emoji.html",revision:"e54105609acc57b31efe138fa08bafab"},{url:"en/guide/client/i18n.html",revision:"d716cbcfb40283128210fa96c21e691d"},{url:"en/guide/client/import.html",revision:"0657b63015c6c507539229eca78cb512"},{url:"en/guide/client/intro.html",revision:"55d7258461b492fbe6116196bdb9bb47"},{url:"en/guide/client/recentcomment.html",revision:"675540c8d4bad012d4129f05f2c93eaf"},{url:"en/guide/client/spa.html",revision:"b3bf0ca7d156a35d4c7f5735f9b63be9"},{url:"en/guide/client/style.html",revision:"0d9e75ac8d70793af731dd07192cb4f5"},{url:"en/guide/client/syntax.html",revision:"cea3a1192c93df73bd598a4a20223c27"},{url:"en/guide/client/widget/index.html",revision:"ca7cf7c931ff3df8a6000a29b6bb3ab4"},{url:"en/guide/client/widget/recent-comment.html",revision:"f00d51bbd57476f79aa788c6ee5c6877"},{url:"en/guide/get-started.html",revision:"17dc0900e004550f9bc838e71f7d95d7"},{url:"en/guide/server/databases.html",revision:"7bdc18241c43d1c31ab65c9db14da20a"},{url:"en/guide/server/intro.html",revision:"5934af1d9ff789cc5a1f235aeeaa6d46"},{url:"en/guide/server/notification.html",revision:"eab11ef2e0b3cad66ac57288caec5bc6"},{url:"en/guide/server/socials.html",revision:"8d8f2c7ad29bca32341125fc7e65fd0c"},{url:"en/guide/server/vps-deploy.html",revision:"270853359e5b5507df332961f538443e"},{url:"en/index.html",revision:"f7317334ceba5324ca4817ec258e0129"},{url:"en/migration/client.html",revision:"88b6bf2c9a9f80bdd1341f6ac9d84770"},{url:"en/migration/tool.html",revision:"03f28b8e320d3919acb3ba1db74e9ea7"},{url:"en/migration/valine.html",revision:"622d676f105a2cd50440ec9bf193583f"},{url:"en/reference/api.html",revision:"92dd1e4bde5bf484dc078b57903d724b"},{url:"en/reference/client.html",revision:"ad81d7022b8892c29da9ea2aa39d5d6b"},{url:"en/reference/contribution.html",revision:"b5ce1f208518ea624802b9c4b259e3a9"},{url:"en/reference/instance.html",revision:"3e4c3f2d3d0952359cfc645327bef3d5"},{url:"en/reference/server.html",revision:"2f3c77c41b4b273d020ec405a247175e"},{url:"guide/client/avatar.html",revision:"56f6847f270a506065e20982e24db1b8"},{url:"guide/client/count.html",revision:"d4a2c92fbbc6ca6477eac59be3e3894f"},{url:"guide/client/emoji.html",revision:"caa8dcd528f931a0ab53432e2f8ada4d"},{url:"guide/client/i18n.html",revision:"18b2a23cdf50c5b01b0d42de31effd8e"},{url:"guide/client/import.html",revision:"20b4a5f91784ed6af1b8b22de24edcb3"},{url:"guide/client/intro.html",revision:"16d3b00c3cc6a794313eef1f01eeac71"},{url:"guide/client/spa.html",revision:"0dd031347f014693a1d7f46eb9e57086"},{url:"guide/client/style.html",revision:"49422bace12af84e977c20a1cbb7a988"},{url:"guide/client/syntax.html",revision:"e0e7e7737132f36a0bd6690b90e45295"},{url:"guide/client/widget/index.html",revision:"89fb78f7ae2d2e6f0abb3563f205e6ee"},{url:"guide/client/widget/recent-comment.html",revision:"5d2a11998ed1cb05ab146314339e258d"},{url:"guide/get-started.html",revision:"b5b5474d67611c7b82b12bd1db027e00"},{url:"guide/server/cloudbase.html",revision:"4b80a4cc4539b30a6ac5e85fe05feadd"},{url:"guide/server/databases.html",revision:"92c4dbffdb317aa32cbf7acd6b554249"},{url:"guide/server/intro.html",revision:"a02f89b4e27f7e7c1cc69443206b9da7"},{url:"guide/server/notification.html",revision:"2263ca75509aa762bc87bac0c5d06c17"},{url:"guide/server/socials.html",revision:"78d6f60418ee38fa25cade113e78f5bf"},{url:"guide/server/vps-deploy.html",revision:"8c7eba795b7de3cdc5d552e682d31d9b"},{url:"index.html",revision:"c098b346de01505d7014807766e598fd"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"e9ff377a86a92773ff355c888e1d4501"},{url:"migration/tool.html",revision:"15338c5ee88d1ac0c68531e223752e27"},{url:"migration/valine.html",revision:"3c2cf2aae333aac5d0d1844c21b176f3"},{url:"reference/api.html",revision:"5c8973a079badacee602cd22c3b10458"},{url:"reference/client.html",revision:"3d3b03274144289d39cff6dba3e46319"},{url:"reference/contribution.html",revision:"59eedf255ba3f702060ec91a3b089de6"},{url:"reference/instance.html",revision:"0c58f29d0e55d541119a17fbad4c0a5c"},{url:"reference/server.html",revision:"6941931fd3513de07e3a68b0e5b05b60"}],{})}));
