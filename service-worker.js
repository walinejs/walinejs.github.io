if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"40fc31d0c05eb9b0b8275cddf40e73cf"},{url:"advanced/ecosystem.html",revision:"b7e12da34cc9c65b7f8ca853fb12ae28"},{url:"advanced/faq.html",revision:"353d0d84748bb14bde3554daec1ba75f"},{url:"advanced/intro.html",revision:"907d52354222bf44bd9988e61dbebbca"},{url:"advanced/why.html",revision:"f0f76f5551e64a91b5385583bfb7527e"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.4a5f655c.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.b4aea2cb.js",revision:null},{url:"assets/js/runtime~app.35fb10df.js",revision:null},{url:"assets/js/v-057c9824.37506adf.js",revision:null},{url:"assets/js/v-058f99fc.9d396dfa.js",revision:null},{url:"assets/js/v-0b556720.dbd69c5d.js",revision:null},{url:"assets/js/v-1b1feb10.689058aa.js",revision:null},{url:"assets/js/v-1bf8da39.64087a71.js",revision:null},{url:"assets/js/v-271aae61.49d43f43.js",revision:null},{url:"assets/js/v-27d47a79.b66589a6.js",revision:null},{url:"assets/js/v-2812bd79.e323c69a.js",revision:null},{url:"assets/js/v-2945f13a.c0d599a2.js",revision:null},{url:"assets/js/v-2d0a870d.30f29387.js",revision:null},{url:"assets/js/v-2fad59ab.491608df.js",revision:null},{url:"assets/js/v-356c0ac4.e189bcf4.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.622971a2.js",revision:null},{url:"assets/js/v-396f59cd.6427038f.js",revision:null},{url:"assets/js/v-40608902.e66f97c1.js",revision:null},{url:"assets/js/v-434e7c8c.daab3c5e.js",revision:null},{url:"assets/js/v-45360123.6df86868.js",revision:null},{url:"assets/js/v-4819d2f6.418f8690.js",revision:null},{url:"assets/js/v-487079c5.e6dca0e5.js",revision:null},{url:"assets/js/v-4dec5b45.43688b4f.js",revision:null},{url:"assets/js/v-4f0168b2.4ebe0b89.js",revision:null},{url:"assets/js/v-4fe1dc58.61f16b55.js",revision:null},{url:"assets/js/v-50cb2a87.dd6658b2.js",revision:null},{url:"assets/js/v-514365f1.bf734396.js",revision:null},{url:"assets/js/v-533c70f7.481eb2b9.js",revision:null},{url:"assets/js/v-583b3d0d.06b0b8dc.js",revision:null},{url:"assets/js/v-5ceabafb.32cde394.js",revision:null},{url:"assets/js/v-61377328.4e267b8b.js",revision:null},{url:"assets/js/v-668d9be0.cad74bb0.js",revision:null},{url:"assets/js/v-66cc4fee.922210db.js",revision:null},{url:"assets/js/v-67a66f17.4f1bf9ff.js",revision:null},{url:"assets/js/v-6b4d4a3d.42e64c78.js",revision:null},{url:"assets/js/v-6d93dbb2.e3ffd04a.js",revision:null},{url:"assets/js/v-704e8e37.3d122ee3.js",revision:null},{url:"assets/js/v-737ff092.1e5d96c4.js",revision:null},{url:"assets/js/v-743ff88e.3d32fb6b.js",revision:null},{url:"assets/js/v-74a28670.3ffcca83.js",revision:null},{url:"assets/js/v-756ec2fc.6d53af69.js",revision:null},{url:"assets/js/v-7871496c.75d1544c.js",revision:null},{url:"assets/js/v-7898f959.0196b1f3.js",revision:null},{url:"assets/js/v-7af875a7.0a24174e.js",revision:null},{url:"assets/js/v-81cb4dce.8679f886.js",revision:null},{url:"assets/js/v-82949f3e.f5996810.js",revision:null},{url:"assets/js/v-8daa1a0e.92ef2425.js",revision:null},{url:"assets/js/v-8dba60f6.18865a4f.js",revision:null},{url:"assets/js/v-a1a49808.21fb260d.js",revision:null},{url:"assets/js/v-a7534f04.88efa69e.js",revision:null},{url:"assets/js/v-aecc6e00.c7495d01.js",revision:null},{url:"assets/js/v-b032db80.d1a0b399.js",revision:null},{url:"assets/js/v-b7dac982.99b9dec4.js",revision:null},{url:"assets/js/v-c9146c5e.76f4c402.js",revision:null},{url:"assets/js/v-d8d70e1a.27c14f15.js",revision:null},{url:"assets/js/v-de155fda.db29d73c.js",revision:null},{url:"assets/js/v-de867450.0eba8717.js",revision:null},{url:"assets/js/v-e4322366.3baa9bec.js",revision:null},{url:"assets/js/v-e565bdda.32ab342e.js",revision:null},{url:"assets/js/v-e64f5648.3e43efea.js",revision:null},{url:"assets/js/v-ee77801a.6f430126.js",revision:null},{url:"assets/js/v-eff96fe2.fa15d5f4.js",revision:null},{url:"assets/js/v-f3ed9e5a.5d611548.js",revision:null},{url:"assets/js/v-f4351e9e.4b984141.js",revision:null},{url:"assets/js/v-ffe3a066.63ab3b5e.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"489eadbfa0bc2dab67e7226d9442c6b4"},{url:"en/advanced/faq.html",revision:"101f05c743402e4ec8c3b0c81080e82f"},{url:"en/advanced/intro.html",revision:"561c610e69e51d303e587914fb5b9c20"},{url:"en/advanced/why.html",revision:"b6905dbbc7d91a1e64d4ad3d7cbaabda"},{url:"en/guide/client/avatar.html",revision:"4a9a9a7311885af68e126751477239c6"},{url:"en/guide/client/count.html",revision:"40f82883284e41bc1285f48a923d62ec"},{url:"en/guide/client/emoji.html",revision:"b83a30ec27a774048c7d0087300d0aa7"},{url:"en/guide/client/i18n.html",revision:"27607a7ea7a5533397a16e2512bc4349"},{url:"en/guide/client/import.html",revision:"3919ccc3cae39f7b19f449e4505bff83"},{url:"en/guide/client/intro.html",revision:"e09fcf8a9fd5a92ae5f28906e2d85829"},{url:"en/guide/client/recentcomment.html",revision:"4ceae2fbab7a3403f14436bebe5bcda3"},{url:"en/guide/client/spa.html",revision:"2637ce696a81ab45ace1371d0018174b"},{url:"en/guide/client/style.html",revision:"7bb73e065d4d2721ea027dac4f16bf96"},{url:"en/guide/client/syntax.html",revision:"8cb5f1f027d0e8b20492e514cb1f1a39"},{url:"en/guide/client/widget/index.html",revision:"6627b4361480b0c9e3e9c8bbd0e4cfad"},{url:"en/guide/client/widget/recent-comment.html",revision:"10ed0bd71642cbad5f4b22c44388d3ed"},{url:"en/guide/get-started.html",revision:"da48a7e9e1dc8634222089e90468882c"},{url:"en/guide/server/databases.html",revision:"26cb0bdefd8bb441da91b9a8468445eb"},{url:"en/guide/server/intro.html",revision:"748bb39a0279f83a2b28a7ae7f4a8962"},{url:"en/guide/server/notification.html",revision:"c9d6e057b7f8a278ce457cc81204840c"},{url:"en/guide/server/socials.html",revision:"3152d58b87def3885577c82895e448c3"},{url:"en/guide/server/vps-deploy.html",revision:"f9f6bb6d1a1e192e212426fcb6499d9b"},{url:"en/index.html",revision:"804b42a26d442e3c63e8c1f20dd08e05"},{url:"en/migration/client.html",revision:"bc21af49232b68bb581c446b9da7cff6"},{url:"en/migration/tool.html",revision:"4fdc46655542066d8a3ac7749439b9f9"},{url:"en/migration/valine.html",revision:"c2c32c0efdac1eb7af276926c25542b8"},{url:"en/reference/api.html",revision:"d8cef232f856160d2dcdbbc8d6708e63"},{url:"en/reference/client.html",revision:"9f7d5831313faf8f1b163518b6ff5dac"},{url:"en/reference/contribution.html",revision:"1119b222fe34ea0eda3dc8948a666dd2"},{url:"en/reference/instance.html",revision:"2463026260dc1ed0e1f4cde7f9ee223a"},{url:"en/reference/server.html",revision:"65687e18c433544be436fe125e9c7c94"},{url:"guide/client/avatar.html",revision:"ef858463e6993a13d11951bdf6c4cd27"},{url:"guide/client/count.html",revision:"9530ab540e7970f43d79ee12d1d2c967"},{url:"guide/client/emoji.html",revision:"4cfe8bab3c839a2c22ef4fa950d4331e"},{url:"guide/client/i18n.html",revision:"d9115041e1e02e0f950d2fc4d6b6efe7"},{url:"guide/client/import.html",revision:"983e8994f2f2ddf6e5f0bc80b9db4710"},{url:"guide/client/intro.html",revision:"0d5563c41c4b6b45cb01f221ee7174e6"},{url:"guide/client/spa.html",revision:"b9b69d27c06072e478699bfe78d18cf0"},{url:"guide/client/style.html",revision:"22fec9313aecd4499a9c7f521d4b9992"},{url:"guide/client/syntax.html",revision:"55157d5fd121484ea7d5d2a5c63cb88a"},{url:"guide/client/widget/index.html",revision:"7791b745908837a7aa69fc45b11b64bb"},{url:"guide/client/widget/recent-comment.html",revision:"7dd2dae16f4be2aea75faf22abe72a38"},{url:"guide/get-started.html",revision:"9754498ebbbb57ccb27b5371c6d612b4"},{url:"guide/server/cloudbase.html",revision:"4ab23916a560a6af70178b28d1f998ee"},{url:"guide/server/databases.html",revision:"13923b53921fa6e95db59d97e6163aa2"},{url:"guide/server/intro.html",revision:"c99327f3b6521bdde39ab882904cec4a"},{url:"guide/server/notification.html",revision:"6bd103bae686bed726e2a89840ec8657"},{url:"guide/server/socials.html",revision:"ef3de17bd7a400529a5b6729d63febe6"},{url:"guide/server/vps-deploy.html",revision:"54df6ca3bad9923965edf6e489328c6d"},{url:"index.html",revision:"1ea5428330e0289ef4068736d194c9a1"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"162b4430cd9af6985b6aa7c943e013b9"},{url:"migration/tool.html",revision:"8366e108132733cf4bc47b909368d6e4"},{url:"migration/valine.html",revision:"677590d0b573767172832f9ecede7d2e"},{url:"reference/api.html",revision:"2629f7868f04807ef469562730b1b58a"},{url:"reference/client.html",revision:"20f436aeee4cff954cb68f96ec270f60"},{url:"reference/contribution.html",revision:"f204e2d6e506ffa94fd756f067af8892"},{url:"reference/instance.html",revision:"2bca46d5f0d998979bf565bc573d46a9"},{url:"reference/server.html",revision:"d1167351d9c6269faf9c8aedec4e1c6c"}],{})}));
