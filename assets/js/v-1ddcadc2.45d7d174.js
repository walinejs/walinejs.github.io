"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8525],{1891:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-1ddcadc2",path:"/en/guide/server/deta.html",title:"Deta deployment",lang:"en-US",frontmatter:{title:"Deta deployment",icon:"deta",head:[["meta",{property:"og:url",content:"https://waline.js.org/en/guide/server/deta.html"}],["meta",{property:"og:title",content:"Deta deployment"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Deta deployment","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"",headers:[{level:2,title:"How to update",slug:"how-to-update",children:[]},{level:2,title:"How to modify environment variables",slug:"how-to-modify-environment-variables",children:[]}],git:{createdTime:1644739828e3,updatedTime:1644739828e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]},readingTime:{minutes:1.17,words:352},filePathRelative:"en/guide/server/deta.md"}},553:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var a=o(8917),n=o(3307),r=o(3062),i=o(761);const l=(0,a.uE)('<p><a href="https://www.deta.sh/" target="_blank" rel="noopener noreferrer">Deta</a> is a free Serverless platform, we can deploy Waline to Deta platform easily.</p><p><a href="https://go.deta.dev/deploy?repo=https://github.com/walinejs/deta-starter" target="_blank" rel="noopener noreferrer"><img src="https://button.deta.dev/1/svg" alt="Deploy with Deta"></a></p><p>Click this button and it&#39;ll redirect to deta platform to quickly deploy. You need select your deploy project and environment variables after login.</p><p><img src="'+n+'" alt="Deta-1"></p><p>When everything is ok, just click <kbd>Deploy</kbd> button. It&#39;ll deploy successful after a moment. Then deta will show you deploy site url. Copy the site url and input it into client <code>serverURL</code> configuration. Then you can enjoy waline!</p><p><img src="'+r+'" alt="Deta-2"></p><h2 id="how-to-update" tabindex="-1"><a class="header-anchor" href="#how-to-update" aria-hidden="true">#</a> How to update</h2><p>Deta uses CLI command line tools to manage projects. Follow the <a href="https://docs.deta.sh/docs/cli/install" target="_blank" rel="noopener noreferrer">documentation</a> guide to install Deta&#39;s command line tools.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Mac or Linux</span>\n<span class="token function">curl</span> -fsSL https://get.deta.dev/cli.sh <span class="token operator">|</span> <span class="token function">sh</span>\n\n<span class="token comment"># Windows for powershell</span>\niwr https://get.deta.dev/cli.ps1 -useb <span class="token operator">|</span> iex\n</code></pre></div><p>After installation, we use <code>deta login</code> to log in to the command line, during which a browser will be opened for login.</p><p>We need to clone the project before updating. Enter the setting page of our project, copy and execute the <code>deta clone</code> command on the page, and the project will be downloaded after a while.</p><p><img src="'+i+'" alt="Deta-2"></p><p>After that, we can modify the project code locally, for example, modify the dependency version in <code>package.json</code> to the latest.</p><p>Finally, we can use the <code>deta deploy</code> command in the command line to implement the update deployment of the website.</p><h2 id="how-to-modify-environment-variables" tabindex="-1"><a class="header-anchor" href="#how-to-modify-environment-variables" aria-hidden="true">#</a> How to modify environment variables</h2><p>Modifying environment variable also requires the CLI to operate.</p><p>After clone the project to the local according to the steps before said. Then add a <code>.env</code> file to the project, and write the environment variables that need to be modified in the file line by line in the form of <code>VAR_NAME=VALUE</code>. Finally, use <code>deta update -e .env</code> to complete the environment variable update.</p><p>For details, please refer to <a href="https://docs.deta.sh/docs/micros/env_vars#setting-environment-variables" target="_blank" rel="noopener noreferrer">Deta Environment Variables Documentation</a>.</p>',18),d={},s=(0,o(6959).Z)(d,[["render",function(e,t){return l}]])},3307:(e,t,o)=>{e.exports=o.p+"assets/img/deta-1.a238d26f.png"},3062:(e,t,o)=>{e.exports=o.p+"assets/img/deta-2.295d8a01.png"},761:(e,t,o)=>{e.exports=o.p+"assets/img/deta-3.31cf0dda.jpg"}}]);