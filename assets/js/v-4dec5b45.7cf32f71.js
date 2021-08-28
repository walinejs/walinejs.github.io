"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9247],{5843:(e,l,n)=>{n.r(l),n.d(l,{data:()=>a});const a={key:"v-4dec5b45",path:"/guide/client/intro.html",title:"客户端介绍",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"引入",slug:"引入",children:[]},{level:2,title:"初始化",slug:"初始化",children:[]},{level:2,title:"格式支持",slug:"格式支持",children:[]},{level:2,title:"功能支持",slug:"功能支持",children:[]},{level:2,title:"样式定义",slug:"样式定义",children:[]},{level:2,title:"评论数和浏览量统计",slug:"评论数和浏览量统计",children:[]},{level:2,title:"单页应用支持",slug:"单页应用支持",children:[]},{level:2,title:"无障碍支持",slug:"无障碍支持",children:[]},{level:2,title:"生态环境",slug:"生态环境",children:[]}],filePathRelative:"guide/client/intro.md",git:{updatedTime:1630116232e3,contributors:[]}}},432:(e,l,n)=>{n.r(l),n.d(l,{default:()=>fe});var a=n(8917);const i=(0,a._)("h1",{id:"客户端介绍",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#客户端介绍","aria-hidden":"true"},"#"),(0,a.Uk)(" 客户端介绍")],-1),t=(0,a.Uk)("Waline 官方提供了 "),d={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},r=(0,a._)("code",null,"@waline/client",-1),u=(0,a.Uk)(" 客户端，使用 Vue + TypeScript 编写，大小仅为 54kb gzip。"),h=(0,a._)("h2",{id:"引入",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#引入","aria-hidden":"true"},"#"),(0,a.Uk)(" 引入")],-1),c=(0,a._)("p",null,"你可以使用 CDN 或 npm 引入 Waline，我们提供了有样式和无样式两种版本。",-1),k=(0,a.Uk)("关于 Waline 引入，详见 "),o=(0,a.Uk)("Waline 引入"),_=(0,a.Uk)("。"),s=(0,a._)("h2",{id:"初始化",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#初始化","aria-hidden":"true"},"#"),(0,a.Uk)(" 初始化")],-1),U=(0,a._)("p",null,[(0,a.Uk)("你可以使用 "),(0,a._)("code",null,"Waline(options)"),(0,a.Uk)(" 初始化 Waline 实例，其中 "),(0,a._)("code",null,"el"),(0,a.Uk)(" 和 "),(0,a._)("code",null,"serverURL"),(0,a.Uk)(" 两个选项是必填的。前者为 Waline 挂载的元素或元素选择器，后者为服务端地址。")],-1),p=(0,a.Uk)("关于 Waline 的全部初始化参数，详见 "),m=(0,a.Uk)("参考 → Waline 客户端配置"),W=(0,a.Uk)("。"),f=(0,a._)("h2",{id:"格式支持",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#格式支持","aria-hidden":"true"},"#"),(0,a.Uk)(" 格式支持")],-1),g=(0,a._)("p",null,"Waline 支持丰富的格式。除了在评论区使用标准的 Markdown 与 GFM 语法扩展外，你还可以嵌入 HTML 标签或是是用数学公式。",-1),w=(0,a.Uk)("你可以在 "),b=(0,a.Uk)("支持语法"),v=(0,a.Uk)(" 章节中了解 Waline 支持的完整格式。"),x=(0,a._)("h2",{id:"功能支持",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#功能支持","aria-hidden":"true"},"#"),(0,a.Uk)(" 功能支持")],-1),S=(0,a._)("p",null,"Waline 支持诸多功能，包括登录、头像、多语言、自定义 Emoji、图片上传和实时预览等功能。你可以在下方 Demo 中对这些功能进行体验。",-1),y=(0,a.Uk)("Waline 官方添加了简体中文、繁体中文、英文和日语的支持，同时你可以在此基础上 "),C=(0,a.Uk)("自定义多语言"),j=(0,a.Uk)("Waline 使用 Libravatar "),L=(0,a.Uk)("头像配置"),P=(0,a.Uk)("。"),V=(0,a.Uk)("你可以很轻松的使用 Waline 提供的预设或自己创建新的预设来自定义评论框内的 Emoji 表情，详见 "),A=(0,a.Uk)("自定义 Emoji"),D=(0,a.Uk)("。"),E=(0,a.Uk)("Waline 内置了图像上传支持，使用 <pic.alexhchu.com> 的图床，你也可以通过 "),H=(0,a._)("code",null,"uploadImage",-1),M=(0,a.Uk)(" 选项"),R=(0,a.Uk)(" 自定义图像上传。"),T=(0,a._)("h2",{id:"样式定义",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#样式定义","aria-hidden":"true"},"#"),(0,a.Uk)(" 样式定义")],-1),z=(0,a.Uk)("为了方便用户对 Waline 样式的调整，Waline 提供了很多可配置的 CSS 变量 (CSS Variables)。同时 Waline 还带来了内置的 "),N=(0,a.Uk)("暗黑模式支持"),F=(0,a.Uk)("，详见 "),G=(0,a.Uk)("自定义样式"),I=(0,a.Uk)("。"),O=(0,a._)("h2",{id:"评论数和浏览量统计",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#评论数和浏览量统计","aria-hidden":"true"},"#"),(0,a.Uk)(" 评论数和浏览量统计")],-1),Y=(0,a.Uk)("Waline 支持评论数和浏览量统计，有关使用的详细信息，请参阅 "),q=(0,a.Uk)("浏览量统计"),B=(0,a.Uk)("。"),J=(0,a._)("h2",{id:"单页应用支持",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#单页应用支持","aria-hidden":"true"},"#"),(0,a.Uk)(" 单页应用支持")],-1),K=(0,a.Uk)("Waline 为 SPA("),Q=(0,a._)("strong",null,"S",-1),X=(0,a.Uk)("ingle "),Z=(0,a._)("strong",null,"P",-1),$=(0,a.Uk)("age "),ee=(0,a._)("strong",null,"A",-1),le=(0,a.Uk)("pplication, 单页应用) 带来了支持。如果你想要在使用 history.pushState 的网站中使用，你可以使用 "),ne=(0,a._)("code",null,"Waline()",-1),ae=(0,a.Uk)(" 实例的 "),ie=(0,a._)("code",null,"update()",-1),te=(0,a.Uk)(" 方法刷新评论区的配置，也可已使用实例上的 "),de=(0,a._)("code",null,"destory()",-1),re=(0,a.Uk)(" 方法销毁 Waline。详见 "),ue=(0,a.Uk)("SPA 支持"),he=(0,a.Uk)("."),ce=(0,a._)("h2",{id:"无障碍支持",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#无障碍支持","aria-hidden":"true"},"#"),(0,a.Uk)(" 无障碍支持")],-1),ke=(0,a._)("p",null,"Waline 在 V1 版本完整符合了全部的无障碍标准:",-1),oe=(0,a._)("ul",null,[(0,a._)("li",null,"所有图标与控件均有其对应的无障碍标签。"),(0,a._)("li",null,"你可以使用键盘或头戴式指针设备完成与 Waline 所有控件的交互。")],-1),_e=(0,a._)("p",null,"这是我们为全球视障及行动障碍人群做出的一点支持！❤️",-1),se=(0,a._)("h2",{id:"生态环境",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#生态环境","aria-hidden":"true"},"#"),(0,a.Uk)(" 生态环境")],-1),Ue=(0,a._)("p",null,"你可以很方便的在 Hexo，VuePress 等工具上通过插件使用 Waline，甚至使用第三方客户端。",-1),pe=(0,a.Uk)("有关支持 Waline 的第三方客户端、主题与插件，详见"),me=(0,a.Uk)("了解更多 → 生态系统"),We=(0,a.Uk)("。"),fe={render:function(e,l){const n=(0,a.up)("OutboundLink"),fe=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[t,(0,a._)("a",d,[r,(0,a.Wm)(n)]),u]),h,c,(0,a._)("p",null,[k,(0,a.Wm)(fe,{to:"/guide/client/import.html"},{default:(0,a.w5)((()=>[o])),_:1}),_]),s,U,(0,a._)("p",null,[p,(0,a.Wm)(fe,{to:"/reference/client.html"},{default:(0,a.w5)((()=>[m])),_:1}),W]),f,g,(0,a._)("p",null,[w,(0,a.Wm)(fe,{to:"/guide/client/syntax.html"},{default:(0,a.w5)((()=>[b])),_:1}),v]),x,S,(0,a._)("p",null,[y,(0,a.Wm)(fe,{to:"/guide/client/i18n.html"},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a._)("p",null,[j,(0,a.Wm)(fe,{to:"/guide/client/avatar.html"},{default:(0,a.w5)((()=>[L])),_:1}),P]),(0,a._)("p",null,[V,(0,a.Wm)(fe,{to:"/guide/client/emoji.html"},{default:(0,a.w5)((()=>[A])),_:1}),D]),(0,a._)("p",null,[E,(0,a.Wm)(fe,{to:"/reference/client.html#uploadimage"},{default:(0,a.w5)((()=>[H,M])),_:1}),R]),T,(0,a._)("p",null,[z,(0,a.Wm)(fe,{to:"/reference/client.html#dark"},{default:(0,a.w5)((()=>[N])),_:1}),F,(0,a.Wm)(fe,{to:"/guide/client/style.html"},{default:(0,a.w5)((()=>[G])),_:1}),I]),O,(0,a._)("p",null,[Y,(0,a.Wm)(fe,{to:"/guide/client/count.html"},{default:(0,a.w5)((()=>[q])),_:1}),B]),J,(0,a._)("p",null,[K,Q,X,Z,$,ee,le,ne,ae,ie,te,de,re,(0,a.Wm)(fe,{to:"/guide/client/spa.html"},{default:(0,a.w5)((()=>[ue])),_:1}),he]),ce,ke,oe,_e,se,Ue,(0,a._)("p",null,[pe,(0,a.Wm)(fe,{to:"/advanced/ecosystem.html"},{default:(0,a.w5)((()=>[me])),_:1}),We])],64)}}}}]);