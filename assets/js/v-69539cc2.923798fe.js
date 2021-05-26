(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7660],{1937:(s,a,n)=>{"use strict";n.r(a),n.d(a,{data:()=>t});const t={key:"v-69539cc2",path:"/en/client/visitor.html",title:"Article reading statistics",lang:"en-US",frontmatter:{},excerpt:"",headers:[],filePathRelative:"en/client/visitor.md",git:{updatedTime:1622031844e3,contributors:[]}}},3439:(s,a,n)=>{"use strict";n.r(a),n.d(a,{default:()=>e});const t=(0,n(8917).uE)('<h1 id="article-reading-statistics"><a class="header-anchor" href="#article-reading-statistics">#</a> Article reading statistics</h1><p>Like Valine, Waline also supports article reading statistics, and the data structure is consistent with Valine, facilitating seamless migration for Valine users.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    el<span class="token operator">:</span><span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n    visitor<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// reading statistics</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Valine will automatically find the elements whose <code>class</code> value is <code>leancloud_visitors</code> on the page, and get their <code>id</code> as the query condition. And fill the obtained value into the child element whose <code>class</code> value is <code>leancloud-visitors-count</code>:</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!-- id will be used as the query condition --&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>&lt;Your/Path/Name&gt;<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud_visitors<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>em</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post-meta-item-text<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Visit Statistics <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>em</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>leancloud-visitors-count<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><span id="/visitor.html" class="leancloud_visitors" data-flag-title="reading statistics"><em class="post-meta-item-text"> Current page visits </em><i class="leancloud-visitors-count"></i></span>',6),e={render:function(s,a){return t}}}}]);