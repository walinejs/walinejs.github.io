if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let d={};const b=e=>a(e,i),r={module:{uri:i},exports:d,require:b};s[i]=Promise.all(c.map((e=>r[e]||b(e)))).then((e=>(f(...e),d)))}}define(["./workbox-0f878b90"],(function(e){"use strict";e.setCacheNameDetails({prefix:"Waline"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/_plugin-vue_export-helper.cdc0426e.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/404.html.32b8544d.js",revision:"a76277a15983349c78b9df1456eda193"},{url:"assets/404.html.a6b31eb2.js",revision:"d19b2a210c4ae87c74b2570e3dd40abb"},{url:"assets/aliyun-fc.html.0917654c.js",revision:"381ca6f6ed507c87fc84311986e24d69"},{url:"assets/aliyun-fc.html.a9a7ebb4.js",revision:"9a95d6e52083b20aa28c54c31f1c7298"},{url:"assets/api.html.002a0a6c.js",revision:"29346d17dfd27aed08bad61c44a3f867"},{url:"assets/api.html.085c4506.js",revision:"a28fce6c92629979a854617f6aa7e0d2"},{url:"assets/api.html.2e5e5f6e.js",revision:"2a6ff46ca2e70a28886cf8fa0569bd21"},{url:"assets/api.html.47a2f288.js",revision:"7c5672c60b1f39e563eda3b695940bdd"},{url:"assets/app.bc238586.js",revision:"48b15f8048f46bc6463440ea3f2df177"},{url:"assets/baidu-cfc.html.638e4907.js",revision:"104578edc492549202c787f33ba6c202"},{url:"assets/baidu-cfc.html.ed228aee.js",revision:"5ef8333620d082f69083900cca6911a8"},{url:"assets/client-v1.html.4be95270.js",revision:"0d5fa2fd67736183dfda2a1fa1266e1f"},{url:"assets/client-v1.html.c033fb1c.js",revision:"c32c219faaf4cb8cf575545903e70ff6"},{url:"assets/client-v1.html.c6b4f129.js",revision:"4e68638e3f3014dfdb703f498e017129"},{url:"assets/client-v1.html.ec3e1a03.js",revision:"8fa1a5bc5fb76760ca77602b34ce314b"},{url:"assets/client.html.04279084.js",revision:"d36ef42acd6b099c0366c3dc9da02ffc"},{url:"assets/client.html.39da6097.js",revision:"ac2edf9431950abb338f1e620c2bd3ab"},{url:"assets/client.html.500df45e.js",revision:"001115ff14137bd9ca35ae6f9bfeedd4"},{url:"assets/client.html.9e5aa7a3.js",revision:"d49095601f4df9cf921cdad8edbe7a0d"},{url:"assets/client.html.a93c5a95.js",revision:"1e253e5dcfed1e11933bd215ca6622ac"},{url:"assets/client.html.b89ef395.js",revision:"81e4b9fb5e5b79f08d4ac71947cd502f"},{url:"assets/client.html.cc2440ba.js",revision:"e19603878ba3b5507dd8cb80c709c4d9"},{url:"assets/client.html.ea0c062c.js",revision:"793c56dac0845be50a4e840e903510d8"},{url:"assets/cloudbase.html.9b68f468.js",revision:"4ffa657afe9338d869a8f8e54c5ebe69"},{url:"assets/cloudbase.html.c40d3b74.js",revision:"b1851e52160f653715f142ac43781481"},{url:"assets/comment.html.099c702b.js",revision:"e7922d23648254d2cb0165aa962a81ea"},{url:"assets/comment.html.2eb6caa6.js",revision:"0ae53004f10ac61d91dc75b27492f6ab"},{url:"assets/comment.html.e09957f6.js",revision:"902a62431ce603363c9de56745f9b6ef"},{url:"assets/comment.html.fe2cebff.js",revision:"f1e2f8d44f1109f1bcacc11f579b813a"},{url:"assets/component.html.533a7cb4.js",revision:"77acce7fb5e73d64f4bb3a54c4094ece"},{url:"assets/component.html.577fcb4c.js",revision:"536c8a9328e780df70a7abfcf1247689"},{url:"assets/component.html.7e4cd071.js",revision:"261d117705c8a95fbb62079e21b42f87"},{url:"assets/component.html.83e3436b.js",revision:"d6cc622e7ccd7d45f53c96623d356980"},{url:"assets/component.html.9ee6643f.js",revision:"d07a0531344c8ca85a3fa307e8c51724"},{url:"assets/component.html.be8821bb.js",revision:"165ea21012631b00ef791c366926895e"},{url:"assets/component.html.e6b648d3.js",revision:"210fd56ccc67b673481a8f63df0198e2"},{url:"assets/component.html.f288d42e.js",revision:"729147e19e13095b752240467b0d97cf"},{url:"assets/contribution.html.0c89953e.js",revision:"f800cdbd689ea304b499e2d09168127b"},{url:"assets/contribution.html.39fc7bfb.js",revision:"40481947c4012aef79d9bb75562eb4f3"},{url:"assets/contribution.html.721e2c16.js",revision:"5b5546c724eea4c4ee4762c8666f6910"},{url:"assets/contribution.html.c0bfa911.js",revision:"27ce2ebbf443b80644d8b600c754aae4"},{url:"assets/databases.html.1e25850c.js",revision:"0245c6be3bc33e014694dbe1bce7a6f6"},{url:"assets/databases.html.8fa55ab8.js",revision:"2a39b35778566eb109da06da7aa7875f"},{url:"assets/databases.html.9b555764.js",revision:"f08962df15469bf2b012297d00c55062"},{url:"assets/databases.html.cf059b50.js",revision:"251743303a97e50dc6b669599980d366"},{url:"assets/deta-3.b9909335.js",revision:"443c5da9bf9fd03552aa1d00774f2510"},{url:"assets/deta.html.23da15cc.js",revision:"f51c5ae0f1f1ce0b28c22de7e96e318e"},{url:"assets/deta.html.49a0a0c3.js",revision:"e0ede927dc9cc96b0bfecf28a9c554c7"},{url:"assets/deta.html.b277f86d.js",revision:"11e5ac31cad724be00043289849c8403"},{url:"assets/deta.html.c22cacff.js",revision:"7b0ffaa650a451057261a38b782a7da6"},{url:"assets/ecosystem.html.0883ea51.js",revision:"295b83b9bf1783fa48e7dbd8fd293710"},{url:"assets/ecosystem.html.0ad951d3.js",revision:"572ff5a19c39612fd54086193b65fcaa"},{url:"assets/ecosystem.html.72843dba.js",revision:"40af70863a47e619784e50e662bb4ba8"},{url:"assets/ecosystem.html.76f1df21.js",revision:"43e2a09fc9c0baa6696958d80e44d2a2"},{url:"assets/emoji.html.8d1d3f8a.js",revision:"9c1d8c4ff858b644467dacf524b72659"},{url:"assets/emoji.html.ca270745.js",revision:"af5587002db62c2ee45dd72782f6a802"},{url:"assets/emoji.html.e0c6cd4e.js",revision:"f8638068f53bcf4bbb7777b1fb80bb83"},{url:"assets/emoji.html.ea2302ed.js",revision:"cd0c6625ef937ecf2c528d0000145800"},{url:"assets/faq.html.0b139c18.js",revision:"5f703f00b6e9e10e312bf70bb11d9b63"},{url:"assets/faq.html.3c46b5ca.js",revision:"c297dabb5dbfba22cdcbfe478a82a385"},{url:"assets/faq.html.3c4a1f32.js",revision:"c990defda217bde80308377ede306097"},{url:"assets/faq.html.7fd3598a.js",revision:"8ef453dcc9a0f753e56070dfe4291a17"},{url:"assets/get-started.html.6fb2a09c.js",revision:"6d3e56a595af9b2cf1fbf7d431ceb13a"},{url:"assets/get-started.html.97732e07.js",revision:"2df4f620ba6be377b705f7398f8f6094"},{url:"assets/get-started.html.a4502d48.js",revision:"7688384e004ab9fcd747c3047f19d236"},{url:"assets/get-started.html.aec0c6ed.js",revision:"dd26acbc5a5b0a6137de88cc943bc359"},{url:"assets/i18n.html.a92106c1.js",revision:"b6abae2f86f2e34db7b68bfaf9cce229"},{url:"assets/i18n.html.b27b4c28.js",revision:"027954026ad681699fbae3f288de2e85"},{url:"assets/i18n.html.e146500b.js",revision:"708a5b3248ea15a772e659f03e34a87b"},{url:"assets/i18n.html.e1d760b5.js",revision:"b2d26f7bdebf4a8a0695d2142f658b13"},{url:"assets/import.html.7ddc8b13.js",revision:"d1cb250d21ae775a5bdab6e01168e30e"},{url:"assets/import.html.98a18e36.js",revision:"c1bbccf7cf6742c7a0e6e5b36d9dcaa1"},{url:"assets/import.html.e8c9f238.js",revision:"e43a66ded0e15ad7bfe4758bd0d01a03"},{url:"assets/import.html.ed6ad248.js",revision:"11ecab09b9edfa3f7728a61fe471dfac"},{url:"assets/index.html.09706ec3.js",revision:"88fed361b90a94170b4ca0f45a2cbea1"},{url:"assets/index.html.295e75fa.js",revision:"4d132a2ed4add28029da53b6794c3803"},{url:"assets/index.html.2f201b94.js",revision:"e564c42848b98a15cdc2415ee0986886"},{url:"assets/index.html.42b626f0.js",revision:"ee18adf62dff4e094b31b24cd3c23ed2"},{url:"assets/index.html.56f2d71f.js",revision:"9af931999dd26db3a3ef7146693b28e6"},{url:"assets/index.html.630f75c4.js",revision:"0c2124353dec76f8519f05b62168c94f"},{url:"assets/index.html.749c18ed.js",revision:"22f550f297863cfef6e5e4302825397d"},{url:"assets/index.html.8016edf8.js",revision:"1a27a1ca316507a60f99d810b4fe94fd"},{url:"assets/index.html.82ffebfb.js",revision:"4da89f22dabcec9cebb241c0aa36ae44"},{url:"assets/index.html.9a6d32c5.js",revision:"e564c42848b98a15cdc2415ee0986886"},{url:"assets/index.html.c0bca062.js",revision:"620d9c40226534d96eeee1d369c46161"},{url:"assets/index.html.d8476eec.js",revision:"3bdf32ede711974066795b114aeb2877"},{url:"assets/intro.html.1d65ab74.js",revision:"d3c057774894a9f33327928425f0a9fe"},{url:"assets/intro.html.2f76a207.js",revision:"d3be9a666bc77ea433c658af734d1e71"},{url:"assets/intro.html.3763da76.js",revision:"7e805fb293edd8c05bce3486900b0aad"},{url:"assets/intro.html.6949b96e.js",revision:"2cfff9b594b0079598384b2b5e746238"},{url:"assets/intro.html.77f40c16.js",revision:"e2a6d1bb62c9433f0c119a48a3ed406d"},{url:"assets/intro.html.82c82140.js",revision:"9208bef6f52e7900d04fd0aa1a2f592f"},{url:"assets/intro.html.8df31c90.js",revision:"c948be3baa73e495cdb516c80fea2be0"},{url:"assets/intro.html.9bf9c4f8.js",revision:"27664300514c17a1b470b628a54d2f2e"},{url:"assets/intro.html.da89bfa9.js",revision:"28c10d4e34676b4f50e5e5a687f7dc42"},{url:"assets/intro.html.e14c5507.js",revision:"1625330f9e385f2285d9e4bd23698e10"},{url:"assets/intro.html.e8dd193d.js",revision:"e911a79c80ae0251404dfe28a9aa4915"},{url:"assets/intro.html.f374aea2.js",revision:"8e716b8f1ad242b4e07a2ed37d5e5bc5"},{url:"assets/MigrationTool.33278398.js",revision:"52b2d5b36d139d9642684dbf1dc5a676"},{url:"assets/notification.html.7f5b8531.js",revision:"e935f1d1e81c3329ca8e3eb91101bda0"},{url:"assets/notification.html.8e304501.js",revision:"09ae54ab3605790ca05abfad8bd9611d"},{url:"assets/notification.html.ec8aeb3c.js",revision:"714ab396d58f3fa22763846e0ee7a45f"},{url:"assets/notification.html.f0ff34af.js",revision:"b26ece3fba3010d30de9c9c25142cfe1"},{url:"assets/pageview.html.539a6c54.js",revision:"647ffd62b3d8510a41669328082a5f87"},{url:"assets/pageview.html.8af8a42f.js",revision:"275798e54f431668058590f86170ae39"},{url:"assets/pageview.html.c76609e6.js",revision:"48af378b3884d14b5a51fe80ced19bb5"},{url:"assets/pageview.html.ea7352b3.js",revision:"05d08d6b85c985946f2b0e92dd3b6710"},{url:"assets/photoswipe.esm.1cf3a6fe.js",revision:"58c8e5a3e1981882b36217b62f1c7bae"},{url:"assets/railway-4.716192ef.js",revision:"9ee6f11e79f5df21e7d97c7062f0a717"},{url:"assets/railway.html.0dc1da65.js",revision:"a5e4b8233514eca0dffb6ae019761b29"},{url:"assets/railway.html.6cd70589.js",revision:"f22b4719b285d38ddd972a412027d6f1"},{url:"assets/railway.html.951d8871.js",revision:"47b5f1a098a94b3126ff34d4cc38fa0d"},{url:"assets/railway.html.c3dd23b2.js",revision:"3c301a8a1c0afe66f5e02850a9de37ab"},{url:"assets/recent-comment.html.2759ae72.js",revision:"140f4809a9837a17ffb742e47f910d5c"},{url:"assets/recent-comment.html.950329be.js",revision:"df57892d52985f6e12b7d82f6d7de636"},{url:"assets/recent-comment.html.9efcc80a.js",revision:"a540ddde4b7faaf3105a448cc22c283b"},{url:"assets/recent-comment.html.ee1e2104.js",revision:"f7d964ad749a70b115302c69b168fb95"},{url:"assets/server.html.40a0faac.js",revision:"67184467ba865e310fac335d3f097f82"},{url:"assets/server.html.432bfb92.js",revision:"9005a8cad5f64e599e56058de38bbc2a"},{url:"assets/server.html.b01bce80.js",revision:"ff4d814076cd9b2539d75abe29b4a27b"},{url:"assets/server.html.ee6cda26.js",revision:"88f2c24bc99b2a8ae227d267a31b22f0"},{url:"assets/spa.html.178e1329.js",revision:"3c2b1938d28ecda0112312204d005278"},{url:"assets/spa.html.78d4da27.js",revision:"e950af9bba8a78a6d0d5055114455cf6"},{url:"assets/spa.html.e545eef4.js",revision:"bfa64ea6ae1d21215639c8428e716762"},{url:"assets/spa.html.f10b8639.js",revision:"45afb1169743261cc51e17486b287dfd"},{url:"assets/style.60470a5c.css",revision:"d6dee1be48b1f7eb2eedb60add513de6"},{url:"assets/style.html.7bbbe0cd.js",revision:"2d793aa47a2fe05c821b5ae47d4d6d99"},{url:"assets/style.html.9f64a017.js",revision:"3d088dabd3ba98ecc5b22a13f2c49f61"},{url:"assets/style.html.b1073386.js",revision:"437b2676b1bddb396823e75c7a8ec41a"},{url:"assets/style.html.e2cd232b.js",revision:"5989b715d44be6012cd59c2687dff86c"},{url:"assets/syntax.html.033a281c.js",revision:"55868c1db517626db1f4985069f3c904"},{url:"assets/syntax.html.1fe84837.js",revision:"06efbb22f92810bba3130eccc77b6626"},{url:"assets/syntax.html.9a3e713c.js",revision:"5abf278e855a412c1e7f69acbabd7c7e"},{url:"assets/syntax.html.f3fe78c0.js",revision:"fa6d22d59ff9452b03e07de034d420f1"},{url:"assets/tool.html.2c65297c.js",revision:"456cc02626169e34571c325d81fd9054"},{url:"assets/tool.html.5c55edbb.js",revision:"5a0aad79f4e5f0b657dc997b226a5612"},{url:"assets/tool.html.8330aa2e.js",revision:"f8515a6cb702ddb229dec106c202b9c0"},{url:"assets/tool.html.ca13f33f.js",revision:"de1d12a09e1c09346cbdc0cd20e48f25"},{url:"assets/valine.html.3720a5e5.js",revision:"4ffbf8dd6e090aa27f3848b0604fc14a"},{url:"assets/valine.html.4d6f53ab.js",revision:"322b845f28a793da1c0b35444d0017f4"},{url:"assets/valine.html.88f598cd.js",revision:"99b8ee7c01d013f0acd9ef82d64ef03d"},{url:"assets/valine.html.8a02c5bd.js",revision:"d5fcea0b5ec667dfd7dea7478d33cd0b"},{url:"assets/vercel-9.f9b32b52.js",revision:"3ea9a9d6a0b49f0220ac8ab4fdc40bea"},{url:"assets/vps-deploy.html.11ef30fb.js",revision:"e0ecd13b55b5db94d0e08c58233b1978"},{url:"assets/vps-deploy.html.1bbdd7b4.js",revision:"02e962ece025d0434bfb1fbe43de930e"},{url:"assets/vps-deploy.html.551a4a15.js",revision:"fc133aaa5f24dad9892e3819d74c90f6"},{url:"assets/vps-deploy.html.de76aa8b.js",revision:"6d3f0636f4fda8c582d544be59c0359b"},{url:"assets/waline-meta.4106fa7d.js",revision:"614e9510b9a7a9c2164ae5827a7649f4"},{url:"assets/why.html.7a357625.js",revision:"1362d06bc274abc72bee57ad31e0977f"},{url:"assets/why.html.7af6e5de.js",revision:"1022832f68d9adf04277963dd67daffb"},{url:"assets/why.html.bab5a2ea.js",revision:"0a2b8c4da951f9e58d3a1f6c921240e5"},{url:"assets/why.html.f73b161d.js",revision:"f62a73f33b09a32fde470961522cdf67"},{url:"index.html",revision:"b5a591f3b1eb2673b788d900488a1d2c"},{url:"404.html",revision:"ebd9e927c531dd7b32405ec11bdb5dca"},{url:"assets/aliyun-fc-1.597da96b.jpg",revision:"163c900baa1223d819c56bf2b2ed43cf"},{url:"assets/aliyun-fc-2.88145e4a.jpg",revision:"698d4fdd25f7357c7bef489cf24a3bfc"},{url:"assets/aliyun-fc-3.bbeb5837.jpg",revision:"39ca978aa99b4b8eaa7e67f4fc13aa9f"},{url:"assets/aliyun-fc-4.b92c239c.jpg",revision:"c99f5bf2df906e6e336fe30afd08972b"},{url:"assets/aliyun-fc-5.20816640.jpg",revision:"4a6f1277e52928751e1e2825bdbfb955"},{url:"assets/aliyun-fc-6.e28dc4fd.jpg",revision:"52bb82ed86871fcb9281fb346cd2d1eb"},{url:"assets/aliyun-fc-7.ea880d52.jpg",revision:"001c3f6f5a64f49fc0f24a32de51d806"},{url:"assets/aliyun-fc-8.78ad45af.jpg",revision:"974e8272397c4851a71c04c2ab0e7737"},{url:"assets/baidu-cfc-1.c5188ede.jpg",revision:"89e51e16ffcffea5c24a6d441449a4d6"},{url:"assets/baidu-cfc-10.ed299c04.jpg",revision:"1383a74fdca2f58aed1a740a284c5358"},{url:"assets/baidu-cfc-11.e3119e03.jpg",revision:"aea45e0c1def2f63fdcab7734c39b9fa"},{url:"assets/baidu-cfc-2.f687c456.jpg",revision:"d79a376c5cfed6b6c06f78fe0c05e994"},{url:"assets/baidu-cfc-3.06c8257c.jpg",revision:"746a9462276c6ea2ab6f4c941cbbc280"},{url:"assets/baidu-cfc-4.fd0c6ffe.jpg",revision:"5f3537f2dc47d2cf2367ffec651886a1"},{url:"assets/baidu-cfc-5.8e8798e6.jpg",revision:"0279423dd85df46974724f9a37d7f3cd"},{url:"assets/baidu-cfc-6.3dcfe63c.jpg",revision:"8c85d7f88807b9ec7eca8905df3f88b4"},{url:"assets/baidu-cfc-7.4f04d277.jpg",revision:"00cbb146a51c55e982f0156afdd0c19a"},{url:"assets/baidu-cfc-8.e427351f.jpg",revision:"c218d25bc3c671a7dd9421d546b9b349"},{url:"assets/baidu-cfc-9.e3d174cd.jpg",revision:"bc5878fc583c94c9b2c2f8d5847f65bb"},{url:"assets/cloudbase-update.b3d7aca8.jpg",revision:"ad51132554d7fb4c2144aebff29ab8ec"},{url:"assets/deta-1.22ab981b.png",revision:"3af1da5f8762e29bae33e36cf14a1490"},{url:"assets/deta-2.fe6a2139.png",revision:"aa56a4e0a4767ee2741fbdc13ab183ef"},{url:"assets/deta-3.c6b4f166.jpg",revision:"f9b8deb9c076a329bc950a5df5ed49a6"},{url:"assets/icon/apple-icon-152.png",revision:"672d66a98daae23ef93c1a083117343c"},{url:"assets/icon/apple-touch-icon.png",revision:"ccc90f06f6ee87e34f42893aafa60a6c"},{url:"assets/icon/chrome-192.png",revision:"7621962962dd853c47a378f6e744be79"},{url:"assets/icon/chrome-512.png",revision:"ccc90f06f6ee87e34f42893aafa60a6c"},{url:"assets/icon/chrome-mask-192.png",revision:"7621962962dd853c47a378f6e744be79"},{url:"assets/icon/chrome-mask-512.png",revision:"ccc90f06f6ee87e34f42893aafa60a6c"},{url:"assets/icon/favicon-16x16.png",revision:"0e04394446c5aedb81843306fc36d0e1"},{url:"assets/icon/favicon-32x32.png",revision:"62adcdf98a7914adea24a6661a866768"},{url:"assets/icon/guide-maskable.png",revision:"08ed31fafa239f372b8f1eb5877e46b7"},{url:"assets/icon/guide-monochrome.png",revision:"32a3bb35c073c6c910c8a5570350ce55"},{url:"assets/icon/ms-icon-144.png",revision:"b0c5792cdc3cabb4afeaed8e7cbaa9a6"},{url:"assets/leancloud-1.125edba9.png",revision:"cb9ccb66d6611a24396541c7130ae62a"},{url:"assets/leancloud-1.f7a36b20.png",revision:"b07570145c351554e6d5b69f4cc32f1d"},{url:"assets/leancloud-2.4cc69975.png",revision:"69b5f70337bf00894188062d22c77888"},{url:"assets/leancloud-2.d16cd8be.png",revision:"09f40de6e96a97e74ccb7a07bb2f843d"},{url:"assets/leancloud-3.3ae5fb8d.png",revision:"f30a97728b9b1f43a27f456519c7ba0c"},{url:"assets/railway-1.f2e38f2a.jpg",revision:"f7e96aa86cc92af86e3debc0ff42ea09"},{url:"assets/railway-2.e7411811.jpg",revision:"637dc9e5641597880643bdd2cb52a952"},{url:"assets/railway-3.fc0d1f91.jpg",revision:"c5c2feb497592f5c89f4813901a37871"},{url:"assets/railway-4.174879a7.jpg",revision:"3b1c506b080f09c49e043e1972347d94"},{url:"assets/vercel-1.4e9dd7aa.png",revision:"04f3c073e57361952b64a0531ea2d65c"},{url:"assets/vercel-3.0918fcee.png",revision:"600bb9eee1db4446b931f1a33aa67a43"},{url:"assets/vercel-4.f7f4c12b.png",revision:"06f66c963249e7adbcf202d8f6a363d3"},{url:"assets/vercel-5.3a5de7f0.png",revision:"6d55719d9a0e502db07f2dfe75075cc0"},{url:"assets/vercel-6.c1af01b1.png",revision:"12cc1add8cb3b3dad6af0048508bd273"},{url:"assets/vercel-7.2478902b.png",revision:"34313f4892818ec3ab1ace7fc327204a"},{url:"assets/vercel-8.49378bd3.png",revision:"195d0f384b744ad2b3e983e85058aff9"},{url:"assets/vercel-9.a29236ac.png",revision:"ee4a2ee6045947282d9a9a1bf1d17a99"},{url:"assets/vercel-update.e26735c2.png",revision:"426dcf2ee9c657144900401476c2d2cd"},{url:"logo.png",revision:"d1b5a5c058a43befb227d6bd094f7471"},{url:"logo.webp",revision:"9dec606bdb4a9b3e52823b019b1d10fd"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
