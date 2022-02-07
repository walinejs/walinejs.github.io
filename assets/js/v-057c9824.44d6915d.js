"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5175],{8065:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-057c9824",path:"/en/guide/client/count.html",title:"Pageview statistics",lang:"en-US",frontmatter:{},excerpt:'<h1 id="pageview-statistics" tabindex="-1"><a class="header-anchor" href="#pageview-statistics" aria-hidden="true">#</a> Pageview statistics</h1>\n<p>Waline supports pageview statistics and comment number display.</p>\n',headers:[{level:2,title:"PageViews",slug:"pageviews",children:[{level:3,title:"Examples",slug:"examples",children:[]},{level:3,title:"Valine compatible",slug:"valine-compatible",children:[]}]},{level:2,title:"Comment count",slug:"comment-count",children:[{level:3,title:"Examples",slug:"examples-1",children:[]}]}],filePathRelative:"en/guide/client/count.md",git:{updatedTime:1644247333e3,contributors:[{name:"AHdark",email:"ahdark@outlook.com",commits:1}]}}},6575:(a,n,s)=>{s.r(n),s.d(n,{default:()=>p});const t=(0,s(8917).uE)('<h1 id="pageview-statistics" tabindex="-1"><a class="header-anchor" href="#pageview-statistics" aria-hidden="true">#</a> Pageview statistics</h1><p>Waline supports pageview statistics and comment number display.</p><h2 id="pageviews" tabindex="-1"><a class="header-anchor" href="#pageviews" aria-hidden="true">#</a> PageViews</h2><p>Waline supports pageview statistics, you can enable it by setting the <code>visitor</code> option to <code>true</code>:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  visitor<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// pageview statistics</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>Waline will automatically find the elements with the <code>class</code> value of <code>waline-visitor-count</code> in the page, and get their <code>id</code> as the query condition. And fill it with the obtained value:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id will be the query condition --&gt;</span>\nPageviews: <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-visitor-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><div class="language-html ext-html"><pre class="language-html"><code>The current page has been viewed\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/en/guide/client/count.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-visitor-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> times.\n</code></pre></div><p>The current page has been viewed <i id="/en/guide/client/count.html" class="waline-visitor-count"></i> times.</p><h3 id="valine-compatible" tabindex="-1"><a class="header-anchor" href="#valine-compatible" aria-hidden="true">#</a> Valine compatible</h3><p>In order to facilitate the seamless migration of users, Waline is currently compatible with Valine&#39;s <code>.leancloud_visitors</code> and <code>.leancloud-visitors-count</code>:</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id will be the query condition --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span>\n  <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud_visitors<span class="token punctuation">&quot;</span></span>\n  <span class="token attr-name">data-flag-title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Your Article Title<span class="token punctuation">&quot;</span></span>\n<span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post-meta-item-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>阅读量 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud-visitors-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><p>But we will not be compatible with it in future V2 versions.</p><h2 id="comment-count" tabindex="-1"><a class="header-anchor" href="#comment-count" aria-hidden="true">#</a> Comment count</h2><p>Waline supports separate display of the number of comments in the non-comment area, in a similar way to page views. Waline will automatically find the elements whose <code>class</code> value is <code>waline-comment-count</code> in the page, get their <code>id</code> as the query condition, and fill in the value.</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token comment">&lt;!-- id will be the query condition --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> comments\n</code></pre></div><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><div class="language-html ext-html"><pre class="language-html"><code>The current page has\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/en/guide/client/count.html<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comment-count<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span> comments.\n</code></pre></div><p>The current page has <span id="/en/guide/client/count.html" class="waline-comment-count"></span> comments.</p>',20),e={},p=(0,s(6959).Z)(e,[["render",function(a,n){return t}]])}}]);