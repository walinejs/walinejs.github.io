"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5074],{5698:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-058f99fc",path:"/guide/client/import.html",title:"引入客户端",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="引入客户端" tabindex="-1"><a class="header-anchor" href="#引入客户端" aria-hidden="true">#</a> 引入客户端</h1>\n<p>Waline 提供默认 (自带样式) 和不带样式两种版本的客户端文件。你可以通过多种方式引入 Waline。</p>\n',headers:[{level:2,title:"通过 CDN",slug:"通过-cdn",children:[{level:3,title:"获取最新版本",slug:"获取最新版本",children:[]},{level:3,title:"获取指定版本",slug:"获取指定版本",children:[]}]},{level:2,title:"通过 NPM",slug:"通过-npm",children:[]}],filePathRelative:"guide/client/import.md",git:{updatedTime:164371952e4,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},2863:(n,s,a)=>{a.r(s),a.d(s,{default:()=>W});var t=a(8917);const p=(0,t._)("h1",{id:"引入客户端",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#引入客户端","aria-hidden":"true"},"#"),(0,t.Uk)(" 引入客户端")],-1),e=(0,t._)("p",null,"Waline 提供默认 (自带样式) 和不带样式两种版本的客户端文件。你可以通过多种方式引入 Waline。",-1),l=(0,t._)("h2",{id:"通过-cdn",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#通过-cdn","aria-hidden":"true"},"#"),(0,t.Uk)(" 通过 CDN")],-1),c=(0,t.Uk)("推荐使用 "),o={href:"https://cdn.jsdelivr.net/npm/@waline/client/",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("jsdelivr"),u=(0,t.Uk)("。"),r=(0,t.uE)('<h3 id="获取最新版本" tabindex="-1"><a class="header-anchor" href="#获取最新版本" aria-hidden="true">#</a> 获取最新版本</h3><ul><li><p>默认:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- 使用短链接获取最新的默认文件 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 省略版本号以自动应用最新版本 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 或者手动指定最新版本 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/@waline/clien@latest/dist/Waline.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li><li><p>不带样式:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- 省略版本号以自动应用最新版本 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.noStyle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n<span class="token comment">&lt;!-- 或者手动指定最新版本 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/@waline/clien@latest/dist/Waline.noStyle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li></ul><h3 id="获取指定版本" tabindex="-1"><a class="header-anchor" href="#获取指定版本" aria-hidden="true">#</a> 获取指定版本</h3><ul><li><p>默认:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- 你需要自行修改替换 `1.0.0` 为你想要的版本号 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client@1.0.0/dist/Waline.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li><li><p>不带样式:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- 你需要自行修改替换 `1.0.0` 为你想要的版本号 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client@1.0.0/dist/Waline.noStyle.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div></li></ul><h2 id="通过-npm" tabindex="-1"><a class="header-anchor" href="#通过-npm" aria-hidden="true">#</a> 通过 NPM</h2>',5),k=(0,t.Uk)("Waline 客户端已通过 "),d=(0,t._)("code",null,"@waline/client",-1),m=(0,t.Uk)(" 发布到 "),g={href:"https://www.npmjs.com/package/@waline/client",target:"_blank",rel:"noopener noreferrer"},h=(0,t.Uk)("npm"),b=(0,t.Uk)("，你可以通过以下命令安装:"),v=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"yarn"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"add"),(0,t.Uk)(" -D @waline/client\n")])])],-1),w=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"npm"),(0,t.Uk)(" i -D @waline/client\n")])])],-1),f=(0,t.uE)('<p>之后请在你的源文件中引入并使用:</p><ul><li><p>默认:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 使用 import</span>\n<span class="token keyword">import</span> Waline <span class="token keyword">from</span> <span class="token string">&#39;@waline/client&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者使用 require</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/client&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>不带样式:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 使用 import</span>\n<span class="token keyword">import</span> Waline <span class="token keyword">from</span> <span class="token string">&#39;@waline/client/dist/Waline.noStyle&#39;</span><span class="token punctuation">;</span>\n<span class="token comment">// 或者使用 require</span>\n<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/client/dist/Waline.noStyle&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul>',2),q={},W=(0,a(6959).Z)(q,[["render",function(n,s){const a=(0,t.up)("OutboundLink"),q=(0,t.up)("CodeGroupItem"),W=(0,t.up)("CodeGroup");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,l,(0,t._)("p",null,[c,(0,t._)("a",o,[i,(0,t.Wm)(a)]),u]),r,(0,t._)("p",null,[k,d,m,(0,t._)("a",g,[h,(0,t.Wm)(a)]),b]),(0,t.Wm)(W,null,{default:(0,t.w5)((()=>[(0,t.Wm)(q,{title:"yarn"},{default:(0,t.w5)((()=>[v])),_:1}),(0,t.Wm)(q,{title:"npm"},{default:(0,t.w5)((()=>[w])),_:1})])),_:1}),f],64)}]])}}]);