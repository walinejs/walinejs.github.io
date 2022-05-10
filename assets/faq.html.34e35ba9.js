import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as l,c as u,a,b as s,w as i,F as r,e as p,d as n}from"./app.36323dae.js";var k="/assets/vercel-update.e26735c2.png",d="/assets/cloudbase-update.b3d7aca8.jpg";const h={},g=p('<p>Waline \u8BDE\u751F\u4E4B\u521D\u5C31\u5DF2\u7ECF\u4F5C\u4E86\u5F88\u660E\u786E\u7684\u5B9A\u4F4D:</p><div class="custom-container info"><p class="custom-container-title">\u4E00\u6B3E\u5E26\u540E\u7AEF\u7684\u6781\u7B80\u98CE\u8BC4\u8BBA\u7CFB\u7EDF\u3002</p></div><p>\u4E4B\u540E\u53D1\u5E03\u7684\u6240\u6709\u7248\u672C\u90FD\u662F\u56F4\u7ED5\u8FD9\u4E2A\u5B9A\u4F4D\u7684\u4FEE\u6539\u3002</p><h2 id="\u548C-valine-\u662F\u4EC0\u4E48\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u548C-valine-\u662F\u4EC0\u4E48\u5173\u7CFB" aria-hidden="true">#</a> \u548C Valine \u662F\u4EC0\u4E48\u5173\u7CFB\uFF1F</h2><div class="custom-container info"><p class="custom-container-title">Waline = With backend Valine</p></div><h2 id="\u662F\u5426\u9700\u8981\u5728-leancloud-\u4E0A\u90E8\u7F72-valine-admin" tabindex="-1"><a class="header-anchor" href="#\u662F\u5426\u9700\u8981\u5728-leancloud-\u4E0A\u90E8\u7F72-valine-admin" aria-hidden="true">#</a> \u662F\u5426\u9700\u8981\u5728 LeanCloud \u4E0A\u90E8\u7F72 Valine-Admin\uFF1F</h2><p>\u4E0D\u9700\u8981\u3002Waline \u662F\u6570\u636E\u5B58\u50A8\uFF0C\u670D\u52A1\u7AEF\u4EE5\u53CA\u5BA2\u6237\u7AEF\u4E09\u4F4D\u4E00\u4F53\u7684\u90E8\u7F72\uFF0C\u5176\u4E2D\u670D\u52A1\u7AEF\u76F8\u5F53\u4E8E Valine \u7684 LeanCloud \u4E91\u5F15\u64CE\u3002\u670D\u52A1\u7AEF\u5305\u542B\u4E86 Valine \u6240\u7528\u4E91\u5F15\u64CE\u63D0\u4F9B\u7684\u8BC4\u8BBA\u7BA1\u7406\u548C\u90AE\u4EF6\u901A\u77E5\u7B49\u76F8\u5173\u7684\u529F\u80FD\uFF0C\u4E0D\u4F9D\u8D56\u989D\u5916\u7684 LeanCloud \u4E91\u5F15\u64CE\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u53D7\u5230 LeanCloud \u4E91\u5F15\u64CE\u4F11\u7720\u7B56\u7565\u7684\u9650\u5236\u3002</p><h2 id="\u5982\u4F55\u5347\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5347\u7EA7" aria-hidden="true">#</a> \u5982\u4F55\u5347\u7EA7\uFF1F</h2><p>Waline \u4E3B\u8981\u7531\u524D\u7AEF\u548C\u670D\u52A1\u7AEF\u4E24\u90E8\u5206\u7EC4\u6210\u3002</p><h3 id="\u524D\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF" aria-hidden="true">#</a> \u524D\u7AEF</h3><p>\u524D\u7AEF\u901A\u8FC7\u5728\u7F51\u9875\u5F15\u5165 JS \u811A\u672C\u6765\u63D2\u5165\u8BC4\u8BBA\u5217\u8868\u548C\u8BC4\u8BBA\u6846\u3002\u5927\u90E8\u5206\u573A\u666F\u4E0B\uFF0C\u94FE\u63A5\u4F1A\u4F7F\u7528\u7EBF\u4E0A CDN \u6700\u65B0\u7248\u7684\u5730\u5740\uFF0C\u4F1A\u81EA\u52A8\u5E94\u7528\u6700\u65B0\u7248\u672C\uFF0C\u65E0\u9700\u4F7F\u7528\u8005\u624B\u52A8\u66F4\u65B0\u3002</p><div class="custom-container note"><p class="custom-container-title">\u4EE5\u4E0B\u60C5\u5F62\u9700\u8981\u624B\u52A8\u66F4\u65B0</p><ol><li>CDN \u5730\u5740\u4E2D\u5F3A\u5236\u6307\u5B9A\u4E86\u7248\u672C\u53F7\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u624B\u52A8\u4FEE\u6539\u7248\u672C\u53F7\u4E3A\u6700\u65B0\u3002</li><li>\u4F7F\u7528\u4E86 NPM \u5F15\u5165\u6700\u7EC8\u5C06\u6A21\u5757\u6253\u5305\u5230\u4E86\u4EE3\u7801\u4E2D\uFF0C\u8FD9\u65F6\u5019\u9700\u8981\u4FEE\u6539\u4F9D\u8D56\u4E2D\u7684\u7248\u672C\u53F7\u4FDD\u8BC1\u4F9D\u8D56\u5728\u5B89\u88C5\u7684\u65F6\u5019\u80FD\u83B7\u53D6\u5230\u6700\u65B0\u7248\u672C\u3002</li></ol></div><h3 id="\u670D\u52A1\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF" aria-hidden="true">#</a> \u670D\u52A1\u7AEF</h3><p>\u670D\u52A1\u7AEF\u6307\u7684\u662F\u5728\u524D\u7AEF\u811A\u672C\u4E2D\u914D\u7F6E\u7684 <code>serverURL</code> \u5BF9\u5E94\u7684\u540E\u7AEF\u670D\u52A1\uFF0C\u5176\u66F4\u65B0\u89C6\u4E0D\u540C\u7684\u90E8\u7F72\u73AF\u5883\u4F1A\u7565\u6709\u533A\u522B\u3002\u670D\u52A1\u7AEF\u7684\u66F4\u65B0\u4F1A\u6BD4\u8F83\u9891\u7E41\u3002</p><h4 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h4><p>\u8FDB\u5165\u5230\u5BF9\u5E94\u7684 GitHub \u4ED3\u5E93\u4E2D\uFF0C\u4FEE\u6539 package.json \u6587\u4EF6\u4E2D\u7684 <code>@waline/vercel</code> \u7248\u672C\u53F7\u4E3A\u6700\u65B0\u7248\u672C\u5373\u53EF\u3002</p><p><img src="'+k+'" alt="vercel"></p><h4 id="deta" tabindex="-1"><a class="header-anchor" href="#deta" aria-hidden="true">#</a> Deta</h4>',18),m=n("Deta - \u5982\u4F55\u66F4\u65B0"),f=p('<h4 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h4><p>\u8FDB\u5165\u4EE3\u7801\u7F16\u8F91\u754C\u9762\uFF0C\u70B9\u51FB <kbd>\u4FDD\u5B58\u5E76\u91CD\u65B0\u5B89\u88C5\u4F9D\u8D56</kbd> \u5373\u53EF\u3002\u5982\u679C\u8FD8\u4E0D\u884C\uFF0C\u5219\u8FDB\u5165 <kbd>\u6211\u7684\u5E94\u7528</kbd> \u9009\u62E9 <kbd>\u90E8\u7F72</kbd> \u8FDB\u884C\u91CD\u65B0\u90E8\u7F72\u3002</p><div class="custom-container danger"><p class="custom-container-title">\u8B66\u544A</p><p>\u91CD\u65B0\u90E8\u7F72\u4F1A\u6E05\u7A7A\u4E4B\u524D\u7684\u6587\u4EF6\uFF0C\u5982\u679C\u4E4B\u524D\u6587\u4EF6\u4E2D\u6709\u914D\u7F6E\u7684\u8BDD\u9700\u8981\u5148\u884C\u5907\u4EFD\u3002</p></div><p><img src="'+d+'" alt="cloudBase"></p><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h4><p>\u76F4\u63A5\u8FD0\u884C <code>docker pull lizheming/waline</code> \u62C9\u53D6\u6700\u65B0\u7684\u955C\u50CF\u5373\u53EF\u3002</p><h2 id="\u53D1\u5E03\u8BC4\u8BBA\u5F88\u6162\u600E\u4E48\u529E" tabindex="-1"><a class="header-anchor" href="#\u53D1\u5E03\u8BC4\u8BBA\u5F88\u6162\u600E\u4E48\u529E" aria-hidden="true">#</a> \u53D1\u5E03\u8BC4\u8BBA\u5F88\u6162\u600E\u4E48\u529E\uFF1F</h2><p>\u56E0\u4E3A\u4E00\u4E9B\u6280\u672F\u6027\u539F\u56E0\uFF0C\u5728\u53D1\u5E03\u8BC4\u8BBA\u7684\u65F6\u5783\u573E\u90AE\u4EF6\u68C0\u6D4B\u3001\u8BC4\u8BBA\u901A\u77E5\u90FD\u662F\u4E32\u8054\u64CD\u4F5C\u3002\u5176\u4E2D\u5783\u573E\u90AE\u4EF6\u68C0\u6D4B\u4F7F\u7528\u7684\u662F\u56FD\u5916 Akismet \u63D0\u4F9B\u7684\u670D\u52A1\uFF0C\u53EF\u80FD\u8BBF\u95EE\u5F88\u6162\uFF0C\u7528\u6237\u53EF\u4EE5\u901A\u8FC7 <code>AKISMET_KEY=false</code> \u73AF\u5883\u53D8\u91CF\u5173\u95ED\u5783\u573E\u8BC4\u8BBA\u68C0\u6D4B\u529F\u80FD\u3002\u9664\u4E86\u5783\u573E\u8BC4\u8BBA\u68C0\u6D4B\u670D\u52A1\uFF0C\u8BC4\u8BBA\u901A\u77E5\u4E2D\u7684\u90AE\u4EF6\u901A\u77E5\u4E5F\u6709\u53EF\u80FD\u9020\u6210\u8D85\u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5173\u95ED\u8BC4\u8BBA\u901A\u77E5\u6D4B\u8BD5\u662F\u5426\u662F\u8BE5\u529F\u80FD\u5BFC\u81F4\u7684\u3002</p><h2 id="\u5982\u4F55\u589E\u52A0\u706F\u7BB1\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u589E\u52A0\u706F\u7BB1\u6548\u679C" aria-hidden="true">#</a> \u5982\u4F55\u589E\u52A0\u706F\u7BB1\u6548\u679C\uFF1F</h2>',9),b=n("\u6709\u5F88\u591A\u63D2\u4EF6\u53EF\u4EE5\u5B9E\u73B0\u706F\u7BB1\u6548\u679C\uFF0C\u8FD9\u91CC\u6211\u4EE5 "),_={href:"https://www.lightgalleryjs.com/",target:"_blank",rel:"noopener noreferrer"},v=n("lightGallery"),x=n(", "),y={href:"https://www.digitalia.be/software/slimbox2/",target:"_blank",rel:"noopener noreferrer"},q=n("Slimbox2"),w=n(", "),L={href:"https://lokeshdhakar.com/projects/lightbox2/",target:"_blank",rel:"noopener noreferrer"},j=n("lightbox2"),E=n(" \u548C "),V={href:"https://fancyapps.com/docs/ui/fancybox/",target:"_blank",rel:"noopener noreferrer"},B=n("Fancybox"),C=n(" \u4E3A\u4F8B\u3002"),N=p(`<h3 id="lightgallery" tabindex="-1"><a class="header-anchor" href="#lightgallery" aria-hidden="true">#</a> LightGallery</h3><p>\u5728\u4F60\u7684 HTML <code>&lt;head&gt;</code> \u524D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5176\u4E2D <code>#waline-comment</code> \u662F\u4F60\u7684 Waline \u8BC4\u8BBA\u6846\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u573A\u666F\u8FDB\u884C\u66FF\u6362\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightgallery@v2/css/lightgallery-bundle.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>srciprt</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightgallery@v2/lightgallery.umd.min.js<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> imgs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span>
      <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> img<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>imgs<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>gallery<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>gallery <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">lightGallery</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>parentNode<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>gallery<span class="token punctuation">.</span><span class="token function">openGallery</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="lightbox2" tabindex="-1"><a class="header-anchor" href="#lightbox2" aria-hidden="true">#</a> Lightbox2</h3><p>\u5728\u4F60\u7684 HTML <code>&lt;head&gt;</code> \u524D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5176\u4E2D <code>#waline-comment</code> \u662F\u4F60\u7684 Waline \u8BC4\u8BBA\u6846\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u573A\u666F\u8FDB\u884C\u66FF\u6362\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightbox2@v2/dist/css/lightbox.min.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/lightbox2@v2/dist/js/lightbox-plus-jquery.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> lightbox <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Lightbox</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> imgs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span>
      <span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">img</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> img<span class="token punctuation">.</span>width <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>imgs<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
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
</code></pre></div><h3 id="fancybox" tabindex="-1"><a class="header-anchor" href="#fancybox" aria-hidden="true">#</a> Fancybox</h3><p>\u5728\u4F60\u7684 HTML <code>&lt;head&gt;</code> \u524D\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF0C\u5176\u4E2D <code>#waline-comment</code> \u662F\u4F60\u7684 Waline \u8BC4\u8BBA\u6846\uFF0C\u9700\u8981\u6839\u636E\u5B9E\u9645\u573A\u666F\u8FDB\u884C\u66FF\u6362\u3002</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@fancyapps/ui/dist/fancybox.umd.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
  <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
  <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/@fancyapps/ui/dist/fancybox.css<span class="token punctuation">&quot;</span></span>
<span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token function">Fancybox</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token string">&#39;#waline-comment .vcontent img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,9);function W(A,D){const o=e("RouterLink"),t=e("ExternalLinkIcon");return l(),u(r,null,[g,a("p",null,[s(o,{to:"/guide/server/deta.html#deta-%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0"},{default:i(()=>[m]),_:1})]),f,a("p",null,[b,a("a",_,[v,s(t)]),x,a("a",y,[q,s(t)]),w,a("a",L,[j,s(t)]),E,a("a",V,[B,s(t)]),C]),N],64)}var G=c(h,[["render",W],["__file","faq.html.vue"]]);export{G as default};
