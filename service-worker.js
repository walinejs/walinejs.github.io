if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7bb8b71d45011ec574c2889873bb941f"},{url:"advanced/ecosystem.html",revision:"6b678eacfd24483ad08a21b32d3e2627"},{url:"advanced/faq.html",revision:"559119e4d15db043cf4100de31a3e9a2"},{url:"advanced/intro.html",revision:"d3c4ce97c291edc3ad336b33149c048b"},{url:"advanced/why.html",revision:"810f05791490d3efe20b465efc457719"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.f20ca8e0.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1709.e22b71d4.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.4e5193e8.js",revision:null},{url:"assets/js/696.97444d97.js",revision:null},{url:"assets/js/7769.01dcf3b2.js",revision:null},{url:"assets/js/app.d42a238f.js",revision:null},{url:"assets/js/runtime~app.912e90e4.js",revision:null},{url:"assets/js/v-057c9824.abe7eabe.js",revision:null},{url:"assets/js/v-058f99fc.27887c3c.js",revision:null},{url:"assets/js/v-0b556720.6de9880b.js",revision:null},{url:"assets/js/v-1b1feb10.421ccf4f.js",revision:null},{url:"assets/js/v-1bf8da39.fbbf7807.js",revision:null},{url:"assets/js/v-271aae61.5f4d521a.js",revision:null},{url:"assets/js/v-27d47a79.78c94ea6.js",revision:null},{url:"assets/js/v-2812bd79.7c68d89e.js",revision:null},{url:"assets/js/v-2945f13a.8c3407aa.js",revision:null},{url:"assets/js/v-2d0a870d.beaac513.js",revision:null},{url:"assets/js/v-2fad59ab.aa7a0871.js",revision:null},{url:"assets/js/v-356c0ac4.702961a4.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.12f3fe5a.js",revision:null},{url:"assets/js/v-396f59cd.9e14376d.js",revision:null},{url:"assets/js/v-40608902.0d62d5fe.js",revision:null},{url:"assets/js/v-434e7c8c.3bd9352c.js",revision:null},{url:"assets/js/v-45360123.742c4cbd.js",revision:null},{url:"assets/js/v-4819d2f6.1915e173.js",revision:null},{url:"assets/js/v-487079c5.8c296a8d.js",revision:null},{url:"assets/js/v-4dec5b45.01209c8b.js",revision:null},{url:"assets/js/v-4f0168b2.7bfb72cc.js",revision:null},{url:"assets/js/v-4fe1dc58.e56f6734.js",revision:null},{url:"assets/js/v-50cb2a87.db8ecc5d.js",revision:null},{url:"assets/js/v-514365f1.909bbbc6.js",revision:null},{url:"assets/js/v-533c70f7.68b9236b.js",revision:null},{url:"assets/js/v-583b3d0d.aca48802.js",revision:null},{url:"assets/js/v-5ceabafb.755a36d3.js",revision:null},{url:"assets/js/v-61377328.999bd7d8.js",revision:null},{url:"assets/js/v-668d9be0.594ebcef.js",revision:null},{url:"assets/js/v-66cc4fee.42b58326.js",revision:null},{url:"assets/js/v-67a66f17.463a3a1c.js",revision:null},{url:"assets/js/v-6b4d4a3d.06a0e8ea.js",revision:null},{url:"assets/js/v-6d93dbb2.36255c0b.js",revision:null},{url:"assets/js/v-704e8e37.5d23d800.js",revision:null},{url:"assets/js/v-737ff092.b2103a83.js",revision:null},{url:"assets/js/v-743ff88e.6a661a34.js",revision:null},{url:"assets/js/v-74a28670.55c3e5bb.js",revision:null},{url:"assets/js/v-756ec2fc.78f7c93d.js",revision:null},{url:"assets/js/v-7871496c.7a1beb5c.js",revision:null},{url:"assets/js/v-7898f959.11885dd3.js",revision:null},{url:"assets/js/v-7af875a7.ac50e3f2.js",revision:null},{url:"assets/js/v-81cb4dce.7870e2a4.js",revision:null},{url:"assets/js/v-82949f3e.271d8fb3.js",revision:null},{url:"assets/js/v-8daa1a0e.ff777fe7.js",revision:null},{url:"assets/js/v-8dba60f6.cbf8ecb1.js",revision:null},{url:"assets/js/v-a1a49808.53f64b25.js",revision:null},{url:"assets/js/v-a7534f04.537e6a82.js",revision:null},{url:"assets/js/v-aecc6e00.7d3e24cf.js",revision:null},{url:"assets/js/v-b032db80.6b1daaf5.js",revision:null},{url:"assets/js/v-b7dac982.b92a6954.js",revision:null},{url:"assets/js/v-c9146c5e.239d3a52.js",revision:null},{url:"assets/js/v-d8d70e1a.d477a698.js",revision:null},{url:"assets/js/v-de155fda.b27e772f.js",revision:null},{url:"assets/js/v-de867450.4216c07b.js",revision:null},{url:"assets/js/v-e4322366.0ca1645c.js",revision:null},{url:"assets/js/v-e565bdda.a3eeff81.js",revision:null},{url:"assets/js/v-e64f5648.b5044a97.js",revision:null},{url:"assets/js/v-ee77801a.b9ce4857.js",revision:null},{url:"assets/js/v-eff96fe2.cbf05656.js",revision:null},{url:"assets/js/v-f3ed9e5a.a38a7117.js",revision:null},{url:"assets/js/v-f4351e9e.0ef4f2d5.js",revision:null},{url:"assets/js/v-ffe3a066.542b539e.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"262c0197e59d56ba888cad6f54d387de"},{url:"en/advanced/faq.html",revision:"717c2ef4277a808cc0785cc8d67161cc"},{url:"en/advanced/intro.html",revision:"c2b49be29792da8424911c79802aff3a"},{url:"en/advanced/why.html",revision:"fafafc53f1dae99838b653f4308d745b"},{url:"en/guide/client/avatar.html",revision:"6972bfce3d00051d428ea0f14f08d284"},{url:"en/guide/client/count.html",revision:"6db59ce48c791de4adf09bcb3b639756"},{url:"en/guide/client/emoji.html",revision:"4d43093a427522900c26426f97da8b30"},{url:"en/guide/client/i18n.html",revision:"a09224117c09204e1ca1231eaf4b557a"},{url:"en/guide/client/import.html",revision:"b48a65ff2d144d5b9ef6257676695b9f"},{url:"en/guide/client/intro.html",revision:"d17d4e5df6d393ac584214ef11ea0365"},{url:"en/guide/client/recentcomment.html",revision:"b0396a2f0851a4de66928e75c576e993"},{url:"en/guide/client/spa.html",revision:"b9a2973d75511425d36dfb088c51c0e5"},{url:"en/guide/client/style.html",revision:"5fe0f313641b8b8bf2dca41de0bcc318"},{url:"en/guide/client/syntax.html",revision:"eedd302ae2dc645af6387c19ae6aab46"},{url:"en/guide/client/widget/index.html",revision:"c295134ec4a618eafde9e680ab50937b"},{url:"en/guide/client/widget/recent-comment.html",revision:"bee41787a4e8102e15fdc7f7764d6c52"},{url:"en/guide/get-started.html",revision:"ad191e2e33a504fb232b04e4e000485c"},{url:"en/guide/server/databases.html",revision:"ffb9f909bd15d2a7fc8f21b2cea72d0d"},{url:"en/guide/server/intro.html",revision:"15df9ce83316a1a15984e2e486428d0f"},{url:"en/guide/server/notification.html",revision:"3497dcfecadb67aaecbef40ba4b90e70"},{url:"en/guide/server/socials.html",revision:"a29e7436ef84ffcdf92f0a246cbe3209"},{url:"en/guide/server/vps-deploy.html",revision:"f32890ace7d3a17579333bbac028279b"},{url:"en/index.html",revision:"d5f9116c065d024f3b83f7c4128f6340"},{url:"en/migration/client.html",revision:"5b12797bd1e759e081b119544a6b7b38"},{url:"en/migration/tool.html",revision:"29bf342431332ae8ed405ba71d1de67b"},{url:"en/migration/valine.html",revision:"773a57b8e12ce6c58efda93746bfd314"},{url:"en/reference/api.html",revision:"9c579b661e17c362a50c7bf1aafb5dd7"},{url:"en/reference/client.html",revision:"6777b0fbb85856d76f4e4410f33ee252"},{url:"en/reference/contribution.html",revision:"dbe952b17ffa09e769c3557a6a061695"},{url:"en/reference/instance.html",revision:"ce039feab311b9014f87a2cc6efbadbf"},{url:"en/reference/server.html",revision:"c90fdb4c514fce32e555a4de4c6756f5"},{url:"guide/client/avatar.html",revision:"2c3556387dd41104a27143f84e075aa4"},{url:"guide/client/count.html",revision:"7ffbce0a710e2f2556c0da9e453c979d"},{url:"guide/client/emoji.html",revision:"eacb79ebc2afb26ad340907c0f8fdf48"},{url:"guide/client/i18n.html",revision:"1911fb9b45eaf2bec7cc62bb22d43822"},{url:"guide/client/import.html",revision:"3d396777d10491a1096c5eeb0201b380"},{url:"guide/client/intro.html",revision:"ad95e02f79e1da5bc0c8a4948ad268f9"},{url:"guide/client/spa.html",revision:"21777932683f67a3c3be34fef8ef7961"},{url:"guide/client/style.html",revision:"e2411c9015a7da5daafbf03f2f403d10"},{url:"guide/client/syntax.html",revision:"f31d1c93244108f61e952acee0df3cab"},{url:"guide/client/widget/index.html",revision:"231a0764211ca605427c079b88eb3aee"},{url:"guide/client/widget/recent-comment.html",revision:"285f575e80cd650afe9117211c3dbc65"},{url:"guide/get-started.html",revision:"bc4a821bdc59758524628109fc1e9679"},{url:"guide/server/cloudbase.html",revision:"de4a2819c8f5bb0af149418ca095c530"},{url:"guide/server/databases.html",revision:"ebf4f548e8ca752b9655cf14bffc367c"},{url:"guide/server/intro.html",revision:"d5e5fff142e7553c0e5e2bb19d2c380f"},{url:"guide/server/notification.html",revision:"2527a9b795eb9071098d43dcc7651d87"},{url:"guide/server/socials.html",revision:"091957efe85eb24fedfe2a166555f963"},{url:"guide/server/vps-deploy.html",revision:"51db5eb539fce3e7ffa3a621aaafbac3"},{url:"index.html",revision:"a4fe3cb289b4dcc0a90698dcc2b33e10"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"40dcc2cb9d60a9ecd293f4cbf7397f23"},{url:"migration/tool.html",revision:"cde69c1fb389b526b7718702385e63cc"},{url:"migration/valine.html",revision:"62d6f6c7399614f71bda0d995212b416"},{url:"reference/api.html",revision:"45b2b35c88892a9074fd0b8852e0a5bc"},{url:"reference/client.html",revision:"538a17899b891ddc417982482aff9d9d"},{url:"reference/contribution.html",revision:"8a689163ecf743b74510e3b2736193fb"},{url:"reference/instance.html",revision:"4cbf29488411c36e025ea951bad64cf3"},{url:"reference/server.html",revision:"5aab8934ab0179942f6593a97056f74a"}],{})}));
