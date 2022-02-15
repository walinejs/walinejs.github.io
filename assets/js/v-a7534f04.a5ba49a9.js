"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7287],{9462:(s,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-a7534f04",path:"/guide/client/syntax.html",title:"评论格式支持",lang:"zh-CN",frontmatter:{title:"评论格式支持",icon:"format",head:[["meta",{property:"og:url",content:"https://waline.js.org/guide/client/syntax.html"}],["meta",{property:"og:title",content:"评论格式支持"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"<p>你可以在评论中添加多样化的内容，包括经过扩展的 Markdown 语法和 HTML 标签。</p>\n",headers:[{level:2,title:"Markdown 支持",slug:"markdown-支持",children:[{level:3,title:"Github 风格语法",slug:"github-风格语法",children:[]},{level:3,title:"上下角标",slug:"上下角标",children:[]},{level:3,title:"Emoji 表情",slug:"emoji-表情",children:[]},{level:3,title:"代码块高亮",slug:"代码块高亮",children:[]},{level:3,title:"数学公式",slug:"数学公式",children:[]}]},{level:2,title:"嵌入 HTML",slug:"嵌入-html",children:[]},{level:2,title:"限制",slug:"限制",children:[{level:3,title:"受限的预览功能",slug:"受限的预览功能",children:[]}]}],git:{createdTime:1644941909e3,updatedTime:1644941909e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:3.7,words:1111},filePathRelative:"guide/client/syntax.md"}},8760:(s,a,n)=>{n.r(a),n.d(a,{default:()=>k});var t=n(8917);const p=(0,t.uE)('<p>你可以在评论中添加多样化的内容，包括经过扩展的 Markdown 语法和 HTML 标签。</p><h2 id="markdown-支持" tabindex="-1"><a class="header-anchor" href="#markdown-支持" aria-hidden="true">#</a> Markdown 支持</h2><p>我们支持完整的 Markdown 语法，同时支持以下扩展。</p><h3 id="github-风格语法" tabindex="-1"><a class="header-anchor" href="#github-风格语法" aria-hidden="true">#</a> Github 风格语法</h3><details class="custom-block details"><summary>删除线</summary><p><s>此单词</s>被删除。</p><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token strike"><span class="token punctuation">~~</span><span class="token content">此单词</span><span class="token punctuation">~~</span></span>被删除。\n</code></pre></div></details><details class="custom-block details"><summary>表格</summary><table><thead><tr><th style="text-align:center;">居中</th><th style="text-align:right;">右对齐</th><th style="text-align:left;">左对齐</th></tr></thead><tbody><tr><td style="text-align:center;">居中使用<code>:-:</code></td><td style="text-align:right;">右对齐使用<code>-:</code></td><td style="text-align:left;">左对齐使用<code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">aaaaaaaaa</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">     居中      </span><span class="token punctuation">|</span><span class="token table-header important">         右对齐 </span><span class="token punctuation">|</span><span class="token table-header important"> 左对齐         </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:-----------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:-------------</span> <span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 居中使用<span class="token code-snippet code keyword">`:-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> 右对齐使用<span class="token code-snippet code keyword">`-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> 左对齐使用<span class="token code-snippet code keyword">`:-`</span> </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">       b       </span><span class="token punctuation">|</span><span class="token table-data">      aaaaaaaaa </span><span class="token punctuation">|</span><span class="token table-data"> aaaa           </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">       c       </span><span class="token punctuation">|</span><span class="token table-data">           aaaa </span><span class="token punctuation">|</span><span class="token table-data"> a              </span><span class="token punctuation">|</span>\n</span></span></code></pre></div></details><h3 id="上下角标" tabindex="-1"><a class="header-anchor" href="#上下角标" aria-hidden="true">#</a> 上下角标</h3><p>使用 <code>^</code> 和 <code>~</code> 进行上下角标的标记。</p><details class="custom-block details"><summary>例子</summary><ul><li>19<sup>th</sup></li><li>H<sub>2</sub>O</li></ul><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 19^th^\n<span class="token list punctuation">-</span> H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O\n</code></pre></div></details><h3 id="emoji-表情" tabindex="-1"><a class="header-anchor" href="#emoji-表情" aria-hidden="true">#</a> Emoji 表情</h3><p>除了用户自行配置或内置的微博表情包外，我们还支持完整的 Emoji 简写表情。</p><details class="custom-block details"><summary>例子</summary><p>😃 😦 😄 😆 😊 😃 😏 😍 😘</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>:) :( :smile: :laughing: :blush: :smiley: :smirk: :heart_eyes: :kissing_heart:\n</code></pre></div></details><h3 id="代码块高亮" tabindex="-1"><a class="header-anchor" href="#代码块高亮" aria-hidden="true">#</a> 代码块高亮</h3><p>我们支持几乎所有语言的高亮。</p><details class="custom-block details"><summary>例子</summary><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// Just a lil’ script to show off that inline JS gets highlighted</span>\n      window<span class="token punctuation">.</span>console <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/favicon.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Prism<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/style.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themes/prism.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-noprefix</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/vendor/prefixfree.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token keyword">var</span> _gaq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;_setAccount&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;UA-33746269-1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;_trackPageview&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google-analytics.com/ga.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> Use `Prism.plugins.fileHighlight.highlight` instead. */</span>\nPrism<span class="token punctuation">.</span><span class="token function-variable function">fileHighlight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>logged<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.&#39;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    logged <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  Prism<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>fileHighlight<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Questrial<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Arvo<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://lea.verou.me/logo.otf<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;LeaVerou&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/*\n Shared styles\n */</span>\n\n<span class="token selector">section h1,\n#features li strong,\nheader h2,\nfooter p</span> <span class="token punctuation">{</span>\n  <span class="token property">font</span><span class="token punctuation">:</span> 100% Rockwell<span class="token punctuation">,</span> Arvo<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></details><h3 id="数学公式" tabindex="-1"><a class="header-anchor" href="#数学公式" aria-hidden="true">#</a> 数学公式</h3><p>你可以使用 <code>$ ... $</code> 创建行内公式，使用 <code>$$ ... $$</code> 创建块级公式。</p><details class="custom-block details"><summary>例子</summary><p>Euler’s identity <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.908em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> is a beautiful formula in <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>Euler’s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.\n</code></pre></div><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0277em;vertical-align:-1.2777em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5017em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p><div class="language-markdown ext-md"><pre class="language-markdown"><code>$$\n\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}\n$$\n</code></pre></div></details><h2 id="嵌入-html" tabindex="-1"><a class="header-anchor" href="#嵌入-html" aria-hidden="true">#</a> 嵌入 HTML</h2><p>你可以在不触发下文保护机制的情况下自由嵌入任何的 HTML 内容。</p><h2 id="限制" tabindex="-1"><a class="header-anchor" href="#限制" aria-hidden="true">#</a> 限制</h2><div class="custom-container info"><p class="custom-container-title">防止恶意内容植入</p><ul><li><p>为了防止用户在评论区创建可提交的表单欺骗其他访客提交信息，你无法使用 <code>&lt;form&gt;</code> 与 <code>&lt;input&gt;</code></p></li><li><p>为了防止用户利用样式纂改网站页面或修改自身评论样式植入垃圾广告，<code>&lt;style&gt;</code> 标签和元素上的 <code>style</code> 属性均不可用。</p></li><li><p>为了防止用户滥用媒体自动播放功能，你无法使用 <code>autoplay</code> 属性。</p></li></ul></div>',22),e={class:"custom-container info"},l=(0,t._)("p",{class:"custom-container-title"},"XSS 防范",-1),c=(0,t.Uk)("我们在服务端使用 "),o={href:"https://github.com/cure53/DOMPurify",target:"_blank",rel:"noopener noreferrer"},i=(0,t.Uk)("DOMPurify"),r=(0,t.Uk)(" 过滤每一个评论输入，以防止潜在的 XSS 攻击。这意味着你将不能使用 "),m=(0,t._)("code",null,"<iframe>",-1),u=(0,t.Uk)(" 以及任何形式的脚本。"),g=(0,t._)("li",null,[(0,t._)("p",null,[(0,t.Uk)("所有的链接都会被自动设置 "),(0,t._)("code",null,'rel="noreferrer noopener"'),(0,t.Uk)(" 并使用 "),(0,t._)("code",null,'target="_blank"'),(0,t.Uk)(" 在新窗口中打开。")])],-1),h=(0,t.uE)('<h3 id="受限的预览功能" tabindex="-1"><a class="header-anchor" href="#受限的预览功能" aria-hidden="true">#</a> 受限的预览功能</h3><p>为了控制客户端一侧的 <code>@waline/client</code> 体积大小，我们仅在客户端放置了小体积的 Markdown 解析器，这导致很多语法<strong>正确的渲染在评论区</strong>，但它们并<strong>不能在预览面板内正确显示</strong>。</p><p>这包含如下限制:</p><ul><li><p>标准的 emoji 语法 (如 🎉<code>:tada:</code>) 无法正确渲染</p></li><li><p>上下角标 (如: <code>H~2~O</code>、<code>x^2^</code>) 无法正确渲染</p></li><li><p>Tex 语法，也就是数学公式 (如: <code>$a = 1$</code>) 默认无法渲染。</p><p>你可以通过设置 <code>math</code> 选项来设置预览时的 Tex 渲染。</p></li><li><p>代码块将通过特定分隔符使用随机颜色进行高亮</p></li></ul><div class="custom-container tip"><p class="custom-container-title">运行原理</p><ol><li><p>考虑到体积问题，客户端使用 <code>marked</code> 进行渲染并默认使用 <code>hanabi</code> 进行高亮，同时不包含 Tex 渲染器，导致以上限制。</p></li><li><p>用户提交评论时，客户端嵌入自定义 Emoji 表情图片、并将评论原文会发送到服务端。</p></li><li><p>服务端接收到原文，使用 <code>markdown-it</code> 以相关插件对 markdown 进行正确的渲染，同时使用 <code>prismjs</code> 为代码块根据语言进行高亮，并按照用户设置进行 Tex 渲染，最后执行 XSS 处理。</p></li><li><p>处理完成后，服务端会将正确的渲染内容进行储存，并在需要时返回给客户端，保证评论区正常显示。</p></li></ol></div>',5),d={},k=(0,n(6959).Z)(d,[["render",function(s,a){const n=(0,t.up)("ExternalLinkIcon");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("div",e,[l,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("p",null,[c,(0,t._)("a",o,[i,(0,t.Wm)(n)]),r,m,u])]),g])]),h],64)}]])}}]);