(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2597],{7724:(s,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-054e1cac",path:"/en/client/emoji.html",title:"Custom emoji",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Presets",slug:"presets",children:[]},{level:2,title:"Creating preset",slug:"creating-preset",children:[{level:3,title:"Demo",slug:"demo",children:[]},{level:3,title:"Advanced",slug:"advanced",children:[]}]},{level:2,title:"Using config objects",slug:"using-config-objects",children:[]},{level:2,title:"Historical issues",slug:"historical-issues",children:[{level:3,title:"Valine support",slug:"valine-support",children:[]},{level:3,title:"Emoji Size Issue",slug:"emoji-size-issue",children:[]}]}],filePathRelative:"en/client/emoji.md",git:{updatedTime:1622044313e3,contributors:[]}}},8533:(s,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>x});var a=n(8917);const t=(0,a.uE)('<h1 id="custom-emoji"><a class="header-anchor" href="#custom-emoji">#</a> Custom emoji</h1><p>You can customize the emoji of the comment box by setting <code>emoji</code> option, you should set it to an <strong>array</strong> containing <em>preset link</em> or <em>preset config object</em>.</p><h2 id="presets"><a class="header-anchor" href="#presets">#</a> Presets</h2><p>Waline provides a series of emoji presets that can be used out of box. You can add them directly to the emoji options:</p><ul><li><p>Alus</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Bilibili</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>QQ</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Tieba</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Twemoji</p><ul><li><p>Emoji:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><details class="custom-container details"><summary>Others</summary><ul><li><p>Full: (Not recommand)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>People:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-people\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Body:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-body\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Flag:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-flag\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Food:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-food\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Natural:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-natural\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Object:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-object\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Sport:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-sport\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Symbol:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-symbol\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Time:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-time\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Travel:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-travel\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>Weather:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-weather\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul></details></li><li><p>Weibo</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><div class="custom-container tip"><p class="custom-container-title">Demo</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Set emoji to Weibo and Bilibili</span>\n  emoji<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></div><h2 id="creating-preset"><a class="header-anchor" href="#creating-preset">#</a> Creating preset</h2><p>Besides presets provided by Waline, you can create one by yourself.</p><p>You need to place all emoticons in an accessible server folder, then create <code>info.json</code> in the root directory and set the following options:</p><ul><li><p><code>name</code>: emoji name on the tab</p></li><li><p><code>prefix</code> (optional): The general prefix of images&#39; filename</p><p>When you set multiple emojis tabs, we recommend you to add a common prefix to all emoji images in one tab to prevent conflicts with other emoji titles.</p></li><li><p><code>type</code> (optional): type of the picture, which will be used as file extension</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The emojis should be a set of images with same size and same file format. If you DO need to use different types of images, please leave this blank and manually specify the suffix in the next two options.</p></div></li><li><p><code>icon</code>: filename of the icon image used in tab (requirement is the same as <code>items</code>)</p></li><li><p><code>items</code>: Array, each item is the picture filename without common prefix (do not include file extension)</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>The order of the array is the order in which the emojis are arranged.</p></div></li></ul><h3 id="demo"><a class="header-anchor" href="#demo">#</a> Demo</h3><p>We assume that you have the following files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://example.com/myemoji/\n├─ my_laugh.png\n├─ my_cute.png\n├─ my_rage.png\n├─ my_sob.png\n└─ info.json\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Your <code>info.json</code> can be:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;My Emoji&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Then you can use <code>&#39;https://example.com/myemoji&#39;</code> as a available preset in <code>emoji</code> option. (ending with <code>/</code> suffix or not is both OK)</p><h3 id="advanced"><a class="header-anchor" href="#advanced">#</a> Advanced</h3>',17),i=(0,a.Uk)("We recommend you to upload images to a GitHub repo and add a tag after each modification. In this way, you can use the GitHub tag CDN link on "),l={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Uk)("cdn.jsdelivr.net"),p=(0,a.Uk)(" as your preset, which format is "),c=(0,a.Wm)("code",null,"https://cdn.jsdelivr.net/ gh/user/repo@version/file",-1),r=(0,a.Uk)(". After the tag is bound, original links referenced by the historical comment will still be valid if you edit the images."),u={class:"custom-container tip"},d=(0,a.Wm)("p",{class:"custom-container-title"},"Tip",-1),m=(0,a.Uk)("The official presets are using the "),b=(0,a.Wm)("code",null,"v1.0.0",-1),g=(0,a.Uk)(" version of "),h={href:"https://walinejs/emoji",target:"_blank",rel:"noopener noreferrer"},v=(0,a.Uk)("walinejs/emoji"),j=(0,a.Uk)("."),k=(0,a.uE)('<h2 id="using-config-objects"><a class="header-anchor" href="#using-config-objects">#</a> Using config objects</h2><p>Besides creating <code>info.json</code> under the image folder to create presets, you can directly add config objects to the <code>emoji</code> option.</p><p>The format of the config object is only one place different from <code>info.json</code>: you should add the <code>folder</code> option and set image folder link additionally (DO NOT add trailing <code>/</code>) so that Waline can find your images.</p><div class="custom-container tip"><p class="custom-container-title">Demo</p><p>If you have the following files:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://example.com/myemoji/\n├─ my_laugh.png\n├─ my_cute.png\n├─ my_rage.png\n└─ my_sob.png\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>You can add</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;My Emoji&quot;</span><span class="token punctuation">,</span>\n  link<span class="token operator">:</span> <span class="token string">&quot;https://example.com/myemoji&quot;</span><span class="token punctuation">,</span>\n  prefix<span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>\n  type<span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>\n  icon<span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>\n  items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>to the <code>emoji</code> option as a config item.</p><h2 id="historical-issues"><a class="header-anchor" href="#historical-issues">#</a> Historical issues</h2><h3 id="valine-support"><a class="header-anchor" href="#valine-support">#</a> Valine support</h3><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>Though Waline is still compatible with Valine&#39;s custom emoji syntax, this compatibility will be removed in future version. Please migrate to the <code>emoji</code> option.</p></div></div><p>Use <code>emojiCDN</code> to set the address prefix of emoji images, and use <code>emojiMaps</code> to set the mapping between emoji title and image:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// Set CDN here, such as weibo CDN</span>\n  emojiCDN<span class="token operator">:</span> <span class="token string">&#39;https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// Emoji title and image map</span>\n  emojiMaps<span class="token operator">:</span> <span class="token punctuation">{</span>\n    smile<span class="token operator">:</span> <span class="token string">&#39;e3/2018new_weixioa02_org.png&#39;</span><span class="token punctuation">,</span>\n    lovely<span class="token operator">:</span> <span class="token string">&#39;09/2018new_keai_org.png&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// ... more emojis</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="emoji-size-issue"><a class="header-anchor" href="#emoji-size-issue">#</a> Emoji Size Issue</h3><p>In historical versions, since HTML tags will be escaped, Emoji images completely use Markdown&#39;s image syntax, which results of Emoji being rendered by the original <code>&lt;img&gt;</code> tag in historical versions. If you use a high-definition emoticon pack, it may cause display size problems. After <code>@waline/client@0.16.0</code>, the emoji size was successfully repaired.</p><p>If you need to adapt the emoji size of the historical version, you can use the CSS selector to do this:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token comment">/* You need to replace `https://img.t.sinajs.cn` with your own CDN */</span>\n<span class="token selector">.v[data-class=&#39;v&#39;] .vcontent img[src^=&quot;https://img.t.sinajs.cn&quot;]</span>\n<span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>',10),x={render:function(s,e){const n=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[t,(0,a.Wm)("p",null,[i,(0,a.Wm)("a",l,[o,(0,a.Wm)(n)]),p,c,r]),(0,a.Wm)("div",u,[d,(0,a.Wm)("p",null,[m,b,g,(0,a.Wm)("a",h,[v,(0,a.Wm)(n)]),j])]),k],64)}}}}]);