(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9679],{7973:(n,a,s)=>{"use strict";s.r(a),s.d(a,{data:()=>e});const e={key:"v-5ceabafb",path:"/guide/get-started.html",title:"快速上手",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="快速上手"><a class="header-anchor" href="#快速上手">#</a> 快速上手</h1>\n<p>欢迎使用 Waline，只需几个步骤，你就可以在你的网站中启用 Waline 提供评论与浏览量服务。</p>\n',headers:[{level:2,title:"LeanCloud 设置 (数据库)",slug:"leancloud-设置-数据库",children:[]},{level:2,title:"Vercel 部署 (服务端)",slug:"vercel-部署-服务端",children:[]},{level:2,title:"HTML 引入 (客户端)",slug:"html-引入-客户端",children:[]},{level:2,title:"评论管理 (管理端)",slug:"评论管理-管理端",children:[]}],filePathRelative:"guide/get-started.md",git:{updatedTime:162236548e4,contributors:[]}}},9830:(n,a,s)=>{"use strict";s.r(a),s.d(a,{default:()=>S});var e=s(8917);const t=(0,e.Wm)("h1",{id:"快速上手"},[(0,e.Wm)("a",{class:"header-anchor",href:"#快速上手"},"#"),(0,e.Uk)(" 快速上手")],-1),l=(0,e.Wm)("p",null,"欢迎使用 Waline，只需几个步骤，你就可以在你的网站中启用 Waline 提供评论与浏览量服务。",-1),p=(0,e.Wm)("h2",{id:"leancloud-设置-数据库"},[(0,e.Wm)("a",{class:"header-anchor",href:"#leancloud-设置-数据库"},"#"),(0,e.Uk)(" LeanCloud 设置 (数据库)")],-1),c={href:"https://console.leancloud.app/login.html#/signin",target:"_blank",rel:"noopener noreferrer"},o=(0,e.Uk)("登录"),i=(0,e.Uk)(" 或 "),r={href:"https://console.leancloud.app/login.html#/signup",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("注册"),d=(0,e.Uk)(),m=(0,e.Wm)("code",null,"LeanCloud 国际版",-1),k=(0,e.Uk)(" 并进入 "),g={href:"https://console.leancloud.app/applist.html#/apps",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("控制台"),b=(0,e.Uk)("点击左下角 "),W={href:"https://console.leancloud.app/applist.html#/newapp",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("创建应用"),v=(0,e.Uk)(" 并起一个你喜欢的名字 (请选择免费的开发版):"),U=(0,e.Wm)("p",null,[(0,e.Wm)("img",{src:"https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg",alt:"创建应用"})],-1),L=(0,e.uE)('<li><p>进入应用，选择左下角的 <code>设置</code> &gt; <code>应用 Key</code>。你可以看到你的 <code>APP ID</code>,<code>APP Key</code> 和 <code>Master Key</code>。后续我们会用到这三个值。</p><p><img src="https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg" alt="ID 和 Key"></p></li>',1),E={class:"custom-container warning"},C=(0,e.Wm)("p",{class:"custom-container-title"},"注意",-1),_=(0,e.Uk)("如果你正在使用 Leancloud 国内版 ("),w={href:"https://leancloud.cn",target:"_blank",rel:"noopener noreferrer"},A=(0,e.Uk)("leancloud.cn"),q=(0,e.Uk)(")，我们推荐你切换到国际版 ("),y={href:"https://leancloud.app",target:"_blank",rel:"noopener noreferrer"},P=(0,e.Uk)("leancloud.app"),V=(0,e.Uk)(")。否则，你需要为应用额外绑定"),K=(0,e.Wm)("strong",null,"已备案",-1),j=(0,e.Uk)("的域名:"),N=(0,e.uE)('<ul><li>登录国内版并进入需要使用的应用</li><li>选择 <code>设置</code> &gt; <code>域名绑定</code> &gt; <code>API 访问域名</code> &gt; <code>绑定新域名</code> &gt; 输入域名 &gt; <code>确定</code>。</li><li>按照页面上的提示按要求在 DNS 上完成 CNAME 解析。</li></ul><p><img src="https://i.loli.net/2020/11/09/xfsX4JKt9zhuaiB.png" alt="域名设置"></p>',2),R=(0,e.Wm)("h2",{id:"vercel-部署-服务端"},[(0,e.Wm)("a",{class:"header-anchor",href:"#vercel-部署-服务端"},"#"),(0,e.Uk)(" Vercel 部署 (服务端)")],-1),D={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},M=(0,e.Wm)("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),H=(0,e.uE)('<ol><li><p>点击上方按钮，跳转至 Vercel 进行 Server 端部署。</p></li><li><p>如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。</p></li><li><p>输入一个你喜欢的 Vercel 项目名称并点击 <code>Continue</code> 继续:</p><p><img src="https://p2.ssl.qhimg.com/t018cd2a91a8896a555.png" alt="创建项目"></p></li><li><p>输入你想要设置的 GitHub 仓库名称并点击 <code>Continue</code> 继续。</p><p>此时 Vercel 会基于 Waline 模板帮助你新建并初始化该仓库。</p><p><img src="https://p4.ssl.qhimg.com/t01bb30e74f85ddf5b3.png" alt="创建仓库"></p></li><li><p>在仓库初始化完毕后，请进入 <code>Environment Variables</code> 中配置三个环境变量 <code>LEAN_ID</code>, <code>LEAN_KEY</code> 和 <code>LEAN_MASTER_KEY</code> 。它们的值分别对应上一步在 LeanCloud 中获得的 <code>APP ID</code>, <code>APP KEY</code>, <code>Master Key</code>。</p><p><img src="https://p5.ssl.qhimg.com/t019aec05e3e5fea5cc.png" alt="设置环境变量"></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你使用 LeanCloud 国内版，请额外配置 <code>LEAN_SERVER</code> 环境变量，值为你绑定好的域名。</p></div></li><li><p>点击 <code>Deploy</code> 部署。一两分钟后，满屏的烟花会庆祝你部署成功。此时请点击 <code>Visit</code> ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。</p><p><img src="https://p0.ssl.qhimg.com/t0142b58c2e8f886b28.png" alt="部署成功"></p></li></ol><h2 id="html-引入-客户端"><a class="header-anchor" href="#html-引入-客户端">#</a> HTML 引入 (客户端)</h2><p>在你的网页中进行如下设置:</p><ol><li><p>使用 CDN 引入 Waline: <code>//cdn.jsdelivr.net/npm/@waline/client</code>。</p></li><li><p>创建 <code>&lt;script&gt;</code> 标签使用 <code>Waline()</code> 初始化，并传入必要的 <code>el</code> 与 <code>serverURL</code> 选项。</p><ul><li><code>el</code> 选项是 Waline 渲染使用的元素，你可以设置一个字符串形式的 CSS 选择器或者一个 HTMLElement 对象。</li><li><code>serverURL</code> 是服务端的地址，即上一步获取到的值。</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  ..\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n      serverURL<span class="token operator">:</span> <span class="token string">&#39;https://your-domain.vercel.app&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>评论服务此时就会在你的网站上成功运行 🎉</p></li></ol><h2 id="评论管理-管理端"><a class="header-anchor" href="#评论管理-管理端">#</a> 评论管理 (管理端)</h2><ol><li>部署完成后，请访问 <code>&lt;serverURL&gt;/ui/register</code> 进行注册。首个注册的人会被设定成管理员。</li><li>管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。</li><li>用户也通过评论框注册账号，登陆后会跳转到自己的档案页。</li></ol>',6),S={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,l,p,(0,e.Wm)("ol",null,[(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[(0,e.Wm)("a",c,[o,(0,e.Wm)(s)]),i,(0,e.Wm)("a",r,[u,(0,e.Wm)(s)]),d,m,k,(0,e.Wm)("a",g,[h,(0,e.Wm)(s)])])]),(0,e.Wm)("li",null,[(0,e.Wm)("p",null,[b,(0,e.Wm)("a",W,[f,(0,e.Wm)(s)]),v]),U]),L]),(0,e.Wm)("div",E,[C,(0,e.Wm)("p",null,[_,(0,e.Wm)("a",w,[A,(0,e.Wm)(s)]),q,(0,e.Wm)("a",y,[P,(0,e.Wm)(s)]),V,K,j]),N]),R,(0,e.Wm)("p",null,[(0,e.Wm)("a",D,[M,(0,e.Wm)(s)])]),H],64)}}}}]);