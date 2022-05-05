import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.57b8dfca.js";const a={},n=t(`<p>Waline supports pageview counting.</p><h2 id="using-with-comment" tabindex="-1"><a class="header-anchor" href="#using-with-comment" aria-hidden="true">#</a> Using with comment</h2><p>Waline supIf you are using Waline&#39;s commenting service, you can enable pageview statistics by setting the <code>pageview</code> option to <code>true</code> during initialization:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  // ...
  pageview: true, // pageview statistics
});
</code></pre></div><p>Waline will automatically find the elements with the <code>class</code> value of <code>waline-pageview-count</code> in the page, and get their <code>data-path</code> as the query condition. And fill it with the obtained value:</p><p>If you need a different selector, you can set the <code>pageview</code> option to this selector.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!-- data-path will be the query condition --&gt;
Pageviews: &lt;i class=&quot;waline-pageview-count&quot; data-path=&quot;&lt;Your/Path/Name&gt;&quot;&gt;&lt;/i&gt;
</code></pre></div><p>Every time you call <code>WalineInstance.update()</code>, Waline will re-search the page content and automatically update the pageviews.</p><div class="custom-container tip"><p class="custom-container-title">Examples</p><div class="language-html ext-html"><pre class="language-html"><code>The current page has been viewed
&lt;i class=&quot;waline-pageview-count&quot; data-path=&quot;/en/guide/client/count.html&quot; /&gt;
times.
</code></pre></div><p>The current page has been viewed <i class="waline-pageview-count" data-path="/en/guide/client/count.html"></i> times.</p></div><h2 id="use-alone" tabindex="-1"><a class="header-anchor" href="#use-alone" aria-hidden="true">#</a> Use Alone</h2><p>If you only need to use the pageview statistics function, you can import the pageview module provided by Waline, its Gzip size is &lt; 1KB.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;ul&gt;
  &lt;li&gt;
    Current page views:
    &lt;span class=&quot;waline-pageview-count&quot; /&gt;
  &lt;/li&gt;
  &lt;li&gt;
    Page Views:
    &lt;span class=&quot;waline-pageview-count&quot; data-path=&quot;/&quot; /&gt;
  &lt;/li&gt;
&lt;/ul&gt;
&lt;script src=&quot;https://unpkg.com/@waline/client/dist/pageview.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  Waline.pageviewCount({
    serverURL: &#39;&lt;YOUR_SERVER_URL&gt;&#39;,
    path: window.location.pathname,

    // optional, for custom selectors, defaults to \`&#39;.waline-pageview-count&#39;\`
    // selector: &#39;waline-pageview-count&#39;,

    // optional, whether to increase the number of visits when fetching, the default is \`true\`
    // update: true,
  });
&lt;/script&gt;
</code></pre></div><ul><li><p>Current pageviews: <span class="waline-pageview-count"></span></p></li><li><p>Pageviews: <span class="waline-pageview-count" data-path="/"></span></p></li></ul><div class="custom-container info"><p class="custom-container-title">Abort</p><p>Since pageview fetching is an asynchronous network operation, you may need to cancel an ongoing pageview update operation under certain circumstances.</p><p><code>pageviewCount</code> returns a function that can be called to cancel the update:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>const abort = Waline.pageviewCount({
  serverURL: &#39;&lt;YOUR_SERVER_URL&gt;&#39;,
  path: window.location.pathname,
});

// After 500ms, if the network request has not been completed, cancel this operation
setTimeout(() =&gt; abort(), 500);
</code></pre></div></div>`,14);function i(o,l){return n}var p=e(a,[["render",i],["__file","pageview.html.vue"]]);export{p as default};
