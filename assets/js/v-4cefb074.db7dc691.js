(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2330],{1406:(t,e,d)=>{"use strict";d.r(e),d.d(e,{data:()=>n});const n={key:"v-4cefb074",path:"/server/databases.html",title:"多数据库服务支持",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"MongoDB",slug:"mongodb",children:[]},{level:2,title:"MySQL",slug:"mysql",children:[]},{level:2,title:"SQLite",slug:"sqlite",children:[]},{level:2,title:"PostgreSQL",slug:"postgresql",children:[]},{level:2,title:"CloudBase",slug:"cloudbase",children:[]},{level:2,title:"GitHub",slug:"github",children:[]},{level:2,title:"更多",slug:"更多",children:[]}],filePathRelative:"server/databases.md",git:{updatedTime:1622171174e3,contributors:[]}}},1337:(t,e,d)=>{"use strict";d.r(e),d.d(e,{default:()=>Et});var n=d(8917);const l=(0,n.Wm)("h1",{id:"多数据库服务支持"},[(0,n.Wm)("a",{class:"header-anchor",href:"#多数据库服务支持"},"#"),(0,n.Uk)(" 多数据库服务支持")],-1),a=(0,n.Wm)("p",null,"除了官配 LeanCloud 之外，Waline 还支持多种数据库，包括 MySQL, PostgreSQL, SQLite 以及 MongoDB。",-1),s=(0,n.Wm)("p",null,"你只需配置对应的数据库的环境变量，Waline 会自动根据你配置的环境变量切换到对应的数据存储服务。",-1),r=(0,n.Wm)("h2",{id:"mongodb"},[(0,n.Wm)("a",{class:"header-anchor",href:"#mongodb"},"#"),(0,n.Uk)(" MongoDB")],-1),o={href:"https://mongodb.com",target:"_blank",rel:"noopener noreferrer"},c=(0,n.Uk)("https://mongodb.com"),m=(0,n.Uk)(" 官网免费提供了 512M 的 MongoDB 数据库支持。以下是使用 MongoDB 存储需要配置的环境变量。"),u=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MONGO_HOST</code></td><td></td><td>127.0.0.1</td><td>MongoDB 服务的地址，支持数组格式</td></tr><tr><td><code>MONGO_PORT</code></td><td></td><td>27017</td><td>MongoDB 服务的端口，支持数组格式</td></tr><tr><td><code>MONGO_DB</code></td><td>✅</td><td></td><td>MongoDB 数据库名称</td></tr><tr><td><code>MONGO_USER</code></td><td>✅</td><td></td><td>MongoDB 服务的用户名</td></tr><tr><td><code>MONGO_PASSWORD</code></td><td>✅</td><td></td><td>MongoDB 服务的密码</td></tr><tr><td><code>MONGO_REPLICASET</code></td><td></td><td></td><td>MongoDB 集群</td></tr><tr><td><code>MONGO_AUTHSOURCE</code></td><td></td><td></td><td>MongoDB 认证源</td></tr><tr><td><code>MONGO_OPT_SSL</code></td><td></td><td></td><td>是否使用 SSL 进行连接</td></tr></tbody></table><p>以下是使用 mongodb.com 官方服务的配置示例，多机需要将 <code>MONGO_HOST</code> 和 <code>MONO_PORT</code> 配置成 JSON 格式。</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">MONGO_HOST</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&quot;cluster0-shard-00-00.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-01.p4edw.mongodb.net&quot;</span>,<span class="token string">&quot;cluster0-shard-00-02.p4edw.mongodb.net&quot;</span><span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_PORT</span><span class="token operator">=</span><span class="token punctuation">[</span><span class="token number">27017,27017</span>,27017,27017<span class="token punctuation">]</span>\n<span class="token assign-left variable">MONGO_DB</span><span class="token operator">=</span>waline\n<span class="token assign-left variable">MONGO_USER</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_PASSWORD</span><span class="token operator">=</span>xxxx\n<span class="token assign-left variable">MONGO_REPLICASET</span><span class="token operator">=</span>atlas-12cebf-shard-0\n<span class="token assign-left variable">MONGO_AUTHSOURCE</span><span class="token operator">=</span>admin\n<span class="token assign-left variable">MONGO_OPT_SSL</span><span class="token operator">=</span>true\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="mysql"><a class="header-anchor" href="#mysql">#</a> MySQL</h2>',4),h=(0,n.Uk)("使用 MySQL 存储数据也是一个很好的选择，除了使用自建的 MySQL 服务之外，我们也可以使用 "),p={href:"https://freedb.tech",target:"_blank",rel:"noopener noreferrer"},i=(0,n.Uk)("https://freedb.tech"),W=(0,n.Uk)("，它免费提供了 100M 的数据库支持。"),b=(0,n.Uk)("使用时请先导入 "),k={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sql",target:"_blank",rel:"noopener noreferrer"},g=(0,n.Uk)("waline.sql"),S=(0,n.Uk)(" 以完成表和表结构的创建，之后在项目中配置如下环境变量。"),O=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>MYSQL_HOST</code></td><td></td><td>127.0.0.1</td><td>MySQL 服务的地址</td></tr><tr><td><code>MYSQL_PORT</code></td><td></td><td>3306</td><td>MySQL 服务的端口</td></tr><tr><td><code>MYSQL_DB</code></td><td>✅</td><td></td><td>MySQL 数据库库名</td></tr><tr><td><code>MYSQL_USER</code></td><td>✅</td><td></td><td>MySQL 数据库的用户名</td></tr><tr><td><code>MYSQL_PASSWORD</code></td><td>✅</td><td></td><td>MySQL 数据库的密码</td></tr><tr><td><code>MYSQL_PREFIX</code></td><td></td><td><code>wl_</code></td><td>MySQL 数据表的表前缀</td></tr><tr><td><code>MYSQL_CHARSET</code></td><td></td><td><code>utf8mb4</code></td><td>MySQL 数据表的字符集</td></tr></tbody></table><h2 id="sqlite"><a class="header-anchor" href="#sqlite">#</a> SQLite</h2>',2),_=(0,n.Uk)("使用 SQLite 时需要下载 "),U={href:"https://github.com/walinejs/waline/blob/main/assets/waline.sqlite",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Uk)("waline.sqlite"),f=(0,n.Uk)(" 文件至合适的位置。之后在项目中配置如下环境变量。"),L=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>SQLITE_PATH</code></td><td>✅</td><td></td><td>SQLite 数据库文件的路径，该路径不包含文件名本身</td></tr><tr><td><code>SQLITE_DB</code></td><td></td><td>waline</td><td>SQLite 数据库文件名，若文件名变化需要修改该字段值</td></tr><tr><td><code>SQLITE_PREFIX</code></td><td></td><td><code>wl_</code></td><td>SQLite 数据表的表前缀</td></tr><tr><td><code>JWT_TOKEN</code></td><td>✅</td><td></td><td>用户登录密钥，随机字符串即可</td></tr></tbody></table><h2 id="postgresql"><a class="header-anchor" href="#postgresql">#</a> PostgreSQL</h2>',2),P={href:"https://www.elephantsql.com/",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("elephantSQL"),T=(0,n.Uk)(" 提供了 20M 的免费空间，对于评论服务来说绰绰有余了。如果想要使用 PostgreSQL 的也可以使用它搭建 Waline。"),w=(0,n.Uk)("同 MySQL，使用 PostgreSQL 也需要先导入 "),G={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("waline.pgsql"),v=(0,n.Uk)(" 创建好表和表结构。之后在项目中配置如下环境变量。"),E=(0,n.uE)('<table><thead><tr><th>环境变量名称</th><th>必填</th><th>默认值</th><th>备注</th></tr></thead><tbody><tr><td><code>PG_HOST</code></td><td></td><td>127.0.0.1</td><td>PostgreSQL 服务的地址</td></tr><tr><td><code>PG_PORT</code></td><td></td><td>3211</td><td>PostgreSQL 服务的端口</td></tr><tr><td><code>PG_DB</code></td><td>✅</td><td></td><td>PostgreSQL 数据库库名</td></tr><tr><td><code>PG_USER</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的用户名</td></tr><tr><td><code>PG_PASSWORD</code></td><td>✅</td><td></td><td>PostgreSQL 数据库的密码</td></tr><tr><td><code>PG_PREFIX</code></td><td></td><td><code>wl_</code></td><td>PostgreSQL 数据表的表前缀</td></tr></tbody></table><h2 id="cloudbase"><a class="header-anchor" href="#cloudbase">#</a> CloudBase</h2>',2),B=(0,n.Uk)("腾讯云开发也提供了一定的 "),D={href:"https://console.cloud.tencent.com/tcb/db/",target:"_blank",rel:"noopener noreferrer"},N=(0,n.Uk)("免费数据库"),R=(0,n.Uk)(" 支持，即使不部署在腾讯云开发上也可以使用。如果部署在腾讯云开发上，不需要配置任何环境变量，Waline 默认会使用云开发的数据库。如果是部署在其它地方，需要配置以下环境变量。"),q=(0,n.Wm)("thead",null,[(0,n.Wm)("tr",null,[(0,n.Wm)("th",null,"环境变量名称"),(0,n.Wm)("th",null,"必填"),(0,n.Wm)("th",null,"默认值"),(0,n.Wm)("th",null,"备注")])],-1),H=(0,n.Wm)("tr",null,[(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"TCB_ENV")]),(0,n.Wm)("td",null,"✅"),(0,n.Wm)("td"),(0,n.Wm)("td",null,"腾讯云开发环境 ID")],-1),C=(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"TCB_ID")],-1),I=(0,n.Wm)("td",null,"✅",-1),A=(0,n.Wm)("td",null,null,-1),Y=(0,n.Uk)("腾讯云 API 密钥 ID，"),j={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("在此"),K=(0,n.Uk)("获取"),F=(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"TCB_KEY")],-1),J=(0,n.Wm)("td",null,"✅",-1),V=(0,n.Wm)("td",null,null,-1),X=(0,n.Uk)("腾讯云 API 密钥 Key，"),z={href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"},Z=(0,n.Uk)("在此"),$=(0,n.Uk)("获取"),tt=(0,n.Wm)("tr",null,[(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"JWT_TOKEN")]),(0,n.Wm)("td"),(0,n.Wm)("td"),(0,n.Wm)("td",null,"用户登录密钥，如果没有配任何环境变量的话需要配置此变量，随机字符串即可")],-1),et=(0,n.Wm)("h2",{id:"github"},[(0,n.Wm)("a",{class:"header-anchor",href:"#github"},"#"),(0,n.Uk)(" GitHub")],-1),dt=(0,n.Uk)("Waline 支持将评论数据以 CSV 文件的格式存储在 GitHub 仓库中。使用 GitHub 作为数据存储需要申请 Personal access tokens，可在 "),nt={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},lt=(0,n.Uk)("https://github.com/settings/tokens"),at=(0,n.Uk)(" 这里点击 "),st=(0,n.Wm)("kbd",null,"Generate new token",-1),rt=(0,n.Uk)(" 进行申请，下方权限选项中勾选上 "),ot=(0,n.Wm)("strong",null,"repo",-1),ct=(0,n.Uk)(" 选项，用于获得仓库的读写权限。"),mt=(0,n.Wm)("thead",null,[(0,n.Wm)("tr",null,[(0,n.Wm)("th",null,"环境变量名称"),(0,n.Wm)("th",null,"必填"),(0,n.Wm)("th",null,"默认值"),(0,n.Wm)("th",null,"备注")])],-1),ut=(0,n.Wm)("td",null,"GITHUB_TOKEN",-1),ht=(0,n.Wm)("td",null,"✅",-1),pt=(0,n.Wm)("td",null,null,-1),it={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},Wt=(0,n.Uk)("Personal access tokens"),bt=(0,n.Wm)("tr",null,[(0,n.Wm)("td",null,"GITHUB_REPO"),(0,n.Wm)("td",null,"✅"),(0,n.Wm)("td"),(0,n.Wm)("td",null,[(0,n.Uk)("仓库名称，例如 "),(0,n.Wm)("code",null,"walinejs/waline")])],-1),kt=(0,n.Wm)("tr",null,[(0,n.Wm)("td",null,"GITHUB_PATH"),(0,n.Wm)("td"),(0,n.Wm)("td"),(0,n.Wm)("td",null,[(0,n.Uk)("数据存储目录，例如 "),(0,n.Wm)("code",null,"data"),(0,n.Uk)(" 表示存储在 "),(0,n.Wm)("code",null,"data"),(0,n.Uk)(" 目录下，默认存在仓库根目录下")])],-1),gt=(0,n.Wm)("div",{class:"custom-container warning"},[(0,n.Wm)("p",{class:"custom-container-title"},"注意"),(0,n.Wm)("p",null,"处于国内 Github 服务访问稳定性与 CSV 读取与存储性能的原因，我们不建议国内用户使用 Github 作为存储库。")],-1),St=(0,n.Wm)("h2",{id:"更多"},[(0,n.Wm)("a",{class:"header-anchor",href:"#更多"},"#"),(0,n.Uk)(" 更多")],-1),Ot=(0,n.Wm)("p",null,"除了以上数据库存储之外，waline 也能够很方便的扩展其它存储服务。",-1),_t=(0,n.Uk)("如果你想帮助 Waline 支持更多的存储服务的话，可以 Fork 项目，继承该 "),Ut={href:"https://github.com/walinejs/waline/blob/main/packages/server/src/service/storage/base.js",target:"_blank",rel:"noopener noreferrer"},Mt=(0,n.Uk)("基类"),ft=(0,n.Uk)(" 后分别实现对应存储服务的 "),Lt=(0,n.Wm)("code",null,"select()",-1),Pt=(0,n.Uk)(", "),Qt=(0,n.Wm)("code",null,"add()",-1),Tt=(0,n.Uk)(", "),wt=(0,n.Wm)("code",null,"update()",-1),Gt=(0,n.Uk)(", "),yt=(0,n.Wm)("code",null,"delete()",-1),vt=(0,n.Uk)(" 方法后提交 PR 即可。"),Et={render:function(t,e){const d=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[l,a,s,r,(0,n.Wm)("p",null,[(0,n.Wm)("a",o,[c,(0,n.Wm)(d)]),m]),u,(0,n.Wm)("p",null,[h,(0,n.Wm)("a",p,[i,(0,n.Wm)(d)]),W]),(0,n.Wm)("p",null,[b,(0,n.Wm)("a",k,[g,(0,n.Wm)(d)]),S]),O,(0,n.Wm)("p",null,[_,(0,n.Wm)("a",U,[M,(0,n.Wm)(d)]),f]),L,(0,n.Wm)("p",null,[(0,n.Wm)("a",P,[Q,(0,n.Wm)(d)]),T]),(0,n.Wm)("p",null,[w,(0,n.Wm)("a",G,[y,(0,n.Wm)(d)]),v]),E,(0,n.Wm)("p",null,[B,(0,n.Wm)("a",D,[N,(0,n.Wm)(d)]),R]),(0,n.Wm)("table",null,[q,(0,n.Wm)("tbody",null,[H,(0,n.Wm)("tr",null,[C,I,A,(0,n.Wm)("td",null,[Y,(0,n.Wm)("a",j,[x,(0,n.Wm)(d)]),K])]),(0,n.Wm)("tr",null,[F,J,V,(0,n.Wm)("td",null,[X,(0,n.Wm)("a",z,[Z,(0,n.Wm)(d)]),$])]),tt])]),et,(0,n.Wm)("p",null,[dt,(0,n.Wm)("a",nt,[lt,(0,n.Wm)(d)]),at,st,rt,ot,ct]),(0,n.Wm)("table",null,[mt,(0,n.Wm)("tbody",null,[(0,n.Wm)("tr",null,[ut,ht,pt,(0,n.Wm)("td",null,[(0,n.Wm)("a",it,[Wt,(0,n.Wm)(d)])])]),bt,kt])]),gt,St,Ot,(0,n.Wm)("p",null,[_t,(0,n.Wm)("a",Ut,[Mt,(0,n.Wm)(d)]),ft,Lt,Pt,Qt,Tt,wt,Gt,yt,vt])],64)}}}}]);