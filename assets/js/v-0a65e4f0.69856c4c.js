(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[93],{57:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-0a65e4f0",path:"/contribution.html",title:"开发指南",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"准备",slug:"准备",children:[]},{level:2,title:"开发",slug:"开发",children:[]}],filePathRelative:"contribution.md",git:{updatedTime:162212312e4,contributors:[]}}},9195:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>l});const a=(0,s(8917).uE)('<h1 id="开发指南"><a class="header-anchor" href="#开发指南">#</a> 开发指南</h1><p>我们欢迎大家为 waline 提交 Pull Request！🎉</p><p>如果你想为 waline 贡献出自己的一份力量，以下是一份指南。</p><h2 id="准备"><a class="header-anchor" href="#准备">#</a> 准备</h2><ol><li><p>使用 Git 克隆项目</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>安装依赖</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> waline\n<span class="token function">npm</span> i\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p><p>你需要确保自己使用 npm@v7 版本:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 保证自己的 npm 版本是 7</span>\n<span class="token function">npm</span> i -g npm@7\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></div></li></ol><h2 id="开发"><a class="header-anchor" href="#开发">#</a> 开发</h2><ul><li><p>使用 <code>npm run client:dev</code> 启动 <code>@waline/client</code> 本地开发</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于 waline 是 Client/Server 架构，在调试 client 时，你需要设置 <code>SERVERURL</code> 为调试服务器，或同时启动下面的 server 开发服务器并使用默认的 <code>localhost:9090</code>。</p></div></li><li><p>使用 <code>npm run server:dev</code> 启动 <code>@waline/server</code> 本地开发</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>为了使 <code>@waline/server</code> 能在本地正常运行，你需要配置必要的本地环境变量至 <code>example/.env</code>。</p><p>在 <code>example/.env.example</code> 我们准备了示例供你参考</p></div></li></ul>',7),l={render:function(e,n){return a}}}}]);