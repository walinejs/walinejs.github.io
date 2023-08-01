import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as i,b as a,e as n,f as t,w as p,d as e}from"./app-5b6ca89a.js";const u={},r=e('<p>你可以在服务端入口文件 <code>index.js</code> 中配置下列选项。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>如果你使用模板，请额外注意你需要自行保存这些配置，因为它们会在拉取官方最新模板时被覆盖。</p><p>建议将官方最新模板上传到自己的仓库，并进行修改。</p></div><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置" aria-hidden="true">#</a> 基本配置</h2><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> plugins</h3><ul><li>类型： <code>plugin[]</code></li></ul>',5),k=e(`<h3 id="securedomains" tabindex="-1"><a class="header-anchor" href="#securedomains" aria-hidden="true">#</a> secureDomains</h3><ul><li>类型: <code>string | RegExp | string[] | RegExp[]</code></li></ul><p>安全域名配置。配置后非该域名来源的请求会返回 403 状态码。支持字符串、正则、数组类型，不配置表示允许所有域名来源。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">secureDomains</span><span class="token operator">:</span> <span class="token string">&#39;waline.js.org&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>为了方便本地开发，<code>localhost</code> 和 <code>127.0.0.1</code> 会被默认添加到安全域名列表中。</li><li>当存在该配置时，环境变量 <code>SECURE_DOMAINS</code> 不生效。</li><li>腾讯云开发需要同时在 <code>环境 -&gt; 安全配置 -&gt; WEB 安全域名</code> 中配置安全域名</li></ul></div><h3 id="forbiddenwords" tabindex="-1"><a class="header-anchor" href="#forbiddenwords" aria-hidden="true">#</a> forbiddenWords</h3><ul><li>类型: <code>string[]</code></li></ul><p>违禁词配置，包含违禁词的内容会直接标记为垃圾评论。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">forbiddenWords</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;习近平&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;毛泽东&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="disallowiplist" tabindex="-1"><a class="header-anchor" href="#disallowiplist" aria-hidden="true">#</a> disallowIPList</h3><ul><li>类型: <code>string[]</code></li></ul><p>IP 黑名单配置，名单中的 IP 访问会直接返回 403 错误。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">disallowIPList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4.4.4.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="mailsubject" tabindex="-1"><a class="header-anchor" href="#mailsubject" aria-hidden="true">#</a> mailSubject</h3><ul><li>类型: <code>string</code></li></ul><p>评论回复邮件标题自定义，等同于环境变量 <code>MAIL_SUBJECT</code>。</p><h3 id="mailtemplate" tabindex="-1"><a class="header-anchor" href="#mailtemplate" aria-hidden="true">#</a> mailTemplate</h3><ul><li>类型: <code>string</code></li></ul><p>评论回复邮件内容自定义，等同于环境变量 <code>MAIL_TEMPLATE</code>。</p><h3 id="mailsubjectadmin" tabindex="-1"><a class="header-anchor" href="#mailsubjectadmin" aria-hidden="true">#</a> mailSubjectAdmin</h3><ul><li>类型: <code>string</code></li></ul><p>新评论通知邮件标题自定义，等同于环境变量 <code>MAIL_SUBJECT_ADMIN</code>。</p><h3 id="mailtemplateadmin" tabindex="-1"><a class="header-anchor" href="#mailtemplateadmin" aria-hidden="true">#</a> mailTemplateAdmin</h3><ul><li>类型: <code>string</code></li></ul><p>新评论通知邮件内容自定义，等同于环境变量 <code>MAIL_TEMPLATE_ADMIN</code>。</p><h3 id="qqtemplate" tabindex="-1"><a class="header-anchor" href="#qqtemplate" aria-hidden="true">#</a> QQTemplate</h3><ul><li>类型: <code>string</code></li></ul><p>QQ 评论通知模板，等同于环境变量 <code>QQ_TEMPLATE</code>。</p><h3 id="tgtemplate" tabindex="-1"><a class="header-anchor" href="#tgtemplate" aria-hidden="true">#</a> TGTemplate</h3><ul><li>类型: <code>string</code></li></ul><p>Telegram 评论通知模板，等同于环境变量 <code>TG_TEMPLATE</code>。</p><h3 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> model</h3><ul><li>类型：<code>class</code></li></ul>`,33),d=a("h3",{id:"encryptpassword",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#encryptpassword","aria-hidden":"true"},"#"),n(" encryptPassword")],-1),m=a("ul",null,[a("li",null,[n("类型："),a("code",null,"function")])],-1),h=e(`<h2 id="评论-hooks" tabindex="-1"><a class="header-anchor" href="#评论-hooks" aria-hidden="true">#</a> 评论 Hooks</h2><p>Waline 提供了一些自定义 Hook，方便用户根据自身业务需求对 Waline 服务端行为进行定制。</p><p>自定义 Hook 在服务端入口文件 <code>index.js</code> 中进行配置。</p><h3 id="presave-comment" tabindex="-1"><a class="header-anchor" href="#presave-comment" aria-hidden="true">#</a> preSave(comment)</h3><p>发布评论前执行的操作。传入评论数据，如果该方法返回内容，则接口会直接返回，不存储评论数据。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preSave</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isSpam <span class="token operator">=</span> <span class="token keyword">await</span> Akismet<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSpam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">errmsg</span><span class="token operator">:</span> <span class="token string">&#39;这是垃圾邮件!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="postsave-comment-pcomment" tabindex="-1"><a class="header-anchor" href="#postsave-comment-pcomment" aria-hidden="true">#</a> postSave(comment, pComment)</h3><p>评论发布后执行的操作。</p><p>方法执行时会传入评论数据，如果是回复评论的话还会传入父级评论。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token parameter">comment<span class="token punctuation">,</span> pComment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">mailto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mail</span><span class="token operator">:</span> pComment<span class="token punctuation">.</span>mail<span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 回复了你的评论!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="preupdate-comment" tabindex="-1"><a class="header-anchor" href="#preupdate-comment" aria-hidden="true">#</a> preUpdate(comment)</h3><p>评论内容在后台被更新前执行的操作。如果该方法返回内容，则接口会直接返回，不更新评论数据。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;你无法更新评论数据&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="afterupdate-comment" tabindex="-1"><a class="header-anchor" href="#afterupdate-comment" aria-hidden="true">#</a> afterUpdate(comment)</h3><p>评论内容在后台被更新后执行的操作。方法执行时会传入评论数据。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>objectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 评论已更新!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="predelete-commentid" tabindex="-1"><a class="header-anchor" href="#predelete-commentid" aria-hidden="true">#</a> preDelete(commentId)</h3><p>评论被删除前执行的操作，方法执行时会传入需要操作的评论 Id。如果该方法返回内容，则接口会直接返回，不更新评论数据。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t delete comment&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="afterdelete-commentid" tabindex="-1"><a class="header-anchor" href="#afterdelete-commentid" aria-hidden="true">#</a> afterDelete(commentId)</h3><p>评论被删除后执行的操作，方法执行时会传入需要操作的评论 Id。</p><details class="hint-container details"><summary>例子</summary><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>commentId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been deleted!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="avatarurl-comment" tabindex="-1"><a class="header-anchor" href="#avatarurl-comment" aria-hidden="true">#</a> avatarUrl(comment)</h3><p>获取头像时执行的操作，方法执行时会传入需要操作的 comment 对象。</p><details class="hint-container details"><summary>例子</summary><p>这是一个实现自动替换使用 QQ 头像的示例函数</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">avatarUrl</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;(\\\\d+)@qq\\\\.com$&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mail <span class="token operator">=</span> comment<span class="token punctuation">.</span>mail<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>mail<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> q <span class="token operator">=</span> mail<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@qq\\.com</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token string">&#39;https://q1.qlogo.cn/headimg_dl?dst_uin=&#39;</span> <span class="token operator">+</span> q <span class="token operator">+</span> <span class="token string">&#39;&amp;spec=4&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>此方法或传入一个 <code>comment</code> 对象，你可以通过 <code>comment.mail</code> 获取邮箱。若返回值为 string 类型，则会直接调用返回值作为头像地址，否则正常生成 MD5。</p></details>`,25);function g(f,y){const s=c("RouterLink");return l(),i("div",null,[r,a("p",null,[n("详情见 "),t(s,{to:"/reference/server/plugin.html"},{default:p(()=>[n("插件系统")]),_:1})]),k,a("p",null,[n("详情见 "),t(s,{to:"/cookbook/customize/database.html"},{default:p(()=>[n("自定义数据库服务")]),_:1})]),d,m,a("p",null,[n("详情见 "),t(s,{to:"/cookbook/customize/userdb.html"},{default:p(()=>[n("自定义用户系统")]),_:1})]),h])}const w=o(u,[["render",g],["__file","config.html.vue"]]);export{w as default};