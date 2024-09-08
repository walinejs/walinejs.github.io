import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as s,c as d,b as p,d as t,e as l,a as r,w as o}from"./app-BsgkWtVr.js";const u={};function m(f,e){const n=i("RouteLink");return s(),d("div",null,[e[11]||(e[11]=p('<p>Waline 评论系统的安全性是我们的首要考虑。我们将在这里介绍 Waline 的安全性。</p><h2 id="评论安全" tabindex="-1"><a class="header-anchor" href="#评论安全"><span>评论安全</span></a></h2><h3 id="防-xss-攻击" tabindex="-1"><a class="header-anchor" href="#防-xss-攻击"><span>防 XSS 攻击</span></a></h3><p>Waline 在服务端使用 <a href="https://github.com/cure53/DOMPurify" target="_blank" rel="noopener noreferrer">DOMPurify</a> 过滤每一个评论输入，以防止潜在的 XSS 攻击。这意味着你将不能使用 <code>&lt;iframe&gt;</code> 以及任何形式的脚本。</p><h3 id="防止链接跟踪" tabindex="-1"><a class="header-anchor" href="#防止链接跟踪"><span>防止链接跟踪</span></a></h3><p>所有的链接都会被自动设置 <code>rel=&quot;noreferrer noopener&quot;</code> 并使用 <code>target=&quot;_blank&quot;</code> 在新窗口中打开。</p><h3 id="防止恶意内容植入" tabindex="-1"><a class="header-anchor" href="#防止恶意内容植入"><span>防止恶意内容植入</span></a></h3><ul><li><p>为了防止用户在评论区创建可提交的表单欺骗其他访客提交信息，你无法使用 <code>&lt;form&gt;</code> 与 <code>&lt;input&gt;</code></p></li><li><p>为了防止用户利用样式纂改网站页面或修改自身评论样式植入垃圾广告，<code>&lt;style&gt;</code> 标签和元素上的 <code>style</code> 属性均不可用。</p></li><li><p>为了防止用户滥用媒体自动播放功能，你无法使用 <code>autoplay</code> 属性。</p></li></ul><h3 id="防止伪造" tabindex="-1"><a class="header-anchor" href="#防止伪造"><span>防止伪造</span></a></h3><p>Waline 支持账号系统，所以你可以强制用户注册并使用账号登陆。这样访问者将不能伪造其他人发表评论。</p>',10)),t("p",null,[e[2]||(e[2]=l("为了启用这一功能，你需要在同时在客户端和服务端设置强制登陆，详见 ")),r(n,{to:"/reference/client/props.html#login"},{default:o(()=>e[0]||(e[0]=[t("code",null,"login",-1)])),_:1}),e[3]||(e[3]=l(" 和 ")),r(n,{to:"/reference/server/env.html#%E4%B8%BB%E8%A6%81%E9%85%8D%E7%BD%AE"},{default:o(()=>e[1]||(e[1]=[t("code",null,"LOGIN",-1)])),_:1}),e[4]||(e[4]=l("。"))]),e[12]||(e[12]=t("h2",{id:"站点安全",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#站点安全"},[t("span",null,"站点安全")])],-1)),e[13]||(e[13]=t("h3",{id:"频率限制",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#频率限制"},[t("span",null,"频率限制")])],-1)),t("p",null,[e[6]||(e[6]=l("为了防止用户评论，Waline 会针对评论 IP 进行限制。在默认情况下，同一 IP 一分钟内只能发送一条评论。你可以在 ")),r(n,{to:"/reference/server/env.html#%E5%AE%89%E5%85%A8"},{default:o(()=>e[5]||(e[5]=[l("服务端参考 → 环境变量")])),_:1}),e[7]||(e[7]=l(" 中修改这个限制。"))]),e[14]||(e[14]=t("h3",{id:"防止灌水",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#防止灌水"},[t("span",null,"防止灌水")])],-1)),e[15]||(e[15]=t("p",null,"Waline 在录入评论时会对已有评论进行检测，如果检测到相似度过高的评论，将会拒绝相应评论。这可以在一定程度上防止灌水。",-1)),e[16]||(e[16]=t("h3",{id:"评论审查",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#评论审查"},[t("span",null,"评论审查")])],-1)),t("p",null,[e[9]||(e[9]=l("在你的站点被恶意攻击、敏感时期或你忙碌的时候，你可以开启评论审查功能，详见 ")),r(n,{to:"/reference/server/env.html#%E5%AE%89%E5%85%A8"},{default:o(()=>e[8]||(e[8]=[l("服务端参考 → 环境变量")])),_:1}),e[10]||(e[10]=l("。"))]),e[17]||(e[17]=t("p",null,"评论审查开启期间，所有新增评论会默认隐藏，你可以在 Waline 管理端或相应页面的评论框中查看并审查评论，只有你审查通过的评论才会被显示。",-1)),e[18]||(e[18]=t("h2",{id:"数据安全",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数据安全"},[t("span",null,"数据安全")])],-1)),e[19]||(e[19]=t("p",null,"由于 Waline 拥有服务端，任何人无法篡改评论数据或浏览量。",-1)),e[20]||(e[20]=t("p",null,[l("同时，你可以在服务端设置 "),t("code",null,"DISABLE_USERAGENT"),l(" 和 "),t("code",null,"DISABLE_REGION"),l(" 变量，阻止他人查看用户评论的 UA 和地理位置。")],-1))])}const c=a(u,[["render",m],["__file","safety.html.vue"]]),y=JSON.parse('{"path":"/guide/features/safety.html","title":"安全性","lang":"zh-CN","frontmatter":{"title":"安全性","icon":"safe","order":-10,"description":"Waline 评论系统的安全性是我们的首要考虑。我们将在这里介绍 Waline 的安全性。 评论安全 防 XSS 攻击 Waline 在服务端使用 DOMPurify 过滤每一个评论输入，以防止潜在的 XSS 攻击。这意味着你将不能使用 <iframe> 以及任何形式的脚本。 防止链接跟踪 所有的链接都会被自动设置 rel=\\"noreferrer no...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/features/safety.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/features/safety.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"安全性"}],["meta",{"property":"og:description","content":"Waline 评论系统的安全性是我们的首要考虑。我们将在这里介绍 Waline 的安全性。 评论安全 防 XSS 攻击 Waline 在服务端使用 DOMPurify 过滤每一个评论输入，以防止潜在的 XSS 攻击。这意味着你将不能使用 <iframe> 以及任何形式的脚本。 防止链接跟踪 所有的链接都会被自动设置 rel=\\"noreferrer no..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-06-05T10:44:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-05T10:44:55.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安全性\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-06-05T10:44:55.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"评论安全","slug":"评论安全","link":"#评论安全","children":[{"level":3,"title":"防 XSS 攻击","slug":"防-xss-攻击","link":"#防-xss-攻击","children":[]},{"level":3,"title":"防止链接跟踪","slug":"防止链接跟踪","link":"#防止链接跟踪","children":[]},{"level":3,"title":"防止恶意内容植入","slug":"防止恶意内容植入","link":"#防止恶意内容植入","children":[]},{"level":3,"title":"防止伪造","slug":"防止伪造","link":"#防止伪造","children":[]}]},{"level":2,"title":"站点安全","slug":"站点安全","link":"#站点安全","children":[{"level":3,"title":"频率限制","slug":"频率限制","link":"#频率限制","children":[]},{"level":3,"title":"防止灌水","slug":"防止灌水","link":"#防止灌水","children":[]},{"level":3,"title":"评论审查","slug":"评论审查","link":"#评论审查","children":[]}]},{"level":2,"title":"数据安全","slug":"数据安全","link":"#数据安全","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1717584295000,"contributors":[{"name":"Mister-Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.08,"words":623},"filePathRelative":"guide/features/safety.md","localizedDate":"2022年11月30日","autoDesc":true}');export{c as comp,y as data};
