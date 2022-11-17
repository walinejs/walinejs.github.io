import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as n,e as s}from"./app.64598d1f.js";const c={},t=s(`<p>我们永远欢迎大家为 waline 提交 Pull Request！🎉</p><p>如果你想为 waline 贡献出自己的一份力量，以下是一份指南。</p><h2 id="准备" tabindex="-1"><a class="header-anchor" href="#准备" aria-hidden="true">#</a> 准备</h2><ol><li><p>使用 Git 克隆项目</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git
</code></pre></div></li><li><p>安装依赖</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请使用 pnpm 安装依赖:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> pnpm@latest
</code></pre></div></div><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> waline
<span class="token function">pnpm</span> i
</code></pre></div></li></ol><h2 id="开发" tabindex="-1"><a class="header-anchor" href="#开发" aria-hidden="true">#</a> 开发</h2><ul><li><p>使用 <code>pnpm client:dev</code> 启动 <code>@waline/client</code> 本地开发</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于 waline 是 Client/Server 架构，在调试 client 时，你需要设置 <code>SERVERURL</code> 为调试服务器，或同时启动下面的 server 开发服务器并使用默认的 <code>localhost:9090</code>。</p></div></li><li><p>使用 <code>pnpm server:dev</code> 启动 <code>@waline/server</code> 本地开发</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>为了使 <code>@waline/server</code> 能在本地正常运行，你需要配置必要的本地环境变量至 <code>example/.env</code>。</p><p>在 <code>example/.env.example</code> 我们准备了示例供你参考</p></div></li></ul>`,6),i=[t];function l(o,p){return a(),n("div",null,i)}const u=e(c,[["render",l],["__file","contribution.html.vue"]]);export{u as default};