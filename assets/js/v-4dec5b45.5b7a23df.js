(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9247],{5843:(l,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-4dec5b45",path:"/guide/client/intro.html",title:"客户端介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"引入",slug:"引入",children:[]},{level:2,title:"初始化",slug:"初始化",children:[]},{level:2,title:"格式支持",slug:"格式支持",children:[]},{level:2,title:"功能支持",slug:"功能支持",children:[]},{level:2,title:"样式定义",slug:"样式定义",children:[]},{level:2,title:"评论数和浏览量统计",slug:"评论数和浏览量统计",children:[]},{level:2,title:"单页应用支持",slug:"单页应用支持",children:[]},{level:2,title:"无障碍支持",slug:"无障碍支持",children:[]},{level:2,title:"生态环境",slug:"生态环境",children:[]}],filePathRelative:"guide/client/intro.md",git:{updatedTime:162236548e4,contributors:[]}}},6911:(l,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>gl});var a=n(8917);const t=(0,a.Wm)("h1",{id:"客户端介绍"},[(0,a.Wm)("a",{class:"header-anchor",href:"#客户端介绍"},"#"),(0,a.Uk)(" 客户端介绍")],-1),i=(0,a.Uk)("Waline 官方提供了 "),m={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},W=(0,a.Wm)("code",null,"@waline/client",-1),u=(0,a.Uk)(" 客户端，使用 Vue + TypeScript 编写，大小仅为 53kb gzip。"),r=(0,a.Wm)("h2",{id:"引入"},[(0,a.Wm)("a",{class:"header-anchor",href:"#引入"},"#"),(0,a.Uk)(" 引入")],-1),d=(0,a.Wm)("p",null,"你可以使用 CDN 或 npm 引入 Waline，我们提供了有样式和无样式两种版本。",-1),c=(0,a.Uk)("关于 Waline 引入，详见 "),h=(0,a.Uk)("Waline 引入"),k=(0,a.Uk)("。"),o=(0,a.Wm)("h2",{id:"初始化"},[(0,a.Wm)("a",{class:"header-anchor",href:"#初始化"},"#"),(0,a.Uk)(" 初始化")],-1),s=(0,a.Wm)("p",null,[(0,a.Uk)("你可以使用 "),(0,a.Wm)("code",null,"Waline(options)"),(0,a.Uk)(" 初始化 Waline 实例，其中 "),(0,a.Wm)("code",null,"el"),(0,a.Uk)(" 和 "),(0,a.Wm)("code",null,"serverURL"),(0,a.Uk)(" 两个选项是必填的。前者为 Waline 挂载的元素或元素选择器，后者为服务端地址。")],-1),U=(0,a.Uk)("关于 Waline 的全部初始化参数，详见 "),p=(0,a.Uk)("参考 → Waline 客户端配置"),f=(0,a.Uk)("。"),g=(0,a.Wm)("h2",{id:"格式支持"},[(0,a.Wm)("a",{class:"header-anchor",href:"#格式支持"},"#"),(0,a.Uk)(" 格式支持")],-1),w=(0,a.Wm)("p",null,"Waline 支持丰富的格式。除了在评论区使用标准的 Markdown 与 GFM 语法扩展外，你还可以嵌入 HTML 标签或是是用数学公式。",-1),v=(0,a.Uk)("你可以在 "),_=(0,a.Uk)("支持语法"),S=(0,a.Uk)(" 章节中了解 Waline 支持的完整格式。"),b=(0,a.Wm)("h2",{id:"功能支持"},[(0,a.Wm)("a",{class:"header-anchor",href:"#功能支持"},"#"),(0,a.Uk)(" 功能支持")],-1),y=(0,a.Wm)("p",null,"Waline 支持诸多功能，包括登录、头像、多语言、自定义 Emoji、图片上传和实时预览等功能。你可以在下方 Demo 中对这些功能进行体验。",-1),j=(0,a.Uk)("Waline 官方添加了简体中文、繁体中文、英文和日语的支持，同时你可以在此基础上 "),C=(0,a.Uk)("自定义多语言"),P=(0,a.Uk)("Waline 使用 Gravatar，同时支持你定制默认头像，详见 "),x=(0,a.Uk)("头像配置"),L=(0,a.Uk)("。"),V=(0,a.Uk)("你可以很轻松的使用 Waline 提供的预设或自己创建新的预设来自定义评论框内的 Emoji 表情，详见 "),A=(0,a.Uk)("自定义 Emoji"),E=(0,a.Uk)("。"),H=(0,a.Uk)("Waline 内置了图像上传支持，使用 <pic.alexhchu.com> 的图床，你也可以通过 "),M=(0,a.Wm)("code",null,"uploadImage",-1),R=(0,a.Uk)(" 选项"),T=(0,a.Uk)(" 自定义图像上传。"),z=(0,a.Wm)("h2",{id:"样式定义"},[(0,a.Wm)("a",{class:"header-anchor",href:"#样式定义"},"#"),(0,a.Uk)(" 样式定义")],-1),D=(0,a.Uk)("为了方便用户对 Waline 样式的调整，Waline 提供了很多可配置的 CSS 变量 (CSS Variables)。同时 Waline 还带来了内置的 "),G=(0,a.Uk)("暗黑模式支持"),N=(0,a.Uk)("，详见 "),F=(0,a.Uk)("自定义样式"),I=(0,a.Uk)("。"),O=(0,a.Wm)("h2",{id:"评论数和浏览量统计"},[(0,a.Wm)("a",{class:"header-anchor",href:"#评论数和浏览量统计"},"#"),(0,a.Uk)(" 评论数和浏览量统计")],-1),Y=(0,a.Uk)("Waline 支持评论数和浏览量统计，有关使用的详细信息，请参阅 "),q=(0,a.Uk)("浏览量统计"),B=(0,a.Uk)("。"),J=(0,a.Wm)("h2",{id:"单页应用支持"},[(0,a.Wm)("a",{class:"header-anchor",href:"#单页应用支持"},"#"),(0,a.Uk)(" 单页应用支持")],-1),K=(0,a.Uk)("Waline 为 SPA("),Q=(0,a.Wm)("strong",null,"S",-1),X=(0,a.Uk)("ingle "),Z=(0,a.Wm)("strong",null,"P",-1),$=(0,a.Uk)("age "),ll=(0,a.Wm)("strong",null,"A",-1),el=(0,a.Uk)("pplication, 单页应用) 带来了支持。如果你想要在使用 history.pushState 的网站中使用，你可以使用 "),nl=(0,a.Wm)("code",null,"Waline()",-1),al=(0,a.Uk)(" 实例的 "),tl=(0,a.Wm)("code",null,"update()",-1),il=(0,a.Uk)(" 方法刷新评论区的配置，也可已使用实例上的 "),ml=(0,a.Wm)("code",null,"destory()",-1),Wl=(0,a.Uk)(" 方法销毁 Waline。详见 "),ul=(0,a.Uk)("SPA 支持"),rl=(0,a.Uk)("."),dl=(0,a.Wm)("h2",{id:"无障碍支持"},[(0,a.Wm)("a",{class:"header-anchor",href:"#无障碍支持"},"#"),(0,a.Uk)(" 无障碍支持")],-1),cl=(0,a.Wm)("p",null,"Waline 在 V1 版本完整符合了全部的无障碍标准:",-1),hl=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,"所有图标与控件均有其对应的无障碍标签。"),(0,a.Wm)("li",null,"你可以使用键盘或头戴式指针设备完成与 Waline 所有控件的交互。")],-1),kl=(0,a.Wm)("p",null,"这是我们为全球视障及行动障碍人群做出的一点支持！❤️",-1),ol=(0,a.Wm)("h2",{id:"生态环境"},[(0,a.Wm)("a",{class:"header-anchor",href:"#生态环境"},"#"),(0,a.Uk)(" 生态环境")],-1),sl=(0,a.Wm)("p",null,"你可以很方便的在 Hexo，VuePress 等工具上通过插件使用 Waline，甚至使用第三方客户端。",-1),Ul=(0,a.Uk)("有关支持 Waline 的第三方客户端、主题与插件，详见"),pl=(0,a.Uk)("了解更多 → 生态系统"),fl=(0,a.Uk)("。"),gl={render:function(l,e){const n=(0,a.up)("OutboundLink"),gl=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[t,(0,a.Wm)("p",null,[i,(0,a.Wm)("a",m,[W,(0,a.Wm)(n)]),u]),r,d,(0,a.Wm)("p",null,[c,(0,a.Wm)(gl,{to:"/guide/client/import.html"},{default:(0,a.w5)((()=>[h])),_:1}),k]),o,s,(0,a.Wm)("p",null,[U,(0,a.Wm)(gl,{to:"/reference/client.html"},{default:(0,a.w5)((()=>[p])),_:1}),f]),g,w,(0,a.Wm)("p",null,[v,(0,a.Wm)(gl,{to:"/guide/client/syntax.html"},{default:(0,a.w5)((()=>[_])),_:1}),S]),b,y,(0,a.Wm)("p",null,[j,(0,a.Wm)(gl,{to:"/guide/client/i18n.html"},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a.Wm)("p",null,[P,(0,a.Wm)(gl,{to:"/guide/client/avatar.html"},{default:(0,a.w5)((()=>[x])),_:1}),L]),(0,a.Wm)("p",null,[V,(0,a.Wm)(gl,{to:"/guide/client/emoji.html"},{default:(0,a.w5)((()=>[A])),_:1}),E]),(0,a.Wm)("p",null,[H,(0,a.Wm)(gl,{to:"/reference/client.html#uploadimage"},{default:(0,a.w5)((()=>[M,R])),_:1}),T]),z,(0,a.Wm)("p",null,[D,(0,a.Wm)(gl,{to:"/reference/client.html#dark"},{default:(0,a.w5)((()=>[G])),_:1}),N,(0,a.Wm)(gl,{to:"/guide/client/style.html"},{default:(0,a.w5)((()=>[F])),_:1}),I]),O,(0,a.Wm)("p",null,[Y,(0,a.Wm)(gl,{to:"/guide/client/count.html"},{default:(0,a.w5)((()=>[q])),_:1}),B]),J,(0,a.Wm)("p",null,[K,Q,X,Z,$,ll,el,nl,al,tl,il,ml,Wl,(0,a.Wm)(gl,{to:"/guide/client/spa.html"},{default:(0,a.w5)((()=>[ul])),_:1}),rl]),dl,cl,hl,kl,ol,sl,(0,a.Wm)("p",null,[Ul,(0,a.Wm)(gl,{to:"/advanced/ecosystem.html"},{default:(0,a.w5)((()=>[pl])),_:1}),fl])],64)}}}}]);