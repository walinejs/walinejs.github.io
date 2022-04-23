import{_ as e,e as a}from"./app.1848b9fc.js";const n={},s=a(`<h2 id="api-changes" tabindex="-1"><a class="header-anchor" href="#api-changes" aria-hidden="true">#</a> API changes</h2><p>We removed Waline&#39;s default export and instead provide the following exports:</p><ul><li><code>init</code>: behave like the old <code>Waline</code></li><li><code>version</code>: version number</li><li><code>commentCount</code>: number of updated comments</li><li><code>pageviewCount</code>: update the number of visits</li><li><code>widgets</code>: other widgets</li></ul><p>We changed Waline&#39;s default export to <code>init</code> named export, and to make Waline SSR friendly, V2 exports CSS separately.</p><p>In most cases, this just means the following changes:</p><div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;link rel=&#39;style&#39; href=&#39;//cdn.jsdelivr.net/npm/@waline/client@v2/dist/waline.css&#39; /&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client@v2&#39;&gt;&lt;/script&gt;
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  Waline({
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline.init({
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#waline&#39;,
</span><span class="token prefix unchanged"> </span><span class="token line">   serverURL: &#39;YOUR SERVER URL&#39;
</span><span class="token prefix unchanged"> </span><span class="token line"> });
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;
</span></span></code></pre></div><h2 id="new-options" tabindex="-1"><a class="header-anchor" href="#new-options" aria-hidden="true">#</a> New options</h2><ul><li>The <code>comment</code> option supports setting strings as CSS selectors.</li><li>The <code>pageview</code> option supports setting strings as CSS selectors.</li></ul><h2 id="options-renamed" tabindex="-1"><a class="header-anchor" href="#options-renamed" aria-hidden="true">#</a> Options Renamed</h2><ul><li><p><code>uploadImage</code> renamed to <code>imageUploader</code></p></li><li><p><code>highlight</code> renamed to <code>highlighter</code></p></li><li><p><code>math</code> renamed to <code>texRenderer</code></p></li><li><p><code>visitor</code> renamed to <code>pageview</code></p></li></ul><h2 id="options-removed" tabindex="-1"><a class="header-anchor" href="#options-removed" aria-hidden="true">#</a> Options Removed</h2><p>The following options have long been marked as deprecated APIs in V1, they have been removed in V2.</p><ul><li><code>langMode</code></li><li><code>placeholder</code></li><li><code>emojiCDN</code></li><li><code>emojiMaps</code></li><li><code>requiredFields</code></li><li><code>avatar</code></li><li><code>avatarCDN</code></li><li><code>avatarForce</code></li><li><code>anonymous</code></li><li><code>mathTagSupport</code></li><li><code>copyRight</code></li></ul><h2 id="other-changes" tabindex="-1"><a class="header-anchor" href="#other-changes" aria-hidden="true">#</a> Other changes</h2><h3 id="instance" tabindex="-1"><a class="header-anchor" href="#instance" aria-hidden="true">#</a> Instance</h3><p><code>Waline.init</code> now throws an error when the two required properties <code>el</code>, <code>serverURL</code> are invalid, instead of returning an error instance with reason.</p><p>You can use <code>try { ... } catch (err) { ... }</code> blocks to catch errors for better compatibility in case that user sets invalid options.</p><h3 id="update-behavior-changes" tabindex="-1"><a class="header-anchor" href="#update-behavior-changes" aria-hidden="true">#</a> Update behavior changes</h3><ul><li>Waline now supports updating all options except the <code>el</code> option via <code>Instance.update</code>.</li><li><code>path</code> parameter will reset on <code>update()</code>, which means as long as you don&#39;t pass <code>path</code> options during <code>update()</code>, it will be <code>window.location.pathname</code>.</li></ul><h3 id="comments-and-pageview-selector-changes" tabindex="-1"><a class="header-anchor" href="#comments-and-pageview-selector-changes" aria-hidden="true">#</a> Comments and Pageview Selector Changes</h3><p>Comments and views on Valine&#39;s selector compatibility have now been removed.</p><ul><li>The comment selector defaults to <code>&#39;.waline-comment-count&#39;</code></li><li>The pageview selector defaults to <code>&#39;.waline-pageview-count&#39;</code></li></ul><p>If you need to get a different value for a selector than the current page, it is strongly recommended to use the <code>data-path</code> attribute.</p><p>For compatibility, we still keep the previous <code>id</code> attribute support, but this compatibility will be removed in V3.</p><h3 id="css-class-changes" tabindex="-1"><a class="header-anchor" href="#css-class-changes" aria-hidden="true">#</a> CSS class changes</h3><p>All CSS classes changed from <code>v</code> to <code>wl-</code>.</p>`,26);function o(i,t){return s}var c=e(n,[["render",o],["__file","client.html.vue"]]);export{c as default};
