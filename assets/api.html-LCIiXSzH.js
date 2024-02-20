import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as i,b as p,e as n,f as l,w as c,d as s}from"./app-gy89NXSw.js";const r={},d=s(`<h2 id="client-api" tabindex="-1"><a class="header-anchor" href="#client-api"><span>Client API</span></a></h2><p>Waline provides three APIs:</p><ul><li><p><code>init</code>: Initialize Waline</p></li><li><p><code>commentCount</code>: Count comments</p></li><li><p><code>pageviewCount</code>: Count pageviews</p></li></ul><p>As well as:</p><ul><li><p><code>RecentComment</code>: Waline recent comments widget</p></li><li><p><code>UserList</code>: User List</p></li><li><p><code>version</code>: Waline client version</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><p>The <code>init</code> API accepts a <code>WalineInitOptions</code> options and returns a <code>WalineInstance</code>.</p><p>Type:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineInitOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineInstance<span class="token punctuation">;</span>
</code></pre></div><p>Return:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineInstance</span> <span class="token punctuation">{</span>
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
  update<span class="token operator">:</span> <span class="token punctuation">(</span>newOptions<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Omit<span class="token operator">&lt;</span>WalineInitOptions<span class="token punctuation">,</span> <span class="token string">&#39;el&#39;</span><span class="token operator">&gt;&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Unmount and destroy Waline instance
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),u=s(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el"><span>el</span></a></h3><ul><li>Type: <code>string | HTMLElement | null</code></li><li>Default: <code>&#39;#waline&#39;</code></li></ul><p>The DOM element to be mounted on initialization. It must be a valid <strong>CSS selector string</strong> or HTMLElement Object.</p><p>If you only want the counter below, set this option to <code>null</code>.</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3><ul><li>Type: <code>boolean | string</code></li><li>Default: <code>false</code></li></ul><p>Article comment count counter, when filled in a string, it will be used as a CSS selector.</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview"><span>pageview</span></a></h3><ul><li>Type: <code>boolean | string</code></li><li>Default: <code>false</code></li></ul><p>Pageview counter. When filled in a string, it will be used as a CSS selector.</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount"><span>commentCount</span></a></h2><p>The <code>commentCount</code> function receives the <code>WalineCommentCountOptions</code> option and updates the number of article comments on the page, and returns a function <code>WalineAbort</code> that can cancel the current operation.</p><p>Type:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">commentCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineCommentCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>Options:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineCommentCountOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline server url
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Comment count CSS selector
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Returns:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount"><span>pageviewCount</span></a></h2><p>The <code>pageviewCount</code> function receives the <code>WalinePageviewCountOptions</code> option and updates the number of article comments on the page, and returns a function <code>WalineAbort</code> that can cancel the current operation.</p><p>Type:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">pageviewCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalinePageviewCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>Options:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalinePageviewCountOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Returns:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="widgets" tabindex="-1"><a class="header-anchor" href="#widgets"><span>Widgets</span></a></h2><h3 id="recentcomments" tabindex="-1"><a class="header-anchor" href="#recentcomments"><span>RecentComments</span></a></h3><p><code>RecentComments</code> is a widget displaying recent comments.</p><p>Type:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">RecentComments</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> WalineRecentCommentsOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineRecentCommentsResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>Options:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline serverURL
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * fetch number of latest comments
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Element to be mounted
   */</span>
  el<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>Returns:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Comment Data
   */</span>
  comments<span class="token operator">:</span> WalineComment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Umount widget
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="userlist" tabindex="-1"><a class="header-anchor" href="#userlist"><span>UserList</span></a></h3><p><code>UserList</code> is a widget that displays user interaction leader boards or comment walls.</p><p>Type:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">RecentComments</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> WalineRecentCommentsOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineRecentCommentsResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>Options:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineUserListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline serverURL
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * fetch number of user list
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Element to be mounted
   */</span>
  el<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Language of error message
   *
   * <span class="token keyword">@default</span> &#39;zh-CN&#39;
   */</span>
  lang<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Custom display language in waline
   *
   * <span class="token keyword">@see</span> [I18n](https://waline.js.org/en/client/i18n.html)
   */</span>
  locale<span class="token operator">?</span><span class="token operator">:</span> WalineLocale<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * list mode or avatar wall mode
   */</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;wall&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Returns:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineUserListResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * User Data
   */</span>
  users<span class="token operator">:</span> WalineUser<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Umount widget
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,43);function m(v,k){const e=t("RouteLink");return o(),i("div",null,[d,p("p",null,[n("The initialization options accept all "),l(e,{to:"/en/reference/client/props.html"},{default:c(()=>[n("Waline Component Props")]),_:1}),n(", in addition, the following options are added.")]),u])}const h=a(r,[["render",m],["__file","api.html.vue"]]),w=JSON.parse('{"path":"/en/reference/client/api.html","title":"Client API","lang":"en-US","frontmatter":{"title":"Client API","icon":"config","redirectFrom":"/en/reference/client.html","description":"Client API Waline provides three APIs: init: Initialize Waline commentCount: Count comments pageviewCount: Count pageviews As well as: RecentComment: Waline recent comments widg...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/reference/client/api.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/reference/client/api.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Client API"}],["meta",{"property":"og:description","content":"Client API Waline provides three APIs: init: Initialize Waline commentCount: Count comments pageviewCount: Count pageviews As well as: RecentComment: Waline recent comments widg..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-29T05:05:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T05:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Client API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T05:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Client API","slug":"client-api","link":"#client-api","children":[]},{"level":2,"title":"init","slug":"init","link":"#init","children":[{"level":3,"title":"el","slug":"el","link":"#el","children":[]},{"level":3,"title":"comment","slug":"comment","link":"#comment","children":[]},{"level":3,"title":"pageview","slug":"pageview","link":"#pageview","children":[]}]},{"level":2,"title":"commentCount","slug":"commentcount","link":"#commentcount","children":[]},{"level":2,"title":"pageviewCount","slug":"pageviewcount","link":"#pageviewcount","children":[]},{"level":2,"title":"Widgets","slug":"widgets","link":"#widgets","children":[{"level":3,"title":"RecentComments","slug":"recentcomments","link":"#recentcomments","children":[]},{"level":3,"title":"UserList","slug":"userlist","link":"#userlist","children":[]}]}],"git":{"createdTime":1669825130000,"updatedTime":1693285544000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2}]},"readingTime":{"minutes":1.81,"words":543},"filePathRelative":"en/reference/client/api.md","localizedDate":"November 30, 2022","autoDesc":true}');export{h as comp,w as data};
