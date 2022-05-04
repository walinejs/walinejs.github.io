import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.1819a339.js";const a={},n=t(`<p>Waline \u652F\u6301\u5728\u975E\u8BC4\u8BBA\u533A\u5355\u72EC\u663E\u793A\u8BC4\u8BBA\u6570\u3002</p><h2 id="\u81EA\u52A8\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u81EA\u52A8\u66F4\u65B0" aria-hidden="true">#</a> \u81EA\u52A8\u66F4\u65B0</h2><p>\u4F60\u53EF\u4EE5\u5728 <code>init</code> \u51FD\u6570\u901A\u8FC7\u8BBE\u7F6E <code>comment</code> \u9009\u9879\u4E3A <code>true</code> \u6765\u5F00\u542F\u8BC4\u8BBA\u6570\u7EDF\u8BA1\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  // ...
  comment: true, // \u8BC4\u8BBA\u6570\u7EDF\u8BA1
});
</code></pre></div><p>Waline \u4F1A\u81EA\u52A8\u67E5\u627E\u9875\u9762\u4E2D <code>class</code> \u503C\u4E3A <code>waline-comment-count</code> \u7684\u5143\u7D20\uFF0C\u83B7\u53D6\u5176 <code>data-path</code> \u4E3A\u67E5\u8BE2\u6761\u4EF6\uFF0C\u5E76\u5C06\u503C\u586B\u5165\u5176\u4E2D\u3002</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!-- data-path \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6 --&gt;
\u5F53\u524D\u9875\u5171\u6709
&lt;span
  class=&quot;waline-comment-count&quot;
  data-path=&quot;/guide/client/count.html&quot;
/&gt;\u6761\u8BC4\u8BBA\u3002
</code></pre></div><p>\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u4E0D\u4E00\u6837\u7684\u9009\u62E9\u5668\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E <code>comment</code> \u9009\u9879\u4E3A\u8FD9\u4E2A\u9009\u62E9\u5668\u3002</p><p>\u6BCF\u6B21\u5F53\u4F60\u8C03\u7528 <code>WalineInstance.update()</code> \u65F6\uFF0CWaline \u4F1A\u91CD\u65B0\u67E5\u627E\u9875\u9762\u5E76\u81EA\u52A8\u66F4\u65B0\u8BC4\u8BBA\u6570\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u4F8B\u5B50</p><div class="language-html ext-html"><pre class="language-html"><code>\u5F53\u524D\u9875\u5171\u6709
&lt;span
  class=&quot;waline-comment-count&quot;
  data-path=&quot;/guide/client/count.html&quot;
/&gt;\u6761\u8BC4\u8BBA\u3002
</code></pre></div><p>\u5F53\u524D\u9875\u5171\u6709 <span class="waline-comment-count" data-path="/guide/client/count.html"></span>\u6761\u8BC4\u8BBA\u3002</p></div><h2 id="\u624B\u52A8\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u624B\u52A8\u66F4\u65B0" aria-hidden="true">#</a> \u624B\u52A8\u66F4\u65B0</h2><p>\u9664\u4E86\u901A\u8FC7 <code>init</code> \u51FD\u6570\u81EA\u52A8\u66F4\u65B0\u4E4B\u5916\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>commentCount</code> API \u6765\u624B\u52A8\u66F4\u65B0\u5F53\u524D\u9875\u9762\u7684\u8BC4\u8BBA\u6570:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.commentCount({
  serverURL,
  path,

  // \u53EF\u9009\u7684\uFF0C\u7528\u4E8E\u81EA\u5B9A\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u4E3A \`&#39;.waline-pageview-count&#39;\`
  // selector: &#39;waline-pageview-count&#39;,
});
</code></pre></div><div class="custom-container info"><p class="custom-container-title">\u4E2D\u9014\u53D6\u6D88</p><p>\u7531\u4E8E\u8BC4\u8BBA\u6570\u83B7\u53D6\u662F\u4E00\u4E2A\u5F02\u6B65\u7F51\u7EDC\u64CD\u4F5C\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u53D6\u6D88\u6B63\u5728\u6267\u884C\u7684\u8BC4\u8BBA\u6570\u66F4\u65B0\u64CD\u4F5C\u3002</p><p><code>commentCount</code> \u4F1A\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u5373\u53EF\u53D6\u6D88\u6B64\u6B21\u66F4\u65B0:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const abort = Waline.commentCount({
  serverURL: &#39;&lt;YOUR_SERVER_URL&gt;&#39;,
  path: window.location.pathname,
});

// \u5728 500ms \u540E\uFF0C\u5982\u679C\u7F51\u7EDC\u8BF7\u6C42\u4ECD\u672A\u5B8C\u6210\uFF0C\u53D6\u6D88\u672C\u6B21\u64CD\u4F5C
setTimeout(() =&gt; abort(), 500);
</code></pre></div></div>`,13);function c(o,i){return n}var l=e(a,[["render",c],["__file","comment.html.vue"]]);export{l as default};
