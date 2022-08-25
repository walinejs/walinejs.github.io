import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as o,a as p,b as c,w as l,e as a,d as n,r as i}from"./app.1e5d81a1.js";const r={},u=a(`<h2 id="\u5BA2\u6237\u7AEF-api" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF-api" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF API</h2><p>Waline \u63D0\u4F9B\u4E09\u4E2A API:</p><ul><li><p><code>init</code>: \u521D\u59CB\u5316 Waline</p></li><li><p><code>commentCount</code>: \u8BC4\u8BBA\u6570\u7EDF\u8BA1</p></li><li><p><code>pageviewCount</code>: \u8BBF\u95EE\u91CF\u7EDF\u8BA1</p></li></ul><p>\u4EE5\u53CA:</p><ul><li><p><code>RecentComment</code>: \u6700\u8FD1\u8BC4\u8BBA</p></li><li><p><code>version: string</code>: Waline \u5BA2\u6237\u7AEF\u7248\u672C</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p><code>init</code> \u51FD\u6570\u63A5\u6536\u4E00\u4E2A <code>WalineInitOptions</code> \u521D\u59CB\u5316\u9009\u9879\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A <code>WalineInstance</code>\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineInitOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineInstance<span class="token punctuation">;</span>
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineInstance</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline \u88AB\u6302\u8F7D\u5230\u7684\u5143\u7D20
   *
   * <span class="token keyword">@description</span> \u5F53\u901A\u8FC7 \`el: null\` \u521D\u59CB\u5316\uFF0C\u503C\u4E3A \`null\`
   */</span>
  el<span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u66F4\u65B0 Waline \u5B9E\u4F8B
   *
   * <span class="token keyword">@description</span> \u53EA\u8981\u4E0D\u8BBE\u7F6E\`path\` \u9009\u9879\uFF0C\u66F4\u65B0\u65F6\u5B83\u5C31\u4F1A\u88AB\u91CD\u7F6E\u4E3A \`windows.location.pathname\`
   */</span>
  update<span class="token operator">:</span> <span class="token punctuation">(</span>newOptions<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>WalineInitOptions<span class="token punctuation">,</span> <span class="token string">&#39;el&#39;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u53D6\u6D88\u6302\u8F7D\u5E76\u6467\u6BC1 Waline \u5B9E\u4F8B
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),d=n("\u521D\u59CB\u5316\u9009\u9879\u63A5\u53D7\u6240\u6709 "),k=n("Waline \u7EC4\u4EF6"),m=n(" \u652F\u6301\u7684\u9009\u9879\uFF0C\u6B64\u5916\uFF0C\u65B0\u589E\u4E0B\u5217\u9009\u9879\u3002"),g=a(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h3><ul><li>\u7C7B\u578B: <code>string | HTMLElement | null</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;#waline&#39;</code></li></ul><p>Waline \u7684\u521D\u59CB\u5316\u6302\u8F7D\u5668\u3002\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u7684 <strong>CSS \u9009\u62E9\u5668</strong> \u6216 HTMLELement \u5BF9\u8C61\u3002</p><p>\u5982\u679C\u4F60\u53EA\u9700\u8981\u4E0B\u65B9\u7684\u7EDF\u8BA1\uFF0C\u8BF7\u5C06\u6B64\u9009\u9879\u8BBE\u7F6E\u4E3A <code>null</code>\u3002</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><ul><li>\u7C7B\u578B: <code>boolean | string</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u6587\u7AE0\u8BC4\u8BBA\u6570\u7EDF\u8BA1\uFF0C\u586B\u5165\u5B57\u7B26\u4E32\u65F6\u4F1A\u4F5C\u4E3A CSS \u9009\u62E9\u5668\u3002</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h3><ul><li>\u7C7B\u578B: <code>boolean | string</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u6587\u7AE0\u6D4F\u89C8\u91CF\u7EDF\u8BA1\uFF0C\u586B\u5165\u5B57\u7B26\u4E32\u65F6\u4F1A\u4F5C\u4E3A CSS \u9009\u62E9\u5668\u3002</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount" aria-hidden="true">#</a> commentCount</h2><p><code>commentCount</code> \u51FD\u6570\u63A5\u6536 <code>WalineCommentCountOptions</code> \u9009\u9879\uFF0C\u5E76\u8D1F\u8D23\u66F4\u65B0\u9875\u9762\u4E0A\u7684\u6587\u7AE0\u8BC4\u8BBA\u6570\uFF0C\u540C\u65F6\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u53D6\u6D88\u5F53\u524D\u64CD\u4F5C\u7684\u51FD\u6570 <code>WalineAbort</code>\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">commentCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineCommentCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>\u9009\u9879:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineCommentCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline \u670D\u52A1\u7AEF\u5730\u5740
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u8BC4\u8BBA\u6570 CSS \u9009\u62E9\u5668
   *
   * <span class="token keyword">@default</span> &#39;.waline-comment-count&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9700\u8981\u83B7\u53D6\u7684\u9ED8\u8BA4\u8DEF\u5F84
   *
   * <span class="token keyword">@default</span> window.location.pathname
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount" aria-hidden="true">#</a> pageviewCount</h2><p><code>pageviewCount</code> \u51FD\u6570\u63A5\u6536 <code>WalinePageviewCountOptions</code> \u9009\u9879\uFF0C\u5E76\u8D1F\u8D23\u66F4\u65B0\u9875\u9762\u4E0A\u7684\u6587\u7AE0\u8BC4\u8BBA\u6570\uFF0C\u540C\u65F6\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u53D6\u6D88\u5F53\u524D\u64CD\u4F5C\u7684\u51FD\u6570 <code>WalineAbort</code>\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">pageviewCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalinePageviewCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>\u9009\u9879:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalinePageviewCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline \u670D\u52A1\u7AEF\u5730\u5740
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u8BC4\u8BBA\u6570 CSS \u9009\u62E9\u5668
   *
   * <span class="token keyword">@default</span> &#39;.waline-pageview-count&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9700\u8981\u66F4\u65B0\u548C\u83B7\u53D6\u7684\u8DEF\u5F84
   *
   * <span class="token keyword">@default</span> window.location.pathname
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u662F\u5426\u5728\u67E5\u8BE2\u65F6\u66F4\u65B0 path \u7684\u6D4F\u89C8\u91CF
   *
   * <span class="token keyword">@default</span> true
   */</span>
  update<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u6302\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6302\u4EF6" aria-hidden="true">#</a> \u6302\u4EF6</h2><h3 id="recentcomments" tabindex="-1"><a class="header-anchor" href="#recentcomments" aria-hidden="true">#</a> RecentComments</h3><p><code>RecentComments</code> \u662F\u4E00\u4E2A\u5C55\u793A\u6700\u8FD1\u8BC4\u8BBA\u7684\u6302\u4EF6\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">RecentComments</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> WalineRecentCommentsOptions
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineRecentCommentsResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>\u9009\u9879:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline \u670D\u52A1\u7AEF\u5730\u5740
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u83B7\u53D6\u6700\u65B0\u8BC4\u8BBA\u7684\u6570\u91CF
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u9700\u8981\u6302\u8F7D\u7684\u5143\u7D20
   */</span>
  el<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u8BC4\u8BBA\u6570\u636E
   */</span>
  comments<span class="token operator">:</span> WalineComment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u53D6\u6D88\u6302\u8F7D\u6302\u4EF6
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,35);function h(v,y){const s=i("RouterLink");return t(),o("div",null,[u,p("p",null,[d,c(s,{to:"/reference/component.html"},{default:l(()=>[k]),_:1}),m]),g])}var b=e(r,[["render",h],["__file","client.html.vue"]]);export{b as default};
