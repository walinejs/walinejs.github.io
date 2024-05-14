import{_ as e,a as t,b as i,c as a,d as n,e as o,f as r,g as l,h as p}from"./netlify-10-Dmcv5v1Z.js";import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as d,a as f}from"./app-8cbFISj1.js";const m={},h=f('<p><a href="https://netlify.com" target="_blank" rel="noopener noreferrer">Netlify</a> 是知名的静态网站部署服务提供商，<a href="https://www.netlify.com/blog/edge-functions-explained/" target="_blank" rel="noopener noreferrer">Edge Functions</a> 是 Netlify 平台推出的一种服务，它允许在网站的边缘节点上运行 JavaScript 代码。</p><h2 id="如何部署" tabindex="-1"><a class="header-anchor" href="#如何部署"><span>如何部署</span></a></h2><p>点击 <a href="https://github.com/walinejs/netlify-starter/fork" target="_blank" rel="noopener noreferrer">Fork</a> 按钮创建 netlify 启动脚手架。</p><figure><img src="'+e+'" alt="netlify" tabindex="0"><figcaption>netlify</figcaption></figure><p><a href="https://app.netlify.com" target="_blank" rel="noopener noreferrer">https://app.netlify.com</a> 登录 Netlify 控制台，选择 <kbd>Add new site</kbd> - <kbd>Import an exist project</kbd> 添加网站。选择 GitHub 认证读取我们的 GitHub 项目列表。在列表中搜索我们刚才 Fork 生成的仓库名，点击该项目开始基于该仓库创建我们的 Netlify 网站。</p><table><thead><tr><th><img src="'+t+'" alt="netlify"></th><th><img src="'+i+'" alt="netlify"></th></tr></thead></table><p>创建 Netlify 网站之前，需要我们填入一些配置信息。除了环境变量，其它信息我们使用默认的即可。以 LeanCloud 部署服务为例，我们在这里增加上 Waline 需要的数据库服务环境变量。点击底部的 <kbd>Deploy site</kbd> 开始部署网站。</p><figure><img src="'+a+'" alt="netlify" tabindex="0"><figcaption>netlify</figcaption></figure><p>稍待片刻后我们的 Netlify 网站就部署成功了。我们可以点击顶部的 <kbd>Functions</kbd> 导航栏切换到云函数列表，其中 <code>comment</code> 则是我们部署好的 Waline 服务。点击它进入该云函数的详情页。</p><figure><img src="'+n+'" alt="netlify" tabindex="0"><figcaption>netlify</figcaption></figure><p>在详情页中，<code>Endpoint</code> 列出来的地址即为我们的 Waline 服务的部署地址。点击右边的复制按钮，在新标签页中打开它，测试下评论发布，一切成功~ 接下来就将这个域名配置在客户端中就可以愉快的评论了！</p><table><thead><tr><th><img src="'+o+'" alt="netlify"></th><th><img src="'+r+'" alt="netlify"></th></tr></thead></table><h2 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新"><span>如何更新</span></a></h2><p>进入到 GitHub 仓库中，修改 package.json 文件中的 <code>@waline/vercel</code> 版本号为最新版本即可。</p><h2 id="如何修改环境变量" tabindex="-1"><a class="header-anchor" href="#如何修改环境变量"><span>如何修改环境变量</span></a></h2><p>点击顶部的 <code>Site settings</code> 导航栏，选择 <code>Environments variables</code> 侧边栏，进入环境变量管理页。点击 <code>Add a variable</code> 按钮我们可以添加环境变量。</p><p>编辑完环境变量后，我们需要进入 <code>Deploys</code> 页面，选择 <code>Trigger deploy</code> - <code>Deploy site</code> 对网站进行重新部署才能使环境变量生效。</p><table><thead><tr><th><img src="'+l+'" alt="netlify"></th><th><img src="'+p+'" alt="netlify"></th></tr></thead></table>',18),y=[h];function g(_,u){return s(),d("div",null,y)}const v=c(m,[["render",g],["__file","netlify.html.vue"]]),x=JSON.parse('{"path":"/guide/deploy/netlify.html","title":"Netlify 部署","lang":"zh-CN","frontmatter":{"title":"Netlify 部署","icon":"netlify","redirectFrom":"/guide/server/netlify.html","description":"Netlify 是知名的静态网站部署服务提供商，Edge Functions 是 Netlify 平台推出的一种服务，它允许在网站的边缘节点上运行 JavaScript 代码。 如何部署 点击 Fork 按钮创建 netlify 启动脚手架。 netlifynetlify https://app.netlify.com 登录 Netlify 控制台，选...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/deploy/netlify.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/deploy/netlify.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Netlify 部署"}],["meta",{"property":"og:description","content":"Netlify 是知名的静态网站部署服务提供商，Edge Functions 是 Netlify 平台推出的一种服务，它允许在网站的边缘节点上运行 JavaScript 代码。 如何部署 点击 Fork 按钮创建 netlify 启动脚手架。 netlifynetlify https://app.netlify.com 登录 Netlify 控制台，选..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-29T05:05:44.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-29T05:05:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Netlify 部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-29T05:05:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"如何部署","slug":"如何部署","link":"#如何部署","children":[]},{"level":2,"title":"如何更新","slug":"如何更新","link":"#如何更新","children":[]},{"level":2,"title":"如何修改环境变量","slug":"如何修改环境变量","link":"#如何修改环境变量","children":[]}],"git":{"createdTime":1680373948000,"updatedTime":1693285544000,"contributors":[{"name":"Austin Lee","email":"i@imnerd.org","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.78,"words":534},"filePathRelative":"guide/deploy/netlify.md","localizedDate":"2023年4月1日","autoDesc":true}');export{v as comp,x as data};
