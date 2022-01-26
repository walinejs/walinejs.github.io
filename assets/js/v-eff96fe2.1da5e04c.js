"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8538],{6884:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a={key:"v-eff96fe2",path:"/en/guide/get-started.html",title:"Get Started",lang:"en-US",frontmatter:{},excerpt:'<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get Started</h1>\n<p>Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.</p>\n',headers:[{level:2,title:"LeanCloud settings (Database)",slug:"leancloud-settings-database",children:[]},{level:2,title:"Deploy to Vercel (Server)",slug:"deploy-to-vercel-server",children:[]},{level:2,title:"Importing in HTML (Client)",slug:"importing-in-html-client",children:[]},{level:2,title:"Comment management (Management)",slug:"comment-management-management",children:[]}],filePathRelative:"en/guide/get-started.md",git:{updatedTime:1643157828e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},7452:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var a=t(8917),l=t(7804),s=t(2092),o=t(3787),i=t(6676),r=t(1091),c=t(9219),p=t(5053),u=t(4387),_=t(9050);const d=(0,a._)("h1",{id:"get-started",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),(0,a.Uk)(" Get Started")],-1),k=(0,a._)("p",null,"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.",-1),m=(0,a._)("h2",{id:"leancloud-settings-database",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#leancloud-settings-database","aria-hidden":"true"},"#"),(0,a.Uk)(" LeanCloud settings (Database)")],-1),g={href:"https://console.leancloud.app/login",target:"_blank",rel:"noopener noreferrer"},h=(0,a.Uk)("sign in"),b=(0,a.Uk)(" or "),U={href:"https://console.leancloud.app/register",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("sign up"),y=(0,a.Uk)(" LeanCloud and enter "),f={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("Console"),C=(0,a.Uk)("."),x=(0,a.Uk)("Click "),A={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},L=(0,a.Uk)("Create app"),T=(0,a.Uk)(" button to create a new app and enter a name you like:"),W=(0,a._)("p",null,[(0,a._)("img",{src:l,alt:"Create App"})],-1),E=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Enter the app, then select "),(0,a._)("code",null,"Settings"),(0,a.Uk)(" > "),(0,a._)("code",null,"App Keys"),(0,a.Uk)(" at the left bottom corner. You will see "),(0,a._)("code",null,"APP ID"),(0,a.Uk)(", "),(0,a._)("code",null,"APP Key"),(0,a.Uk)(" and "),(0,a._)("code",null,"Master Key"),(0,a.Uk)(" of your app. We will use them later")]),(0,a._)("p",null,[(0,a._)("img",{src:s,alt:"ID and Key"})])],-1),S=(0,a._)("h2",{id:"deploy-to-vercel-server",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#deploy-to-vercel-server","aria-hidden":"true"},"#"),(0,a.Uk)(" Deploy to Vercel (Server)")],-1),j={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},D=(0,a._)("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),I=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,"Click the blue button above, it will redirect you to vercel to deploy with waline template.")]),(0,a._)("li",null,[(0,a._)("p",null,"If you haven't logined, we recommend you to sign in with GitHub.")]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Input your Vercel project name then click "),(0,a._)("code",null,"Create"),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a._)("img",{src:o,alt:"Create Project"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Then Vercel will let you create Vercel Team account, click "),(0,a._)("code",null,"Skip"),(0,a.Uk)(" and go on.")]),(0,a._)("p",null,[(0,a._)("img",{src:i,alt:"skip team"})])]),(0,a._)("li",null,[(0,a._)("p",null,"Repo which named you input before will be created and initiallized automatically base on waline example template by Vercel."),(0,a._)("p",null,[(0,a._)("img",{src:r,alt:"deploy"})]),(0,a._)("p",null,[(0,a.Uk)("After one minute or two, vercel should finish the deployment. Click "),(0,a._)("code",null,"Go to Dashboard"),(0,a.Uk)(" button to redirect to your application dashboard.")]),(0,a._)("p",null,[(0,a._)("img",{src:c,alt:"deploy"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Click "),(0,a._)("code",null,"Settings"),(0,a.Uk)(" menu on the top, and "),(0,a._)("code",null,"Environment Variables"),(0,a.Uk)(" button on the side to go to envrionment variables setting page. Then set "),(0,a._)("code",null,"LEAN_ID"),(0,a.Uk)(", "),(0,a._)("code",null,"LEAN_KEY"),(0,a.Uk)(" and "),(0,a._)("code",null,"LEAN_MASTER_KEY"),(0,a.Uk)(". The variables' value should be the ones you got in the previous step. "),(0,a._)("code",null,"APP ID"),(0,a.Uk)(" is the value of "),(0,a._)("code",null,"LEAN_ID"),(0,a.Uk)(", and "),(0,a._)("code",null,"APP Key"),(0,a.Uk)(" to "),(0,a._)("code",null,"LEAN_KEY"),(0,a.Uk)(", "),(0,a._)("code",null,"Master Key"),(0,a.Uk)(" to "),(0,a._)("code",null,"LEAN_MASTER_KEY"),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a._)("img",{src:p,alt:"set environment variables"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("To let your environment variables setting active, you need redeploy your application. Click "),(0,a._)("code",null,"Deployments"),(0,a.Uk)(" menu on the top and find the latest deployment at the top of list, click "),(0,a._)("code",null,"Redeploy"),(0,a.Uk)(" button in the right dropdown menu.")]),(0,a._)("p",null,[(0,a._)("img",{src:u,alt:"redeploy"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("If everything is ok, vercel will redirect to "),(0,a._)("code",null,"Overview"),(0,a.Uk)(" page to start redeployment. Wait a moment the "),(0,a._)("code",null,"STATUS"),(0,a.Uk)(" will change to "),(0,a._)("code",null,"Ready"),(0,a.Uk)(". Now you can click "),(0,a._)("code",null,"Visit"),(0,a.Uk)(" to visit the site. This link is your server address.")]),(0,a._)("p",null,[(0,a._)("img",{src:_,alt:"redeploy success"})])])],-1),K=(0,a._)("h2",{id:"importing-in-html-client",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#importing-in-html-client","aria-hidden":"true"},"#"),(0,a.Uk)(" Importing in HTML (Client)")],-1),M=(0,a._)("p",null,"Make the following settings on your web page:",-1),P=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Use CDN to import Waline: "),(0,a._)("code",null,"///cdn.jsdelivr.net/npm/@waline/client"),(0,a.Uk)(".")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Create a "),(0,a._)("code",null,"<script>"),(0,a.Uk)(" tag and initialize with "),(0,a._)("code",null,"Waline()"),(0,a.Uk)(" while passing in the necessary "),(0,a._)("code",null,"el"),(0,a.Uk)(" and "),(0,a._)("code",null,"serverURL"),(0,a.Uk)(" options.")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("The "),(0,a._)("code",null,"el"),(0,a.Uk)(" option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.")]),(0,a._)("li",null,[(0,a._)("code",null,"serverURL"),(0,a.Uk)(" is the link of the server, which you just got.")])]),(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("head")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ..\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("script")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"src"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("//cdn.jsdelivr.net/npm/@waline/client"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token script"}),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ...\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("head")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ...\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"id"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("waline"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token script"},[(0,a._)("span",{class:"token language-javascript"},[(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"Waline"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      el"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'#waline'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      serverURL"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'https://your-domain.vercel.app'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  ")])]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,"The comment service will now run successfully on your website 🎉")])],-1),R=(0,a._)("h2",{id:"comment-management-management",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#comment-management-management","aria-hidden":"true"},"#"),(0,a.Uk)(" Comment management (Management)")],-1),V=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("After the deployment is complete, please visit "),(0,a._)("code",null,"<serverURL>/ui/register"),(0,a.Uk)(" to register. The first person to register will be set as an administrator.")]),(0,a._)("li",null,"After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here."),(0,a._)("li",null,"Users can also register their account in the comment box, and they will be redirected to their profile page after logging in.")],-1),N={},Y=(0,t(6959).Z)(N,[["render",function(e,n){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,k,m,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",g,[h,(0,a.Wm)(t)]),b,(0,a._)("a",U,[v,(0,a.Wm)(t)]),y,(0,a._)("a",f,[w,(0,a.Wm)(t)]),C])]),(0,a._)("li",null,[(0,a._)("p",null,[x,(0,a._)("a",A,[L,(0,a.Wm)(t)]),T]),W]),E]),S,(0,a._)("p",null,[(0,a._)("a",j,[D,(0,a.Wm)(t)])]),I,K,M,P,R,V],64)}]])},7804:(e,n,t)=>{e.exports=t.p+"assets/img/leancloud-app-1.9c9739de.jpg"},2092:(e,n,t)=>{e.exports=t.p+"assets/img/leancloud-app-2.6d9a4f9c.jpg"},3787:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-1.64d3645a.png"},6676:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-2.0b5723a1.png"},1091:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-3.a5983e24.png"},9219:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-4.a6c14ef7.png"},5053:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-5.a8ed3e1b.png"},4387:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-6.8c0b9f8e.png"},9050:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-7.56e75bad.png"}}]);