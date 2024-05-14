import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,a as t}from"./app-B6Bo4Lyg.js";const e={},p=t(`<p>There are many plugins that can achieve the lightbox effect, here are some examples of these plugins:</p><ul><li><a href="https://www.lightgalleryjs.com/" target="_blank" rel="noopener noreferrer">lightGallery</a></li></ul><ul><li><a href="https://lokeshdhakar.com/projects/lightbox2/" target="_blank" rel="noopener noreferrer">lightbox2</a></li><li><a href="https://fancyapps.com/docs/ui/fancybox/" target="_blank" rel="noopener noreferrer">Fancybox</a></li></ul><h2 id="lightgallery" tabindex="-1"><a class="header-anchor" href="#lightgallery"><span>LightGallery</span></a></h2><p>Write the following content before your HTML <code>&lt;head&gt;</code>, where <code>#waline-comment</code> is your Waline comment box, which needs to be replaced according to the actual scene.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lightbox2" tabindex="-1"><a class="header-anchor" href="#lightbox2"><span>Lightbox2</span></a></h2><p>Write the following content before your HTML <code>&lt;head&gt;</code>, where <code>#waline-comment</code> is your Waline comment box, which needs to be replaced according to the actual scene.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fancybox" tabindex="-1"><a class="header-anchor" href="#fancybox"><span>Fancybox</span></a></h2><p>Write the following content before your HTML <code>&lt;head&gt;</code>, where <code>#waline-comment</code> is your Waline comment box, which needs to be replaced according to the actual scene.</p><div class="language-html" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@fancyapps/ui/dist/fancybox.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@fancyapps/ui/dist/fancybox.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">Fancybox</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,12),o=[p];function c(l,i){return a(),s("div",null,o)}const k=n(e,[["render",c],["__file","image-preview.html.vue"]]),d=JSON.parse('{"path":"/en/cookbook/customize/image-preview.html","title":"Image Preview for Comment List","lang":"en-US","frontmatter":{"title":"Image Preview for Comment List","icon":"pic","description":"There are many plugins that can achieve the lightbox effect, here are some examples of these plugins: lightGallery lightbox2 Fancybox LightGallery Write the following content be...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/cookbook/customize/image-preview.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/cookbook/customize/image-preview.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Image Preview for Comment List"}],["meta",{"property":"og:description","content":"There are many plugins that can achieve the lightbox effect, here are some examples of these plugins: lightGallery lightbox2 Fancybox LightGallery Write the following content be..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T16:18:50.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T16:18:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Image Preview for Comment List\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-30T16:18:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"LightGallery","slug":"lightgallery","link":"#lightgallery","children":[]},{"level":2,"title":"Lightbox2","slug":"lightbox2","link":"#lightbox2","children":[]},{"level":2,"title":"Fancybox","slug":"fancybox","link":"#fancybox","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1669825130000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.03,"words":310},"filePathRelative":"en/cookbook/customize/image-preview.md","localizedDate":"November 30, 2022","autoDesc":true}');export{k as comp,d as data};