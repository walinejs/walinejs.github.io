if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-a55b2693"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"f7c89ee16dedc8418a316a58c6cf7790"},{url:"advanced/ecosystem.html",revision:"3365ba5b7ffd9075e581b978f7004b50"},{url:"advanced/faq.html",revision:"1e9af606e90009f1fe8164421eba3a74"},{url:"advanced/intro.html",revision:"dbc13942dc4efa4e6d9391252592b5e2"},{url:"advanced/why.html",revision:"7c02a6dc445f55b8e1e29d647a1711b8"},{url:"assets/css/959.styles.c3a3d3e5.css",revision:null},{url:"assets/css/styles.190d6076.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.372b99df.js",revision:null},{url:"assets/js/5455.359166a6.js",revision:null},{url:"assets/js/5556.5b13d4eb.js",revision:null},{url:"assets/js/801.c19c4dc0.js",revision:null},{url:"assets/js/9230.b56a5c5e.js",revision:null},{url:"assets/js/app.467aa4ef.js",revision:null},{url:"assets/js/runtime~app.9c38c7bd.js",revision:null},{url:"assets/js/v-057c9824.8b320fc9.js",revision:null},{url:"assets/js/v-058f99fc.22d47c7b.js",revision:null},{url:"assets/js/v-0b556720.6a16954e.js",revision:null},{url:"assets/js/v-1b1feb10.201bdd2a.js",revision:null},{url:"assets/js/v-1bf8da39.1621f62c.js",revision:null},{url:"assets/js/v-271aae61.7ac70827.js",revision:null},{url:"assets/js/v-27d47a79.017d09b5.js",revision:null},{url:"assets/js/v-2812bd79.a2dcc736.js",revision:null},{url:"assets/js/v-2945f13a.42a2ac59.js",revision:null},{url:"assets/js/v-2d0a870d.28e8ca31.js",revision:null},{url:"assets/js/v-2fad59ab.945b5e0e.js",revision:null},{url:"assets/js/v-356c0ac4.a1bac716.js",revision:null},{url:"assets/js/v-3706649a.809018b0.js",revision:null},{url:"assets/js/v-38007666.970ffdbd.js",revision:null},{url:"assets/js/v-396f59cd.53fba8ef.js",revision:null},{url:"assets/js/v-40608902.23498bab.js",revision:null},{url:"assets/js/v-434e7c8c.d2de72c2.js",revision:null},{url:"assets/js/v-45360123.8429188f.js",revision:null},{url:"assets/js/v-4819d2f6.64839d0b.js",revision:null},{url:"assets/js/v-487079c5.3f7208f0.js",revision:null},{url:"assets/js/v-4dec5b45.2c0258e6.js",revision:null},{url:"assets/js/v-4f0168b2.b8f7ec4c.js",revision:null},{url:"assets/js/v-4fe1dc58.0dd83215.js",revision:null},{url:"assets/js/v-50cb2a87.ddc5999c.js",revision:null},{url:"assets/js/v-514365f1.6c58ded6.js",revision:null},{url:"assets/js/v-533c70f7.38b347cf.js",revision:null},{url:"assets/js/v-583b3d0d.e3c860e9.js",revision:null},{url:"assets/js/v-5ceabafb.884b53ab.js",revision:null},{url:"assets/js/v-61377328.55fbb989.js",revision:null},{url:"assets/js/v-668d9be0.8d644249.js",revision:null},{url:"assets/js/v-66cc4fee.cab8b0fa.js",revision:null},{url:"assets/js/v-67a66f17.3cd6b733.js",revision:null},{url:"assets/js/v-6b4d4a3d.d4abfa94.js",revision:null},{url:"assets/js/v-6d93dbb2.a9e9619b.js",revision:null},{url:"assets/js/v-704e8e37.80c1c1c1.js",revision:null},{url:"assets/js/v-737ff092.a0752305.js",revision:null},{url:"assets/js/v-743ff88e.63deb78b.js",revision:null},{url:"assets/js/v-74a28670.b04108c9.js",revision:null},{url:"assets/js/v-756ec2fc.3754b5f0.js",revision:null},{url:"assets/js/v-7871496c.010b4b35.js",revision:null},{url:"assets/js/v-7898f959.95721038.js",revision:null},{url:"assets/js/v-7af875a7.b3ed4041.js",revision:null},{url:"assets/js/v-81cb4dce.ce745e72.js",revision:null},{url:"assets/js/v-82949f3e.8ccc7a26.js",revision:null},{url:"assets/js/v-8daa1a0e.116455e6.js",revision:null},{url:"assets/js/v-8dba60f6.8e2304a0.js",revision:null},{url:"assets/js/v-a1a49808.061f5371.js",revision:null},{url:"assets/js/v-a7534f04.c28d5be1.js",revision:null},{url:"assets/js/v-aecc6e00.b0aff26c.js",revision:null},{url:"assets/js/v-b032db80.2b34a136.js",revision:null},{url:"assets/js/v-b7dac982.fb6470fd.js",revision:null},{url:"assets/js/v-c9146c5e.d55286a6.js",revision:null},{url:"assets/js/v-d8d70e1a.df4cf4bc.js",revision:null},{url:"assets/js/v-de155fda.25449316.js",revision:null},{url:"assets/js/v-de867450.e8a37ebb.js",revision:null},{url:"assets/js/v-e4322366.22da5807.js",revision:null},{url:"assets/js/v-e565bdda.45bf8a50.js",revision:null},{url:"assets/js/v-e64f5648.51bcee76.js",revision:null},{url:"assets/js/v-ee77801a.5091ae58.js",revision:null},{url:"assets/js/v-eff96fe2.d7762a36.js",revision:null},{url:"assets/js/v-f3ed9e5a.7a16fcad.js",revision:null},{url:"assets/js/v-f4351e9e.756bcb6f.js",revision:null},{url:"assets/js/v-ffe3a066.6b62863a.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"a6b12db6cec74a7d1d322c326a9005ee"},{url:"en/advanced/faq.html",revision:"248dfbec7fa62977be5bf3d1f1fa7e1b"},{url:"en/advanced/intro.html",revision:"82c706a9a340bd0f69f04303fe784ccb"},{url:"en/advanced/why.html",revision:"741628f263f202725a421dc13073af2b"},{url:"en/guide/client/avatar.html",revision:"ec64f729846ccdc672fa04f249a404c0"},{url:"en/guide/client/count.html",revision:"b1d673600ceb759986ab07cb51ca73c4"},{url:"en/guide/client/emoji.html",revision:"b7f8da05b89c968d10da1285e2bbf004"},{url:"en/guide/client/i18n.html",revision:"7425e0c7686dc44b40dc881fd9b56704"},{url:"en/guide/client/import.html",revision:"c8544320d280360b2f8fdda8715f2360"},{url:"en/guide/client/intro.html",revision:"a3caea6950230cc227eb8a9e9637807e"},{url:"en/guide/client/recentcomment.html",revision:"e62f8c0238c0e601ede3a39de0dad6bb"},{url:"en/guide/client/spa.html",revision:"5a9f8133fe704489529745478da23280"},{url:"en/guide/client/style.html",revision:"01e49c638b07157fb22388be3d3de0e4"},{url:"en/guide/client/syntax.html",revision:"eb758533f6de589461181598267ad92e"},{url:"en/guide/client/widget/index.html",revision:"a445079802be6903d9a3bcf96c94f967"},{url:"en/guide/client/widget/recent-comment.html",revision:"25f97970550f1ff99bbf3089bf3b0ea7"},{url:"en/guide/get-started.html",revision:"e1c4962176530be73486fed821cae621"},{url:"en/guide/server/databases.html",revision:"a0b57f54a2d5405010ceddc445d782e9"},{url:"en/guide/server/intro.html",revision:"d8c5152ec8c3d134fbceef1353e6c992"},{url:"en/guide/server/notification.html",revision:"70d39b6486b6c92fef1435fcd39029b1"},{url:"en/guide/server/socials.html",revision:"543abda4be437dac015f278deba906e3"},{url:"en/guide/server/vps-deploy.html",revision:"b01215772c15006af3f70cd8367deea3"},{url:"en/index.html",revision:"fe53bab200eda11811692fd31af079be"},{url:"en/migration/client.html",revision:"c4572cc95eabc21bc17eaea24fc6719a"},{url:"en/migration/tool.html",revision:"7547c8cc29fc40804bc3f819229418d7"},{url:"en/migration/valine.html",revision:"345cfbab108207faeb872f779de7e809"},{url:"en/reference/api.html",revision:"6318dff4ec3bb4678f9669b7eaf74a47"},{url:"en/reference/client.html",revision:"bbf0b3fdc090f40e17e2ea10b832da13"},{url:"en/reference/contribution.html",revision:"5550b975536995a0402a1a7639b7974a"},{url:"en/reference/instance.html",revision:"bd48fc8883e4a09410f48d75adf62105"},{url:"en/reference/server.html",revision:"5b00424d07b3d6f1ea3f97a694dcd208"},{url:"guide/client/avatar.html",revision:"7634bc08e2c60defa89bcb91efe31a03"},{url:"guide/client/count.html",revision:"8e41bac0e5bf31a4e9db9a9846ee2a29"},{url:"guide/client/emoji.html",revision:"3af3328178de642f959de423d813675a"},{url:"guide/client/i18n.html",revision:"59af4615ff54b5bd418664d99b5c1ed7"},{url:"guide/client/import.html",revision:"7db0b04ec2460bb869ff4fb39d5b1112"},{url:"guide/client/intro.html",revision:"7e5a2a1c933fe0d93c74b51617a2d753"},{url:"guide/client/spa.html",revision:"23ee5bb47f520aa2cca2e71608ec7ce0"},{url:"guide/client/style.html",revision:"a4898f8efafc1ccaa3155afc45cb8443"},{url:"guide/client/syntax.html",revision:"90fbe28161fd9ba11fd8baf220d2d9b7"},{url:"guide/client/widget/index.html",revision:"1358824b3eee4bfd6d91adb0fa3932da"},{url:"guide/client/widget/recent-comment.html",revision:"e43d6aa1b832e557063d8ac914da5fc9"},{url:"guide/get-started.html",revision:"c03cf2785da4e2699edf09d379da6b20"},{url:"guide/server/cloudbase.html",revision:"c53b3d40fa0ed7f8dbd2a857de3093fc"},{url:"guide/server/databases.html",revision:"74d3f0bbec715576e9c06ada995e412f"},{url:"guide/server/intro.html",revision:"f63b2127f149f014a189b206fc8d3bc4"},{url:"guide/server/notification.html",revision:"7af089713766e0b2e1a0e3319dbf9fa9"},{url:"guide/server/socials.html",revision:"fcc5064bf553d305f8d4dcfdc0f36816"},{url:"guide/server/vps-deploy.html",revision:"a2ff8f8c7e1d98e05b716ed2c64bd7e1"},{url:"index.html",revision:"5870f894aa699ba07aae3342ded5e4d0"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"afca99938b61ff4a792cffc594a16130"},{url:"migration/tool.html",revision:"3fbb1fc139b1209b298c864d2f66a362"},{url:"migration/valine.html",revision:"8aa947ef2955a28b846521b2f67c14f9"},{url:"reference/api.html",revision:"20b1d5b7fe8f4b55f265faa1062c8dac"},{url:"reference/client.html",revision:"0a27895499b8b3937ddaead2a63ab44e"},{url:"reference/contribution.html",revision:"364e4c6413fd297ccfc14226d2736dba"},{url:"reference/instance.html",revision:"4a564f6fe2abb2c2c6fa6f404aae93e7"},{url:"reference/server.html",revision:"81b14a8bdbdaf4e96917733c576aa81c"}],{})}));
