"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1863],{7142:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-e4322366",path:"/advanced/ecosystem.html",title:"生态系统",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"客户端列表",slug:"客户端列表",children:[]},{level:2,title:"插件",slug:"插件",children:[{level:3,title:"Hexo",slug:"hexo",children:[]},{level:3,title:"VuePress",slug:"vuepress",children:[]}]},{level:2,title:"主题",slug:"主题",children:[]},{level:2,title:"更多",slug:"更多",children:[]}],filePathRelative:"advanced/ecosystem.md",git:{updatedTime:1642990713e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},7146:(n,a,s)=>{s.r(a),s.d(a,{default:()=>N});var t=s(8917);const e=(0,t._)("h1",{id:"生态系统",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#生态系统","aria-hidden":"true"},"#"),(0,t.Uk)(" 生态系统")],-1),p=(0,t._)("p",null,"Waline 是经典的前后端分离 Client/Server 架构，提供了较为完善的 API 接口。你可以基于服务端提供的 API 自行实现自己的客户端实现。",-1),l=(0,t._)("h2",{id:"客户端列表",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#客户端列表","aria-hidden":"true"},"#"),(0,t.Uk)(" 客户端列表")],-1),o={href:"https://npmjs.com/@waline/client",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("@waline/client"),u=(0,t._)("p",null,"官方的客户端实现，使用 Vue + TypeScript 构建。",-1),i={href:"https://github.com/MiniValine/MiniValine",target:"_blank",rel:"noopener noreferrer"},r=(0,t.Uk)("MiniValine"),k=(0,t.Uk)("作者 "),h={href:"https://github.com/MHuiG",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("@MHuiG"),g=(0,t.Uk)("，适配 Waline 接口。使用方式如下:"),m=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/minivaline/dist/MiniValine.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comments<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">new</span> <span class="token class-name">MiniValine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span> <span class="token string">&#39;#waline-comments&#39;</span><span class="token punctuation">,</span>\n    backend<span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>\n    serverURLs<span class="token operator">:</span> <span class="token string">&#39;YOUR SERVER URL&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),_={href:"https://github.com/asforest/AprilComment",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("AprilComment"),f=(0,t.Uk)("作者"),b={href:"https://github.com/asforest/AprilComment",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Uk)("asforest"),x=(0,t.Uk)("，白绿色调的简洁风格，Markdown 格式渲染评论，并有一些独特的小功能。使用方式如下："),q=(0,t.uE)('<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.css<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comment-widget<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">AprilComment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;comment-widget&#39;</span><span class="token punctuation">,</span>\n      api<span class="token operator">:</span> <span class="token string">&#39;https://your-waline-backend-url.app&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',1),w=(0,t._)("h2",{id:"插件",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#插件","aria-hidden":"true"},"#"),(0,t.Uk)(" 插件")],-1),W=(0,t._)("p",null,"你可以使用下列插件来在不同工具上使用 Waline:",-1),y=(0,t._)("h3",{id:"hexo",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#hexo","aria-hidden":"true"},"#"),(0,t.Uk)(" Hexo")],-1),V={href:"https://npmjs.com/@waline/hexo-next",target:"_blank",rel:"noopener noreferrer"},j=(0,t.Uk)("@waline/hexo-next"),C=(0,t.Uk)(", Hexo NexT 主题插件"),M=(0,t._)("h3",{id:"vuepress",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),(0,t.Uk)(" VuePress")],-1),P={href:"https://vuepress-theme-hope.github.io/comment/zh/",target:"_blank",rel:"noopener noreferrer"},A=(0,t.Uk)("@mr-hope/vuepress-plugin-comment"),H=(0,t.Uk)(": VuePress 评论插件"),R=(0,t._)("h2",{id:"主题",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#主题","aria-hidden":"true"},"#"),(0,t.Uk)(" 主题")],-1),E={href:"https://vuepress-theme-hope.github.io/zh/",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("vuepress-theme-hope"),L=(0,t.Uk)(": 一个强大的 VuePress 主题"),S=(0,t._)("h2",{id:"更多",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#更多","aria-hidden":"true"},"#"),(0,t.Uk)(" 更多")],-1),T=(0,t._)("p",null,"我们期待来自社区的更多客户端和插件以扩展 Waline 生态。🎉",-1),G=(0,t._)("p",null,"如果你实现了 Waline 的客户端、生态插件与支持 Waline 的主题，欢迎在评论区中留言！",-1),I={},N=(0,s(6959).Z)(I,[["render",function(n,a){const s=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,l,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",o,[c,(0,t.Wm)(s)])]),u]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",i,[r,(0,t.Wm)(s)])]),(0,t._)("p",null,[k,(0,t._)("a",h,[d,(0,t.Wm)(s)]),g]),m]),(0,t._)("li",null,[(0,t._)("p",null,[(0,t._)("a",_,[v,(0,t.Wm)(s)])]),(0,t._)("p",null,[f,(0,t._)("a",b,[U,(0,t.Wm)(s)]),x]),q])]),w,W,y,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",V,[j,(0,t.Wm)(s)]),C])]),M,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",P,[A,(0,t.Wm)(s)]),H])]),R,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",E,[z,(0,t.Wm)(s)]),L])]),S,T,G],64)}]])}}]);