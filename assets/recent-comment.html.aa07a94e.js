import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{e as a}from"./app.136b21da.js";const s={},t=a(`<p>Waline supports displying recent comments by widget, which is convenient for displaying the latest comments in the sidebar of the blog.</p><h2 id="component-options" tabindex="-1"><a class="header-anchor" href="#component-options" aria-hidden="true">#</a> Component options</h2><p>The latest comment widget is named <code>RecentComments</code> and contains three options:</p><ul><li><code>el</code> (optional): the element to be mounted</li><li><code>serverURL</code>: server link</li><li><code>count</code> The number of recent comments needed to get</li></ul><p>The data format returned by the component should be <code>Promise&lt;{ comment: WalineComment[], destroy: () =&gt; void }&gt;</code>.</p><ul><li><code>comment</code> property: an array of the most recent comments with exact number of <code>count</code></li><li><code>destory</code> method: a function which will destroy the widget</li></ul><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic usage</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Waline<span class="token punctuation">.</span><span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline-recent&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>This will be rendered on <code>#waline-recent</code> using the default style.</p></div><h2 id="advanced-usage" tabindex="-1"><a class="header-anchor" href="#advanced-usage" aria-hidden="true">#</a> Advanced usage</h2><p>If you are not satisfied with the default output format, you can call the component by omiting the <code>el</code> option to get the data and render it yourself.</p><p>Example:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    Waline<span class="token punctuation">.</span><span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> comments <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;waline-recent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> comments<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>comment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13);function p(e,o){return t}var u=n(s,[["render",p],["__file","recent-comment.html.vue"]]);export{u as default};