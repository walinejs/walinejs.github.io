if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"897a73e26adb92fdaf78b2f88cb4f4f0"},{url:"advanced/ecosystem.html",revision:"cb9064596cab4d26f0da6a7962982d28"},{url:"advanced/faq.html",revision:"d1a2eb4cb10e2d27595356de312c19ad"},{url:"advanced/intro.html",revision:"cdaecab4109bee399de1497537a23ab9"},{url:"advanced/why.html",revision:"09e8ee8fb9b5127396ec4a9b07ebe655"},{url:"assets/css/959.styles.a6096c8d.css",revision:null},{url:"assets/css/styles.6da75289.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/deta-1.a238d26f.png",revision:null},{url:"assets/img/deta-2.295d8a01.png",revision:null},{url:"assets/img/deta-3.31cf0dda.jpg",revision:null},{url:"assets/img/leancloud-1.4f4daf0f.jpeg",revision:null},{url:"assets/img/leancloud-2.d6247334.jpeg",revision:null},{url:"assets/img/leancloud-3.838c3904.png",revision:null},{url:"assets/img/leancloud-app-1.9c9739de.jpg",revision:null},{url:"assets/img/leancloud-app-2.6d9a4f9c.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.a04d3351.js",revision:null},{url:"assets/js/5455.61f1697b.js",revision:null},{url:"assets/js/5950.3a65c64d.js",revision:null},{url:"assets/js/6725.42eac804.js",revision:null},{url:"assets/js/801.e598a66c.js",revision:null},{url:"assets/js/app.c400ef98.js",revision:null},{url:"assets/js/runtime~app.71672802.js",revision:null},{url:"assets/js/v-057c9824.13ea3fe3.js",revision:null},{url:"assets/js/v-058f99fc.172948da.js",revision:null},{url:"assets/js/v-0b556720.6b3dbd9f.js",revision:null},{url:"assets/js/v-1b1feb10.edbf43bf.js",revision:null},{url:"assets/js/v-1bf8da39.00cf261f.js",revision:null},{url:"assets/js/v-1ddcadc2.e70cc823.js",revision:null},{url:"assets/js/v-271aae61.cd055341.js",revision:null},{url:"assets/js/v-27d47a79.344177ba.js",revision:null},{url:"assets/js/v-2812bd79.1277db90.js",revision:null},{url:"assets/js/v-2945f13a.dc36ea80.js",revision:null},{url:"assets/js/v-2d0a870d.3cd8aa3f.js",revision:null},{url:"assets/js/v-2fad59ab.0300fd40.js",revision:null},{url:"assets/js/v-356c0ac4.c0ee0d52.js",revision:null},{url:"assets/js/v-3706649a.62af1484.js",revision:null},{url:"assets/js/v-38007666.de322092.js",revision:null},{url:"assets/js/v-396f59cd.4d318614.js",revision:null},{url:"assets/js/v-40608902.2d0455f4.js",revision:null},{url:"assets/js/v-434e7c8c.2eb2736e.js",revision:null},{url:"assets/js/v-45360123.8f071c50.js",revision:null},{url:"assets/js/v-4819d2f6.66a38562.js",revision:null},{url:"assets/js/v-487079c5.f8f88be4.js",revision:null},{url:"assets/js/v-4dec5b45.3963e17b.js",revision:null},{url:"assets/js/v-4f0168b2.10823fc7.js",revision:null},{url:"assets/js/v-4fe1dc58.0c5de9bd.js",revision:null},{url:"assets/js/v-50cb2a87.163a9023.js",revision:null},{url:"assets/js/v-514365f1.1d235fb2.js",revision:null},{url:"assets/js/v-533c70f7.ace4af71.js",revision:null},{url:"assets/js/v-583b3d0d.6b07b610.js",revision:null},{url:"assets/js/v-5ceabafb.b8a360dd.js",revision:null},{url:"assets/js/v-61377328.32b9db3b.js",revision:null},{url:"assets/js/v-668d9be0.d1db5716.js",revision:null},{url:"assets/js/v-66cc4fee.32619614.js",revision:null},{url:"assets/js/v-67a66f17.a25739e8.js",revision:null},{url:"assets/js/v-6b4d4a3d.eabb5ca9.js",revision:null},{url:"assets/js/v-6d93dbb2.157ffcfc.js",revision:null},{url:"assets/js/v-704e8e37.a4a4f4f1.js",revision:null},{url:"assets/js/v-737ff092.bb4f0ce8.js",revision:null},{url:"assets/js/v-740dc7ea.8dbb4e4a.js",revision:null},{url:"assets/js/v-743ff88e.d455d5dd.js",revision:null},{url:"assets/js/v-74a28670.4f935774.js",revision:null},{url:"assets/js/v-756ec2fc.f67bbb1d.js",revision:null},{url:"assets/js/v-7871496c.d3ea5391.js",revision:null},{url:"assets/js/v-7898f959.56586a98.js",revision:null},{url:"assets/js/v-7af875a7.12e9feff.js",revision:null},{url:"assets/js/v-81cb4dce.aaeed0d2.js",revision:null},{url:"assets/js/v-82949f3e.3cfccbb8.js",revision:null},{url:"assets/js/v-8daa1a0e.2eeb4e8d.js",revision:null},{url:"assets/js/v-8dba60f6.403aec55.js",revision:null},{url:"assets/js/v-a1a49808.3729ce92.js",revision:null},{url:"assets/js/v-a7534f04.a05b05b0.js",revision:null},{url:"assets/js/v-aecc6e00.afc480a6.js",revision:null},{url:"assets/js/v-b032db80.ec439e4f.js",revision:null},{url:"assets/js/v-b7dac982.f7227d45.js",revision:null},{url:"assets/js/v-c9146c5e.8b6f45a7.js",revision:null},{url:"assets/js/v-d8d70e1a.e034b077.js",revision:null},{url:"assets/js/v-de155fda.43c869cf.js",revision:null},{url:"assets/js/v-de867450.2ad22410.js",revision:null},{url:"assets/js/v-e4322366.2a1ecb46.js",revision:null},{url:"assets/js/v-e565bdda.2e1506b0.js",revision:null},{url:"assets/js/v-e64f5648.c2396d4f.js",revision:null},{url:"assets/js/v-ee77801a.2080939d.js",revision:null},{url:"assets/js/v-eff96fe2.00bfa7ed.js",revision:null},{url:"assets/js/v-f3ed9e5a.5f182395.js",revision:null},{url:"assets/js/v-f4351e9e.f5965f0c.js",revision:null},{url:"assets/js/v-ffe3a066.e5fd767d.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"ca6403e56ab1ab66694090200dbe1744"},{url:"en/advanced/faq.html",revision:"1b8677864e78fd7b8919f2501ef6de24"},{url:"en/advanced/intro.html",revision:"1aceb52503b41736129810d39836c2d7"},{url:"en/advanced/why.html",revision:"857711f24b3bdb69f26c325138963653"},{url:"en/guide/client/avatar.html",revision:"bc12720e8277502a7845ad0f2ccecb23"},{url:"en/guide/client/count.html",revision:"1a44af47728800f573b967aa11f5ce31"},{url:"en/guide/client/emoji.html",revision:"171aa67dedbd90cca8e38a38dbc3569f"},{url:"en/guide/client/i18n.html",revision:"6e95292dc98d062797aee159c516426f"},{url:"en/guide/client/import.html",revision:"fcd0a2b6dbfd1994b9ce87167807cb60"},{url:"en/guide/client/intro.html",revision:"55b3621a65a02242c5c17f4aefe08405"},{url:"en/guide/client/recentcomment.html",revision:"a1695b9db04c9d5a0a47871b847278a5"},{url:"en/guide/client/spa.html",revision:"9bf54ce8ebd3857c35b1c60f887636a1"},{url:"en/guide/client/style.html",revision:"968dbcfa1061ffa842e55cb0d53dba99"},{url:"en/guide/client/syntax.html",revision:"b0cfc6b9cb2941363da5223d02a9f7d5"},{url:"en/guide/client/widget/index.html",revision:"aaab7e485873bc80f655d33b6989acd6"},{url:"en/guide/client/widget/recent-comment.html",revision:"42d2da2a13893147f31a2e0a65804e9b"},{url:"en/guide/get-started.html",revision:"66cdf6a091bbe78ffd39adb7a8acab0a"},{url:"en/guide/server/databases.html",revision:"94e9b466f1087c753fa1a14d27276eae"},{url:"en/guide/server/deta.html",revision:"611b917063b59674eaf638f1c706e7d8"},{url:"en/guide/server/intro.html",revision:"6293ecabbab8e78cd89eec523c43a416"},{url:"en/guide/server/notification.html",revision:"792d9951732a438abb8577586b29d9d6"},{url:"en/guide/server/socials.html",revision:"e7549ca1fae2518cc99707219ec31195"},{url:"en/guide/server/vps-deploy.html",revision:"227aae45125d730be0a005c81a4b1ceb"},{url:"en/index.html",revision:"74a8cddf53f1298b63394d868976f025"},{url:"en/migration/client.html",revision:"b7cfbaf7d57324b1573ebec0d426711d"},{url:"en/migration/tool.html",revision:"f80ba830554ae193de9a4d69eab626fb"},{url:"en/migration/valine.html",revision:"f8d9080e6f3b13b27fbf1859aceb255a"},{url:"en/reference/api.html",revision:"2000246c263f9fd251027411630db7c4"},{url:"en/reference/client.html",revision:"3acac71761600ba6137a1276e1e149d9"},{url:"en/reference/contribution.html",revision:"384ed213b1e4d83f771edddf5a42599e"},{url:"en/reference/instance.html",revision:"eed770191f395fa14391cd552a7a0cfc"},{url:"en/reference/server.html",revision:"a83c246c80ee58ae0c7ce889ba801d8e"},{url:"guide/client/avatar.html",revision:"1607d12b38eeb693f77afafde58b850f"},{url:"guide/client/count.html",revision:"b3c26d5a1fec818634aac8a7707d60ae"},{url:"guide/client/emoji.html",revision:"1e5d73da7705a1d2f2aef70ddc322698"},{url:"guide/client/i18n.html",revision:"2be0266a492c7d3a9de0a261ee3f73e9"},{url:"guide/client/import.html",revision:"dec98cae8cc71ed810707db208c7686f"},{url:"guide/client/intro.html",revision:"dfb0cfaa7b46dc11fcd5822c2143f2f5"},{url:"guide/client/spa.html",revision:"a03e09091ab48cf133d24aec9cb56826"},{url:"guide/client/style.html",revision:"85748ff57134e4043c94da33671f56cb"},{url:"guide/client/syntax.html",revision:"9a02f2d5ffb22c0b052ab9b9a871749e"},{url:"guide/client/widget/index.html",revision:"8774160d9d9a6ede84e31bf3ecd13452"},{url:"guide/client/widget/recent-comment.html",revision:"a75f5bd2a64c53f93799e900cb3774c8"},{url:"guide/get-started.html",revision:"ba1aea957120e5c57a349b4e733f086f"},{url:"guide/server/cloudbase.html",revision:"aeb60414deff7cf279aabde480b79837"},{url:"guide/server/databases.html",revision:"6ab1bf48fb2f0f2561bba856bc8c4013"},{url:"guide/server/deta.html",revision:"017c1891f68b16137f62d4126049c78e"},{url:"guide/server/intro.html",revision:"d62711b0950341e155968ed7a5774fc2"},{url:"guide/server/notification.html",revision:"cb3ce82a91b69bf375032f3ff3cea4b0"},{url:"guide/server/socials.html",revision:"98538c0b966a461cfdfe3fb9e4d0b36b"},{url:"guide/server/vps-deploy.html",revision:"47f5bf6e18e0da4725f1c03087516cae"},{url:"index.html",revision:"b095553c3a952a61b96d40d51b52091f"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"dd0d2997a843d53fac5cf56760a98aaa"},{url:"migration/tool.html",revision:"5265cca2c33620e529f7191ca3e228f0"},{url:"migration/valine.html",revision:"735e535b317e65b3530871b47d11bbe5"},{url:"reference/api.html",revision:"c9f91045170806b3312b168ca7039656"},{url:"reference/client.html",revision:"a929c0d20f5b36d31cc6483e3807381f"},{url:"reference/contribution.html",revision:"e14a87e4f7bd13ead7334765e85be925"},{url:"reference/instance.html",revision:"5645d002c2c77fb9b1aa3fbfa7c8c21f"},{url:"reference/server.html",revision:"ec9cf0cbe74798ef797327e5ce904eb6"}],{})}));
