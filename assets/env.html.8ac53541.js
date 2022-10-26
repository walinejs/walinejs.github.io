import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as s,f as l,a as t,b as e,d as a,e as d,r as c}from"./app.93b8a4e9.js";const i={},h=t("p",null,"You can customize Waline Server through the following environment variables.",-1),u=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"Note"),t("p",null,[e("You MUST "),t("strong",null,"redeploy"),e(" after updating Environment variables to make changes applyed.")]),t("p",null,[e("You should set through "),t("code",null,"Settings"),e(" - "),t("code",null,"Environment Variables"),e(" when using Vercel.")])],-1),p=d('<h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h2><table><thead><tr><th>Environment Variables</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>LEAN_ID</code></td><td>✅</td><td>LeanCloud Application ID</td></tr><tr><td><code>LEAN_KEY</code></td><td>✅</td><td>LeanCloud Application Key</td></tr><tr><td><code>LEAN_MASTER_KEY</code></td><td>✅</td><td>LeanCloud Application Master Key</td></tr><tr><td><code>LEAN_SERVER</code></td><td>⚠</td><td>LeanCloud server address if you&#39;re leancloud china user</td></tr><tr><td><code>SITE_NAME</code></td><td></td><td>site name</td></tr><tr><td><code>SITE_URL</code></td><td></td><td>site url</td></tr><tr><td><code>LOGIN</code></td><td></td><td>User need login before comment when <code>LOGIN=force</code></td></tr></tbody></table><h2 id="display" tabindex="-1"><a class="header-anchor" href="#display" aria-hidden="true">#</a> Display</h2>',3),_=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Environment Variables"),t("th",null,"Default"),t("th",null,"Description")])]),t("tbody",null,[t("tr",null,[t("td",null,[t("code",null,"DISABLE_USERAGENT")]),t("td"),t("td",null,[e("wether hide the user agent of commentor. Default value is "),t("code",null,"false")])]),t("tr",null,[t("td",null,[t("code",null,"DISABLE_REGION")]),t("td"),t("td",null,[e("wether hide commentor's region. Default value is "),t("code",null,"false")])]),t("tr",null,[t("td",null,[t("code",null,"DISABLE_AUTHOR_NOTIFY")]),t("td"),t("td",null,"wether disable author notification")]),t("tr",null,[t("td",null,[t("code",null,"AVATAR_PROXY")]),t("td",null,[t("code",null,"https://avatar.75cdn.workers.dev")]),t("td",null,[e("Avatar proxy service url. You can set "),t("code",null,"false"),e(" to disable it")])]),t("tr",null,[t("td",null,[t("code",null,"GRAVATAR_STR")]),t("td",null,[t("span",null,[t("code",{"v-pre":""},"https://seccdn.libravatar.org/avatar/{{mail|md5}}")])]),t("td",null,"Gravatar render string，base on nunjucks template")]),t("tr",null,[t("td",null,[t("code",null,"LEVELS")]),t("td"),t("td",null,"Give each user a rating label based on the number of comments")])])],-1),b=d(`<div class="custom-container tip"><p class="custom-container-title">Level Label</p><p>According number of user comments, a level label will be added to the commenter based on rating Conditions. This feature is disabled by default and can be enabled by setting the environment variable <code>LEVELS</code>. The configuration is in the form of a comma concatenation of a given number, for example <code>0,10,20,50,100,200</code> means:</p><table><thead><tr><th>Grades</th><th>Conditions</th><th>Default Grade Labels</th></tr></thead><tbody><tr><td>0</td><td>0 &lt;= count &lt; 10</td><td>Dwarves</td></tr><tr><td>1</td><td>10 &lt;= count &lt; 20</td><td>Hobbits</td></tr><tr><td>2</td><td>20 &lt;= count &lt; 50</td><td>Ents</td></tr><tr><td>3</td><td>50 &lt;= count &lt; 100</td><td>Wizards</td></tr><tr><td>4</td><td>100 &lt;= count &lt; 200</td><td>Elves</td></tr><tr><td>5</td><td>200 &lt;= count</td><td>Maiar</td></tr></tbody></table><p>In addition to customizing the level judgment rules, we can also customize the level label. Configure the text in the client as follows:</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">level0</span><span class="token operator">:</span> <span class="token string">&#39;Dwarves&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level1</span><span class="token operator">:</span> <span class="token string">&#39;Hobbits&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level2</span><span class="token operator">:</span> <span class="token string">&#39;Ents&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level3</span><span class="token operator">:</span> <span class="token string">&#39;Wizards&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level4</span><span class="token operator">:</span> <span class="token string">&#39;Elves&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">level5</span><span class="token operator">:</span> <span class="token string">&#39;Maiar&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>By default, only 6 levels of copywriting are provided, but it does not mean that there can only be 6 levels. The specific level cap is based on the level judgment rules you set. To add a new level, it is recommended to configure the label text corresponding to the level by yourself. If no label text is provided, the default label text such as <code>Level 10</code> will be displayed by default.</p></div><h2 id="safety" tabindex="-1"><a class="header-anchor" href="#safety" aria-hidden="true">#</a> Safety</h2><table><thead><tr><th>Environment Variables</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>IPQPS</code></td><td><code>60</code></td><td>Comment rate limit based on ip, which it&#39;s unit is second. <code>0</code> means no limit.</td></tr><tr><td><code>SECURE_DOMAINS</code></td><td></td><td>Secure Domains config. Supports multiple domain with Comma separated</td></tr><tr><td><code>AKISMET_KEY</code></td><td><code>70542d86693e</code></td><td>Akismet antispam service key, set <code>false</code> if you wanna close it.</td></tr><tr><td><code>COMMENT_AUDIT</code></td><td><code>false</code></td><td>Comment audit switcher. When enabled, every comment needs to be approved by admin, so hint in placeholder is recommended</td></tr><tr><td><code>RECAPTCHA_V3_KEY</code></td><td></td><td>reCAPTCHA V3 key,should set along with client</td></tr><tr><td><code>RECAPTCHA_V3_SECRET</code></td><td></td><td>reCAPTCHA V3 secret for server.</td></tr></tbody></table>`,3),m={class:"custom-container tip"},S=t("p",{class:"custom-container-title"},"Recaptcha",-1),f={href:"https://www.google.com/recaptcha",target:"_blank",rel:"noopener noreferrer"},v=t("p",null,"When setting security domains, you need to add the site addresss and the Waline server address at the same time.",-1),g=d('<h2 id="markdown" tabindex="-1"><a class="header-anchor" href="#markdown" aria-hidden="true">#</a> Markdown</h2><table><thead><tr><th>Environment Variables</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MARKDOWN_CONFIG</code></td><td><code>{}</code></td><td>MarkdownIt Config</td></tr><tr><td><code>MARKDOWN_HIGHLIGHT</code></td><td><code>true</code></td><td>Whether enable highlight</td></tr><tr><td><code>MARKDOWN_EMOJI</code></td><td><code>true</code></td><td>Whether enable emoji</td></tr><tr><td><code>MARKDOWN_SUB</code></td><td><code>true</code></td><td>Whether enable subscript</td></tr><tr><td><code>MARKDOWN_SUP</code></td><td><code>true</code></td><td>Whether enable superscript</td></tr><tr><td><code>MARKDOWN_TEX</code></td><td><code>mathjax</code></td><td>Service to parse math, <code>mathjax</code> <code>katex</code> and <code>false</code> are supported</td></tr><tr><td><code>MARKDOWN_MATHJAX</code></td><td><code>{}</code></td><td>MathJax Options</td></tr><tr><td><code>MARKDOWN_KATEX</code></td><td><code>{}</code></td><td>Katex Options</td></tr></tbody></table><h2 id="mail-service" tabindex="-1"><a class="header-anchor" href="#mail-service" aria-hidden="true">#</a> Mail Service</h2><p>The email service is used for email notification of user registration and comments. After configuring the variables related to the mail service, user registration will add operations related to email verification code confirmation to prevent malicious registration.</p><table><thead><tr><th>Environment variable name</th><th>Remarks</th></tr></thead><tbody><tr><td><code>SMTP_SERVICE</code></td><td>SMTP mail service provider</td></tr><tr><td><code>SMTP_HOST</code></td><td>SMTP server address</td></tr><tr><td><code>SMTP_PORT</code></td><td>SMTP server port</td></tr><tr><td><code>SMTP_USER</code></td><td>SMTP username</td></tr><tr><td><code>SMTP_PASS</code></td><td>SMTP Password.</td></tr><tr><td><code>SMTP_SECURE</code></td><td>SMTP connect with SSL</td></tr><tr><td><code>SENDER_NAME</code></td><td>Customize sender name</td></tr><tr><td><code>SENDER_EMAIL</code></td><td>Customize sender eamil</td></tr></tbody></table>',5),y={class:"custom-container tip"},E=t("p",{class:"custom-container-title"},"Tips",-1),T={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},M=t("code",null,"SMTP_SERVICE",-1),L=t("code",null,"SMTP_HOST",-1),R=t("code",null,"SMTP_PORT",-1),k=t("code",null,"SMTP_SERVICE",-1),D=t("code",null,"SMTP_HOST",-1),A=t("code",null,"SMTP_PORT",-1),P=t("p",null,"The user name of SMTP usually supports the complete mailbox of the user, and the password is mostly the same as the mailbox password.",-1),O=t("p",null,"Please pay special attention that some mailboxes use separate SMTP passwords.",-1),w=d('<h2 id="database" tabindex="-1"><a class="header-anchor" href="#database" aria-hidden="true">#</a> Database</h2><h3 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h3><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td><code>false</code></td><td>use SSL connection</td></tr></tbody></table><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr><tr><td><code>MYSQL_SSL</code></td><td></td><td><code>false</code></td><td>whether use SSL connection</td></tr></tbody></table><h3 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h3><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr></tbody></table><h3 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h3><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr><tr><td><code>PG_SSL</code></td><td></td><td><code>false</code></td><td>set to <code>true</code> to use SSL connection</td></tr></tbody></table><h3 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h3>',10),N=t("thead",null,[t("tr",null,[t("th",null,"Environment Variable"),t("th",null,"Required"),t("th",null,"Default"),t("th",null,"Description")])],-1),I=t("td",null,[t("code",null,"GITHUB_TOKEN")],-1),x=t("td",null,"✅",-1),C=t("td",null,null,-1),G={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},Q=t("tr",null,[t("td",null,[t("code",null,"GITHUB_REPO")]),t("td",null,"✅"),t("td"),t("td",null,[e("repository name, such as "),t("code",null,"walinejs/waline")])],-1),V=t("tr",null,[t("td",null,"GITHUB_PATH"),t("td"),t("td"),t("td",null,[e("The data storage directory, such as "),t("code",null,"data"),e(" means it is stored in the "),t("code",null,"data"),e(" directory, root directory by default")])],-1),H=d('<h3 id="deta-base" tabindex="-1"><a class="header-anchor" href="#deta-base" aria-hidden="true">#</a> Deta Base</h3><table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>✅</td><td></td><td>Deta project secret key</td></tr></tbody></table><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2>',3),W=t("thead",null,[t("tr",null,[t("th",null,"Environment Variables"),t("th",null,"默认值"),t("th",null,"Description")])],-1),B=t("td",null,[t("code",null,"OAUTH_URL")],-1),U=t("td",null,[t("code",null,"https://oauth.lithub.cc")],-1),K={href:"https://github.com/walinejs/auth",target:"_blank",rel:"noopener noreferrer"},Y=t("tr",null,[t("td",null,[t("code",null,"WEBHOOK")]),t("td"),t("td",null,"You can set a Webhook URL that will be triggered when you have new comment.")],-1),q=t("tr",null,[t("td",null,[t("code",null,"WALINE_ADMIN_MODULE_ASSET_URL")]),t("td",null,[t("code",null,"//unpkg.com/@waline/admin")]),t("td",null,"Waline admin link")],-1);function j(z,X){const o=c("ExternalLinkIcon");return r(),s("div",null,[h,u,l(" more "),p,_,b,t("div",m,[S,t("p",null,[e("Recaptcha Key and Secret can be requested at "),t("a",f,[e("https://www.google.com/recaptcha"),a(o)]),e(".")]),v]),g,t("div",y,[E,t("p",null,[e("Supported service providers can be found "),t("a",T,[e("here"),a(o)]),e(". You can choose one of "),M,e(" and ("),L,e(", "),R,e("). If you don't know the corresponding "),k,e(" in the list, you need to configure "),D,e(" and "),A,e(", which can probably be found in the mailbox settings.")]),P,O]),w,t("table",null,[N,t("tbody",null,[t("tr",null,[I,x,C,t("td",null,[t("a",G,[e("Personal access tokens"),a(o)])])]),Q,V])]),H,t("table",null,[W,t("tbody",null,[t("tr",null,[B,U,t("td",null,[e("OAuth Social Login Service URL. You can "),t("a",K,[e("build your own auth"),a(o)]),e(".")])]),Y,q])])])}const Z=n(i,[["render",j],["__file","env.html.vue"]]);export{Z as default};
