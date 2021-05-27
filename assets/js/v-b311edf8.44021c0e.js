(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3130],{3372:(n,e,s)=>{"use strict";s.r(e),s.d(e,{data:()=>a});const a={key:"v-b311edf8",path:"/migration.html",title:"从 Valine 迁移",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"迁移至 Cloudbase",slug:"迁移至-cloudbase",children:[]}],filePathRelative:"migration.md",git:{updatedTime:162212312e4,contributors:[]}}},265:(n,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>K});var a=s(8917);const l=(0,a.Wm)("h1",{id:"从-valine-迁移"},[(0,a.Wm)("a",{class:"header-anchor",href:"#从-valine-迁移"},"#"),(0,a.Uk)(" 从 Valine 迁移")],-1),t=(0,a.Wm)("p",null,"由于 Waline 在存储上完全复用了 Valine 的数据结构，所以从 Valine 迁移至 Waline 非常简单。",-1),p=(0,a.Uk)("按照 "),i=(0,a.Uk)("Vercel 部署"),c=(0,a.Uk)(" 一节部署服务端。"),d=(0,a.Wm)("code",null,"LEAN_ID",-1),r=(0,a.Uk)(" 和 "),o=(0,a.Wm)("code",null,"LEAN_KEY",-1),u=(0,a.Uk)(" 和之前使用 Valine 申请的保持一致即可。同时请不要忘记为 Waline 设置 "),k=(0,a.Wm)("code",null,"LEAN_MASTER_KEY",-1),m=(0,a.Uk)("。"),b=(0,a.Uk)("按照 "),g=(0,a.Uk)("HTML 片段"),f=(0,a.Uk)(" 一节修改对应的前端脚本。"),h=(0,a.uE)('<div class="custom-container warning"><p class="custom-container-title">注意</p><p>你需要删除 Valine 原始的配置 <code>appId</code> 和 <code>appKey</code>，并添加 <code>serverURL</code>。</p></div><div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js&#39;&gt;&lt;/script&gt;\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  appId: &#39;Your appId&#39;,\n</span><span class="token prefix deleted">-</span><span class="token line">  appKey: &#39;Your appKey&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  serverURL: &#39;YOUR SERVER URL&#39;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });\n</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',2),W={class:"custom-container tip"},U=(0,a.Wm)("p",{class:"custom-container-title"},"配置",-1),v=(0,a.Uk)("Waline 和 Valine 大部分的配置都是一样的，但也存在些许不同。Waline 具体的配置详见 "),E=(0,a.Uk)("配置项"),L=(0,a.Uk)("。"),x=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">使用国内版 Leancloud</p><p>如果你是 Leancloud 国内版用户的话，除了 <code>LEAN_ID</code> 和 <code>LEAN_KEY</code>，还需要设置 <code>LEAN_SERVER</code> 环境变量，值为你的应用后台绑定的已备案域名。</p></div><h2 id="迁移至-cloudbase"><a class="header-anchor" href="#迁移至-cloudbase">#</a> 迁移至 Cloudbase</h2><p>如果你想要将你的 Valine 数据迁移至腾讯云开发的云数据库中的话，可以使用 LeanCloud 的导出功能配合云数据库的导入功能完成。在 LeanCloud 后台选择 <kbd>导入导出</kbd> &gt; <kbd>限定 Class</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>导出</kbd>，之后会收到导出成功的邮件。</p>',3),V=(0,a.Uk)("将导出成功的文件内容粘贴至下方的文本框中，点击下方的转换按钮，获得待导入的文件。进入 "),R={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},_=(0,a.Uk)("腾讯云开发后台 → 数据库"),C=(0,a.Uk)(" 界面，选择 "),w=(0,a.Wm)("code",null,"Comment",-1),A=(0,a.Uk)(" 集合。若该集合不存在，点击左上角 "),N=(0,a.Wm)("kbd",null,"新建集合",-1),Y=(0,a.Uk)(" 创建。进入后点击上方的导入按钮，选择刚才获得的转换后文件稍待片刻即可完成导入。"),K={render:function(n,e){const s=(0,a.up)("RouterLink"),K=(0,a.up)("OutboundLink"),I=(0,a.up)("MigrationTool");return(0,a.wg)(),(0,a.j4)(a.HY,null,[l,t,(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[p,(0,a.Wm)(s,{to:"/get-started.html#vercel-%E9%83%A8%E7%BD%B2"},{default:(0,a.w5)((()=>[i])),_:1}),c,d,r,o,u,k,m])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[b,(0,a.Wm)(s,{to:"/get-started.html#html-%E7%89%87%E6%AE%B5"},{default:(0,a.w5)((()=>[g])),_:1}),f]),h])]),(0,a.Wm)("div",W,[U,(0,a.Wm)("p",null,[v,(0,a.Wm)(s,{to:"/client/basic.html"},{default:(0,a.w5)((()=>[E])),_:1}),L])]),x,(0,a.Wm)("p",null,[V,(0,a.Wm)("a",R,[_,(0,a.Wm)(K)]),C,w,A,N,Y]),(0,a.Wm)(I)],64)}}}}]);