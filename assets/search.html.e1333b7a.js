import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,f as e,a as n,b as s,d as c,e as l,r as u}from"./app.f16c1035.js";const i={},k=n("p",null,"Waline 允许用户添加表情包搜索服务并自定义此功能。",-1),r=n("h2",{id:"简介",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),s(" 简介")],-1),d={href:"https://giphy.com/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="禁用" tabindex="-1"><a class="header-anchor" href="#禁用" aria-hidden="true">#</a> 禁用</h2><p>如果你不需要默认的表情包搜索服务，你可以将 <code>search</code> 选项设置为 <code>false</code> 来禁用它。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="自定义" tabindex="-1"><a class="header-anchor" href="#自定义" aria-hidden="true">#</a> 自定义</h2><p>你可以通过 search 选项自定义表情包搜索服务。</p><p>对于每项操作，你应该返回一个包含了图片信息的数组作为搜索结果。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineSearchImageData</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 图片链接
   */</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 图片标题
   *
   * <span class="token keyword">@description</span> 用于图片的 alt 属性
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 图片缩略图
   *
   * <span class="token keyword">@description</span> 为了更好的加载性能，我们会优先在列表中使用此缩略图
   *
   * <span class="token keyword">@default</span> src
   */</span>
  preview<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WalineSearchResult</span> <span class="token operator">=</span> WalineSearchImageData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>插件并不在意图像结果中是否有额外属性，但是你应当尽可能提供一个替代文字 <code>title</code> 以便于帮助无障碍访问以及应对图片服务失效的情况。同时为了让列表加载更快，如果图片服务返回多个尺寸的图片地址，你应该选用一个小尺寸的图片作为 <code>preview</code> 以提升列表图片加载速度。</p><p>你需要传入的三个函数如下。</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineSearchOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 搜索操作
   */</span>
  <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 打开列表时展示的默认结果
   *
   * <span class="token keyword">@default</span> () =&gt; search(&#39;&#39;)
   */</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 获取更多的操作
   *
   * <span class="token keyword">@description</span> 会在列表滚动到底部时触发，如果你的搜索服务支持分页功能，你应该设置此项实现无限滚动
   *
   * <span class="token keyword">@default</span> (word) =&gt; search(word)
   */</span>
  more<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> currentCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>由于你需要至少实现搜索逻辑，<code>search</code> 是必填的。Waline 将会将用户搜索字词传入，并期待此函数返回一个包含搜索结果的 Promise。</p><p>我们希望用户打开的时候能够看到一些热门的图片或表情包结果，因此我们提供了 <code>default</code> 函数来实现。如果你的服务商提供一个热门图片或表情包的接口，你应该利用此接口返回内容。此外，由于此函数缺省的默认行为是搜索空字符串，如果你的搜索服务商会在此情形返回空结果，那我们建议你添加一个随机预设字词简要实现来避免展示一个空列表。</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    search<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">search</span><span class="token punctuation">(</span>
        <span class="token comment">// 在三个单词之间随机</span>
        <span class="token punctuation">[</span><span class="token string">&#39;开心&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;失落&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;赞同&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>通常情况下，你的搜索服务商会支持分页服务，所以我们提供一个 <code>more</code> 函数来在用户滑动到底部时触发并加载更多图片来让你返回更多结果。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>为了更好的体验，我们推荐将分页数设置为 20 - 40，即每次加载 20 - 40 张图片。</p></div><div class="custom-container info"><p class="custom-container-title">相关信息</p><p>举一个例子来帮助你理解这个过程。当用户点击表情包搜索按钮时，我们会触发 <code>default()</code>，如果此函数缺失，我们会触发 <code>search(&#39;&#39;)</code>，同时我们将等待 Promise 执行并使用返回结果渲染。</p><p>当用户搜索 <code>微笑</code>，我们会执行 <code>search(&#39;微笑&#39;)</code>。假定你每次返回 20 个结果，用户持续向下滚动时，我们会依次触发 <code>more(&#39;微笑&#39;, 20)</code>、<code>more(&#39;微笑&#39;, 40)</code>、<code>more(&#39;微笑&#39;, 60)</code> ...</p></div><details class="custom-container details"><summary>默认实现</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code>  <span class="token keyword">interface</span> <span class="token class-name">GifsResult</span> <span class="token punctuation">{</span>
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
  <span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span>
    <span class="token function">fetch</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://api.giphy.com/v1/gifs/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">?</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">new</span> <span class="token class-name">URLSearchParams</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        lang<span class="token punctuation">,</span>
        limit<span class="token operator">:</span> <span class="token string">&#39;20&#39;</span><span class="token punctuation">,</span>
        rating<span class="token operator">:</span> <span class="token string">&#39;g&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// eslint-disable-next-line @typescript-eslint/naming-convention</span>
        api_key<span class="token operator">:</span> <span class="token string">&#39;6CIMLkNMMOhRcXPoMCPkFy4Ybk2XUiMp&#39;</span><span class="token punctuation">,</span>
        <span class="token operator">...</span>params<span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span>GifsResult<span class="token operator">&gt;&gt;</span>resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">{</span> data <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
        data<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>gif<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
          title<span class="token operator">:</span> gif<span class="token punctuation">.</span>title<span class="token punctuation">,</span>
          src<span class="token operator">:</span> gif<span class="token punctuation">.</span>images<span class="token punctuation">.</span>downsized_medium<span class="token punctuation">.</span>url<span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    search<span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span>
      <span class="token function">fetchGiphy</span><span class="token punctuation">(</span><span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> q<span class="token operator">:</span> word<span class="token punctuation">,</span> offset<span class="token operator">:</span> <span class="token string">&#39;0&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token function">fetchGiphy</span><span class="token punctuation">(</span><span class="token string">&#39;trending&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    more<span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> offset <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span> <span class="token operator">=&gt;</span>
      <span class="token function">fetchGiphy</span><span class="token punctuation">(</span><span class="token string">&#39;search&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> q<span class="token operator">:</span> word<span class="token punctuation">,</span> offset<span class="token operator">:</span> offset<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre></div></details><details class="custom-container details"><summary>Tenor V1</summary><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">FetchGifRequest</span> <span class="token punctuation">{</span>
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
      <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resp<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">&lt;</span><span class="token builtin">Promise</span><span class="token operator">&lt;</span>FetchGifResponse<span class="token operator">&gt;&gt;</span>resp<span class="token punctuation">.</span><span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
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
</code></pre></div></details>`,18);function g(f,h){const a=u("ExternalLinkIcon");return p(),o("div",null,[k,e(" more "),r,n("p",null,[s("在默认情况下，Waline 通过 "),n("a",d,[s("Giphy"),c(a)]),s(" 提供表情包搜索服务。这将允许你在评论时搜索表情包并添加到评论中。")]),m])}const w=t(i,[["render",g],["__file","search.html.vue"]]);export{w as default};
