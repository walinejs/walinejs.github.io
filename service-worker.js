if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"aa4dbab8355d8c9eea3c5607eed1ae8c"},{url:"advanced/ecosystem.html",revision:"c5ac34d01abebedd8d56b00b18c1b27a"},{url:"advanced/faq.html",revision:"ec7f163be2602cbc5fcf423d21dc3d0d"},{url:"advanced/intro.html",revision:"83e2e640db3d30eca2e0175b6d4b11cb"},{url:"advanced/why.html",revision:"a1ac389591c20007bbe85f4c66ff644f"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.eeddaf25.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/278.9bfcc17a.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.84d90718.js",revision:null},{url:"assets/js/696.67917b3c.js",revision:null},{url:"assets/js/7769.9464c4d0.js",revision:null},{url:"assets/js/app.ac2e355d.js",revision:null},{url:"assets/js/runtime~app.ff61f13e.js",revision:null},{url:"assets/js/v-057c9824.99c4500e.js",revision:null},{url:"assets/js/v-058f99fc.5dcb6492.js",revision:null},{url:"assets/js/v-0b556720.700f3eba.js",revision:null},{url:"assets/js/v-1b1feb10.8c331a3f.js",revision:null},{url:"assets/js/v-1bf8da39.60f485c9.js",revision:null},{url:"assets/js/v-271aae61.2661896d.js",revision:null},{url:"assets/js/v-27d47a79.9175f3ec.js",revision:null},{url:"assets/js/v-2812bd79.80b6e44e.js",revision:null},{url:"assets/js/v-2945f13a.3f1fed54.js",revision:null},{url:"assets/js/v-2d0a870d.3015f0cf.js",revision:null},{url:"assets/js/v-2fad59ab.904739e3.js",revision:null},{url:"assets/js/v-356c0ac4.9fc67291.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.0eb6685b.js",revision:null},{url:"assets/js/v-396f59cd.e28b153e.js",revision:null},{url:"assets/js/v-40608902.ea02a7e3.js",revision:null},{url:"assets/js/v-434e7c8c.49c7c7c5.js",revision:null},{url:"assets/js/v-45360123.8126cc05.js",revision:null},{url:"assets/js/v-4819d2f6.d81d9349.js",revision:null},{url:"assets/js/v-487079c5.cdbb3323.js",revision:null},{url:"assets/js/v-4dec5b45.00488e8d.js",revision:null},{url:"assets/js/v-4f0168b2.722f154c.js",revision:null},{url:"assets/js/v-4fe1dc58.220298ec.js",revision:null},{url:"assets/js/v-50cb2a87.c8f85306.js",revision:null},{url:"assets/js/v-514365f1.e0921160.js",revision:null},{url:"assets/js/v-533c70f7.c9522a52.js",revision:null},{url:"assets/js/v-583b3d0d.49d5045c.js",revision:null},{url:"assets/js/v-5ceabafb.db318286.js",revision:null},{url:"assets/js/v-61377328.70fcccad.js",revision:null},{url:"assets/js/v-668d9be0.0d77b480.js",revision:null},{url:"assets/js/v-66cc4fee.785227d2.js",revision:null},{url:"assets/js/v-67a66f17.1bfa0017.js",revision:null},{url:"assets/js/v-6b4d4a3d.bef1a43e.js",revision:null},{url:"assets/js/v-6d93dbb2.c7acd9a9.js",revision:null},{url:"assets/js/v-704e8e37.af7de20b.js",revision:null},{url:"assets/js/v-737ff092.0385994e.js",revision:null},{url:"assets/js/v-743ff88e.70cb0e4c.js",revision:null},{url:"assets/js/v-74a28670.e787b5a1.js",revision:null},{url:"assets/js/v-756ec2fc.df9e7244.js",revision:null},{url:"assets/js/v-7871496c.b587af35.js",revision:null},{url:"assets/js/v-7898f959.92bb26d5.js",revision:null},{url:"assets/js/v-7af875a7.5f0f5c06.js",revision:null},{url:"assets/js/v-81cb4dce.eba1004f.js",revision:null},{url:"assets/js/v-82949f3e.c1f17af8.js",revision:null},{url:"assets/js/v-8daa1a0e.8ba472bd.js",revision:null},{url:"assets/js/v-8dba60f6.d32895e6.js",revision:null},{url:"assets/js/v-a1a49808.3c604558.js",revision:null},{url:"assets/js/v-a7534f04.421a6e92.js",revision:null},{url:"assets/js/v-aecc6e00.6b448923.js",revision:null},{url:"assets/js/v-b032db80.08d33971.js",revision:null},{url:"assets/js/v-b7dac982.187d537c.js",revision:null},{url:"assets/js/v-c9146c5e.10f16043.js",revision:null},{url:"assets/js/v-d8d70e1a.d7d1c85d.js",revision:null},{url:"assets/js/v-de155fda.d7d14e75.js",revision:null},{url:"assets/js/v-de867450.9bb46489.js",revision:null},{url:"assets/js/v-e4322366.003c41a1.js",revision:null},{url:"assets/js/v-e565bdda.eef64403.js",revision:null},{url:"assets/js/v-e64f5648.7fab5e79.js",revision:null},{url:"assets/js/v-ee77801a.62f28dd5.js",revision:null},{url:"assets/js/v-eff96fe2.91c54385.js",revision:null},{url:"assets/js/v-f3ed9e5a.60ad3b07.js",revision:null},{url:"assets/js/v-f4351e9e.3381db2a.js",revision:null},{url:"assets/js/v-ffe3a066.bde75233.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"2110b835c16b6ab0b61d14ca4e73cd36"},{url:"en/advanced/faq.html",revision:"866a096011d28eed8393b97220cbb860"},{url:"en/advanced/intro.html",revision:"79987e075beba5c999dcb7945995fed1"},{url:"en/advanced/why.html",revision:"c0b7876525918f2ac3c23cf8636d4a3b"},{url:"en/guide/client/avatar.html",revision:"5d1a078c0e56782465a1762e057e3765"},{url:"en/guide/client/count.html",revision:"a44896934c5cafafb5d821e19345ef9d"},{url:"en/guide/client/emoji.html",revision:"32463b2d4525c12f1b51196550d73505"},{url:"en/guide/client/i18n.html",revision:"b13a768478ce4068f515c9d4aca4407b"},{url:"en/guide/client/import.html",revision:"efefdc24029ae6d38acec022aaf5fbc5"},{url:"en/guide/client/intro.html",revision:"914615b6f4d47b0ee69d7c2938188036"},{url:"en/guide/client/recentcomment.html",revision:"1eae07bae9495c5ead42fb9cb9cf3596"},{url:"en/guide/client/spa.html",revision:"3a1d6f189461e7555f777b77b770fe32"},{url:"en/guide/client/style.html",revision:"fd5e2e35e07f6a9a93d26bee4ee4186b"},{url:"en/guide/client/syntax.html",revision:"52fda98f25506b0e1afb64ec22bca03d"},{url:"en/guide/client/widget/index.html",revision:"d22312d21eb2b1d710a98de3961d1202"},{url:"en/guide/client/widget/recent-comment.html",revision:"84841ec1455dfd1798515f200625e8c4"},{url:"en/guide/get-started.html",revision:"ec3441783b347778dea0685160992d53"},{url:"en/guide/server/databases.html",revision:"42bd79f93b532d3e548f52ae97f76783"},{url:"en/guide/server/intro.html",revision:"ca39b7a78db807365c5ef575b16aacdc"},{url:"en/guide/server/notification.html",revision:"643239f7208d8c034f70726565618c5b"},{url:"en/guide/server/socials.html",revision:"0e5325ff33acdae5c8180e0a6e28fe3b"},{url:"en/guide/server/vps-deploy.html",revision:"c257fee3adf0d5d1f6e298e80f0c79a2"},{url:"en/index.html",revision:"7145d6fd3c1a303e9612558332917242"},{url:"en/migration/client.html",revision:"f2ca85ff00a398d3b15538f1fc4796a9"},{url:"en/migration/tool.html",revision:"76424377d3ec648f03bea11d9dc83b75"},{url:"en/migration/valine.html",revision:"46b4e507fce7ccf5985260908b916eb5"},{url:"en/reference/api.html",revision:"13cdf605b173ab8247bde619140f3560"},{url:"en/reference/client.html",revision:"c3687d9491d388bd69e55fbb9490daa7"},{url:"en/reference/contribution.html",revision:"52da101338b0e800452fbacf8874f401"},{url:"en/reference/instance.html",revision:"1c76066d43c44f69a90ad3cc4be06e6f"},{url:"en/reference/server.html",revision:"fc26766b872b07b909c428952ef818eb"},{url:"guide/client/avatar.html",revision:"12840ddc46ed08a4f4296231e8642383"},{url:"guide/client/count.html",revision:"e55ff7c91f5681a18fd594f83803447e"},{url:"guide/client/emoji.html",revision:"0c29a3247bb96adfdd6e7be9b290cb5f"},{url:"guide/client/i18n.html",revision:"a7907a99bfe7e523072ced084dc0fe9f"},{url:"guide/client/import.html",revision:"1eaad5d21da8e26976fc0a46ca24e755"},{url:"guide/client/intro.html",revision:"54532a506a54d9d4c786e9b5d151da93"},{url:"guide/client/spa.html",revision:"c2491e073429a71437ca3372b55672e7"},{url:"guide/client/style.html",revision:"a1a6702ea73217a994db3599c886159b"},{url:"guide/client/syntax.html",revision:"42517a652af6adcdcafd5e94b708f698"},{url:"guide/client/widget/index.html",revision:"d98619cb2dbc84a9423b85b5bbd377ff"},{url:"guide/client/widget/recent-comment.html",revision:"cc1079279caab1b98a81809137ef2adf"},{url:"guide/get-started.html",revision:"f8ce29f296e703d6c7702387628c3755"},{url:"guide/server/cloudbase.html",revision:"81aa79f5f043d20c482c6b3112ce96ac"},{url:"guide/server/databases.html",revision:"af81c18004463195239c3968b55b504b"},{url:"guide/server/intro.html",revision:"e0bd56f2babceeed54276dad4a970bd3"},{url:"guide/server/notification.html",revision:"ba2be7674500bd9a92c587958b2fac43"},{url:"guide/server/socials.html",revision:"dd671ec249946dcfc0626dfa3b5a6a9e"},{url:"guide/server/vps-deploy.html",revision:"f739f78ea5651f4c434d2866191ccce9"},{url:"index.html",revision:"947ff53f8363c770064757b31ca68fc4"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"f72e60f3a4571c763a732ab48413d617"},{url:"migration/tool.html",revision:"0befcda0f684162b0d5c44f2b0b6f73c"},{url:"migration/valine.html",revision:"3085b902c49a1a52847651195d9a9f01"},{url:"reference/api.html",revision:"864912c64d33ca9af086515ad3adab6b"},{url:"reference/client.html",revision:"dcdc8f2e10ac2b7d0d1883b236b47455"},{url:"reference/contribution.html",revision:"859a0fd77bf47042c9eab2b0f2407ec0"},{url:"reference/instance.html",revision:"872f977bd183e33c112d48f22bf9d7fd"},{url:"reference/server.html",revision:"6dc042935785f92a333cbca62ce53df0"}],{})}));
