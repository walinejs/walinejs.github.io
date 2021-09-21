"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[656],{8206:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-356c0ac4",path:"/guide/server/vps-deploy.html",title:"独立部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Docker 部署",slug:"docker-部署",children:[{level:3,title:"使用 docker stack deploy 或者 docker-compose",slug:"使用-docker-stack-deploy-或者-docker-compose",children:[]}]},{level:2,title:"直接运行（推荐）",slug:"直接运行-推荐",children:[]},{level:2,title:"Nginx 配置",slug:"nginx-配置",children:[]}],filePathRelative:"guide/server/vps-deploy.md",git:{updatedTime:163218871e4,contributors:[]}}},5409:(n,s,a)=>{a.r(s),a.d(s,{default:()=>y});var e=a(8917);const t=(0,e.uE)('<h1 id="独立部署" tabindex="-1"><a class="header-anchor" href="#独立部署" aria-hidden="true">#</a> 独立部署</h1><p>如果你不想将服务端部署在 Vercel 上的话，你也可以选择部署在自己的服务器上。</p><h2 id="docker-部署" tabindex="-1"><a class="header-anchor" href="#docker-部署" aria-hidden="true">#</a> Docker 部署</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">LEAN_ID</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">LEAN_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">LEAN_SERVER</span><span class="token operator">=</span>https://xxx.com <span class="token punctuation">\\</span>\n  -p <span class="token number">8360</span>:8360 <span class="token punctuation">\\</span>\n  lizheming/waline\n</code></pre></div><p><code>LEAN_ID</code> 和 <code>LEAN_KEY</code> 分别对应的是后台得到的 App Id 和 App Key。如果非 LeanCloud 国际版用户的话需要在后台绑定已备案域名并配置 <code>LEAN_SERVER</code>。</p><div class="custom-container tip"><p class="custom-container-title">如何构建镜像？</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git\n<span class="token builtin class-name">cd</span> waline\ndocker build -t lizheming/waline -f packages/server/Dockerfile <span class="token builtin class-name">.</span>\n</code></pre></div></div>',6),p={id:"使用-docker-stack-deploy-或者-docker-compose",tabindex:"-1"},o=(0,e._)("a",{class:"header-anchor",href:"#使用-docker-stack-deploy-或者-docker-compose","aria-hidden":"true"},"#",-1),c=(0,e.Uk)(" 使用 "),l={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("docker stack deploy"),i=(0,e.Uk)(" 或者 "),k={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("docker-compose"),d=(0,e.Uk)("这里使用了 SQLite 数据库作为例子。关于 SQLite 和支持的数据库服务，请参考"),h=(0,e.Uk)("多数据库服务支持"),v=(0,e.Uk)("。"),m=(0,e.uE)('<p><code>docker-compose.yml</code> 示例:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">waline</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> waline\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> lizheming/waline<span class="token punctuation">:</span>latest\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>8360<span class="token punctuation">:</span><span class="token number">8360</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/data<span class="token punctuation">:</span>/app/data\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>\n      <span class="token key atrule">SQLITE_PATH</span><span class="token punctuation">:</span> <span class="token string">&#39;/app/data&#39;</span>\n      <span class="token key atrule">JWT_TOKEN</span><span class="token punctuation">:</span> <span class="token string">&#39;Your token&#39;</span>\n      <span class="token key atrule">SITE_NAME</span><span class="token punctuation">:</span> <span class="token string">&#39;Your site name&#39;</span>\n      <span class="token key atrule">SITE_URL</span><span class="token punctuation">:</span> <span class="token string">&#39;https://example.com&#39;</span>\n      <span class="token key atrule">SECURE_DOMAINS</span><span class="token punctuation">:</span> <span class="token string">&#39;example.com&#39;</span>\n      <span class="token key atrule">AUTHOR_EMAIL</span><span class="token punctuation">:</span> <span class="token string">&#39;mail@example.com&#39;</span>\n</code></pre></div><h2 id="直接运行-推荐" tabindex="-1"><a class="header-anchor" href="#直接运行-推荐" aria-hidden="true">#</a> 直接运行（推荐）</h2><p>不使用容器部署的话运行也很简单，安装好模块后直接运行模块内的 <code>vanilla.js</code> 文件即可。</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @waline/vercel\nnode node_modules/@waline/vercel/vanilla.js\n</code></pre></div><h2 id="nginx-配置" tabindex="-1"><a class="header-anchor" href="#nginx-配置" aria-hidden="true">#</a> Nginx 配置</h2><p>如果你不想带端口访问的话，可以增加 Nginx 80 和 443 端口的反代。可参考如下配置:</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span>\n<span class="token punctuation">{</span>\n  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">server_name</span> your.domain.server.name</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">root</span> /www/wwwroot/your.domain.server.name</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$server_port</span> !~ 443)</span><span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">rewrite</span> ^(/.*)$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment"># SSL setting</span>\n  <span class="token directive"><span class="token keyword">ssl_certificate</span> fullchain.pem</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">ssl_certificate_key</span> privkey.pem</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.1 TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">ssl_ciphers</span> EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:10m</span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>\n  <span class="token directive"><span class="token keyword">add_header</span> Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span></span><span class="token punctuation">;</span>\n\n  <span class="token comment"># proxy to 8360</span>\n  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>\n    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8360</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">add_header</span> X-Cache <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>\n    <span class="token comment"># cache</span>\n    <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache</span><span class="token punctuation">;</span>\n    <span class="token directive"><span class="token keyword">expires</span> <span class="token number">12h</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',8),y={render:function(n,s){const a=(0,e.up)("OutboundLink"),y=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("h3",p,[o,c,(0,e._)("a",l,[r,(0,e.Wm)(a)]),i,(0,e._)("a",k,[u,(0,e.Wm)(a)])]),(0,e._)("p",null,[d,(0,e.Wm)(y,{to:"/guide/server/databases.html#sqlite"},{default:(0,e.w5)((()=>[h])),_:1}),v]),m],64)}}}}]);