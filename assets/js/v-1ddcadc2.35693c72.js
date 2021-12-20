"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8525],{6538:(e,t,n)=>{n.r(t),n.d(t,{data:()=>o});const o={key:"v-1ddcadc2",path:"/en/guide/server/deta.html",title:"Deta deployment",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"How to update",slug:"how-to-update",children:[]},{level:2,title:"How to modify environment variables",slug:"how-to-modify-environment-variables",children:[]}],filePathRelative:"en/guide/server/deta.md",git:{updatedTime:163996474e4,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},7550:(e,t,n)=>{n.r(t),n.d(t,{default:()=>M});var o=n(8917),a=n(7107),l=n(6604),r=n(3274);const i=(0,o._)("h1",{id:"deta-deployment",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#deta-deployment","aria-hidden":"true"},"#"),(0,o.Uk)(" Deta deployment")],-1),d={href:"https://www.deta.sh/",target:"_blank",rel:"noopener noreferrer"},s=(0,o.Uk)("Deta"),p=(0,o.Uk)(" is a free Serverless platform, we can deploy Waline to Deta platform easily."),c={href:"https://go.deta.dev/deploy?repo=https://github.com/walinejs/deta-starter",target:"_blank",rel:"noopener noreferrer"},u=(0,o._)("img",{src:"https://button.deta.dev/1/svg",alt:"Deploy with Deta"},null,-1),h=(0,o._)("p",null,"Click this button and it'll redirect to deta platform to quickly deploy. You need select your deploy project and environment variables after login.",-1),m=(0,o._)("p",null,[(0,o._)("img",{src:a,alt:"Deta-1"})],-1),f=(0,o._)("p",null,[(0,o.Uk)("When everything is ok, just click "),(0,o._)("kbd",null,"Deploy"),(0,o.Uk)(" button. It'll deploy successful after a moment. Then deta will show you deploy site url. Copy the site url and input it into client "),(0,o._)("code",null,"serverURL"),(0,o.Uk)(" configuration. Then you can enjoy waline!")],-1),k=(0,o._)("p",null,[(0,o._)("img",{src:l,alt:"Deta-2"})],-1),_=(0,o._)("h2",{id:"how-to-update",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#how-to-update","aria-hidden":"true"},"#"),(0,o.Uk)(" How to update")],-1),g=(0,o.Uk)("Deta uses CLI command line tools to manage projects. Follow the "),b={href:"https://docs.deta.sh/docs/cli/install",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("documentation"),y=(0,o.Uk)(" guide to install Deta's command line tools."),w=(0,o._)("div",{class:"language-bash ext-sh"},[(0,o._)("pre",{class:"language-bash"},[(0,o._)("code",null,[(0,o._)("span",{class:"token comment"},"# Mac or Linux"),(0,o.Uk)("\n"),(0,o._)("span",{class:"token function"},"curl"),(0,o.Uk)(" -fsSL https://get.deta.dev/cli.sh "),(0,o._)("span",{class:"token operator"},"|"),(0,o.Uk)(),(0,o._)("span",{class:"token function"},"sh"),(0,o.Uk)("\n\n"),(0,o._)("span",{class:"token comment"},"# Windows for powershell"),(0,o.Uk)("\niwr https://get.deta.dev/cli.ps1 -useb "),(0,o._)("span",{class:"token operator"},"|"),(0,o.Uk)(" iex\n")])])],-1),U=(0,o._)("p",null,[(0,o.Uk)("After installation, we use "),(0,o._)("code",null,"deta login"),(0,o.Uk)(" to log in to the command line, during which a browser will be opened for login.")],-1),D=(0,o._)("p",null,[(0,o.Uk)("We need to clone the project before updating. Enter the setting page of our project, copy and execute the "),(0,o._)("code",null,"deta clone"),(0,o.Uk)(" command on the page, and the project will be downloaded after a while.")],-1),j=(0,o._)("p",null,[(0,o._)("img",{src:r,alt:"Deta-2"})],-1),x=(0,o._)("p",null,[(0,o.Uk)("After that, we can modify the project code locally, for example, modify the dependency version in "),(0,o._)("code",null,"package.json"),(0,o.Uk)(" to the latest.")],-1),W=(0,o._)("p",null,[(0,o.Uk)("Finally, we can use the "),(0,o._)("code",null,"deta deploy"),(0,o.Uk)(" command in the command line to implement the update deployment of the website.")],-1),L=(0,o._)("h2",{id:"how-to-modify-environment-variables",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#how-to-modify-environment-variables","aria-hidden":"true"},"#"),(0,o.Uk)(" How to modify environment variables")],-1),A=(0,o._)("p",null,"Modifying environment variable also requires the CLI to operate.",-1),C=(0,o._)("p",null,[(0,o.Uk)("After clone the project to the local according to the steps before said. Then add a "),(0,o._)("code",null,".env"),(0,o.Uk)(" file to the project, and write the environment variables that need to be modified in the file line by line in the form of "),(0,o._)("code",null,"VAR_NAME=VALUE"),(0,o.Uk)(". Finally, use "),(0,o._)("code",null,"deta update -e .env"),(0,o.Uk)(" to complete the environment variable update.")],-1),H=(0,o.Uk)("For details, please refer to "),E={href:"https://docs.deta.sh/docs/micros/env_vars#setting-environment-variables",target:"_blank",rel:"noopener noreferrer"},F=(0,o.Uk)("Deta Environment Variables Documentation"),T=(0,o.Uk)("."),I={},M=(0,n(6959).Z)(I,[["render",function(e,t){const n=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[i,(0,o._)("p",null,[(0,o._)("a",d,[s,(0,o.Wm)(n)]),p]),(0,o._)("p",null,[(0,o._)("a",c,[u,(0,o.Wm)(n)])]),h,m,f,k,_,(0,o._)("p",null,[g,(0,o._)("a",b,[v,(0,o.Wm)(n)]),y]),w,U,D,j,x,W,L,A,C,(0,o._)("p",null,[H,(0,o._)("a",E,[F,(0,o.Wm)(n)]),T])],64)}]])},7107:(e,t,n)=>{e.exports=n.p+"assets/img/deta-1.a238d26f.png"},6604:(e,t,n)=>{e.exports=n.p+"assets/img/deta-2.295d8a01.png"},3274:(e,t,n)=>{e.exports=n.p+"assets/img/deta-3.31cf0dda.jpg"}}]);