import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as s,c,a as m,b as e,e as t,f as n,w as o,d}from"./app-QBNW30Fm.js";const u={},h=e("p",null,"The security of the Waline commenting system is our top priority. We'll cover Waline's security here.",-1),p=e("h2",{id:"comment-security",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comment-security"},[e("span",null,"Comment Security")])],-1),y=e("h3",{id:"anti-xss-attack",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#anti-xss-attack"},[e("span",null,"Anti-XSS Attack")])],-1),f={href:"https://github.com/cure53/DOMPurify",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"<iframe>",-1),v=d('<h3 id="prevent-link-tracking" tabindex="-1"><a class="header-anchor" href="#prevent-link-tracking"><span>Prevent link tracking</span></a></h3><p>All links will be automatically set to <code>rel=&quot;noreferrer noopener&quot;</code> and open in a new window with <code>target=&quot;_blank&quot;</code>.</p><h3 id="prevent-malicious-content-implantation" tabindex="-1"><a class="header-anchor" href="#prevent-malicious-content-implantation"><span>Prevent Malicious Content Implantation</span></a></h3><ul><li><p>In order to prevent users from creating submittable forms in the comment area to trick other visitors into submitting information, you cannot use <code>&lt;form&gt;</code> and <code>&lt;input&gt;</code></p></li><li><p>In order to prevent users from using styles to modify website pages or modify their own comment styles to plant spam ads, the <code>&lt;style&gt;</code> tag and the <code>style</code> attribute on the element are not available.</p></li><li><p>To prevent users from abusing media autoplay functionality, you cannot use the <code>autoplay</code> attribute.</p></li></ul><h3 id="prevent-forgery" tabindex="-1"><a class="header-anchor" href="#prevent-forgery"><span>Prevent Forgery</span></a></h3><p>Waline supports an account system, so you can force users to register and log in with an account. This way visitors won&#39;t be able to fake other people&#39;s comments.</p>',6),_=e("code",null,"login",-1),b=e("code",null,"LOGIN",-1),k=e("h2",{id:"site-security",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#site-security"},[e("span",null,"Site Security")])],-1),w=e("h3",{id:"frequency-limit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frequency-limit"},[e("span",null,"Frequency Limit")])],-1),S=e("h3",{id:"prevent-flooding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prevent-flooding"},[e("span",null,"Prevent flooding")])],-1),x=e("p",null,"Waline will detect existing comments when entering comments, and if it detects a comment with too high similarity, it will reject the corresponding comment. Those who can prevent flooding to a certain extent.",-1),W=e("h3",{id:"comment-review",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#comment-review"},[e("span",null,"Comment Review")])],-1),T=e("p",null,"When comment review is enabled, all new comments will be hidden by default. You can view and review comments in the Waline management terminal or the comment box on the corresponding page. Only the comments you approved can be displayed.",-1),P=e("h2",{id:"data-security",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#data-security"},[e("span",null,"Data Security")])],-1),A=e("p",null,"Since Waline have server side, no body can tamper with comment data or pageviews.",-1),C=e("p",null,[t("Meanwhile, you can set "),e("code",null,"DISABLE_USERAGENT"),t(" and "),e("code",null,"DISABLE_REGION"),t(" variables on the server side to prevent others from viewing the UA and geographic location of user comments.")],-1);function I(N,q){const a=r("ExternalLinkIcon"),i=r("RouteLink");return s(),c("div",null,[h,m(" more "),p,y,e("p",null,[t("Waline uses "),e("a",f,[t("DOMPurify"),n(a)]),t(" to filter each comment input on the server side to prevent potential XSS attacks. This means you won't be able to use "),g,t(" or any form of scripting.")]),v,e("p",null,[t("To enable this feature, you need to set mandatory login on both client and server, see "),n(i,{to:"/en/reference/client/props.html#login"},{default:o(()=>[_]),_:1}),t(" and "),n(i,{to:"/en/reference/server/env.html#basic"},{default:o(()=>[b]),_:1}),t(" for details.")]),k,w,e("p",null,[t("To prevent users from commenting, Waline will restrict commenting IP. By default, the same IP can only send one comment within a minute. You can change this limit in "),n(i,{to:"/en/reference/server/env.html#safety"},{default:o(()=>[t("Server Reference → Environment Variables")]),_:1}),t(".")]),S,x,W,e("p",null,[t("When your site is under malicious attack, during sensitive periods or when you are busy, you can enable the comment review feature. For details, see "),n(i,{to:"/en/reference/server/env.html#safety"},{default:o(()=>[t("Server Reference→Environment Variables")]),_:1}),t(" .")]),T,P,A,C])}const L=l(u,[["render",I],["__file","safety.html.vue"]]),M=JSON.parse(`{"path":"/en/guide/features/safety.html","title":"Security","lang":"en-US","frontmatter":{"title":"Security","icon":"safe","description":"The security of the Waline commenting system is our top priority. We'll cover Waline's security here. Comment Security Anti-XSS Attack Waline uses DOMPurify to filter each comme...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/features/safety.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/features/safety.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Security"}],["meta",{"property":"og:description","content":"The security of the Waline commenting system is our top priority. We'll cover Waline's security here. Comment Security Anti-XSS Attack Waline uses DOMPurify to filter each comme..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T16:18:50.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T16:18:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Security\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-30T16:18:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Comment Security","slug":"comment-security","link":"#comment-security","children":[{"level":3,"title":"Anti-XSS Attack","slug":"anti-xss-attack","link":"#anti-xss-attack","children":[]},{"level":3,"title":"Prevent link tracking","slug":"prevent-link-tracking","link":"#prevent-link-tracking","children":[]},{"level":3,"title":"Prevent Malicious Content Implantation","slug":"prevent-malicious-content-implantation","link":"#prevent-malicious-content-implantation","children":[]},{"level":3,"title":"Prevent Forgery","slug":"prevent-forgery","link":"#prevent-forgery","children":[]}]},{"level":2,"title":"Site Security","slug":"site-security","link":"#site-security","children":[{"level":3,"title":"Frequency Limit","slug":"frequency-limit","link":"#frequency-limit","children":[]},{"level":3,"title":"Prevent flooding","slug":"prevent-flooding","link":"#prevent-flooding","children":[]},{"level":3,"title":"Comment Review","slug":"comment-review","link":"#comment-review","children":[]}]},{"level":2,"title":"Data Security","slug":"data-security","link":"#data-security","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1669825130000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":1.37,"words":412},"filePathRelative":"en/guide/features/safety.md","localizedDate":"November 30, 2022","autoDesc":true}`);export{L as comp,M as data};
