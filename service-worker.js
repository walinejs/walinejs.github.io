if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return l[s]||(e=new Promise((async e=>{if("document"in self){const l=document.createElement("script");l.src=s,document.head.appendChild(l),l.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!l[s])throw new Error(`Module ${s} didn’t register its module`);return l[s]}))},e=(e,l)=>{Promise.all(e.map(s)).then((s=>l(1===s.length?s[0]:s)))},l={require:Promise.resolve(e)};self.define=(e,i,r)=>{l[e]||(l[e]=Promise.resolve().then((()=>{let l={};const a={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return l;case"module":return a;default:return s(e)}}))).then((s=>{const e=r(...s);return l.default||(l.default=e),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"ac7bedca95805ddc1388327348a0c3a0"},{url:"api.html",revision:"e03d37a06340df1af5da1d25a13edd41"},{url:"assets/css/959.styles.be96f9e1.css",revision:null},{url:"assets/css/styles.67a29ccc.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1444.ada29c41.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.84d90718.js",revision:null},{url:"assets/js/696.9e72a614.js",revision:null},{url:"assets/js/7645.04e88a34.js",revision:null},{url:"assets/js/app.5267b28c.js",revision:null},{url:"assets/js/runtime~app.dc6503a4.js",revision:null},{url:"assets/js/v-054e1cac.ef1efd5a.js",revision:null},{url:"assets/js/v-092a1d7c.5a1153eb.js",revision:null},{url:"assets/js/v-09c7ed44.5c5932f4.js",revision:null},{url:"assets/js/v-0a58bfd6.08c8697d.js",revision:null},{url:"assets/js/v-0a65e4f0.cc6aba29.js",revision:null},{url:"assets/js/v-0d9af0f8.4c83b2b1.js",revision:null},{url:"assets/js/v-14ef8f54.680852e3.js",revision:null},{url:"assets/js/v-184f4da6.3d27c1df.js",revision:null},{url:"assets/js/v-1cc730e0.99277d0b.js",revision:null},{url:"assets/js/v-1e4ffceb.1705c6f4.js",revision:null},{url:"assets/js/v-217ca71c.6a1d7171.js",revision:null},{url:"assets/js/v-21ce7906.0f87a9ec.js",revision:null},{url:"assets/js/v-23bc384a.94791464.js",revision:null},{url:"assets/js/v-29b14426.87131e31.js",revision:null},{url:"assets/js/v-2d0a870d.1adebed2.js",revision:null},{url:"assets/js/v-2e51b23d.1876fb5b.js",revision:null},{url:"assets/js/v-368e89a9.3eecbe41.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-3d848b0f.ca841ac5.js",revision:null},{url:"assets/js/v-40e068b3.8fc47685.js",revision:null},{url:"assets/js/v-4183ed95.6aabf585.js",revision:null},{url:"assets/js/v-46a7ea18.86eb4f2d.js",revision:null},{url:"assets/js/v-496889ff.66cea806.js",revision:null},{url:"assets/js/v-4cefb074.67dbc662.js",revision:null},{url:"assets/js/v-4dfe01c2.930708d9.js",revision:null},{url:"assets/js/v-538e5d90.66e35747.js",revision:null},{url:"assets/js/v-56fef156.bbff812e.js",revision:null},{url:"assets/js/v-57ff310c.48953db8.js",revision:null},{url:"assets/js/v-5aa3d8ba.671a8ad8.js",revision:null},{url:"assets/js/v-619e8be8.d9c621dc.js",revision:null},{url:"assets/js/v-65385b3e.f7586bf9.js",revision:null},{url:"assets/js/v-69539cc2.8c60df3b.js",revision:null},{url:"assets/js/v-6b1abec5.6f869864.js",revision:null},{url:"assets/js/v-6c0089f0.a66cb5e4.js",revision:null},{url:"assets/js/v-6f107c0a.76425d01.js",revision:null},{url:"assets/js/v-765af2fb.ede76700.js",revision:null},{url:"assets/js/v-7af875a7.372f4545.js",revision:null},{url:"assets/js/v-8d1687c4.34766048.js",revision:null},{url:"assets/js/v-8daa1a0e.ef436cb7.js",revision:null},{url:"assets/js/v-9b69fda0.056f0b5a.js",revision:null},{url:"assets/js/v-9db160c0.8223455c.js",revision:null},{url:"assets/js/v-a513b6ae.11b034b6.js",revision:null},{url:"assets/js/v-b311edf8.8ba304c1.js",revision:null},{url:"assets/js/v-baf30948.704f2f88.js",revision:null},{url:"assets/js/v-d1a275dc.6c4346a6.js",revision:null},{url:"assets/js/v-da1792fe.a3334ffb.js",revision:null},{url:"assets/js/v-e4ae627c.b58165c4.js",revision:null},{url:"assets/js/v-e565bdda.67a31fcc.js",revision:null},{url:"assets/js/v-e8c8bc44.15455f8f.js",revision:null},{url:"assets/js/v-ecff39dc.d0d5b558.js",revision:null},{url:"assets/js/v-f64bccb4.911722f1.js",revision:null},{url:"cdn.html",revision:"0229ff5f0eda113f1edb3b37ea4a2be0"},{url:"client/avatar.html",revision:"753850b356d174c89b5376d1bcf33eaf"},{url:"client/basic.html",revision:"d220972ae5dd72f313d13e1430133fc1"},{url:"client/count.html",revision:"1ea6efa3ae868924af0b7a7a58f13c2d"},{url:"client/emoji.html",revision:"031c772171774abaf027d648c998583f"},{url:"client/i18n.html",revision:"7c175b520fdd08b4b76ba6e2ec979ebf"},{url:"client/recentcomment.html",revision:"e19fe0504e52da30fc5720a70854febb"},{url:"client/style.html",revision:"bdef5f20c2e8b84af26f3c7dfbd77f92"},{url:"client/visitor.html",revision:"a79f4a7209cf1618384973a8899f0e0a"},{url:"contribution.html",revision:"9042ce0690beac754d50e15054237ff1"},{url:"ecosystem.html",revision:"afb490dff3cc187f27a0bd1d7a38f736"},{url:"en/api.html",revision:"eaf0382f85c41b8c98723f27f85ea06b"},{url:"en/client/avatar.html",revision:"d3f65691f3d76ffaa3f9721c3093e1c9"},{url:"en/client/basic.html",revision:"50e12a3248deb79a0b1c596e4b9650dd"},{url:"en/client/count.html",revision:"b17407efe7399e195acbc3e7121c396b"},{url:"en/client/emoji.html",revision:"fb78fa0d4f5fcb68df2b38eb15772d36"},{url:"en/client/i18n.html",revision:"a2b036c37ed903e650a25659ac9b514d"},{url:"en/client/recentcomment.html",revision:"fad841e69949fd1f082ba693c0ac1470"},{url:"en/client/style.html",revision:"a5a45faabeed4a24212b029705bfb613"},{url:"en/client/visitor.html",revision:"264b87322b889f7a8b67ba3c652a2235"},{url:"en/contribution.html",revision:"49601b3c66200c69d35a6ebdb62cd879"},{url:"en/ecosystem.html",revision:"e35f4ff0349bb8189124ef0aa702102b"},{url:"en/faq.html",revision:"6236351ab89155e2b3f6e46f0efc1ed8"},{url:"en/get-started.html",revision:"26197a22469608a23e0c72de2182c492"},{url:"en/index.html",revision:"7bc8f226101a0da1ccce4ddf54989ce4"},{url:"en/intro.html",revision:"a3fc1b1eaf0deca1c57e267ec9503bfd"},{url:"en/migration.html",revision:"3a738c98120c9bebd3e152048ceb472d"},{url:"en/migration/tool.html",revision:"18f7feb91e0ee345b33e220552078290"},{url:"en/server/basic.html",revision:"6b42047e573283d9ff4a122dd61ba157"},{url:"en/server/databases.html",revision:"55d03d3f6ebf8810882b76f1af5d1b2c"},{url:"en/server/notification.html",revision:"4cea51ffe6b8bbe5dd0f94443e5362f4"},{url:"en/server/socials.html",revision:"16e881637df069929d0b5f1e5bcd52d0"},{url:"en/server/vps-deploy.html",revision:"5c6eeef0fe01f584b46aeb4f8ac2da2b"},{url:"en/syntax.html",revision:"1ea47368e1d42cdbf576f42ed0e097dc"},{url:"en/why.html",revision:"6a1bbde3a998e7744da8391cb0f2a0c4"},{url:"faq.html",revision:"4a1c5a03e519c43ac52877f276f609f9"},{url:"get-started.html",revision:"8abfdb3de94c7cb6d2479b3e890176eb"},{url:"index.html",revision:"3211bf9931604231ca5d53aa08b09a74"},{url:"intro.html",revision:"a35f572e695d2846431f27af22dcfd3b"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration.html",revision:"4bf9dca4e50da4f7dc97ebce78e021e5"},{url:"migration/tool.html",revision:"e8f5aa806234b421eabcb85e319c10ad"},{url:"server/basic.html",revision:"adff00dacebbbe2ee04ee2e33fb7e427"},{url:"server/cloudbase.html",revision:"5200c96c6a0ec0e5706c09d78aa5918d"},{url:"server/databases.html",revision:"bb845849e3392196dcb3a1e4dc6f9306"},{url:"server/notification.html",revision:"c39e80c804bfdcd6543ef0d8474ba03a"},{url:"server/socials.html",revision:"2eebc3f83b3652dd8d0c1f8a4f105bd8"},{url:"server/vps-deploy.html",revision:"16231f006053a1094ec93d688290d020"},{url:"syntax.html",revision:"4456dd83ae74df44767e9020fa69bd5e"},{url:"why.html",revision:"dbc3e29d6d27a7515275f28833cd32ce"}],{})}));
