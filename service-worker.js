if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,l,r)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const n={uri:location.origin+s.slice(1)};return Promise.all(l.map((s=>{switch(s){case"exports":return i;case"module":return n;default:return e(s)}}))).then((e=>{const s=r(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"89b95be9168cf4ff1aefc913a33571bf"},{url:"advanced/ecosystem.html",revision:"3def7de80b9e87c45d1f29d0ad41769b"},{url:"advanced/faq.html",revision:"83fdb106c7e25c9146a01525644d5aab"},{url:"advanced/intro.html",revision:"2a128eb409c47a32f0108485bb3603cf"},{url:"advanced/why.html",revision:"78507ae9a82e402d4c16aaa8c55843b3"},{url:"assets/css/959.styles.aaa79f25.css",revision:null},{url:"assets/css/styles.eeddaf25.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/278.9bfcc17a.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.84d90718.js",revision:null},{url:"assets/js/696.0bdb1b2e.js",revision:null},{url:"assets/js/7769.9464c4d0.js",revision:null},{url:"assets/js/app.c777dbaf.js",revision:null},{url:"assets/js/runtime~app.cbbc34c1.js",revision:null},{url:"assets/js/v-057c9824.dc8397c1.js",revision:null},{url:"assets/js/v-058f99fc.df89dfb1.js",revision:null},{url:"assets/js/v-0b556720.f7b40ac7.js",revision:null},{url:"assets/js/v-1b1feb10.6c445f34.js",revision:null},{url:"assets/js/v-1bf8da39.9c927ec9.js",revision:null},{url:"assets/js/v-271aae61.6948e6ed.js",revision:null},{url:"assets/js/v-27d47a79.deba827d.js",revision:null},{url:"assets/js/v-2812bd79.d121a3e5.js",revision:null},{url:"assets/js/v-2945f13a.65f84d1b.js",revision:null},{url:"assets/js/v-2d0a870d.7b858207.js",revision:null},{url:"assets/js/v-2fad59ab.c5dac155.js",revision:null},{url:"assets/js/v-356c0ac4.0781b078.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-38007666.329e8093.js",revision:null},{url:"assets/js/v-396f59cd.53d53f88.js",revision:null},{url:"assets/js/v-40608902.f7e2fd3d.js",revision:null},{url:"assets/js/v-434e7c8c.1d55e9a1.js",revision:null},{url:"assets/js/v-45360123.e80fc246.js",revision:null},{url:"assets/js/v-4819d2f6.d0e9b2b3.js",revision:null},{url:"assets/js/v-487079c5.ffca13a3.js",revision:null},{url:"assets/js/v-4dec5b45.88b760e7.js",revision:null},{url:"assets/js/v-4f0168b2.017a4b6b.js",revision:null},{url:"assets/js/v-4fe1dc58.eab29fee.js",revision:null},{url:"assets/js/v-50cb2a87.d5661c43.js",revision:null},{url:"assets/js/v-514365f1.c1379c67.js",revision:null},{url:"assets/js/v-533c70f7.6a8cc572.js",revision:null},{url:"assets/js/v-583b3d0d.879cefc4.js",revision:null},{url:"assets/js/v-5ceabafb.d18ee574.js",revision:null},{url:"assets/js/v-61377328.4793903f.js",revision:null},{url:"assets/js/v-668d9be0.8f63fd59.js",revision:null},{url:"assets/js/v-66cc4fee.66d0b0be.js",revision:null},{url:"assets/js/v-67a66f17.45ecfc19.js",revision:null},{url:"assets/js/v-6b4d4a3d.f1224588.js",revision:null},{url:"assets/js/v-6d93dbb2.d85a4226.js",revision:null},{url:"assets/js/v-704e8e37.3f64e50f.js",revision:null},{url:"assets/js/v-737ff092.eb76d393.js",revision:null},{url:"assets/js/v-743ff88e.425f1493.js",revision:null},{url:"assets/js/v-74a28670.d80172a8.js",revision:null},{url:"assets/js/v-756ec2fc.3c9f2399.js",revision:null},{url:"assets/js/v-7871496c.9ab48d76.js",revision:null},{url:"assets/js/v-7898f959.f35e113d.js",revision:null},{url:"assets/js/v-7af875a7.b816c141.js",revision:null},{url:"assets/js/v-81cb4dce.409c7972.js",revision:null},{url:"assets/js/v-82949f3e.c86c3c4c.js",revision:null},{url:"assets/js/v-8daa1a0e.e55d4614.js",revision:null},{url:"assets/js/v-8dba60f6.04ca22b5.js",revision:null},{url:"assets/js/v-a1a49808.8b8088df.js",revision:null},{url:"assets/js/v-a7534f04.d59680bb.js",revision:null},{url:"assets/js/v-aecc6e00.55f54daf.js",revision:null},{url:"assets/js/v-b032db80.58322e34.js",revision:null},{url:"assets/js/v-b7dac982.750d59d9.js",revision:null},{url:"assets/js/v-c9146c5e.e8ef4064.js",revision:null},{url:"assets/js/v-d8d70e1a.8e5e2075.js",revision:null},{url:"assets/js/v-de155fda.749da966.js",revision:null},{url:"assets/js/v-de867450.fa22a420.js",revision:null},{url:"assets/js/v-e4322366.9717c705.js",revision:null},{url:"assets/js/v-e565bdda.8abee9ec.js",revision:null},{url:"assets/js/v-e64f5648.e99ae111.js",revision:null},{url:"assets/js/v-ee77801a.3dfb5465.js",revision:null},{url:"assets/js/v-eff96fe2.d6f7b293.js",revision:null},{url:"assets/js/v-f3ed9e5a.e87b9edf.js",revision:null},{url:"assets/js/v-f4351e9e.b8cf740a.js",revision:null},{url:"assets/js/v-ffe3a066.c494febc.js",revision:null},{url:"en/advanced/ecosystem.html",revision:"a245e3670b18eb16d3ccb8010412e67e"},{url:"en/advanced/faq.html",revision:"df418311dffba765a6beef4c93900ef4"},{url:"en/advanced/intro.html",revision:"3e7dd91292f64b35b4e5995e26afc24b"},{url:"en/advanced/why.html",revision:"ee5223cd11495cbfc2d48394b5457f5a"},{url:"en/guide/client/avatar.html",revision:"0e843198ed83e0e92944316f9ac36f2a"},{url:"en/guide/client/count.html",revision:"bb23f9a513c5ea4270557d372e57fbc5"},{url:"en/guide/client/emoji.html",revision:"7e30aadf2eafd1d25c540a33be581ab2"},{url:"en/guide/client/i18n.html",revision:"69ac7325b4a335af86278a41a87fd879"},{url:"en/guide/client/import.html",revision:"55fbe7ef724a1b036e736ddb7f3aabe1"},{url:"en/guide/client/intro.html",revision:"1547a2e3d46d8465ef6524b362c816e8"},{url:"en/guide/client/recentcomment.html",revision:"e539880ad5e9da2fff83fee9418f940d"},{url:"en/guide/client/spa.html",revision:"8b6c118822877c72379292aa781cfb35"},{url:"en/guide/client/style.html",revision:"7863326878fc83ad384a5f155a7c7476"},{url:"en/guide/client/syntax.html",revision:"d986ae216d3989cb065105d0c3812e8c"},{url:"en/guide/client/widget/index.html",revision:"491e9da742678aa4dd7598502b28f0d0"},{url:"en/guide/client/widget/recent-comment.html",revision:"f32ecf5efb23708225a879eedfe76f6f"},{url:"en/guide/get-started.html",revision:"bb127e142334b23444606fc88af40682"},{url:"en/guide/server/databases.html",revision:"9c43346532358cb67ac131f65b9693f7"},{url:"en/guide/server/intro.html",revision:"a4be85ebc2b2d712b6ddd9d0baeb85cc"},{url:"en/guide/server/notification.html",revision:"fa84fbf85b25df1c567a537aebb82163"},{url:"en/guide/server/socials.html",revision:"9c2518309e3b1e0756dda0e8e1f48174"},{url:"en/guide/server/vps-deploy.html",revision:"904cf990105e805d5a70f1a489ca3960"},{url:"en/index.html",revision:"23636a9129d5a843aa74318357721f23"},{url:"en/migration/client.html",revision:"bf807c5432fe9a23f9fc44995a82b055"},{url:"en/migration/tool.html",revision:"aceed2f5d024ac78ba95bb54699b2060"},{url:"en/migration/valine.html",revision:"c1c3a663f5ebf42bdf0f731e75cbc4e9"},{url:"en/reference/api.html",revision:"c2ae6ac539a2a4ac445fba92505d90d9"},{url:"en/reference/client.html",revision:"654b34a9d2ce51463f8fa51473c2ed5b"},{url:"en/reference/contribution.html",revision:"6bf542e8253c9debdf2709b1b90a1e88"},{url:"en/reference/instance.html",revision:"dc96493659b8def3265cebdd0644fe81"},{url:"en/reference/server.html",revision:"24a577d82eb99f96ef6a113bdbd6c081"},{url:"guide/client/avatar.html",revision:"dab2798f2eac79cf4656962ffcb1f50e"},{url:"guide/client/count.html",revision:"d85de78f41411bcf77883c6cc6fd2647"},{url:"guide/client/emoji.html",revision:"0423c7e5be4d1853f39d6cbdd6901667"},{url:"guide/client/i18n.html",revision:"ffe7645e4a10f71ceda6f1ac787bbfe4"},{url:"guide/client/import.html",revision:"df3798b02f59695c9bee90d6d99e9187"},{url:"guide/client/intro.html",revision:"7ac89cb8f10e0338aa75055248fe7f60"},{url:"guide/client/spa.html",revision:"120a58c3779dbfc8ec605ebb3d7df67a"},{url:"guide/client/style.html",revision:"846e657ea9c39dfb1b2ce8d05ad348dd"},{url:"guide/client/syntax.html",revision:"7b1c890b8aea6e89364439e772b6eeaa"},{url:"guide/client/widget/index.html",revision:"b70b8e43c371ee68752727612662e073"},{url:"guide/client/widget/recent-comment.html",revision:"d1bdad900daa844b0d8aa7e1abe548f7"},{url:"guide/get-started.html",revision:"72120a0964184d4bdedde4979b26b24d"},{url:"guide/server/cloudbase.html",revision:"e125c782fe99fc81d3e586779c27b032"},{url:"guide/server/databases.html",revision:"0fd90a9b112e4a4c7ae42bba386c8c7d"},{url:"guide/server/intro.html",revision:"8b6a2352ac89be69aa3fff0bfba6b747"},{url:"guide/server/notification.html",revision:"e4cbca5f9920d4e47155739f1289c23c"},{url:"guide/server/socials.html",revision:"d497f6e8b57049414c10dc58fd679543"},{url:"guide/server/vps-deploy.html",revision:"6196f2025c922d75fabb4583c38e2967"},{url:"index.html",revision:"3ee685a9777775321bb884804875d02b"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration/client.html",revision:"6cad0796961c445388f8e291398bd7aa"},{url:"migration/tool.html",revision:"93a7e87ca275a17af31e983343792397"},{url:"migration/valine.html",revision:"e8a38c7eca13b1103032cf3636beeb8f"},{url:"reference/api.html",revision:"e2de095d0a6ddaba9028a6967f9ed31e"},{url:"reference/client.html",revision:"773ad308c10e09ca93adf717e684bd68"},{url:"reference/contribution.html",revision:"6b7e7c74b4f3014abc52e442064995c9"},{url:"reference/instance.html",revision:"dce5f13b59a5c14f198415b39a37c276"},{url:"reference/server.html",revision:"8a4c2c8439ad39dc618036bc0c9f8401"}],{})}));
