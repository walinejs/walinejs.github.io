import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as a,b as s}from"./app-47lnWMq3.js";const n={},t=s(`<p>Waline 是经典的前后端分离 Client/Server 架构，提供了较为完善的 API 接口。你可以基于服务端提供的 API 自行实现自己的客户端实现。</p><h2 id="客户端列表" tabindex="-1"><a class="header-anchor" href="#客户端列表"><span>客户端列表</span></a></h2><ul><li><p><a href="https://npmjs.com/@waline/client" target="_blank" rel="noopener noreferrer">@waline/client</a></p><p>官方的客户端实现，使用 Vue + TypeScript 构建。</p></li><li><p><a href="https://github.com/MiniValine/MiniValine" target="_blank" rel="noopener noreferrer">MiniValine</a></p><p>作者 <a href="https://github.com/MHuiG" target="_blank" rel="noopener noreferrer">@MHuiG</a>，适配 Waline 接口。使用方式如下:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;https://unpkg.com/minivaline/dist/MiniValine.min.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;waline-comments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> MiniValine</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#waline-comments&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    backend</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;waline&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    serverURLs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;YOUR SERVER URL&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><a href="https://github.com/BeiyanYunyi/sodesu" target="_blank" rel="noopener noreferrer">sodesu</a></p><p>作者 <a href="https://github.com/BeiyanYunyi" target="_blank" rel="noopener noreferrer">@BeiyanYunyi</a>。使用 Solid.js 构建，使用方式详见项目页面和<a href="https://BeiyanYunyi.github.io/sodesu/" target="_blank" rel="noopener noreferrer">说明文档</a>。</p></li></ul><h2 id="插件" tabindex="-1"><a class="header-anchor" href="#插件"><span>插件</span></a></h2><p>你可以使用下列插件来在不同工具上使用 Waline:</p><h3 id="hexo" tabindex="-1"><a class="header-anchor" href="#hexo"><span>Hexo</span></a></h3><ul><li><a href="https://npmjs.com/@waline/hexo-next" target="_blank" rel="noopener noreferrer">@waline/hexo-next</a>: Waline comment system for NexT.</li></ul><h3 id="docsify" tabindex="-1"><a class="header-anchor" href="#docsify"><span>Docsify</span></a></h3><ul><li><a href="https://github.com/cxcn/docsify-waline" target="_blank" rel="noopener noreferrer">docsify-waline</a>: A simple comment plugin for docsify.</li></ul><h3 id="vuepress" tabindex="-1"><a class="header-anchor" href="#vuepress"><span>VuePress</span></a></h3><ul><li><a href="https://vuepress-theme-hope.github.io/v2/comment/" target="_blank" rel="noopener noreferrer">vuepress-plugin-comment2</a>: Comment system for VuePress2.</li><li><a href="https://vuepress-theme-hope.github.io/v1/comment/" target="_blank" rel="noopener noreferrer">@mr-hope/vuepress-plugin-comment</a>: Comment system for VuePress1.</li></ul><p>Others:</p><ul><li><a href="https://github.com/SivanLaai/vuepress-plugin-comment-plus" target="_blank" rel="noopener noreferrer">vuepress-plugin-comment-plus</a>: Comment system plugin for VuePress.</li></ul><h2 id="主题" tabindex="-1"><a class="header-anchor" href="#主题"><span>主题</span></a></h2><h3 id="hexo-1" tabindex="-1"><a class="header-anchor" href="#hexo-1"><span>Hexo</span></a></h3><ul><li>🦋 <a href="https://github.com/jerryc127/hexo-theme-butterfly" target="_blank" rel="noopener noreferrer">Butterfly</a></li><li>🍬 <a href="https://github.com/Candinya/Kratos-Rebirth" target="_blank" rel="noopener noreferrer">Kratos-Rebirth</a></li><li>🍭 <a href="https://github.com/lete114/hexo-theme-MengD" target="_blank" rel="noopener noreferrer">MengD</a></li><li>⛲ <a href="https://github.com/fluid-dev/hexo-theme-fluid" target="_blank" rel="noopener noreferrer">Fluid</a></li><li>🚚 <a href="https://github.com/theme-kaze/hexo-theme-kaze" target="_blank" rel="noopener noreferrer">Kaze</a></li><li>✌🏻 <a href="https://github.com/volantis-x/hexo-theme-volantis" target="_blank" rel="noopener noreferrer">Volantis</a></li><li>🗒 <a href="https://github.com/dewjohn/hexo-theme-blank" target="_blank" rel="noopener noreferrer">Blank</a></li><li>🐴 <a href="https://github.com/liuyib/hexo-theme-stun" target="_blank" rel="noopener noreferrer">Stun</a></li><li>🤖 <a href="https://github.com/YunYouJun/hexo-theme-yun" target="_blank" rel="noopener noreferrer">Yun</a></li><li>🦄 <a href="https://github.com/Uzizkp/hexo-theme-unicorn" target="_blank" rel="noopener noreferrer">Unicorn</a></li><li>💀 <a href="https://github.com/Ares-X/hexo-theme-freemind.bithack" target="_blank" rel="noopener noreferrer">freemind.bithack</a></li><li>🤡 <a href="https://github.com/EvanNotFound/hexo-theme-redefine" target="_blank" rel="noopener noreferrer">Redefine</a></li><li>🌟 <a href="https://github.com/XPoet/hexo-theme-keep" target="_blank" rel="noopener noreferrer">Keep</a></li></ul><h3 id="vuepress-1" tabindex="-1"><a class="header-anchor" href="#vuepress-1"><span>VuePress</span></a></h3><ul><li><a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope" target="_blank" rel="noopener noreferrer">hope</a></li><li><a href="https://github.com/SHUAXINDIARY/vuepress-theme-stella" target="_blank" rel="noopener noreferrer">stella</a></li></ul><h3 id="hugo" tabindex="-1"><a class="header-anchor" href="#hugo"><span>Hugo</span></a></h3><ul><li><a href="https://github.com/CaiJimmy/hugo-theme-stack" target="_blank" rel="noopener noreferrer">hugo-theme-stack</a></li><li><a href="https://github.com/HEIGE-PCloud/DoIt" target="_blank" rel="noopener noreferrer">DoIt</a></li><li><a href="https://github.com/hugo-fixit/FixIt" target="_blank" rel="noopener noreferrer">FixIt</a></li><li><a href="https://github.com/Kindle-deep/hugo-theme-Kenny" target="_blank" rel="noopener noreferrer">Kenny</a></li></ul><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h2><p>我们期待来自社区的更多客户端和插件以扩展 Waline 生态。🎉</p><p>如果你实现了 Waline 的客户端、生态插件与支持 Waline 的主题，欢迎发送 PR！</p>`,23),r=[t];function l(h,o){return i(),a("div",null,r)}const m=e(n,[["render",l],["__file","ecosystem.html.vue"]]),d=JSON.parse('{"path":"/advanced/ecosystem.html","title":"生态系统","lang":"zh-CN","frontmatter":{"title":"生态系统","icon":"ecosystem","order":3,"description":"Waline 是经典的前后端分离 Client/Server 架构，提供了较为完善的 API 接口。你可以基于服务端提供的 API 自行实现自己的客户端实现。 客户端列表 @waline/client 官方的客户端实现，使用 Vue + TypeScript 构建。 MiniValine 作者 @MHuiG，适配 Waline 接口。使用方式如下: s...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/advanced/ecosystem.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/advanced/ecosystem.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"生态系统"}],["meta",{"property":"og:description","content":"Waline 是经典的前后端分离 Client/Server 架构，提供了较为完善的 API 接口。你可以基于服务端提供的 API 自行实现自己的客户端实现。 客户端列表 @waline/client 官方的客户端实现，使用 Vue + TypeScript 构建。 MiniValine 作者 @MHuiG，适配 Waline 接口。使用方式如下: s..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"生态系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"客户端列表","slug":"客户端列表","link":"#客户端列表","children":[]},{"level":2,"title":"插件","slug":"插件","link":"#插件","children":[{"level":3,"title":"Hexo","slug":"hexo","link":"#hexo","children":[]},{"level":3,"title":"Docsify","slug":"docsify","link":"#docsify","children":[]},{"level":3,"title":"VuePress","slug":"vuepress","link":"#vuepress","children":[]}]},{"level":2,"title":"主题","slug":"主题","link":"#主题","children":[{"level":3,"title":"Hexo","slug":"hexo-1","link":"#hexo-1","children":[]},{"level":3,"title":"VuePress","slug":"vuepress-1","link":"#vuepress-1","children":[]},{"level":3,"title":"Hugo","slug":"hugo","link":"#hugo","children":[]}]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"git":{"createdTime":1621421218000,"updatedTime":1717584295000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":6},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"AresX","email":"30471149+Ares-X@users.noreply.github.com","commits":1},{"name":"Cell","email":"1024@lruihao.cn","commits":1},{"name":"Evan Luo","email":"luojiashao@gmail.com","commits":1},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"asforest","email":"asforest@qq.com","commits":1},{"name":"lizheming","email":"i@imnerd.org","commits":1},{"name":"北雁云依","email":"14120445+BeiyanYunyi@users.noreply.github.com","commits":1},{"name":"指间的诗意","email":"i@xpoet.cn","commits":1}]},"readingTime":{"minutes":1.32,"words":395},"filePathRelative":"advanced/ecosystem.md","localizedDate":"2021年5月19日","autoDesc":true}');export{m as comp,d as data};
