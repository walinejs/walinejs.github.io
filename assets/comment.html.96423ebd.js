import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,f as t,a as p,e}from"./app.969be543.js";const o={},c=p("p",null,"Waline 支持在非评论区单独显示评论数。",-1),l=e(`<h2 id="自动更新" tabindex="-1"><a class="header-anchor" href="#自动更新" aria-hidden="true">#</a> 自动更新</h2><p>你可以在 <code>init</code> 函数通过设置 <code>comment</code> 选项为 <code>true</code> 来开启评论数统计。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 评论数统计</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Waline 会自动查找页面中 <code>class</code> 值为 <code>waline-comment-count</code> 的元素，获取其 <code>data-path</code> 为查询条件，并将值填入其中。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- data-path 将作为查询条件 --&gt;</span>
当前页共有
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>条评论。
</code></pre></div><p>如果你需要一个不一样的选择器，你可以设置 <code>comment</code> 选项为这个选择器。</p><p>每次当你调用 <code>WalineInstance.update()</code> 时，Waline 会重新查找页面并自动更新评论数。</p><div class="custom-container tip"><p class="custom-container-title">例子</p><div class="language-html" data-ext="html"><pre class="language-html"><code>当前页共有
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>条评论。
</code></pre></div><p>当前页共有 <span class="waline-comment-count" data-path="/guide/client/count.html"></span>条评论。</p></div><h2 id="手动更新" tabindex="-1"><a class="header-anchor" href="#手动更新" aria-hidden="true">#</a> 手动更新</h2><p>除了通过 <code>init</code> 函数自动更新之外，你可以通过 <code>commentCount</code> API 来手动更新当前页面的评论数:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">commentCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  path<span class="token punctuation">,</span>

  <span class="token comment">// 可选的，用于自定选择器，默认为 \`&#39;.waline-pageview-count&#39;\`</span>
  <span class="token comment">// selector: &#39;waline-pageview-count&#39;,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="custom-container info"><p class="custom-container-title">中途取消</p><p>由于评论数获取是一个异步网络操作，你可能需要在特定情况下取消正在执行的评论数更新操作。</p><p><code>commentCount</code> 会返回一个函数，调用后即可取消此次更新:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> abort <span class="token operator">=</span> Waline<span class="token punctuation">.</span><span class="token function">commentCount</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR_SERVER_URL&gt;&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 在 500ms 后，如果网络请求仍未完成，取消本次操作</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></div>`,12);function u(i,r){return a(),s("div",null,[c,t(" more "),l])}const m=n(o,[["render",u],["__file","comment.html.vue"]]);export{m as default};
