if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"16cf04f91b00834f281a908664f679b6"},{url:"advanced/ecosystem.html",revision:"6d4b0e65368fc4d6d3b1e8701c440bfc"},{url:"advanced/faq.html",revision:"683558d424fbbe0d59902692fbbe7c0f"},{url:"advanced/intro.html",revision:"19bdb4a762f9b8176853a4832c5d464a"},{url:"advanced/why.html",revision:"4b6a9d568d58fe4f6df7b3424d35ac01"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.7fb0c1fe.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.3a8c6bc1.js",revision:null},{url:"assets/js/5556.e525c058.js",revision:null},{url:"assets/js/801.21c0f669.js",revision:null},{url:"assets/js/9230.65b07c8d.js",revision:null},{url:"assets/js/app.f87e3c05.js",revision:null},{url:"assets/js/runtime~app.fb228505.js",revision:null},{url:"assets/js/v-057c9824.1c5b5733.js",revision:null},{url:"assets/js/v-058f99fc.e3c859a4.js",revision:null},{url:"assets/js/v-0b556720.367a83e6.js",revision:null},{url:"assets/js/v-1b1feb10.fd46f27d.js",revision:null},{url:"assets/js/v-1bf8da39.e0636a8d.js",revision:null},{url:"assets/js/v-271aae61.ec3db37e.js",revision:null},{url:"assets/js/v-27d47a79.9c899eec.js",revision:null},{url:"assets/js/v-2812bd79.f5df6384.js",revision:null},{url:"assets/js/v-2945f13a.760a197f.js",revision:null},{url:"assets/js/v-2d0a870d.f4da6b27.js",revision:null},{url:"assets/js/v-2fad59ab.c7dc8807.js",revision:null},{url:"assets/js/v-356c0ac4.76a19971.js",revision:null},{url:"assets/js/v-3706649a.cc3cb2fb.js",revision:null},{url:"assets/js/v-38007666.b9df679e.js",revision:null},{url:"assets/js/v-396f59cd.6577958f.js",revision:null},{url:"assets/js/v-40608902.3ecbd8ba.js",revision:null},{url:"assets/js/v-434e7c8c.bdb2a23e.js",revision:null},{url:"assets/js/v-45360123.fd3f416c.js",revision:null},{url:"assets/js/v-4819d2f6.ebf5cba4.js",revision:null},{url:"assets/js/v-487079c5.e73e022d.js",revision:null},{url:"assets/js/v-4dec5b45.da8c7e4a.js",revision:null},{url:"assets/js/v-4f0168b2.fac1799a.js",revision:null},{url:"assets/js/v-4fe1dc58.4c5bf026.js",revision:null},{url:"assets/js/v-50cb2a87.fd9476f9.js",revision:null},{url:"assets/js/v-514365f1.a0d7294c.js",revision:null},{url:"assets/js/v-533c70f7.eed2752d.js",revision:null},{url:"assets/js/v-583b3d0d.fcbb5e69.js",revision:null},{url:"assets/js/v-5ceabafb.c02d6ae2.js",revision:null},{url:"assets/js/v-61377328.e53d3fb6.js",revision:null},{url:"assets/js/v-668d9be0.a06cac4e.js",revision:null},{url:"assets/js/v-66cc4fee.03b83ee6.js",revision:null},{url:"assets/js/v-67a66f17.b7ff5706.js",revision:null},{url:"assets/js/v-6b4d4a3d.f5f57db4.js",revision:null},{url:"assets/js/v-6d93dbb2.fa7c8fbe.js",revision:null},{url:"assets/js/v-704e8e37.14d6ef8d.js",revision:null},{url:"assets/js/v-737ff092.7dacca32.js",revision:null},{url:"assets/js/v-743ff88e.13029228.js",revision:null},{url:"assets/js/v-74a28670.201c5f27.js",revision:null},{url:"assets/js/v-756ec2fc.2624b720.js",revision:null},{url:"assets/js/v-7871496c.501fd3fc.js",revision:null},{url:"assets/js/v-7898f959.f26eb46a.js",revision:null},{url:"assets/js/v-7af875a7.f89d1320.js",revision:null},{url:"assets/js/v-81cb4dce.cd2da3d1.js",revision:null},{url:"assets/js/v-82949f3e.85f93015.js",revision:null},{url:"assets/js/v-8daa1a0e.af10e40e.js",revision:null},{url:"assets/js/v-8dba60f6.f40d95d5.js",revision:null},{url:"assets/js/v-a1a49808.5fc65c0f.js",revision:null},{url:"assets/js/v-a7534f04.52adf82e.js",revision:null},{url:"assets/js/v-aecc6e00.9f089f15.js",revision:null},{url:"assets/js/v-b032db80.9a256977.js",revision:null},{url:"assets/js/v-b7dac982.add208d8.js",revision:null},{url:"assets/js/v-c9146c5e.d65871dc.js",revision:null},{url:"assets/js/v-d8d70e1a.646174f6.js",revision:null},{url:"assets/js/v-de155fda.48a7c957.js",revision:null},{url:"assets/js/v-de867450.860e6697.js",revision:null},{url:"assets/js/v-e4322366.35905fd7.js",revision:null},{url:"assets/js/v-e565bdda.a49284b8.js",revision:null},{url:"assets/js/v-e64f5648.1b6ded9a.js",revision:null},{url:"assets/js/v-ee77801a.2514a0bb.js",revision:null},{url:"assets/js/v-eff96fe2.2477c7b9.js",revision:null},{url:"assets/js/v-f3ed9e5a.34707bed.js",revision:null},{url:"assets/js/v-f4351e9e.e65e49c5.js",revision:null},{url:"assets/js/v-ffe3a066.4e8f663a.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"835519f5ed1d80e1139e984c896d6a8b"},{url:"en/advanced/faq.html",revision:"ad60386effca1eb820d0f46c6e4766cd"},{url:"en/advanced/intro.html",revision:"5ae68999b02d22b018f34fbcee1a3ff9"},{url:"en/advanced/why.html",revision:"e8ce882c1f3e091168c89280680edf8e"},{url:"en/guide/client/avatar.html",revision:"032e28355b9ea0fa9d263b7cedefa869"},{url:"en/guide/client/count.html",revision:"b0b2082a373ec7322a247fb2d120945d"},{url:"en/guide/client/emoji.html",revision:"9b1f6c902afcb76dbc7ba6356d7791d7"},{url:"en/guide/client/i18n.html",revision:"c10c46de370b3bc7b0be8c1144e7dbe9"},{url:"en/guide/client/import.html",revision:"cad30d07b7b9d5f34365ff4576b2055c"},{url:"en/guide/client/intro.html",revision:"5ecb7aa254f79092cf6fafedef26a5f5"},{url:"en/guide/client/recentcomment.html",revision:"eafbf17f05fca09d8dca2ad9cb0c0459"},{url:"en/guide/client/spa.html",revision:"48671555e44e2a13244282d56b66f286"},{url:"en/guide/client/style.html",revision:"514770368dc5c19cab89b06bc9f90fb0"},{url:"en/guide/client/syntax.html",revision:"049f6a7b91446dd068353aa2a29245a8"},{url:"en/guide/client/widget/index.html",revision:"d2bf0eab2f50164d41cdc07a579e7c88"},{url:"en/guide/client/widget/recent-comment.html",revision:"c43d3ab4fd275c27b197e7fbe177c836"},{url:"en/guide/get-started.html",revision:"982ad5f4c4ace7d551b4cfa15caec4d4"},{url:"en/guide/server/databases.html",revision:"955930a84dc9e93a899e7154d8981523"},{url:"en/guide/server/intro.html",revision:"a81715030a7a4885c71cba9bc5cd2a5b"},{url:"en/guide/server/notification.html",revision:"37caf6e1f39f3204bf8cfc743300aacf"},{url:"en/guide/server/socials.html",revision:"10b66e25a2f7222fb426e77416bf016e"},{url:"en/guide/server/vps-deploy.html",revision:"f420d6e7e187d577b1de5da7a849d11c"},{url:"en/index.html",revision:"218c33b769806e14853db9a484dbd6b8"},{url:"en/migration/client.html",revision:"9ef14c1c1d582b6bc2fe112a0c70ff58"},{url:"en/migration/tool.html",revision:"3f16ea25d27f481589f60734897fae64"},{url:"en/migration/valine.html",revision:"ee81f5827e6f0cbeafb2b6719cf898d8"},{url:"en/reference/api.html",revision:"74c81e2a7eb878845035603eaf14249e"},{url:"en/reference/client.html",revision:"ec83d5537eb0a1e28631d81fd01163f0"},{url:"en/reference/contribution.html",revision:"a1f995d23afc4c1f337670937ba4a659"},{url:"en/reference/instance.html",revision:"90d254eb36074066f85660af84de15d2"},{url:"en/reference/server.html",revision:"bc92719bc9a9a1d2765d468a563c46be"},{url:"guide/client/avatar.html",revision:"51ac4ba6b11193a7b152a38a096c51d5"},{url:"guide/client/count.html",revision:"5399dd73966cd9d48fc55d0854965219"},{url:"guide/client/emoji.html",revision:"28c07dd1e65c5d24b31d764779c8666a"},{url:"guide/client/i18n.html",revision:"dfd93c23bc92e053798b544dbc6388ab"},{url:"guide/client/import.html",revision:"2a4a039fc1d317f0406ffafa1f168d85"},{url:"guide/client/intro.html",revision:"149c64f27b10ea9e1bcfc719967fc24d"},{url:"guide/client/spa.html",revision:"48173c23d0864b93adf3047bfbd0599e"},{url:"guide/client/style.html",revision:"947be63db85bfef897a4ff836dff9096"},{url:"guide/client/syntax.html",revision:"14bb1fdbbe3e2c1d735bfefebfef4f83"},{url:"guide/client/widget/index.html",revision:"ec5c91ab71b65878cb1f01a5a62d8e90"},{url:"guide/client/widget/recent-comment.html",revision:"e9bcbb6bf7291146fbbacb28b1f87d1a"},{url:"guide/get-started.html",revision:"bac183f6d642a451404f64bf057d3ee2"},{url:"guide/server/cloudbase.html",revision:"366370343453373d1f4fac2ac41df967"},{url:"guide/server/databases.html",revision:"6c3c3c24c1c3048ce14e4e5f9eebdcf1"},{url:"guide/server/intro.html",revision:"677b06d35a9efbdab903d449a8c1adfa"},{url:"guide/server/notification.html",revision:"8159788dc11cfb0c9e4eb558372febb9"},{url:"guide/server/socials.html",revision:"aa6ce98304638edf1625faa2207c6194"},{url:"guide/server/vps-deploy.html",revision:"22c4c01ddf19f070aa0000fd1bfff6ed"},{url:"index.html",revision:"e131afeaafe6bc53f36752fb33b69b53"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"9895d0c240b1b432eb3862c702c3a02e"},{url:"migration/tool.html",revision:"0e9c5f2fe594d7d11062bec21ecdd83d"},{url:"migration/valine.html",revision:"932c717791506492a3116b9ce425c9ae"},{url:"reference/api.html",revision:"f890d52c0021e8d6cda0314dd4806bee"},{url:"reference/client.html",revision:"b3e3b3d2cde26522387adabc6dda524c"},{url:"reference/contribution.html",revision:"7b4d52dc001302a03884bffcfd27f6b9"},{url:"reference/instance.html",revision:"15f4d35db67629da5a7b4a25549759e1"},{url:"reference/server.html",revision:"00a21495386a6648f8087a1408274a0c"}],{})}));
