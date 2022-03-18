import{_ as d,r as l,o as s,a as r,b as a,d as o,w as n,F as h,f as i,e}from"./app.27ac7984.js";const p={},u=i('<h2 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h2><ul><li>\u7C7B\u578B: <code>string | HTMLElement</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>Waline \u7684\u521D\u59CB\u5316\u6302\u8F7D\u5668\u3002\u5FC5\u987B\u662F\u4E00\u4E2A\u6709\u6548\u7684 <strong>CSS \u9009\u62E9\u5668</strong> \u6216 HTMLELement \u5BF9\u8C61\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u4F60\u53EA\u60F3\u4F7F\u7528\u6D4F\u89C8\u91CF\u7EDF\u8BA1\u529F\u80FD\uFF0C\u8BF7\u4E0D\u8981\u8BBE\u7F6E\u8BE5\u9879\u3002</p></div><h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u662F</li></ul><p>Waline \u7684\u670D\u52A1\u7AEF\u5730\u5740\u3002</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>window.location.pathname</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u5F53\u524D <em>\u6587\u7AE0\u9875</em> \u8DEF\u5F84\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 <em>\u6587\u7AE0\u9875</em>\uFF0C\u4EE5\u4FDD\u8BC1\u6B63\u786E\u8BFB\u53D6\u8BE5 <em>\u6587\u7AE0\u9875</em> \u4E0B\u7684\u8BC4\u8BBA\u5217\u8868\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u4FDD\u8BC1\u6BCF\u4E2A <em>\u6587\u7AE0\u9875</em> \u8DEF\u5F84\u7684\u552F\u4E00\u6027\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E0D\u540C <em>\u6587\u7AE0\u9875</em> \u4E0B\u52A0\u8F7D\u76F8\u540C\u8BC4\u8BBA\u5217\u8868\u7684\u60C5\u51B5\u3002</p><p>\u4F8B\u5B50: \u5982\u679C\u4F60\u7AD9\u70B9\u7684 <code>/example/path/</code> \u548C <code>/example/path</code> \u5BF9\u5E94\u540C\u4E00\u4E2A\u9875\u9762\uFF0C\u4F60\u6700\u597D\u5C06\u5176\u8BBE\u7F6E\u4E3A <code>window.location.pathname.replace(/\\/$/,&#39;&#39;)</code>\u3002</p></div><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;zh-CN&#39;</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u591A\u8BED\u8A00\u652F\u6301\u3002</p><p>\u53EF\u9009\u503C:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',16),m=e("\u5982\u9700 "),g=a("em",null,"\u81EA\u5B9A\u4E49\u8BED\u8A00",-1),_=e("\uFF0C\u8BF7\u53C2\u8003 "),k=e("i18n"),f=e("\u3002"),b=i('<h2 id="visitor" tabindex="-1"><a class="header-anchor" href="#visitor" aria-hidden="true">#</a> visitor</h2><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u6587\u7AE0\u8BBF\u95EE\u91CF\u7EDF\u8BA1\u3002</p><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> emoji</h2><ul><li>\u7C7B\u578B: <code>(string | EmojiInfo)[]</code></li><li>\u9ED8\u8BA4\u503C: <code>[&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo&#39;]</code></li></ul>',5),v=e("\u8868\u60C5\u8BBE\u7F6E\uFF0C\u8BE6\u89C1 "),x=e("\u81EA\u5B9A\u4E49\u8868\u60C5"),w=i('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u6697\u9ED1\u6A21\u5F0F\u9002\u914D\u3002</p><ul><li>\u8BBE\u7F6E <code>&#39;auto&#39;</code> \u4F1A\u6839\u636E\u8BBE\u5907\u6697\u9ED1\u6A21\u5F0F\u81EA\u9002\u5E94\u3002</li><li>\u586B\u5165 CSS \u9009\u62E9\u5668\u4F1A\u5728\u5BF9\u5E94\u9009\u62E9\u5668\u751F\u6548\u65F6\u542F\u7528\u591C\u95F4\u6A21\u5F0F\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u9488\u5BF9\u4E0D\u540C\u4E3B\u9898\u7684\u4F8B\u5B50</p><ul><li><p><strong>Docusaurus</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-theme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>\u3002</p></li><li><p><strong>hexo-theme-fluid</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-user-color-scheme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\u3002\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>\u3002</p></li><li><p><strong>vuepress-theme-hope</strong>: \u5B83\u4F1A\u5728 <code>&lt;body&gt;</code> \u4E0A\u6DFB\u52A0<code>theme-dark</code> class \u6765\u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\u3002\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>body.theme-dark</code>\u3002</p></li></ul></div>',5),j=e("\u81EA\u5B9A\u4E49\u6837\u5F0F\u4E0E\u6697\u9ED1\u6A21\u5F0F\u8BE6\u89C1 "),y=e("\u81EA\u5B9A\u4E49\u6837\u5F0F"),q=e("\u3002"),A=i(`<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>\u7C7B\u578B: <code>string[]</code></li><li>\u9ED8\u8BA4\u503C: <code>[&#39;nick&#39;, &#39;mail&#39;, &#39;link&#39;]</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u8BC4\u8BBA\u8005\u76F8\u5173\u5C5E\u6027\u3002\u53EF\u9009\u503C: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>\u7C7B\u578B: <code>string[]</code></li><li>\u9ED8\u8BA4\u503C: <code>[]</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u8BBE\u7F6E<strong>\u5FC5\u586B\u9879</strong>\uFF0C\u9ED8\u8BA4\u533F\u540D\uFF0C\u53EF\u9009\u503C:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;, &#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;enable&#39;</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u767B\u5F55\u6A21\u5F0F\u72B6\u6001\uFF0C\u53EF\u9009\u503C:</p><ul><li><code>&#39;enable&#39;</code>: \u542F\u7528\u767B\u5F55 (\u9ED8\u8BA4)</li><li><code>&#39;disable&#39;</code>: \u7981\u7528\u767B\u5F55\uFF0C\u7528\u6237\u53EA\u80FD\u586B\u5199\u4FE1\u606F\u8BC4\u8BBA</li><li><code>&#39;force&#39;</code>: \u5F3A\u5236\u767B\u5F55\uFF0C\u7528\u6237\u5FC5\u987B\u6CE8\u518C\u5E76\u767B\u5F55\u624D\u53EF\u53D1\u5E03\u8BC4\u8BBA</li></ul><h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>\u7C7B\u578B: <code>number | [number, number]</code></li><li>\u9ED8\u8BA4\u503C: <code>0</code></li><li>\u5FC5\u8981\u6027: <code>false</code></li></ul><p>\u8BC4\u8BBA\u5B57\u6570\u9650\u5236\u3002\u586B\u5165\u5355\u4E2A\u6570\u5B57\u65F6\u4E3A\u6700\u5927\u5B57\u6570\u9650\u5236\u3002\u8BBE\u7F6E\u4E3A <code>0</code> \u65F6\u65E0\u9650\u5236\u3002</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>10</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u8BC4\u8BBA\u5217\u8868\u5206\u9875\uFF0C\u6BCF\u9875\u6761\u6570\u3002</p><h2 id="uploadimage" tabindex="-1"><a class="header-anchor" href="#uploadimage" aria-hidden="true">#</a> uploadImage</h2><ul><li>\u7C7B\u578B: <code>Function | false</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u81EA\u5B9A\u4E49\u56FE\u7247\u4E0A\u4F20\u65B9\u6CD5\uFF0C\u65B9\u4FBF\u66F4\u597D\u7684\u5B58\u50A8\u56FE\u7247\u3002\u65B9\u6CD5\u6267\u884C\u65F6\u4F1A\u5C06\u56FE\u7247\u5BF9\u8C61\u4F20\u5165\u3002</p><p>\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>false</code> \u4EE5\u7981\u7528\u56FE\u7247\u4E0A\u4F20\u529F\u80FD\u3002</p><h2 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> highlight</h2><ul><li>\u7C7B\u578B: <code>Highlighter | false</code></li><li>\u5FC5\u586B: \u5426</li></ul><p><strong>\u4EE3\u7801\u9AD8\u4EAE</strong>\uFF0C\u9ED8\u8BA4\u4F7F\u7528 <code>hanabi</code>\uFF0C\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u81EA\u5DF1\u7684\u4EE3\u7801\u9AD8\u4EAE\u5668\u3002</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>

<span class="token comment">// \u6216</span>

<span class="token punctuation">(</span>
  code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
  callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
</code></pre></div><p>\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>false</code> \u4EE5\u7981\u7528\u4EE3\u7801\u9AD8\u4EAE\u529F\u80FD\u3002</p><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> math</h2><ul><li>\u7C7B\u578B: <code>(blockMode: boolean, tex: string) =&gt; string | false</code></li><li>\u5FC5\u586B: \u5426</li></ul>`,28),C=e("\u81EA\u5B9A\u4E49\u6570\u5B66\u516C\u5F0F\u7684\u6E32\u67D3\u65B9\u6CD5\uFF0C\u65B9\u4FBF\u66F4\u597D\u7684\u9884\u89C8\u6570\u5B66\u516C\u5F0F\u3002\u66F4\u591A\u8BF7\u53C2\u8003 "),L={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},N=e("KaTeX API"),R=e(" \u6216 "),I={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},P=e("MathJax API"),T=e("\u3002"),M=i('<p>\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>false</code> \u4EE5\u7981\u6B62\u9884\u89C8\u6570\u5B66\u516C\u5F0F\u3002</p><h2 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h2><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>true</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u662F\u5426\u663E\u793A\u9875\u811A\u7248\u6743\u4FE1\u606F\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6211\u4EEC\u5E0C\u671B\u4F60\u4FDD\u6301\u6253\u5F00\u4EE5\u652F\u6301 Waline</p></div><h2 id="\u5E9F\u5F03\u7684-api" tabindex="-1"><a class="header-anchor" href="#\u5E9F\u5F03\u7684-api" aria-hidden="true">#</a> \u5E9F\u5F03\u7684 API</h2><p>\u4EE5\u4E0B API \u4ECD\u7136\u6709\u6548\uFF0C\u4F46\u5B83\u4EEC\u4F1A\u5728 V2 \u7248\u672C\u4E2D\u79FB\u9664</p><h3 id="langmode" tabindex="-1"><a class="header-anchor" href="#langmode" aria-hidden="true">#</a> langMode</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u4F7F\u7528 <code>locale</code></p></div><ul><li>\u7C7B\u578B: <code>Locale</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u81EA\u5B9A\u4E49\u8BED\u8A00\u3002</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u4F7F\u7528 <code>locale.placeholder</code></p></div><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;Just Go GO&#39;</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u8BC4\u8BBA\u6846 <strong>\u5360\u4F4D\u63D0\u793A\u7B26</strong>\u3002</p><h3 id="emojicdn" tabindex="-1"><a class="header-anchor" href="#emojicdn" aria-hidden="true">#</a> emojiCDN</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u4F7F\u7528 <code>emoji</code></p></div><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/</code></li><li>\u5FC5\u586B: \u5426</li></ul>',18),S=e("\u8BBE\u7F6E"),V=a("strong",null,"\u8868\u60C5\u5305 CDN",-1),z=e("\uFF0C\u53C2\u8003"),E=e("\u81EA\u5B9A\u4E49\u8868\u60C5"),D=i('<h3 id="emojimaps" tabindex="-1"><a class="header-anchor" href="#emojimaps" aria-hidden="true">#</a> emojiMaps</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u4F7F\u7528 <code>emoji</code></p></div><ul><li>\u7C7B\u578B: <code>Object</code></li><li>\u9ED8\u8BA4\u503C: <code>\u5FAE\u535A\u8868\u60C5\u5305</code></li><li>\u5FC5\u586B: \u5426</li></ul>',3),F=e("\u8BBE\u7F6E"),O=a("strong",null,"\u8868\u60C5\u5305\u6620\u5C04",-1),W=e("\uFF0C\u53C2\u8003"),G=e("\u81EA\u5B9A\u4E49\u8868\u60C5"),X=i('<h3 id="requiredfields" tabindex="-1"><a class="header-anchor" href="#requiredfields" aria-hidden="true">#</a> requiredFields</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u4F7F\u7528 <code>requiredMeta</code></p></div><h3 id="avatar" tabindex="-1"><a class="header-anchor" href="#avatar" aria-hidden="true">#</a> avatar</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u5EFA\u8BAE\u914D\u5408\u6700\u65B0\u7248\u672C\u7684\u670D\u52A1\u7AEF\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u7684 <code>AVATAR_PROXY</code> \u914D\u7F6E\u3002</p></div><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>mp</code></li><li>\u5FC5\u586B: \u5426</li></ul>',5),B={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},H=e("Gravatar"),J=e(" \u5934\u50CF\u5C55\u793A\u65B9\u5F0F\u3002"),Y=i("<p>\u53EF\u9009\u503C:</p><ul><li><code>&#39;&#39;</code></li><li><code>&#39;mp&#39;</code></li><li><code>&#39;identicon&#39;</code></li><li><code>&#39;monsterid&#39;</code></li><li><code>&#39;wavatar&#39;</code></li><li><code>&#39;retro&#39;</code></li><li><code>&#39;robohash&#39;</code></li><li><code>&#39;hide&#39;</code></li></ul>",2),U=e("\u66F4\u591A\u4FE1\u606F\uFF0C\u8BF7\u67E5\u770B "),K=e("\u5934\u50CF\u914D\u7F6E"),$=e("\u3002"),Q=i('<h3 id="avatarforce" tabindex="-1"><a class="header-anchor" href="#avatarforce" aria-hidden="true">#</a> avatarForce</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u5EFA\u8BAE\u914D\u5408\u6700\u65B0\u7248\u672C\u7684\u670D\u52A1\u7AEF\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u7684 <code>AVATAR_PROXY</code> \u914D\u7F6E\u3002</p></div><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u6BCF\u6B21\u8BBF\u95EE\u662F\u5426<strong>\u5F3A\u5236</strong>\u62C9\u53D6\u6700\u65B0\u7684<em>\u8BC4\u8BBA\u5217\u8868\u5934\u50CF</em></p><blockquote><p>\u4E0D\u63A8\u8350\u8BBE\u7F6E\u4E3A <code>true</code>\uFF0C\u76EE\u524D\u7684<em>\u8BC4\u8BBA\u5217\u8868\u5934\u50CF</em>\u4F1A\u81EA\u52A8\u5E26\u4E0A <code>Waline</code> \u7684\u7248\u672C\u53F7</p></blockquote><h3 id="avatarcdn" tabindex="-1"><a class="header-anchor" href="#avatarcdn" aria-hidden="true">#</a> avatarCDN</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u5EFA\u8BAE\u914D\u5408\u6700\u65B0\u7248\u672C\u7684\u670D\u52A1\u7AEF\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u7684 <code>AVATAR_PROXY</code> \u914D\u7F6E\u3002</p></div><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>https://seccdn.libravatar.org/avatar/</code></li><li>\u5FC5\u586B: \u5426</li></ul>',8),Z=e("\u8BBE\u7F6E\u5934\u50CF CDN \u5730\u5740\u3002\u53EF\u4F7F\u7528\u4EFB\u4F55\u4E0E "),ee={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},ae=e("Gravatar"),oe=e(" API \u517C\u5BB9\u7684\u670D\u52A1\u3002"),ie=i('<h3 id="anonymous" tabindex="-1"><a class="header-anchor" href="#anonymous" aria-hidden="true">#</a> anonymous</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u4F7F\u7528 <code>login</code></p></div><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u662F\u5426\u5141\u8BB8\u767B\u5F55\u8BC4\u8BBA\u3002\u9ED8\u8BA4\u60C5\u51B5\u662F\u4E24\u8005\u90FD\u652F\u6301\uFF0C\u8BBE\u7F6E\u4E3A <code>true</code> \u8868\u793A\u4EC5\u652F\u6301\u533F\u540D\u8BC4\u8BBA\uFF0C<code>false</code> \u8868\u793A\u4EC5\u652F\u6301\u767B\u5F55\u8BC4\u8BBA\u3002</p><h3 id="mathtagsupport" tabindex="-1"><a class="header-anchor" href="#mathtagsupport" aria-hidden="true">#</a> mathTagSupport</h3><div class="custom-container warning"><p class="custom-container-title">\u5DF2\u8FC7\u65F6</p><p>\u8BF7\u5728\u670D\u52A1\u7AEF\u4F7F\u7528 mathjax \u6E32\u67D3\u516C\u5F0F\u3002</p></div><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u662F\u5426\u6CE8\u5165\u6838\u5916\u6837\u5F0F\u4EE5\u517C\u5BB9 <code>&lt;math&gt;</code> \u663E\u793A\u3002</p><h3 id="copyright-1" tabindex="-1"><a class="header-anchor" href="#copyright-1" aria-hidden="true">#</a> copyRight</h3><div class="custom-container danger"><p class="custom-container-title">\u5DF2\u5E9F\u5F03</p><p>\u8BF7\u4F7F\u7528 <code>copyright</code></p></div>',10);function te(ne,ce){const t=l("RouterLink"),c=l("ExternalLinkIcon");return s(),r(h,null,[u,a("p",null,[m,g,_,o(t,{to:"/guide/client/i18n.html"},{default:n(()=>[k]),_:1}),f]),b,a("p",null,[v,o(t,{to:"/guide/client/emoji.html"},{default:n(()=>[x]),_:1})]),w,a("p",null,[j,o(t,{to:"/guide/client/style.html"},{default:n(()=>[y]),_:1}),q]),A,a("p",null,[C,a("a",L,[N,o(c)]),R,a("a",I,[P,o(c)]),T]),M,a("p",null,[S,V,z,o(t,{to:"/guide/client/emoji.html"},{default:n(()=>[E]),_:1})]),D,a("p",null,[F,O,W,o(t,{to:"/guide/client/emoji.html"},{default:n(()=>[G]),_:1})]),X,a("p",null,[a("a",B,[H,o(c)]),J]),Y,a("p",null,[U,o(t,{to:"/guide/client/avatar.html"},{default:n(()=>[K]),_:1}),$]),Q,a("p",null,[Z,a("a",ee,[ae,o(c)]),oe]),ie],64)}var de=d(p,[["render",te]]);export{de as default};