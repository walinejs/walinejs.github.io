if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9e6a3d407b61f0fc100e5956345c47ce"},{url:"advanced/ecosystem.html",revision:"2aef32a1d2f13c373c7e89594f49b1a7"},{url:"advanced/faq.html",revision:"dea2681e280d049dd250bd5edd6b79fc"},{url:"advanced/intro.html",revision:"9c9f51de1c273ab6044965ac7a52f324"},{url:"advanced/why.html",revision:"f165c48c14daa19c3b01b8010623874e"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.798f4e73.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.7d419f7e.js",revision:null},{url:"assets/js/runtime~app.c027bf29.js",revision:null},{url:"assets/js/v-057c9824.154ee65b.js",revision:null},{url:"assets/js/v-058f99fc.020e61ff.js",revision:null},{url:"assets/js/v-0b556720.f9c23d65.js",revision:null},{url:"assets/js/v-1b1feb10.842b0c8c.js",revision:null},{url:"assets/js/v-1bf8da39.1c4a5b61.js",revision:null},{url:"assets/js/v-271aae61.3d7178f5.js",revision:null},{url:"assets/js/v-27d47a79.84dde4b8.js",revision:null},{url:"assets/js/v-2812bd79.05586235.js",revision:null},{url:"assets/js/v-2945f13a.0134292b.js",revision:null},{url:"assets/js/v-2d0a870d.a78744a2.js",revision:null},{url:"assets/js/v-2fad59ab.ef881801.js",revision:null},{url:"assets/js/v-356c0ac4.af23abe2.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.8805139f.js",revision:null},{url:"assets/js/v-396f59cd.f7215abc.js",revision:null},{url:"assets/js/v-40608902.853be923.js",revision:null},{url:"assets/js/v-434e7c8c.2eef7301.js",revision:null},{url:"assets/js/v-45360123.0619a06e.js",revision:null},{url:"assets/js/v-4819d2f6.ae7c2a0e.js",revision:null},{url:"assets/js/v-487079c5.dc5eccdb.js",revision:null},{url:"assets/js/v-4dec5b45.e7aa8ebb.js",revision:null},{url:"assets/js/v-4f0168b2.53aa855b.js",revision:null},{url:"assets/js/v-4fe1dc58.e09f6e8b.js",revision:null},{url:"assets/js/v-50cb2a87.224d178c.js",revision:null},{url:"assets/js/v-514365f1.cc4ad2bf.js",revision:null},{url:"assets/js/v-533c70f7.cbd18b96.js",revision:null},{url:"assets/js/v-583b3d0d.35ae3df7.js",revision:null},{url:"assets/js/v-5ceabafb.a41fa237.js",revision:null},{url:"assets/js/v-61377328.709dca70.js",revision:null},{url:"assets/js/v-668d9be0.ef976d4a.js",revision:null},{url:"assets/js/v-66cc4fee.559d1250.js",revision:null},{url:"assets/js/v-67a66f17.4bff7938.js",revision:null},{url:"assets/js/v-6b4d4a3d.347cd9ad.js",revision:null},{url:"assets/js/v-6d93dbb2.67217a3d.js",revision:null},{url:"assets/js/v-704e8e37.73efd2c8.js",revision:null},{url:"assets/js/v-737ff092.b75faa3f.js",revision:null},{url:"assets/js/v-743ff88e.b77430d9.js",revision:null},{url:"assets/js/v-74a28670.d1966260.js",revision:null},{url:"assets/js/v-756ec2fc.8f529c2e.js",revision:null},{url:"assets/js/v-7871496c.607bfff9.js",revision:null},{url:"assets/js/v-7898f959.caf56c93.js",revision:null},{url:"assets/js/v-7af875a7.8b2df703.js",revision:null},{url:"assets/js/v-81cb4dce.8c5fe710.js",revision:null},{url:"assets/js/v-82949f3e.1bd89720.js",revision:null},{url:"assets/js/v-8daa1a0e.9cfae7e5.js",revision:null},{url:"assets/js/v-8dba60f6.dac055d8.js",revision:null},{url:"assets/js/v-a1a49808.8b127d26.js",revision:null},{url:"assets/js/v-a7534f04.bfab89af.js",revision:null},{url:"assets/js/v-aecc6e00.83315b0f.js",revision:null},{url:"assets/js/v-b032db80.6c3badbe.js",revision:null},{url:"assets/js/v-b7dac982.f6918597.js",revision:null},{url:"assets/js/v-c9146c5e.418d10ea.js",revision:null},{url:"assets/js/v-d8d70e1a.ee50abc4.js",revision:null},{url:"assets/js/v-de155fda.1d872632.js",revision:null},{url:"assets/js/v-de867450.2fe14def.js",revision:null},{url:"assets/js/v-e4322366.6e99c3ca.js",revision:null},{url:"assets/js/v-e565bdda.cd69df0b.js",revision:null},{url:"assets/js/v-e64f5648.533530f5.js",revision:null},{url:"assets/js/v-ee77801a.e8012d9d.js",revision:null},{url:"assets/js/v-eff96fe2.3164c5bc.js",revision:null},{url:"assets/js/v-f3ed9e5a.e5858674.js",revision:null},{url:"assets/js/v-f4351e9e.e3a83057.js",revision:null},{url:"assets/js/v-ffe3a066.25996f13.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"a20c1166d9009431233e5c90381523d7"},{url:"en/advanced/faq.html",revision:"84ae24568edc8a1f4babd6e76401f0ed"},{url:"en/advanced/intro.html",revision:"ee3c5864aa23eb48641e5f7c97753bf0"},{url:"en/advanced/why.html",revision:"5a8bfa7f77fb565ca27bdf1a77aeacb9"},{url:"en/guide/client/avatar.html",revision:"7ef4b8cf3d7c92423a61a319b3de5001"},{url:"en/guide/client/count.html",revision:"d52fd09776f4d6d5bcd8ec1bafad6739"},{url:"en/guide/client/emoji.html",revision:"764b4afe683d7194d2a7f124c02fd281"},{url:"en/guide/client/i18n.html",revision:"740adf644da546b6a5342563823d2cbb"},{url:"en/guide/client/import.html",revision:"2ef48eba872198c9ed3d93107f948de8"},{url:"en/guide/client/intro.html",revision:"72786aa893f4670da67f4f8b2b1f6a69"},{url:"en/guide/client/recentcomment.html",revision:"78cee673d1053982bf927debaf8120a7"},{url:"en/guide/client/spa.html",revision:"c942d679c24e70f8997dae47969bb9e5"},{url:"en/guide/client/style.html",revision:"49cd14e64810b0d7e08fa24d5c9c532c"},{url:"en/guide/client/syntax.html",revision:"fe344cc798927f83e76c251d80e403eb"},{url:"en/guide/client/widget/index.html",revision:"2c6eb0e81ca6a1b35c67a75441039999"},{url:"en/guide/client/widget/recent-comment.html",revision:"311b2d3c9395c74ca1829a912da99457"},{url:"en/guide/get-started.html",revision:"3d2460c707581ce7076e05d292accd52"},{url:"en/guide/server/databases.html",revision:"6dc69bde2e340a9cfc58b4155afba540"},{url:"en/guide/server/intro.html",revision:"34f4d25a0e3131ae81e0de10c75a88fb"},{url:"en/guide/server/notification.html",revision:"8dec6ead3f02dd371b1f81743a6d29e0"},{url:"en/guide/server/socials.html",revision:"b5a499164eac427214a7097234add71d"},{url:"en/guide/server/vps-deploy.html",revision:"52e8de4a994149c04d331cf88d78160f"},{url:"en/index.html",revision:"e892aa9e07044ee2c260df44326e90bf"},{url:"en/migration/client.html",revision:"3294b8cd9e17d2509a3eaeda3f3b4d9b"},{url:"en/migration/tool.html",revision:"57d8c39b8383285590aa5e0235d4397e"},{url:"en/migration/valine.html",revision:"115942978594a1a79a5d65fccd532512"},{url:"en/reference/api.html",revision:"c9bf6b8f5df33ae30d95440fc450b153"},{url:"en/reference/client.html",revision:"182436da95cf4013ab9c4d88479f84e8"},{url:"en/reference/contribution.html",revision:"2643c870afb87bf3aaa400f69297d545"},{url:"en/reference/instance.html",revision:"3933271e89616f660e267a36c79e807a"},{url:"en/reference/server.html",revision:"a2ea6122fdc2bb3b516898658e0bdf50"},{url:"guide/client/avatar.html",revision:"bf72aa6d586ba88fdac7643f0a1323eb"},{url:"guide/client/count.html",revision:"92b501cc2bbceb0cfa21b100ac20a032"},{url:"guide/client/emoji.html",revision:"2acf82fe7ae0a468c214c6198fc1574a"},{url:"guide/client/i18n.html",revision:"9da43cf25b11ada040172b5e177cf649"},{url:"guide/client/import.html",revision:"c2a44036575148ad3c9388b81027a0f9"},{url:"guide/client/intro.html",revision:"bed4f89d0215c4be84986d38730f8652"},{url:"guide/client/spa.html",revision:"c266a7878b2d82f82a66ea279c50c970"},{url:"guide/client/style.html",revision:"11f0fa69968d0151f256ccfaf2f1b69e"},{url:"guide/client/syntax.html",revision:"b30760cc92b45b8c389d79c04b2ddbed"},{url:"guide/client/widget/index.html",revision:"e2f01119df19cf4efe4803aa1e59a08b"},{url:"guide/client/widget/recent-comment.html",revision:"888c976d7e798d698fba3df451fb0089"},{url:"guide/get-started.html",revision:"67519bb6100eee87ba82d1ac27849540"},{url:"guide/server/cloudbase.html",revision:"59dd285bd9c0e306586186028cd1c2cd"},{url:"guide/server/databases.html",revision:"3ca13ff75e8280d2176e44a61de4587f"},{url:"guide/server/intro.html",revision:"ac747d5207c9944829659693cf75aba8"},{url:"guide/server/notification.html",revision:"23a6633e989c855b4bc27cd9214f93cd"},{url:"guide/server/socials.html",revision:"e1d4c33c64b4321dff336147819163d0"},{url:"guide/server/vps-deploy.html",revision:"471ced4457ee43bd106942028c677358"},{url:"index.html",revision:"0ffd1b9f09e721940bdf43a38f01edd1"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"bee8625185047908a2da05d2e232f74e"},{url:"migration/tool.html",revision:"659cff3fbdca95685ad3e9f2fe948a1c"},{url:"migration/valine.html",revision:"b99660a202723127f9db517e3899b62e"},{url:"reference/api.html",revision:"596039d05e85864bb8c1973393dd6ba6"},{url:"reference/client.html",revision:"8f29bd5420b4a52000dc75fafaa62c79"},{url:"reference/contribution.html",revision:"6947b6d6844c35a53f3bee7b4aa26f4e"},{url:"reference/instance.html",revision:"c82631f07875a3d92b910bacea12f9d4"},{url:"reference/server.html",revision:"d0d07a4cb93c4e6e053dc74957d16722"}],{})}));
