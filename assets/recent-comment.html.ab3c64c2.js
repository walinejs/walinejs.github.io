import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as t}from"./app.57d8c159.js";const n={},o=t(`<p>Waline supports displying recent comments by widget, which is convenient for displaying the latest comments in the sidebar of the blog.</p><h2 id="component-options" tabindex="-1"><a class="header-anchor" href="#component-options" aria-hidden="true">#</a> Component options</h2><p>The latest comment widget is named <code>RecentComments</code> and contains three options:</p><ul><li><code>el</code> (optional): the element to be mounted</li><li><code>serverURL</code>: server link</li><li><code>count</code> The number of recent comments needed to get</li></ul><p>The data format returned by the component should be <code>Promise&lt;{ comment: WalineComment[], destroy: () =&gt; void }&gt;</code>.</p><ul><li><code>comment</code> property: an array of the most recent comments with exact number of <code>count</code></li><li><code>destory</code> method: a function which will destroy the widget</li></ul><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2><div class="language-html ext-html"><pre class="language-html"><code>&lt;div id=&quot;waline-recent&quot;&gt;&lt;/div&gt;
&lt;script&gt;
  window.addEventListener(&#39;load&#39;, () =&gt; {
    Waline.RecentComments({
      el: &#39;#waline-recent&#39;,
      serverURL: &#39;http://waline.vercel.app&#39;,
      count: 10,
    });
  });
&lt;/script&gt;
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>This will be rendered on <code>#waline-recent</code> using the default style.</p></div><h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage" aria-hidden="true">#</a> Advanced usage</h2><p>If you are not satisfied with the default output format, you can call the component by omiting the <code>el</code> option to get the data and render it yourself.</p><p>Example:</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;div id=&quot;waline-recent&quot;&gt;&lt;/div&gt;
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
</code></pre></div>`,13);function a(c,i){return o}var r=e(n,[["render",a],["__file","recent-comment.html.vue"]]);export{r as default};
