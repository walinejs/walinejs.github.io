if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-17d2d47e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"342d6168fdf5866da7f201790e0a6698"},{url:"advanced/ecosystem.html",revision:"d16b05af080777a908d493565b59da53"},{url:"advanced/faq.html",revision:"399aa25ba85869f86af0c19bfc29a01b"},{url:"advanced/intro.html",revision:"92cb9712df1bddf6b3bfae12d6715b63"},{url:"advanced/why.html",revision:"851a4809aabe260cecd1f2a8e2ad00f0"},{url:"assets/css/959.styles.25dd6be2.css",revision:null},{url:"assets/css/styles.cc606f82.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/vercel-1.64d3645a.png",revision:null},{url:"assets/img/vercel-2.0b5723a1.png",revision:null},{url:"assets/img/vercel-3.a5983e24.png",revision:null},{url:"assets/img/vercel-4.a6c14ef7.png",revision:null},{url:"assets/img/vercel-5.a8ed3e1b.png",revision:null},{url:"assets/img/vercel-6.8c0b9f8e.png",revision:null},{url:"assets/img/vercel-7.56e75bad.png",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/3385.7fc8444c.js",revision:null},{url:"assets/js/3991.5a0b85a2.js",revision:null},{url:"assets/js/5455.38ea08c6.js",revision:null},{url:"assets/js/5556.795ebad4.js",revision:null},{url:"assets/js/801.5a037792.js",revision:null},{url:"assets/js/app.67d9f27c.js",revision:null},{url:"assets/js/runtime~app.cb7784dd.js",revision:null},{url:"assets/js/v-057c9824.94a961e4.js",revision:null},{url:"assets/js/v-058f99fc.a8399678.js",revision:null},{url:"assets/js/v-0b556720.f5dbd42c.js",revision:null},{url:"assets/js/v-1b1feb10.09b33eb1.js",revision:null},{url:"assets/js/v-1bf8da39.7a500fba.js",revision:null},{url:"assets/js/v-271aae61.58150ca8.js",revision:null},{url:"assets/js/v-27d47a79.b7ad6ca6.js",revision:null},{url:"assets/js/v-2812bd79.6c9ba38b.js",revision:null},{url:"assets/js/v-2945f13a.426ab6c2.js",revision:null},{url:"assets/js/v-2d0a870d.c3106188.js",revision:null},{url:"assets/js/v-2fad59ab.7fd60db2.js",revision:null},{url:"assets/js/v-356c0ac4.7ff4099a.js",revision:null},{url:"assets/js/v-3706649a.b427a17d.js",revision:null},{url:"assets/js/v-38007666.7d521aaa.js",revision:null},{url:"assets/js/v-396f59cd.b619fde4.js",revision:null},{url:"assets/js/v-40608902.ea46ea61.js",revision:null},{url:"assets/js/v-434e7c8c.fa56697e.js",revision:null},{url:"assets/js/v-45360123.6cfa740b.js",revision:null},{url:"assets/js/v-4819d2f6.d1be62bf.js",revision:null},{url:"assets/js/v-487079c5.db81beb4.js",revision:null},{url:"assets/js/v-4dec5b45.2b12c687.js",revision:null},{url:"assets/js/v-4f0168b2.27689c01.js",revision:null},{url:"assets/js/v-4fe1dc58.937c4576.js",revision:null},{url:"assets/js/v-50cb2a87.09c5cb7d.js",revision:null},{url:"assets/js/v-514365f1.4b3dfb39.js",revision:null},{url:"assets/js/v-533c70f7.efbe90c0.js",revision:null},{url:"assets/js/v-583b3d0d.913b9bc9.js",revision:null},{url:"assets/js/v-5ceabafb.2e4c4f1b.js",revision:null},{url:"assets/js/v-61377328.b1c18e01.js",revision:null},{url:"assets/js/v-668d9be0.3f9f3da2.js",revision:null},{url:"assets/js/v-66cc4fee.bb488942.js",revision:null},{url:"assets/js/v-67a66f17.affe2248.js",revision:null},{url:"assets/js/v-6b4d4a3d.4a646375.js",revision:null},{url:"assets/js/v-6d93dbb2.0e1e4169.js",revision:null},{url:"assets/js/v-704e8e37.4c99fec7.js",revision:null},{url:"assets/js/v-737ff092.30d09747.js",revision:null},{url:"assets/js/v-743ff88e.baaaf4d6.js",revision:null},{url:"assets/js/v-74a28670.ad3b068c.js",revision:null},{url:"assets/js/v-756ec2fc.d68d8842.js",revision:null},{url:"assets/js/v-7871496c.fc502b5c.js",revision:null},{url:"assets/js/v-7898f959.2b9dcfe9.js",revision:null},{url:"assets/js/v-7af875a7.71213ef9.js",revision:null},{url:"assets/js/v-81cb4dce.40968735.js",revision:null},{url:"assets/js/v-82949f3e.20ab0ddc.js",revision:null},{url:"assets/js/v-8daa1a0e.99c7a976.js",revision:null},{url:"assets/js/v-8dba60f6.cdb4c9d5.js",revision:null},{url:"assets/js/v-a1a49808.50fbbae5.js",revision:null},{url:"assets/js/v-a7534f04.96e40c38.js",revision:null},{url:"assets/js/v-aecc6e00.f9192e64.js",revision:null},{url:"assets/js/v-b032db80.8ffe7db3.js",revision:null},{url:"assets/js/v-b7dac982.85601853.js",revision:null},{url:"assets/js/v-c9146c5e.f331f1d0.js",revision:null},{url:"assets/js/v-d8d70e1a.81dfb5de.js",revision:null},{url:"assets/js/v-de155fda.2797ae06.js",revision:null},{url:"assets/js/v-de867450.e670fa71.js",revision:null},{url:"assets/js/v-e4322366.3dd5d33f.js",revision:null},{url:"assets/js/v-e565bdda.e1b182bb.js",revision:null},{url:"assets/js/v-e64f5648.785fcd1c.js",revision:null},{url:"assets/js/v-ee77801a.0d6bfa26.js",revision:null},{url:"assets/js/v-eff96fe2.4de90c40.js",revision:null},{url:"assets/js/v-f3ed9e5a.bea945c8.js",revision:null},{url:"assets/js/v-f4351e9e.4c0de3a8.js",revision:null},{url:"assets/js/v-ffe3a066.bec42921.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"fd269da961573a862073b5bebd2f453d"},{url:"en/advanced/faq.html",revision:"aaf61040498b46d2d23bb565ace4fdbf"},{url:"en/advanced/intro.html",revision:"b680de1d8b71b5b59a548a952a9dc660"},{url:"en/advanced/why.html",revision:"0ccea429b3d7254ab7bac6b1862a79f7"},{url:"en/guide/client/avatar.html",revision:"59906d1f077e33367bfccd2f637f6ae0"},{url:"en/guide/client/count.html",revision:"304ec19ccb53ce5f9b33d7df8d920195"},{url:"en/guide/client/emoji.html",revision:"77322194ccb74cb8fba90b535a601022"},{url:"en/guide/client/i18n.html",revision:"9649c7b6d3af659542a4550333b7d535"},{url:"en/guide/client/import.html",revision:"f5a2dd1da45af04b74b81b0fc809fb2e"},{url:"en/guide/client/intro.html",revision:"348e245703ee04402422a75cb5b26cfd"},{url:"en/guide/client/recentcomment.html",revision:"a585d18163954953fa0a92e3d2d127cf"},{url:"en/guide/client/spa.html",revision:"3a431b7e80d7168c3815da8a17ff3454"},{url:"en/guide/client/style.html",revision:"23d170a15cf5c320f9592f32f95e1c61"},{url:"en/guide/client/syntax.html",revision:"c08da3b16534bb83ad20ecce0d6de5fd"},{url:"en/guide/client/widget/index.html",revision:"b92df17aec5a7db49fefb78777853e6a"},{url:"en/guide/client/widget/recent-comment.html",revision:"344e6a0b9aeb5cdede57852fbd9d32ed"},{url:"en/guide/get-started.html",revision:"c1682eaf0305731b1809b4f1e21c68b8"},{url:"en/guide/server/databases.html",revision:"2edcef925381e0dc91f522563e00b771"},{url:"en/guide/server/intro.html",revision:"2fc0a973d8d8718432ae611bbcfc6373"},{url:"en/guide/server/notification.html",revision:"06572cd7acc85b05970eee34659d7f63"},{url:"en/guide/server/socials.html",revision:"583efa95def658d8a020fd1717c7ca52"},{url:"en/guide/server/vps-deploy.html",revision:"89d74b721df016061912167f965899cb"},{url:"en/index.html",revision:"d5fba9378391ab24de39c5fcdb269f5b"},{url:"en/migration/client.html",revision:"6a1d9acfb629620477aee77a113ac841"},{url:"en/migration/tool.html",revision:"8121111bda0e94d35ca85e6f241594c8"},{url:"en/migration/valine.html",revision:"4eb627cf0f2e738dc995eb68d1bc5417"},{url:"en/reference/api.html",revision:"7b1c9702e894ce625c845b20fd57f3a7"},{url:"en/reference/client.html",revision:"af149abc187c1085896243ed43da1263"},{url:"en/reference/contribution.html",revision:"e6516b53acdf7d0b26064480ee7bc6a7"},{url:"en/reference/instance.html",revision:"f890ee3d63fc71d55a92164e25c86f6a"},{url:"en/reference/server.html",revision:"0c09aa673af6c3d1e7d5d731fc7990b2"},{url:"guide/client/avatar.html",revision:"4e91dc8a0a985397236676247f9f4d87"},{url:"guide/client/count.html",revision:"220bdde423a81473d9cacac4a92dd7bb"},{url:"guide/client/emoji.html",revision:"6944b585ffb18895b6fc652a9976e8a2"},{url:"guide/client/i18n.html",revision:"06087a204d1b9ce6b0859d301a1e1310"},{url:"guide/client/import.html",revision:"1e20bb3662a23c232689b365a8a4662b"},{url:"guide/client/intro.html",revision:"fe3ed6e3ba05f69424bfbe0808e8f20a"},{url:"guide/client/spa.html",revision:"35e58bbfb51477a25b949dd8df66ae3e"},{url:"guide/client/style.html",revision:"79b9d24528e9a22380a57c497af132e9"},{url:"guide/client/syntax.html",revision:"d18f1f7e23cae7632daf8a636d28860a"},{url:"guide/client/widget/index.html",revision:"62e744c444d7907c6cd6b965e28f30d1"},{url:"guide/client/widget/recent-comment.html",revision:"67e5dc0e13d5819819d69b8452ece4fa"},{url:"guide/get-started.html",revision:"f502c098a3124d0f4a15e96dc63dfc57"},{url:"guide/server/cloudbase.html",revision:"4b861a671e3576c9e2ceb75254923bdd"},{url:"guide/server/databases.html",revision:"ed7ab656aec9913405841ba2c28b890a"},{url:"guide/server/intro.html",revision:"a900a5d952ead2e08a1b02ea3c5aaaba"},{url:"guide/server/notification.html",revision:"65358a4cdecd9b9f4719aa15eb362a6e"},{url:"guide/server/socials.html",revision:"fa2e5327f7db57026cb9497b2c36e845"},{url:"guide/server/vps-deploy.html",revision:"f18b90042dcd204ae96ca18617d0c8df"},{url:"index.html",revision:"8db2198b518ffe27e2155cb6768deb5b"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"0ab7b79c5d45d051dd1a9355cc785bb0"},{url:"migration/tool.html",revision:"b33316b106c4c3d6c404ac1e6d3df5a9"},{url:"migration/valine.html",revision:"ab8d1ad5949a5a7cb36f04f67d6bace7"},{url:"reference/api.html",revision:"ad89620c1e0149a116b6a141697c65e3"},{url:"reference/client.html",revision:"15dd6a8db3f56e7b5c38d38606c71b2a"},{url:"reference/contribution.html",revision:"fc5f10f641aa5ffc333ca66294cbc40f"},{url:"reference/instance.html",revision:"3767df24699a317e6f81e8690861a363"},{url:"reference/server.html",revision:"22b3b6da865f89f7e2682824b0f9ac68"}],{})}));
