import{_ as t,r as p,o,c as e,a,b as c,w as l,F as u,d as n,e as k}from"./app.1848b9fc.js";const i={},r=a("p",null,"Waline V2 \u5BA2\u6237\u7AEF\u5BFC\u51FA\u4E86\u4E00\u4E2A\u54CD\u5E94\u5F0F\u7684\u7EC4\u4EF6\u3002",-1),d=n("\u6240\u6709\u7684\u5C5E\u6027\u90FD\u662F\u54CD\u5E94\u5F0F\u7684\uFF0C\u4F60\u53EF\u4EE5\u5728 "),m=n("\u53C2\u8003 \u2192 \u7EC4\u4EF6\u5C5E\u6027"),g=n(" \u627E\u5230\u5168\u90E8\u652F\u6301\u7684\u5C5E\u6027\u3002"),_=k(`<p>\u8FD9\u91CC\u662F\u4E00\u4E2A\u6848\u4F8B:</p><div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleDarkmode<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5207\u6362\u6A21\u5F0F<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WalineComment</span> <span class="token attr-name">:serverURL</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>serverURL<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>path<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:darkmode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>darmode<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRoute <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-router&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> WalineComment <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@waline/client/dist/components&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> serverURL <span class="token operator">=</span> <span class="token string">&#39;https://waline.vercel.app&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">useRoute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> darkmode <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">toggleDarkmode</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  darkmode<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token operator">!</span>darkmode<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>\u7531\u4E8E\u6211\u4EEC\u4F7F\u7528\u4E86\u54CD\u5E94\u5F0F\u7684 <code>path</code>\uFF0C\u5F53\u8DEF\u7531\u53D8\u52A8\u65F6\uFF0CWaline \u4F1A\u81EA\u52A8\u5237\u65B0\u5E76\u663E\u793A\u76F8\u5E94\u8DEF\u7531\u7684\u8BC4\u8BBA\uFF0C\u540C\u65F6\uFF0C\u5F53\u4F60\u6309\u4E0B\u5207\u6362\u6309\u94AE\u65F6\uFF0CWaline \u4F1A\u5207\u6362\u4E3B\u9898\u6A21\u5F0F\u3002</p>`,3);function v(f,h){const s=p("RouterLink");return o(),e(u,null,[r,a("p",null,[d,c(s,{to:"/reference/component.html"},{default:l(()=>[m]),_:1}),g]),_],64)}var q=t(i,[["render",v],["__file","component.html.vue"]]);export{q as default};
