import{y as e,r as p,p as R,J as I,t as T,e as L,j as V,aa as c,ab as s,o as f,b as h,h as P,f as b,a2 as l,z as a}from"./framework-a094cba0.js";const g="modulepreload",y=function(_){return"/"+_},D={},t=function(r,o,i){if(!o||o.length===0)return r();const E=document.getElementsByTagName("link");return Promise.all(o.map(v=>{if(v=y(v),v in D)return;D[v]=!0;const u=v.endsWith(".css"),O=u?'[rel="stylesheet"]':"";if(!!i)for(let m=E.length-1;m>=0;m--){const n=E[m];if(n.href===v&&(!u||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${O}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":g,u||(d.as="script",d.crossOrigin=""),d.href=v,document.head.appendChild(d),u)return new Promise((m,n)=>{d.addEventListener("load",m),d.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${v}`)))})})).then(()=>r())},S={"v-8daa1a0e":()=>t(()=>import("./index.html-740fa24c.js"),[]).then(({data:_})=>_),"v-238a4bd5":()=>t(()=>import("./contribution.html-5fcda515.js"),[]).then(({data:_})=>_),"v-76657832":()=>t(()=>import("./design.html-5816d5b0.js"),[]).then(({data:_})=>_),"v-e4322366":()=>t(()=>import("./ecosystem.html-2b508b09.js"),[]).then(({data:_})=>_),"v-533c70f7":()=>t(()=>import("./faq.html-911e3ca1.js"),[]).then(({data:_})=>_),"v-271aae61":()=>t(()=>import("./intro.html-b953f0d0.js"),[]).then(({data:_})=>_),"v-0b911545":()=>t(()=>import("./index.html-3b15113a.js"),[]).then(({data:_})=>_),"v-df55107c":()=>t(()=>import("./emoji-compact.html-4a3b0e3c.js"),[]).then(({data:_})=>_),"v-3e64bf6a":()=>t(()=>import("./legacy.html-32aba50a.js"),[]).then(({data:_})=>_),"v-38e2581c":()=>t(()=>import("./reactivity.html-15f54ca7.js"),[]).then(({data:_})=>_),"v-60df6871":()=>t(()=>import("./syntax.html-d7789ca6.js"),[]).then(({data:_})=>_),"v-2d0a870d":()=>t(()=>import("./index.html-f1075ed8.js"),[]).then(({data:_})=>_),"v-7dc58ad2":()=>t(()=>import("./database.html-dea090bc.js"),[]).then(({data:_})=>_),"v-4fe1dc58":()=>t(()=>import("./client.html-2a7fe83f.js"),[]).then(({data:_})=>_),"v-7af875a7":()=>t(()=>import("./tool.html-8d0c64a9.js"),[]).then(({data:_})=>_),"v-aecc6e00":()=>t(()=>import("./valine.html-61e22093.js"),[]).then(({data:_})=>_),"v-40f46b38":()=>t(()=>import("./emoji.html-67fd503e.js"),[]).then(({data:_})=>_),"v-8f9a532e":()=>t(()=>import("./highlighter.html-764a9380.js"),[]).then(({data:_})=>_),"v-31b76e54":()=>t(()=>import("./image-preview.html-14920302.js"),[]).then(({data:_})=>_),"v-6b3e0ece":()=>t(()=>import("./locale.html-82b44094.js"),[]).then(({data:_})=>_),"v-4ddbcf80":()=>t(()=>import("./search.html-fe4df1f7.js"),[]).then(({data:_})=>_),"v-eb7e60c2":()=>t(()=>import("./tex-renderer.html-69b1fae8.js"),[]).then(({data:_})=>_),"v-8c4c2f0e":()=>t(()=>import("./upload-image.html-519b4d30.js"),[]).then(({data:_})=>_),"v-f489b7de":()=>t(()=>import("./cdn.html-f62314e2.js"),[]).then(({data:_})=>_),"v-91c1bbb6":()=>t(()=>import("./project.html-0450354e.js"),[]).then(({data:_})=>_),"v-72a3a22e":()=>t(()=>import("./contribution.html-3ad6effd.js"),[]).then(({data:_})=>_),"v-05e3f40a":()=>t(()=>import("./design.html-d94bfdd9.js"),[]).then(({data:_})=>_),"v-743ff88e":()=>t(()=>import("./ecosystem.html-f8c0e375.js"),[]).then(({data:_})=>_),"v-2945f13a":()=>t(()=>import("./faq.html-d78e1770.js"),[]).then(({data:_})=>_),"v-396f59cd":()=>t(()=>import("./intro.html-e19f3bc4.js"),[]).then(({data:_})=>_),"v-0db4d7b1":()=>t(()=>import("./index.html-bbe8502e.js"),[]).then(({data:_})=>_),"v-51adf72e":()=>t(()=>import("./emoji-compact.html-7084e598.js"),[]).then(({data:_})=>_),"v-190e625f":()=>t(()=>import("./legacy.html-8d912344.js"),[]).then(({data:_})=>_),"v-aa8f27f4":()=>t(()=>import("./reactivity.html-5e96410b.js"),[]).then(({data:_})=>_),"v-cdbfaaf6":()=>t(()=>import("./syntax.html-a214a8be.js"),[]).then(({data:_})=>_),"v-dfcb9384":()=>t(()=>import("./database.html-a70eaea2.js"),[]).then(({data:_})=>_),"v-b032db80":()=>t(()=>import("./client.html-e4c88df8.js"),[]).then(({data:_})=>_),"v-e565bdda":()=>t(()=>import("./tool.html-642a9a56.js"),[]).then(({data:_})=>_),"v-7871496c":()=>t(()=>import("./valine.html-b98b9791.js"),[]).then(({data:_})=>_),"v-3bc9d1bc":()=>t(()=>import("./index.html-06503128.js"),[]).then(({data:_})=>_),"v-bfbd0ec2":()=>t(()=>import("./aliyun-fc.html-859d6213.js"),[]).then(({data:_})=>_),"v-4fba98a7":()=>t(()=>import("./baidu-cfc.html-f6386432.js"),[]).then(({data:_})=>_),"v-41938a62":()=>t(()=>import("./cloudbase.html-6e98517d.js"),[]).then(({data:_})=>_),"v-4e76bea2":()=>t(()=>import("./deta.html-a56677b6.js"),[]).then(({data:_})=>_),"v-98a2b6d0":()=>t(()=>import("./railway.html-f16d9254.js"),[]).then(({data:_})=>_),"v-6fe168ca":()=>t(()=>import("./tidb.html-31046877.js"),[]).then(({data:_})=>_),"v-39dad436":()=>t(()=>import("./vercel.html-2fd721f4.js"),[]).then(({data:_})=>_),"v-1db4fd88":()=>t(()=>import("./vps.html-08f22f60.js"),[]).then(({data:_})=>_),"v-e4be97b4":()=>t(()=>import("./index.html-1c790e55.js"),[]).then(({data:_})=>_),"v-5b4bbe00":()=>t(()=>import("./comment.html-0a97444c.js"),[]).then(({data:_})=>_),"v-173c38f9":()=>t(()=>import("./emoji.html-178c29a8.js"),[]).then(({data:_})=>_),"v-a071ffd6":()=>t(()=>import("./i18n.html-06d0a5b4.js"),[]).then(({data:_})=>_),"v-ef8d91ea":()=>t(()=>import("./label.html-52d9c974.js"),[]).then(({data:_})=>_),"v-72c82130":()=>t(()=>import("./notification.html-4c82d921.js"),[]).then(({data:_})=>_),"v-3b35ad3f":()=>t(()=>import("./pageview.html-cc0bb7c7.js"),[]).then(({data:_})=>_),"v-aba5dc2c":()=>t(()=>import("./reaction.html-e00bd8d4.js"),[]).then(({data:_})=>_),"v-0636ed61":()=>t(()=>import("./safety.html-3d573513.js"),[]).then(({data:_})=>_),"v-cfad076a":()=>t(()=>import("./search.html-20583830.js"),[]).then(({data:_})=>_),"v-1a377324":()=>t(()=>import("./style.html-77af36b7.js"),[]).then(({data:_})=>_),"v-92b93a20":()=>t(()=>import("./syntax.html-97a3578e.js"),[]).then(({data:_})=>_),"v-0490495e":()=>t(()=>import("./index.html-983a6c85.js"),[]).then(({data:_})=>_),"v-74848bfd":()=>t(()=>import("./client.html-22b9f3fb.js"),[]).then(({data:_})=>_),"v-51a7bb85":()=>t(()=>import("./server.html-3b549c52.js"),[]).then(({data:_})=>_),"v-573c95b4":()=>t(()=>import("./api.html-2cea0ae4.js"),[]).then(({data:_})=>_),"v-814d20d4":()=>t(()=>import("./file.html-51e99c1a.js"),[]).then(({data:_})=>_),"v-45aac460":()=>t(()=>import("./props.html-eab670ab.js"),[]).then(({data:_})=>_),"v-05deca2f":()=>t(()=>import("./style.html-1aa18dfe.js"),[]).then(({data:_})=>_),"v-05d1e0ae":()=>t(()=>import("./api.html-d5b871d8.js"),[]).then(({data:_})=>_),"v-32088ac8":()=>t(()=>import("./config.html-d11b8476.js"),[]).then(({data:_})=>_),"v-51b91dbb":()=>t(()=>import("./env.html-d5a70c6c.js"),[]).then(({data:_})=>_),"v-a687c260":()=>t(()=>import("./emoji.html-0245ec6e.js"),[]).then(({data:_})=>_),"v-217b29d5":()=>t(()=>import("./highlighter.html-43b026c2.js"),[]).then(({data:_})=>_),"v-6a3896c0":()=>t(()=>import("./image-preview.html-6c17b76e.js"),[]).then(({data:_})=>_),"v-44d247e2":()=>t(()=>import("./locale.html-9580e1de.js"),[]).then(({data:_})=>_),"v-9ab35d58":()=>t(()=>import("./search.html-6a550b93.js"),[]).then(({data:_})=>_),"v-4a02e9b3":()=>t(()=>import("./tex-renderer.html-65b996b4.js"),[]).then(({data:_})=>_),"v-799c028d":()=>t(()=>import("./upload-image.html-369ce09a.js"),[]).then(({data:_})=>_),"v-4ce4bc25":()=>t(()=>import("./cdn.html-ed50dcce.js"),[]).then(({data:_})=>_),"v-20d69039":()=>t(()=>import("./project.html-043d6bd3.js"),[]).then(({data:_})=>_),"v-282e7e28":()=>t(()=>import("./index.html-8a404a14.js"),[]).then(({data:_})=>_),"v-03dd2dc3":()=>t(()=>import("./deta.html-46718eb4.js"),[]).then(({data:_})=>_),"v-5c8fe1f8":()=>t(()=>import("./railway.html-e40036ed.js"),[]).then(({data:_})=>_),"v-ca0c1444":()=>t(()=>import("./tidb.html-69a834ba.js"),[]).then(({data:_})=>_),"v-01046c4a":()=>t(()=>import("./vercel.html-8b78a6bc.js"),[]).then(({data:_})=>_),"v-7e05fcb0":()=>t(()=>import("./vps.html-003e1df8.js"),[]).then(({data:_})=>_),"v-18e814dc":()=>t(()=>import("./index.html-6af1df1b.js"),[]).then(({data:_})=>_),"v-d89abf28":()=>t(()=>import("./comment.html-e7cf817c.js"),[]).then(({data:_})=>_),"v-3545a365":()=>t(()=>import("./emoji.html-4bb824b4.js"),[]).then(({data:_})=>_),"v-76f09829":()=>t(()=>import("./i18n.html-ba776479.js"),[]).then(({data:_})=>_),"v-b37abd12":()=>t(()=>import("./label.html-e449dafe.js"),[]).then(({data:_})=>_),"v-e7f39908":()=>t(()=>import("./notification.html-912cf141.js"),[]).then(({data:_})=>_),"v-b625c95a":()=>t(()=>import("./pageview.html-d312b023.js"),[]).then(({data:_})=>_),"v-13e47ffe":()=>t(()=>import("./reaction.html-a998aee8.js"),[]).then(({data:_})=>_),"v-ad4a5f16":()=>t(()=>import("./safety.html-9ed95bbc.js"),[]).then(({data:_})=>_),"v-3b4d5f5f":()=>t(()=>import("./search.html-c62de167.js"),[]).then(({data:_})=>_),"v-10edb0da":()=>t(()=>import("./style.html-7d4ee093.js"),[]).then(({data:_})=>_),"v-59c74604":()=>t(()=>import("./syntax.html-ad4c5c39.js"),[]).then(({data:_})=>_),"v-69aa1265":()=>t(()=>import("./index.html-19674d37.js"),[]).then(({data:_})=>_),"v-41bae069":()=>t(()=>import("./client.html-4600a320.js"),[]).then(({data:_})=>_),"v-1ede0ff1":()=>t(()=>import("./server.html-2cadbca9.js"),[]).then(({data:_})=>_),"v-1b29c0dc":()=>t(()=>import("./api.html-87bad0b3.js"),[]).then(({data:_})=>_),"v-627d52aa":()=>t(()=>import("./file.html-a3765d39.js"),[]).then(({data:_})=>_),"v-c2f9c588":()=>t(()=>import("./props.html-dfedf3bf.js"),[]).then(({data:_})=>_),"v-71916cca":()=>t(()=>import("./style.html-28033b04.js"),[]).then(({data:_})=>_),"v-23db4b1a":()=>t(()=>import("./api.html-040f9b77.js"),[]).then(({data:_})=>_),"v-c8800e48":()=>t(()=>import("./config.html-992468c4.js"),[]).then(({data:_})=>_),"v-6fc28827":()=>t(()=>import("./env.html-8856bcfc.js"),[]).then(({data:_})=>_),"v-258538f6":()=>t(()=>import("./index.html-23d06559.js"),[]).then(({data:_})=>_),"v-56ccdc67":()=>t(()=>import("./recent-comment.html-fc69d407.js"),[]).then(({data:_})=>_),"v-62f4663e":()=>t(()=>import("./user-list.html-1bd60941.js"),[]).then(({data:_})=>_),"v-1855f099":()=>t(()=>import("./index.html-dc6be15a.js"),[]).then(({data:_})=>_),"v-bf28225a":()=>t(()=>import("./recent-comment.html-da810d50.js"),[]).then(({data:_})=>_),"v-22b68052":()=>t(()=>import("./user-list.html-2cac7b24.js"),[]).then(({data:_})=>_),"v-3706649a":()=>t(()=>import("./404.html-e1952df4.js"),[]).then(({data:_})=>_),"v-638c1d18":()=>t(()=>import("./index.html-6a6e49ef.js"),[]).then(({data:_})=>_),"v-fffb8e28":()=>t(()=>import("./index.html-dce8f085.js"),[]).then(({data:_})=>_),"v-acb2d44c":()=>t(()=>import("./index.html-4bf703fb.js"),[]).then(({data:_})=>_),"v-1061ff51":()=>t(()=>import("./index.html-9faf2d1d.js"),[]).then(({data:_})=>_),"v-2b093776":()=>t(()=>import("./index.html-e9127e0e.js"),[]).then(({data:_})=>_),"v-5f449840":()=>t(()=>import("./index.html-aa125552.js"),[]).then(({data:_})=>_),"v-e6412400":()=>t(()=>import("./index.html-fd5dc43d.js"),[]).then(({data:_})=>_),"v-2809be24":()=>t(()=>import("./index.html-e6373392.js"),[]).then(({data:_})=>_),"v-36d075b2":()=>t(()=>import("./index.html-aceabcd4.js"),[]).then(({data:_})=>_),"v-22a2f9fd":()=>t(()=>import("./index.html-aa197162.js"),[]).then(({data:_})=>_),"v-278ff8af":()=>t(()=>import("./index.html-e66740d7.js"),[]).then(({data:_})=>_),"v-22b6aabd":()=>t(()=>import("./index.html-c0127ed4.js"),[]).then(({data:_})=>_),"v-41f85059":()=>t(()=>import("./index.html-201e5a38.js"),[]).then(({data:_})=>_),"v-7cb85b93":()=>t(()=>import("./index.html-2d97ec2b.js"),[]).then(({data:_})=>_),"v-64f78511":()=>t(()=>import("./index.html-dae24a3e.js"),[]).then(({data:_})=>_),"v-809ee1ca":()=>t(()=>import("./index.html-7ed49b2c.js"),[]).then(({data:_})=>_)},w=JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[["link",{"rel":"icon","href":"/favicon.ico"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-mask-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"icon","href":"/assets/icon/chrome-512.png","type":"image/png","sizes":"512x512"}],["link",{"rel":"icon","href":"/assets/icon/chrome-192.png","type":"image/png","sizes":"192x192"}],["link",{"rel":"manifest","href":"/manifest.webmanifest","crossorigin":"use-credentials"}],["meta",{"name":"theme-color","content":"#0e6db1"}],["link",{"rel":"apple-touch-icon","href":"/assets/icon/apple-icon-152.png"}],["meta",{"name":"apple-mobile-web-app-capable","content":"yes"}],["meta",{"name":"apple-mobile-web-app-status-bar-style","content":"white"}],["meta",{"name":"msapplication-TileImage","content":"/assets/icon/ms-icon-144.png"}],["meta",{"name":"msapplication-TileColor","content":"#ffffff"}],["meta",{"name":"viewport","content":"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"}]],"locales":{"/":{"lang":"zh-CN","title":"Waline","description":"一款简洁、安全的评论系统。"},"/en/":{"lang":"en-US","title":"Waline","description":"A Simple, Safe Comment System."}}}'),k={"v-8daa1a0e":e(()=>t(()=>import("./index.html-6ecc7aff.js"),["assets/index.html-6ecc7aff.js","assets/framework-a094cba0.js"])),"v-238a4bd5":e(()=>t(()=>import("./contribution.html-5e4b42e9.js"),["assets/contribution.html-5e4b42e9.js","assets/framework-a094cba0.js"])),"v-76657832":e(()=>t(()=>import("./design.html-2f746825.js"),["assets/design.html-2f746825.js","assets/framework-a094cba0.js"])),"v-e4322366":e(()=>t(()=>import("./ecosystem.html-b72b67b3.js"),["assets/ecosystem.html-b72b67b3.js","assets/framework-a094cba0.js"])),"v-533c70f7":e(()=>t(()=>import("./faq.html-5723492e.js"),["assets/faq.html-5723492e.js","assets/framework-a094cba0.js"])),"v-271aae61":e(()=>t(()=>import("./intro.html-6d01c494.js"),["assets/intro.html-6d01c494.js","assets/framework-a094cba0.js"])),"v-0b911545":e(()=>t(()=>import("./index.html-50159eb2.js"),["assets/index.html-50159eb2.js","assets/framework-a094cba0.js"])),"v-df55107c":e(()=>t(()=>import("./emoji-compact.html-fa2de4ba.js"),["assets/emoji-compact.html-fa2de4ba.js","assets/framework-a094cba0.js"])),"v-3e64bf6a":e(()=>t(()=>import("./legacy.html-a0a9e64d.js"),["assets/legacy.html-a0a9e64d.js","assets/framework-a094cba0.js"])),"v-38e2581c":e(()=>t(()=>import("./reactivity.html-497f00c3.js"),["assets/reactivity.html-497f00c3.js","assets/framework-a094cba0.js"])),"v-60df6871":e(()=>t(()=>import("./syntax.html-515d4c55.js"),["assets/syntax.html-515d4c55.js","assets/logo-5b4cc875.js","assets/framework-a094cba0.js"])),"v-2d0a870d":e(()=>t(()=>import("./index.html-db49016c.js"),["assets/index.html-db49016c.js","assets/framework-a094cba0.js"])),"v-7dc58ad2":e(()=>t(()=>import("./database.html-81829fb3.js"),["assets/database.html-81829fb3.js","assets/framework-a094cba0.js"])),"v-4fe1dc58":e(()=>t(()=>import("./client.html-2fe0ca9d.js"),["assets/client.html-2fe0ca9d.js","assets/framework-a094cba0.js"])),"v-7af875a7":e(()=>t(()=>import("./tool.html-8dc0549e.js"),["assets/tool.html-8dc0549e.js","assets/MigrationTool-9cabcfe7.js","assets/framework-a094cba0.js"])),"v-aecc6e00":e(()=>t(()=>import("./valine.html-9d336087.js"),["assets/valine.html-9d336087.js","assets/MigrationTool-9cabcfe7.js","assets/framework-a094cba0.js"])),"v-40f46b38":e(()=>t(()=>import("./emoji.html-2bdb46c0.js"),["assets/emoji.html-2bdb46c0.js","assets/framework-a094cba0.js"])),"v-8f9a532e":e(()=>t(()=>import("./highlighter.html-9c340d7e.js"),["assets/highlighter.html-9c340d7e.js","assets/framework-a094cba0.js"])),"v-31b76e54":e(()=>t(()=>import("./image-preview.html-db1a9e86.js"),["assets/image-preview.html-db1a9e86.js","assets/framework-a094cba0.js"])),"v-6b3e0ece":e(()=>t(()=>import("./locale.html-80342d30.js"),["assets/locale.html-80342d30.js","assets/framework-a094cba0.js"])),"v-4ddbcf80":e(()=>t(()=>import("./search.html-81b33acc.js"),["assets/search.html-81b33acc.js","assets/framework-a094cba0.js"])),"v-eb7e60c2":e(()=>t(()=>import("./tex-renderer.html-629abcba.js"),["assets/tex-renderer.html-629abcba.js","assets/framework-a094cba0.js"])),"v-8c4c2f0e":e(()=>t(()=>import("./upload-image.html-6784e788.js"),["assets/upload-image.html-6784e788.js","assets/framework-a094cba0.js"])),"v-f489b7de":e(()=>t(()=>import("./cdn.html-c72a4af8.js"),["assets/cdn.html-c72a4af8.js","assets/framework-a094cba0.js"])),"v-91c1bbb6":e(()=>t(()=>import("./project.html-ae546e26.js"),["assets/project.html-ae546e26.js","assets/framework-a094cba0.js"])),"v-72a3a22e":e(()=>t(()=>import("./contribution.html-dcfd5093.js"),["assets/contribution.html-dcfd5093.js","assets/framework-a094cba0.js"])),"v-05e3f40a":e(()=>t(()=>import("./design.html-6a60afab.js"),["assets/design.html-6a60afab.js","assets/framework-a094cba0.js"])),"v-743ff88e":e(()=>t(()=>import("./ecosystem.html-9a265409.js"),["assets/ecosystem.html-9a265409.js","assets/framework-a094cba0.js"])),"v-2945f13a":e(()=>t(()=>import("./faq.html-7cae3aa8.js"),["assets/faq.html-7cae3aa8.js","assets/framework-a094cba0.js"])),"v-396f59cd":e(()=>t(()=>import("./intro.html-65baa1a1.js"),["assets/intro.html-65baa1a1.js","assets/framework-a094cba0.js"])),"v-0db4d7b1":e(()=>t(()=>import("./index.html-537e641a.js"),["assets/index.html-537e641a.js","assets/framework-a094cba0.js"])),"v-51adf72e":e(()=>t(()=>import("./emoji-compact.html-fce35070.js"),["assets/emoji-compact.html-fce35070.js","assets/framework-a094cba0.js"])),"v-190e625f":e(()=>t(()=>import("./legacy.html-34364178.js"),["assets/legacy.html-34364178.js","assets/framework-a094cba0.js"])),"v-aa8f27f4":e(()=>t(()=>import("./reactivity.html-ecfbd99b.js"),["assets/reactivity.html-ecfbd99b.js","assets/framework-a094cba0.js"])),"v-cdbfaaf6":e(()=>t(()=>import("./syntax.html-5bc30d55.js"),["assets/syntax.html-5bc30d55.js","assets/logo-5b4cc875.js","assets/framework-a094cba0.js"])),"v-dfcb9384":e(()=>t(()=>import("./database.html-8d060fd6.js"),["assets/database.html-8d060fd6.js","assets/framework-a094cba0.js"])),"v-b032db80":e(()=>t(()=>import("./client.html-372b9994.js"),["assets/client.html-372b9994.js","assets/framework-a094cba0.js"])),"v-e565bdda":e(()=>t(()=>import("./tool.html-494b6e3e.js"),["assets/tool.html-494b6e3e.js","assets/MigrationTool-9cabcfe7.js","assets/framework-a094cba0.js"])),"v-7871496c":e(()=>t(()=>import("./valine.html-03218f44.js"),["assets/valine.html-03218f44.js","assets/MigrationTool-9cabcfe7.js","assets/framework-a094cba0.js"])),"v-3bc9d1bc":e(()=>t(()=>import("./index.html-b9dad3a8.js"),["assets/index.html-b9dad3a8.js","assets/framework-a094cba0.js"])),"v-bfbd0ec2":e(()=>t(()=>import("./aliyun-fc.html-07c8ed0d.js"),["assets/aliyun-fc.html-07c8ed0d.js","assets/framework-a094cba0.js"])),"v-4fba98a7":e(()=>t(()=>import("./baidu-cfc.html-531dea28.js"),["assets/baidu-cfc.html-531dea28.js","assets/framework-a094cba0.js"])),"v-41938a62":e(()=>t(()=>import("./cloudbase.html-ed79c1f2.js"),["assets/cloudbase.html-ed79c1f2.js","assets/framework-a094cba0.js"])),"v-4e76bea2":e(()=>t(()=>import("./deta.html-d13405bd.js"),["assets/deta.html-d13405bd.js","assets/deta-3-2d2cd80c.js","assets/framework-a094cba0.js"])),"v-98a2b6d0":e(()=>t(()=>import("./railway.html-4988ef0c.js"),["assets/railway.html-4988ef0c.js","assets/railway-4-1d6cd327.js","assets/framework-a094cba0.js"])),"v-6fe168ca":e(()=>t(()=>import("./tidb.html-8a21673a.js"),["assets/tidb.html-8a21673a.js","assets/tidb-7-1da4307d.js","assets/framework-a094cba0.js"])),"v-39dad436":e(()=>t(()=>import("./vercel.html-6a731e2c.js"),["assets/vercel.html-6a731e2c.js","assets/vercel-7-88df58c1.js","assets/framework-a094cba0.js"])),"v-1db4fd88":e(()=>t(()=>import("./vps.html-98aa0161.js"),["assets/vps.html-98aa0161.js","assets/framework-a094cba0.js"])),"v-e4be97b4":e(()=>t(()=>import("./index.html-6df1a7f6.js"),["assets/index.html-6df1a7f6.js","assets/framework-a094cba0.js"])),"v-5b4bbe00":e(()=>t(()=>import("./comment.html-b3bfac97.js"),["assets/comment.html-b3bfac97.js","assets/framework-a094cba0.js"])),"v-173c38f9":e(()=>t(()=>import("./emoji.html-901f75b2.js"),["assets/emoji.html-901f75b2.js","assets/framework-a094cba0.js"])),"v-a071ffd6":e(()=>t(()=>import("./i18n.html-487aed85.js"),["assets/i18n.html-487aed85.js","assets/framework-a094cba0.js"])),"v-ef8d91ea":e(()=>t(()=>import("./label.html-3f3f86c4.js"),["assets/label.html-3f3f86c4.js","assets/framework-a094cba0.js"])),"v-72c82130":e(()=>t(()=>import("./notification.html-a1242be4.js"),["assets/notification.html-a1242be4.js","assets/framework-a094cba0.js"])),"v-3b35ad3f":e(()=>t(()=>import("./pageview.html-86d8b5b1.js"),["assets/pageview.html-86d8b5b1.js","assets/framework-a094cba0.js"])),"v-aba5dc2c":e(()=>t(()=>import("./reaction.html-2031e7da.js"),["assets/reaction.html-2031e7da.js","assets/framework-a094cba0.js"])),"v-0636ed61":e(()=>t(()=>import("./safety.html-e04dbec9.js"),["assets/safety.html-e04dbec9.js","assets/framework-a094cba0.js"])),"v-cfad076a":e(()=>t(()=>import("./search.html-8168fc71.js"),["assets/search.html-8168fc71.js","assets/framework-a094cba0.js"])),"v-1a377324":e(()=>t(()=>import("./style.html-5066f46a.js"),["assets/style.html-5066f46a.js","assets/framework-a094cba0.js"])),"v-92b93a20":e(()=>t(()=>import("./syntax.html-b7aab6ad.js"),["assets/syntax.html-b7aab6ad.js","assets/framework-a094cba0.js"])),"v-0490495e":e(()=>t(()=>import("./index.html-aa23a4e2.js"),["assets/index.html-aa23a4e2.js","assets/vercel-7-88df58c1.js","assets/vercel-9-e945c6f8.js","assets/framework-a094cba0.js"])),"v-74848bfd":e(()=>t(()=>import("./client.html-6af7e62b.js"),["assets/client.html-6af7e62b.js","assets/framework-a094cba0.js"])),"v-51a7bb85":e(()=>t(()=>import("./server.html-181ee53a.js"),["assets/server.html-181ee53a.js","assets/framework-a094cba0.js"])),"v-573c95b4":e(()=>t(()=>import("./api.html-e0a96af2.js"),["assets/api.html-e0a96af2.js","assets/framework-a094cba0.js"])),"v-814d20d4":e(()=>t(()=>import("./file.html-f27c0e1d.js"),["assets/file.html-f27c0e1d.js","assets/framework-a094cba0.js"])),"v-45aac460":e(()=>t(()=>import("./props.html-430c70e5.js"),["assets/props.html-430c70e5.js","assets/framework-a094cba0.js"])),"v-05deca2f":e(()=>t(()=>import("./style.html-9790622d.js"),["assets/style.html-9790622d.js","assets/framework-a094cba0.js"])),"v-05d1e0ae":e(()=>t(()=>import("./api.html-299d03ac.js"),["assets/api.html-299d03ac.js","assets/framework-a094cba0.js"])),"v-32088ac8":e(()=>t(()=>import("./config.html-2b3983b2.js"),["assets/config.html-2b3983b2.js","assets/framework-a094cba0.js"])),"v-51b91dbb":e(()=>t(()=>import("./env.html-caec5fa5.js"),["assets/env.html-caec5fa5.js","assets/framework-a094cba0.js"])),"v-a687c260":e(()=>t(()=>import("./emoji.html-32fd89ad.js"),["assets/emoji.html-32fd89ad.js","assets/framework-a094cba0.js"])),"v-217b29d5":e(()=>t(()=>import("./highlighter.html-17f38e6b.js"),["assets/highlighter.html-17f38e6b.js","assets/framework-a094cba0.js"])),"v-6a3896c0":e(()=>t(()=>import("./image-preview.html-f26ec08b.js"),["assets/image-preview.html-f26ec08b.js","assets/framework-a094cba0.js"])),"v-44d247e2":e(()=>t(()=>import("./locale.html-c477eac7.js"),["assets/locale.html-c477eac7.js","assets/framework-a094cba0.js"])),"v-9ab35d58":e(()=>t(()=>import("./search.html-397fa1e0.js"),["assets/search.html-397fa1e0.js","assets/framework-a094cba0.js"])),"v-4a02e9b3":e(()=>t(()=>import("./tex-renderer.html-62aca711.js"),["assets/tex-renderer.html-62aca711.js","assets/framework-a094cba0.js"])),"v-799c028d":e(()=>t(()=>import("./upload-image.html-d7b7f9dd.js"),["assets/upload-image.html-d7b7f9dd.js","assets/framework-a094cba0.js"])),"v-4ce4bc25":e(()=>t(()=>import("./cdn.html-277627ca.js"),["assets/cdn.html-277627ca.js","assets/framework-a094cba0.js"])),"v-20d69039":e(()=>t(()=>import("./project.html-bdee02c6.js"),["assets/project.html-bdee02c6.js","assets/framework-a094cba0.js"])),"v-282e7e28":e(()=>t(()=>import("./index.html-d3beb38e.js"),["assets/index.html-d3beb38e.js","assets/framework-a094cba0.js"])),"v-03dd2dc3":e(()=>t(()=>import("./deta.html-46cecdee.js"),["assets/deta.html-46cecdee.js","assets/deta-3-2d2cd80c.js","assets/framework-a094cba0.js"])),"v-5c8fe1f8":e(()=>t(()=>import("./railway.html-93ca8759.js"),["assets/railway.html-93ca8759.js","assets/railway-4-1d6cd327.js","assets/framework-a094cba0.js"])),"v-ca0c1444":e(()=>t(()=>import("./tidb.html-fb2e0c27.js"),["assets/tidb.html-fb2e0c27.js","assets/tidb-7-1da4307d.js","assets/framework-a094cba0.js"])),"v-01046c4a":e(()=>t(()=>import("./vercel.html-0090cdc8.js"),["assets/vercel.html-0090cdc8.js","assets/vercel-7-88df58c1.js","assets/vercel-9-e945c6f8.js","assets/framework-a094cba0.js"])),"v-7e05fcb0":e(()=>t(()=>import("./vps.html-eff76f93.js"),["assets/vps.html-eff76f93.js","assets/framework-a094cba0.js"])),"v-18e814dc":e(()=>t(()=>import("./index.html-b1114493.js"),["assets/index.html-b1114493.js","assets/framework-a094cba0.js"])),"v-d89abf28":e(()=>t(()=>import("./comment.html-fd5b45d0.js"),["assets/comment.html-fd5b45d0.js","assets/framework-a094cba0.js"])),"v-3545a365":e(()=>t(()=>import("./emoji.html-e4b4d9c4.js"),["assets/emoji.html-e4b4d9c4.js","assets/framework-a094cba0.js"])),"v-76f09829":e(()=>t(()=>import("./i18n.html-0c856dda.js"),["assets/i18n.html-0c856dda.js","assets/framework-a094cba0.js"])),"v-b37abd12":e(()=>t(()=>import("./label.html-06da3cbe.js"),["assets/label.html-06da3cbe.js","assets/framework-a094cba0.js"])),"v-e7f39908":e(()=>t(()=>import("./notification.html-c4ff6a58.js"),["assets/notification.html-c4ff6a58.js","assets/framework-a094cba0.js"])),"v-b625c95a":e(()=>t(()=>import("./pageview.html-46521c52.js"),["assets/pageview.html-46521c52.js","assets/framework-a094cba0.js"])),"v-13e47ffe":e(()=>t(()=>import("./reaction.html-14f71d39.js"),["assets/reaction.html-14f71d39.js","assets/framework-a094cba0.js"])),"v-ad4a5f16":e(()=>t(()=>import("./safety.html-8cf6bf11.js"),["assets/safety.html-8cf6bf11.js","assets/framework-a094cba0.js"])),"v-3b4d5f5f":e(()=>t(()=>import("./search.html-d8b80eeb.js"),["assets/search.html-d8b80eeb.js","assets/framework-a094cba0.js"])),"v-10edb0da":e(()=>t(()=>import("./style.html-d35b7d6c.js"),["assets/style.html-d35b7d6c.js","assets/framework-a094cba0.js"])),"v-59c74604":e(()=>t(()=>import("./syntax.html-8d73c83c.js"),["assets/syntax.html-8d73c83c.js","assets/framework-a094cba0.js"])),"v-69aa1265":e(()=>t(()=>import("./index.html-3d20fb7e.js"),["assets/index.html-3d20fb7e.js","assets/vercel-7-88df58c1.js","assets/vercel-9-e945c6f8.js","assets/framework-a094cba0.js"])),"v-41bae069":e(()=>t(()=>import("./client.html-fdef9c10.js"),["assets/client.html-fdef9c10.js","assets/framework-a094cba0.js"])),"v-1ede0ff1":e(()=>t(()=>import("./server.html-dfbb59f1.js"),["assets/server.html-dfbb59f1.js","assets/framework-a094cba0.js"])),"v-1b29c0dc":e(()=>t(()=>import("./api.html-f748a977.js"),["assets/api.html-f748a977.js","assets/framework-a094cba0.js"])),"v-627d52aa":e(()=>t(()=>import("./file.html-0983ae95.js"),["assets/file.html-0983ae95.js","assets/framework-a094cba0.js"])),"v-c2f9c588":e(()=>t(()=>import("./props.html-240ca867.js"),["assets/props.html-240ca867.js","assets/framework-a094cba0.js"])),"v-71916cca":e(()=>t(()=>import("./style.html-ef54c3d1.js"),["assets/style.html-ef54c3d1.js","assets/framework-a094cba0.js"])),"v-23db4b1a":e(()=>t(()=>import("./api.html-52594e7b.js"),["assets/api.html-52594e7b.js","assets/framework-a094cba0.js"])),"v-c8800e48":e(()=>t(()=>import("./config.html-8e998f94.js"),["assets/config.html-8e998f94.js","assets/framework-a094cba0.js"])),"v-6fc28827":e(()=>t(()=>import("./env.html-dcb942dd.js"),["assets/env.html-dcb942dd.js","assets/framework-a094cba0.js"])),"v-258538f6":e(()=>t(()=>import("./index.html-8052457f.js"),["assets/index.html-8052457f.js","assets/framework-a094cba0.js"])),"v-56ccdc67":e(()=>t(()=>import("./recent-comment.html-06889d42.js"),["assets/recent-comment.html-06889d42.js","assets/framework-a094cba0.js"])),"v-62f4663e":e(()=>t(()=>import("./user-list.html-b983a390.js"),["assets/user-list.html-b983a390.js","assets/framework-a094cba0.js"])),"v-1855f099":e(()=>t(()=>import("./index.html-0a647ab1.js"),["assets/index.html-0a647ab1.js","assets/framework-a094cba0.js"])),"v-bf28225a":e(()=>t(()=>import("./recent-comment.html-dc780cd3.js"),["assets/recent-comment.html-dc780cd3.js","assets/framework-a094cba0.js"])),"v-22b68052":e(()=>t(()=>import("./user-list.html-1cbfa120.js"),["assets/user-list.html-1cbfa120.js","assets/framework-a094cba0.js"])),"v-3706649a":e(()=>t(()=>import("./404.html-860f89b7.js"),["assets/404.html-860f89b7.js","assets/framework-a094cba0.js"])),"v-638c1d18":e(()=>t(()=>import("./index.html-b23d61b9.js"),["assets/index.html-b23d61b9.js","assets/framework-a094cba0.js"])),"v-fffb8e28":e(()=>t(()=>import("./index.html-5efe64d4.js"),["assets/index.html-5efe64d4.js","assets/framework-a094cba0.js"])),"v-acb2d44c":e(()=>t(()=>import("./index.html-2bf52516.js"),["assets/index.html-2bf52516.js","assets/framework-a094cba0.js"])),"v-1061ff51":e(()=>t(()=>import("./index.html-3273e02d.js"),["assets/index.html-3273e02d.js","assets/framework-a094cba0.js"])),"v-2b093776":e(()=>t(()=>import("./index.html-88743eaf.js"),["assets/index.html-88743eaf.js","assets/framework-a094cba0.js"])),"v-5f449840":e(()=>t(()=>import("./index.html-9ffd2053.js"),["assets/index.html-9ffd2053.js","assets/framework-a094cba0.js"])),"v-e6412400":e(()=>t(()=>import("./index.html-3fd014fb.js"),["assets/index.html-3fd014fb.js","assets/framework-a094cba0.js"])),"v-2809be24":e(()=>t(()=>import("./index.html-59595bad.js"),["assets/index.html-59595bad.js","assets/framework-a094cba0.js"])),"v-36d075b2":e(()=>t(()=>import("./index.html-552319de.js"),["assets/index.html-552319de.js","assets/framework-a094cba0.js"])),"v-22a2f9fd":e(()=>t(()=>import("./index.html-677a6f5a.js"),["assets/index.html-677a6f5a.js","assets/framework-a094cba0.js"])),"v-278ff8af":e(()=>t(()=>import("./index.html-5f2c5413.js"),["assets/index.html-5f2c5413.js","assets/framework-a094cba0.js"])),"v-22b6aabd":e(()=>t(()=>import("./index.html-c266553b.js"),["assets/index.html-c266553b.js","assets/framework-a094cba0.js"])),"v-41f85059":e(()=>t(()=>import("./index.html-4fe33b76.js"),["assets/index.html-4fe33b76.js","assets/framework-a094cba0.js"])),"v-7cb85b93":e(()=>t(()=>import("./index.html-1ad262c3.js"),["assets/index.html-1ad262c3.js","assets/framework-a094cba0.js"])),"v-64f78511":e(()=>t(()=>import("./index.html-30431f2f.js"),["assets/index.html-30431f2f.js","assets/framework-a094cba0.js"])),"v-809ee1ca":e(()=>t(()=>import("./index.html-3ea52a9c.js"),["assets/index.html-3ea52a9c.js","assets/framework-a094cba0.js"]))};var K=Symbol(""),C=p(S),A=R({key:"",path:"",title:"",lang:"",frontmatter:{},headers:[]}),H=p(A),N=()=>H,F=Symbol(""),Y=()=>{const _=a(F);if(!_)throw new Error("usePageFrontmatter() is called without provider.");return _},U=Symbol(""),G=()=>{const _=a(U);if(!_)throw new Error("usePageHead() is called without provider.");return _},Q=Symbol(""),x=Symbol(""),X=()=>{const _=a(x);if(!_)throw new Error("usePageLang() is called without provider.");return _},$=Symbol(""),Z=()=>{const _=a($);if(!_)throw new Error("usePageLayout() is called without provider.");return _},z=Symbol(""),__=()=>{const _=a(z);if(!_)throw new Error("useRouteLocale() is called without provider.");return _},j=p(w),t_=()=>j,B=Symbol(""),e_=()=>{const _=a(B);if(!_)throw new Error("useSiteLocaleData() is called without provider.");return _},r_=Symbol(""),q="Layout",M="NotFound",o_=I({resolveLayouts:_=>_.reduce((r,o)=>({...r,...o.layouts}),{}),resolvePageData:async _=>{const r=C.value[_];return await(r==null?void 0:r())??A},resolvePageFrontmatter:_=>_.frontmatter,resolvePageHead:(_,r,o)=>{const i=L(r.description)?r.description:o.description,E=[...V(r.head)?r.head:[],...o.head,["title",{},_],["meta",{name:"description",content:i}]];return c(E)},resolvePageHeadTitle:(_,r)=>[_.title,r.title].filter(o=>!!o).join(" | "),resolvePageLang:_=>_.lang||"en",resolvePageLayout:(_,r)=>{let o;if(_.path){const i=_.frontmatter.layout;L(i)?o=i:o=q}else o=M;return r[o]},resolveRouteLocale:(_,r)=>s(_,r),resolveSiteLocaleData:(_,r)=>({..._,..._.locales[r]})}),i_=T({name:"ClientOnly",setup(_,r){const o=p(!1);return f(()=>{o.value=!0}),()=>{var i,E;return o.value?(E=(i=r.slots).default)==null?void 0:E.call(i):null}}}),v_=T({name:"Content",props:{pageKey:{type:String,required:!1,default:""}},setup(_){const r=N(),o=h(()=>k[_.pageKey||r.value.key]);return()=>o.value?P(o.value):P("div","404 Not Found")}}),E_=(_={})=>_,d_=_=>b(_)?_:`/${l(_)}`;export{i_ as C,t as _,X as a,Y as b,N as c,E_ as d,t_ as e,e_ as f,v_ as g,Z as h,o_ as i,k as j,F as k,K as l,Q as m,U as n,x as o,H as p,$ as q,z as r,j as s,B as t,__ as u,G as v,d_ as w,r_ as x};
