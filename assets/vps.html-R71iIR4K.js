import{_ as d}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as u,c as k,a as v,b as n,e as s,f as a,w as e,d as l}from"./app--NZXsjJc.js";const m={},h=n("p",null,"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server.",-1),y=l(`<h2 id="docker-deploy" tabindex="-1"><a class="header-anchor" href="#docker-deploy"><span>Docker Deploy</span></a></h2><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_ID</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-e</span> <span class="token assign-left variable">LEAN_MASTER_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8360</span>:8360 <span class="token punctuation">\\</span>
  lizheming/waline
</code></pre></div><p><code>LEAN_ID</code> <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code> correspond to the App Id, App Key and Master Key obtained in the background respectively. If you are not a LeanCloud International version user, you need to bind the registered domain name in the background and configure <code>LEAN_SERVER</code>.</p><div class="hint-container tip"><p class="hint-container-title">How to build image?</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/lizheming/waline.git
<span class="token builtin class-name">cd</span> waline
<span class="token function">docker</span> build <span class="token parameter variable">-t</span> lizheming/waline <span class="token parameter variable">-f</span> packages/server/Dockerfile <span class="token builtin class-name">.</span>
</code></pre></div></div>`,4),b={id:"via-docker-stack-deploy-or-docker-compose",tabindex:"-1"},g={class:"header-anchor",href:"#via-docker-stack-deploy-or-docker-compose"},_={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},w=l(`<p>Example <code>docker-compose.yml</code> for <code>waline</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-directly-recommended" tabindex="-1"><a class="header-anchor" href="#run-directly-recommended"><span>Run directly (Recommended)</span></a></h2><p>It&#39;s easy to run without using docker deployment, after setting environment variables, just run the <code>vanilla.js</code> file in the module after installing.</p>`,4),E=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),x=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),A=l(`<h2 id="nginx-config" tabindex="-1"><a class="header-anchor" href="#nginx-config"><span>Nginx config</span></a></h2><p>If you don&#39;t want to use port in server url, you can use Nginx proxy pass to 80 and 443. Refer to the following configuration:</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function S(L,T){const i=p("ExternalLinkIcon"),c=p("RouteLink"),r=p("CodeTabs");return u(),k("div",null,[h,v(" more "),y,n("h3",b,[n("a",g,[n("span",null,[s("via "),n("a",_,[s("docker stack deploy"),a(i)]),s(" or "),n("a",f,[s("docker-compose"),a(i)])])])]),n("p",null,[s("The SQLite is used here as an example. For SQLite and supported database services, please refer to "),a(c,{to:"/en/guide/database.html#sqlite"},{default:e(()=>[s("Multi-database service support")]),_:1}),s(".")]),w,a(r,{id:"30",data:[{id:"npm"},{id:"yarn"}],"tab-id":"shell"},{title0:e(({value:t,isActive:o})=>[s("npm")]),title1:e(({value:t,isActive:o})=>[s("yarn")]),tab0:e(({value:t,isActive:o})=>[E]),tab1:e(({value:t,isActive:o})=>[x]),_:1}),A])}const I=d(m,[["render",S],["__file","vps.html.vue"]]),R=JSON.parse(`{"path":"/en/guide/deploy/vps.html","title":"Self Host","lang":"en-US","frontmatter":{"title":"Self Host","icon":"server","redirectFrom":"/en/guide/server/vps-deploy.html","description":"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server. Docker Deploy LEAN_ID LEAN_KEY and LEAN_MASTER_KEY correspond to the App Id, ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/deploy/vps.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/deploy/vps.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Self Host"}],["meta",{"property":"og:description","content":"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server. Docker Deploy LEAN_ID LEAN_KEY and LEAN_MASTER_KEY correspond to the App Id, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-11T05:16:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-11T05:16:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Self Host\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-11T05:16:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Docker Deploy","slug":"docker-deploy","link":"#docker-deploy","children":[{"level":3,"title":"via docker stack deploy or docker-compose","slug":"via-docker-stack-deploy-or-docker-compose","link":"#via-docker-stack-deploy-or-docker-compose","children":[]}]},{"level":2,"title":"Run directly (Recommended)","slug":"run-directly-recommended","link":"#run-directly-recommended","children":[]},{"level":2,"title":"Nginx config","slug":"nginx-config","link":"#nginx-config","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1681190175000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"en/guide/deploy/vps.md","localizedDate":"November 30, 2022","autoDesc":true}`);export{I as comp,R as data};