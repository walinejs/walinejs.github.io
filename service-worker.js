if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"06983efc093ecea3862a4883c9943c6d"},{url:"advanced/ecosystem.html",revision:"7965fb77669fe20749593a5943adeaa4"},{url:"advanced/faq.html",revision:"49447fc492785d88dd440242c8798f35"},{url:"advanced/intro.html",revision:"ab606b491fc555f3e04dafecf28e5d8f"},{url:"advanced/why.html",revision:"997eceacd1d35e6553932be59a63fbf2"},{url:"assets/css/959.styles.383bf8ad.css",revision:null},{url:"assets/css/styles.eeddaf25.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/278.9bfcc17a.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.84d90718.js",revision:null},{url:"assets/js/696.b511c7aa.js",revision:null},{url:"assets/js/7769.9464c4d0.js",revision:null},{url:"assets/js/app.8d869227.js",revision:null},{url:"assets/js/runtime~app.39b2871d.js",revision:null},{url:"assets/js/v-057c9824.f36f05f1.js",revision:null},{url:"assets/js/v-058f99fc.71a5bcdd.js",revision:null},{url:"assets/js/v-0b556720.6b496cff.js",revision:null},{url:"assets/js/v-1b1feb10.e905e466.js",revision:null},{url:"assets/js/v-1bf8da39.d61734a8.js",revision:null},{url:"assets/js/v-271aae61.d8f77c4a.js",revision:null},{url:"assets/js/v-27d47a79.3ac2248d.js",revision:null},{url:"assets/js/v-2812bd79.6d0f7bb1.js",revision:null},{url:"assets/js/v-2945f13a.aaa2be4a.js",revision:null},{url:"assets/js/v-2d0a870d.1579b2d2.js",revision:null},{url:"assets/js/v-2fad59ab.d2aa0188.js",revision:null},{url:"assets/js/v-356c0ac4.d20e85b3.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.06ee3f9d.js",revision:null},{url:"assets/js/v-396f59cd.b7be295e.js",revision:null},{url:"assets/js/v-40608902.da534cae.js",revision:null},{url:"assets/js/v-434e7c8c.9807de4e.js",revision:null},{url:"assets/js/v-45360123.77696105.js",revision:null},{url:"assets/js/v-4819d2f6.9cc0270a.js",revision:null},{url:"assets/js/v-487079c5.075d100a.js",revision:null},{url:"assets/js/v-4dec5b45.ad74b447.js",revision:null},{url:"assets/js/v-4f0168b2.3053928b.js",revision:null},{url:"assets/js/v-4fe1dc58.a1b0248e.js",revision:null},{url:"assets/js/v-50cb2a87.81c904fe.js",revision:null},{url:"assets/js/v-514365f1.20469e66.js",revision:null},{url:"assets/js/v-533c70f7.66dce22a.js",revision:null},{url:"assets/js/v-583b3d0d.0c5d14c6.js",revision:null},{url:"assets/js/v-5ceabafb.3f893f76.js",revision:null},{url:"assets/js/v-61377328.17f9fc06.js",revision:null},{url:"assets/js/v-668d9be0.e5f18a94.js",revision:null},{url:"assets/js/v-66cc4fee.3e592c3a.js",revision:null},{url:"assets/js/v-67a66f17.bb4429f0.js",revision:null},{url:"assets/js/v-6b4d4a3d.ae1a9f67.js",revision:null},{url:"assets/js/v-6d93dbb2.5e1892f3.js",revision:null},{url:"assets/js/v-704e8e37.de49ee3a.js",revision:null},{url:"assets/js/v-737ff092.a9ad0b33.js",revision:null},{url:"assets/js/v-743ff88e.e32f72f5.js",revision:null},{url:"assets/js/v-74a28670.3bcc4ba1.js",revision:null},{url:"assets/js/v-756ec2fc.05524655.js",revision:null},{url:"assets/js/v-7871496c.4f726396.js",revision:null},{url:"assets/js/v-7898f959.30316495.js",revision:null},{url:"assets/js/v-7af875a7.8895f145.js",revision:null},{url:"assets/js/v-81cb4dce.daa263e7.js",revision:null},{url:"assets/js/v-82949f3e.420793e7.js",revision:null},{url:"assets/js/v-8daa1a0e.6f0041ee.js",revision:null},{url:"assets/js/v-8dba60f6.44cfe4cc.js",revision:null},{url:"assets/js/v-a1a49808.14d68b16.js",revision:null},{url:"assets/js/v-a7534f04.5c9c06be.js",revision:null},{url:"assets/js/v-aecc6e00.5723ed23.js",revision:null},{url:"assets/js/v-b032db80.fa7b306d.js",revision:null},{url:"assets/js/v-b7dac982.e1a10261.js",revision:null},{url:"assets/js/v-c9146c5e.5e545167.js",revision:null},{url:"assets/js/v-d8d70e1a.62304785.js",revision:null},{url:"assets/js/v-de155fda.ab6b703b.js",revision:null},{url:"assets/js/v-de867450.05d3e244.js",revision:null},{url:"assets/js/v-e4322366.270eb72c.js",revision:null},{url:"assets/js/v-e565bdda.077c0e03.js",revision:null},{url:"assets/js/v-e64f5648.1c693381.js",revision:null},{url:"assets/js/v-ee77801a.4d11aa66.js",revision:null},{url:"assets/js/v-eff96fe2.9b3c3277.js",revision:null},{url:"assets/js/v-f3ed9e5a.439c7f6f.js",revision:null},{url:"assets/js/v-f4351e9e.3bc3b08e.js",revision:null},{url:"assets/js/v-ffe3a066.8e3a6217.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"9555a5d4f4bb8bf9c2bc8f3087d9738f"},{url:"en/advanced/faq.html",revision:"c12c9e82e02278741d20f645a7be8f0c"},{url:"en/advanced/intro.html",revision:"385fc350d0bddb2b58b8cad9a114b2d7"},{url:"en/advanced/why.html",revision:"ce525678fa44515bc88a4ecdab245c96"},{url:"en/guide/client/avatar.html",revision:"4ce333f59fc434f231aaa0bc211344b7"},{url:"en/guide/client/count.html",revision:"aae301e87114572e9ecd0289d11977d8"},{url:"en/guide/client/emoji.html",revision:"7cc6d256061a11d73dae633c02cb3405"},{url:"en/guide/client/i18n.html",revision:"4ac81851cba3a7c1223886b0c1da68f5"},{url:"en/guide/client/import.html",revision:"7375279a8090bca295889113939af346"},{url:"en/guide/client/intro.html",revision:"e7da003e9fd983737b59b20d3872ac4a"},{url:"en/guide/client/recentcomment.html",revision:"57c43224fe034acfeb00a8a78cefe8e9"},{url:"en/guide/client/spa.html",revision:"961a2dd06b52f929d8f019cfa485bb77"},{url:"en/guide/client/style.html",revision:"6b975ff5d303de9a0a7867af36e111c3"},{url:"en/guide/client/syntax.html",revision:"5be2a07c3ece5025b452573e3b73e95f"},{url:"en/guide/client/widget/index.html",revision:"eeb8916edec1d1ce5378b9a4e1ddc8b9"},{url:"en/guide/client/widget/recent-comment.html",revision:"a038e135844308261f367244858098f1"},{url:"en/guide/get-started.html",revision:"61f7d55a86aa48ad16fba59b00a1dd5a"},{url:"en/guide/server/databases.html",revision:"2c9e6a0dcc6b9efa2025d386e4347376"},{url:"en/guide/server/intro.html",revision:"3e3ea047f6c1faf3dbce2cfdb89ab9e4"},{url:"en/guide/server/notification.html",revision:"c711cd08e5ae23a71d226f40868ed350"},{url:"en/guide/server/socials.html",revision:"2ea9f10fcefc8cf1e237b9979d75ccb7"},{url:"en/guide/server/vps-deploy.html",revision:"5a74d63afa71ba43d4337732848fbf32"},{url:"en/index.html",revision:"e36958d4bb6a7e13ec1901f53f395fa2"},{url:"en/migration/client.html",revision:"8238b92619bcea81df28a6b6004f6bee"},{url:"en/migration/tool.html",revision:"ea94a03286b18ba82c231d8b5116679f"},{url:"en/migration/valine.html",revision:"18699587f7dd0e31b5184ac6752e9009"},{url:"en/reference/api.html",revision:"ee621647350a7cbc4c2f008b74d08bd0"},{url:"en/reference/client.html",revision:"61bad91d1b872033510496430d89d429"},{url:"en/reference/contribution.html",revision:"8df8625e6aa07621877f751b33c883d2"},{url:"en/reference/instance.html",revision:"32ac39bbbcd068f9e70a8dbde18245e6"},{url:"en/reference/server.html",revision:"c51a5d7424ece82590d1b46cd4fcd9ad"},{url:"guide/client/avatar.html",revision:"328c054b83a396a795e83992525806b6"},{url:"guide/client/count.html",revision:"57229567100e0fa7bec0d76ef7c5b648"},{url:"guide/client/emoji.html",revision:"e09f9531e93fd2c10b7a73c279abc109"},{url:"guide/client/i18n.html",revision:"b3c29ac8ff2f5ebfd8dd4d2d1e4a8193"},{url:"guide/client/import.html",revision:"4173e922a544179ff0e5d6c997dda8c5"},{url:"guide/client/intro.html",revision:"2a538966589cf49c318e287135707489"},{url:"guide/client/spa.html",revision:"fd3aba960bb3fda019375e7b42cd98eb"},{url:"guide/client/style.html",revision:"40fe278b8106d362903d9079c7a91c62"},{url:"guide/client/syntax.html",revision:"a011f4d3ea47c3f390735352dda78e39"},{url:"guide/client/widget/index.html",revision:"548ca8694c79dbc664fb507cc85581b6"},{url:"guide/client/widget/recent-comment.html",revision:"7e8d9c1761a45de81a39a2b9d7540470"},{url:"guide/get-started.html",revision:"d8e7e3efc92081d22b2256142bc87025"},{url:"guide/server/cloudbase.html",revision:"b940ca3ec22536caf8da05177b3f9c74"},{url:"guide/server/databases.html",revision:"36cfcc328f743af25eae6a267ef9c2e5"},{url:"guide/server/intro.html",revision:"6b5b3ea6d5f32de6548bd5fb2d189e7c"},{url:"guide/server/notification.html",revision:"37157a89c9b5e7fc2ae4bbebecdbfd91"},{url:"guide/server/socials.html",revision:"0520002a2ed3b454d2ed859d80a3c06f"},{url:"guide/server/vps-deploy.html",revision:"3a6a3863e9d0a8327b54791b698d209b"},{url:"index.html",revision:"7a27416e6d921a26d4bcc1915f519b23"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"fbfc2a79f8f0794cb8c6cf87619705af"},{url:"migration/tool.html",revision:"5fab5f5fcd89ef7d259ba693637445f2"},{url:"migration/valine.html",revision:"0f70463cc9181e70a3fecd575d762724"},{url:"reference/api.html",revision:"752a56812239357f574d5b5dd73b5b09"},{url:"reference/client.html",revision:"1feaadc9fda4066667a919d334970425"},{url:"reference/contribution.html",revision:"960d28bae9d31d6044517ce2a3265d05"},{url:"reference/instance.html",revision:"03b27d064528f7651ab357c4ff77abc9"},{url:"reference/server.html",revision:"e4c5ac3409d35d0ff6584baa2a68e8d9"}],{})}));
