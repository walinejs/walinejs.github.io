(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[682],{396:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-434e7c8c",path:"/en/guide/client/style.html",title:"Custom style",lang:"en-US",frontmatter:{},excerpt:'<h1 id="custom-style"><a class="header-anchor" href="#custom-style">#</a> Custom style</h1>\n<p><code>@waline/client</code> provides some CSS variables. You can easily configure the style of waline through these variables:</p>\n<p>Meanwhile, <code>@waline/client</code> also brings built-in dark mode support.</p>\n',headers:[{level:2,title:"Variables",slug:"variables",children:[]},{level:2,title:"Dark mode support",slug:"dark-mode-support",children:[{level:3,title:"Darkmode Palette",slug:"darkmode-palette",children:[]}]},{level:2,title:"Box Shadow",slug:"box-shadow",children:[]},{level:2,title:"More",slug:"more",children:[]}],filePathRelative:"en/guide/client/style.md",git:{updatedTime:1622880123e3,contributors:[]}}},7580:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var e=s(8917);const t=(0,e.uE)('<h1 id="custom-style"><a class="header-anchor" href="#custom-style">#</a> Custom style</h1><p><code>@waline/client</code> provides some CSS variables. You can easily configure the style of waline through these variables:</p><p>Meanwhile, <code>@waline/client</code> also brings built-in dark mode support.</p><h2 id="variables"><a class="header-anchor" href="#variables">#</a> Variables</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Font Size */</span>\n  <span class="token property">--waline-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Regular color */</span>\n  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Theme Color */</span>\n  <span class="token property">--waline-theme-color</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>\n  <span class="token property">--waline-active-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Layout Color */</span>\n  <span class="token property">--waline-text-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>\n  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>\n  <span class="token property">--waline-code-bgcolor</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Special Color */</span>\n  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Avatar */</span>\n  <span class="token property">--waline-avatar-size</span><span class="token punctuation">:</span> 3.25rem<span class="token punctuation">;</span>\n  <span class="token property">--waline-mobile-avatar-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--waline-avatar-size<span class="token punctuation">)</span> * 9 / 13<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* Badge */</span>\n  <span class="token property">--waline-badge-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>\n  <span class="token property">--waline-badge-font-size</span><span class="token punctuation">:</span> 0.775em<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Information */</span>\n  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-font-size</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Render choise */</span>\n  <span class="token property">--waline-border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--waline-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--waline-avatar-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="dark-mode-support"><a class="header-anchor" href="#dark-mode-support">#</a> Dark mode support</h2><p>You can use the <code>dark</code> option to enable Waline&#39;s dark mode support.</p><p>Usually websites will enable dark mode support in two ways:</p><ul><li>Use the <code>@media</code> selector to automatically switch according to the device color mode status through <code>prefers-color-scheme</code></li><li>Dynamically apply othe dark mode color style by modifying the attributes and class of the dom root element (<code>html</code> or <code>body</code>).</li></ul><p>If you enable Waline on the site of the first method, you only need to set <code>dark</code> to <code>&#39;auto&#39;</code>.</p><p>For the second type of site, you need to set dark to the CSS selector that makes the dark mode effective. Here are a few examples:</p><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>Docusaurus</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>vuepress-theme-hope</strong>: It will enable darkmode by setting <code>theme-dark</code> class on the <code>&lt;body&gt;</code> tag itself. So you need to set <code>&#39;body.theme-dark&#39;</code> as <code>dark</code> option.</p></li></ul></div><h3 id="darkmode-palette"><a class="header-anchor" href="#darkmode-palette">#</a> Darkmode Palette</h3><p>When using the <code>dark</code> option to configure the dark mode, waline will use the following colors by default:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* ↓ According to user settings */</span>\n<span class="token selector">darkmode-selector</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Regular color */</span>\n  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Layout color */</span>\n  <span class="token property">--waline-text-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Special color */</span>\n  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Other color */</span>\n  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If the above colors are different from the darkmode palette of your site, you can override them instead of setting the <code>dark</code> option.</p><h2 id="box-shadow"><a class="header-anchor" href="#box-shadow">#</a> Box Shadow</h2><p>If you are using a theme that uses shadows (<code>box-shadow</code>) instead of borders, you can modify the display effect of Waline by modifying <code>--waline-border</code> and <code>--waline-box-shadow</code>, e.g.:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--waline-border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px <span class="token function">rgb</span><span class="token punctuation">(</span>134 151 168 / 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px #0f0e0d<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="more"><a class="header-anchor" href="#more">#</a> More</h2><p>If the above CSS variables cannot meet your custom requirements for Waline styles, you can also:</p>',21),o=(0,e.uE)('<li><p>Manually add a CSS file to override Waline&#39;s default style</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please note that since Waline is a pure JS package, it will inject styles into the <code>&lt;head&gt;</code> of the web page at runtime, so if you want to override styles, please pay attention to where your CSS is injected.</p><p>If you use a packing tool (e.g.: webpack), your custom styles will probably be packed as external css and imported in <code>&lt;head&gt;</code>, which means it is before the styles injected by Waline.</p><p>So in this case, you may need to use a higher priority selector, or place the <code>&lt;style&gt;</code> tag in body.</p></div></li>',1),p=(0,e.Uk)("Import the unstyled version of Waline, see "),c=(0,e.Uk)("Waline import"),l=(0,e.Uk)(" for details"),i={render:function(n,a){const s=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[o,(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[p,(0,e.Wm)(s,{to:"/en/guide/client/import.html"},{default:(0,e.w5)((()=>[c])),_:1}),l])])])],64)}}}}]);