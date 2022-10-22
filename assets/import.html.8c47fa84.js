import{ab as u,C as r,D as k,H as m,B as n,O as a,J as o,ad as s,ac as d,Q as p}from"./app.3a0fa356.js";import"./vendor.8ed03577.js";const h={},g=n("p",null,"Waline 提供多种版本的客户端文件。你可以通过多种方式引入 Waline。",-1),v=n("h2",{id:"通过-cdn",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#通过-cdn","aria-hidden":"true"},"#"),a(" 通过 CDN")],-1),w={href:"https://unpkg.com/@waline/client",target:"_blank",rel:"noopener noreferrer"},_=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- 脚本文件 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://unpkg.com/@waline/client@v2/dist/waline.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token comment"},"<!-- 样式文件 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("link")]),a(`
  `),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("stylesheet"),n("span",{class:"token punctuation"},'"')]),a(`
  `),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://unpkg.com/@waline/client@v2/dist/waline.css"),n("span",{class:"token punctuation"},'"')]),a(`
`),n("span",{class:"token punctuation"},"/>")]),a(`
`)])])],-1),b=n("div",{class:"language-html","data-ext":"html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- 浏览量 -->"),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),a(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("https://unpkg.com/@waline/client/dist/pageview.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`)])])],-1),f=d('<div class="custom-container info"><p class="custom-container-title">指定版本</p><p>对于 CDN 链接来说，不指定版本号时为最新版本，所以如果你需要指定特定版本，你需要在 <code>@waline/client</code> 后以 <code>@version</code> 的格式指定一个版本号。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 你需要自行修改替换 `v2` 为你想要的版本号 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/waline.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></div><h2 id="通过-npm" tabindex="-1"><a class="header-anchor" href="#通过-npm" aria-hidden="true">#</a> 通过 NPM</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3>',3),j=n("code",null,"@waline/client",-1),x={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},C=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` @waline/client
`)])])],-1),S=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),a(),n("span",{class:"token function"},"add"),a(),n("span",{class:"token parameter variable"},"-D"),a(` @waline/client
`)])])],-1),y=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),a(" i "),n("span",{class:"token parameter variable"},"-D"),a(` @waline/client
`)])])],-1),D=d('<h3 id="引入" tabindex="-1"><a class="header-anchor" href="#引入" aria-hidden="true">#</a> 引入</h3><p>Waline 提供多个版本的文件:</p><ul><li><p><code>dist/waline.js</code>: 完整版本，UMD 格式</p><p>此文件为 CDN 引入 <code>@waline/client</code> 的默认文件，53 KB Gzip 大小</p></li><li><p><code>dist/shim.mjs</code>: 不含依赖捆绑的完整版本， ES Module 格式</p><p>此文件为 <code>import</code> 引入 <code>@waline/client</code> 的默认文件, 19.39 KB Gzip 大小</p></li><li><p><code>dist/shim.cjs</code>: 不含依赖捆绑的完整版本，Common JS 格式</p><p>此文件为 <code>require</code> 引入 <code>@waline/client</code> 的默认文件，19.59 KB Gzip 大小</p></li><li><p><code>dist/waline.css</code>: Waline CSS 样式</p></li><li><p><code>dist/waline-meta.css</code>: Waline Meta 图标 CSS</p></li><li><p><code>dist/component.mjs</code>: Waline 的 Vue 组件，ES Module 格式，不含依赖捆绑</p><p>此文件用于在 Vue 项目中以组件模式使用 Waline 评论, 18.28 KB Gzip 大小</p></li><li><p><code>dist/comment.js</code>: Waline 的评论数模块，UMD 格式， &lt; 1KB Gzip 大小</p><p>此文件用于 CDN 引入，用于仅需页面评论数的情况</p></li><li><p><code>dist/pageview.js</code>: Waline 的浏览量模块，UMD 格式， &lt; 1KB Gzip 大小</p><p>此文件用于 CDN 引入，用于仅需页面浏览量的情况</p></li></ul><p>其他格式文件:</p><ul><li><p><code>dist/waline.cjs</code>: <code>dist/waline.js</code> 文件的 Common JS 格式</p></li><li><p><code>dist/waline.mjs</code>: <code>dist/waline.js</code> 文件的 ES Module 格式</p></li><li><p><code>dist/comment.cjs</code>: <code>dist/comment.js</code> 文件的 Common JS 格式</p></li><li><p><code>dist/comment.mjs</code>: <code>dist/comment.js</code> 文件的 ES Module 格式</p></li><li><p><code>dist/pageview.cjs</code>: <code>dist/pageview.js</code> 文件的 Common JS 格式</p></li><li><p><code>dist/pageview.mjs</code>: <code>dist/pageview.js</code> 文件的 ES Module 格式</p></li></ul><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>你可以通过多种形式导入需要的文件并使用，以下是一个示例。</p>',7),N=n("div",{class:"language-javascript","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" init "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@waline/client'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},"'@waline/client/dist/waline.css'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token literal-property property"},"el"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#waline'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1),B=n("div",{class:"language-typescript","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" init "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@waline/client'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},"'@waline/client/dist/waline.css'"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  el`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'#waline'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token comment"},"// ..."),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])])],-1);function M(W,q){const i=p("ExternalLinkIcon"),l=p("CodeTabs");return r(),k("div",null,[g,m(" more "),v,n("p",null,[a("推荐使用 "),n("a",w,[a("unpkg"),o(i)]),a("。")]),o(l,{id:"10",data:[{title:"推荐版本"},{title:"仅浏览量"}]},{tab0:s(({title:t,value:e,isActive:c})=>[_]),tab1:s(({title:t,value:e,isActive:c})=>[b]),_:1}),f,n("p",null,[a("Waline 客户端已通过 "),j,a(" 发布到 "),n("a",x,[a("npm"),o(i)]),a("，你可以通过以下命令安装:")]),o(l,{id:"33",data:[{title:"pnpm"},{title:"yarn"},{title:"npm"}],"tab-id":"shell"},{tab0:s(({title:t,value:e,isActive:c})=>[C]),tab1:s(({title:t,value:e,isActive:c})=>[S]),tab2:s(({title:t,value:e,isActive:c})=>[y]),_:1}),D,o(l,{id:"151",data:[{title:"JS"},{title:"TS"}],"tab-id":"lang"},{tab0:s(({title:t,value:e,isActive:c})=>[N]),tab1:s(({title:t,value:e,isActive:c})=>[B]),_:1})])}const V=u(h,[["render",M],["__file","import.html.vue"]]);export{V as default};
