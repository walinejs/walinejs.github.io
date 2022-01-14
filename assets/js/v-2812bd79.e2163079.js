"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6785],{1527:(e,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-2812bd79",path:"/en/guide/client/spa.html",title:"Single Page Application Support",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"update",slug:"update",children:[{level:3,title:"Working Principle",slug:"working-principle",children:[]}]},{level:2,title:"destroy",slug:"destroy",children:[]},{level:2,title:"Initialization Failure",slug:"initialization-failure",children:[]}],filePathRelative:"en/guide/client/spa.md",git:{updatedTime:1642169739e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},2423:(e,n,a)=>{a.r(n),a.d(n,{default:()=>s});const t=(0,a(8917).uE)('<h1 id="single-page-application-support" tabindex="-1"><a class="header-anchor" href="#single-page-application-support" aria-hidden="true">#</a> Single Page Application Support</h1><p>Waline brings support for SPA (<strong>S</strong>ingle <strong>P</strong>age <strong>A</strong> application).</p><p>In an SPA, you need to store the <code>WalineInstance</code> returned by the Waline function when Waline is initialized.</p><p>You can find an instance property <code>el</code> and two methods: <code>update()</code> and <code>destroy()</code> on <code>WalineInstance</code>.</p><h2 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h2><p>The <code>el</code> property is the HTMLElement mounted by the current instance of Waline.</p><p>If you initialize Waline without <code>el: null</code> (only use comments and pageview statistics), this property will be <code>null</code>.</p><h2 id="update" tabindex="-1"><a class="header-anchor" href="#update" aria-hidden="true">#</a> update</h2><p>You can call <code>update()</code> to update Waline. The <code>update</code> method receives an optional parameter <code>options</code>, except for the <code>el</code> and <code>dark</code> options, other Waline initial options can be updated by passing in new values.</p><p>E.g.:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// in `/` route</span>\n<span class="token keyword">const</span> waline <span class="token operator">=</span> <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;https://example.com&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* User: after some time, route has changed to `/a.html` */</span>\n\nwaline<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Now waline will start clear the comment and show a loading state.</span>\n<span class="token comment">// After some time, the counter and comments will be all updated</span>\n\nwaline<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>\n  login<span class="token operator">:</span> <span class="token string">&#39;disable&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// waline will now display in English, and disable user login</span>\n</code></pre></div><h3 id="working-principle" tabindex="-1"><a class="header-anchor" href="#working-principle" aria-hidden="true">#</a> Working Principle</h3><p>When calling <code>update</code>, the current option and history option will be merged by <strong>shallow copy</strong>, and Waline instance will refresh with the new option (and save the new option).</p><p>The default behavior of this method is to always <strong>regenerate default values</strong> for options that haven&#39;t been set yet, and <strong>use historical values</strong> for options that have been set.</p><p>There are two options you may need to pay special attention to: <code>path</code> and <code>locale</code>.</p><div class="custom-container warning"><p class="custom-container-title">Path precautions</p><p>You should be aware that the default value of the <code>path</code> option is <code>window.location.pathname</code>. As mentioned earlier:</p><blockquote><p>... always <strong>regenerate default values</strong> for options that haven&#39;t been set yet, and <strong>use historical values</strong> for options that have been set.</p></blockquote><p>If you just leave the <code>path</code> option, we will automatically update <code>path</code> to the current page path every time you call <code>update()</code>.</p><p>But once you set <code>path</code> previously, the behavior of calling <code>update()</code> without the <code>path</code> parameter is to use that historical value. In this case, you can call by setting <code>path</code> to <code>undefined</code> to make current and future calls dynamically read <code>window.location.pathname</code> again.</p></div><div class="custom-container warning"><p class="custom-container-title">locale precautions</p><p>Due to the shallow copy, the locale will be overided by the new <code>locale</code> option in <code>update</code>.</p><p>Our point is: users usually want to switch the display language when updating the locale, so we set it as the expected behavior of the plugin. This also means that you can use <code>update({ locale: {} })</code> to clear the custom locale config in history.</p><p>If you really need to update one or more certain fields in <code>locale</code>, you need to pass the entire updated <code>locale</code>.</p></div><p>Meanwhile, the <code>update()</code> option has been optimized for asynchronous network requests, including:</p><ul><li>Refresh the comment area and re-request only when the path does change</li><li>The new <code>update()</code> call will automatically terminate the no longer needed request from the previous <code>update()</code>.</li></ul><h2 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h2><p>You use the <code>destroy()</code> method to destory Waline instance. This will also clear all the contents of the Waline mounted element.</p><h2 id="initialization-failure" tabindex="-1"><a class="header-anchor" href="#initialization-failure" aria-hidden="true">#</a> Initialization Failure</h2><p>If you forget to set <code>serverURL</code> or Waline cannot find the mount location through the <code>el</code> option on the page, Waline will return a <code>WalineErrorInstance</code>.</p><p>There is only one attribute <code>errMsg</code> on <code>WalineErrorInstance</code> to indicate the reason for the initialization failure.</p>',24),o={},s=(0,a(6959).Z)(o,[["render",function(e,n){return t}]])}}]);