if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"147b2fbdc7a31bf27ee48fbe07033286"},{url:"advanced/ecosystem.html",revision:"53bf7de94e42956712b32a2ebeb7612c"},{url:"advanced/faq.html",revision:"aa0234cfe375eaa478dd94e99c7e377a"},{url:"advanced/intro.html",revision:"cab576fa76e78492d26f34a57dc90e44"},{url:"advanced/why.html",revision:"c590e964f9c781603dd95fcb4af69a22"},{url:"assets/css/959.styles.1a78020b.css",revision:null},{url:"assets/css/styles.6877a3c5.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.38f8d3c9.js",revision:null},{url:"assets/js/5455.0b091ee5.js",revision:null},{url:"assets/js/5556.e01d8977.js",revision:null},{url:"assets/js/801.538d31e1.js",revision:null},{url:"assets/js/9230.aef6cf95.js",revision:null},{url:"assets/js/app.87406c83.js",revision:null},{url:"assets/js/runtime~app.78f54b96.js",revision:null},{url:"assets/js/v-057c9824.d0de325b.js",revision:null},{url:"assets/js/v-058f99fc.ec57d0f9.js",revision:null},{url:"assets/js/v-0b556720.9f094b6b.js",revision:null},{url:"assets/js/v-1b1feb10.ed835865.js",revision:null},{url:"assets/js/v-1bf8da39.517a4d1c.js",revision:null},{url:"assets/js/v-271aae61.19d19336.js",revision:null},{url:"assets/js/v-27d47a79.528620f0.js",revision:null},{url:"assets/js/v-2812bd79.0d6d0523.js",revision:null},{url:"assets/js/v-2945f13a.4012e215.js",revision:null},{url:"assets/js/v-2d0a870d.bd689154.js",revision:null},{url:"assets/js/v-2fad59ab.f59c8bce.js",revision:null},{url:"assets/js/v-356c0ac4.77cc4368.js",revision:null},{url:"assets/js/v-3706649a.b38a5ec8.js",revision:null},{url:"assets/js/v-38007666.a8d0120b.js",revision:null},{url:"assets/js/v-396f59cd.3c9cb7ba.js",revision:null},{url:"assets/js/v-40608902.8b35eeb1.js",revision:null},{url:"assets/js/v-434e7c8c.11409a00.js",revision:null},{url:"assets/js/v-45360123.37e4acc4.js",revision:null},{url:"assets/js/v-4819d2f6.a5f364af.js",revision:null},{url:"assets/js/v-487079c5.4ab6f78a.js",revision:null},{url:"assets/js/v-4dec5b45.c7a325c7.js",revision:null},{url:"assets/js/v-4f0168b2.3118b780.js",revision:null},{url:"assets/js/v-4fe1dc58.277f7dc2.js",revision:null},{url:"assets/js/v-50cb2a87.0092ba65.js",revision:null},{url:"assets/js/v-514365f1.8b6b3ae9.js",revision:null},{url:"assets/js/v-533c70f7.38361299.js",revision:null},{url:"assets/js/v-583b3d0d.38dde924.js",revision:null},{url:"assets/js/v-5ceabafb.9f22853a.js",revision:null},{url:"assets/js/v-61377328.206309f0.js",revision:null},{url:"assets/js/v-668d9be0.25d8da4f.js",revision:null},{url:"assets/js/v-66cc4fee.181d20ad.js",revision:null},{url:"assets/js/v-67a66f17.3f6d48df.js",revision:null},{url:"assets/js/v-6b4d4a3d.c26098c3.js",revision:null},{url:"assets/js/v-6d93dbb2.849acc73.js",revision:null},{url:"assets/js/v-704e8e37.f72d88c3.js",revision:null},{url:"assets/js/v-737ff092.bbca9b0b.js",revision:null},{url:"assets/js/v-743ff88e.ed81c991.js",revision:null},{url:"assets/js/v-74a28670.22a454f0.js",revision:null},{url:"assets/js/v-756ec2fc.0ac6be16.js",revision:null},{url:"assets/js/v-7871496c.97a4a451.js",revision:null},{url:"assets/js/v-7898f959.3944302b.js",revision:null},{url:"assets/js/v-7af875a7.70cc9bb2.js",revision:null},{url:"assets/js/v-81cb4dce.3ea8b03d.js",revision:null},{url:"assets/js/v-82949f3e.c6ae929b.js",revision:null},{url:"assets/js/v-8daa1a0e.865ff306.js",revision:null},{url:"assets/js/v-8dba60f6.60c09372.js",revision:null},{url:"assets/js/v-a1a49808.fd2269d1.js",revision:null},{url:"assets/js/v-a7534f04.221a53fc.js",revision:null},{url:"assets/js/v-aecc6e00.a99d7b76.js",revision:null},{url:"assets/js/v-b032db80.069de57b.js",revision:null},{url:"assets/js/v-b7dac982.f16afc6b.js",revision:null},{url:"assets/js/v-c9146c5e.5903c0ca.js",revision:null},{url:"assets/js/v-d8d70e1a.2357481a.js",revision:null},{url:"assets/js/v-de155fda.d4c7c28f.js",revision:null},{url:"assets/js/v-de867450.ef36c15c.js",revision:null},{url:"assets/js/v-e4322366.7a5f654f.js",revision:null},{url:"assets/js/v-e565bdda.223eed6f.js",revision:null},{url:"assets/js/v-e64f5648.b10a9e30.js",revision:null},{url:"assets/js/v-ee77801a.71b0fe4c.js",revision:null},{url:"assets/js/v-eff96fe2.3806aef7.js",revision:null},{url:"assets/js/v-f3ed9e5a.33b81b05.js",revision:null},{url:"assets/js/v-f4351e9e.88d8992c.js",revision:null},{url:"assets/js/v-ffe3a066.df844d26.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"628a97738e1ab7cb4f8b46da0617d213"},{url:"en/advanced/faq.html",revision:"54c66139957860debf5de469a0a27e01"},{url:"en/advanced/intro.html",revision:"3ee9885c50638f6eca94032b67e89da8"},{url:"en/advanced/why.html",revision:"450b6942a5f103de8e735b92c463adb2"},{url:"en/guide/client/avatar.html",revision:"098c04ffba8a5799a95a0b89fb33d136"},{url:"en/guide/client/count.html",revision:"28230583f4b01e9d6951a571c933d976"},{url:"en/guide/client/emoji.html",revision:"6948d19b65b103d2b4e914b56c7d41fe"},{url:"en/guide/client/i18n.html",revision:"8c901c8f5c8221dc1f104e397713c81f"},{url:"en/guide/client/import.html",revision:"d3f650dddeaba31d3f5312f01551c301"},{url:"en/guide/client/intro.html",revision:"26c201324142504b87b3339197ce4c7c"},{url:"en/guide/client/recentcomment.html",revision:"7f3b87515454cadee153f7c5c274db21"},{url:"en/guide/client/spa.html",revision:"f39be90dad9c55b6f111b2fd7d69514c"},{url:"en/guide/client/style.html",revision:"c55cc4bb85e2202fed48875eeb5962bb"},{url:"en/guide/client/syntax.html",revision:"848b063fe4f1a238a790b54809c31b48"},{url:"en/guide/client/widget/index.html",revision:"f294037a7c1b2e9e294f6f9706abf8af"},{url:"en/guide/client/widget/recent-comment.html",revision:"770e668b32038b59228b45f116ad4db6"},{url:"en/guide/get-started.html",revision:"f52bbf3ce4143a7d0041889c77d969a3"},{url:"en/guide/server/databases.html",revision:"e7bb2efe7b5643da719c3bb3b8ed8ff4"},{url:"en/guide/server/intro.html",revision:"61f1764a6668f30d063a304dc53b05e6"},{url:"en/guide/server/notification.html",revision:"9aaed49bd954a61fc064f172f463ef3f"},{url:"en/guide/server/socials.html",revision:"90944e54d31a4dd6a71341ebfae81396"},{url:"en/guide/server/vps-deploy.html",revision:"fb8376b48b78b9d34e35b1476bd05535"},{url:"en/index.html",revision:"cc70ae2488353c0fd124247e7b821796"},{url:"en/migration/client.html",revision:"c9a33af7f7e38fe2b98fd75898ed96bd"},{url:"en/migration/tool.html",revision:"3c6aff9920d111f6c536e54aa02f7713"},{url:"en/migration/valine.html",revision:"824da2b2d55e9b11e90f403158290522"},{url:"en/reference/api.html",revision:"410ac73e8b66ed5dc9b2601f05c38568"},{url:"en/reference/client.html",revision:"7966a2e378d8b96662beb095b4340b77"},{url:"en/reference/contribution.html",revision:"e75dffaabd9712234f39380884b788aa"},{url:"en/reference/instance.html",revision:"aeeeed65933ab3cb0866ffe8d2a2bb53"},{url:"en/reference/server.html",revision:"905b322765b2209a2611ac038fac9626"},{url:"guide/client/avatar.html",revision:"09113e7e6a6c282194a38288abc26b57"},{url:"guide/client/count.html",revision:"b67a4add9f40a8fd97d13ee5e31cacc7"},{url:"guide/client/emoji.html",revision:"ea0448e9ecbee19da39f0e0ffcd66801"},{url:"guide/client/i18n.html",revision:"b45d1c5a1d3fc70a07d9eb6b10529fd4"},{url:"guide/client/import.html",revision:"3652e786f9b553c6d0e35a69872ebce1"},{url:"guide/client/intro.html",revision:"4bbc76914995f6adb860b6e14f77204b"},{url:"guide/client/spa.html",revision:"8587dc6fc4b30cc276a4cee68c3bc4ac"},{url:"guide/client/style.html",revision:"dde072dd80b51d2f1021970ed8515241"},{url:"guide/client/syntax.html",revision:"454ac2a6b19f9b472db06d8c470347cc"},{url:"guide/client/widget/index.html",revision:"282e6971c1572aa72b8f984655e751f8"},{url:"guide/client/widget/recent-comment.html",revision:"85c4d0b909e0ad3f0393eddc2032b933"},{url:"guide/get-started.html",revision:"617570f903871689b29dd2cca3a663e9"},{url:"guide/server/cloudbase.html",revision:"87e5fc975562e6fece9141403e56866c"},{url:"guide/server/databases.html",revision:"c9e6c5a9a97a41ed3aebf3002b1f36fb"},{url:"guide/server/intro.html",revision:"b26d8c19901c3503d2f2335d9e3d9adb"},{url:"guide/server/notification.html",revision:"7bec3a0ce0fe6553311b3275367fc397"},{url:"guide/server/socials.html",revision:"39db938ce923744b075848dc91e73def"},{url:"guide/server/vps-deploy.html",revision:"87660d9826eefa832b36b6d5a1ce0ed9"},{url:"index.html",revision:"31662099b9cd625b8c4f10a593953244"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"131f8e83e801d8210788b57f47bad842"},{url:"migration/tool.html",revision:"8dc4a1e3276fc7946eeba27cf7a3c05d"},{url:"migration/valine.html",revision:"44c9ee02eac319020d102fc788aea686"},{url:"reference/api.html",revision:"6e47132da51e39aa91693026a4a2ae13"},{url:"reference/client.html",revision:"a7d52497578c7d35de042f83ca19e7b4"},{url:"reference/contribution.html",revision:"8338f93b59b0a8f090b881167b630025"},{url:"reference/instance.html",revision:"02f09f8af6737eab44722c93e73e84be"},{url:"reference/server.html",revision:"6774357be1a7f7bde6a55c36187d11d1"}],{})}));
