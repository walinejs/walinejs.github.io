(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14],{1049:(t,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>d});const d={key:"v-ffe3a066",path:"/en/guide/server/databases.html",title:"Multi-database service support",lang:"en-US",frontmatter:{},excerpt:'<h1 id="multi-database-service-support"><a class="header-anchor" href="#multi-database-service-support">#</a> Multi-database service support</h1>\n<p>Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.</p>\n<p>You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.</p>\n',headers:[{level:2,title:"MongoDB",slug:"mongodb",children:[]},{level:2,title:"MySQL",slug:"mysql",children:[]},{level:2,title:"SQLite",slug:"sqlite",children:[]},{level:2,title:"PostgreSQL",slug:"postgresql",children:[]},{level:2,title:"GitHub",slug:"github",children:[]},{level:2,title:"Custom",slug:"custom",children:[]}],filePathRelative:"en/guide/server/databases.md",git:{updatedTime:162372122e4,contributors:[]}}},2081:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>ct});var d=a(8917);const o=(0,d.Wm)("h1",{id:"multi-database-service-support"},[(0,d.Wm)("a",{class:"header-anchor",href:"#multi-database-service-support"},"#"),(0,d.Uk)(" Multi-database service support")],-1),r=(0,d.Wm)("p",null,"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.",-1),s=(0,d.Wm)("p",null,"You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.",-1),n=(0,d.Wm)("h2",{id:"mongodb"},[(0,d.Wm)("a",{class:"header-anchor",href:"#mongodb"},"#"),(0,d.Uk)(" MongoDB")],-1),l={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},i=(0,d.Uk)("https://mongodb.com"),c=(0,d.Uk)(" official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database."),u=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has mulitple hosts.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline\n<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx\n<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0\n<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true\n</code></pre></div><h2 id="mysql"><a class="header-anchor" href="#mysql">#</a> MySQL</h2>',4),p=(0,d.Uk)("Using MySQL to store data is also a good choise. Besides our own MySQL service, we can also use "),h={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},m=(0,d.Uk)("https://freedb.tech"),b=(0,d.Uk)(", which provides 100M of database support for free."),g=(0,d.Uk)("If you want to use MySQL as storage, you need to import "),f={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},k=(0,d.Uk)("waline.sql"),W=(0,d.Uk)(" first to create table and table structure, then set these environment variables in project."),S=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr></tbody></table><h2 id="sqlite"><a class="header-anchor" href="#sqlite">#</a> SQLite</h2>',2),v=(0,d.Uk)("Download "),M={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},O=(0,d.Uk)("waline.sqlite"),y=(0,d.Uk)(" to your server if you want to use SQLite. Then set these environment variables in project."),L=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr></tbody></table><h2 id="postgresql"><a class="header-anchor" href="#postgresql">#</a> PostgreSQL</h2>',2),_={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},w=(0,d.Uk)("elephantSQL"),U=(0,d.Uk)(" provides 20M PG database support for free. Same as MySQL, you need to import "),Q={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},P=(0,d.Uk)("waline.pgsql"),D=(0,d.Uk)(" to create table and table structure before using PostgreSQL."),G=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr></tbody></table><h2 id="github"><a class="header-anchor" href="#github">#</a> GitHub</h2>',2),T=(0,d.Uk)("Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click "),R=(0,d.Wm)("kbd",null,"Generate new token",-1),E=(0,d.Uk)(" to apply it at "),q={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},B=(0,d.Uk)("https://github.com/settings/tokens"),N=(0,d.Uk)(". Check the "),H=(0,d.Wm)("strong",null,"repo",-1),C=(0,d.Uk)(" option in permission to obtain read and write permissions for repositories."),I=(0,d.Wm)("thead",null,[(0,d.Wm)("tr",null,[(0,d.Wm)("th",null,"Environment Variable"),(0,d.Wm)("th",null,"Required"),(0,d.Wm)("th",null,"Default"),(0,d.Wm)("th",null,"Description")])],-1),A=(0,d.Wm)("td",null,"GITHUB_TOKEN",-1),Y=(0,d.Wm)("td",null,"✅",-1),j=(0,d.Wm)("td",null,null,-1),x={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},V=(0,d.Uk)("Personal access tokens"),F=(0,d.Wm)("tr",null,[(0,d.Wm)("td",null,"GITHUB_REPO"),(0,d.Wm)("td",null,"✅"),(0,d.Wm)("td"),(0,d.Wm)("td",null,[(0,d.Uk)("repository name, such as "),(0,d.Wm)("code",null,"walinejs/waline")])],-1),X=(0,d.Wm)("tr",null,[(0,d.Wm)("td",null,"GITHUB_PATH"),(0,d.Wm)("td"),(0,d.Wm)("td"),(0,d.Wm)("td",null,[(0,d.Uk)("The data storage directory, such as "),(0,d.Wm)("code",null,"data"),(0,d.Uk)(" means it is stored in the "),(0,d.Wm)("code",null,"data"),(0,d.Uk)(" directory, root directory by default")])],-1),J=(0,d.Wm)("div",{class:"custom-container warning"},[(0,d.Wm)("p",{class:"custom-container-title"},"Note"),(0,d.Wm)("p",null,"Due to preformance, using GitHub is not recommanded.")],-1),K=(0,d.Wm)("h2",{id:"custom"},[(0,d.Wm)("a",{class:"header-anchor",href:"#custom"},"#"),(0,d.Uk)(" Custom")],-1),z=(0,d.Wm)("p",null,"Besides above database storage, support for other storage services can also be added.",-1),Z=(0,d.Uk)("If you want to help Waline supporting more storage services, you can fork the project and inherit the "),$={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},tt=(0,d.Uk)("base class"),et=(0,d.Uk)(" and then implement the "),at=(0,d.Wm)("code",null,"select()",-1),dt=(0,d.Uk)(", "),ot=(0,d.Wm)("code",null,"add()",-1),rt=(0,d.Uk)(", "),st=(0,d.Wm)("code",null,"update()",-1),nt=(0,d.Uk)(" and "),lt=(0,d.Wm)("code",null,"delete()",-1),it=(0,d.Uk)(" methods of the corresponding storage service and submit the PR."),ct={render:function(t,e){const a=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.j4)(d.HY,null,[o,r,s,n,(0,d.Wm)("p",null,[(0,d.Wm)("a",l,[i,(0,d.Wm)(a)]),c]),u,(0,d.Wm)("p",null,[p,(0,d.Wm)("a",h,[m,(0,d.Wm)(a)]),b]),(0,d.Wm)("p",null,[g,(0,d.Wm)("a",f,[k,(0,d.Wm)(a)]),W]),S,(0,d.Wm)("p",null,[v,(0,d.Wm)("a",M,[O,(0,d.Wm)(a)]),y]),L,(0,d.Wm)("p",null,[(0,d.Wm)("a",_,[w,(0,d.Wm)(a)]),U,(0,d.Wm)("a",Q,[P,(0,d.Wm)(a)]),D]),G,(0,d.Wm)("p",null,[T,R,E,(0,d.Wm)("a",q,[B,(0,d.Wm)(a)]),N,H,C]),(0,d.Wm)("table",null,[I,(0,d.Wm)("tbody",null,[(0,d.Wm)("tr",null,[A,Y,j,(0,d.Wm)("td",null,[(0,d.Wm)("a",x,[V,(0,d.Wm)(a)])])]),F,X])]),J,K,z,(0,d.Wm)("p",null,[Z,(0,d.Wm)("a",$,[tt,(0,d.Wm)(a)]),et,at,dt,ot,rt,st,nt,lt,it])],64)}}}}]);