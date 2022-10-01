import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as r,f as l,a as t,b as e,d,e as a,r as i}from"./app.4f26d98d.js";const c={},h=t("p",null,"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.",-1),p=t("p",null,"You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.",-1),u=t("h2",{id:"mongodb",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),e(" MongoDB")],-1),_={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},b=a(`<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_DB</code></td><td>\u2705</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>\u2705</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>\u2705</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td><code>false</code></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has mulitple hosts.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>
<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline
<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx
<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0
<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin
<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true
</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>`,4),f={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},g={href:"https://planetscale.com",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},S=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_DB</code></td><td>\u2705</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>\u2705</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>\u2705</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr><tr><td><code>MYSQL_SSL</code></td><td></td><td><code>false</code></td><td>whether use SSL connection</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),v={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},O=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>\u2705</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>JWT_TOKEN</code></td><td>\u2705</td><td></td><td>Random String for login token generator</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),y={href:"https://supabase.com",target:"_blank",rel:"noopener noreferrer"},M={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},w=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_DB</code></td><td>\u2705</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>\u2705</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>\u2705</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr><tr><td><code>PG_SSL</code></td><td></td><td><code>false</code></td><td>set to <code>true</code> to use SSL connection</td></tr></tbody></table><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>',2),L=t("kbd",null,"Generate new token",-1),D={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},P=t("strong",null,"repo",-1),Q=t("thead",null,[t("tr",null,[t("th",null,"Environment Variable"),t("th",null,"Required"),t("th",null,"Default"),t("th",null,"Description")])],-1),G=t("td",null,[t("code",null,"GITHUB_TOKEN")],-1),T=t("td",null,"\u2705",-1),E=t("td",null,null,-1),R={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},B=t("tr",null,[t("td",null,[t("code",null,"GITHUB_REPO")]),t("td",null,"\u2705"),t("td"),t("td",null,[e("repository name, such as "),t("code",null,"walinejs/waline")])],-1),N=t("tr",null,[t("td",null,"GITHUB_PATH"),t("td"),t("td"),t("td",null,[e("The data storage directory, such as "),t("code",null,"data"),e(" means it is stored in the "),t("code",null,"data"),e(" directory, root directory by default")])],-1),q=t("div",{class:"custom-container warning"},[t("p",{class:"custom-container-title"},"Note"),t("p",null,"Due to preformance, using GitHub is not recommanded.")],-1),x=t("h2",{id:"deta-base",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),e(" Deta Base")],-1),H={href:"https://docs.deta.sh/docs/base/about",target:"_blank",rel:"noopener noreferrer"},I=a('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>\u2705</td><td></td><td>Deta project secret key</td></tr></tbody></table><h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> Custom</h2><p>Besides above database storage, support for other storage services can also be added.</p>',3),A={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},C=t("code",null,"select()",-1),U=t("code",null,"add()",-1),V=t("code",null,"update()",-1),Y=t("code",null,"delete()",-1);function j(W,F){const o=i("ExternalLinkIcon");return n(),r("div",null,[h,p,l(" more "),u,t("p",null,[t("a",_,[e("https://mongodb.com"),d(o)]),e(" official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database.")]),b,t("p",null,[e("Using MySQL to store data is also a good choise. Besides our own MySQL service, we can also use "),t("a",f,[e("https://freedb.tech"),d(o)]),e(", which provides 100M of database support for free, or "),t("a",g,[e("PlanetScale"),d(o)]),e(" which provides 10GB.")]),t("p",null,[e("If you want to use MySQL as storage, you need to import "),t("a",m,[e("waline.sql"),d(o)]),e(" first to create table and table structure, then set these environment variables in project.")]),S,t("p",null,[e("Download "),t("a",v,[e("waline.sqlite"),d(o)]),e(" to your server if you want to use SQLite. Then set these environment variables in project.")]),O,t("p",null,[t("a",y,[e("Supabase"),d(o)]),e(" offers a free 512M database,while "),t("a",M,[e("elephantSQL"),d(o)]),e(" provides 20M PG database support for free. Same as MySQL, you need to import "),t("a",k,[e("waline.pgsql"),d(o)]),e(" to create table and table structure before using PostgreSQL.")]),w,t("p",null,[e("Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click "),L,e(" to apply it at "),t("a",D,[e("https://github.com/settings/tokens"),d(o)]),e(". Check the "),P,e(" option in permission to obtain read and write permissions for repositories.")]),t("table",null,[Q,t("tbody",null,[t("tr",null,[G,T,E,t("td",null,[t("a",R,[e("Personal access tokens"),d(o)])])]),B,N])]),q,x,t("p",null,[e("Deta provides "),t("a",H,[e("Deta Base"),d(o)]),e(" free database support, which can be used even if it is not deployed on Deta. If deployed on Deta, there is no need to configure any environment variables. By default, Waline will use Deta Base as the database to store data. If it is deployed elsewhere, the following environment variables need to be configured.")]),I,t("p",null,[e("If you want to help Waline supporting more storage services, you can fork the project and inherit the "),t("a",A,[e("base class"),d(o)]),e(" and then implement the "),C,e(", "),U,e(", "),V,e(" and "),Y,e(" methods of the corresponding storage service and submit the PR.")])])}const X=s(c,[["render",j],["__file","databases.html.vue"]]);export{X as default};
