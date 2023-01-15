import{ac as t,C as e,D as o,H as p,A as n,P as s,K as c,ae as i,ad as l,S as r}from"./framework-a094cba0.js";const u={},k=n("p",null,"This cookbook will show you how to display emoji well with Valine, as well as older versions of Waline.",-1),m=n("h2",{id:"compatible-with-valine",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#compatible-with-valine","aria-hidden":"true"},"#"),s(" Compatible with Valine")],-1),d=l(`<p>In legacy version, you can use <code>emojiCDN</code> to set emoji image link prefix, and use <code>emojiMaps</code> to set the mapping between emoji title and image.</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- Use Legacy version compatible with Valine and Waline V1 clients --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/legacy.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// Set CDN, such as Weibo emoticon CDN</span>
    <span class="token literal-property property">emojiCDN</span><span class="token operator">:</span> <span class="token string">&#39;https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// emoticon title and image map</span>
    <span class="token literal-property property">emojiMaps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">smile</span><span class="token operator">:</span> <span class="token string">&#39;e3/2018new_weixioa02_org.png&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lovely</span><span class="token operator">:</span> <span class="token string">&#39;09/2018new_keai_org.png&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ... more expressions</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="historical-style-issues" tabindex="-1"><a class="header-anchor" href="#historical-style-issues" aria-hidden="true">#</a> Historical Style Issues</h2><p>In the historical version, since the HTML tags will be escaped, the Emoji images use the Markdown image syntax completely, which causes the Emoji of the historical version to be rendered by the pure <code>&lt;img&gt;</code> tag. If you use HD emojis, there may be display size issues.</p><p>Since <code>@waline/client@0.16.0</code>, we have successfully fixed the emoji size by improving the rendering method of Markdown.</p><p>If you need to adapt the emoji size of comments posted before this version, you can do so using CSS selectors:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* You need to replace \`https://img.t.sinajs.cn\` with your own CDN */</span>
<span class="token selector">.wl-content img[src^=&quot;https://img.t.sinajs.cn&quot;]</span>
<span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function h(g,y){const a=r("RouterLink");return e(),o("div",null,[k,p(" more "),m,n("p",null,[s("Valine provides a "),c(a,{to:"/en/cookbook/legacy.html"},{default:i(()=>[s("legacy version")]),_:1}),s(" that is compatible with Valine's emoji options.")]),d])}const v=t(u,[["render",h],["__file","emoji-compact.html.vue"]]);export{v as default};