if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"4530636a115eba965352777bffc90e7e"},{url:"advanced/ecosystem.html",revision:"335e38bc5424eab5c19583f23d212162"},{url:"advanced/faq.html",revision:"556989b970b0be26eeb9d2e22a42ceb2"},{url:"advanced/intro.html",revision:"5309234fdec556ba48538eb9380a3078"},{url:"advanced/why.html",revision:"79608d456c4a5580821b3719290d1055"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.190d6076.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.359166a6.js",revision:null},{url:"assets/js/5556.5b13d4eb.js",revision:null},{url:"assets/js/801.c19c4dc0.js",revision:null},{url:"assets/js/9230.b56a5c5e.js",revision:null},{url:"assets/js/app.10214e2f.js",revision:null},{url:"assets/js/runtime~app.1343db5a.js",revision:null},{url:"assets/js/v-057c9824.7307ff3e.js",revision:null},{url:"assets/js/v-058f99fc.6c4cabbd.js",revision:null},{url:"assets/js/v-0b556720.d3394c2f.js",revision:null},{url:"assets/js/v-1b1feb10.686c126a.js",revision:null},{url:"assets/js/v-1bf8da39.e5a44ed8.js",revision:null},{url:"assets/js/v-271aae61.00a0f06a.js",revision:null},{url:"assets/js/v-27d47a79.549e4b1b.js",revision:null},{url:"assets/js/v-2812bd79.69bc56ef.js",revision:null},{url:"assets/js/v-2945f13a.f91bacae.js",revision:null},{url:"assets/js/v-2d0a870d.9789b323.js",revision:null},{url:"assets/js/v-2fad59ab.98cb8b29.js",revision:null},{url:"assets/js/v-356c0ac4.5cfa270e.js",revision:null},{url:"assets/js/v-3706649a.809018b0.js",revision:null},{url:"assets/js/v-38007666.badbe1fb.js",revision:null},{url:"assets/js/v-396f59cd.9a45bb99.js",revision:null},{url:"assets/js/v-40608902.2249c15a.js",revision:null},{url:"assets/js/v-434e7c8c.62483779.js",revision:null},{url:"assets/js/v-45360123.b1aed8aa.js",revision:null},{url:"assets/js/v-4819d2f6.6d317c64.js",revision:null},{url:"assets/js/v-487079c5.8b92622d.js",revision:null},{url:"assets/js/v-4dec5b45.3eb411b8.js",revision:null},{url:"assets/js/v-4f0168b2.e4f55770.js",revision:null},{url:"assets/js/v-4fe1dc58.920ab653.js",revision:null},{url:"assets/js/v-50cb2a87.5f74031d.js",revision:null},{url:"assets/js/v-514365f1.e0b79f3d.js",revision:null},{url:"assets/js/v-533c70f7.4b6e0e6b.js",revision:null},{url:"assets/js/v-583b3d0d.928cfc87.js",revision:null},{url:"assets/js/v-5ceabafb.51031b04.js",revision:null},{url:"assets/js/v-61377328.c906d1b7.js",revision:null},{url:"assets/js/v-668d9be0.d623b651.js",revision:null},{url:"assets/js/v-66cc4fee.fcf357ee.js",revision:null},{url:"assets/js/v-67a66f17.43d11e3b.js",revision:null},{url:"assets/js/v-6b4d4a3d.f67174cf.js",revision:null},{url:"assets/js/v-6d93dbb2.01068667.js",revision:null},{url:"assets/js/v-704e8e37.75927fb9.js",revision:null},{url:"assets/js/v-737ff092.6cf6f1d7.js",revision:null},{url:"assets/js/v-743ff88e.109d781f.js",revision:null},{url:"assets/js/v-74a28670.e42655b4.js",revision:null},{url:"assets/js/v-756ec2fc.cdf55135.js",revision:null},{url:"assets/js/v-7871496c.adf1a12e.js",revision:null},{url:"assets/js/v-7898f959.bad161e2.js",revision:null},{url:"assets/js/v-7af875a7.54e76cf1.js",revision:null},{url:"assets/js/v-81cb4dce.eeff964a.js",revision:null},{url:"assets/js/v-82949f3e.f78f961d.js",revision:null},{url:"assets/js/v-8daa1a0e.54ca992f.js",revision:null},{url:"assets/js/v-8dba60f6.8d86411f.js",revision:null},{url:"assets/js/v-a1a49808.ac233091.js",revision:null},{url:"assets/js/v-a7534f04.acf77715.js",revision:null},{url:"assets/js/v-aecc6e00.1cd5fc73.js",revision:null},{url:"assets/js/v-b032db80.b974a103.js",revision:null},{url:"assets/js/v-b7dac982.ac02be8d.js",revision:null},{url:"assets/js/v-c9146c5e.3b76abb6.js",revision:null},{url:"assets/js/v-d8d70e1a.797b922e.js",revision:null},{url:"assets/js/v-de155fda.cb4044c6.js",revision:null},{url:"assets/js/v-de867450.c7283f5f.js",revision:null},{url:"assets/js/v-e4322366.1523ff85.js",revision:null},{url:"assets/js/v-e565bdda.365ac07b.js",revision:null},{url:"assets/js/v-e64f5648.78aa4169.js",revision:null},{url:"assets/js/v-ee77801a.6a76a40b.js",revision:null},{url:"assets/js/v-eff96fe2.1adf91ef.js",revision:null},{url:"assets/js/v-f3ed9e5a.988036a1.js",revision:null},{url:"assets/js/v-f4351e9e.b36c0728.js",revision:null},{url:"assets/js/v-ffe3a066.c599754d.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"c25ac6fc42e1c3901ecf6193fb00612f"},{url:"en/advanced/faq.html",revision:"84b70b3fa621410bb3f745e9b8d666fc"},{url:"en/advanced/intro.html",revision:"b1819bc0d2d1166825423cfe0fab255f"},{url:"en/advanced/why.html",revision:"619eb56a4eb01f174603511caad605a2"},{url:"en/guide/client/avatar.html",revision:"427dc1ddfaa868d034596820d930bfde"},{url:"en/guide/client/count.html",revision:"0389050addf1fbdc68c54e1a2a8d1fe5"},{url:"en/guide/client/emoji.html",revision:"86e47bccfffbed8b1ccb824e603a05cf"},{url:"en/guide/client/i18n.html",revision:"29d67e9a2223f38b1b8bfc24006a9892"},{url:"en/guide/client/import.html",revision:"b92bfec1215ad6eb3aae6ebfe652ca60"},{url:"en/guide/client/intro.html",revision:"056f190dec9e5b561c08f14db3ddf839"},{url:"en/guide/client/recentcomment.html",revision:"0837346812f3df970f9df3000148b83a"},{url:"en/guide/client/spa.html",revision:"f3fa33577b007f95e7abbf1ea93cfb6a"},{url:"en/guide/client/style.html",revision:"9e92b181888e85909c794ae8e2530513"},{url:"en/guide/client/syntax.html",revision:"fd360c0f55d223c633baca38f37472d2"},{url:"en/guide/client/widget/index.html",revision:"48cfe2036530ec41e1f1ac1d99170b5c"},{url:"en/guide/client/widget/recent-comment.html",revision:"90e430a45610b4eb0275dd679bd1952a"},{url:"en/guide/get-started.html",revision:"6dc454bec1fae06ad42c72762d98b905"},{url:"en/guide/server/databases.html",revision:"0168b15b85384c40331176550d90904a"},{url:"en/guide/server/intro.html",revision:"1ffa9262dbc21ca153c5575c1d19b843"},{url:"en/guide/server/notification.html",revision:"34a9cbcfa803ae64fd1547c0063287e6"},{url:"en/guide/server/socials.html",revision:"170f6d54a077bd63324e1cb409d12d21"},{url:"en/guide/server/vps-deploy.html",revision:"5860adf37081fe3b047f69acc9287a2f"},{url:"en/index.html",revision:"38ba54fb66cf0cb00c649c78438607ae"},{url:"en/migration/client.html",revision:"11e5e867f143da6b75eada8e8a1a67d6"},{url:"en/migration/tool.html",revision:"ed7be3bed1a69114ebaff6a83e8e4aaf"},{url:"en/migration/valine.html",revision:"6293b75b2287236e2963b03be6bf2f20"},{url:"en/reference/api.html",revision:"1322794934da2b9e143e307311837d42"},{url:"en/reference/client.html",revision:"fcf981f2008e2dddd03180bc279b19bd"},{url:"en/reference/contribution.html",revision:"f67cc0d3e75e406bc70807872a458ba1"},{url:"en/reference/instance.html",revision:"6a86af93060df04a52d827073310954e"},{url:"en/reference/server.html",revision:"a183d5b4b5c850278e8c27787cdc4292"},{url:"guide/client/avatar.html",revision:"7f7875055fb3004c13cad778520cb02c"},{url:"guide/client/count.html",revision:"b5c0f1d759511ca8b167097023d41e07"},{url:"guide/client/emoji.html",revision:"ab5de021abac7c494746313851285e49"},{url:"guide/client/i18n.html",revision:"5cbd98971e6662d68bbd42e00d6d1d38"},{url:"guide/client/import.html",revision:"6ba172fb184a4e9addae0f2d7b584109"},{url:"guide/client/intro.html",revision:"f9ad7b889e0a7565d18783881d575963"},{url:"guide/client/spa.html",revision:"7486f19721496d96bcc9bc0e10257b26"},{url:"guide/client/style.html",revision:"adc9c1bc2b76e506341a5ffd6d338172"},{url:"guide/client/syntax.html",revision:"c2ded560a8b9c6ad40b764fe19fd33fb"},{url:"guide/client/widget/index.html",revision:"72e645c8f49b3dfcf26019ee52c02935"},{url:"guide/client/widget/recent-comment.html",revision:"2a3bf32835a10e318a21ec99ceef6fec"},{url:"guide/get-started.html",revision:"95de4f5e72fbee40b36f4acf990133d7"},{url:"guide/server/cloudbase.html",revision:"ea6e34783f62a224143e65a60afa87eb"},{url:"guide/server/databases.html",revision:"7dd2ef49713ed412742e7731d70ef9c3"},{url:"guide/server/intro.html",revision:"146762dfdf4ff0c034670d8f7a38d37e"},{url:"guide/server/notification.html",revision:"794d82c5244f51e6f50cf1b9f7a4f5dc"},{url:"guide/server/socials.html",revision:"e422f5a88a7abb9c6ff2e5ad30ca8db8"},{url:"guide/server/vps-deploy.html",revision:"bcd12f0a52bc3915096d87da9be70a51"},{url:"index.html",revision:"19722cfe474f15d7f4c514d5b89c93c1"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"4e1b08b0c0f8d502a64bbc573606de22"},{url:"migration/tool.html",revision:"94578041d91634763caed2d437e8d5d3"},{url:"migration/valine.html",revision:"3776a3ec3112f730abad24c7fe4ecd34"},{url:"reference/api.html",revision:"ed54e72390406c6f2161038167dd191a"},{url:"reference/client.html",revision:"cc3d35b908e0ecb513cc2181f046874f"},{url:"reference/contribution.html",revision:"4684c4162f095169808d6432e6cd93b8"},{url:"reference/instance.html",revision:"d55ea8abe06d45e87ad3483c614bc3b9"},{url:"reference/server.html",revision:"59939b232503b55af9590d31224cf232"}],{})}));
