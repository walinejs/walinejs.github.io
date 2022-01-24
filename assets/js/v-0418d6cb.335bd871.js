"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4195],{8238:(l,e,t)=>{t.r(e),t.d(e,{data:()=>a});const a={key:"v-0418d6cb",path:"/guide/server/baidu-cfc.html",title:"百度云函数计算部署",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"如何部署",slug:"如何部署",children:[]},{level:2,title:"如何更新",slug:"如何更新",children:[]},{level:2,title:"如何修改环境变量",slug:"如何修改环境变量",children:[]}],filePathRelative:"guide/server/baidu-cfc.md",git:{updatedTime:1642990713e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},956:(l,e,t)=>{t.r(e),t.d(e,{default:()=>M});var a=t(8917),c=t(9658),n=t(63),r=t(6867),s=t(1153),i=t(4849),u=t(2544),d=t(7919),p=t(4197),_=t(8360),o=t(4844),b=t(8049);const k=(0,a._)("h1",{id:"百度云函数计算部署",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#百度云函数计算部署","aria-hidden":"true"},"#"),(0,a.Uk)(" 百度云函数计算部署")],-1),g={href:"https://console.bce.baidu.com/cfc/#/cfc/functions",target:"_blank",rel:"noopener noreferrer"},f=(0,a.Uk)("百度云函数计算"),h=(0,a.Uk)(" 是百度云推出的 Serverless 平台。我们可以快速的将 Waline 部署到百度云函数计算平台上。"),m=(0,a._)("h2",{id:"如何部署",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#如何部署","aria-hidden":"true"},"#"),(0,a.Uk)(" 如何部署")],-1),U=(0,a.Uk)("Clone 该项目 "),j={href:"https://github.com/walinejs/baidu-cfc-starter",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("https://github.com/walinejs/baidu-cfc-starter"),v=(0,a._)("img",{src:c,alt:""},null,-1),w=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("进入目录后执行 "),(0,a._)("code",null,"npm install"),(0,a.Uk)(" 安装依赖 "),(0,a._)("img",{src:n,alt:""})])],-1),C=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("安装依赖后进入目录全选所有文件后选择压缩，生成 zip 压缩包待后续使用 "),(0,a._)("img",{src:r,alt:""})])],-1),T=(0,a.Uk)("进入"),W={href:"https://console.bce.baidu.com/cfc/#/cfc/functions",target:"_blank",rel:"noopener noreferrer"},y=(0,a.Uk)("百度云函数计算"),L=(0,a.Uk)("，选择"),P=(0,a._)("kbd",null,"创建函数",-1),z=(0,a._)("img",{src:s,alt:""},null,-1),H=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("选择"),(0,a._)("kbd",null,"空白函数"),(0,a.Uk)("后点击"),(0,a._)("kbd",null,"下一步"),(0,a._)("img",{src:i,alt:""})])],-1),R=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("输入函数名称，运行时选择 "),(0,a._)("code",null,"Node.js 12"),(0,a.Uk)("，超时时间设置为 300 秒后点击"),(0,a._)("kbd",null,"下一步"),(0,a._)("img",{src:u,alt:""})])],-1),N=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("触发器选择“HTTP 触发器”，URL 路径填写 "),(0,a._)("code",null,"/{path+}"),(0,a.Uk)("，HTTP 方法全选后点击"),(0,a._)("kbd",null,"提交"),(0,a._)("img",{src:d,alt:""})])],-1),Z=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("稍待片刻页面会提示函数创建成功，此时点击“进度代码编辑页”准备部署代码 "),(0,a._)("img",{src:p,alt:""})])],-1),D=(0,a._)("li",null,[(0,a._)("p",null,[(0,a.Uk)("编辑类型选择 "),(0,a._)("kbd",null,"上传函数.ZIP 包"),(0,a.Uk)("，点击"),(0,a._)("kbd",null,"选择文件"),(0,a.Uk)("按钮后选择之前已经打包好的 .zip 包代码，点击"),(0,a._)("kbd",null,"开始上传"),(0,a.Uk)("。")]),(0,a._)("p",null,"环境变量中输入你想要配置的环境变量，下图的示例是配置 LeanCloud 存储服务环境变量。"),(0,a._)("p",null,[(0,a.Uk)("最后点击"),(0,a._)("kbd",null,"确定"),(0,a.Uk)("按钮完成代码部署。")]),(0,a._)("p",null,[(0,a._)("img",{src:_,alt:""})])],-1),I=(0,a.Uk)("部署完毕后点击左侧的 "),O=(0,a._)("kbd",null,"触发器",-1),S=(0,a.Uk)(" 菜单，图中的“URL 路径”处的地址即为你最终的服务地址。下图中的地址为 "),Y={href:"https://7vrjpkgy3nt9g.cfc-execute.bj.baidubce.com",target:"_blank",rel:"noopener noreferrer"},q=(0,a.Uk)("https://7vrjpkgy3nt9g.cfc-execute.bj.baidubce.com"),A=(0,a.Uk)("。 "),B=(0,a._)("img",{src:o,alt:""},null,-1),E=(0,a._)("h2",{id:"如何更新",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#如何更新","aria-hidden":"true"},"#"),(0,a.Uk)(" 如何更新")],-1),F=(0,a._)("p",null,[(0,a.Uk)("点击左侧菜单的“函数代码”可以进行在线编辑，编辑完成之后点保存即可完成部署。 "),(0,a._)("img",{src:b,alt:""})],-1),G=(0,a._)("h2",{id:"如何修改环境变量",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#如何修改环境变量","aria-hidden":"true"},"#"),(0,a.Uk)(" 如何修改环境变量")],-1),J=(0,a._)("p",null,[(0,a.Uk)("点击左侧菜单的“函数代码”可以在代码编辑页面底部进行环境变量的管理，保存后会立即生效。 "),(0,a._)("img",{src:b,alt:""})],-1),K={},M=(0,t(6959).Z)(K,[["render",function(l,e){const t=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[k,(0,a._)("p",null,[(0,a._)("a",g,[f,(0,a.Wm)(t)]),h]),m,(0,a._)("ol",null,[(0,a._)("li",null,[(0,a._)("p",null,[U,(0,a._)("a",j,[x,(0,a.Wm)(t)]),v])]),w,C,(0,a._)("li",null,[(0,a._)("p",null,[T,(0,a._)("a",W,[y,(0,a.Wm)(t)]),L,P,z])]),H,R,N,Z,D,(0,a._)("li",null,[(0,a._)("p",null,[I,O,S,(0,a._)("a",Y,[q,(0,a.Wm)(t)]),A,B])])]),E,F,G,J],64)}]])},9658:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-1.9a60bcf4.jpg"},4844:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-10.447cc90b.jpg"},8049:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-11.c24e4673.jpg"},63:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-2.3fbebdd2.jpg"},6867:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-3.bc01ce45.jpg"},1153:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-4.2b669e0d.jpg"},4849:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-5.3371a54d.jpg"},2544:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-6.31675304.jpg"},7919:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-7.6209fc82.jpg"},4197:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-8.fc4c62df.jpg"},8360:(l,e,t)=>{l.exports=t.p+"assets/img/baidu-cfc-9.aa188f1c.jpg"}}]);