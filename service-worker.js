if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6d42d079ec8f95a0283a154102639d9a"},{url:"advanced/ecosystem.html",revision:"f41cd2fb833d905cb7be996b8140fa2d"},{url:"advanced/faq.html",revision:"b625c34b529d6b5040ba86a0a7eae447"},{url:"advanced/intro.html",revision:"48ef273a4fdeefe9674fcc666225edbf"},{url:"advanced/why.html",revision:"44c1c0b89c9641834fa745b5b1884725"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.6b0fb0d9.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1545.81837ffc.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.4e5193e8.js",revision:null},{url:"assets/js/696.27e2fd05.js",revision:null},{url:"assets/js/7769.85cc3404.js",revision:null},{url:"assets/js/app.df780bc7.js",revision:null},{url:"assets/js/runtime~app.5b3dc55c.js",revision:null},{url:"assets/js/v-057c9824.196a0a77.js",revision:null},{url:"assets/js/v-058f99fc.6f66ee8f.js",revision:null},{url:"assets/js/v-0b556720.0535a9d6.js",revision:null},{url:"assets/js/v-1b1feb10.bb0b928c.js",revision:null},{url:"assets/js/v-1bf8da39.097a4ef1.js",revision:null},{url:"assets/js/v-271aae61.07b4ba80.js",revision:null},{url:"assets/js/v-27d47a79.63a55f18.js",revision:null},{url:"assets/js/v-2812bd79.58e65280.js",revision:null},{url:"assets/js/v-2945f13a.17656247.js",revision:null},{url:"assets/js/v-2d0a870d.77df5eb1.js",revision:null},{url:"assets/js/v-2fad59ab.6fa93e2f.js",revision:null},{url:"assets/js/v-356c0ac4.8078ba96.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.827f4b59.js",revision:null},{url:"assets/js/v-396f59cd.621f78ef.js",revision:null},{url:"assets/js/v-40608902.af7a3000.js",revision:null},{url:"assets/js/v-434e7c8c.5fdfd2e4.js",revision:null},{url:"assets/js/v-45360123.40414b3a.js",revision:null},{url:"assets/js/v-4819d2f6.add5abd3.js",revision:null},{url:"assets/js/v-487079c5.f8b70716.js",revision:null},{url:"assets/js/v-4dec5b45.11fd1891.js",revision:null},{url:"assets/js/v-4f0168b2.eec03f6c.js",revision:null},{url:"assets/js/v-4fe1dc58.5f1d211e.js",revision:null},{url:"assets/js/v-50cb2a87.9880a43c.js",revision:null},{url:"assets/js/v-514365f1.bab8c1d0.js",revision:null},{url:"assets/js/v-533c70f7.d0c13bea.js",revision:null},{url:"assets/js/v-583b3d0d.977391a2.js",revision:null},{url:"assets/js/v-5ceabafb.4c610a03.js",revision:null},{url:"assets/js/v-61377328.4dc8a20d.js",revision:null},{url:"assets/js/v-668d9be0.eea088d6.js",revision:null},{url:"assets/js/v-66cc4fee.dbac50a1.js",revision:null},{url:"assets/js/v-67a66f17.6ca02da4.js",revision:null},{url:"assets/js/v-6b4d4a3d.f45629b8.js",revision:null},{url:"assets/js/v-6d93dbb2.bae40281.js",revision:null},{url:"assets/js/v-704e8e37.e96c8c89.js",revision:null},{url:"assets/js/v-737ff092.7c14903f.js",revision:null},{url:"assets/js/v-743ff88e.25eebbe9.js",revision:null},{url:"assets/js/v-74a28670.df4033df.js",revision:null},{url:"assets/js/v-756ec2fc.c5e6b567.js",revision:null},{url:"assets/js/v-7871496c.0cc2e5e7.js",revision:null},{url:"assets/js/v-7898f959.19851a5a.js",revision:null},{url:"assets/js/v-7af875a7.5b9f849e.js",revision:null},{url:"assets/js/v-81cb4dce.36393ab9.js",revision:null},{url:"assets/js/v-82949f3e.a64f26b4.js",revision:null},{url:"assets/js/v-8daa1a0e.62eca919.js",revision:null},{url:"assets/js/v-8dba60f6.ad3df0bd.js",revision:null},{url:"assets/js/v-a1a49808.e76d0038.js",revision:null},{url:"assets/js/v-a7534f04.46c08146.js",revision:null},{url:"assets/js/v-aecc6e00.47310e35.js",revision:null},{url:"assets/js/v-b032db80.7f34622d.js",revision:null},{url:"assets/js/v-b7dac982.828d275e.js",revision:null},{url:"assets/js/v-c9146c5e.fa4d8bc4.js",revision:null},{url:"assets/js/v-d8d70e1a.b19b1985.js",revision:null},{url:"assets/js/v-de155fda.b382dfd0.js",revision:null},{url:"assets/js/v-de867450.6febdc10.js",revision:null},{url:"assets/js/v-e4322366.a3c79e7e.js",revision:null},{url:"assets/js/v-e565bdda.2651b684.js",revision:null},{url:"assets/js/v-e64f5648.6d6ff042.js",revision:null},{url:"assets/js/v-ee77801a.f9e824db.js",revision:null},{url:"assets/js/v-eff96fe2.26f1b7ab.js",revision:null},{url:"assets/js/v-f3ed9e5a.8896d3a0.js",revision:null},{url:"assets/js/v-f4351e9e.162126bf.js",revision:null},{url:"assets/js/v-ffe3a066.d7ede6fa.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"63257fdeb2c3553d4daff0e6e8634683"},{url:"en/advanced/faq.html",revision:"441867c52aa3e70169f349ffd778c5b5"},{url:"en/advanced/intro.html",revision:"3049c6b1829663d88e2d5ef0290eaef8"},{url:"en/advanced/why.html",revision:"9fa16d2c904da90734bf6a10ebc58fe4"},{url:"en/guide/client/avatar.html",revision:"3ae1cad81933ec73ee266099be33d75b"},{url:"en/guide/client/count.html",revision:"d8e32b56342bbb500e4a4a66d252d91b"},{url:"en/guide/client/emoji.html",revision:"5db7f74656415f9a9979dbc179631949"},{url:"en/guide/client/i18n.html",revision:"049ffcfd967d6b7279ce3114eb0c00c0"},{url:"en/guide/client/import.html",revision:"0d2c3a0033df225c8c52e465a5e17b4e"},{url:"en/guide/client/intro.html",revision:"80726642eb500f44840c5586a4fdf1ff"},{url:"en/guide/client/recentcomment.html",revision:"e7b33b01af32a152dc861a12c6d01c87"},{url:"en/guide/client/spa.html",revision:"808d6a64140cd05a75cab8e9ebba33d0"},{url:"en/guide/client/style.html",revision:"c479b397e112c0bae2d715e0b4c225c9"},{url:"en/guide/client/syntax.html",revision:"aaee4264530b50e47f17564c95aa69ac"},{url:"en/guide/client/widget/index.html",revision:"78f0e6bd68eb79fab38057b7c556db52"},{url:"en/guide/client/widget/recent-comment.html",revision:"90ddaf61c74f20f2bd33d6dd9ccd3faa"},{url:"en/guide/get-started.html",revision:"31972d3ea76c28822337be3fd7c29a90"},{url:"en/guide/server/databases.html",revision:"fb8f7e7c2d76559d83d871e23e074fc3"},{url:"en/guide/server/intro.html",revision:"4b0d43d7fdb1700924db6cc01e73140a"},{url:"en/guide/server/notification.html",revision:"73cc5484f3913183334567d2d9dd4271"},{url:"en/guide/server/socials.html",revision:"a30de82bae7bcc40b7ea8e6463c75f06"},{url:"en/guide/server/vps-deploy.html",revision:"562860d9af6c763053e53996d4c8c923"},{url:"en/index.html",revision:"2dff4efc6ab0da8c640a1f8d26f4d937"},{url:"en/migration/client.html",revision:"3c45b624763914149a85fb9db2a03f4c"},{url:"en/migration/tool.html",revision:"9df2aa6510db79f7e7f287850db7b59d"},{url:"en/migration/valine.html",revision:"19a5550e9575e38db76eed3e744af7d0"},{url:"en/reference/api.html",revision:"26ce9a1e7c629ef03988acc4ae64ebc8"},{url:"en/reference/client.html",revision:"8f95db89fd5d22d451b0d6495fe4699e"},{url:"en/reference/contribution.html",revision:"e86f543d00b65de6d2d4df8cbc7c9a2c"},{url:"en/reference/instance.html",revision:"e601e1969cd3ad9b821b59fb32d5c89b"},{url:"en/reference/server.html",revision:"898ec637f84948e280f595f99c1842df"},{url:"guide/client/avatar.html",revision:"1dea97d7b66e64cccf0e50d0eda01ff6"},{url:"guide/client/count.html",revision:"cba4ec9a98093e044966b816a4eba885"},{url:"guide/client/emoji.html",revision:"0fa76e4c9c623a3a9ee70a46973a45cb"},{url:"guide/client/i18n.html",revision:"41d67e0a755a1013634285f8ec12381d"},{url:"guide/client/import.html",revision:"3f249e44f4694115c149989c84591574"},{url:"guide/client/intro.html",revision:"2591c1c7b2852b0d4790cdb7305f1db0"},{url:"guide/client/spa.html",revision:"4acba0c7f1841fe576d5e68cfc92cd2e"},{url:"guide/client/style.html",revision:"52e5c4ea7ef7ab29793c0be9d0a3dba4"},{url:"guide/client/syntax.html",revision:"ddadc5d6e262f6c302413162b0e5db55"},{url:"guide/client/widget/index.html",revision:"68bd7a3b6e3785cffe4c3ecc3c82aaad"},{url:"guide/client/widget/recent-comment.html",revision:"b313e9e4d302b4705d394fe1c54c1b15"},{url:"guide/get-started.html",revision:"c726aa313cf55916942dcc202be0d45a"},{url:"guide/server/cloudbase.html",revision:"8a07296566b83ce89bc5186ffac26420"},{url:"guide/server/databases.html",revision:"fa15ed552d6c1e96957ede2373f86479"},{url:"guide/server/intro.html",revision:"3edbe40c2f3d590b439bb832b3ba7f39"},{url:"guide/server/notification.html",revision:"6559c3bd2dca6af2122ea6ff67ffe140"},{url:"guide/server/socials.html",revision:"9281e95e2db0483fe1efad0acd888ee4"},{url:"guide/server/vps-deploy.html",revision:"9b6831644459b21889dca2d75ed0b339"},{url:"index.html",revision:"b5edf4aaa4f09e6ddeb0a415e0b862d4"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"400a1aaa02364276e7df3c516ae702ea"},{url:"migration/tool.html",revision:"135a81c1107c05c65960968c8a8f3aa6"},{url:"migration/valine.html",revision:"432f43443c2b979e9f91b0ef10f71a22"},{url:"reference/api.html",revision:"3495bbe96d9e3a0dfa43fe8ce2b9b321"},{url:"reference/client.html",revision:"977725d196b0944a815bcfb6cce061e0"},{url:"reference/contribution.html",revision:"27a9f54d896b83c173476df26d677de1"},{url:"reference/instance.html",revision:"2854ece8cee96fde6b7d73feb6f870b8"},{url:"reference/server.html",revision:"3c51305a3a89b12ec305e372e609de1d"}],{})}));
