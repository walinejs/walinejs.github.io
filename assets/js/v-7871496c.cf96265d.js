(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2656],{2168:(e,n,t)=>{"use strict";t.r(n),t.d(n,{data:()=>a});const a={key:"v-7871496c",path:"/en/migration/valine.html",title:"Migration from Valine",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Migration to Cloudbase",slug:"migration-to-cloudbase",children:[]}],filePathRelative:"en/migration/valine.md",git:{updatedTime:1628556223e3,contributors:[]}}},4794:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>q});var a=t(8125),o=t(8917);const l=(0,a.createElementVNode)("h1",{id:"migration-from-valine",tabindex:"-1"},[(0,a.createElementVNode)("a",{class:"header-anchor",href:"#migration-from-valine","aria-hidden":"true"},"#"),(0,o.Uk)(" Migration from Valine")],-1),s=(0,a.createElementVNode)("p",null,"Since Waline completely reuses Valine's data structure in storage, migrating from Valine to Waline is very simple.",-1),i=(0,o.Uk)("Deploy backend according to "),c=(0,o.Uk)("Vercel Deploy"),r=(0,o.Uk)(" in "),d=(0,a.createElementVNode)("em",null,"Get Started",-1),p=(0,o.Uk)(" section. "),u=(0,a.createElementVNode)("code",null,"LEAN_ID",-1),m=(0,o.Uk)(" and "),k=(0,a.createElementVNode)("code",null,"LEAN_KEY",-1),f=(0,o.Uk)(" should be the same as those applied for when using Valine before. Don't forget to set "),g=(0,a.createElementVNode)("code",null,"LEAN_MASTER_KEY",-1),h=(0,o.Uk)(" for Waline."),E=(0,o.Uk)("Modifiy frontend scripts according to "),b=(0,o.Uk)("HTML"),V=(0,o.Uk)(" in "),v=(0,a.createElementVNode)("em",null,"Get Started",-1),U=(0,o.Uk)(" section. Please remind we should remove old configuration "),N=(0,a.createElementVNode)("code",null,"appId",-1),w=(0,o.Uk)(" and "),x=(0,a.createElementVNode)("code",null,"appKey",-1),y=(0,o.Uk)(" from Valine, and add "),C=(0,a.createElementVNode)("code",null,"serverURL",-1),L=(0,o.Uk)(" option."),R=(0,o.uE)('<div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;\n</span></span>\n<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,\n</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  appId: &#39;Your appId&#39;,\n</span><span class="token prefix deleted">-</span><span class="token line">  appKey: &#39;Your appKey&#39;\n</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  serverURL: &#39;YOUR SERVER URL&#39;\n</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });\n</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;\n</span></span></code></pre></div>',1),W={class:"custom-container tip"},_=(0,a.createElementVNode)("p",{class:"custom-container-title"},"Config",-1),M=(0,a.createElementVNode)("p",null,[(0,o.Uk)("Most configuration are same between Waline and Valine, but there are a bit difference. For v1 and v0.x versions, you only need to delete "),(0,a.createElementVNode)("code",null,"appId"),(0,o.Uk)(" and "),(0,a.createElementVNode)("code",null,"appKey"),(0,o.Uk)(" from Valine config and add "),(0,a.createElementVNode)("code",null,"serverURL"),(0,o.Uk)(", and everything should work well. But for future V2, we will remove some Valine compatibility and switch to a better config scheme.")],-1),I=(0,o.Uk)("For waline config, please refer to "),D=(0,o.Uk)("Client Config"),S=(0,o.Uk)(". You can also check "),Y=(0,o.Uk)("Waline Client v1 Migration Guide"),A=(0,o.Uk)(" to learn about the options that are not compatible with Valine."),K=(0,o.uE)('<div class="custom-container tip"><p class="custom-container-title">Using Leancloud China</p><p>Besides <code>LEAN_ID</code> and <code>LEAN_KEY</code>, you need to config <code>LEAN_SERVER</code> environment variable if you&#39;re the user of LeanCloud China.</p></div><h2 id="migration-to-cloudbase" tabindex="-1"><a class="header-anchor" href="#migration-to-cloudbase" aria-hidden="true">#</a> Migration to Cloudbase</h2><p>If you want to migrate your Valine data to Tencent Cloud Database, you can use the import function of LeanCloud with the import function of the cloud database. Select <kbd>Import/Export</kbd> &gt; <kbd>Limit to certain classes</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>Export</kbd> in the LeanCloud background, and then you will receive a email notification.</p>',3),T=(0,o.Uk)("Paste the content of export file into the textarea below, and click the convert button to obtain the file to be imported. Enter the "),B={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},G=(0,o.Uk)("Tencent Cloud Development Backend → Database"),P=(0,o.Uk)(" page and select the "),j=(0,a.createElementVNode)("code",null,"Comment",-1),F=(0,o.Uk)(" collection. If the collection doesn't exist, click "),H=(0,a.createElementVNode)("kbd",null,"New Collection",-1),O=(0,o.Uk)(" in the upper left corner to create it. Click the import button above, select the converted file and wait a while to complete importing."),q={render:function(e,n){const t=(0,o.up)("RouterLink"),q=(0,o.up)("OutboundLink"),z=(0,o.up)("MigrationTool");return(0,o.wg)(),(0,a.createElementBlock)(o.HY,null,[l,s,(0,a.createElementVNode)("ol",null,[(0,a.createElementVNode)("li",null,[i,(0,o.Wm)(t,{to:"/en/guide/get-started.html#deploy-to-vercel-server"},{default:(0,o.w5)((()=>[c])),_:1}),r,d,p,u,m,k,f,g,h]),(0,a.createElementVNode)("li",null,[E,(0,o.Wm)(t,{to:"/en/guide/get-started.html#importing-in-html-client"},{default:(0,o.w5)((()=>[b])),_:1}),V,v,U,N,w,x,y,C,L])]),R,(0,a.createElementVNode)("div",W,[_,M,(0,a.createElementVNode)("p",null,[I,(0,o.Wm)(t,{to:"/en/reference/client.html"},{default:(0,o.w5)((()=>[D])),_:1}),S,(0,o.Wm)(t,{to:"/en/migration/client.html"},{default:(0,o.w5)((()=>[Y])),_:1}),A])]),K,(0,a.createElementVNode)("p",null,[T,(0,a.createElementVNode)("a",B,[G,(0,o.Wm)(q)]),P,j,F,H,O]),(0,o.Wm)(z)],64)}}}}]);