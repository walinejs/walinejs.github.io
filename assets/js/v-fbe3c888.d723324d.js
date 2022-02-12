"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6734],{8478:(e,a,t)=>{t.r(a),t.d(a,{data:()=>r});const r={key:"v-fbe3c888",path:"/guide/server/railway.html",title:"Railway 部署",lang:"zh-CN",frontmatter:{title:"Railway 部署",icon:"railway",head:[["meta",{property:"og:url",content:"https://waline.js.org/guide/server/railway.html"}],["meta",{property:"og:title",content:"Railway 部署"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Railway 部署","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"如何更新",slug:"如何更新",children:[]},{level:2,title:"如何修改环境变量",slug:"如何修改环境变量",children:[]}],git:{createdTime:1644683949e3,updatedTime:1644683949e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.21,words:364},filePathRelative:"guide/server/railway.md"}},3123:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var r=t(8917),i=t(5574),l=t(1194),p=t(8221),s=t(5521);const o=(0,r.uE)('<p><a href="https://railway.app/" target="_blank" rel="noopener noreferrer">Railway</a> 是一个可免费使用的 Serverless 部署平台。我们可以快速的将 Waline 部署到 Railway 平台上。</p><p><a href="https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Fwalinejs%2Frailway-starter&amp;plugins=postgresql&amp;envs=PG_HOST%2CPG_PORT%2CPG_USER%2CPG_PASSWORD%2CPG_DB%2CPG_PREFIX%2CPORT&amp;referralCode=lizheming&amp;PG_HOSTDefault=%24%7B%7B+PGHOST+%7D%7D&amp;PG_HOSTDesc=Don%27t+modify+it&amp;PG_PORTDefault=%24%7B%7B+PGPORT+%7D%7D&amp;PG_PORTDesc=Don%27t+modify+it&amp;PG_USERDefault=%24%7B%7B+PGUSER+%7D%7D&amp;PG_USERDesc=Don%27t+modify+it&amp;PG_PASSWORDDefault=%24%7B%7B+PGPASSWORD+%7D%7D&amp;PG_PASSWORDDesc=Don%27t+modify+it&amp;PG_DBDefault=%24%7B%7B+PGDATABASE+%7D%7D&amp;PG_DBDesc=Don%27t+modify+it&amp;PG_PREFIXDefault=wl_&amp;PG_PREFIXDesc=Don%27t+modify+it&amp;PORTDefault=3000&amp;PORTDesc=Don%27t+modify+it" target="_blank" rel="noopener noreferrer"><img src="https://railway.app/button.svg" alt="Deploy on Railway"></a></p><p>点击上方按钮，跳转至 Railway 平台快速部署。登录之后会让你选择新建仓库的名称，环境变量部分不需要改动，直接点击下方的 <kbd>Deploy</kbd> 按钮进行部署即可。</p><p><img src="'+i+'" alt=""></p><p>进入管理界面后，选择 <kbd>PostgreSQL</kbd> - <kbd>Query</kbd>，将 <a href="https://github.com/walinejs/waline/blob/main/assets/waline.pgsql" target="_blank" rel="noopener noreferrer">waline.pgsql</a> 中的内容粘贴至输入框中，点击底部的 <kbd>Run Query</kbd> 按钮完成数据库的初始化。</p><p><img src="'+l+'" alt=""></p><p>最后在 <kbd>Deployments</kbd> - <kbd>Domains</kbd> 中就可以获取到访问的地址了。</p><p><img src="'+p+'" alt=""></p><h2 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新" aria-hidden="true">#</a> 如何更新</h2><p>进入到 GitHub 仓库中，修改 package.json 文件中的 <code>@waline/vercel</code> 版本号为最新版本即可。</p><h2 id="如何修改环境变量" tabindex="-1"><a class="header-anchor" href="#如何修改环境变量" aria-hidden="true">#</a> 如何修改环境变量</h2><p>可以通过 <kbd>Variables</kbd> Tab 进入环境变量管理页，修改完成之后会自动重新部署。</p><p><img src="'+s+'" alt=""></p>',13),n={},m=(0,t(6959).Z)(n,[["render",function(e,a){return o}]])},5574:(e,a,t)=>{e.exports=t.p+"assets/img/railway-1.3985b528.jpg"},1194:(e,a,t)=>{e.exports=t.p+"assets/img/railway-2.d075e01b.jpg"},8221:(e,a,t)=>{e.exports=t.p+"assets/img/railway-3.5984dee6.jpg"},5521:(e,a,t)=>{e.exports=t.p+"assets/img/railway-4.4f8f9777.jpg"}}]);