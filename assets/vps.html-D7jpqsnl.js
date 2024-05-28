import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as k,b as s,e as a,d as o,w as n,a as l}from"./app-BZeIcON_.js";const h={},y=l(`<p>If you don&#39;t want to deploy the server on Vercel, you can also choose to deploy on your own server.</p><h2 id="docker-deploy" tabindex="-1"><a class="header-anchor" href="#docker-deploy"><span>Docker Deploy</span></a></h2><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="color:#032F62;--shiki-dark:#98C379;"> run</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">  -e</span><span style="color:#032F62;--shiki-dark:#98C379;"> LEAN_ID=xxx</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">  -e</span><span style="color:#032F62;--shiki-dark:#98C379;"> LEAN_KEY=xxx</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">  -e</span><span style="color:#032F62;--shiki-dark:#98C379;"> LEAN_MASTER_KEY=xxx</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#D19A66;">  -p</span><span style="color:#032F62;--shiki-dark:#98C379;"> 8360:8360</span><span style="color:#005CC5;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="color:#032F62;--shiki-dark:#98C379;">  lizheming/waline</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>LEAN_ID</code> <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code> correspond to the App Id, App Key and Master Key obtained in the background respectively. If you are not a LeanCloud International version user, you need to bind the registered domain name in the background and configure <code>LEAN_SERVER</code>.</p><div class="hint-container tip"><p class="hint-container-title">How to build image?</p><div class="language-bash line-numbers-mode" data-ext="bash" data-title="bash"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="color:#032F62;--shiki-dark:#98C379;"> clone</span><span style="color:#032F62;--shiki-dark:#98C379;"> https://github.com/lizheming/waline.git</span></span>
<span class="line"><span style="color:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="color:#032F62;--shiki-dark:#98C379;"> waline</span></span>
<span class="line"><span style="color:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="color:#032F62;--shiki-dark:#98C379;"> build</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -t</span><span style="color:#032F62;--shiki-dark:#98C379;"> lizheming/waline</span><span style="color:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="color:#032F62;--shiki-dark:#98C379;"> packages/server/Dockerfile</span><span style="color:#032F62;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="via-docker-stack-deploy-or-docker-compose" tabindex="-1"><a class="header-anchor" href="#via-docker-stack-deploy-or-docker-compose"><span>via <a href="https://docs.docker.com/engine/reference/commandline/stack_deploy/" target="_blank" rel="noopener noreferrer">docker stack deploy</a> or <a href="https://github.com/docker/compose" target="_blank" rel="noopener noreferrer">docker-compose</a></span></a></h3>`,6),v=l(`<p>Example <code>docker-compose.yml</code> for <code>waline</code>:</p><div class="language-yaml line-numbers-mode" data-ext="yaml" data-title="yaml"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;"># docker-compose.yml</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">version</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">services</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">  waline</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    container_name</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">waline</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    image</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">lizheming/waline:latest</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    restart</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    ports</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="color:#032F62;--shiki-dark:#98C379;">127.0.0.1:8360:8360</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    volumes</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="color:#032F62;--shiki-dark:#98C379;">\${PWD}/data:/app/data</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">    environment</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      TZ</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      SQLITE_PATH</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;/app/data&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      JWT_TOKEN</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Your token&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      SITE_NAME</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;Your site name&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      SITE_URL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;https://example.com&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      SECURE_DOMAINS</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;example.com&#39;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#E06C75;">      AUTHOR_EMAIL</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="color:#032F62;--shiki-dark:#98C379;">&#39;mail@example.com&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-directly-recommended" tabindex="-1"><a class="header-anchor" href="#run-directly-recommended"><span>Run directly (Recommended)</span></a></h2><p>It&#39;s easy to run without using docker deployment, after setting environment variables, just run the <code>vanilla.js</code> file in the module after installing.</p>`,4),m=s("div",{class:"language-bash line-numbers-mode","data-ext":"bash","data-title":"bash"},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",style:{"background-color":"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{color:"#032F62","--shiki-dark":"#98C379"}}," install"),s("span",{style:{color:"#032F62","--shiki-dark":"#98C379"}}," @waline/vercel")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"}},"node"),s("span",{style:{color:"#032F62","--shiki-dark":"#98C379"}}," node_modules/@waline/vercel/vanilla.js")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),u=s("div",{class:"language-bash line-numbers-mode","data-ext":"bash","data-title":"bash"},[s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code",style:{"background-color":"#fff","--shiki-dark-bg":"#282c34",color:"#24292e","--shiki-dark":"#abb2bf"},tabindex:"0"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{color:"#032F62","--shiki-dark":"#98C379"}}," add"),s("span",{style:{color:"#032F62","--shiki-dark":"#98C379"}}," @waline/vercel")]),a(`
`),s("span",{class:"line"},[s("span",{style:{color:"#6F42C1","--shiki-dark":"#61AFEF"}},"node"),s("span",{style:{color:"#032F62","--shiki-dark":"#98C379"}}," node_modules/@waline/vercel/vanilla.js")])])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),B=l(`<h2 id="nginx-config" tabindex="-1"><a class="header-anchor" href="#nginx-config"><span>Nginx config</span></a></h2><p>If you don&#39;t want to use port in server url, you can use Nginx proxy pass to 80 and 443. Refer to the following configuration:</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">server</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  listen </span><span style="color:#005CC5;--shiki-dark:#D19A66;">80</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  listen </span><span style="color:#005CC5;--shiki-dark:#D19A66;">443</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> ssl http2;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  server_name </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">your.domain.server.name;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  root </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">/www/wwwroot/your.domain.server.name;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  if</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> ($</span><span style="color:#24292E;--shiki-dark:#E06C75;">server_port</span><span style="color:#D73A49;--shiki-dark:#ABB2BF;"> !~ </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">443){</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    rewrite</span><span style="color:#032F62;--shiki-dark:#E06C75;"> ^(/.*)$</span><span style="color:#24292E;--shiki-dark:#ABB2BF;"> https://$</span><span style="color:#24292E;--shiki-dark:#E06C75;">host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">$</span><span style="color:#24292E;--shiki-dark:#E06C75;">1</span><span style="color:#D73A49;--shiki-dark:#C678DD;"> permanent</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # SSL setting</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_certificate </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">fullchain.pem;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_certificate_key </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">privkey.pem;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_protocols </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_ciphers </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_prefer_server_ciphers </span><span style="color:#005CC5;--shiki-dark:#D19A66;">on</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_session_cache </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">shared:SSL:10m;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  ssl_session_timeout </span><span style="color:#005CC5;--shiki-dark:#D19A66;">10m</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  add_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">Strict-Transport-Security </span><span style="color:#032F62;--shiki-dark:#98C379;">&quot;max-age=31536000&quot;</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">  # proxy to 8360</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">  location</span><span style="color:#6F42C1;--shiki-dark:#ABB2BF;"> / </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    proxy_pass </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">http://127.0.0.1:8360;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">Host $</span><span style="color:#24292E;--shiki-dark:#E06C75;">host</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">X-Real-IP $</span><span style="color:#24292E;--shiki-dark:#E06C75;">remote_addr</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">X-Forwarded-For $</span><span style="color:#24292E;--shiki-dark:#E06C75;">proxy_add_x_forwarded_for</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">X-Forwarded-Proto $</span><span style="color:#24292E;--shiki-dark:#E06C75;">scheme</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">REMOTE-HOST $</span><span style="color:#24292E;--shiki-dark:#E06C75;">remote_addr</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    add_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">X-Cache $</span><span style="color:#24292E;--shiki-dark:#E06C75;">upstream_cache_status</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#6A737D;--shiki-dark:#7F848E;font-style:inherit;--shiki-dark-font-style:italic;">    # cache</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    add_header </span><span style="color:#24292E;--shiki-dark:#ABB2BF;">Cache-Control no-cache;</span></span>
<span class="line"><span style="color:#D73A49;--shiki-dark:#C678DD;">    expires </span><span style="color:#005CC5;--shiki-dark:#D19A66;">12h</span><span style="color:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function A(b,E){const p=r("RouteLink"),d=r("CodeTabs");return c(),k("div",null,[y,s("p",null,[a("The SQLite is used here as an example. For SQLite and supported database services, please refer to "),o(p,{to:"/en/guide/database.html#sqlite"},{default:n(()=>[a("Multi-database service support")]),_:1}),a(".")]),v,o(d,{id:"30",data:[{id:"npm"},{id:"yarn"}],"tab-id":"shell"},{title0:n(({value:e,isActive:i})=>[a("npm")]),title1:n(({value:e,isActive:i})=>[a("yarn")]),tab0:n(({value:e,isActive:i})=>[m]),tab1:n(({value:e,isActive:i})=>[u]),_:1}),B])}const D=t(h,[["render",A],["__file","vps.html.vue"]]),g=JSON.parse(`{"path":"/en/guide/deploy/vps.html","title":"Self Host","lang":"en-US","frontmatter":{"title":"Self Host","icon":"server","redirectFrom":"/en/guide/server/vps-deploy.html","description":"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server. Docker Deploy LEAN_ID LEAN_KEY and LEAN_MASTER_KEY correspond to the App Id, ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/deploy/vps.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/deploy/vps.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Self Host"}],["meta",{"property":"og:description","content":"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server. Docker Deploy LEAN_ID LEAN_KEY and LEAN_MASTER_KEY correspond to the App Id, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-11T05:16:15.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-11T05:16:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Self Host\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-04-11T05:16:15.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Docker Deploy","slug":"docker-deploy","link":"#docker-deploy","children":[{"level":3,"title":"via docker stack deploy or docker-compose","slug":"via-docker-stack-deploy-or-docker-compose","link":"#via-docker-stack-deploy-or-docker-compose","children":[]}]},{"level":2,"title":"Run directly (Recommended)","slug":"run-directly-recommended","link":"#run-directly-recommended","children":[]},{"level":2,"title":"Nginx config","slug":"nginx-config","link":"#nginx-config","children":[]}],"git":{"createdTime":1605627304000,"updatedTime":1681190175000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"en/guide/deploy/vps.md","localizedDate":"November 17, 2020","autoDesc":true}`);export{D as comp,g as data};
