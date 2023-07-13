import{_ as i,a as n,b as r,c as l}from"./railway-4-1d6cd327.js";import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as c,c as p,b as e,e as t,f as o,a as h,d as u}from"./app-945c9678.js";const f={},m={href:"https://railway.app/",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"how-to-deploy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-deploy","aria-hidden":"true"},"#"),t(" How to Deploy")],-1),b={href:"https://railway.app/new/template/UZB84v?referralCode=lizheming",target:"_blank",rel:"noopener noreferrer"},y=e("img",{src:"https://railway.app/button.svg",alt:"Deploy on Railway",tabindex:"0"},null,-1),g=e("figcaption",null,"Deploy on Railway",-1),w=e("p",null,[t("Click this button and it'll redirect to railway.app platform to quickly deploy. You can input your new GitHub repo name or just use default after login, then click "),e("kbd",null,"Deploy"),t(" button at the bottom to deploy. You should notice that the part of environment variables should not be modified.")],-1),k=e("figure",null,[e("img",{src:i,alt:"railway1",tabindex:"0"}),e("figcaption",null,"railway1")],-1),v=e("kbd",null,"PostgreSQL",-1),x=e("kbd",null,"Query",-1),C={href:"https://github.com/walinejs/waline/blob/main/assets/waline.pgsql",target:"_blank",rel:"noopener noreferrer"},R=e("kbd",null,"Run Query",-1),V=u('<figure><img src="'+n+'" alt="railway2" tabindex="0"><figcaption>railway2</figcaption></figure><p>At last you can click <kbd>Deployments</kbd> - <kbd>Domains</kbd> to get server URL. Copy the site url and input it into client <code>serverURL</code> configuration. Then you can enjoy waline!</p><figure><img src="'+r+'" alt="railway3" tabindex="0"><figcaption>railway3</figcaption></figure><h2 id="how-to-update" tabindex="-1"><a class="header-anchor" href="#how-to-update" aria-hidden="true">#</a> How to Update</h2><p>Go to the corresponding GitHub repository and modify the version number of <code>@waline/vercel</code> in the package.json file to the latest.</p><h2 id="how-to-modify-environment-variables" tabindex="-1"><a class="header-anchor" href="#how-to-modify-environment-variables" aria-hidden="true">#</a> How to Modify Environment Variables</h2><p>Click <kbd>Variables</kbd> Tab to go to enviroment variables management page. It will deploy automatically after variable was changed.</p><figure><img src="'+l+'" alt="railway4" tabindex="0"><figcaption>railway4</figcaption></figure>',8);function D(H,L){const a=d("ExternalLinkIcon");return c(),p("div",null,[e("p",null,[e("a",m,[t("Railway"),o(a)]),t(" is a free Serverless platform, we can deploy Waline to Railway platform easily.")]),h(" more "),_,e("figure",null,[e("a",b,[y,o(a)]),g]),w,k,e("p",null,[t("After a moment you will redirect to dashboard page. Click "),v,t(" - "),x,t(" and paste "),e("a",C,[t("waline.pgsql"),o(a)]),t(" this file content into textarea, then click "),R,t(" button at the bottom to initialized database.")]),V])}const E=s(f,[["render",D],["__file","railway.html.vue"]]);export{E as default};
