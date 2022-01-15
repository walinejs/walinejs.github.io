"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7837],{9708:(e,t,a)=>{a.r(t),a.d(t,{data:()=>l});const l={key:"v-740dc7ea",path:"/guide/server/deta.html",title:"Deta 部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何更新",slug:"如何更新",children:[]},{level:2,title:"如何修改环境变量",slug:"如何修改环境变量",children:[]}],filePathRelative:"guide/server/deta.md",git:{updatedTime:164222606e4,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},5747:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var l=a(8917),n=a(7107),s=a(6604),r=a(3274);const d=(0,l._)("h1",{id:"deta-部署",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#deta-部署","aria-hidden":"true"},"#"),(0,l.Uk)(" Deta 部署")],-1),o={href:"https://www.deta.sh/",target:"_blank",rel:"noopener noreferrer"},i=(0,l.Uk)("Deta"),p=(0,l.Uk)(" 是一个可免费使用的 Serverless 部署平台。我们可以快速的将 Waline 部署到 Deta 平台上。"),c={href:"https://go.deta.dev/deploy?repo=https://github.com/walinejs/deta-starter",target:"_blank",rel:"noopener noreferrer"},u=(0,l._)("img",{src:"https://button.deta.dev/1/svg",alt:"Deploy with Deta"},null,-1),_=(0,l._)("p",null,"点击上方按钮，跳转至 Deta 平台快速部署。登录之后会让你选择部署的位置，同时需要你输入环境变量。",-1),k=(0,l._)("p",null,[(0,l._)("img",{src:n,alt:"Deta-1"})],-1),h=(0,l._)("p",null,[(0,l.Uk)("填写好后点击 "),(0,l._)("kbd",null,"Deploy"),(0,l.Uk)(" 按钮，稍等片刻会提示你部署成功，并为你展示部署后的网站地址。将其填入前端脚本的 "),(0,l._)("code",null,"serverURL"),(0,l.Uk)(" 配置中，即可完成全部配置。")],-1),g=(0,l._)("p",null,[(0,l._)("img",{src:s,alt:"Deta-2"})],-1),U=(0,l._)("h2",{id:"如何更新",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),(0,l.Uk)(" 如何更新")],-1),m=(0,l.Uk)("Deta 使用 CLI 命令行工具对项目进行管理。按照"),f={href:"https://docs.deta.sh/docs/cli/install",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("文档"),b=(0,l.Uk)("指示安装 Deta 的命令行工具。"),D=(0,l._)("div",{class:"language-bash ext-sh"},[(0,l._)("pre",{class:"language-bash"},[(0,l._)("code",null,[(0,l._)("span",{class:"token comment"},"# Mac or Linux"),(0,l.Uk)("\n"),(0,l._)("span",{class:"token function"},"curl"),(0,l.Uk)(" -fsSL https://get.deta.dev/cli.sh "),(0,l._)("span",{class:"token operator"},"|"),(0,l.Uk)(),(0,l._)("span",{class:"token function"},"sh"),(0,l.Uk)("\n\n"),(0,l._)("span",{class:"token comment"},"# Windows for powershell"),(0,l.Uk)("\niwr https://get.deta.dev/cli.ps1 -useb "),(0,l._)("span",{class:"token operator"},"|"),(0,l.Uk)(" iex\n")])])],-1),w=(0,l._)("p",null,[(0,l.Uk)("装好之后我们使用 "),(0,l._)("code",null,"deta login"),(0,l.Uk)(" 来登录命令行，期间会打开浏览器用于登录。")],-1),x=(0,l._)("p",null,[(0,l.Uk)("更新之前我们需要将项目克隆下来。进入到我们的项目的设置页，复制并执行页面中的 "),(0,l._)("code",null,"deta clone"),(0,l.Uk)(" 命令，稍等一会儿项目就下载下来了。")],-1),L=(0,l._)("p",null,[(0,l._)("img",{src:r,alt:"Deta-2"})],-1),W=(0,l._)("p",null,[(0,l.Uk)("之后我们可以在本地对项目代码进行修改，比如将 "),(0,l._)("code",null,"package.json"),(0,l.Uk)(" 中的依赖版本修改至最新。")],-1),y=(0,l._)("p",null,[(0,l.Uk)("最后我们在命令行中使用 "),(0,l._)("code",null,"deta deploy"),(0,l.Uk)(" 命令即可实现网站的更新部署。")],-1),C=(0,l._)("h2",{id:"如何修改环境变量",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#如何修改环境变量","aria-hidden":"true"},"#"),(0,l.Uk)(" 如何修改环境变量")],-1),j=(0,l._)("p",null,"修改换进变量同样需要使用 CLI 进行操作。",-1),A=(0,l._)("p",null,[(0,l.Uk)("按照刚才的步骤将项目克隆到本地后，在项目中新增 "),(0,l._)("code",null,".env"),(0,l.Uk)(" 文件，将需要修改的环境变量使用 "),(0,l._)("code",null,"VAR_NAME=VALUE"),(0,l.Uk)(" 的形式一行一个写在文件中。最后使用 "),(0,l._)("code",null,"deta update -e .env"),(0,l.Uk)(" 即可完成环境变量更新。")],-1),R=(0,l.Uk)("具体可参考 "),z={href:"https://docs.deta.sh/docs/micros/env_vars#setting-environment-variables",target:"_blank",rel:"noopener noreferrer"},E=(0,l.Uk)("Deta 环境变量文档"),I=(0,l.Uk)("。"),M={},N=(0,a(6959).Z)(M,[["render",function(e,t){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[d,(0,l._)("p",null,[(0,l._)("a",o,[i,(0,l.Wm)(a)]),p]),(0,l._)("p",null,[(0,l._)("a",c,[u,(0,l.Wm)(a)])]),_,k,h,g,U,(0,l._)("p",null,[m,(0,l._)("a",f,[v,(0,l.Wm)(a)]),b]),D,w,x,L,W,y,C,j,A,(0,l._)("p",null,[R,(0,l._)("a",z,[E,(0,l.Wm)(a)]),I])],64)}]])},7107:(e,t,a)=>{e.exports=a.p+"assets/img/deta-1.a238d26f.png"},6604:(e,t,a)=>{e.exports=a.p+"assets/img/deta-2.295d8a01.png"},3274:(e,t,a)=>{e.exports=a.p+"assets/img/deta-3.31cf0dda.jpg"}}]);