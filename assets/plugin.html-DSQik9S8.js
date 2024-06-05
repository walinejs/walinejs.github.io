import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as l,c as t,d as h,e as i,a as p,w as r,b as s}from"./app-47lnWMq3.js";const k={},d=s(`<p>Users can extend the custom hook function through the Hook provided by Waline to realize custom functions. But if users want to share custom Hook methods, they can only use the copy method. To solve this problem, the Waline plugin system came into being.</p><h2 id="install-the-plugin" tabindex="-1"><a class="header-anchor" href="#install-the-plugin"><span>Install the plugin</span></a></h2><p>A new <code>plugins</code> attribute has been added to Waline&#39;s initial configuration, which supports configuring multiple plugins.</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// index.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> Waline</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@waline/vercel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> HelloWorldPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@waline-plugins/hello-world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Waline</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">HelloWorldPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To install others&#39; plugin directly, you can also place plugin hooks direct in <code>plugins</code>:</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// index.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> Waline</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@waline/vercel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> HelloWorldPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@waline-plugins/hello-world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Waline</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      hooks</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> postSave</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">          // do what ever you want after comment saved</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">      middlewares</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        async</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">          await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="create-plugin" tabindex="-1"><a class="header-anchor" href="#create-plugin"><span>Create plugin</span></a></h2><h3 id="create-based-on-hook" tabindex="-1"><a class="header-anchor" href="#create-based-on-hook"><span>Create based on Hook</span></a></h3>`,8),o=s(`<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  hooks</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> postSave</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // do what ever you want after comment saved</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It should be noted that if the user installs multiple Hook plugins, the execution of the same hook function is executed in the order in which the plugins are installed. If the pre-hook method returns early, no subsequent operations will be performed.</p><h3 id="create-based-on-middleware" tabindex="-1"><a class="header-anchor" href="#create-based-on-middleware"><span>Create based on middleware</span></a></h3><p>If Hook can&#39;t meet your needs, you can use a more powerful middleware mode to customize development. The bottom layer of Waline uses the Node.js framework <a href="https://koajs.com" target="_blank" rel="noopener noreferrer">Koa</a>, and we expose Koa&#39;s middleware configuration as a whole, which can meet various customization needs of advanced developers.</p><p>If you don&#39;t know what Koa middleware is, you can search for it first. What you need to pay attention to when using the middleware mode to make plug-ins is that the callback method must write the execution of <code>await next()</code>, otherwise the follow-up operations will not be executed.</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  middlewares</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    async</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Of course, you can put the logic of Hook-type plug-ins and middleware-type plug-ins together, and Waline supports them.</p><h3 id="list-of-plugins" tabindex="-1"><a class="header-anchor" href="#list-of-plugins"><span>List of plugins</span></a></h3><p>Welcome to submit plugins~</p><ul><li><a href="https://github.com/walinejs/plugins/tree/master/packages/hello-world" target="_blank" rel="noopener noreferrer">@waline-plugins/hello-world</a></li><li><a href="https://github.com/walinejs/plugins/tree/master/packages/privacy" target="_blank" rel="noopener noreferrer">@waline-plugins/privacy</a></li><li><a href="https://github.com/walinejs/plugins/tree/master/packages/tencent-tms" target="_blank" rel="noopener noreferrer">@waline-plugins/tencent-tms</a></li></ul>`,10);function c(g,u){const e=n("RouteLink");return l(),t("div",null,[d,h("p",null,[i("It's easy to build a plugin. A plugin is contained by a collection of "),p(e,{to:"/en/reference/server/config.html#hooks"},{default:r(()=>[i("hooks.")]),_:1})]),o])}const B=a(k,[["render",c],["__file","plugin.html.vue"]]),v=JSON.parse('{"path":"/en/reference/server/plugin.html","title":"plugin system","lang":"en-US","frontmatter":{"title":"plugin system","icon":"api","description":"Users can extend the custom hook function through the Hook provided by Waline to realize custom functions. But if users want to share custom Hook methods, they can only use the ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/reference/server/plugin.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/reference/server/plugin.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"plugin system"}],["meta",{"property":"og:description","content":"Users can extend the custom hook function through the Hook provided by Waline to realize custom functions. But if users want to share custom Hook methods, they can only use the ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-28T15:53:14.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-28T15:53:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"plugin system\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-06-28T15:53:14.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Install the plugin","slug":"install-the-plugin","link":"#install-the-plugin","children":[]},{"level":2,"title":"Create plugin","slug":"create-plugin","link":"#create-plugin","children":[{"level":3,"title":"Create based on Hook","slug":"create-based-on-hook","link":"#create-based-on-hook","children":[]},{"level":3,"title":"Create based on middleware","slug":"create-based-on-middleware","link":"#create-based-on-middleware","children":[]},{"level":3,"title":"List of plugins","slug":"list-of-plugins","link":"#list-of-plugins","children":[]}]}],"git":{"createdTime":1685200076000,"updatedTime":1687967594000,"contributors":[{"name":"lizheming","email":"i@imnerd.org","commits":8},{"name":"Austin Lee","email":"i@imnerd.org","commits":1}]},"readingTime":{"minutes":1.24,"words":373},"filePathRelative":"en/reference/server/plugin.md","localizedDate":"May 27, 2023","autoDesc":true}');export{B as comp,v as data};
