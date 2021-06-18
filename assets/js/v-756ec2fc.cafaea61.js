(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6537],{3944:(a,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>t});const t={key:"v-756ec2fc",path:"/guide/client/count.html",title:"浏览量统计",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="浏览量统计"><a class="header-anchor" href="#浏览量统计">#</a> 浏览量统计</h1>\n<p>Waline 支持浏览量统计与评论数显示。</p>\n',headers:[{level:2,title:"浏览量",slug:"浏览量",children:[{level:3,title:"例子",slug:"例子",children:[]},{level:3,title:"Valine 兼容",slug:"valine-兼容",children:[]}]},{level:2,title:"评论数统计",slug:"评论数统计",children:[{level:3,title:"例子",slug:"例子-1",children:[]}]}],filePathRelative:"guide/client/count.md",git:{updatedTime:162398062e4,contributors:[]}}},5939:(a,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>p});const t=(0,s(8917).uE)('<h1 id="浏览量统计"><a class="header-anchor" href="#浏览量统计">#</a> 浏览量统计</h1><p>Waline 支持浏览量统计与评论数显示。</p><h2 id="浏览量"><a class="header-anchor" href="#浏览量">#</a> 浏览量</h2><p>Waline 支持浏览量统计，你可以通过设置 <code>visitor</code> 选项为 <code>true</code> 来开启它:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  visitor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 阅读量统计</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>Waline 会自动查找页面中 <code>class</code> 值为 <code>waline-visitor-count</code> 的元素，获取其 <code>id</code> 为查询条件，并将得到的值填充到其中:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id 将作为查询条件 --&gt;</span>\n阅读量: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-visitor-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><h3 id="例子"><a class="header-anchor" href="#例子">#</a> 例子</h3><div class="language-html ext-html"><pre class="language-html"><code>当前页阅读量为<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>\n  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-visitor-count<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">/&gt;</span></span>次。\n</code></pre></div><p>当前页阅读量为<span id="/guide/client/count.html" class="waline-visitor-count"></span>次。</p><h3 id="valine-兼容"><a class="header-anchor" href="#valine-兼容">#</a> Valine 兼容</h3><p>为了方便用户无缝迁移，Waline 目前会兼容 Valine 的 <code>.leancloud_visitors</code> 与 <code>.leancloud-visitors-count</code>:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id 将作为查询条件 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>\n  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud_visitors<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">data-flag-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Your Article Title<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post-meta-item-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>阅读量 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud-visitors-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>但是我们不会在未来的 V2 版本兼容它。</p><h2 id="评论数统计"><a class="header-anchor" href="#评论数统计">#</a> 评论数统计</h2><p>Waline 支持在非评论区单独显示评论数，其方式和页面浏览量类似。Waline 会自动查找页面中 <code>class</code> 值为 <code>waline-comment-count</code> 的元素，获取其 <code>id</code> 为查询条件，并将值填入其中。</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id 将作为查询条件 --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>条评论\n</code></pre></div><h3 id="例子-1"><a class="header-anchor" href="#例子-1">#</a> 例子</h3><div class="language-html ext-html"><pre class="language-html"><code>当前页共有\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/guide/client/count.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>条评论\n</code></pre></div><p>当前页共有 <span id="/guide/client/count.html" class="waline-comment-count"></span>条评论</p>',20),p={render:function(a,n){return t}}}}]);