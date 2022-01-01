"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5221],{721:(e,t,n)=>{n.r(t),n.d(t,{data:()=>l});const l={key:"v-2945f13a",path:"/en/advanced/faq.html",title:"FAQ",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"What is the relationship with Valine?",slug:"what-is-the-relationship-with-valine",children:[]},{level:2,title:"Do I still need to deploy Valine-Admin on LeanCloud?",slug:"do-i-still-need-to-deploy-valine-admin-on-leancloud",children:[]},{level:2,title:"How can I upgrade?",slug:"how-can-i-upgrade",children:[{level:3,title:"Frontend",slug:"frontend",children:[]},{level:3,title:"Server",slug:"server",children:[]}]},{level:2,title:"why posting comments are slow?",slug:"why-posting-comments-are-slow",children:[]},{level:2,title:"How to add lightbox effects?",slug:"how-to-add-lightbox-effects",children:[{level:3,title:"lightGallery",slug:"lightgallery",children:[]},{level:3,title:"Slimbox2",slug:"slimbox2",children:[]},{level:3,title:"lightbox2",slug:"lightbox2",children:[]},{level:3,title:"Fancybox",slug:"fancybox",children:[]}]}],filePathRelative:"en/advanced/faq.md",git:{updatedTime:1641055657e3,contributors:[{name:"Austin Lee",email:"i@imnerd.org",commits:1}]}}},2746:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var l=n(8917),i=n(5146),a=n(2177);const r=(0,l._)("h1",{id:"faq",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),(0,l.Uk)(" FAQ")],-1),o=(0,l._)("p",null,"Waline has a very clear position since its birth:",-1),s=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("A "),(0,l._)("strong",null,"simple"),(0,l.Uk)(" comment system "),(0,l._)("strong",null,"with backend"),(0,l.Uk)(".")])],-1),d=(0,l._)("p",null,"All versions released afterwards are modifications made around this position.",-1),c=(0,l._)("h2",{id:"what-is-the-relationship-with-valine",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#what-is-the-relationship-with-valine","aria-hidden":"true"},"#"),(0,l.Uk)(" What is the relationship with Valine?")],-1),h=(0,l._)("p",null,[(0,l.Uk)("Waline = "),(0,l._)("strong",null,"W"),(0,l.Uk)("ith backend V"),(0,l._)("strong",null,"aline")],-1),u=(0,l._)("p",null,"Consulting with the open source version of Valine, the comment list in frontend is rewritten with React. The style and structure as well as some internal tools and methods are all from Valine.",-1),m=(0,l._)("h2",{id:"do-i-still-need-to-deploy-valine-admin-on-leancloud",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#do-i-still-need-to-deploy-valine-admin-on-leancloud","aria-hidden":"true"},"#"),(0,l.Uk)(" Do I still need to deploy Valine-Admin on LeanCloud?")],-1),p=(0,l._)("p",null,"No. Waline is a three-in-one deployment of data storage, server, and client. The server interface is already equivalent to Valine's LeanCloud cloud engine. The server already includes comment management and email notifications feature provided by the previous cloud engine. It doesn't need the additional LeanCloud cloud engine, so it won't be restricted by the LeanCloud cloud engine's sleep strategy.",-1),g=(0,l._)("h2",{id:"how-can-i-upgrade",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#how-can-i-upgrade","aria-hidden":"true"},"#"),(0,l.Uk)(" How can I upgrade?")],-1),f=(0,l._)("p",null,"Waline is mainly composed of two parts: the frontend and the server.",-1),b=(0,l._)("h3",{id:"frontend",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#frontend","aria-hidden":"true"},"#"),(0,l.Uk)(" Frontend")],-1),y=(0,l._)("p",null,"The front end inserts comment lists and comment boxes by including JS scripts in the web page. In most scenarios, the link will use the address of the latest version of the online CDN, and the latest version will be automatically applied, without the need for users to manually update.",-1),_=(0,l._)("div",{class:"custom-container tip"},[(0,l._)("p",{class:"custom-container-title"},"Need manually update in following situations"),(0,l._)("ol",null,[(0,l._)("li",null,"The version number is forcibly specified in the CDN address. In this situation, you need to manually modify the version number to be the latest."),(0,l._)("li",null,"Use NPM to require and pack the module into code. In this situation, you need to modify the version number in the dependency to ensure that the latest version of the dependency can be obtained during installation.")])],-1),k=(0,l._)("h3",{id:"server",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#server","aria-hidden":"true"},"#"),(0,l.Uk)(" Server")],-1),v=(0,l._)("p",null,[(0,l.Uk)("The server refers to the backend service corresponding to the "),(0,l._)("code",null,"serverURL"),(0,l.Uk)(" configured in frontend script, and its update will be slightly different depending on different deployment environments. Server updates will be more frequent.")],-1),w=(0,l._)("h4",{id:"vercel",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#vercel","aria-hidden":"true"},"#"),(0,l.Uk)(" Vercel")],-1),x=(0,l._)("p",null,[(0,l.Uk)("Go to the corresponding GitHub repository and modify the version number of "),(0,l._)("code",null,"@waline/vercel"),(0,l.Uk)(" in the package.json file to the latest.")],-1),U=(0,l._)("p",null,[(0,l._)("img",{src:i,alt:"vercel"})],-1),j=(0,l._)("h4",{id:"deta",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#deta","aria-hidden":"true"},"#"),(0,l.Uk)(" Deta")],-1),W={href:"https://waline.js.org/en/guide/server/deta.html#how-to-update",target:"_blank",rel:"noopener noreferrer"},I=(0,l.Uk)("Deta - How to update?"),q=(0,l._)("h4",{id:"cloudbase",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#cloudbase","aria-hidden":"true"},"#"),(0,l.Uk)(" CloudBase")],-1),A=(0,l._)("p",null,[(0,l.Uk)("Enter the code editing page, click "),(0,l._)("kbd",null,"Save and reinstall dependencies"),(0,l.Uk)(". If it still doesn’t work, enter "),(0,l._)("kbd",null,"My Application"),(0,l.Uk)(" and select "),(0,l._)("kbd",null,"Deploy"),(0,l.Uk)(" to redeploy.")],-1),S=(0,l._)("div",{class:"custom-container warning"},[(0,l._)("p",{class:"custom-container-title"},"Note"),(0,l._)("p",null,"Redeployment will clear the previous files. If there is a configuration in the previous file, it needs to be backed up first.")],-1),L=(0,l._)("p",null,[(0,l._)("img",{src:a,alt:"cloudBase"})],-1),C=(0,l._)("h4",{id:"docker",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),(0,l.Uk)(" Docker")],-1),D=(0,l._)("p",null,[(0,l.Uk)("Run "),(0,l._)("code",null,"docker pull lizheming/waline"),(0,l.Uk)(" directly to pull the latest image.")],-1),T=(0,l._)("h2",{id:"why-posting-comments-are-slow",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#why-posting-comments-are-slow","aria-hidden":"true"},"#"),(0,l.Uk)(" why posting comments are slow?")],-1),V=(0,l._)("p",null,[(0,l.Uk)("Due to some technical reasons, spam detection and comment notification are all serial operations when posting comments. The spam detection uses the service provided by Akismet abroad, which may be slow to access. Users can turn off the spam detection function through the "),(0,l._)("code",null,"AKISMET_KEY=false"),(0,l.Uk)(" environment variable. Beside the spam detection service, the email notification in the comment notification may also cause a timeout. You can turn off the comment notification to test whether it is caused by this feature.")],-1),F=(0,l._)("h2",{id:"how-to-add-lightbox-effects",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#how-to-add-lightbox-effects","aria-hidden":"true"},"#"),(0,l.Uk)(" How to add lightbox effects?")],-1),H=(0,l.Uk)("There has many plugin can implement it. Here we give a simple example for "),G={href:"https://www.lightgalleryjs.com/",target:"_blank",rel:"noopener noreferrer"},N=(0,l.Uk)("lightGallery"),E=(0,l.Uk)(", "),R={href:"https://www.digitalia.be/software/slimbox2/",target:"_blank",rel:"noopener noreferrer"},O=(0,l.Uk)("Slimbox2"),$=(0,l.Uk)(", "),B={href:"https://lokeshdhakar.com/projects/lightbox2/",target:"_blank",rel:"noopener noreferrer"},M=(0,l.Uk)("lightbox2"),Y=(0,l.Uk)(" and "),K={href:"https://fancyapps.com/docs/ui/fancybox/",target:"_blank",rel:"noopener noreferrer"},P=(0,l.Uk)("Fancybox"),Q=(0,l.Uk)("."),z=(0,l._)("h3",{id:"lightgallery",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#lightgallery","aria-hidden":"true"},"#"),(0,l.Uk)(" lightGallery")],-1),J=(0,l._)("p",null,[(0,l.Uk)("Insert following code before "),(0,l._)("code",null,"</head>"),(0,l.Uk)(" tag in your html content. "),(0,l._)("code",null,"#waline-coment"),(0,l.Uk)(" is your Waline comment element selector, you need replace it by yourself.")],-1),Z=(0,l._)("div",{class:"language-text ext-text"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.1.5/css/lightgallery-bundle.css" />\n<srciprt src="https://cdn.jsdelivr.net/npm/lightgallery@2.1.5/lightgallery.umd.min.js"><\/script>\n<script>\ndocument.addEventListener(\'click\', e => {\n  const imgs = [].slice.call(\n    document.querySelectorAll(\'#waline-comment .vcontent img\')\n  ).filter(img => img.width > 20);\n\n  if(imgs.indexOf(e.target) === -1) {\n    return;\n  }\n  if(!e.target.gallery) {\n    e.target.gallery = window.lightGallery(e.target.parentNode);\n  }\n  e.target.gallery.openGallery(0);\n});\n<\/script>\n')])],-1),X=(0,l._)("h3",{id:"slimbox2",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#slimbox2","aria-hidden":"true"},"#"),(0,l.Uk)(" Slimbox2")],-1),ee=(0,l._)("p",null,[(0,l.Uk)("Insert following code before "),(0,l._)("code",null,"</head>"),(0,l.Uk)(" tag in your html content. "),(0,l._)("code",null,"#waline-coment"),(0,l.Uk)(" is your Waline comment element selector, you need replace it by yourself.")],-1),te=(0,l._)("div",{class:"language-text ext-text"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/cbeyls/slimbox/css/slimbox2.css" />\n<script src="https://cdn.jsdelivr.net/npm/jquery@1.12.4/dist/jquery.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/gh/cbeyls/slimbox/js/slimbox2.js"><\/script>\n<script>\ndocument.addEventListener(\'click\', (e) => {\n  const imgs = [].slice.call(\n    document.querySelectorAll(\'#waline-comment .vcontent img\')\n  ).filter(img => img.width > 20);\n\n  const idx = imgs.indexOf(e.target);\n  if(idx === -1) {\n    return;\n  }\n\n  $.slimbox(e.target.src, e.target.alt, {});\n});\n<\/script>\n')])],-1),ne=(0,l._)("h3",{id:"lightbox2",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#lightbox2","aria-hidden":"true"},"#"),(0,l.Uk)(" lightbox2")],-1),le=(0,l._)("p",null,[(0,l.Uk)("Insert following code before "),(0,l._)("code",null,"</head>"),(0,l.Uk)(" tag in your html content. "),(0,l._)("code",null,"#waline-coment"),(0,l.Uk)(" is your Waline comment element selector, you need replace it by yourself.")],-1),ie=(0,l._)("div",{class:"language-text ext-text"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,"<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/css/lightbox.min.css\" />\n<script src=\"https://cdn.jsdelivr.net/npm/lightbox2@2.11.3/dist/js/lightbox-plus-jquery.min.js\"><\/script>\n<script>\ndocument.addEventListener('click', e => {\n  const lightbox = new Lightbox();\n  const imgs = [].slice.call(\n    document.querySelectorAll('#waline-comment .vcontent img')\n  ).filter(img => img.width > 20);\n\n  if(imgs.indexOf(e.target) === -1) {\n    return;\n  }\n\n  const $link = $('<a />', {\n    href: e.target.src,\n    'data-title': e.target.alt,\n    rel: 'lightbox'\n  });\n  lightbox.start($link);\n});\n<\/script>\n")])],-1),ae=(0,l._)("h3",{id:"fancybox",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#fancybox","aria-hidden":"true"},"#"),(0,l.Uk)(" Fancybox")],-1),re=(0,l._)("p",null,[(0,l.Uk)("Insert following code before "),(0,l._)("code",null,"</head>"),(0,l.Uk)(" tag in your html content. "),(0,l._)("code",null,"#waline-coment"),(0,l.Uk)(" is your Waline comment element selector, you need replace it by yourself.")],-1),oe=(0,l._)("div",{class:"language-text ext-text"},[(0,l._)("pre",{class:"language-text"},[(0,l._)("code",null,'<script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js"><\/script>\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"/>\n<script>Fancybox.bind(\'#waline-comment .vcontent img\')<\/script>\n')])],-1),se={},de=(0,n(6959).Z)(se,[["render",function(e,t){const n=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,o,s,d,c,h,u,m,p,g,f,b,y,_,k,v,w,x,U,j,(0,l._)("p",null,[(0,l._)("a",W,[I,(0,l.Wm)(n)])]),q,A,S,L,C,D,T,V,F,(0,l._)("p",null,[H,(0,l._)("a",G,[N,(0,l.Wm)(n)]),E,(0,l._)("a",R,[O,(0,l.Wm)(n)]),$,(0,l._)("a",B,[M,(0,l.Wm)(n)]),Y,(0,l._)("a",K,[P,(0,l.Wm)(n)]),Q]),z,J,Z,X,ee,te,ne,le,ie,ae,re,oe],64)}]])},2177:(e,t,n)=>{e.exports=n.p+"assets/img/cloudbase-update.0e0678ab.jpg"},5146:(e,t,n)=>{e.exports=n.p+"assets/img/vercel-update.24818433.png"}}]);