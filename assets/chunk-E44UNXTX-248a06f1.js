import{C as e,r as p,m as R,W as I,x as T,f as L,j as V,X as c,d as s,o as f,b as h,h as P,k as b,M as l,B as a}from"./framework-e827339c.js";const g="modulepreload",y=function(_){return"/"+_},D={},t=function(r,o,i){if(!o||o.length===0)return r();const E=document.getElementsByTagName("link");return Promise.all(o.map(v=>{if(v=y(v),v in D)return;D[v]=!0;const u=v.endsWith(".css"),O=u?'[rel="stylesheet"]':"";if(!!i)for(let m=E.length-1;m>=0;m--){const n=E[m];if(n.href===v&&(!u||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${O}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":g,u||(d.as="script",d.crossOrigin=""),d.href=v,document.head.appendChild(d),u)return new Promise((m,n)=>{d.addEventListener("load",m),d.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${v}`)))})})).then(()=>r())},S={"v-8daa1a0e":()=>t(()=>import("./index.html-8469350e.js"),[]).then(({data:_})=>_),"v-238a4bd5":()=>t(()=>import("./contribution.html-bc21c45a.js"),[]).then(({data:_})=>_),"v-76657832":()=>t(()=>import("./design.html-375a7dfc.js"),[]).then(({data:_})=>_),"v-e4322366":()=>t(()=>import("./ecosystem.html-57314875.js"),[]).then(({data:_})=>_),"v-533c70f7":()=>t(()=>import("./faq.html-900d66f9.js"),[]).then(({data:_})=>_),"v-271aae61":()=>t(()=>import("./intro.html-b6e7bab0.js"),[]).then(({data:_})=>_),"v-0b911545":()=>t(()=>import("./index.html-1e6bcf95.js"),[]).then(({data:_})=>_),"v-df55107c":()=>t(()=>import("./emoji-compact.html-62676115.js"),[]).then(({data:_})=>_),"v-3e64bf6a":()=>t(()=>import("./legacy.html-e3ac1853.js"),[]).then(({data:_})=>_),"v-38e2581c":()=>t(()=>import("./reactivity.html-781cf262.js"),[]).then(({data:_})=>_),"v-60df6871":()=>t(()=>import("./syntax.html-4c6a4104.js"),[]).then(({data:_})=>_),"v-2d0a870d":()=>t(()=>import("./index.html-162cd468.js"),[]).then(({data:_})=>_),"v-7dc58ad2":()=>t(()=>import("./database.html-faa67d8f.js"),[]).then(({data:_})=>_),"v-4fe1dc58":()=>t(()=>import("./client.html-f1172937.js"),[]).then(({data:_})=>_),"v-7af875a7":()=>t(()=>import("./tool.html-bac2f856.js"),[]).then(({data:_})=>_),"v-aecc6e00":()=>t(()=>import("./valine.html-9daace2c.js"),[]).then(({data:_})=>_),"v-40f46b38":()=>t(()=>import("./emoji.html-7f027228.js"),[]).then(({data:_})=>_),"v-8f9a532e":()=>t(()=>import("./highlighter.html-89aaca6f.js"),[]).then(({data:_})=>_),"v-31b76e54":()=>t(()=>import("./image-preview.html-e760dfb1.js"),[]).then(({data:_})=>_),"v-6b3e0ece":()=>t(()=>import("./locale.html-e0afd7d7.js"),[]).then(({data:_})=>_),"v-4ddbcf80":()=>t(()=>import("./search.html-b9ecb32a.js"),[]).then(({data:_})=>_),"v-eb7e60c2":()=>t(()=>import("./tex-renderer.html-ceba5a68.js"),[]).then(({data:_})=>_),"v-8c4c2f0e":()=>t(()=>import("./upload-image.html-a82a5703.js"),[]).then(({data:_})=>_),"v-f489b7de":()=>t(()=>import("./cdn.html-4b790958.js"),[]).then(({data:_})=>_),"v-91c1bbb6":()=>t(()=>import("./project.html-7762e2ed.js"),[]).then(({data:_})=>_),"v-72a3a22e":()=>t(()=>import("./contribution.html-754f018a.js"),[]).then(({data:_})=>_),"v-05e3f40a":()=>t(()=>import("./design.html-99c83c95.js"),[]).then(({data:_})=>_),"v-743ff88e":()=>t(()=>import("./ecosystem.html-88313b04.js"),[]).then(({data:_})=>_),"v-2945f13a":()=>t(()=>import("./faq.html-6174bc75.js"),[]).then(({data:_})=>_),"v-396f59cd":()=>t(()=>import("./intro.html-6c5630e8.js"),[]).then(({data:_})=>_),"v-0db4d7b1":()=>t(()=>import("./index.html-243cef86.js"),[]).then(({data:_})=>_),"v-51adf72e":()=>t(()=>import("./emoji-compact.html-80b0999c.js"),[]).then(({data:_})=>_),"v-190e625f":()=>t(()=>import("./legacy.html-8ed6a50e.js"),[]).then(({data:_})=>_),"v-aa8f27f4":()=>t(()=>import("./reactivity.html-ba9fa5fe.js"),[]).then(({data:_})=>_),"v-cdbfaaf6":()=>t(()=>import("./syntax.html-20ad5099.js"),[]).then(({data:_})=>_),"v-dfcb9384":()=>t(()=>import("./database.html-c90e4ba2.js"),[]).then(({data:_})=>_),"v-b032db80":()=>t(()=>import("./client.html-d730b7ed.js"),[]).then(({data:_})=>_),"v-e565bdda":()=>t(()=>import("./tool.html-a18fb7b0.js"),[]).then(({data:_})=>_),"v-7871496c":()=>t(()=>import("./valine.html-72b2421c.js"),[]).then(({data:_})=>_),"v-3bc9d1bc":()=>t(()=>import("./index.html-8acf0b3e.js"),[]).then(({data:_})=>_),"v-bfbd0ec2":()=>t(()=>import("./aliyun-fc.html-859d6213.js"),[]).then(({data:_})=>_),"v-4fba98a7":()=>t(()=>import("./baidu-cfc.html-f6386432.js"),[]).then(({data:_})=>_),"v-41938a62":()=>t(()=>import("./cloudbase.html-6e98517d.js"),[]).then(({data:_})=>_),"v-4e76bea2":()=>t(()=>import("./deta.html-d0cc6b41.js"),[]).then(({data:_})=>_),"v-98a2b6d0":()=>t(()=>import("./railway.html-26d125ad.js"),[]).then(({data:_})=>_),"v-6fe168ca":()=>t(()=>import("./tidb.html-f9c98edf.js"),[]).then(({data:_})=>_),"v-39dad436":()=>t(()=>import("./vercel.html-87a6740b.js"),[]).then(({data:_})=>_),"v-1db4fd88":()=>t(()=>import("./vps.html-14b229c6.js"),[]).then(({data:_})=>_),"v-e4be97b4":()=>t(()=>import("./index.html-71e7f9ce.js"),[]).then(({data:_})=>_),"v-5b4bbe00":()=>t(()=>import("./comment.html-d86963bf.js"),[]).then(({data:_})=>_),"v-173c38f9":()=>t(()=>import("./emoji.html-b7234b89.js"),[]).then(({data:_})=>_),"v-a071ffd6":()=>t(()=>import("./i18n.html-5a0421ac.js"),[]).then(({data:_})=>_),"v-ef8d91ea":()=>t(()=>import("./label.html-eeb6fffe.js"),[]).then(({data:_})=>_),"v-72c82130":()=>t(()=>import("./notification.html-a9132196.js"),[]).then(({data:_})=>_),"v-3b35ad3f":()=>t(()=>import("./pageview.html-3e7cf9cf.js"),[]).then(({data:_})=>_),"v-aba5dc2c":()=>t(()=>import("./reaction.html-b2e8c08c.js"),[]).then(({data:_})=>_),"v-0636ed61":()=>t(()=>import("./safety.html-3964e08b.js"),[]).then(({data:_})=>_),"v-cfad076a":()=>t(()=>import("./search.html-35bb30ab.js"),[]).then(({data:_})=>_),"v-1a377324":()=>t(()=>import("./style.html-58a4f87c.js"),[]).then(({data:_})=>_),"v-92b93a20":()=>t(()=>import("./syntax.html-3c449e75.js"),[]).then(({data:_})=>_),"v-0490495e":()=>t(()=>import("./index.html-86daf06b.js"),[]).then(({data:_})=>_),"v-74848bfd":()=>t(()=>import("./client.html-7c3c4d7f.js"),[]).then(({data:_})=>_),"v-51a7bb85":()=>t(()=>import("./server.html-515ba818.js"),[]).then(({data:_})=>_),"v-573c95b4":()=>t(()=>import("./api.html-9383b578.js"),[]).then(({data:_})=>_),"v-814d20d4":()=>t(()=>import("./file.html-4d3b3a4c.js"),[]).then(({data:_})=>_),"v-45aac460":()=>t(()=>import("./props.html-74dd304d.js"),[]).then(({data:_})=>_),"v-05deca2f":()=>t(()=>import("./style.html-e76d86ca.js"),[]).then(({data:_})=>_),"v-05d1e0ae":()=>t(()=>import("./api.html-be4e36df.js"),[]).then(({data:_})=>_),"v-32088ac8":()=>t(()=>import("./config.html-3e6c94d3.js"),[]).then(({data:_})=>_),"v-51b91dbb":()=>t(()=>import("./env.html-4ca91726.js"),[]).then(({data:_})=>_),"v-a687c260":()=>t(()=>import("./emoji.html-85447534.js"),[]).then(({data:_})=>_),"v-217b29d5":()=>t(()=>import("./highlighter.html-24498077.js"),[]).then(({data:_})=>_),"v-6a3896c0":()=>t(()=>import("./image-preview.html-24c22d9d.js"),[]).then(({data:_})=>_),"v-44d247e2":()=>t(()=>import("./locale.html-d830a43f.js"),[]).then(({data:_})=>_),"v-9ab35d58":()=>t(()=>import("./search.html-c021a774.js"),[]).then(({data:_})=>_),"v-4a02e9b3":()=>t(()=>import("./tex-renderer.html-da0919d6.js"),[]).then(({data:_})=>_),"v-799c028d":()=>t(()=>import("./upload-image.html-e2846ae7.js"),[]).then(({data:_})=>_),"v-4ce4bc25":()=>t(()=>import("./cdn.html-1219ea86.js"),[]).then(({data:_})=>_),"v-20d69039":()=>t(()=>import("./project.html-b4c8559a.js"),[]).then(({data:_})=>_),"v-282e7e28":()=>t(()=>import("./index.html-3364d128.js"),[]).then(({data:_})=>_),"v-03dd2dc3":()=>t(()=>import("./deta.html-38fca7e7.js"),[]).then(({data:_})=>_),"v-5c8fe1f8":()=>t(()=>import("./railway.html-4ef4bd29.js"),[]).then(({data:_})=>_),"v-ca0c1444":()=>t(()=>import("./tidb.html-c5bdbc08.js"),[]).then(({data:_})=>_),"v-01046c4a":()=>t(()=>import("./vercel.html-3d8f822d.js"),[]).then(({data:_})=>_),"v-7e05fcb0":()=>t(()=>import("./vps.html-0f3d2725.js"),[]).then(({data:_})=>_),"v-18e814dc":()=>t(()=>import("./index.html-32ceb276.js"),[]).then(({data:_})=>_),"v-d89abf28":()=>t(()=>import("./comment.html-dd224b56.js"),[]).then(({data:_})=>_),"v-3545a365":()=>t(()=>import("./emoji.html-e007b28a.js"),[]).then(({data:_})=>_),"v-76f09829":()=>t(()=>import("./i18n.html-15926fbe.js"),[]).then(({data:_})=>_),"v-b37abd12":()=>t(()=>import("./label.html-60f4dcb8.js"),[]).then(({data:_})=>_),"v-e7f39908":()=>t(()=>import("./notification.html-5d8cc6d0.js"),[]).then(({data:_})=>_),"v-b625c95a":()=>t(()=>import("./pageview.html-4d0daa64.js"),[]).then(({data:_})=>_),"v-13e47ffe":()=>t(()=>import("./reaction.html-83e4c736.js"),[]).then(({data:_})=>_),"v-ad4a5f16":()=>t(()=>import("./safety.html-1a8e92ed.js"),[]).then(({data:_})=>_),"v-3b4d5f5f":()=>t(()=>import("./search.html-93dded7f.js"),[]).then(({data:_})=>_),"v-10edb0da":()=>t(()=>import("./style.html-3e97f22a.js"),[]).then(({data:_})=>_),"v-59c74604":()=>t(()=>import("./syntax.html-7d098723.js"),[]).then(({data:_})=>_),"v-69aa1265":()=>t(()=>import("./index.html-3955d50d.js"),[]).then(({data:_})=>_),"v-41bae069":()=>t(()=>import("./client.html-b239b7ba.js"),[]).then(({data:_})=>_),"v-1ede0ff1":()=>t(()=>import("./server.html-315f198a.js"),[]).then(({data:_})=>_),"v-1b29c0dc":()=>t(()=>import("./api.html-7b9c14a0.js"),[]).then(({data:_})=>_),"v-627d52aa":()=>t(()=>import("./file.html-aebc42d5.js"),[]).then(({data:_})=>_),"v-c2f9c588":()=>t(()=>import("./props.html-2e75d7ae.js"),[]).then(({data:_})=>_),"v-71916cca":()=>t(()=>import("./style.html-6209584a.js"),[]).then(({data:_})=>_),"v-23db4b1a":()=>t(()=>import("./api.html-76013f62.js"),[]).then(({data:_})=>_),"v-c8800e48":()=>t(()=>import("./config.html-83f45836.js"),[]).then(({data:_})=>_),"v-6fc28827":()=>t(()=>import("./env.html-7766cb2c.js"),[]).then(({data:_})=>_),"v-258538f6":()=>t(()=>import("./index.html-240433c0.js"),[]).then(({data:_})=>_),"v-56ccdc67":()=>t(()=>import("./recent-comment.html-2a039345.js"),[]).then(({data:_})=>_),"v-62f4663e":()=>t(()=>import("./user-list.html-5b3e3b3f.js"),[]).then(({data:_})=>_),"v-1855f099":()=>t(()=>import("./index.html-de0e62f8.js"),[]).then(({data:_})=>_),"v-bf28225a":()=>t(()=>import("./recent-comment.html-9734e0dd.js"),[]).then(({data:_})=>_),"v-22b68052":()=>t(()=>import("./user-list.html-87d2667f.js"),[]).then(({data:_})=>_),"v-3706649a":()=>t(()=>import("./404.html-e1952df4.js"),[]).then(({data:_})=>_),"v-638c1d18":()=>t(()=>import("./index.html-cffec445.js"),[]).then(({data:_})=>_),"v-fffb8e28":()=>t(()=>import("./index.html-5991287a.js"),[]).then(({data:_})=>_),"v-acb2d44c":()=>t(()=>import("./index.html-87f37730.js"),[]).then(({data:_})=>_),"v-1061ff51":()=>t(()=>import("./index.html-1219f8b7.js"),[]).then(({data:_})=>_),"v-2b093776":()=>t(()=>import("./index.html-f0c1dcb8.js"),[]).then(({data:_})=>_),"v-5f449840":()=>t(()=>import("./index.html-21308421.js"),[]).then(({data:_})=>_),"v-e6412400":()=>t(()=>import("./index.html-46149865.js"),[]).then(({data:_})=>_),"v-2809be24":()=>t(()=>import("./index.html-7b8e3de1.js"),[]).then(({data:_})=>_),"v-36d075b2":()=>t(()=>import("./index.html-84a0cf98.js"),[]).then(({data:_})=>_),"v-22a2f9fd":()=>t(()=>import("./index.html-a327a0bb.js"),[]).then(({data:_})=>_),"v-278ff8af":()=>t(()=>import("./index.html-e12d909b.js"),[]).then(({data:_})=>_),"v-22b6aabd":()=>t(()=>import("./index.html-52490954.js"),[]).then(({data:_})=>_),"v-41f85059":()=>t(()=>import("./index.html-1fa6a125.js"),[]).then(({data:_})=>_),"v-7cb85b93":()=>t(()=>import("./index.html-5ad22e0c.js"),[]).then(({data:_})=>_),"v-64f78511":()=>t(()=>import("./index.html-f2767e7d.js"),[]).then(({data:_})=>_),"v-809ee1ca":()=>t(()=>import("./index.html-adec47c1.js"),[]).then(({data:_})=>_)},w=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/assets/icon/chrome-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#0e6db1"}],["link",{"rel":"apple-touch-icon","href":"/assets/icon/apple-icon-152.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"white"}],["meta",{"name":"msapplication-TileImage","content":"/assets/icon/ms-icon-144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{"/":{"lang":"zh-CN","title":"Waline","description":"一款简洁、安全的评论系统。"},"/en/":{"lang":"en-US","title":"Waline","description":"A Simple, Safe Comment System."}}}'),k={"v-8daa1a0e":e(()=>t(()=>import("./index.html-af10e8f0.js"),["assets/index.html-af10e8f0.js","assets/framework-e827339c.js"])),"v-238a4bd5":e(()=>t(()=>import("./contribution.html-b1d8be4e.js"),["assets/contribution.html-b1d8be4e.js","assets/framework-e827339c.js"])),"v-76657832":e(()=>t(()=>import("./design.html-f5522509.js"),["assets/design.html-f5522509.js","assets/framework-e827339c.js"])),"v-e4322366":e(()=>t(()=>import("./ecosystem.html-56332501.js"),["assets/ecosystem.html-56332501.js","assets/framework-e827339c.js"])),"v-533c70f7":e(()=>t(()=>import("./faq.html-45b9685b.js"),["assets/faq.html-45b9685b.js","assets/framework-e827339c.js"])),"v-271aae61":e(()=>t(()=>import("./intro.html-ae66c68e.js"),["assets/intro.html-ae66c68e.js","assets/framework-e827339c.js"])),"v-0b911545":e(()=>t(()=>import("./index.html-f295742f.js"),["assets/index.html-f295742f.js","assets/framework-e827339c.js"])),"v-df55107c":e(()=>t(()=>import("./emoji-compact.html-79930508.js"),["assets/emoji-compact.html-79930508.js","assets/framework-e827339c.js"])),"v-3e64bf6a":e(()=>t(()=>import("./legacy.html-eef3cfd4.js"),["assets/legacy.html-eef3cfd4.js","assets/framework-e827339c.js"])),"v-38e2581c":e(()=>t(()=>import("./reactivity.html-ecc9541b.js"),["assets/reactivity.html-ecc9541b.js","assets/framework-e827339c.js"])),"v-60df6871":e(()=>t(()=>import("./syntax.html-8c027a22.js"),["assets/syntax.html-8c027a22.js","assets/logo-5b4cc875.js","assets/framework-e827339c.js"])),"v-2d0a870d":e(()=>t(()=>import("./index.html-8dc87dfd.js"),["assets/index.html-8dc87dfd.js","assets/framework-e827339c.js"])),"v-7dc58ad2":e(()=>t(()=>import("./database.html-79498be6.js"),["assets/database.html-79498be6.js","assets/framework-e827339c.js"])),"v-4fe1dc58":e(()=>t(()=>import("./client.html-572b2f41.js"),["assets/client.html-572b2f41.js","assets/framework-e827339c.js"])),"v-7af875a7":e(()=>t(()=>import("./tool.html-122053ac.js"),["assets/tool.html-122053ac.js","assets/MigrationTool-b55963e1.js","assets/framework-e827339c.js","assets/marked.esm-75dc6516.js"])),"v-aecc6e00":e(()=>t(()=>import("./valine.html-a7716473.js"),["assets/valine.html-a7716473.js","assets/MigrationTool-b55963e1.js","assets/framework-e827339c.js","assets/marked.esm-75dc6516.js"])),"v-40f46b38":e(()=>t(()=>import("./emoji.html-44d90c81.js"),["assets/emoji.html-44d90c81.js","assets/framework-e827339c.js"])),"v-8f9a532e":e(()=>t(()=>import("./highlighter.html-124dd2cf.js"),["assets/highlighter.html-124dd2cf.js","assets/framework-e827339c.js"])),"v-31b76e54":e(()=>t(()=>import("./image-preview.html-b4b5a00e.js"),["assets/image-preview.html-b4b5a00e.js","assets/framework-e827339c.js"])),"v-6b3e0ece":e(()=>t(()=>import("./locale.html-1f3227a4.js"),["assets/locale.html-1f3227a4.js","assets/framework-e827339c.js"])),"v-4ddbcf80":e(()=>t(()=>import("./search.html-dd40617e.js"),["assets/search.html-dd40617e.js","assets/framework-e827339c.js"])),"v-eb7e60c2":e(()=>t(()=>import("./tex-renderer.html-8d199ce1.js"),["assets/tex-renderer.html-8d199ce1.js","assets/framework-e827339c.js"])),"v-8c4c2f0e":e(()=>t(()=>import("./upload-image.html-e332cc71.js"),["assets/upload-image.html-e332cc71.js","assets/framework-e827339c.js"])),"v-f489b7de":e(()=>t(()=>import("./cdn.html-328c9426.js"),["assets/cdn.html-328c9426.js","assets/framework-e827339c.js"])),"v-91c1bbb6":e(()=>t(()=>import("./project.html-45aa7010.js"),["assets/project.html-45aa7010.js","assets/framework-e827339c.js"])),"v-72a3a22e":e(()=>t(()=>import("./contribution.html-91a1332a.js"),["assets/contribution.html-91a1332a.js","assets/framework-e827339c.js"])),"v-05e3f40a":e(()=>t(()=>import("./design.html-bf8f75e1.js"),["assets/design.html-bf8f75e1.js","assets/framework-e827339c.js"])),"v-743ff88e":e(()=>t(()=>import("./ecosystem.html-dd116109.js"),["assets/ecosystem.html-dd116109.js","assets/framework-e827339c.js"])),"v-2945f13a":e(()=>t(()=>import("./faq.html-a38931ea.js"),["assets/faq.html-a38931ea.js","assets/framework-e827339c.js"])),"v-396f59cd":e(()=>t(()=>import("./intro.html-464a2b58.js"),["assets/intro.html-464a2b58.js","assets/framework-e827339c.js"])),"v-0db4d7b1":e(()=>t(()=>import("./index.html-8220ce49.js"),["assets/index.html-8220ce49.js","assets/framework-e827339c.js"])),"v-51adf72e":e(()=>t(()=>import("./emoji-compact.html-0f5b93ec.js"),["assets/emoji-compact.html-0f5b93ec.js","assets/framework-e827339c.js"])),"v-190e625f":e(()=>t(()=>import("./legacy.html-97ceac65.js"),["assets/legacy.html-97ceac65.js","assets/framework-e827339c.js"])),"v-aa8f27f4":e(()=>t(()=>import("./reactivity.html-0b59a6c1.js"),["assets/reactivity.html-0b59a6c1.js","assets/framework-e827339c.js"])),"v-cdbfaaf6":e(()=>t(()=>import("./syntax.html-1fb8cc87.js"),["assets/syntax.html-1fb8cc87.js","assets/logo-5b4cc875.js","assets/framework-e827339c.js"])),"v-dfcb9384":e(()=>t(()=>import("./database.html-0f0a6b10.js"),["assets/database.html-0f0a6b10.js","assets/framework-e827339c.js"])),"v-b032db80":e(()=>t(()=>import("./client.html-894cdd7c.js"),["assets/client.html-894cdd7c.js","assets/framework-e827339c.js"])),"v-e565bdda":e(()=>t(()=>import("./tool.html-3ce15219.js"),["assets/tool.html-3ce15219.js","assets/MigrationTool-b55963e1.js","assets/framework-e827339c.js","assets/marked.esm-75dc6516.js"])),"v-7871496c":e(()=>t(()=>import("./valine.html-128140d3.js"),["assets/valine.html-128140d3.js","assets/MigrationTool-b55963e1.js","assets/framework-e827339c.js","assets/marked.esm-75dc6516.js"])),"v-3bc9d1bc":e(()=>t(()=>import("./index.html-324e72b2.js"),["assets/index.html-324e72b2.js","assets/framework-e827339c.js"])),"v-bfbd0ec2":e(()=>t(()=>import("./aliyun-fc.html-43a755bd.js"),["assets/aliyun-fc.html-43a755bd.js","assets/framework-e827339c.js"])),"v-4fba98a7":e(()=>t(()=>import("./baidu-cfc.html-32f8505a.js"),["assets/baidu-cfc.html-32f8505a.js","assets/framework-e827339c.js"])),"v-41938a62":e(()=>t(()=>import("./cloudbase.html-3ddd03fb.js"),["assets/cloudbase.html-3ddd03fb.js","assets/framework-e827339c.js"])),"v-4e76bea2":e(()=>t(()=>import("./deta.html-5809bdb3.js"),["assets/deta.html-5809bdb3.js","assets/deta-3-2d2cd80c.js","assets/framework-e827339c.js"])),"v-98a2b6d0":e(()=>t(()=>import("./railway.html-250cdb73.js"),["assets/railway.html-250cdb73.js","assets/railway-4-1d6cd327.js","assets/framework-e827339c.js"])),"v-6fe168ca":e(()=>t(()=>import("./tidb.html-af891c2c.js"),["assets/tidb.html-af891c2c.js","assets/tidb-7-1da4307d.js","assets/framework-e827339c.js"])),"v-39dad436":e(()=>t(()=>import("./vercel.html-74777bb1.js"),["assets/vercel.html-74777bb1.js","assets/vercel-7-88df58c1.js","assets/framework-e827339c.js"])),"v-1db4fd88":e(()=>t(()=>import("./vps.html-59a17b4b.js"),["assets/vps.html-59a17b4b.js","assets/framework-e827339c.js"])),"v-e4be97b4":e(()=>t(()=>import("./index.html-32e7801a.js"),["assets/index.html-32e7801a.js","assets/framework-e827339c.js"])),"v-5b4bbe00":e(()=>t(()=>import("./comment.html-8bcb17fe.js"),["assets/comment.html-8bcb17fe.js","assets/framework-e827339c.js"])),"v-173c38f9":e(()=>t(()=>import("./emoji.html-237ca411.js"),["assets/emoji.html-237ca411.js","assets/framework-e827339c.js"])),"v-a071ffd6":e(()=>t(()=>import("./i18n.html-c9b8c697.js"),["assets/i18n.html-c9b8c697.js","assets/framework-e827339c.js"])),"v-ef8d91ea":e(()=>t(()=>import("./label.html-58425443.js"),["assets/label.html-58425443.js","assets/framework-e827339c.js"])),"v-72c82130":e(()=>t(()=>import("./notification.html-2ea7e8da.js"),["assets/notification.html-2ea7e8da.js","assets/framework-e827339c.js"])),"v-3b35ad3f":e(()=>t(()=>import("./pageview.html-506d58d4.js"),["assets/pageview.html-506d58d4.js","assets/framework-e827339c.js"])),"v-aba5dc2c":e(()=>t(()=>import("./reaction.html-61295e49.js"),["assets/reaction.html-61295e49.js","assets/framework-e827339c.js"])),"v-0636ed61":e(()=>t(()=>import("./safety.html-392ac4c3.js"),["assets/safety.html-392ac4c3.js","assets/framework-e827339c.js"])),"v-cfad076a":e(()=>t(()=>import("./search.html-725d8c16.js"),["assets/search.html-725d8c16.js","assets/framework-e827339c.js"])),"v-1a377324":e(()=>t(()=>import("./style.html-66cf4b3b.js"),["assets/style.html-66cf4b3b.js","assets/framework-e827339c.js"])),"v-92b93a20":e(()=>t(()=>import("./syntax.html-ad0287a6.js"),["assets/syntax.html-ad0287a6.js","assets/framework-e827339c.js"])),"v-0490495e":e(()=>t(()=>import("./index.html-a5a95295.js"),["assets/index.html-a5a95295.js","assets/vercel-7-88df58c1.js","assets/vercel-9-e945c6f8.js","assets/framework-e827339c.js"])),"v-74848bfd":e(()=>t(()=>import("./client.html-a28f7291.js"),["assets/client.html-a28f7291.js","assets/framework-e827339c.js"])),"v-51a7bb85":e(()=>t(()=>import("./server.html-94fc1ac9.js"),["assets/server.html-94fc1ac9.js","assets/framework-e827339c.js"])),"v-573c95b4":e(()=>t(()=>import("./api.html-b34ea04a.js"),["assets/api.html-b34ea04a.js","assets/framework-e827339c.js"])),"v-814d20d4":e(()=>t(()=>import("./file.html-4c77919c.js"),["assets/file.html-4c77919c.js","assets/framework-e827339c.js"])),"v-45aac460":e(()=>t(()=>import("./props.html-2a23219b.js"),["assets/props.html-2a23219b.js","assets/framework-e827339c.js"])),"v-05deca2f":e(()=>t(()=>import("./style.html-282b7c4b.js"),["assets/style.html-282b7c4b.js","assets/framework-e827339c.js"])),"v-05d1e0ae":e(()=>t(()=>import("./api.html-718eb512.js"),["assets/api.html-718eb512.js","assets/framework-e827339c.js"])),"v-32088ac8":e(()=>t(()=>import("./config.html-1dce32ca.js"),["assets/config.html-1dce32ca.js","assets/framework-e827339c.js"])),"v-51b91dbb":e(()=>t(()=>import("./env.html-a9e809cd.js"),["assets/env.html-a9e809cd.js","assets/framework-e827339c.js"])),"v-a687c260":e(()=>t(()=>import("./emoji.html-9f5ed312.js"),["assets/emoji.html-9f5ed312.js","assets/framework-e827339c.js"])),"v-217b29d5":e(()=>t(()=>import("./highlighter.html-f27ba5cb.js"),["assets/highlighter.html-f27ba5cb.js","assets/framework-e827339c.js"])),"v-6a3896c0":e(()=>t(()=>import("./image-preview.html-b24067dc.js"),["assets/image-preview.html-b24067dc.js","assets/framework-e827339c.js"])),"v-44d247e2":e(()=>t(()=>import("./locale.html-2e722f18.js"),["assets/locale.html-2e722f18.js","assets/framework-e827339c.js"])),"v-9ab35d58":e(()=>t(()=>import("./search.html-c63696ab.js"),["assets/search.html-c63696ab.js","assets/framework-e827339c.js"])),"v-4a02e9b3":e(()=>t(()=>import("./tex-renderer.html-48e58c25.js"),["assets/tex-renderer.html-48e58c25.js","assets/framework-e827339c.js"])),"v-799c028d":e(()=>t(()=>import("./upload-image.html-dcad9c0a.js"),["assets/upload-image.html-dcad9c0a.js","assets/framework-e827339c.js"])),"v-4ce4bc25":e(()=>t(()=>import("./cdn.html-102bc1f1.js"),["assets/cdn.html-102bc1f1.js","assets/framework-e827339c.js"])),"v-20d69039":e(()=>t(()=>import("./project.html-408cfda4.js"),["assets/project.html-408cfda4.js","assets/framework-e827339c.js"])),"v-282e7e28":e(()=>t(()=>import("./index.html-e089d649.js"),["assets/index.html-e089d649.js","assets/framework-e827339c.js"])),"v-03dd2dc3":e(()=>t(()=>import("./deta.html-5b504c08.js"),["assets/deta.html-5b504c08.js","assets/deta-3-2d2cd80c.js","assets/framework-e827339c.js"])),"v-5c8fe1f8":e(()=>t(()=>import("./railway.html-1ab4dcde.js"),["assets/railway.html-1ab4dcde.js","assets/railway-4-1d6cd327.js","assets/framework-e827339c.js"])),"v-ca0c1444":e(()=>t(()=>import("./tidb.html-314e66d4.js"),["assets/tidb.html-314e66d4.js","assets/tidb-7-1da4307d.js","assets/framework-e827339c.js"])),"v-01046c4a":e(()=>t(()=>import("./vercel.html-4539b5d1.js"),["assets/vercel.html-4539b5d1.js","assets/vercel-7-88df58c1.js","assets/vercel-9-e945c6f8.js","assets/framework-e827339c.js"])),"v-7e05fcb0":e(()=>t(()=>import("./vps.html-781c1435.js"),["assets/vps.html-781c1435.js","assets/framework-e827339c.js"])),"v-18e814dc":e(()=>t(()=>import("./index.html-e230c4fb.js"),["assets/index.html-e230c4fb.js","assets/framework-e827339c.js"])),"v-d89abf28":e(()=>t(()=>import("./comment.html-f83273fb.js"),["assets/comment.html-f83273fb.js","assets/framework-e827339c.js"])),"v-3545a365":e(()=>t(()=>import("./emoji.html-8331d8ec.js"),["assets/emoji.html-8331d8ec.js","assets/framework-e827339c.js"])),"v-76f09829":e(()=>t(()=>import("./i18n.html-b51502ea.js"),["assets/i18n.html-b51502ea.js","assets/framework-e827339c.js"])),"v-b37abd12":e(()=>t(()=>import("./label.html-4a637b0f.js"),["assets/label.html-4a637b0f.js","assets/framework-e827339c.js"])),"v-e7f39908":e(()=>t(()=>import("./notification.html-adc0944a.js"),["assets/notification.html-adc0944a.js","assets/framework-e827339c.js"])),"v-b625c95a":e(()=>t(()=>import("./pageview.html-8e0a7bda.js"),["assets/pageview.html-8e0a7bda.js","assets/framework-e827339c.js"])),"v-13e47ffe":e(()=>t(()=>import("./reaction.html-52db607f.js"),["assets/reaction.html-52db607f.js","assets/framework-e827339c.js"])),"v-ad4a5f16":e(()=>t(()=>import("./safety.html-9ac6cb88.js"),["assets/safety.html-9ac6cb88.js","assets/framework-e827339c.js"])),"v-3b4d5f5f":e(()=>t(()=>import("./search.html-8b6dda74.js"),["assets/search.html-8b6dda74.js","assets/framework-e827339c.js"])),"v-10edb0da":e(()=>t(()=>import("./style.html-122d405b.js"),["assets/style.html-122d405b.js","assets/framework-e827339c.js"])),"v-59c74604":e(()=>t(()=>import("./syntax.html-0943f06b.js"),["assets/syntax.html-0943f06b.js","assets/framework-e827339c.js"])),"v-69aa1265":e(()=>t(()=>import("./index.html-13f0242b.js"),["assets/index.html-13f0242b.js","assets/vercel-7-88df58c1.js","assets/vercel-9-e945c6f8.js","assets/framework-e827339c.js"])),"v-41bae069":e(()=>t(()=>import("./client.html-9581a5d5.js"),["assets/client.html-9581a5d5.js","assets/framework-e827339c.js"])),"v-1ede0ff1":e(()=>t(()=>import("./server.html-7a13b5f1.js"),["assets/server.html-7a13b5f1.js","assets/framework-e827339c.js"])),"v-1b29c0dc":e(()=>t(()=>import("./api.html-d9991090.js"),["assets/api.html-d9991090.js","assets/framework-e827339c.js"])),"v-627d52aa":e(()=>t(()=>import("./file.html-1bdcc0ef.js"),["assets/file.html-1bdcc0ef.js","assets/framework-e827339c.js"])),"v-c2f9c588":e(()=>t(()=>import("./props.html-53d8bbfd.js"),["assets/props.html-53d8bbfd.js","assets/framework-e827339c.js"])),"v-71916cca":e(()=>t(()=>import("./style.html-e071fd36.js"),["assets/style.html-e071fd36.js","assets/framework-e827339c.js"])),"v-23db4b1a":e(()=>t(()=>import("./api.html-68ae1294.js"),["assets/api.html-68ae1294.js","assets/framework-e827339c.js"])),"v-c8800e48":e(()=>t(()=>import("./config.html-7a859497.js"),["assets/config.html-7a859497.js","assets/framework-e827339c.js"])),"v-6fc28827":e(()=>t(()=>import("./env.html-70880d82.js"),["assets/env.html-70880d82.js","assets/framework-e827339c.js"])),"v-258538f6":e(()=>t(()=>import("./index.html-cb0b4c62.js"),["assets/index.html-cb0b4c62.js","assets/framework-e827339c.js"])),"v-56ccdc67":e(()=>t(()=>import("./recent-comment.html-a34f2982.js"),["assets/recent-comment.html-a34f2982.js","assets/framework-e827339c.js"])),"v-62f4663e":e(()=>t(()=>import("./user-list.html-89e799e2.js"),["assets/user-list.html-89e799e2.js","assets/framework-e827339c.js"])),"v-1855f099":e(()=>t(()=>import("./index.html-851a4d9e.js"),["assets/index.html-851a4d9e.js","assets/framework-e827339c.js"])),"v-bf28225a":e(()=>t(()=>import("./recent-comment.html-8dce2f78.js"),["assets/recent-comment.html-8dce2f78.js","assets/framework-e827339c.js"])),"v-22b68052":e(()=>t(()=>import("./user-list.html-23d29493.js"),["assets/user-list.html-23d29493.js","assets/framework-e827339c.js"])),"v-3706649a":e(()=>t(()=>import("./404.html-a55c8d59.js"),["assets/404.html-a55c8d59.js","assets/framework-e827339c.js"])),"v-638c1d18":e(()=>t(()=>import("./index.html-7d09d1b6.js"),["assets/index.html-7d09d1b6.js","assets/framework-e827339c.js"])),"v-fffb8e28":e(()=>t(()=>import("./index.html-bae3c789.js"),["assets/index.html-bae3c789.js","assets/framework-e827339c.js"])),"v-acb2d44c":e(()=>t(()=>import("./index.html-a31a0526.js"),["assets/index.html-a31a0526.js","assets/framework-e827339c.js"])),"v-1061ff51":e(()=>t(()=>import("./index.html-94fa692f.js"),["assets/index.html-94fa692f.js","assets/framework-e827339c.js"])),"v-2b093776":e(()=>t(()=>import("./index.html-37dcb778.js"),["assets/index.html-37dcb778.js","assets/framework-e827339c.js"])),"v-5f449840":e(()=>t(()=>import("./index.html-a4f0983e.js"),["assets/index.html-a4f0983e.js","assets/framework-e827339c.js"])),"v-e6412400":e(()=>t(()=>import("./index.html-1d52d66f.js"),["assets/index.html-1d52d66f.js","assets/framework-e827339c.js"])),"v-2809be24":e(()=>t(()=>import("./index.html-72764f19.js"),["assets/index.html-72764f19.js","assets/framework-e827339c.js"])),"v-36d075b2":e(()=>t(()=>import("./index.html-8cc9bf8f.js"),["assets/index.html-8cc9bf8f.js","assets/framework-e827339c.js"])),"v-22a2f9fd":e(()=>t(()=>import("./index.html-2399995c.js"),["assets/index.html-2399995c.js","assets/framework-e827339c.js"])),"v-278ff8af":e(()=>t(()=>import("./index.html-ce8610bb.js"),["assets/index.html-ce8610bb.js","assets/framework-e827339c.js"])),"v-22b6aabd":e(()=>t(()=>import("./index.html-460be4c2.js"),["assets/index.html-460be4c2.js","assets/framework-e827339c.js"])),"v-41f85059":e(()=>t(()=>import("./index.html-ce2072ce.js"),["assets/index.html-ce2072ce.js","assets/framework-e827339c.js"])),"v-7cb85b93":e(()=>t(()=>import("./index.html-3e1deaba.js"),["assets/index.html-3e1deaba.js","assets/framework-e827339c.js"])),"v-64f78511":e(()=>t(()=>import("./index.html-eb00d518.js"),["assets/index.html-eb00d518.js","assets/framework-e827339c.js"])),"v-809ee1ca":e(()=>t(()=>import("./index.html-73e1fdd0.js"),["assets/index.html-73e1fdd0.js","assets/framework-e827339c.js"]))};var Y=Symbol(""),C=p(S),A=R({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),H=p(A),N=()=>H,F=Symbol(""),J=()=>{const _=a(F);if(!_)throw new Error("usePageFrontmatter() is called without provider.");return _},x=Symbol(""),X=()=>{const _=a(x);if(!_)throw new Error("usePageHead() is called without provider.");return _},G=Symbol(""),U=Symbol(""),Q=()=>{const _=a(U);if(!_)throw new Error("usePageLang() is called without provider.");return _},$=Symbol(""),Z=()=>{const _=a($);if(!_)throw new Error("usePageLayout() is called without provider.");return _},z=Symbol(""),__=()=>{const _=a(z);if(!_)throw new Error("useRouteLocale() is called without provider.");return _},B=p(w),t_=()=>B,j=Symbol(""),e_=()=>{const _=a(j);if(!_)throw new Error("useSiteLocaleData() is called without provider.");return _},r_=Symbol(""),M="Layout",W="NotFound",o_=I({resolveLayouts:_=>_.reduce((r,o)=>({...r,...o.layouts}),{}),resolvePageData:async _=>{const r=C.value[_];return await(r==null?void 0:r())??A},resolvePageFrontmatter:_=>_.frontmatter,resolvePageHead:(_,r,o)=>{const i=L(r.description)?r.description:o.description,E=[...V(r.head)?r.head:[],...o.head,["title",{},_],["meta",{name:"description",content:i}]];return c(E)},resolvePageHeadTitle:(_,r)=>[_.title,r.title].filter(o=>!!o).join(" | "),resolvePageLang:_=>_.lang||"en",resolvePageLayout:(_,r)=>{let o;if(_.path){const i=_.frontmatter.layout;L(i)?o=i:o=M}else o=W;return r[o]},resolveRouteLocale:(_,r)=>s(_,r),resolveSiteLocaleData:(_,r)=>({..._,..._.locales[r]})}),i_=T({name:"ClientOnly",setup(_,r){const o=p(!1);return f(()=>{o.value=!0}),()=>{var i,E;return o.value?(E=(i=r.slots).default)==null?void 0:E.call(i):null}}}),v_=T({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(_){const r=N(),o=h(()=>k[_.pageKey||r.value.key]);return()=>o.value?P(o.value):P("div","404 Not Found")}}),E_=(_={})=>_,d_=_=>b(_)?_:`/${l(_)}`;export{i_ as C,t as _,Q as a,J as b,N as c,E_ as d,__ as e,e_ as f,v_ as g,Z as h,o_ as i,k as j,F as k,Y as l,G as m,x as n,U as o,H as p,$ as q,z as r,B as s,j as t,t_ as u,X as v,d_ as w,r_ as x};
