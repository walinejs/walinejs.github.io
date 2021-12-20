"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1956],{3265:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s});const s={key:"v-aecc6e00",path:"/migration/valine.html",title:"从 Valine 迁移",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"迁移至 Cloudbase",slug:"迁移至-cloudbase",children:[]}],filePathRelative:"migration/valine.md",git:{updatedTime:1639964756e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},4892:(e,n,a)=>{a.r(n),a.d(n,{default:()=>D});var s=a(8917);const l=(0,s._)("h1",{id:"从-valine-迁移",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#从-valine-迁移","aria-hidden":"true"},"#"),(0,s.Uk)(" 从 Valine 迁移")],-1),t=(0,s._)("p",null,"由于 Waline 在存储上完全复用了 Valine 的数据结构，所以从 Valine 迁移至 Waline 非常简单。",-1),i=(0,s.Uk)("按照 "),p=(0,s.Uk)("Vercel 部署"),d=(0,s.Uk)(" 一节部署服务端。"),c=(0,s._)("code",null,"LEAN_ID",-1),o=(0,s.Uk)(" 和 "),r=(0,s._)("code",null,"LEAN_KEY",-1),u=(0,s.Uk)(" 和之前使用 Valine 申请的保持一致即可。同时请不要忘记为 Waline 设置 "),k=(0,s._)("code",null,"LEAN_MASTER_KEY",-1),g=(0,s.Uk)("。"),m=(0,s.Uk)("按照 "),h=(0,s.Uk)("HTML 片段"),_=(0,s.Uk)(" 一节修改对应的前端脚本。"),f=(0,s.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>你需要删除 Valine 原始的配置 <code>appId</code> 和 <code>appKey</code>，并添加 <code>serverURL</code>。</p></div><div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  appId: &#39;Your appId&#39;,\n</span><span class="token prefix deleted">-</span><span class="token line">  appKey: &#39;Your appKey&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  serverURL: &#39;YOUR SERVER URL&#39;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });\n</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;\n</span></span></code></pre></div>',2),U={class:"custom-container tip"},b=(0,s._)("p",{class:"custom-container-title"},"配置",-1),E=(0,s._)("p",null,[(0,s.Uk)("Waline 和 Valine 大部分的配置都是一样的，但也存在些许不同。对于 v1 及 v0.x 版本，你只需要删除 Valine 原始的配置 "),(0,s._)("code",null,"appId"),(0,s.Uk)(" 和 "),(0,s._)("code",null,"appKey"),(0,s.Uk)("，并添加 "),(0,s._)("code",null,"serverURL"),(0,s.Uk)("，其他选项均可正常工作。但是对于未来的 V2 我们将会移除某些 Valine 兼容，转向更好的配置方案。")],-1),v=(0,s.Uk)("Waline 具体的配置详见 "),x=(0,s.Uk)("客户端配置"),A=(0,s.Uk)("。你也可以查看 "),L=(0,s.Uk)("Waline 客户端 v1 迁移指南"),V=(0,s.Uk)(" 来了解与 Valine 不兼容的选项。"),W=(0,s.uE)('<div class="custom-container tip"><p class="custom-container-title">使用国内版 Leancloud</p><p>如果你是 Leancloud 国内版用户的话，除了 <code>LEAN_ID</code> 和 <code>LEAN_KEY</code>，还需要设置 <code>LEAN_SERVER</code> 环境变量，值为你的应用后台绑定的已备案域名。</p></div><h2 id="迁移至-cloudbase" tabindex="-1"><a class="header-anchor" href="#迁移至-cloudbase" aria-hidden="true">#</a> 迁移至 Cloudbase</h2><p>如果你想要将你的 Valine 数据迁移至腾讯云开发的云数据库中的话，可以使用 LeanCloud 的导出功能配合云数据库的导入功能完成。在 LeanCloud 后台选择 <kbd>导入导出</kbd> &gt; <kbd>限定 Class</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>导出</kbd>，之后会收到导出成功的邮件。</p>',3),C=(0,s.Uk)("将导出成功的文件内容粘贴至下方的文本框中，点击下方的转换按钮，获得待导入的文件。进入 "),R={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},w=(0,s.Uk)("腾讯云开发后台 → 数据库"),K=(0,s.Uk)(" 界面，选择 "),N=(0,s._)("code",null,"Comment",-1),Y=(0,s.Uk)(" 集合。若该集合不存在，点击左上角 "),y=(0,s._)("kbd",null,"新建集合",-1),B=(0,s.Uk)(" 创建。进入后点击上方的导入按钮，选择刚才获得的转换后文件稍待片刻即可完成导入。"),I={},D=(0,a(6959).Z)(I,[["render",function(e,n){const a=(0,s.up)("RouterLink"),I=(0,s.up)("OutboundLink"),D=(0,s.up)("MigrationTool");return(0,s.wg)(),(0,s.iD)(s.HY,null,[l,t,(0,s._)("ol",null,[(0,s._)("li",null,[(0,s._)("p",null,[i,(0,s.Wm)(a,{to:"/guide/get-started.html#vercel-%E9%83%A8%E7%BD%B2-%E6%9C%8D%E5%8A%A1%E7%AB%AF"},{default:(0,s.w5)((()=>[p])),_:1}),d,c,o,r,u,k,g])]),(0,s._)("li",null,[(0,s._)("p",null,[m,(0,s.Wm)(a,{to:"/guide/get-started.html#html-%E5%BC%95%E5%85%A5-%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:(0,s.w5)((()=>[h])),_:1}),_]),f])]),(0,s._)("div",U,[b,E,(0,s._)("p",null,[v,(0,s.Wm)(a,{to:"/reference/client.html"},{default:(0,s.w5)((()=>[x])),_:1}),A,(0,s.Wm)(a,{to:"/migration/client.html"},{default:(0,s.w5)((()=>[L])),_:1}),V])]),W,(0,s._)("p",null,[C,(0,s._)("a",R,[w,(0,s.Wm)(I)]),K,N,Y,y,B]),(0,s.Wm)(D)],64)}]])}}]);