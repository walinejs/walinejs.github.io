import{_ as s,r as a,o as l,a as r,b as t,d as o,F as c,e,f as n}from"./app.45cb7b10.js";const _={},h=t("p",null,"\u9664\u4E86\u5B98\u65B9\u9ED8\u8BA4\u7684 LeanCloud \u4E4B\u5916\uFF0CWaline \u8FD8\u652F\u6301\u591A\u79CD\u6570\u636E\u5E93\uFF0C\u5305\u62EC MySQL, PostgreSQL, SQLite \u4EE5\u53CA MongoDB\u3002",-1),i=t("p",null,"\u4F60\u53EA\u9700\u914D\u7F6E\u5BF9\u5E94\u7684\u6570\u636E\u5E93\u7684\u73AF\u5883\u53D8\u91CF\uFF0CWaline \u4F1A\u81EA\u52A8\u6839\u636E\u4F60\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u5207\u6362\u5230\u5BF9\u5E94\u7684\u6570\u636E\u5B58\u50A8\u670D\u52A1\u3002",-1),u=t("h2",{id:"mongodb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),e(" MongoDB")],-1),p={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},b=e("https://mongodb.com"),g=e(" \u5B98\u7F51\u514D\u8D39\u63D0\u4F9B\u4E86 512M \u7684 MongoDB \u6570\u636E\u5E93\u652F\u6301\u3002\u4EE5\u4E0B\u662F\u4F7F\u7528 MongoDB \u5B58\u50A8\u9700\u8981\u914D\u7F6E\u7684\u73AF\u5883\u53D8\u91CF\u3002"),S=n(`<table><thead><tr><th>\u73AF\u5883\u53D8\u91CF\u540D\u79F0</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB \u670D\u52A1\u7684\u5730\u5740\uFF0C\u652F\u6301\u6570\u7EC4\u683C\u5F0F</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB \u670D\u52A1\u7684\u7AEF\u53E3\uFF0C\u652F\u6301\u6570\u7EC4\u683C\u5F0F</td></tr><tr><td><code>MONGO_DB</code></td><td>\u2705</td><td></td><td>MongoDB \u6570\u636E\u5E93\u540D\u79F0</td></tr><tr><td><code>MONGO_USER</code></td><td>\u2705</td><td></td><td>MongoDB \u670D\u52A1\u7684\u7528\u6237\u540D</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>\u2705</td><td></td><td>MongoDB \u670D\u52A1\u7684\u5BC6\u7801</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB \u96C6\u7FA4</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB \u8BA4\u8BC1\u6E90</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>\u662F\u5426\u4F7F\u7528 SSL \u8FDB\u884C\u8FDE\u63A5</td></tr></tbody></table><p>\u4EE5\u4E0B\u662F\u4F7F\u7528 mongodb.com \u5B98\u65B9\u670D\u52A1\u7684\u914D\u7F6E\u793A\u4F8B\uFF0C\u591A\u673A\u9700\u8981\u5C06 <code>MONGO_HOST</code> \u548C <code>MONO_PORT</code> \u914D\u7F6E\u6210 JSON \u683C\u5F0F\u3002</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline
<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx
<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0
<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true
</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>`,4),O=e("\u4F7F\u7528 MySQL \u5B58\u50A8\u6570\u636E\u4E5F\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\uFF0C\u9664\u4E86\u4F7F\u7528\u81EA\u5EFA\u7684 MySQL \u670D\u52A1\u4E4B\u5916\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4F7F\u7528 "),f={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},M=e("https://freedb.tech"),k=e("\uFF0C\u5B83\u514D\u8D39\u63D0\u4F9B\u4E86 100M \u7684\u6570\u636E\u5E93\u652F\u6301\u3002"),L=e("\u4F7F\u7528\u65F6\u8BF7\u5148\u5BFC\u5165 "),m={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},P=e("waline.sql"),Q=e(" \u4EE5\u5B8C\u6210\u8868\u548C\u8868\u7ED3\u6784\u7684\u521B\u5EFA\uFF0C\u4E4B\u540E\u5728\u9879\u76EE\u4E2D\u914D\u7F6E\u5982\u4E0B\u73AF\u5883\u53D8\u91CF\u3002"),T=n('<table><thead><tr><th>\u73AF\u5883\u53D8\u91CF\u540D\u79F0</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL \u670D\u52A1\u7684\u5730\u5740</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL \u670D\u52A1\u7684\u7AEF\u53E3</td></tr><tr><td><code>MYSQL_DB</code></td><td>\u2705</td><td></td><td>MySQL \u6570\u636E\u5E93\u5E93\u540D</td></tr><tr><td><code>MYSQL_USER</code></td><td>\u2705</td><td></td><td>MySQL \u6570\u636E\u5E93\u7684\u7528\u6237\u540D</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>\u2705</td><td></td><td>MySQL \u6570\u636E\u5E93\u7684\u5BC6\u7801</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL \u6570\u636E\u8868\u7684\u8868\u524D\u7F00</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL \u6570\u636E\u8868\u7684\u5B57\u7B26\u96C6</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),G=e("\u4F7F\u7528 SQLite \u65F6\u9700\u8981\u4E0B\u8F7D "),D={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},w=e("waline.sqlite"),B=e(" \u6587\u4EF6\u81F3\u5408\u9002\u7684\u4F4D\u7F6E\u3002\u4E4B\u540E\u5728\u9879\u76EE\u4E2D\u914D\u7F6E\u5982\u4E0B\u73AF\u5883\u53D8\u91CF\u3002"),E=n('<table><thead><tr><th>\u73AF\u5883\u53D8\u91CF\u540D\u79F0</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>\u2705</td><td></td><td>SQLite \u6570\u636E\u5E93\u6587\u4EF6\u7684\u8DEF\u5F84\uFF0C\u8BE5\u8DEF\u5F84\u4E0D\u5305\u542B\u6587\u4EF6\u540D\u672C\u8EAB</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite \u6570\u636E\u5E93\u6587\u4EF6\u540D\uFF0C\u82E5\u6587\u4EF6\u540D\u53D8\u5316\u9700\u8981\u4FEE\u6539\u8BE5\u5B57\u6BB5\u503C</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite \u6570\u636E\u8868\u7684\u8868\u524D\u7F00</td></tr><tr><td><code>JWT_TOKEN</code></td><td>\u2705</td><td></td><td>\u7528\u6237\u767B\u5F55\u5BC6\u94A5\uFF0C\u968F\u673A\u5B57\u7B26\u4E32\u5373\u53EF</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),y={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},N=e("elephantSQL"),R=e(" \u63D0\u4F9B\u4E86 20M \u7684\u514D\u8D39\u7A7A\u95F4\uFF0C\u5BF9\u4E8E\u8BC4\u8BBA\u670D\u52A1\u6765\u8BF4\u7EF0\u7EF0\u6709\u4F59\u4E86\u3002\u5982\u679C\u60F3\u8981\u4F7F\u7528 PostgreSQL \u7684\u4E5F\u53EF\u4EE5\u4F7F\u7528\u5B83\u642D\u5EFA Waline\u3002"),q=e("\u540C MySQL\uFF0C\u4F7F\u7528 PostgreSQL \u4E5F\u9700\u8981\u5148\u5BFC\u5165 "),x={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},I=e("waline.pgsql"),H=e(" \u521B\u5EFA\u597D\u8868\u548C\u8868\u7ED3\u6784\u3002\u4E4B\u540E\u5728\u9879\u76EE\u4E2D\u914D\u7F6E\u5982\u4E0B\u73AF\u5883\u53D8\u91CF\u3002"),v=n('<table><thead><tr><th>\u73AF\u5883\u53D8\u91CF\u540D\u79F0</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL \u670D\u52A1\u7684\u5730\u5740</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL \u670D\u52A1\u7684\u7AEF\u53E3</td></tr><tr><td><code>PG_DB</code></td><td>\u2705</td><td></td><td>PostgreSQL \u6570\u636E\u5E93\u5E93\u540D</td></tr><tr><td><code>PG_USER</code></td><td>\u2705</td><td></td><td>PostgreSQL \u6570\u636E\u5E93\u7684\u7528\u6237\u540D</td></tr><tr><td><code>PG_PASSWORD</code></td><td>\u2705</td><td></td><td>PostgreSQL \u6570\u636E\u5E93\u7684\u5BC6\u7801</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL \u6570\u636E\u8868\u7684\u8868\u524D\u7F00</td></tr></tbody></table><h2 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h2>',2),A=e("\u817E\u8BAF\u4E91\u5F00\u53D1\u4E5F\u63D0\u4F9B\u4E86\u4E00\u5B9A\u7684 "),C={href:"https://console.cloud.tencent.com/tcb/db/",target:"_blank",rel:"noopener noreferrer"},W=e("\u514D\u8D39\u6570\u636E\u5E93"),U=e(" \u652F\u6301\uFF0C\u5373\u4F7F\u4E0D\u90E8\u7F72\u5728\u817E\u8BAF\u4E91\u5F00\u53D1\u4E0A\u4E5F\u53EF\u4EE5\u4F7F\u7528\u3002\u5982\u679C\u90E8\u7F72\u5728\u817E\u8BAF\u4E91\u5F00\u53D1\u4E0A\uFF0C\u4E0D\u9700\u8981\u914D\u7F6E\u4EFB\u4F55\u73AF\u5883\u53D8\u91CF\uFF0CWaline \u9ED8\u8BA4\u4F1A\u4F7F\u7528\u4E91\u5F00\u53D1\u7684\u6570\u636E\u5E93\u3002\u5982\u679C\u662F\u90E8\u7F72\u5728\u5176\u5B83\u5730\u65B9\uFF0C\u9700\u8981\u914D\u7F6E\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u3002"),Y=t("thead",null,[t("tr",null,[t("th",null,"\u73AF\u5883\u53D8\u91CF\u540D\u79F0"),t("th",null,"\u5FC5\u586B"),t("th",null,"\u9ED8\u8BA4\u503C"),t("th",null,"\u5907\u6CE8")])],-1),V=t("tr",null,[t("td",null,[t("code",null,"TCB_ENV")]),t("td",null,"\u2705"),t("td"),t("td",null,"\u817E\u8BAF\u4E91\u5F00\u53D1\u73AF\u5883 ID")],-1),j=t("td",null,[t("code",null,"TCB_ID")],-1),F=t("td",null,"\u2705",-1),K=t("td",null,null,-1),J=e("\u817E\u8BAF\u4E91 API \u5BC6\u94A5 ID\uFF0C"),X={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},z=e("\u5728\u6B64"),Z=e("\u83B7\u53D6"),$=t("td",null,[t("code",null,"TCB_KEY")],-1),tt=t("td",null,"\u2705",-1),et=t("td",null,null,-1),dt=e("\u817E\u8BAF\u4E91 API \u5BC6\u94A5 Key\uFF0C"),ot={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},nt=e("\u5728\u6B64"),st=e("\u83B7\u53D6"),at=t("tr",null,[t("td",null,[t("code",null,"JWT_TOKEN")]),t("td"),t("td"),t("td",null,"\u7528\u6237\u767B\u5F55\u5BC6\u94A5\uFF0C\u5982\u679C\u6CA1\u6709\u914D\u4EFB\u4F55\u73AF\u5883\u53D8\u91CF\u7684\u8BDD\u9700\u8981\u914D\u7F6E\u6B64\u53D8\u91CF\uFF0C\u968F\u673A\u5B57\u7B26\u4E32\u5373\u53EF")],-1),lt=t("h2",{id:"github",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),e(" GitHub")],-1),rt=e("Waline \u652F\u6301\u5C06\u8BC4\u8BBA\u6570\u636E\u4EE5 CSV \u6587\u4EF6\u7684\u683C\u5F0F\u5B58\u50A8\u5728 GitHub \u4ED3\u5E93\u4E2D\u3002\u4F7F\u7528 GitHub \u4F5C\u4E3A\u6570\u636E\u5B58\u50A8\u9700\u8981\u7533\u8BF7 Personal access tokens\uFF0C\u53EF\u5728 "),ct={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},_t=e("https://github.com/settings/tokens"),ht=e(" \u8FD9\u91CC\u70B9\u51FB "),it=t("kbd",null,"Generate new token",-1),ut=e(" \u8FDB\u884C\u7533\u8BF7\uFF0C\u4E0B\u65B9\u6743\u9650\u9009\u9879\u4E2D\u52FE\u9009\u4E0A "),pt=t("strong",null,"repo",-1),bt=e(" \u9009\u9879\uFF0C\u7528\u4E8E\u83B7\u5F97\u4ED3\u5E93\u7684\u8BFB\u5199\u6743\u9650\u3002"),gt=t("thead",null,[t("tr",null,[t("th",null,"\u73AF\u5883\u53D8\u91CF\u540D\u79F0"),t("th",null,"\u5FC5\u586B"),t("th",null,"\u9ED8\u8BA4\u503C"),t("th",null,"\u5907\u6CE8")])],-1),St=t("td",null,"GITHUB_TOKEN",-1),Ot=t("td",null,"\u2705",-1),ft=t("td",null,null,-1),Mt={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},kt=e("Personal access tokens"),Lt=t("tr",null,[t("td",null,"GITHUB_REPO"),t("td",null,"\u2705"),t("td"),t("td",null,[e("\u4ED3\u5E93\u540D\u79F0\uFF0C\u4F8B\u5982 "),t("code",null,"walinejs/waline")])],-1),mt=t("tr",null,[t("td",null,"GITHUB_PATH"),t("td"),t("td"),t("td",null,[e("\u6570\u636E\u5B58\u50A8\u76EE\u5F55\uFF0C\u4F8B\u5982 "),t("code",null,"data"),e(" \u8868\u793A\u5B58\u50A8\u5728 "),t("code",null,"data"),e(" \u76EE\u5F55\u4E0B\uFF0C\u9ED8\u8BA4\u5B58\u5728\u4ED3\u5E93\u6839\u76EE\u5F55\u4E0B")])],-1),Pt=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"\u6CE8\u610F"),t("p",null,"\u5904\u4E8E\u56FD\u5185 Github \u670D\u52A1\u8BBF\u95EE\u7A33\u5B9A\u6027\u4E0E CSV \u8BFB\u53D6\u4E0E\u5B58\u50A8\u6027\u80FD\u7684\u539F\u56E0\uFF0C\u6211\u4EEC\u4E0D\u5EFA\u8BAE\u56FD\u5185\u7528\u6237\u4F7F\u7528 Github \u4F5C\u4E3A\u5B58\u50A8\u5E93\u3002")],-1),Qt=t("h2",{id:"deta-base",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),e(" Deta Base")],-1),Tt=e("Deta \u63D0\u4F9B\u4E86 "),Gt={href:"https://docs.deta.sh/docs/base/about",target:"_blank",rel:"noopener noreferrer"},Dt=e("Deta Base"),wt=e(" \u514D\u8D39\u6570\u636E\u5E93\u652F\u6301\uFF0C\u5373\u4F7F\u4E0D\u90E8\u7F72\u5728 Deta \u4E0A\u4E5F\u53EF\u4EE5\u4F7F\u7528\u3002\u5982\u679C\u90E8\u7F72\u5728 Deta \u4E0A\uFF0C\u4E0D\u9700\u8981\u914D\u7F6E\u4EFB\u4F55\u73AF\u5883\u53D8\u91CF\uFF0CWaline \u9ED8\u8BA4\u4F1A\u4F7F\u7528 Deta Base \u4F5C\u4E3A\u6570\u636E\u5E93\u5B58\u50A8\u6570\u636E\u3002\u5982\u679C\u662F\u90E8\u7F72\u5728\u5176\u5B83\u5730\u65B9\uFF0C\u9700\u8981\u914D\u7F6E\u4EE5\u4E0B\u73AF\u5883\u53D8\u91CF\u3002"),Bt=n('<table><thead><tr><th>\u73AF\u5883\u53D8\u91CF\u540D\u79F0</th><th>\u5FC5\u586B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>\u2705</td><td></td><td>Deta \u9879\u76EE\u5BC6\u94A5</td></tr></tbody></table><h2 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h2><p>\u9664\u4E86\u4EE5\u4E0A\u6570\u636E\u5E93\u5B58\u50A8\u4E4B\u5916\uFF0Cwaline \u4E5F\u80FD\u591F\u5F88\u65B9\u4FBF\u7684\u6269\u5C55\u5176\u5B83\u5B58\u50A8\u670D\u52A1\u3002</p>',3),Et=e("\u5982\u679C\u4F60\u60F3\u5E2E\u52A9 Waline \u652F\u6301\u66F4\u591A\u7684\u5B58\u50A8\u670D\u52A1\u7684\u8BDD\uFF0C\u53EF\u4EE5 Fork \u9879\u76EE\uFF0C\u7EE7\u627F\u8BE5 "),yt={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},Nt=e("\u57FA\u7C7B"),Rt=e(" \u540E\u5206\u522B\u5B9E\u73B0\u5BF9\u5E94\u5B58\u50A8\u670D\u52A1\u7684 "),qt=t("code",null,"select()",-1),xt=e(", "),It=t("code",null,"add()",-1),Ht=e(", "),vt=t("code",null,"update()",-1),At=e(", "),Ct=t("code",null,"delete()",-1),Wt=e(" \u65B9\u6CD5\u540E\u63D0\u4EA4 PR \u5373\u53EF\u3002");function Ut(Yt,Vt){const d=a("ExternalLinkIcon");return l(),r(c,null,[h,i,u,t("p",null,[t("a",p,[b,o(d)]),g]),S,t("p",null,[O,t("a",f,[M,o(d)]),k]),t("p",null,[L,t("a",m,[P,o(d)]),Q]),T,t("p",null,[G,t("a",D,[w,o(d)]),B]),E,t("p",null,[t("a",y,[N,o(d)]),R]),t("p",null,[q,t("a",x,[I,o(d)]),H]),v,t("p",null,[A,t("a",C,[W,o(d)]),U]),t("table",null,[Y,t("tbody",null,[V,t("tr",null,[j,F,K,t("td",null,[J,t("a",X,[z,o(d)]),Z])]),t("tr",null,[$,tt,et,t("td",null,[dt,t("a",ot,[nt,o(d)]),st])]),at])]),lt,t("p",null,[rt,t("a",ct,[_t,o(d)]),ht,it,ut,pt,bt]),t("table",null,[gt,t("tbody",null,[t("tr",null,[St,Ot,ft,t("td",null,[t("a",Mt,[kt,o(d)])])]),Lt,mt])]),Pt,Qt,t("p",null,[Tt,t("a",Gt,[Dt,o(d)]),wt]),Bt,t("p",null,[Et,t("a",yt,[Nt,o(d)]),Rt,qt,xt,It,Ht,vt,At,Ct,Wt])],64)}var Ft=s(_,[["render",Ut]]);export{Ft as default};
