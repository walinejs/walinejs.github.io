"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7011],{7257:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-81cb4dce",path:"/guide/client/widget/recent-comment.html",title:"最新评论挂件",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="最新评论挂件" tabindex="-1"><a class="header-anchor" href="#最新评论挂件" aria-hidden="true">#</a> 最新评论挂件</h1>\n<p>Waline 通过 <code>RecentComments</code> 支持最新评论挂件显示，方便在博客侧边栏显示最近评论。</p>\n',headers:[{level:2,title:"组件选项",slug:"组件选项",children:[]},{level:2,title:"基本用法",slug:"基本用法",children:[]},{level:2,title:"高级用法",slug:"高级用法",children:[]}],filePathRelative:"guide/client/widget/recent-comment.md",git:{updatedTime:1641171541e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},258:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(8917).uE)('<h1 id="最新评论挂件" tabindex="-1"><a class="header-anchor" href="#最新评论挂件" aria-hidden="true">#</a> 最新评论挂件</h1><p>Waline 通过 <code>RecentComments</code> 支持最新评论挂件显示，方便在博客侧边栏显示最近评论。</p><h2 id="组件选项" tabindex="-1"><a class="header-anchor" href="#组件选项" aria-hidden="true">#</a> 组件选项</h2><p>最新评论挂件名为 <code>RecentComments</code>，包含三个选项:</p><ul><li><code>el</code> (可选的): 需要挂载的元素</li><li><code>serverURL</code>: 服务器地址</li><li><code>count</code> 需要获取的最近评论数量</li></ul><p>组件返回的数据格式应为 <code>Promise&lt;{ comment: CommentData[], destroy: () =&gt; void }&gt;</code>。</p><ul><li><code>comment</code> 属性: 包含 <code>count</code> 数量的最近评论的数组</li><li><code>destory</code> 方法: 销毁挂件的函数</li></ul><h2 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法" aria-hidden="true">#</a> 基本用法</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Waline<span class="token punctuation">.</span>Widget<span class="token punctuation">.</span><span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;#waline-recent&#39;</span><span class="token punctuation">,</span>\n      serverURL<span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>\n      count<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这会使用默认样式渲染在 <code>#waline-recent</code> 上。</p></div><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法" aria-hidden="true">#</a> 高级用法</h2><p>如果对默认输出的格式不满意，你也可以不传入 <code>el</code> 选项，调用组件拿到数据之后自己进行渲染。</p><p>例子:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    Waline<span class="token punctuation">.</span>Widget<span class="token punctuation">.</span><span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      serverURL<span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>\n      count<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> comments <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;waline-recent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> comments<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span><span class="token parameter">comment</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>comment<span class="token punctuation">.</span>comment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',14),p={},e=(0,s(6959).Z)(p,[["render",function(n,a){return t}]])}}]);