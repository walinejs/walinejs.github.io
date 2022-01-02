"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[14],{1049:(t,e,a)=>{a.r(e),a.d(e,{data:()=>d});const d={key:"v-ffe3a066",path:"/en/guide/server/databases.html",title:"Multi-database service support",lang:"en-US",frontmatter:{},excerpt:'<h1 id="multi-database-service-support" tabindex="-1"><a class="header-anchor" href="#multi-database-service-support" aria-hidden="true">#</a> Multi-database service support</h1>\n<p>Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.</p>\n<p>You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.</p>\n',headers:[{level:2,title:"MongoDB",slug:"mongodb",children:[]},{level:2,title:"MySQL",slug:"mysql",children:[]},{level:2,title:"SQLite",slug:"sqlite",children:[]},{level:2,title:"PostgreSQL",slug:"postgresql",children:[]},{level:2,title:"GitHub",slug:"github",children:[]},{level:2,title:"Deta Base",slug:"deta-base",children:[]},{level:2,title:"Custom",slug:"custom",children:[]}],filePathRelative:"en/guide/server/databases.md",git:{updatedTime:1641091524e3,contributors:[{name:"Austin Lee",email:"i@imnerd.org",commits:1}]}}},5500:(t,e,a)=>{a.r(e),a.d(e,{default:()=>gt});var d=a(8917);const r=(0,d._)("h1",{id:"multi-database-service-support",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#multi-database-service-support","aria-hidden":"true"},"#"),(0,d.Uk)(" Multi-database service support")],-1),o=(0,d._)("p",null,"Besides LeanCloud, Waline also supports a variety of databases, including MySQL, PostgreSQL, SQLite and MongoDB.",-1),n=(0,d._)("p",null,"You only need to configure environment variables, and Waline will automatically switch to the corresponding data storage service based on the environment variables you configure.",-1),s=(0,d._)("h2",{id:"mongodb",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),(0,d.Uk)(" MongoDB")],-1),l={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},i=(0,d.Uk)("https://mongodb.com"),c=(0,d.Uk)(" official provides 512M MongoDB database support for free. The following are the environment variables that need to be configured to use MongoDB database."),u=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB server address, support array format</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB server port, support array format</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB database name</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB server username</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB server password</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB replica set</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB auth source</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>use SSL connection</td></tr></tbody></table><p>Here is an example configuration for mongodb.com. Please note that you need set as JSON style for <code>MONGO_HOST</code> and <code>MONGO_PORT</code> when you has mulitple hosts.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline\n<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx\n<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0\n<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true\n</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>',4),h=(0,d.Uk)("Using MySQL to store data is also a good choise. Besides our own MySQL service, we can also use "),p={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},b=(0,d.Uk)("https://freedb.tech"),g=(0,d.Uk)(", which provides 100M of database support for free."),_=(0,d.Uk)("If you want to use MySQL as storage, you need to import "),m={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},f=(0,d.Uk)("waline.sql"),k=(0,d.Uk)(" first to create table and table structure, then set these environment variables in project."),v=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL server address</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL server port</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL database name</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL server username</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL server password</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL table prefix</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL table charset</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),S=(0,d.Uk)("Download "),y={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},O=(0,d.Uk)("waline.sqlite"),M=(0,d.Uk)(" to your server if you want to use SQLite. Then set these environment variables in project."),w=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite storage file path, not include file name</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite storage file name, change it if your filenamed is not waline</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite table prefix</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>Random String for login token generator</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),L={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},U=(0,d.Uk)("elephantSQL"),D=(0,d.Uk)(" provides 20M PG database support for free. Same as MySQL, you need to import "),Q={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},P=(0,d.Uk)("waline.pgsql"),T=(0,d.Uk)(" to create table and table structure before using PostgreSQL."),E=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL server address</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL server port</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL database name</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL server username</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL server password</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL table prefix</td></tr></tbody></table><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>',2),G=(0,d.Uk)("Waline supports storing comment data in a CSV file on GitHub. To use GitHub as data storage, you need to apply for Personal access tokens. You can click "),R=(0,d._)("kbd",null,"Generate new token",-1),B=(0,d.Uk)(" to apply it at "),q={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},N=(0,d.Uk)("https://github.com/settings/tokens"),W=(0,d.Uk)(". Check the "),H=(0,d._)("strong",null,"repo",-1),x=(0,d.Uk)(" option in permission to obtain read and write permissions for repositories."),I=(0,d._)("thead",null,[(0,d._)("tr",null,[(0,d._)("th",null,"Environment Variable"),(0,d._)("th",null,"Required"),(0,d._)("th",null,"Default"),(0,d._)("th",null,"Description")])],-1),C=(0,d._)("td",null,"GITHUB_TOKEN",-1),A=(0,d._)("td",null,"✅",-1),Y=(0,d._)("td",null,null,-1),j={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},V=(0,d.Uk)("Personal access tokens"),F=(0,d._)("tr",null,[(0,d._)("td",null,"GITHUB_REPO"),(0,d._)("td",null,"✅"),(0,d._)("td"),(0,d._)("td",null,[(0,d.Uk)("repository name, such as "),(0,d._)("code",null,"walinejs/waline")])],-1),J=(0,d._)("tr",null,[(0,d._)("td",null,"GITHUB_PATH"),(0,d._)("td"),(0,d._)("td"),(0,d._)("td",null,[(0,d.Uk)("The data storage directory, such as "),(0,d._)("code",null,"data"),(0,d.Uk)(" means it is stored in the "),(0,d._)("code",null,"data"),(0,d.Uk)(" directory, root directory by default")])],-1),K=(0,d._)("div",{class:"custom-container warning"},[(0,d._)("p",{class:"custom-container-title"},"Note"),(0,d._)("p",null,"Due to preformance, using GitHub is not recommanded.")],-1),X=(0,d._)("h2",{id:"deta-base",tabindex:"-1"},[(0,d._)("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),(0,d.Uk)(" Deta Base")],-1),Z=(0,d.Uk)("Deta provides "),z={href:"https://docs.deta.sh/docs/base/about",target:"_blank",rel:"noopener noreferrer"},$=(0,d.Uk)("Deta Base"),tt=(0,d.Uk)(" free database support, which can be used even if it is not deployed on Deta. If deployed on Deta, there is no need to configure any environment variables. By default, Waline will use Deta Base as the database to store data. If it is deployed elsewhere, the following environment variables need to be configured."),et=(0,d.uE)('<table><thead><tr><th>Environment Variable</th><th>Required</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>✅</td><td></td><td>Deta project secret key</td></tr></tbody></table><h2 id="custom" tabindex="-1"><a class="header-anchor" href="#custom" aria-hidden="true">#</a> Custom</h2><p>Besides above database storage, support for other storage services can also be added.</p>',3),at=(0,d.Uk)("If you want to help Waline supporting more storage services, you can fork the project and inherit the "),dt={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},rt=(0,d.Uk)("base class"),ot=(0,d.Uk)(" and then implement the "),nt=(0,d._)("code",null,"select()",-1),st=(0,d.Uk)(", "),lt=(0,d._)("code",null,"add()",-1),it=(0,d.Uk)(", "),ct=(0,d._)("code",null,"update()",-1),ut=(0,d.Uk)(" and "),ht=(0,d._)("code",null,"delete()",-1),pt=(0,d.Uk)(" methods of the corresponding storage service and submit the PR."),bt={},gt=(0,a(6959).Z)(bt,[["render",function(t,e){const a=(0,d.up)("OutboundLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[r,o,n,s,(0,d._)("p",null,[(0,d._)("a",l,[i,(0,d.Wm)(a)]),c]),u,(0,d._)("p",null,[h,(0,d._)("a",p,[b,(0,d.Wm)(a)]),g]),(0,d._)("p",null,[_,(0,d._)("a",m,[f,(0,d.Wm)(a)]),k]),v,(0,d._)("p",null,[S,(0,d._)("a",y,[O,(0,d.Wm)(a)]),M]),w,(0,d._)("p",null,[(0,d._)("a",L,[U,(0,d.Wm)(a)]),D,(0,d._)("a",Q,[P,(0,d.Wm)(a)]),T]),E,(0,d._)("p",null,[G,R,B,(0,d._)("a",q,[N,(0,d.Wm)(a)]),W,H,x]),(0,d._)("table",null,[I,(0,d._)("tbody",null,[(0,d._)("tr",null,[C,A,Y,(0,d._)("td",null,[(0,d._)("a",j,[V,(0,d.Wm)(a)])])]),F,J])]),K,X,(0,d._)("p",null,[Z,(0,d._)("a",z,[$,(0,d.Wm)(a)]),tt]),et,(0,d._)("p",null,[at,(0,d._)("a",dt,[rt,(0,d.Wm)(a)]),ot,nt,st,lt,it,ct,ut,ht,pt])],64)}]])}}]);