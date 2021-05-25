(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1262],{5621:(l,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>n});const n={key:"v-092a1d7c",path:"/faq.html",title:"FAQ",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"和 Valine 是什么关系？",slug:"和-valine-是什么关系",children:[]},{level:2,title:"是否需要在 LeanCloud 上部署 Valine-Admin？",slug:"是否需要在-leancloud-上部署-valine-admin",children:[]},{level:2,title:"如何升级？",slug:"如何升级",children:[{level:3,title:"前端",slug:"前端",children:[]},{level:3,title:"服务端",slug:"服务端",children:[]}]},{level:2,title:"发布评论很慢怎么办？",slug:"发布评论很慢怎么办",children:[]},{level:2,title:"最后",slug:"最后",children:[]}],filePathRelative:"faq.md",git:{updatedTime:1621956598e3,contributors:[]}}},8794:(l,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>E});var n=a(8917),c=a(2514),i=a(5787);const s=(0,n.Wm)("h1",{id:"faq"},[(0,n.Wm)("a",{class:"header-anchor",href:"#faq"},"#"),(0,n.Uk)(" FAQ")],-1),m=(0,n.Wm)("p",null,"Waline 诞生之初就已经作了很明确的定位:",-1),r=(0,n.Wm)("blockquote",null,[(0,n.Wm)("p",null,[(0,n.Uk)("一款 "),(0,n.Wm)("strong",null,"带后端"),(0,n.Uk)(" 的 "),(0,n.Wm)("strong",null,"极简风"),(0,n.Uk)(" 评论系统。")])],-1),d=(0,n.Wm)("p",null,"之后发布的所有版本都是围绕这个定位的修改。",-1),u=(0,n.Wm)("h2",{id:"和-valine-是什么关系"},[(0,n.Wm)("a",{class:"header-anchor",href:"#和-valine-是什么关系"},"#"),(0,n.Uk)(" 和 Valine 是什么关系？")],-1),t=(0,n.Wm)("p",null,[(0,n.Uk)("Waline = "),(0,n.Wm)("strong",null,"W"),(0,n.Uk)("ith backend V"),(0,n.Wm)("strong",null,"aline")],-1),W=(0,n.Wm)("p",null,"前端的评论列表使用 React 参考着 Valine 的已开源版本进行了重写，样式和结构还有内部的一些工具方法都来自 Valine。",-1),h=(0,n.Wm)("h2",{id:"是否需要在-leancloud-上部署-valine-admin"},[(0,n.Wm)("a",{class:"header-anchor",href:"#是否需要在-leancloud-上部署-valine-admin"},"#"),(0,n.Uk)(" 是否需要在 LeanCloud 上部署 Valine-Admin？")],-1),o=(0,n.Wm)("p",null,"不需要。Waline 是数据存储，服务端以及客户端三位一体的部署，其中服务端相当于 Valine 的 LeanCloud 云引擎。服务端包含了 Valine 所用云引擎提供的评论管理和邮件通知等相关的功能，不依赖额外的 LeanCloud 云引擎，所以不会受到 LeanCloud 云引擎休眠策略的限制。",-1),k=(0,n.Wm)("h2",{id:"如何升级"},[(0,n.Wm)("a",{class:"header-anchor",href:"#如何升级"},"#"),(0,n.Uk)(" 如何升级？")],-1),p=(0,n.Wm)("p",null,"Waline 主要由前端和服务端两部分组成。",-1),U=(0,n.Wm)("h3",{id:"前端"},[(0,n.Wm)("a",{class:"header-anchor",href:"#前端"},"#"),(0,n.Uk)(" 前端")],-1),g=(0,n.Wm)("p",null,"前端通过在网页引入 JS 脚本来插入评论列表和评论框。大部分场景下，链接会使用线上 CDN 最新版的地址，会自动应用最新版本，无需使用者手动更新。",-1),v=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"以下情形需要手动更新"),(0,n.Wm)("ol",null,[(0,n.Wm)("li",null,"CDN 地址中强制指定了版本号，这时候需要手动修改版本号为最新。"),(0,n.Wm)("li",null,"使用了 NPM 引入最终将模块打包到了代码中，这时候需要修改依赖中的版本号保证依赖在安装的时候能获取到最新版本。")])],-1),f=(0,n.Wm)("h3",{id:"服务端"},[(0,n.Wm)("a",{class:"header-anchor",href:"#服务端"},"#"),(0,n.Uk)(" 服务端")],-1),b=(0,n.Wm)("p",null,[(0,n.Uk)("服务端指的是在前端脚本中配置的 "),(0,n.Wm)("code",null,"serverURL"),(0,n.Uk)(" 对应的后端服务，其更新视不同的部署环境会略有区别。服务端的更新会比较频繁。")],-1),C=(0,n.Wm)("h4",{id:"vercel"},[(0,n.Wm)("a",{class:"header-anchor",href:"#vercel"},"#"),(0,n.Uk)(" Vercel")],-1),V=(0,n.Wm)("p",null,[(0,n.Uk)("进入到对应的 GitHub 仓库中，修改 package.json 文件中的 "),(0,n.Wm)("code",null,"@waline/vercel"),(0,n.Uk)(" 版本号为最新版本即可。")],-1),w=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:c.Z,alt:"vercel"})],-1),A=(0,n.Wm)("h4",{id:"cloudbase"},[(0,n.Wm)("a",{class:"header-anchor",href:"#cloudbase"},"#"),(0,n.Uk)(" CloudBase**")],-1),L=(0,n.Wm)("p",null,[(0,n.Uk)("进入代码编辑界面，点击 "),(0,n.Wm)("kbd",null,"保存并重新安装依赖"),(0,n.Uk)(" 即可。如果还不行，则进入 "),(0,n.Wm)("kbd",null,"我的应用"),(0,n.Uk)(" 选择 "),(0,n.Wm)("kbd",null,"部署"),(0,n.Uk)(" 进行重新部署。")],-1),q=(0,n.Wm)("div",{class:"custom-container warning"},[(0,n.Wm)("p",{class:"custom-container-title"},"注意"),(0,n.Wm)("p",null,"重新部署会清空之前的文件，如果之前文件中有配置的话需要先行备份。")],-1),N=(0,n.Wm)("p",null,[(0,n.Wm)("img",{src:i.Z,alt:"cloudBase"})],-1),Z=(0,n.Wm)("h4",{id:"docker"},[(0,n.Wm)("a",{class:"header-anchor",href:"#docker"},"#"),(0,n.Uk)(" Docker")],-1),j=(0,n.Wm)("p",null,[(0,n.Uk)("直接运行 "),(0,n.Wm)("code",null,"docker pull lizheming/waline"),(0,n.Uk)(" 拉取最新的镜像即可。")],-1),D=(0,n.Wm)("h2",{id:"发布评论很慢怎么办"},[(0,n.Wm)("a",{class:"header-anchor",href:"#发布评论很慢怎么办"},"#"),(0,n.Uk)(" 发布评论很慢怎么办？")],-1),R=(0,n.Wm)("p",null,[(0,n.Uk)("因为一些技术性原因，在发布评论的时垃圾邮件检测、评论通知都是串联操作。其中垃圾邮件检测使用的是国外 Akismet 提供的服务，可能访问很慢，用户可以通过 "),(0,n.Wm)("code",null,"AKISMET_KEY=false"),(0,n.Uk)(" 环境变量关闭垃圾评论检测功能。除了垃圾评论检测服务，评论通知中的邮件通知也有可能造成超时，可以通过关闭评论通知测试是否是该功能导致的。")],-1),z=(0,n.Wm)("h2",{id:"最后"},[(0,n.Wm)("a",{class:"header-anchor",href:"#最后"},"#"),(0,n.Uk)(" 最后")],-1),B=(0,n.Wm)("p",null,[(0,n.Uk)("以后 "),(0,n.Wm)("code",null,"Waline"),(0,n.Uk)(" 可能会有所变化，但无论如何都不会改变 "),(0,n.Wm)("strong",null,"有后端"),(0,n.Uk)(" 这个初衷。")],-1),E={render:function(l,e){return(0,n.wg)(),(0,n.j4)(n.HY,null,[s,m,r,d,u,t,W,h,o,k,p,U,g,v,f,b,C,V,w,A,L,q,N,Z,j,D,R,z,B],64)}}},5787:(l,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/img/cloudbase-update.0e0678ab.jpg"},2514:(l,e,a)=>{"use strict";a.d(e,{Z:()=>n});const n=a.p+"assets/img/vercel-update.24818433.png"}}]);