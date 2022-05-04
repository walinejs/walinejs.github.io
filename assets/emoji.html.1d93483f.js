import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as l,c,a as e,b as i,F as p,e as a,d as t}from"./app.e487de28.js";const d={},r=a(`<p>You can customize the emoji of the comment box by setting <code>emoji</code> option, you should set it to an <strong>array</strong> containing <em>preset link</em> or <em>preset config object</em>. If you don&#39;t want it, just set it to <code>false</code>.</p><h2 id="presets" tabindex="-1"><a class="header-anchor" href="#presets" aria-hidden="true">#</a> Presets</h2><p>Waline provides a series of emoji presets that can be used out of box. You can add them directly to the <code>emoji</code> options:</p><ul><li><p>Alus</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/alus
</code></pre></div></li><li><p>Bilibili</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/bilibili
</code></pre></div></li><li><p>QQ</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/qq
</code></pre></div></li><li><p>Tieba</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tieba
</code></pre></div></li><li><p>Twemoji</p><ul><li><p>Emoji:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-emoji
</code></pre></div></li></ul><details class="custom-block details"><summary>Others presets</summary><ul><li><p>Full: (Not recommand)</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw
</code></pre></div></li><li><p>Body:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-body
</code></pre></div></li><li><p>Food:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-food
</code></pre></div></li><li><p>Natural:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-natural
</code></pre></div></li><li><p>Object:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-object
</code></pre></div></li><li><p>Symbol:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-symbol
</code></pre></div></li><li><p>People:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-people
</code></pre></div></li><li><p>Sport:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-sport
</code></pre></div></li><li><p>Time:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-time
</code></pre></div></li><li><p>Travel:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-travel
</code></pre></div></li><li><p>Weather:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-weather
</code></pre></div></li><li><p>Flag:</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/tw-flag
</code></pre></div></li></ul></details></li><li><p>Weibo</p><div class="language-http ext-http"><pre class="language-http"><code>https://unpkg.com/@waline/emojis@1.0.1/weibo
</code></pre></div></li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Waline DO NOT have any copright of above emojis, use them at your own risk.</p></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  serverURL: &#39;&lt;YOUR SERVER URL&gt;&#39;,

  // Set emoji to Weibo and Bilibili
  emoji: [
    &#39;//unpkg.com/@waline/emojis@1.0.1/weibo&#39;,
    &#39;//unpkg.com/@waline/emojis@1.0.1/bilibili&#39;,
  ],
});
</code></pre></div><h2 id="creating-own-preset" tabindex="-1"><a class="header-anchor" href="#creating-own-preset" aria-hidden="true">#</a> Creating own preset</h2><p>Besides presets provided by Waline, you can create one by yourself.</p><p>You need to place all emoticons in an accessible server folder, then create <code>info.json</code> in the root directory and set the following options:</p><ul><li><p><code>name</code>: emoji name on the tab</p></li><li><p><code>prefix</code> (optional): The general prefix of images&#39; filename</p><div class="custom-container tip"><p class="custom-container-title">Recommanded</p><p>When you set multiple emojis tabs, we recommend you to add a common prefix to all emoji images in one tab to prevent conflicts with other emoji titles.</p></div></li><li><p><code>type</code> (optional): type of the picture, which will be used as file extension</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The emojis should be a set of images with same size and same file format. If you DO need to use different types of images, please leave this blank and manually specify the suffix in the next two options.</p></div></li><li><p><code>icon</code>: filename of the icon image used in tab (requirement is the same as <code>items</code>)</p></li><li><p><code>items</code>: Array, each item is the picture filename without common prefix (do not include file extension)</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>The order of the array is the order in which the emojis are arranged.</p></div></li></ul><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h3><p>We assume that you have the following files:</p><div class="language-text ext-text"><pre class="language-text"><code>https://example.com/myemoji/
\u251C\u2500 my_laugh.png
\u251C\u2500 my_cute.png
\u251C\u2500 my_rage.png
\u251C\u2500 my_sob.png
\u2514\u2500 info.json
</code></pre></div><p>Your <code>info.json</code> can be:</p><div class="language-json ext-json"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;My Emoji&quot;,
  &quot;prefix&quot;: &quot;my_&quot;,
  &quot;type&quot;: &quot;png&quot;,
  &quot;icon&quot;: &quot;cute&quot;,
  &quot;items&quot;: [&quot;laugh&quot;, &quot;sob&quot;, &quot;rage&quot;, &quot;cute&quot;]
}
</code></pre></div><p>Then you can use <code>&#39;https://example.com/myemoji&#39;</code> as a available preset in <code>emoji</code> option. (ending with <code>/</code> suffix or not is both OK)</p><h3 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h3>`,18),h=t("We recommend you to upload images to a GitHub repo and add a tag after each modification. In this way, you can use the GitHub tag CDN link on "),u={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},m=t("cdn.jsdelivr.net"),g=t(" as your preset, which format is "),f=e("code",null,"https://cdn.jsdelivr.net/ gh/user/repo@version/file",-1),v=t(". After the tag is bound, original links referenced by the historical comment will still be valid if you edit the images."),j={class:"custom-container tip"},w=e("p",{class:"custom-container-title"},"Tips",-1),x=t("The official presets are using the "),y=e("code",null,"v1.0.0",-1),b=t(" version of "),_={href:"https://github.com/walinejs/emoji",target:"_blank",rel:"noopener noreferrer"},q=t("walinejs/emoji"),k=t("."),T=a(`<h2 id="using-config-objects" tabindex="-1"><a class="header-anchor" href="#using-config-objects" aria-hidden="true">#</a> Using config objects</h2><p>Besides creating <code>info.json</code> under the image folder to create presets, you can directly add config objects to the <code>emoji</code> option.</p><p>The format of the config object is only one place different from <code>info.json</code>: you should add the <code>folder</code> option and set image folder link additionally (DO NOT add trailing <code>/</code>) so that Waline can find your images.</p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h3><p>If you have the following files:</p><div class="language-text ext-text"><pre class="language-text"><code>https://example.com/myemoji/
\u251C\u2500 my_laugh.png
\u251C\u2500 my_cute.png
\u251C\u2500 my_rage.png
\u2514\u2500 my_sob.png
</code></pre></div><p>You can add</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>{
  name: &quot;My Emoji&quot;,
  folder: &quot;https://example.com/myemoji&quot;,
  prefix: &quot;my_&quot;,
  type: &quot;png&quot;,
  icon: &quot;cute&quot;,
  items: [&quot;laugh&quot;, &quot;sob&quot;, &quot;rage&quot;, &quot;cute&quot;]
}
</code></pre></div><p>to the <code>emoji</code> option as a config item.</p><h2 id="historical-issues" tabindex="-1"><a class="header-anchor" href="#historical-issues" aria-hidden="true">#</a> Historical issues</h2><h3 id="valine-support" tabindex="-1"><a class="header-anchor" href="#valine-support" aria-hidden="true">#</a> Valine support</h3><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Though Waline is still compatible with Valine&#39;s custom emoji syntax, this compatibility will be removed in V2 version. Please migrate to the <code>emoji</code> option whenever possile.</p></div><p>Use <code>emojiCDN</code> to set the address prefix of emoji images, and use <code>emojiMaps</code> to set the mapping between emoji title and image:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  serverURL: &#39;&lt;YOUR SERVER URL&gt;&#39;,

  // Set CDN here, such as weibo CDN
  emojiCDN: &#39;https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/&#39;,
  // Emoji title and image map
  emojiMaps: {
    smile: &#39;e3/2018new_weixioa02_org.png&#39;,
    lovely: &#39;09/2018new_keai_org.png&#39;,
    // ... more emojis
  },
});
</code></pre></div><h3 id="emoji-size-issue" tabindex="-1"><a class="header-anchor" href="#emoji-size-issue" aria-hidden="true">#</a> Emoji Size Issue</h3><p>In historical versions, since HTML tags will be escaped, Emoji images completely use Markdown&#39;s image syntax, which results of Emoji being rendered by the original <code>&lt;img&gt;</code> tag in historical versions. If you use a high-definition emoticon pack, it may cause display size problems. After <code>@waline/client@0.16.0</code>, the emoji size was successfully repaired.</p><p>If you need to adapt the emoji size of the historical version, you can use the CSS selector to do this:</p><div class="language-css ext-css"><pre class="language-css"><code>/* You need to replace \`https://img.t.sinajs.cn\` with your own CDN */
.wl-content img[src^=&quot;https://img.t.sinajs.cn&quot;]
{
  width: 1.25em;
  margin: 0.25em;
  vertical-align: middle;
}
</code></pre></div>`,18);function E(N,W){const o=n("ExternalLinkIcon");return l(),c(p,null,[r,e("p",null,[h,e("a",u,[m,i(o)]),g,f,v]),e("div",j,[w,e("p",null,[x,y,b,e("a",_,[q,i(o)]),k])]),T],64)}var I=s(d,[["render",E],["__file","emoji.html.vue"]]);export{I as default};
