"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6129],{9112:(e,l,t)=>{t.r(l),t.d(l,{data:()=>n});const n={key:"v-66cc4fee",path:"/guide/server/notification.html",title:"评论通知",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="评论通知" tabindex="-1"><a class="header-anchor" href="#评论通知" aria-hidden="true">#</a> 评论通知</h1>\n<p>当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。</p>\n<p>博主通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。</p>\n',headers:[{level:2,title:"邮件通知",slug:"邮件通知",children:[]},{level:2,title:"微信通知",slug:"微信通知",children:[]},{level:2,title:"QQ 通知",slug:"qq-通知",children:[]},{level:2,title:"Telegram 通知",slug:"telegram-通知",children:[]},{level:2,title:"通知模板",slug:"通知模板",children:[{level:3,title:"支持的变量",slug:"支持的变量",children:[]},{level:3,title:"默认模板",slug:"默认模板",children:[]},{level:3,title:"附加说明",slug:"附加说明",children:[]}]}],filePathRelative:"guide/server/notification.md",git:{updatedTime:1629771653e3,contributors:[]}}},5076:(e,l,t)=>{t.r(l),t.d(l,{default:()=>ae});var n=t(8917);const a=(0,n._)("h1",{id:"评论通知",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#评论通知","aria-hidden":"true"},"#"),(0,n.Uk)(" 评论通知")],-1),d=(0,n._)("p",null,"当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。",-1),s=(0,n._)("p",null,"博主通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。",-1),o=(0,n._)("h2",{id:"邮件通知",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#邮件通知","aria-hidden":"true"},"#"),(0,n.Uk)(" 邮件通知")],-1),r=(0,n._)("p",null,"邮件通知需要配置以下环境变量:",-1),i=(0,n._)("p",null,[(0,n._)("code",null,"SMTP_SERVICE"),(0,n.Uk)(": SMTP 邮件发送服务提供商。")],-1),c={class:"custom-container tip"},p=(0,n._)("p",{class:"custom-container-title"},"提示",-1),u=(0,n.Uk)("你可以在 "),h={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},_=(0,n.Uk)("这里"),k=(0,n.Uk)(" 查看所有支持的运营商。"),m=(0,n._)("p",null,[(0,n.Uk)("如果你的运营商不受支持，你必须填写 "),(0,n._)("code",null,"SMTP_HOST"),(0,n.Uk)(" 和 "),(0,n._)("code",null,"SMTP_PORT"),(0,n.Uk)("。")],-1),T=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"SMTP_HOST"),(0,n.Uk)(": SMTP 服务器地址，一般可以在邮箱的设置中找到。")]),(0,n._)("li",null,[(0,n._)("code",null,"SMTP_PORT"),(0,n.Uk)(": SMTP 服务器端口，一般可以在邮箱的设置中找到。")])],-1),E=(0,n.uE)("<li><p><code>SMTP_USER</code>: SMTP 邮件发送服务的用户名，一般为登录邮箱。</p></li><li><p><code>SMTP_PASS</code>: SMTP 邮件发送服务的密码，一般为邮箱登录密码，部分邮箱(例如 163)是单独的 SMTP 密码。</p></li><li><p><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</p></li><li><p><code>SITE_URL</code>: 网站地址，用于在消息中显示。</p></li>",4),U=(0,n.uE)('<p>以下是选填的环境变量:</p><ul><li><code>SENDER_NAME</code>: 自定义发送邮件的发件人</li><li><code>SENDER_EMAIL</code>: 自定义发送邮件的发件地址</li><li><code>MAIL_SUBJECT</code>: 自定义评论回复邮件标题</li><li><code>MAIL_TEMPLATE</code>: 自定义评论回复邮件内容</li><li><code>MAIL_SUBJECT_ADMIN</code>: 自定义新评论通知邮件标题</li><li><code>MAIL_TEMPLATE_ADMIN</code>: 自定义新评论通知邮件内容</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li></ul><h2 id="微信通知" tabindex="-1"><a class="header-anchor" href="#微信通知" aria-hidden="true">#</a> 微信通知</h2>',3),f=(0,n.Uk)("微信通知使用了 "),g={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},b=(0,n.Uk)("Server 酱"),M=(0,n.Uk)(" 提供的服务，需要在环境变量中配置在 Server 酱中申请的 "),S=(0,n._)("code",null,"SC_KEY",-1),Q=(0,n.Uk)("。"),A=(0,n.uE)('<ul><li><code>SC_KEY</code>: Server 酱提供的 Token，必填。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li></ul><h2 id="qq-通知" tabindex="-1"><a class="header-anchor" href="#qq-通知" aria-hidden="true">#</a> QQ 通知</h2>',2),P=(0,n.Uk)("QQ 通知使用了 "),v={href:"https://qmsg.zendee.cn",target:"_blank",rel:"noopener noreferrer"},I=(0,n.Uk)("Qmsg 酱"),L=(0,n.Uk)(" 提供的服务，需要在环境变量中配置在 Qmsg 酱中申请的 "),R=(0,n._)("code",null,"QMSG_KEY",-1),x=(0,n.Uk)("。"),w=(0,n.uE)('<ul><li><code>QMSG_KEY</code>: Qmsg 酱提供的 KEY，必填。</li><li><code>QQ_ID</code>: 接收消息的 QQ 号 (不支持 QQ 群)，可以添加多个，以半角逗号分割，如: <code>1244453393,2952937634</code> (必须均在您的 Qmsg 酱 QQ 号列表中)。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li><li><code>QQ_TEMPLATE</code>: QQ 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。</li></ul><h2 id="telegram-通知" tabindex="-1"><a class="header-anchor" href="#telegram-通知" aria-hidden="true">#</a> Telegram 通知</h2><p>Telegram 通知通过 Telegram bot 机器人实现，需要配置以下几个环境变量:</p>',3),N=(0,n._)("code",null,"TG_BOT_TOKEN",-1),O=(0,n.Uk)(": Telegram 机器人用于访问 HTTP API 的 token，通过 "),q={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("@BotFather"),C=(0,n.Uk)(" 创建机器人获取，必填。"),H=(0,n._)("code",null,"TG_CHAT_ID",-1),W=(0,n.Uk)(": 接收消息对象的 "),D=(0,n._)("code",null,"chat_id",-1),K=(0,n.Uk)("，可以是单一用户、频道、群组，通过 "),B={href:"https://t.me/userinfobot",target:"_blank",rel:"noopener noreferrer"},G=(0,n.Uk)("@userinfobot"),Y=(0,n.Uk)(" 获取，必填。"),j=(0,n._)("li",null,[(0,n._)("code",null,"AUTHOR_EMAIL"),(0,n.Uk)(": 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。")],-1),z=(0,n._)("li",null,[(0,n._)("code",null,"SITE_NAME"),(0,n.Uk)(": 网站名称，用于在消息中显示。")],-1),F=(0,n._)("li",null,[(0,n._)("code",null,"SITE_URL"),(0,n.Uk)(": 网站地址，用于在消息中显示。")],-1),J=(0,n._)("li",null,[(0,n._)("code",null,"TG_TEMPLATE"),(0,n.Uk)(": Telegram 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。")],-1),V=(0,n.uE)('<h2 id="通知模板" tabindex="-1"><a class="header-anchor" href="#通知模板" aria-hidden="true">#</a> 通知模板</h2><p>Waline 支持为每个平台分别配置您自定义的通知模板，从而实现更强大的自定义能力与多语言兼容性。</p><h3 id="支持的变量" tabindex="-1"><a class="header-anchor" href="#支持的变量" aria-hidden="true">#</a> 支持的变量</h3><p>模板通过 <code>self</code> 、 <code>parent</code> 和 <code>site</code> 对象传递参数，其中分别包含以下变量:</p><ul><li><p><code>self</code>: 该条评论本身</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>nick</td><td>评论者名</td></tr><tr><td>mail</td><td>评论者邮箱</td></tr><tr><td>link</td><td>评论者网址</td></tr><tr><td>url</td><td>文章地址</td></tr><tr><td>comment</td><td>评论内容</td></tr><tr><td><em>commentLink</em>*</td><td>评论中的链接</td></tr></tbody></table><p>*: commentLink 仅在 Telegram 通知中提供，会自动封装成 Markdown 的格式</p></li><li><p><code>parent</code>: 该条评论的回复对象(父评论)</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>nick</td><td>评论者名</td></tr><tr><td>mail</td><td>评论者邮箱</td></tr><tr><td>link</td><td>评论者网址</td></tr><tr><td>type</td><td>评论者类型</td></tr><tr><td>comment</td><td>评论内容</td></tr></tbody></table></li><li><p>site: 网站配置</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>站点名</td></tr><tr><td>url</td><td>站点网址</td></tr><tr><td>postUrl</td><td>评论完整地址</td></tr></tbody></table></li></ul><h3 id="默认模板" tabindex="-1"><a class="header-anchor" href="#默认模板" aria-hidden="true">#</a> 默认模板</h3><p>此处附上默认的模板，方便您参考:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>💬 {{site.name|safe}} 有新评论啦\n{{self.nick}} 评论道:\n{{self.comment}}\n邮箱: {{self.mail}}\n状态: {{self.status}}\n仅供评论预览，查看完整內容:\n{{site.postUrl}}\n</code></pre></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>💬 <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> 有新评论啦</span><span class="token punctuation">_</span></span>\n\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> 回复说:\n\n<span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">{{self.comment-}}</span>\n<span class="token punctuation">```</span></span>\n\n{{-self.commentLink}}\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">邮箱</span><span class="token punctuation">_</span></span>: <span class="token code-snippet code keyword">`{{self.mail}}`</span>\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">审核</span><span class="token punctuation">_</span></span>: {{self.status}}\n\n仅供评论预览，点击 <span class="token url">[<span class="token content">查看完整內容</span>](<span class="token url">{{site.postUrl}}</span>)</span>\n</code></pre></div></li></ul><h3 id="附加说明" tabindex="-1"><a class="header-anchor" href="#附加说明" aria-hidden="true">#</a> 附加说明</h3>',9),X=(0,n.Uk)("Vercel 的环境变量大小限制为 "),Z=(0,n._)("code",null,"4KB",-1),$=(0,n.Uk)(" ，所以如果您的模板很长，请使用代码配置，参见 "),ee={href:"https://github.com/walinejs/waline/issues/106",target:"_blank",rel:"noopener noreferrer"},le=(0,n.Uk)("issue#106"),te=(0,n.Uk)(" ；"),ne=(0,n._)("li",null,"变量具体信息在开发过程中可能会发生变化，此处的变量说明仅供参考，具体的内容请以具体的代码示例为准。",-1),ae={render:function(e,l){const t=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,d,s,o,r,(0,n._)("ul",null,[(0,n._)("li",null,[i,(0,n._)("div",c,[p,(0,n._)("p",null,[u,(0,n._)("a",h,[_,(0,n.Wm)(t)]),k]),m,T])]),E]),U,(0,n._)("p",null,[f,(0,n._)("a",g,[b,(0,n.Wm)(t)]),M,S,Q]),A,(0,n._)("p",null,[P,(0,n._)("a",v,[I,(0,n.Wm)(t)]),L,R,x]),w,(0,n._)("ul",null,[(0,n._)("li",null,[N,O,(0,n._)("a",q,[y,(0,n.Wm)(t)]),C]),(0,n._)("li",null,[H,W,D,K,(0,n._)("a",B,[G,(0,n.Wm)(t)]),Y]),j,z,F,J]),V,(0,n._)("ol",null,[(0,n._)("li",null,[X,Z,$,(0,n._)("a",ee,[le,(0,n.Wm)(t)]),te]),ne])],64)}}}}]);