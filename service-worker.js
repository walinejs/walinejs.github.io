if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"a2511419bfbfa52cb13a1b12bc03e251"},{url:"advanced/ecosystem.html",revision:"76f4a7fe92ad3a0df34694a1caab3dcf"},{url:"advanced/faq.html",revision:"b95245f90681f224379d92bd3a877df3"},{url:"advanced/intro.html",revision:"193a0dae60219616e7feef7684502c56"},{url:"advanced/why.html",revision:"7528d025d847746931a4826d8f2a696a"},{url:"assets/css/959.styles.1a78020b.css",revision:null},{url:"assets/css/styles.6877a3c5.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.38f8d3c9.js",revision:null},{url:"assets/js/5455.0b091ee5.js",revision:null},{url:"assets/js/5556.abfb17ca.js",revision:null},{url:"assets/js/801.538d31e1.js",revision:null},{url:"assets/js/9230.aef6cf95.js",revision:null},{url:"assets/js/app.8d2e5cbd.js",revision:null},{url:"assets/js/runtime~app.329c2aad.js",revision:null},{url:"assets/js/v-057c9824.1b2ff7fe.js",revision:null},{url:"assets/js/v-058f99fc.b48c0915.js",revision:null},{url:"assets/js/v-0b556720.cc809e28.js",revision:null},{url:"assets/js/v-1b1feb10.1b7b0a07.js",revision:null},{url:"assets/js/v-1bf8da39.9a61caef.js",revision:null},{url:"assets/js/v-271aae61.bca5f5f7.js",revision:null},{url:"assets/js/v-27d47a79.7d2e11ed.js",revision:null},{url:"assets/js/v-2812bd79.471689f6.js",revision:null},{url:"assets/js/v-2945f13a.feb48d43.js",revision:null},{url:"assets/js/v-2d0a870d.5e4bfba3.js",revision:null},{url:"assets/js/v-2fad59ab.fd36db8a.js",revision:null},{url:"assets/js/v-356c0ac4.6d6e3e3c.js",revision:null},{url:"assets/js/v-3706649a.b38a5ec8.js",revision:null},{url:"assets/js/v-38007666.6eed5fd3.js",revision:null},{url:"assets/js/v-396f59cd.001d90e7.js",revision:null},{url:"assets/js/v-40608902.eafacf3c.js",revision:null},{url:"assets/js/v-434e7c8c.99c548b6.js",revision:null},{url:"assets/js/v-45360123.d245560e.js",revision:null},{url:"assets/js/v-4819d2f6.5fcaab87.js",revision:null},{url:"assets/js/v-487079c5.48ed84bb.js",revision:null},{url:"assets/js/v-4dec5b45.1c259230.js",revision:null},{url:"assets/js/v-4f0168b2.9f3e0be5.js",revision:null},{url:"assets/js/v-4fe1dc58.ff262258.js",revision:null},{url:"assets/js/v-50cb2a87.bf305ab8.js",revision:null},{url:"assets/js/v-514365f1.8a215d16.js",revision:null},{url:"assets/js/v-533c70f7.119cba49.js",revision:null},{url:"assets/js/v-583b3d0d.c4b2b4b5.js",revision:null},{url:"assets/js/v-5ceabafb.d2d6df1c.js",revision:null},{url:"assets/js/v-61377328.3d707aea.js",revision:null},{url:"assets/js/v-668d9be0.3cd45bdc.js",revision:null},{url:"assets/js/v-66cc4fee.dece3c3e.js",revision:null},{url:"assets/js/v-67a66f17.b01859ef.js",revision:null},{url:"assets/js/v-6b4d4a3d.0311a554.js",revision:null},{url:"assets/js/v-6d93dbb2.ec5e99f9.js",revision:null},{url:"assets/js/v-704e8e37.2c340161.js",revision:null},{url:"assets/js/v-737ff092.927716f4.js",revision:null},{url:"assets/js/v-743ff88e.192f02df.js",revision:null},{url:"assets/js/v-74a28670.42042528.js",revision:null},{url:"assets/js/v-756ec2fc.69c4c6a9.js",revision:null},{url:"assets/js/v-7871496c.1f59bb40.js",revision:null},{url:"assets/js/v-7898f959.0bb20ce1.js",revision:null},{url:"assets/js/v-7af875a7.b95c3257.js",revision:null},{url:"assets/js/v-81cb4dce.cd5e1890.js",revision:null},{url:"assets/js/v-82949f3e.4fff8399.js",revision:null},{url:"assets/js/v-8daa1a0e.4ac248ab.js",revision:null},{url:"assets/js/v-8dba60f6.9b64f16e.js",revision:null},{url:"assets/js/v-a1a49808.7cc3c76b.js",revision:null},{url:"assets/js/v-a7534f04.4449cde0.js",revision:null},{url:"assets/js/v-aecc6e00.f4e2be51.js",revision:null},{url:"assets/js/v-b032db80.46d20de7.js",revision:null},{url:"assets/js/v-b7dac982.071ac6a2.js",revision:null},{url:"assets/js/v-c9146c5e.3716f944.js",revision:null},{url:"assets/js/v-d8d70e1a.439e3167.js",revision:null},{url:"assets/js/v-de155fda.43966d5e.js",revision:null},{url:"assets/js/v-de867450.b0d9462f.js",revision:null},{url:"assets/js/v-e4322366.bc7305ea.js",revision:null},{url:"assets/js/v-e565bdda.c83fcea7.js",revision:null},{url:"assets/js/v-e64f5648.9a62e050.js",revision:null},{url:"assets/js/v-ee77801a.ba727084.js",revision:null},{url:"assets/js/v-eff96fe2.5861dab0.js",revision:null},{url:"assets/js/v-f3ed9e5a.4b073828.js",revision:null},{url:"assets/js/v-f4351e9e.be086a43.js",revision:null},{url:"assets/js/v-ffe3a066.249d1831.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"407b0f7d1af212d93599743b99f0a335"},{url:"en/advanced/faq.html",revision:"4bf0dbb69ab72e24842850d893244a04"},{url:"en/advanced/intro.html",revision:"376eef464b59383ea8f8254a7b389ac6"},{url:"en/advanced/why.html",revision:"08fe3c817f5e61a82377210d53aab4de"},{url:"en/guide/client/avatar.html",revision:"8e40177d85255e47b07104473174b1b6"},{url:"en/guide/client/count.html",revision:"c8afc63f67d4d075ade6a866fd3a2700"},{url:"en/guide/client/emoji.html",revision:"e3b226d81e97d21beb605da10b3aa293"},{url:"en/guide/client/i18n.html",revision:"13dc82e7ce70d0b7e9beb390128b2ddd"},{url:"en/guide/client/import.html",revision:"8b94ff31c5bc2aa0bb215ce4005dfd46"},{url:"en/guide/client/intro.html",revision:"4046b06505f9dd3f73421a0353aae513"},{url:"en/guide/client/recentcomment.html",revision:"806c201b9140a09563ee9a2b97ecc96f"},{url:"en/guide/client/spa.html",revision:"343551e6f716e299e39cb4030e70a483"},{url:"en/guide/client/style.html",revision:"68c208f470480cad52276d9ea5551526"},{url:"en/guide/client/syntax.html",revision:"aa3784c2f6d4e96550b48e9515514015"},{url:"en/guide/client/widget/index.html",revision:"9939ccf31351b1c1fd969223495e44d9"},{url:"en/guide/client/widget/recent-comment.html",revision:"e73931e0b893ef178de87ddf1cc15b48"},{url:"en/guide/get-started.html",revision:"0f8398d2456077ae261562270b63ef71"},{url:"en/guide/server/databases.html",revision:"fad66f71c7dbac247a40de1e4a65321e"},{url:"en/guide/server/intro.html",revision:"1ddaf833f29082262a17f6c111d72689"},{url:"en/guide/server/notification.html",revision:"01117dfe60601652226909ff6a43b34a"},{url:"en/guide/server/socials.html",revision:"4ede57d0ee6907e4ad1209d9fb8527a8"},{url:"en/guide/server/vps-deploy.html",revision:"394649be98b5cccf87124603cc10e441"},{url:"en/index.html",revision:"05c4a12c52673d941191af39977430d3"},{url:"en/migration/client.html",revision:"9d13675bdcd859a8d86c8dfff53fb8bc"},{url:"en/migration/tool.html",revision:"a5faaf97c72a547765594f3a0d4937f9"},{url:"en/migration/valine.html",revision:"895c0f83cf074b77db384dcb81d0515a"},{url:"en/reference/api.html",revision:"3ae4ec0d3dce86cb07ebbb83e81bd4f6"},{url:"en/reference/client.html",revision:"6ddf7f2a2e421840711f65f7b67d488c"},{url:"en/reference/contribution.html",revision:"2c021f2c424f5d690c79553a144d6270"},{url:"en/reference/instance.html",revision:"c0c6211f29fd985e12d1240c9def26dc"},{url:"en/reference/server.html",revision:"57ad2511af951ee23487798acea06789"},{url:"guide/client/avatar.html",revision:"c7c0e6b211945cf06ea299eec9ac5cf9"},{url:"guide/client/count.html",revision:"523def8cee734807357d62ba7e63ecca"},{url:"guide/client/emoji.html",revision:"45748745365b3754d8ccd0ebaf60945a"},{url:"guide/client/i18n.html",revision:"464102b242f0c67b3493b5db88eba093"},{url:"guide/client/import.html",revision:"a745b0ecce5068d59ebe674f4d924c41"},{url:"guide/client/intro.html",revision:"d031165b4af813df1a37f9e9e920d5fd"},{url:"guide/client/spa.html",revision:"d4302dc9b7c99c9044a70a8610c4fe99"},{url:"guide/client/style.html",revision:"2c9c3741fde75892ff2b393ff954f110"},{url:"guide/client/syntax.html",revision:"db12292eec5ff895b1d043a7ee04d44c"},{url:"guide/client/widget/index.html",revision:"362a8d8738e2919afadf410755baeda9"},{url:"guide/client/widget/recent-comment.html",revision:"3744b16157401fdb6f5e5a5f78f6494c"},{url:"guide/get-started.html",revision:"6396fc91298ff2367398219218530854"},{url:"guide/server/cloudbase.html",revision:"60d116aac6aa3dccf539474984bf36b4"},{url:"guide/server/databases.html",revision:"338eeb544a68a4a03df134451ed15c0f"},{url:"guide/server/intro.html",revision:"32bd7884bc431d6af150ad6c4d24b7b1"},{url:"guide/server/notification.html",revision:"f248076785353d33eceb92ecb3325fce"},{url:"guide/server/socials.html",revision:"e3e6623aa953d878f907bffb3606a083"},{url:"guide/server/vps-deploy.html",revision:"827b0e6e19d8d6d2dd28d95fe67ad21d"},{url:"index.html",revision:"3154c0c513819af0dc530ff1b1b00fa4"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"af64e8e7e9d73aebb9d65f9ec47b17b8"},{url:"migration/tool.html",revision:"ec58cc2d156c9c45e7eb985e1dcb11d5"},{url:"migration/valine.html",revision:"5ca56ba8adb9cb3b89a306e018f5a6c5"},{url:"reference/api.html",revision:"01a7b1be1c627eaa63fb2be44edd6b5f"},{url:"reference/client.html",revision:"6e52d27f0054e352f9f8f5e52c905d97"},{url:"reference/contribution.html",revision:"cf764684b8da68c57b89851e5614b50b"},{url:"reference/instance.html",revision:"071c32fdfc5fb21d27f44e2f70385114"},{url:"reference/server.html",revision:"aa890e706c9054da0c772cb50b007212"}],{})}));
