import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as l,c as t,d as h,e as i,a as k,w as p,b as s}from"./app-47lnWMq3.js";const r={},d=s(`<p>用户可以通过 Waline 提供的 Hook 扩展自定义钩子函数来实现自定义功能。但如果用户之间想要共享自定义的 Hook 方法的话，只能使用复制的方式。为了解决这个问题，Waline 插件系统应运而生。</p><h2 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件"><span>安装插件</span></a></h2><p>Waline 初始化配置新增了 <code>plugins</code> 属性，支持配置多个插件。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// index.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> Waline</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@waline/vercel&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> HelloWorldPlugin</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> require</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;@waline-plugins/hello-world&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> Waline</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  plugins</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">HelloWorldPlugin</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了直接安装别人的插件之外，我们也可以在这里配置自己的插件逻辑。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// index.js</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">});</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="制作插件" tabindex="-1"><a class="header-anchor" href="#制作插件"><span>制作插件</span></a></h2><h3 id="基于-hook-制作" tabindex="-1"><a class="header-anchor" href="#基于-hook-制作"><span>基于 Hook 制作</span></a></h3>`,8),o=s(`<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  hooks</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    async</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> postSave</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // do what ever you want after comment saved</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，如果用户安装了多个 Hook 类插件，同一个钩子函数的执行是安装插件加载的先后顺序来执行的。如果前置有钩子方法提前返回的话，就不会执行后续的操作了。</p><h3 id="基于中间件制作" tabindex="-1"><a class="header-anchor" href="#基于中间件制作"><span>基于中间件制作</span></a></h3><p>如果 Hook 没办法满足你的需求，则可以使用更强大的中间件模式来自定义开发。Waline 最底层是使用了 Node.js 框架 <a href="https://koajs.com" target="_blank" rel="noopener noreferrer">Koa</a>，我们将 Koa 的中间件配置整体暴露出来，这样可以满足高级开发者的各种自定义需求。</p><p>如果你不清楚 Koa 中间件是什么，可以先搜索了解一下。使用中间件模式制作插件需要注意的是，回调方法一定要写 <code>await next()</code> 的执行，否则不会执行后续操作。</p><div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">  middlewares</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    async</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">ctx</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> next</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然你完全可以讲 Hook 类插件和中间件类插件逻辑放在一块，这些 Waline 都是支持的。</p><h3 id="插件列表" tabindex="-1"><a class="header-anchor" href="#插件列表"><span>插件列表</span></a></h3><p>欢迎提交插件~</p><ul><li><a href="https://github.com/walinejs/plugins/tree/master/packages/hello-world" target="_blank" rel="noopener noreferrer">@waline-plugins/hello-world</a></li><li><a href="https://github.com/walinejs/plugins/tree/master/packages/privacy" target="_blank" rel="noopener noreferrer">@waline-plugins/privacy</a></li><li><a href="https://github.com/walinejs/plugins/tree/master/packages/tencent-tms" target="_blank" rel="noopener noreferrer">@waline-plugins/tencent-tms</a></li><li><a href="https://github.com/walinejs/plugins/tree/master/packages/link-interceptor" target="_blank" rel="noopener noreferrer">@waline-plugins/link-interceptor</a></li></ul>`,10);function c(g,B){const a=e("RouteLink");return l(),t("div",null,[d,h("p",null,[i("开发一款插件也非常的简单，基本和之前 "),k(a,{to:"/reference/server/config.html#%E8%AF%84%E8%AE%BA-hooks"},{default:p(()=>[i("Hook")]),_:1}),i(" 的使用方法一致，只是做了一层封装。")]),o])}const m=n(r,[["render",c],["__file","plugin.html.vue"]]),v=JSON.parse('{"path":"/reference/server/plugin.html","title":"插件系统","lang":"zh-CN","frontmatter":{"title":"插件系统","icon":"api","description":"用户可以通过 Waline 提供的 Hook 扩展自定义钩子函数来实现自定义功能。但如果用户之间想要共享自定义的 Hook 方法的话，只能使用复制的方式。为了解决这个问题，Waline 插件系统应运而生。 安装插件 Waline 初始化配置新增了 plugins 属性，支持配置多个插件。 除了直接安装别人的插件之外，我们也可以在这里配置自己的插件逻辑。...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/reference/server/plugin.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/reference/server/plugin.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"插件系统"}],["meta",{"property":"og:description","content":"用户可以通过 Waline 提供的 Hook 扩展自定义钩子函数来实现自定义功能。但如果用户之间想要共享自定义的 Hook 方法的话，只能使用复制的方式。为了解决这个问题，Waline 插件系统应运而生。 安装插件 Waline 初始化配置新增了 plugins 属性，支持配置多个插件。 除了直接安装别人的插件之外，我们也可以在这里配置自己的插件逻辑。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-17T07:14:57.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-17T07:14:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"插件系统\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-17T07:14:57.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装插件","slug":"安装插件","link":"#安装插件","children":[]},{"level":2,"title":"制作插件","slug":"制作插件","link":"#制作插件","children":[{"level":3,"title":"基于 Hook 制作","slug":"基于-hook-制作","link":"#基于-hook-制作","children":[]},{"level":3,"title":"基于中间件制作","slug":"基于中间件制作","link":"#基于中间件制作","children":[]},{"level":3,"title":"插件列表","slug":"插件列表","link":"#插件列表","children":[]}]}],"git":{"createdTime":1685200076000,"updatedTime":1708154097000,"contributors":[{"name":"lizheming","email":"i@imnerd.org","commits":7},{"name":"Austin Lee","email":"i@imnerd.org","commits":2}]},"readingTime":{"minutes":1.81,"words":542},"filePathRelative":"reference/server/plugin.md","localizedDate":"2023年5月27日","autoDesc":true}');export{m as comp,v as data};
