import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as i}from"./app-BZeIcON_.js";const e={},l=i(`<p>本教程引导你如何使用 CDN 导入 Waline。</p><p>对于国内用户，我们推荐使用 <a href="https://unpkg.com/@waline/client" target="_blank" rel="noopener noreferrer">unpkg</a>。对于国外用户，我们推荐使用 jsDelivr。</p><p>为了让 Waline SSR 友好，我们在 V2 版本中拆分了 Waline 的样式。这意味着，你需要导入 Waline 的 CSS 样式文件，并导入 Waline 脚本文件并调用 Waline。</p><h2 id="评论功能" tabindex="-1"><a class="header-anchor" href="#评论功能"><span>评论功能</span></a></h2><p>通常情况下，你希望 Waline 渲染评论列表，你可以按照如下方式引入 Waline:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 样式文件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">link</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#D19A66;">  rel</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#D19A66;">  href</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;https://unpkg.com/@waline/client@v3/dist/waline.css&quot;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- 脚本文件 --&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">init</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/waline.js&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  init</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // options</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览量和评论数" tabindex="-1"><a class="header-anchor" href="#浏览量和评论数"><span>浏览量和评论数</span></a></h2><p>有些时候，你可能希望在主页或文章列表显示文章的浏览量和评论数，但是不需要加载评论组件，那么你可以通过下列方式引入一个 Gzip &lt; 1KB 的脚本文件:</p><p>浏览量:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">pageviewCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/pageview.js&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  pageviewCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // options</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>评论数:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/comment.js&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // options</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多"><span>更多</span></a></h2><div class="hint-container info"><p class="hint-container-title">指定版本</p><p>你可能已经注意到，上述案例中，我们都在 <code>@waline/client</code> 后显式声明了 <code>@v2</code> 版本，这是推荐的，因为这能有效避免日后 Waline 客户端发布 V3 版本后，导致你的网站工作异常。</p></div>`,14),t=[l];function o(r,p){return a(),n("div",null,t)}const k=s(e,[["render",o],["__file","cdn.html.vue"]]),h=JSON.parse('{"path":"/cookbook/import/cdn.html","title":"通过 CDN 导入 Waline","lang":"zh-CN","frontmatter":{"title":"通过 CDN 导入 Waline","icon":"import","description":"本教程引导你如何使用 CDN 导入 Waline。 对于国内用户，我们推荐使用 unpkg。对于国外用户，我们推荐使用 jsDelivr。 为了让 Waline SSR 友好，我们在 V2 版本中拆分了 Waline 的样式。这意味着，你需要导入 Waline 的 CSS 样式文件，并导入 Waline 脚本文件并调用 Waline。 评论功能 通常情...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/cookbook/import/cdn.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/cookbook/import/cdn.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"通过 CDN 导入 Waline"}],["meta",{"property":"og:description","content":"本教程引导你如何使用 CDN 导入 Waline。 对于国内用户，我们推荐使用 unpkg。对于国外用户，我们推荐使用 jsDelivr。 为了让 Waline SSR 友好，我们在 V2 版本中拆分了 Waline 的样式。这意味着，你需要导入 Waline 的 CSS 样式文件，并导入 Waline 脚本文件并调用 Waline。 评论功能 通常情..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-07T15:40:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T15:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"通过 CDN 导入 Waline\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-07T15:40:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"评论功能","slug":"评论功能","link":"#评论功能","children":[]},{"level":2,"title":"浏览量和评论数","slug":"浏览量和评论数","link":"#浏览量和评论数","children":[]},{"level":2,"title":"更多","slug":"更多","link":"#更多","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1704642002000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1},{"name":"Wmz1024","email":"82153828+wmz1024@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"cookbook/import/cdn.md","localizedDate":"2022年11月30日","autoDesc":true}');export{k as comp,h as data};
