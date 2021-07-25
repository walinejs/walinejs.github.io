(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[478],{9019:(e,t,i)=>{"use strict";i.r(t),i.d(t,{data:()=>a});const a={key:"v-f4351e9e",path:"/en/guide/client/intro.html",title:"Client Intro",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Introduce",slug:"introduce",children:[]},{level:2,title:"Initialization",slug:"initialization",children:[]},{level:2,title:"Syntax support",slug:"syntax-support",children:[]},{level:2,title:"Features",slug:"features",children:[]},{level:2,title:"Custom Style",slug:"custom-style",children:[]},{level:2,title:"Comment and pageview statistics",slug:"comment-and-pageview-statistics",children:[]},{level:2,title:"SPA support",slug:"spa-support",children:[]},{level:2,title:"Accessibility support",slug:"accessibility-support",children:[]},{level:2,title:"Ecosystem",slug:"ecosystem",children:[]}],filePathRelative:"en/guide/client/intro.md",git:{updatedTime:1627223214e3,contributors:[]}}},1383:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>se});var a=i(8917);const n=(0,a.Wm)("h1",{id:"client-intro",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#client-intro","aria-hidden":"true"},"#"),(0,a.Uk)(" Client Intro")],-1),l=(0,a.Uk)("Waline officially provides the "),o={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Wm)("code",null,"@waline/client",-1),r=(0,a.Uk)(" client, written in Vue + TypeScript, and the size is only 54kb gzip."),u=(0,a.Wm)("h2",{id:"introduce",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#introduce","aria-hidden":"true"},"#"),(0,a.Uk)(" Introduce")],-1),d=(0,a.Wm)("p",null,"You can use CDN or npm to import Waline. We provide with-style and no-style versions.",-1),c=(0,a.Uk)("For details about Waline import, please refer to "),m=(0,a.Uk)("Waline import"),p=(0,a.Uk)("."),h=(0,a.Wm)("h2",{id:"initialization",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#initialization","aria-hidden":"true"},"#"),(0,a.Uk)(" Initialization")],-1),W=(0,a.Wm)("p",null,[(0,a.Uk)("You can use "),(0,a.Wm)("code",null,"Waline(options)"),(0,a.Uk)(" to initialize a Waline instance, where the two options "),(0,a.Wm)("code",null,"el"),(0,a.Uk)(" and "),(0,a.Wm)("code",null,"serverURL"),(0,a.Uk)(" are required. The fist one is the element or element selector that Waline mounts, and the second one is the server address.")],-1),f=(0,a.Uk)("For all Waline initialization parameters, please refer to "),g=(0,a.Uk)("Reference → Waline Client Config"),k=(0,a.Uk)("."),y=(0,a.Wm)("h2",{id:"syntax-support",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#syntax-support","aria-hidden":"true"},"#"),(0,a.Uk)(" Syntax support")],-1),U=(0,a.Wm)("p",null,"Waline has a good support for syntax.Besides using standard Markdown and GFM in the comment box, you can also embed HTML tags or use mathematical formulas.",-1),b=(0,a.Uk)("You can learn about the complete syntax supported by Waline in the "),w=(0,a.Uk)("Support Syntax"),v=(0,a.Uk)(" section."),x=(0,a.Wm)("h2",{id:"features",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),(0,a.Uk)(" Features")],-1),S=(0,a.Wm)("p",null,"Waline has many features, including login, avatar, multi-language, custom Emoji, image upload and real-time preview. You can try these features in the demo below.",-1),C=(0,a.Uk)("Waline officially added support for simplified Chinese, traditional Chinese, English and Japanese, and you can also "),_=(0,a.Uk)("custom multilingual"),z=(0,a.Uk)("Waline uses Gravatar, and also supports you to customize the default avatar, see "),A=(0,a.Uk)("avatar configuration"),E=(0,a.Uk)(" for details."),I=(0,a.Uk)("You can easily use the presets provided by Waline or create new presets to customize the Emoji popup in the comment box, see "),Y=(0,a.Uk)("Custom Emoji"),j=(0,a.Uk)(" for details."),F=(0,a.Uk)("Waline has built-in image upload support, use <pic.alexhchu.com> image bed , you can customize the image upload through "),P=(0,a.Wm)("code",null,"uploadImage",-1),T=(0,a.Uk)(" option"),L=(0,a.Uk)("."),M=(0,a.Wm)("h2",{id:"custom-style",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#custom-style","aria-hidden":"true"},"#"),(0,a.Uk)(" Custom Style")],-1),R=(0,a.Uk)("To let users adjust the style of Waline, Waline provides some configurable CSS variables. Waline also brings a built-in "),V=(0,a.Uk)("Dark Mode Support"),H=(0,a.Uk)(", see "),D=(0,a.Uk)("Custom Style"),G=(0,a.Uk)(" for details."),q=(0,a.Wm)("h2",{id:"comment-and-pageview-statistics",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#comment-and-pageview-statistics","aria-hidden":"true"},"#"),(0,a.Uk)(" Comment and pageview statistics")],-1),B=(0,a.Uk)("Waline supports comment and pageview statistics. For more information, please refer to "),J=(0,a.Uk)("View Statistics"),N=(0,a.Uk)("."),O=(0,a.Wm)("h2",{id:"spa-support",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#spa-support","aria-hidden":"true"},"#"),(0,a.Uk)(" SPA support")],-1),K=(0,a.uE)("Waline brings support for SPA (<strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication). If you are using an app with<code>history.pushState</code>, you can use the <code>update()</code> method of the <code>Waline()</code> instance to refresh config for the comment area, or you can use the <code>destory()</code> method on the instance to destroy Waline instance. See ",15),Q=(0,a.Uk)("SPA Support"),X=(0,a.Uk)(" for details."),Z=(0,a.Wm)("h2",{id:"accessibility-support",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#accessibility-support","aria-hidden":"true"},"#"),(0,a.Uk)(" Accessibility support")],-1),$=(0,a.Wm)("p",null,"Waline fully complies with all accessibility standards in the V1 version:",-1),ee=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,"All icons and controls have their corresponding accessibility labels."),(0,a.Wm)("li",null,"You can use the keyboard or head-mounted pointing device to complete the interaction with all Waline controls.")],-1),te=(0,a.Wm)("p",null,"This is our little support for the visually impaired and mobility impaired people around the world! ❤️",-1),ie=(0,a.Wm)("h2",{id:"ecosystem",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#ecosystem","aria-hidden":"true"},"#"),(0,a.Uk)(" Ecosystem")],-1),ae=(0,a.Wm)("p",null,"You can easily use Waline with plugins on Hexo, VuePress and other tools, and even use third-party clients.",-1),ne=(0,a.Uk)("For details about third-party clients, themes and plugins that support Waline, please see "),le=(0,a.Uk)("Learn more → Ecosystem"),oe=(0,a.Uk)("."),se={render:function(e,t){const i=(0,a.up)("OutboundLink"),se=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[n,(0,a.Wm)("p",null,[l,(0,a.Wm)("a",o,[s,(0,a.Wm)(i)]),r]),u,d,(0,a.Wm)("p",null,[c,(0,a.Wm)(se,{to:"/en/guide/client/import.html"},{default:(0,a.w5)((()=>[m])),_:1}),p]),h,W,(0,a.Wm)("p",null,[f,(0,a.Wm)(se,{to:"/en/reference/client.html"},{default:(0,a.w5)((()=>[g])),_:1}),k]),y,U,(0,a.Wm)("p",null,[b,(0,a.Wm)(se,{to:"/en/guide/client/syntax.html"},{default:(0,a.w5)((()=>[w])),_:1}),v]),x,S,(0,a.Wm)("p",null,[C,(0,a.Wm)(se,{to:"/en/guide/client/i18n.html"},{default:(0,a.w5)((()=>[_])),_:1})]),(0,a.Wm)("p",null,[z,(0,a.Wm)(se,{to:"/en/guide/client/avatar.html"},{default:(0,a.w5)((()=>[A])),_:1}),E]),(0,a.Wm)("p",null,[I,(0,a.Wm)(se,{to:"/en/guide/client/emoji.html"},{default:(0,a.w5)((()=>[Y])),_:1}),j]),(0,a.Wm)("p",null,[F,(0,a.Wm)(se,{to:"/en/reference/client.html#uploadimage"},{default:(0,a.w5)((()=>[P,T])),_:1}),L]),M,(0,a.Wm)("p",null,[R,(0,a.Wm)(se,{to:"/en/reference/client.html#dark"},{default:(0,a.w5)((()=>[V])),_:1}),H,(0,a.Wm)(se,{to:"/en/guide/client/style.html"},{default:(0,a.w5)((()=>[D])),_:1}),G]),q,(0,a.Wm)("p",null,[B,(0,a.Wm)(se,{to:"/en/guide/client/count.html"},{default:(0,a.w5)((()=>[J])),_:1}),N]),O,(0,a.Wm)("p",null,[K,(0,a.Wm)(se,{to:"/en/guide/client/spa.html"},{default:(0,a.w5)((()=>[Q])),_:1}),X]),Z,$,ee,te,ie,ae,(0,a.Wm)("p",null,[ne,(0,a.Wm)(se,{to:"/en/advanced/ecosystem.html"},{default:(0,a.w5)((()=>[le])),_:1}),oe])],64)}}}}]);