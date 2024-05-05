import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,a as e}from"./app-DKvEX54J.js";const t={},p=e(`<p><code>@waline/client</code> 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。</p><h2 id="提供的变量与默认值" tabindex="-1"><a class="header-anchor" href="#提供的变量与默认值"><span>提供的变量与默认值</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 字体大小 */</span>
  <span class="token property">--waline-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

  <span class="token comment">/* 常规颜色 */</span>
  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>

  <span class="token comment">/* 主题色 */</span>
  <span class="token property">--waline-theme-color</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
  <span class="token property">--waline-active-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>

  <span class="token comment">/* 布局颜色 */</span>
  <span class="token property">--waline-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>
  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-bg-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
  <span class="token property">--waline-code-bg-color</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>

  <span class="token comment">/* 特殊颜色 */</span>
  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>

  <span class="token comment">/* 头像 */</span>
  <span class="token property">--waline-avatar-size</span><span class="token punctuation">:</span> 3.25rem<span class="token punctuation">;</span>
  <span class="token property">--waline-m-avatar-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--waline-avatar-size<span class="token punctuation">)</span> * 9 / 13<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* 徽章 */</span>
  <span class="token property">--waline-badge-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token property">--waline-badge-font-size</span><span class="token punctuation">:</span> 0.775em<span class="token punctuation">;</span>

  <span class="token comment">/* 信息 */</span>
  <span class="token property">--waline-info-bg-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">--waline-info-font-size</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>

  <span class="token comment">/* 渲染选择 */</span>
  <span class="token property">--waline-border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--waline-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--waline-avatar-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 根据用户设置 ↓ */</span>
<span class="token selector">darkmode-selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/* 常规颜色 */</span>
  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>

  <span class="token comment">/* 布局颜色 */</span>
  <span class="token property">--waline-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color-light</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>
  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-bg-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>

  <span class="token comment">/* 特殊颜色 */</span>
  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>

  <span class="token comment">/* 其他颜色 */</span>
  <span class="token property">--waline-info-bg-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>
  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[p];function i(l,c){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","style.html.vue"]]),v=JSON.parse('{"path":"/reference/client/style.html","title":"CSS 变量","lang":"zh-CN","frontmatter":{"title":"CSS 变量","icon":"style","description":"@waline/client 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。 提供的变量与默认值","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/reference/client/style.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/reference/client/style.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"CSS 变量"}],["meta",{"property":"og:description","content":"@waline/client 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。 提供的变量与默认值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-31T08:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T08:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS 变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-31T08:08:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"提供的变量与默认值","slug":"提供的变量与默认值","link":"#提供的变量与默认值","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1698739723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"reference/client/style.md","localizedDate":"2022年11月30日","autoDesc":true}');export{d as comp,v as data};
