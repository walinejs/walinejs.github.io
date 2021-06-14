(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9684],{2165:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-2fad59ab",path:"/guide/client/emoji.html",title:"自定义表情",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="自定义表情"><a class="header-anchor" href="#自定义表情">#</a> 自定义表情</h1>\n<p>你可以通过设置 <code>emoji</code> 选项自定义评论输入框的表情，你应该将它设置为包含<em>预设地址</em>或<em>预设配置对象</em>的<strong>数组</strong>。</p>\n',headers:[{level:2,title:"预设",slug:"预设",children:[{level:3,title:"例子",slug:"例子",children:[]}]},{level:2,title:"创建自己的预设",slug:"创建自己的预设",children:[{level:3,title:"例子",slug:"例子-1",children:[]},{level:3,title:"进阶",slug:"进阶",children:[]}]},{level:2,title:"使用配置对象",slug:"使用配置对象",children:[{level:3,title:"例子",slug:"例子-2",children:[]}]},{level:2,title:"历史问题",slug:"历史问题",children:[{level:3,title:"Valine 兼容",slug:"valine-兼容",children:[]},{level:3,title:"样式问题",slug:"样式问题",children:[]}]}],filePathRelative:"guide/client/emoji.md",git:{updatedTime:1623665832e3,contributors:[]}}},5994:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y});var e=a(8917);const t=(0,e.uE)('<h1 id="自定义表情"><a class="header-anchor" href="#自定义表情">#</a> 自定义表情</h1><p>你可以通过设置 <code>emoji</code> 选项自定义评论输入框的表情，你应该将它设置为包含<em>预设地址</em>或<em>预设配置对象</em>的<strong>数组</strong>。</p><h2 id="预设"><a class="header-anchor" href="#预设">#</a> 预设</h2><p>Waline 提供了一系列开箱即用的表情预设。你可以直接将它们添加到 <code>emoji</code> 选项中:</p><ul><li><p>Alus</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus\n</code></pre></div></li><li><p>哔哩哔哩</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili\n</code></pre></div></li><li><p>QQ</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq\n</code></pre></div></li><li><p>贴吧</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba\n</code></pre></div></li><li><p>Twitter Emoji</p><ul><li><p>表情:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji\n</code></pre></div></li></ul><details class="custom-container details"><summary>其他可用预设</summary><ul><li><p>完整: (不推荐使用)</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw\n</code></pre></div></li><li><p>身体:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-body\n</code></pre></div></li><li><p>食物:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-food\n</code></pre></div></li><li><p>自然:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-natural\n</code></pre></div></li><li><p>对象:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-object\n</code></pre></div></li><li><p>符号:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-symbol\n</code></pre></div></li><li><p>人物:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-people\n</code></pre></div></li><li><p>运动:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-sport\n</code></pre></div></li><li><p>时间:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-time\n</code></pre></div></li><li><p>旅行:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-travel\n</code></pre></div></li><li><p>天气:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-weather\n</code></pre></div></li><li><p>旗帜:</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-flag\n</code></pre></div></li></ul></details></li><li><p>微博</p><div class="language-http ext-http"><pre class="language-http"><code><span class="token header-name keyword">https:</span>//cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo\n</code></pre></div></li></ul><h3 id="例子"><a class="header-anchor" href="#例子">#</a> 例子</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 设置 emoji 为微博与哔哩哔哩</span>\n  emoji<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo&#39;</span><span class="token punctuation">,</span>\n    <span class="token string">&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili&#39;</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="创建自己的预设"><a class="header-anchor" href="#创建自己的预设">#</a> 创建自己的预设</h2><p>除了 Waline 提供的预设外，你可以创建自己的预设。</p><p>你需要将所有表情图片放置在一个可以访问的服务器文件夹上，之后在根目录创建 <code>info.json</code>，并设置如下选项:</p><ul><li><p><code>name</code>: Emoji 名称</p></li><li><p><code>prefix</code> (可选的): Emoji 图片名称的通用前缀</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>当你设置了多个 Emoji 选项卡时，我们推荐你为同一个选项卡内的所有表情图片添加一个共用前缀，以防与其他 Emoji 缩写相冲突。</p></div></li><li><p><code>type</code> (可选的): 图片的类型，会用作图片的后缀名</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>表情包应该是一套相同大小相同文件格式的图片。如果你的确需要使用不同类型的图片，请将此项留空并在之后的两个选项中手动指定后缀名。</p></div></li><li><p><code>icon</code>: 选项卡包含的图标的图片名 (要求同 <code>items</code>)</p></li><li><p><code>items</code>: 数组，每项是图片不包含通用前缀的文件名 (不含扩展名)</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>数组的顺序既是表情排列的顺序。</p></div></li></ul><h3 id="例子-1"><a class="header-anchor" href="#例子-1">#</a> 例子</h3><p>我们假设你有如下文件:</p><div class="language-text ext-text"><pre class="language-text"><code>https://example.com/myemoji/\n├─ my_laugh.png\n├─ my_cute.png\n├─ my_rage.png\n├─ my_sob.png\n└─ info.json\n</code></pre></div><p>你的 info.json 可设置为:</p><div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;我的 Emoji&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;prefix&quot;</span><span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>这样你就可以在 <code>emoji</code> 选项中添加 <code>&#39;https://example.com/myemoji&#39;</code> 作为一个预设。(是否带 <code>/</code> 后缀随意)</p><h3 id="进阶"><a class="header-anchor" href="#进阶">#</a> 进阶</h3>',18),p=(0,e.Uk)("我们更推荐你将图片上传到一个 GitHub 仓库，并为每次修改添加一个 tag。这样你可以使用 "),o={href:"https://www.jsdelivr.com/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("cdn.jsdelivr.net"),c=(0,e.Uk)(" 上带有版本的 CDN 链接作为你的预设，其格式为 "),i=(0,e.Wm)("code",null,"https://cdn.jsdelivr.net/gh/user/repo@version/file",-1),r=(0,e.Uk)("。绑定标签后，历史评论引用的图片链接将不会因为调整图片而失效。"),d={class:"custom-container tip"},u=(0,e.Wm)("p",{class:"custom-container-title"},"提示",-1),h=(0,e.Uk)("官方预设就使用了 "),g={href:"https://github.com/walinejs/emoji",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("walinejs/emoji"),m=(0,e.Uk)(" 的 "),j=(0,e.Wm)("code",null,"v1.0.0",-1),v=(0,e.Uk)(" 版本。"),w=(0,e.uE)('<h2 id="使用配置对象"><a class="header-anchor" href="#使用配置对象">#</a> 使用配置对象</h2><p>除了在图片文件夹下创建 <code>info.json</code> 来创建预设，你可以直接在 <code>emoji</code> 选项中直接添加配置对象。</p><p>配置对象的格式和 <code>info.json</code> 只有一点不同: 你应当额外添加 <code>folder</code> 选项为图片文件夹 (不应包含尾随 <code>/</code>)，以便 Waline 可以找到你的表情包。</p><h3 id="例子-2"><a class="header-anchor" href="#例子-2">#</a> 例子</h3><p>假设你有下列文件结构:</p><div class="language-text ext-text"><pre class="language-text"><code>https://example.com/myemoji/\n├─ my_laugh.png\n├─ my_cute.png\n├─ my_rage.png\n└─ my_sob.png\n</code></pre></div><p>你可以直接添加</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&quot;我的 Emoji&quot;</span><span class="token punctuation">,</span>\n  folder<span class="token operator">:</span> <span class="token string">&quot;https://example.com/myemoji&quot;</span><span class="token punctuation">,</span>\n  prefix<span class="token operator">:</span> <span class="token string">&quot;my_&quot;</span><span class="token punctuation">,</span>\n  type<span class="token operator">:</span> <span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span>\n  icon<span class="token operator">:</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">,</span>\n  items<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;laugh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rage&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cute&quot;</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>至 <code>emoji</code> 选项作为一个配置项。</p><h2 id="历史问题"><a class="header-anchor" href="#历史问题">#</a> 历史问题</h2><h3 id="valine-兼容"><a class="header-anchor" href="#valine-兼容">#</a> Valine 兼容</h3><div class="custom-container warning"><p class="custom-container-title">注意</p><p>虽然 Waline 目前仍在兼容 Valine 的自定义表情写法，但此兼容会在未来版本中移除，请尽快迁移到 <code>emoji</code> 选项。</p></div><p>使用 <code>emojiCDN</code> 设置 emoji 图片地址前缀，并使用 <code>emojiMaps</code> 设置表情 title 与图片的映射:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;&lt;YOUR SERVER URL&gt;&#39;</span><span class="token punctuation">,</span>\n\n  <span class="token comment">// 设置 CDN, 如微博表情 CDN</span>\n  emojiCDN<span class="token operator">:</span> <span class="token string">&#39;https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// 表情 title 和图片映射</span>\n  emojiMaps<span class="token operator">:</span> <span class="token punctuation">{</span>\n    smile<span class="token operator">:</span> <span class="token string">&#39;e3/2018new_weixioa02_org.png&#39;</span><span class="token punctuation">,</span>\n    lovely<span class="token operator">:</span> <span class="token string">&#39;09/2018new_keai_org.png&#39;</span><span class="token punctuation">,</span>\n    <span class="token comment">// ... 更多表情</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h3 id="样式问题"><a class="header-anchor" href="#样式问题">#</a> 样式问题</h3><p>在历史版本中，由于 HTML 标签会被转义，Emoji 图片完全使用 Markdown 的图片语法，这导致历史版本的 Emoji 是由存粹的 <code>&lt;img&gt;</code> 标签进行渲染的。如果你使用了高清表情包，可能会产生显示大小问题。在 <code>@waline/client@0.16.0</code> 以后，表情 emoji 的大小被成功修复。</p><p>如果你需要对历史版本的 Emoji 表情大小进行适配，你可以使用 CSS 选择器做到这一点:</p><div class="language-css ext-css"><pre class="language-css"><code><span class="token comment">/* 你需要把 `https://img.t.sinajs.cn` 换成自己的 CDN */</span>\n<span class="token selector">.v[data-class=&#39;v&#39;] .vcontent img[src^=&quot;https://img.t.sinajs.cn&quot;]</span>\n<span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> 1.25em<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> 0.25em<span class="token punctuation">;</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div>',18),y={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,(0,e.Wm)("a",o,[l,(0,e.Wm)(a)]),c,i,r]),(0,e.Wm)("div",d,[u,(0,e.Wm)("p",null,[h,(0,e.Wm)("a",g,[k,(0,e.Wm)(a)]),m,j,v])]),w],64)}}}}]);