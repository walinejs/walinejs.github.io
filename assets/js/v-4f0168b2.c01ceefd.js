(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8328],{7792:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-4f0168b2",path:"/en/guide/server/vps-deploy.html",title:"Independent deployment",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Docker Deploy",slug:"docker-deploy",children:[{level:3,title:"via docker stack deploy or docker-compose",slug:"via-docker-stack-deploy-or-docker-compose",children:[]}]},{level:2,title:"Run directly (Recommanded)",slug:"run-directly-recommanded",children:[]},{level:2,title:"Nginx config",slug:"nginx-config",children:[]}],filePathRelative:"en/guide/server/vps-deploy.md",git:{updatedTime:162389431e4,contributors:[]}}},4029:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>v});var e=a(8917);const p=(0,e.uE)('<h1 id="independent-deployment"><a class="header-anchor" href="#independent-deployment">#</a> Independent deployment</h1><p>If you don&#39;t want to deploy the server on Vercel, you can also choose to deploy on your own server.</p><h2 id="docker-deploy"><a class="header-anchor" href="#docker-deploy">#</a> Docker Deploy</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">LEAN_ID</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">LEAN_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>\n  -e <span class="token assign-left variable">LEAN_SERVER</span><span class="token operator">=</span>https://xxx.com <span class="token punctuation">\\</span>\n  -p <span class="token number">8360</span>:8360 <span class="token punctuation">\\</span>\n  lizheming/waline\n</code></pre></div><p><code>LEAN_ID</code> and <code>LEAN_KEY</code> correspond to the App Id and App Key obtained in the background respectively. If you are not a LeanCloud International version user, you need to bind the registered domain name in the background and configure <code>LEAN_SERVER</code>.</p><div class="custom-container tip"><p class="custom-container-title">How to build image?</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/lizheming/waline.git\n<span class="token builtin class-name">cd</span> waline\ndocker build -t lizheming/waline -f packages/server/Dockerfile <span class="token builtin class-name">.</span>\n</code></pre></div></div>',6),t={id:"via-docker-stack-deploy-or-docker-compose"},o=(0,e.Wm)("a",{class:"header-anchor",href:"#via-docker-stack-deploy-or-docker-compose"},"#",-1),c=(0,e.Uk)(" via "),l={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("docker stack deploy"),k=(0,e.Uk)(" or "),u={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("docker-compose"),d=(0,e.Uk)("The SQLite is used here as an example. For SQLite and supported database services, please refer to "),m={href:"https://waline.js.org/en/server/databases.html#sqlite",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("Multi-database service support"),h=(0,e.Uk)("."),g=(0,e.uE)('<p>Example <code>docker-compose.yml</code> for <code>waline</code>:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>\n<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>\n\n<span class="token key atrule">services</span><span class="token punctuation">:</span>\n  <span class="token key atrule">waline</span><span class="token punctuation">:</span>\n    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> waline\n    <span class="token key atrule">image</span><span class="token punctuation">:</span> lizheming/waline<span class="token punctuation">:</span>latest\n    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n    <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>8360<span class="token punctuation">:</span><span class="token number">8360</span>\n    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/data<span class="token punctuation">:</span>/app/data\n    <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>\n      <span class="token key atrule">SQLITE_PATH</span><span class="token punctuation">:</span> <span class="token string">&#39;/app/data&#39;</span>\n      <span class="token key atrule">JWT_TOKEN</span><span class="token punctuation">:</span> <span class="token string">&#39;Your token&#39;</span>\n      <span class="token key atrule">SITE_NAME</span><span class="token punctuation">:</span> <span class="token string">&#39;Your site name&#39;</span>\n      <span class="token key atrule">SITE_URL</span><span class="token punctuation">:</span> <span class="token string">&#39;https://example.com&#39;</span>\n      <span class="token key atrule">SECURE_DOMAINS</span><span class="token punctuation">:</span> <span class="token string">&#39;example.com&#39;</span>\n      <span class="token key atrule">AUTHOR_EMAIL</span><span class="token punctuation">:</span> <span class="token string">&#39;mail@example.com&#39;</span>\n</code></pre></div><h2 id="run-directly-recommanded"><a class="header-anchor" href="#run-directly-recommanded">#</a> Run directly (Recommanded)</h2><p>It&#39;s easy to run without using docker deployment, just run the <code>vanilla.js</code> file in the module after installing.</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @waline/vercel\nnode node_modules/@waline/vercel/vanilla.js\n</code></pre></div><h2 id="nginx-config"><a class="header-anchor" href="#nginx-config">#</a> Nginx config</h2><p>If you don&#39;t want to use port in server url, you can use Nginx proxy pass to 80 and 443. Refer to the following configuration:</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token keyword">server</span>\n<span class="token punctuation">{</span>\n  <span class="token keyword">listen</span> <span class="token number">80</span><span class="token punctuation">;</span>\n  <span class="token keyword">listen</span> <span class="token number">443</span> <span class="token keyword">ssl</span> http2<span class="token punctuation">;</span>\n  <span class="token keyword">server_name</span> your<span class="token punctuation">.</span>domain<span class="token punctuation">.</span><span class="token keyword">server</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">root</span> <span class="token operator">/</span>www<span class="token operator">/</span>wwwroot<span class="token operator">/</span>your<span class="token punctuation">.</span>domain<span class="token punctuation">.</span><span class="token keyword">server</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$server_port</span> <span class="token operator">!</span><span class="token operator">~</span> <span class="token number">443</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n    <span class="token keyword">rewrite</span> <span class="token operator">^</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">)</span>$ <span class="token keyword">https</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token variable">$host</span>$<span class="token number">1</span> permanent<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token comment"># SSL setting</span>\n  <span class="token keyword">ssl_certificate</span> fullchain<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>\n  <span class="token keyword">ssl_certificate_key</span> privkey<span class="token punctuation">.</span>pem<span class="token punctuation">;</span>\n  <span class="token keyword">ssl_protocols</span> TLSv1<span class="token punctuation">.</span><span class="token number">1</span> TLSv1<span class="token punctuation">.</span><span class="token number">2</span> TLSv1<span class="token punctuation">.</span><span class="token number">3</span><span class="token punctuation">;</span>\n  <span class="token keyword">ssl_ciphers</span> EECDH<span class="token operator">+</span>CHACHA20<span class="token punctuation">:</span>EECDH<span class="token operator">+</span>CHACHA20<span class="token operator">-</span>draft<span class="token punctuation">:</span>EECDH<span class="token operator">+</span>AES128<span class="token punctuation">:</span>RSA<span class="token operator">+</span>AES128<span class="token punctuation">:</span>EECDH<span class="token operator">+</span>AES256<span class="token punctuation">:</span>RSA<span class="token operator">+</span>AES256<span class="token punctuation">:</span>EECDH<span class="token operator">+</span><span class="token number">3</span>DES<span class="token punctuation">:</span>RSA<span class="token operator">+</span><span class="token number">3</span>DES<span class="token punctuation">:</span><span class="token operator">!</span>MD5<span class="token punctuation">;</span>\n  <span class="token keyword">ssl_prefer_server_ciphers</span> on<span class="token punctuation">;</span>\n  <span class="token keyword">ssl_session_cache</span> shared<span class="token punctuation">:</span><span class="token keyword">SSL</span><span class="token punctuation">:</span><span class="token number">10</span>m<span class="token punctuation">;</span>\n  <span class="token keyword">ssl_session_timeout</span> <span class="token number">10</span>m<span class="token punctuation">;</span>\n  <span class="token keyword">add_header</span> Strict<span class="token operator">-</span>Transport<span class="token operator">-</span>Security <span class="token string">&quot;max-age=31536000&quot;</span><span class="token punctuation">;</span>\n\n  <span class="token comment"># proxy to 8360</span>\n  <span class="token keyword">location</span> <span class="token operator">/</span> <span class="token punctuation">{</span>\n    <span class="token keyword">proxy_pass</span> <span class="token keyword">http</span><span class="token punctuation">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token punctuation">:</span><span class="token number">8360</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> X<span class="token operator">-</span>Real<span class="token operator">-</span>IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> X<span class="token operator">-</span>Forwarded<span class="token operator">-</span>Proto <span class="token variable">$scheme</span><span class="token punctuation">;</span>\n    <span class="token keyword">proxy_set_header</span> REMOTE<span class="token operator">-</span>HOST <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>\n    <span class="token keyword">add_header</span> X<span class="token operator">-</span>Cache <span class="token variable">$upstream_cache_status</span><span class="token punctuation">;</span>\n    <span class="token comment"># cache</span>\n    <span class="token keyword">add_header</span> Cache<span class="token operator">-</span>Control no<span class="token operator">-</span>cache<span class="token punctuation">;</span>\n    <span class="token keyword">expires</span> <span class="token number">12</span>h<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',8),v={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[p,(0,e.Wm)("h3",t,[o,c,(0,e.Wm)("a",l,[r,(0,e.Wm)(a)]),k,(0,e.Wm)("a",u,[i,(0,e.Wm)(a)])]),(0,e.Wm)("p",null,[d,(0,e.Wm)("a",m,[y,(0,e.Wm)(a)]),h]),g],64)}}}}]);