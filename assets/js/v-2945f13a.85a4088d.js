(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5221],{721:(e,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>l});const l={key:"v-2945f13a",path:"/en/advanced/faq.html",title:"FAQ",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"What is the relationship with Valine?",slug:"what-is-the-relationship-with-valine",children:[]},{level:2,title:"Do I still need to deploy Valine-Admin on LeanCloud?",slug:"do-i-still-need-to-deploy-valine-admin-on-leancloud",children:[]},{level:2,title:"How can I upgrade?",slug:"how-can-i-upgrade",children:[{level:3,title:"Frontend",slug:"frontend",children:[]},{level:3,title:"Server",slug:"server",children:[]}]},{level:2,title:"why posting comments are slow?",slug:"why-posting-comments-are-slow",children:[]},{level:2,title:"At last",slug:"at-last",children:[]}],filePathRelative:"en/advanced/faq.md",git:{updatedTime:1622364672e3,contributors:[]}}},6097:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>F});var l=t(8917);const i=t.p+"assets/img/vercel-update.24818433.png",a=t.p+"assets/img/cloudbase-update.0e0678ab.jpg",o=(0,l.Wm)("h1",{id:"faq"},[(0,l.Wm)("a",{class:"header-anchor",href:"#faq"},"#"),(0,l.Uk)(" FAQ")],-1),s=(0,l.Wm)("p",null,"Waline has a very clear position since its birth:",-1),r=(0,l.Wm)("blockquote",null,[(0,l.Wm)("p",null,[(0,l.Uk)("A "),(0,l.Wm)("strong",null,"simple"),(0,l.Uk)(" comment system "),(0,l.Wm)("strong",null,"with backend"),(0,l.Uk)(".")])],-1),d=(0,l.Wm)("p",null,"All versions released afterwards are modifications made around this position.",-1),c=(0,l.Wm)("h2",{id:"what-is-the-relationship-with-valine"},[(0,l.Wm)("a",{class:"header-anchor",href:"#what-is-the-relationship-with-valine"},"#"),(0,l.Uk)(" What is the relationship with Valine?")],-1),h=(0,l.Wm)("p",null,[(0,l.Uk)("Waline = "),(0,l.Wm)("strong",null,"W"),(0,l.Uk)("ith backend V"),(0,l.Wm)("strong",null,"aline")],-1),m=(0,l.Wm)("p",null,"Consulting with the open source version of Valine, the comment list in frontend is rewritten with React. The style and structure as well as some internal tools and methods are all from Valine.",-1),u=(0,l.Wm)("h2",{id:"do-i-still-need-to-deploy-valine-admin-on-leancloud"},[(0,l.Wm)("a",{class:"header-anchor",href:"#do-i-still-need-to-deploy-valine-admin-on-leancloud"},"#"),(0,l.Uk)(" Do I still need to deploy Valine-Admin on LeanCloud?")],-1),p=(0,l.Wm)("p",null,"No. Waline is a three-in-one deployment of data storage, server, and client. The server interface is already equivalent to Valine's LeanCloud cloud engine. The server already includes comment management and email notifications feature provided by the previous cloud engine. It doesn't need the additional LeanCloud cloud engine, so it won't be restricted by the LeanCloud cloud engine's sleep strategy.",-1),f=(0,l.Wm)("h2",{id:"how-can-i-upgrade"},[(0,l.Wm)("a",{class:"header-anchor",href:"#how-can-i-upgrade"},"#"),(0,l.Uk)(" How can I upgrade?")],-1),W=(0,l.Wm)("p",null,"Waline is mainly composed of two parts: the frontend and the server.",-1),v=(0,l.Wm)("h3",{id:"frontend"},[(0,l.Wm)("a",{class:"header-anchor",href:"#frontend"},"#"),(0,l.Uk)(" Frontend")],-1),g=(0,l.Wm)("p",null,"The front end inserts comment lists and comment boxes by including JS scripts in the web page. In most scenarios, the link will use the address of the latest version of the online CDN, and the latest version will be automatically applied, without the need for users to manually update.",-1),k=(0,l.Wm)("div",{class:"custom-container tip"},[(0,l.Wm)("p",{class:"custom-container-title"},"Need manually update in following situations"),(0,l.Wm)("ol",null,[(0,l.Wm)("li",null,"The version number is forcibly specified in the CDN address. In this situation, you need to manually modify the version number to be the latest."),(0,l.Wm)("li",null,"Use NPM to require and pack the module into code. In this situation, you need to modify the version number in the dependency to ensure that the latest version of the dependency can be obtained during installation.")])],-1),w=(0,l.Wm)("h3",{id:"server"},[(0,l.Wm)("a",{class:"header-anchor",href:"#server"},"#"),(0,l.Uk)(" Server")],-1),y=(0,l.Wm)("p",null,[(0,l.Uk)("The server refers to the backend service corresponding to the "),(0,l.Wm)("code",null,"serverURL"),(0,l.Uk)(" configured in frontend script, and its update will be slightly different depending on different deployment environments. Server updates will be more frequent.")],-1),b=(0,l.Wm)("h4",{id:"vercel"},[(0,l.Wm)("a",{class:"header-anchor",href:"#vercel"},"#"),(0,l.Uk)(" Vercel")],-1),U=(0,l.Wm)("p",null,[(0,l.Uk)("Go to the corresponding GitHub repository and modify the version number of "),(0,l.Wm)("code",null,"@waline/vercel"),(0,l.Uk)(" in the package.json file to the latest.")],-1),A=(0,l.Wm)("p",null,[(0,l.Wm)("img",{src:i,alt:"vercel"})],-1),C=(0,l.Wm)("h4",{id:"cloudbase"},[(0,l.Wm)("a",{class:"header-anchor",href:"#cloudbase"},"#"),(0,l.Uk)(" CloudBase")],-1),I=(0,l.Wm)("p",null,[(0,l.Uk)("Enter the code editing page, click "),(0,l.Wm)("kbd",null,"Save and reinstall dependencies"),(0,l.Uk)(". If it still doesn’t work, enter "),(0,l.Wm)("kbd",null,"My Application"),(0,l.Uk)(" and select "),(0,l.Wm)("kbd",null,"Deploy"),(0,l.Uk)(" to redeploy.")],-1),T=(0,l.Wm)("div",{class:"custom-container warning"},[(0,l.Wm)("p",{class:"custom-container-title"},"Note"),(0,l.Wm)("p",null,"Redeployment will clear the previous files. If there is a configuration in the previous file, it needs to be backed up first.")],-1),V=(0,l.Wm)("p",null,[(0,l.Wm)("img",{src:a,alt:"cloudBase"})],-1),q=(0,l.Wm)("h4",{id:"docker"},[(0,l.Wm)("a",{class:"header-anchor",href:"#docker"},"#"),(0,l.Uk)(" Docker")],-1),D=(0,l.Wm)("p",null,[(0,l.Uk)("Run "),(0,l.Wm)("code",null,"docker pull lizheming/waline"),(0,l.Uk)(" directly to pull the latest image.")],-1),S=(0,l.Wm)("h2",{id:"why-posting-comments-are-slow"},[(0,l.Wm)("a",{class:"header-anchor",href:"#why-posting-comments-are-slow"},"#"),(0,l.Uk)(" why posting comments are slow?")],-1),L=(0,l.Wm)("p",null,[(0,l.Uk)("Due to some technical reasons, spam detection and comment notification are all serial operations when posting comments. The spam detection uses the service provided by Akismet abroad, which may be slow to access. Users can turn off the spam detection function through the "),(0,l.Wm)("code",null,"AKISMET_KEY=false"),(0,l.Uk)(" environment variable. Beside the spam detection service, the email notification in the comment notification may also cause a timeout. You can turn off the comment notification to test whether it is caused by this feature.")],-1),N=(0,l.Wm)("h2",{id:"at-last"},[(0,l.Wm)("a",{class:"header-anchor",href:"#at-last"},"#"),(0,l.Uk)(" At last")],-1),R=(0,l.Wm)("p",null,[(0,l.Wm)("code",null,"Waline"),(0,l.Uk)(" may change in the future, but it will never change the original intention of "),(0,l.Wm)("strong",null,"with backend"),(0,l.Uk)(".")],-1),F={render:function(e,n){return(0,l.wg)(),(0,l.j4)(l.HY,null,[o,s,r,d,c,h,m,u,p,f,W,v,g,k,w,y,b,U,A,C,I,T,V,q,D,S,L,N,R],64)}}}}]);