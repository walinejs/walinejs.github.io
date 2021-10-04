"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9679],{7973:(n,l,e)=>{e.r(l),e.d(l,{data:()=>a});const a={key:"v-5ceabafb",path:"/guide/get-started.html",title:"快速上手",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1>\n<p>欢迎使用 Waline，只需几个步骤，你就可以在你的网站中启用 Waline 提供评论与浏览量服务。</p>\n',headers:[{level:2,title:"LeanCloud 设置 (数据库)",slug:"leancloud-设置-数据库",children:[]},{level:2,title:"Vercel 部署 (服务端)",slug:"vercel-部署-服务端",children:[]},{level:2,title:"HTML 引入 (客户端)",slug:"html-引入-客户端",children:[]},{level:2,title:"评论管理 (管理端)",slug:"评论管理-管理端",children:[]}],filePathRelative:"guide/get-started.md",git:{updatedTime:1633361467e3,contributors:[]}}},108:(n,l,e)=>{e.r(l),e.d(l,{default:()=>Q});var a=e(8917),s=e(3787),t=e(6676),c=e(1091),o=e(9219),p=e(5053),r=e(4387),u=e(9050);const _=(0,a._)("h1",{id:"快速上手",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),(0,a.Uk)(" 快速上手")],-1),i=(0,a._)("p",null,"欢迎使用 Waline，只需几个步骤，你就可以在你的网站中启用 Waline 提供评论与浏览量服务。",-1),k=(0,a._)("h2",{id:"leancloud-设置-数据库",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#leancloud-设置-数据库","aria-hidden":"true"},"#"),(0,a.Uk)(" LeanCloud 设置 (数据库)")],-1),d={href:"https://console.leancloud.app/login.html#/signin",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("登录"),U=(0,a.Uk)(" 或 "),h={href:"https://console.leancloud.app/login.html#/signup",target:"_blank",rel:"noopener noreferrer"},m=(0,a.Uk)("注册"),b=(0,a.Uk)(),v=(0,a._)("code",null,"LeanCloud 国际版",-1),f=(0,a.Uk)(" 并进入 "),L={href:"https://console.leancloud.app/applist.html#/apps",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("控制台"),y=(0,a.Uk)("点击左下角 "),W={href:"https://console.leancloud.app/applist.html#/newapp",target:"_blank",rel:"noopener noreferrer"},E=(0,a.Uk)("创建应用"),w=(0,a.Uk)(" 并起一个你喜欢的名字 (请选择免费的开发版):"),A=(0,a._)("p",null,[(0,a._)("img",{src:"https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg",alt:"创建应用"})],-1),C=(0,a.uE)('<li><p>进入应用，选择左下角的 <code>设置</code> &gt; <code>应用 Key</code>。你可以看到你的 <code>APP ID</code>,<code>APP Key</code> 和 <code>Master Key</code>。后续我们会用到这三个值。</p><p><img src="https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg" alt="ID 和 Key"></p></li>',1),P={class:"custom-container warning"},R=(0,a._)("p",{class:"custom-container-title"},"注意",-1),S=(0,a.Uk)("如果你正在使用 Leancloud 国内版 ("),V={href:"https://leancloud.cn",target:"_blank",rel:"noopener noreferrer"},D=(0,a.Uk)("leancloud.cn"),K=(0,a.Uk)(")，我们推荐你切换到国际版 ("),N={href:"https://leancloud.app",target:"_blank",rel:"noopener noreferrer"},T=(0,a.Uk)("leancloud.app"),j=(0,a.Uk)(")。否则，你需要为应用额外绑定"),M=(0,a._)("strong",null,"已备案",-1),H=(0,a.Uk)("的域名:"),I=(0,a.uE)('<ul><li>登录国内版并进入需要使用的应用</li><li>选择 <code>设置</code> &gt; <code>域名绑定</code> &gt; <code>API 访问域名</code> &gt; <code>绑定新域名</code> &gt; 输入域名 &gt; <code>确定</code>。</li><li>按照页面上的提示按要求在 DNS 上完成 CNAME 解析。</li></ul><p><img src="https://i.loli.net/2020/11/09/xfsX4JKt9zhuaiB.png" alt="域名设置"></p>',2),Y=(0,a._)("h2",{id:"vercel-部署-服务端",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#vercel-部署-服务端","aria-hidden":"true"},"#"),(0,a.Uk)(" Vercel 部署 (服务端)")],-1),q={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},z=(0,a._)("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),G=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,"点击上方按钮，跳转至 Vercel 进行 Server 端部署。")]),(0,a._)("li",null,[(0,a._)("p",null,"如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。")]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("输入一个你喜欢的 Vercel 项目名称并点击 "),(0,a._)("code",null,"Create"),(0,a.Uk)(" 继续:")]),(0,a._)("p",null,[(0,a._)("img",{src:s,alt:"创建项目"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("此时会让你创建 Team 账号，这里选择 "),(0,a._)("code",null,"Skip"),(0,a.Uk)(" 即可：")]),(0,a._)("p",null,[(0,a._)("img",{src:t,alt:"skip team"})])]),(0,a._)("li",null,[(0,a._)("p",null,"此时 Vercel 会基于 Waline 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。"),(0,a._)("p",null,[(0,a._)("img",{src:c,alt:"deploy"})]),(0,a._)("p",null,[(0,a.Uk)("一两分钟后，满屏的烟花会庆祝你部署成功。此时点击 "),(0,a._)("code",null,"Go to Dashboard"),(0,a.Uk)(" 可以跳转到应用的控制台。")]),(0,a._)("p",null,[(0,a._)("img",{src:o,alt:"deploy"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("点击顶部的 "),(0,a._)("code",null,"Settings"),(0,a.Uk)(" - "),(0,a._)("code",null,"Environment Variables"),(0,a.Uk)(" 进入环境变量配置页，并配置三个环境变量"),(0,a._)("code",null,"LEAN_ID"),(0,a.Uk)(", "),(0,a._)("code",null,"LEAN_KEY"),(0,a.Uk)(" 和 "),(0,a._)("code",null,"LEAN_MASTER_KEY"),(0,a.Uk)(" 。它们的值分别对应上一步在 LeanCloud 中获得的 "),(0,a._)("code",null,"APP ID"),(0,a.Uk)(", "),(0,a._)("code",null,"APP KEY"),(0,a.Uk)(", "),(0,a._)("code",null,"Master Key"),(0,a.Uk)("。")]),(0,a._)("p",null,[(0,a._)("img",{src:p,alt:"设置环境变量"})]),(0,a._)("div",{class:"custom-container tip"},[(0,a._)("p",{class:"custom-container-title"},"提示"),(0,a._)("p",null,[(0,a.Uk)("如果你使用 LeanCloud 国内版，请额外配置 "),(0,a._)("code",null,"LEAN_SERVER"),(0,a.Uk)(" 环境变量，值为你绑定好的域名。")])])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("环境变量配置完成之后点击顶部的 "),(0,a._)("code",null,"Deployments"),(0,a.Uk)(" 点击顶部最新的一次部署右侧的 "),(0,a._)("code",null,"Redeploy"),(0,a.Uk)(" 按钮进行重新部署。该步骤是为了让刚才设置的环境变量生效。")]),(0,a._)("p",null,[(0,a._)("img",{src:r,alt:"redeploy"})])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("此时会跳转到 "),(0,a._)("code",null,"Overview"),(0,a.Uk)(" 界面开始部署，等待片刻后 "),(0,a._)("code",null,"STATUS"),(0,a.Uk)(" 会变成 "),(0,a._)("code",null,"Ready"),(0,a.Uk)("。此时请点击 "),(0,a._)("code",null,"Visit"),(0,a.Uk)(" ，即可跳转到部署好的网站地址，此地址即为你的服务端地址。")]),(0,a._)("p",null,[(0,a._)("img",{src:u,alt:"redeploy success"})])])],-1),O=(0,a._)("h2",{id:"html-引入-客户端",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#html-引入-客户端","aria-hidden":"true"},"#"),(0,a.Uk)(" HTML 引入 (客户端)")],-1),B=(0,a._)("p",null,"在你的网页中进行如下设置:",-1),J=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("使用 CDN 引入 Waline: "),(0,a._)("code",null,"//cdn.jsdelivr.net/npm/@waline/client"),(0,a.Uk)("。")])]),(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("创建 "),(0,a._)("code",null,"<script>"),(0,a.Uk)(" 标签使用 "),(0,a._)("code",null,"Waline()"),(0,a.Uk)(" 初始化，并传入必要的 "),(0,a._)("code",null,"el"),(0,a.Uk)(" 与 "),(0,a._)("code",null,"serverURL"),(0,a.Uk)(" 选项。")]),(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("code",null,"el"),(0,a.Uk)(" 选项是 Waline 渲染使用的元素，你可以设置一个字符串形式的 CSS 选择器或者一个 HTMLElement 对象。")]),(0,a._)("li",null,[(0,a._)("code",null,"serverURL"),(0,a.Uk)(" 是服务端的地址，即上一步获取到的值。")])]),(0,a._)("div",{class:"language-html ext-html line-numbers-mode"},[(0,a._)("pre",{class:"language-html"},[(0,a._)("code",null,[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("head")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ..\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("script")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"src"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("//cdn.jsdelivr.net/npm/@waline/client"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token script"}),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ...\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("head")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  ...\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("div")]),(0,a.Uk)(),(0,a._)("span",{class:"token attr-name"},"id"),(0,a._)("span",{class:"token attr-value"},[(0,a._)("span",{class:"token punctuation attr-equals"},"="),(0,a._)("span",{class:"token punctuation"},'"'),(0,a.Uk)("waline"),(0,a._)("span",{class:"token punctuation"},'"')]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("div")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n  "),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"<"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a._)("span",{class:"token script"},[(0,a._)("span",{class:"token language-javascript"},[(0,a.Uk)("\n    "),(0,a._)("span",{class:"token function"},"Waline"),(0,a._)("span",{class:"token punctuation"},"("),(0,a._)("span",{class:"token punctuation"},"{"),(0,a.Uk)("\n      el"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'#waline'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n      serverURL"),(0,a._)("span",{class:"token operator"},":"),(0,a.Uk)(),(0,a._)("span",{class:"token string"},"'https://your-domain.vercel.app'"),(0,a._)("span",{class:"token punctuation"},","),(0,a.Uk)("\n    "),(0,a._)("span",{class:"token punctuation"},"}"),(0,a._)("span",{class:"token punctuation"},")"),(0,a._)("span",{class:"token punctuation"},";"),(0,a.Uk)("\n  ")])]),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("script")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n"),(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token tag"},[(0,a._)("span",{class:"token punctuation"},"</"),(0,a.Uk)("body")]),(0,a._)("span",{class:"token punctuation"},">")]),(0,a.Uk)("\n")])]),(0,a._)("div",{class:"line-numbers"},[(0,a._)("span",{class:"line-number"},"1"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"2"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"3"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"4"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"5"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"6"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"7"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"8"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"9"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"10"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"11"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"12"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"13"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"14"),(0,a._)("br"),(0,a._)("span",{class:"line-number"},"15"),(0,a._)("br")])])]),(0,a._)("li",null,[(0,a._)("p",null,"评论服务此时就会在你的网站上成功运行 🎉")])],-1),X=(0,a._)("h2",{id:"评论管理-管理端",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#评论管理-管理端","aria-hidden":"true"},"#"),(0,a.Uk)(" 评论管理 (管理端)")],-1),F=(0,a._)("ol",null,[(0,a._)("li",null,[(0,a.Uk)("部署完成后，请访问 "),(0,a._)("code",null,"<serverURL>/ui/register"),(0,a.Uk)(" 进行注册。首个注册的人会被设定成管理员。")]),(0,a._)("li",null,"管理员登陆后，即可看到评论管理界面。在这里可以修改、标记或删除评论。"),(0,a._)("li",null,"用户也通过评论框注册账号，登陆后会跳转到自己的档案页。")],-1),Q={render:function(n,l){const e=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[_,i,k,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[(0,a._)("a",d,[g,(0,a.Wm)(e)]),U,(0,a._)("a",h,[m,(0,a.Wm)(e)]),b,v,f,(0,a._)("a",L,[x,(0,a.Wm)(e)])])]),(0,a._)("li",null,[(0,a._)("p",null,[y,(0,a._)("a",W,[E,(0,a.Wm)(e)]),w]),A]),C]),(0,a._)("div",P,[R,(0,a._)("p",null,[S,(0,a._)("a",V,[D,(0,a.Wm)(e)]),K,(0,a._)("a",N,[T,(0,a.Wm)(e)]),j,M,H]),I]),Y,(0,a._)("p",null,[(0,a._)("a",q,[z,(0,a.Wm)(e)])]),G,O,B,J,X,F],64)}}},3787:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-1.64d3645a.png"},6676:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-2.0b5723a1.png"},1091:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-3.a5983e24.png"},9219:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-4.a6c14ef7.png"},5053:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-5.a8ed3e1b.png"},4387:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-6.8c0b9f8e.png"},9050:(n,l,e)=>{n.exports=e.p+"assets/img/vercel-7.56e75bad.png"}}]);