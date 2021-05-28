(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6074],{9788:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-46a7ea18",path:"/en/migration.html",title:"Migration from Valine",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Migration to Cloudbase",slug:"migration-to-cloudbase",children:[]}],filePathRelative:"en/migration.md",git:{updatedTime:1622171174e3,contributors:[]}}},7944:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>G});var s=a(8917);const t=(0,s.Wm)("h1",{id:"migration-from-valine"},[(0,s.Wm)("a",{class:"header-anchor",href:"#migration-from-valine"},"#"),(0,s.Uk)(" Migration from Valine")],-1),l=(0,s.Wm)("p",null,"Since Waline completely reuses Valine's data structure in storage, migrating from Valine to Waline is very simple.",-1),i=(0,s.Uk)("Deploy backend according to "),o=(0,s.Uk)("Vercel Deploy"),r=(0,s.Uk)(" in "),c=(0,s.Wm)("em",null,"Get Started",-1),p=(0,s.Uk)(" section. "),d=(0,s.Wm)("code",null,"LEAN_ID",-1),u=(0,s.Uk)(" and "),m=(0,s.Wm)("code",null,"LEAN_KEY",-1),k=(0,s.Uk)(" should be the same as those applied for when using Valine before. Don't forget to set "),f=(0,s.Wm)("code",null,"LEAN_MASTER_KEY",-1),b=(0,s.Uk)(" for Waline."),g=(0,s.Uk)("Modifiy frontend scripts according to "),h=(0,s.Uk)("HTML"),W=(0,s.Uk)(" in "),U=(0,s.Wm)("em",null,"Get Started",-1),v=(0,s.Uk)(" section. Please remind we should remove old configuration "),w=(0,s.Wm)("code",null,"appId",-1),x=(0,s.Uk)(" and "),E=(0,s.Wm)("code",null,"appKey",-1),C=(0,s.Uk)(" from Valine, and add "),L=(0,s.Wm)("code",null,"serverURL",-1),y=(0,s.Uk)(" option."),V=(0,s.uE)('<div class="language-diff ext-diff line-numbers-mode"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js&#39;&gt;&lt;/script&gt;\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  appId: &#39;Your appId&#39;,\n</span><span class="token prefix deleted">-</span><span class="token line">  appKey: &#39;Your appKey&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  serverURL: &#39;YOUR SERVER URL&#39;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });\n</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',1),R={class:"custom-container tip"},_=(0,s.Wm)("p",{class:"custom-container-title"},"Config",-1),M=(0,s.Uk)("Most configuration are same between Waline and Valine, but there are a bit difference. For waline config, please refer to "),D=(0,s.Uk)("Config"),I=(0,s.Uk)("。"),S=(0,s.uE)('<div class="custom-container tip"><p class="custom-container-title">Using Leancloud China</p><p>Besides <code>LEAN_ID</code> and <code>LEAN_KEY</code>, you need to config <code>LEAN_SERVER</code> environment variable if you&#39;re the user of LeanCloud China.</p></div><h2 id="migration-to-cloudbase"><a class="header-anchor" href="#migration-to-cloudbase">#</a> Migration to Cloudbase</h2><p>If you want to migrate your Valine data to Tencent Cloud Database, you can use the import function of LeanCloud with the import function of the cloud database. Select <kbd>Import/Export</kbd> &gt; <kbd>Limit to certain classes</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>Export</kbd> in the LeanCloud background, and then you will receive a email notification.</p>',3),A=(0,s.Uk)("Paste the content of export file into the textarea below, and click the convert button to obtain the file to be imported. Enter the "),N={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},Y=(0,s.Uk)("Tencent Cloud Development Backend → Database"),K=(0,s.Uk)(" page and select the "),T=(0,s.Wm)("code",null,"Comment",-1),j=(0,s.Uk)(" collection. If the collection doesn't exist, click "),P=(0,s.Wm)("kbd",null,"New Collection",-1),B=(0,s.Uk)(" in the upper left corner to create it. Click the import button above, select the converted file and wait a while to complete importing."),G={render:function(e,n){const a=(0,s.up)("RouterLink"),G=(0,s.up)("OutboundLink"),H=(0,s.up)("MigrationTool");return(0,s.wg)(),(0,s.j4)(s.HY,null,[t,l,(0,s.Wm)("ol",null,[(0,s.Wm)("li",null,[i,(0,s.Wm)(a,{to:"/en/get-started.html#deploy-to-vercel"},{default:(0,s.w5)((()=>[o])),_:1}),r,c,p,d,u,m,k,f,b]),(0,s.Wm)("li",null,[g,(0,s.Wm)(a,{to:"/en/get-started.html#html-references"},{default:(0,s.w5)((()=>[h])),_:1}),W,U,v,w,x,E,C,L,y])]),V,(0,s.Wm)("div",R,[_,(0,s.Wm)("p",null,[M,(0,s.Wm)(a,{to:"/en/client/basic.html"},{default:(0,s.w5)((()=>[D])),_:1}),I])]),S,(0,s.Wm)("p",null,[A,(0,s.Wm)("a",N,[Y,(0,s.Wm)(G)]),K,T,j,P,B]),(0,s.Wm)(H)],64)}}}}]);