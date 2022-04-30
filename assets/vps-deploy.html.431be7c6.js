import{r as e,o as i,c as k,a as n,b as a,w as t,F as u,e as p,d as s}from"./app.0d10cba7.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const _={},h=p(`<p>\u5982\u679C\u4F60\u4E0D\u60F3\u5C06\u670D\u52A1\u7AEF\u90E8\u7F72\u5728 Vercel \u4E0A\u7684\u8BDD\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u90E8\u7F72\u5728\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\u3002</p><h2 id="docker-\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#docker-\u90E8\u7F72" aria-hidden="true">#</a> Docker \u90E8\u7F72</h2><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">docker</span> run -d <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">LEAN_ID</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">LEAN_KEY</span><span class="token operator">=</span>xxx <span class="token punctuation">\\</span>
  -e <span class="token assign-left variable">LEAN_SERVER</span><span class="token operator">=</span>https://xxx.com <span class="token punctuation">\\</span>
  -p <span class="token number">8360</span>:8360 <span class="token punctuation">\\</span>
  lizheming/waline
</code></pre></div><p><code>LEAN_ID</code> \u548C <code>LEAN_KEY</code> \u5206\u522B\u5BF9\u5E94\u7684\u662F\u540E\u53F0\u5F97\u5230\u7684 App Id \u548C App Key\u3002\u5982\u679C\u975E LeanCloud \u56FD\u9645\u7248\u7528\u6237\u7684\u8BDD\u9700\u8981\u5728\u540E\u53F0\u7ED1\u5B9A\u5DF2\u5907\u6848\u57DF\u540D\u5E76\u914D\u7F6E <code>LEAN_SERVER</code>\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u5982\u4F55\u6784\u5EFA\u955C\u50CF\uFF1F</p><div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git
<span class="token builtin class-name">cd</span> waline
<span class="token function">docker</span> build -t lizheming/waline -f packages/server/Dockerfile <span class="token builtin class-name">.</span>
</code></pre></div></div>`,5),m={id:"\u4F7F\u7528-docker-stack-deploy-\u6216\u8005-docker-compose",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#\u4F7F\u7528-docker-stack-deploy-\u6216\u8005-docker-compose","aria-hidden":"true"},"#",-1),y=s(" \u4F7F\u7528 "),g={href:"https://docs.docker.com/engine/reference/commandline/stack_deploy/",target:"_blank",rel:"noopener noreferrer"},w=s("docker stack deploy"),x=s(" \u6216\u8005 "),f={href:"https://github.com/docker/compose",target:"_blank",rel:"noopener noreferrer"},E=s("docker-compose"),b=s("\u8FD9\u91CC\u4F7F\u7528\u4E86 SQLite \u6570\u636E\u5E93\u4F5C\u4E3A\u4F8B\u5B50\u3002\u5173\u4E8E SQLite \u548C\u652F\u6301\u7684\u6570\u636E\u5E93\u670D\u52A1\uFF0C\u8BF7\u53C2\u8003"),S=s("\u591A\u6570\u636E\u5E93\u670D\u52A1\u652F\u6301"),A=s("\u3002"),L=p(`<p><code>docker-compose.yml</code> \u793A\u4F8B:</p><div class="language-yaml ext-yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose.yml</span>
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
</code></pre></div><h2 id="\u76F4\u63A5\u8FD0\u884C-\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u8FD0\u884C-\u63A8\u8350" aria-hidden="true">#</a> \u76F4\u63A5\u8FD0\u884C (\u63A8\u8350)</h2><p>\u4E0D\u4F7F\u7528\u5BB9\u5668\u90E8\u7F72\u7684\u8BDD\u8FD0\u884C\u4E5F\u5F88\u7B80\u5355\u3002\u5728\u914D\u7F6E\u5FC5\u8981\u7684\u73AF\u5883\u53D8\u91CF\u540E\uFF0C\u5B89\u88C5\u597D\u6A21\u5757\u540E\u76F4\u63A5\u8FD0\u884C\u6A21\u5757\u5185\u7684 <code>vanilla.js</code> \u6587\u4EF6\u5373\u53EF\u3002</p>`,4),C=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(),n("span",{class:"token function"},"install"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),D=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` @waline/vercel
`),n("span",{class:"token function"},"node"),s(` node_modules/@waline/vercel/vanilla.js
`)])])],-1),N=p(`<h2 id="nginx-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#nginx-\u914D\u7F6E" aria-hidden="true">#</a> Nginx \u914D\u7F6E</h2><p>\u5982\u679C\u4F60\u4E0D\u60F3\u5E26\u7AEF\u53E3\u8BBF\u95EE\u7684\u8BDD\uFF0C\u53EF\u4EE5\u589E\u52A0 Nginx 80 \u548C 443 \u7AEF\u53E3\u7684\u53CD\u4EE3\u3002\u53EF\u53C2\u8003\u5982\u4E0B\u914D\u7F6E:</p><div class="language-nginx ext-nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server</span></span>
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
</code></pre></div>`,3);function T(R,H){const o=e("ExternalLinkIcon"),l=e("RouterLink"),c=e("CodeGroupItem"),r=e("CodeGroup");return i(),k(u,null,[h,n("h3",m,[v,y,n("a",g,[w,a(o)]),x,n("a",f,[E,a(o)])]),n("p",null,[b,a(l,{to:"/guide/server/databases.html#sqlite"},{default:t(()=>[S]),_:1}),A]),L,a(r,null,{default:t(()=>[a(c,{title:"npm"},{default:t(()=>[C]),_:1}),a(c,{title:"yarn"},{default:t(()=>[D]),_:1})]),_:1}),N],64)}var V=d(_,[["render",T],["__file","vps-deploy.html.vue"]]);export{V as default};
