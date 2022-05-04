import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as i}from"./app.1819a339.js";const d={},c=i(`<h2 id="api-\u66F4\u6539" tabindex="-1"><a class="header-anchor" href="#api-\u66F4\u6539" aria-hidden="true">#</a> API \u66F4\u6539</h2><p>\u6211\u4EEC\u53D6\u6D88\u4E86 Waline \u7684\u9ED8\u8BA4\u5BFC\u51FA\uFF0C\u8FDB\u800C\u63D0\u4F9B\u4E0B\u5217\u5BFC\u51FA:</p><ul><li><code>init</code>: \u884C\u4E3A\u6A21\u5F0F\u540C\u65E7\u7684 <code>Waline</code></li><li><code>version</code>: \u7248\u672C\u53F7</li><li><code>commentCount</code>: \u66F4\u65B0\u8BC4\u8BBA\u6570</li><li><code>pageviewCount</code>: \u66F4\u65B0\u8BBF\u95EE\u6570</li><li><code>RecentComments</code>: \u6700\u8FD1\u8BC4\u8BBA</li></ul><p>\u6211\u4EEC\u5C06 Waline \u7684\u9ED8\u8BA4\u5BFC\u51FA\u6539\u4E3A <code>init</code> \u547D\u540D\u5BFC\u51FA\uFF0C\u540C\u65F6\u4E3A\u4E86\u4F7F Waline SSR \u53CB\u597D\uFF0CV2 \u5C06 CSS \u5355\u72EC\u8F93\u51FA\u3002</p><p>\u5728\u5927\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u8FD9\u53EA\u610F\u5473\u7740\u4E0B\u5217\u66F4\u6539:</p><div class="language-diff ext-diff"><pre class="language-diff"><code>- &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;
+ &lt;script src=&#39;//unpkg.com/@waline/client@v2/dist/waline.js&#39;&gt;&lt;/script&gt;
+ &lt;link href=&#39;//unpkg.com/@waline/client@v2/dist/waline.css&#39; rel=&#39;stylesheet&#39; /&gt;

  &lt;script&gt;
-  Waline({
+  Waline.init({
    el: &#39;#waline&#39;,
    serverURL: &#39;YOUR SERVER URL&#39;
  });
  &lt;/script&gt;
</code></pre></div><h2 id="\u65B0\u589E\u9009\u9879" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u9009\u9879" aria-hidden="true">#</a> \u65B0\u589E\u9009\u9879</h2><ul><li><code>comment</code> \u9009\u9879\u652F\u6301\u8BBE\u7F6E\u5B57\u7B26\u4E32\u4F5C\u4E3A CSS \u9009\u62E9\u5668\u3002</li><li><code>pageview</code> \u9009\u9879\u652F\u6301\u8BBE\u7F6E\u5B57\u7B26\u4E32\u4F5C\u4E3A CSS \u9009\u62E9\u5668\u3002</li></ul><h2 id="\u9009\u9879\u91CD\u547D\u540D" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u91CD\u547D\u540D" aria-hidden="true">#</a> \u9009\u9879\u91CD\u547D\u540D</h2><ul><li><p><code>uploadImage</code> \u66F4\u540D\u4E3A <code>imageUploader</code></p></li><li><p><code>highlight</code> \u66F4\u540D\u4E3A <code>highlighter</code></p></li><li><p><code>previewMath</code> \u66F4\u540D\u4E3A <code>texRenderer</code></p></li><li><p><code>visitor</code> \u66F4\u540D\u4E3A <code>pageview</code></p></li></ul><h2 id="\u9009\u9879\u79FB\u9664" tabindex="-1"><a class="header-anchor" href="#\u9009\u9879\u79FB\u9664" aria-hidden="true">#</a> \u9009\u9879\u79FB\u9664</h2><p>\u4EE5\u4E0B\u9009\u9879\u5DF2\u5728 V1 \u4E2D\u957F\u65F6\u95F4\u6807\u8BB0\u4E3A\u5E9F\u5F03 API\uFF0C\u5B83\u4EEC\u5DF2\u5728 V2 \u4E2D\u79FB\u9664\u3002</p><ul><li><code>langMode</code></li><li><code>placeholder</code></li><li><code>emojiCDN</code></li><li><code>emojiMaps</code></li><li><code>requiredFields</code></li><li><code>avatar</code></li><li><code>avatarCDN</code></li><li><code>avatarForce</code></li><li><code>anonymous</code></li><li><code>mathTagSupport</code></li><li><code>copyRight</code></li></ul><h2 id="\u5176\u4ED6\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u53D8\u66F4" aria-hidden="true">#</a> \u5176\u4ED6\u53D8\u66F4</h2><h3 id="\u5B9E\u4F8B\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u53D8\u66F4" aria-hidden="true">#</a> \u5B9E\u4F8B\u53D8\u66F4</h3><p>\u73B0\u5728 <code>Waline.init</code> \u4F1A\u5728 <code>el</code>, <code>serverURL</code> \u4E24\u4E2A\u5FC5\u586B\u5C5E\u6027\u975E\u6CD5\u65F6\u76F4\u63A5\u629B\u51FA\u9519\u8BEF\uFF0C\u800C\u4E0D\u662F\u8FD4\u56DE\u4E00\u4E2A\u9519\u8BEF\u5B9E\u4F8B\u8868\u660E\u539F\u56E0\u3002</p><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>try { ... } catch (err) { ... }</code> \u5757\u6765\u6355\u83B7\u9519\u8BEF\u4EE5\u66F4\u597D\u7684\u517C\u5BB9\u7528\u6237\u914D\u7F6E\u9519\u8BEF\u7684\u60C5\u51B5\u3002</p><h3 id="\u66F4\u65B0\u884C\u4E3A\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0\u884C\u4E3A\u53D8\u66F4" aria-hidden="true">#</a> \u66F4\u65B0\u884C\u4E3A\u53D8\u66F4</h3><ul><li>Waline \u73B0\u5728\u652F\u6301\u901A\u8FC7 <code>Instance.update</code> \u66F4\u65B0 <code>el</code> \u9009\u9879\u4E4B\u5916\u7684\u6240\u6709\u9009\u9879\u3002</li><li><code>path</code> \u53C2\u6570\u5728 <code>update()</code> \u65F6\u4F1A\u88AB\u91CD\u7F6E\uFF0C\u8FD9\u610F\u5473\u7740\u53EA\u8981\u4F60\u4E0D\u4F20\u5165 <code>path</code>\uFF0C\u5B83\u5C31\u4F1A\u88AB\u91CD\u7F6E\u4E3A <code>window.location.pathname</code>\u3002</li></ul><h3 id="\u8BC4\u8BBA\u4E0E\u6D4F\u89C8\u91CF\u9009\u62E9\u5668\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#\u8BC4\u8BBA\u4E0E\u6D4F\u89C8\u91CF\u9009\u62E9\u5668\u53D8\u66F4" aria-hidden="true">#</a> \u8BC4\u8BBA\u4E0E\u6D4F\u89C8\u91CF\u9009\u62E9\u5668\u53D8\u66F4</h3><p>\u73B0\u5728\uFF0C\u8BC4\u8BBA\u4E0E\u6D4F\u89C8\u91CF\u5173\u4E8E Valine \u7684\u9009\u62E9\u5668\u517C\u5BB9\u5DF2\u88AB\u79FB\u9664\u3002</p><ul><li>\u8BC4\u8BBA\u9009\u62E9\u5668\u9ED8\u8BA4\u4E3A <code>&#39;.waline-comment-count&#39;</code></li><li>\u6D4F\u89C8\u91CF\u9009\u62E9\u5668\u9ED8\u8BA4\u4E3A <code>&#39;.waline-pageview-count&#39;</code></li></ul><p>\u5982\u679C\u4F60\u9700\u8981\u4E3A\u67D0\u4E2A\u9009\u62E9\u5668\u83B7\u53D6\u4E0D\u540C\u4E8E\u5F53\u524D\u9875\u9762\u7684\u5BF9\u5E94\u503C\u65F6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u4F7F\u7528 <code>data-path</code> \u5C5E\u6027\u3002</p><p>\u4E3A\u4E86\u517C\u5BB9\u6027\uFF0C\u6211\u4EEC\u4ECD\u7136\u4FDD\u7559\u5148\u524D\u7684 <code>id</code> \u5C5E\u6027\u652F\u6301\uFF0C\u4F46\u6B64\u517C\u5BB9\u4F1A\u5728 V3 \u79FB\u9664\u3002</p><h3 id="css-\u7C7B\u53D8\u66F4" tabindex="-1"><a class="header-anchor" href="#css-\u7C7B\u53D8\u66F4" aria-hidden="true">#</a> CSS \u7C7B\u53D8\u66F4</h3><p>\u6240\u6709 CSS \u7C7B\u4ECE <code>v</code> \u5F00\u5934\u6539\u4E3A <code>wl-</code> \u5F00\u5934\u3002</p>`,26);function a(o,l){return c}var r=e(d,[["render",a],["__file","client.html.vue"]]);export{r as default};
