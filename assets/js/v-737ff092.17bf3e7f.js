"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6962],{289:(s,a,n)=>{n.r(a),n.d(a,{data:()=>t});const t={key:"v-737ff092",path:"/en/guide/client/syntax.html",title:"Supported Comment Syntax",lang:"en-US",frontmatter:{title:"Supported Comment Syntax",icon:"format",head:[["meta",{property:"og:url",content:"https://waline.js.org/en/guide/client/syntax.html"}],["meta",{property:"og:title",content:"Supported Comment Syntax"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Supported Comment Syntax","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"<p>You can use many syntax in your comment, including expanded Markdown syntax and HTML tags.</p>\n",headers:[{level:2,title:"Markdown Support",slug:"markdown-support",children:[{level:3,title:"GFM Markdown Favor",slug:"gfm-markdown-favor",children:[]},{level:3,title:"Superscript and Subscript",slug:"superscript-and-subscript",children:[]},{level:3,title:"Emojis",slug:"emojis",children:[]},{level:3,title:"Code Block Highlight",slug:"code-block-highlight",children:[]},{level:3,title:"Mathematical formula",slug:"mathematical-formula",children:[]}]},{level:2,title:"Embed HTML",slug:"embed-html",children:[]},{level:2,title:"Restrictions",slug:"restrictions",children:[{level:3,title:"Restricted preview function",slug:"restricted-preview-function",children:[]}]}],git:{createdTime:1644739828e3,updatedTime:1644739828e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]},readingTime:{minutes:2.66,words:798},filePathRelative:"en/guide/client/syntax.md"}},9187:(s,a,n)=>{n.r(a),n.d(a,{default:()=>p});const t=(0,n(8917).uE)('<p>You can use many syntax in your comment, including expanded Markdown syntax and HTML tags.</p><h2 id="markdown-support" tabindex="-1"><a class="header-anchor" href="#markdown-support" aria-hidden="true">#</a> Markdown Support</h2><p>We support full Markdown syntax and the following extensions.</p><h3 id="gfm-markdown-favor" tabindex="-1"><a class="header-anchor" href="#gfm-markdown-favor" aria-hidden="true">#</a> GFM Markdown Favor</h3><details class="custom-block details"><summary>Delete lines</summary><p>This is <s>deleted</s>.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>This is <span class="token strike"><span class="token punctuation">~~</span><span class="token content">deleted</span><span class="token punctuation">~~</span></span>.\n</code></pre></div></details><details class="custom-block details"><summary>Tables</summary><table><thead><tr><th style="text-align:center;">center</th><th style="text-align:right;">right</th><th style="text-align:left;">left</th></tr></thead><tbody><tr><td style="text-align:center;">For center align use <code>:-:</code></td><td style="text-align:right;">For right align use <code>-:</code></td><td style="text-align:left;">For left align use <code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">aaaaaaaaa</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">           center           </span><span class="token punctuation">|</span><span class="token table-header important">                    right </span><span class="token punctuation">|</span><span class="token table-header important"> left                    </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:------------------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:----------------------</span> <span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> For center align use <span class="token code-snippet code keyword">`:-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> For right align use <span class="token code-snippet code keyword">`-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> For left align use <span class="token code-snippet code keyword">`:-`</span> </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">             b              </span><span class="token punctuation">|</span><span class="token table-data">                aaaaaaaaa </span><span class="token punctuation">|</span><span class="token table-data"> aaaa                    </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">             c              </span><span class="token punctuation">|</span><span class="token table-data">                     aaaa </span><span class="token punctuation">|</span><span class="token table-data"> a                       </span><span class="token punctuation">|</span>\n</span></span></code></pre></div></details><h3 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript" aria-hidden="true">#</a> Superscript and Subscript</h3><p>Use <code>^</code> and <code>~</code> to mark the superscript and subscript.</p><details class="custom-block details"><summary>Demo</summary><ul><li>19<sup>th</sup></li><li>H<sub>2</sub>O</li></ul><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 19^th^\n<span class="token list punctuation">-</span> H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O\n</code></pre></div></details><h3 id="emojis" tabindex="-1"><a class="header-anchor" href="#emojis" aria-hidden="true">#</a> Emojis</h3><p>Besides user-configured or built-in Weibo emojis, we also support complete Emoji shorthand emoticons.</p><details class="custom-block details"><summary>Demo</summary><p>😃 😦 😄 😆 😊 😃 😏 😍 😘</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>:) :( :smile: :laughing: :blush: :smiley: :smirk: :heart_eyes: :kissing_heart:\n</code></pre></div></details><h3 id="code-block-highlight" tabindex="-1"><a class="header-anchor" href="#code-block-highlight" aria-hidden="true">#</a> Code Block Highlight</h3><p>We support highlighting in almost all languages.</p><details class="custom-block details"><summary>Demo</summary><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// Just a lil’ script to show off that inline JS gets highlighted</span>\n      window<span class="token punctuation">.</span>console <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/favicon.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Prism<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/style.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themes/prism.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-noprefix</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/vendor/prefixfree.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token keyword">var</span> _gaq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;_setAccount&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;UA-33746269-1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;_trackPageview&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google-analytics.com/ga.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> Use `Prism.plugins.fileHighlight.highlight` instead. */</span>\nPrism<span class="token punctuation">.</span><span class="token function-variable function">fileHighlight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>logged<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.&#39;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    logged <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  Prism<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>fileHighlight<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Questrial<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Arvo<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://lea.verou.me/logo.otf<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;LeaVerou&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/*\n Shared styles\n */</span>\n\n<span class="token selector">section h1,\n#features li strong,\nheader h2,\nfooter p</span> <span class="token punctuation">{</span>\n  <span class="token property">font</span><span class="token punctuation">:</span> 100% Rockwell<span class="token punctuation">,</span> Arvo<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></details><h3 id="mathematical-formula" tabindex="-1"><a class="header-anchor" href="#mathematical-formula" aria-hidden="true">#</a> Mathematical formula</h3><p>You can use <code>$ ... $</code> to create inline formulas, or use <code>$$ ... $$</code> to create block-level formulas.</p><details class="custom-block details"><summary>Demo</summary><p>Euler’s identity <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.908em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">iπ</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span> is a beautiful formula in <span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8141em;"></span><span class="mord"><span class="mord mathbb">R</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>Euler’s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.\n</code></pre></div><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.4em;vertical-align:-0.95em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3714em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.5904em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord" style="margin-right:0.05556em;">∂</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:3.0277em;vertical-align:-1.2777em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.3414em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.6644em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">ω</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7144em;"><span style="top:-3.113em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.6514em;"><span style="top:-1.8723em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.05em;"><span class="pstrut" style="height:3.05em;"></span><span><span class="mop op-symbol large-op">∑</span></span></span><span style="top:-4.3em;margin-left:0em;"><span class="pstrut" style="height:3.05em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:1.2777em;"><span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.5017em;"><span style="top:-2.314em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7507em;"><span style="top:-2.989em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.677em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mopen">(</span><span class="mord">−</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">⋯</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.02778em;">r</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord mathnormal">i</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.02778em;">r</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.686em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p><div class="language-markdown ext-md"><pre class="language-markdown"><code>$$\n\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}\n$$\n</code></pre></div></details><h2 id="embed-html" tabindex="-1"><a class="header-anchor" href="#embed-html" aria-hidden="true">#</a> Embed HTML</h2><p>Feel free to add any HTML content unless triggering the protection mechanism below.</p><h2 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions" aria-hidden="true">#</a> Restrictions</h2><div class="custom-container info"><p class="custom-container-title">Spam protection</p><ul><li><p>To prevent users from creating submitable forms in the comment area to trick other visitors submitting information, <code>&lt;form&gt;</code> and <code>&lt;input&gt;</code> are not allowed</p></li><li><p>To prevent users from using style tag to revise website pages or modify their own comment styles to implant spam ads, the <code>&lt;style&gt;</code> tag and the <code>style</code> attribute are not allowed.</p></li><li><p>To prevent users from abusing media autoplay feature, <code>autoplay</code> attribute is not allowed.</p></li></ul></div><div class="custom-container info"><p class="custom-container-title">XSS prevention</p><ul><li><p>We use <a href="https://github.com/cure53/DOMPurify" target="_blank" rel="noopener noreferrer">DOMPurify</a> to sanitize every comment input to prevent potential XSS attacks. This means you can&#39;t use <code>&lt;iframe&gt;</code> or any form of script.</p></li><li><p>All links will be automatically set <code>rel=&quot;noreferrer noopener&quot;</code> and opened in a new window with <code>target=&quot;_ blank&quot;</code>.</p></li></ul></div><h3 id="restricted-preview-function" tabindex="-1"><a class="header-anchor" href="#restricted-preview-function" aria-hidden="true">#</a> Restricted preview function</h3><p>In order to control the size of <code>@waline/client</code> on client side, we only provides a simple Markdown parser in client side, so many syntax can <strong>correctly rendered in the comment area</strong>, but they <strong>cannot be displayed correctly in the preview panel</strong>.</p><p>This includes the following restrictions:</p><ul><li><p>Standard emoji syntax (e.g.: tada: <code>:tada:</code>) cannot be rendered correctly</p></li><li><p>Superscript and subscript (e.g.: <code>H~2~O</code>, <code>x^2^</code>) cannot be rendered correctly</p></li><li><p>Tex syntax, or mathematical formulas (e.g.: <code>$a = 1$</code>) cannot be rendered correctly by default</p><p>You can set Tex rendering during preview by setting the <code>math</code> option.</p></li><li><p>Code blocks will be highlighted in random colors splited by specific characters</p></li></ul><div class="custom-container tip"><p class="custom-container-title">Principle</p><ol><li><p>Considering the size, the client uses <code>marked</code> for rendering and <code>hanabi</code> for highlighting, which will have the above limitations.</p></li><li><p>When a user submits a comment, the client embeds custom Emoji images, and the raw comment will be sent to the server.</p></li><li><p>The server receives the comment, uses <code>markdown-it</code> to render markdown correctly with related plugins, and uses <code>prismjs</code> to highlight code blocks according to the language, then render Tex according to users&#39; settings, and finally executes XSS sanitizing.</p></li><li><p>After successfully processed, the server storage the render content in database, and returns it to the client when needed so comment will be displayed normally.</p></li></ol></div>',28),e={},p=(0,n(6959).Z)(e,[["render",function(s,a){return t}]])}}]);