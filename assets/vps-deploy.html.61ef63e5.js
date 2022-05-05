import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as i,c as _,a as e,b as o,w as s,F as h,e as p,d as n}from"./app.948a26c3.js";const m={},u=p(`<p>\u5982\u679C\u4F60\u4E0D\u60F3\u5C06\u670D\u52A1\u7AEF\u90E8\u7F72\u5728 Vercel \u4E0A\u7684\u8BDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u90E8\u7F72\u5728\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\u3002</p><h2 id="docker-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a> Docker \u90E8\u7F72</h2><div class="language-bash ext-sh"><pre class="language-bash"><code>docker run -d \\
  -e LEAN_ID=xxx \\
  -e LEAN_KEY=xxx \\
  -e LEAN_SERVER=https://xxx.com \\
  -p 8360:8360 \\
  lizheming/waline
</code></pre></div><p><code>LEAN_ID</code> \u548C <code>LEAN_KEY</code> \u5206\u522B\u5BF9\u5E94\u7684\u662F\u540E\u53F0\u5F97\u5230\u7684 App Id \u548C App Key\u3002\u5982\u679C\u975E LeanCloud \u56FD\u9645\u7248\u7528\u6237\u7684\u8BDD\u9700\u8981\u5728\u540E\u53F0\u7ED1\u5B9A\u5DF2\u5907\u6848\u57DF\u540D\u5E76\u914D\u7F6E <code>LEAN_SERVER</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5982\u4F55\u6784\u5EFA\u955C\u50CF\uFF1F</p><div class="language-bash ext-sh"><pre class="language-bash"><code>git clone https://github.com/walinejs/waline.git
cd waline
docker build -t lizheming/waline -f packages/server/Dockerfile .
</code></pre></div></div>`,5),g={id:"\u4F7F\u7528-docker-stack-deploy-\u6216\u8005-docker-compose",tabindex:"-1"},x=e("a",{class:"header-anchor",href:"#\u4F7F\u7528-docker-stack-deploy-\u6216\u8005-docker-compose","aria-hidden":"true"},"#",-1),E=n(" \u4F7F\u7528 "),v={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},k=n("docker stack deploy"),f=n(" \u6216\u8005 "),S={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},y=n("docker-compose"),w=n("\u8FD9\u91CC\u4F7F\u7528\u4E86 SQLite \u6570\u636E\u5E93\u4F5C\u4E3A\u4F8B\u5B50\u3002\u5173\u4E8E SQLite \u548C\u652F\u6301\u7684\u6570\u636E\u5E93\u670D\u52A1\uFF0C\u8BF7\u53C2\u8003"),A=n("\u591A\u6570\u636E\u5E93\u670D\u52A1\u652F\u6301"),L=n("\u3002"),C=e("p",null,[e("code",null,"docker-compose.yml"),n(" \u793A\u4F8B:")],-1),b=e("div",{class:"language-yaml ext-yml"},[e("pre",{class:"language-yaml"},[e("code",null,`# docker-compose.yml
version: '3'

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
      TZ: 'Asia/Shanghai'
      SQLITE_PATH: '/app/data'
      JWT_TOKEN: 'Your token'
      SITE_NAME: 'Your site name'
      SITE_URL: 'https://example.com'
      SECURE_DOMAINS: 'example.com'
      AUTHOR_EMAIL: 'mail@example.com'
`)])],-1),D=e("h2",{id:"\u76F4\u63A5\u8FD0\u884C-\u63A8\u8350",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u76F4\u63A5\u8FD0\u884C-\u63A8\u8350","aria-hidden":"true"},"#"),n(" \u76F4\u63A5\u8FD0\u884C (\u63A8\u8350)")],-1),N=e("p",null,[n("\u4E0D\u4F7F\u7528\u5BB9\u5668\u90E8\u7F72\u7684\u8BDD\u8FD0\u884C\u4E5F\u5F88\u7B80\u5355\u3002\u5728\u914D\u7F6E\u5FC5\u8981\u7684\u73AF\u5883\u53D8\u91CF\u540E\uFF0C\u5B89\u88C5\u597D\u6A21\u5757\u540E\u76F4\u63A5\u8FD0\u884C\u6A21\u5757\u5185\u7684 "),e("code",null,"vanilla.js"),n(" \u6587\u4EF6\u5373\u53EF\u3002")],-1),T=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`npm install @waline/vercel
node node_modules/@waline/vercel/vanilla.js
`)])],-1),R=e("div",{class:"language-bash ext-sh"},[e("pre",{class:"language-bash"},[e("code",null,`yarn add @waline/vercel
node node_modules/@waline/vercel/vanilla.js
`)])],-1),H=e("h2",{id:"nginx-\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#nginx-\u914D\u7F6E","aria-hidden":"true"},"#"),n(" Nginx \u914D\u7F6E")],-1),I=e("p",null,"\u5982\u679C\u4F60\u4E0D\u60F3\u5E26\u7AEF\u53E3\u8BBF\u95EE\u7684\u8BDD\uFF0C\u53EF\u4EE5\u589E\u52A0 Nginx 80 \u548C 443 \u7AEF\u53E3\u7684\u53CD\u4EE3\u3002\u53EF\u53C2\u8003\u5982\u4E0B\u914D\u7F6E:",-1),$=e("div",{class:"language-nginx ext-nginx"},[e("pre",{class:"language-nginx"},[e("code",null,`server
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
`)])],-1);function V(F,M){const t=a("ExternalLinkIcon"),c=a("RouterLink"),r=a("CodeGroupItem"),d=a("CodeGroup");return i(),_(h,null,[u,e("h3",g,[x,E,e("a",v,[k,o(t)]),f,e("a",S,[y,o(t)])]),e("p",null,[w,o(c,{to:"/guide/server/databases.html#sqlite"},{default:s(()=>[A]),_:1}),L]),C,b,D,N,o(d,null,{default:s(()=>[o(r,{title:"npm"},{default:s(()=>[T]),_:1}),o(r,{title:"yarn"},{default:s(()=>[R]),_:1})]),_:1}),H,I,$],64)}var G=l(m,[["render",V],["__file","vps-deploy.html.vue"]]);export{G as default};
