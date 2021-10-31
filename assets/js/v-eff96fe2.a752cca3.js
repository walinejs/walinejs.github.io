"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8538],{6884:(e,n,t)=>{t.r(n),t.d(n,{data:()=>l});const l={key:"v-eff96fe2",path:"/en/guide/get-started.html",title:"Get Started",lang:"en-US",frontmatter:{},excerpt:'<h1 id="get-started" tabindex="-1"><a class="header-anchor" href="#get-started" aria-hidden="true">#</a> Get Started</h1>\n<p>Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.</p>\n',headers:[{level:2,title:"LeanCloud settings (Database)",slug:"leancloud-settings-database",children:[]},{level:2,title:"Deploy to Vercel (Server)",slug:"deploy-to-vercel-server",children:[]},{level:2,title:"Importing in HTML (Client)",slug:"importing-in-html-client",children:[]},{level:2,title:"Comment management (Management)",slug:"comment-management-management",children:[]}],filePathRelative:"en/guide/get-started.md",git:{updatedTime:1635701873e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]}}},8879:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var l=t(8917),a=t(7804),s=t(2092),o=t(3787),i=t(6676),r=t(1091),c=t(9219),p=t(5053),u=t(4387),_=t(9050);const d=(0,l._)("h1",{id:"get-started",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#get-started","aria-hidden":"true"},"#"),(0,l.Uk)(" Get Started")],-1),k=(0,l._)("p",null,"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.",-1),m=(0,l._)("h2",{id:"leancloud-settings-database",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#leancloud-settings-database","aria-hidden":"true"},"#"),(0,l.Uk)(" LeanCloud settings (Database)")],-1),g={href:"https://console.leancloud.app/login.html#/signin",target:"_blank",rel:"noopener noreferrer"},h=(0,l.Uk)("sign in"),U=(0,l.Uk)(" or "),b={href:"https://console.leancloud.app/login.html#/signup",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("sign up"),y=(0,l.Uk)(" LeanCloud and enter "),f={href:"https://console.leancloud.app/applist.html#/apps",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("Console"),C=(0,l.Uk)("."),x=(0,l.Uk)("Click "),A={href:"https://console.leancloud.app/applist.html#/newapp",target:"_blank",rel:"noopener noreferrer"},L=(0,l.Uk)("Create app"),T=(0,l.Uk)(" button to create a new app and enter a name you like:"),W=(0,l._)("p",null,[(0,l._)("img",{src:a,alt:"Create App"})],-1),E=(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Enter the app, then select "),(0,l._)("code",null,"Settings"),(0,l.Uk)(" > "),(0,l._)("code",null,"App Keys"),(0,l.Uk)(" at the left bottom corner. You will see "),(0,l._)("code",null,"APP ID"),(0,l.Uk)(", "),(0,l._)("code",null,"APP Key"),(0,l.Uk)(" and "),(0,l._)("code",null,"Master Key"),(0,l.Uk)(" of your app. We will use them later")]),(0,l._)("p",null,[(0,l._)("img",{src:s,alt:"ID and Key"})])],-1),S=(0,l._)("h2",{id:"deploy-to-vercel-server",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#deploy-to-vercel-server","aria-hidden":"true"},"#"),(0,l.Uk)(" Deploy to Vercel (Server)")],-1),j={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},D=(0,l._)("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),I=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,"Click the blue button above, it will redirect you to vercel to deploy with waline template.")]),(0,l._)("li",null,[(0,l._)("p",null,"If you haven't logined, we recommend you to sign in with GitHub.")]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Input your Vercel project name then click "),(0,l._)("code",null,"Create"),(0,l.Uk)(".")]),(0,l._)("p",null,[(0,l._)("img",{src:o,alt:"Create Project"})])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Then Vercel will let you create Vercel Team account, click "),(0,l._)("code",null,"Skip"),(0,l.Uk)(" and go on.")]),(0,l._)("p",null,[(0,l._)("img",{src:i,alt:"skip team"})])]),(0,l._)("li",null,[(0,l._)("p",null,"Repo which named you input before will be created and initiallized automatically base on waline example template by Vercel."),(0,l._)("p",null,[(0,l._)("img",{src:r,alt:"deploy"})]),(0,l._)("p",null,[(0,l.Uk)("After one minute or two, vercel should finish the deployment. Click "),(0,l._)("code",null,"Go to Dashboard"),(0,l.Uk)(" button to redirect to your application dashboard.")]),(0,l._)("p",null,[(0,l._)("img",{src:c,alt:"deploy"})])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Click "),(0,l._)("code",null,"Settings"),(0,l.Uk)(" menu on the top, and "),(0,l._)("code",null,"Environment Variables"),(0,l.Uk)(" button on the side to go to envrionment variables setting page. Then set "),(0,l._)("code",null,"LEAN_ID"),(0,l.Uk)(", "),(0,l._)("code",null,"LEAN_KEY"),(0,l.Uk)(" and "),(0,l._)("code",null,"LEAN_MASTER_KEY"),(0,l.Uk)(". The variables' value should be the ones you got in the previous step. "),(0,l._)("code",null,"APP ID"),(0,l.Uk)(" is the value of "),(0,l._)("code",null,"LEAN_ID"),(0,l.Uk)(", and "),(0,l._)("code",null,"APP Key"),(0,l.Uk)(" to "),(0,l._)("code",null,"LEAN_KEY"),(0,l.Uk)(", "),(0,l._)("code",null,"Master Key"),(0,l.Uk)(" to "),(0,l._)("code",null,"LEAN_MASTER_KEY"),(0,l.Uk)(".")]),(0,l._)("p",null,[(0,l._)("img",{src:p,alt:"set environment variables"})])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("To let your environment variables setting active, you need redeploy your application. Click "),(0,l._)("code",null,"Deployments"),(0,l.Uk)(" menu on the top and find the latest deployment at the top of list, click "),(0,l._)("code",null,"Redeploy"),(0,l.Uk)(" button in the right dropdown menu.")]),(0,l._)("p",null,[(0,l._)("img",{src:u,alt:"redeploy"})])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("If everything is ok, vercel will redirect to "),(0,l._)("code",null,"Overview"),(0,l.Uk)(" page to start redeployment. Wait a moment the "),(0,l._)("code",null,"STATUS"),(0,l.Uk)(" will change to "),(0,l._)("code",null,"Ready"),(0,l.Uk)(". Now you can click "),(0,l._)("code",null,"Visit"),(0,l.Uk)(" to visit the site. This link is your server address.")]),(0,l._)("p",null,[(0,l._)("img",{src:_,alt:"redeploy success"})])])],-1),M=(0,l._)("h2",{id:"importing-in-html-client",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#importing-in-html-client","aria-hidden":"true"},"#"),(0,l.Uk)(" Importing in HTML (Client)")],-1),K=(0,l._)("p",null,"Make the following settings on your web page:",-1),P=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Use CDN to import Waline: "),(0,l._)("code",null,"///cdn.jsdelivr.net/npm/@waline/client"),(0,l.Uk)(".")])]),(0,l._)("li",null,[(0,l._)("p",null,[(0,l.Uk)("Create a "),(0,l._)("code",null,"<script>"),(0,l.Uk)(" tag and initialize with "),(0,l._)("code",null,"Waline()"),(0,l.Uk)(" while passing in the necessary "),(0,l._)("code",null,"el"),(0,l.Uk)(" and "),(0,l._)("code",null,"serverURL"),(0,l.Uk)(" options.")]),(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("The "),(0,l._)("code",null,"el"),(0,l.Uk)(" option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.")]),(0,l._)("li",null,[(0,l._)("code",null,"serverURL"),(0,l.Uk)(" is the link of the server, which you just got.")])]),(0,l._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,l._)("pre",{class:"language-html"},[(0,l._)("code",null,[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"<"),(0,l.Uk)("head")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n  ..\n  "),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"<"),(0,l.Uk)("script")]),(0,l.Uk)(),(0,l._)("span",{class:"token attr-name"},"src"),(0,l._)("span",{class:"token attr-value"},[(0,l._)("span",{class:"token punctuation attr-equals"},"="),(0,l._)("span",{class:"token punctuation"},'"'),(0,l.Uk)("//cdn.jsdelivr.net/npm/@waline/client"),(0,l._)("span",{class:"token punctuation"},'"')]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l._)("span",{class:"token script"}),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"</"),(0,l.Uk)("script")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n  ...\n"),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"</"),(0,l.Uk)("head")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"<"),(0,l.Uk)("body")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n  ...\n  "),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"<"),(0,l.Uk)("div")]),(0,l.Uk)(),(0,l._)("span",{class:"token attr-name"},"id"),(0,l._)("span",{class:"token attr-value"},[(0,l._)("span",{class:"token punctuation attr-equals"},"="),(0,l._)("span",{class:"token punctuation"},'"'),(0,l.Uk)("waline"),(0,l._)("span",{class:"token punctuation"},'"')]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"</"),(0,l.Uk)("div")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n  "),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"<"),(0,l.Uk)("script")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l._)("span",{class:"token script"},[(0,l._)("span",{class:"token language-javascript"},[(0,l.Uk)("\n    "),(0,l._)("span",{class:"token function"},"Waline"),(0,l._)("span",{class:"token punctuation"},"("),(0,l._)("span",{class:"token punctuation"},"{"),(0,l.Uk)("\n      el"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'#waline'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n      serverURL"),(0,l._)("span",{class:"token operator"},":"),(0,l.Uk)(),(0,l._)("span",{class:"token string"},"'https://your-domain.vercel.app'"),(0,l._)("span",{class:"token punctuation"},","),(0,l.Uk)("\n    "),(0,l._)("span",{class:"token punctuation"},"}"),(0,l._)("span",{class:"token punctuation"},")"),(0,l._)("span",{class:"token punctuation"},";"),(0,l.Uk)("\n  ")])]),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"</"),(0,l.Uk)("script")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n"),(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token tag"},[(0,l._)("span",{class:"token punctuation"},"</"),(0,l.Uk)("body")]),(0,l._)("span",{class:"token punctuation"},">")]),(0,l.Uk)("\n")])]),(0,l._)("div",{class:"line-numbers"},[(0,l._)("span",{class:"line-number"},"1"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"2"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"3"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"4"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"5"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"6"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"7"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"8"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"9"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"10"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"11"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"12"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"13"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"14"),(0,l._)("br"),(0,l._)("span",{class:"line-number"},"15"),(0,l._)("br")])])]),(0,l._)("li",null,[(0,l._)("p",null,"The comment service will now run successfully on your website 🎉")])],-1),R=(0,l._)("h2",{id:"comment-management-management",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#comment-management-management","aria-hidden":"true"},"#"),(0,l.Uk)(" Comment management (Management)")],-1),V=(0,l._)("ol",null,[(0,l._)("li",null,[(0,l.Uk)("After the deployment is complete, please visit "),(0,l._)("code",null,"<serverURL>/ui/register"),(0,l.Uk)(" to register. The first person to register will be set as an administrator.")]),(0,l._)("li",null,"After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here."),(0,l._)("li",null,"Users can also register their account in the comment box, and they will be redirected to their profile page after logging in.")],-1),N={},Y=(0,t(6959).Z)(N,[["render",function(e,n){const t=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[d,k,m,(0,l._)("ol",null,[(0,l._)("li",null,[(0,l._)("p",null,[(0,l._)("a",g,[h,(0,l.Wm)(t)]),U,(0,l._)("a",b,[v,(0,l.Wm)(t)]),y,(0,l._)("a",f,[w,(0,l.Wm)(t)]),C])]),(0,l._)("li",null,[(0,l._)("p",null,[x,(0,l._)("a",A,[L,(0,l.Wm)(t)]),T]),W]),E]),S,(0,l._)("p",null,[(0,l._)("a",j,[D,(0,l.Wm)(t)])]),I,M,K,P,R,V],64)}]])},7804:(e,n,t)=>{e.exports=t.p+"assets/img/leancloud-app-1.9c9739de.jpg"},2092:(e,n,t)=>{e.exports=t.p+"assets/img/leancloud-app-2.6d9a4f9c.jpg"},3787:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-1.64d3645a.png"},6676:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-2.0b5723a1.png"},1091:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-3.a5983e24.png"},9219:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-4.a6c14ef7.png"},5053:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-5.a8ed3e1b.png"},4387:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-6.8c0b9f8e.png"},9050:(e,n,t)=>{e.exports=t.p+"assets/img/vercel-7.56e75bad.png"}}]);