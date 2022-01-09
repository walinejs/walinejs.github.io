"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4195],{8238:(l,e,a)=>{a.r(e),a.d(e,{data:()=>c});const c={key:"v-0418d6cb",path:"/guide/server/baidu-cfc.html",title:"百度云函数计算部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何部署",slug:"如何部署",children:[]},{level:2,title:"如何更新",slug:"如何更新",children:[]},{level:2,title:"如何修改环境变量",slug:"如何修改环境变量",children:[]}],filePathRelative:"guide/server/baidu-cfc.md",git:{updatedTime:1641701588e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},956:(l,e,a)=>{a.r(e),a.d(e,{default:()=>M});var c=a(8917),n=a(9658),t=a(63),r=a(6867),i=a(1153),s=a(4849),u=a(2544),d=a(7919),p=a(4197),_=a(8360),o=a(4844),b=a(8049);const k=(0,c._)("h1",{id:"百度云函数计算部署",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#百度云函数计算部署","aria-hidden":"true"},"#"),(0,c.Uk)(" 百度云函数计算部署")],-1),g={href:"https://console.bce.baidu.com/cfc/#/cfc/functions",target:"_blank",rel:"noopener noreferrer"},f=(0,c.Uk)("百度云函数计算"),h=(0,c.Uk)(" 是百度云推出的 Serverless 平台。我们可以快速的将 Waline 部署到百度云函数计算平台上。"),m=(0,c._)("h2",{id:"如何部署",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#如何部署","aria-hidden":"true"},"#"),(0,c.Uk)(" 如何部署")],-1),U=(0,c.Uk)("Clone 该项目 "),j={href:"https://github.com/walinejs/baidu-cfc-starter",target:"_blank",rel:"noopener noreferrer"},x=(0,c.Uk)("https://github.com/walinejs/baidu-cfc-starter"),v=(0,c._)("img",{src:n,alt:""},null,-1),w=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("进入目录后执行 "),(0,c._)("code",null,"npm install"),(0,c.Uk)(" 安装依赖 "),(0,c._)("img",{src:t,alt:""})])],-1),C=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("安装依赖后进入目录全选所有文件后选择压缩，生成 zip 压缩包待后续使用 "),(0,c._)("img",{src:r,alt:""})])],-1),T=(0,c.Uk)("进入"),W={href:"https://console.bce.baidu.com/cfc/#/cfc/functions",target:"_blank",rel:"noopener noreferrer"},z=(0,c.Uk)("百度云函数计算"),L=(0,c.Uk)("，选择"),P=(0,c._)("kbd",null,"创建函数",-1),y=(0,c._)("img",{src:i,alt:""},null,-1),H=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("选择"),(0,c._)("kbd",null,"空白函数"),(0,c.Uk)("后点击"),(0,c._)("kbd",null,"下一步"),(0,c._)("img",{src:s,alt:""})])],-1),R=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("输入函数名称，运行时选择 "),(0,c._)("code",null,"Node.js 12"),(0,c.Uk)("，超时时间设置为 300 秒后点击"),(0,c._)("kbd",null,"下一步"),(0,c._)("img",{src:u,alt:""})])],-1),N=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("触发器选择“HTTP 触发器”，URL 路径填写 "),(0,c._)("code",null,"/{path+}"),(0,c.Uk)("，HTTP 方法全选后点击"),(0,c._)("kbd",null,"提交"),(0,c._)("img",{src:d,alt:""})])],-1),Z=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("稍待片刻页面会提示函数创建成功，此时点击“进度代码编辑页”准备部署代码 "),(0,c._)("img",{src:p,alt:""})])],-1),D=(0,c._)("li",null,[(0,c._)("p",null,[(0,c.Uk)("编辑类型选择 "),(0,c._)("kbd",null,"上传函数.ZIP 包"),(0,c.Uk)("，点击"),(0,c._)("kbd",null,"选择文件"),(0,c.Uk)("按钮后选择之前已经打包好的 .zip 包代码，点击"),(0,c._)("kbd",null,"开始上传"),(0,c.Uk)("。")]),(0,c._)("p",null,"环境变量中输入你想要配置的环境变量，下图的示例是配置 LeanCloud 存储服务环境变量。"),(0,c._)("p",null,[(0,c.Uk)("最后点击"),(0,c._)("kbd",null,"确定"),(0,c.Uk)("按钮完成代码部署。")]),(0,c._)("p",null,[(0,c._)("img",{src:_,alt:""})])],-1),I=(0,c.Uk)("部署完毕后点击左侧的 "),O=(0,c._)("kbd",null,"触发器",-1),S=(0,c.Uk)(" 菜单，图中的“URL 路径”处的地址即为你最终的服务地址。下图中的地址为 "),Y={href:"https://7vrjpkgy3nt9g.cfc-execute.bj.baidubce.com",target:"_blank",rel:"noopener noreferrer"},q=(0,c.Uk)("https://7vrjpkgy3nt9g.cfc-execute.bj.baidubce.com"),A=(0,c.Uk)("。 "),B=(0,c._)("img",{src:o,alt:""},null,-1),E=(0,c._)("h2",{id:"如何更新",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),(0,c.Uk)(" 如何更新")],-1),F=(0,c._)("p",null,[(0,c.Uk)("点击左侧菜单的“函数代码”可以进行在线编辑，编辑完成之后点保存即可完成部署。 "),(0,c._)("img",{src:b,alt:""})],-1),G=(0,c._)("h2",{id:"如何修改环境变量",tabindex:"-1"},[(0,c._)("a",{class:"header-anchor",href:"#如何修改环境变量","aria-hidden":"true"},"#"),(0,c.Uk)(" 如何修改环境变量")],-1),J=(0,c._)("p",null,[(0,c.Uk)("点击左侧菜单的“函数代码”可以在代码编辑页面底部进行环境变量的管理，保存后会立即生效。 "),(0,c._)("img",{src:b,alt:""})],-1),K={},M=(0,a(6959).Z)(K,[["render",function(l,e){const a=(0,c.up)("OutboundLink");return(0,c.wg)(),(0,c.iD)(c.HY,null,[k,(0,c._)("p",null,[(0,c._)("a",g,[f,(0,c.Wm)(a)]),h]),m,(0,c._)("ol",null,[(0,c._)("li",null,[(0,c._)("p",null,[U,(0,c._)("a",j,[x,(0,c.Wm)(a)]),v])]),w,C,(0,c._)("li",null,[(0,c._)("p",null,[T,(0,c._)("a",W,[z,(0,c.Wm)(a)]),L,P,y])]),H,R,N,Z,D,(0,c._)("li",null,[(0,c._)("p",null,[I,O,S,(0,c._)("a",Y,[q,(0,c.Wm)(a)]),A,B])])]),E,F,G,J],64)}]])},9658:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-1.9a60bcf4.jpg"},4844:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-10.447cc90b.jpg"},8049:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-11.c24e4673.jpg"},63:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-2.3fbebdd2.jpg"},6867:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-3.bc01ce45.jpg"},1153:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-4.2b669e0d.jpg"},4849:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-5.3371a54d.jpg"},2544:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-6.31675304.jpg"},7919:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-7.6209fc82.jpg"},4197:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-8.fc4c62df.jpg"},8360:(l,e,a)=>{l.exports=a.p+"assets/img/baidu-cfc-9.aa188f1c.jpg"}}]);