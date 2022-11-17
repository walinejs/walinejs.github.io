import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,f as l,a,b as n,d as e,e as t,r as i}from"./app.64598d1f.js";const r={},u=a("p",null,[n("你可以通过设置 "),a("code",null,"emoji"),n(" 选项自定义评论输入框的表情，你应该将它设置为包含"),a("em",null,"预设地址"),n("或"),a("em",null,"预设配置对象"),n("的"),a("strong",null,"数组"),n("。如果你不需要它，只需将它设置为 "),a("code",null,"false"),n("。")],-1),d=t(`<h2 id="预设" tabindex="-1"><a class="header-anchor" href="#预设" aria-hidden="true">#</a> 预设</h2><p>Waline 提供了一系列开箱即用的表情预设。你可以直接将它们添加到 <code>emoji</code> 选项中:</p><ul><li><p>Alus</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/alus</span></span>
</code></pre></div></li><li><p>哔哩哔哩</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/bilibili</span></span>
</code></pre></div></li><li><p>哔哩哔哩小黄脸</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/bmoji</span></span>
</code></pre></div></li><li><p>QQ</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/qq</span></span>
</code></pre></div></li><li><p>贴吧</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tieba</span></span>
</code></pre></div></li><li><p>Twitter Emoji</p><ul><li><p>表情:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-emoji</span></span>
</code></pre></div></li></ul><details class="custom-container details"><summary>其他可用预设</summary><ul><li><p>完整: (不推荐使用)</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw</span></span>
</code></pre></div></li><li><p>身体:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-body</span></span>
</code></pre></div></li><li><p>食物:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-food</span></span>
</code></pre></div></li><li><p>自然:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-natural</span></span>
</code></pre></div></li><li><p>对象:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-object</span></span>
</code></pre></div></li><li><p>符号:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-symbol</span></span>
</code></pre></div></li><li><p>人物:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-people</span></span>
</code></pre></div></li><li><p>运动:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-sport</span></span>
</code></pre></div></li><li><p>时间:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-time</span></span>
</code></pre></div></li><li><p>旅行:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-travel</span></span>
</code></pre></div></li><li><p>天气:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-weather</span></span>
</code></pre></div></li><li><p>旗帜:</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/tw-flag</span></span>
</code></pre></div></li></ul></details></li><li><p>微博</p><div class="language-http" data-ext="http"><pre class="language-http"><code><span class="token header"><span class="token header-name keyword">https</span><span class="token punctuation">:</span><span class="token header-value">//unpkg.com/@waline/emojis@1.1.0/weibo</span></span>
</code></pre></div></li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Waline 不含有上述 Emoji 表情的任何版权，你需要自行承担使用风险。</p></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 设置 emoji 为微博与哔哩哔哩</span>
  <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&#39;//unpkg.com/@waline/emojis@1.1.0/weibo&#39;</span><span class="token punctuation">,</span>
    <span class="token string">&#39;//unpkg.com/@waline/emojis@1.1.0/bilibili&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h2 id="创建自己的预设" tabindex="-1"><a class="header-anchor" href="#创建自己的预设" aria-hidden="true">#</a> 创建自己的预设</h2><p>除了 Waline 提供的预设外，你可以创建自己的预设。</p><p>你需要将所有表情图片放置在一个可以访问的服务器文件夹上，之后在根目录创建 <code>info.json</code>，并设置如下选项:</p><ul><li><p><code>name</code>: Emoji 名称</p></li><li><p><code>prefix</code> (可选的): Emoji 图片名称的通用前缀</p><div class="custom-container tip"><p class="custom-container-title">推荐</p><p>当你设置了多个 Emoji 选项卡时，我们推荐你为同一个选项卡内的所有表情图片添加一个共用前缀，以防与其他 Emoji 缩写相冲突。</p></div></li><li><p><code>type</code> (可选的): 图片的类型，会用作图片的后缀名</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>表情包应该是一套相同大小相同文件格式的图片。如果你的确需要使用不同类型的图片，请将此项留空并在之后的两个选项中手动指定后缀名。</p></div></li><li><p><code>icon</code>: 选项卡包含的图标的图片名 (要求同 <code>items</code>)</p></li><li><p><code>items</code>: 数组，每项是图片不包含通用前缀的文件名 (不含扩展名)</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>数组的顺序既是表情排列的顺序。</p></div></li></ul><h3 id="例子-1" tabindex="-1"><a class="header-anchor" href="#例子-1" aria-hidden="true">#</a> 例子</h3><p>我们假设你有如下文件:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>https://example.com/myemoji/
├─ my_laugh.png
├─ my_cute.png
├─ my_rage.png
├─ my_sob.png
└─ info.json
</code></pre></div><p>你的 info.json 可设置为:</p><div class="language-json" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的 Emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>这样你就可以在 <code>emoji</code> 选项中添加 <code>&#39;https://example.com/myemoji&#39;</code> 作为一个预设。(是否带 <code>/</code> 后缀随意)</p><h3 id="进阶" tabindex="-1"><a class="header-anchor" href="#进阶" aria-hidden="true">#</a> 进阶</h3>`,17),k={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"https://cdn.jsdelivr.net/gh/user/repo@version/file",-1),g=a("div",{class:"custom-container warning"},[a("p",{class:"custom-container-title"},"注意"),a("p",null,[n("由于 cdn.jsdelivr.net 在国内受到污染，你可以将 "),a("code",null,"cdn.jsdelivr.net"),n(" 换成 "),a("code",null,"gcore.jsdelivr.net")])],-1),m={class:"custom-container tip"},v=a("p",{class:"custom-container-title"},"提示",-1),j={href:"https://github.com/walinejs/emojis",target:"_blank",rel:"noopener noreferrer"},y=a("code",null,"v1.1.0",-1),w=t(`<h2 id="使用配置对象" tabindex="-1"><a class="header-anchor" href="#使用配置对象" aria-hidden="true">#</a> 使用配置对象</h2><p>除了在图片文件夹下创建 <code>info.json</code> 来创建预设，你可以直接在 <code>emoji</code> 选项中直接添加配置对象。</p><p>配置对象的格式和 <code>info.json</code> 只有一点不同: 你应当额外添加 <code>folder</code> 选项为图片文件夹 (不应包含尾随 <code>/</code>)，以便 Waline 可以找到你的表情包。</p><h3 id="例子-2" tabindex="-1"><a class="header-anchor" href="#例子-2" aria-hidden="true">#</a> 例子</h3><p>假设你有下列文件结构:</p><div class="language-text" data-ext="text"><pre class="language-text"><code>https://example.com/myemoji/
├─ my_laugh.png
├─ my_cute.png
├─ my_rage.png
└─ my_sob.png
</code></pre></div><p>你可以直接添加</p><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;我的 Emoji&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">folder</span><span class="token operator">:</span> <span class="token string">&quot;https://example.com/myemoji&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">items</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>至 <code>emoji</code> 选项作为一个配置项。</p><h2 id="历史问题" tabindex="-1"><a class="header-anchor" href="#历史问题" aria-hidden="true">#</a> 历史问题</h2><h3 id="valine-兼容" tabindex="-1"><a class="header-anchor" href="#valine-兼容" aria-hidden="true">#</a> Valine 兼容</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>Waline 提供了一个 legacy 版本，对 Valine 的 emoji 选项进行了兼容。</p><p>在 legacy 版本中，你可以使用 <code>emojiCDN</code> 设置 emoji 图片地址前缀，并使用 <code>emojiMaps</code> 设置表情 title 与图片的映射。</p><p>此兼容在 V2 正式版中已经移除，请尽快迁移到 <code>emoji</code> 选项。</p></div><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>

  <span class="token comment">// 设置 CDN, 如微博表情 CDN</span>
  <span class="token literal-property property">emojiCDN</span><span class="token operator">:</span> <span class="token string">&#39;https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// 表情 title 和图片映射</span>
  <span class="token literal-property property">emojiMaps</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">smile</span><span class="token operator">:</span> <span class="token string">&#39;e3/2018new_weixioa02_org.png&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">lovely</span><span class="token operator">:</span> <span class="token string">&#39;09/2018new_keai_org.png&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// ... 更多表情</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="样式问题" tabindex="-1"><a class="header-anchor" href="#样式问题" aria-hidden="true">#</a> 样式问题</h3><p>在历史版本中，由于 HTML 标签会被转义，Emoji 图片完全使用 Markdown 的图片语法，这导致历史版本的 Emoji 是由存粹的 <code>&lt;img&gt;</code> 标签进行渲染的。如果你使用了高清表情包，可能会产生显示大小问题。在 <code>@waline/client@0.16.0</code> 以后，表情 emoji 的大小被成功修复。</p><p>如果你需要对历史版本的 Emoji 表情大小进行适配，你可以使用 CSS 选择器做到这一点:</p><div class="language-css" data-ext="css"><pre class="language-css"><code><span class="token comment">/* 你需要把 \`https://img.t.sinajs.cn\` 换成自己的 CDN */</span>
<span class="token selector">.wl-content img[src^=&quot;https://img.t.sinajs.cn&quot;]</span>
<span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>
  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,17);function x(_,q){const s=i("ExternalLinkIcon");return o(),c("div",null,[u,l(" more "),d,a("p",null,[n("我们更推荐你将图片上传到一个 GitHub 仓库，并为每次修改添加一个 tag。这样你可以使用 "),a("a",k,[n("cdn.jsdelivr.net"),e(s)]),n(" 上带有版本的 CDN 链接作为你的预设，其格式为 "),h,n("。绑定标签后，历史评论引用的图片链接将不会因为调整图片而失效。")]),g,a("div",m,[v,a("p",null,[n("官方预设就使用了 "),a("a",j,[n("walinejs/emojis"),e(s)]),n(" 的 "),y,n(" 版本。")])]),w])}const E=p(r,[["render",x],["__file","emoji.html.vue"]]);export{E as default};