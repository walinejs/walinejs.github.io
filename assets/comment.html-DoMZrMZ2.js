import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as e}from"./app-BZeIcON_.js";const i={},t=e(`<p>Waline supports displaying the number of comments separately in the non-comment area.</p><h2 id="automatically-update" tabindex="-1"><a class="header-anchor" href="#automatically-update"><span>Automatically Update</span></a></h2><p>You can enable comment counting in the <code>init</code> function by setting the <code>comment</code> option to <code>true</code>.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">init</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/waline.js&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  init</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    el</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;#waline&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // ...</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    comment</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">true</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// enable comment counting</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Waline will try to fill in or update comment count whenever you called <code>init</code> function or update the path.</p><p>waline finds the elements having <code>waline-comment-count</code> class in the page, and get their <code>data-path</code> attribute as the query condition. And fill it with the obtained value:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">&lt;!-- data-path will be the query condition --&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">span</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> data-path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="color:#B31D28;--shiki-dark:#FFFFFF;font-style:italic;--shiki-dark-font-style:inherit;">&lt;</span><span style="color:#032F62;--shiki-dark:#98C379;">Your/Path/Name&gt;&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> class</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;waline-comment-count&quot;</span><span style="color:#B31D28;--shiki-dark:#FFFFFF;font-style:italic;--shiki-dark-font-style:inherit;"> /</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt; comments</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If you need a different selector, you can set the <code>comment</code> option to that selector.</p><p>Every time you call <code>WalineInstance.update()</code>, Waline will search the page content and automatically update the comment count.</p><div class="hint-container tip"><p class="hint-container-title">Examples</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">The current page has</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">span</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> class</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;waline-comment-count&quot;</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> data-path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;/en/cookbook/comment&quot;</span><span style="color:#B31D28;--shiki-dark:#FFFFFF;font-style:italic;--shiki-dark-font-style:inherit;"> /</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">comments.</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The current page has <span data-path="/en/cookbook/comment" class="waline-comment-count"></span> comments.</p></div><h2 id="manual-update" tabindex="-1"><a class="header-anchor" href="#manual-update"><span>Manual Update</span></a></h2><p>Besides automatically update via the <code>init</code> function, you can manually update the current page&#39;s comment count via the <code>commentCount</code> API:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/comment.js&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    serverURL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // optional, for custom selectors, defaults to \`&#39;.waline-pageview-count&#39;\`</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // selector: &#39;.waline-pageview-count&#39;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Aborting</p><p>Since the comment count fetch is an asynchronous network operation, you may need to cancel an ongoing comment count update operation in certain circumstances.</p><p><code>commentCount</code> returns a function that can be called to cancel the update:</p><div class="language-js line-numbers-mode" data-ext="js" data-title="js"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">const</span><span style="color:#005CC5;--shiki-dark:#E5C07B;"> abort</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#E5C07B;"> Waline</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  serverURL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;&lt;YOUR_SERVER_URL&gt;&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">  path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#24292E;--shiki-dark:#E5C07B;">window</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E5C07B;">location</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">pathname</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">// After 500ms, if the network request has not been completed, cancel this operation</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">setTimeout</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(() </span><span style="color:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;"> abort</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(), </span><span style="color:#005CC5;--shiki-dark:#D19A66;">500</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="import-counter-only" tabindex="-1"><a class="header-anchor" href="#import-counter-only"><span>Import Counter Only</span></a></h2><p>Sometimes, you may want to display the comment count of some pages in the article list or homepage, but do not want to load the entire Waline. At this point you can use a Gzip &lt; 1KB <code>comment</code> module:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/comment.js&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  commentCount</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    serverURL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    path</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // optional, for custom selectors, defaults to \`&#39;.waline-pageview-count&#39;\`</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    // selector: &#39;.waline-pageview-count&#39;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),l=[t];function o(r,p){return a(),n("div",null,l)}const k=s(i,[["render",o],["__file","comment.html.vue"]]),h=JSON.parse('{"path":"/en/guide/features/comment.html","title":"Comment Counter","lang":"en-US","frontmatter":{"title":"Comment Counter","icon":"counter","redirectFrom":"/en/guide/client/comment.html","description":"Waline supports displaying the number of comments separately in the non-comment area. Automatically Update You can enable comment counting in the init function by setting the co...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/features/comment.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/features/comment.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Comment Counter"}],["meta",{"property":"og:description","content":"Waline supports displaying the number of comments separately in the non-comment area. Automatically Update You can enable comment counting in the init function by setting the co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-07T15:40:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T15:40:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Comment Counter\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-07T15:40:02.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Automatically Update","slug":"automatically-update","link":"#automatically-update","children":[]},{"level":2,"title":"Manual Update","slug":"manual-update","link":"#manual-update","children":[]},{"level":2,"title":"Import Counter Only","slug":"import-counter-only","link":"#import-counter-only","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1704642002000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"en/guide/features/comment.md","localizedDate":"November 30, 2022","autoDesc":true}');export{k as comp,h as data};
