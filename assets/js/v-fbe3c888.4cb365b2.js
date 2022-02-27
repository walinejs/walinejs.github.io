"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6734],{4826:(e,a,t)=>{t.r(a),t.d(a,{data:()=>l});const l={key:"v-fbe3c888",path:"/guide/server/railway.html",title:"Railway 部署",lang:"zh-CN",frontmatter:{title:"Railway 部署",icon:"railway",summary:"Railway 是一个可免费使用的 Serverless 部署平台。我们可以快速的将 Waline 部署到 Railway 平台上。 点击上方按钮，跳转至 Railway 平台快速部署。登录之后会让你选择新建仓库的名称，环境变量部分不需要改动，直接点击下方的 Deploy 按钮进行部署即可。 进入管理界面后，选择 PostgreSQL - Query，将 w",head:[["meta",{property:"og:url",content:"https://waline.js.org/guide/server/railway.html"}],["meta",{property:"og:title",content:"Railway 部署"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"如何更新",slug:"如何更新",children:[]},{level:2,title:"如何修改环境变量",slug:"如何修改环境变量",children:[]}],git:{createdTime:164597585e4,updatedTime:164597585e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:1.21,words:364},filePathRelative:"guide/server/railway.md"}},9207:(e,a,t)=>{t.r(a),t.d(a,{default:()=>T});var l=t(8917),r=t(1643),i=t(9911),n=t(7493),s=t(9539);const o={href:"https://railway.app/",target:"_blank",rel:"noopener noreferrer"},p=(0,l.Uk)("Railway"),d=(0,l.Uk)(" 是一个可免费使用的 Serverless 部署平台。我们可以快速的将 Waline 部署到 Railway 平台上。"),m={href:"https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Fwalinejs%2Frailway-starter&plugins=postgresql&envs=PG_HOST%2CPG_PORT%2CPG_USER%2CPG_PASSWORD%2CPG_DB%2CPG_PREFIX%2CPORT&referralCode=lizheming&PG_HOSTDefault=%24%7B%7B+PGHOST+%7D%7D&PG_HOSTDesc=Don%27t+modify+it&PG_PORTDefault=%24%7B%7B+PGPORT+%7D%7D&PG_PORTDesc=Don%27t+modify+it&PG_USERDefault=%24%7B%7B+PGUSER+%7D%7D&PG_USERDesc=Don%27t+modify+it&PG_PASSWORDDefault=%24%7B%7B+PGPASSWORD+%7D%7D&PG_PASSWORDDesc=Don%27t+modify+it&PG_DBDefault=%24%7B%7B+PGDATABASE+%7D%7D&PG_DBDesc=Don%27t+modify+it&PG_PREFIXDefault=wl_&PG_PREFIXDesc=Don%27t+modify+it&PORTDefault=3000&PORTDesc=Don%27t+modify+it",target:"_blank",rel:"noopener noreferrer"},c=(0,l._)("img",{src:"https://railway.app/button.svg",alt:"Deploy on Railway"},null,-1),u=(0,l._)("p",null,[(0,l.Uk)("点击上方按钮，跳转至 Railway 平台快速部署。登录之后会让你选择新建仓库的名称，环境变量部分不需要改动，直接点击下方的 "),(0,l._)("kbd",null,"Deploy"),(0,l.Uk)(" 按钮进行部署即可。")],-1),g=(0,l._)("p",null,[(0,l._)("img",{src:r,alt:""})],-1),y=(0,l.Uk)("进入管理界面后，选择 "),D=(0,l._)("kbd",null,"PostgreSQL",-1),P=(0,l.Uk)(" - "),h=(0,l._)("kbd",null,"Query",-1),w=(0,l.Uk)("，将 "),_={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},f=(0,l.Uk)("waline.pgsql"),b=(0,l.Uk)(" 中的内容粘贴至输入框中，点击底部的 "),k=(0,l._)("kbd",null,"Run Query",-1),R=(0,l.Uk)(" 按钮完成数据库的初始化。"),G=(0,l.uE)('<p><img src="'+i+'" alt=""></p><p>最后在 <kbd>Deployments</kbd> - <kbd>Domains</kbd> 中就可以获取到访问的地址了。</p><p><img src="'+n+'" alt=""></p><h2 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新" aria-hidden="true">#</a> 如何更新</h2><p>进入到 GitHub 仓库中，修改 package.json 文件中的 <code>@waline/vercel</code> 版本号为最新版本即可。</p><h2 id="如何修改环境变量" tabindex="-1"><a class="header-anchor" href="#如何修改环境变量" aria-hidden="true">#</a> 如何修改环境变量</h2><p>可以通过 <kbd>Variables</kbd> Tab 进入环境变量管理页，修改完成之后会自动重新部署。</p><p><img src="'+s+'" alt=""></p>',8),S={},T=(0,t(6959).Z)(S,[["render",function(e,a){const t=(0,l.up)("ExternalLinkIcon");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("p",null,[(0,l._)("a",o,[p,(0,l.Wm)(t)]),d]),(0,l._)("p",null,[(0,l._)("a",m,[c,(0,l.Wm)(t)])]),u,g,(0,l._)("p",null,[y,D,P,h,w,(0,l._)("a",_,[f,(0,l.Wm)(t)]),b,k,R]),G],64)}]])},1643:(e,a,t)=>{e.exports=t.p+"assets/img/railway-1.3985b528.jpg"},9911:(e,a,t)=>{e.exports=t.p+"assets/img/railway-2.d075e01b.jpg"},7493:(e,a,t)=>{e.exports=t.p+"assets/img/railway-3.5984dee6.jpg"},9539:(e,a,t)=>{e.exports=t.p+"assets/img/railway-4.4f8f9777.jpg"}}]);