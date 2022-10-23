import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,f as e,a as n,b as s,d as c,e as l,r as i}from"./app.aa64f60b.js";const u={},r=n("p",null,"Waline allows users to add emoticons search services and customize this feature.",-1),k=n("h2",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),s(" Introduction")],-1),d={href:"https://giphy.com/",target:"_blank",rel:"noopener noreferrer"},m=l(`<h2 id="disable" tabindex="-1"><a class="header-anchor" href="#disable" aria-hidden="true">#</a> disable</h2><p>If you don&#39;t need the default images search service, you can disable it by setting the <code>search</code> option to <code>false</code>.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> customize</h2><p>You can customize the images search service through the search option.</p><p>For each action, you should return an array containing the image information as the search result.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineSearchImageData</span> <span class="token keyword">extends</span> <span class="token class-name">Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Image link
   */</span>
  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Image title
   *
   * <span class="token keyword">@description</span> Used for alt attribute of image
   */</span>
  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Image preview link
   *
   * <span class="token keyword">@description</span> For better loading performance, we will use this thumbnail first in the list
   *
   * <span class="token keyword">@default</span> src
   */</span>
  preview<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WalineSearchResult</span> <span class="token operator">=</span> WalineSearchImageData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre></div><p>The plugin doesn&#39;t care if there are extra attributes in the image result, but you should provide an alt text <code>title</code> whenever possible to help with accessibility and in case the image service fails. At the same time, in order to make the list load faster, if the image service returns image addresses of multiple sizes, you should choose a small size image as <code>preview</code> to improve the loading speed of the list image.</p><p>The three functions you need to pass in are as follows.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineSearchOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Search action
   */</span>
  <span class="token function-variable function">search</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Default result when opening list
   *
   * <span class="token keyword">@default</span> () =&gt; search(&#39;&#39;)
   */</span>
  <span class="token keyword">default</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Fetch more action
   *
   * <span class="token keyword">@description</span> It will be triggered when the list scrolls to the bottom. If your search service supports paging, you should set this to achieve infinite scrolling
   *
   * <span class="token keyword">@default</span> (word) =&gt; search(word)
   */</span>
  more<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>word<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> currectCount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineSearchResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Since you need to implement at least the search logic, <code>search</code> is required. Waline will pass in the user search terms and expect this function to return a Promise containing the search results.</p><p>We hope that users can see some hot pictures or emoji results when they open it, so we provide the <code>default</code> function to achieve this. If your service provider provides an api for popular pictures or emoticons, you should use this api to return content. Also, since the default behavior of this function is to search for empty strings, if your search provider returns empty results in this case, we recommend that you add a brief implementation of random preset words to avoid showing an empty list.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">search</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token comment">// returning result</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    search<span class="token punctuation">,</span>
    <span class="token function-variable function">default</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
      <span class="token function">search</span><span class="token punctuation">(</span>
        <span class="token comment">// random between 3 words</span>
        <span class="token punctuation">[</span><span class="token string">&#39;laugh&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cry&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;smile&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">]</span>
      <span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Usually, your search service will support pagination, so we provide a <code>more</code> function to trigger when the user swipes to the bottom and load more images to let you return more results.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>For a better experience, we recommend setting the number of pagination to 20 - 40, that is, 20 - 40 images are loaded each time.</p></div><div class="custom-container info"><p class="custom-container-title">Info</p><p>Here is an example to help you understand the process. When the user clicks the search button, we will trigger <code>default()</code>, if this function is missing, we will trigger <code>search(&#39;&#39;)</code>, and we will wait for the Promise to execute and render with the returned result.</p><p>When the user searches for <code>smile</code>, we execute <code>search(&#39;smile&#39;)</code>. Suppose you return 20 results each time, when the user continues to scroll down, we will trigger <code>more(&#39;smile&#39;, 20)</code>, <code>more(&#39;smile&#39;, 40)</code>, <code>more(&#39;smile&#39;, 60 )</code> ...</p></div><details class="custom-container details"><summary>Default implementation</summary><div class="language-typescript ext-ts"><pre class="language-typescript"><code>  <span class="token keyword">interface</span> <span class="token class-name">GifsResult</span> <span class="token punctuation">{</span>
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
</code></pre></div></details>`,18);function g(h,f){const a=i("ExternalLinkIcon");return p(),o("div",null,[r,e(" more "),k,n("p",null,[s("By default, Waline provides meme search service through "),n("a",d,[s("Giphy"),c(a)]),s(". This will allow you to search for images and add to comments while commenting.")]),m])}const b=t(u,[["render",g],["__file","search.html.vue"]]);export{b as default};
