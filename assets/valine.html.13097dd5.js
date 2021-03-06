import{M as c}from"./MigrationTool.28dfdd75.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{f as r,r as i,o as p,c as _,a as n,b as t,w as s,u as h,d as e,e as a}from"./app.aca2db55.js";const u=n("p",null,"Since Waline completely reuses Valine's data structure in storage, migrating from Valine to Waline is very simple.",-1),m=e("Deploy backend according to "),f=e("Vercel Deploy"),g=e(" in "),k=n("em",null,"Get Started",-1),v=e(" section. "),b=n("code",null,"LEAN_ID",-1),x=e(" and "),E=n("code",null,"LEAN_KEY",-1),C=e(" should be the same as those applied for when using Valine before. Don't forget to set "),L=n("code",null,"LEAN_MASTER_KEY",-1),w=e(" for Waline."),y=e("Modifiy frontend scripts according to "),V=e("HTML"),A=e(" in "),I=n("em",null,"Get Started",-1),R=e(" section. Please remind we should remove old configuration "),N=n("code",null,"appId",-1),D=e(" and "),M=n("code",null,"appKey",-1),S=e(" from Valine, and add "),T=n("code",null,"serverURL",-1),Y=e(" option."),B=a(`<div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//unpkg.com/@waline/client@v2/dist/waline.js&#39;&gt;&lt;/script&gt;
</span><span class="token prefix inserted">+</span><span class="token line"> &lt;link href=&#39;//unpkg.com/@waline/client@v2/dist/waline.css&#39; rel=&#39;stylesheet&#39; /&gt;
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline.init({
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   appId: &#39;Your appId&#39;,
</span><span class="token prefix deleted">-</span><span class="token line">   appKey: &#39;Your appKey&#39;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   serverURL: &#39;YOUR SERVER URL&#39;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;
</span></span></code></pre></div>`,1),K={class:"custom-container tip"},P=a('<p class="custom-container-title">Config</p><p>Waline V2 has removed Valine support and moved to a better configuration. The following is a migration summary of some options:</p><ul><li><code>placeholder</code>: use <code>locales.placeholder</code></li><li><code>highlight</code>: use <code>highlighter</code></li><li><code>avatarForce</code>, <code>avatar</code>: use the server&#39;s <code>AVATAR_PROXY</code> environment variable</li><li><code>recordIP</code>: no longer display the user IP, and provide the <code>DISABLE_USERAGENT</code> environment variable on the server</li><li><code>requiredFields</code>: renamed to <code>requiredMeta</code></li><li><code>langMode</code>: renamed to <code>locales</code></li><li><code>emojiCDN</code>, <code>emojiMap</code>: use more powerful <code>emoji</code> options</li></ul>',3),U=e("For waline config, please refer to "),W=e("Client Config"),j=e(". You can also check "),F=e("Waline Client V2 Migration Guide"),G=e(" to learn about the options that are not compatible with Valine."),q=a('<div class="custom-container tip"><p class="custom-container-title">Using Leancloud China</p><p>Besides <code>LEAN_ID</code> and <code>LEAN_KEY</code>, you need to config <code>LEAN_SERVER</code> environment variable if you&#39;re the user of LeanCloud China.</p><p>Also, you need to complete Domain name filing to Local Communications Administration, that needs a Fixed IP\u3002</p></div><h2 id="migration-to-cloudbase" tabindex="-1"><a class="header-anchor" href="#migration-to-cloudbase" aria-hidden="true">#</a> Migration to Cloudbase</h2><p>If you want to migrate your Valine data to Tencent Cloud Database, you can use the import function of LeanCloud with the import function of the cloud database. Select <kbd>Import/Export</kbd> &gt; <kbd>Limit to certain classes</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>Export</kbd> in the LeanCloud background, and then you will receive a email notification.</p>',3),O=e("Paste the content of export file into the textarea below, and click the convert button to obtain the file to be imported. Enter the "),H={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},X=e("Tencent Cloud Development Backend \u2192 Database"),z=e(" page and select the "),J=n("code",null,"Comment",-1),Q=e(" collection. If the collection doesn't exist, click "),Z=n("kbd",null,"New Collection",-1),$=e(" in the upper left corner to create it. Click the import button above, select the converted file and wait a while to complete importing."),ee=r({__name:"valine.html",setup(ne){return(te,oe)=>{const o=i("RouterLink"),l=i("ExternalLinkIcon");return p(),_("div",null,[u,n("ol",null,[n("li",null,[n("p",null,[m,t(o,{to:"/en/guide/get-started.html#deploy-to-vercel-server"},{default:s(()=>[f]),_:1}),g,k,v,b,x,E,C,L,w])]),n("li",null,[n("p",null,[y,t(o,{to:"/en/guide/get-started.html#importing-in-html-client"},{default:s(()=>[V]),_:1}),A,I,R,N,D,M,S,T,Y]),B])]),n("div",K,[P,n("p",null,[U,t(o,{to:"/en/reference/client.html"},{default:s(()=>[W]),_:1}),j,t(o,{to:"/en/migration/client.html"},{default:s(()=>[F]),_:1}),G])]),q,n("p",null,[O,n("a",H,[X,t(l)]),z,J,Q,Z,$]),t(h(c))])}}});var le=d(ee,[["__file","valine.html.vue"]]);export{le as default};
