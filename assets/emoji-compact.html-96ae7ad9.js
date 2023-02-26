import{_ as t,X as p,Y as e,Z as o,$ as a,a1 as n,a2 as c,a3 as l,a0 as i,D as r}from"./framework-ae42583a.js";const u={},k=a("p",null,"本指南将指导如何兼容 Valine，以及上古版本的 Waline。",-1),m=a("h2",{id:"兼容-valine",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#兼容-valine","aria-hidden":"true"},"#"),n(" 兼容 Valine")],-1),d=i(`<p>在 legacy 版本中，你可以使用 <code>emojiCDN</code> 设置 emoji 图片地址前缀，并使用 <code>emojiMaps</code> 设置表情 title 与图片的映射。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!-- 使用与 Valine 和 Waline V1 客户端兼容的 Legacy 版本 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@waline/client@v2/dist/legacy.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>

    <span class="token comment">// 设置 CDN, 如微博表情 CDN</span>
    <span class="token literal-property property">emojiCDN</span><span class="token operator">:</span> <span class="token string">&#39;https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// 表情 title 和图片映射</span>
    <span class="token literal-property property">emojiMaps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">smile</span><span class="token operator">:</span> <span class="token string">&#39;e3/2018new_weixioa02_org.png&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">lovely</span><span class="token operator">:</span> <span class="token string">&#39;09/2018new_keai_org.png&#39;</span><span class="token punctuation">,</span>
      <span class="token comment">// ... 更多表情</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="历史遗留的样式问题" tabindex="-1"><a class="header-anchor" href="#历史遗留的样式问题" aria-hidden="true">#</a> 历史遗留的样式问题</h2><p>在历史版本中，由于 HTML 标签会被转义，Emoji 图片完全使用 Markdown 的图片语法，这导致历史版本的 Emoji 是由存粹的 <code>&lt;img&gt;</code> 标签进行渲染的。如果你使用了高清表情包，可能会产生显示大小问题。</p><p>我们在 <code>@waline/client@0.16.0</code> 起，通过改进 Markdown 的渲染方式，成功的修复了 emoji 表情尺寸。</p><p>如果你需要对此版本之前发布的评论的 Emoji 表情大小进行适配，你可以使用 CSS 选择器做到这一点:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 你需要把 \`https://img.t.sinajs.cn\` 换成自己的 CDN */</span>
<span class="token selector">.wl-content img[src^=&quot;https://img.t.sinajs.cn&quot;]</span>
<span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,7);function g(h,_){const s=r("RouterLink");return p(),e("div",null,[k,o(" more "),m,a("p",null,[n("Waline 提供了一个 "),c(s,{to:"/cookbook/legacy.html"},{default:l(()=>[n("legacy 版本")]),_:1}),n("，对 Valine 的 emoji 选项进行了兼容。")]),d])}const j=t(u,[["render",g],["__file","emoji-compact.html.vue"]]);export{j as default};
