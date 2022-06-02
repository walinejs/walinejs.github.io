import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as r,c as i,a as t,b as s,d as e,e as d}from"./app.5f87537e.js";const l={},c=t("p",null,"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.",-1),h=t("p",null,"You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.",-1),_=t("h2",{id:"mongodb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),e(" MongoDB")],-1),p={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},u=e("https://mongodb.com"),b=e(" official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database."),g=d(`<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_DB</code></td><td>\u2705</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>\u2705</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>\u2705</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has mulitple hosts.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline
<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx
<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0
<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true
</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>`,4),f=e("Using MySQL to store data is also a good choise. Besides our own MySQL service, we can also use "),m={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},S=e("https://freedb.tech"),v=e(", which provides 100M of database support for free."),O=e("If you want to use MySQL as storage, you need to import "),y={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},M=e("waline.sql"),k=e(" first to create table and table structure, then set these environment variables in project."),w=d('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_DB</code></td><td>\u2705</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>\u2705</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>\u2705</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),L=e("Download "),D={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},P=e("waline.sqlite"),Q=e(" to your server if you want to use SQLite. Then set these environment variables in project."),T=d('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>\u2705</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr><tr><td><code>JWT_TOKEN</code></td><td>\u2705</td><td></td><td>Random String for login token generator</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),G={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},E=e("elephantSQL"),R=e(" provides 20M PG database support for free. Same as MySQL, you need to import "),B={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},N=e("waline.pgsql"),q=e(" to create table and table structure before using PostgreSQL."),x=d('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_DB</code></td><td>\u2705</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>\u2705</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>\u2705</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr></tbody></table><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>',2),H=e("Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click "),I=t("kbd",null,"Generate new token",-1),A=e(" to apply it at "),U={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},C=e("https://github.com/settings/tokens"),V=e(". Check the "),j=t("strong",null,"repo",-1),W=e(" option in permission to obtain read and write permissions for repositories."),Y=t("thead",null,[t("tr",null,[t("th",null,"Environment Variable"),t("th",null,"Required"),t("th",null,"Default"),t("th",null,"Description")])],-1),F=t("td",null,"GITHUB_TOKEN",-1),J=t("td",null,"\u2705",-1),K=t("td",null,null,-1),X={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},z=e("Personal access tokens"),Z=t("tr",null,[t("td",null,"GITHUB_REPO"),t("td",null,"\u2705"),t("td"),t("td",null,[e("repository name, such as "),t("code",null,"walinejs/waline")])],-1),$=t("tr",null,[t("td",null,"GITHUB_PATH"),t("td"),t("td"),t("td",null,[e("The data storage directory, such as "),t("code",null,"data"),e(" means it is stored in the "),t("code",null,"data"),e(" directory, root directory by default")])],-1),tt=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"Note"),t("p",null,"Due to preformance, using GitHub is not recommanded.")],-1),et=t("h2",{id:"deta-base",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),e(" Deta Base")],-1),ot=e("Deta provides "),st={href:"https://docs.deta.sh/docs/base/about",target:"_blank",rel:"noopener noreferrer"},dt=e("Deta Base"),at=e(" free database support, which can be used even if it is not deployed on Deta. If deployed on Deta, there is no need to configure any environment variables. By default, Waline will use Deta Base as the database to store data. If it is deployed elsewhere, the following environment variables need to be configured."),nt=d('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>\u2705</td><td></td><td>Deta project secret key</td></tr></tbody></table><h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> Custom</h2><p>Besides above database storage, support for other storage services can also be added.</p>',3),rt=e("If you want to help Waline supporting more storage services, you can fork the project and inherit the "),it={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},lt=e("base class"),ct=e(" and then implement the "),ht=t("code",null,"select()",-1),_t=e(", "),pt=t("code",null,"add()",-1),ut=e(", "),bt=t("code",null,"update()",-1),gt=e(" and "),ft=t("code",null,"delete()",-1),mt=e(" methods of the corresponding storage service and submit the PR.");function St(vt,Ot){const o=n("ExternalLinkIcon");return r(),i("div",null,[c,h,_,t("p",null,[t("a",p,[u,s(o)]),b]),g,t("p",null,[f,t("a",m,[S,s(o)]),v]),t("p",null,[O,t("a",y,[M,s(o)]),k]),w,t("p",null,[L,t("a",D,[P,s(o)]),Q]),T,t("p",null,[t("a",G,[E,s(o)]),R,t("a",B,[N,s(o)]),q]),x,t("p",null,[H,I,A,t("a",U,[C,s(o)]),V,j,W]),t("table",null,[Y,t("tbody",null,[t("tr",null,[F,J,K,t("td",null,[t("a",X,[z,s(o)])])]),Z,$])]),tt,et,t("p",null,[ot,t("a",st,[dt,s(o)]),at]),nt,t("p",null,[rt,t("a",it,[lt,s(o)]),ct,ht,_t,pt,ut,bt,gt,ft,mt])])}var kt=a(l,[["render",St],["__file","databases.html.vue"]]);export{kt as default};
