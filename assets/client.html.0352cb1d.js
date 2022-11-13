import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as p,b as n,d as c,w as l,e as a,r as i}from"./app.f1a7f2c3.js";const r={},u=a(`<h2 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api" aria-hidden="true">#</a> 客户端 API</h2><p>Waline 提供三个 API:</p><ul><li><p><code>init</code>: 初始化 Waline</p></li><li><p><code>commentCount</code>: 评论数统计</p></li><li><p><code>pageviewCount</code>: 访问量统计</p></li></ul><p>以及:</p><ul><li><p><code>RecentComment</code>: 最近评论</p></li><li><p><code>version: string</code>: Waline 客户端版本</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p><code>init</code> 函数接收一个 <code>WalineInitOptions</code> 初始化选项，并返回一个 <code>WalineInstance</code>。</p><p>类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineInitOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineInstance<span class="token punctuation">;</span>
</code></pre></div><p>返回值:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineInstance</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline 被挂载到的元素
   *
   * <span class="token keyword">@description</span> 当通过 \`el: null\` 初始化，值为 \`null\`
   */</span>
  el<span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 更新 Waline 实例
   *
   * <span class="token keyword">@description</span> 只要不设置\`path\` 选项，更新时它就会被重置为 \`windows.location.pathname\`
   */</span>
  update<span class="token operator">:</span> <span class="token punctuation">(</span>newOptions<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>WalineInitOptions<span class="token punctuation">,</span> <span class="token string">&#39;el&#39;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 取消挂载并摧毁 Waline 实例
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,11),d=a(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h3><ul><li>类型: <code>string | HTMLElement | null</code></li><li>默认值: <code>&#39;#waline&#39;</code></li></ul><p>Waline 的初始化挂载器。必须是一个有效的 <strong>CSS 选择器</strong> 或 HTMLELement 对象。</p><p>如果你只需要下方的统计，请将此选项设置为 <code>null</code>。</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><ul><li>类型: <code>boolean | string</code></li><li>默认值: <code>false</code></li></ul><p>文章评论数统计，填入字符串时会作为 CSS 选择器。</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h3><ul><li>类型: <code>boolean | string</code></li><li>默认值: <code>false</code></li></ul><p>文章浏览量统计，填入字符串时会作为 CSS 选择器。</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount" aria-hidden="true">#</a> commentCount</h2><p><code>commentCount</code> 函数接收 <code>WalineCommentCountOptions</code> 选项，并负责更新页面上的文章评论数，同时返回一个可以取消当前操作的函数 <code>WalineAbort</code>。</p><p>类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">commentCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineCommentCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineCommentCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline 服务端地址
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 评论数 CSS 选择器
   *
   * <span class="token keyword">@default</span> &#39;.waline-comment-count&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 需要获取的默认路径
   *
   * <span class="token keyword">@default</span> window.location.pathname
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>返回值:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount" aria-hidden="true">#</a> pageviewCount</h2><p><code>pageviewCount</code> 函数接收 <code>WalinePageviewCountOptions</code> 选项，并负责更新页面上的文章评论数，同时返回一个可以取消当前操作的函数 <code>WalineAbort</code>。</p><p>类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">pageviewCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalinePageviewCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalinePageviewCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline 服务端地址
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 评论数 CSS 选择器
   *
   * <span class="token keyword">@default</span> &#39;.waline-pageview-count&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 需要更新和获取的路径
   *
   * <span class="token keyword">@default</span> window.location.pathname
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 是否在查询时更新 path 的浏览量
   *
   * <span class="token keyword">@default</span> true
   */</span>
  update<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>返回值:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="挂件" tabindex="-1"><a class="header-anchor" href="#挂件" aria-hidden="true">#</a> 挂件</h2><h3 id="recentcomments" tabindex="-1"><a class="header-anchor" href="#recentcomments" aria-hidden="true">#</a> RecentComments</h3><p><code>RecentComments</code> 是一个展示最近评论的挂件。</p><p>类型:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">RecentComments</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> WalineRecentCommentsOptions
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineRecentCommentsResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline 服务端地址
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 获取最新评论的数量
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 需要挂载的元素
   */</span>
  el<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>返回值:</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 评论数据
   */</span>
  comments<span class="token operator">:</span> WalineComment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 取消挂载挂件
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,35);function k(m,g){const s=i("RouterLink");return t(),o("div",null,[u,p("p",null,[n("初始化选项接受所有 "),c(s,{to:"/reference/component.html"},{default:l(()=>[n("Waline 组件")]),_:1}),n(" 支持的选项，此外，新增下列选项。")]),d])}const y=e(r,[["render",k],["__file","client.html.vue"]]);export{y as default};
