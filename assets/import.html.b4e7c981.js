import{r as l,o as p,c as r,a as n,b as e,w as a,F as u,d as s,e as c}from"./app.cfbd99c8.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const h={},m=n("p",null,"Waline provides several versions of client files. You can introduce Waline in a number of ways.",-1),k=n("h2",{id:"via-cdn",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#via-cdn","aria-hidden":"true"},"#"),s(" Via CDN")],-1),g=s("Recommend to use "),f={href:"https://cdn.jsdelivr.net/npm/@waline/client/",target:"_blank",rel:"noopener noreferrer"},v=s("jsdelivr"),_=s("."),w=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- Scripts -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("//cdn.jsdelivr.net/npm/@waline/client/dist/waline.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token comment"},"<!-- Styles -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("link")]),s(),n("span",{class:"token attr-name"},"rel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("style"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("//cdn.jsdelivr.net/@waline/client/dist/waline.css"),n("span",{class:"token punctuation"},'"')]),s(),n("span",{class:"token punctuation"},"/>")]),s(`
`)])])],-1),b=n("div",{class:"language-html ext-html"},[n("pre",{class:"language-html"},[n("code",null,[n("span",{class:"token comment"},"<!-- Pageview -->"),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),s(),n("span",{class:"token attr-name"},"src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("//cdn.jsdelivr.net/npm/@waline/client/dist/pageview.js"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"}),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])])],-1),j=c('<div class="custom-container info"><p class="custom-container-title">Specifies version</p><p>For CDN links, if you don&#39;t specify a version number, it will be latest version, so if you need to specify a specific version, you need to specify a version number in the format <code>@version</code> after <code>@waline/client</code>.</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- You need to modify and replace `next` with the version number you want --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client/dist/waline.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></div><h2 id="via-npm" tabindex="-1"><a class="header-anchor" href="#via-npm" aria-hidden="true">#</a> Via NPM</h2><h3 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h3>',3),y=s("Waline client has been released to "),x={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},S=s("npm"),C=s(" via "),z=n("code",null,"@waline/client",-1),q=s(", you can install it with the following command:"),D=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` -D @waline/client
`)])])],-1),G=n("div",{class:"language-bash ext-sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i -D @waline/client
`)])])],-1),N=c('<h3 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> Import</h3><p>Waline provides several versions of the file:</p><ul><li><p><code>dist/waline.js</code>: full version, UMD format</p><p>This file is the default file for CDN import <code>@waline/client</code>, 51 KB Gzip size</p></li><li><p><code>dist/shim.js</code>: full version without dependencies, in Common JS format</p><p>This file is the default file when <code>require</code> <code>@waline/client</code>, 14.24 KB Gzip size</p></li><li><p><code>dist/shim.esm.js</code>: full version without dependencies, ES Module format</p><p>This file is the default file when <code>import</code> <code>@waline/client</code>, 14.14 KB Gzip size</p></li><li><p><code>dist/waline.css</code>: Waline CSS styles</p></li><li><p><code>dist/component.js</code>: Waline&#39;s Vue component, ES Module format, without dependency bundling</p><p>This file is for using Waline comments in component mode in a Vue project, 13.19 KB Gzip size</p></li><li><p><code>dist/pageview.js</code>: Waline&#39;s pageview module, UMD format, &lt; 1KB Gzip size</p><p>This file is used for CDN, when only page views are needed</p></li></ul><p>Other format files:</p><ul><li><p><code>dist/waline.cjs.js</code>: Common JS format for <code>dist/waline.js</code> file</p></li><li><p><code>dist/waline.esm.js</code>: ES Module format of <code>dist/waline.js</code> file</p></li><li><p><code>dist/pageview.cjs.js</code>: Common JS format for <code>dist/pageview.js</code> file</p></li><li><p><code>dist/pageview.esm.js</code>: ES Module format of <code>dist/pageview.js</code> file</p></li></ul><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>You can import the required files in various forms and use them, the following is an example.</p>',7),B=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" init "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@waline/client'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@waline/client/dist/waline.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"el"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#waline'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),V=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" init "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'@waline/client'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token string"},"'@waline/client/dist/waline.css'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token function"},"init"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
  el`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'#waline'"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token comment"},"// ..."),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("br"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0"),n("div",{class:"highlight-line"},"\xA0")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1);function W(E,M){const o=l("ExternalLinkIcon"),t=l("CodeGroupItem"),i=l("CodeGroup");return p(),r(u,null,[m,k,n("p",null,[g,n("a",f,[v,e(o)]),_]),e(i,null,{default:a(()=>[e(t,{title:"Default"},{default:a(()=>[w,e(t,{title:"Pageview Only"},{default:a(()=>[b]),_:1})]),_:1})]),_:1}),j,n("p",null,[y,n("a",x,[S,e(o)]),C,z,q]),e(i,null,{default:a(()=>[e(t,{title:"yarn"},{default:a(()=>[D]),_:1}),e(t,{title:"npm"},{default:a(()=>[G]),_:1})]),_:1}),N,e(i,null,{default:a(()=>[e(t,{title:"JS"},{default:a(()=>[B]),_:1}),e(t,{title:"TS"},{default:a(()=>[V]),_:1})]),_:1})],64)}var K=d(h,[["render",W],["__file","import.html.vue"]]);export{K as default};