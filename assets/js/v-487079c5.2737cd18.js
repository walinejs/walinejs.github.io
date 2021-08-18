"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1410],{2622:(t,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-487079c5",path:"/en/reference/server.html",title:"Server Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Environment Variables",slug:"environment-variables",children:[{level:3,title:"Basic",slug:"basic",children:[]},{level:3,title:"Markdown",slug:"markdown",children:[]},{level:3,title:"Database",slug:"database",children:[]}]},{level:2,title:"Main entrance",slug:"main-entrance",children:[{level:3,title:"secureDomains",slug:"securedomains",children:[]},{level:3,title:"forbiddenWords",slug:"forbiddenwords",children:[]},{level:3,title:"disallowIPList",slug:"disallowiplist",children:[]},{level:3,title:"mailSubject",slug:"mailsubject",children:[]},{level:3,title:"mailTemplate",slug:"mailtemplate",children:[]},{level:3,title:"mailSubjectAdmin",slug:"mailsubjectadmin",children:[]},{level:3,title:"mailTemplateAdmin",slug:"mailtemplateadmin",children:[]},{level:3,title:"QQTemplate",slug:"qqtemplate",children:[]},{level:3,title:"TGTempalte",slug:"tgtempalte",children:[]}]},{level:2,title:"Comment Hooks",slug:"comment-hooks",children:[{level:3,title:"preSave(comment)",slug:"presave-comment",children:[]},{level:3,title:"postSave(comment, pComment)",slug:"postsave-comment-pcomment",children:[]},{level:3,title:"preUpdate(comment)",slug:"preupdate-comment",children:[]},{level:3,title:"afterUpdate(comment)",slug:"afterupdate-comment",children:[]},{level:3,title:"preDelete(commentId)",slug:"predelete-commentid",children:[]},{level:3,title:"afterDelete(commentId)",slug:"afterdelete-commentid",children:[]}]}],filePathRelative:"en/reference/server.md",git:{updatedTime:1629298745e3,contributors:[]}}},1601:(t,n,a)=>{a.r(n),a.d(n,{default:()=>g});var e=a(8917);const s=(0,e.uE)('<h1 id="server-configuration" tabindex="-1"><a class="header-anchor" href="#server-configuration" aria-hidden="true">#</a> Server Configuration</h1><h2 id="environment-variables" tabindex="-1"><a class="header-anchor" href="#environment-variables" aria-hidden="true">#</a> Environment Variables</h2><p>You can configure the Waline server through the following environment variables.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You must <strong>redeploy</strong> after updating Environment variables to take effect.</p><p>Vercel needs to be set in <kbd>Settings</kbd> - <kbd>Environment Variables</kbd>.</p></div><h3 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h3><table><thead><tr><th>Environment Variables</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>LEAN_ID</code></td><td>✅</td><td>LeanCloud Application ID</td></tr><tr><td><code>LEAN_KEY</code></td><td>✅</td><td>LeanCloud Application Key</td></tr><tr><td><code>LEAN_MASTER_KEY</code></td><td>✅</td><td>LeanCloud Application Master Key</td></tr><tr><td><code>LEAN_SERVER</code></td><td>⚠</td><td>LeanCloud server address if you&#39;re leancloud china user</td></tr><tr><td><code>SITE_NAME</code></td><td></td><td>site name</td></tr><tr><td><code>SITE_URL</code></td><td></td><td>site url</td></tr><tr><td><code>SECURE_DOMAINS</code></td><td></td><td>Secure Domains config. Supports multiple domain with Comma separated</td></tr><tr><td><code>DISABLE_USERAGENT</code></td><td></td><td>wether hide the user agent of commentor. Default value is <code>false</code></td></tr><tr><td><code>AKISMET_KEY</code></td><td></td><td>Akismet antispam service key, default is open, set <code>false</code> if you wanna close it.</td></tr><tr><td><code>COMMENT_AUDIT</code></td><td></td><td>Comment audit switcher. We recommend to tip on the placeholder text if it&#39;s true.</td></tr></tbody></table><h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h3><table><thead><tr><th>Environment Variables</th><th>Description</th></tr></thead><tbody><tr><td><code>MARKDOWN_CONFIG</code></td><td>MarkdownIt Config</td></tr><tr><td><code>MARKDOWN_HIGHLIGHT</code></td><td>Whether enable highlight, enable by default</td></tr><tr><td><code>MARKDOWN_EMOJI</code></td><td>Whether enable emoji, enable by default</td></tr><tr><td><code>MARKDOWN_SUB</code></td><td>Whether enable subscript, enable by default</td></tr><tr><td><code>MARKDOWN_SUP</code></td><td>Whether enable superscript, enable by default</td></tr><tr><td><code>MARKDOWN_TEX</code></td><td>Service to parse math, <code>&#39;mathjax&#39;</code> by default (also can be <code>false</code> | <code>&#39;katex&#39;</code>)</td></tr><tr><td><code>MARKDOWN_MATHJAX</code></td><td>MathJax Options</td></tr><tr><td><code>MARKDOWN_KATEX</code></td><td>Katex Options</td></tr></tbody></table><h3 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h3>',9),o=(0,e.uE)("<li><p><strong>MongoDB</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>use SSL connection</td></tr></tbody></table></li><li><p><strong>MySQL</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr></tbody></table></li><li><p><strong>SQLite</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr></tbody></table></li><li><p><strong>PostgreSQL</strong>:</p><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr></tbody></table></li>",4),p=(0,e._)("p",null,[(0,e._)("strong",null,"GitHub"),(0,e.Uk)(":")],-1),c=(0,e._)("thead",null,[(0,e._)("tr",null,[(0,e._)("th",null,"Environment Variable"),(0,e._)("th",null,"Required"),(0,e._)("th",null,"Default"),(0,e._)("th",null,"Description")])],-1),d=(0,e._)("td",null,"GITHUB_TOKEN",-1),l=(0,e._)("td",null,"✅",-1),i=(0,e._)("td",null,null,-1),r={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("Personal access tokens"),m=(0,e._)("tr",null,[(0,e._)("td",null,"GITHUB_REPO"),(0,e._)("td",null,"✅"),(0,e._)("td"),(0,e._)("td",null,[(0,e.Uk)("repository name, such as "),(0,e._)("code",null,"walinejs/waline")])],-1),h=(0,e._)("tr",null,[(0,e._)("td",null,"GITHUB_PATH"),(0,e._)("td"),(0,e._)("td"),(0,e._)("td",null,[(0,e.Uk)("The data storage directory, such as "),(0,e._)("code",null,"data"),(0,e.Uk)(" means it is stored in the "),(0,e._)("code",null,"data"),(0,e.Uk)(" directory, root directory by default")])],-1),k=(0,e.uE)('<h2 id="main-entrance" tabindex="-1"><a class="header-anchor" href="#main-entrance" aria-hidden="true">#</a> Main entrance</h2><p>The following options need to be configured in the server entry file <code>index.js</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>If you are using template, please note that you need to save these configurations yourself, because they will be overwritten when you pull the latest official template.</p></div><h3 id="securedomains" tabindex="-1"><a class="header-anchor" href="#securedomains" aria-hidden="true">#</a> secureDomains</h3><ul><li>Type: <code>string | RegExp | string[] | RegExp[]</code></li></ul><p>Secure domain settings. Requests from other domain will receive 403 status code. It supports String, Regexp, and Array type. Leaving this config means that all domain referrer are allowed.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  secureDomains<span class="token operator">:</span> <span class="token string">&#39;waline.js.org&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><div class="custom-container tip"><p class="custom-container-title">Tip</p><ul><li>To make local development easier, <code>localhost</code> and <code>127.0.0.1</code> will be added to the list of secure domain names by default.</li><li>Env variable <code>SECURE_DOMAINS</code> won&#39;t work when this option is set.</li></ul></div><h3 id="forbiddenwords" tabindex="-1"><a class="header-anchor" href="#forbiddenwords" aria-hidden="true">#</a> forbiddenWords</h3><ul><li>Type: <code>string[]</code></li></ul><p>If a comment match forbidden word, it will be marked as spam.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  forbiddenWords<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Trump&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="disallowiplist" tabindex="-1"><a class="header-anchor" href="#disallowiplist" aria-hidden="true">#</a> disallowIPList</h3><ul><li>Type: <code>string[]</code></li></ul><p>If a comment ip match this list, 403 status code is returned.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  disallowIPList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4.4.4.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="mailsubject" tabindex="-1"><a class="header-anchor" href="#mailsubject" aria-hidden="true">#</a> mailSubject</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the title of the comment reply email, which is equivalent to environment variable <code>MAIL_SUBJECT</code>.</p><h3 id="mailtemplate" tabindex="-1"><a class="header-anchor" href="#mailtemplate" aria-hidden="true">#</a> mailTemplate</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the content of the comment reply email, which is equivalent to environment variable <code>MAIL_TEMPLATE</code>.</p><h3 id="mailsubjectadmin" tabindex="-1"><a class="header-anchor" href="#mailsubjectadmin" aria-hidden="true">#</a> mailSubjectAdmin</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the title of the new comment notification email, which is equivalent to the environment variable <code>MAIL_SUBJECT_ADMIN</code>.</p><h3 id="mailtemplateadmin" tabindex="-1"><a class="header-anchor" href="#mailtemplateadmin" aria-hidden="true">#</a> mailTemplateAdmin</h3><ul><li>Type: <code>string</code></li></ul><p>Customize the content of the new comment notification email, which is equivalent to the environment variable <code>MAIL_TEMPLATE_ADMIN</code>.</p><h3 id="qqtemplate" tabindex="-1"><a class="header-anchor" href="#qqtemplate" aria-hidden="true">#</a> QQTemplate</h3><ul><li>Type: <code>string</code></li></ul><p>The QQ comment notification template, which is equivalent to the environment variable <code>QQ_TEMPLATE</code>.</p><h3 id="tgtempalte" tabindex="-1"><a class="header-anchor" href="#tgtempalte" aria-hidden="true">#</a> TGTempalte</h3><ul><li>Type: <code>string</code></li></ul><p>Telegram comment notification template, which is equivalent to the environment variable <code>TG_TEMPLATE</code>.</p><h2 id="comment-hooks" tabindex="-1"><a class="header-anchor" href="#comment-hooks" aria-hidden="true">#</a> Comment Hooks</h2><p>Besides environment variable configuration, Waline also provides some custom hooks to facilitate the processing of custom requirements. It only needs to be configured in the server entry file <code>index.js</code>.</p><h3 id="presave-comment" tabindex="-1"><a class="header-anchor" href="#presave-comment" aria-hidden="true">#</a> preSave(comment)</h3><p>Waline provides some custom hooks to let users customize Waline server behavior according to their own needs.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preSave</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> isSapm <span class="token operator">=</span> <span class="token keyword">await</span> Akismet<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSpam<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> errmsg<span class="token operator">:</span> <span class="token string">&quot;It&#39;s a spam!&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="postsave-comment-pcomment" tabindex="-1"><a class="header-anchor" href="#postsave-comment-pcomment" aria-hidden="true">#</a> postSave(comment, pComment)</h3><p>The action performed after the comment is posted.</p><p>When the method is executed, the comment data will be passed as the first param, and if it&#39;s a reply to the comment, the parent comment will be passed as the second param.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token parameter">comment<span class="token punctuation">,</span> pComment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">mailto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      mail<span class="token operator">:</span> pComment<span class="token punctuation">.</span>mail<span class="token punctuation">,</span>\n      text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> replied your comment!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="preupdate-comment" tabindex="-1"><a class="header-anchor" href="#preupdate-comment" aria-hidden="true">#</a> preUpdate(comment)</h3><p>Action before a comment content is updated in the dashboard. If the method returns content, the interface will return directly without updating the comment data.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t update comment data&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="afterupdate-comment" tabindex="-1"><a class="header-anchor" href="#afterupdate-comment" aria-hidden="true">#</a> afterUpdate(comment)</h3><p>Action after a comment content is updated in the dashboard. Comment data will be passed in when the method is executed.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>objectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been updated!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="predelete-commentid" tabindex="-1"><a class="header-anchor" href="#predelete-commentid" aria-hidden="true">#</a> preDelete(commentId)</h3><p>Action before a comment is deleted. When the method is executed, the comment Id to be operated will be passed in. If the method returns content, the interface will return directly without updating the comment data.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t delete comment&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="afterdelete-commentid" tabindex="-1"><a class="header-anchor" href="#afterdelete-commentid" aria-hidden="true">#</a> afterDelete(commentId)</h3><p>Action after a comment is deleted, the comment Id will be passed as the only param.</p><details class="custom-container details"><summary>Example</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>commentId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been deleted!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details>',55),g={render:function(t,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[s,(0,e._)("ul",null,[o,(0,e._)("li",null,[p,(0,e._)("table",null,[c,(0,e._)("tbody",null,[(0,e._)("tr",null,[d,l,i,(0,e._)("td",null,[(0,e._)("a",r,[u,(0,e.Wm)(a)])])]),m,h])])])]),k],64)}}}}]);