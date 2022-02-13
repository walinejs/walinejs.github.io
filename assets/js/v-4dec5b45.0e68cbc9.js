"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9247],{603:(e,l,t)=>{t.r(l),t.d(l,{data:()=>n});const n={key:"v-4dec5b45",path:"/guide/client/intro.html",title:"客户端介绍",lang:"zh-CN",frontmatter:{title:"客户端介绍",icon:"intro",head:[["meta",{property:"og:url",content:"https://waline.js.org/guide/client/intro.html"}],["meta",{property:"og:title",content:"客户端介绍"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"客户端介绍","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"引入",slug:"引入",children:[]},{level:2,title:"初始化",slug:"初始化",children:[]},{level:2,title:"格式支持",slug:"格式支持",children:[]},{level:2,title:"功能支持",slug:"功能支持",children:[]},{level:2,title:"样式定义",slug:"样式定义",children:[]},{level:2,title:"评论数和浏览量统计",slug:"评论数和浏览量统计",children:[]},{level:2,title:"单页应用支持",slug:"单页应用支持",children:[]},{level:2,title:"无障碍支持",slug:"无障碍支持",children:[]},{level:2,title:"生态环境",slug:"生态环境",children:[]}],git:{createdTime:1644739828e3,updatedTime:1644739828e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]},readingTime:{minutes:2.53,words:758},filePathRelative:"guide/client/intro.md"}},770:(e,l,t)=>{t.r(l),t.d(l,{default:()=>Ue});var n=t(8917);const a=(0,n._)("p",null,[(0,n.Uk)("Waline 官方提供了 "),(0,n._)("a",{href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},[(0,n._)("code",null,"@waline/client")]),(0,n.Uk)(" 客户端，使用 Vue + TypeScript 编写，大小仅为 54kb gzip。")],-1),i=(0,n._)("h2",{id:"引入",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#引入","aria-hidden":"true"},"#"),(0,n.Uk)(" 引入")],-1),r=(0,n._)("p",null,"你可以使用 CDN 或 npm 引入 Waline，我们提供了有样式和无样式两种版本。",-1),d=(0,n.Uk)("关于 Waline 引入，详见 "),u=(0,n.Uk)("Waline 引入"),o=(0,n.Uk)("。"),c=(0,n._)("h2",{id:"初始化",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#初始化","aria-hidden":"true"},"#"),(0,n.Uk)(" 初始化")],-1),h=(0,n._)("p",null,[(0,n.Uk)("你可以使用 "),(0,n._)("code",null,"Waline(options)"),(0,n.Uk)(" 初始化 Waline 实例，其中 "),(0,n._)("code",null,"el"),(0,n.Uk)(" 和 "),(0,n._)("code",null,"serverURL"),(0,n.Uk)(" 两个选项是必填的。前者为 Waline 挂载的元素或元素选择器，后者为服务端地址。")],-1),s=(0,n.Uk)("关于 Waline 的全部初始化参数，详见 "),k=(0,n.Uk)("参考 → Waline 客户端配置"),_=(0,n.Uk)("。"),m=(0,n._)("h2",{id:"格式支持",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#格式支持","aria-hidden":"true"},"#"),(0,n.Uk)(" 格式支持")],-1),p=(0,n._)("p",null,"Waline 支持丰富的格式。除了在评论区使用标准的 Markdown 与 GFM 语法扩展外，你还可以嵌入 HTML 标签、使用数学公式以及其他语法。",-1),U=(0,n.Uk)("你可以在 "),g=(0,n.Uk)("支持语法"),W=(0,n.Uk)(" 章节中了解 Waline 支持的完整格式。"),f=(0,n._)("h2",{id:"功能支持",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#功能支持","aria-hidden":"true"},"#"),(0,n.Uk)(" 功能支持")],-1),w=(0,n._)("p",null,"Waline 支持诸多功能，包括登录、头像、多语言、自定义 Emoji、图片上传和实时预览等功能。你可以在下方 Demo 中对这些功能进行体验。",-1),b=(0,n.Uk)("Waline 官方添加了简体中文、繁体中文、英文和日语的支持，同时你可以在此基础上 "),v=(0,n.Uk)("自定义多语言"),y=(0,n.Uk)("。"),x=(0,n.Uk)("Waline 服务端默认使用 "),S=(0,n.Uk)("Libravatar 头像配置"),E=(0,n.Uk)("。"),j=(0,n.Uk)("你可以很轻松的使用 Waline 提供的预设或自己创建新的预设来自定义评论框内的 Emoji 表情，详见 "),C=(0,n.Uk)("自定义 Emoji"),A=(0,n.Uk)("。"),P=(0,n.Uk)("Waline 内置了图像上传支持，默认将图片转为 Base64，你也可以通过 "),D=(0,n._)("code",null,"uploadImage",-1),T=(0,n.Uk)(" 选项"),z=(0,n.Uk)(" 自定义图像上传。"),L=(0,n._)("h2",{id:"样式定义",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#样式定义","aria-hidden":"true"},"#"),(0,n.Uk)(" 样式定义")],-1),M=(0,n.Uk)("为了方便用户对 Waline 样式的调整，Waline 提供了很多可配置的 CSS 变量 (CSS Variables)。同时 Waline 还带来了内置的 "),N=(0,n.Uk)("暗黑模式支持"),V=(0,n.Uk)("，详见 "),B=(0,n.Uk)("自定义样式"),H=(0,n.Uk)("。"),R=(0,n._)("h2",{id:"评论数和浏览量统计",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#评论数和浏览量统计","aria-hidden":"true"},"#"),(0,n.Uk)(" 评论数和浏览量统计")],-1),F=(0,n.Uk)("Waline 支持评论数和浏览量统计，有关使用的详细信息，请参阅 "),G=(0,n.Uk)("浏览量统计"),I=(0,n.Uk)("。"),Y=(0,n._)("h2",{id:"单页应用支持",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#单页应用支持","aria-hidden":"true"},"#"),(0,n.Uk)(" 单页应用支持")],-1),Z=(0,n.Uk)("Waline 为 SPA("),q=(0,n._)("strong",null,"S",-1),J=(0,n.Uk)("ingle "),K=(0,n._)("strong",null,"P",-1),O=(0,n.Uk)("age "),Q=(0,n._)("strong",null,"A",-1),X=(0,n.Uk)("pplication, 单页应用) 带来了支持。如果你想要在使用 history.pushState 的网站中使用，你可以使用 "),$=(0,n._)("code",null,"Waline()",-1),ee=(0,n.Uk)(" 实例的 "),le=(0,n._)("code",null,"update()",-1),te=(0,n.Uk)(" 方法刷新评论区的配置，也可已使用实例上的 "),ne=(0,n._)("code",null,"destory()",-1),ae=(0,n.Uk)(" 方法销毁 Waline。详见 "),ie=(0,n.Uk)("SPA 支持"),re=(0,n.Uk)("."),de=(0,n._)("h2",{id:"无障碍支持",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#无障碍支持","aria-hidden":"true"},"#"),(0,n.Uk)(" 无障碍支持")],-1),ue=(0,n._)("p",null,"Waline 在 V1 版本完整符合了全部的无障碍标准:",-1),oe=(0,n._)("ul",null,[(0,n._)("li",null,"所有图标与控件均有其对应的无障碍标签。"),(0,n._)("li",null,"你可以使用键盘或头戴式指针设备完成与 Waline 所有控件的交互。")],-1),ce=(0,n._)("p",null,"这是我们为全球视障及行动障碍人群做出的一点支持！❤️",-1),he=(0,n._)("h2",{id:"生态环境",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#生态环境","aria-hidden":"true"},"#"),(0,n.Uk)(" 生态环境")],-1),se=(0,n._)("p",null,"你可以很方便的在 Hexo，VuePress 等工具上通过插件使用 Waline，甚至使用第三方客户端。",-1),ke=(0,n.Uk)("有关支持 Waline 的第三方客户端、主题与插件，详见"),_e=(0,n.Uk)("了解更多 → 生态系统"),me=(0,n.Uk)("。"),pe={},Ue=(0,t(6959).Z)(pe,[["render",function(e,l){const t=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,i,r,(0,n._)("p",null,[d,(0,n.Wm)(t,{to:"/guide/client/import.html"},{default:(0,n.w5)((()=>[u])),_:1}),o]),c,h,(0,n._)("p",null,[s,(0,n.Wm)(t,{to:"/reference/client.html"},{default:(0,n.w5)((()=>[k])),_:1}),_]),m,p,(0,n._)("p",null,[U,(0,n.Wm)(t,{to:"/guide/client/syntax.html"},{default:(0,n.w5)((()=>[g])),_:1}),W]),f,w,(0,n._)("p",null,[b,(0,n.Wm)(t,{to:"/guide/client/i18n.html"},{default:(0,n.w5)((()=>[v])),_:1}),y]),(0,n._)("p",null,[x,(0,n.Wm)(t,{to:"/guide/server/intro.html#%E5%A4%B4%E5%83%8F%E9%85%8D%E7%BD%AE"},{default:(0,n.w5)((()=>[S])),_:1}),E]),(0,n._)("p",null,[j,(0,n.Wm)(t,{to:"/guide/client/emoji.html"},{default:(0,n.w5)((()=>[C])),_:1}),A]),(0,n._)("p",null,[P,(0,n.Wm)(t,{to:"/reference/client.html#uploadimage"},{default:(0,n.w5)((()=>[D,T])),_:1}),z]),L,(0,n._)("p",null,[M,(0,n.Wm)(t,{to:"/reference/client.html#dark"},{default:(0,n.w5)((()=>[N])),_:1}),V,(0,n.Wm)(t,{to:"/guide/client/style.html"},{default:(0,n.w5)((()=>[B])),_:1}),H]),R,(0,n._)("p",null,[F,(0,n.Wm)(t,{to:"/guide/client/count.html"},{default:(0,n.w5)((()=>[G])),_:1}),I]),Y,(0,n._)("p",null,[Z,q,J,K,O,Q,X,$,ee,le,te,ne,ae,(0,n.Wm)(t,{to:"/guide/client/spa.html"},{default:(0,n.w5)((()=>[ie])),_:1}),re]),de,ue,oe,ce,he,se,(0,n._)("p",null,[ke,(0,n.Wm)(t,{to:"/advanced/ecosystem.html"},{default:(0,n.w5)((()=>[_e])),_:1}),me])],64)}]])}}]);