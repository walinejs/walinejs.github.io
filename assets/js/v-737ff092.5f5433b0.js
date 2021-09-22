"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6962],{5136:(a,n,s)=>{s.r(n),s.d(n,{data:()=>t});const t={key:"v-737ff092",path:"/en/guide/client/syntax.html",title:"Comment Syntax Support",lang:"en-US",frontmatter:{},excerpt:'<h1 id="comment-syntax-support" tabindex="-1"><a class="header-anchor" href="#comment-syntax-support" aria-hidden="true">#</a> Comment Syntax Support</h1>\n<p>You can add a variety of content in the comments, including expanded Markdown syntax and HTML tags.</p>\n',headers:[{level:2,title:"Markdown Support",slug:"markdown-support",children:[{level:3,title:"GFM Markdown Favor",slug:"gfm-markdown-favor",children:[]},{level:3,title:"Superscript and Subscript",slug:"superscript-and-subscript",children:[]},{level:3,title:"Emojis",slug:"emojis",children:[]},{level:3,title:"Code Block Highlight",slug:"code-block-highlight",children:[]},{level:3,title:"Mathematical formula",slug:"mathematical-formula",children:[]}]},{level:2,title:"Embed HTML",slug:"embed-html",children:[]},{level:2,title:"Restrictions",slug:"restrictions",children:[{level:3,title:"Spam protection",slug:"spam-protection",children:[]},{level:3,title:"XSS prevention",slug:"xss-prevention",children:[]},{level:3,title:"Restricted preview function",slug:"restricted-preview-function",children:[]}]}],filePathRelative:"en/guide/client/syntax.md",git:{updatedTime:1632316897e3,contributors:[]}}},753:(a,n,s)=>{s.r(n),s.d(n,{default:()=>u});var t=s(8917);const e=(0,t.uE)('<h1 id="comment-syntax-support" tabindex="-1"><a class="header-anchor" href="#comment-syntax-support" aria-hidden="true">#</a> Comment Syntax Support</h1><p>You can add a variety of content in the comments, including expanded Markdown syntax and HTML tags.</p><h2 id="markdown-support" tabindex="-1"><a class="header-anchor" href="#markdown-support" aria-hidden="true">#</a> Markdown Support</h2><p>We support tcomplete Markdown syntax and the following extensions.</p><h3 id="gfm-markdown-favor" tabindex="-1"><a class="header-anchor" href="#gfm-markdown-favor" aria-hidden="true">#</a> GFM Markdown Favor</h3><details class="custom-container details"><summary>Delete lines</summary><p>This is <s>deleted</s>.</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>This is <span class="token strike"><span class="token punctuation">~~</span><span class="token content">deleted</span><span class="token punctuation">~~</span></span>.\n</code></pre></div></details><details class="custom-container details"><summary>Tables</summary><table><thead><tr><th style="text-align:center;">center</th><th style="text-align:right;">right</th><th style="text-align:left;">left</th></tr></thead><tbody><tr><td style="text-align:center;">For center align use <code>:-:</code></td><td style="text-align:right;">For right align use <code>-:</code></td><td style="text-align:left;">For left align use <code>:-</code></td></tr><tr><td style="text-align:center;">b</td><td style="text-align:right;">aaaaaaaaa</td><td style="text-align:left;">aaaa</td></tr><tr><td style="text-align:center;">c</td><td style="text-align:right;">aaaa</td><td style="text-align:left;">a</td></tr></tbody></table><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">           center           </span><span class="token punctuation">|</span><span class="token table-header important">                    right </span><span class="token punctuation">|</span><span class="token table-header important"> left                    </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span> <span class="token punctuation">:------------------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">-----------------------:</span> <span class="token punctuation">|</span> <span class="token punctuation">:----------------------</span> <span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> For center align use <span class="token code-snippet code keyword">`:-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> For right align use <span class="token code-snippet code keyword">`-:`</span> </span><span class="token punctuation">|</span><span class="token table-data"> For left align use <span class="token code-snippet code keyword">`:-`</span> </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">             b              </span><span class="token punctuation">|</span><span class="token table-data">                aaaaaaaaa </span><span class="token punctuation">|</span><span class="token table-data"> aaaa                    </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data">             c              </span><span class="token punctuation">|</span><span class="token table-data">                     aaaa </span><span class="token punctuation">|</span><span class="token table-data"> a                       </span><span class="token punctuation">|</span>\n</span></span></code></pre></div></details><h3 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript" aria-hidden="true">#</a> Superscript and Subscript</h3><p>Use <code>^</code> and <code>~</code> to mark the superscript and subscript.</p><details class="custom-container details"><summary>Demo</summary><ul><li>19<sup>th</sup></li><li>H<sub>2</sub>O</li></ul><div class="language-markdown ext-md"><pre class="language-markdown"><code><span class="token list punctuation">-</span> 19^th^\n<span class="token list punctuation">-</span> H<span class="token strike"><span class="token punctuation">~</span><span class="token content">2</span><span class="token punctuation">~</span></span>O\n</code></pre></div></details><h3 id="emojis" tabindex="-1"><a class="header-anchor" href="#emojis" aria-hidden="true">#</a> Emojis</h3><p>Besides user-configured or built-in Weibo emojis, we also support complete Emoji abbreviated emoticons.</p><details class="custom-container details"><summary>Demo</summary><p>😃 😦 😄 😆 😊 😃 😏 😍 😘</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>:) :( :smile: :laughing: :blush: :smiley: :smirk: :heart_eyes: :kissing_heart:\n</code></pre></div></details><h3 id="code-block-highlight" tabindex="-1"><a class="header-anchor" href="#code-block-highlight" aria-hidden="true">#</a> Code Block Highlight</h3><p>We support highlighting in almost all languages.</p><details class="custom-container details"><summary>Demo</summary><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token comment">// Just a lil’ script to show off that inline JS gets highlighted</span>\n      window<span class="token punctuation">.</span>console <span class="token operator">&amp;&amp;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;foo&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>utf-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>icon<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/favicon.png<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Prism<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/style.css<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themes/prism.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-noprefix</span> <span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>assets/vendor/prefixfree.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n      <span class="token keyword">var</span> _gaq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;_setAccount&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;UA-33746269-1&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;_trackPageview&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://www.google-analytics.com/ga.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">async</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre></div><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token doc-comment comment">/** <span class="token keyword">@deprecated</span> Use `Prism.plugins.fileHighlight.highlight` instead. */</span>\nPrism<span class="token punctuation">.</span><span class="token function-variable function">fileHighlight</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>logged<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n      <span class="token string">&#39;Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.&#39;</span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    logged <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  Prism<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>fileHighlight<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div><div class="language-css ext-css"><pre class="language-css"><code><span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Questrial<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>\n<span class="token atrule"><span class="token rule">@import</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://fonts.googleapis.com/css?family=Arvo<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span>\n\n<span class="token atrule"><span class="token rule">@font-face</span></span> <span class="token punctuation">{</span>\n  <span class="token property">src</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>https://lea.verou.me/logo.otf<span class="token punctuation">)</span></span><span class="token punctuation">;</span>\n  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;LeaVerou&#39;</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/*\n Shared styles\n */</span>\n\n<span class="token selector">section h1,\n#features li strong,\nheader h2,\nfooter p</span> <span class="token punctuation">{</span>\n  <span class="token property">font</span><span class="token punctuation">:</span> 100% Rockwell<span class="token punctuation">,</span> Arvo<span class="token punctuation">,</span> serif<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></details><h3 id="mathematical-formula" tabindex="-1"><a class="header-anchor" href="#mathematical-formula" aria-hidden="true">#</a> Mathematical formula</h3><p>You can use <code>$ ... $</code> to create inline formulas, or use <code>$$ ... $$</code> to create block-level formulas.</p>',18),o={class:"custom-container details"},p=(0,t._)("summary",null,"Demo",-1),c=(0,t._)("div",{class:"language-markdown ext-md"},[(0,t._)("pre",{class:"language-markdown"},[(0,t._)("code",null,"Euler’s identity $e^{i\\pi}+1=0$ is a beautiful formula in $\\mathbb{R}^2$.\n")])],-1),l=(0,t._)("div",{class:"language-markdown ext-md"},[(0,t._)("pre",{class:"language-markdown"},[(0,t._)("code",null,"$$\n\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right)\n= \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\}\n$$\n")])],-1),i=(0,t.uE)('<h2 id="embed-html" tabindex="-1"><a class="header-anchor" href="#embed-html" aria-hidden="true">#</a> Embed HTML</h2><p>Feel free to add any HTML content unless triggering the protection mechanism below.</p><h2 id="restrictions" tabindex="-1"><a class="header-anchor" href="#restrictions" aria-hidden="true">#</a> Restrictions</h2><h3 id="spam-protection" tabindex="-1"><a class="header-anchor" href="#spam-protection" aria-hidden="true">#</a> Spam protection</h3><ul><li><p>To prevent users from creating submitable forms in the comment area to trick other visitors submitting information, <code>&lt;form&gt;</code> and <code>&lt;input&gt;</code> are not allowed</p></li><li><p>To prevent users from using style tag to revise website pages or modify their own comment styles to implant spam ads, the <code>&lt;style&gt;</code> tag and the <code>style</code> attribute are not allowed.</p></li><li><p>To prevent users from abusing media autoplay feature, <code>autoplay</code> attribute is not allowed.</p></li></ul><h3 id="xss-prevention" tabindex="-1"><a class="header-anchor" href="#xss-prevention" aria-hidden="true">#</a> XSS prevention</h3><ul><li><p>We use DOMPurify to sanitize every comment input to prevent potential XSS attacks. This means you can&#39;t use <code>&lt;iframe&gt;</code> or any form of script.</p></li><li><p>All links will be automatically set <code>rel=&quot;noreferrer noopener&quot;</code> and opened in a new window with <code>target=&quot;_ blank&quot;</code>.</p></li></ul><h3 id="restricted-preview-function" tabindex="-1"><a class="header-anchor" href="#restricted-preview-function" aria-hidden="true">#</a> Restricted preview function</h3><p>In order to control the size of the client <code>@waline / client</code>, many functions can <strong>correctly rendered in the comment area</strong>, but they <strong>cannot be displayed correctly in the preview mode</strong>.</p><p>This includes the following restrictions:</p><ul><li><p>Standard emoji syntax (e.g.: tada: <code>:tada:</code>) cannot be rendered correctly</p></li><li><p>Superscript and subscript (e.g.: <code>H~2~O</code>, <code>x^2^</code>) cannot be rendered correctly</p></li><li><p>Tex syntax, or mathematical formulas (e.g.: <code>$a = 1$</code>) cannot be rendered correctly</p></li><li><p>Code blocks will be highlighted in random colors splited by specific characters</p></li></ul><div class="custom-container tip"><p class="custom-container-title">Principle</p><ol><li><p>Considering the size, the client uses <code>marked</code> for rendering and <code>hanabi</code> for highlighting, which will have the above limitations.</p></li><li><p>When a user submits a comment, the client embeds custom Emoji images, and the raw comment will be sent to the server.</p></li><li><p>The server receives the comment, uses <code>markdown-it</code> to render markdown correctly with related plugins, and uses <code>prismjs</code> to highlight code blocks according to the language, and finally executes XSS sanitizing.</p></li><li><p>After successfully processed, the server storage the render content in database, and returns it to the client when needed so comment will be displayed normally.</p></li></ol></div>',12),u={components:{MathML:(a,n)=>(0,t.h)("div",{class:"math-ml",innerHTML:a.content})},render:function(a,n,s,u,r,m){const d=(0,t.up)("MathML");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,(0,t._)("details",o,[p,(0,t.Wm)(d,{content:'Euler’s identity <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> is a beautiful formula in <math xmlns="http://www.w3.org/1998/Math/MathML"><mrow><msup><mi mathvariant="double-struck">R</mi><mn>2</mn></msup></mrow></math>.'}),c,(0,t.Wm)(d,{content:'<math display="block" xmlns="http://www.w3.org/1998/Math/MathML"><mrow><mfrac><msup><mi mathvariant="normal">∂</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">∂</mi><msup><mi>ω</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>ω</mi></msup><mi>ω</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>−</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>⋯</mo><mo stretchy="false">(</mo><mi>r</mi><mo>−</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>⁡</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>−</mo><mi>i</mi></mrow></msup></mrow><msup><mi>ω</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow></math>'}),l]),i],64)}}}}]);