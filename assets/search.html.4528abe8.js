import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,f as e,a as n,b as s,d as c,e as l,r as u}from"./app.767e4127.js";const i={},k=n("p",null,"Waline \u5141\u8BB8\u7528\u6237\u6DFB\u52A0\u8868\u60C5\u5305\u641C\u7D22\u670D\u52A1\u5E76\u81EA\u5B9A\u4E49\u6B64\u529F\u80FD\u3002",-1),r=n("h2",{id:"\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),s(" \u7B80\u4ECB")],-1),d={href:"https://giphy.com/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="\u7981\u7528" tabindex="-1"><a class="header-anchor" href="#\u7981\u7528" aria-hidden="true">#</a> \u7981\u7528</h2><p>\u5982\u679C\u4F60\u4E0D\u9700\u8981\u9ED8\u8BA4\u7684\u8868\u60C5\u5305\u641C\u7D22\u670D\u52A1\uFF0C\u4F60\u53EF\u4EE5\u5C06 <code>search</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>false</code> \u6765\u7981\u7528\u5B83\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="\u81EA\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49</h2><p>\u4F60\u53EF\u4EE5\u901A\u8FC7 search \u9009\u9879\u81EA\u5B9A\u4E49\u8868\u60C5\u5305\u641C\u7D22\u670D\u52A1\u3002</p><p>\u5BF9\u4E8E\u6BCF\u9879\u64CD\u4F5C\uFF0C\u4F60\u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u4E86\u56FE\u7247\u4FE1\u606F\u7684\u6570\u7EC4\u4F5C\u4E3A\u641C\u7D22\u7ED3\u679C\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineSearchImageData</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u56FE\u7247\u94FE\u63A5
   */</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u56FE\u7247\u6807\u9898
   *
   * <span class="token keyword">@description</span> \u7528\u4E8E\u56FE\u7247\u7684 alt \u5C5E\u6027
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u56FE\u7247\u7F29\u7565\u56FE
   *
   * <span class="token keyword">@description</span> \u4E3A\u4E86\u66F4\u597D\u7684\u52A0\u8F7D\u6027\u80FD\uFF0C\u6211\u4EEC\u4F1A\u4F18\u5148\u5728\u5217\u8868\u4E2D\u4F7F\u7528\u6B64\u7F29\u7565\u56FE
   *
   * <span class="token keyword">@default</span> src
   */</span>
  preview<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WalineSearchResult</span> <span class="token operator">=</span> WalineSearchImageData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>\u63D2\u4EF6\u5E76\u4E0D\u5728\u610F\u56FE\u50CF\u7ED3\u679C\u4E2D\u662F\u5426\u6709\u989D\u5916\u5C5E\u6027\uFF0C\u4F46\u662F\u4F60\u5E94\u5F53\u5C3D\u53EF\u80FD\u63D0\u4F9B\u4E00\u4E2A\u66FF\u4EE3\u6587\u5B57 <code>title</code> \u4EE5\u4FBF\u4E8E\u5E2E\u52A9\u65E0\u969C\u788D\u8BBF\u95EE\u4EE5\u53CA\u5E94\u5BF9\u56FE\u7247\u670D\u52A1\u5931\u6548\u7684\u60C5\u51B5\u3002\u540C\u65F6\u4E3A\u4E86\u8BA9\u5217\u8868\u52A0\u8F7D\u66F4\u5FEB\uFF0C\u5982\u679C\u56FE\u7247\u670D\u52A1\u8FD4\u56DE\u591A\u4E2A\u5C3A\u5BF8\u7684\u56FE\u7247\u5730\u5740\uFF0C\u4F60\u5E94\u8BE5\u9009\u7528\u4E00\u4E2A\u5C0F\u5C3A\u5BF8\u7684\u56FE\u7247\u4F5C\u4E3A <code>preview</code> \u4EE5\u63D0\u5347\u5217\u8868\u56FE\u7247\u52A0\u8F7D\u901F\u5EA6\u3002</p><p>\u4F60\u9700\u8981\u4F20\u5165\u7684\u4E09\u4E2A\u51FD\u6570\u5982\u4E0B\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineSearchOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * \u641C\u7D22\u64CD\u4F5C
   */</span>
  <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u6253\u5F00\u5217\u8868\u65F6\u5C55\u793A\u7684\u9ED8\u8BA4\u7ED3\u679C
   *
   * <span class="token keyword">@default</span> () =&gt; search(&#39;&#39;)
   */</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * \u83B7\u53D6\u66F4\u591A\u7684\u64CD\u4F5C
   *
   * <span class="token keyword">@description</span> \u4F1A\u5728\u5217\u8868\u6EDA\u52A8\u5230\u5E95\u90E8\u65F6\u89E6\u53D1\uFF0C\u5982\u679C\u4F60\u7684\u641C\u7D22\u670D\u52A1\u652F\u6301\u5206\u9875\u529F\u80FD\uFF0C\u4F60\u5E94\u8BE5\u8BBE\u7F6E\u6B64\u9879\u5B9E\u73B0\u65E0\u9650\u6EDA\u52A8
   *
   * <span class="token keyword">@default</span> (word) =&gt; search(word)
   */</span>
  more<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> currectCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u7531\u4E8E\u4F60\u9700\u8981\u81F3\u5C11\u5B9E\u73B0\u641C\u7D22\u903B\u8F91\uFF0C<code>search</code> \u662F\u5FC5\u586B\u7684\u3002Waline \u5C06\u4F1A\u5C06\u7528\u6237\u641C\u7D22\u5B57\u8BCD\u4F20\u5165\uFF0C\u5E76\u671F\u5F85\u6B64\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u641C\u7D22\u7ED3\u679C\u7684 Promise\u3002</p><p>\u6211\u4EEC\u5E0C\u671B\u7528\u6237\u6253\u5F00\u7684\u65F6\u5019\u80FD\u591F\u770B\u5230\u4E00\u4E9B\u70ED\u95E8\u7684\u56FE\u7247\u6216\u8868\u60C5\u5305\u7ED3\u679C\uFF0C\u56E0\u6B64\u6211\u4EEC\u63D0\u4F9B\u4E86 <code>default</code> \u51FD\u6570\u6765\u5B9E\u73B0\u3002\u5982\u679C\u4F60\u7684\u670D\u52A1\u5546\u63D0\u4F9B\u4E00\u4E2A\u70ED\u95E8\u56FE\u7247\u6216\u8868\u60C5\u5305\u7684\u63A5\u53E3\uFF0C\u4F60\u5E94\u8BE5\u5229\u7528\u6B64\u63A5\u53E3\u8FD4\u56DE\u5185\u5BB9\u3002\u6B64\u5916\uFF0C\u7531\u4E8E\u6B64\u51FD\u6570\u7F3A\u7701\u7684\u9ED8\u8BA4\u884C\u4E3A\u662F\u641C\u7D22\u7A7A\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u4F60\u7684\u641C\u7D22\u670D\u52A1\u5546\u4F1A\u5728\u6B64\u60C5\u5F62\u8FD4\u56DE\u7A7A\u7ED3\u679C\uFF0C\u90A3\u6211\u4EEC\u5EFA\u8BAE\u4F60\u6DFB\u52A0\u4E00\u4E2A\u968F\u673A\u9884\u8BBE\u5B57\u8BCD\u7B80\u8981\u5B9E\u73B0\u6765\u907F\u514D\u5C55\u793A\u4E00\u4E2A\u7A7A\u5217\u8868\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// \u8FD4\u56DE\u7ED3\u679C</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    search<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">search</span><span class="token punctuation">(</span>
        <span class="token comment">// \u5728\u4E09\u4E2A\u5355\u8BCD\u4E4B\u95F4\u968F\u673A</span>
        <span class="token punctuation">[</span><span class="token string">&#39;\u5F00\u5FC3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5931\u843D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u8D5E\u540C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u901A\u5E38\u60C5\u51B5\u4E0B\uFF0C\u4F60\u7684\u641C\u7D22\u670D\u52A1\u5546\u4F1A\u652F\u6301\u5206\u9875\u670D\u52A1\uFF0C\u6240\u4EE5\u6211\u4EEC\u63D0\u4F9B\u4E00\u4E2A <code>more</code> \u51FD\u6570\u6765\u5728\u7528\u6237\u6ED1\u52A8\u5230\u5E95\u90E8\u65F6\u89E6\u53D1\u5E76\u52A0\u8F7D\u66F4\u591A\u56FE\u7247\u6765\u8BA9\u4F60\u8FD4\u56DE\u66F4\u591A\u7ED3\u679C\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u4E3A\u4E86\u66F4\u597D\u7684\u4F53\u9A8C\uFF0C\u6211\u4EEC\u63A8\u8350\u5C06\u5206\u9875\u6570\u8BBE\u7F6E\u4E3A 20 - 40\uFF0C\u5373\u6BCF\u6B21\u52A0\u8F7D 20 - 40 \u5F20\u56FE\u7247\u3002</p></div><div class="custom-container info"><p class="custom-container-title">\u76F8\u5173\u4FE1\u606F</p><p>\u4E3E\u4E00\u4E2A\u4F8B\u5B50\u6765\u5E2E\u52A9\u4F60\u7406\u89E3\u8FD9\u4E2A\u8FC7\u7A0B\u3002\u5F53\u7528\u6237\u70B9\u51FB\u8868\u60C5\u5305\u641C\u7D22\u6309\u94AE\u65F6\uFF0C\u6211\u4EEC\u4F1A\u89E6\u53D1 <code>default()</code>\uFF0C\u5982\u679C\u6B64\u51FD\u6570\u7F3A\u5931\uFF0C\u6211\u4EEC\u4F1A\u89E6\u53D1 <code>search(&#39;&#39;)</code>\uFF0C\u540C\u65F6\u6211\u4EEC\u5C06\u7B49\u5F85 Promise \u6267\u884C\u5E76\u4F7F\u7528\u8FD4\u56DE\u7ED3\u679C\u6E32\u67D3\u3002</p><p>\u5F53\u7528\u6237\u641C\u7D22 <code>\u5FAE\u7B11</code>\uFF0C\u6211\u4EEC\u4F1A\u6267\u884C <code>search(&#39;\u5FAE\u7B11&#39;)</code>\u3002\u5047\u5B9A\u4F60\u6BCF\u6B21\u8FD4\u56DE 20 \u4E2A\u7ED3\u679C\uFF0C\u7528\u6237\u6301\u7EED\u5411\u4E0B\u6EDA\u52A8\u65F6\uFF0C\u6211\u4EEC\u4F1A\u4F9D\u6B21\u89E6\u53D1 <code>more(&#39;\u5FAE\u7B11&#39;, 20)</code>\u3001<code>more(&#39;\u5FAE\u7B11&#39;, 40)</code>\u3001<code>more(&#39;\u5FAE\u7B11&#39;, 60)</code> ...</p></div><details class="custom-container details"><summary>\u9ED8\u8BA4\u5B9E\u73B0</summary><div class="language-typescript ext-ts"><pre class="language-typescript"><code>  <span class="token keyword">interface</span> <span class="token class-name">GifsResult</span> <span class="token punctuation">{</span>
    data<span class="token operator">:</span> IGif<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    meta<span class="token operator">:</span> <span class="token punctuation">{</span>
      msg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      <span class="token comment">// eslint-disable-next-line @typescript-eslint/naming-convention</span>
      response_id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
      status<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    pagination<span class="token operator">:</span> <span class="token punctuation">{</span>
      count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      <span class="token comment">// eslint-disable-next-line @typescript-eslint/naming-convention</span>
      total_count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
      offset<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> fetchGiphy <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>
    url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
    params<span class="token operator">:</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      lang<span class="token punctuation">,</span>
      limit<span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
      rating<span class="token operator">:</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// eslint-disable-next-line @typescript-eslint/naming-convention</span>
      api_key<span class="token operator">:</span> <span class="token string">&#39;6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp&#39;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>params<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.giphy.com/v1/gifs/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>querystring<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>GifsResult<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> resp<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>gif<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      title<span class="token operator">:</span> gif<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
      src<span class="token operator">:</span> gif<span class="token punctuation">.</span>images<span class="token punctuation">.</span>downsized_medium<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    search<span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span>
      <span class="token function">fetchGiphy</span><span class="token punctuation">(</span><span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> q<span class="token operator">:</span> word<span class="token punctuation">,</span> offset<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token function">fetchGiphy</span><span class="token punctuation">(</span><span class="token string">&#39;trending&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    more<span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> offset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span>
      <span class="token function">fetchGiphy</span><span class="token punctuation">(</span><span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> q<span class="token operator">:</span> word<span class="token punctuation">,</span> offset<span class="token operator">:</span> offset<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="custom-container details"><summary>Tenor V1</summary><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FetchGifRequest</span> <span class="token punctuation">{</span>
  keyword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  pos<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">GifFormat</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;gif&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;mediumgif&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;tinygif&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;nanogif&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;mp4&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;loopedmp4&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;tinymp4&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;nanomp4&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;webm&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;tinywebm&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;nanowebm&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">MediaObject</span> <span class="token punctuation">{</span>
  preview<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  dims<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  size<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">GifObject</span> <span class="token punctuation">{</span>
  created<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  hasaudio<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  media<span class="token operator">:</span> Record<span class="token operator">&lt;</span>GifFormat<span class="token punctuation">,</span> MediaObject<span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  tags<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  itemurl<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  hascaption<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">FetchGifResponse</span> <span class="token punctuation">{</span>
  next<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  results<span class="token operator">:</span> GifObject<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> getTenorV1SearchOptions <span class="token operator">=</span> <span class="token punctuation">(</span>
  key <span class="token operator">=</span> <span class="token string">&#39;PAY5JLFIH6V6&#39;</span>
<span class="token punctuation">)</span><span class="token operator">:</span> WalineSearchOptions <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> next<span class="token operator">:</span> <span class="token string">&#39;&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> fetchGif <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
    keyword<span class="token punctuation">,</span>
    pos<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token operator">:</span> FetchGifRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>FetchGifResponse<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://g.tenor.com/v1/search</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> query <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token string">&#39;media_filter=minimal&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    query<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;key&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>
    query<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;limit&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    query<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;pos&#39;</span><span class="token punctuation">,</span> pos <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    query<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;q&#39;</span><span class="token punctuation">,</span> keyword<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>baseUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>query<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      headers<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token string-property property">&#39;Content-Type&#39;</span><span class="token operator">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>FetchGifResponse<span class="token operator">&gt;</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> next<span class="token operator">:</span> pos <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> results<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    search<span class="token operator">:</span> <span class="token punctuation">(</span>word <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">fetchGif</span><span class="token punctuation">(</span><span class="token punctuation">{</span> keyword<span class="token operator">:</span> word <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>next <span class="token operator">=</span> resp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        <span class="token keyword">return</span> resp<span class="token punctuation">.</span>results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          title<span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
          src<span class="token operator">:</span> item<span class="token punctuation">.</span>media<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>tinygif<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function-variable function">more</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">fetchGif</span><span class="token punctuation">(</span><span class="token punctuation">{</span> keyword<span class="token operator">:</span> word<span class="token punctuation">,</span> pos<span class="token operator">:</span> state<span class="token punctuation">.</span>next <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>next <span class="token operator">=</span> resp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>

        <span class="token keyword">return</span> resp<span class="token punctuation">.</span>results<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          title<span class="token operator">:</span> item<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
          src<span class="token operator">:</span> item<span class="token punctuation">.</span>media<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>tinygif<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></details>`,18);function g(f,y){const a=u("ExternalLinkIcon");return p(),o("div",null,[k,e(" more "),r,n("p",null,[s("\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CWaline \u901A\u8FC7 "),n("a",d,[s("Giphy"),c(a)]),s(" \u63D0\u4F9B\u8868\u60C5\u5305\u641C\u7D22\u670D\u52A1\u3002\u8FD9\u5C06\u5141\u8BB8\u4F60\u5728\u8BC4\u8BBA\u65F6\u641C\u7D22\u8868\u60C5\u5305\u5E76\u6DFB\u52A0\u5230\u8BC4\u8BBA\u4E2D\u3002")]),m])}const w=t(i,[["render",g],["__file","search.html.vue"]]);export{w as default};
