import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c,a as t,b as e,d as o,w as i,e as d,r as s}from"./app.4f26d98d.js";const u={},h={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},p=t("code",null,"@waline/client",-1),m=t("h2",{id:"introduce",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introduce","aria-hidden":"true"},"#"),e(" Introduce")],-1),_=t("p",null,"You can use CDN or npm to import Waline. We provide mutiple versions.",-1),f=d('<h2 id="initialization" tabindex="-1"><a class="header-anchor" href="#initialization" aria-hidden="true">#</a> Initialization</h2><p>You can use <code>Waline.init(options)</code> to initialize a Waline instance, where <code>el</code> and <code>serverURL</code> options are required. The <code>el</code> option should be the element or element selector that Waline mounts, and <code>serverURL</code> options should be the server URL.</p>',2),g=t("h2",{id:"pageview-counting",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#pageview-counting","aria-hidden":"true"},"#"),e(" Pageview Counting")],-1),y=t("h2",{id:"rich-comment-syntax-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#rich-comment-syntax-support","aria-hidden":"true"},"#"),e(" Rich Comment Syntax Support")],-1),b=t("p",null,"Waline has a good support for syntax.Besides using standard Markdown and GFM in the comment box, you can also embed HTML tags or use mathematical formulas.",-1),v=t("h2",{id:"features",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),e(" Features")],-1),W=t("p",null,"Waline has many features, including login, avatar, multi-language, custom Emoji, image upload and real-time preview. You can try these features in the demo below.",-1),w=t("code",null,"imageUploader",-1),x={href:"https://tenor.com",target:"_blank",rel:"noopener noreferrer"},S=t("h2",{id:"style-customization",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#style-customization","aria-hidden":"true"},"#"),e(" Style Customization")],-1),C=t("h2",{id:"comment-counting",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#comment-counting","aria-hidden":"true"},"#"),e(" Comment Counting")],-1),k=t("h2",{id:"vue-component",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#vue-component","aria-hidden":"true"},"#"),e(" Vue Component")],-1),z=t("p",null,"Since Waline's official client is based on Vue3, Waline also provides a 18KB Gzip Vue component, and all component properties are reactive.",-1),V=t("h2",{id:"spa-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#spa-support","aria-hidden":"true"},"#"),e(" SPA support")],-1),j=t("strong",null,"S",-1),I=t("strong",null,"P",-1),L=t("strong",null,"A",-1),E=t("code",null,"history.pushState",-1),P=t("code",null,"update()",-1),R=t("code",null,"Waline.init()",-1),Y=t("code",null,"destory()",-1),A=t("h2",{id:"accessibility-support",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#accessibility-support","aria-hidden":"true"},"#"),e(" Accessibility support")],-1),B=t("p",null,"Waline fully complies with all accessibility standards:",-1),F=t("ul",null,[t("li",null,"All icons and controls have their corresponding accessibility labels."),t("li",null,"You can use the keyboard or head-mounted pointing device to complete the interaction with all Waline controls.")],-1),T=t("p",null,"This is our little support for the visually impaired and mobility impaired people around the world! \u2764\uFE0F",-1),N=t("h2",{id:"ecosystem",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ecosystem","aria-hidden":"true"},"#"),e(" Ecosystem")],-1),U=t("p",null,"You can easily use Waline with plugins on Hexo, VuePress and other tools, and even use third-party clients.",-1);function G(M,q){const a=s("ExternalLinkIcon"),n=s("RouterLink");return r(),c("div",null,[t("p",null,[e("Waline official provides the "),t("a",h,[p,o(a)]),e(", written in Vue + TypeScript, and the size is only 53kb gzip.")]),m,_,t("p",null,[e("For details about Waline import, please refer to "),o(n,{to:"/en/guide/client/import.html"},{default:i(()=>[e("Importing Client")]),_:1}),e(".")]),f,t("p",null,[e("For available options, please refer to "),o(n,{to:"/en/reference/client.html"},{default:i(()=>[e("Reference \u2192 Client Options")]),_:1}),e(".")]),g,t("p",null,[e("Waline supports pageview counting. If you don't need comment service but only need pageview feature, Waline provides a < 1KB Gzip package, please refer to "),o(n,{to:"/en/guide/client/pageview.html"},{default:i(()=>[e("Pageview Counting")]),_:1}),e(".")]),y,b,t("p",null,[e("You can learn about the complete syntax supported by Waline in the "),o(n,{to:"/en/guide/client/syntax.html"},{default:i(()=>[e("Supported Syntax")]),_:1}),e(" section.")]),v,W,t("p",null,[e("Waline officially added support for mutiple languages, and you can also customize locales. See "),o(n,{to:"/en/guide/client/i18n.html"},{default:i(()=>[e("I18n Support")]),_:1}),e(" for details.")]),t("p",null,[e("You can easily use the presets provided by Waline or create new presets to customize the Emoji popup in the comment box, see "),o(n,{to:"/en/guide/client/emoji.html"},{default:i(()=>[e("Custom Emoji")]),_:1}),e(" for details.")]),t("p",null,[e("If you want users to quickly express their reactions to articles outside of comments, you can manually enable the "),o(n,{to:"/en/guide/client/reaction.html"},{default:i(()=>[e("Article Reaction")]),_:1}),e(" feature.")]),t("p",null,[e("Waline has built-in image upload support, coverting image to Base64 , you can customize the image upload through "),o(n,{to:"/en/reference/client.html#uploadimage"},{default:i(()=>[w]),_:1}),e(" option.")]),t("p",null,[e("Waline supports emoji search feature and uses "),t("a",x,[e("https://tenor.com"),o(a)]),e(" by default. You can also "),o(n,{to:"/en/guide/client/search.html"},{default:i(()=>[e("customize your own emoji service")]),_:1}),e(".")]),S,t("p",null,[e("To let users adjust the style of Waline, Waline provides some configurable CSS variables. Waline also brings a built-in Darkmode Support, see "),o(n,{to:"/en/guide/client/style.html"},{default:i(()=>[e("Custom Style")]),_:1}),e(" for details.")]),C,t("p",null,[e("Waline supports comment and pageview statistics. For more information, please refer to "),o(n,{to:"/en/guide/client/comment.html"},{default:i(()=>[e("Comment count")]),_:1}),e(" and "),o(n,{to:"/en/guide/client/pageview.html"},{default:i(()=>[e("Pageview count")]),_:1}),e(".")]),k,z,t("p",null,[e("If you are building a Vue project, you can directly import and use Waline components in the project, see [Vue Components](./\u5982\u679C\u4F60\u5728\u4F7F\u7528\u57FA\u4E8E Vue \u7684\u9879\u76EE\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u9879\u76EE\u4E2D\u5BFC\u5165\u5E76\u4F7F\u7528 Waline \u7EC4\u4EF6\uFF0C\u8BE6\u89C1 "),o(n,{to:"/en/guide/client/component.html"},{default:i(()=>[e("Vue \u7EC4\u4EF6")]),_:1}),e("\u3002 .md) for details.")]),V,t("p",null,[e("Waline brings support for SPA ("),j,e("ingle "),I,e("age "),L,e("pplication). If you are using an app with "),E,e(", you can use the "),P,e(" method of the "),R,e(" instance to refresh config for the comment area, or you can use the "),Y,e(" method on the instance to destroy Waline instance. See "),o(n,{to:"/en/guide/client/spa.html"},{default:i(()=>[e("SPA Support")]),_:1}),e(" for details.")]),A,B,F,T,N,U,t("p",null,[e("For details about third-party clients, themes and plugins that support Waline, please see "),o(n,{to:"/en/advanced/ecosystem.html"},{default:i(()=>[e("Learn more \u2192 Ecosystem")]),_:1}),e(".")])])}const K=l(u,[["render",G],["__file","intro.html.vue"]]);export{K as default};
