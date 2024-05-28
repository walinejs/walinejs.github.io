import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as i}from"./app-BZeIcON_.js";const l={},e=i(`<p><code>@waline/client</code> 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。</p><h2 id="提供的变量与默认值" tabindex="-1"><a class="header-anchor" href="#提供的变量与默认值"><span>提供的变量与默认值</span></a></h2><div class="language-css line-numbers-mode" data-ext="css" data-title="css"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#56B6C2;">:root</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 字体大小 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-font-size</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">16</span><span style="color:#D73A49;--shiki-dark:#E06C75;">px</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 常规颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-white</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#fff</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-light-grey</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#999</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-dark-grey</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#666</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 主题色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-theme-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#27ae60</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-active-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#2ecc71</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 布局颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#444</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#fff</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bg-color-light</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#f8f8f8</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bg-color-hover</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#f0f0f0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-border-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#ddd</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-disable-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#f8f8f8</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-disable-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#bbb</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-code-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#282c34</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 特殊颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bq-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#f0f0f0</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 头像 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-avatar-size</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">3.25</span><span style="color:#D73A49;--shiki-dark:#E06C75;">rem</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-m-avatar-size</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#56B6C2;">calc</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#005CC5;--shiki-dark:#56B6C2;">var</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#E36209;--shiki-dark:#E06C75;">--waline-avatar-size</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 9</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> /</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> 13</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 徽章 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-badge-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#3498db</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-badge-font-size</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">0.775</span><span style="color:#D73A49;--shiki-dark:#E06C75;">em</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 信息 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-info-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#f8f8f8</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-info-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#999</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-info-font-size</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">0.625</span><span style="color:#D73A49;--shiki-dark:#E06C75;">em</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 渲染选择 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-border</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">1</span><span style="color:#D73A49;--shiki-dark:#E06C75;">px</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> solid</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> var</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#E36209;--shiki-dark:#E06C75;">--waline-border-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-avatar-radius</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">50</span><span style="color:#D73A49;--shiki-dark:#E06C75;">%</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-box-shadow</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">none</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">/* 根据用户设置 ↓ */</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">darkmode-selector</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 常规颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-white</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#000</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-light-grey</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#666</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-dark-grey</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#999</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 布局颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#888</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#1e1e1e</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bg-color-light</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#272727</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-border-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#333</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-disable-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#444</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-disable-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#272727</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 特殊颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-bq-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#272727</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  /* 其他颜色 */</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-info-bg-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#272727</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#E36209;--shiki-dark:#E06C75;">  --waline-info-color</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">#666</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),r=[e];function o(p,c){return a(),n("div",null,r)}const d=s(l,[["render",o],["__file","style.html.vue"]]),h=JSON.parse('{"path":"/reference/client/style.html","title":"CSS 变量","lang":"zh-CN","frontmatter":{"title":"CSS 变量","icon":"style","description":"@waline/client 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。 提供的变量与默认值","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/reference/client/style.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/reference/client/style.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"CSS 变量"}],["meta",{"property":"og:description","content":"@waline/client 提供了一些 CSS 变量。你可以很轻松的通过这些变量配置 waline 的样式。 提供的变量与默认值"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-10-31T08:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T08:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"CSS 变量\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-31T08:08:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"提供的变量与默认值","slug":"提供的变量与默认值","link":"#提供的变量与默认值","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1698739723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.98,"words":293},"filePathRelative":"reference/client/style.md","localizedDate":"2022年11月30日","autoDesc":true}');export{d as comp,h as data};
