(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2656],{2168:(e,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>a});const a={key:"v-7871496c",path:"/en/migration/valine.html",title:"Migration from Valine",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Migration to Cloudbase",slug:"migration-to-cloudbase",children:[]}],filePathRelative:"en/migration/valine.md",git:{updatedTime:1623812345e3,contributors:[]}}},4484:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>O});var a=t(8917);const s=(0,a.Wm)("h1",{id:"migration-from-valine"},[(0,a.Wm)("a",{class:"header-anchor",href:"#migration-from-valine"},"#"),(0,a.Uk)(" Migration from Valine")],-1),o=(0,a.Wm)("p",null,"Since Waline completely reuses Valine's data structure in storage, migrating from Valine to Waline is very simple.",-1),l=(0,a.Uk)("Deploy backend according to "),i=(0,a.Uk)("Vercel Deploy"),c=(0,a.Uk)(" in "),r=(0,a.Wm)("em",null,"Get Started",-1),d=(0,a.Uk)(" section. "),p=(0,a.Wm)("code",null,"LEAN_ID",-1),u=(0,a.Uk)(" and "),m=(0,a.Wm)("code",null,"LEAN_KEY",-1),k=(0,a.Uk)(" should be the same as those applied for when using Valine before. Don't forget to set "),f=(0,a.Wm)("code",null,"LEAN_MASTER_KEY",-1),g=(0,a.Uk)(" for Waline."),h=(0,a.Uk)("Modifiy frontend scripts according to "),b=(0,a.Uk)("HTML"),W=(0,a.Uk)(" in "),v=(0,a.Wm)("em",null,"Get Started",-1),U=(0,a.Uk)(" section. Please remind we should remove old configuration "),w=(0,a.Wm)("code",null,"appId",-1),y=(0,a.Uk)(" and "),x=(0,a.Wm)("code",null,"appKey",-1),C=(0,a.Uk)(" from Valine, and add "),E=(0,a.Wm)("code",null,"serverURL",-1),L=(0,a.Uk)(" option."),V=(0,a.uE)('<div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  appId: &#39;Your appId&#39;,\n</span><span class="token prefix deleted">-</span><span class="token line">  appKey: &#39;Your appKey&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  serverURL: &#39;YOUR SERVER URL&#39;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });\n</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;\n</span></span></code></pre></div>',1),R={class:"custom-container tip"},_=(0,a.Wm)("p",{class:"custom-container-title"},"Config",-1),M=(0,a.Wm)("p",null,[(0,a.Uk)("Most configuration are same between Waline and Valine, but there are a bit difference. For v1 and v0.x versions, you only need to delete "),(0,a.Wm)("code",null,"appId"),(0,a.Uk)(" and "),(0,a.Wm)("code",null,"appKey"),(0,a.Uk)(" from Valine config and add "),(0,a.Wm)("code",null,"serverURL"),(0,a.Uk)(", and everything should work well. But for future V2, we will remove some Valine compatibility and switch to a better config scheme.")],-1),I=(0,a.Uk)("For waline config, please refer to "),D=(0,a.Uk)("Client Config"),S=(0,a.Uk)(". You can also check "),Y=(0,a.Uk)("Waline Client v1 Migration Guide"),A=(0,a.Uk)(" to learn about the options that are not compatible with Valine."),K=(0,a.uE)('<div class="custom-container tip"><p class="custom-container-title">Using Leancloud China</p><p>Besides <code>LEAN_ID</code> and <code>LEAN_KEY</code>, you need to config <code>LEAN_SERVER</code> environment variable if you&#39;re the user of LeanCloud China.</p></div><h2 id="migration-to-cloudbase"><a class="header-anchor" href="#migration-to-cloudbase">#</a> Migration to Cloudbase</h2><p>If you want to migrate your Valine data to Tencent Cloud Database, you can use the import function of LeanCloud with the import function of the cloud database. Select <kbd>Import/Export</kbd> &gt; <kbd>Limit to certain classes</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>Export</kbd> in the LeanCloud background, and then you will receive a email notification.</p>',3),N=(0,a.Uk)("Paste the content of export file into the textarea below, and click the convert button to obtain the file to be imported. Enter the "),T={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},j=(0,a.Uk)("Tencent Cloud Development Backend → Database"),B=(0,a.Uk)(" page and select the "),G=(0,a.Wm)("code",null,"Comment",-1),P=(0,a.Uk)(" collection. If the collection doesn't exist, click "),F=(0,a.Wm)("kbd",null,"New Collection",-1),H=(0,a.Uk)(" in the upper left corner to create it. Click the import button above, select the converted file and wait a while to complete importing."),O={render:function(e,n){const t=(0,a.up)("RouterLink"),O=(0,a.up)("OutboundLink"),q=(0,a.up)("MigrationTool");return(0,a.wg)(),(0,a.j4)(a.HY,null,[s,o,(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[l,(0,a.Wm)(t,{to:"/en/guide/get-started.html#deploy-to-vercel-server"},{default:(0,a.w5)((()=>[i])),_:1}),c,r,d,p,u,m,k,f,g]),(0,a.Wm)("li",null,[h,(0,a.Wm)(t,{to:"/en/guide/get-started.html#importing-in-html-client"},{default:(0,a.w5)((()=>[b])),_:1}),W,v,U,w,y,x,C,E,L])]),V,(0,a.Wm)("div",R,[_,M,(0,a.Wm)("p",null,[I,(0,a.Wm)(t,{to:"/en/reference/client.html"},{default:(0,a.w5)((()=>[D])),_:1}),S,(0,a.Wm)(t,{to:"/en/migration/client.html"},{default:(0,a.w5)((()=>[Y])),_:1}),A])]),K,(0,a.Wm)("p",null,[N,(0,a.Wm)("a",T,[j,(0,a.Wm)(O)]),B,G,P,F,H]),(0,a.Wm)(q)],64)}}}}]);