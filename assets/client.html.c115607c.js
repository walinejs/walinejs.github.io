import{r as s,o as t,c as o,a as p,b as c,w as i,F as l,e as a,d as n}from"./app.1ee09725.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const d={},u=a(`<h2 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api" aria-hidden="true">#</a> Client API</h2><p>Waline provides three APIs:</p><ul><li><p><code>init(options: WalineInitOptions): WalineInstance</code></p></li><li><p><code>commentCount(options: WalineCommentCountOptions): WalineAbort</code></p></li><li><p><code>pageviewCount(options: WalinePageviewCountOptions): Abort</code></p></li></ul><p>As well as:</p><ul><li><p><code>widgets: Record&lt;string, WalineWidget&gt;</code>: Waline widget collection</p></li><li><p><code>version: string</code>: Waline client version</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> init</h2><p>The <code>init</code> API accepts a <code>WalineInitOptions</code> options and returns a <code>WalineInstance</code>.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">WalineInstance</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Element where Waline is mounted
   *
   * <span class="token keyword">@description</span> when initialized with \`el: null\`, it will be \`null\`
   */</span>
  el<span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Update Waline instance
   *
   * <span class="token keyword">@description</span> when not setting \`path\` option, it will be reset to \`window.location.pathname\`
   */</span>
  update<span class="token operator">:</span> <span class="token punctuation">(</span>newOptions<span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>WalineInitOptions<span class="token punctuation">,</span> <span class="token string">&#39;el&#39;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Unmount and destroy Waline instance
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,8),k=n("The initialization options accept all options supported by "),m=n("Waline Component"),h=n(", in addition, the following options are added."),w=a(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h3><ul><li>Type: <code>string | HTMLElement | null</code></li><li>Default: <code>&#39;#waline&#39;</code></li></ul><p>The DOM element to be mounted on initialization. It must be a valid <strong>CSS selector string</strong> or HTMLElement Object.</p><p>If you only want the counter below, set this option to <code>null</code>.</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment" aria-hidden="true">#</a> comment</h3><ul><li>Type: <code>boolean | string</code></li><li>Default: <code>false</code></li></ul><p>Article comment count counter, when filled in a string, it will be used as a CSS selector.</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview" aria-hidden="true">#</a> pageview</h3><ul><li>Type: <code>boolean | string</code></li><li>Default: <code>false</code></li></ul><p>Pageview counter. When filled in a string, it will be used as a CSS selector.</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount" aria-hidden="true">#</a> commentCount</h2><p>The <code>commentCount</code> function receives the <code>WalineCommentCountOptions</code> option and updates the number of article comments on the page, and returns a function <code>WalineAbort</code> that can cancel the current operation.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineCommentCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline server url
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Commment count CSS selector
   *
   * <span class="token keyword">@default</span> &#39;.waline-comment-count&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Path to be fetched by default
   *
   * <span class="token keyword">@default</span> window.location.pathname
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount" aria-hidden="true">#</a> pageviewCount</h2><p>The <code>pageviewCount</code> function receives the <code>WalinePageviewCountOptions</code> option and updates the number of article comments on the page, and returns a function <code>WalineAbort</code> that can cancel the current operation.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalinePageviewCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline server url
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Pageview CSS selector
   *
   * <span class="token keyword">@default</span> &#39;.waline-pageview-count&#39;
   */</span>
  selector<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Path to be fetched and updated
   *
   * <span class="token keyword">@default</span> window.location.pathname
   */</span>
  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Whether update pageviews when fetching path result
   *
   * <span class="token keyword">@default</span> true
   */</span>
  update<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div>`,16);function g(f,b){const e=s("RouterLink");return t(),o(l,null,[u,p("p",null,[k,c(e,{to:"/en/reference/component.html"},{default:i(()=>[m]),_:1}),h]),w],64)}var W=r(d,[["render",g],["__file","client.html.vue"]]);export{W as default};
