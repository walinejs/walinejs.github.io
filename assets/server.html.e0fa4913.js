import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as s,e as t}from"./app.a670e5ca.js";const p={},e=t(`<p>\u4F60\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u5165\u53E3\u6587\u4EF6 <code>index.js</code> \u4E2D\u914D\u7F6E\u4E0B\u5217\u9009\u9879\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5982\u679C\u4F60\u4F7F\u7528\u6A21\u677F\uFF0C\u8BF7\u989D\u5916\u6CE8\u610F\u4F60\u9700\u8981\u81EA\u884C\u4FDD\u5B58\u8FD9\u4E9B\u914D\u7F6E\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4F1A\u5728\u62C9\u53D6\u5B98\u65B9\u6700\u65B0\u6A21\u677F\u65F6\u88AB\u8986\u76D6\u3002</p><p>\u5EFA\u8BAE\u5C06\u5B98\u65B9\u6700\u65B0\u6A21\u677F\u4E0A\u4F20\u5230\u81EA\u5DF1\u7684\u4ED3\u5E93\uFF0C\u5E76\u8FDB\u884C\u4FEE\u6539\u3002</p></div><h2 id="\u57FA\u672C\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u914D\u7F6E" aria-hidden="true">#</a> \u57FA\u672C\u914D\u7F6E</h2><h3 id="securedomains" tabindex="-1"><a class="header-anchor" href="#securedomains" aria-hidden="true">#</a> secureDomains</h3><ul><li>\u7C7B\u578B: <code>string | RegExp | string[] | RegExp[]</code></li></ul><p>\u5B89\u5168\u57DF\u540D\u914D\u7F6E\u3002\u914D\u7F6E\u540E\u975E\u8BE5\u57DF\u540D\u6765\u6E90\u7684\u8BF7\u6C42\u4F1A\u8FD4\u56DE 403 \u72B6\u6001\u7801\u3002\u652F\u6301\u5B57\u7B26\u4E32\u3001\u6B63\u5219\u3001\u6570\u7EC4\u7C7B\u578B\uFF0C\u4E0D\u914D\u7F6E\u8868\u793A\u5141\u8BB8\u6240\u6709\u57DF\u540D\u6765\u6E90\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">secureDomains</span><span class="token operator">:</span> <span class="token string">&#39;waline.js.org&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u4E3A\u4E86\u65B9\u4FBF\u672C\u5730\u5F00\u53D1\uFF0C<code>localhost</code> \u548C <code>127.0.0.1</code> \u4F1A\u88AB\u9ED8\u8BA4\u6DFB\u52A0\u5230\u5B89\u5168\u57DF\u540D\u5217\u8868\u4E2D\u3002</li><li>\u5F53\u5B58\u5728\u8BE5\u914D\u7F6E\u65F6\uFF0C\u73AF\u5883\u53D8\u91CF <code>SECURE_DOMAINS</code> \u4E0D\u751F\u6548\u3002</li><li>\u817E\u8BAF\u4E91\u5F00\u53D1\u9700\u8981\u540C\u65F6\u5728 <code>\u73AF\u5883 -&gt; \u5B89\u5168\u914D\u7F6E -&gt; WEB \u5B89\u5168\u57DF\u540D</code> \u4E2D\u914D\u7F6E\u5B89\u5168\u57DF\u540D</li></ul></div><h3 id="forbiddenwords" tabindex="-1"><a class="header-anchor" href="#forbiddenwords" aria-hidden="true">#</a> forbiddenWords</h3><ul><li>\u7C7B\u578B: <code>string[]</code></li></ul><p>\u8FDD\u7981\u8BCD\u914D\u7F6E\uFF0C\u5305\u542B\u8FDD\u7981\u8BCD\u7684\u5185\u5BB9\u4F1A\u76F4\u63A5\u6807\u8BB0\u4E3A\u5783\u573E\u8BC4\u8BBA\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">//index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">forbiddenWords</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;\u4E60\u8FD1\u5E73&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u6BDB\u6CFD\u4E1C&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="disallowiplist" tabindex="-1"><a class="header-anchor" href="#disallowiplist" aria-hidden="true">#</a> disallowIPList</h3><ul><li>\u7C7B\u578B: <code>string[]</code></li></ul><p>IP \u9ED1\u540D\u5355\u914D\u7F6E\uFF0C\u540D\u5355\u4E2D\u7684 IP \u8BBF\u95EE\u4F1A\u76F4\u63A5\u8FD4\u56DE 403 \u9519\u8BEF\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">disallowIPList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4.4.4.4&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="mailsubject" tabindex="-1"><a class="header-anchor" href="#mailsubject" aria-hidden="true">#</a> mailSubject</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u8BC4\u8BBA\u56DE\u590D\u90AE\u4EF6\u6807\u9898\u81EA\u5B9A\u4E49\uFF0C\u7B49\u540C\u4E8E\u73AF\u5883\u53D8\u91CF <code>MAIL_SUBJECT</code>\u3002</p><h3 id="mailtemplate" tabindex="-1"><a class="header-anchor" href="#mailtemplate" aria-hidden="true">#</a> mailTemplate</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u8BC4\u8BBA\u56DE\u590D\u90AE\u4EF6\u5185\u5BB9\u81EA\u5B9A\u4E49\uFF0C\u7B49\u540C\u4E8E\u73AF\u5883\u53D8\u91CF <code>MAIL_TEMPLATE</code>\u3002</p><h3 id="mailsubjectadmin" tabindex="-1"><a class="header-anchor" href="#mailsubjectadmin" aria-hidden="true">#</a> mailSubjectAdmin</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u65B0\u8BC4\u8BBA\u901A\u77E5\u90AE\u4EF6\u6807\u9898\u81EA\u5B9A\u4E49\uFF0C\u7B49\u540C\u4E8E\u73AF\u5883\u53D8\u91CF <code>MAIL_SUBJECT_ADMIN</code>\u3002</p><h3 id="mailtemplateadmin" tabindex="-1"><a class="header-anchor" href="#mailtemplateadmin" aria-hidden="true">#</a> mailTemplateAdmin</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>\u65B0\u8BC4\u8BBA\u901A\u77E5\u90AE\u4EF6\u5185\u5BB9\u81EA\u5B9A\u4E49\uFF0C\u7B49\u540C\u4E8E\u73AF\u5883\u53D8\u91CF <code>MAIL_TEMPLATE_ADMIN</code>\u3002</p><h3 id="qqtemplate" tabindex="-1"><a class="header-anchor" href="#qqtemplate" aria-hidden="true">#</a> QQTemplate</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>QQ \u8BC4\u8BBA\u901A\u77E5\u6A21\u677F\uFF0C\u7B49\u540C\u4E8E\u73AF\u5883\u53D8\u91CF <code>QQ_TEMPLATE</code>\u3002</p><h3 id="tgtempalte" tabindex="-1"><a class="header-anchor" href="#tgtempalte" aria-hidden="true">#</a> TGTempalte</h3><ul><li>\u7C7B\u578B: <code>string</code></li></ul><p>Telegram \u8BC4\u8BBA\u901A\u77E5\u6A21\u677F\uFF0C\u7B49\u540C\u4E8E\u73AF\u5883\u53D8\u91CF <code>TG_TEMPLATE</code>\u3002</p><h2 id="\u8BC4\u8BBA-hooks" tabindex="-1"><a class="header-anchor" href="#\u8BC4\u8BBA-hooks" aria-hidden="true">#</a> \u8BC4\u8BBA Hooks</h2><p>Waline \u63D0\u4F9B\u4E86\u4E00\u4E9B\u81EA\u5B9A\u4E49 Hook\uFF0C\u65B9\u4FBF\u7528\u6237\u6839\u636E\u81EA\u8EAB\u4E1A\u52A1\u9700\u6C42\u5BF9 Waline \u670D\u52A1\u7AEF\u884C\u4E3A\u8FDB\u884C\u5B9A\u5236\u3002</p><p>\u81EA\u5B9A\u4E49 Hook \u5728\u670D\u52A1\u7AEF\u5165\u53E3\u6587\u4EF6 <code>index.js</code> \u4E2D\u8FDB\u884C\u914D\u7F6E\u3002</p><h3 id="presave-comment" tabindex="-1"><a class="header-anchor" href="#presave-comment" aria-hidden="true">#</a> preSave(comment)</h3><p>\u53D1\u5E03\u8BC4\u8BBA\u524D\u6267\u884C\u7684\u64CD\u4F5C\u3002\u4F20\u5165\u8BC4\u8BBA\u6570\u636E\uFF0C\u5982\u679C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u5185\u5BB9\uFF0C\u5219\u63A5\u53E3\u4F1A\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u5B58\u50A8\u8BC4\u8BBA\u6570\u636E\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preSave</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> isSapm <span class="token operator">=</span> <span class="token keyword">await</span> Akismet<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>comment<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSpam<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token literal-property property">errmsg</span><span class="token operator">:</span> <span class="token string">&#39;\u8FD9\u662F\u5783\u573E\u90AE\u4EF6!&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="postsave-comment-pcomment" tabindex="-1"><a class="header-anchor" href="#postsave-comment-pcomment" aria-hidden="true">#</a> postSave(comment, pComment)</h3><p>\u8BC4\u8BBA\u53D1\u5E03\u540E\u6267\u884C\u7684\u64CD\u4F5C\u3002</p><p>\u65B9\u6CD5\u6267\u884C\u65F6\u4F1A\u4F20\u5165\u8BC4\u8BBA\u6570\u636E\uFF0C\u5982\u679C\u662F\u56DE\u590D\u8BC4\u8BBA\u7684\u8BDD\u8FD8\u4F1A\u4F20\u5165\u7236\u7EA7\u8BC4\u8BBA\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postSave</span><span class="token punctuation">(</span><span class="token parameter">comment<span class="token punctuation">,</span> pComment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">mailto</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">mail</span><span class="token operator">:</span> pComment<span class="token punctuation">.</span>mail<span class="token punctuation">,</span>
      <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u56DE\u590D\u4E86\u4F60\u7684\u8BC4\u8BBA!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="preupdate-comment" tabindex="-1"><a class="header-anchor" href="#preupdate-comment" aria-hidden="true">#</a> preUpdate(comment)</h3><p>\u8BC4\u8BBA\u5185\u5BB9\u5728\u540E\u53F0\u88AB\u66F4\u65B0\u524D\u6267\u884C\u7684\u64CD\u4F5C\u3002\u5982\u679C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u5185\u5BB9\uFF0C\u5219\u63A5\u53E3\u4F1A\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u66F4\u65B0\u8BC4\u8BBA\u6570\u636E\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;\u4F60\u65E0\u6CD5\u66F4\u65B0\u8BC4\u8BBA\u6570\u636E&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="afterupdate-comment" tabindex="-1"><a class="header-anchor" href="#afterupdate-comment" aria-hidden="true">#</a> afterUpdate(comment)</h3><p>\u8BC4\u8BBA\u5185\u5BB9\u5728\u540E\u53F0\u88AB\u66F4\u65B0\u540E\u6267\u884C\u7684\u64CD\u4F5C\u3002\u65B9\u6CD5\u6267\u884C\u65F6\u4F1A\u4F20\u5165\u8BC4\u8BBA\u6570\u636E\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postUpdate</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>comment<span class="token punctuation">.</span>objectId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> \u8BC4\u8BBA\u5DF2\u66F4\u65B0!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="predelete-commentid" tabindex="-1"><a class="header-anchor" href="#predelete-commentid" aria-hidden="true">#</a> preDelete(commentId)</h3><p>\u8BC4\u8BBA\u88AB\u5220\u9664\u524D\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u65B9\u6CD5\u6267\u884C\u65F6\u4F1A\u4F20\u5165\u9700\u8981\u64CD\u4F5C\u7684\u8BC4\u8BBA Id\u3002\u5982\u679C\u8BE5\u65B9\u6CD5\u8FD4\u56DE\u5185\u5BB9\uFF0C\u5219\u63A5\u53E3\u4F1A\u76F4\u63A5\u8FD4\u56DE\uFF0C\u4E0D\u66F4\u65B0\u8BC4\u8BBA\u6570\u636E\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">preDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;Then you can&#39;t delete comment&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="afterdelete-commentid" tabindex="-1"><a class="header-anchor" href="#afterdelete-commentid" aria-hidden="true">#</a> afterDelete(commentId)</h3><p>\u8BC4\u8BBA\u88AB\u5220\u9664\u540E\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u65B9\u6CD5\u6267\u884C\u65F6\u4F1A\u4F20\u5165\u9700\u8981\u64CD\u4F5C\u7684\u8BC4\u8BBA Id\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">postDelete</span><span class="token punctuation">(</span><span class="token parameter">commentId</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">comment </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>commentId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> has been deleted!</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></details><h3 id="avatarurl-comment" tabindex="-1"><a class="header-anchor" href="#avatarurl-comment" aria-hidden="true">#</a> avatarUrl(comment)</h3><p>\u83B7\u53D6\u5934\u50CF\u65F6\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u65B9\u6CD5\u6267\u884C\u65F6\u4F1A\u4F20\u5165\u9700\u8981\u64CD\u4F5C\u7684 comment \u5BF9\u8C61\u3002</p><details class="custom-container details"><summary>\u4F8B\u5B50</summary><p>\u8FD9\u662F\u4E00\u4E2A\u5B9E\u73B0\u81EA\u52A8\u66FF\u6362\u4F7F\u7528 QQ \u5934\u50CF\u7684\u793A\u4F8B\u51FD\u6570</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// index.js</span>
<span class="token keyword">const</span> Waline <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;@waline/vercel&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token keyword">async</span> <span class="token function">avatarUrl</span><span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span><span class="token string">&#39;(\\\\d+)@qq\\\\.com$&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> mail <span class="token operator">=</span> comment<span class="token punctuation">.</span>mail<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>mail<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> q <span class="token operator">=</span> mail<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@qq\\.com</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token string">&#39;https://q1.qlogo.cn/headimg_dl?dst_uin=&#39;</span> <span class="token operator">+</span> q <span class="token operator">+</span> <span class="token string">&#39;&amp;spec=4&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>\u6B64\u65B9\u6CD5\u6216\u4F20\u5165\u4E00\u4E2A <code>comment</code> \u5BF9\u8C61\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>comment.mail</code> \u83B7\u53D6\u90AE\u7BB1\u3002\u82E5\u8FD4\u56DE\u503C\u4E3A string \u7C7B\u578B\uFF0C\u5219\u4F1A\u76F4\u63A5\u8C03\u7528\u8FD4\u56DE\u503C\u4F5C\u4E3A\u5934\u50CF\u5730\u5740\uFF0C\u5426\u5219\u6B63\u5E38\u751F\u6210 MD5\u3002</p></details>`,59),o=[e];function c(l,i){return a(),s("div",null,o)}const k=n(p,[["render",c],["__file","server.html.vue"]]);export{k as default};