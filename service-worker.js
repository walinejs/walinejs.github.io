if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"7afc631d112e30fb6c5e72a27fdf25e5"},{url:"advanced/ecosystem.html",revision:"fc1c168e665c127f8f1aa91521da13d0"},{url:"advanced/faq.html",revision:"52aeda40dadb59cad69c1f707da02645"},{url:"advanced/intro.html",revision:"9cb4231167f3a6525715e7c3b2de3eb5"},{url:"advanced/why.html",revision:"a5be04611ba49d981b906a3cc775b4e1"},{url:"assets/css/959.styles.be96f9e1.css",revision:null},{url:"assets/css/styles.67a29ccc.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1444.372410d5.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.84d90718.js",revision:null},{url:"assets/js/696.4cc5ed8c.js",revision:null},{url:"assets/js/7645.04e88a34.js",revision:null},{url:"assets/js/app.46c18173.js",revision:null},{url:"assets/js/runtime~app.a9685d19.js",revision:null},{url:"assets/js/v-057c9824.1de9b513.js",revision:null},{url:"assets/js/v-058f99fc.b31c0b5e.js",revision:null},{url:"assets/js/v-0b556720.12a3e43b.js",revision:null},{url:"assets/js/v-1b1feb10.7fe05cab.js",revision:null},{url:"assets/js/v-1bf8da39.5f80b172.js",revision:null},{url:"assets/js/v-271aae61.70d5c4a7.js",revision:null},{url:"assets/js/v-27d47a79.76474711.js",revision:null},{url:"assets/js/v-2812bd79.3209b8fc.js",revision:null},{url:"assets/js/v-2945f13a.3bb61b11.js",revision:null},{url:"assets/js/v-2d0a870d.90628e13.js",revision:null},{url:"assets/js/v-2fad59ab.85a83068.js",revision:null},{url:"assets/js/v-356c0ac4.13e2bb1c.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.cf5e7cd5.js",revision:null},{url:"assets/js/v-396f59cd.b8576e62.js",revision:null},{url:"assets/js/v-40608902.b4506c9a.js",revision:null},{url:"assets/js/v-434e7c8c.66850127.js",revision:null},{url:"assets/js/v-45360123.4a4d96b3.js",revision:null},{url:"assets/js/v-4819d2f6.6ad9522c.js",revision:null},{url:"assets/js/v-487079c5.d78150aa.js",revision:null},{url:"assets/js/v-4dec5b45.23e557d6.js",revision:null},{url:"assets/js/v-4f0168b2.7903bd52.js",revision:null},{url:"assets/js/v-50cb2a87.84dd35fe.js",revision:null},{url:"assets/js/v-514365f1.f37e7373.js",revision:null},{url:"assets/js/v-533c70f7.bbc471dc.js",revision:null},{url:"assets/js/v-583b3d0d.0a33857e.js",revision:null},{url:"assets/js/v-5ceabafb.d4e118c6.js",revision:null},{url:"assets/js/v-61377328.d3d710ab.js",revision:null},{url:"assets/js/v-668d9be0.0c9ddc94.js",revision:null},{url:"assets/js/v-66cc4fee.67326637.js",revision:null},{url:"assets/js/v-67a66f17.5e899d29.js",revision:null},{url:"assets/js/v-6b4d4a3d.1c5d53f7.js",revision:null},{url:"assets/js/v-6d93dbb2.4b1fbc11.js",revision:null},{url:"assets/js/v-704e8e37.b6fc5890.js",revision:null},{url:"assets/js/v-737ff092.21ba6608.js",revision:null},{url:"assets/js/v-743ff88e.d0ba93ee.js",revision:null},{url:"assets/js/v-74a28670.0f9493d3.js",revision:null},{url:"assets/js/v-756ec2fc.f19abce6.js",revision:null},{url:"assets/js/v-7871496c.34fcbc73.js",revision:null},{url:"assets/js/v-7898f959.5e4ba59b.js",revision:null},{url:"assets/js/v-7af875a7.cd286f5a.js",revision:null},{url:"assets/js/v-81cb4dce.df98da63.js",revision:null},{url:"assets/js/v-82949f3e.b544f16b.js",revision:null},{url:"assets/js/v-8daa1a0e.31dce5d8.js",revision:null},{url:"assets/js/v-8dba60f6.8a29ed0b.js",revision:null},{url:"assets/js/v-a1a49808.3330545c.js",revision:null},{url:"assets/js/v-a7534f04.261b0062.js",revision:null},{url:"assets/js/v-aecc6e00.3f72f61e.js",revision:null},{url:"assets/js/v-b7dac982.ecae87d7.js",revision:null},{url:"assets/js/v-c9146c5e.76ef8ec8.js",revision:null},{url:"assets/js/v-d8d70e1a.6f1ebb81.js",revision:null},{url:"assets/js/v-de155fda.48eb2383.js",revision:null},{url:"assets/js/v-de867450.7d834655.js",revision:null},{url:"assets/js/v-e4322366.4e9a97de.js",revision:null},{url:"assets/js/v-e565bdda.d7fa2d91.js",revision:null},{url:"assets/js/v-e64f5648.79bf545d.js",revision:null},{url:"assets/js/v-ee77801a.277ee0db.js",revision:null},{url:"assets/js/v-eff96fe2.21e35b21.js",revision:null},{url:"assets/js/v-f3ed9e5a.16c49315.js",revision:null},{url:"assets/js/v-f4351e9e.743ac824.js",revision:null},{url:"assets/js/v-ffe3a066.11d6b356.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"4f12b0a44be5b534faa6468c96f2bf14"},{url:"en/advanced/faq.html",revision:"df5a30dd53f3e22f0921f061b8b331fa"},{url:"en/advanced/intro.html",revision:"b5384213ccee6db4d2321a082367067e"},{url:"en/advanced/why.html",revision:"752c825f655c5b897df5d677e0f78081"},{url:"en/guide/client/avatar.html",revision:"5c07c90f54db98a61e54f0589422d403"},{url:"en/guide/client/count.html",revision:"8d38dd904715794015b2418bb2d6d791"},{url:"en/guide/client/emoji.html",revision:"536f50f227ccce140a527a77f16eaa06"},{url:"en/guide/client/i18n.html",revision:"629bb7cf921dc1fc2606010c5ebb63d1"},{url:"en/guide/client/import.html",revision:"0eb2e1e40c07e74ec807fa0ca83288fe"},{url:"en/guide/client/intro.html",revision:"a47b43be7a81aeacc31cab556a48defe"},{url:"en/guide/client/recentcomment.html",revision:"e26a221bccea5c174c93f8d7c79b4423"},{url:"en/guide/client/spa.html",revision:"e20a39fa5b47ebd042605f34549c4173"},{url:"en/guide/client/style.html",revision:"c81fffb017f18662afe7d6b4fc21d6c1"},{url:"en/guide/client/syntax.html",revision:"caaa9c6a74c7502331d3f941c5119eec"},{url:"en/guide/client/widget/index.html",revision:"0276da993cd1f18fe4348bf3431d0fa8"},{url:"en/guide/client/widget/recent-comment.html",revision:"9f9c3180f3ea3b617024f8d3281eae36"},{url:"en/guide/get-started.html",revision:"36238e28c54dd522dd46dccc40345ee9"},{url:"en/guide/server/databases.html",revision:"a849f007a99dc19ad24820ed1a6cd4c0"},{url:"en/guide/server/intro.html",revision:"830c69a72bcb0840c00b790d3b57ada1"},{url:"en/guide/server/notification.html",revision:"48250741d7a6e63c717c2a7a195a997b"},{url:"en/guide/server/socials.html",revision:"aae00c4f91d36481adaafb8d3c3759f5"},{url:"en/guide/server/vps-deploy.html",revision:"c487c27af2642958f1a84e6d86ed9bd4"},{url:"en/index.html",revision:"51b7d71c9b11dd734ae93a3c3ad0b4c6"},{url:"en/migration/tool.html",revision:"caf9d7e5a045c2091c7fa41262f304d7"},{url:"en/migration/valine.html",revision:"7198d0eae90f1711a58475cc5636c912"},{url:"en/reference/api.html",revision:"b387192ea87122fbe2e71f6a7967a02e"},{url:"en/reference/client.html",revision:"c0c3a2e9924c67b17eb6f1cfc6e6c071"},{url:"en/reference/contribution.html",revision:"5634bf8aad9d2246a499eeef177bdcbe"},{url:"en/reference/instance.html",revision:"674c8b19342ebd10faf8672b2b0dcb26"},{url:"en/reference/server.html",revision:"dfc9a4e6139ac5388979ab8b7294d9cb"},{url:"guide/client/avatar.html",revision:"55eb1357f70fa3db28462a71419a3871"},{url:"guide/client/count.html",revision:"7673f4c355066ad7d5dffd2bbcae1ecd"},{url:"guide/client/emoji.html",revision:"4e273d019f30b1978665113b8582378e"},{url:"guide/client/i18n.html",revision:"0825f20536a7733e67aa423ddf8e239b"},{url:"guide/client/import.html",revision:"a61eeaff14d4ab5e661095c44ad4d945"},{url:"guide/client/intro.html",revision:"72bfc95c3737787a4dd9c70b3ae0bfcf"},{url:"guide/client/spa.html",revision:"997208b0351cb88952f487243065a0b9"},{url:"guide/client/style.html",revision:"bd8096abaa8c4496b0fe248fa4fd16ab"},{url:"guide/client/syntax.html",revision:"f65682804248c67047032b94cee10988"},{url:"guide/client/widget/index.html",revision:"b9cc58a126f9fdd4e0771a6f6c97dfb9"},{url:"guide/client/widget/recent-comment.html",revision:"35618e77d7a273cfc46732ad6254fc77"},{url:"guide/get-started.html",revision:"6dd0136c2ffab5ded114e47ca75db117"},{url:"guide/server/cloudbase.html",revision:"6f54d7afadbaaa841f2a2f825de7cac8"},{url:"guide/server/databases.html",revision:"6c1454fecbed6060518cb3a778fe7aac"},{url:"guide/server/intro.html",revision:"17f3ebce66a4486aecd020b878423150"},{url:"guide/server/notification.html",revision:"b992b7ea3390430b55ac53b6c0dea349"},{url:"guide/server/socials.html",revision:"d282972dde5e8755588d74e03d785915"},{url:"guide/server/vps-deploy.html",revision:"af4f66bb4a3cbe3809da1f70922c2ca9"},{url:"index.html",revision:"6addc89ad6cfc1063480b056fee58ab6"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/tool.html",revision:"a0fe84753ee03ce65a3007d74eb54ea9"},{url:"migration/valine.html",revision:"a9890ad5554f7d7667072faf22e5e8ac"},{url:"reference/api.html",revision:"5893db9d279235964c7f95f13a699d16"},{url:"reference/client.html",revision:"e1d1496e9ff479af2141975a80e87049"},{url:"reference/contribution.html",revision:"92da1e0788cade73452a8237b4b67196"},{url:"reference/instance.html",revision:"73da89d7508ed7b695dbd1965a67cb9b"},{url:"reference/server.html",revision:"7691f7c0041dad4f99ed3004f2cd6fa0"}],{})}));
