import{r as t,o as p,c as e,a,b as o,w as c,F as l,d as n,e as u}from"./app.8dfef0a6.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=a("p",null,"Waline V2 client exports a Vue Component.",-1),d=n("All properties are reactive, you can find all supported properties in "),m=n("Reference \u2192 Component Properties"),g=n("."),h=u(`<h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleDarkmode<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362\u6A21\u5F0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waline</span> <span class="token attr-name">:serverURL</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serverURL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:darkmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>darkmode<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> Waline <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@waline/client/dist/component&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> serverURL <span class="token operator">=</span> <span class="token string">&#39;https://waline.vercel.app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> darkmode <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">toggleDarkmode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  darkmode<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>darkmode<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>Since we use reactive <code>path</code>, when the route changes, Waline will automatically refresh and display the comments of the corresponding route, and at the same time, when you click the toggle button, Waline will switch the theme mode.</p>`,3);function f(_,v){const s=t("RouterLink");return p(),e(l,null,[i,a("p",null,[d,o(s,{to:"/en/reference/component.html"},{default:c(()=>[m]),_:1}),g]),h],64)}var q=k(r,[["render",f],["__file","component.html.vue"]]);export{q as default};