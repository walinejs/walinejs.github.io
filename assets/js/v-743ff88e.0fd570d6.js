"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2207],{6474:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-743ff88e",path:"/en/advanced/ecosystem.html",title:"Ecosystem",lang:"en-US",frontmatter:{title:"Ecosystem",icon:"ecosystem",head:[["meta",{property:"og:url",content:"https://waline.js.org/en/advanced/ecosystem.html"}],["meta",{property:"og:title",content:"Ecosystem"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"Clients",slug:"clients",children:[]},{level:2,title:"Plugins",slug:"plugins",children:[{level:3,title:"Hexo",slug:"hexo",children:[]},{level:3,title:"VuePress",slug:"vuepress",children:[]}]},{level:2,title:"Theme",slug:"theme",children:[]},{level:2,title:"More",slug:"more",children:[]}],git:{createdTime:1645406738e3,updatedTime:1645406738e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]},readingTime:{minutes:.9,words:270},filePathRelative:"en/advanced/ecosystem.md"}},9897:(n,a,s)=>{s.r(a),s.d(a,{default:()=>N});var t=s(8917);const e=(0,t._)("p",null,"Waline is a classic Client/Server architecture, which provides a relatively complete API interface. you can implement your own client implementation based on the API provided by the server.",-1),p=(0,t._)("h2",{id:"clients",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#clients","aria-hidden":"true"},"#"),(0,t.Uk)(" Clients")],-1),o={href:"https://npmjs.com/@waline/client",target:"_blank",rel:"noopener noreferrer"},l=(0,t.Uk)("@waline/client"),c=(0,t._)("p",null,"Official client implementation, build with Vue and TypeScript.",-1),r={href:"https://github.com/MiniValine/MiniValine",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("MiniValine"),u=(0,t.Uk)("By "),k={href:"https://github.com/MHuiG",target:"_blank",rel:"noopener noreferrer"},m=(0,t.Uk)("@MHuiG"),h=(0,t.Uk)(" , supports Waline API. Usage:"),g=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/minivaline/dist/MiniValine.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comments<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">new</span> <span class="token class-name">MiniValine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline-comments&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">backend</span><span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">serverURLs</span><span class="token operator">:</span> <span class="token string">&#39;YOUR SERVER URL&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),d={href:"https://github.com/asforest/AprilComment",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("AprilComment"),f=(0,t.Uk)("By "),v={href:"https://github.com/asforest/AprilComment",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("asforest"),b=(0,t.Uk)(", green-by-white theme, simple and easy, support Markdown as the format of comment. Usage:"),w=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.css<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comment-widget<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">AprilComment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;comment-widget&#39;</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token string">&#39;https://your-waline-backend-url.app&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),U=(0,t._)("h2",{id:"plugins",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),(0,t.Uk)(" Plugins")],-1),x=(0,t._)("p",null,"You can use the following plugins to use Waline on different tools:",-1),q=(0,t._)("h3",{id:"hexo",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#hexo","aria-hidden":"true"},"#"),(0,t.Uk)(" Hexo")],-1),W={href:"https://npmjs.com/@waline/hexo-next",target:"_blank",rel:"noopener noreferrer"},V=(0,t.Uk)("@waline/hexo-next"),P=(0,t.Uk)(": Hexo NexT theme plugin"),j=(0,t._)("h3",{id:"vuepress",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),(0,t.Uk)(" VuePress")],-1),C={href:"https://vuepress-theme-hope.github.io/comment/",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("@mr-hope/vuepress-plugin-comment"),A=(0,t.Uk)(": VuePress1 comment plugin"),E={href:"https://vuepress-theme-hope.github.io/v2/comment/",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("vuepress-plugin-comment2"),H=(0,t.Uk)(": VuePress2 comment plugin"),R=(0,t._)("h2",{id:"theme",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),(0,t.Uk)(" Theme")],-1),I={href:"https://vuepress-theme-hope.github.io/zh/",target:"_blank",rel:"noopener noreferrer"},S=(0,t.Uk)("vuepress-theme-hope"),L=(0,t.Uk)(": A powerful VuePress theme with tons of features"),Y=(0,t._)("h2",{id:"more",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#more","aria-hidden":"true"},"#"),(0,t.Uk)(" More")],-1),z=(0,t._)("p",null,"We are looking forward to more clients and plugins from the community to expand the Waline ecosystem. 🎉",-1),B=(0,t._)("p",null,"If you implement any Waline client, ecological plugin or theme including Waline, please comment and let us know!",-1),G={},N=(0,s(6959).Z)(G,[["render",function(n,a){const s=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",o,[l,(0,t.Wm)(s)])]),c]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",r,[i,(0,t.Wm)(s)])]),(0,t._)("p",null,[u,(0,t._)("a",k,[m,(0,t.Wm)(s)]),h]),g]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",d,[_,(0,t.Wm)(s)])]),(0,t._)("p",null,[f,(0,t._)("a",v,[y,(0,t.Wm)(s)]),b]),w])]),U,x,q,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",W,[V,(0,t.Wm)(s)]),P])]),j,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",C,[M,(0,t.Wm)(s)]),A]),(0,t._)("li",null,[(0,t._)("a",E,[T,(0,t.Wm)(s)]),H])]),R,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",I,[S,(0,t.Wm)(s)]),L])]),Y,z,B],64)}]])}}]);