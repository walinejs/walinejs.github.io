(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[478],{9019:(e,t,i)=>{"use strict";i.r(t),i.d(t,{data:()=>l});const l={key:"v-f4351e9e",path:"/en/guide/client/intro.html",title:"Client Intro",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Introduce",slug:"introduce",children:[]},{level:2,title:"Initialization",slug:"initialization",children:[]},{level:2,title:"Syntax support",slug:"syntax-support",children:[]},{level:2,title:"Features",slug:"features",children:[]},{level:2,title:"Custom Style",slug:"custom-style",children:[]},{level:2,title:"Comment and pageview statistics",slug:"comment-and-pageview-statistics",children:[]},{level:2,title:"SPA support",slug:"spa-support",children:[]},{level:2,title:"Accessibility support",slug:"accessibility-support",children:[]},{level:2,title:"Ecosystem",slug:"ecosystem",children:[]}],filePathRelative:"en/guide/client/intro.md",git:{updatedTime:1622365388e3,contributors:[]}}},2828:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>se});var l=i(8917);const a=(0,l.Wm)("h1",{id:"client-intro"},[(0,l.Wm)("a",{class:"header-anchor",href:"#client-intro"},"#"),(0,l.Uk)(" Client Intro")],-1),n=(0,l.Uk)("Waline officially provides the "),o={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},s=(0,l.Wm)("code",null,"@waline/client",-1),r=(0,l.Uk)(" client, written in Vue + TypeScript, and the size is only 53kb gzip."),u=(0,l.Wm)("h2",{id:"introduce"},[(0,l.Wm)("a",{class:"header-anchor",href:"#introduce"},"#"),(0,l.Uk)(" Introduce")],-1),c=(0,l.Wm)("p",null,"You can use CDN or npm to import Waline. We provide with-style and no-style versions.",-1),d=(0,l.Uk)("For details about Waline import, please refer to "),m=(0,l.Uk)("Waline import"),p=(0,l.Uk)("."),h=(0,l.Wm)("h2",{id:"initialization"},[(0,l.Wm)("a",{class:"header-anchor",href:"#initialization"},"#"),(0,l.Uk)(" Initialization")],-1),W=(0,l.Wm)("p",null,[(0,l.Uk)("You can use "),(0,l.Wm)("code",null,"Waline(options)"),(0,l.Uk)(" to initialize a Waline instance, where the two options "),(0,l.Wm)("code",null,"el"),(0,l.Uk)(" and "),(0,l.Wm)("code",null,"serverURL"),(0,l.Uk)(" are required. The fist one is the element or element selector that Waline mounts, and the second one is the server address.")],-1),f=(0,l.Uk)("For all Waline initialization parameters, please refer to "),g=(0,l.Uk)("Reference → Waline Client Config"),k=(0,l.Uk)("."),y=(0,l.Wm)("h2",{id:"syntax-support"},[(0,l.Wm)("a",{class:"header-anchor",href:"#syntax-support"},"#"),(0,l.Uk)(" Syntax support")],-1),U=(0,l.Wm)("p",null,"Waline has a good support for syntax.Besides using standard Markdown and GFM in the comment box, you can also embed HTML tags or use mathematical formulas.",-1),w=(0,l.Uk)("You can learn about the complete syntax supported by Waline in the "),v=(0,l.Uk)("Support Syntax"),b=(0,l.Uk)(" section."),S=(0,l.Wm)("h2",{id:"features"},[(0,l.Wm)("a",{class:"header-anchor",href:"#features"},"#"),(0,l.Uk)(" Features")],-1),C=(0,l.Wm)("p",null,"Waline has many features, including login, avatar, multi-language, custom Emoji, image upload and real-time preview. You can try these features in the demo below.",-1),x=(0,l.Uk)("Waline officially added support for simplified Chinese, traditional Chinese, English and Japanese, and you can also "),_=(0,l.Uk)("custom multilingual"),z=(0,l.Uk)("Waline uses Gravatar, and also supports you to customize the default avatar, see "),A=(0,l.Uk)("avatar configuration"),E=(0,l.Uk)(" for details."),I=(0,l.Uk)("You can easily use the presets provided by Waline or create new presets to customize the Emoji popup in the comment box, see "),Y=(0,l.Uk)("Custom Emoji"),j=(0,l.Uk)(" for details."),F=(0,l.Uk)("Waline has built-in image upload support, use <pic.alexhchu.com> image bed , you can customize the image upload through "),P=(0,l.Wm)("code",null,"uploadImage",-1),T=(0,l.Uk)(" option"),L=(0,l.Uk)("."),M=(0,l.Wm)("h2",{id:"custom-style"},[(0,l.Wm)("a",{class:"header-anchor",href:"#custom-style"},"#"),(0,l.Uk)(" Custom Style")],-1),R=(0,l.Uk)("To let users adjust the style of Waline, Waline provides some configurable CSS variables. Waline also brings a built-in "),V=(0,l.Uk)("Dark Mode Support"),H=(0,l.Uk)(", see "),D=(0,l.Uk)("Custom Style"),G=(0,l.Uk)(" for details."),q=(0,l.Wm)("h2",{id:"comment-and-pageview-statistics"},[(0,l.Wm)("a",{class:"header-anchor",href:"#comment-and-pageview-statistics"},"#"),(0,l.Uk)(" Comment and pageview statistics")],-1),B=(0,l.Uk)("Waline supports comment and pageview statistics. For more information, please refer to "),J=(0,l.Uk)("View Statistics"),N=(0,l.Uk)("."),O=(0,l.Wm)("h2",{id:"spa-support"},[(0,l.Wm)("a",{class:"header-anchor",href:"#spa-support"},"#"),(0,l.Uk)(" SPA support")],-1),K=(0,l.uE)("Waline brings support for SPA (<strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication). If you are using an app with<code>history.pushState</code>, you can use the <code>update()</code> method of the <code>Waline()</code> instance to refresh config for the comment area, or you can use the <code>destory()</code> method on the instance to destroy Waline instance. See ",15),Q=(0,l.Uk)("SPA Support"),X=(0,l.Uk)(" for details."),Z=(0,l.Wm)("h2",{id:"accessibility-support"},[(0,l.Wm)("a",{class:"header-anchor",href:"#accessibility-support"},"#"),(0,l.Uk)(" Accessibility support")],-1),$=(0,l.Wm)("p",null,"Waline fully complies with all accessibility standards in the V1 version:",-1),ee=(0,l.Wm)("ul",null,[(0,l.Wm)("li",null,"All icons and controls have their corresponding accessibility labels."),(0,l.Wm)("li",null,"You can use the keyboard or head-mounted pointing device to complete the interaction with all Waline controls.")],-1),te=(0,l.Wm)("p",null,"This is our little support for the visually impaired and mobility impaired people around the world! ❤️",-1),ie=(0,l.Wm)("h2",{id:"ecosystem"},[(0,l.Wm)("a",{class:"header-anchor",href:"#ecosystem"},"#"),(0,l.Uk)(" Ecosystem")],-1),le=(0,l.Wm)("p",null,"You can easily use Waline with plugins on Hexo, VuePress and other tools, and even use third-party clients.",-1),ae=(0,l.Uk)("For details about third-party clients, themes and plugins that support Waline, please see "),ne=(0,l.Uk)("Learn more → Ecosystem"),oe=(0,l.Uk)("."),se={render:function(e,t){const i=(0,l.up)("OutboundLink"),se=(0,l.up)("RouterLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[a,(0,l.Wm)("p",null,[n,(0,l.Wm)("a",o,[s,(0,l.Wm)(i)]),r]),u,c,(0,l.Wm)("p",null,[d,(0,l.Wm)(se,{to:"/en/guide/client/import.html"},{default:(0,l.w5)((()=>[m])),_:1}),p]),h,W,(0,l.Wm)("p",null,[f,(0,l.Wm)(se,{to:"/en/reference/client.html"},{default:(0,l.w5)((()=>[g])),_:1}),k]),y,U,(0,l.Wm)("p",null,[w,(0,l.Wm)(se,{to:"/en/guide/client/syntax.html"},{default:(0,l.w5)((()=>[v])),_:1}),b]),S,C,(0,l.Wm)("p",null,[x,(0,l.Wm)(se,{to:"/en/guide/client/i18n.html"},{default:(0,l.w5)((()=>[_])),_:1})]),(0,l.Wm)("p",null,[z,(0,l.Wm)(se,{to:"/en/guide/client/avatar.html"},{default:(0,l.w5)((()=>[A])),_:1}),E]),(0,l.Wm)("p",null,[I,(0,l.Wm)(se,{to:"/en/guide/client/emoji.html"},{default:(0,l.w5)((()=>[Y])),_:1}),j]),(0,l.Wm)("p",null,[F,(0,l.Wm)(se,{to:"/en/reference/client.html#uploadimage"},{default:(0,l.w5)((()=>[P,T])),_:1}),L]),M,(0,l.Wm)("p",null,[R,(0,l.Wm)(se,{to:"/en/reference/client.html#dark"},{default:(0,l.w5)((()=>[V])),_:1}),H,(0,l.Wm)(se,{to:"/en/guide/client/style.html"},{default:(0,l.w5)((()=>[D])),_:1}),G]),q,(0,l.Wm)("p",null,[B,(0,l.Wm)(se,{to:"/en/guide/client/count.html"},{default:(0,l.w5)((()=>[J])),_:1}),N]),O,(0,l.Wm)("p",null,[K,(0,l.Wm)(se,{to:"/en/guide/client/spa.html"},{default:(0,l.w5)((()=>[Q])),_:1}),X]),Z,$,ee,te,ie,le,(0,l.Wm)("p",null,[ae,(0,l.Wm)(se,{to:"/en/advanced/ecosystem.html"},{default:(0,l.w5)((()=>[ne])),_:1}),oe])],64)}}}}]);