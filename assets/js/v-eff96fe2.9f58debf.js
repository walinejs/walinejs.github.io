"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8538],{6884:(e,n,t)=>{t.r(n),t.d(n,{data:()=>a});const a={key:"v-eff96fe2",path:"/en/guide/get-started.html",title:"Get Started",lang:"en-US",frontmatter:{},excerpt:'<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get Started</h1>\n<p>Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.</p>\n',headers:[{level:2,title:"LeanCloud settings (Database)",slug:"leancloud-settings-database",children:[]},{level:2,title:"Deploy to Vercel (Server)",slug:"deploy-to-vercel-server",children:[]},{level:2,title:"Importing in HTML (Client)",slug:"importing-in-html-client",children:[]},{level:2,title:"Comment management (Management)",slug:"comment-management-management",children:[]}],filePathRelative:"en/guide/get-started.md",git:{updatedTime:1629250445e3,contributors:[]}}},7826:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var a=t(8917),l=t(3787),s=t(6676),o=t(1091),i=t(9219),r=t(5053),c=t(4387),p=t(9050);const u=(0,a._)("h1",{id:"get-started",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),(0,a.Uk)(" Get Started")],-1),_=(0,a._)("p",null,"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.",-1),d=(0,a._)("h2",{id:"leancloud-settings-database",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#leancloud-settings-database","aria-hidden":"true"},"#"),(0,a.Uk)(" LeanCloud settings (Database)")],-1),k={href:"https://console.leancloud.app/login.html#/signin",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("sign in"),g=(0,a.Uk)(" or "),h={href:"https://console.leancloud.app/login.html#/signup",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("sign up"),U=(0,a.Uk)(" LeanCloud and enter "),v={href:"https://console.leancloud.app/applist.html#/apps",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("Console"),f=(0,a.Uk)("."),w=(0,a.Uk)("Click "),C={href:"https://console.leancloud.app/applist.html#/newapp",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("Create app"),A=(0,a.Uk)(" button to create a new app and enter a name you like:"),L=(0,a._)("p",null,[(0,a._)("img",{src:"https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg",alt:"Create App"})],-1),T=(0,a.uE)('<li><p>Enter the app, then select <code>Settings</code> &gt; <code>App Keys</code> at the left bottom corner. You will see <code>APP ID</code>, <code>APP Key</code> and <code>Master Key</code> of your app. We will use them later</p><p><img src="https://i.loli.net/2019/06/21/5d0c997a60baa24436.jpg" alt="ID and Key"></p></li>',1),W=(0,a._)("h2",{id:"deploy-to-vercel-server",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#deploy-to-vercel-server","aria-hidden":"true"},"#"),(0,a.Uk)(" Deploy to Vercel (Server)")],-1),E={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},S=(0,a._)("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),j=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,"Click the blue button above, it will redirect you to vercel to deploy with waline template.")]),(0,a._)("li",null,[(0,a._)("p",null,"If you haven't logined, we recommend you to sign in with GitHub.")]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Input your Vercel project name then click "),(0,a._)("code",null,"Create"),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a._)("img",{src:l,alt:"Create Project"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Then Vercel will let you create Vercel Team account, click "),(0,a._)("code",null,"Skip"),(0,a.Uk)(" and go on.")]),(0,a._)("p",null,[(0,a._)("img",{src:s,alt:"skip team"})])]),(0,a._)("li",null,[(0,a._)("p",null,"Repo which named you input before will be created and initiallized automatically base on waline example template by Vercel."),(0,a._)("p",null,[(0,a._)("img",{src:o,alt:"deploy"})]),(0,a._)("p",null,[(0,a.Uk)("After one minute or two, vercel should finish the deployment. Click "),(0,a._)("code",null,"Go to Dashboard"),(0,a.Uk)(" button to redirect to your application dashboard.")]),(0,a._)("p",null,[(0,a._)("img",{src:i,alt:"deploy"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Click "),(0,a._)("code",null,"Settings"),(0,a.Uk)(" menu on the top, and "),(0,a._)("code",null,"Environment Variables"),(0,a.Uk)(" button on the side to go to envrionment variables setting page. Then set "),(0,a._)("code",null,"LEAN_ID"),(0,a.Uk)(", "),(0,a._)("code",null,"LEAN_KEY"),(0,a.Uk)(" and "),(0,a._)("code",null,"LEAN_MASTER_KEY"),(0,a.Uk)(". The variables' value should be the ones you got in the previous step. "),(0,a._)("code",null,"APP ID"),(0,a.Uk)(" is the value of "),(0,a._)("code",null,"LEAN_ID"),(0,a.Uk)(", and "),(0,a._)("code",null,"APP Key"),(0,a.Uk)(" to "),(0,a._)("code",null,"LEAN_KEY"),(0,a.Uk)(", "),(0,a._)("code",null,"Master Key"),(0,a.Uk)(" to "),(0,a._)("code",null,"LEAN_MASTER_KEY"),(0,a.Uk)(".")]),(0,a._)("p",null,[(0,a._)("img",{src:r,alt:"set environment variables"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("To let your environment variables setting active, you need redeploy your application. Click "),(0,a._)("code",null,"Deployments"),(0,a.Uk)(" menu on the top and find the latest deployment at the top of list, click "),(0,a._)("code",null,"Redeploy"),(0,a.Uk)(" button in the right dropdown menu.")]),(0,a._)("p",null,[(0,a._)("img",{src:c,alt:"redeploy"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("If everything is ok, vercel will redirect to "),(0,a._)("code",null,"Overview"),(0,a.Uk)(" page to start redeployment. Wait a moment the "),(0,a._)("code",null,"STATUS"),(0,a.Uk)(" will change to "),(0,a._)("code",null,"Ready"),(0,a.Uk)(". Now you can click "),(0,a._)("code",null,"Visit"),(0,a.Uk)(" to visit the site. This link is your server address.")]),(0,a._)("p",null,[(0,a._)("img",{src:p,alt:"redeploy success"})])])],-1),D=(0,a._)("h2",{id:"importing-in-html-client",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#importing-in-html-client","aria-hidden":"true"},"#"),(0,a.Uk)(" Importing in HTML (Client)")],-1),I=(0,a._)("p",null,"Make the following settings on your web page:",-1),K=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Use CDN to import Waline: "),(0,a._)("code",null,"///cdn.jsdelivr.net/npm/@waline/client"),(0,a.Uk)(".")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("Create a "),(0,a._)("code",null,"<script>"),(0,a.Uk)(" tag and initialize with "),(0,a._)("code",null,"Waline()"),(0,a.Uk)(" while passing in the necessary "),(0,a._)("code",null,"el"),(0,a.Uk)(" and "),(0,a._)("code",null,"serverURL"),(0,a.Uk)(" options.")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a.Uk)("The "),(0,a._)("code",null,"el"),(0,a.Uk)(" option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.")]),(0,a._)("li",null,[(0,a._)("code",null,"serverURL"),(0,a.Uk)(" is the link of the server, which you just got.")])]),(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("head")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ..\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("script")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"src"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("//cdn.jsdelivr.net/npm/@waline/client"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token script"}),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ...\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("head")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ...\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"id"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("waline"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token script"},[(0,a._)("span",{class:"token language-javascript"},[(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"Waline"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      el"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'#waline'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      serverURL"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'https://your-domain.vercel.app'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  ")])]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,"The comment service will now run successfully on your website 🎉")])],-1),M=(0,a._)("h2",{id:"comment-management-management",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#comment-management-management","aria-hidden":"true"},"#"),(0,a.Uk)(" Comment management (Management)")],-1),P=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("After the deployment is complete, please visit "),(0,a._)("code",null,"<serverURL>/ui/register"),(0,a.Uk)(" to register. The first person to register will be set as an administrator.")]),(0,a._)("li",null,"After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here."),(0,a._)("li",null,"Users can also register their account in the comment box, and they will be redirected to their profile page after logging in.")],-1),R={render:function(e,n){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[u,_,d,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",k,[m,(0,a.Wm)(t)]),g,(0,a._)("a",h,[b,(0,a.Wm)(t)]),U,(0,a._)("a",v,[y,(0,a.Wm)(t)]),f])]),(0,a._)("li",null,[(0,a._)("p",null,[w,(0,a._)("a",C,[x,(0,a.Wm)(t)]),A]),L]),T]),W,(0,a._)("p",null,[(0,a._)("a",E,[S,(0,a.Wm)(t)])]),j,D,I,K,M,P],64)}}},3787:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-1.64d3645a.png"},6676:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-2.0b5723a1.png"},1091:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-3.a5983e24.png"},9219:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-4.a6c14ef7.png"},5053:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-5.a8ed3e1b.png"},4387:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-6.8c0b9f8e.png"},9050:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-7.56e75bad.png"}}]);