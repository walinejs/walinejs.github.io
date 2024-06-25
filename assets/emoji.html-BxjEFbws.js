import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as t,o as a,c as l,d as n,e as i,a as h,w as d,b as r}from"./app-DeRfSd9r.js";const p={},k=r(`<p>你可以通过设置 <code>emoji</code> 选项自定义评论输入框的表情，你应该将它设置为包含<em>预设地址</em>或<em>预设配置对象</em>的<strong>数组</strong>。如果你不需要它，只需将它设置为 <code>false</code>。</p><h2 id="预设" tabindex="-1"><a class="header-anchor" href="#预设"><span>预设</span></a></h2><p>Waline 提供了一系列开箱即用的表情预设。你可以直接将它们添加到 <code>emoji</code> 选项中:</p><ul><li><p>Alus</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/alus</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>哔哩哔哩</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/bilibili</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>哔哩哔哩小黄脸</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/bmoji</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>QQ</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/qq</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>贴吧</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tieba</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Twitter Emoji</p><ul><li><p>表情:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-emoji</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><details class="hint-container details"><summary>其他可用预设</summary><ul><li><p>完整: (不推荐使用)</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>身体:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-body</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>食物:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-food</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>自然:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-natural</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>对象:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-object</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>符号:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-symbol</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>人物:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-people</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>运动:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-sport</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>时间:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-time</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>旅行:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-travel</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>天气:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-weather</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>旗帜:</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/tw-flag</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul></details></li><li><p>微博</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/weibo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>《元气骑士》</p><div class="language-http line-numbers-mode" data-highlighter="shiki" data-ext="http" data-title="http" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">https://unpkg.com/@waline/emojis@1.2.0/soul-emoji</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ul><div class="hint-container warning"><p class="hint-container-title">注意</p><p>Waline 不含有上述 Emoji 表情的任何版权，你需要自行承担使用风险。</p></div><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;waline&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">init</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/waline.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">  init</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    el</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;#waline&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    serverURL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 设置 emoji 为微博与哔哩小黄脸</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    emoji</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      &#39;//unpkg.com/@waline/emojis@1.2.0/weibo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">      &#39;//unpkg.com/@waline/emojis@1.2.0/bmoji&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="创建自己的预设" tabindex="-1"><a class="header-anchor" href="#创建自己的预设"><span>创建自己的预设</span></a></h2>`,8);function o(c,g){const s=t("RouteLink");return a(),l("div",null,[k,n("p",null,[i("除了 Waline 提供的预设外，你可以创建自己的预设，参见 "),h(s,{to:"/cookbook/customize/emoji.html"},{default:d(()=>[i("Cookbook → 创建 emoji 预设")]),_:1}),i("。")])])}const b=e(p,[["render",o],["__file","emoji.html.vue"]]),v=JSON.parse('{"path":"/guide/features/emoji.html","title":"表情选项卡","lang":"zh-CN","frontmatter":{"title":"表情选项卡","icon":"emoji","order":2,"description":"你可以通过设置 emoji 选项自定义评论输入框的表情，你应该将它设置为包含预设地址或预设配置对象的数组。如果你不需要它，只需将它设置为 false。 预设 Waline 提供了一系列开箱即用的表情预设。你可以直接将它们添加到 emoji 选项中: Alus 哔哩哔哩 哔哩哔哩小黄脸 QQ 贴吧 Twitter Emoji 表情: 其他可用预设 完整:...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/features/emoji.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/features/emoji.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"表情选项卡"}],["meta",{"property":"og:description","content":"你可以通过设置 emoji 选项自定义评论输入框的表情，你应该将它设置为包含预设地址或预设配置对象的数组。如果你不需要它，只需将它设置为 false。 预设 Waline 提供了一系列开箱即用的表情预设。你可以直接将它们添加到 emoji 选项中: Alus 哔哩哔哩 哔哩哔哩小黄脸 QQ 贴吧 Twitter Emoji 表情: 其他可用预设 完整:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"表情选项卡\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"预设","slug":"预设","link":"#预设","children":[{"level":3,"title":"例子","slug":"例子","link":"#例子","children":[]}]},{"level":2,"title":"创建自己的预设","slug":"创建自己的预设","link":"#创建自己的预设","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1717584295000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":2},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":2},{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"阿巴ing_","email":"140275977+ab8ing@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.13,"words":338},"filePathRelative":"guide/features/emoji.md","localizedDate":"2022年11月30日","autoDesc":true}');export{b as comp,v as data};