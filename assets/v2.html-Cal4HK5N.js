import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as n,a as i}from"./app-BZeIcON_.js";const o={},t=i(`<h2 id="api-changes" tabindex="-1"><a class="header-anchor" href="#api-changes"><span>API changes</span></a></h2><p>We removed Waline&#39;s default export and instead provide the following exports:</p><ul><li><code>init</code>: behave like the old <code>Waline</code></li><li><code>version</code>: version number</li><li><code>commentCount</code>: number of updated comments</li><li><code>pageviewCount</code>: update the number of visits</li><li><code>RecentComments</code>: recent comments</li></ul><p>We changed Waline&#39;s default export to <code>init</code> named export, and to make Waline SSR friendly, V2 exports CSS separately.</p><p>In most cases, this just means the following changes:</p><div class="language-diff line-numbers-mode" data-ext="diff" data-title="diff"><pre class="shiki shiki-themes github-light one-dark-pro vp-code" style="background-color:#fff;--shiki-dark-bg:#282c34;color:#24292e;--shiki-dark:#abb2bf;" tabindex="0"><code><span class="line"><span style="color:#B31D28;--shiki-dark:#E06C75;">- &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#98C379;">+ &lt;script src=&#39;//unpkg.com/@waline/client@v2/dist/waline.js&#39;&gt;&lt;/script&gt;</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#98C379;">+ &lt;link href=&#39;//unpkg.com/@waline/client@v2/dist/waline.css&#39; rel=&#39;stylesheet&#39; /&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  &lt;script&gt;</span></span>
<span class="line"><span style="color:#B31D28;--shiki-dark:#E06C75;">-  Waline({</span></span>
<span class="line"><span style="color:#22863A;--shiki-dark:#98C379;">+  Waline.init({</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    el: &#39;#waline&#39;,</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">    serverURL: &#39;YOUR SERVER URL&#39;</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="color:#24292E;--shiki-dark:#ABB2BF;">  &lt;/script&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="options-added" tabindex="-1"><a class="header-anchor" href="#options-added"><span>Options Added</span></a></h2><ul><li>The <code>comment</code> option supports setting strings as CSS selectors.</li><li>The <code>pageview</code> option supports setting strings as CSS selectors.</li></ul><h2 id="options-renamed" tabindex="-1"><a class="header-anchor" href="#options-renamed"><span>Options Renamed</span></a></h2><ul><li><p><code>uploadImage</code> renamed to <code>imageUploader</code></p></li><li><p><code>highlight</code> renamed to <code>highlighter</code></p></li><li><p><code>previewMath</code> renamed to <code>texRenderer</code></p></li><li><p><code>visitor</code> renamed to <code>pageview</code></p></li></ul><h2 id="options-removed" tabindex="-1"><a class="header-anchor" href="#options-removed"><span>Options Removed</span></a></h2><p>The following options have long been marked as deprecated APIs in V1, they have been removed in V2.</p><ul><li><code>langMode</code>: use <code>locales</code></li><li><code>placeholder</code>: use <code>locales.placeholder</code></li><li><code>emojiCDN</code>: use <code>emoji</code></li><li><code>emojiMaps</code>: use <code>emoji</code></li><li><code>requiredFields</code>: use <code>requiredMeta</code></li><li><code>avatar</code>: use server variable <code>AVATAR_PROXY</code></li><li><code>avatarCDN</code>: use server variable <code>AVATAR_PROXY</code></li><li><code>avatarForce</code>: refresh by default</li><li><code>anonymous</code>: use <code>login</code></li><li><code>mathTagSupport</code>: use <code>texRenderer</code></li><li><code>copyRight</code>: use <code>copyright</code></li></ul><h2 id="other-changes" tabindex="-1"><a class="header-anchor" href="#other-changes"><span>Other changes</span></a></h2><h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance"><span>Instance</span></a></h3><p><code>Waline.init</code> now throws an error when the two required properties <code>el</code>, <code>serverURL</code> are invalid, instead of returning an error instance with reason.</p><p>You can use <code>try { ... } catch (err) { ... }</code> blocks to catch errors for better compatibility in case that user sets invalid options.</p><h3 id="update-behavior-changes" tabindex="-1"><a class="header-anchor" href="#update-behavior-changes"><span>Update behavior changes</span></a></h3><ul><li>Waline now supports updating all options except the <code>el</code> option via <code>Instance.update</code>.</li><li><code>path</code> parameter will reset on <code>update()</code>, which means as long as you don&#39;t pass <code>path</code> options during <code>update()</code>, it will be <code>window.location.pathname</code>.</li></ul><h3 id="comments-and-pageview-selector-changes" tabindex="-1"><a class="header-anchor" href="#comments-and-pageview-selector-changes"><span>Comments and Pageview Selector Changes</span></a></h3><p>Comments and views on Valine&#39;s selector compatibility have now been removed.</p><ul><li>The comment selector defaults to <code>&#39;.waline-comment-count&#39;</code></li><li>The pageview selector defaults to <code>&#39;.waline-pageview-count&#39;</code></li></ul><p>If you need to get a different value for a selector than the current page, it is strongly recommended to use the <code>data-path</code> attribute.</p><p>For compatibility, we still keep the previous <code>id</code> attribute support, but this compatibility will be removed in V3.</p><h3 id="css-class-changes" tabindex="-1"><a class="header-anchor" href="#css-class-changes"><span>CSS class changes</span></a></h3><p>All CSS classes changed from <code>v</code> to <code>wl-</code>.</p>`,26),s=[t];function l(c,d){return a(),n("div",null,s)}const h=e(o,[["render",l],["__file","v2.html.vue"]]),m=JSON.parse(`{"path":"/en/migration/v2.html","title":"Migration to @waline/client V2","lang":"en-US","frontmatter":{"title":"Migration to @waline/client V2","icon":"migration","description":"API changes We removed Waline's default export and instead provide the following exports: init: behave like the old Waline version: version number commentCount: number of update...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/migration/v2.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/migration/v2.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Migration to @waline/client V2"}],["meta",{"property":"og:description","content":"API changes We removed Waline's default export and instead provide the following exports: init: behave like the old Waline version: version number commentCount: number of update..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-31T08:08:43.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-31T08:08:43.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Migration to @waline/client V2\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-31T08:08:43.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"API changes","slug":"api-changes","link":"#api-changes","children":[]},{"level":2,"title":"Options Added","slug":"options-added","link":"#options-added","children":[]},{"level":2,"title":"Options Renamed","slug":"options-renamed","link":"#options-renamed","children":[]},{"level":2,"title":"Options Removed","slug":"options-removed","link":"#options-removed","children":[]},{"level":2,"title":"Other changes","slug":"other-changes","link":"#other-changes","children":[{"level":3,"title":"Instance","slug":"instance","link":"#instance","children":[]},{"level":3,"title":"Update behavior changes","slug":"update-behavior-changes","link":"#update-behavior-changes","children":[]},{"level":3,"title":"Comments and Pageview Selector Changes","slug":"comments-and-pageview-selector-changes","link":"#comments-and-pageview-selector-changes","children":[]},{"level":3,"title":"CSS class changes","slug":"css-class-changes","link":"#css-class-changes","children":[]}]}],"git":{"createdTime":1622463163000,"updatedTime":1698739723000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1}]},"readingTime":{"minutes":1.23,"words":369},"filePathRelative":"en/migration/v2.md","localizedDate":"May 31, 2021","autoDesc":true}`);export{h as comp,m as data};
