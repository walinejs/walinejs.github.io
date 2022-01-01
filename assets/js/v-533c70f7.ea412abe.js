"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6047],{6329:(e,l,n)=>{n.r(l),n.d(l,{data:()=>t});const t={key:"v-533c70f7",path:"/advanced/faq.html",title:"FAQ",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"和 Valine 是什么关系？",slug:"和-valine-是什么关系",children:[]},{level:2,title:"是否需要在 LeanCloud 上部署 Valine-Admin？",slug:"是否需要在-leancloud-上部署-valine-admin",children:[]},{level:2,title:"如何升级？",slug:"如何升级",children:[{level:3,title:"前端",slug:"前端",children:[]},{level:3,title:"服务端",slug:"服务端",children:[]}]},{level:2,title:"发布评论很慢怎么办？",slug:"发布评论很慢怎么办",children:[]},{level:2,title:"如何增加灯箱效果？",slug:"如何增加灯箱效果",children:[{level:3,title:"lightGallery",slug:"lightgallery",children:[]},{level:3,title:"Slimbox2",slug:"slimbox2",children:[]},{level:3,title:"lightbox2",slug:"lightbox2",children:[]},{level:3,title:"Fancybox",slug:"fancybox",children:[]}]}],filePathRelative:"advanced/faq.md",git:{updatedTime:1641055657e3,contributors:[{name:"Austin Lee",email:"i@imnerd.org",commits:1}]}}},3180:(e,l,n)=>{n.r(l),n.d(l,{default:()=>ce});var t=n(8917),a=n(625),i=n(6297);const r=(0,t._)("h1",{id:"faq",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),(0,t.Uk)(" FAQ")],-1),s=(0,t._)("p",null,"Waline 诞生之初就已经作了很明确的定位:",-1),d=(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t.Uk)("一款 "),(0,t._)("strong",null,"带后端"),(0,t.Uk)(" 的 "),(0,t._)("strong",null,"极简风"),(0,t.Uk)(" 评论系统。")])],-1),c=(0,t._)("p",null,"之后发布的所有版本都是围绕这个定位的修改。",-1),o=(0,t._)("h2",{id:"和-valine-是什么关系",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#和-valine-是什么关系","aria-hidden":"true"},"#"),(0,t.Uk)(" 和 Valine 是什么关系？")],-1),h=(0,t._)("p",null,[(0,t.Uk)("Waline = "),(0,t._)("strong",null,"W"),(0,t.Uk)("ith backend V"),(0,t._)("strong",null,"aline")],-1),u=(0,t._)("p",null,"前端的评论列表使用 React 参考着 Valine 的已开源版本进行了重写，样式和结构还有内部的一些工具方法都来自 Valine。",-1),g=(0,t._)("h2",{id:"是否需要在-leancloud-上部署-valine-admin",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#是否需要在-leancloud-上部署-valine-admin","aria-hidden":"true"},"#"),(0,t.Uk)(" 是否需要在 LeanCloud 上部署 Valine-Admin？")],-1),_=(0,t._)("p",null,"不需要。Waline 是数据存储，服务端以及客户端三位一体的部署，其中服务端相当于 Valine 的 LeanCloud 云引擎。服务端包含了 Valine 所用云引擎提供的评论管理和邮件通知等相关的功能，不依赖额外的 LeanCloud 云引擎，所以不会受到 LeanCloud 云引擎休眠策略的限制。",-1),p=(0,t._)("h2",{id:"如何升级",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如何升级","aria-hidden":"true"},"#"),(0,t.Uk)(" 如何升级？")],-1),m=(0,t._)("p",null,"Waline 主要由前端和服务端两部分组成。",-1),k=(0,t._)("h3",{id:"前端",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#前端","aria-hidden":"true"},"#"),(0,t.Uk)(" 前端")],-1),b=(0,t._)("p",null,"前端通过在网页引入 JS 脚本来插入评论列表和评论框。大部分场景下，链接会使用线上 CDN 最新版的地址，会自动应用最新版本，无需使用者手动更新。",-1),x=(0,t._)("div",{class:"custom-container tip"},[(0,t._)("p",{class:"custom-container-title"},"以下情形需要手动更新"),(0,t._)("ol",null,[(0,t._)("li",null,"CDN 地址中强制指定了版本号，这时候需要手动修改版本号为最新。"),(0,t._)("li",null,"使用了 NPM 引入最终将模块打包到了代码中，这时候需要修改依赖中的版本号保证依赖在安装的时候能获取到最新版本。")])],-1),f=(0,t._)("h3",{id:"服务端",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#服务端","aria-hidden":"true"},"#"),(0,t.Uk)(" 服务端")],-1),U=(0,t._)("p",null,[(0,t.Uk)("服务端指的是在前端脚本中配置的 "),(0,t._)("code",null,"serverURL"),(0,t.Uk)(" 对应的后端服务，其更新视不同的部署环境会略有区别。服务端的更新会比较频繁。")],-1),v=(0,t._)("h4",{id:"vercel",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),(0,t.Uk)(" Vercel")],-1),y=(0,t._)("p",null,[(0,t.Uk)("进入到对应的 GitHub 仓库中，修改 package.json 文件中的 "),(0,t._)("code",null,"@waline/vercel"),(0,t.Uk)(" 版本号为最新版本即可。")],-1),w=(0,t._)("p",null,[(0,t._)("img",{src:a,alt:"vercel"})],-1),j=(0,t._)("h4",{id:"deta",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#deta","aria-hidden":"true"},"#"),(0,t.Uk)(" Deta")],-1),L={href:"https://waline.js.org/guide/server/deta.html#deta-%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0",target:"_blank",rel:"noopener noreferrer"},W=(0,t.Uk)("Deta - 如何更新"),q=(0,t._)("h4",{id:"cloudbase",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#cloudbase","aria-hidden":"true"},"#"),(0,t.Uk)(" CloudBase")],-1),A=(0,t._)("p",null,[(0,t.Uk)("进入代码编辑界面，点击 "),(0,t._)("kbd",null,"保存并重新安装依赖"),(0,t.Uk)(" 即可。如果还不行，则进入 "),(0,t._)("kbd",null,"我的应用"),(0,t.Uk)(" 选择 "),(0,t._)("kbd",null,"部署"),(0,t.Uk)(" 进行重新部署。")],-1),C=(0,t._)("div",{class:"custom-container warning"},[(0,t._)("p",{class:"custom-container-title"},"注意"),(0,t._)("p",null,"重新部署会清空之前的文件，如果之前文件中有配置的话需要先行备份。")],-1),V=(0,t._)("p",null,[(0,t._)("img",{src:i,alt:"cloudBase"})],-1),E=(0,t._)("h4",{id:"docker",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),(0,t.Uk)(" Docker")],-1),S=(0,t._)("p",null,[(0,t.Uk)("直接运行 "),(0,t._)("code",null,"docker pull lizheming/waline"),(0,t.Uk)(" 拉取最新的镜像即可。")],-1),D=(0,t._)("h2",{id:"发布评论很慢怎么办",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#发布评论很慢怎么办","aria-hidden":"true"},"#"),(0,t.Uk)(" 发布评论很慢怎么办？")],-1),B=(0,t._)("p",null,[(0,t.Uk)("因为一些技术性原因，在发布评论的时垃圾邮件检测、评论通知都是串联操作。其中垃圾邮件检测使用的是国外 Akismet 提供的服务，可能访问很慢，用户可以通过 "),(0,t._)("code",null,"AKISMET_KEY=false"),(0,t.Uk)(" 环境变量关闭垃圾评论检测功能。除了垃圾评论检测服务，评论通知中的邮件通知也有可能造成超时，可以通过关闭评论通知测试是否是该功能导致的。")],-1),F=(0,t._)("h2",{id:"如何增加灯箱效果",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如何增加灯箱效果","aria-hidden":"true"},"#"),(0,t.Uk)(" 如何增加灯箱效果？")],-1),G=(0,t.Uk)("有很多插件可以实现灯箱效果，这里我以 "),H={href:"https://www.lightgalleryjs.com/",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("lightGallery"),T=(0,t.Uk)(", "),N={href:"https://www.digitalia.be/software/slimbox2/",target:"_blank",rel:"noopener noreferrer"},O=(0,t.Uk)("Slimbox2"),$=(0,t.Uk)(", "),R={href:"https://lokeshdhakar.com/projects/lightbox2/",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("lightbox2"),K=(0,t.Uk)(" 和 "),P={href:"https://fancyapps.com/docs/ui/fancybox/",target:"_blank",rel:"noopener noreferrer"},Q=(0,t.Uk)("Fancybox"),Y=(0,t.Uk)(" 为例。"),I=(0,t._)("h3",{id:"lightgallery",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#lightgallery","aria-hidden":"true"},"#"),(0,t.Uk)(" lightGallery")],-1),J=(0,t._)("p",null,[(0,t.Uk)("在你的 HTML "),(0,t._)("code",null,"</head>"),(0,t.Uk)(" 前写入以下内容，其中 "),(0,t._)("code",null,"#waline-comment"),(0,t.Uk)(" 是你的 Waline 评论框，需要根据实际场景进行替换。")],-1),Z=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.1.5/css/lightgallery-bundle.css" />\n<srciprt src="https://cdn.jsdelivr.net/npm/lightgallery@2.1.5/lightgallery.umd.min.js"><\/script>\n<script>\ndocument.addEventListener(\'click\', e => {\n  const imgs = [].slice.call(\n    document.querySelectorAll(\'#waline-comment .vcontent img\')\n  ).filter(img => img.width > 20);\n\n  if(imgs.indexOf(e.target) === -1) {\n    return;\n  }\n  if(!e.target.gallery) {\n    e.target.gallery = window.lightGallery(e.target.parentNode);\n  }\n  e.target.gallery.openGallery(0);\n});\n<\/script>\n')])],-1),X=(0,t._)("h3",{id:"slimbox2",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#slimbox2","aria-hidden":"true"},"#"),(0,t.Uk)(" Slimbox2")],-1),ee=(0,t._)("p",null,[(0,t.Uk)("在你的 HTML "),(0,t._)("code",null,"</head>"),(0,t.Uk)(" 前写入以下内容，其中 "),(0,t._)("code",null,"#waline-comment"),(0,t.Uk)(" 是你的 Waline 评论框，需要根据实际场景进行替换。")],-1),le=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cbeyls/slimbox/css/slimbox2.css" />\n<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/cbeyls/slimbox/js/slimbox2.js"><\/script>\n<script>\ndocument.addEventListener(\'click\', (e) => {\n  const imgs = [].slice.call(\n    document.querySelectorAll(\'#waline-comment .vcontent img\')\n  ).filter(img => img.width > 20);\n\n  const idx = imgs.indexOf(e.target);\n  if(idx === -1) {\n    return;\n  }\n\n  $.slimbox(e.target.src, e.target.alt, {});\n});\n<\/script>\n')])],-1),ne=(0,t._)("h3",{id:"lightbox2",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#lightbox2","aria-hidden":"true"},"#"),(0,t.Uk)(" lightbox2")],-1),te=(0,t._)("p",null,[(0,t.Uk)("在你的 HTML "),(0,t._)("code",null,"</head>"),(0,t.Uk)(" 前写入以下内容，其中 "),(0,t._)("code",null,"#waline-comment"),(0,t.Uk)(" 是你的 Waline 评论框，需要根据实际场景进行替换。")],-1),ae=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,"<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/css/lightbox.min.css\" />\n<script src=\"https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/js/lightbox-plus-jquery.min.js\"><\/script>\n<script>\ndocument.addEventListener('click', e => {\n  const lightbox = new Lightbox();\n  const imgs = [].slice.call(\n    document.querySelectorAll('#waline-comment .vcontent img')\n  ).filter(img => img.width > 20);\n\n  if(imgs.indexOf(e.target) === -1) {\n    return;\n  }\n\n  const $link = $('<a />', {\n    href: e.target.src,\n    'data-title': e.target.alt,\n    rel: 'lightbox'\n  });\n  lightbox.start($link);\n});\n<\/script>\n")])],-1),ie=(0,t._)("h3",{id:"fancybox",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#fancybox","aria-hidden":"true"},"#"),(0,t.Uk)(" Fancybox")],-1),re=(0,t._)("p",null,[(0,t.Uk)("在你的 HTML "),(0,t._)("code",null,"</head>"),(0,t.Uk)(" 前写入以下内容，其中 "),(0,t._)("code",null,"#waline-comment"),(0,t.Uk)(" 是你的 Waline 评论框，需要根据实际场景进行替换。")],-1),se=(0,t._)("div",{class:"language-text ext-text"},[(0,t._)("pre",{class:"language-text"},[(0,t._)("code",null,'<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"><\/script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>\n<script>Fancybox.bind(\'#waline-comment .vcontent img\')<\/script>\n')])],-1),de={},ce=(0,n(6959).Z)(de,[["render",function(e,l){const n=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[r,s,d,c,o,h,u,g,_,p,m,k,b,x,f,U,v,y,w,j,(0,t._)("p",null,[(0,t._)("a",L,[W,(0,t.Wm)(n)])]),q,A,C,V,E,S,D,B,F,(0,t._)("p",null,[G,(0,t._)("a",H,[M,(0,t.Wm)(n)]),T,(0,t._)("a",N,[O,(0,t.Wm)(n)]),$,(0,t._)("a",R,[z,(0,t.Wm)(n)]),K,(0,t._)("a",P,[Q,(0,t.Wm)(n)]),Y]),I,J,Z,X,ee,le,ne,te,ae,ie,re,se],64)}]])},6297:(e,l,n)=>{e.exports=n.p+"assets/img/cloudbase-update.0e0678ab.jpg"},625:(e,l,n)=>{e.exports=n.p+"assets/img/vercel-update.24818433.png"}}]);