import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as e,a as t,b as n,e as p,d as l}from"./app-27KP_MLa.js";const o={},i=n("p",null,[n("code",null,"@waline/client"),p(" provides some CSS variables. You can easily configure the style of waline through these variables.")],-1),c=l(`<h2 id="css-variables-name-and-default-values" tabindex="-1"><a class="header-anchor" href="#css-variables-name-and-default-values"><span>CSS Variables Name and Default Values</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">:root</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Font Size */</span>
  <span class="token property">--waline-font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>

  <span class="token comment">/* Regular color */</span>
  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>

  <span class="token comment">/* Theme Color */</span>
  <span class="token property">--waline-theme-color</span><span class="token punctuation">:</span> #27ae60<span class="token punctuation">;</span>
  <span class="token property">--waline-active-color</span><span class="token punctuation">:</span> #2ecc71<span class="token punctuation">;</span>

  <span class="token comment">/* Layout Color */</span>
  <span class="token property">--waline-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color-light</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color-hover</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>
  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #ddd<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-bg-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #bbb<span class="token punctuation">;</span>
  <span class="token property">--waline-code-bg-color</span><span class="token punctuation">:</span> #282c34<span class="token punctuation">;</span>

  <span class="token comment">/* Special Color */</span>
  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #f0f0f0<span class="token punctuation">;</span>

  <span class="token comment">/* Avatar */</span>
  <span class="token property">--waline-avatar-size</span><span class="token punctuation">:</span> 3.25rem<span class="token punctuation">;</span>
  <span class="token property">--waline-m-avatar-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--waline-avatar-size<span class="token punctuation">)</span> * 9 / 13<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">/* Badge */</span>
  <span class="token property">--waline-badge-color</span><span class="token punctuation">:</span> #3498db<span class="token punctuation">;</span>
  <span class="token property">--waline-badge-font-size</span><span class="token punctuation">:</span> 0.775em<span class="token punctuation">;</span>

  <span class="token comment">/* Information */</span>
  <span class="token property">--waline-info-bg-color</span><span class="token punctuation">:</span> #f8f8f8<span class="token punctuation">;</span>
  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>
  <span class="token property">--waline-info-font-size</span><span class="token punctuation">:</span> 0.625em<span class="token punctuation">;</span>

  <span class="token comment">/* Render choice */</span>
  <span class="token property">--waline-border</span><span class="token punctuation">:</span> 1px solid <span class="token function">var</span><span class="token punctuation">(</span>--waline-border-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--waline-avatar-radius</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token property">--waline-box-shadow</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* ↓ Based on user settings */</span>
<span class="token selector">darkmode-selector</span> <span class="token punctuation">{</span>
  <span class="token comment">/* Regular color */</span>
  <span class="token property">--waline-white</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
  <span class="token property">--waline-light-grey</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
  <span class="token property">--waline-dark-grey</span><span class="token punctuation">:</span> #999<span class="token punctuation">;</span>

  <span class="token comment">/* Layout color */</span>
  <span class="token property">--waline-color</span><span class="token punctuation">:</span> #888<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color</span><span class="token punctuation">:</span> #1e1e1e<span class="token punctuation">;</span>
  <span class="token property">--waline-bg-color-light</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>
  <span class="token property">--waline-border-color</span><span class="token punctuation">:</span> #333<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-bg-color</span><span class="token punctuation">:</span> #444<span class="token punctuation">;</span>
  <span class="token property">--waline-disable-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>

  <span class="token comment">/* Special color */</span>
  <span class="token property">--waline-bq-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>

  <span class="token comment">/* Other color */</span>
  <span class="token property">--waline-info-bg-color</span><span class="token punctuation">:</span> #272727<span class="token punctuation">;</span>
  <span class="token property">--waline-info-color</span><span class="token punctuation">:</span> #666<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function r(u,d){return a(),e("div",null,[i,t(" more "),c])}const k=s(o,[["render",r],["__file","style.html.vue"]]),b=JSON.parse('{"path":"/en/reference/client/style.html","title":"CSS variable","lang":"en-US","frontmatter":{"title":"CSS variable","icon":"style","description":"@waline/client provides some CSS variables. You can easily configure the style of waline through these variables. CSS Variables Name and Default Values ","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/reference/client/style.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/reference/client/style.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"CSS variable"}],["meta",{"property":"og:description","content":"@waline/client provides some CSS variables. You can easily configure the style of waline through these variables. CSS Variables Name and Default Values "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-31T08:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T08:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS variable\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-31T08:08:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CSS Variables Name and Default Values","slug":"css-variables-name-and-default-values","link":"#css-variables-name-and-default-values","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1698739723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.84,"words":253},"filePathRelative":"en/reference/client/style.md","localizedDate":"November 30, 2022","autoDesc":true}');export{k as comp,b as data};
