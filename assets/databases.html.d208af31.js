import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as r,f as l,a as t,b as e,d as o,e as n,r as c}from"./app.64598d1f.js";const h={},i=t("p",null,"除了官方默认的 LeanCloud 之外，Waline 还支持多种数据库，包括 MySQL, PostgreSQL, SQLite 以及 MongoDB。",-1),_=t("p",null,"你只需配置对应的数据库的环境变量，Waline 会自动根据你配置的环境变量切换到对应的数据存储服务。",-1),p=t("h2",{id:"mongodb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),e(" MongoDB")],-1),u={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},b=n(`<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB 数据库名称</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB 服务的用户名</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB 服务的密码</td></tr><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB 服务的地址，支持数组格式</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB 服务的端口，支持数组格式</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB 集群</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB 认证源</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td><code>false</code></td><td>是否使用 SSL 进行连接</td></tr></tbody></table><p>以下是使用 mongodb.com 官方服务的配置示例，多机需要将 <code>MONGO_HOST</code> 和 <code>MONO_PORT</code> 配置成 JSON 格式。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline
<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx
<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0
<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true
</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>`,4),S={href:"https://planetscale.com",target:"_blank",rel:"noopener noreferrer"},g={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},O=n('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL 服务的地址</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL 服务的端口</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL 数据库库名</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL 数据库的用户名</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL 数据库的密码</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL 数据表的表前缀</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL 数据表的字符集</td></tr><tr><td><code>MYSQL_SSL</code></td><td></td><td><code>false</code></td><td>是否使用 SSL MYSQL 连接数据库</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),L={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},M=n('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite 数据库文件的路径，该路径不包含文件名本身</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>用户登录密钥，随机字符串即可</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite 数据库文件名，若文件名变化需要修改该字段值</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite 数据表的表前缀</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),k={href:"https://supabase.com",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},P={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},Q=n('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL 数据库库名</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的用户名</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的密码</td></tr><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL 服务的地址</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL 服务的端口</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL 数据表的表前缀</td></tr><tr><td><code>PG_SSL</code></td><td></td><td><code>false</code></td><td>是否使用 SSL 连接 PostgreSQL 数据库</td></tr></tbody></table><h2 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h2>',2),T={href:"https://console.cloud.tencent.com/tcb/db/",target:"_blank",rel:"noopener noreferrer"},G=n("<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>TCB_ENV</code></td><td>✅</td><td></td><td>腾讯云开发环境 ID</td></tr><tr><td><code>TCB_ID</code></td><td>✅</td><td></td><td>腾讯云 API 密钥 ID</td></tr><tr><td><code>TCB_KEY</code></td><td>✅</td><td></td><td>腾讯云 API 密钥 Key</td></tr><tr><td><code>JWT_TOKEN</code></td><td></td><td></td><td>用户登录密钥，如果没有配任何环境变量的话需要配置此变量，随机字符串即可</td></tr></tbody></table>",1),D={class:"custom-container tip"},w=t("p",{class:"custom-container-title"},"提示",-1),B={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},y=t("h2",{id:"github",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),e(" GitHub")],-1),E={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},N=t("kbd",null,"Generate new token",-1),R=t("strong",null,"repo",-1),I=t("thead",null,[t("tr",null,[t("th",null,"环境变量名称"),t("th",null,"必填"),t("th",null,"默认值"),t("th",null,"备注")])],-1),q=t("td",null,[t("code",null,"GITHUB_TOKEN")],-1),x=t("td",null,"✅",-1),v=t("td",null,null,-1),H={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},A=t("tr",null,[t("td",null,[t("code",null,"GITHUB_REPO")]),t("td",null,"✅"),t("td"),t("td",null,[e("仓库名称，例如 "),t("code",null,"walinejs/waline")])],-1),C=t("tr",null,[t("td",null,[t("code",null,"GITHUB_PATH")]),t("td"),t("td"),t("td",null,[e("数据存储目录，例如 "),t("code",null,"data"),e(" 表示存储在 "),t("code",null,"data"),e(" 目录下，默认存在仓库根目录下")])],-1),W=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"注意"),t("p",null,"处于国内 Github 服务访问稳定性与 CSV 读取与存储性能的原因，我们不建议国内用户使用 Github 作为存储库。")],-1),U=t("h2",{id:"deta-base",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),e(" Deta Base")],-1),Y={href:"https://docs.deta.sh/docs/base/about",target:"_blank",rel:"noopener noreferrer"},V=n('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>✅</td><td></td><td>Deta 项目密钥</td></tr></tbody></table><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>除了以上数据库存储之外，waline 也能够很方便的扩展其它存储服务。</p>',3),K={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"select()",-1),F=t("code",null,"add()",-1),J=t("code",null,"update()",-1),X=t("code",null,"delete()",-1);function z(Z,$){const d=c("ExternalLinkIcon");return s(),r("div",null,[i,_,l(" more "),p,t("p",null,[t("a",u,[e("https://mongodb.com"),o(d)]),e(" 官网免费提供了 512M 的 MongoDB 数据库支持。以下是使用 MongoDB 存储需要配置的环境变量。")]),b,t("p",null,[e("使用 MySQL 存储数据也是一个很好的选择，除了使用自建的 MySQL 服务之外，我们也可以使用 "),t("a",S,[e("PlanetScale"),o(d)]),e("，它免费提供了 10GB 的数据库支持。或者 "),t("a",g,[e("https://freedb.tech"),o(d)]),e("，它免费提供了 100M 的数据库支持。")]),t("p",null,[e("使用时请先导入 "),t("a",f,[e("waline.sql"),o(d)]),e(" 以完成表和表结构的创建，之后在项目中配置如下环境变量。")]),O,t("p",null,[e("使用 SQLite 时需要下载 "),t("a",L,[e("waline.sqlite"),o(d)]),e(" 文件至合适的位置。之后在项目中配置如下环境变量。")]),M,t("p",null,[t("a",k,[e("Supabase"),o(d)]),e(" 提供了 512M 的数据库支持，而"),t("a",m,[e("elephantSQL"),o(d)]),e(" 则提供了 20M 的免费空间，对于评论服务来说绰绰有余了。如果想要使用 PostgreSQL 的也可以使用它搭建 Waline。")]),t("p",null,[e("同 MySQL，使用 PostgreSQL 也需要先导入 "),t("a",P,[e("waline.pgsql"),o(d)]),e(" 创建好表和表结构。之后在项目中配置如下环境变量。")]),Q,t("p",null,[e("腾讯云开发也提供了一定的 "),t("a",T,[e("免费数据库"),o(d)]),e(" 支持，即使不部署在腾讯云开发上也可以使用。如果部署在腾讯云开发上，不需要配置任何环境变量，Waline 默认会使用云开发的数据库。如果是部署在其它地方，需要配置以下环境变量。")]),G,t("div",D,[w,t("p",null,[e("对于腾讯云 API 密钥 ID 与 Key，可以在 "),t("a",B,[e("此处"),o(d)]),e(" 申请。")])]),y,t("p",null,[e("Waline 支持将评论数据以 CSV 文件的格式存储在 GitHub 仓库中。使用 GitHub 作为数据存储需要申请 Personal access tokens，可在 "),t("a",E,[e("https://github.com/settings/tokens"),o(d)]),e(" 这里点击 "),N,e(" 进行申请，下方权限选项中勾选上 "),R,e(" 选项，用于获得仓库的读写权限。")]),t("table",null,[I,t("tbody",null,[t("tr",null,[q,x,v,t("td",null,[t("a",H,[e("Personal access tokens"),o(d)])])]),A,C])]),W,U,t("p",null,[e("Deta 提供了 "),t("a",Y,[e("Deta Base"),o(d)]),e(" 免费数据库支持，即使不部署在 Deta 上也可以使用。如果部署在 Deta 上，不需要配置任何环境变量，Waline 默认会使用 Deta Base 作为数据库存储数据。如果是部署在其它地方，需要配置以下环境变量。")]),V,t("p",null,[e("如果你想帮助 Waline 支持更多的存储服务的话，可以 Fork 项目，继承该 "),t("a",K,[e("基类"),o(d)]),e(" 后分别实现对应存储服务的 "),j,e(", "),F,e(", "),J,e(", "),X,e(" 方法后提交 PR 即可。")])])}const dt=a(h,[["render",z],["__file","databases.html.vue"]]);export{dt as default};