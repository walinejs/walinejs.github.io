(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6153],{9874:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-583b3d0d",path:"/guide/client/spa.html",title:"单页应用支持",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"update",slug:"update",children:[{level:3,title:"工作方式",slug:"工作方式",children:[]}]},{level:2,title:"destroy",slug:"destroy",children:[]},{level:2,title:"初始化失败",slug:"初始化失败",children:[]}],filePathRelative:"guide/client/spa.md",git:{updatedTime:1623654157e3,contributors:[]}}},4468:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>o});const s=(0,a(8917).uE)('<h1 id="单页应用支持"><a class="header-anchor" href="#单页应用支持">#</a> 单页应用支持</h1><p>Waline 为 SPA(<strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>pplication, 单页应用) 带来了支持。</p><p>在单页应用中，你需要在初始化 Waline 时保存 Waline 函数返回的 <code>WalineInstance</code> 实例以便后续使用。</p><p>你可以在 <code>WalineInstance</code> 上找到一个实例属性 <code>el</code> 和两个方法: <code>update()</code> 和 <code>destroy()</code>。</p><h2 id="el"><a class="header-anchor" href="#el">#</a> el</h2><p><code>el</code> 属性为 Waline 当前实例挂载的 HTMLElement。</p><p>如果你不设置 <code>el</code> 初始化 Waline (即只使用浏览量与评论数功能)，该项为 <code>null</code>。</p><h2 id="update"><a class="header-anchor" href="#update">#</a> update</h2><p>你可以调用 <code>update()</code> 更新 Waline。<code>update</code> 方法接收一个可选参数 <code>options</code>，除 <code>el</code> 和 <code>dark</code> 选项外，其他 Waline 初始化选项都可以传入新的值进行更新。</p><p>如:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 在 `/` 路由</span>\n<span class="token keyword">const</span> waline <span class="token operator">=</span> <span class="token function">Walien</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;https://example.com&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* 用户: 一段时间后，路由变动到 `/a.html` */</span>\n\nwaline<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 现在 waline 将开始清除评论并显示加载状态</span>\n<span class="token comment">// 一段时间后，计数器和评论将全部更新</span>\n\nwaline<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>\n  login<span class="token operator">:</span> <span class="token string">&#39;disable&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 这将使 Waline 以英文显示，并禁用用户登录</span>\n</code></pre></div><h3 id="工作方式"><a class="header-anchor" href="#工作方式">#</a> 工作方式</h3><p>调用 <code>update</code> 时，会把当前选项和历史选项<strong>浅拷贝</strong>合并，并重新根据新参数更新整个 Waline 实例 (同时保存这个新参数)。</p><p>该方法的默认行为是: 对于未设置过的参数永远<strong>重新生成默认值</strong>，对于设置过的参数<strong>使用历史值</strong>。</p><p>这里有两个选项你可能需要特别留意: <code>path</code> 和 <code>locale</code>。</p><div class="custom-container warning"><p class="custom-container-title">path 注意事项</p><p>你需要注意，<code>path</code> 选项的默认值是 <code>window.location.pathname</code>。正如前文所说:</p><blockquote><p>对于未设置过的参数永远<strong>重新生成默认值</strong>，对于设置过的参数<strong>使用历史值</strong>。</p></blockquote><p>如果你从未设置 <code>path</code> 选项，每次 <code>update()</code> 我们会自动更新 <code>path</code> 为当前页面路径。</p><p>只要你历史曾经设置过 <code>path</code>，无 <code>path</code> 参数调用 <code>update()</code> 的行为就将是使用这个历史值。这种情况下你可以随时通过设置 <code>path</code> 为 <code>undefined</code> 来使此次和之后的调用重新动态读取 <code>path</code>。</p></div><div class="custom-container warning"><p class="custom-container-title">locale 注意事项</p><p>由于浅拷贝的关系，<code>locale</code> 选项会被 <code>update</code> 传入的新 <code>locale</code> 选项完全覆盖。</p><p>我们的依据是: 用户更新 locale 的情景通常是想要进行显示语言的切换，所以我们将其设置为插件的预期行为。这也意味着你可以通过 <code>update({ locale: {} })</code> 清除之前设置的自定义语言配置。</p><p>如果你的确需要更新已设置的 <code>locale</code> 的某项或某几项，你需要把更新后的整个 <code>locale</code> 传入插件。</p></div><p>同时，<code>update()</code> 选项已经针对异步网络请求优化，这包括:</p><ul><li>只有当路径的确发生改变时才刷新评论区重新请求</li><li>新的 <code>update()</code> 调用会自动终止上一个 <code>update()</code> 发出的不再需要的请求。</li></ul><h2 id="destroy"><a class="header-anchor" href="#destroy">#</a> destroy</h2><p>你可以使用 <code>destroy()</code> 方法销毁 Waline 实例。它会同时清空 Waline 挂载元素中的全部内容。</p><h2 id="初始化失败"><a class="header-anchor" href="#初始化失败">#</a> 初始化失败</h2><p>如果你忘记传入 <code>serverURL</code> 或者 Waline 无法在页面中通过 <code>el</code> 选项找到挂载位置，Waline 会返回一个 <code>WalineErrorInstance</code>。</p><p><code>WalineErrorInstance</code> 上只有一个属性 <code>errMsg</code> 标明初始化失败的原因。</p>',24),o={render:function(e,n){return s}}}}]);