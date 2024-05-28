import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as e,c as a,a as n}from"./app-BZeIcON_.js";const i={},t=n(`<p>Waline supports displaying recent comments by widget, which is convenient for displaying the latest comments in the sidebar of the blog.</p><h2 id="component-options" tabindex="-1"><a class="header-anchor" href="#component-options"><span>Component options</span></a></h2><p>The latest comment widget is named <code>RecentComments</code> and contains three options:</p><ul><li><code>el</code> (optional): the element to be mounted</li><li><code>serverURL</code>: server link</li><li><code>count</code> The number of recent comments needed to get</li></ul><p>The data format returned by the component should be <code>Promise&lt;{ comment: WalineComment[], destroy: () =&gt; void }&gt;</code>.</p><ul><li><code>comment</code> property: an array of the most recent comments with exact number of <code>count</code></li><li><code>destroy</code> method: a function which will destroy the widget</li></ul><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage"><span>Basic usage</span></a></h2><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">div</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;waline-recent&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">div</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">RecentComments</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://cdn.jsdelivr.net/npm/@waline/client/dist/waline.mjs&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  RecentComments</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    el</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;#waline-recent&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    serverURL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;http://waline.vercel.app&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    count</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">10</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>This will be rendered on <code>#waline-recent</code> using the default style.</p></div><h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage"><span>Advanced usage</span></a></h2><p>If you are not satisfied with the default output format, you can call the component by omitting the <code>el</code> option to get the data and render it yourself.</p><p>Example:</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">div</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;waline-recent&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">div</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="color:#24292E;--shiki-dark:#E06C75;">RecentComments</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="color:#D73A49;--shiki-dark:#C678DD;">from</span><span style="color:#032F62;--shiki-dark:#98C379;"> &#39;https://cdn.jsdelivr.net/npm/@waline/client/dist/waline.mjs&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">  RecentComments</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    serverURL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;http://waline.vercel.app&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E06C75;">    count</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#005CC5;--shiki-dark:#D19A66;">10</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }).</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">then</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(({ </span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">comments</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> }) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#E5C07B;">    document</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">getElementById</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;waline-recent&#39;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="color:#24292E;--shiki-dark:#E06C75;">innerHTML</span><span style="color:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="color:#24292E;--shiki-dark:#E5C07B;"> comments</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="color:#6F42C1;--shiki-dark:#61AFEF;">map</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">      (</span><span style="color:#E36209;--shiki-dark:#E06C75;font-style:inherit;--shiki-dark-font-style:italic;">comment</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="color:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="color:#032F62;--shiki-dark:#98C379;"> \`</span><span style="color:#032F62;--shiki-dark:#C678DD;">\${</span><span style="color:#24292E;--shiki-dark:#E5C07B;">comment</span><span style="color:#032F62;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">nick</span><span style="color:#032F62;--shiki-dark:#C678DD;">}</span><span style="color:#032F62;--shiki-dark:#98C379;">: </span><span style="color:#032F62;--shiki-dark:#C678DD;">\${</span><span style="color:#24292E;--shiki-dark:#E5C07B;">comment</span><span style="color:#032F62;--shiki-dark:#ABB2BF;">.</span><span style="color:#24292E;--shiki-dark:#E06C75;">comment</span><span style="color:#032F62;--shiki-dark:#C678DD;">}</span><span style="color:#032F62;--shiki-dark:#98C379;">\`</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    );</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="color:#22863A;--shiki-dark:#E06C75;">script</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[t];function o(r,p){return e(),a("div",null,l)}const k=s(i,[["render",o],["__file","recent-comment.html.vue"]]),h=JSON.parse('{"path":"/en/guide/features/widget/recent-comment.html","title":"Recent comment Widget","lang":"en-US","frontmatter":{"title":"Recent comment Widget","icon":"recent","redirectFrom":"/en/guide/client/widget/recent-comment.html","description":"Waline supports displaying recent comments by widget, which is convenient for displaying the latest comments in the sidebar of the blog. Component options The latest comment wid...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/features/widget/recent-comment.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/features/widget/recent-comment.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Recent comment Widget"}],["meta",{"property":"og:description","content":"Waline supports displaying recent comments by widget, which is convenient for displaying the latest comments in the sidebar of the blog. Component options The latest comment wid..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-29T05:05:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T05:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Recent comment Widget\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T05:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Component options","slug":"component-options","link":"#component-options","children":[]},{"level":2,"title":"Basic usage","slug":"basic-usage","link":"#basic-usage","children":[]},{"level":2,"title":"Advanced usage","slug":"advanced-usage","link":"#advanced-usage","children":[]}],"git":{"createdTime":1622293615000,"updatedTime":1693285544000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":0.67,"words":201},"filePathRelative":"en/guide/features/widget/recent-comment.md","localizedDate":"May 29, 2021","autoDesc":true}');export{k as comp,h as data};
