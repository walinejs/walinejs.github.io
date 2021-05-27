(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5647],{1869:(t,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>s});const s={key:"v-1cc730e0",path:"/en/server/databases.html",title:"Multi-database service support",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"MongoDB",slug:"mongodb",children:[]},{level:2,title:"MySQL",slug:"mysql",children:[]},{level:2,title:"SQLite",slug:"sqlite",children:[]},{level:2,title:"PostgreSQL",slug:"postgresql",children:[]},{level:2,title:"GitHub",slug:"github",children:[]},{level:2,title:"Custom",slug:"custom",children:[]}],filePathRelative:"en/server/databases.md",git:{updatedTime:1622101309e3,contributors:[]}}},3450:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>ct});var s=a(8917);const n=(0,s.Wm)("h1",{id:"multi-database-service-support"},[(0,s.Wm)("a",{class:"header-anchor",href:"#multi-database-service-support"},"#"),(0,s.Uk)(" Multi-database service support")],-1),r=(0,s.Wm)("p",null,"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.",-1),d=(0,s.Wm)("p",null,"You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.",-1),o=(0,s.Wm)("h2",{id:"mongodb"},[(0,s.Wm)("a",{class:"header-anchor",href:"#mongodb"},"#"),(0,s.Uk)(" MongoDB")],-1),l={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("https://mongodb.com"),c=(0,s.Uk)(" official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database."),p=(0,s.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has mulitple hosts.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline\n<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx\n<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0\n<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="mysql"><a class="header-anchor" href="#mysql">#</a> MySQL</h2>',4),u=(0,s.Uk)("Using MySQL to store data is also a good choise. Besides our own MySQL service, we can also use "),h={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},m=(0,s.Uk)("https://freedb.tech"),b=(0,s.Uk)(", which provides 100M of database support for free."),g=(0,s.Uk)("If you want to use MySQL as storage, you need to import "),f={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},k=(0,s.Uk)("waline.sql"),W=(0,s.Uk)(" first to create table and table structure, then set these environment variables in project."),S=(0,s.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr></tbody></table><h2 id="sqlite"><a class="header-anchor" href="#sqlite">#</a> SQLite</h2>',2),v=(0,s.Uk)("Download "),O={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},M=(0,s.Uk)("waline.sqlite"),y=(0,s.Uk)(" to your server if you want to use SQLite. Then set these environment variables in project."),_=(0,s.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr></tbody></table><h2 id="postgresql"><a class="header-anchor" href="#postgresql">#</a> PostgreSQL</h2>',2),L={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},w=(0,s.Uk)("elephantSQL"),U=(0,s.Uk)(" provides 20M PG database support for free. Same as MySQL, you need to import "),Q={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},P=(0,s.Uk)("waline.pgsql"),G=(0,s.Uk)(" to create table and table structure before using PostgreSQL."),D=(0,s.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr></tbody></table><h2 id="github"><a class="header-anchor" href="#github">#</a> GitHub</h2>',2),T=(0,s.Uk)("Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click "),R=(0,s.Wm)("kbd",null,"Generate new token",-1),E=(0,s.Uk)(" to apply it at "),q={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},B=(0,s.Uk)("https://github.com/settings/tokens"),N=(0,s.Uk)(". Check the "),H=(0,s.Wm)("strong",null,"repo",-1),I=(0,s.Uk)(" option in permission to obtain read and write permissions for repositories."),C=(0,s.Wm)("thead",null,[(0,s.Wm)("tr",null,[(0,s.Wm)("th",null,"Environment Variable"),(0,s.Wm)("th",null,"Required"),(0,s.Wm)("th",null,"Default"),(0,s.Wm)("th",null,"Description")])],-1),A=(0,s.Wm)("td",null,"GITHUB_TOKEN",-1),j=(0,s.Wm)("td",null,"✅",-1),x=(0,s.Wm)("td",null,null,-1),Y={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},V=(0,s.Uk)("Personal access tokens"),F=(0,s.Wm)("tr",null,[(0,s.Wm)("td",null,"GITHUB_REPO"),(0,s.Wm)("td",null,"✅"),(0,s.Wm)("td"),(0,s.Wm)("td",null,[(0,s.Uk)("repository name, such as "),(0,s.Wm)("code",null,"walinejs/waline")])],-1),X=(0,s.Wm)("tr",null,[(0,s.Wm)("td",null,"GITHUB_PATH"),(0,s.Wm)("td"),(0,s.Wm)("td"),(0,s.Wm)("td",null,[(0,s.Uk)("The data storage directory, such as "),(0,s.Wm)("code",null,"data"),(0,s.Uk)(" means it is stored in the "),(0,s.Wm)("code",null,"data"),(0,s.Uk)(" directory, root directory by default")])],-1),J=(0,s.Wm)("div",{class:"custom-container warning"},[(0,s.Wm)("p",{class:"custom-container-title"},"Note"),(0,s.Wm)("p",null,"Due to preformance, using GitHub is not recommanded.")],-1),K=(0,s.Wm)("h2",{id:"custom"},[(0,s.Wm)("a",{class:"header-anchor",href:"#custom"},"#"),(0,s.Uk)(" Custom")],-1),z=(0,s.Wm)("p",null,"Besides above database storage, support for other storage services can also be added.",-1),Z=(0,s.Uk)("If you want to help Waline supporting more storage services, you can fork the project and inherit the "),$={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},tt=(0,s.Uk)("base class"),et=(0,s.Uk)(" and then implement the "),at=(0,s.Wm)("code",null,"select()",-1),st=(0,s.Uk)(", "),nt=(0,s.Wm)("code",null,"add()",-1),rt=(0,s.Uk)(", "),dt=(0,s.Wm)("code",null,"update()",-1),ot=(0,s.Uk)(" and "),lt=(0,s.Wm)("code",null,"delete()",-1),it=(0,s.Uk)(" methods of the corresponding storage service and submit the PR."),ct={render:function(t,e){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[n,r,d,o,(0,s.Wm)("p",null,[(0,s.Wm)("a",l,[i,(0,s.Wm)(a)]),c]),p,(0,s.Wm)("p",null,[u,(0,s.Wm)("a",h,[m,(0,s.Wm)(a)]),b]),(0,s.Wm)("p",null,[g,(0,s.Wm)("a",f,[k,(0,s.Wm)(a)]),W]),S,(0,s.Wm)("p",null,[v,(0,s.Wm)("a",O,[M,(0,s.Wm)(a)]),y]),_,(0,s.Wm)("p",null,[(0,s.Wm)("a",L,[w,(0,s.Wm)(a)]),U,(0,s.Wm)("a",Q,[P,(0,s.Wm)(a)]),G]),D,(0,s.Wm)("p",null,[T,R,E,(0,s.Wm)("a",q,[B,(0,s.Wm)(a)]),N,H,I]),(0,s.Wm)("table",null,[C,(0,s.Wm)("tbody",null,[(0,s.Wm)("tr",null,[A,j,x,(0,s.Wm)("td",null,[(0,s.Wm)("a",Y,[V,(0,s.Wm)(a)])])]),F,X])]),J,K,z,(0,s.Wm)("p",null,[Z,(0,s.Wm)("a",$,[tt,(0,s.Wm)(a)]),et,at,st,nt,rt,dt,ot,lt,it])],64)}}}}]);