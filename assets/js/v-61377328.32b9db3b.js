"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3653],{4954:(e,a,n)=>{n.r(a),n.d(a,{data:()=>i});const i={key:"v-61377328",path:"/reference/contribution.html",title:"贡献指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备",slug:"准备",children:[]},{level:2,title:"开发",slug:"开发",children:[]}],filePathRelative:"reference/contribution.md",git:{updatedTime:1636892231e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},6255:(e,a,n)=>{n.r(a),n.d(a,{default:()=>c});const i=(0,n(8917).uE)('<h1 id="贡献指南" tabindex="-1"><a class="header-anchor" href="#贡献指南" aria-hidden="true">#</a> 贡献指南</h1><p>我们欢迎大家为 waline 提交 Pull Request！🎉</p><p>如果你想为 waline 贡献出自己的一份力量，以下是一份指南。</p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><ol><li><p>使用 Git 克隆项目</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git\n</code></pre></div></li><li><p>安装依赖</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Node 14 及以下默认使用 npm@v6，你需要确保自己使用 npm@v7 版本:</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># 保证自己的 npm 版本是 7</span>\n<span class="token function">npm</span> i -g npm@latest\n</code></pre></div></div><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> waline\n<span class="token function">npm</span> i\n</code></pre></div></li></ol><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><ul><li><p>使用 <code>npm run client:dev</code> 启动 <code>@waline/client</code> 本地开发</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于 waline 是 Client/Server 架构，在调试 client 时，你需要设置 <code>SERVERURL</code> 为调试服务器，或同时启动下面的 server 开发服务器并使用默认的 <code>localhost:9090</code>。</p></div></li><li><p>使用 <code>npm run server:dev</code> 启动 <code>@waline/server</code> 本地开发</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>为了使 <code>@waline/server</code> 能在本地正常运行，你需要配置必要的本地环境变量至 <code>example/.env</code>。</p><p>在 <code>example/.env.example</code> 我们准备了示例供你参考</p></div></li></ul>',7),s={},c=(0,n(6959).Z)(s,[["render",function(e,a){return i}]])}}]);