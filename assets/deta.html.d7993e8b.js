import{_ as a,r as n,o as r,a as c,b as e,d as o,F as d,e as t,f as l}from"./app.45cb7b10.js";import{_ as p,a as _,b as i}from"./deta-3.2e02335b.js";const h={},u={href:"https://www.deta.sh/",target:"_blank",rel:"noopener noreferrer"},m=t("Deta"),f=t(" \u662F\u4E00\u4E2A\u53EF\u514D\u8D39\u4F7F\u7528\u7684 Serverless \u90E8\u7F72\u5E73\u53F0\u3002\u6211\u4EEC\u53EF\u4EE5\u5FEB\u901F\u7684\u5C06 Waline \u90E8\u7F72\u5230 Deta \u5E73\u53F0\u4E0A\u3002"),g={href:"https://go.deta.dev/deploy?repo=https://github.com/walinejs/deta-starter",target:"_blank",rel:"noopener noreferrer"},v=e("img",{src:"https://button.deta.dev/1/svg",alt:"Deploy with Deta"},null,-1),k=e("p",null,"\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\uFF0C\u8DF3\u8F6C\u81F3 Deta \u5E73\u53F0\u5FEB\u901F\u90E8\u7F72\u3002\u767B\u5F55\u4E4B\u540E\u4F1A\u8BA9\u4F60\u9009\u62E9\u90E8\u7F72\u7684\u4F4D\u7F6E\uFF0C\u540C\u65F6\u9700\u8981\u4F60\u8F93\u5165\u73AF\u5883\u53D8\u91CF\u3002",-1),b=e("p",null,[e("img",{src:p,alt:"Deta-1"})],-1),D=e("p",null,[t("\u586B\u5199\u597D\u540E\u70B9\u51FB "),e("kbd",null,"Deploy"),t(" \u6309\u94AE\uFF0C\u7A0D\u7B49\u7247\u523B\u4F1A\u63D0\u793A\u4F60\u90E8\u7F72\u6210\u529F\uFF0C\u5E76\u4E3A\u4F60\u5C55\u793A\u90E8\u7F72\u540E\u7684\u7F51\u7AD9\u5730\u5740\u3002\u5C06\u5176\u586B\u5165\u524D\u7AEF\u811A\u672C\u7684 "),e("code",null,"serverURL"),t(" \u914D\u7F6E\u4E2D\uFF0C\u5373\u53EF\u5B8C\u6210\u5168\u90E8\u914D\u7F6E\u3002")],-1),x=e("p",null,[e("img",{src:_,alt:"Deta-2"})],-1),w=e("h2",{id:"\u5982\u4F55\u66F4\u65B0",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5982\u4F55\u66F4\u65B0","aria-hidden":"true"},"#"),t(" \u5982\u4F55\u66F4\u65B0")],-1),L=t("Deta \u4F7F\u7528 CLI \u547D\u4EE4\u884C\u5DE5\u5177\u5BF9\u9879\u76EE\u8FDB\u884C\u7BA1\u7406\u3002\u6309\u7167"),V={href:"https://docs.deta.sh/docs/cli/install",target:"_blank",rel:"noopener noreferrer"},E=t("\u6587\u6863"),N=t("\u6307\u793A\u5B89\u88C5 Deta \u7684\u547D\u4EE4\u884C\u5DE5\u5177\u3002"),y=l(`<div class="language-bash ext-sh"><pre class="language-bash"><code><span class="token comment"># Mac or Linux</span>
<span class="token function">curl</span> -fsSL https://get.deta.dev/cli.sh <span class="token operator">|</span> <span class="token function">sh</span>

<span class="token comment"># Windows for powershell</span>
iwr https://get.deta.dev/cli.ps1 -useb <span class="token operator">|</span> iex
</code></pre></div><p>\u88C5\u597D\u4E4B\u540E\u6211\u4EEC\u4F7F\u7528 <code>deta login</code> \u6765\u767B\u5F55\u547D\u4EE4\u884C\uFF0C\u671F\u95F4\u4F1A\u6253\u5F00\u6D4F\u89C8\u5668\u7528\u4E8E\u767B\u5F55\u3002</p><p>\u66F4\u65B0\u4E4B\u524D\u6211\u4EEC\u9700\u8981\u5C06\u9879\u76EE\u514B\u9686\u4E0B\u6765\u3002\u8FDB\u5165\u5230\u6211\u4EEC\u7684\u9879\u76EE\u7684\u8BBE\u7F6E\u9875\uFF0C\u590D\u5236\u5E76\u6267\u884C\u9875\u9762\u4E2D\u7684 <code>deta clone</code> \u547D\u4EE4\uFF0C\u7A0D\u7B49\u4E00\u4F1A\u513F\u9879\u76EE\u5C31\u4E0B\u8F7D\u4E0B\u6765\u4E86\u3002</p><p><img src="`+i+'" alt="Deta-2"></p><p>\u4E4B\u540E\u6211\u4EEC\u53EF\u4EE5\u5728\u672C\u5730\u5BF9\u9879\u76EE\u4EE3\u7801\u8FDB\u884C\u4FEE\u6539\uFF0C\u6BD4\u5982\u5C06 <code>package.json</code> \u4E2D\u7684\u4F9D\u8D56\u7248\u672C\u4FEE\u6539\u81F3\u6700\u65B0\u3002</p><p>\u6700\u540E\u6211\u4EEC\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528 <code>deta deploy</code> \u547D\u4EE4\u5373\u53EF\u5B9E\u73B0\u7F51\u7AD9\u7684\u66F4\u65B0\u90E8\u7F72\u3002</p><h2 id="\u5982\u4F55\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u4FEE\u6539\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u5982\u4F55\u4FEE\u6539\u73AF\u5883\u53D8\u91CF</h2><p>\u4FEE\u6539\u6362\u8FDB\u53D8\u91CF\u540C\u6837\u9700\u8981\u4F7F\u7528 CLI \u8FDB\u884C\u64CD\u4F5C\u3002</p><p>\u6309\u7167\u521A\u624D\u7684\u6B65\u9AA4\u5C06\u9879\u76EE\u514B\u9686\u5230\u672C\u5730\u540E\uFF0C\u5728\u9879\u76EE\u4E2D\u65B0\u589E <code>.env</code> \u6587\u4EF6\uFF0C\u5C06\u9700\u8981\u4FEE\u6539\u7684\u73AF\u5883\u53D8\u91CF\u4F7F\u7528 <code>VAR_NAME=VALUE</code> \u7684\u5F62\u5F0F\u4E00\u884C\u4E00\u4E2A\u5199\u5728\u6587\u4EF6\u4E2D\u3002\u6700\u540E\u4F7F\u7528 <code>deta update -e .env</code> \u5373\u53EF\u5B8C\u6210\u73AF\u5883\u53D8\u91CF\u66F4\u65B0\u3002</p>',9),I=t("\u5177\u4F53\u53EF\u53C2\u8003 "),A={href:"https://docs.deta.sh/docs/micros/env_vars#setting-environment-variables",target:"_blank",rel:"noopener noreferrer"},B=t("Deta \u73AF\u5883\u53D8\u91CF\u6587\u6863"),C=t("\u3002");function S(j,F){const s=n("ExternalLinkIcon");return r(),c(d,null,[e("p",null,[e("a",u,[m,o(s)]),f]),e("p",null,[e("a",g,[v,o(s)])]),k,b,D,x,w,e("p",null,[L,e("a",V,[E,o(s)]),N]),y,e("p",null,[I,e("a",A,[B,o(s)]),C])],64)}var U=a(h,[["render",S]]);export{U as default};
