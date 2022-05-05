import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.598da80c.js";const a={},n=t(`<p>Waline supports displaying the number of comments separately in the non-comment area.</p><h2 id="automatically-update" tabindex="-1"><a class="header-anchor" href="#automatically-update" aria-hidden="true">#</a> Automatically Update</h2><p>You can enable comment counting in the <code>init</code> function by setting the <code>comment</code> option to <code>true</code>.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  // ...
  comment: true, // comment counting
});
</code></pre></div><p>Waline will automatically find the elements with the <code>class</code> value of <code>waline-comment-count</code> in the page, and get their <code>data-path</code> as the query condition. And fill it with the obtained value:</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!-- data-path will be the query condition --&gt;
&lt;span data-path=&quot;&lt;Your/Path/Name&gt;&quot; class=&quot;waline-comment-count&quot; /&gt; comments
</code></pre></div><p>If you need a different selector, you can set the <code>comment</code> option to that selector.</p><p>Every time you call <code>WalineInstance.update()</code>, Waline will search the page content and automatically update the comment count.</p><div class="custom-container tip"><p class="custom-container-title">Examples</p><div class="language-html ext-html"><pre class="language-html"><code>The current page has
&lt;span data-path=&quot;/en/guide/client/count.html&quot; class=&quot;waline-comment-count&quot; /&gt;
comments.
</code></pre></div><p>The current page has <span data-path="/en/guide/client/count.html" class="waline-comment-count"></span> comments.</p></div><h2 id="manual-update" tabindex="-1"><a class="header-anchor" href="#manual-update" aria-hidden="true">#</a> Manual Update</h2><p>Besides automatically update via the <code>init</code> function, you can manually update the current page&#39;s comment count via the <code>commentCount</code> API:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.commentCount({
  serverURL,
  path,

  // optional, for custom selectors, defaults to \`&#39;.waline-pageview-count&#39;\`
  // selector: &#39;waline-pageview-count&#39;,
});
</code></pre></div><div class="custom-container info"><p class="custom-container-title">Aborting</p><p>Since the comment count fetch is an asynchronous network operation, you may need to cancel an ongoing comment count update operation in certain circumstances.</p><p><code>commentCount</code> returns a function that can be called to cancel the update:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const abort = Waline.commentCount({
  serverURL: &#39;&lt;YOUR_SERVER_URL&gt;&#39;,
  path: window.location.pathname,
});

// After 500ms, if the network request has not been completed, cancel this operation
setTimeout(() =&gt; abort(), 500);
</code></pre></div></div>`,13);function o(c,i){return n}var d=e(a,[["render",o],["__file","comment.html.vue"]]);export{d as default};
