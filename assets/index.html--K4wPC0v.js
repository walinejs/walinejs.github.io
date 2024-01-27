import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as e}from"./app-dFfb9JiX.js";const i={},t=e(`<p>Waline 官方提供 <code>@waline/api</code> 包，以供官方客户端、第三方客户端开发者和用户调用 Waline 后端接口。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api"><span>API</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Waline 服务端地址
   *
   * Waline serverURL
   */</span>
  serverURL<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 错误信息所使用的语言
   *
   * Language used in error text
   */</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">ErrorStatusResponse</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 错误代码
   *
   * Error number
   */</span>
  errno<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 错误消息
   *
   * Error msg
   */</span>
  errmsg<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">GetArticleCounterOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 待获取计数器的 path
   *
   * Path of counters
   */</span>
  paths<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 待获取计数器的类型
   *
   * Counter type to be fetched
   */</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 取消请求的信号
   *
   * AbortSignal to cancel request
   */</span>
  signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">GetArticleCounterResponse</span> <span class="token operator">=</span>
  <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span>
  <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">getArticleCounter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  paths<span class="token punctuation">,</span>
  type<span class="token punctuation">,</span>
  signal<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> GetArticleCounterOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>GetArticleCounterResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">UpdateArticleCounterOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 待更新计数器的 path
   *
   * Path of counter to be updated
   */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 待更新计数器的类型
   *
   * Counter type to be updated
   */</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 更新操作
   *
   * Update operation
   *
   * <span class="token keyword">@default</span> &#39;inc&#39;
   */</span>
  action<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;inc&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;desc&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">updateArticleCounter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  path<span class="token punctuation">,</span>
  type<span class="token punctuation">,</span>
  action<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> UpdateArticleCounterOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">type</span> <span class="token class-name">WalineCommentStatus</span> <span class="token operator">=</span> <span class="token string">&#39;approved&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;waiting&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;spam&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">type</span> <span class="token class-name">WalineUserType</span> <span class="token operator">=</span> <span class="token string">&#39;administrator&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;guest&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">WalineCommentData</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * User Nickname
   */</span>
  nick<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User email
   */</span>
  mail<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User link
   */</span>
  link<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Content of comment
   */</span>
  comment<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User Agent
   */</span>
  ua<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Comment page path
   */</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Parent comment id
   *
   * <span class="token keyword">@description</span> Only available when replying comment
   */</span>
  pid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Root comment id
   *
   * <span class="token keyword">@description</span> Only available when replying comment
   */</span>
  rid<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User id being at
   *
   * <span class="token keyword">@description</span> Only available when replying comment
   */</span>
  at<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Recaptcha Token
   */</span>
  recaptchaV3<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Turnstile Token
   */</span>
  turnstile<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">BaseWalineResponseComment</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Comment object ID
   */</span>
  objectId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Time ISOString when the comment is created
   */</span>
  createdAt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Time ISOString when the comment is inserted
   */</span>
  insertedAt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Time ISOString when the comment is updated
   */</span>
  updatedAt<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Content of comment
   */</span>
  comment<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Original comment content
   *
   * 原始评论内容
   */</span>
  orig<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Comment like number
   *
   * 评论喜欢数
   */</span>
  like<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User Nickname
   */</span>
  nick<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User link
   */</span>
  link<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User avatar
   */</span>
  avatar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User type
   *
   * <span class="token keyword">@description</span> Only available with logged in user
   *
   * 用户类型
   *
   * <span class="token keyword">@description</span> 仅在登录用户时可用
   */</span>
  type<span class="token operator">?</span><span class="token operator">:</span> WalineUserType<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User ID
   *
   * <span class="token keyword">@description</span> Only available with logged in user
   *
   * 用户 ID
   *
   * <span class="token keyword">@description</span> 仅在登录用户时可用
   */</span>
  user_id<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User location
   *
   * <span class="token keyword">@description</span> Not available with \`DISABLE_REGION=true\`
   *
   * 用户位置
   *
   * <span class="token keyword">@description</span> \`DISABLE_REGION=true\` 时不可用
   */</span>
  addr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User browser
   *
   * <span class="token keyword">@description</span> Not available with \`DISABLE_USERAGENT=true\`
   *
   * 用户浏览器
   *
   * <span class="token keyword">@description</span> \`DISABLE_USERAGENT=true\` 时不可用
   */</span>
  browser<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User location
   *
   * <span class="token keyword">@description</span> Not available with \`DISABLE_USERAGENT=true\`
   *
   * 用户位置
   *
   * <span class="token keyword">@description</span> \`DISABLE_USERAGENT=true\` 时不可用
   */</span>
  os<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User level
   *
   * <span class="token keyword">@description</span> Only available when \`LEVELS\` is set
   *
   * 用户等级
   *
   * <span class="token keyword">@description</span> 仅在 \`LEVELS\` 设置时可用
   */</span>
  level<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User label
   *
   * 用户标签
   */</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Comment status
   *
   * <span class="token keyword">@description</span> For administrators, \`approved\` \`spam\` \`waiting\` can be get, for others, the only value is \`approved\`
   *
   * 评论状态
   *
   * <span class="token keyword">@description</span> 管理员可获得 \`approved\`、\`spam\` 和 \`waiting\`，其他用户只能获得 \`approved\`
   */</span>
  status<span class="token operator">?</span><span class="token operator">:</span> WalineCommentStatus<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">WalineChildComment</span> <span class="token keyword">extends</span> <span class="token class-name">BaseWalineResponseComment</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Parent comment id
   */</span>
  pid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Root comment id
   */</span>
  rid<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * User id being at
   */</span>
  at<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">WalineRootComment</span> <span class="token keyword">extends</span> <span class="token class-name">BaseWalineResponseComment</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Whether the comment is sticky
   *
   * 是否置顶
   */</span>
  sticky<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Child comments
   *
   * 子评论
   */</span>
  children<span class="token operator">:</span> WalineChildComment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">WalineComment</span> <span class="token operator">=</span> WalineRootComment <span class="token operator">|</span> WalineChildComment<span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GetCommentOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 待获取评论列表的 path
   *
   * Path of comment list
   */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论分页数
   *
   * Comment pagination number
   */</span>
  page<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 每页评论个数
   *
   * Comment number per page
   */</span>
  pageSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 排序方式
   *
   * Sort method
   */</span>
  sortBy<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户令牌
   *
   * User token
   */</span>
  token<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 取消请求的信号
   *
   * AbortSignal to cancel request
   */</span>
  signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">GetCommentResponse</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 评论数量
   *
   * Comment number
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论分页数
   *
   * Comment pagination number
   */</span>
  page<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 每页评论个数
   *
   * Comment number per page
   */</span>
  pageSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论数据
   *
   * Comment Data
   */</span>
  data<span class="token operator">:</span> WalineRootComment<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 页面总数
   *
   * Page number
   */</span>
  totalPages<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">getComment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  path<span class="token punctuation">,</span>
  page<span class="token punctuation">,</span>
  pageSize<span class="token punctuation">,</span>
  sortBy<span class="token punctuation">,</span>
  signal<span class="token punctuation">,</span>
  token<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> GetCommentOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>GetCommentResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">AddCommentOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 用户令牌
   *
   * User token
   */</span>
  token<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户待提交的评论数据
   *
   * Comment data being submitted by user
   */</span>
  comment<span class="token operator">:</span> WalineCommentData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">AddCommentResponse</span> <span class="token keyword">extends</span> <span class="token class-name">ErrorStatusResponse</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 渲染好的评论数据
   *
   * Comment data rendered
   */</span>
  data<span class="token operator">?</span><span class="token operator">:</span> WalineComment<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">addComment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  token<span class="token punctuation">,</span>
  comment<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> AddCommentOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>AddCommentResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">DeleteCommentOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Auth token
   *
   * 认证令牌
   */</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * Comment objectId to be deleted
   *
   * 待删除的评论对象 ID
   */</span>
  objectId<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">DeleteCommentResponse</span> <span class="token keyword">extends</span> <span class="token class-name">ErrorStatusResponse</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">deleteComment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  token<span class="token punctuation">,</span>
  objectId<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> DeleteCommentOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>DeleteCommentResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">UpdateWalineCommentData</span> <span class="token keyword">extends</span> <span class="token class-name">Partial<span class="token operator">&lt;</span>WalineCommentData<span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 点赞还是取消点赞
   *
   * Like or dislike
   */</span>
  like<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论的状态
   *
   * Comment status
   */</span>
  status<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">&#39;approved&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;waiting&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;spam&#39;</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论指定状态
   *
   * Comment sticky status
   *
   * <span class="token keyword">@description</span> 0 means not sticky and 1 means sticky
   */</span>
  sticky<span class="token operator">?</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token operator">|</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">UpdateCommentOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 用户令牌
   *
   * User token
   */</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论的 ID
   *
   * Comment ID
   */</span>
  objectId<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 评论数据
   *
   * Comment data
   */</span>
  comment<span class="token operator">?</span><span class="token operator">:</span> UpdateWalineCommentData<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">UpdateCommentResponse</span> <span class="token keyword">extends</span> <span class="token class-name">ErrorStatusResponse</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 更新后的评论数据
   *
   * Comment data rendered
   */</span>
  data<span class="token operator">:</span> WalineComment<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">updateComment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  token<span class="token punctuation">,</span>
  objectId<span class="token punctuation">,</span>
  comment<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> UpdateCommentOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>UpdateCommentResponse<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GetCommentCountOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 待获取评论数的 path
   *
   * Path of pages to be fetched
   */</span>
  paths<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 取消请求的信号
   *
   * AbortSignal to cancel request
   */</span>
  signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">fetchCommentCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  paths<span class="token punctuation">,</span>
  signal<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> GetCommentCountOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">UserInfo</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 显示姓名
   *
   * User name displayed
   */</span>
  display_name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户电子邮件地址
   *
   * User email
   */</span>
  email<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户网站地址
   *
   * User website
   */</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户令牌
   *
   * User token
   */</span>
  token<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户头像
   *
   * User avatar
   */</span>
  avatar<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户邮箱 MD5
   *
   * MD5 of User email
   */</span>
  mailMd5<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户对象 ID
   *
   * User object ID
   */</span>
  objectId<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户身份
   *
   * User role
   */</span>
  type<span class="token operator">:</span> <span class="token string">&#39;administrator&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;guest&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">login</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> lang<span class="token punctuation">,</span> serverURL <span class="token punctuation">}</span><span class="token operator">:</span> BaseAPIOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>
  UserInfo <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
    remember<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GetPageviewOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 待获取页面的 path
   *
   * Path of pages
   */</span>
  paths<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 取消请求的信号
   *
   * AbortSignal to cancel request
   */</span>
  signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">getPageview</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  paths<span class="token punctuation">,</span>
  signal<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> GetPageviewOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token keyword">interface</span> <span class="token class-name">UpdatePageviewOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 待更新页面的 path
   *
   * Path of pages
   */</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">updatePageview</span><span class="token operator">:</span> <span class="token punctuation">(</span>
  options<span class="token operator">:</span> UpdatePageviewOptions<span class="token punctuation">,</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GetRecentCommentOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 获取评论的数量
   *
   * Comment number to be fetched
   */</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 取消请求的信号
   *
   * AbortSignal to cancel request
   */</span>
  signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 用户令牌
   *
   * User token
   */</span>
  token<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">RecentCommentData</span> <span class="token keyword">extends</span> <span class="token class-name">BaseWalineResponseComment</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * Page url where comment locales
   *
   * 评论所在页面地址
   */</span>
  url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">getRecentComment</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
  count<span class="token punctuation">,</span>
  signal<span class="token punctuation">,</span>
  token<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> GetRecentCommentOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>RecentCommentData<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">GetUserListOptions</span> <span class="token keyword">extends</span> <span class="token class-name">BaseAPIOptions</span> <span class="token punctuation">{</span>
  <span class="token doc-comment comment">/**
   * 每页个数
   *
   * Number per page
   */</span>
  pageSize<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token doc-comment comment">/**
   * 取消请求的信号
   *
   * AbortSignal to cancel request
   */</span>
  signal<span class="token operator">?</span><span class="token operator">:</span> AbortSignal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">WalineUser</span>
  <span class="token keyword">extends</span> <span class="token class-name">Pick<span class="token operator">&lt;</span>WalineComment<span class="token punctuation">,</span> <span class="token string">&#39;nick&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;link&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;avatar&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;label&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;level&#39;</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  count<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">GetUserListResponse</span> <span class="token keyword">extends</span> <span class="token class-name">ErrorStatusResponse</span> <span class="token punctuation">{</span>
  data<span class="token operator">:</span> WalineUser<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">declare</span> <span class="token keyword">const</span> <span class="token function-variable function">getUserList</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
  serverURL<span class="token punctuation">,</span>
  signal<span class="token punctuation">,</span>
  pageSize<span class="token punctuation">,</span>
  lang<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token operator">:</span> GetUserListOptions<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>WalineUser<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  <span class="token keyword">type</span> <span class="token class-name">AddCommentOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">AddCommentResponse</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">BaseWalineResponseComment</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">DeleteCommentOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">DeleteCommentResponse</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetArticleCounterOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetArticleCounterResponse</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetCommentCountOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetCommentOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetCommentResponse</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetRecentCommentOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetUserListOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">GetUserListResponse</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">RecentCommentData</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">UpdateArticleCounterOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">UpdateCommentOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">UpdateCommentResponse</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">UpdatePageviewOptions</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">UserInfo</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineChildComment</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineComment</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineCommentData</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineCommentStatus</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineRootComment</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineUser</span><span class="token punctuation">,</span>
  <span class="token keyword">type</span> <span class="token class-name">WalineUserType</span><span class="token punctuation">,</span>
  addComment<span class="token punctuation">,</span>
  deleteComment<span class="token punctuation">,</span>
  fetchCommentCount<span class="token punctuation">,</span>
  getArticleCounter<span class="token punctuation">,</span>
  getComment<span class="token punctuation">,</span>
  getPageview<span class="token punctuation">,</span>
  getRecentComment<span class="token punctuation">,</span>
  getUserList<span class="token punctuation">,</span>
  login<span class="token punctuation">,</span>
  updateArticleCounter<span class="token punctuation">,</span>
  updateComment<span class="token punctuation">,</span>
  updatePageview<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),l=[t];function p(c,o){return s(),a("div",null,l)}const u=n(i,[["render",p],["__file","index.html.vue"]]);export{u as default};
