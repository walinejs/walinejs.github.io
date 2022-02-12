"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1863],{7142:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-e4322366",path:"/advanced/ecosystem.html",title:"生态系统",lang:"zh-CN",frontmatter:{title:"生态系统",icon:"ecosystem",head:[["meta",{property:"og:url",content:"https://waline.js.org/advanced/ecosystem.html"}],["meta",{property:"og:title",content:"生态系统"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"生态系统","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"客户端列表",slug:"客户端列表",children:[]},{level:2,title:"插件",slug:"插件",children:[{level:3,title:"Hexo",slug:"hexo",children:[]},{level:3,title:"VuePress",slug:"vuepress",children:[]}]},{level:2,title:"主题",slug:"主题",children:[]},{level:2,title:"更多",slug:"更多",children:[]}],git:{createdTime:1644683949e3,updatedTime:1644683949e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.22,words:365},filePathRelative:"advanced/ecosystem.md"}},3118:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const t=(0,s(8917).uE)('<p>Waline 是经典的前后端分离 Client/Server 架构，提供了较为完善的 API 接口。你可以基于服务端提供的 API 自行实现自己的客户端实现。</p><h2 id="客户端列表" tabindex="-1"><a class="header-anchor" href="#客户端列表" aria-hidden="true">#</a> 客户端列表</h2><ul><li><p><a href="https://npmjs.com/@waline/client" target="_blank" rel="noopener noreferrer">@waline/client</a></p><p>官方的客户端实现，使用 Vue + TypeScript 构建。</p></li><li><p><a href="https://github.com/MiniValine/MiniValine" target="_blank" rel="noopener noreferrer">MiniValine</a></p><p>作者 <a href="https://github.com/MHuiG" target="_blank" rel="noopener noreferrer">@MHuiG</a>，适配 Waline 接口。使用方式如下:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/minivaline/dist/MiniValine.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comments<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token keyword">new</span> <span class="token class-name">MiniValine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline-comments&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">backend</span><span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">serverURLs</span><span class="token operator">:</span> <span class="token string">&#39;YOUR SERVER URL&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li><li><p><a href="https://github.com/asforest/AprilComment" target="_blank" rel="noopener noreferrer">AprilComment</a></p><p>作者 <a href="https://github.com/asforest/AprilComment" target="_blank" rel="noopener noreferrer">asforest</a>，白绿色调的简洁风格，Markdown 格式渲染评论，并有一些独特的小功能。使用方式如下：</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>\n  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/april-comment@latest/dist/index.css<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>comment-widget<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">new</span> <span class="token class-name">AprilComment</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;comment-widget&#39;</span><span class="token punctuation">,</span>\n      <span class="token literal-property property">api</span><span class="token operator">:</span> <span class="token string">&#39;https://your-waline-backend-url.app&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li></ul><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件" aria-hidden="true">#</a> 插件</h2><p>你可以使用下列插件来在不同工具上使用 Waline:</p><h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo" aria-hidden="true">#</a> Hexo</h3><ul><li><a href="https://npmjs.com/@waline/hexo-next" target="_blank" rel="noopener noreferrer">@waline/hexo-next</a>, Hexo NexT 主题插件</li></ul><h3 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress" aria-hidden="true">#</a> VuePress</h3><ul><li><p><a href="https://vuepress-theme-hope.github.io/comment/zh/" target="_blank" rel="noopener noreferrer">@mr-hope/vuepress-plugin-comment</a>: VuePress1 评论插件</p></li><li><p><a href="https://vuepress-theme-hope.github.io/v2/comment/zh/" target="_blank" rel="noopener noreferrer">@mr-hope/vuepress-plugin-comment</a>: VuePress2 评论插件</p></li></ul><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题" aria-hidden="true">#</a> 主题</h2><ul><li><a href="https://vuepress-theme-hope.github.io/zh/" target="_blank" rel="noopener noreferrer">vuepress-theme-hope</a>: 一个强大的 VuePress 主题</li></ul><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>我们期待来自社区的更多客户端和插件以扩展 Waline 生态。🎉</p><p>如果你实现了 Waline 的客户端、生态插件与支持 Waline 的主题，欢迎在评论区中留言！</p>',14),e={},p=(0,s(6959).Z)(e,[["render",function(n,a){return t}]])}}]);