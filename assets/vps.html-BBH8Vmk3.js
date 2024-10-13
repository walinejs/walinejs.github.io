import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,b as t,d as s,f as a,a as h,e as n,r as p,o as c}from"./app-S5FB9Q68.js";const A={};function g(y,i){const k=p("RouteLink"),r=p("CodeTabs");return c(),o("div",null,[i[7]||(i[7]=t(`<p>If you don&#39;t want to deploy the server on Vercel, you can also choose to deploy on your own server.</p><h2 id="docker-deploy" tabindex="-1"><a class="header-anchor" href="#docker-deploy"><span>Docker Deploy</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LEAN_ID=xxx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LEAN_KEY=xxx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> LEAN_MASTER_KEY=xxx</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">  -p</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 8360:8360</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> \\</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">  lizheming/waline</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>LEAN_ID</code> <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code> correspond to the App Id, App Key and Master Key obtained in the background respectively. If you are not a LeanCloud International version user, you need to bind the registered domain name in the background and configure <code>LEAN_SERVER</code>.</p><div class="hint-container tip"><p class="hint-container-title">How to build image?</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> clone</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> https://github.com/lizheming/waline.git</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> waline</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -t</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> lizheming/waline</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> packages/server/Dockerfile</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> .</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h3 id="via-docker-stack-deploy-or-docker-compose" tabindex="-1"><a class="header-anchor" href="#via-docker-stack-deploy-or-docker-compose"><span>via <a href="https://docs.docker.com/engine/reference/commandline/stack_deploy/" target="_blank" rel="noopener noreferrer">docker stack deploy</a> or <a href="https://github.com/docker/compose" target="_blank" rel="noopener noreferrer">docker-compose</a></span></a></h3>`,6)),s("p",null,[i[1]||(i[1]=a("The SQLite is used here as an example. For SQLite and supported database services, please refer to ")),h(k,{to:"/en/guide/database.html#sqlite"},{default:n(()=>i[0]||(i[0]=[a("Multi-database service support")])),_:1}),i[2]||(i[2]=a("."))]),i[8]||(i[8]=t(`<p>Example <code>docker-compose.yml</code> for <code>waline</code>:</p><div class="language-yaml line-numbers-mode" data-highlighter="shiki" data-ext="yaml" data-title="yaml" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># docker-compose.yml</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;3&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">services</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    container_name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">waline</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    image</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">lizheming/waline:latest</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    restart</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">always</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    ports</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">127.0.0.1:8360:8360</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    volumes</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">\${PWD}/data:/app/data</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    environment</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      TZ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Asia/Shanghai&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SQLITE_PATH</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;/app/data&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      JWT_TOKEN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Your token&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SITE_NAME</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;Your site name&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SITE_URL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;https://example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      SECURE_DOMAINS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;example.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      AUTHOR_EMAIL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&#39;mail@example.com&#39;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="run-directly-recommended" tabindex="-1"><a class="header-anchor" href="#run-directly-recommended"><span>Run directly (Recommended)</span></a></h2><p>It&#39;s easy to run without using docker deployment, after setting environment variables, just run the <code>vanilla.js</code> file in the module after installing.</p>`,4)),h(r,{id:"30",data:[{id:"npm"},{id:"yarn"}],"tab-id":"shell"},{title0:n(({value:e,isActive:l})=>i[3]||(i[3]=[a("npm")])),title1:n(({value:e,isActive:l})=>i[4]||(i[4]=[a("yarn")])),tab0:n(({value:e,isActive:l})=>i[5]||(i[5]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"npm"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," install"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @waline/vercel")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"node"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," node_modules/@waline/vercel/vanilla.js")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:e,isActive:l})=>i[6]||(i[6]=[s("div",{class:"language-bash line-numbers-mode","data-highlighter":"shiki","data-ext":"bash","data-title":"bash",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[s("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"yarn"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," add"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," @waline/vercel")]),a(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#4078F2","--shiki-dark":"#61AFEF"}},"node"),s("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}}," node_modules/@waline/vercel/vanilla.js")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),_:1}),i[9]||(i[9]=t(`<h2 id="nginx-config" tabindex="-1"><a class="header-anchor" href="#nginx-config"><span>Nginx config</span></a></h2><p>If you don&#39;t want to use port in server url, you can use Nginx proxy pass to 80 and 443. Refer to the following configuration:</p><div class="language-nginx line-numbers-mode" data-highlighter="shiki" data-ext="nginx" data-title="nginx" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">server</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">80</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  listen </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">443</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ssl http2;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  server_name </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">your.domain.server.name;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  root </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">/www/wwwroot/your.domain.server.name;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ($</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">server_port</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> !~ 443){</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    rewrite</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75;"> ^(/.*)$</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> https://$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">$</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> permanent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # SSL setting</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_certificate </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">fullchain.pem;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_certificate_key </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">privkey.pem;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_protocols </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">TLSv1.1 TLSv1.2 TLSv1.3;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_ciphers </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_prefer_server_ciphers </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_session_cache </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">shared:SSL:10m;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  ssl_session_timeout </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10m</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  add_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Strict-Transport-Security </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;max-age=31536000&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  # proxy to 8360</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">  location</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_pass </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">http://127.0.0.1:8360;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Host $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">host</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">X-Real-IP $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">X-Forwarded-For $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">proxy_add_x_forwarded_for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">X-Forwarded-Proto $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">scheme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    proxy_set_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">REMOTE-HOST $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">remote_addr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    add_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">X-Cache $</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">upstream_cache_status</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    # cache</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    add_header </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">Cache-Control no-cache;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    expires </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12h</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const u=d(A,[["render",g],["__file","vps.html.vue"]]),B=JSON.parse(`{"path":"/en/guide/deploy/vps.html","title":"Self Host","lang":"en-US","frontmatter":{"title":"Self Host","icon":"server","order":-1,"description":"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server. Docker Deploy LEAN_ID LEAN_KEY and LEAN_MASTER_KEY correspond to the App Id, ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/deploy/vps.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/deploy/vps.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Self Host"}],["meta",{"property":"og:description","content":"If you don't want to deploy the server on Vercel, you can also choose to deploy on your own server. Docker Deploy LEAN_ID LEAN_KEY and LEAN_MASTER_KEY correspond to the App Id, ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Self Host\\",\\"image\\":[\\"\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Docker Deploy","slug":"docker-deploy","link":"#docker-deploy","children":[{"level":3,"title":"via docker stack deploy or docker-compose","slug":"via-docker-stack-deploy-or-docker-compose","link":"#via-docker-stack-deploy-or-docker-compose","children":[]}]},{"level":2,"title":"Run directly (Recommended)","slug":"run-directly-recommended","link":"#run-directly-recommended","children":[]},{"level":2,"title":"Nginx config","slug":"nginx-config","link":"#nginx-config","children":[]}],"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"en/guide/deploy/vps.md","autoDesc":true}`);export{u as comp,B as data};