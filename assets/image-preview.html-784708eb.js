import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as l,c as i,b as n,e as a,f as t,a as p,d as e}from"./app-4a36fbfe.js";const u={},r=n("p",null,"有很多插件可以实现灯箱效果，下面是这些插件的例子:",-1),k={href:"https://www.lightgalleryjs.com/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://lokeshdhakar.com/projects/lightbox2/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://fancyapps.com/docs/ui/fancybox/",target:"_blank",rel:"noopener noreferrer"},g=e(`<h2 id="lightgallery" tabindex="-1"><a class="header-anchor" href="#lightgallery" aria-hidden="true">#</a> LightGallery</h2><p>在你的 HTML <code>&lt;head&gt;</code> 前写入以下内容，其中 <code>#waline-comment</code> 是你的 Waline 评论框，需要根据实际场景进行替换。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightgallery@v2/css/lightgallery-bundle.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>srciprt</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightgallery@v2/lightgallery.umd.min.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span>
      <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> img<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>images<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>gallery<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>gallery <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">lightGallery</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>gallery<span class="token punctuation">.</span><span class="token function">openGallery</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v=e(`<h2 id="lightbox2" tabindex="-1"><a class="header-anchor" href="#lightbox2" aria-hidden="true">#</a> Lightbox2</h2><p>在你的 HTML <code>&lt;head&gt;</code> 前写入以下内容，其中 <code>#waline-comment</code> 是你的 Waline 评论框，需要根据实际场景进行替换。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightbox2@v2/dist/css/lightbox.min.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightbox2@v2/dist/js/lightbox-plus-jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lightbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lightbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> images <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span>
      <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> img<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>images<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">const</span> $link <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;a /&gt;&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">href</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>src<span class="token punctuation">,</span>
      <span class="token string-property property">&#39;data-title&#39;</span><span class="token operator">:</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>alt<span class="token punctuation">,</span>
      <span class="token literal-property property">rel</span><span class="token operator">:</span> <span class="token string">&#39;lightbox&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    lightbox<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span>$link<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fancybox" tabindex="-1"><a class="header-anchor" href="#fancybox" aria-hidden="true">#</a> Fancybox</h2><p>在你的 HTML <code>&lt;head&gt;</code> 前写入以下内容，其中 <code>#waline-comment</code> 是你的 Waline 评论框，需要根据实际场景进行替换。</p><div class="language-html" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@fancyapps/ui/dist/fancybox.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@fancyapps/ui/dist/fancybox.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">Fancybox</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,6);function h(b,f){const s=c("ExternalLinkIcon");return l(),i("div",null,[r,n("ul",null,[n("li",null,[n("a",k,[a("lightGallery"),t(s)])])]),p(" - [Slimbox2](https://www.digitalia.be/software/slimbox2/) "),n("ul",null,[n("li",null,[n("a",d,[a("lightbox2"),t(s)])]),n("li",null,[n("a",m,[a("Fancybox"),t(s)])])]),p(" more "),g,p(`
## Slimbox2

在你的 HTML \`<head>\` 前写入以下内容，其中 \`#waline-comment\` 是你的 Waline 评论框，需要根据实际场景进行替换。

\`\`\`html
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/gh/cbeyls/slimbox/css/slimbox2.css"
/>
<script src="https://unpkg.com/jquery@v1/dist/jquery.min.js"><\/script>
<script src="//cdn.jsdelivr.net/gh/cbeyls/slimbox/js/slimbox2.js"><\/script>
<script>
  document.addEventListener('click', (e) => {
    const images = [].slice
      .call(document.querySelectorAll('#waline-comment .vcontent img'))
      .filter((img) => img.width > 20);

    const idx = images.indexOf(e.target);
    if (idx === -1) {
      return;
    }

    $.slimbox(e.target.src, e.target.alt, {});
  });
<\/script>
\`\`\` `),v])}const q=o(u,[["render",h],["__file","image-preview.html.vue"]]);export{q as default};