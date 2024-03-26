import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o,c as p,b as i,e as n,f as l,w as c,d as s}from"./app-DydtCeHt.js";const r={},d=s(`<h2 id="客户端-api" tabindex="-1"><a class="header-anchor" href="#客户端-api"><span>客户端 API</span></a></h2><p>Waline 提供三个 API:</p><ul><li><p><code>init</code>: 初始化 Waline</p></li><li><p><code>commentCount</code>: 评论数统计</p></li><li><p><code>pageviewCount</code>: 访问量统计</p></li></ul><p>以及:</p><ul><li><p><code>RecentComment</code>: 最近评论</p></li><li><p><code>UserList</code>: 用户列表</p></li><li><p><code>version</code>: Waline 客户端版本</p></li></ul><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init"><span>init</span></a></h2><p><code>init</code> 函数接收一个 <code>WalineInitOptions</code> 初始化选项，并返回一个 <code>WalineInstance</code>。</p><p>类型:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineInitOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineInstance<span class="token punctuation">;</span>
</code></pre></div><p>返回值:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineInstance</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),u=s(`<h3 id="el" tabindex="-1"><a class="header-anchor" href="#el"><span>el</span></a></h3><ul><li>类型: <code>string | HTMLElement | null</code></li><li>默认值: <code>&#39;#waline&#39;</code></li></ul><p>Waline 的初始化挂载器。必须是一个有效的 <strong>CSS 选择器</strong> 或 HTMLElement 对象。</p><p>如果你只需要下方的统计，请将此选项设置为 <code>null</code>。</p><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>comment</span></a></h3><ul><li>类型: <code>boolean | string</code></li><li>默认值: <code>false</code></li></ul><p>文章评论数统计，填入字符串时会作为 CSS 选择器。</p><h3 id="pageview" tabindex="-1"><a class="header-anchor" href="#pageview"><span>pageview</span></a></h3><ul><li>类型: <code>boolean | string</code></li><li>默认值: <code>false</code></li></ul><p>文章浏览量统计，填入字符串时会作为 CSS 选择器。</p><h2 id="commentcount" tabindex="-1"><a class="header-anchor" href="#commentcount"><span>commentCount</span></a></h2><p><code>commentCount</code> 函数接收 <code>WalineCommentCountOptions</code> 选项，并负责更新页面上的文章评论数，同时返回一个可以取消当前操作的函数 <code>WalineAbort</code>。</p><p>类型:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">commentCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalineCommentCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineCommentCountOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="pageviewcount" tabindex="-1"><a class="header-anchor" href="#pageviewcount"><span>pageviewCount</span></a></h2><p><code>pageviewCount</code> 函数接收 <code>WalinePageviewCountOptions</code> 选项，并负责更新页面上的文章评论数，同时返回一个可以取消当前操作的函数 <code>WalineAbort</code>。</p><p>类型:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">pageviewCount</span><span class="token operator">:</span> <span class="token punctuation">(</span>options<span class="token operator">:</span> WalinePageviewCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> WalineAbort<span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalinePageviewCountOptions</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineAbort</span> <span class="token operator">=</span> <span class="token punctuation">(</span>reason<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="挂件" tabindex="-1"><a class="header-anchor" href="#挂件"><span>挂件</span></a></h2><h3 id="recentcomments" tabindex="-1"><a class="header-anchor" href="#recentcomments"><span>RecentComments</span></a></h3><p><code>RecentComments</code> 是一个展示最近评论的挂件。</p><p>类型:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">RecentComments</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> WalineRecentCommentsOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineRecentCommentsResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsOptions</span> <span class="token punctuation">{</span>
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
</code></pre></div><p>返回值:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineRecentCommentsResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 评论数据
   */</span>
  comments<span class="token operator">:</span> WalineComment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 取消挂载挂件
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="userlist" tabindex="-1"><a class="header-anchor" href="#userlist"><span>UserList</span></a></h3><p><code>UserList</code> 是一个展示用户互动排行榜或者评论墙的挂件。</p><p>类型:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token function-variable function">UserList</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> WalineUserListOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineUserListResult<span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div><p>选项:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineUserListOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline 服务端地址
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 获取用户列表的数量
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 需要挂载的元素
   */</span>
  el<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> HTMLElement<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 错误提示消息所使用的语言
   *
   * <span class="token keyword">@default</span> &#39;zh-CN&#39;
   */</span>
  lang<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 自定义 waline 语言显示
   *
   * <span class="token keyword">@see</span> [自定义语言](https://waline.js.org/client/i18n.html)
   */</span>
  locale<span class="token operator">?</span><span class="token operator">:</span> WalineLocale<span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 列表模式还是头像墙模式
   *
   * list mode or avatar wall mode
   */</span>
  mode<span class="token operator">:</span> <span class="token string">&#39;list&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;wall&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回值:</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">WalineUserListResult</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 用户数据
   */</span>
  users<span class="token operator">:</span> WalineUser<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * 取消挂载挂件
   */</span>
  <span class="token function-variable function">destroy</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,43);function m(v,k){const a=t("RouteLink");return o(),p("div",null,[d,i("p",null,[n("初始化选项接受所有 "),l(a,{to:"/reference/client/props.html"},{default:c(()=>[n("Waline 组件属性")]),_:1}),n("，此外，新增下列选项。")]),u])}const h=e(r,[["render",m],["__file","api.html.vue"]]),y=JSON.parse('{"path":"/reference/client/api.html","title":"客户端 API","lang":"zh-CN","frontmatter":{"title":"客户端 API","icon":"config","redirectFrom":"/reference/client.html","description":"客户端 API Waline 提供三个 API: init: 初始化 Waline commentCount: 评论数统计 pageviewCount: 访问量统计 以及: RecentComment: 最近评论 UserList: 用户列表 version: Waline 客户端版本 init init 函数接收一个 WalineInitOption...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/reference/client/api.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/reference/client/api.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"客户端 API"}],["meta",{"property":"og:description","content":"客户端 API Waline 提供三个 API: init: 初始化 Waline commentCount: 评论数统计 pageviewCount: 访问量统计 以及: RecentComment: 最近评论 UserList: 用户列表 version: Waline 客户端版本 init init 函数接收一个 WalineInitOption..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-12-14T10:13:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-14T10:13:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"客户端 API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-14T10:13:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"客户端 API","slug":"客户端-api","link":"#客户端-api","children":[]},{"level":2,"title":"init","slug":"init","link":"#init","children":[{"level":3,"title":"el","slug":"el","link":"#el","children":[]},{"level":3,"title":"comment","slug":"comment","link":"#comment","children":[]},{"level":3,"title":"pageview","slug":"pageview","link":"#pageview","children":[]}]},{"level":2,"title":"commentCount","slug":"commentcount","link":"#commentcount","children":[]},{"level":2,"title":"pageviewCount","slug":"pageviewcount","link":"#pageviewcount","children":[]},{"level":2,"title":"挂件","slug":"挂件","link":"#挂件","children":[{"level":3,"title":"RecentComments","slug":"recentcomments","link":"#recentcomments","children":[]},{"level":3,"title":"UserList","slug":"userlist","link":"#userlist","children":[]}]}],"git":{"createdTime":1669825130000,"updatedTime":1702548824000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":2.56,"words":768},"filePathRelative":"reference/client/api.md","localizedDate":"2022年11月30日","autoDesc":true}');export{h as comp,y as data};
