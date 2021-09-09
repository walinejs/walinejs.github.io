"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2754],{8818:(t,e,i)=>{i.r(e),i.d(e,{data:()=>a});const a={key:"v-f3ed9e5a",path:"/guide/server/socials.html",title:"社交登录",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="社交登录" tabindex="-1"><a class="header-anchor" href="#社交登录" aria-hidden="true">#</a> 社交登录</h1>\n<p>最新版 Waline 增加了登录评论功能，除了普通的账号登录之外，还支持使用第三方社交账号进行直接登录。</p>\n<p>目前官方支持以下社交账号登录。</p>\n<div class="custom-container warning"><p class="custom-container-title">注意</p>\n<p>社交账号登录功能并非默认开启，需进行额外配置。</p>\n</div>\n',headers:[{level:2,title:"GitHub",slug:"github",children:[]}],filePathRelative:"guide/server/socials.md",git:{updatedTime:1631152006e3,contributors:[]}}},7743:(t,e,i)=>{i.r(e),i.d(e,{default:()=>p});var a=i(8917);const n=(0,a.uE)('<h1 id="社交登录" tabindex="-1"><a class="header-anchor" href="#社交登录" aria-hidden="true">#</a> 社交登录</h1><p>最新版 Waline 增加了登录评论功能，除了普通的账号登录之外，还支持使用第三方社交账号进行直接登录。</p><p>目前官方支持以下社交账号登录。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>社交账号登录功能并非默认开启，需进行额外配置。</p></div><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>',5),r=(0,a.Uk)("开启 GitHub 账号登录功能需要配置 GitHub OAuth 密钥。点击 "),d={href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("Register a new OAuth application"),c=(0,a.Uk)(" 进入 GitHub OAuth 应用申请页面。"),s=(0,a.uE)("<p>配置注意事项如下:</p><ul><li>Application name: 应用名称，会在用户授权时显示，推荐使用博客名称。</li><li>Homepage URL: 应用主页地址，会在用户授权时显示，推荐使用博客地址。</li><li>Appcation description: 应用描述，会在用户授权时显示，非必填项。</li><li>Authorization callback URL: 应用的回调地址，登录时需要使用。填入 <code>&lt;serverURL&gt;/oauth/github</code> 其中 <code>&lt;serverURL&gt;</code> 是你的 Waline 服务端地址。</li></ul><p>填写完成后点击 <kbd>Register application</kbd> 即可成功创建。页面中会显示 Client ID。点击 Client secrets 栏右边的 <kbd>Generate a new client secret</kbd> 按钮则可以获取到该应用的 Client secrets。</p><p>使用以上信息配置环境变量，重新部署后即可使用 GitHub 登录。</p><table><thead><tr><th>环境变量名称</th><th>备注</th></tr></thead><tbody><tr><td><code>GITHUB_ID</code></td><td>对应 GitHub OAuth App 中的 Client ID</td></tr><tr><td><code>GITHUB_SECRET</code></td><td>对应 GitHub OAuth App 中的 Client secrets</td></tr></tbody></table>",5),p={render:function(t,e){const i=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[r,(0,a._)("a",d,[l,(0,a.Wm)(i)]),c]),s],64)}}}}]);