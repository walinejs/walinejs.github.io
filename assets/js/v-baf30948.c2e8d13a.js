(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6342],{2907:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-baf30948",path:"/en/contribution.html",title:"Development Guide",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Preparation",slug:"preparation",children:[]},{level:2,title:"Development",slug:"development",children:[]}],filePathRelative:"en/contribution.md",git:{updatedTime:1622171174e3,contributors:[]}}},3563:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>t});const s=(0,a(8917).uE)('<h1 id="development-guide"><a class="header-anchor" href="#development-guide">#</a> Development Guide</h1><p>We welcome everyone to open Pull Requests for waline! 🎉</p><p>If you want to contribute to waline, here is a guide.</p><h2 id="preparation"><a class="header-anchor" href="#preparation">#</a> Preparation</h2><ol><li><p>Use Git to clone the project</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Installation dependencies</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> waline\n<span class="token function">npm</span> i\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">Note</p><p>You need to make sure you use the npm@v7 version:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Ensure that your npm version is 7</span>\n<span class="token function">npm</span> i -g npm@7\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></li></ol><h2 id="development"><a class="header-anchor" href="#development">#</a> Development</h2><ul><li><p>Run <code>npm run client:dev</code> to start <code>@waline/client</code> devServer</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Since waline is based on Client/Server architecture, when debugging a client, you need to set <code>SERVERURL</code>, or start server devServer below at the same time and use the default <code>localhost:9090</code>.</p></div></li><li><p>Run <code>npm run server:dev</code> to start <code>@waline/server</code> devServer</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>In order to run <code>@waline/server</code> locally, you need to configure some local environment variables to <code>example/.env</code>.</p><p>We provide an exmple for you in <code>example/.env.example</code>.</p></div></li></ul>',7),t={render:function(e,n){return s}}}}]);