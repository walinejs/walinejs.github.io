import{_ as o,a as n,b as r}from"./deta-3.b9909335.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c as d,a as e,b as t,d as s,e as p,r as i}from"./app.93b8a4e9.js";const _={},h={href:"https://www.deta.sh/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://go.deta.dev/deploy?repo=https://github.com/walinejs/deta-starter",target:"_blank",rel:"noopener noreferrer"},u=e("img",{src:"https://button.deta.dev/1/svg",alt:"Deploy with Deta"},null,-1),f=e("p",null,"点击上方按钮，跳转至 Deta 平台快速部署。登录之后会让你选择部署的位置，同时需要你输入环境变量。",-1),g=e("p",null,[e("img",{src:o,alt:"Deta-1"})],-1),v=e("p",null,[t("填写好后点击 "),e("kbd",null,"Deploy"),t(" 按钮，稍等片刻会提示你部署成功，并为你展示部署后的网站地址。将其填入前端脚本的 "),e("code",null,"serverURL"),t(" 配置中，即可完成全部配置。")],-1),k=e("p",null,[e("img",{src:n,alt:"Deta-2"})],-1),b=e("h2",{id:"如何更新",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),t(" 如何更新")],-1),D={href:"https://docs.deta.sh/docs/cli/install",target:"_blank",rel:"noopener noreferrer"},x=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Mac or Linux</span>
<span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://get.deta.dev/cli.sh <span class="token operator">|</span> <span class="token function">sh</span>

<span class="token comment"># Windows for powershell</span>
iwr https://get.deta.dev/cli.ps1 <span class="token parameter variable">-useb</span> <span class="token operator">|</span> iex
</code></pre></div><p>装好之后我们使用 <code>deta login</code> 来登录命令行，期间会打开浏览器用于登录。</p><p>更新之前我们需要将项目克隆下来。进入到我们的项目的设置页，复制并执行页面中的 <code>deta clone</code> 命令，稍等一会儿项目就下载下来了。</p><p><img src="`+r+'" alt="Deta-2"></p><p>之后我们可以在本地对项目代码进行修改，比如将 <code>package.json</code> 中的依赖版本修改至最新。</p><p>最后我们在命令行中使用 <code>deta deploy</code> 命令即可实现网站的更新部署。</p><h2 id="如何修改环境变量" tabindex="-1"><a class="header-anchor" href="#如何修改环境变量" aria-hidden="true">#</a> 如何修改环境变量</h2><p>修改换进变量同样需要使用 CLI 进行操作。</p><p>按照刚才的步骤将项目克隆到本地后，在项目中新增 <code>.env</code> 文件，将需要修改的环境变量使用 <code>VAR_NAME=VALUE</code> 的形式一行一个写在文件中。最后使用 <code>deta update -e .env</code> 即可完成环境变量更新。</p>',9),w={href:"https://docs.deta.sh/docs/micros/env_vars#setting-environment-variables",target:"_blank",rel:"noopener noreferrer"};function L(V,E){const a=i("ExternalLinkIcon");return l(),d("div",null,[e("p",null,[e("a",h,[t("Deta"),s(a)]),t(" 是一个可免费使用的 Serverless 部署平台。我们可以快速的将 Waline 部署到 Deta 平台上。")]),e("p",null,[e("a",m,[u,s(a)])]),f,g,v,k,b,e("p",null,[t("Deta 使用 CLI 命令行工具对项目进行管理。按照"),e("a",D,[t("文档"),s(a)]),t("指示安装 Deta 的命令行工具。")]),x,e("p",null,[t("具体可参考 "),e("a",w,[t("Deta 环境变量文档"),s(a)]),t("。")])])}const A=c(_,[["render",L],["__file","deta.html.vue"]]);export{A as default};
