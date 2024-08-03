import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as i,c as n,b as a}from"./app-ChF-ze19.js";const t={},s=a(`<p>The official client <code>@waline/client</code> is based on Vue3, provides responsive components and instances, and brings SPA (<strong>S</strong>ingle <strong>P</strong>age <strong>A</strong>application) support.</p><h2 id="vue-component" tabindex="-1"><a class="header-anchor" href="#vue-component"><span>Vue Component</span></a></h2><p>If you are building a Vue project, you can obtain and use Waline component by importing named exports <code>Waline</code> from <code>@waline/client/components</code>.</p><p>All component properties are reactive, which means that when you change the properties, the comment box will get an automatically update.</p><h2 id="other-projects" tabindex="-1"><a class="header-anchor" href="#other-projects"><span>Other projects</span></a></h2><p>In other SPA, you need to store the <code>WalineInstance</code> returned by the Waline function when Waline is initialized.</p><p>You can find an instance property <code>el</code> and two methods: <code>update()</code> and <code>destroy()</code> on <code>WalineInstance</code>.</p><h3 id="update" tabindex="-1"><a class="header-anchor" href="#update"><span>update</span></a></h3><p>You can call <code>update()</code> to update Waline at any time (e.g.: when user visits a new route). The <code>update</code> method receives an optional parameter <code>options</code>, except for <code>el</code>, other Waline initial options can be updated by passing in new values.</p><p>E.g.:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// in \`/\` route</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> waline</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> Waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  serverURL</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;https://example.com&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/* User: after some time, route has changed to \`/a.html\` */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// Now waline will start clear the comment and show a loading state.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// After some time, the counter and comments will be all updated</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;">waline</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  lang</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;en&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  login</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;disable&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}); </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">// waline will now display in English, and disable user login</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="working-principle" tabindex="-1"><a class="header-anchor" href="#working-principle"><span>Working Principle</span></a></h4><p>When calling <code>update</code>, the current option and history option will be merged by <strong>shallow copy</strong>, and Waline instance will refresh with the new option (and save the new option).</p><p>The default behavior of this method is to always <strong>regenerate default values</strong> for options that haven&#39;t been set yet, and <strong>use historical values</strong> for options that have been set.</p><p>There are two options you may need to pay special attention to: <code>path</code> and <code>locale</code>.</p><div class="hint-container warning"><p class="hint-container-title">Path precautions</p><p>In V2, the <code>path</code> parameter <strong>always reset</strong> on <code>update()</code>.</p><p>This means that in any update as long as you don&#39;t specify <code>path</code>, <code>path</code> will be reset to <code>window.location.pathname</code>.</p></div><div class="hint-container warning"><p class="hint-container-title">locale precautions</p><p>Due to the shallow copy, the old <code>locale</code> options are completely overwritten by the new <code>locale</code> options passed in by <code>update</code>.</p><p>Our point is: users usually want to switch the display language when updating the locale, so we set it as the expected behavior of the plugin. This also means that you can use <code>update({ locale: {} })</code> to clear the custom locale config in history.</p><p>If you really need to update one or more certain fields in <code>locale</code>, you need to pass the entire updated <code>locale</code>.</p></div><p>Meanwhile, the <code>update()</code> option has been optimized for asynchronous network requests, including:</p><ul><li>Refresh the comment area and re-request only when the path does change</li><li>The new <code>update()</code> call will automatically terminate the no longer needed request from the previous <code>update()</code>.</li></ul><h3 id="el" tabindex="-1"><a class="header-anchor" href="#el"><span>el</span></a></h3><p>The <code>el</code> property is the HTMLElement mounted by the current instance of Waline.</p><p>If you initialize Waline with <code>el: null</code> (only use comments and pageview statistics), this property will be <code>null</code>.</p><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy"><span>destroy</span></a></h3><p>If you forget to pass in the <code>serverURL</code> or Waline cannot find the mount location via the <code>el</code> option on the page, Waline will throw an Error indicating the reason for the error.</p><h3 id="initialization-failure" tabindex="-1"><a class="header-anchor" href="#initialization-failure"><span>Initialization Failure</span></a></h3><p>If you forget to set <code>serverURL</code> or Waline cannot find the mount location through the <code>el</code> option on the page, Waline will return a <code>WalineErrorInstance</code>.</p><p>There is only one attribute <code>errMsg</code> on <code>WalineErrorInstance</code> to indicate the reason for the initialization failure.</p><h3 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions"><span>Precautions</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Remember to destroy the instance</p><p>In order for Waline to properly release resources, please manually call <code>WalineInstance.destroy()</code> before removing the element where Waline is mounted.</p><p>Otherwise, some listeners may not be removed properly.</p></div>`,29),o=[s];function l(r,p){return i(),n("div",null,o)}const h=e(t,[["render",l],["__file","reactivity.html.vue"]]),u=JSON.parse('{"path":"/en/cookbook/reactivity.html","title":"Reactive Waline Instance","lang":"en-US","frontmatter":{"title":"Reactive Waline Instance","icon":"spa","order":-1,"description":"The official client @waline/client is based on Vue3, provides responsive components and instances, and brings SPA (Single Page Aapplication) support. Vue Component If you are bu...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/cookbook/reactivity.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/cookbook/reactivity.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Reactive Waline Instance"}],["meta",{"property":"og:description","content":"The official client @waline/client is based on Vue3, provides responsive components and instances, and brings SPA (Single Page Aapplication) support. Vue Component If you are bu..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Reactive Waline Instance\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Vue Component","slug":"vue-component","link":"#vue-component","children":[]},{"level":2,"title":"Other projects","slug":"other-projects","link":"#other-projects","children":[{"level":3,"title":"update","slug":"update","link":"#update","children":[]},{"level":3,"title":"el","slug":"el","link":"#el","children":[]},{"level":3,"title":"destroy","slug":"destroy","link":"#destroy","children":[]},{"level":3,"title":"Initialization Failure","slug":"initialization-failure","link":"#initialization-failure","children":[]},{"level":3,"title":"Precautions","slug":"precautions","link":"#precautions","children":[]}]}],"git":{"createdTime":1622293615000,"updatedTime":1717584295000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"en/cookbook/reactivity.md","localizedDate":"May 29, 2021","autoDesc":true}');export{h as comp,u as data};
