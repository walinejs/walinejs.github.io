import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as t}from"./app-BExGv8_h.js";const e={},p=t(`<p>Waline 通过 <code>RecentComments</code> 支持最新评论挂件显示，方便在博客侧边栏显示最近评论。</p><h2 id="组件选项" tabindex="-1"><a class="header-anchor" href="#组件选项"><span>组件选项</span></a></h2><p>最新评论挂件名为 <code>RecentComments</code>，包含三个选项:</p><ul><li><code>el</code> (可选的): 需要挂载的元素</li><li><code>serverURL</code>: 服务器地址</li><li><code>count</code> 需要获取的最近评论数量</li></ul><p>组件返回的数据格式应为 <code>Promise&lt;{ comment: WalineComment[], destroy: () =&gt; void }&gt;</code>。</p><ul><li><code>comment</code> 属性: 包含 <code>count</code> 数量的最近评论的数组</li><li><code>destroy</code> 方法: 销毁挂件的函数</li></ul><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h2><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> RecentComments <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/@waline/client/dist/waline.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline-recent&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这会使用默认样式渲染在 <code>#waline-recent</code> 上。</p></div><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2><p>如果对默认输出的格式不满意，你也可以不传入 <code>el</code> 选项，调用组件拿到数据之后自己进行渲染。</p><p>例子:</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>module<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> RecentComments <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;https://cdn.jsdelivr.net/npm/@waline/client/dist/waline.mjs&#39;</span><span class="token punctuation">;</span>

  <span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> comments <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;waline-recent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> comments<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>
      <span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>comment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,13),o=[p];function c(l,i){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","recent-comment.html.vue"]]),m=JSON.parse('{"path":"/guide/features/widget/recent-comment.html","title":"最新评论挂件","lang":"zh-CN","frontmatter":{"title":"最新评论挂件","icon":"recent","redirectFrom":"/guide/client/widget/recent-comment.html","description":"Waline 通过 RecentComments 支持最新评论挂件显示，方便在博客侧边栏显示最近评论。 组件选项 最新评论挂件名为 RecentComments，包含三个选项: el (可选的): 需要挂载的元素 serverURL: 服务器地址 count 需要获取的最近评论数量 组件返回的数据格式应为 Promise<{ comment: Wali...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/features/widget/recent-comment.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/features/widget/recent-comment.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"最新评论挂件"}],["meta",{"property":"og:description","content":"Waline 通过 RecentComments 支持最新评论挂件显示，方便在博客侧边栏显示最近评论。 组件选项 最新评论挂件名为 RecentComments，包含三个选项: el (可选的): 需要挂载的元素 serverURL: 服务器地址 count 需要获取的最近评论数量 组件返回的数据格式应为 Promise<{ comment: Wali..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T05:05:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T05:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"最新评论挂件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T05:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"组件选项","slug":"组件选项","link":"#组件选项","children":[]},{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"高级用法","slug":"高级用法","link":"#高级用法","children":[]}],"git":{"createdTime":1622293615000,"updatedTime":1693285544000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"guide/features/widget/recent-comment.md","localizedDate":"2021年5月29日","autoDesc":true}');export{k as comp,m as data};