if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const b=e=>a(e,i),r={module:{uri:i},exports:d,require:b};s[i]=Promise.all(c.map((e=>r[e]||b(e)))).then((e=>(f(...e),d)))}}define(["./workbox-0f878b90"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Waline"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.525422ac.js",revision:"c617c0751ed829776daefb676312c30a"},{url:"assets/404.html.59dab184.js",revision:"030bebdb4acb19ac07e84ce2e54effbb"},{url:"assets/aliyun-fc.html.4b84ec15.js",revision:"e8975463edc930818fe6feefe21e0c7c"},{url:"assets/aliyun-fc.html.c0978031.js",revision:"604d6c687bcf8178c0a3f5aaaf4d86c6"},{url:"assets/api.html.810b4f4f.js",revision:"72437e2cef10a67fb625a9a429dafad7"},{url:"assets/api.html.94f0de52.js",revision:"6dce8e74faa23a038c8e3088ff1f99b8"},{url:"assets/api.html.a7b3abdf.js",revision:"8fbb67f5801caace001fd96cad354198"},{url:"assets/api.html.e6f6dfa8.js",revision:"c8d6b41d6df21e16a6a28e8c9379a6a9"},{url:"assets/app.77e42fb2.js",revision:"e338f41a792153c61c8890be4f5d2d16"},{url:"assets/baidu-cfc.html.3287795d.js",revision:"ec95aa517407815b5111e7a9da335895"},{url:"assets/baidu-cfc.html.e3413258.js",revision:"768b094b483c7faa65fb419b093ae846"},{url:"assets/client-v1.html.3c920667.js",revision:"1aef2fe9d918f979d9d514e8e81e0710"},{url:"assets/client-v1.html.8d9581e1.js",revision:"4b898760eba049d1e3a16c6f934aac69"},{url:"assets/client-v1.html.d4a0cac2.js",revision:"72aa5dac8ff8ca8e57ede5cababfc74a"},{url:"assets/client-v1.html.efcd154c.js",revision:"d12a772b1d7c6d3f914b94c7bee6b458"},{url:"assets/client.html.0e809f91.js",revision:"77af6f715b6bee618b6fa551067cdfa8"},{url:"assets/client.html.4b9118f3.js",revision:"ee9e9c1c1432a3541432a4724f0117b2"},{url:"assets/client.html.54a43517.js",revision:"aa8c12b1a4791b39fa524ab100557cf9"},{url:"assets/client.html.79980020.js",revision:"c4f25783280f27a7892833e1b808c80b"},{url:"assets/client.html.a20a1969.js",revision:"3ace4b7a3d72d462acb75e2b23b4bcc2"},{url:"assets/client.html.b7679de7.js",revision:"7d02e6b502cb16ab3f07c49ffa0e842e"},{url:"assets/client.html.cb2f2c1d.js",revision:"fe0d0aa825ac6763d3570a1f0f08382a"},{url:"assets/client.html.f8920576.js",revision:"a88b532c8a1b401196baeb6e27d6ad08"},{url:"assets/cloudbase.html.6bf56434.js",revision:"76f9bba71366fdac5ba151eaa040eeae"},{url:"assets/cloudbase.html.f1661191.js",revision:"ff1e3c50b98373cc20e3c2d8ee68a0b6"},{url:"assets/comment.html.153a760f.js",revision:"5c47f8981847fbb99efcef8bc103503a"},{url:"assets/comment.html.5b912cf6.js",revision:"17ba02b65c6f3fc26f1349851e63b21b"},{url:"assets/comment.html.b99d107c.js",revision:"ecb7fe7204c4264ba1c9f6f9d959a877"},{url:"assets/comment.html.d3079423.js",revision:"3a4455c07c5a49c3009610a488548f0a"},{url:"assets/component.html.3b66d5c0.js",revision:"8c58ad8b03f3c2af568f6d51416df020"},{url:"assets/component.html.59a73cc3.js",revision:"87ac429b88c10eed7e8d6a7234c03c87"},{url:"assets/component.html.a6f13911.js",revision:"30f829493000fbe324fdd72918fdb928"},{url:"assets/component.html.c15b39bc.js",revision:"0dd2a11ac79c545e5ddd5e891e1f3ffd"},{url:"assets/component.html.dd820e4a.js",revision:"feb76ec5567357c8d6f076e2bf2b9017"},{url:"assets/component.html.e0151841.js",revision:"35ad2dfc17b357633317aa9fabc844b7"},{url:"assets/component.html.e22826a8.js",revision:"8a847e81536dc148a04811228c434bac"},{url:"assets/component.html.ef0b441c.js",revision:"a3180252c65d59255cd3c0841d196a28"},{url:"assets/contribution.html.54bda207.js",revision:"df892d933ae507e63109415db396fe8d"},{url:"assets/contribution.html.7a768378.js",revision:"2d1c66cfd6030a2b3eef09d47fafd0a7"},{url:"assets/contribution.html.81db3f7b.js",revision:"30e1b12c742aaf656deebc5cb09137b5"},{url:"assets/contribution.html.bf87a308.js",revision:"36894ff591acf57eb8b604e82785ba7e"},{url:"assets/databases.html.09860e80.js",revision:"d36eb07a11f4b2f31575bd987165b59b"},{url:"assets/databases.html.52929799.js",revision:"248651a59385c851e2db5fa59b9518b3"},{url:"assets/databases.html.ea5f8466.js",revision:"2f1ec1adf9a1541f576024cbf443bfcf"},{url:"assets/databases.html.f62f7cde.js",revision:"a0614224947e7e0817ff08b1e47f7ae6"},{url:"assets/deta-3.b9909335.js",revision:"443c5da9bf9fd03552aa1d00774f2510"},{url:"assets/deta.html.1ea02e30.js",revision:"53b281784d32915b7ef629168d19990c"},{url:"assets/deta.html.80c7ec91.js",revision:"dbf9200241ed766d73f491e21aecfe42"},{url:"assets/deta.html.9d414c97.js",revision:"6d7dd17587862645969c9fa2a12e2e04"},{url:"assets/deta.html.d61ba2d4.js",revision:"916e40d82712b706382767a129890579"},{url:"assets/ecosystem.html.27dac502.js",revision:"6682e2a80caf57e928038205dd193650"},{url:"assets/ecosystem.html.5bf92d55.js",revision:"20571481ef8bf1e202d41197bf4284bb"},{url:"assets/ecosystem.html.c0304483.js",revision:"82b77e697c85ff972b6076c82e561d26"},{url:"assets/ecosystem.html.e9b200e9.js",revision:"cdd2b009af59fc2a4e7e77f27b932b85"},{url:"assets/emoji.html.8153334a.js",revision:"1b61d9f79a367f366638ca9518fea3fc"},{url:"assets/emoji.html.c1e84d89.js",revision:"300bc439e019f1bba41c5c37c760a699"},{url:"assets/emoji.html.cb67540f.js",revision:"023721721c944caf0382241987377b12"},{url:"assets/emoji.html.d7aab721.js",revision:"533f09b0b0188facd7e8c34064ddd20d"},{url:"assets/faq.html.3c28c8a9.js",revision:"3c4b4251013a30b21ea57991958fe7ba"},{url:"assets/faq.html.8fad8a08.js",revision:"0e2691d6fc0823e9de5230a45e44bd85"},{url:"assets/faq.html.d7ef5823.js",revision:"7bd96476d68452b1ed0fb457bf4cf012"},{url:"assets/faq.html.f32ae407.js",revision:"5f44c100161503d2052bb7608cb952a7"},{url:"assets/get-started.html.93e76baf.js",revision:"f55b9716e50459bde0e0634b339e48b9"},{url:"assets/get-started.html.984ffc87.js",revision:"d4cc54d4569b1b3674f82bb06ca9978c"},{url:"assets/get-started.html.c69d5544.js",revision:"9d4ff1780fa75cd059d2917ea991b46e"},{url:"assets/get-started.html.d9307508.js",revision:"a9e52422e42b532d707d62e6365ec1a6"},{url:"assets/i18n.html.03de04ca.js",revision:"3741fe8cc7c95f3a22f08a41abfbbc16"},{url:"assets/i18n.html.623511c8.js",revision:"a188c446d1f2f38bf98f9d8f5081ea01"},{url:"assets/i18n.html.bfd2f858.js",revision:"cfc56c911dcef0d517f6eb202a62fdd1"},{url:"assets/i18n.html.def27b6f.js",revision:"723a0d8310dcc4086f0ea0d0fde68393"},{url:"assets/import.html.71ce97f9.js",revision:"4a5ec7a66495c7c5ca8202166b7d593a"},{url:"assets/import.html.a71f2701.js",revision:"e9b54e5597a044d34de8465ece00f650"},{url:"assets/import.html.ccfc9ca6.js",revision:"81138e24b07f56a049404ae96408c589"},{url:"assets/import.html.d83221cf.js",revision:"9146000e3f6ecb7b65302c357415d406"},{url:"assets/index.html.1396e332.js",revision:"ec627ba644a301fecd764044b420fef4"},{url:"assets/index.html.16fb3cb8.js",revision:"d50431485364f0cb1d2ac58eb8260574"},{url:"assets/index.html.1ce52292.js",revision:"7fb1210e8bbcbcdc2a9c9e5587b77ef2"},{url:"assets/index.html.65a9ba43.js",revision:"4185998947b7cf936c30b8e84c712591"},{url:"assets/index.html.6a8c8c95.js",revision:"c8fc3890f9eaee4c1956a24436d24182"},{url:"assets/index.html.8291851f.js",revision:"46170e40d4a8c3f17136ff5554d2567a"},{url:"assets/index.html.8baa20c9.js",revision:"46170e40d4a8c3f17136ff5554d2567a"},{url:"assets/index.html.9e9d3ca1.js",revision:"1d3f8911fa3824f06bf5c37bdfa067c6"},{url:"assets/index.html.ab8dfae9.js",revision:"2fce53301247a15872961db14a247a9d"},{url:"assets/index.html.add2a3bd.js",revision:"c5d9be65fcf34982d2577bf88e178327"},{url:"assets/index.html.bea5c127.js",revision:"a81a7b6c2bef6c4d3acd78015694654c"},{url:"assets/index.html.f8e8d3b6.js",revision:"0aff5f7a47f94d2890bbf248cf524a10"},{url:"assets/intro.html.1853cd84.js",revision:"5c7a3eaf0ba615ea4525221c92def182"},{url:"assets/intro.html.2d197fd9.js",revision:"2cede252e1428261da6f51dc18b5a54d"},{url:"assets/intro.html.6ca47e39.js",revision:"59bbd50ad72d0241bd1fbe9b3b24e1c2"},{url:"assets/intro.html.8c35258e.js",revision:"be16f8f994922f31428dc7fa4aef64ad"},{url:"assets/intro.html.c472a1eb.js",revision:"ad1274757a638e9dd43ee436e2590cac"},{url:"assets/intro.html.c5bf9267.js",revision:"524ad1f8f36f2b1ebf44393ac8702bef"},{url:"assets/intro.html.c630e4f4.js",revision:"af4f09b47ea36150b8b7dfc67882357a"},{url:"assets/intro.html.cfb0f040.js",revision:"414d512a602fcd0e9a1b55f5a897e0cb"},{url:"assets/intro.html.e525d415.js",revision:"c8e827009422489d27e8f935a43e5645"},{url:"assets/intro.html.ea0017e1.js",revision:"c63f87d5d93798874c08894a0b317e21"},{url:"assets/intro.html.f7690446.js",revision:"4332b371ba28b84e142feccc78c7b081"},{url:"assets/intro.html.ff3b836e.js",revision:"a956ab62cd746d0321eaf0119658fff2"},{url:"assets/MigrationTool.ab99fd39.js",revision:"fdda8f7b7b7717dc221d7eb183a20f2c"},{url:"assets/notification.html.7b8bce25.js",revision:"898f9fcf3417d3d1d298d9bcba257184"},{url:"assets/notification.html.92468aff.js",revision:"f7f0a2d544ca049f04749e59ef7f3362"},{url:"assets/notification.html.d8fb8550.js",revision:"91ba011cdcbc2130bdc3c4cc39698810"},{url:"assets/notification.html.f69a31ce.js",revision:"22ad6515810bd9b4a829870fb5c2d5fd"},{url:"assets/pageview.html.a56eb4cf.js",revision:"2e462dac4c658f92f35f7d1d62ce1f0f"},{url:"assets/pageview.html.bebc3f98.js",revision:"260f2a4d7fdb8748b0ff92f411a6e366"},{url:"assets/pageview.html.d06d87f2.js",revision:"ffe19894b7e481a81c1c655788012623"},{url:"assets/pageview.html.fa898d9e.js",revision:"c67a6212e1cf3e11e06b4f991f458f19"},{url:"assets/photoswipe.esm.1cf3a6fe.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/railway-4.716192ef.js",revision:"9ee6f11e79f5df21e7d97c7062f0a717"},{url:"assets/railway.html.15f4451f.js",revision:"b3842051911aacbbe1f05340510b3e3b"},{url:"assets/railway.html.659a42ae.js",revision:"1a4d5d3c2027554bbf3f4c07574c93f0"},{url:"assets/railway.html.81fe0e03.js",revision:"6563fc8d72985fd6169866d85d7d4a2f"},{url:"assets/railway.html.bd6f0ce3.js",revision:"84a4fce3fe96ded82591145500bb854d"},{url:"assets/recent-comment.html.a8baf66b.js",revision:"90089b9114ab22fb9c0f47a993cdee9c"},{url:"assets/recent-comment.html.c25982fe.js",revision:"18fdfb90850f6a87ddb1b52cf14896ca"},{url:"assets/recent-comment.html.e9ff5f15.js",revision:"15e2b4b76b1b3345b0b824d23fc1f53d"},{url:"assets/recent-comment.html.ed22e8e0.js",revision:"68b7a475b0c7104164718f8285ba8ef7"},{url:"assets/server.html.378d76b7.js",revision:"62f9b041eaf77dfb98567cdf714e532f"},{url:"assets/server.html.3801873d.js",revision:"049dd509e31384c2862e5a456683e81d"},{url:"assets/server.html.48bb55d1.js",revision:"ccae322a78dd1dbbd8df98f5c2a30c7f"},{url:"assets/server.html.9e00e577.js",revision:"967b07044a1f0ac1893bb1819a3b3543"},{url:"assets/spa.html.4150e56b.js",revision:"d2ed2f20f7213c288ee5105ba1123aad"},{url:"assets/spa.html.c5af6e8a.js",revision:"806c7ec38a785e435ccbc93df214e01b"},{url:"assets/spa.html.fd0e292d.js",revision:"9d6fe65afe02e9dab33dceb21817d601"},{url:"assets/spa.html.ff5dd31a.js",revision:"4fee9178a2fb330ef498b62ac69ef2e3"},{url:"assets/style.f622f498.css",revision:"9c2d486aab0668633e7f742b725e97ee"},{url:"assets/style.html.10495033.js",revision:"e9d7ab28e29b55c90f25b7e560a74d03"},{url:"assets/style.html.33875719.js",revision:"6bc7ee3a8dca760f1638abe7b2391200"},{url:"assets/style.html.ab8cdfaf.js",revision:"9e7a338e2a53d199d1d90bd394aefd8c"},{url:"assets/style.html.ff66bd94.js",revision:"15932ed8f8c5a2be2fb42bcc6521af70"},{url:"assets/syntax.html.0565a4a8.js",revision:"117cc84f06327b4e8881f2fc389909a0"},{url:"assets/syntax.html.b8468c07.js",revision:"def8d51debd57a6f4001503b91639a2d"},{url:"assets/syntax.html.bc3d354a.js",revision:"6d787e45b56003aea30916370898fa39"},{url:"assets/syntax.html.f09f552e.js",revision:"de7157a5e07716f1437dc3b91a5c51a2"},{url:"assets/tool.html.37d590dc.js",revision:"90a978cfe3dbf9843ae83075023ca636"},{url:"assets/tool.html.603eb654.js",revision:"f4c9ebc9fa434b7cabddc91a98ac540f"},{url:"assets/tool.html.927d2503.js",revision:"1ec581120a51409f31b828b6c167bce7"},{url:"assets/tool.html.b51d40a9.js",revision:"b0e41c8ebdc32a4690e6588475d94b93"},{url:"assets/valine.html.b247e4cc.js",revision:"528f7bda3d35221cc34a6064d557e83f"},{url:"assets/valine.html.dd8e3de7.js",revision:"296c7eafe67f0015dd4906b94a6a2e6b"},{url:"assets/valine.html.dec9f392.js",revision:"9b9eb37201200bc980e63d79e5b14db8"},{url:"assets/valine.html.fd73ee05.js",revision:"e90c702d4cccc00d45137fbdc9858702"},{url:"assets/vercel-9.f9b32b52.js",revision:"3ea9a9d6a0b49f0220ac8ab4fdc40bea"},{url:"assets/vps-deploy.html.3f0c6525.js",revision:"f4f0c5c9bfde166f1eb0e3a71e8373a5"},{url:"assets/vps-deploy.html.b562e2e5.js",revision:"2c716faeff0e04f06eac930c6040ebb6"},{url:"assets/vps-deploy.html.cfe84e9e.js",revision:"aa4e636dca567e519e64eb5a717893e5"},{url:"assets/vps-deploy.html.d7373da1.js",revision:"742bb05bb074b381ba9b1a2824af2776"},{url:"assets/waline-meta.ad3895e3.js",revision:"fb12da4b869d6e3c3592a7cb935c4a71"},{url:"assets/why.html.310c8823.js",revision:"8861ac444986e9fa90d703eb8a213604"},{url:"assets/why.html.95838ad1.js",revision:"df06bac8e803aa2b995fe63cf83afd4c"},{url:"assets/why.html.c6919b3c.js",revision:"986dc3142d16888d30870b8b093ddb3e"},{url:"assets/why.html.f4b3607f.js",revision:"7b4961f2f1f6f243298c48e773b9232f"},{url:"index.html",revision:"e08776e27ac44ffbc6521ea320ce78dd"},{url:"404.html",revision:"de8417ae4b2bb2f5bce2dc1f51880d12"},{url:"assets/aliyun-fc-1.597da96b.jpg",revision:"163c900baa1223d819c56bf2b2ed43cf"},{url:"assets/aliyun-fc-2.88145e4a.jpg",revision:"698d4fdd25f7357c7bef489cf24a3bfc"},{url:"assets/aliyun-fc-3.bbeb5837.jpg",revision:"39ca978aa99b4b8eaa7e67f4fc13aa9f"},{url:"assets/aliyun-fc-4.b92c239c.jpg",revision:"c99f5bf2df906e6e336fe30afd08972b"},{url:"assets/aliyun-fc-5.20816640.jpg",revision:"4a6f1277e52928751e1e2825bdbfb955"},{url:"assets/aliyun-fc-6.e28dc4fd.jpg",revision:"52bb82ed86871fcb9281fb346cd2d1eb"},{url:"assets/aliyun-fc-7.ea880d52.jpg",revision:"001c3f6f5a64f49fc0f24a32de51d806"},{url:"assets/aliyun-fc-8.78ad45af.jpg",revision:"974e8272397c4851a71c04c2ab0e7737"},{url:"assets/baidu-cfc-1.c5188ede.jpg",revision:"89e51e16ffcffea5c24a6d441449a4d6"},{url:"assets/baidu-cfc-10.ed299c04.jpg",revision:"1383a74fdca2f58aed1a740a284c5358"},{url:"assets/baidu-cfc-11.e3119e03.jpg",revision:"aea45e0c1def2f63fdcab7734c39b9fa"},{url:"assets/baidu-cfc-2.f687c456.jpg",revision:"d79a376c5cfed6b6c06f78fe0c05e994"},{url:"assets/baidu-cfc-3.06c8257c.jpg",revision:"746a9462276c6ea2ab6f4c941cbbc280"},{url:"assets/baidu-cfc-4.fd0c6ffe.jpg",revision:"5f3537f2dc47d2cf2367ffec651886a1"},{url:"assets/baidu-cfc-5.8e8798e6.jpg",revision:"0279423dd85df46974724f9a37d7f3cd"},{url:"assets/baidu-cfc-6.3dcfe63c.jpg",revision:"8c85d7f88807b9ec7eca8905df3f88b4"},{url:"assets/baidu-cfc-7.4f04d277.jpg",revision:"00cbb146a51c55e982f0156afdd0c19a"},{url:"assets/baidu-cfc-8.e427351f.jpg",revision:"c218d25bc3c671a7dd9421d546b9b349"},{url:"assets/baidu-cfc-9.e3d174cd.jpg",revision:"bc5878fc583c94c9b2c2f8d5847f65bb"},{url:"assets/cloudbase-update.b3d7aca8.jpg",revision:"ad51132554d7fb4c2144aebff29ab8ec"},{url:"assets/deta-1.22ab981b.png",revision:"3af1da5f8762e29bae33e36cf14a1490"},{url:"assets/deta-2.fe6a2139.png",revision:"aa56a4e0a4767ee2741fbdc13ab183ef"},{url:"assets/deta-3.c6b4f166.jpg",revision:"f9b8deb9c076a329bc950a5df5ed49a6"},{url:"assets/icon/apple-icon-152.png",revision:"672d66a98daae23ef93c1a083117343c"},{url:"assets/icon/apple-touch-icon.png",revision:"ccc90f06f6ee87e34f42893aafa60a6c"},{url:"assets/icon/chrome-192.png",revision:"7621962962dd853c47a378f6e744be79"},{url:"assets/icon/chrome-512.png",revision:"ccc90f06f6ee87e34f42893aafa60a6c"},{url:"assets/icon/chrome-mask-192.png",revision:"7621962962dd853c47a378f6e744be79"},{url:"assets/icon/chrome-mask-512.png",revision:"ccc90f06f6ee87e34f42893aafa60a6c"},{url:"assets/icon/favicon-16x16.png",revision:"0e04394446c5aedb81843306fc36d0e1"},{url:"assets/icon/favicon-32x32.png",revision:"62adcdf98a7914adea24a6661a866768"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"b0c5792cdc3cabb4afeaed8e7cbaa9a6"},{url:"assets/leancloud-1.125edba9.png",revision:"cb9ccb66d6611a24396541c7130ae62a"},{url:"assets/leancloud-1.f7a36b20.png",revision:"b07570145c351554e6d5b69f4cc32f1d"},{url:"assets/leancloud-2.4cc69975.png",revision:"69b5f70337bf00894188062d22c77888"},{url:"assets/leancloud-2.d16cd8be.png",revision:"09f40de6e96a97e74ccb7a07bb2f843d"},{url:"assets/leancloud-3.3ae5fb8d.png",revision:"f30a97728b9b1f43a27f456519c7ba0c"},{url:"assets/railway-1.f2e38f2a.jpg",revision:"f7e96aa86cc92af86e3debc0ff42ea09"},{url:"assets/railway-2.e7411811.jpg",revision:"637dc9e5641597880643bdd2cb52a952"},{url:"assets/railway-3.fc0d1f91.jpg",revision:"c5c2feb497592f5c89f4813901a37871"},{url:"assets/railway-4.174879a7.jpg",revision:"3b1c506b080f09c49e043e1972347d94"},{url:"assets/vercel-1.4e9dd7aa.png",revision:"04f3c073e57361952b64a0531ea2d65c"},{url:"assets/vercel-3.0918fcee.png",revision:"600bb9eee1db4446b931f1a33aa67a43"},{url:"assets/vercel-4.f7f4c12b.png",revision:"06f66c963249e7adbcf202d8f6a363d3"},{url:"assets/vercel-5.3a5de7f0.png",revision:"6d55719d9a0e502db07f2dfe75075cc0"},{url:"assets/vercel-6.c1af01b1.png",revision:"12cc1add8cb3b3dad6af0048508bd273"},{url:"assets/vercel-7.2478902b.png",revision:"34313f4892818ec3ab1ace7fc327204a"},{url:"assets/vercel-8.49378bd3.png",revision:"195d0f384b744ad2b3e983e85058aff9"},{url:"assets/vercel-9.a29236ac.png",revision:"ee4a2ee6045947282d9a9a1bf1d17a99"},{url:"assets/vercel-update.e26735c2.png",revision:"426dcf2ee9c657144900401476c2d2cd"},{url:"logo.png",revision:"d1b5a5c058a43befb227d6bd094f7471"},{url:"logo.webp",revision:"9dec606bdb4a9b3e52823b019b1d10fd"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
