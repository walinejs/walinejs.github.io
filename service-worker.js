if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"b7836b6bde698ef7128daf962d5bd856"},{url:"advanced/ecosystem.html",revision:"0ad782f2085dbbf70473d8440fab847e"},{url:"advanced/faq.html",revision:"e8ffd35fa38cd49e1476787b1794c5a7"},{url:"advanced/intro.html",revision:"87ca34f5017fcd55af905de500d03cea"},{url:"advanced/why.html",revision:"91d17c8ef05c89e9b6aa63a04c996010"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.7fb0c1fe.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/deta-1.a238d26f.png",revision:null},{url:"assets/img/deta-2.295d8a01.png",revision:null},{url:"assets/img/deta-3.31cf0dda.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.3a8c6bc1.js",revision:null},{url:"assets/js/5556.99d8fe15.js",revision:null},{url:"assets/js/801.21c0f669.js",revision:null},{url:"assets/js/9230.65b07c8d.js",revision:null},{url:"assets/js/app.1029b825.js",revision:null},{url:"assets/js/runtime~app.cbd75174.js",revision:null},{url:"assets/js/v-057c9824.8723760d.js",revision:null},{url:"assets/js/v-058f99fc.fdd5178c.js",revision:null},{url:"assets/js/v-0b556720.1da7769f.js",revision:null},{url:"assets/js/v-1b1feb10.54abc4e6.js",revision:null},{url:"assets/js/v-1bf8da39.5012079e.js",revision:null},{url:"assets/js/v-1ddcadc2.5cfe48d9.js",revision:null},{url:"assets/js/v-271aae61.414001ce.js",revision:null},{url:"assets/js/v-27d47a79.500c4432.js",revision:null},{url:"assets/js/v-2812bd79.7ce1b1b8.js",revision:null},{url:"assets/js/v-2945f13a.af4648bc.js",revision:null},{url:"assets/js/v-2d0a870d.6a634fb8.js",revision:null},{url:"assets/js/v-2fad59ab.fa5c1583.js",revision:null},{url:"assets/js/v-356c0ac4.68992562.js",revision:null},{url:"assets/js/v-3706649a.cc3cb2fb.js",revision:null},{url:"assets/js/v-38007666.dc6ee51a.js",revision:null},{url:"assets/js/v-396f59cd.5186f65a.js",revision:null},{url:"assets/js/v-40608902.4435d7af.js",revision:null},{url:"assets/js/v-434e7c8c.57d596e5.js",revision:null},{url:"assets/js/v-45360123.ae2282d0.js",revision:null},{url:"assets/js/v-4819d2f6.37829081.js",revision:null},{url:"assets/js/v-487079c5.10f7dfb6.js",revision:null},{url:"assets/js/v-4dec5b45.578b8977.js",revision:null},{url:"assets/js/v-4f0168b2.52083cb2.js",revision:null},{url:"assets/js/v-4fe1dc58.ea449386.js",revision:null},{url:"assets/js/v-50cb2a87.6318e5a4.js",revision:null},{url:"assets/js/v-514365f1.88e85f6e.js",revision:null},{url:"assets/js/v-533c70f7.c6dfdfbb.js",revision:null},{url:"assets/js/v-583b3d0d.f149168c.js",revision:null},{url:"assets/js/v-5ceabafb.31f6b2d2.js",revision:null},{url:"assets/js/v-61377328.68c4fd0b.js",revision:null},{url:"assets/js/v-668d9be0.b11b7752.js",revision:null},{url:"assets/js/v-66cc4fee.5313cc94.js",revision:null},{url:"assets/js/v-67a66f17.24e238a2.js",revision:null},{url:"assets/js/v-6b4d4a3d.5f9774b5.js",revision:null},{url:"assets/js/v-6d93dbb2.a26aed4f.js",revision:null},{url:"assets/js/v-704e8e37.05f7d2ea.js",revision:null},{url:"assets/js/v-737ff092.6790b081.js",revision:null},{url:"assets/js/v-740dc7ea.886d2176.js",revision:null},{url:"assets/js/v-743ff88e.67d989b5.js",revision:null},{url:"assets/js/v-74a28670.dfd44b7c.js",revision:null},{url:"assets/js/v-756ec2fc.00ecfd38.js",revision:null},{url:"assets/js/v-7871496c.915548b6.js",revision:null},{url:"assets/js/v-7898f959.d461c1b8.js",revision:null},{url:"assets/js/v-7af875a7.4b4720d8.js",revision:null},{url:"assets/js/v-81cb4dce.c5d81d06.js",revision:null},{url:"assets/js/v-82949f3e.2b19b486.js",revision:null},{url:"assets/js/v-8daa1a0e.534ae74b.js",revision:null},{url:"assets/js/v-8dba60f6.9763fa37.js",revision:null},{url:"assets/js/v-a1a49808.ce0e6848.js",revision:null},{url:"assets/js/v-a7534f04.7c09293f.js",revision:null},{url:"assets/js/v-aecc6e00.4c265c91.js",revision:null},{url:"assets/js/v-b032db80.5ed0a513.js",revision:null},{url:"assets/js/v-b7dac982.45b0c81d.js",revision:null},{url:"assets/js/v-c9146c5e.2cbeec6a.js",revision:null},{url:"assets/js/v-d8d70e1a.2db4278a.js",revision:null},{url:"assets/js/v-de155fda.c172b63d.js",revision:null},{url:"assets/js/v-de867450.7948552f.js",revision:null},{url:"assets/js/v-e4322366.487a1e8a.js",revision:null},{url:"assets/js/v-e565bdda.959b89e4.js",revision:null},{url:"assets/js/v-e64f5648.88bce078.js",revision:null},{url:"assets/js/v-ee77801a.69b9a44f.js",revision:null},{url:"assets/js/v-eff96fe2.646b6d15.js",revision:null},{url:"assets/js/v-f3ed9e5a.e8c78a2c.js",revision:null},{url:"assets/js/v-f4351e9e.5da47e5b.js",revision:null},{url:"assets/js/v-ffe3a066.2d2276d9.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"99dba82e5c849481ad730e9abfee1191"},{url:"en/advanced/faq.html",revision:"8d5ee1cc7ea1f7d60d6a8e0a7052adc6"},{url:"en/advanced/intro.html",revision:"e56b5961ad355f95a702650335802137"},{url:"en/advanced/why.html",revision:"c8b0e1238a0c1431e8acf4b2523ba81b"},{url:"en/guide/client/avatar.html",revision:"e4501484cb8e7dd013c638735816bc3a"},{url:"en/guide/client/count.html",revision:"533b3489f70a87a2e8f7d09a89b24380"},{url:"en/guide/client/emoji.html",revision:"6d89c8d8278ed6909cdec731ffa1bfa3"},{url:"en/guide/client/i18n.html",revision:"8cc1e3cd931ab35f121bbe0894a6c0fd"},{url:"en/guide/client/import.html",revision:"aa64779d2f47ca33fea187969f21e97e"},{url:"en/guide/client/intro.html",revision:"9a4472ec4604b88a1352373d8d8e2982"},{url:"en/guide/client/recentcomment.html",revision:"e68e9359606fa1f6a52b136250868954"},{url:"en/guide/client/spa.html",revision:"2a6319bb95595c9526e9f1c3ff36bba0"},{url:"en/guide/client/style.html",revision:"fbb4183a403480c3ad01e8b5adc93e17"},{url:"en/guide/client/syntax.html",revision:"9c7bf4d6e5ad7c479a8817c6f285267a"},{url:"en/guide/client/widget/index.html",revision:"10b824ca091725340127ba3388a94876"},{url:"en/guide/client/widget/recent-comment.html",revision:"49ac737c30da1dbd2ad26115fc8bc93c"},{url:"en/guide/get-started.html",revision:"d5a7290419a82a407aa1c255df006865"},{url:"en/guide/server/databases.html",revision:"de0de57c8370981e85a83d2755f21eb6"},{url:"en/guide/server/deta.html",revision:"b47d426bf3fd3ed57c5d39d9006b0cee"},{url:"en/guide/server/intro.html",revision:"2facb87cd0abd3d90c1908fc0fd38e67"},{url:"en/guide/server/notification.html",revision:"93ce9948477246dee74a0d275ad973d6"},{url:"en/guide/server/socials.html",revision:"9c1bc2505ba633dcb9ba5808c5588a3c"},{url:"en/guide/server/vps-deploy.html",revision:"eff596285b715609488c181c1acaeb9e"},{url:"en/index.html",revision:"63f80e358710305165618c7d220da765"},{url:"en/migration/client.html",revision:"3e77079e701eb3724362dd8a72ecd599"},{url:"en/migration/tool.html",revision:"019bb7a3bb9713faf6028cdd056cde4d"},{url:"en/migration/valine.html",revision:"dbde6cbf8221aefeb0f4af6a98eebf21"},{url:"en/reference/api.html",revision:"a23e531830b945ff861e9b622f56704a"},{url:"en/reference/client.html",revision:"d11b5c0e8b9a1fe1b9a2ca8ae593d826"},{url:"en/reference/contribution.html",revision:"7b13766d8ca94965ce07d8ab7b46cfd8"},{url:"en/reference/instance.html",revision:"7c6921b9241da1116930b624239d0f6e"},{url:"en/reference/server.html",revision:"5d77ba00e00a60265008fa62061d4322"},{url:"guide/client/avatar.html",revision:"8087e00767b6853540e5a94a38f08d15"},{url:"guide/client/count.html",revision:"54bbf2ba0cd9aff53058d124303459da"},{url:"guide/client/emoji.html",revision:"7ffbe582161a823b2ecebaa85ea5b8ce"},{url:"guide/client/i18n.html",revision:"325e749876c8c36e0137d2373cc63e05"},{url:"guide/client/import.html",revision:"e7a68450be846937b567445872e375b8"},{url:"guide/client/intro.html",revision:"3f6612a5ffeadcdb9c4e89ce019db378"},{url:"guide/client/spa.html",revision:"45a74564abfd301f612046cda569eb30"},{url:"guide/client/style.html",revision:"13f7166db53a80e005d441746eb973a8"},{url:"guide/client/syntax.html",revision:"91208ac7561e82c3d2639034914fe999"},{url:"guide/client/widget/index.html",revision:"96b0b49b50aed83f0b0476dd32a0611c"},{url:"guide/client/widget/recent-comment.html",revision:"3b52fb57ac8da26df5b47768383fb68c"},{url:"guide/get-started.html",revision:"0f24a032eb97ef22632aaee488ccbbb1"},{url:"guide/server/cloudbase.html",revision:"e01ee7fe6c8be19f27b5df4bfb65193a"},{url:"guide/server/databases.html",revision:"16c68466a23edd30ef7e78b1d2f36de7"},{url:"guide/server/deta.html",revision:"1a08e4c6938915efcb27ae97fc5d262f"},{url:"guide/server/intro.html",revision:"87d13b6134f610a46ef3f6fa032a1243"},{url:"guide/server/notification.html",revision:"2297c8a3ee070108f0f0f4820992611c"},{url:"guide/server/socials.html",revision:"77eaa6032b2df64393e2b1fc1e2419ed"},{url:"guide/server/vps-deploy.html",revision:"7da8f7c48e80bcc294900259b308dced"},{url:"index.html",revision:"e1cbe64051176b8f7a591fb0f303b225"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"c955b7f5ba27c538be54a2a72de9d70d"},{url:"migration/tool.html",revision:"515dfbc5230fcecfcb966aaa772fe948"},{url:"migration/valine.html",revision:"e2fd0836668c997ed28fd9cffd4ccf2b"},{url:"reference/api.html",revision:"16a7d02cb2be7200f2427d2bc78e9a09"},{url:"reference/client.html",revision:"d72b946677d2ae9e1391705374c6f244"},{url:"reference/contribution.html",revision:"0008af6a9f6717cd6de2f4a3751feee3"},{url:"reference/instance.html",revision:"c55c5827ce4ee6d824abb84d4cf7863b"},{url:"reference/server.html",revision:"2554b704baae66e724d0af81b8545c0b"}],{})}));
