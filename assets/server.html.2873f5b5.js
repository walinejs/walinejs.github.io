import{_ as o,r as p,o as c,a as l,b as n,d as e,F as d,f as a,e as t}from"./app.45cb7b10.js";const i={},r=a('<h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><p>You can configure the Waline server through the following environment variables.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You MUST <strong>redeploy</strong> after updating Environment variables to take effect.</p><p>Vercel needs to be set in <code>Settings</code> - <code>Environment Variables</code>.</p></div><h3 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h3>',4),u=n("thead",null,[n("tr",null,[n("th",null,"Environment Variables"),n("th",null,"Required"),n("th",null,"Description")])],-1),m=n("tr",null,[n("td",null,[n("code",null,"LEAN_ID")]),n("td",null,"\u2705"),n("td",null,"LeanCloud Application ID")],-1),h=n("tr",null,[n("td",null,[n("code",null,"LEAN_KEY")]),n("td",null,"\u2705"),n("td",null,"LeanCloud Application Key")],-1),k=n("tr",null,[n("td",null,[n("code",null,"LEAN_MASTER_KEY")]),n("td",null,"\u2705"),n("td",null,"LeanCloud Application Master Key")],-1),f=n("tr",null,[n("td",null,[n("code",null,"LEAN_SERVER")]),n("td",null,"\u26A0"),n("td",null,"LeanCloud server address if you're leancloud china user")],-1),g=n("tr",null,[n("td",null,[n("code",null,"SITE_NAME")]),n("td"),n("td",null,"site name")],-1),b=n("tr",null,[n("td",null,[n("code",null,"SITE_URL")]),n("td"),n("td",null,"site url")],-1),_=n("tr",null,[n("td",null,[n("code",null,"SECURE_DOMAINS")]),n("td"),n("td",null,"Secure Domains config. Supports multiple domain with Comma separated")],-1),v=n("tr",null,[n("td",null,[n("code",null,"DISABLE_USERAGENT")]),n("td"),n("td",null,[t("wether hide the user agent of commentor. Default value is "),n("code",null,"false")])],-1),y=n("tr",null,[n("td",null,[n("code",null,"AKISMET_KEY")]),n("td"),n("td",null,[t("Akismet antispam service key, default is open, set "),n("code",null,"false"),t(" if you wanna close it.")])],-1),w=n("tr",null,[n("td",null,[n("code",null,"COMMENT_AUDIT")]),n("td"),n("td",null,"Comment audit switcher. We recommend to tip on the placeholder text if it's true.")],-1),S=n("tr",null,[n("td",null,[n("code",null,"LOGIN")]),n("td"),n("td",null,[t("User need login before comment when "),n("code",null,"LOGIN=force")])],-1),x=n("tr",null,[n("td",null,[n("code",null,"AVATAR_PROXY")]),n("td"),n("td",null,[t("Avatar proxy service url, default is "),n("code",null,"https://avatar.75cdn.workers.dev"),t(". You can set "),n("code",null,"false"),t(" to close it")])],-1),E=n("tr",null,[n("td",null,[n("code",null,"GRAVATAR_STR")]),n("td"),n("td",null,[t("Gravatar render string\uFF0Cdefault is "),n("span",null,[n("code",null,"https://seccdn.libravatar.org/avatar/{{mail|md5}}")]),t("\uFF0Cbase on nunjucks template")])],-1),T=n("td",null,[n("code",null,"OAUTH_URL")],-1),M=n("td",null,null,-1),A=t("OAuth Social Login Service URL\uFF0Cdefault is "),L=n("code",null,"https://user.75.team",-1),D=t(". Also you can custom build with "),I={href:"https://github.com/walinejs/auth",target:"_blank",rel:"noopener noreferrer"},j=t("auth"),O=t("."),R=a('<h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h3><table><thead><tr><th>Environment Variables</th><th>Description</th></tr></thead><tbody><tr><td><code>MARKDOWN_CONFIG</code></td><td>MarkdownIt Config</td></tr><tr><td><code>MARKDOWN_HIGHLIGHT</code></td><td>Whether enable highlight, enable by default</td></tr><tr><td><code>MARKDOWN_EMOJI</code></td><td>Whether enable emoji, enable by default</td></tr><tr><td><code>MARKDOWN_SUB</code></td><td>Whether enable subscript, enable by default</td></tr><tr><td><code>MARKDOWN_SUP</code></td><td>Whether enable superscript, enable by default</td></tr><tr><td><code>MARKDOWN_TEX</code></td><td>Service to parse math, <code>&#39;mathjax&#39;</code> by default (also can be <code>false</code> | <code>&#39;katex&#39;</code>)</td></tr><tr><td><code>MARKDOWN_MATHJAX</code></td><td>MathJax Options</td></tr><tr><td><code>MARKDOWN_KATEX</code></td><td>Katex Options</td></tr></tbody></table><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h3>',3),W=a("<li><p><strong>MongoDB</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_DB</code></td><td>\u2705</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>\u2705</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>\u2705</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>use SSL connection</td></tr></tbody></table></li><li><p><strong>MySQL</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_DB</code></td><td>\u2705</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>\u2705</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>\u2705</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr></tbody></table></li><li><p><strong>SQLite</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>\u2705</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr><tr><td><code>JWT_TOKEN</code></td><td>\u2705</td><td></td><td>Random String for login token generator</td></tr></tbody></table></li><li><p><strong>PostgreSQL</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_DB</code></td><td>\u2705</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>\u2705</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>\u2705</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr></tbody></table></li>",4),N=n("p",null,[n("strong",null,"GitHub"),t(":")],-1),P=n("thead",null,[n("tr",null,[n("th",null,"Environment Variable"),n("th",null,"Required"),n("th",null,"Default"),n("th",null,"Description")])],-1),Q=n("td",null,"GITHUB_TOKEN",-1),q=n("td",null,"\u2705",-1),G=n("td",null,null,-1),C={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},U=t("Personal access tokens"),B=n("tr",null,[n("td",null,"GITHUB_REPO"),n("td",null,"\u2705"),n("td"),n("td",null,[t("repository name, such as "),n("code",null,"walinejs/waline")])],-1),K=n("tr",null,[n("td",null,"GITHUB_PATH"),n("td"),n("td"),n("td",null,[t("The data storage directory, such as "),n("code",null,"data"),t(" means it is stored in the "),n("code",null,"data"),t(" directory, root directory by default")])],-1),H=a(`<h2 id="main-entrance" tabindex="-1"><a class="header-anchor" href="#main-entrance" aria-hidden="true">#</a> Main entrance</h2><p>The following options need to be configured in the server entry file <code>index.js</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If you are using template, please note that you need to save these configurations yourself, because they will be overwritten when you pull the latest official template.</p></div><h3 id="securedomains" tabindex="-1"><a class="header-anchor" href="#securedomains" aria-hidden="true">#</a> secureDomains</h3><ul><li>Type: <code>string | RegExp | string[] | RegExp[]</code></li></ul><p>Secure domain settings. Requests from other domain will receive 403 status code. It supports String, Regexp, and Array type. Leaving this config means that all domain referrer are allowed.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">secureDomains</span><span class="token operator">:</span> <span class="token string">&#39;waline.js.org&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><div class="custom-container tip"><p class="custom-container-title">Tips</p><ul><li>To make local development easier, <code>localhost</code> and <code>127.0.0.1</code> will be added to the list of secure domain names by default.</li><li>Env variable <code>SECURE_DOMAINS</code> won&#39;t work when this option is set.</li></ul></div><h3 id="forbiddenwords" tabindex="-1"><a class="header-anchor" href="#forbiddenwords" aria-hidden="true">#</a> forbiddenWords</h3><ul><li>Type: <code>string[]</code></li></ul><p>If a comment match forbidden word, it will be marked as spam.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">forbiddenWords</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Trump&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="disallowiplist" tabindex="-1"><a class="header-anchor" href="#disallowiplist" aria-hidden="true">#</a> disallowIPList</h3><ul><li>Type: <code>string[]</code></li></ul><p>If a comment ip match this list, 403 status code is returned.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">disallowIPList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4.4.4.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="mailsubject" tabindex="-1"><a class="header-anchor" href="#mailsubject" aria-hidden="true">#</a> mailSubject</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the title of the comment reply email, which is equivalent to environment variable <code>MAIL_SUBJECT</code>.</p><h3 id="mailtemplate" tabindex="-1"><a class="header-anchor" href="#mailtemplate" aria-hidden="true">#</a> mailTemplate</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the content of the comment reply email, which is equivalent to environment variable <code>MAIL_TEMPLATE</code>.</p><h3 id="mailsubjectadmin" tabindex="-1"><a class="header-anchor" href="#mailsubjectadmin" aria-hidden="true">#</a> mailSubjectAdmin</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the title of the new comment notification email, which is equivalent to the environment variable <code>MAIL_SUBJECT_ADMIN</code>.</p><h3 id="mailtemplateadmin" tabindex="-1"><a class="header-anchor" href="#mailtemplateadmin" aria-hidden="true">#</a> mailTemplateAdmin</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the content of the new comment notification email, which is equivalent to the environment variable <code>MAIL_TEMPLATE_ADMIN</code>.</p><h3 id="qqtemplate" tabindex="-1"><a class="header-anchor" href="#qqtemplate" aria-hidden="true">#</a> QQTemplate</h3><ul><li>Type: <code>string</code></li></ul><p>The QQ comment notification template, which is equivalent to the environment variable <code>QQ_TEMPLATE</code>.</p><h3 id="tgtempalte" tabindex="-1"><a class="header-anchor" href="#tgtempalte" aria-hidden="true">#</a> TGTempalte</h3><ul><li>Type: <code>string</code></li></ul><p>Telegram comment notification template, which is equivalent to the environment variable <code>TG_TEMPLATE</code>.</p><h2 id="comment-hooks" tabindex="-1"><a class="header-anchor" href="#comment-hooks" aria-hidden="true">#</a> Comment Hooks</h2><p>Besides environment variable configuration, Waline also provides some custom hooks to facilitate the processing of custom requirements. It only needs to be configured in the server entry file <code>index.js</code>.</p><h3 id="presave-comment" tabindex="-1"><a class="header-anchor" href="#presave-comment" aria-hidden="true">#</a> preSave(comment)</h3><p>Waline provides some custom hooks to let users customize Waline server behavior according to their own needs.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preSave</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isSapm <span class="token operator">=</span> <span class="token keyword">await</span> Akismet<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSpam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">errmsg</span><span class="token operator">:</span> <span class="token string">&quot;It&#39;s a spam!&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="postsave-comment-pcomment" tabindex="-1"><a class="header-anchor" href="#postsave-comment-pcomment" aria-hidden="true">#</a> postSave(comment, pComment)</h3><p>The action performed after the comment is posted.</p><p>When the method is executed, the comment data will be passed as the first param, and if it&#39;s a reply to the comment, the parent comment will be passed as the second param.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token parameter">comment<span class="token punctuation">,</span> pComment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">mailto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mail</span><span class="token operator">:</span> pComment<span class="token punctuation">.</span>mail<span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replied your comment!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="preupdate-comment" tabindex="-1"><a class="header-anchor" href="#preupdate-comment" aria-hidden="true">#</a> preUpdate(comment)</h3><p>Action before a comment content is updated in the dashboard. If the method returns content, the interface will return directly without updating the comment data.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t update comment data&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="afterupdate-comment" tabindex="-1"><a class="header-anchor" href="#afterupdate-comment" aria-hidden="true">#</a> afterUpdate(comment)</h3><p>Action after a comment content is updated in the dashboard. Comment data will be passed in when the method is executed.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>objectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been updated!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="predelete-commentid" tabindex="-1"><a class="header-anchor" href="#predelete-commentid" aria-hidden="true">#</a> preDelete(commentId)</h3><p>Action before a comment is deleted. When the method is executed, the comment Id to be operated will be passed in. If the method returns content, the interface will return directly without updating the comment data.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t delete comment&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="afterdelete-commentid" tabindex="-1"><a class="header-anchor" href="#afterdelete-commentid" aria-hidden="true">#</a> afterDelete(commentId)</h3><p>Action after a comment is deleted, the comment Id will be passed as the only param.</p><details class="custom-block details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>commentId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been deleted!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details>`,55);function V(Y,X){const s=p("ExternalLinkIcon");return c(),l(d,null,[r,n("table",null,[u,n("tbody",null,[m,h,k,f,g,b,_,v,y,w,S,x,E,n("tr",null,[T,M,n("td",null,[A,L,D,n("a",I,[j,e(s)]),O])])])]),R,n("ul",null,[W,n("li",null,[N,n("table",null,[P,n("tbody",null,[n("tr",null,[Q,q,G,n("td",null,[n("a",C,[U,e(s)])])]),B,K])])])]),H],64)}var J=o(i,[["render",V]]);export{J as default};
