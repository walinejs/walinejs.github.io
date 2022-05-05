import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{e as n}from"./app.e8231fd5.js";const a={},o=n(`<p><code>@waline/client</code> \u63D0\u4F9B\u4E86\u4E00\u4E9B CSS \u53D8\u91CF\u3002\u4F60\u53EF\u4EE5\u5F88\u8F7B\u677E\u7684\u901A\u8FC7\u8FD9\u4E9B\u53D8\u91CF\u914D\u7F6E waline \u7684\u6837\u5F0F\u3002</p><p>\u540C\u65F6 <code>@waline/client</code> \u8FD8\u62E5\u6709\u5185\u7F6E\u7684\u6697\u9ED1\u6A21\u5F0F\u652F\u6301\u3002</p><h2 id="\u63D0\u4F9B\u7684\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u63D0\u4F9B\u7684\u53D8\u91CF" aria-hidden="true">#</a> \u63D0\u4F9B\u7684\u53D8\u91CF</h2><div class="language-css ext-css"><pre class="language-css"><code>:root {
  /* \u5B57\u4F53\u5927\u5C0F */
  --waline-font-size: 16px;

  /* \u5E38\u89C4\u989C\u8272 */
  --waline-white: #fff;
  --waline-light-grey: #999;
  --waline-dark-grey: #666;

  /* \u4E3B\u9898\u8272 */
  --waline-theme-color: #27ae60;
  --waline-active-color: #2ecc71;

  /* \u5E03\u5C40\u989C\u8272 */
  --waline-color: #444;
  --waline-bgcolor: #fff;
  --waline-bgcolor-light: #f8f8f8;
  --waline-bgcolor-hover: #f0f0f0;
  --waline-border-color: #ddd;
  --waline-disable-bgcolor: #f8f8f8;
  --waline-disable-color: #bbb;
  --waline-code-bgcolor: #282c34;

  /* \u7279\u6B8A\u989C\u8272 */
  --waline-bq-color: #f0f0f0;

  /* \u5934\u50CF */
  --waline-avatar-size: 3.25rem;
  --waline-m-avatar-size: calc(var(--waline-avatar-size) * 9 / 13);

  /* \u5FBD\u7AE0 */
  --waline-badge-color: #3498db;
  --waline-badge-font-size: 0.775em;

  /* \u4FE1\u606F */
  --waline-info-bgcolor: #f8f8f8;
  --waline-info-color: #999;
  --waline-info-font-size: 0.625em;

  /* \u6E32\u67D3\u9009\u62E9 */
  --waline-border: 1px solid var(--waline-border-color);
  --waline-avatar-radius: 50%;
  --waline-box-shadow: none;
}
</code></pre></div><h2 id="\u6697\u9ED1\u6A21\u5F0F\u652F\u6301" tabindex="-1"><a class="header-anchor" href="#\u6697\u9ED1\u6A21\u5F0F\u652F\u6301" aria-hidden="true">#</a> \u6697\u9ED1\u6A21\u5F0F\u652F\u6301</h2><p>\u4F60\u53EF\u4EE5\u4F7F\u7528 <code>dark</code> \u9009\u9879\u6765\u542F\u7528 Waline \u7684\u6697\u9ED1\u6A21\u5F0F\u652F\u6301\u3002</p><p>\u901A\u5E38\u7F51\u7AD9\u4F1A\u901A\u8FC7\u4E24\u79CD\u65B9\u5F0F\u542F\u7528\u6697\u9ED1\u6A21\u5F0F\u652F\u6301:</p><ul><li>\u4F7F\u7528 <code>@media</code> \u9009\u62E9\u5668\u901A\u8FC7 <code>prefers-color-scheme</code> \u6765\u6839\u636E\u8BBE\u5907\u989C\u8272\u6A21\u5F0F\u72B6\u6001\u81EA\u52A8\u5207\u6362</li><li>\u901A\u8FC7\u4FEE\u6539 dom \u6839\u5143\u7D20 (<code>html</code> \u6216 <code>body</code>) \u7684\u5C5E\u6027\u4E0E class \u6765\u52A8\u6001\u5E94\u7528\u6216\u53D6\u6D88\u6697\u9ED1\u6A21\u5F0F\u7684\u989C\u8272\u6837\u5F0F\u3002</li></ul><p>\u5982\u679C\u4F60\u5728\u7B2C\u4E00\u79CD\u65B9\u5F0F\u7684\u7AD9\u70B9\u4E0A\u542F\u7528 Waline\uFF0C\u4F60\u53EA\u9700\u5C06 <code>dark</code> \u8BBE\u7F6E\u4E3A <code>&#39;auto&#39;</code>\u3002</p><p>\u5BF9\u4E8E\u7B2C\u4E8C\u79CD\u7AD9\u70B9\uFF0C\u4F60\u9700\u8981\u5C06 dark \u8BBE\u7F6E\u4E3A\u4EE4\u6697\u9ED1\u6A21\u5F0F\u751F\u6548\u7684 CSS \u9009\u62E9\u5668\u3002\u4EE5\u4E0B\u662F\u51E0\u4E2A\u4F8B\u5B50</p><div class="custom-container tip"><p class="custom-container-title">\u4E0D\u540C\u4E3B\u9898\u7684\u4F8B\u5B50</p><ul><li><p><strong>vuepress-theme-hope v2</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-theme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>\u3002</p></li><li><p><strong>hexo-theme-fluid</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-user-color-scheme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\u3002\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>\u3002</p></li></ul></div><h3 id="\u591C\u95F4\u6A21\u5F0F\u9ED8\u8BA4\u989C\u8272" tabindex="-1"><a class="header-anchor" href="#\u591C\u95F4\u6A21\u5F0F\u9ED8\u8BA4\u989C\u8272" aria-hidden="true">#</a> \u591C\u95F4\u6A21\u5F0F\u9ED8\u8BA4\u989C\u8272</h3><p>\u5728\u4F7F\u7528 <code>dark</code> \u9009\u9879\u914D\u7F6E\u6697\u9ED1\u6A21\u5F0F\u65F6\uFF0Cwaline \u4F1A\u9ED8\u8BA4\u4F7F\u7528\u4EE5\u4E0B\u989C\u8272:</p><div class="language-css ext-css"><pre class="language-css"><code>/* \u6839\u636E\u7528\u6237\u8BBE\u7F6E \u2193 */
darkmode-selector {
  /* \u5E38\u89C4\u989C\u8272 */
  --waline-white: #000;
  --waline-light-grey: #666;
  --waline-dark-grey: #999;

  /* \u5E03\u5C40\u989C\u8272 */
  --waline-color: #888;
  --waline-bgcolor: #1e1e1e;
  --waline-bgcolor-light: #272727;
  --waline-border-color: #333;
  --waline-disable-bgcolor: #444;
  --waline-disable-color: #272727;

  /* \u7279\u6B8A\u989C\u8272 */
  --waline-bq-color: #272727;

  /* \u5176\u4ED6\u989C\u8272 */
  --waline-info-bgcolor: #272727;
  --waline-info-color: #666;
}
</code></pre></div><p>\u5982\u679C\u4E0A\u8FF0\u989C\u8272\u4E0E\u4F60\u7684\u7AD9\u70B9\u591C\u95F4\u6A21\u5F0F\u989C\u8272\u4E0D\u540C\uFF0C\u4F60\u53EF\u4EE5\u8003\u8651\u624B\u52A8\u6DFB\u52A0 CSS \u5E76\u81EA\u884C\u8986\u76D6\u4ED6\u4EEC\u3002</p><h2 id="\u9634\u5F71\u6837\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u9634\u5F71\u6837\u5F0F" aria-hidden="true">#</a> \u9634\u5F71\u6837\u5F0F</h2><p>\u5982\u679C\u4F60\u5728\u4F7F\u7528\u4E00\u4E2A\u5927\u91CF\u8FD0\u7528\u9634\u5F71 (<code>box-shadow</code>) \u7684\u4E3B\u9898\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4FEE\u6539 <code>--waline-border</code> \u548C <code>--waline-box-shadow</code> \u6765\u66F4\u6539 Waline \u7684\u663E\u793A\u6548\u679C\uFF0C\u5982:</p><div class="language-css ext-css"><pre class="language-css"><code>:root {
  --waline-border: none;
  --waline-box-shadow: 0 12px 40px rgb(134 151 168 / 25%);
}

@media (prefers-color-scheme: dark) {
  body {
    --waline-box-shadow: 0 12px 40px #0f0e0d;
  }
}
</code></pre></div><h2 id="\u66F4\u591A" tabindex="-1"><a class="header-anchor" href="#\u66F4\u591A" aria-hidden="true">#</a> \u66F4\u591A</h2><p>\u5982\u679C\u4E0A\u9762\u7684 CSS \u53D8\u91CF\u65E0\u6CD5\u6EE1\u8DB3\u4F60\u5BF9 Waline \u6837\u5F0F\u7684\u5B9A\u5236\u8981\u6C42\uFF0C\u4F60\u53EF\u4EE5\u505C\u6B62\u5BFC\u5165 Waline \u5B98\u65B9\u63D0\u4F9B\u7684\u6837\u5F0F\uFF0C\u5E76\u81EA\u5DF1\u5236\u4F5C CSS\u3002</p>`,20);function l(d,c){return o}var s=e(a,[["render",l],["__file","style.html.vue"]]);export{s as default};
