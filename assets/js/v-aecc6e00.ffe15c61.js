(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1956],{3265:(e,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>a});const a={key:"v-aecc6e00",path:"/migration/valine.html",title:"从 Valine 迁移",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"迁移至 Cloudbase",slug:"迁移至-cloudbase",children:[]}],filePathRelative:"migration/valine.md",git:{updatedTime:162398062e4,contributors:[]}}},4368:(e,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>y});var a=s(8917);const l=(0,a.Wm)("h1",{id:"从-valine-迁移"},[(0,a.Wm)("a",{class:"header-anchor",href:"#从-valine-迁移"},"#"),(0,a.Uk)(" 从 Valine 迁移")],-1),t=(0,a.Wm)("p",null,"由于 Waline 在存储上完全复用了 Valine 的数据结构，所以从 Valine 迁移至 Waline 非常简单。",-1),p=(0,a.Uk)("按照 "),c=(0,a.Uk)("Vercel 部署"),i=(0,a.Uk)(" 一节部署服务端。"),d=(0,a.Wm)("code",null,"LEAN_ID",-1),o=(0,a.Uk)(" 和 "),r=(0,a.Wm)("code",null,"LEAN_KEY",-1),k=(0,a.Uk)(" 和之前使用 Valine 申请的保持一致即可。同时请不要忘记为 Waline 设置 "),u=(0,a.Wm)("code",null,"LEAN_MASTER_KEY",-1),m=(0,a.Uk)("。"),g=(0,a.Uk)("按照 "),W=(0,a.Uk)("HTML 片段"),f=(0,a.Uk)(" 一节修改对应的前端脚本。"),h=(0,a.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>你需要删除 Valine 原始的配置 <code>appId</code> 和 <code>appKey</code>，并添加 <code>serverURL</code>。</p></div><div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  appId: &#39;Your appId&#39;,\n</span><span class="token prefix deleted">-</span><span class="token line">  appKey: &#39;Your appKey&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  serverURL: &#39;YOUR SERVER URL&#39;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });\n</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;\n</span></span></code></pre></div>',2),U={class:"custom-container tip"},E=(0,a.Wm)("p",{class:"custom-container-title"},"配置",-1),v=(0,a.Wm)("p",null,[(0,a.Uk)("Waline 和 Valine 大部分的配置都是一样的，但也存在些许不同。对于 v1 及 v0.x 版本，你只需要删除 Valine 原始的配置 "),(0,a.Wm)("code",null,"appId"),(0,a.Uk)(" 和 "),(0,a.Wm)("code",null,"appKey"),(0,a.Uk)("，并添加 "),(0,a.Wm)("code",null,"serverURL"),(0,a.Uk)("，其他选项均可正常工作。但是对于未来的 V2 我们将会移除某些 Valine 兼容，转向更好的配置方案。")],-1),b=(0,a.Uk)("Waline 具体的配置详见 "),A=(0,a.Uk)("客户端配置"),L=(0,a.Uk)("。你也可以查看 "),V=(0,a.Uk)("Waline 客户端 v1 迁移指南"),x=(0,a.Uk)(" 来了解与 Valine 不兼容的选项。"),C=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">使用国内版 Leancloud</p><p>如果你是 Leancloud 国内版用户的话，除了 <code>LEAN_ID</code> 和 <code>LEAN_KEY</code>，还需要设置 <code>LEAN_SERVER</code> 环境变量，值为你的应用后台绑定的已备案域名。</p></div><h2 id="迁移至-cloudbase"><a class="header-anchor" href="#迁移至-cloudbase">#</a> 迁移至 Cloudbase</h2><p>如果你想要将你的 Valine 数据迁移至腾讯云开发的云数据库中的话，可以使用 LeanCloud 的导出功能配合云数据库的导入功能完成。在 LeanCloud 后台选择 <kbd>导入导出</kbd> &gt; <kbd>限定 Class</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>导出</kbd>，之后会收到导出成功的邮件。</p>',3),R=(0,a.Uk)("将导出成功的文件内容粘贴至下方的文本框中，点击下方的转换按钮，获得待导入的文件。进入 "),_={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},w=(0,a.Uk)("腾讯云开发后台 → 数据库"),K=(0,a.Uk)(" 界面，选择 "),N=(0,a.Wm)("code",null,"Comment",-1),Y=(0,a.Uk)(" 集合。若该集合不存在，点击左上角 "),B=(0,a.Wm)("kbd",null,"新建集合",-1),I=(0,a.Uk)(" 创建。进入后点击上方的导入按钮，选择刚才获得的转换后文件稍待片刻即可完成导入。"),y={render:function(e,n){const s=(0,a.up)("RouterLink"),y=(0,a.up)("OutboundLink"),D=(0,a.up)("MigrationTool");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,t,(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[p,(0,a.Wm)(s,{to:"/guide/get-started.html#vercel-%E9%83%A8%E7%BD%B2-%E6%9C%8D%E5%8A%A1%E7%AB%AF"},{default:(0,a.w5)((()=>[c])),_:1}),i,d,o,r,k,u,m])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[g,(0,a.Wm)(s,{to:"/guide/get-started.html#html-%E5%BC%95%E5%85%A5-%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:(0,a.w5)((()=>[W])),_:1}),f]),h])]),(0,a.Wm)("div",U,[E,v,(0,a.Wm)("p",null,[b,(0,a.Wm)(s,{to:"/reference/client.html"},{default:(0,a.w5)((()=>[A])),_:1}),L,(0,a.Wm)(s,{to:"/migration/client.html"},{default:(0,a.w5)((()=>[V])),_:1}),x])]),C,(0,a.Wm)("p",null,[R,(0,a.Wm)("a",_,[w,(0,a.Wm)(y)]),K,N,Y,B,I]),(0,a.Wm)(D)],64)}}}}]);