"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2187],{7824:(t,e,d)=>{d.r(e),d.d(e,{data:()=>n});const n={key:"v-82949f3e",path:"/guide/server/databases.html",title:"多数据库服务支持",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="多数据库服务支持" tabindex="-1"><a class="header-anchor" href="#多数据库服务支持" aria-hidden="true">#</a> 多数据库服务支持</h1>\n<p>除了官方默认的 LeanCloud 之外，Waline 还支持多种数据库，包括 MySQL, PostgreSQL, SQLite 以及 MongoDB。</p>\n<p>你只需配置对应的数据库的环境变量，Waline 会自动根据你配置的环境变量切换到对应的数据存储服务。</p>\n',headers:[{level:2,title:"MongoDB",slug:"mongodb",children:[]},{level:2,title:"MySQL",slug:"mysql",children:[]},{level:2,title:"SQLite",slug:"sqlite",children:[]},{level:2,title:"PostgreSQL",slug:"postgresql",children:[]},{level:2,title:"CloudBase",slug:"cloudbase",children:[]},{level:2,title:"GitHub",slug:"github",children:[]},{level:2,title:"Deta Base",slug:"deta-base",children:[]},{level:2,title:"更多",slug:"更多",children:[]}],filePathRelative:"guide/server/databases.md",git:{updatedTime:163996474e4,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},750:(t,e,d)=>{d.r(e),d.d(e,{default:()=>qt});var n=d(8917);const a=(0,n._)("h1",{id:"多数据库服务支持",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#多数据库服务支持","aria-hidden":"true"},"#"),(0,n.Uk)(" 多数据库服务支持")],-1),l=(0,n._)("p",null,"除了官方默认的 LeanCloud 之外，Waline 还支持多种数据库，包括 MySQL, PostgreSQL, SQLite 以及 MongoDB。",-1),r=(0,n._)("p",null,"你只需配置对应的数据库的环境变量，Waline 会自动根据你配置的环境变量切换到对应的数据存储服务。",-1),o=(0,n._)("h2",{id:"mongodb",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#mongodb","aria-hidden":"true"},"#"),(0,n.Uk)(" MongoDB")],-1),s={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("https://mongodb.com"),h=(0,n.Uk)(" 官网免费提供了 512M 的 MongoDB 数据库支持。以下是使用 MongoDB 存储需要配置的环境变量。"),i=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB 服务的地址，支持数组格式</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB 服务的端口，支持数组格式</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB 数据库名称</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB 服务的用户名</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB 服务的密码</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB 集群</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB 认证源</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>是否使用 SSL 进行连接</td></tr></tbody></table><p>以下是使用 mongodb.com 官方服务的配置示例，多机需要将 <code>MONGO_HOST</code> 和 <code>MONO_PORT</code> 配置成 JSON 格式。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline\n<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx\n<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0\n<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true\n</code></pre></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2>',4),u=(0,n.Uk)("使用 MySQL 存储数据也是一个很好的选择，除了使用自建的 MySQL 服务之外，我们也可以使用 "),_={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("https://freedb.tech"),b=(0,n.Uk)("，它免费提供了 100M 的数据库支持。"),k=(0,n.Uk)("使用时请先导入 "),g={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},S=(0,n.Uk)("waline.sql"),O=(0,n.Uk)(" 以完成表和表结构的创建，之后在项目中配置如下环境变量。"),m=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL 服务的地址</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL 服务的端口</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL 数据库库名</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL 数据库的用户名</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL 数据库的密码</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL 数据表的表前缀</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL 数据表的字符集</td></tr></tbody></table><h2 id="sqlite" tabindex="-1"><a class="header-anchor" href="#sqlite" aria-hidden="true">#</a> SQLite</h2>',2),U=(0,n.Uk)("使用 SQLite 时需要下载 "),f={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Uk)("waline.sqlite"),L=(0,n.Uk)(" 文件至合适的位置。之后在项目中配置如下环境变量。"),Q=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite 数据库文件的路径，该路径不包含文件名本身</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite 数据库文件名，若文件名变化需要修改该字段值</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite 数据表的表前缀</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>用户登录密钥，随机字符串即可</td></tr></tbody></table><h2 id="postgresql" tabindex="-1"><a class="header-anchor" href="#postgresql" aria-hidden="true">#</a> PostgreSQL</h2>',2),P={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},T=(0,n.Uk)("elephantSQL"),D=(0,n.Uk)(" 提供了 20M 的免费空间，对于评论服务来说绰绰有余了。如果想要使用 PostgreSQL 的也可以使用它搭建 Waline。"),w=(0,n.Uk)("同 MySQL，使用 PostgreSQL 也需要先导入 "),G={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("waline.pgsql"),E=(0,n.Uk)(" 创建好表和表结构。之后在项目中配置如下环境变量。"),B=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL 服务的地址</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL 服务的端口</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL 数据库库名</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的用户名</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的密码</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL 数据表的表前缀</td></tr></tbody></table><h2 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h2>',2),W=(0,n.Uk)("腾讯云开发也提供了一定的 "),v={href:"https://console.cloud.tencent.com/tcb/db/",target:"_blank",rel:"noopener noreferrer"},R=(0,n.Uk)("免费数据库"),N=(0,n.Uk)(" 支持，即使不部署在腾讯云开发上也可以使用。如果部署在腾讯云开发上，不需要配置任何环境变量，Waline 默认会使用云开发的数据库。如果是部署在其它地方，需要配置以下环境变量。"),q=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"环境变量名称"),(0,n._)("th",null,"必填"),(0,n._)("th",null,"默认值"),(0,n._)("th",null,"备注")])],-1),C=(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"TCB_ENV")]),(0,n._)("td",null,"✅"),(0,n._)("td"),(0,n._)("td",null,"腾讯云开发环境 ID")],-1),H=(0,n._)("td",null,[(0,n._)("code",null,"TCB_ID")],-1),x=(0,n._)("td",null,"✅",-1),I=(0,n._)("td",null,null,-1),A=(0,n.Uk)("腾讯云 API 密钥 ID，"),Y={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},j=(0,n.Uk)("在此"),K=(0,n.Uk)("获取"),F=(0,n._)("td",null,[(0,n._)("code",null,"TCB_KEY")],-1),J=(0,n._)("td",null,"✅",-1),V=(0,n._)("td",null,null,-1),X=(0,n.Uk)("腾讯云 API 密钥 Key，"),z={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},Z=(0,n.Uk)("在此"),$=(0,n.Uk)("获取"),tt=(0,n._)("tr",null,[(0,n._)("td",null,[(0,n._)("code",null,"JWT_TOKEN")]),(0,n._)("td"),(0,n._)("td"),(0,n._)("td",null,"用户登录密钥，如果没有配任何环境变量的话需要配置此变量，随机字符串即可")],-1),et=(0,n._)("h2",{id:"github",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#github","aria-hidden":"true"},"#"),(0,n.Uk)(" GitHub")],-1),dt=(0,n.Uk)("Waline 支持将评论数据以 CSV 文件的格式存储在 GitHub 仓库中。使用 GitHub 作为数据存储需要申请 Personal access tokens，可在 "),nt={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},at=(0,n.Uk)("https://github.com/settings/tokens"),lt=(0,n.Uk)(" 这里点击 "),rt=(0,n._)("kbd",null,"Generate new token",-1),ot=(0,n.Uk)(" 进行申请，下方权限选项中勾选上 "),st=(0,n._)("strong",null,"repo",-1),ct=(0,n.Uk)(" 选项，用于获得仓库的读写权限。"),ht=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"环境变量名称"),(0,n._)("th",null,"必填"),(0,n._)("th",null,"默认值"),(0,n._)("th",null,"备注")])],-1),it=(0,n._)("td",null,"GITHUB_TOKEN",-1),ut=(0,n._)("td",null,"✅",-1),_t=(0,n._)("td",null,null,-1),pt={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},bt=(0,n.Uk)("Personal access tokens"),kt=(0,n._)("tr",null,[(0,n._)("td",null,"GITHUB_REPO"),(0,n._)("td",null,"✅"),(0,n._)("td"),(0,n._)("td",null,[(0,n.Uk)("仓库名称，例如 "),(0,n._)("code",null,"walinejs/waline")])],-1),gt=(0,n._)("tr",null,[(0,n._)("td",null,"GITHUB_PATH"),(0,n._)("td"),(0,n._)("td"),(0,n._)("td",null,[(0,n.Uk)("数据存储目录，例如 "),(0,n._)("code",null,"data"),(0,n.Uk)(" 表示存储在 "),(0,n._)("code",null,"data"),(0,n.Uk)(" 目录下，默认存在仓库根目录下")])],-1),St=(0,n._)("div",{class:"custom-container warning"},[(0,n._)("p",{class:"custom-container-title"},"注意"),(0,n._)("p",null,"处于国内 Github 服务访问稳定性与 CSV 读取与存储性能的原因，我们不建议国内用户使用 Github 作为存储库。")],-1),Ot=(0,n._)("h2",{id:"deta-base",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#deta-base","aria-hidden":"true"},"#"),(0,n.Uk)(" Deta Base")],-1),mt=(0,n.Uk)("Deta 提供了 "),Ut={href:"https://docs.deta.sh/docs/base/about",target:"_blank",rel:"noopener noreferrer"},ft=(0,n.Uk)("Deta Base"),Mt=(0,n.Uk)(" 免费数据库支持，即使不部署在 Deta 上也可以使用。如果部署在 Deta 上，不需要配置任何环境变量，Waline 默认会使用 Deta Base 作为数据库存储数据。如果是部署在其它地方，需要配置以下环境变量。"),Lt=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>DETA_PROJECT_KEY</code></td><td>✅</td><td></td><td>Deta 项目密钥</td></tr></tbody></table><h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><p>除了以上数据库存储之外，waline 也能够很方便的扩展其它存储服务。</p>',3),Qt=(0,n.Uk)("如果你想帮助 Waline 支持更多的存储服务的话，可以 Fork 项目，继承该 "),Pt={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},Tt=(0,n.Uk)("基类"),Dt=(0,n.Uk)(" 后分别实现对应存储服务的 "),wt=(0,n._)("code",null,"select()",-1),Gt=(0,n.Uk)(", "),yt=(0,n._)("code",null,"add()",-1),Et=(0,n.Uk)(", "),Bt=(0,n._)("code",null,"update()",-1),Wt=(0,n.Uk)(", "),vt=(0,n._)("code",null,"delete()",-1),Rt=(0,n.Uk)(" 方法后提交 PR 即可。"),Nt={},qt=(0,d(6959).Z)(Nt,[["render",function(t,e){const d=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,l,r,o,(0,n._)("p",null,[(0,n._)("a",s,[c,(0,n.Wm)(d)]),h]),i,(0,n._)("p",null,[u,(0,n._)("a",_,[p,(0,n.Wm)(d)]),b]),(0,n._)("p",null,[k,(0,n._)("a",g,[S,(0,n.Wm)(d)]),O]),m,(0,n._)("p",null,[U,(0,n._)("a",f,[M,(0,n.Wm)(d)]),L]),Q,(0,n._)("p",null,[(0,n._)("a",P,[T,(0,n.Wm)(d)]),D]),(0,n._)("p",null,[w,(0,n._)("a",G,[y,(0,n.Wm)(d)]),E]),B,(0,n._)("p",null,[W,(0,n._)("a",v,[R,(0,n.Wm)(d)]),N]),(0,n._)("table",null,[q,(0,n._)("tbody",null,[C,(0,n._)("tr",null,[H,x,I,(0,n._)("td",null,[A,(0,n._)("a",Y,[j,(0,n.Wm)(d)]),K])]),(0,n._)("tr",null,[F,J,V,(0,n._)("td",null,[X,(0,n._)("a",z,[Z,(0,n.Wm)(d)]),$])]),tt])]),et,(0,n._)("p",null,[dt,(0,n._)("a",nt,[at,(0,n.Wm)(d)]),lt,rt,ot,st,ct]),(0,n._)("table",null,[ht,(0,n._)("tbody",null,[(0,n._)("tr",null,[it,ut,_t,(0,n._)("td",null,[(0,n._)("a",pt,[bt,(0,n.Wm)(d)])])]),kt,gt])]),St,Ot,(0,n._)("p",null,[mt,(0,n._)("a",Ut,[ft,(0,n.Wm)(d)]),Mt]),Lt,(0,n._)("p",null,[Qt,(0,n._)("a",Pt,[Tt,(0,n.Wm)(d)]),Dt,wt,Gt,yt,Et,Bt,Wt,vt,Rt])],64)}]])}}]);