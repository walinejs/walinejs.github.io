"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6129],{9112:(e,l,t)=>{t.r(l),t.d(l,{data:()=>n});const n={key:"v-66cc4fee",path:"/guide/server/notification.html",title:"评论通知",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="评论通知" tabindex="-1"><a class="header-anchor" href="#评论通知" aria-hidden="true">#</a> 评论通知</h1>\n<p>当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。</p>\n<p>博主通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。</p>\n',headers:[{level:2,title:"邮件通知",slug:"邮件通知",children:[]},{level:2,title:"微信通知",slug:"微信通知",children:[]},{level:2,title:"企业微信应用通知",slug:"企业微信应用通知",children:[]},{level:2,title:"QQ 通知",slug:"qq-通知",children:[]},{level:2,title:"Telegram 通知",slug:"telegram-通知",children:[]},{level:2,title:"通知模板",slug:"通知模板",children:[{level:3,title:"支持的变量",slug:"支持的变量",children:[]},{level:3,title:"默认模板",slug:"默认模板",children:[]},{level:3,title:"附加说明",slug:"附加说明",children:[]}]}],filePathRelative:"guide/server/notification.md",git:{updatedTime:1644247333e3,contributors:[{name:"AHdark",email:"ahdark@outlook.com",commits:1}]}}},2782:(e,l,t)=>{t.r(l),t.d(l,{default:()=>fe});var n=t(8917);const a=(0,n._)("h1",{id:"评论通知",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#评论通知","aria-hidden":"true"},"#"),(0,n.Uk)(" 评论通知")],-1),d=(0,n._)("p",null,"当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。",-1),o=(0,n._)("p",null,"博主通知支持多种方式，包括 QQ、微信、邮件等，回复评论作者仅支持邮件通知。",-1),r=(0,n._)("h2",{id:"邮件通知",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#邮件通知","aria-hidden":"true"},"#"),(0,n.Uk)(" 邮件通知")],-1),i=(0,n._)("p",null,"邮件通知需要配置以下环境变量:",-1),s=(0,n._)("p",null,[(0,n._)("code",null,"SMTP_SERVICE"),(0,n.Uk)(": SMTP 邮件发送服务提供商。")],-1),c={class:"custom-container tip"},p=(0,n._)("p",{class:"custom-container-title"},"提示",-1),u=(0,n.Uk)("你可以在 "),h={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},_=(0,n.Uk)("这里"),k=(0,n.Uk)(" 查看所有支持的运营商。"),m=(0,n._)("p",null,[(0,n.Uk)("如果你的运营商不受支持，你必须填写 "),(0,n._)("code",null,"SMTP_HOST"),(0,n.Uk)(" 和 "),(0,n._)("code",null,"SMTP_PORT"),(0,n.Uk)("。")],-1),T=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"SMTP_HOST"),(0,n.Uk)(": SMTP 服务器地址，一般可以在邮箱的设置中找到。")]),(0,n._)("li",null,[(0,n._)("code",null,"SMTP_PORT"),(0,n.Uk)(": SMTP 服务器端口，一般可以在邮箱的设置中找到。")])],-1),f=(0,n.uE)("<li><p><code>SMTP_USER</code>: SMTP 邮件发送服务的用户名，一般为登录邮箱。</p></li><li><p><code>SMTP_PASS</code>: SMTP 邮件发送服务的密码，一般为邮箱登录密码，部分邮箱(例如 163)是单独的 SMTP 密码。</p></li><li><p><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</p></li><li><p><code>SITE_URL</code>: 网站地址，用于在消息中显示。</p></li><li><p><code>AUTHOR_EMAIL</code>: 博主邮箱，用来接收新评论通知。如果是博主发布的评论则不进行提醒通知。</p></li>",5),U=(0,n.uE)('<p>以下是选填的环境变量:</p><ul><li><code>SENDER_NAME</code>: 自定义发送邮件的发件人</li><li><code>SENDER_EMAIL</code>: 自定义发送邮件的发件地址</li><li><code>MAIL_SUBJECT</code>: 自定义评论回复邮件标题</li><li><code>MAIL_TEMPLATE</code>: 自定义评论回复邮件内容</li><li><code>MAIL_SUBJECT_ADMIN</code>: 自定义新评论通知邮件标题</li><li><code>MAIL_TEMPLATE_ADMIN</code>: 自定义新评论通知邮件内容</li></ul><h2 id="微信通知" tabindex="-1"><a class="header-anchor" href="#微信通知" aria-hidden="true">#</a> 微信通知</h2>',3),E=(0,n.Uk)("微信通知使用了 "),g={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},b=(0,n.Uk)("Server 酱"),M=(0,n.Uk)(" 提供的服务，需要在环境变量中配置在 Server 酱中申请的 "),S=(0,n._)("code",null,"SC_KEY",-1),A=(0,n.Uk)("。"),Q=(0,n.uE)('<ul><li><code>SC_KEY</code>: Server 酱提供的 Token，必填。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li></ul><h2 id="企业微信应用通知" tabindex="-1"><a class="header-anchor" href="#企业微信应用通知" aria-hidden="true">#</a> 企业微信应用通知</h2>',2),v=(0,n.Uk)("由于 "),I={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},P=(0,n.Uk)("Server 酱"),L=(0,n.Uk)(" 提供的推送服务对发送消息数量有限制，如果消息数量较多时，建议使用企业微信应用通知。"),x=(0,n._)("p",null,[(0,n.Uk)("要使用企业微信应用通知，需要配置环境变量 "),(0,n._)("code",null,"QYWX_AM"),(0,n.Uk)(" 。")],-1),R=(0,n._)("p",null,"第一个值是企业 id，第二个值是应用 secret，第三个值@all(或者成员 id)，第四个值是 AgentID，第五个值是图片 id，中间以逗号隔开。最终格式例：",-1),W=(0,n._)("div",{class:"language-text ext-text"},[(0,n._)("pre",{class:"language-text"},[(0,n._)("code",null,"ww479cadfqfe8c151f,MPKN9gX97w4e4b4h4u7u4i4i4i4iO6mN_dDedBFzqC5c,@all,1000002,2S8H-JWEdsadFDSFSDDijbrtkldfhjslafhs5zEU1GyUkU\n")])],-1),y={href:"https://note.youdao.com/ynoteshare/index.html?id=351e08a72378206f9dd64d2281e9b83b&type=note&_time=1642141216026",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("参考文档 1"),N=(0,n.Uk)(" | "),q={href:"https://note.youdao.com/ynoteshare1/index.html?id=1a0c8aff284ad28cbd011b29b3ad0191&type=note",target:"_blank",rel:"noopener noreferrer"},O=(0,n.Uk)("参考文档 2"),D=(0,n.uE)('<ul><li><code>QYWX_AM</code>: 用于发送企业应用消息的变量，必填。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li><li><code>WX_TEMPLATE</code>: QYWX_AM 使用的通知模板，变量与具体格式可参见下文 QQ 的通知模板。未配置则使用默认模板。</li></ul><h2 id="qq-通知" tabindex="-1"><a class="header-anchor" href="#qq-通知" aria-hidden="true">#</a> QQ 通知</h2>',2),H=(0,n.Uk)("QQ 通知使用了 "),C={href:"https://qmsg.zendee.cn",target:"_blank",rel:"noopener noreferrer"},Y=(0,n.Uk)("Qmsg 酱"),K=(0,n.Uk)(" 提供的服务，需要在环境变量中配置在 Qmsg 酱中申请的 "),B=(0,n._)("code",null,"QMSG_KEY",-1),G=(0,n.Uk)("。"),F=(0,n.uE)('<ul><li><code>QMSG_KEY</code>: Qmsg 酱提供的 KEY，必填。</li><li><code>QQ_ID</code>: 接收消息的 QQ 号 (不支持 QQ 群)，可以添加多个，以半角逗号分割，如: <code>1244453393,2952937634</code> (必须均在您的 Qmsg 酱 QQ 号列表中)。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li><li><code>QQ_TEMPLATE</code>: QQ 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。</li></ul><h2 id="telegram-通知" tabindex="-1"><a class="header-anchor" href="#telegram-通知" aria-hidden="true">#</a> Telegram 通知</h2><p>Telegram 通知通过 Telegram bot 机器人实现，需要配置以下几个环境变量:</p>',3),X=(0,n._)("code",null,"TG_BOT_TOKEN",-1),j=(0,n.Uk)(": Telegram 机器人用于访问 HTTP API 的 token，通过 "),z={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},J=(0,n.Uk)("@BotFather"),V=(0,n.Uk)(" 创建机器人获取，必填。"),Z=(0,n._)("code",null,"TG_CHAT_ID",-1),$=(0,n.Uk)(": 接收消息对象的 "),ee=(0,n._)("code",null,"chat_id",-1),le=(0,n.Uk)("，可以是单一用户、频道、群组，通过 "),te={href:"https://t.me/userinfobot",target:"_blank",rel:"noopener noreferrer"},ne=(0,n.Uk)("@userinfobot"),ae=(0,n.Uk)(" 获取，必填。"),de=(0,n._)("li",null,[(0,n._)("code",null,"AUTHOR_EMAIL"),(0,n.Uk)(": 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。")],-1),oe=(0,n._)("li",null,[(0,n._)("code",null,"SITE_NAME"),(0,n.Uk)(": 网站名称，用于在消息中显示。")],-1),re=(0,n._)("li",null,[(0,n._)("code",null,"SITE_URL"),(0,n.Uk)(": 网站地址，用于在消息中显示。")],-1),ie=(0,n._)("li",null,[(0,n._)("code",null,"TG_TEMPLATE"),(0,n.Uk)(": Telegram 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。")],-1),se=(0,n.uE)('<h2 id="通知模板" tabindex="-1"><a class="header-anchor" href="#通知模板" aria-hidden="true">#</a> 通知模板</h2><p>Waline 支持为每个平台分别配置您自定义的通知模板，从而实现更强大的自定义能力与多语言兼容性。</p><h3 id="支持的变量" tabindex="-1"><a class="header-anchor" href="#支持的变量" aria-hidden="true">#</a> 支持的变量</h3><p>模板通过 <code>self</code> 、 <code>parent</code> 和 <code>site</code> 对象传递参数，其中分别包含以下变量:</p><ul><li><p><code>self</code>: 该条评论本身</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>nick</td><td>评论者名</td></tr><tr><td>mail</td><td>评论者邮箱</td></tr><tr><td>link</td><td>评论者网址</td></tr><tr><td>url</td><td>文章地址</td></tr><tr><td>comment</td><td>评论内容</td></tr><tr><td><em>commentLink</em>*</td><td>评论中的链接</td></tr></tbody></table><p>*: commentLink 仅在 Telegram 通知中提供，会自动封装成 Markdown 的格式</p></li><li><p><code>parent</code>: 该条评论的回复对象(父评论)</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>nick</td><td>评论者名</td></tr><tr><td>mail</td><td>评论者邮箱</td></tr><tr><td>link</td><td>评论者网址</td></tr><tr><td>type</td><td>评论者类型</td></tr><tr><td>comment</td><td>评论内容</td></tr></tbody></table></li><li><p>site: 网站配置</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>站点名</td></tr><tr><td>url</td><td>站点网址</td></tr><tr><td>postUrl</td><td>评论完整地址</td></tr></tbody></table></li></ul><h3 id="默认模板" tabindex="-1"><a class="header-anchor" href="#默认模板" aria-hidden="true">#</a> 默认模板</h3><p>此处附上默认的模板，方便您参考:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>💬 {{site.name|safe}} 有新评论啦\n{{self.nick}} 评论道:\n{{self.comment}}\n邮箱: {{self.mail}}\n状态: {{self.status}}\n仅供评论预览，查看完整內容:\n{{site.postUrl}}\n</code></pre></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>💬 <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> 有新评论啦</span><span class="token punctuation">_</span></span>\n\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> 回复说:\n\n<span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">{{self.comment-}}</span>\n<span class="token punctuation">```</span></span>\n\n{{-self.commentLink}}\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">邮箱</span><span class="token punctuation">_</span></span>: <span class="token code-snippet code keyword">`{{self.mail}}`</span>\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">审核</span><span class="token punctuation">_</span></span>: {{self.status}}\n\n仅供评论预览，点击 <span class="token url">[<span class="token content">查看完整內容</span>](<span class="token url">{{site.postUrl}}</span>)</span>\n</code></pre></div></li></ul><h3 id="附加说明" tabindex="-1"><a class="header-anchor" href="#附加说明" aria-hidden="true">#</a> 附加说明</h3>',9),ce=(0,n.Uk)("Vercel 的环境变量大小限制为 "),pe=(0,n._)("code",null,"4KB",-1),ue=(0,n.Uk)(" ，所以如果您的模板很长，请使用代码配置，参见 "),he={href:"https://github.com/walinejs/waline/issues/106",target:"_blank",rel:"noopener noreferrer"},_e=(0,n.Uk)("issue#106"),ke=(0,n.Uk)(" ；"),me=(0,n._)("li",null,"变量具体信息在开发过程中可能会发生变化，此处的变量说明仅供参考，具体的内容请以具体的代码示例为准。",-1),Te={},fe=(0,t(6959).Z)(Te,[["render",function(e,l){const t=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[a,d,o,r,i,(0,n._)("ul",null,[(0,n._)("li",null,[s,(0,n._)("div",c,[p,(0,n._)("p",null,[u,(0,n._)("a",h,[_,(0,n.Wm)(t)]),k]),m,T])]),f]),U,(0,n._)("p",null,[E,(0,n._)("a",g,[b,(0,n.Wm)(t)]),M,S,A]),Q,(0,n._)("p",null,[v,(0,n._)("a",I,[P,(0,n.Wm)(t)]),L]),x,R,W,(0,n._)("p",null,[(0,n._)("a",y,[w,(0,n.Wm)(t)]),N,(0,n._)("a",q,[O,(0,n.Wm)(t)])]),D,(0,n._)("p",null,[H,(0,n._)("a",C,[Y,(0,n.Wm)(t)]),K,B,G]),F,(0,n._)("ul",null,[(0,n._)("li",null,[X,j,(0,n._)("a",z,[J,(0,n.Wm)(t)]),V]),(0,n._)("li",null,[Z,$,ee,le,(0,n._)("a",te,[ne,(0,n.Wm)(t)]),ae]),de,oe,re,ie]),se,(0,n._)("ol",null,[(0,n._)("li",null,[ce,pe,ue,(0,n._)("a",he,[_e,(0,n.Wm)(t)]),ke]),me])],64)}]])}}]);