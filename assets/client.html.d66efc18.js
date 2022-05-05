import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o,c,a as s,b as l,w as p,F as d,e as n,d as e}from"./app.aeb891c7.js";const r={},u=n(`<h2 id="\u5BA2\u6237\u7AEF-api" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF-api" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF API</h2><p>Waline \u63D0\u4F9B\u4E09\u4E2A API:</p><ul><li><p><code>init</code>: \u521D\u59CB\u5316 Waline</p></li><li><p><code>commentCount</code>: \u8BC4\u8BBA\u6570\u7EDF\u8BA1</p></li><li><p><code>pageviewCount</code>: \u8BBF\u95EE\u91CF\u7EDF\u8BA1</p></li></ul><p>\u4EE5\u53CA:</p><ul><li><p><code>RecentComment</code>: \u6700\u8FD1\u8BC4\u8BBA</p></li><li><p><code>version: string</code>: Waline \u5BA2\u6237\u7AEF\u7248\u672C</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p><code>init</code> \u51FD\u6570\u63A5\u6536\u4E00\u4E2A <code>WalineInitOptions</code> \u521D\u59CB\u5316\u9009\u9879\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A <code>WalineInstance</code>\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const init: (options: WalineInitOptions) =&gt; WalineInstance;
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineInstance {
  /**
   * Waline \u88AB\u6302\u8F7D\u5230\u7684\u5143\u7D20
   *
   * @description \u5F53\u901A\u8FC7 \`el: null\` \u521D\u59CB\u5316\uFF0C\u503C\u4E3A \`null\`
   */
  el: HTMLElement | null;

  /**
   * \u66F4\u65B0 Waline \u5B9E\u4F8B
   *
   * @description \u53EA\u8981\u4E0D\u8BBE\u7F6E\`path\` \u9009\u9879\uFF0C\u66F4\u65B0\u65F6\u5B83\u5C31\u4F1A\u88AB\u91CD\u7F6E\u4E3A \`windows.location.pathname\`
   */
  update: (newOptions?: Partial&lt;Omit&lt;WalineInitOptions, &#39;el&#39;&gt;&gt;) =&gt; void;

  /**
   * \u53D6\u6D88\u6302\u8F7D\u5E76\u6467\u6BC1 Waline \u5B9E\u4F8B
   */
  destroy: () =&gt; void;
}
</code></pre></div>`,11),g=e("\u521D\u59CB\u5316\u9009\u9879\u63A5\u53D7\u6240\u6709 "),m=e("Waline \u7EC4\u4EF6"),h=e(" \u652F\u6301\u7684\u9009\u9879\uFF0C\u6B64\u5916\uFF0C\u65B0\u589E\u4E0B\u5217\u9009\u9879\u3002"),v=n(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h3><ul><li>\u7C7B\u578B: <code>string | HTMLElement | null</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;#waline&#39;</code></li></ul><p>Waline \u7684\u521D\u59CB\u5316\u6302\u8F7D\u5668\u3002\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u7684 <strong>CSS \u9009\u62E9\u5668</strong> \u6216 HTMLELement \u5BF9\u8C61\u3002</p><p>\u5982\u679C\u4F60\u53EA\u9700\u8981\u4E0B\u65B9\u7684\u7EDF\u8BA1\uFF0C\u8BF7\u5C06\u6B64\u9009\u9879\u8BBE\u7F6E\u4E3A <code>null</code>\u3002</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><ul><li>\u7C7B\u578B: <code>boolean | string</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u6587\u7AE0\u8BC4\u8BBA\u6570\u7EDF\u8BA1\uFF0C\u586B\u5165\u5B57\u7B26\u4E32\u65F6\u4F1A\u4F5C\u4E3A CSS \u9009\u62E9\u5668\u3002</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h3><ul><li>\u7C7B\u578B: <code>boolean | string</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u6587\u7AE0\u6D4F\u89C8\u91CF\u7EDF\u8BA1\uFF0C\u586B\u5165\u5B57\u7B26\u4E32\u65F6\u4F1A\u4F5C\u4E3A CSS \u9009\u62E9\u5668\u3002</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount" aria-hidden="true">#</a> commentCount</h2><p><code>commentCount</code> \u51FD\u6570\u63A5\u6536 <code>WalineCommentCountOptions</code> \u9009\u9879\uFF0C\u5E76\u8D1F\u8D23\u66F4\u65B0\u9875\u9762\u4E0A\u7684\u6587\u7AE0\u8BC4\u8BBA\u6570\uFF0C\u540C\u65F6\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u53D6\u6D88\u5F53\u524D\u64CD\u4F5C\u7684\u51FD\u6570 <code>WalineAbort</code>\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const commentCount: (options: WalineCommentCountOptions) =&gt; WalineAbort;
</code></pre></div><p>\u9009\u9879:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineCommentCountOptions {
  /**
   * Waline \u670D\u52A1\u7AEF\u5730\u5740
   */
  serverURL: string;

  /**
   * \u8BC4\u8BBA\u6570 CSS \u9009\u62E9\u5668
   *
   * @default &#39;.waline-comment-count&#39;
   */
  selector?: string;

  /**
   * \u9700\u8981\u83B7\u53D6\u7684\u9ED8\u8BA4\u8DEF\u5F84
   *
   * @default window.location.pathname
   */
  path?: string;
}
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineAbort = (reason?: any) =&gt; void;
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount" aria-hidden="true">#</a> pageviewCount</h2><p><code>pageviewCount</code> \u51FD\u6570\u63A5\u6536 <code>WalinePageviewCountOptions</code> \u9009\u9879\uFF0C\u5E76\u8D1F\u8D23\u66F4\u65B0\u9875\u9762\u4E0A\u7684\u6587\u7AE0\u8BC4\u8BBA\u6570\uFF0C\u540C\u65F6\u8FD4\u56DE\u4E00\u4E2A\u53EF\u4EE5\u53D6\u6D88\u5F53\u524D\u64CD\u4F5C\u7684\u51FD\u6570 <code>WalineAbort</code>\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const pageviewCount: (options: WalinePageviewCountOptions) =&gt; WalineAbort;
</code></pre></div><p>\u9009\u9879:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalinePageviewCountOptions {
  /**
   * Waline \u670D\u52A1\u7AEF\u5730\u5740
   */
  serverURL: string;

  /**
   * \u8BC4\u8BBA\u6570 CSS \u9009\u62E9\u5668
   *
   * @default &#39;.waline-pageview-count&#39;
   */
  selector?: string;

  /**
   * \u9700\u8981\u66F4\u65B0\u548C\u83B7\u53D6\u7684\u8DEF\u5F84
   *
   * @default window.location.pathname
   */
  path?: string;

  /**
   * \u662F\u5426\u5728\u67E5\u8BE2\u65F6\u66F4\u65B0 path \u7684\u6D4F\u89C8\u91CF
   *
   * @default true
   */
  update?: boolean;
}
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineAbort = (reason?: any) =&gt; void;
</code></pre></div><h2 id="\u6302\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u6302\u4EF6" aria-hidden="true">#</a> \u6302\u4EF6</h2><h3 id="recentcomments" tabindex="-1"><a class="header-anchor" href="#recentcomments" aria-hidden="true">#</a> RecentComments</h3><p><code>RecentComments</code> \u662F\u4E00\u4E2A\u5C55\u793A\u6700\u8FD1\u8BC4\u8BBA\u7684\u6302\u4EF6\u3002</p><p>\u7C7B\u578B:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>const RecentComments: (
  options: WalineRecentCommentsOptions
) =&gt; Promise&lt;WalineRecentCommentsResult&gt;;
</code></pre></div><p>\u9009\u9879:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineRecentCommentsOptions {
  /**
   * Waline \u670D\u52A1\u7AEF\u5730\u5740
   */
  serverURL: string;

  /**
   * \u83B7\u53D6\u6700\u65B0\u8BC4\u8BBA\u7684\u6570\u91CF
   */
  count: number;

  /**
   * \u9700\u8981\u6302\u8F7D\u7684\u5143\u7D20
   */
  el?: string | HTMLElement;
}
</code></pre></div><p>\u8FD4\u56DE\u503C:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>interface WalineRecentCommentsResult {
  /**
   * \u8BC4\u8BBA\u6570\u636E
   */
  comments: WalineComment[];

  /**
   * \u53D6\u6D88\u6302\u8F7D\u6302\u4EF6
   */
  destroy: () =&gt; void;
}
</code></pre></div>`,35);function W(C,f){const t=i("RouterLink");return o(),c(d,null,[u,s("p",null,[g,l(t,{to:"/reference/component.html"},{default:p(()=>[m]),_:1}),h]),v],64)}var x=a(r,[["render",W],["__file","client.html.vue"]]);export{x as default};
