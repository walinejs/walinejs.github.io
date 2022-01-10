"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9423],{5302:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-27d47a79",path:"/en/guide/client/recentcomment.html",title:"RecentComments Widget",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Basic",slug:"basic",children:[]},{level:2,title:"Advanced",slug:"advanced",children:[]}],filePathRelative:"en/guide/client/recentcomment.md",git:{updatedTime:1641830213e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},3648:(n,a,s)=>{s.r(a),s.d(a,{default:()=>e});const t=(0,s(8917).uE)('<h1 id="recentcomments-widget" tabindex="-1"><a class="header-anchor" href="#recentcomments-widget" aria-hidden="true">#</a> RecentComments Widget</h1><p>Waline also support recent comments widget to help you display recent comment at the side of your blog.</p><h2 id="basic" tabindex="-1"><a class="header-anchor" href="#basic" aria-hidden="true">#</a> Basic</h2><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Waline<span class="token punctuation">.</span>Widget<span class="token punctuation">.</span><span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;#waline-recent&#39;</span><span class="token punctuation">,</span>\n      serverURL<span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>\n      count<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><h2 id="advanced" tabindex="-1"><a class="header-anchor" href="#advanced" aria-hidden="true">#</a> Advanced</h2><p>If you dislike default output HTML format, you can also render by yourself.</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-recent<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n  window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;load&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    Waline<span class="token punctuation">.</span>Widget<span class="token punctuation">.</span><span class="token function">RecentComments</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;#waline-recent&#39;</span><span class="token punctuation">,</span>\n      serverURL<span class="token operator">:</span> <span class="token string">&#39;http://waline.vercel.app&#39;</span><span class="token punctuation">,</span>\n      count<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">comments</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;waline-recent&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> comments<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>\n        <span class="token punctuation">(</span><span class="token parameter">cmt</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cmt<span class="token punctuation">.</span>nick<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>cmt<span class="token punctuation">.</span>comment<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div>',7),p={},e=(0,s(6959).Z)(p,[["render",function(n,a){return t}]])}}]);