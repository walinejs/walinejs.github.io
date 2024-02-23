import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as a,a as o,b as e,d as i}from"./app-CyePWRSk.js";const l={},r=e("p",null,"We welcome everyone to open Pull Requests for waline! 🎉",-1),c=e("p",null,"If you want to contribute to waline, here is a guide.",-1),s=i(`<h2 id="preparation" tabindex="-1"><a class="header-anchor" href="#preparation"><span>Preparation</span></a></h2><ol><li><p>Use Git to clone the project</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/walinejs/waline.git
</code></pre></div></li><li><p>Installation dependencies</p><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>Install and use pnpm to install dependencies.</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> pnpm@latest
</code></pre></div></div><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> waline
<span class="token function">pnpm</span> i
</code></pre></div></li></ol><h2 id="development" tabindex="-1"><a class="header-anchor" href="#development"><span>Development</span></a></h2><ul><li><p>Run <code>pnpm client:dev</code> to start <code>@waline/client</code> devServer</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Since waline is based on Client/Server architecture, when debugging a client, you need to set <code>SERVERURL</code>, or start server devServer below at the same time and use the default <code>localhost:9090</code>.</p></div></li><li><p>Run <code>pnpm server:dev</code> to start <code>@waline/server</code> devServer</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>In order to run <code>@waline/server</code> locally, you need to configure some local environment variables to <code>example/.env</code>.</p><p>We provide an example for you in <code>example/.env.example</code>.</p></div></li></ul>`,4);function p(d,m){return n(),a("div",null,[r,c,o(" more "),s])}const v=t(l,[["render",p],["__file","contribution.html.vue"]]),g=JSON.parse('{"path":"/en/advanced/contribution.html","title":"Development Guide","lang":"en-US","frontmatter":{"title":"Development Guide","icon":"contribute","redirectFrom":"/en/reference/contribution.html","description":"We welcome everyone to open Pull Requests for waline! 🎉 If you want to contribute to waline, here is a guide. Preparation Use Git to clone the project Installation dependencies...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/advanced/contribution.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/advanced/contribution.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Development Guide"}],["meta",{"property":"og:description","content":"We welcome everyone to open Pull Requests for waline! 🎉 If you want to contribute to waline, here is a guide. Preparation Use Git to clone the project Installation dependencies..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T16:18:50.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T16:18:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Development Guide\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-30T16:18:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Preparation","slug":"preparation","link":"#preparation","children":[]},{"level":2,"title":"Development","slug":"development","link":"#development","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1669825130000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":0.47,"words":140},"filePathRelative":"en/advanced/contribution.md","localizedDate":"November 30, 2022","autoDesc":true}');export{v as comp,g as data};