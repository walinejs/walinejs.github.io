if(!self.define){const s=s=>{"require"!==s&&(s+=".js");let e=Promise.resolve();return l[s]||(e=new Promise((async e=>{if("document"in self){const l=document.createElement("script");l.src=s,document.head.appendChild(l),l.onload=e}else importScripts(s),e()}))),e.then((()=>{if(!l[s])throw new Error(`Module ${s} didn’t register its module`);return l[s]}))},e=(e,l)=>{Promise.all(e.map(s)).then((s=>l(1===s.length?s[0]:s)))},l={require:Promise.resolve(e)};self.define=(e,i,r)=>{l[e]||(l[e]=Promise.resolve().then((()=>{let l={};const a={uri:location.origin+e.slice(1)};return Promise.all(i.map((e=>{switch(e){case"exports":return l;case"module":return a;default:return s(e)}}))).then((s=>{const e=r(...s);return l.default||(l.default=e),l}))})))}}define("./service-worker.js",["./workbox-8260947c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"7f207a55216fd7224fdda8b32be99879"},{url:"api.html",revision:"523aa033cfad4c0a3abda17beb357e81"},{url:"assets/css/959.styles.be96f9e1.css",revision:null},{url:"assets/css/styles.67a29ccc.css",revision:null},{url:"assets/icon/android-chrome-192x192.png",revision:"71dc0d4cd52c4a33d3e38927a82b2472"},{url:"assets/icon/android-chrome-512x512.png",revision:"03608e3b7c9c3b82e2df94d20c27a850"},{url:"assets/icon/apple-touch-icon.png",revision:"8a175eb9cf375535d0fc7ec2022fb153"},{url:"assets/icon/favicon-16x16.png",revision:"558a15514f2be5eba384aefda2b31848"},{url:"assets/icon/favicon-32x32.png",revision:"dd9cf3bff35968e717c10626eaf4f3f9"},{url:"assets/img/cloudbase-update.0e0678ab.jpg",revision:null},{url:"assets/img/search.b017a09f.svg",revision:null},{url:"assets/img/vercel-update.24818433.png",revision:null},{url:"assets/js/1444.ada29c41.js",revision:null},{url:"assets/js/3385.d51c2451.js",revision:null},{url:"assets/js/5121.84d90718.js",revision:null},{url:"assets/js/696.9e72a614.js",revision:null},{url:"assets/js/7645.04e88a34.js",revision:null},{url:"assets/js/app.8ac1a4bd.js",revision:null},{url:"assets/js/runtime~app.565becd4.js",revision:null},{url:"assets/js/v-054e1cac.150a1d4a.js",revision:null},{url:"assets/js/v-092a1d7c.ba77d0c5.js",revision:null},{url:"assets/js/v-09c7ed44.b556e660.js",revision:null},{url:"assets/js/v-0a58bfd6.e000df66.js",revision:null},{url:"assets/js/v-0a65e4f0.19b8fe88.js",revision:null},{url:"assets/js/v-0d9af0f8.c6829dfe.js",revision:null},{url:"assets/js/v-14ef8f54.b74c7103.js",revision:null},{url:"assets/js/v-184f4da6.e89055b2.js",revision:null},{url:"assets/js/v-1cc730e0.7e5a7966.js",revision:null},{url:"assets/js/v-1e4ffceb.19f114ec.js",revision:null},{url:"assets/js/v-217ca71c.14881631.js",revision:null},{url:"assets/js/v-21ce7906.0055f9ba.js",revision:null},{url:"assets/js/v-23bc384a.c740d3fa.js",revision:null},{url:"assets/js/v-29b14426.941ef54d.js",revision:null},{url:"assets/js/v-2d0a870d.3bebadaf.js",revision:null},{url:"assets/js/v-2e51b23d.c0b82b33.js",revision:null},{url:"assets/js/v-368e89a9.6594f632.js",revision:null},{url:"assets/js/v-3706649a.b0c001d9.js",revision:null},{url:"assets/js/v-3d848b0f.7ec5a913.js",revision:null},{url:"assets/js/v-40e068b3.9162a457.js",revision:null},{url:"assets/js/v-4183ed95.73fad041.js",revision:null},{url:"assets/js/v-46a7ea18.c1c4c886.js",revision:null},{url:"assets/js/v-496889ff.75dd074a.js",revision:null},{url:"assets/js/v-4cefb074.0187bb0e.js",revision:null},{url:"assets/js/v-4dfe01c2.394157d1.js",revision:null},{url:"assets/js/v-538e5d90.9d6037a6.js",revision:null},{url:"assets/js/v-56fef156.28e00843.js",revision:null},{url:"assets/js/v-57ff310c.cccb772c.js",revision:null},{url:"assets/js/v-5aa3d8ba.eb519cea.js",revision:null},{url:"assets/js/v-619e8be8.6cf92d27.js",revision:null},{url:"assets/js/v-65385b3e.95d39ab8.js",revision:null},{url:"assets/js/v-69539cc2.0d6a97dd.js",revision:null},{url:"assets/js/v-6b1abec5.b85a9bb2.js",revision:null},{url:"assets/js/v-6c0089f0.b52eafec.js",revision:null},{url:"assets/js/v-6f107c0a.5c3b2967.js",revision:null},{url:"assets/js/v-765af2fb.32b3d87f.js",revision:null},{url:"assets/js/v-7af875a7.3fcf62cd.js",revision:null},{url:"assets/js/v-8d1687c4.0ce42be0.js",revision:null},{url:"assets/js/v-8daa1a0e.e37d21e0.js",revision:null},{url:"assets/js/v-9b69fda0.a7f19ed0.js",revision:null},{url:"assets/js/v-9db160c0.d605f302.js",revision:null},{url:"assets/js/v-a513b6ae.c1cf9c65.js",revision:null},{url:"assets/js/v-b311edf8.da6efd2d.js",revision:null},{url:"assets/js/v-baf30948.a7995ad8.js",revision:null},{url:"assets/js/v-d1a275dc.53616447.js",revision:null},{url:"assets/js/v-da1792fe.a21f0184.js",revision:null},{url:"assets/js/v-e4ae627c.7de38897.js",revision:null},{url:"assets/js/v-e565bdda.cecf8b99.js",revision:null},{url:"assets/js/v-e8c8bc44.4cf8e7ce.js",revision:null},{url:"assets/js/v-ecff39dc.ecde2daf.js",revision:null},{url:"assets/js/v-f64bccb4.544a1b0e.js",revision:null},{url:"cdn.html",revision:"6b1bad6d39ea14a604c77339c004917e"},{url:"client/avatar.html",revision:"d39f0151e2440cc3f8ff3fa72d4f74d0"},{url:"client/basic.html",revision:"ea1e5b65029b71894ec3c4035b14eed8"},{url:"client/count.html",revision:"8e3d0236607d6ce3e31e42e49cf0d4ac"},{url:"client/emoji.html",revision:"252294c2383acb96d4319aaeee5d100d"},{url:"client/i18n.html",revision:"155f3823b8a1cd665ae57276dc6a3e7f"},{url:"client/recentcomment.html",revision:"d0fed820ddfacd2168853767b78f1fc2"},{url:"client/style.html",revision:"0cfb78fea6d5f1b87815e68dd19396d0"},{url:"client/visitor.html",revision:"9bfa0eb4e4641d18e1b1c26f59e093f0"},{url:"contribution.html",revision:"7b272709ba756784e583dd9ef46d1767"},{url:"ecosystem.html",revision:"9ccb5979b7477028386050fd8a55db0e"},{url:"en/api.html",revision:"dff1fff1f551b6c13669c8682ec190ad"},{url:"en/client/avatar.html",revision:"71abcdb42e2b9e2f7e53d83be62a1f5b"},{url:"en/client/basic.html",revision:"533660ca24546fef11d2c90b06fa040c"},{url:"en/client/count.html",revision:"15c7851c54a481ceb293c23048fe698a"},{url:"en/client/emoji.html",revision:"9451a28d81f9eca140a8ab2e1c8301f5"},{url:"en/client/i18n.html",revision:"344b80f1a2047b9a7c22a86534e5775a"},{url:"en/client/recentcomment.html",revision:"e5945af719ab4b53093e23e15203a7f9"},{url:"en/client/style.html",revision:"ec7712bff152c0fd2c497fc74340c6ee"},{url:"en/client/visitor.html",revision:"9a3ccd643a5589a19fa625d062ccdc02"},{url:"en/contribution.html",revision:"8bff7a1e6ad517ad2c5fec5580a2d8ae"},{url:"en/ecosystem.html",revision:"bb47707238a24c6b2e01f92091be0390"},{url:"en/faq.html",revision:"41a57b4a35fd7ebc609c8dca16777409"},{url:"en/get-started.html",revision:"d6c7cd9b70b3c0f9c08ab0d1ac6551bc"},{url:"en/index.html",revision:"189ec078555466db3216b0b4e96491a9"},{url:"en/intro.html",revision:"c00d13ff4d8417db7bb540bfeb35da88"},{url:"en/migration.html",revision:"e3cf0f3344aeb296d29ad1ccc52a4251"},{url:"en/migration/tool.html",revision:"f6e6e1154fc89d201fc91dfb4b0c48f6"},{url:"en/server/basic.html",revision:"c95926a2dd186e26882ad5e448e5280e"},{url:"en/server/databases.html",revision:"3d3aef4e7695e0cc934b5fc5ba16df94"},{url:"en/server/notification.html",revision:"259d239ad74bddb71b7ba918f0b3ec3c"},{url:"en/server/socials.html",revision:"31601ebf600e563da202574ff1aaad13"},{url:"en/server/vps-deploy.html",revision:"5b5fb1f9abcbb2e8f8faf96c606e8bce"},{url:"en/syntax.html",revision:"ee8c0d477b2328d8a7941d1ad52002ac"},{url:"en/why.html",revision:"6fd4d62852a4437970ce42913154b4b9"},{url:"faq.html",revision:"dc875f26a7826e2ecc80702cea898e45"},{url:"get-started.html",revision:"a03fee7977a3a02a5184353dd19d42d9"},{url:"index.html",revision:"db4d2d8d23b492766b4590c06dfd422f"},{url:"intro.html",revision:"83f4db6a8e6c0ee9523786f8ef3484fe"},{url:"logo.png",revision:"822431d8256fdb9290ac61556c8b1034"},{url:"migration.html",revision:"cb311e2c1e3e093e9b005f6ec97a9ae2"},{url:"migration/tool.html",revision:"0394a55599dba325a8006c01c63b9b74"},{url:"server/basic.html",revision:"4e00ba01fb55d4a5d93faf34887213a3"},{url:"server/cloudbase.html",revision:"368c780ee6fa07b138b6c58186b73a7a"},{url:"server/databases.html",revision:"30577e7a381341484f9de02f95b966b5"},{url:"server/notification.html",revision:"3939b391f31eb4fba3e785d062ea78cc"},{url:"server/socials.html",revision:"16988b46373bca3a6b3c2d834bea3f21"},{url:"server/vps-deploy.html",revision:"c5b953ab8c2b5e5d9da3f0df129337b5"},{url:"syntax.html",revision:"c913b16b2fd8108cf15db7e0ad1ffa8b"},{url:"why.html",revision:"7c76381d37ed27bda51d5b0486201288"}],{})}));
