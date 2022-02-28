import{_ as d,r as o,o as p,a as r,b as n,d as s,w as a,F as _,e,f as l}from"./app.45cb7b10.js";const u={},h=n("p",null,"\u7531\u4E8E Waline \u5728\u5B58\u50A8\u4E0A\u5B8C\u5168\u590D\u7528\u4E86 Valine \u7684\u6570\u636E\u7ED3\u6784\uFF0C\u6240\u4EE5\u4ECE Valine \u8FC1\u79FB\u81F3 Waline \u975E\u5E38\u7B80\u5355\u3002",-1),k=e("\u6309\u7167 "),g=e("Vercel \u90E8\u7F72"),f=e(" \u4E00\u8282\u90E8\u7F72\u670D\u52A1\u7AEF\u3002"),m=n("code",null,"LEAN_ID",-1),E=e(" \u548C "),x=n("code",null,"LEAN_KEY",-1),v=e(" \u548C\u4E4B\u524D\u4F7F\u7528 Valine \u7533\u8BF7\u7684\u4FDD\u6301\u4E00\u81F4\u5373\u53EF\u3002\u540C\u65F6\u8BF7\u4E0D\u8981\u5FD8\u8BB0\u4E3A Waline \u8BBE\u7F6E "),L=n("code",null,"LEAN_MASTER_KEY",-1),V=e("\u3002"),b=e("\u6309\u7167 "),A=e("HTML \u7247\u6BB5"),R=e(" \u4E00\u8282\u4FEE\u6539\u5BF9\u5E94\u7684\u524D\u7AEF\u811A\u672C\u3002"),C=l(`<div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u4F60\u9700\u8981\u5220\u9664 Valine \u539F\u59CB\u7684\u914D\u7F6E <code>appId</code> \u548C <code>appKey</code>\uFF0C\u5E76\u6DFB\u52A0 <code>serverURL</code>\u3002</p></div><div class="language-diff ext-diff"><pre class="language-diff"><code><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line"> &lt;script src=&#39;//unpkg.com/valine/dist/Valine.min.js&#39;&gt;&lt;/script&gt;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line"> &lt;script src=&#39;//cdn.jsdelivr.net/npm/@waline/client&#39;&gt;&lt;/script&gt;
</span></span>
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &lt;script&gt;
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  new Valine({
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  Waline({
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   el: &#39;#vcomments&#39;,
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">   appId: &#39;Your appId&#39;,
</span><span class="token prefix deleted">-</span><span class="token line">   appKey: &#39;Your appKey&#39;
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   serverURL: &#39;YOUR SERVER URL&#39;
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> });
</span><span class="token prefix unchanged"> </span><span class="token line"> &lt;/script&gt;
</span></span></code></pre></div>`,2),N={class:"custom-container tip"},B=n("p",{class:"custom-container-title"},"\u914D\u7F6E",-1),I=n("p",null,[e("Waline \u548C Valine \u5927\u90E8\u5206\u7684\u914D\u7F6E\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u4F46\u4E5F\u5B58\u5728\u4E9B\u8BB8\u4E0D\u540C\u3002\u5BF9\u4E8E v1 \u53CA v0.x \u7248\u672C\uFF0C\u4F60\u53EA\u9700\u8981\u5220\u9664 Valine \u539F\u59CB\u7684\u914D\u7F6E "),n("code",null,"appId"),e(" \u548C "),n("code",null,"appKey"),e("\uFF0C\u5E76\u6DFB\u52A0 "),n("code",null,"serverURL"),e("\uFF0C\u5176\u4ED6\u9009\u9879\u5747\u53EF\u6B63\u5E38\u5DE5\u4F5C\u3002\u4F46\u662F\u5BF9\u4E8E\u672A\u6765\u7684 V2 \u6211\u4EEC\u5C06\u4F1A\u79FB\u9664\u67D0\u4E9B Valine \u517C\u5BB9\uFF0C\u8F6C\u5411\u66F4\u597D\u7684\u914D\u7F6E\u65B9\u6848\u3002")],-1),K=e("Waline \u5177\u4F53\u7684\u914D\u7F6E\u8BE6\u89C1 "),W=e("\u5BA2\u6237\u7AEF\u914D\u7F6E"),Y=e("\u3002\u4F60\u4E5F\u53EF\u4EE5\u67E5\u770B "),w=e("Waline \u5BA2\u6237\u7AEF v1 \u8FC1\u79FB\u6307\u5357"),T=e(" \u6765\u4E86\u89E3\u4E0E Valine \u4E0D\u517C\u5BB9\u7684\u9009\u9879\u3002"),U=l('<div class="custom-container tip"><p class="custom-container-title">\u4F7F\u7528\u56FD\u5185\u7248 Leancloud</p><p>\u5982\u679C\u4F60\u662F Leancloud \u56FD\u5185\u7248\u7528\u6237\u7684\u8BDD\uFF0C\u9664\u4E86 <code>LEAN_ID</code> \u548C <code>LEAN_KEY</code>\uFF0C\u8FD8\u9700\u8981\u8BBE\u7F6E <code>LEAN_SERVER</code> \u73AF\u5883\u53D8\u91CF\uFF0C\u503C\u4E3A\u4F60\u7684\u5E94\u7528\u540E\u53F0\u7ED1\u5B9A\u7684\u63A5\u5165\u57DF\u540D\u3002</p></div><h2 id="\u8FC1\u79FB\u81F3-cloudbase" tabindex="-1"><a class="header-anchor" href="#\u8FC1\u79FB\u81F3-cloudbase" aria-hidden="true">#</a> \u8FC1\u79FB\u81F3 Cloudbase</h2><p>\u5982\u679C\u4F60\u60F3\u8981\u5C06\u4F60\u7684 Valine \u6570\u636E\u8FC1\u79FB\u81F3\u817E\u8BAF\u4E91\u5F00\u53D1\u7684\u4E91\u6570\u636E\u5E93\u4E2D\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 LeanCloud \u7684\u5BFC\u51FA\u529F\u80FD\u914D\u5408\u4E91\u6570\u636E\u5E93\u7684\u5BFC\u5165\u529F\u80FD\u5B8C\u6210\u3002\u5728 LeanCloud \u540E\u53F0\u9009\u62E9 <kbd>\u5BFC\u5165\u5BFC\u51FA</kbd> &gt; <kbd>\u9650\u5B9A Class</kbd> &gt; <kbd>Comment</kbd> &gt; <kbd>\u5BFC\u51FA</kbd>\uFF0C\u4E4B\u540E\u4F1A\u6536\u5230\u5BFC\u51FA\u6210\u529F\u7684\u90AE\u4EF6\u3002</p>',3),y=e("\u5C06\u5BFC\u51FA\u6210\u529F\u7684\u6587\u4EF6\u5185\u5BB9\u7C98\u8D34\u81F3\u4E0B\u65B9\u7684\u6587\u672C\u6846\u4E2D\uFF0C\u70B9\u51FB\u4E0B\u65B9\u7684\u8F6C\u6362\u6309\u94AE\uFF0C\u83B7\u5F97\u5F85\u5BFC\u5165\u7684\u6587\u4EF6\u3002\u8FDB\u5165 "),D={href:"https://console.cloud.tencent.com/tcb/db/index",target:"_blank",rel:"noopener noreferrer"},F=e("\u817E\u8BAF\u4E91\u5F00\u53D1\u540E\u53F0 \u2192 \u6570\u636E\u5E93"),M=e(" \u754C\u9762\uFF0C\u9009\u62E9 "),S=n("code",null,"Comment",-1),j=e(" \u96C6\u5408\u3002\u82E5\u8BE5\u96C6\u5408\u4E0D\u5B58\u5728\uFF0C\u70B9\u51FB\u5DE6\u4E0A\u89D2 "),H=n("kbd",null,"\u65B0\u5EFA\u96C6\u5408",-1),O=e(" \u521B\u5EFA\u3002\u8FDB\u5165\u540E\u70B9\u51FB\u4E0A\u65B9\u7684\u5BFC\u5165\u6309\u94AE\uFF0C\u9009\u62E9\u521A\u624D\u83B7\u5F97\u7684\u8F6C\u6362\u540E\u6587\u4EF6\u7A0D\u5F85\u7247\u523B\u5373\u53EF\u5B8C\u6210\u5BFC\u5165\u3002");function q(z,G){const t=o("RouterLink"),c=o("ExternalLinkIcon"),i=o("MigrationTool");return p(),r(_,null,[h,n("ol",null,[n("li",null,[n("p",null,[k,s(t,{to:"/guide/get-started.html#vercel-%E9%83%A8%E7%BD%B2-%E6%9C%8D%E5%8A%A1%E7%AB%AF"},{default:a(()=>[g]),_:1}),f,m,E,x,v,L,V])]),n("li",null,[n("p",null,[b,s(t,{to:"/guide/get-started.html#html-%E5%BC%95%E5%85%A5-%E5%AE%A2%E6%88%B7%E7%AB%AF"},{default:a(()=>[A]),_:1}),R]),C])]),n("div",N,[B,I,n("p",null,[K,s(t,{to:"/reference/client.html"},{default:a(()=>[W]),_:1}),Y,s(t,{to:"/migration/client.html"},{default:a(()=>[w]),_:1}),T])]),U,n("p",null,[y,n("a",D,[F,s(c)]),M,S,j,H,O]),s(i)],64)}var P=d(u,[["render",q]]);export{P as default};
