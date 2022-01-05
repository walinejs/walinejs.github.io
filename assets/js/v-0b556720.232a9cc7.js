"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3894],{2521:(n,a,s)=>{s.r(a),s.d(a,{data:()=>p});const p={key:"v-0b556720",path:"/guide/client/style.html",title:"自定义样式",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="自定义样式" tabindex="-1"><a class="header-anchor" href="#自定义样式" aria-hidden="true">#</a> 自定义样式</h1>\n<p><code>@waline/client</code> 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。</p>\n<p>同时 <code>@waline/client</code> 还带来了内置的暗黑模式支持。</p>\n',headers:[{level:2,title:"提供的变量",slug:"提供的变量",children:[]},{level:2,title:"暗黑模式支持",slug:"暗黑模式支持",children:[{level:3,title:"夜间模式默认颜色",slug:"夜间模式默认颜色",children:[]}]},{level:2,title:"阴影样式",slug:"阴影样式",children:[]},{level:2,title:"更多",slug:"更多",children:[]}],filePathRelative:"guide/client/style.md",git:{updatedTime:1641359653e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},4999:(n,a,s)=>{s.r(a),s.d(a,{default:()=>i});var p=s(8917);const t=(0,p.uE)('<h1 id="自定义样式" tabindex="-1"><a class="header-anchor" href="#自定义样式" aria-hidden="true">#</a> 自定义样式</h1><p><code>@waline/client</code> 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。</p><p>同时 <code>@waline/client</code> 还带来了内置的暗黑模式支持。</p><h2 id="提供的变量" tabindex="-1"><a class="header-anchor" href="#提供的变量" aria-hidden="true">#</a> 提供的变量</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 字体大小 */</span>\n  <span class="token property">--waline-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 常规颜色 */</span>\n  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 主题色 */</span>\n  <span class="token property">--waline-theme-color</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>\n  <span class="token property">--waline-active-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 布局颜色 */</span>\n  <span class="token property">--waline-text-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>\n  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>\n  <span class="token property">--waline-code-bgcolor</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 特殊颜色 */</span>\n  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 头像 */</span>\n  <span class="token property">--waline-avatar-size</span><span class="token punctuation">:</span> 3.25rem<span class="token punctuation">;</span>\n  <span class="token property">--waline-mobile-avatar-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--waline-avatar-size<span class="token punctuation">)</span> * 9 / 13<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* 徽章 */</span>\n  <span class="token property">--waline-badge-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>\n  <span class="token property">--waline-badge-font-size</span><span class="token punctuation">:</span> 0.775em<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 信息 */</span>\n  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-font-size</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 渲染选择 */</span>\n  <span class="token property">--waline-border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--waline-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--waline-avatar-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="暗黑模式支持" tabindex="-1"><a class="header-anchor" href="#暗黑模式支持" aria-hidden="true">#</a> 暗黑模式支持</h2><p>你可以使用 <code>dark</code> 选项来启用 Waline 的暗黑模式支持。</p><p>通常网站会通过两种方式启用暗黑模式支持:</p><ul><li>使用 <code>@media</code> 选择器通过 <code>prefers-color-scheme</code> 来根据设备颜色模式状态自动切换</li><li>通过修改 dom 根元素 (<code>html</code> 或 <code>body</code>) 的属性与 class 来动态应用或取消暗黑模式的颜色样式。</li></ul><p>如果你在第一种方式的站点上启用 Waline，你只需将 <code>dark</code> 设置为 <code>&#39;auto&#39;</code>。</p><p>对于第二种站点，你需要将 dark 设置为令暗黑模式生效的 CSS 选择器。以下是几个例子</p><div class="custom-container tip"><p class="custom-container-title">不同主题的例子</p><ul><li><p><strong>Docusaurus</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-theme=&quot;dark&quot;</code> 开启暗黑模式，那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>hexo-theme-fluid</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-user-color-scheme=&quot;dark&quot;</code> 开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>vuepress-theme-hope</strong>: 它会在 <code>&lt;body&gt;</code> 上添加<code>theme-dark</code> class 来开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>body.theme-dark</code>。</p></li></ul></div><h3 id="夜间模式默认颜色" tabindex="-1"><a class="header-anchor" href="#夜间模式默认颜色" aria-hidden="true">#</a> 夜间模式默认颜色</h3><p>在使用 <code>dark</code> 选项配置暗黑模式时，waline 会默认使用以下颜色:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* 根据用户设置 ↓ */</span>\n<span class="token selector">darkmode-selector</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* 常规颜色 */</span>\n  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 布局颜色 */</span>\n  <span class="token property">--waline-text-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 特殊颜色 */</span>\n  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n\n  <span class="token comment">/* 其他颜色 */</span>\n  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>如果上述颜色与你的站点夜间模式颜色不同，你可以考虑手动添加 CSS 并自行覆盖他们。</p><h2 id="阴影样式" tabindex="-1"><a class="header-anchor" href="#阴影样式" aria-hidden="true">#</a> 阴影样式</h2><p>如果你在使用一个大量运用阴影 (<code>box-shadow</code>) 的主题，你可以通过修改 <code>--waline-border</code> 和 <code>--waline-box-shadow</code> 来更改 Waline 的显示效果，如:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--waline-border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px <span class="token function">rgb</span><span class="token punctuation">(</span>134 151 168 / 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px #0f0e0d<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>如果上面的 CSS 变量无法满足你对 Waline 样式的定制要求，你还可以:</p>',21),e=(0,p.uE)('<li><p>手动添加 CSS 对 Waline 的默认样式进行覆盖</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意，由于 Waline 是一个纯 JS 的包，它会在运行时将样式注入到网页的 <code>&lt;head&gt;</code> 中，所以如果你想覆盖样式，请注意你的 CSS 被注入的位置。</p><p>如果你使用打包工具，你的样式很大会打包为外置 css 并在 <code>&lt;head&gt;</code> 中引入，这意味着 Waline 后注入的样式将在你 CSS 的后面。</p><p>所以在这种情况下，你可能需要使用更高优先级的选择器，或者将 <code>&lt;style&gt;</code> 标签放置在 body 中。</p></div></li>',1),o=(0,p.Uk)("引入 Waline 的无样式版本，详见 "),c=(0,p.Uk)("Waline 引入"),l={},i=(0,s(6959).Z)(l,[["render",function(n,a){const s=(0,p.up)("RouterLink");return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,(0,p._)("ul",null,[e,(0,p._)("li",null,[(0,p._)("p",null,[o,(0,p.Wm)(s,{to:"/guide/client/import.html"},{default:(0,p.w5)((()=>[c])),_:1})])])])],64)}]])}}]);