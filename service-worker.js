if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"11e04da272b2ba3a5749bc0772671cc9"},{url:"advanced/ecosystem.html",revision:"3e47cf80d8a8c10499a198ac462280a8"},{url:"advanced/faq.html",revision:"0d7c71a13edc3af6e3d7d11008b94fa8"},{url:"advanced/intro.html",revision:"a3a8fa88501cd62ff0b67bf058a56282"},{url:"advanced/why.html",revision:"2804c7fc5fd45987597f7580834e71d0"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.4a5f655c.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.b00eb839.js",revision:null},{url:"assets/js/runtime~app.ce476b4f.js",revision:null},{url:"assets/js/v-057c9824.15918276.js",revision:null},{url:"assets/js/v-058f99fc.a07f4a74.js",revision:null},{url:"assets/js/v-0b556720.5bd611d7.js",revision:null},{url:"assets/js/v-1b1feb10.bd718764.js",revision:null},{url:"assets/js/v-1bf8da39.4ad14b4d.js",revision:null},{url:"assets/js/v-271aae61.2e9c32e7.js",revision:null},{url:"assets/js/v-27d47a79.0b3af7d8.js",revision:null},{url:"assets/js/v-2812bd79.feade785.js",revision:null},{url:"assets/js/v-2945f13a.12c01f8c.js",revision:null},{url:"assets/js/v-2d0a870d.e8b16e7c.js",revision:null},{url:"assets/js/v-2fad59ab.5a726115.js",revision:null},{url:"assets/js/v-356c0ac4.f730975d.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.8445d7d4.js",revision:null},{url:"assets/js/v-396f59cd.5cc6fd44.js",revision:null},{url:"assets/js/v-40608902.c68973af.js",revision:null},{url:"assets/js/v-434e7c8c.3f53e863.js",revision:null},{url:"assets/js/v-45360123.f5742754.js",revision:null},{url:"assets/js/v-4819d2f6.01d525a5.js",revision:null},{url:"assets/js/v-487079c5.22b97b25.js",revision:null},{url:"assets/js/v-4dec5b45.f3806d73.js",revision:null},{url:"assets/js/v-4f0168b2.d75f2168.js",revision:null},{url:"assets/js/v-4fe1dc58.117049b0.js",revision:null},{url:"assets/js/v-50cb2a87.4eb54d07.js",revision:null},{url:"assets/js/v-514365f1.1e131cb3.js",revision:null},{url:"assets/js/v-533c70f7.eefc18d5.js",revision:null},{url:"assets/js/v-583b3d0d.b8320763.js",revision:null},{url:"assets/js/v-5ceabafb.7a80d969.js",revision:null},{url:"assets/js/v-61377328.56d9af17.js",revision:null},{url:"assets/js/v-668d9be0.586da17b.js",revision:null},{url:"assets/js/v-66cc4fee.1d1b075f.js",revision:null},{url:"assets/js/v-67a66f17.8dc9474a.js",revision:null},{url:"assets/js/v-6b4d4a3d.81d59655.js",revision:null},{url:"assets/js/v-6d93dbb2.56301477.js",revision:null},{url:"assets/js/v-704e8e37.fb6d2524.js",revision:null},{url:"assets/js/v-737ff092.4bb43616.js",revision:null},{url:"assets/js/v-743ff88e.6c19634c.js",revision:null},{url:"assets/js/v-74a28670.db2604ab.js",revision:null},{url:"assets/js/v-756ec2fc.46aaa747.js",revision:null},{url:"assets/js/v-7871496c.4917a1cf.js",revision:null},{url:"assets/js/v-7898f959.721430d5.js",revision:null},{url:"assets/js/v-7af875a7.7ed937e6.js",revision:null},{url:"assets/js/v-81cb4dce.9614d4e3.js",revision:null},{url:"assets/js/v-82949f3e.78e4300c.js",revision:null},{url:"assets/js/v-8daa1a0e.41fbcbf2.js",revision:null},{url:"assets/js/v-8dba60f6.1142ed80.js",revision:null},{url:"assets/js/v-a1a49808.6799eaa3.js",revision:null},{url:"assets/js/v-a7534f04.4cc74798.js",revision:null},{url:"assets/js/v-aecc6e00.5e8b37c8.js",revision:null},{url:"assets/js/v-b032db80.20f689c6.js",revision:null},{url:"assets/js/v-b7dac982.d68969df.js",revision:null},{url:"assets/js/v-c9146c5e.3678a93a.js",revision:null},{url:"assets/js/v-d8d70e1a.20d70858.js",revision:null},{url:"assets/js/v-de155fda.5d4aa601.js",revision:null},{url:"assets/js/v-de867450.e4b895c4.js",revision:null},{url:"assets/js/v-e4322366.068bedee.js",revision:null},{url:"assets/js/v-e565bdda.f4d4f5a5.js",revision:null},{url:"assets/js/v-e64f5648.eef00560.js",revision:null},{url:"assets/js/v-ee77801a.cd8a37bf.js",revision:null},{url:"assets/js/v-eff96fe2.869a3e27.js",revision:null},{url:"assets/js/v-f3ed9e5a.e82ed178.js",revision:null},{url:"assets/js/v-f4351e9e.bbea2176.js",revision:null},{url:"assets/js/v-ffe3a066.a926b6ba.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"23c28f63e6b0616e60c696efc5aceed8"},{url:"en/advanced/faq.html",revision:"8d0e8037c6241ea42a3a13bd484fd157"},{url:"en/advanced/intro.html",revision:"5f5517d8bc68bb031ae160c262e96814"},{url:"en/advanced/why.html",revision:"0fed06e78aac5d9a6d7bf47349fdd320"},{url:"en/guide/client/avatar.html",revision:"0adc0487dedebd855a07afe3a14c7d71"},{url:"en/guide/client/count.html",revision:"4feee0473e3685b2f839bf88a8e8f9ca"},{url:"en/guide/client/emoji.html",revision:"95432b200dea3062ff86c3ec08788f3e"},{url:"en/guide/client/i18n.html",revision:"9fdb9c4cf59b31b22c01054d33aec987"},{url:"en/guide/client/import.html",revision:"0813d677a9f93adb0f3d742a9a975817"},{url:"en/guide/client/intro.html",revision:"1e0b2fdaa78abc54075aacce1305b88c"},{url:"en/guide/client/recentcomment.html",revision:"28e31b0b8bea8c9a48c17932aebfa5eb"},{url:"en/guide/client/spa.html",revision:"aa1828a6e3b70eccf4d5b492d0a22cd2"},{url:"en/guide/client/style.html",revision:"d40ce7e91e101fc7e003482d0fa28020"},{url:"en/guide/client/syntax.html",revision:"c52f18b7ebbca03ca82c91af7a82d933"},{url:"en/guide/client/widget/index.html",revision:"5da0632c28622be05b7e1ca40596e5d6"},{url:"en/guide/client/widget/recent-comment.html",revision:"728514edcd474481b2597bdfc921a7e2"},{url:"en/guide/get-started.html",revision:"8ce95106a4e8c597b611d202604286d1"},{url:"en/guide/server/databases.html",revision:"4fd7746f89c9a7a3965366dd68a7251a"},{url:"en/guide/server/intro.html",revision:"084827b43981f626d937e318c5901fda"},{url:"en/guide/server/notification.html",revision:"6efb10d98179d25ef03dfe0d5d40de02"},{url:"en/guide/server/socials.html",revision:"c2e8a0b55b30c100c6dfeccabd708f79"},{url:"en/guide/server/vps-deploy.html",revision:"17f42545b2fff6b0c91b2cd80a5460e9"},{url:"en/index.html",revision:"4cce7c57245f83523d5b6dead0b36c29"},{url:"en/migration/client.html",revision:"2fdd62688535719a83e8d26d309fd61a"},{url:"en/migration/tool.html",revision:"843c5d7587ef56e9859481241a63ab73"},{url:"en/migration/valine.html",revision:"239b8454e817f84e986ca1a90f0ff108"},{url:"en/reference/api.html",revision:"4d9e532f8ff5340dfb3a2dbd8982bb37"},{url:"en/reference/client.html",revision:"a45dddf295fb2148223840dce54cc175"},{url:"en/reference/contribution.html",revision:"2f7d2fc186abc7d166c921348c558778"},{url:"en/reference/instance.html",revision:"5420a1e04f9a1e543887a9b7139a8d6c"},{url:"en/reference/server.html",revision:"7d466f73c333c413bad10c45e0027402"},{url:"guide/client/avatar.html",revision:"60f1d90f9370ed2ec30b19bd42ef0219"},{url:"guide/client/count.html",revision:"58fa88d768eaf5dd5426fc3f83345258"},{url:"guide/client/emoji.html",revision:"30aa8df1e34318bdb97c230f86066238"},{url:"guide/client/i18n.html",revision:"ab9f42591e64b7d9e7c458fa84dd5dfa"},{url:"guide/client/import.html",revision:"9535765efc914d938241f8e15b8466a0"},{url:"guide/client/intro.html",revision:"6b54680404a15e497bdac4cce159d03e"},{url:"guide/client/spa.html",revision:"2172f2435186411a9d09e6cefc2ef92e"},{url:"guide/client/style.html",revision:"b5996c2307efbf49f4c563eeac090b02"},{url:"guide/client/syntax.html",revision:"726a9b982bf49ae12c2e0246cb3e8d77"},{url:"guide/client/widget/index.html",revision:"2fa34d72f1307be435fe350189bdba6f"},{url:"guide/client/widget/recent-comment.html",revision:"76b283e4635c391222132d8547b6502e"},{url:"guide/get-started.html",revision:"edc7f23fabf66467728e22adae04a974"},{url:"guide/server/cloudbase.html",revision:"cd242c67923ecb4bc7644baf92bffd96"},{url:"guide/server/databases.html",revision:"51be9df5600258663707084747a8182d"},{url:"guide/server/intro.html",revision:"12d6b850526736cda8242e2efb80e217"},{url:"guide/server/notification.html",revision:"b887ed051f9c331c658828e17abc8486"},{url:"guide/server/socials.html",revision:"b0862e4e6aaaf5836fb3f82a7d850da8"},{url:"guide/server/vps-deploy.html",revision:"9c88710455d876976c639f8c90ee3bed"},{url:"index.html",revision:"5601e05aeb8edaf5264da5f4c1af640b"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"cf2194ec85520e7946918ea37f1692ce"},{url:"migration/tool.html",revision:"5e54345d915c8e2863ec4fb0a113c9a9"},{url:"migration/valine.html",revision:"aafdd249426892026dc612be0f56f92f"},{url:"reference/api.html",revision:"d758ad32668cb9b8eb8f513e006c2ab6"},{url:"reference/client.html",revision:"0968f1ea722a1dbd9bada6a21cd4d78f"},{url:"reference/contribution.html",revision:"7a82f40fce49a17aa97ab429900d9ae2"},{url:"reference/instance.html",revision:"19add45f3793c2a081f7d164ccc2c0ea"},{url:"reference/server.html",revision:"797594a4d2c19b9e5c5351865ae4b17f"}],{})}));
