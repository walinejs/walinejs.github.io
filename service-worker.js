if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"48dc9705104a9a876edf49a9027806fb"},{url:"advanced/ecosystem.html",revision:"1cfdc78966011aec89833756a0779ac0"},{url:"advanced/faq.html",revision:"9b76b0d69aa4afc348a018be7b5719aa"},{url:"advanced/intro.html",revision:"db0dd189785f4c1501616d38c01f5325"},{url:"advanced/why.html",revision:"e336fb010ec75c7134ccdfdac2dfb85a"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.190d6076.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.359166a6.js",revision:null},{url:"assets/js/5556.fdd0b241.js",revision:null},{url:"assets/js/801.c19c4dc0.js",revision:null},{url:"assets/js/9230.b56a5c5e.js",revision:null},{url:"assets/js/app.447615ee.js",revision:null},{url:"assets/js/runtime~app.7bb24e45.js",revision:null},{url:"assets/js/v-057c9824.5d5f80e2.js",revision:null},{url:"assets/js/v-058f99fc.c65b7a61.js",revision:null},{url:"assets/js/v-0b556720.f5f7dc02.js",revision:null},{url:"assets/js/v-1b1feb10.74e6f77e.js",revision:null},{url:"assets/js/v-1bf8da39.be3ff131.js",revision:null},{url:"assets/js/v-271aae61.a3005fe9.js",revision:null},{url:"assets/js/v-27d47a79.110c27cf.js",revision:null},{url:"assets/js/v-2812bd79.280a6d18.js",revision:null},{url:"assets/js/v-2945f13a.b64448cf.js",revision:null},{url:"assets/js/v-2d0a870d.cdab0ac2.js",revision:null},{url:"assets/js/v-2fad59ab.02180bd7.js",revision:null},{url:"assets/js/v-356c0ac4.d71628c1.js",revision:null},{url:"assets/js/v-3706649a.809018b0.js",revision:null},{url:"assets/js/v-38007666.0a385eb1.js",revision:null},{url:"assets/js/v-396f59cd.d2070f3f.js",revision:null},{url:"assets/js/v-40608902.5376c0f3.js",revision:null},{url:"assets/js/v-434e7c8c.7248e12d.js",revision:null},{url:"assets/js/v-45360123.fe9d1aec.js",revision:null},{url:"assets/js/v-4819d2f6.84b9e375.js",revision:null},{url:"assets/js/v-487079c5.ad997ddc.js",revision:null},{url:"assets/js/v-4dec5b45.4d21e2d8.js",revision:null},{url:"assets/js/v-4f0168b2.97dee92f.js",revision:null},{url:"assets/js/v-4fe1dc58.66224e0b.js",revision:null},{url:"assets/js/v-50cb2a87.262a5e98.js",revision:null},{url:"assets/js/v-514365f1.2c084171.js",revision:null},{url:"assets/js/v-533c70f7.763b5302.js",revision:null},{url:"assets/js/v-583b3d0d.bdd78d83.js",revision:null},{url:"assets/js/v-5ceabafb.c81c4f1c.js",revision:null},{url:"assets/js/v-61377328.1448eb55.js",revision:null},{url:"assets/js/v-668d9be0.f89243ba.js",revision:null},{url:"assets/js/v-66cc4fee.5962babe.js",revision:null},{url:"assets/js/v-67a66f17.4aa2a55d.js",revision:null},{url:"assets/js/v-6b4d4a3d.0456405a.js",revision:null},{url:"assets/js/v-6d93dbb2.f9a4a1f2.js",revision:null},{url:"assets/js/v-704e8e37.8dd34ed1.js",revision:null},{url:"assets/js/v-737ff092.e3d8e16f.js",revision:null},{url:"assets/js/v-743ff88e.7dba4488.js",revision:null},{url:"assets/js/v-74a28670.88b07c22.js",revision:null},{url:"assets/js/v-756ec2fc.4a349bab.js",revision:null},{url:"assets/js/v-7871496c.394f3468.js",revision:null},{url:"assets/js/v-7898f959.eeecbc71.js",revision:null},{url:"assets/js/v-7af875a7.33c44b28.js",revision:null},{url:"assets/js/v-81cb4dce.42c43268.js",revision:null},{url:"assets/js/v-82949f3e.aa58c45a.js",revision:null},{url:"assets/js/v-8daa1a0e.77b0a7e8.js",revision:null},{url:"assets/js/v-8dba60f6.c4c3d323.js",revision:null},{url:"assets/js/v-a1a49808.9eb8d251.js",revision:null},{url:"assets/js/v-a7534f04.e73e1a45.js",revision:null},{url:"assets/js/v-aecc6e00.7f125577.js",revision:null},{url:"assets/js/v-b032db80.63959284.js",revision:null},{url:"assets/js/v-b7dac982.f5b9aac4.js",revision:null},{url:"assets/js/v-c9146c5e.10c112d5.js",revision:null},{url:"assets/js/v-d8d70e1a.802f8f1a.js",revision:null},{url:"assets/js/v-de155fda.82a93455.js",revision:null},{url:"assets/js/v-de867450.8ca1a42d.js",revision:null},{url:"assets/js/v-e4322366.2226a572.js",revision:null},{url:"assets/js/v-e565bdda.46a6f6bc.js",revision:null},{url:"assets/js/v-e64f5648.b2927de4.js",revision:null},{url:"assets/js/v-ee77801a.dd038ed0.js",revision:null},{url:"assets/js/v-eff96fe2.8c767bd9.js",revision:null},{url:"assets/js/v-f3ed9e5a.652c0a9b.js",revision:null},{url:"assets/js/v-f4351e9e.6207bd28.js",revision:null},{url:"assets/js/v-ffe3a066.70317ef1.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"31598f2edad298184b9c925dddd0f4f3"},{url:"en/advanced/faq.html",revision:"6543cdf2e64e442dbd6581426f8543fa"},{url:"en/advanced/intro.html",revision:"5e563049f2aa5cca0a245b1eb5b93ec0"},{url:"en/advanced/why.html",revision:"e4cd22d83bce4b2a93822f21964657c7"},{url:"en/guide/client/avatar.html",revision:"857a998b1bab7698573918bc5357cc32"},{url:"en/guide/client/count.html",revision:"c1617aa6926ea90e495489026971c1b8"},{url:"en/guide/client/emoji.html",revision:"b84bbb85d699919a454190e3a626ea1d"},{url:"en/guide/client/i18n.html",revision:"10dfa20afc4d276c7a9d6efeb6556ec0"},{url:"en/guide/client/import.html",revision:"1b37d480f74f8f3770c7d5e63c7472a7"},{url:"en/guide/client/intro.html",revision:"9b3b1c8a704ab2a16453135c5525f1fa"},{url:"en/guide/client/recentcomment.html",revision:"d20f4469722efc5c27ed807f10bdcd35"},{url:"en/guide/client/spa.html",revision:"2c1a3aaf4739a38a43d9b323cd6a2254"},{url:"en/guide/client/style.html",revision:"91be8eba8bf3cd026b2962040e3119e4"},{url:"en/guide/client/syntax.html",revision:"afe23f3742fce0721e16fab2caea4987"},{url:"en/guide/client/widget/index.html",revision:"5adbf4736838580f823080081405e252"},{url:"en/guide/client/widget/recent-comment.html",revision:"fe229ed3448cd636eb4df67e70d88f90"},{url:"en/guide/get-started.html",revision:"e784a3b1a40a422c2e8575b2b68feb6b"},{url:"en/guide/server/databases.html",revision:"178336580e64b8d65348d8f87bfe4b99"},{url:"en/guide/server/intro.html",revision:"dfa811a095ed528f78ed5602951cbbae"},{url:"en/guide/server/notification.html",revision:"0c7c866f219c8bb6da6b240c62abc541"},{url:"en/guide/server/socials.html",revision:"d94479e0dc2c17f6fa0ff2aa30ac37c6"},{url:"en/guide/server/vps-deploy.html",revision:"716a809220f7a1a3aa6898a76e7b0dee"},{url:"en/index.html",revision:"dd15f760d35c558975a3b694698b00d4"},{url:"en/migration/client.html",revision:"1597294824e5d55a40d4a7c247456b84"},{url:"en/migration/tool.html",revision:"4ebaa0fa5838a16fc8d3108ed74039ac"},{url:"en/migration/valine.html",revision:"99ba510a39b220e912d5fb6b546336b7"},{url:"en/reference/api.html",revision:"73131c4b01383acfd0c88dcbc15beb15"},{url:"en/reference/client.html",revision:"0a7f5961a925ebbef618d12eded80f54"},{url:"en/reference/contribution.html",revision:"6f3ab2373497b748416963a93f31c7de"},{url:"en/reference/instance.html",revision:"20c3a3b67ba769899c98c479c85a8aa2"},{url:"en/reference/server.html",revision:"5c66717b8d2b32dcff8c451f747a0f17"},{url:"guide/client/avatar.html",revision:"b1c52f5de0fe41ce1d65a4140bd4f963"},{url:"guide/client/count.html",revision:"ecf287b86d1ad53aae6270cc959e7a2f"},{url:"guide/client/emoji.html",revision:"806cd47be10bc400f778a7bf672831db"},{url:"guide/client/i18n.html",revision:"74549eac6bb3934ca09934557076f872"},{url:"guide/client/import.html",revision:"a300a38b12d3a6c00d5323f70c3f5e4c"},{url:"guide/client/intro.html",revision:"95850bb77c2166d5fef7516f33658007"},{url:"guide/client/spa.html",revision:"3bcb006f54dd9eb0e4b25783782c4b06"},{url:"guide/client/style.html",revision:"825c4019fb1eb2dcdd231a8771206ff1"},{url:"guide/client/syntax.html",revision:"c6f43edb72add3f6f7bba6e57dce07c2"},{url:"guide/client/widget/index.html",revision:"fa35c3fda68975600541eb19ee3aacb5"},{url:"guide/client/widget/recent-comment.html",revision:"9d901afcb1f689a533be455db759385d"},{url:"guide/get-started.html",revision:"1c1aac7136773ff4731ab59f0ea9e475"},{url:"guide/server/cloudbase.html",revision:"408e491abde1d115406cb725d6b29c31"},{url:"guide/server/databases.html",revision:"7f22a4045019f8e0f04a76594eb2fb29"},{url:"guide/server/intro.html",revision:"ab9b273007cf1331be5829a94c1545a2"},{url:"guide/server/notification.html",revision:"ba295e3348c97a1a3614863e9b6de8db"},{url:"guide/server/socials.html",revision:"2cf8e4feb1fffd203aeb8fd2cc585d62"},{url:"guide/server/vps-deploy.html",revision:"a09e2503515c0eeee552120cec81e8ae"},{url:"index.html",revision:"4a02ca5e628a73229c835e9ab82bd584"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"1813d090fe9f1fdba4a96834878f75d3"},{url:"migration/tool.html",revision:"395acbee843df5f3e27cc96f9afb2095"},{url:"migration/valine.html",revision:"14fdccc6abd5e82bc8f7faa669e7a850"},{url:"reference/api.html",revision:"f4880206b07cb9d706d27ada5646ecd1"},{url:"reference/client.html",revision:"420234a760b4ef65bc2dfd1471be9a29"},{url:"reference/contribution.html",revision:"c3471d3e9f64a97dba044cbe1a67d8f0"},{url:"reference/instance.html",revision:"24e053f0f71d2ee8173699dd168006d8"},{url:"reference/server.html",revision:"c75ba4e439ebdf1880fc3811fa7843e9"}],{})}));
