if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"bcaeff57062cc58a74b1a62b4f0ae65a"},{url:"advanced/ecosystem.html",revision:"f78c6dbe58bc18caf435546110ac4248"},{url:"advanced/faq.html",revision:"9047aaaf95c949b66cf23fff63bfa94e"},{url:"advanced/intro.html",revision:"6c4784988d05d106e9fe0b435803593e"},{url:"advanced/why.html",revision:"557e34b8853c81fe06be519ad289c630"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.de0e21d3.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/5121.ddbe4be1.js",revision:null},{url:"assets/js/5556.4a5f655c.js",revision:null},{url:"assets/js/5581.d59d84df.js",revision:null},{url:"assets/js/6949.4da80600.js",revision:null},{url:"assets/js/app.a79e0f90.js",revision:null},{url:"assets/js/runtime~app.ae22a296.js",revision:null},{url:"assets/js/v-057c9824.a01b4156.js",revision:null},{url:"assets/js/v-058f99fc.9367cda9.js",revision:null},{url:"assets/js/v-0b556720.3a218b82.js",revision:null},{url:"assets/js/v-1b1feb10.3dbea9a8.js",revision:null},{url:"assets/js/v-1bf8da39.1daf1f67.js",revision:null},{url:"assets/js/v-271aae61.d50110c4.js",revision:null},{url:"assets/js/v-27d47a79.c456ecdf.js",revision:null},{url:"assets/js/v-2812bd79.129a011a.js",revision:null},{url:"assets/js/v-2945f13a.023c0e52.js",revision:null},{url:"assets/js/v-2d0a870d.a12b9841.js",revision:null},{url:"assets/js/v-2fad59ab.2f05cd16.js",revision:null},{url:"assets/js/v-356c0ac4.f4caf32d.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.21fc2efa.js",revision:null},{url:"assets/js/v-396f59cd.44fbec49.js",revision:null},{url:"assets/js/v-40608902.51eb3461.js",revision:null},{url:"assets/js/v-434e7c8c.76422ad2.js",revision:null},{url:"assets/js/v-45360123.d74832ea.js",revision:null},{url:"assets/js/v-4819d2f6.5a8b0831.js",revision:null},{url:"assets/js/v-487079c5.3b98d5df.js",revision:null},{url:"assets/js/v-4dec5b45.e91d2aef.js",revision:null},{url:"assets/js/v-4f0168b2.3021c522.js",revision:null},{url:"assets/js/v-4fe1dc58.a4cc8a16.js",revision:null},{url:"assets/js/v-50cb2a87.8864fecf.js",revision:null},{url:"assets/js/v-514365f1.abff9444.js",revision:null},{url:"assets/js/v-533c70f7.85e6a0ea.js",revision:null},{url:"assets/js/v-583b3d0d.cf630c41.js",revision:null},{url:"assets/js/v-5ceabafb.7205fed6.js",revision:null},{url:"assets/js/v-61377328.5dedd893.js",revision:null},{url:"assets/js/v-668d9be0.bdfb4b03.js",revision:null},{url:"assets/js/v-66cc4fee.dff49c41.js",revision:null},{url:"assets/js/v-67a66f17.c23f3239.js",revision:null},{url:"assets/js/v-6b4d4a3d.1ec4ee0d.js",revision:null},{url:"assets/js/v-6d93dbb2.0e87ba0f.js",revision:null},{url:"assets/js/v-704e8e37.8c7cc847.js",revision:null},{url:"assets/js/v-737ff092.6a1b0972.js",revision:null},{url:"assets/js/v-743ff88e.6269cd22.js",revision:null},{url:"assets/js/v-74a28670.7013e509.js",revision:null},{url:"assets/js/v-756ec2fc.8b028df8.js",revision:null},{url:"assets/js/v-7871496c.53eb4869.js",revision:null},{url:"assets/js/v-7898f959.7ccb2227.js",revision:null},{url:"assets/js/v-7af875a7.4c3083d6.js",revision:null},{url:"assets/js/v-81cb4dce.dd75e03c.js",revision:null},{url:"assets/js/v-82949f3e.223d1cfc.js",revision:null},{url:"assets/js/v-8daa1a0e.87a1ced3.js",revision:null},{url:"assets/js/v-8dba60f6.af364c1f.js",revision:null},{url:"assets/js/v-a1a49808.cc82b560.js",revision:null},{url:"assets/js/v-a7534f04.5a05e8c5.js",revision:null},{url:"assets/js/v-aecc6e00.23b06306.js",revision:null},{url:"assets/js/v-b032db80.960147ae.js",revision:null},{url:"assets/js/v-b7dac982.3c8b7ca3.js",revision:null},{url:"assets/js/v-c9146c5e.6159afae.js",revision:null},{url:"assets/js/v-d8d70e1a.ab0b17f5.js",revision:null},{url:"assets/js/v-de155fda.11a2ae36.js",revision:null},{url:"assets/js/v-de867450.e3c770a5.js",revision:null},{url:"assets/js/v-e4322366.0c16d264.js",revision:null},{url:"assets/js/v-e565bdda.70386a8f.js",revision:null},{url:"assets/js/v-e64f5648.fcdd4926.js",revision:null},{url:"assets/js/v-ee77801a.1cf732e3.js",revision:null},{url:"assets/js/v-eff96fe2.1cd49a72.js",revision:null},{url:"assets/js/v-f3ed9e5a.b5f27bd0.js",revision:null},{url:"assets/js/v-f4351e9e.ea7ccd8b.js",revision:null},{url:"assets/js/v-ffe3a066.58668b6a.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"2711f747ed88bc95a409e307e55fcd1d"},{url:"en/advanced/faq.html",revision:"d9ab6610d12cbee011a9aec2b76b66fb"},{url:"en/advanced/intro.html",revision:"f02a32e48a0c0d82d56ea0239aa6f65c"},{url:"en/advanced/why.html",revision:"8df11a42a315952caed857792a3254cb"},{url:"en/guide/client/avatar.html",revision:"18203f2c7ac4ca1ac8ce6636f262bcf8"},{url:"en/guide/client/count.html",revision:"8f7a5f873fb8cd9b0572f668ad7cb9cc"},{url:"en/guide/client/emoji.html",revision:"4df5ffc0cfb0567edb846bf6b3cc3d63"},{url:"en/guide/client/i18n.html",revision:"39286a6f29a7647434aeca717eb384e2"},{url:"en/guide/client/import.html",revision:"76017168d292e49f061131471b948bd4"},{url:"en/guide/client/intro.html",revision:"2235c248aea17fd7b20b55b1f20c66af"},{url:"en/guide/client/recentcomment.html",revision:"26894aeac7f688669033df5cd5b081d9"},{url:"en/guide/client/spa.html",revision:"e1234e513e4444da99176235399d7eeb"},{url:"en/guide/client/style.html",revision:"e820877c5dccc73d2d19863b043e1cd6"},{url:"en/guide/client/syntax.html",revision:"ae4f9c7a5feaefc4cd6ce32009adc19e"},{url:"en/guide/client/widget/index.html",revision:"0f7c464dcacf9e6493b4501facecf242"},{url:"en/guide/client/widget/recent-comment.html",revision:"ba6120638b30c4b6498f8631377f49bc"},{url:"en/guide/get-started.html",revision:"76b16fc9203f51a5ab03609346809c62"},{url:"en/guide/server/databases.html",revision:"1571374267cb4b06a024651b7cde997b"},{url:"en/guide/server/intro.html",revision:"353d5debdb7f48f26322399a09a59798"},{url:"en/guide/server/notification.html",revision:"4097526f48c76b1c60a7cfd4d4662171"},{url:"en/guide/server/socials.html",revision:"27966f38cd601b43ff85521807bf2ba9"},{url:"en/guide/server/vps-deploy.html",revision:"d13c4839fef0523e0bfdfc38f4877add"},{url:"en/index.html",revision:"573be1bae5cd67b238687cbc8cceb82f"},{url:"en/migration/client.html",revision:"75e0289af7c502bd54d74f525d52471a"},{url:"en/migration/tool.html",revision:"d6ce6f5b7094fd975a6ede4d4612f980"},{url:"en/migration/valine.html",revision:"a8ae8830d8c92952ceb48422b0abeb00"},{url:"en/reference/api.html",revision:"270be6faeb740444f6907b71d89adcea"},{url:"en/reference/client.html",revision:"285f5ebe1fc2a4c0237a71ccaa357dea"},{url:"en/reference/contribution.html",revision:"ea94d00dfe63a28c022e08ffca4d52a1"},{url:"en/reference/instance.html",revision:"393a265780edc474cd57b4a7c73e295e"},{url:"en/reference/server.html",revision:"adbd92094e1c90acaec855488551bee4"},{url:"guide/client/avatar.html",revision:"66d9e47f26c88625dbec3f37459468af"},{url:"guide/client/count.html",revision:"209c8a71bbfc9bd518169fd372408ffd"},{url:"guide/client/emoji.html",revision:"758c5c22f88b412ce0f4f7deae868e6f"},{url:"guide/client/i18n.html",revision:"d2a61c91c5c43c3df46723d8f6c6ceda"},{url:"guide/client/import.html",revision:"d4e8eb16f94e18e7c578a80ec59e5d69"},{url:"guide/client/intro.html",revision:"7323570d44adac12abe70e968e9d2ede"},{url:"guide/client/spa.html",revision:"5123a50e67d4aea1a97f286c579d73bc"},{url:"guide/client/style.html",revision:"7465222615ba74e855cc2d3583e24e51"},{url:"guide/client/syntax.html",revision:"cc4220511c6424618a98111bf45815ac"},{url:"guide/client/widget/index.html",revision:"64894ade0bc41d698a0eda86c1f06c9b"},{url:"guide/client/widget/recent-comment.html",revision:"a811e2f2d89b64bcc2402a0511d057f8"},{url:"guide/get-started.html",revision:"738cf703f3c5315aa4236c953fab12a0"},{url:"guide/server/cloudbase.html",revision:"0f73a14f62c8a9d330212faa5d2bb342"},{url:"guide/server/databases.html",revision:"8a69e12ef212951b55e9f60fd0516361"},{url:"guide/server/intro.html",revision:"d3dec75d1b2fdf5c1eab15fc9059ce26"},{url:"guide/server/notification.html",revision:"b77e44524722de5bdb0c22338530108d"},{url:"guide/server/socials.html",revision:"8d7ca0d08f8bda18a3ede50f4f26851f"},{url:"guide/server/vps-deploy.html",revision:"b8985ec284168c39c9a4c257d752ad4b"},{url:"index.html",revision:"cf9a497fed2341c59bb59dd3061434d0"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"2d7114d282853799e490860edff2f673"},{url:"migration/tool.html",revision:"9cbe3a6aeb54f5d7092d88aa75c9bd15"},{url:"migration/valine.html",revision:"6c0d10f6b500927d980e8601cb9c9b0a"},{url:"reference/api.html",revision:"f5555b169dac0b83295d61c9d20c0e3f"},{url:"reference/client.html",revision:"1dd85c84113dd6ca2f40381b80ed30a9"},{url:"reference/contribution.html",revision:"65b95bbdc7d87e365da1d58b0a80ba84"},{url:"reference/instance.html",revision:"09b5d6cffb4e14a18d402cf592a64eb6"},{url:"reference/server.html",revision:"46df100a9eb00b1efa9613560aba669c"}],{})}));
