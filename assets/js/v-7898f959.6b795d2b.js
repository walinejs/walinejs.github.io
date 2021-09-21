"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2589],{6533:(t,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-7898f959",path:"/reference/server.html",title:"服务端配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"环境变量",slug:"环境变量",children:[{level:3,title:"主要配置",slug:"主要配置",children:[]},{level:3,title:"Markdown",slug:"markdown",children:[]},{level:3,title:"邮件",slug:"邮件",children:[]},{level:3,title:"数据库",slug:"数据库",children:[]}]},{level:2,title:"主入口配置",slug:"主入口配置",children:[{level:3,title:"secureDomains",slug:"securedomains",children:[]},{level:3,title:"forbiddenWords",slug:"forbiddenwords",children:[]},{level:3,title:"disallowIPList",slug:"disallowiplist",children:[]},{level:3,title:"mailSubject",slug:"mailsubject",children:[]},{level:3,title:"mailTemplate",slug:"mailtemplate",children:[]},{level:3,title:"mailSubjectAdmin",slug:"mailsubjectadmin",children:[]},{level:3,title:"mailTemplateAdmin",slug:"mailtemplateadmin",children:[]},{level:3,title:"QQTemplate",slug:"qqtemplate",children:[]},{level:3,title:"TGTempalte",slug:"tgtempalte",children:[]}]},{level:2,title:"评论 Hooks",slug:"评论-hooks",children:[{level:3,title:"preSave(comment)",slug:"presave-comment",children:[]},{level:3,title:"postSave(comment, pComment)",slug:"postsave-comment-pcomment",children:[]},{level:3,title:"preUpdate(comment)",slug:"preupdate-comment",children:[]},{level:3,title:"afterUpdate(comment)",slug:"afterupdate-comment",children:[]},{level:3,title:"preDelete(commentId)",slug:"predelete-commentid",children:[]},{level:3,title:"afterDelete(commentId)",slug:"afterdelete-commentid",children:[]}]}],filePathRelative:"reference/server.md",git:{updatedTime:1632224999e3,contributors:[]}}},4499:(t,n,a)=>{a.r(n),a.d(n,{default:()=>Z});var s=a(8917);const e=(0,s.uE)('<h1 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置" aria-hidden="true">#</a> 服务端配置</h1><h2 id="环境变量" tabindex="-1"><a class="header-anchor" href="#环境变量" aria-hidden="true">#</a> 环境变量</h2><p>你可以通过下面的环境变量对 Waline 服务端进行配置。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>环境变量在更新后必须<strong>重新部署</strong>才能生效。</p><p>Vercel 需要在 <kbd>Settings</kbd> - <kbd>Environment Variables</kbd> 中进行设置。</p></div><h3 id="主要配置" tabindex="-1"><a class="header-anchor" href="#主要配置" aria-hidden="true">#</a> 主要配置</h3><table><thead><tr><th>环境变量名称</th><th>必填</th><th>备注</th></tr></thead><tbody><tr><td><code>LEAN_ID</code></td><td>✅</td><td>LeanCloud 应用的 App ID</td></tr><tr><td><code>LEAN_KEY</code></td><td>✅</td><td>LeanCloud 应用的 App Key</td></tr><tr><td><code>LEAN_MASTER_KEY</code></td><td>✅</td><td>LeanCloud 应用的 Master Key 用于后台修改数据</td></tr><tr><td><code>LEAN_SERVER</code></td><td>⚠</td><td>LeanCloud 服务地址，国内版用户需要配置此项</td></tr><tr><td><code>SITE_NAME</code></td><td></td><td>博客名称</td></tr><tr><td><code>SITE_URL</code></td><td></td><td>博客地址</td></tr><tr><td><code>IPQPS</code></td><td></td><td>基于 IP 的评论发布频率限制，单位为秒。默认为 60 秒，设置为 0 不限制</td></tr><tr><td><code>SECURE_DOMAINS</code></td><td></td><td>安全域名配置，支持逗号分隔配置多个域名</td></tr><tr><td><code>DISABLE_USERAGENT</code></td><td></td><td>是否隐藏评论者的 UA，默认为否</td></tr><tr><td><code>AKISMET_KEY</code></td><td></td><td>Akismet 反垃圾评论服务 Key（默认开启，不用请设置为 false）</td></tr><tr><td><code>COMMENT_AUDIT</code></td><td></td><td>评论发布审核开关，配置后建议在 Placehoder 上提供文案提示</td></tr><tr><td><code>LOGIN</code></td><td></td><td>当设置为 <code>LOGIN=force</code> 时会要求登录才能评论</td></tr><tr><td><code>AVATAR_PROXY</code></td><td></td><td>头像的代理地址，默认为 <code>https://avatar.75cdn.workers.dev</code>，设置 <code>false</code> 关闭代理</td></tr></tbody></table><h3 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h3><table><thead><tr><th>环境变量名称</th><th>备注</th></tr></thead><tbody><tr><td><code>MARKDOWN_CONFIG</code></td><td>MarkdownIt 配置</td></tr><tr><td><code>MARKDOWN_HIGHLIGHT</code></td><td>是否启用高亮，默认启用</td></tr><tr><td><code>MARKDOWN_EMOJI</code></td><td>是否启用 Emoji 缩写支持，默认启用</td></tr><tr><td><code>MARKDOWN_SUB</code></td><td>是否启用下角标支持，默认启用</td></tr><tr><td><code>MARKDOWN_SUP</code></td><td>是否启用上角标支持，默认启用</td></tr><tr><td><code>MARKDOWN_TEX</code></td><td>是否启用数学公式支持，默认启用</td></tr><tr><td><code>MARKDOWN_TEX</code></td><td>解析 Tex 的服务, 默认为 <code>&#39;mathjax&#39;</code> (可填入 <code>false</code> | <code>&#39;katex&#39;</code>)</td></tr><tr><td><code>MARKDOWN_MATHJAX</code></td><td>MathJax 选项</td></tr><tr><td><code>MARKDOWN_KATEX</code></td><td>Katex 选项</td></tr></tbody></table><h3 id="邮件" tabindex="-1"><a class="header-anchor" href="#邮件" aria-hidden="true">#</a> 邮件</h3><p>用户注册和评论的邮件通知都会用到邮件服务。配置邮件服务相关变量后，用户注册会增加邮箱验证码确认相关的操作，用来防止恶意的注册。</p><table><thead><tr><th>环境变量名称</th><th>备注</th></tr></thead><tbody><tr><td><code>SMTP_SERVICE</code></td><td>SMTP 邮件发送服务提供商</td></tr><tr><td><code>SMTP_HOST</code></td><td>SMTP 服务器地址，一般可以在邮箱的设置中找到。</td></tr><tr><td><code>SMTP_PORT</code></td><td>SMTP 服务器端口，一般可以在邮箱的设置中找到。</td></tr><tr><td><code>SMTP_USER</code></td><td>SMTP 邮件发送服务的用户名，一般为登录邮箱。</td></tr><tr><td><code>SMTP_PASS</code></td><td>SMTP 邮件发送服务的密码，一般为邮箱登录密码，部分邮箱(例如 163)是单独的 SMTP 密码。</td></tr><tr><td><code>SENDER_NAME</code></td><td>自定义发送邮件的发件人</td></tr><tr><td><code>SENDER_EMAIL</code></td><td>自定义发送邮件的发件地址</td></tr></tbody></table>',11),o={class:"custom-container tip"},p=(0,s._)("p",{class:"custom-container-title"},"提示",-1),c=(0,s.Uk)("可以在"),d={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},l=(0,s.Uk)("这里"),i=(0,s.Uk)("查看支持的服务商。"),r=(0,s._)("code",null,"SMTP_SERVICE",-1),u=(0,s.Uk)(" 和 ("),k=(0,s._)("code",null,"SMTP_HOST",-1),m=(0,s.Uk)("、"),h=(0,s._)("code",null,"SMTP_PORT",-1),_=(0,s.Uk)("）任选其一即可，如果没有在列表中知道对应的 "),g=(0,s._)("code",null,"SMTP_SERVICE",-1),S=(0,s.Uk)(" 的话则需要配 "),v=(0,s._)("code",null,"SMTP_HOST",-1),b=(0,s.Uk)(" 和 "),f=(0,s._)("code",null,"SMTP_PORT",-1),T=(0,s.Uk)("。"),M=(0,s._)("h3",{id:"数据库",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#数据库","aria-hidden":"true"},"#"),(0,s.Uk)(" 数据库")],-1),y=(0,s.uE)("<li><p><strong>MongoDB</strong>:</p><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB 服务的地址，支持数组格式</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB 服务的端口，支持数组格式</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB 数据库名称</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB 服务的用户名</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB 服务的密码</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB 集群</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB 认证源</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>是否使用 SSL 进行连接</td></tr></tbody></table></li><li><p><strong>MySQL</strong>:</p><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL 服务的地址</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL 服务的端口</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL 数据库库名</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL 数据库的用户名</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL 数据库的密码</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL 数据表的表前缀</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL 数据表的字符集</td></tr></tbody></table></li><li><p><strong>SQLite</strong>:</p><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite 数据库文件的路径，该路径不包含文件名本身</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite 数据库文件名，若文件名变化需要修改该字段值</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite 数据表的表前缀</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>用户登录密钥，随机字符串即可</td></tr></tbody></table></li><li><p><strong>PostgreSQL</strong>:</p><table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL 服务的地址</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL 服务的端口</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL 数据库库名</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的用户名</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的密码</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL 数据表的表前缀</td></tr></tbody></table></li>",4),E=(0,s._)("p",null,[(0,s._)("strong",null,"CloudBase"),(0,s.Uk)(":")],-1),P=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"环境变量名称"),(0,s._)("th",null,"必填"),(0,s._)("th",null,"默认值"),(0,s._)("th",null,"备注")])],-1),w=(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("code",null,"TCB_ENV")]),(0,s._)("td",null,"✅"),(0,s._)("td"),(0,s._)("td",null,"腾讯云开发环境 ID")],-1),x=(0,s._)("td",null,[(0,s._)("code",null,"TCB_ID")],-1),A=(0,s._)("td",null,"✅",-1),I=(0,s._)("td",null,null,-1),L=(0,s.Uk)("腾讯云 API 密钥 ID，"),O={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},j=(0,s.Uk)("在此"),U=(0,s.Uk)("获取"),D=(0,s._)("td",null,[(0,s._)("code",null,"TCB_KEY")],-1),R=(0,s._)("td",null,"✅",-1),W=(0,s._)("td",null,null,-1),N=(0,s.Uk)("腾讯云 API 密钥 Key，"),Q={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},C=(0,s.Uk)("在此"),G=(0,s.Uk)("获取"),B=(0,s._)("tr",null,[(0,s._)("td",null,[(0,s._)("code",null,"JWT_TOKEN")]),(0,s._)("td"),(0,s._)("td"),(0,s._)("td",null,"用户登录密钥，如果没有配任何环境变量的话需要配置此变量，随机字符串即可")],-1),H=(0,s._)("p",null,[(0,s._)("strong",null,"GitHub"),(0,s.Uk)(":")],-1),K=(0,s._)("thead",null,[(0,s._)("tr",null,[(0,s._)("th",null,"环境变量名称"),(0,s._)("th",null,"必填"),(0,s._)("th",null,"默认值"),(0,s._)("th",null,"备注")])],-1),q=(0,s._)("td",null,"GITHUB_TOKEN",-1),Y=(0,s._)("td",null,"✅",-1),V=(0,s._)("td",null,null,-1),X={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},J=(0,s.Uk)("Personal access tokens"),F=(0,s._)("tr",null,[(0,s._)("td",null,"GITHUB_REPO"),(0,s._)("td",null,"✅"),(0,s._)("td"),(0,s._)("td",null,[(0,s.Uk)("仓库名称，例如 "),(0,s._)("code",null,"walinejs/waline")])],-1),$=(0,s._)("tr",null,[(0,s._)("td",null,"GITHUB_PATH"),(0,s._)("td"),(0,s._)("td"),(0,s._)("td",null,[(0,s.Uk)("数据存储目录，例如 "),(0,s._)("code",null,"data"),(0,s.Uk)(" 表示存储在 "),(0,s._)("code",null,"data"),(0,s.Uk)(" 目录下，默认存在仓库根目录下")])],-1),z=(0,s.uE)('<h2 id="主入口配置" tabindex="-1"><a class="header-anchor" href="#主入口配置" aria-hidden="true">#</a> 主入口配置</h2><p>以下选项需要在服务端入口文件 <code>index.js</code> 中进行配置。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>如果你使用模板，请额外注意你需要自行保存这些配置，因为它们会在拉取官方最新模板时被覆盖。</p></div><h3 id="securedomains" tabindex="-1"><a class="header-anchor" href="#securedomains" aria-hidden="true">#</a> secureDomains</h3><ul><li>类型: <code>string | RegExp | string[] | RegExp[]</code></li></ul><p>安全域名配置。配置后非该域名来源的请求会返回 403 状态码。支持字符串、正则、数组类型，不配置表示允许所有域名来源。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  secureDomains<span class="token operator">:</span> <span class="token string">&#39;waline.js.org&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><div class="custom-container tip"><p class="custom-container-title">提示</p><ul><li>为了方便本地开发，<code>localhost</code> 和 <code>127.0.0.1</code> 会被默认添加到安全域名列表中。</li><li>当存在该配置时，环境变量 <code>SECURE_DOMAINS</code> 不生效。</li><li>腾讯云开发需要同时在 <code>环境 -&gt; 安全配置 -&gt; WEB 安全域名</code> 中配置安全域名</li></ul></div><h3 id="forbiddenwords" tabindex="-1"><a class="header-anchor" href="#forbiddenwords" aria-hidden="true">#</a> forbiddenWords</h3><ul><li>类型: <code>string[]</code></li></ul><p>违禁词配置，包含违禁词的内容会直接标记为垃圾评论。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  forbiddenWords<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;习近平&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;毛泽东&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="disallowiplist" tabindex="-1"><a class="header-anchor" href="#disallowiplist" aria-hidden="true">#</a> disallowIPList</h3><ul><li>类型: <code>string[]</code></li></ul><p>IP 黑名单配置，名单中的 IP 访问会直接返回 403 错误。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  disallowIPList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4.4.4.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="mailsubject" tabindex="-1"><a class="header-anchor" href="#mailsubject" aria-hidden="true">#</a> mailSubject</h3><ul><li>类型: <code>string</code></li></ul><p>评论回复邮件标题自定义，等同于环境变量 <code>MAIL_SUBJECT</code>。</p><h3 id="mailtemplate" tabindex="-1"><a class="header-anchor" href="#mailtemplate" aria-hidden="true">#</a> mailTemplate</h3><ul><li>类型: <code>string</code></li></ul><p>评论回复邮件内容自定义，等同于环境变量 <code>MAIL_TEMPLATE</code>。</p><h3 id="mailsubjectadmin" tabindex="-1"><a class="header-anchor" href="#mailsubjectadmin" aria-hidden="true">#</a> mailSubjectAdmin</h3><ul><li>类型: <code>string</code></li></ul><p>新评论通知邮件标题自定义，等同于环境变量 <code>MAIL_SUBJECT_ADMIN</code>。</p><h3 id="mailtemplateadmin" tabindex="-1"><a class="header-anchor" href="#mailtemplateadmin" aria-hidden="true">#</a> mailTemplateAdmin</h3><ul><li>类型: <code>string</code></li></ul><p>新评论通知邮件内容自定义，等同于环境变量 <code>MAIL_TEMPLATE_ADMIN</code>。</p><h3 id="qqtemplate" tabindex="-1"><a class="header-anchor" href="#qqtemplate" aria-hidden="true">#</a> QQTemplate</h3><ul><li>类型: <code>string</code></li></ul><p>QQ 评论通知模板，等同于环境变量 <code>QQ_TEMPLATE</code>。</p><h3 id="tgtempalte" tabindex="-1"><a class="header-anchor" href="#tgtempalte" aria-hidden="true">#</a> TGTempalte</h3><ul><li>类型: <code>string</code></li></ul><p>Telegram 评论通知模板，等同于环境变量 <code>TG_TEMPLATE</code>。</p><h2 id="评论-hooks" tabindex="-1"><a class="header-anchor" href="#评论-hooks" aria-hidden="true">#</a> 评论 Hooks</h2><p>Waline 提供了一些自定义 Hook，方便用户根据自身业务需求对 Waline 服务端行为进行定制。</p><p>自定义 Hook 在服务端入口文件 <code>index.js</code> 中进行配置。</p><h3 id="presave-comment" tabindex="-1"><a class="header-anchor" href="#presave-comment" aria-hidden="true">#</a> preSave(comment)</h3><p>发布评论前执行的操作。传入评论数据，如果该方法返回内容，则接口会直接返回，不存储评论数据。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preSave</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> isSapm <span class="token operator">=</span> <span class="token keyword">await</span> Akismet<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSpam<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token punctuation">{</span> errmsg<span class="token operator">:</span> <span class="token string">&#39;这是垃圾邮件!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="postsave-comment-pcomment" tabindex="-1"><a class="header-anchor" href="#postsave-comment-pcomment" aria-hidden="true">#</a> postSave(comment, pComment)</h3><p>评论发布后执行的操作。</p><p>方法执行时会传入评论数据，如果是回复评论的话还会传入父级评论。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token parameter">comment<span class="token punctuation">,</span> pComment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">await</span> <span class="token function">mailto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      mail<span class="token operator">:</span> pComment<span class="token punctuation">.</span>mail<span class="token punctuation">,</span>\n      text<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 回复了你的评论!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="preupdate-comment" tabindex="-1"><a class="header-anchor" href="#preupdate-comment" aria-hidden="true">#</a> preUpdate(comment)</h3><p>评论内容在后台被更新前执行的操作。如果该方法返回内容，则接口会直接返回，不更新评论数据。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&#39;你无法更新评论数据&#39;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="afterupdate-comment" tabindex="-1"><a class="header-anchor" href="#afterupdate-comment" aria-hidden="true">#</a> afterUpdate(comment)</h3><p>评论内容在后台被更新后执行的操作。方法执行时会传入评论数据。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>objectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> 评论已更新!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="predelete-commentid" tabindex="-1"><a class="header-anchor" href="#predelete-commentid" aria-hidden="true">#</a> preDelete(commentId)</h3><p>评论被删除前执行的操作，方法执行时会传入需要操作的评论 Id。如果该方法返回内容，则接口会直接返回，不更新评论数据。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">preDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t delete comment&quot;</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details><h3 id="afterdelete-commentid" tabindex="-1"><a class="header-anchor" href="#afterdelete-commentid" aria-hidden="true">#</a> afterDelete(commentId)</h3><p>评论被删除后执行的操作，方法执行时会传入需要操作的评论 Id。</p><details class="custom-container details"><summary>例子</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token keyword">async</span> <span class="token function">postDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>commentId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been deleted!</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div></details>',56),Z={render:function(t,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[e,(0,s._)("div",o,[p,(0,s._)("p",null,[c,(0,s._)("a",d,[l,(0,s.Wm)(a)]),i,r,u,k,m,h,_,g,S,v,b,f,T])]),M,(0,s._)("ul",null,[y,(0,s._)("li",null,[E,(0,s._)("table",null,[P,(0,s._)("tbody",null,[w,(0,s._)("tr",null,[x,A,I,(0,s._)("td",null,[L,(0,s._)("a",O,[j,(0,s.Wm)(a)]),U])]),(0,s._)("tr",null,[D,R,W,(0,s._)("td",null,[N,(0,s._)("a",Q,[C,(0,s.Wm)(a)]),G])]),B])])]),(0,s._)("li",null,[H,(0,s._)("table",null,[K,(0,s._)("tbody",null,[(0,s._)("tr",null,[q,Y,V,(0,s._)("td",null,[(0,s._)("a",X,[J,(0,s.Wm)(a)])])]),F,$])])])]),z],64)}}}}]);