(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4427],{8565:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-668d9be0",path:"/en/guide/client/import.html",title:"Importing Client",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Via CDN",slug:"via-cdn",children:[{level:3,title:"Get the latest version",slug:"get-the-latest-version",children:[]},{level:3,title:"Get the specified version",slug:"get-the-specified-version",children:[]}]},{level:2,title:"Via NPM",slug:"via-npm",children:[]}],filePathRelative:"en/guide/client/import.md",git:{updatedTime:162575646e4,contributors:[]}}},9582:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>W});var t=a(8917);const e=(0,t.Wm)("h1",{id:"importing-client",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#importing-client","aria-hidden":"true"},"#"),(0,t.Uk)(" Importing Client")],-1),p=(0,t.Wm)("p",null,"Waline provides two versions of client files: default (with its own style) and no-style.",-1),l=(0,t.Wm)("h2",{id:"via-cdn",tabindex:"-1"},[(0,t.Wm)("a",{class:"header-anchor",href:"#via-cdn","aria-hidden":"true"},"#"),(0,t.Uk)(" Via CDN")],-1),c=(0,t.Uk)("Recommend to use "),o={href:"https://cdn.jsdelivr.net/npm/@waline/client/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("jsdelivr"),u=(0,t.Uk)("."),r=(0,t.uE)('<h3 id="get-the-latest-version" tabindex="-1"><a class="header-anchor" href="#get-the-latest-version" aria-hidden="true">#</a> Get the latest version</h3><ul><li><p>Default:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- Use the short link to get latest default file --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- Omit the version number to automatically apply the latest version --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- Or manually specify the latest version --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/@waline/clien@latest/dist/Waline.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li><li><p>No Style:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- Omit the version number to automatically apply the latest version --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.noStyle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- Or manually specify the latest version --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/@waline/clien@latest/dist/Waline.noStyle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li></ul><h3 id="get-the-specified-version" tabindex="-1"><a class="header-anchor" href="#get-the-specified-version" aria-hidden="true">#</a> Get the specified version</h3><ul><li><p>Default:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- You need to modify and replace `1.0.0` with the version number you want --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client@1.0.0/dist/Waline.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li><li><p>No Style:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- You need to modify and replace `1.0.0` with the version number you want --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client@1.0.0/dist/Waline.noStyle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li></ul><h2 id="via-npm" tabindex="-1"><a class="header-anchor" href="#via-npm" aria-hidden="true">#</a> Via NPM</h2>',5),k=(0,t.Uk)("Waline client has been released to "),m={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},d=(0,t.Uk)("npm"),g=(0,t.Uk)(" via "),h=(0,t.Wm)("code",null,"@waline/client",-1),v=(0,t.Uk)(", you can install it with the following command:"),b=(0,t.Wm)("div",{class:"language-bash ext-sh"},[(0,t.Wm)("pre",{class:"language-bash"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token function"},"yarn"),(0,t.Uk)(),(0,t.Wm)("span",{class:"token function"},"add"),(0,t.Uk)(" -D @waline/client\n")])])],-1),f=(0,t.Wm)("div",{class:"language-bash ext-sh"},[(0,t.Wm)("pre",{class:"language-bash"},[(0,t.Wm)("code",null,[(0,t.Wm)("span",{class:"token function"},"npm"),(0,t.Uk)(" i -D @waline/client\n")])])],-1),w=(0,t.uE)('<p>Then, please import and use in your source file:</p><ul><li><p>Default:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Use import</span>\n<span class="token keyword">import</span> Waline <span class="token keyword">from</span> <span class="token string">&#39;@waline/client&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// or Use require</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/client&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>No Style:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Use import</span>\n<span class="token keyword">import</span> Waline <span class="token keyword">from</span> <span class="token string">&#39;@waline/client/dist/Waline.noStyle&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// or Use require</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/client/dist/Waline.noStyle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul>',2),W={render:function(n,s){const a=(0,t.up)("OutboundLink"),W=(0,t.up)("CodeGroupItem"),y=(0,t.up)("CodeGroup");return(0,t.wg)(),(0,t.j4)(t.HY,null,[e,p,l,(0,t.Wm)("p",null,[c,(0,t.Wm)("a",o,[i,(0,t.Wm)(a)]),u]),r,(0,t.Wm)("p",null,[k,(0,t.Wm)("a",m,[d,(0,t.Wm)(a)]),g,h,v]),(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[(0,t.Wm)(W,{title:"yarn"},{default:(0,t.w5)((()=>[b])),_:1}),(0,t.Wm)(W,{title:"npm"},{default:(0,t.w5)((()=>[f])),_:1})])),_:1}),w],64)}}}}]);