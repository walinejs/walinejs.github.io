import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as r,c,b as e,e as n,f as l,a as d,d as p}from"./app-CyePWRSk.js";const u="/assets/aliyun-fc-1-BF5impjF.jpg",h="/assets/aliyun-fc-2-CsflKAsi.jpg",_="/assets/aliyun-fc-3-D8D83QO7.jpg",g="/assets/aliyun-fc-4-DR57VB4P.jpg",m="/assets/aliyun-fc-5-CXO2YudH.jpg",f="/assets/aliyun-fc-6-Ccv7wl1L.jpg",o="/assets/aliyun-fc-7-ByX0EQ3G.jpg",s="/assets/aliyun-fc-8-LeliPdM2.jpg",y={},b={href:"https://fc.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},v=e("h2",{id:"如何部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何部署"},[e("span",null,"如何部署")])],-1),k={href:"https://github.com/walinejs/aliyun-fc-starter/generate",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,[e("img",{src:u,alt:"阿里云函数计算1"}),e("br"),e("img",{src:h,alt:"阿里云函数计算2"})],-1),j=e("li",null,[e("p",null,[n("全局安装 Serverless Devs 开发者工具 "),e("code",null,"npm install -g @serverless-devs/s")]),e("figure",null,[e("img",{src:_,alt:"阿里云函数计算3",tabindex:"0"}),e("figcaption",null,"阿里云函数计算3")])],-1),w={href:"https://ram.console.aliyun.com/manage/ak",target:"_blank",rel:"noopener noreferrer"},S=e("img",{src:g,alt:"阿里云函数计算4"},null,-1),T=e("img",{src:m,alt:"阿里云函数计算5"},null,-1),C=e("li",null,[e("p",null,[n("进入目录后执行 "),e("code",null,"s deploy"),n(" 稍待片刻后完成一次部署，此时控制台中红框展示的地址即为你最终的 serverURL")]),e("figure",null,[e("img",{src:f,alt:"阿里云函数计算6",tabindex:"0"}),e("figcaption",null,"阿里云函数计算6")])],-1),W={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=config",target:"_blank",rel:"noopener noreferrer"},P=e("figure",null,[e("img",{src:o,alt:"阿里云函数计算7",tabindex:"0"}),e("figcaption",null,"阿里云函数计算7")],-1),V={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=code",target:"_blank",rel:"noopener noreferrer"},L=e("code",null,"npm install",-1),E=e("kbd",null,"部署",-1),N=e("figure",null,[e("img",{src:s,alt:"阿里云函数计算8",tabindex:"0"}),e("figcaption",null,"阿里云函数计算8")],-1),D=e("p",null,"至此就完成了部署，第四步中返回的地址即为你的部署地址。",-1),A=e("h3",{id:"windows-环境缺少-vc",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#windows-环境缺少-vc"},[e("span",null,"Windows 环境缺少 VC++")])],-1),B={href:"https://github.com/nodejs/node-gyp#on-windows",target:"_blank",rel:"noopener noreferrer"},O=e("blockquote",null,[e("p",null,[n("值得注意的是，VC++ 环境需要占用大量的存储资源，因此我更建议你使用 "),e("em",null,"Windows Subsystem for Linux"),n(" 或 Linux 云服务器")])],-1),F={href:"https://visualstudio.microsoft.com",target:"_blank",rel:"noopener noreferrer"},z=e("li",null,[n("在安装包中勾选 "),e("em",null,"使用 C++的桌面开发"),n(" ，勾选全部 MSVC 套件，开始安装。")],-1),M=e("li",null,[n("使用 "),e("code",null,"npm config set msvs_version 2022"),n(" 设置版本信息，例如我下载的 Visual Studio Community 2022，即需填写 2022 版本")],-1),R=e("li",null,[n("继续 "),e("code",null,"s deploy"),n(" 的安装过程")],-1),q=e("h3",{id:"缺少-python",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#缺少-python"},[e("span",null,"缺少 Python")])],-1),H={href:"https://github.com/nodejs/node-gyp#configuring-python-dependency",target:"_blank",rel:"noopener noreferrer"},Y=p(`<blockquote><p>Python 作为一个优秀的脚本性语言，是很值得安装的。</p></blockquote><p>node-gyp 支持 3.7/3.8/3.9/3.10 版本的 Python，你可以通过搜索引擎获取大量的帮助，因此在此不申明详细步骤。</p><p>如果你的系统有多个 Python，那你需要使用以下命令指定使用 python 的路径。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> config <span class="token builtin class-name">set</span> python /path/to/executable/python
</code></pre></div><p>如果 <code>NODE_GYP_FORCE_PYTHON</code> 环境变量被设置为 Python 可执行文件的路径，则将使用它而不是任何其他已配置或内置的 Python 。即使它不是兼容版本，也不会进行搜索。</p><h2 id="如何更新" tabindex="-1"><a class="header-anchor" href="#如何更新"><span>如何更新</span></a></h2>`,6),Z={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=config",target:"_blank",rel:"noopener noreferrer"},G=e("figure",null,[e("img",{src:o,alt:"阿里云函数计算7",tabindex:"0"}),e("figcaption",null,"阿里云函数计算7")],-1),I=e("h2",{id:"如何修改环境变量",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何修改环境变量"},[e("span",null,"如何修改环境变量")])],-1),Q={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=code",target:"_blank",rel:"noopener noreferrer"},X=e("code",null,"npm install",-1),J=e("kbd",null,"部署",-1),K=e("figure",null,[e("img",{src:s,alt:"阿里云函数计算8",tabindex:"0"}),e("figcaption",null,"阿里云函数计算8")],-1);function U($,ee){const t=a("ExternalLinkIcon");return r(),c("div",null,[e("p",null,[e("a",b,[n("阿里云函数计算"),l(t)]),n(" 是阿里云推出的 Serverless 平台。我们可以快速的将 Waline 部署到阿里云函数计算平台上。")]),d(" more "),v,e("ol",null,[e("li",null,[e("p",null,[e("a",k,[n("aliyun-fc-starter"),l(t)]),n(" 访问该地址基于官方模板创建仓库并将其克隆下来")]),x]),j,e("li",null,[e("p",null,[n("访问 "),e("a",w,[n("https://ram.console.aliyun.com/manage/ak"),l(t)]),n(" 获取到你账户的一对密钥，使用 s 命令添加。 "),S,T])]),C,e("li",null,[e("p",null,[n("点击“"),e("a",W,[n("编辑环境变量"),l(t)]),n("”更新我们需要添加的环境变量并点击底部的保存按钮")]),P]),e("li",null,[e("p",null,[n("点击“"),e("a",V,[n("代码编辑"),l(t)]),n("”进入编辑页，在编辑器底部的控制台中输入 "),L,n(" 安装依赖。安装完成之后点击顶部的"),E,n("按钮重新部署")]),N])]),D,A,e("p",null,[n("由于 @serverless-devs/s 依赖于 node-gyp ，根据 "),e("a",B,[n("https://github.com/nodejs/node-gyp#on-windows"),l(t)]),n("，我们需要安装 VC++环境。")]),O,e("ol",null,[e("li",null,[n("前往 "),e("a",F,[n("https://visualstudio.microsoft.com"),l(t)]),n(" 下载 Visual Studio 安装包")]),z,M,R]),q,e("p",null,[n("由于 @serverless-devs/s 依赖于 node-gyp ，根据 "),e("a",H,[n("https://github.com/nodejs/node-gyp#configuring-python-dependency"),l(t)]),n("，我们也需要安装 Python 环境。")]),Y,e("p",null,[n("点击“"),e("a",Z,[n("编辑环境变量"),l(t)]),n("”更新我们需要添加的环境变量并点击底部的保存按钮")]),G,I,e("p",null,[n("点击“"),e("a",Q,[n("代码编辑"),l(t)]),n("”进入编辑页，在编辑器底部的控制台中输入 "),X,n(" 安装依赖。安装完成之后点击顶部的"),J,n("按钮重新部署")]),K])}const le=i(y,[["render",U],["__file","aliyun-fc.html.vue"]]),oe=JSON.parse('{"path":"/guide/deploy/aliyun-fc.html","title":"阿里云函数计算部署","lang":"zh-CN","frontmatter":{"title":"阿里云函数计算部署","icon":"aliyun","redirectFrom":"/guide/server/aliyun-fc.html","description":"阿里云函数计算 是阿里云推出的 Serverless 平台。我们可以快速的将 Waline 部署到阿里云函数计算平台上。 如何部署 aliyun-fc-starter 访问该地址基于官方模板创建仓库并将其克隆下来 阿里云函数计算1 阿里云函数计算2 全局安装 Serverless Devs 开发者工具 npm install -g @serverles...","head":[["meta",{"property":"og:url","content":"https://waline.js.org/guide/deploy/aliyun-fc.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"阿里云函数计算部署"}],["meta",{"property":"og:description","content":"阿里云函数计算 是阿里云推出的 Serverless 平台。我们可以快速的将 Waline 部署到阿里云函数计算平台上。 如何部署 aliyun-fc-starter 访问该地址基于官方模板创建仓库并将其克隆下来 阿里云函数计算1 阿里云函数计算2 全局安装 Serverless Devs 开发者工具 npm install -g @serverles..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-11-30T16:18:50.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-30T16:18:50.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阿里云函数计算部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2022-11-30T16:18:50.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"如何部署","slug":"如何部署","link":"#如何部署","children":[{"level":3,"title":"Windows 环境缺少 VC++","slug":"windows-环境缺少-vc","link":"#windows-环境缺少-vc","children":[]},{"level":3,"title":"缺少 Python","slug":"缺少-python","link":"#缺少-python","children":[]}]},{"level":2,"title":"如何更新","slug":"如何更新","link":"#如何更新","children":[]},{"level":2,"title":"如何修改环境变量","slug":"如何修改环境变量","link":"#如何修改环境变量","children":[]}],"git":{"createdTime":1669825130000,"updatedTime":1669825130000,"contributors":[{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1}]},"readingTime":{"minutes":2.79,"words":837},"filePathRelative":"guide/deploy/aliyun-fc.md","localizedDate":"2022年11月30日","autoDesc":true}');export{le as comp,oe as data};