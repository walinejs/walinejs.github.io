import{_ as a,r as o,o as p,a as l,b as n,d as t,F as i,e as s,f as c}from"./app.9610ca2a.js";const r={},u=n("p",null,"Waline is a classic Client/Server architecture, which provides a relatively complete API interface. you can implement your own client implementation based on the API provided by the server.",-1),h=n("h2",{id:"clients",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#clients","aria-hidden":"true"},"#"),s(" Clients")],-1),d={href:"https://npmjs.com/@waline/client",target:"_blank",rel:"noopener noreferrer"},_=s("@waline/client"),k=n("p",null,"Official client implementation, build with Vue and TypeScript.",-1),m={href:"https://github.com/MiniValine/MiniValine",target:"_blank",rel:"noopener noreferrer"},g=s("MiniValine"),f=s("By "),v={href:"https://github.com/MHuiG",target:"_blank",rel:"noopener noreferrer"},b=s("@MHuiG"),x=s(" , supports Waline API. Usage:"),y=c(`<div class="language-html ext-html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/minivaline/dist/MiniValine.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline-comments<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">new</span> <span class="token class-name">MiniValine</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline-comments&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">backend</span><span class="token operator">:</span> <span class="token string">&#39;waline&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">serverURLs</span><span class="token operator">:</span> <span class="token string">&#39;YOUR SERVER URL&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div>`,1),w=n("h2",{id:"plugins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#plugins","aria-hidden":"true"},"#"),s(" Plugins")],-1),V=n("p",null,"You can use the following plugins to use Waline on different tools:",-1),M=n("h3",{id:"hexo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#hexo","aria-hidden":"true"},"#"),s(" Hexo")],-1),P={href:"https://npmjs.com/@waline/hexo-next",target:"_blank",rel:"noopener noreferrer"},W=s("@waline/hexo-next"),q=s(": Hexo NexT theme plugin"),I=n("h3",{id:"vuepress",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vuepress","aria-hidden":"true"},"#"),s(" VuePress")],-1),j={href:"https://vuepress-theme-hope.github.io/comment/",target:"_blank",rel:"noopener noreferrer"},E=s("@mr-hope/vuepress-plugin-comment"),N=s(": VuePress1 comment plugin"),R={href:"https://vuepress-theme-hope.github.io/v2/comment/",target:"_blank",rel:"noopener noreferrer"},A=s("vuepress-plugin-comment2"),B=s(": VuePress2 comment plugin"),H=n("h2",{id:"theme",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#theme","aria-hidden":"true"},"#"),s(" Theme")],-1),L={href:"https://vuepress-theme-hope.github.io/zh/",target:"_blank",rel:"noopener noreferrer"},S=s("vuepress-theme-hope"),T=s(": A powerful VuePress theme with tons of features"),U=n("h2",{id:"more",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#more","aria-hidden":"true"},"#"),s(" More")],-1),C=n("p",null,"We are looking forward to more clients and plugins from the community to expand the Waline ecosystem. \u{1F389}",-1),F=n("p",null,"If you implement any Waline client, ecological plugin or theme including Waline, please comment and let us know!",-1);function G(O,Y){const e=o("ExternalLinkIcon");return p(),l(i,null,[u,h,n("ul",null,[n("li",null,[n("p",null,[n("a",d,[_,t(e)])]),k]),n("li",null,[n("p",null,[n("a",m,[g,t(e)])]),n("p",null,[f,n("a",v,[b,t(e)]),x]),y])]),w,V,M,n("ul",null,[n("li",null,[n("a",P,[W,t(e)]),q])]),I,n("ul",null,[n("li",null,[n("a",j,[E,t(e)]),N]),n("li",null,[n("a",R,[A,t(e)]),B])]),H,n("ul",null,[n("li",null,[n("a",L,[S,t(e)]),T])]),U,C,F],64)}var D=a(r,[["render",G]]);export{D as default};
