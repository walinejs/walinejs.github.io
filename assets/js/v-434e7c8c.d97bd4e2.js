(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[682],{396:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>t});const t={key:"v-434e7c8c",path:"/en/guide/client/style.html",title:"Custom style",lang:"en-US",frontmatter:{},excerpt:'<h1 id="custom-style"><a class="header-anchor" href="#custom-style">#</a> Custom style</h1>\n<p><code>@waline/client</code> provides some CSS variables. You can easily configure the style of waline through these variables:</p>\n<p>Meanwhile, <code>@waline/client</code> also brings built-in dark mode support.</p>\n',headers:[{level:2,title:"Variables",slug:"variables",children:[]},{level:2,title:"Darkmode",slug:"darkmode",children:[]},{level:2,title:"Box Shadow",slug:"box-shadow",children:[]},{level:2,title:"More",slug:"more",children:[]}],filePathRelative:"en/guide/client/style.md",git:{updatedTime:1622293615e3,contributors:[]}}},7402:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>i});var t=s(8917);const o=(0,t.uE)('<h1 id="custom-style"><a class="header-anchor" href="#custom-style">#</a> Custom style</h1><p><code>@waline/client</code> provides some CSS variables. You can easily configure the style of waline through these variables:</p><p>Meanwhile, <code>@waline/client</code> also brings built-in dark mode support.</p><h2 id="variables"><a class="header-anchor" href="#variables">#</a> Variables</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Font Size */</span>\n  <span class="token property">--waline-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Regular color */</span>\n  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Theme Color */</span>\n  <span class="token property">--waline-theme-color</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>\n  <span class="token property">--waline-active-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Layout Color */</span>\n  <span class="token property">--waline-text-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>\n  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>\n  <span class="token property">--waline-code-bgcolor</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Special Color */</span>\n  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Avatar */</span>\n  <span class="token property">--waline-avatar-size</span><span class="token punctuation">:</span> 3.25rem<span class="token punctuation">;</span>\n  <span class="token property">--waline-mobile-avatar-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--waline-avatar-size<span class="token punctuation">)</span> * 9 / 13<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token comment">/* Badge */</span>\n  <span class="token property">--waline-badge-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>\n  <span class="token property">--waline-badge-font-size</span><span class="token punctuation">:</span> 0.775em<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Information */</span>\n  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-font-size</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Render choise */</span>\n  <span class="token property">--waline-border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--waline-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--waline-avatar-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>\n  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="darkmode"><a class="header-anchor" href="#darkmode">#</a> Darkmode</h2><p>When using the <code>dark</code> option to configure the dark mode, waline will use the following colors by default:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* ↓ According to user settings */</span>\n<span class="token selector">darkmode-selector</span> <span class="token punctuation">{</span>\n  <span class="token comment">/* Regular color */</span>\n  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Layout color */</span>\n  <span class="token property">--waline-text-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>\n  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>\n  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Special color */</span>\n  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n\n  <span class="token comment">/* Other color */</span>\n  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>\n  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>If the above colors are different from the darkmode palette of your site, you can override them instead of setting the <code>dark</code> option.</p><h2 id="box-shadow"><a class="header-anchor" href="#box-shadow">#</a> Box Shadow</h2><p>If you are using a theme that uses shadows (<code>box-shadow</code>) instead of borders, you can modify the display effect of Waline by modifying <code>--waline-border</code> and <code>--waline-box-shadow</code>, e.g.:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>\n  <span class="token property">--waline-border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>\n  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px <span class="token function">rgb</span><span class="token punctuation">(</span>134 151 168 / 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>\n  <span class="token selector">body</span> <span class="token punctuation">{</span>\n    <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px #0f0e0d<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div><h2 id="more"><a class="header-anchor" href="#more">#</a> More</h2><p>If the above CSS variables cannot meet your custom requirements for Waline styles, you can also:</p>',14),e=(0,t.Wm)("li",null,"Manually add a CSS file to override Waline's default style",-1),p=(0,t.Uk)("Import the unstyled version of Waline, see "),c=(0,t.Uk)("Waline import"),l=(0,t.Uk)(" for details"),i={render:function(n,a){const s=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[o,(0,t.Wm)("ul",null,[e,(0,t.Wm)("li",null,[p,(0,t.Wm)(s,{to:"/en/guide/client/import.html"},{default:(0,t.w5)((()=>[c])),_:1}),l])])],64)}}}}]);