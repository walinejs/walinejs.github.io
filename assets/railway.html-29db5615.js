import{_ as i,a as n,b as r,c as l}from"./railway-4-1d6cd327.js";import{_ as s,X as d,Y as c,$ as e,a1 as a,a2 as o,Z as p,a0 as h,C as u}from"./framework-d8a4a0f5.js";const m={},f={href:"https://railway.app/",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"how-to-deploy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-deploy","aria-hidden":"true"},"#"),a(" How to Deploy")],-1),b=e("p",null,[a("["),e("img",{src:"https://railway.app/new/template/UZB84v?referralCode=lizheming",alt:"Deploy on Railway"})],-1),y=e("p",null,[a("Click this button and it'll redirect to railway.app platform to quickly deploy. You can input your new GitHub repo name or just use default after login, then click "),e("kbd",null,"Deploy"),a(" button at the bottom to deploy. You should notice that the part of environment variables should not be modified.")],-1),w=e("figure",null,[e("img",{src:i,alt:"railway1",tabindex:"0"}),e("figcaption",null,"railway1")],-1),g=e("kbd",null,"PostgreSQL",-1),k=e("kbd",null,"Query",-1),v={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},x=e("kbd",null,"Run Query",-1),C=h('<figure><img src="'+n+'" alt="railway2" tabindex="0"><figcaption>railway2</figcaption></figure><p>At last you can click <kbd>Deployments</kbd> - <kbd>Domains</kbd> to get server URL. Copy the site url and input it into client <code>serverURL</code> configuration. Then you can enjoy waline!</p><figure><img src="'+r+'" alt="railway3" tabindex="0"><figcaption>railway3</figcaption></figure><h2 id="how-to-update" tabindex="-1"><a class="header-anchor" href="#how-to-update" aria-hidden="true">#</a> How to Update</h2><p>Go to the corresponding GitHub repository and modify the version number of <code>@waline/vercel</code> in the package.json file to the latest.</p><h2 id="how-to-modify-environment-variables" tabindex="-1"><a class="header-anchor" href="#how-to-modify-environment-variables" aria-hidden="true">#</a> How to Modify Environment Variables</h2><p>Click <kbd>Variables</kbd> Tab to go to enviroment variables management page. It will deploy automatically after variable was changed.</p><figure><img src="'+l+'" alt="railway4" tabindex="0"><figcaption>railway4</figcaption></figure>',8);function V(R,D){const t=u("ExternalLinkIcon");return d(),c("div",null,[e("p",null,[e("a",f,[a("Railway"),o(t)]),a(" is a free Serverless platform, we can deploy Waline to Railway platform easily.")]),p(" more "),_,b,y,w,e("p",null,[a("After a moment you will redirect to dashboard page. Click "),g,a(" - "),k,a(" and paste "),e("a",v,[a("waline.pgsql"),o(t)]),a(" this file content into textarea, then click "),x,a(" button at the bottom to initialized database.")]),C])}const N=s(m,[["render",V],["__file","railway.html.vue"]]);export{N as default};
