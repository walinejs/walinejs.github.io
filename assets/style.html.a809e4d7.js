import{_ as t,r as o,o as e,c,a as n,b as l,w as i,F as u,e as a,d as s}from"./app.cbeadb98.js";const r={},k=a(`<p><code>@waline/client</code> \u63D0\u4F9B\u4E86\u4E00\u4E9B CSS \u53D8\u91CF\u3002\u4F60\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u901A\u8FC7\u8FD9\u4E9B\u53D8\u91CF\u914D\u7F6E waline \u7684\u6837\u5F0F\u3002</p><p>\u540C\u65F6 <code>@waline/client</code> \u8FD8\u62E5\u6709\u5185\u7F6E\u7684\u6697\u9ED1\u6A21\u5F0F\u652F\u6301\u3002</p><h2 id="\u63D0\u4F9B\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4F9B\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u63D0\u4F9B\u7684\u53D8\u91CF</h2><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5B57\u4F53\u5927\u5C0F */</span>
  <span class="token property">--waline-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

  <span class="token comment">/* \u5E38\u89C4\u989C\u8272 */</span>
  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>

  <span class="token comment">/* \u4E3B\u9898\u8272 */</span>
  <span class="token property">--waline-theme-color</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
  <span class="token property">--waline-active-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>

  <span class="token comment">/* \u5E03\u5C40\u989C\u8272 */</span>
  <span class="token property">--waline-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-bgcolor-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>
  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
  <span class="token property">--waline-code-bgcolor</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>

  <span class="token comment">/* \u7279\u6B8A\u989C\u8272 */</span>
  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>

  <span class="token comment">/* \u5934\u50CF */</span>
  <span class="token property">--waline-avatar-size</span><span class="token punctuation">:</span> 3.25rem<span class="token punctuation">;</span>
  <span class="token property">--waline-m-avatar-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--waline-avatar-size<span class="token punctuation">)</span> * 9 / 13<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* \u5FBD\u7AE0 */</span>
  <span class="token property">--waline-badge-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token property">--waline-badge-font-size</span><span class="token punctuation">:</span> 0.775em<span class="token punctuation">;</span>

  <span class="token comment">/* \u4FE1\u606F */</span>
  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">--waline-info-font-size</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>

  <span class="token comment">/* \u6E32\u67D3\u9009\u62E9 */</span>
  <span class="token property">--waline-border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--waline-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--waline-avatar-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u6697\u9ED1\u6A21\u5F0F\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6697\u9ED1\u6A21\u5F0F\u652F\u6301" aria-hidden="true">#</a> \u6697\u9ED1\u6A21\u5F0F\u652F\u6301</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>dark</code> \u9009\u9879\u6765\u542F\u7528 Waline \u7684\u6697\u9ED1\u6A21\u5F0F\u652F\u6301\u3002</p><p>\u901A\u5E38\u7F51\u7AD9\u4F1A\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u542F\u7528\u6697\u9ED1\u6A21\u5F0F\u652F\u6301:</p><ul><li>\u4F7F\u7528 <code>@media</code> \u9009\u62E9\u5668\u901A\u8FC7 <code>prefers-color-scheme</code> \u6765\u6839\u636E\u8BBE\u5907\u989C\u8272\u6A21\u5F0F\u72B6\u6001\u81EA\u52A8\u5207\u6362</li><li>\u901A\u8FC7\u4FEE\u6539 dom \u6839\u5143\u7D20 (<code>html</code> \u6216 <code>body</code>) \u7684\u5C5E\u6027\u4E0E class \u6765\u52A8\u6001\u5E94\u7528\u6216\u53D6\u6D88\u6697\u9ED1\u6A21\u5F0F\u7684\u989C\u8272\u6837\u5F0F\u3002</li></ul><p>\u5982\u679C\u4F60\u5728\u7B2C\u4E00\u79CD\u65B9\u5F0F\u7684\u7AD9\u70B9\u4E0A\u542F\u7528 Waline\uFF0C\u4F60\u53EA\u9700\u5C06 <code>dark</code> \u8BBE\u7F6E\u4E3A <code>&#39;auto&#39;</code>\u3002</p><p>\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u7AD9\u70B9\uFF0C\u4F60\u9700\u8981\u5C06 dark \u8BBE\u7F6E\u4E3A\u4EE4\u6697\u9ED1\u6A21\u5F0F\u751F\u6548\u7684 CSS \u9009\u62E9\u5668\u3002\u4EE5\u4E0B\u662F\u51E0\u4E2A\u4F8B\u5B50</p><div class="custom-container tip"><p class="custom-container-title">\u4E0D\u540C\u4E3B\u9898\u7684\u4F8B\u5B50</p><ul><li><p><strong>vuepress-theme-hope v2</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-theme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>\u3002</p></li><li><p><strong>hexo-theme-fluid</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-user-color-scheme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\u3002\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>\u3002</p></li></ul></div><h3 id="\u591C\u95F4\u6A21\u5F0F\u9ED8\u8BA4\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u591C\u95F4\u6A21\u5F0F\u9ED8\u8BA4\u989C\u8272" aria-hidden="true">#</a> \u591C\u95F4\u6A21\u5F0F\u9ED8\u8BA4\u989C\u8272</h3><p>\u5728\u4F7F\u7528 <code>dark</code> \u9009\u9879\u914D\u7F6E\u6697\u9ED1\u6A21\u5F0F\u65F6\uFF0Cwaline \u4F1A\u9ED8\u8BA4\u4F7F\u7528\u4EE5\u4E0B\u989C\u8272:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* \u6839\u636E\u7528\u6237\u8BBE\u7F6E \u2193 */</span>
<span class="token selector">darkmode-selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5E38\u89C4\u989C\u8272 */</span>
  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>

  <span class="token comment">/* \u5E03\u5C40\u989C\u8272 */</span>
  <span class="token property">--waline-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
  <span class="token property">--waline-bgcolor</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>
  <span class="token property">--waline-bgcolor-light</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>
  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-bgcolor</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>

  <span class="token comment">/* \u7279\u6B8A\u989C\u8272 */</span>
  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>

  <span class="token comment">/* \u5176\u4ED6\u989C\u8272 */</span>
  <span class="token property">--waline-info-bgcolor</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>
  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u5982\u679C\u4E0A\u8FF0\u989C\u8272\u4E0E\u4F60\u7684\u7AD9\u70B9\u591C\u95F4\u6A21\u5F0F\u989C\u8272\u4E0D\u540C\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u624B\u52A8\u6DFB\u52A0 CSS \u5E76\u81EA\u884C\u8986\u76D6\u4ED6\u4EEC\u3002</p><h2 id="\u9634\u5F71\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71\u6837\u5F0F" aria-hidden="true">#</a> \u9634\u5F71\u6837\u5F0F</h2><p>\u5982\u679C\u4F60\u5728\u4F7F\u7528\u4E00\u4E2A\u5927\u91CF\u8FD0\u7528\u9634\u5F71 (<code>box-shadow</code>) \u7684\u4E3B\u9898\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 <code>--waline-border</code> \u548C <code>--waline-box-shadow</code> \u6765\u66F4\u6539 Waline \u7684\u663E\u793A\u6548\u679C\uFF0C\u5982:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token property">--waline-border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px <span class="token function">rgb</span><span class="token punctuation">(</span>134 151 168 / 25%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">prefers-color-scheme</span><span class="token punctuation">:</span> dark<span class="token punctuation">)</span></span> <span class="token punctuation">{</span>
  <span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> 0 12px 40px #0f0e0d<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h2><p>\u5982\u679C\u4E0A\u9762\u7684 CSS \u53D8\u91CF\u65E0\u6CD5\u6EE1\u8DB3\u4F60\u5BF9 Waline \u6837\u5F0F\u7684\u5B9A\u5236\u8981\u6C42\uFF0C\u4F60\u8FD8\u53EF\u4EE5:</p>`,20),d=a('<li><p>\u624B\u52A8\u6DFB\u52A0 CSS \u5BF9 Waline \u7684\u9ED8\u8BA4\u6837\u5F0F\u8FDB\u884C\u8986\u76D6</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u6CE8\u610F\uFF0C\u7531\u4E8E Waline \u662F\u4E00\u4E2A\u7EAF JS \u7684\u5305\uFF0C\u5B83\u4F1A\u5728\u8FD0\u884C\u65F6\u5C06\u6837\u5F0F\u6CE8\u5165\u5230\u7F51\u9875\u7684 <code>&lt;head&gt;</code> \u4E2D\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u60F3\u8986\u76D6\u6837\u5F0F\uFF0C\u8BF7\u6CE8\u610F\u4F60\u7684 CSS \u88AB\u6CE8\u5165\u7684\u4F4D\u7F6E\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u6253\u5305\u5DE5\u5177\uFF0C\u4F60\u7684\u6837\u5F0F\u5F88\u5927\u4F1A\u6253\u5305\u4E3A\u5916\u7F6E css \u5E76\u5728 <code>&lt;head&gt;</code> \u4E2D\u5F15\u5165\uFF0C\u8FD9\u610F\u5473\u7740 Waline \u540E\u6CE8\u5165\u7684\u6837\u5F0F\u5C06\u5728\u4F60 CSS \u7684\u540E\u9762\u3002</p><p>\u6240\u4EE5\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u4F7F\u7528\u66F4\u9AD8\u4F18\u5148\u7EA7\u7684\u9009\u62E9\u5668\uFF0C\u6216\u8005\u5C06 <code>&lt;style&gt;</code> \u6807\u7B7E\u653E\u7F6E\u5728 body \u4E2D\u3002</p></div></li>',1),h=s("\u5F15\u5165 Waline \u7684\u65E0\u6837\u5F0F\u7248\u672C\uFF0C\u8BE6\u89C1 "),m=s("Waline \u5F15\u5165");function w(y,f){const p=o("RouterLink");return e(),c(u,null,[k,n("ul",null,[d,n("li",null,[n("p",null,[h,l(p,{to:"/guide/client/import.html"},{default:i(()=>[m]),_:1})])])])],64)}var b=t(r,[["render",w],["__file","style.html.vue"]]);export{b as default};
