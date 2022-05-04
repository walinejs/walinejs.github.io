import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as p,c as _,a as e,b as o,w as t,F as h,e as d,d as n}from"./app.12aa930c.js";const m={},u=d(`<p>If you don&#39;t want to deploy the server on Vercel, you can also choose to deploy on your own server.</p><h2 id="docker-deploy" tabindex="-1"><a class="header-anchor" href="#docker-deploy" aria-hidden="true">#</a> Docker Deploy</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d \\
  -e LEAN_ID=xxx \\
  -e LEAN_KEY=xxx \\
  -e LEAN_SERVER=https://xxx.com \\
  -p 8360:8360 \\
  lizheming/waline
</code></pre></div><p><code>LEAN_ID</code> and <code>LEAN_KEY</code> correspond to the App Id and App Key obtained in the background respectively. If you are not a LeanCloud International version user, you need to bind the registered domain name in the background and configure <code>LEAN_SERVER</code>.</p><div class="custom-container tip"><p class="custom-container-title">How to build image?</p><div class="language-bash ext-sh"><pre class="language-bash"><code>git clone https://github.com/lizheming/waline.git
cd waline
docker build -t lizheming/waline -f packages/server/Dockerfile .
</code></pre></div></div>`,5),g={id:"via-docker-stack-deploy-or-docker-compose",tabindex:"-1"},v=e("a",{class:"header-anchor",href:"#via-docker-stack-deploy-or-docker-compose","aria-hidden":"true"},"#",-1),x=n(" via "),y={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},f=n("docker stack deploy"),E=n(" or "),k={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},w=n("docker-compose"),S=n("The SQLite is used here as an example. For SQLite and supported database services, please refer to "),b=n("Multi-database service support"),A=n("."),L=d(`<p>Example <code>docker-compose.yml</code> for <code>waline</code>:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code># docker-compose.yml
version: &#39;3&#39;

services:
  waline:
    container_name: waline
    image: lizheming/waline:latest
    restart: always
    ports:
      - 127.0.0.1:8360:8360
    volumes:
      - \${PWD}/data:/app/data
    environment:
      TZ: &#39;Asia/Shanghai&#39;
      SQLITE_PATH: &#39;/app/data&#39;
      JWT_TOKEN: &#39;Your token&#39;
      SITE_NAME: &#39;Your site name&#39;
      SITE_URL: &#39;https://example.com&#39;
      SECURE_DOMAINS: &#39;example.com&#39;
      AUTHOR_EMAIL: &#39;mail@example.com&#39;
</code></pre></div><h2 id="run-directly-recommanded" tabindex="-1"><a class="header-anchor" href="#run-directly-recommanded" aria-hidden="true">#</a> Run directly (Recommanded)</h2><p>It&#39;s easy to run without using docker deployment, after setting environment variables, just run the <code>vanilla.js</code> file in the module after installing.</p>`,4),C=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install @waline/vercel
node node_modules/@waline/vercel/vanilla.js
`)])],-1),I=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn add @waline/vercel
node node_modules/@waline/vercel/vanilla.js
`)])],-1),R=e("h2",{id:"nginx-config",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-config","aria-hidden":"true"},"#"),n(" Nginx config")],-1),D=e("p",null,"If you don't want to use port in server url, you can use Nginx proxy pass to 80 and 443. Refer to the following configuration:",-1),T=e("div",{class:"language-nginx ext-nginx"},[e("pre",{class:"language-nginx"},[e("code",null,`server
{
  listen 80;
  listen 443 ssl http2;
  server_name your.domain.server.name;
  root /www/wwwroot/your.domain.server.name;
  if ($server_port !~ 443){
    rewrite ^(/.*)$ https://$host$1 permanent;
  }

  # SSL setting
  ssl_certificate fullchain.pem;
  ssl_certificate_key privkey.pem;
  ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers EECDH+CHACHA20:EECDH+CHACHA20-draft:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_cache shared:SSL:10m;
  ssl_session_timeout 10m;
  add_header Strict-Transport-Security "max-age=31536000";

  # proxy to 8360
  location / {
    proxy_pass http://127.0.0.1:8360;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header REMOTE-HOST $remote_addr;
    add_header X-Cache $upstream_cache_status;
    # cache
    add_header Cache-Control no-cache;
    expires 12h;
  }
}
`)])],-1);function N(H,$){const s=a("ExternalLinkIcon"),c=a("RouterLink"),r=a("CodeGroupItem"),i=a("CodeGroup");return p(),_(h,null,[u,e("h3",g,[v,x,e("a",y,[f,o(s)]),E,e("a",k,[w,o(s)])]),e("p",null,[S,o(c,{to:"/en/guide/databases.html#sqlite"},{default:t(()=>[b]),_:1}),A]),L,o(i,null,{default:t(()=>[o(r,{title:"npm"},{default:t(()=>[C]),_:1}),o(r,{title:"yarn"},{default:t(()=>[I]),_:1})]),_:1}),R,D,T],64)}var M=l(m,[["render",N],["__file","vps-deploy.html.vue"]]);export{M as default};
