"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2628],{646:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-de867450",path:"/en/reference/contribution.html",title:"Development Guide",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Preparation",slug:"preparation",children:[]},{level:2,title:"Development",slug:"development",children:[]}],filePathRelative:"en/reference/contribution.md",git:{updatedTime:163331037e4,contributors:[]}}},4146:(e,n,a)=>{a.r(n),a.d(n,{default:()=>o});const t=(0,a(8917).uE)('<h1 id="development-guide" tabindex="-1"><a class="header-anchor" href="#development-guide" aria-hidden="true">#</a> Development Guide</h1><p>We welcome everyone to open Pull Requests for waline! 🎉</p><p>If you want to contribute to waline, here is a guide.</p><h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation" aria-hidden="true">#</a> Preparation</h2><ol><li><p>Use Git to clone the project</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git\n</code></pre></div></li><li><p>Installation dependencies</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Node 14 and below use npm@v6 by default, you need to make sure you use the npm@v7 version:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Ensure that your npm version is 7</span>\n<span class="token function">npm</span> i -g npm@7\n</code></pre></div></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> waline\n<span class="token function">npm</span> i\n</code></pre></div></li></ol><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development" aria-hidden="true">#</a> Development</h2><ul><li><p>Run <code>npm run client:dev</code> to start <code>@waline/client</code> devServer</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Since waline is based on Client/Server architecture, when debugging a client, you need to set <code>SERVERURL</code>, or start server devServer below at the same time and use the default <code>localhost:9090</code>.</p></div></li><li><p>Run <code>npm run server:dev</code> to start <code>@waline/server</code> devServer</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>In order to run <code>@waline/server</code> locally, you need to configure some local environment variables to <code>example/.env</code>.</p><p>We provide an exmple for you in <code>example/.env.example</code>.</p></div></li></ul>',7),o={render:function(e,n){return t}}}}]);