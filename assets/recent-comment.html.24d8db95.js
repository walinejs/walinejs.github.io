import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.948a26c3.js";const n={},c=t(`<p>Waline \u901A\u8FC7 <code>RecentComments</code> \u652F\u6301\u6700\u65B0\u8BC4\u8BBA\u6302\u4EF6\u663E\u793A\uFF0C\u65B9\u4FBF\u5728\u535A\u5BA2\u4FA7\u8FB9\u680F\u663E\u793A\u6700\u8FD1\u8BC4\u8BBA\u3002</p><h2 id="\u7EC4\u4EF6\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u9009\u9879" aria-hidden="true">#</a> \u7EC4\u4EF6\u9009\u9879</h2><p>\u6700\u65B0\u8BC4\u8BBA\u6302\u4EF6\u540D\u4E3A <code>RecentComments</code>\uFF0C\u5305\u542B\u4E09\u4E2A\u9009\u9879:</p><ul><li><code>el</code> (\u53EF\u9009\u7684): \u9700\u8981\u6302\u8F7D\u7684\u5143\u7D20</li><li><code>serverURL</code>: \u670D\u52A1\u5668\u5730\u5740</li><li><code>count</code> \u9700\u8981\u83B7\u53D6\u7684\u6700\u8FD1\u8BC4\u8BBA\u6570\u91CF</li></ul><p>\u7EC4\u4EF6\u8FD4\u56DE\u7684\u6570\u636E\u683C\u5F0F\u5E94\u4E3A <code>Promise&lt;{ comment: WalineComment[], destroy: () =&gt; void }&gt;</code>\u3002</p><ul><li><code>comment</code> \u5C5E\u6027: \u5305\u542B <code>count</code> \u6570\u91CF\u7684\u6700\u8FD1\u8BC4\u8BBA\u7684\u6570\u7EC4</li><li><code>destory</code> \u65B9\u6CD5: \u9500\u6BC1\u6302\u4EF6\u7684\u51FD\u6570</li></ul><h2 id="\u57FA\u672C\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u672C\u7528\u6CD5</h2><div class="language-html ext-html"><pre class="language-html"><code>&lt;div id=&quot;waline-recent&quot;&gt;&lt;/div&gt;
&lt;script&gt;
  window.addEventListener(&#39;load&#39;, () =&gt; {
    Waline.RecentComments({
      el: &#39;#waline-recent&#39;,
      serverURL: &#39;http://waline.vercel.app&#39;,
      count: 10,
    });
  });
&lt;/script&gt;
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u8FD9\u4F1A\u4F7F\u7528\u9ED8\u8BA4\u6837\u5F0F\u6E32\u67D3\u5728 <code>#waline-recent</code> \u4E0A\u3002</p></div><h2 id="\u9AD8\u7EA7\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u9AD8\u7EA7\u7528\u6CD5" aria-hidden="true">#</a> \u9AD8\u7EA7\u7528\u6CD5</h2><p>\u5982\u679C\u5BF9\u9ED8\u8BA4\u8F93\u51FA\u7684\u683C\u5F0F\u4E0D\u6EE1\u610F\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u4E0D\u4F20\u5165 <code>el</code> \u9009\u9879\uFF0C\u8C03\u7528\u7EC4\u4EF6\u62FF\u5230\u6570\u636E\u4E4B\u540E\u81EA\u5DF1\u8FDB\u884C\u6E32\u67D3\u3002</p><p>\u4F8B\u5B50:</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;div id=&quot;waline-recent&quot;&gt;&lt;/div&gt;
&lt;script&gt;
  window.addEventListener(&#39;load&#39;, () =&gt; {
    Waline.RecentComments({
      serverURL: &#39;http://waline.vercel.app&#39;,
      count: 10,
    }).then(({ comments }) =&gt; {
      document.getElementById(&#39;waline-recent&#39;).innerHTML = comments.map(
        (comment) =&gt; \`\${comment.nick}: \${comment.comment}\`
      );
    });
  });
&lt;/script&gt;
</code></pre></div>`,13);function o(d,i){return c}var r=e(n,[["render",o],["__file","recent-comment.html.vue"]]);export{r as default};
