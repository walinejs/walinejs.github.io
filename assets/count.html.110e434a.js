import{_ as a,f as n}from"./app.45cb7b10.js";const s={},t=n(`<p>Waline \u652F\u6301\u6D4F\u89C8\u91CF\u7EDF\u8BA1\u4E0E\u8BC4\u8BBA\u6570\u663E\u793A\u3002</p><h2 id="\u6D4F\u89C8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u6D4F\u89C8\u91CF" aria-hidden="true">#</a> \u6D4F\u89C8\u91CF</h2><p>Waline \u652F\u6301\u6D4F\u89C8\u91CF\u7EDF\u8BA1\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>visitor</code> \u9009\u9879\u4E3A <code>true</code> \u6765\u5F00\u542F\u5B83:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">visitor</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9605\u8BFB\u91CF\u7EDF\u8BA1</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Waline \u4F1A\u81EA\u52A8\u67E5\u627E\u9875\u9762\u4E2D <code>class</code> \u503C\u4E3A <code>waline-visitor-count</code> \u7684\u5143\u7D20\uFF0C\u83B7\u53D6\u5176 <code>id</code> \u4E3A\u67E5\u8BE2\u6761\u4EF6\uFF0C\u5E76\u5C06\u5F97\u5230\u7684\u503C\u586B\u5145\u5230\u5176\u4E2D:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6 --&gt;</span>
\u9605\u8BFB\u91CF: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-visitor-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div><h3 id="\u4F8B\u5B50" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50" aria-hidden="true">#</a> \u4F8B\u5B50</h3><div class="language-html ext-html"><pre class="language-html"><code>\u5F53\u524D\u9875\u9605\u8BFB\u91CF\u4E3A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-visitor-count<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>\u6B21\u3002
</code></pre></div><p>\u5F53\u524D\u9875\u9605\u8BFB\u91CF\u4E3A<span id="/guide/client/count.html" class="waline-visitor-count"></span>\u6B21\u3002</p><h3 id="valine-\u517C\u5BB9" tabindex="-1"><a class="header-anchor" href="#valine-\u517C\u5BB9" aria-hidden="true">#</a> Valine \u517C\u5BB9</h3><p>\u4E3A\u4E86\u65B9\u4FBF\u7528\u6237\u65E0\u7F1D\u8FC1\u79FB\uFF0CWaline \u76EE\u524D\u4F1A\u517C\u5BB9 Valine \u7684 <code>.leancloud_visitors</code> \u4E0E <code>.leancloud-visitors-count</code>:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>
  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud_visitors<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">data-flag-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Your Article Title<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post-meta-item-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u9605\u8BFB\u91CF <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud-visitors-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u4F46\u662F\u6211\u4EEC\u4E0D\u4F1A\u5728\u672A\u6765\u7684 V2 \u7248\u672C\u517C\u5BB9\u5B83\u3002</p><h2 id="\u8BC4\u8BBA\u6570\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#\u8BC4\u8BBA\u6570\u7EDF\u8BA1" aria-hidden="true">#</a> \u8BC4\u8BBA\u6570\u7EDF\u8BA1</h2><p>Waline \u652F\u6301\u5728\u975E\u8BC4\u8BBA\u533A\u5355\u72EC\u663E\u793A\u8BC4\u8BBA\u6570\uFF0C\u5176\u65B9\u5F0F\u548C\u9875\u9762\u6D4F\u89C8\u91CF\u7C7B\u4F3C\u3002Waline \u4F1A\u81EA\u52A8\u67E5\u627E\u9875\u9762\u4E2D <code>class</code> \u503C\u4E3A <code>waline-comment-count</code> \u7684\u5143\u7D20\uFF0C\u83B7\u53D6\u5176 <code>id</code> \u4E3A\u67E5\u8BE2\u6761\u4EF6\uFF0C\u5E76\u5C06\u503C\u586B\u5165\u5176\u4E2D\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id \u5C06\u4F5C\u4E3A\u67E5\u8BE2\u6761\u4EF6 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\u6761\u8BC4\u8BBA
</code></pre></div><h3 id="\u4F8B\u5B50-1" tabindex="-1"><a class="header-anchor" href="#\u4F8B\u5B50-1" aria-hidden="true">#</a> \u4F8B\u5B50</h3><div class="language-html ext-html"><pre class="language-html"><code>\u5F53\u524D\u9875\u5171\u6709
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\u6761\u8BC4\u8BBA
</code></pre></div><p>\u5F53\u524D\u9875\u5171\u6709 <span id="/guide/client/count.html" class="waline-comment-count"></span>\u6761\u8BC4\u8BBA</p>`,19);function p(e,o){return t}var l=a(s,[["render",p]]);export{l as default};
