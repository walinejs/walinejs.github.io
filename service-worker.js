if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"6e49454f3791ecf7ce678736abff4ead"},{url:"advanced/ecosystem.html",revision:"d395238363f8272d7695d99067e4c772"},{url:"advanced/faq.html",revision:"b42020fb4f3fd4348416880a4f12f902"},{url:"advanced/intro.html",revision:"ae56de638138b37b00d33539a1141af3"},{url:"advanced/why.html",revision:"51e5bf845c150f38e4003b834a909fb1"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.190d6076.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.359166a6.js",revision:null},{url:"assets/js/5556.505bb6a1.js",revision:null},{url:"assets/js/801.c19c4dc0.js",revision:null},{url:"assets/js/9230.b56a5c5e.js",revision:null},{url:"assets/js/app.fe8e99fd.js",revision:null},{url:"assets/js/runtime~app.a138d48f.js",revision:null},{url:"assets/js/v-057c9824.4181865e.js",revision:null},{url:"assets/js/v-058f99fc.dcd62b43.js",revision:null},{url:"assets/js/v-0b556720.00716c0d.js",revision:null},{url:"assets/js/v-1b1feb10.36dc9cb8.js",revision:null},{url:"assets/js/v-1bf8da39.6b875928.js",revision:null},{url:"assets/js/v-271aae61.80309e8f.js",revision:null},{url:"assets/js/v-27d47a79.6f1ad6ae.js",revision:null},{url:"assets/js/v-2812bd79.a2928e52.js",revision:null},{url:"assets/js/v-2945f13a.19cb61b8.js",revision:null},{url:"assets/js/v-2d0a870d.21badf57.js",revision:null},{url:"assets/js/v-2fad59ab.219874fa.js",revision:null},{url:"assets/js/v-356c0ac4.5a98f84b.js",revision:null},{url:"assets/js/v-3706649a.809018b0.js",revision:null},{url:"assets/js/v-38007666.2760a3e6.js",revision:null},{url:"assets/js/v-396f59cd.045683e0.js",revision:null},{url:"assets/js/v-40608902.0d134762.js",revision:null},{url:"assets/js/v-434e7c8c.ed992ce8.js",revision:null},{url:"assets/js/v-45360123.1767ac4a.js",revision:null},{url:"assets/js/v-4819d2f6.8fdf93cd.js",revision:null},{url:"assets/js/v-487079c5.c961bc5b.js",revision:null},{url:"assets/js/v-4dec5b45.d8442791.js",revision:null},{url:"assets/js/v-4f0168b2.8598ec4c.js",revision:null},{url:"assets/js/v-4fe1dc58.6d347ede.js",revision:null},{url:"assets/js/v-50cb2a87.78222299.js",revision:null},{url:"assets/js/v-514365f1.7024c017.js",revision:null},{url:"assets/js/v-533c70f7.ce8dfd79.js",revision:null},{url:"assets/js/v-583b3d0d.37235f80.js",revision:null},{url:"assets/js/v-5ceabafb.7c329892.js",revision:null},{url:"assets/js/v-61377328.966286e8.js",revision:null},{url:"assets/js/v-668d9be0.c9898ef2.js",revision:null},{url:"assets/js/v-66cc4fee.96837608.js",revision:null},{url:"assets/js/v-67a66f17.9c4a4c46.js",revision:null},{url:"assets/js/v-6b4d4a3d.a475443d.js",revision:null},{url:"assets/js/v-6d93dbb2.f3ba0061.js",revision:null},{url:"assets/js/v-704e8e37.1b3d00d3.js",revision:null},{url:"assets/js/v-737ff092.b56cfa77.js",revision:null},{url:"assets/js/v-743ff88e.33faaa03.js",revision:null},{url:"assets/js/v-74a28670.28b69187.js",revision:null},{url:"assets/js/v-756ec2fc.63d810b9.js",revision:null},{url:"assets/js/v-7871496c.6456259c.js",revision:null},{url:"assets/js/v-7898f959.ce33f28a.js",revision:null},{url:"assets/js/v-7af875a7.80b2a8a6.js",revision:null},{url:"assets/js/v-81cb4dce.7761ef7d.js",revision:null},{url:"assets/js/v-82949f3e.292dfd26.js",revision:null},{url:"assets/js/v-8daa1a0e.1f6bb2e3.js",revision:null},{url:"assets/js/v-8dba60f6.f1f1683c.js",revision:null},{url:"assets/js/v-a1a49808.bd9e6590.js",revision:null},{url:"assets/js/v-a7534f04.1b62eca6.js",revision:null},{url:"assets/js/v-aecc6e00.cf575fa4.js",revision:null},{url:"assets/js/v-b032db80.4da52570.js",revision:null},{url:"assets/js/v-b7dac982.36915880.js",revision:null},{url:"assets/js/v-c9146c5e.6e5ef2db.js",revision:null},{url:"assets/js/v-d8d70e1a.494bad8f.js",revision:null},{url:"assets/js/v-de155fda.9e5d333f.js",revision:null},{url:"assets/js/v-de867450.e0836720.js",revision:null},{url:"assets/js/v-e4322366.02c2f386.js",revision:null},{url:"assets/js/v-e565bdda.52e7bb6c.js",revision:null},{url:"assets/js/v-e64f5648.267e4f3b.js",revision:null},{url:"assets/js/v-ee77801a.0905fb23.js",revision:null},{url:"assets/js/v-eff96fe2.a1aafa79.js",revision:null},{url:"assets/js/v-f3ed9e5a.9e3cd4ed.js",revision:null},{url:"assets/js/v-f4351e9e.87304b50.js",revision:null},{url:"assets/js/v-ffe3a066.1f9951be.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"30a2134ceaeac20d02c74692c920d950"},{url:"en/advanced/faq.html",revision:"321b17033510e4e0fd95ba6ec94a23a0"},{url:"en/advanced/intro.html",revision:"468e61c6d1451d611810c88176b194f0"},{url:"en/advanced/why.html",revision:"d8313a815d5b73336c409a82bc10c77e"},{url:"en/guide/client/avatar.html",revision:"68f14215b8311bea6da9d3f34c6704c5"},{url:"en/guide/client/count.html",revision:"3e4f86a26731004d18f16b358884fec8"},{url:"en/guide/client/emoji.html",revision:"0348aa8a3bae1a50fd388f8563fc8f86"},{url:"en/guide/client/i18n.html",revision:"9b69e31d8a9ebb162b70790a2a8f1ca3"},{url:"en/guide/client/import.html",revision:"7f40e06533195d5de3791b77eed60ab2"},{url:"en/guide/client/intro.html",revision:"0291a6587bfd6d821c288ad7adeff048"},{url:"en/guide/client/recentcomment.html",revision:"c1681d035ac9b0b51ef4730a8c573795"},{url:"en/guide/client/spa.html",revision:"3785b97460b6fff59ac5e6733aaecb69"},{url:"en/guide/client/style.html",revision:"05d9b69e17a292d570b7cfe6c0c1c092"},{url:"en/guide/client/syntax.html",revision:"00eedf618b2243f25110c910f3125546"},{url:"en/guide/client/widget/index.html",revision:"be0942f481b140e4b546374f2059a291"},{url:"en/guide/client/widget/recent-comment.html",revision:"cf0feb8f10dfb21b4c907a6fbc7ea05f"},{url:"en/guide/get-started.html",revision:"fad9f074c03746176ef1469cbd23e81d"},{url:"en/guide/server/databases.html",revision:"c2ed56771bc3863b4f7aa5c779860ffa"},{url:"en/guide/server/intro.html",revision:"4efa267575dddf2e566a40641ad0c2c6"},{url:"en/guide/server/notification.html",revision:"89e563eb7f1cdceb9c8de4345d448596"},{url:"en/guide/server/socials.html",revision:"7e73af28909c630948fad39ebf19f8b6"},{url:"en/guide/server/vps-deploy.html",revision:"d2f80e3f0c616f93da6f046fbbfaae4d"},{url:"en/index.html",revision:"fadc5f0670b0973e67f97e75d6bd59b0"},{url:"en/migration/client.html",revision:"2d925480dbdd3904deb46f95f498f649"},{url:"en/migration/tool.html",revision:"ca5e8d1394e6ff08dd6c2d873100faf1"},{url:"en/migration/valine.html",revision:"05fd7bb840d324aed6ebb6392e7d7628"},{url:"en/reference/api.html",revision:"4dae0c6af7e3415d4d68ab7e68780981"},{url:"en/reference/client.html",revision:"bc04e8bf80e6c01a571af05a9937099a"},{url:"en/reference/contribution.html",revision:"f94ec2c4a149d506762378b7da2c5e2d"},{url:"en/reference/instance.html",revision:"80b7f7c2c4eeefee347fd560ca524b59"},{url:"en/reference/server.html",revision:"69632b2161dd07280f4f092424d490b4"},{url:"guide/client/avatar.html",revision:"e1c510f83e2d5b136c3e36900a408e11"},{url:"guide/client/count.html",revision:"740e844830225f7e4231d4603d0d237f"},{url:"guide/client/emoji.html",revision:"77231dcaf1cb23d7a7c14d5109575787"},{url:"guide/client/i18n.html",revision:"70f8bca69a5c0526ded6684b43e71fd3"},{url:"guide/client/import.html",revision:"d4ff8540e79ff2ec21099e3b68e3f4cf"},{url:"guide/client/intro.html",revision:"7bcf0df72f37fd3f3e7e384a74883dd0"},{url:"guide/client/spa.html",revision:"d2a9b9a936f8ad28dd95974ba6a101e2"},{url:"guide/client/style.html",revision:"05249b3bc6d763e4a0ba91602ca6529d"},{url:"guide/client/syntax.html",revision:"b06a5829e3d57dccc0aee428fa2277ec"},{url:"guide/client/widget/index.html",revision:"869a3a7ae0fbe93a671eeaf6a270f517"},{url:"guide/client/widget/recent-comment.html",revision:"bc19b066e7b4ebed9754c83d9685612c"},{url:"guide/get-started.html",revision:"6e9d1d399a5fbda64fd031a1faffa49c"},{url:"guide/server/cloudbase.html",revision:"784dfe317ca33ef6f9d42c0f723fe3cf"},{url:"guide/server/databases.html",revision:"ecb1ad4fd2b70fea6c6d922e3933d5ac"},{url:"guide/server/intro.html",revision:"fc2abcfa0f00d5dbcd048edef2268648"},{url:"guide/server/notification.html",revision:"6b5a8d5b70ae4cde1c56f37c480d9206"},{url:"guide/server/socials.html",revision:"c7044744228a7e1c64ec6407075b6d54"},{url:"guide/server/vps-deploy.html",revision:"7fbe5ce51580feaed3bb93b5d662efb2"},{url:"index.html",revision:"2e7e1298d082c7e51f6cd344c2ada621"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"172205ac3cc5465fdc8a722471884f60"},{url:"migration/tool.html",revision:"de4e385b685d3400ccd64044861f22fb"},{url:"migration/valine.html",revision:"8e3c0900aac64060ff4acb7887a69bf3"},{url:"reference/api.html",revision:"2477fb233f657dceb325e5d113268fd9"},{url:"reference/client.html",revision:"a323949587ddf1d69531cf4220fd1349"},{url:"reference/contribution.html",revision:"cdb3836a5cab5484acd53fc831410460"},{url:"reference/instance.html",revision:"269f12c86ed40a59a40d92759a25e77c"},{url:"reference/server.html",revision:"08cc1b3591b79d164b5ced9d6a53a124"}],{})}));
