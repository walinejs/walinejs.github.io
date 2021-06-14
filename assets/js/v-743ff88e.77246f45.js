(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2207],{6417:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-743ff88e",path:"/en/advanced/ecosystem.html",title:"Ecosystem",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Clients",slug:"clients",children:[]},{level:2,title:"Plugins",slug:"plugins",children:[{level:3,title:"Hexo",slug:"hexo",children:[]},{level:3,title:"VuePress",slug:"vuepress",children:[]}]},{level:2,title:"Theme",slug:"theme",children:[]},{level:2,title:"More",slug:"more",children:[]}],filePathRelative:"en/advanced/ecosystem.md",git:{updatedTime:1623664824e3,contributors:[]}}},6933:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>Y});var t=a(8917);const e=(0,t.Wm)("h1",{id:"ecosystem"},[(0,t.Wm)("a",{class:"header-anchor",href:"#ecosystem"},"#"),(0,t.Uk)(" Ecosystem")],-1),p=(0,t.Wm)("p",null,"Waline is a classic Client/Server architecture, which provides a relatively complete API interface. you can implement your own client implementation based on the API provided by the server.",-1),l=(0,t.Wm)("h2",{id:"clients"},[(0,t.Wm)("a",{class:"header-anchor",href:"#clients"},"#"),(0,t.Uk)(" Clients")],-1),o={href:"https://npmjs.com/@waline/client",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("@waline/client"),u=(0,t.Wm)("p",null,"Official client implementation, build with Vue and TypeScript.",-1),i={href:"https://github.com/MiniValine/MiniValine",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("MiniValine"),k=(0,t.Uk)("By "),m={href:"https://github.com/MHuiG",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("@MHuiG"),g=(0,t.Uk)(", supports Waline API. Usage:"),d=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/minivaline/dist/MiniValine.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comments<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">new</span> <span class="token class-name">MiniValine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">&#39;#waline-comments&#39;</span><span class="token punctuation">,</span>\n    backend<span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>\n    serverURLs<span class="token operator">:</span> <span class="token string">&#39;YOUR SERVER URL&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),W={href:"https://github.com/innc11/AprilComment",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("AprilComment"),v=(0,t.Uk)("By "),w={href:"https://github.com/innc11/AprilComment",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("innc11"),y=(0,t.Uk)(", green-by-white theme, simple and easy, support Markdown as the format of comment. Usage:"),b=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.css<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comment-widget<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">AprilComment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;comment-widget&#39;</span><span class="token punctuation">,</span>\n      api<span class="token operator">:</span> <span class="token string">&#39;https://your-waline-backend-url.app&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),q=(0,t.Wm)("h2",{id:"plugins"},[(0,t.Wm)("a",{class:"header-anchor",href:"#plugins"},"#"),(0,t.Uk)(" Plugins")],-1),x=(0,t.Wm)("p",null,"You can use the following plugins to use Waline on different tools:",-1),V=(0,t.Wm)("h3",{id:"hexo"},[(0,t.Wm)("a",{class:"header-anchor",href:"#hexo"},"#"),(0,t.Uk)(" Hexo")],-1),j={href:"https://npmjs.com/@waline/hexo-next",target:"_blank",rel:"noopener noreferrer"},M=(0,t.Uk)("@waline/hexo-next"),P=(0,t.Uk)(", Hexo NexT theme plugin"),C=(0,t.Wm)("h3",{id:"vuepress"},[(0,t.Wm)("a",{class:"header-anchor",href:"#vuepress"},"#"),(0,t.Uk)(" VuePress")],-1),A={href:"https://vuepress-theme-hope.github.io/comment/zh/",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("@mr-hope/vuepress-plugin-comment"),E=(0,t.Uk)(": VuePress comment plugin"),H=(0,t.Wm)("h2",{id:"theme"},[(0,t.Wm)("a",{class:"header-anchor",href:"#theme"},"#"),(0,t.Uk)(" Theme")],-1),R={href:"https://vuepress-theme-hope.github.io/zh/",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("vuepress-theme-hope"),I=(0,t.Uk)(": A powerful VuePress theme with tons of features"),S=(0,t.Wm)("h2",{id:"more"},[(0,t.Wm)("a",{class:"header-anchor",href:"#more"},"#"),(0,t.Uk)(" More")],-1),L=(0,t.Wm)("p",null,"We are looking forward to more clients and plugins from the community to expand the Waline ecosystem. 🎉",-1),O=(0,t.Wm)("p",null,"If you implement any Waline client, ecological plugin or theme including Waline, please comment and let us know!",-1),Y={render:function(n,s){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,p,l,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[(0,t.Wm)("a",o,[c,(0,t.Wm)(a)])]),u]),(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[(0,t.Wm)("a",i,[r,(0,t.Wm)(a)])]),(0,t.Wm)("p",null,[k,(0,t.Wm)("a",m,[h,(0,t.Wm)(a)]),g]),d]),(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[(0,t.Wm)("a",W,[f,(0,t.Wm)(a)])]),(0,t.Wm)("p",null,[v,(0,t.Wm)("a",w,[U,(0,t.Wm)(a)]),y]),b])]),q,x,V,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",j,[M,(0,t.Wm)(a)]),P])]),C,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",A,[_,(0,t.Wm)(a)]),E])]),H,(0,t.Wm)("ul",null,[(0,t.Wm)("li",null,[(0,t.Wm)("a",R,[T,(0,t.Wm)(a)]),I])]),S,L,O],64)}}}}]);