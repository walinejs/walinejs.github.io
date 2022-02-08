"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9550],{6340:(e,n,l)=>{l.r(n),l.d(n,{data:()=>t});const t={key:"v-547fb6c3",path:"/guide/server/aliyun-fc.html",title:"阿里云函数计算部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何部署",slug:"如何部署",children:[{level:3,title:"Windows环境缺少VC++",slug:"windows环境缺少vc",children:[]},{level:3,title:"缺少Python",slug:"缺少python",children:[]}]},{level:2,title:"如何更新",slug:"如何更新",children:[]},{level:2,title:"如何修改环境变量",slug:"如何修改环境变量",children:[]}],filePathRelative:"guide/server/aliyun-fc.md",git:{updatedTime:1644285202e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},3385:(e,n,l)=>{l.r(n),l.d(n,{default:()=>Ce});var t=l(8917),a=l(7583),r=l(8348),s=l(7181),i=l(9113),o=l(6240),c=l(1879),u=l(4507),d=l(6029);const p=(0,t._)("h1",{id:"阿里云函数计算部署",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#阿里云函数计算部署","aria-hidden":"true"},"#"),(0,t.Uk)(" 阿里云函数计算部署")],-1),h={href:"https://fc.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},_=(0,t.Uk)("阿里云函数计算"),g=(0,t.Uk)(" 是阿里云推出的 Serverless 平台。我们可以快速的将 Waline 部署到阿里云函数计算平台上。"),k=(0,t._)("h2",{id:"如何部署",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如何部署","aria-hidden":"true"},"#"),(0,t.Uk)(" 如何部署")],-1),m={href:"https://github.com/walinejs/aliyun-fc-starter/generate",target:"_blank",rel:"noopener noreferrer"},f=(0,t.Uk)("aliyun-fc-starter"),U=(0,t.Uk)(" 访问该地址基于官方模板创建仓库并将其克隆下来 "),b=(0,t._)("img",{src:a,alt:""},null,-1),y=(0,t._)("br",null,null,-1),v=(0,t._)("img",{src:r,alt:""},null,-1),x=(0,t._)("li",null,[(0,t.Uk)("全局安装 Serverless Devs 开发者工具 "),(0,t._)("code",null,"npm install -g @serverless-devs/s"),(0,t._)("img",{src:s,alt:""})],-1),W=(0,t._)("li",null,[(0,t.Uk)("https://ram.console.aliyun.com/manage/ak 访问该网址获取到你账户的一对密钥，使用 s 命令添加。 "),(0,t._)("img",{src:i,alt:""}),(0,t._)("img",{src:o,alt:""})],-1),j=(0,t._)("li",null,[(0,t.Uk)("进入目录后执行 "),(0,t._)("code",null,"s deploy"),(0,t.Uk)(" 稍待片刻后完成一次部署，此时控制台中红框展示的地址即为你最终的 serverURL "),(0,t._)("img",{src:c,alt:""})],-1),w=(0,t.Uk)("点击“"),C={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=config",target:"_blank",rel:"noopener noreferrer"},P=(0,t.Uk)("编辑环境变量"),S=(0,t.Uk)("”更新我们需要添加的环境变量并点击底部的保存按钮 "),T=(0,t._)("img",{src:u,alt:""},null,-1),L=(0,t.Uk)("点击“"),V={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=code",target:"_blank",rel:"noopener noreferrer"},E=(0,t.Uk)("代码编辑"),A=(0,t.Uk)("”进入编辑页，在编辑器底部的控制台中输入 "),O=(0,t._)("code",null,"npm install",-1),D=(0,t.Uk)(" 安装依赖。安装完成之后点击顶部的"),N=(0,t._)("kbd",null,"部署",-1),R=(0,t.Uk)("按钮重新部署 "),Y=(0,t._)("img",{src:d,alt:""},null,-1),q=(0,t._)("p",null,"至此就完成了部署，第四步中返回的地址即为你的部署地址。",-1),H=(0,t._)("h3",{id:"windows环境缺少vc",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#windows环境缺少vc","aria-hidden":"true"},"#"),(0,t.Uk)(" Windows环境缺少VC++")],-1),z=(0,t.Uk)("由于 @serverless-devs/s 依赖于 node-gyp ，根据"),F={href:"https://github.com/nodejs/node-gyp#on-windows",target:"_blank",rel:"noopener noreferrer"},G=(0,t.Uk)("https://github.com/nodejs/node-gyp#on-windows"),M=(0,t.Uk)("，我们需要安装VC++环境。"),Z=(0,t._)("blockquote",null,[(0,t._)("p",null,[(0,t.Uk)("值得注意的是，VC++ 环境需要占用大量的存储资源，因此我更建议你使用 "),(0,t._)("em",null,"Windows Subsystem for Linux"),(0,t.Uk)(" 或Linux云服务器")])],-1),B=(0,t.Uk)("前往"),I={href:"https://visualstudio.microsoft.com",target:"_blank",rel:"noopener noreferrer"},J=(0,t.Uk)("https://visualstudio.microsoft.com"),K=(0,t.Uk)("下载Visual Studio安装包"),Q=(0,t._)("li",null,[(0,t.Uk)("在安装包中勾选 "),(0,t._)("em",null,"使用C++的桌面开发"),(0,t.Uk)(" ，勾选全部MSVC套件，开始安装。")],-1),X=(0,t._)("li",null,[(0,t.Uk)("使用"),(0,t._)("code",null,"npm config set msvs_version 2022"),(0,t.Uk)("设置版本信息，例如我下载的Visual Studio Community 2022，即需填写2022版本")],-1),$=(0,t._)("li",null,[(0,t.Uk)("继续"),(0,t._)("code",null,"s deplay"),(0,t.Uk)("的安装过程")],-1),ee=(0,t._)("h3",{id:"缺少python",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#缺少python","aria-hidden":"true"},"#"),(0,t.Uk)(" 缺少Python")],-1),ne=(0,t.Uk)("由于 @serverless-devs/s 依赖于 node-gyp ，根据"),le={href:"https://github.com/nodejs/node-gyp#configuring-python-dependency",target:"_blank",rel:"noopener noreferrer"},te=(0,t.Uk)("https://github.com/nodejs/node-gyp#configuring-python-dependency"),ae=(0,t.Uk)("，我们也需要安装Python环境。"),re=(0,t._)("blockquote",null,[(0,t._)("p",null,"Python作为一个优秀的脚本性语言，是很值得安装的。")],-1),se=(0,t._)("p",null,"node-gyp支持 3.7/3.8/3.9/3.10 版本的Python，你可以通过搜索引擎获取大量的帮助，因此在此不申明详细步骤。",-1),ie=(0,t._)("p",null,"如果你的系统有多个Python，那你需要使用以下命令指定使用python的路径。",-1),oe=(0,t._)("div",{class:"language-bash ext-sh"},[(0,t._)("pre",{class:"language-bash"},[(0,t._)("code",null,[(0,t._)("span",{class:"token function"},"npm"),(0,t.Uk)(" config "),(0,t._)("span",{class:"token builtin class-name"},"set"),(0,t.Uk)(" python /path/to/executable/python\n")])])],-1),ce=(0,t._)("p",null,[(0,t.Uk)("如果 "),(0,t._)("code",null,"NODE_GYP_FORCE_PYTHON"),(0,t.Uk)(" 环境变量被设置为 Python 可执行文件的路径，则将使用它而不是任何其他已配置或内置的 Python 。即使它不是兼容版本，也不会进行搜索。")],-1),ue=(0,t._)("h2",{id:"如何更新",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),(0,t.Uk)(" 如何更新")],-1),de=(0,t.Uk)("点击“"),pe={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=config",target:"_blank",rel:"noopener noreferrer"},he=(0,t.Uk)("编辑环境变量"),_e=(0,t.Uk)("”更新我们需要添加的环境变量并点击底部的保存按钮"),ge=(0,t._)("p",null,[(0,t._)("img",{src:u,alt:""})],-1),ke=(0,t._)("h2",{id:"如何修改环境变量",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#如何修改环境变量","aria-hidden":"true"},"#"),(0,t.Uk)(" 如何修改环境变量")],-1),me=(0,t.Uk)("点击“"),fe={href:"https://fcnext.console.aliyun.com/cn-beijing/services/Waline/function-detail/Waline/LATEST?tab=code",target:"_blank",rel:"noopener noreferrer"},Ue=(0,t.Uk)("代码编辑"),be=(0,t.Uk)("”进入编辑页，在编辑器底部的控制台中输入 "),ye=(0,t._)("code",null,"npm install",-1),ve=(0,t.Uk)(" 安装依赖。安装完成之后点击顶部的"),xe=(0,t._)("kbd",null,"部署",-1),We=(0,t.Uk)("按钮重新部署"),je=(0,t._)("p",null,[(0,t._)("img",{src:d,alt:""})],-1),we={},Ce=(0,l(6959).Z)(we,[["render",function(e,n){const l=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,(0,t._)("p",null,[(0,t._)("a",h,[_,(0,t.Wm)(l)]),g]),k,(0,t._)("ol",null,[(0,t._)("li",null,[(0,t._)("a",m,[f,(0,t.Wm)(l)]),U,b,y,v]),x,W,j,(0,t._)("li",null,[w,(0,t._)("a",C,[P,(0,t.Wm)(l)]),S,T]),(0,t._)("li",null,[L,(0,t._)("a",V,[E,(0,t.Wm)(l)]),A,O,D,N,R,Y])]),q,H,(0,t._)("p",null,[z,(0,t._)("a",F,[G,(0,t.Wm)(l)]),M]),Z,(0,t._)("ol",null,[(0,t._)("li",null,[B,(0,t._)("a",I,[J,(0,t.Wm)(l)]),K]),Q,X,$]),ee,(0,t._)("p",null,[ne,(0,t._)("a",le,[te,(0,t.Wm)(l)]),ae]),re,se,ie,oe,ce,ue,(0,t._)("p",null,[de,(0,t._)("a",pe,[he,(0,t.Wm)(l)]),_e]),ge,ke,(0,t._)("p",null,[me,(0,t._)("a",fe,[Ue,(0,t.Wm)(l)]),be,ye,ve,xe,We]),je],64)}]])},7583:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-1.c4a09313.jpg"},8348:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-2.5d0877d2.jpg"},7181:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-3.3d3605c8.jpg"},9113:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-4.bada9180.jpg"},6240:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-5.3137ea34.jpg"},1879:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-6.09a0ec45.jpg"},4507:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-7.3e9053aa.jpg"},6029:(e,n,l)=>{e.exports=l.p+"assets/img/aliyun-fc-8.e139b393.jpg"}}]);