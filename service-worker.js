if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"c6f897a0687192a7324cbd543a1cb29c"},{url:"advanced/ecosystem.html",revision:"4ef584a13f5c61a3b7b54c522247fd19"},{url:"advanced/faq.html",revision:"2328d8cecec911c590e03b4b9701a770"},{url:"advanced/intro.html",revision:"7651d931a6e9a8bd4b80681647b0a34c"},{url:"advanced/why.html",revision:"23332c249e54e5d98ce7ccd4641f3a3b"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.57fafca9.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/4272.e3703f17.js",revision:null},{url:"assets/js/5121.4e5193e8.js",revision:null},{url:"assets/js/696.1385a6dd.js",revision:null},{url:"assets/js/7769.85cc3404.js",revision:null},{url:"assets/js/app.9d0f1816.js",revision:null},{url:"assets/js/runtime~app.17a56b24.js",revision:null},{url:"assets/js/v-057c9824.94d86f2a.js",revision:null},{url:"assets/js/v-058f99fc.fa989cac.js",revision:null},{url:"assets/js/v-0b556720.8948f16a.js",revision:null},{url:"assets/js/v-1b1feb10.3f91ad79.js",revision:null},{url:"assets/js/v-1bf8da39.aa99e243.js",revision:null},{url:"assets/js/v-271aae61.3cadf325.js",revision:null},{url:"assets/js/v-27d47a79.01aa9993.js",revision:null},{url:"assets/js/v-2812bd79.a865764b.js",revision:null},{url:"assets/js/v-2945f13a.f5eea63d.js",revision:null},{url:"assets/js/v-2d0a870d.8fb166d0.js",revision:null},{url:"assets/js/v-2fad59ab.506b2554.js",revision:null},{url:"assets/js/v-356c0ac4.e2017ef2.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.7a88d272.js",revision:null},{url:"assets/js/v-396f59cd.86122b79.js",revision:null},{url:"assets/js/v-40608902.ab599d68.js",revision:null},{url:"assets/js/v-434e7c8c.f74b3070.js",revision:null},{url:"assets/js/v-45360123.65f2fe65.js",revision:null},{url:"assets/js/v-4819d2f6.eeb2dbf8.js",revision:null},{url:"assets/js/v-487079c5.345b09b4.js",revision:null},{url:"assets/js/v-4dec5b45.c4b08a35.js",revision:null},{url:"assets/js/v-4f0168b2.15d137b9.js",revision:null},{url:"assets/js/v-4fe1dc58.de4f6b6a.js",revision:null},{url:"assets/js/v-50cb2a87.b0ad7def.js",revision:null},{url:"assets/js/v-514365f1.39bdbe04.js",revision:null},{url:"assets/js/v-533c70f7.728d167e.js",revision:null},{url:"assets/js/v-583b3d0d.5f0af583.js",revision:null},{url:"assets/js/v-5ceabafb.2999960e.js",revision:null},{url:"assets/js/v-61377328.264d9744.js",revision:null},{url:"assets/js/v-668d9be0.3e229b87.js",revision:null},{url:"assets/js/v-66cc4fee.1fb7fca7.js",revision:null},{url:"assets/js/v-67a66f17.e0d3a814.js",revision:null},{url:"assets/js/v-6b4d4a3d.1e6f59e5.js",revision:null},{url:"assets/js/v-6d93dbb2.befff246.js",revision:null},{url:"assets/js/v-704e8e37.89dacf3d.js",revision:null},{url:"assets/js/v-737ff092.9acf035e.js",revision:null},{url:"assets/js/v-743ff88e.2ba17fe3.js",revision:null},{url:"assets/js/v-74a28670.7e598b10.js",revision:null},{url:"assets/js/v-756ec2fc.f677ac26.js",revision:null},{url:"assets/js/v-7871496c.92389284.js",revision:null},{url:"assets/js/v-7898f959.5d0d772f.js",revision:null},{url:"assets/js/v-7af875a7.81c870c1.js",revision:null},{url:"assets/js/v-81cb4dce.8ebbf84b.js",revision:null},{url:"assets/js/v-82949f3e.a45c2bd8.js",revision:null},{url:"assets/js/v-8daa1a0e.401bd0e1.js",revision:null},{url:"assets/js/v-8dba60f6.bc162e3d.js",revision:null},{url:"assets/js/v-a1a49808.e1b5501a.js",revision:null},{url:"assets/js/v-a7534f04.4fb202f3.js",revision:null},{url:"assets/js/v-aecc6e00.bc62bc69.js",revision:null},{url:"assets/js/v-b032db80.9ffb8259.js",revision:null},{url:"assets/js/v-b7dac982.10f6e3a1.js",revision:null},{url:"assets/js/v-c9146c5e.4516fc56.js",revision:null},{url:"assets/js/v-d8d70e1a.03644e19.js",revision:null},{url:"assets/js/v-de155fda.1dc51140.js",revision:null},{url:"assets/js/v-de867450.1cc40fa9.js",revision:null},{url:"assets/js/v-e4322366.510be260.js",revision:null},{url:"assets/js/v-e565bdda.8834bee7.js",revision:null},{url:"assets/js/v-e64f5648.547ccb03.js",revision:null},{url:"assets/js/v-ee77801a.f551507f.js",revision:null},{url:"assets/js/v-eff96fe2.eb330a18.js",revision:null},{url:"assets/js/v-f3ed9e5a.fc0a7607.js",revision:null},{url:"assets/js/v-f4351e9e.b97f5e79.js",revision:null},{url:"assets/js/v-ffe3a066.f436f829.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"cb830788e9b097565db9c466a5417fb2"},{url:"en/advanced/faq.html",revision:"3f9008e0d4c787883599ec30410d5e0e"},{url:"en/advanced/intro.html",revision:"3f48fd7a21ecc4549178cd45d55613fe"},{url:"en/advanced/why.html",revision:"be2241110dceaedb54299871790a4bf6"},{url:"en/guide/client/avatar.html",revision:"403c7975e6ed029349bd1c37b04cfb83"},{url:"en/guide/client/count.html",revision:"39d9f27012ed81395458d487d87be610"},{url:"en/guide/client/emoji.html",revision:"5030f95c93742fa126085bf9718fc339"},{url:"en/guide/client/i18n.html",revision:"486fd96e68fd5197fb916ffe205045db"},{url:"en/guide/client/import.html",revision:"21d04ce8fb4f7842a6d82766ca049307"},{url:"en/guide/client/intro.html",revision:"b197abe0dedc05e2f0dd17d100399b82"},{url:"en/guide/client/recentcomment.html",revision:"184a6436d51cc099ed0aeb413e2e9870"},{url:"en/guide/client/spa.html",revision:"eb5a37fb50e1f59eac45268d05e5a86f"},{url:"en/guide/client/style.html",revision:"e48749473918f5db920b54a88ea78e28"},{url:"en/guide/client/syntax.html",revision:"1092c4cf6edb61176d74b67b386349cd"},{url:"en/guide/client/widget/index.html",revision:"fba88aa146a702404e0d6c7404acbd19"},{url:"en/guide/client/widget/recent-comment.html",revision:"437acebafd152f96a3b073b71f460470"},{url:"en/guide/get-started.html",revision:"df86b66e43d82bc3544cd2aee6126b81"},{url:"en/guide/server/databases.html",revision:"de8b37c4936da5be414acd663a5a33b0"},{url:"en/guide/server/intro.html",revision:"27e5a84d3643b6c6e8aac16dc5f036bd"},{url:"en/guide/server/notification.html",revision:"b23b01e4b4f97524026e298d18f4963c"},{url:"en/guide/server/socials.html",revision:"94be7f31521df6aa6a91b6709b61410d"},{url:"en/guide/server/vps-deploy.html",revision:"8ffa8e723855cc545066f466f04d63cf"},{url:"en/index.html",revision:"2bc25eddd4e5eb8eda2704ef62c289ae"},{url:"en/migration/client.html",revision:"856f9af7f58b6feb1b11a4ec9d09587b"},{url:"en/migration/tool.html",revision:"22413bbee385b09da2bd07c203e8d2b4"},{url:"en/migration/valine.html",revision:"b63724630ca5b8cee67f29a58f965e91"},{url:"en/reference/api.html",revision:"b476bd3f6cb895900f6c29d0aa31d702"},{url:"en/reference/client.html",revision:"3131904b7f48ff538e0e3ad269ebaf74"},{url:"en/reference/contribution.html",revision:"0cf0a22431138c19810bea1092e1a983"},{url:"en/reference/instance.html",revision:"ec410f9aa785861006356c902cf9be7f"},{url:"en/reference/server.html",revision:"809e5a3ac7508a124b46796f454f7cf2"},{url:"guide/client/avatar.html",revision:"7e802a70bf7b85135471cc04db9824c5"},{url:"guide/client/count.html",revision:"db15e9835980e8f4a522a29ba9462e2c"},{url:"guide/client/emoji.html",revision:"1871c39b931b930d03b47a485038ba2e"},{url:"guide/client/i18n.html",revision:"6f5b162ced1a0b168705625a91040926"},{url:"guide/client/import.html",revision:"31e4f5361a331dbbe92944dd793b7fa9"},{url:"guide/client/intro.html",revision:"ae7be90eff7823bc403760212aca43f6"},{url:"guide/client/spa.html",revision:"16ed1ceb4ffa3c52769f6342d6414c47"},{url:"guide/client/style.html",revision:"8d63d59d18077d68fe85ac1378f7a86a"},{url:"guide/client/syntax.html",revision:"2873b7f50d844185a4c830860e2b51d5"},{url:"guide/client/widget/index.html",revision:"816e1001e3b2fc997a2c9d7073ca23c6"},{url:"guide/client/widget/recent-comment.html",revision:"6fe4d3c46cdfc6f21b3d23cb6d0b9f3d"},{url:"guide/get-started.html",revision:"7c9d6f9d1f7477f7247f682732c3ba10"},{url:"guide/server/cloudbase.html",revision:"19d4c537d97f99467c9e66579a0fd8c9"},{url:"guide/server/databases.html",revision:"a9ad900cad4c515ccf97bf89a99c0ff5"},{url:"guide/server/intro.html",revision:"27c63948a16fafc7afc4ab8c3b6a0a58"},{url:"guide/server/notification.html",revision:"c3ad79ec17f219b1496bec3050d3061a"},{url:"guide/server/socials.html",revision:"b782db04e4413021cf14fa20828835df"},{url:"guide/server/vps-deploy.html",revision:"4606a57c3724b8178a0de971bfd1bbc4"},{url:"index.html",revision:"03fabbca3a9502e4b47b329a854b1130"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"45fa26584b06a19d0f39f7d37350e5df"},{url:"migration/tool.html",revision:"132c630d89d438586427ebb4104aa08b"},{url:"migration/valine.html",revision:"c966a92a0d71f60f3f365b0f325a5f06"},{url:"reference/api.html",revision:"fb1056b692fc1e5d70d1027dc164a758"},{url:"reference/client.html",revision:"694b6825128c84012df13dcbd13ca97d"},{url:"reference/contribution.html",revision:"0b2a995254d4a32cc88ff14452ffef73"},{url:"reference/instance.html",revision:"411834c812bdfe19861205da97cd44f6"},{url:"reference/server.html",revision:"28926b0a8a8ea9ab73df62d8a7a1f22c"}],{})}));
