if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"03f2ac13ddcb79e6d4d011b08c3a1298"},{url:"advanced/ecosystem.html",revision:"0c79b0d4d8e3f2581d8936f88a98a836"},{url:"advanced/faq.html",revision:"42c4ee5104266d9fe173e717c0871cd8"},{url:"advanced/intro.html",revision:"7a2c7f22293e4eb998b50bf29992c688"},{url:"advanced/why.html",revision:"fd1ba950f2445ea52a04600c410b70a5"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.f20ca8e0.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1709.8590c1bb.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.4e5193e8.js",revision:null},{url:"assets/js/696.fa9ab73e.js",revision:null},{url:"assets/js/7769.01dcf3b2.js",revision:null},{url:"assets/js/app.f08a5bb5.js",revision:null},{url:"assets/js/runtime~app.75017549.js",revision:null},{url:"assets/js/v-057c9824.d028aa1c.js",revision:null},{url:"assets/js/v-058f99fc.aebba10e.js",revision:null},{url:"assets/js/v-0b556720.ce9b4b6d.js",revision:null},{url:"assets/js/v-1b1feb10.8370edb7.js",revision:null},{url:"assets/js/v-1bf8da39.a5f3e05c.js",revision:null},{url:"assets/js/v-271aae61.925ae2a1.js",revision:null},{url:"assets/js/v-27d47a79.8021637d.js",revision:null},{url:"assets/js/v-2812bd79.b0cc5c4c.js",revision:null},{url:"assets/js/v-2945f13a.06c72fa8.js",revision:null},{url:"assets/js/v-2d0a870d.dacf66cb.js",revision:null},{url:"assets/js/v-2fad59ab.c10dfb06.js",revision:null},{url:"assets/js/v-356c0ac4.742c8dd4.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.8cb0e0a1.js",revision:null},{url:"assets/js/v-396f59cd.4a8a64c3.js",revision:null},{url:"assets/js/v-40608902.a7c66ceb.js",revision:null},{url:"assets/js/v-434e7c8c.0e792fc0.js",revision:null},{url:"assets/js/v-45360123.71080779.js",revision:null},{url:"assets/js/v-4819d2f6.ed5361a0.js",revision:null},{url:"assets/js/v-487079c5.e2feae7a.js",revision:null},{url:"assets/js/v-4dec5b45.26900e44.js",revision:null},{url:"assets/js/v-4f0168b2.981286bf.js",revision:null},{url:"assets/js/v-4fe1dc58.2cec27d4.js",revision:null},{url:"assets/js/v-50cb2a87.a0decdcb.js",revision:null},{url:"assets/js/v-514365f1.498e680f.js",revision:null},{url:"assets/js/v-533c70f7.13d462c8.js",revision:null},{url:"assets/js/v-583b3d0d.78075075.js",revision:null},{url:"assets/js/v-5ceabafb.31e586c9.js",revision:null},{url:"assets/js/v-61377328.66e3a8b7.js",revision:null},{url:"assets/js/v-668d9be0.03ce6c04.js",revision:null},{url:"assets/js/v-66cc4fee.2b533d26.js",revision:null},{url:"assets/js/v-67a66f17.896dba47.js",revision:null},{url:"assets/js/v-6b4d4a3d.8bc3d562.js",revision:null},{url:"assets/js/v-6d93dbb2.87b5ac4a.js",revision:null},{url:"assets/js/v-704e8e37.043b5223.js",revision:null},{url:"assets/js/v-737ff092.94be48f5.js",revision:null},{url:"assets/js/v-743ff88e.e67a48bd.js",revision:null},{url:"assets/js/v-74a28670.976e5e29.js",revision:null},{url:"assets/js/v-756ec2fc.cc6df91b.js",revision:null},{url:"assets/js/v-7871496c.063ddba8.js",revision:null},{url:"assets/js/v-7898f959.f867a215.js",revision:null},{url:"assets/js/v-7af875a7.3ef109fb.js",revision:null},{url:"assets/js/v-81cb4dce.598c5c5e.js",revision:null},{url:"assets/js/v-82949f3e.b2cccf89.js",revision:null},{url:"assets/js/v-8daa1a0e.b546fe35.js",revision:null},{url:"assets/js/v-8dba60f6.a10089a4.js",revision:null},{url:"assets/js/v-a1a49808.95c968b8.js",revision:null},{url:"assets/js/v-a7534f04.139681d2.js",revision:null},{url:"assets/js/v-aecc6e00.b24e5cad.js",revision:null},{url:"assets/js/v-b032db80.c8d8e267.js",revision:null},{url:"assets/js/v-b7dac982.f0f56521.js",revision:null},{url:"assets/js/v-c9146c5e.f0c1f74b.js",revision:null},{url:"assets/js/v-d8d70e1a.24f97526.js",revision:null},{url:"assets/js/v-de155fda.d9ce0142.js",revision:null},{url:"assets/js/v-de867450.ee88dfe1.js",revision:null},{url:"assets/js/v-e4322366.9e44e7c3.js",revision:null},{url:"assets/js/v-e565bdda.0df7a05d.js",revision:null},{url:"assets/js/v-e64f5648.1f4b087d.js",revision:null},{url:"assets/js/v-ee77801a.edfb70ae.js",revision:null},{url:"assets/js/v-eff96fe2.0ff1e3fd.js",revision:null},{url:"assets/js/v-f3ed9e5a.17ce2901.js",revision:null},{url:"assets/js/v-f4351e9e.eb20141f.js",revision:null},{url:"assets/js/v-ffe3a066.d79ebff7.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"e45a845147481a742c64f540ce0e99a1"},{url:"en/advanced/faq.html",revision:"464db13ffda50a84e657ee5d2301df91"},{url:"en/advanced/intro.html",revision:"7964d7c4aace7d41ade15eac95012a74"},{url:"en/advanced/why.html",revision:"aab0f3cf5fd502c9330c996df69ff5d0"},{url:"en/guide/client/avatar.html",revision:"911a071efabfb996827291fe5118df73"},{url:"en/guide/client/count.html",revision:"adc04211a52961361a5eec43e4a30831"},{url:"en/guide/client/emoji.html",revision:"454d13bc0e472057fd46b65028bfc54d"},{url:"en/guide/client/i18n.html",revision:"0628078e9853165d6f3ab61472b64b26"},{url:"en/guide/client/import.html",revision:"d75cab5e31e6c03c92218314fec9167d"},{url:"en/guide/client/intro.html",revision:"5f3c77871c4ab14205fa5ba74cdf1fc3"},{url:"en/guide/client/recentcomment.html",revision:"020826bb99a80bb913a0c6e525da9ef5"},{url:"en/guide/client/spa.html",revision:"d493bc2aaf9112cbbf359b9c5cb556fd"},{url:"en/guide/client/style.html",revision:"7818ad73cd9600f4a1969396d7e39dc4"},{url:"en/guide/client/syntax.html",revision:"edc123db2a3f47a30281a230bcd6125e"},{url:"en/guide/client/widget/index.html",revision:"28a3c31557a4e0c18c3d1c4bdbe027fd"},{url:"en/guide/client/widget/recent-comment.html",revision:"640db78c70988f06a11f747a05bb852e"},{url:"en/guide/get-started.html",revision:"12a1fc68497725756d2e8078e7e5e4f9"},{url:"en/guide/server/databases.html",revision:"1ebd7e410e208ded45587555c41b3888"},{url:"en/guide/server/intro.html",revision:"3d961dbdb150341f455b73ad2e7f8289"},{url:"en/guide/server/notification.html",revision:"3c5ea07a92bb149069beca15f34be60e"},{url:"en/guide/server/socials.html",revision:"d18fdc88dfdd2f06690adf83b3bc0fa4"},{url:"en/guide/server/vps-deploy.html",revision:"c78d080b536e754539c33981dd7e7e53"},{url:"en/index.html",revision:"36469be7680c9a28d104564dae2a35f0"},{url:"en/migration/client.html",revision:"1e08b7dc543bcd09710dccd31ec08f5d"},{url:"en/migration/tool.html",revision:"578f3ca1933e6dfd82d7e312cf7ff273"},{url:"en/migration/valine.html",revision:"af6f4521b3506c4f5ad72cf88b54f599"},{url:"en/reference/api.html",revision:"52fa24d0d62497a5b14aae4e42f982f5"},{url:"en/reference/client.html",revision:"eb89394d0c29df1cc75ef749f2814ca2"},{url:"en/reference/contribution.html",revision:"4231a07e375f55ef56bba783324a2d00"},{url:"en/reference/instance.html",revision:"fa96deb9003c1bd253f8d4f7a03860d4"},{url:"en/reference/server.html",revision:"c3272e98b4fbeaed4b9ecc5e55cc0a09"},{url:"guide/client/avatar.html",revision:"30a64c510be12e71fedb0ddd4da7641d"},{url:"guide/client/count.html",revision:"a67eeb3fd01e95d238d5dc47495c68da"},{url:"guide/client/emoji.html",revision:"07154279d0810c514679bac64d3acdbe"},{url:"guide/client/i18n.html",revision:"4689f44252b6832b530e43eb027fa19f"},{url:"guide/client/import.html",revision:"85eeb19a3653303d5fa84a63c2fdb116"},{url:"guide/client/intro.html",revision:"d7bc98d358c338ee7149df686a2b94da"},{url:"guide/client/spa.html",revision:"b993bcb53fa1c24cb96b92c99248a81a"},{url:"guide/client/style.html",revision:"0773b92f86e6593874f2b620b855f1c3"},{url:"guide/client/syntax.html",revision:"5f863ac5b2a94b13ceedb49ebc750e99"},{url:"guide/client/widget/index.html",revision:"a3593577a4e673bc3cb77c61e4436851"},{url:"guide/client/widget/recent-comment.html",revision:"ca0c031b393d44ca064b865d4d06afdb"},{url:"guide/get-started.html",revision:"709d050075bc22e1387610717835c962"},{url:"guide/server/cloudbase.html",revision:"9f117b762c7cd5b5c041f7f30eca9d2f"},{url:"guide/server/databases.html",revision:"bd6a5a715ad7349d8f52f4e30806feea"},{url:"guide/server/intro.html",revision:"85f5b55bd01cbe04327bbc0319d334ba"},{url:"guide/server/notification.html",revision:"7e8dfb84d5e4c5643ec395f5902d3b6e"},{url:"guide/server/socials.html",revision:"e1557aa826ad02eb82da19dda469ae54"},{url:"guide/server/vps-deploy.html",revision:"f5c3b3d0a1874cc8ceec5135d5eedcc8"},{url:"index.html",revision:"d5219759674963de234da3a3eeab7a2e"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"7b4e4686fc78f8da10461c4ce2b7b1de"},{url:"migration/tool.html",revision:"cc33f2c1f02bdc108814c3995a020bdb"},{url:"migration/valine.html",revision:"8d2ba4cce1d6475461fb4fa78921b011"},{url:"reference/api.html",revision:"ea2ed85700659d83a13a1b1225733510"},{url:"reference/client.html",revision:"99e1f3145bebbc3193e34e0d9d4d3ff5"},{url:"reference/contribution.html",revision:"d0a46d511bd41a390f239f5469debbae"},{url:"reference/instance.html",revision:"1e7c8c80f4f84f4a125e6d9d0253ff30"},{url:"reference/server.html",revision:"6e0c6b3caacde38939e5fa44707e5690"}],{})}));
