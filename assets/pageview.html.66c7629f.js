import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.35dad44f.js";const a={},n=t(`<p>Waline \u652F\u6301\u6D4F\u89C8\u91CF\u7EDF\u8BA1\u3002</p><h2 id="\u548C\u8BC4\u8BBA\u4E00\u8D77\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u548C\u8BC4\u8BBA\u4E00\u8D77\u4F7F\u7528" aria-hidden="true">#</a> \u548C\u8BC4\u8BBA\u4E00\u8D77\u4F7F\u7528</h2><p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528 Waline \u7684\u8BC4\u8BBA\u670D\u52A1\uFF0C\u4F60\u53EF\u4EE5\u5728\u521D\u59CB\u5316\u65F6\u8BBE\u7F6E <code>pageview</code> \u9009\u9879\u4E3A <code>true</code> \u6765\u5F00\u542F\u6D4F\u89C8\u91CF\u7EDF\u8BA1\u529F\u80FD:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  // ...
  pageview: true, // \u6D4F\u89C8\u91CF\u7EDF\u8BA1
});
</code></pre></div><p>Waline \u4F1A\u81EA\u52A8\u67E5\u627E\u9875\u9762\u4E2D <code>class</code> \u503C\u4E3A <code>waline-pageview-count</code> \u7684\u5143\u7D20\uFF0C\u83B7\u53D6\u5176 <code>data-path</code> \u4E3A\u67E5\u8BE2\u6761\u4EF6\uFF0C\u5E76\u5C06\u5F97\u5230\u7684\u503C\u586B\u5145\u5230\u5176\u4E2D:</p><p>\u5982\u679C\u4F60\u9700\u8981\u4E00\u4E2A\u4E0D\u4E00\u6837\u7684\u9009\u62E9\u5668\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E <code>pageview</code> \u9009\u9879\u4E3A\u8FD9\u4E2A\u9009\u62E9\u5668\u3002</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!-- data-path \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6 --&gt;
\u9605\u8BFB\u91CF: &lt;span class=&quot;waline-pageview-count&quot; data-path=&quot;&lt;Your/Path/Name&gt;&quot; /&gt;
</code></pre></div><p>\u6BCF\u6B21\u5F53\u4F60\u8C03\u7528 <code>WalineInstance.update()</code> \u65F6\uFF0CWaline \u4F1A\u91CD\u65B0\u67E5\u627E\u9875\u9762\u5E76\u81EA\u52A8\u66F4\u65B0\u6D4F\u89C8\u91CF\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u4F8B\u5B50</p><div class="language-html ext-html"><pre class="language-html"><code>\u5F53\u524D\u9875\u9605\u8BFB\u91CF\u4E3A:
&lt;span class=&quot;waline-pageview-count&quot; data-path=&quot;/guide/client/count.html&quot; /&gt;
</code></pre></div><p>\u5F53\u524D\u9875\u9605\u8BFB\u91CF\u4E3A: <span class="waline-pageview-count" data-path="/guide/client/count.html"></span></p></div><h2 id="\u5355\u72EC\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u5355\u72EC\u4F7F\u7528" aria-hidden="true">#</a> \u5355\u72EC\u4F7F\u7528</h2><p>\u5982\u679C\u4F60\u53EA\u9700\u8981\u4F7F\u7528\u6D4F\u89C8\u91CF\u7EDF\u8BA1\u529F\u80FD\uFF0C\u4F60\u53EF\u4EE5\u5BFC\u5165 Waline \u63D0\u4F9B\u7684 pageview \u6A21\u5757\uFF0C\u5B83\u7684 Gzip \u5927\u5C0F &lt; 1KB\u3002</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;ul&gt;
  &lt;li&gt;
    \u5F53\u524D\u9875\u9762\u6D4F\u89C8\u91CF:
    &lt;span class=&quot;waline-pageview-count&quot; /&gt;
  &lt;/li&gt;
  &lt;li&gt;
    \u4E3B\u9875\u6D4F\u89C8\u91CF:
    &lt;span class=&quot;waline-pageview-count&quot; data-path=&quot;/&quot; /&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;script src=&quot;https://unpkg.com/@waline/client/dist/pageview.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  Waline.pageviewCount({
    serverURL: &#39;&lt;YOUR_SERVER_URL&gt;&#39;,
    path: window.location.pathname,

    // \u53EF\u9009\u7684\uFF0C\u7528\u4E8E\u81EA\u5B9A\u9009\u62E9\u5668\uFF0C\u9ED8\u8BA4\u4E3A \`&#39;.waline-pageview-count&#39;\`
    // selector: &#39;waline-pageview-count&#39;,

    // \u53EF\u9009\u7684\uFF0C\u662F\u5426\u5728\u83B7\u53D6\u65F6\u589E\u52A0\u8BBF\u95EE\u91CF\uFF0C\u9ED8\u8BA4\u4E3A \`true\`
    // update: true,
  });
&lt;/script&gt;
</code></pre></div><ul><li><p>\u5F53\u524D\u9875\u9762\u6D4F\u89C8\u91CF: <span class="waline-pageview-count"></span></p></li><li><p>\u4E3B\u9875\u6D4F\u89C8\u91CF: <span class="waline-pageview-count" data-path="/"></span></p></li></ul><div class="custom-container info"><p class="custom-container-title">\u4E2D\u9014\u53D6\u6D88</p><p>\u7531\u4E8E\u6D4F\u89C8\u91CF\u83B7\u53D6\u662F\u4E00\u4E2A\u5F02\u6B65\u7F51\u7EDC\u64CD\u4F5C\uFF0C\u4F60\u53EF\u80FD\u9700\u8981\u5728\u7279\u5B9A\u60C5\u51B5\u4E0B\u53D6\u6D88\u6B63\u5728\u6267\u884C\u7684\u6D4F\u89C8\u91CF\u66F4\u65B0\u64CD\u4F5C\u3002</p><p><code>pageviewCount</code> \u4F1A\u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8C03\u7528\u540E\u5373\u53EF\u53D6\u6D88\u6B64\u6B21\u66F4\u65B0:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const abort = Waline.pageviewCount({
  serverURL: &#39;&lt;YOUR_SERVER_URL&gt;&#39;,
  path: window.location.pathname,
});

// \u5728 500ms \u540E\uFF0C\u5982\u679C\u7F51\u7EDC\u8BF7\u6C42\u4ECD\u672A\u5B8C\u6210\uFF0C\u53D6\u6D88\u672C\u6B21\u64CD\u4F5C
setTimeout(() =&gt; abort(), 500);
</code></pre></div></div>`,14);function l(i,c){return n}var s=e(a,[["render",l],["__file","pageview.html.vue"]]);export{s as default};
