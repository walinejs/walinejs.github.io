import{_ as d}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as u,c as h,a as n,b as a,w as e,e as o,d as s,r as t}from"./app.cee3f369.js";const _={},m=o(`<p>If you don&#39;t want to deploy the server on Vercel, you can also choose to deploy on your own server.</p><h2 id="docker-deploy" tabindex="-1"><a class="header-anchor" href="#docker-deploy" aria-hidden="true">#</a> Docker Deploy</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_ID</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_SERVER</span><span class="token operator">=</span>https://xxx.com <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8360</span>:8360 <span class="token punctuation">\\</span>
  lizheming/waline
</code></pre></div><p><code>LEAN_ID</code> and <code>LEAN_KEY</code> correspond to the App Id and App Key obtained in the background respectively. If you are not a LeanCloud International version user, you need to bind the registered domain name in the background and configure <code>LEAN_SERVER</code>.</p><div class="custom-container tip"><p class="custom-container-title">How to build image?</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/lizheming/waline.git
<span class="token builtin class-name">cd</span> waline
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> lizheming/waline <span class="token parameter variable">-f</span> packages/server/Dockerfile <span class="token builtin class-name">.</span>
</code></pre></div></div>`,5),v={id:"via-docker-stack-deploy-or-docker-compose",tabindex:"-1"},y=n("a",{class:"header-anchor",href:"#via-docker-stack-deploy-or-docker-compose","aria-hidden":"true"},"#",-1),g=s(" via "),b={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},w=s("docker stack deploy"),f=s(" or "),x={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},E=s("docker-compose"),S=s("The SQLite is used here as an example. For SQLite and supported database services, please refer to "),A=s("Multi-database service support"),L=s("."),C=o(`<p>Example <code>docker-compose.yml</code> for <code>waline</code>:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">waline</span><span class="token punctuation">:</span>
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> waline
    <span class="token key atrule">image</span><span class="token punctuation">:</span> lizheming/waline<span class="token punctuation">:</span>latest
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 127.0.0.1<span class="token punctuation">:</span>8360<span class="token punctuation">:</span><span class="token number">8360</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> $<span class="token punctuation">{</span>PWD<span class="token punctuation">}</span>/data<span class="token punctuation">:</span>/app/data
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">TZ</span><span class="token punctuation">:</span> <span class="token string">&#39;Asia/Shanghai&#39;</span>
      <span class="token key atrule">SQLITE_PATH</span><span class="token punctuation">:</span> <span class="token string">&#39;/app/data&#39;</span>
      <span class="token key atrule">JWT_TOKEN</span><span class="token punctuation">:</span> <span class="token string">&#39;Your token&#39;</span>
      <span class="token key atrule">SITE_NAME</span><span class="token punctuation">:</span> <span class="token string">&#39;Your site name&#39;</span>
      <span class="token key atrule">SITE_URL</span><span class="token punctuation">:</span> <span class="token string">&#39;https://example.com&#39;</span>
      <span class="token key atrule">SECURE_DOMAINS</span><span class="token punctuation">:</span> <span class="token string">&#39;example.com&#39;</span>
      <span class="token key atrule">AUTHOR_EMAIL</span><span class="token punctuation">:</span> <span class="token string">&#39;mail@example.com&#39;</span>
</code></pre></div><h2 id="run-directly-recommanded" tabindex="-1"><a class="header-anchor" href="#run-directly-recommanded" aria-hidden="true">#</a> Run directly (Recommanded)</h2><p>It&#39;s easy to run without using docker deployment, after setting environment variables, just run the <code>vanilla.js</code> file in the module after installing.</p>`,4),T=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),R=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),D=o(`<h2 id="nginx-config" tabindex="-1"><a class="header-anchor" href="#nginx-config" aria-hidden="true">#</a> Nginx config</h2><p>If you don&#39;t want to use port in server url, you can use Nginx proxy pass to 80 and 443. Refer to the following configuration:</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span>
<span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">80</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">listen</span> <span class="token number">443</span> ssl http2</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">server_name</span> your.domain.server.name</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">root</span> /www/wwwroot/your.domain.server.name</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">if</span> (<span class="token variable">$server_port</span> !~ 443)</span><span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">rewrite</span> ^(/.*)$ https://<span class="token variable">$host</span><span class="token variable">$1</span> permanent</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment"># SSL setting</span>
  <span class="token directive"><span class="token keyword">ssl_certificate</span> fullchain.pem</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_certificate_key</span> privkey.pem</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_protocols</span> TLSv1.1 TLSv1.2 TLSv1.3</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_ciphers</span> EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_prefer_server_ciphers</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_session_cache</span> shared:SSL:10m</span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">ssl_session_timeout</span> <span class="token number">10m</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">add_header</span> Strict-Transport-Security <span class="token string">&quot;max-age=31536000&quot;</span></span><span class="token punctuation">;</span>

  <span class="token comment"># proxy to 8360</span>
  <span class="token directive"><span class="token keyword">location</span> /</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">proxy_pass</span> http://127.0.0.1:8360</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$host</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-IP <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-Proto <span class="token variable">$scheme</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">add_header</span> X-Cache <span class="token variable">$upstream_cache_status</span></span><span class="token punctuation">;</span>
    <span class="token comment"># cache</span>
    <span class="token directive"><span class="token keyword">add_header</span> Cache-Control no-cache</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">expires</span> <span class="token number">12h</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div>`,3);function I(N,H){const p=t("ExternalLinkIcon"),c=t("RouterLink"),l=t("CodeTabs");return u(),h("div",null,[m,n("h3",v,[y,g,n("a",b,[w,a(p)]),f,n("a",x,[E,a(p)])]),n("p",null,[S,a(c,{to:"/en/guide/server/databases.html#sqlite"},{default:e(()=>[A]),_:1}),L]),C,a(l,{data:[{title:"npm"},{title:"yarn"}],"tab-id":"shell"},{tab0:e(({title:r,value:i,isActive:k})=>[T]),tab1:e(({title:r,value:i,isActive:k})=>[R]),_:1}),D])}const M=d(_,[["render",I],["__file","vps-deploy.html.vue"]]);export{M as default};
