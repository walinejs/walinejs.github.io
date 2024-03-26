import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as d,c as i,b as e,d as t,e as n,a as o}from"./app-Bb0Ex3UX.js";const c={},r=e("p",null,"当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。",-1),p=e("ul",null,[e("li",null,"博主通知支持多种方式，包括 QQ、微信、邮件等。"),e("li",null,"当访客的评论收到回复时，我们会对访客进行邮件通知。")],-1),h=e("h2",{id:"邮件通知",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#邮件通知"},[e("span",null,"邮件通知")])],-1),_=e("p",null,"邮件通知需要配置以下环境变量:",-1),u=e("p",null,[e("code",null,"SMTP_SERVICE"),t(": SMTP 邮件发送服务提供商。")],-1),m={class:"hint-container tip"},T=e("p",{class:"hint-container-title"},"提示",-1),E={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},k=e("p",null,[t("如果你的运营商不受支持，你必须填写 "),e("code",null,"SMTP_HOST"),t(" 和 "),e("code",null,"SMTP_PORT"),t("。")],-1),f=e("ul",null,[e("li",null,[e("code",null,"SMTP_HOST"),t(": SMTP 服务器地址，一般可以在邮箱的设置中找到。")]),e("li",null,[e("code",null,"SMTP_PORT"),t(": SMTP 服务器端口，一般可以在邮箱的设置中找到。")])],-1),g=o("<li><p><code>SMTP_USER</code>: SMTP 邮件发送服务的用户名，一般为登录邮箱。</p></li><li><p><code>SMTP_PASS</code>: SMTP 邮件发送服务的密码，一般为邮箱登录密码，部分邮箱(例如 163)是单独的 SMTP 密码。</p></li><li><p><code>SMTP_SECURE</code>: 是否使用 SSL 连接 SMTP。</p></li><li><p><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</p></li><li><p><code>SITE_URL</code>: 网站地址，用于在消息中显示。</p></li><li><p><code>AUTHOR_EMAIL</code>: 博主邮箱，用来接收新评论通知。如果是博主发布的评论则不进行提醒通知。</p></li>",6),S=o('<p>以下是选填的环境变量:</p><ul><li><code>SENDER_NAME</code>: 自定义发送邮件的发件人</li><li><code>SENDER_EMAIL</code>: 自定义发送邮件的发件地址</li><li><code>MAIL_SUBJECT</code>: 自定义评论回复邮件标题</li><li><code>MAIL_TEMPLATE</code>: 自定义评论回复邮件内容</li><li><code>MAIL_SUBJECT_ADMIN</code>: 自定义新评论通知邮件标题</li><li><code>MAIL_TEMPLATE_ADMIN</code>: 自定义新评论通知邮件内容</li></ul><h2 id="微信通知" tabindex="-1"><a class="header-anchor" href="#微信通知"><span>微信通知</span></a></h2>',3),M={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"SC_KEY",-1),A=o('<ul><li><code>SC_KEY</code>: Server 酱提供的 Token，必填。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li><li><code>SC_TEMPLATE</code>: Server酱 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。</li></ul><h2 id="企业微信应用通知" tabindex="-1"><a class="header-anchor" href="#企业微信应用通知"><span>企业微信应用通知</span></a></h2>',2),P={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},L=e("p",null,[t("要使用企业微信应用通知，需要配置环境变量 "),e("code",null,"QYWX_AM"),t(" 。")],-1),I=e("p",null,"第一个值是企业 id，第二个值是应用 secret，第三个值@all(或者成员 id)，第四个值是 AgentID，第五个值是图片 id，中间以逗号隔开。最终格式例：",-1),U=e("div",{class:"language-text","data-ext":"text","data-title":"text"},[e("pre",{class:"language-text"},[e("code",null,`ww479cadfqfe8c151f,MPKN9gX97w4e4b4h4u7u4i4i4i4iO6mN_dDedBFzqC5c,@all,1000002,2S8H-JWEdsadFDSFSDDijbrtkldfhjslafhs5zEU1GyUkU
`)])],-1),Q={href:"https://note.youdao.com/ynoteshare/index.html?id=351e08a72378206f9dd64d2281e9b83b&type=note&_time=1642141216026",target:"_blank",rel:"noopener noreferrer"},v={href:"https://note.youdao.com/ynoteshare1/index.html?id=1a0c8aff284ad28cbd011b29b3ad0191&type=note",target:"_blank",rel:"noopener noreferrer"},R=o('<ul><li><code>QYWX_AM</code>: 用于发送企业应用消息的变量，必填。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li><li><code>WX_TEMPLATE</code>: QYWX_AM 使用的通知模板，变量与具体格式可参见下文 QQ 的通知模板。未配置则使用默认模板。</li></ul><h2 id="qq-通知" tabindex="-1"><a class="header-anchor" href="#qq-通知"><span>QQ 通知</span></a></h2>',2),x={href:"https://qmsg.zendee.cn",target:"_blank",rel:"noopener noreferrer"},N=e("code",null,"QMSG_KEY",-1),w=o('<ul><li><code>QMSG_KEY</code>: Qmsg 酱提供的 KEY，必填。</li><li><code>QMSG_Host</code>: Qmsg 酱提供的私有化 HOST，选填。默认为 <code>https://qmsg.zendee.cn</code>。</li><li><code>QQ_ID</code>: 接收消息的 QQ 号 (不支持 QQ 群)，可以添加多个，以半角逗号分割，如: <code>1244453393,2952937634</code> (必须均在您的 Qmsg 酱 QQ 号列表中)。</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li><li><code>QQ_TEMPLATE</code>: QQ 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。</li></ul><h2 id="telegram-通知" tabindex="-1"><a class="header-anchor" href="#telegram-通知"><span>Telegram 通知</span></a></h2><p>Telegram 通知通过 Telegram bot 机器人实现，需要配置以下几个环境变量:</p>',3),y=e("code",null,"TG_BOT_TOKEN",-1),H={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},O=e("code",null,"TG_CHAT_ID",-1),C=e("code",null,"chat_id",-1),D={href:"https://t.me/userinfobot",target:"_blank",rel:"noopener noreferrer"},W=e("li",null,[e("code",null,"AUTHOR_EMAIL"),t(": 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。")],-1),q=e("li",null,[e("code",null,"SITE_NAME"),t(": 网站名称，用于在消息中显示。")],-1),B=e("li",null,[e("code",null,"SITE_URL"),t(": 网站地址，用于在消息中显示。")],-1),K=e("li",null,[e("code",null,"TG_TEMPLATE"),t(": Telegram 使用的通知模板，变量与具体格式可参见下文的通知模板。未配置则使用默认模板。")],-1),Y=e("h2",{id:"pushplus-通知",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pushplus-通知"},[e("span",null,"PushPlus 通知")])],-1),j={href:"http://www.pushplus.plus/",target:"_blank",rel:"noopener noreferrer"},z={href:"http://www.pushplus.plus/doc/guide/api.html#%E4%B8%80%E3%80%81%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"},F=o('<ul><li><code>PUSH_PLUS_KEY</code>： 用户令牌，即 <code>token</code>，必填。</li><li><code>PUSH_PLUS_TOPIC</code>：群组编码，不填仅发送给自己；channel 为 webhook 时无效</li><li><code>PUSH_PLUS_TEMPLATE</code>：发送模板</li><li><code>PUSH_PLUS_CHANNEL</code>：发送渠道</li><li><code>PUSH_PLUS_WEBHOOK</code>：webhook 编码，仅在 channel 使用 webhook 渠道和 CP 渠道时需要填写</li><li><code>PUSH_PLUS_CALLBACKURL</code>：发送结果回调地址</li><li><code>AUTHOR_EMAIL</code>: 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。</li><li><code>SITE_NAME</code>: 网站名称，用于在消息中显示。</li><li><code>SITE_URL</code>: 网站地址，用于在消息中显示。</li></ul><h2 id="discord-通知" tabindex="-1"><a class="header-anchor" href="#discord-通知"><span>Discord 通知</span></a></h2><p>Discord 通知通过 Discord Webhook 实现，需要配置以下几个环境变量：</p>',3),G=e("code",null,"DISCORD_WEBHOOK",-1),V={href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",target:"_blank",rel:"noopener noreferrer"},X=e("li",null,[e("code",null,"DISCORD_TEMPLATE"),t("：发送模板")],-1),J=e("li",null,[e("code",null,"AUTHOR_EMAIL"),t(": 博主邮箱，用来区分发布的评论是否是博主本身发布的。如果是博主发布的则不进行提醒通知。")],-1),Z=e("li",null,[e("code",null,"SITE_NAME"),t(": 网站名称，用于在消息中显示。")],-1),$=e("li",null,[e("code",null,"SITE_URL"),t(": 网站地址，用于在消息中显示。")],-1),ee=e("h2",{id:"飞书通知",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#飞书通知"},[e("span",null,"飞书通知")])],-1),te=e("p",null,"飞书群聊机器人支持通过 Webhook 发送消息，需配置以下几个环境变量。",-1),le=e("code",null,"LARK_WEBHOOK",-1),ne={href:"https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN?lang=zh-CN",target:"_blank",rel:"noopener noreferrer"},oe=e("li",null,[e("code",null,"LARK_SECRET"),t(": 请参考上面的飞书文档，该密钥用于请求签名以避免接口被滥用（可选）")],-1),se=e("li",null,[e("code",null,"LARK_TEMPLATE"),t(": 消息模板")],-1),ae=e("li",null,[e("code",null,"SITE_NAME"),t(": 网站名称，用于在消息中显示。")],-1),de=e("li",null,[e("code",null,"SITE_URL"),t(": 网站地址，用于在消息中显示。")],-1),ie=o(`<h2 id="通知模板" tabindex="-1"><a class="header-anchor" href="#通知模板"><span>通知模板</span></a></h2><p>Waline 支持为每个平台分别配置您自定义的通知模板，从而实现更强大的自定义能力与多语言兼容性。</p><h3 id="支持的变量" tabindex="-1"><a class="header-anchor" href="#支持的变量"><span>支持的变量</span></a></h3><p>模板通过 <code>self</code> 、 <code>parent</code> 和 <code>site</code> 对象传递参数，其中分别包含以下变量:</p><ul><li><p><code>self</code>: 该条评论本身</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>nick</td><td>评论者名</td></tr><tr><td>mail</td><td>评论者邮箱</td></tr><tr><td>link</td><td>评论者网址</td></tr><tr><td>url</td><td>文章地址</td></tr><tr><td>comment</td><td>评论内容</td></tr><tr><td>browser</td><td>浏览器</td></tr><tr><td>os</td><td>操作系统</td></tr><tr><td>addr</td><td>归属地</td></tr><tr><td>avatar</td><td>头像地址</td></tr><tr><td><em>commentLink</em>*</td><td>评论中的链接</td></tr></tbody></table><p>*: commentLink 仅在 Telegram 通知中提供，会自动封装成 Markdown 的格式</p></li><li><p><code>parent</code>: 该条评论的回复对象(父评论)</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>nick</td><td>评论者名</td></tr><tr><td>mail</td><td>评论者邮箱</td></tr><tr><td>link</td><td>评论者网址</td></tr><tr><td>browser</td><td>浏览器</td></tr><tr><td>os</td><td>操作系统</td></tr><tr><td>addr</td><td>归属地</td></tr><tr><td>avatar</td><td>头像地址</td></tr><tr><td>comment</td><td>评论内容</td></tr></tbody></table></li><li><p>site: 网站配置</p><table><thead><tr><th>变量</th><th>备注</th></tr></thead><tbody><tr><td>name</td><td>站点名</td></tr><tr><td>url</td><td>站点网址</td></tr><tr><td>postUrl</td><td>评论完整地址</td></tr></tbody></table></li></ul><h3 id="默认模板" tabindex="-1"><a class="header-anchor" href="#默认模板"><span>默认模板</span></a></h3><p>此处附上默认的模板，方便您参考:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain" data-ext="plain" data-title="plain"><pre class="language-plain"><code>💬 {{site.name|safe}} 有新评论啦
{{self.nick}} 评论道:
{{self.comment}}
邮箱: {{self.mail}}
状态: {{self.status}}
仅供评论预览，查看完整內容:
{{site.postUrl}}
</code></pre></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown" data-ext="md" data-title="md"><pre class="language-markdown"><code>💬 <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> 有新评论啦</span><span class="token punctuation">_</span></span>

<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> 回复说:

<span class="token code"><span class="token punctuation">\`\`\`</span>
<span class="token code-block">{{self.comment-}}</span>
<span class="token punctuation">\`\`\`</span></span>

{{-self.commentLink}}
<span class="token italic"><span class="token punctuation">_</span><span class="token content">邮箱</span><span class="token punctuation">_</span></span>: <span class="token code-snippet code keyword">\`{{self.mail}}\`</span>
<span class="token italic"><span class="token punctuation">_</span><span class="token content">审核</span><span class="token punctuation">_</span></span>: {{self.status}}

仅供评论预览，点击 <span class="token url">[<span class="token content">查看完整內容</span>](<span class="token url">{{site.postUrl}}</span>)</span>
</code></pre></div></li><li><p>SC_TEMPLATE:</p><div class="language-plain" data-ext="plain" data-title="plain"><pre class="language-plain"><code>{{site.name|safe}} 有新评论啦
【评论者昵称】：{{self.nick}}
【评论者邮箱】：{{self.mail}}
【内容】：{{self.comment}}
【地址】：{{site.postUrl}}
</code></pre></div></li></ul><h3 id="附加说明" tabindex="-1"><a class="header-anchor" href="#附加说明"><span>附加说明</span></a></h3>`,9),ce=e("code",null,"4KB",-1),re={href:"https://github.com/walinejs/waline/issues/106",target:"_blank",rel:"noopener noreferrer"},pe=e("li",null,"变量具体信息在开发过程中可能会发生变化，此处的变量说明仅供参考，具体的内容请以具体的代码示例为准。",-1);function he(_e,ue){const l=a("ExternalLinkIcon");return d(),i("div",null,[r,p,h,_,e("ul",null,[e("li",null,[u,e("div",m,[T,e("p",null,[t("你可以在 "),e("a",E,[t("这里"),n(l)]),t(" 查看所有支持的运营商。")]),k,f])]),g]),S,e("p",null,[t("微信通知使用了 "),e("a",M,[t("Server 酱"),n(l)]),t(" 提供的服务，需要在环境变量中配置在 Server 酱中申请的 "),b,t("。")]),A,e("p",null,[t("由于 "),e("a",P,[t("Server 酱"),n(l)]),t(" 提供的推送服务对发送消息数量有限制，如果消息数量较多时，建议使用企业微信应用通知。")]),L,I,U,e("p",null,[e("a",Q,[t("参考文档 1"),n(l)]),t(" | "),e("a",v,[t("参考文档 2"),n(l)])]),R,e("p",null,[t("QQ 通知使用了 "),e("a",x,[t("Qmsg 酱"),n(l)]),t(" 提供的服务，需要在环境变量中配置在 Qmsg 酱中申请的 "),N,t("。")]),w,e("ul",null,[e("li",null,[y,t(": Telegram 机器人用于访问 HTTP API 的 token，通过 "),e("a",H,[t("@BotFather"),n(l)]),t(" 创建机器人获取，必填。")]),e("li",null,[O,t(": 接收消息对象的 "),C,t("，可以是单一用户、频道、群组，通过 "),e("a",D,[t("@userinfobot"),n(l)]),t(" 获取，必填。")]),W,q,B,K]),Y,e("p",null,[e("a",j,[t("pushplus"),n(l)]),t(" 集成了微信、企业微信、钉钉、短信、邮件等渠道的信息推送平台。需要配置以下几个环境变量，具体的参数格式见 "),e("a",z,[t("pushplus 文档"),n(l)]),t("：")]),F,e("ul",null,[e("li",null,[G,t("：Discord Webhook 地址，"),e("a",V,[t("如何创建 Discord Webhook"),n(l)]),t("？")]),X,J,Z,$]),ee,te,e("ul",null,[e("li",null,[le,t(": 飞书群聊机器人 "),e("a",ne,[t("使用指南"),n(l)])]),oe,se,ae,de]),ie,e("ol",null,[e("li",null,[t("Vercel 的环境变量大小限制为 "),ce,t(" ，所以如果您的模板很长，请使用代码配置，参见 "),e("a",re,[t("issue#106"),n(l)]),t(" ；")]),pe])])}const Ee=s(c,[["render",he],["__file","notification.html.vue"]]),ke=JSON.parse('{"path":"/guide/features/notification.html","title":"评论通知","lang":"zh-CN","frontmatter":{"title":"评论通知","icon":"notice","redirectFrom":"/guide/server/notification.html","description":"当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。 博主通知支持多种方式，包括 QQ、微信、邮件等。 当访客的评论收到回复时，我们会对访客进行邮件通知。 邮件通知 邮件通知需要配置以下环境变量: SMTP_SERVICE: SMTP 邮件发送服务提供商。 提示 你可以在 这里 查看所有支持的运营商。 如果你的运营商...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://waline.js.org/en/guide/features/notification.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/guide/features/notification.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"评论通知"}],["meta",{"property":"og:description","content":"当网站有用户发布评论或者用户回复评论时，Waline 支持对博主和回复评论作者进行通知。 博主通知支持多种方式，包括 QQ、微信、邮件等。 当访客的评论收到回复时，我们会对访客进行邮件通知。 邮件通知 邮件通知需要配置以下环境变量: SMTP_SERVICE: SMTP 邮件发送服务提供商。 提示 你可以在 这里 查看所有支持的运营商。 如果你的运营商..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-02-02T16:12:10.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-02T16:12:10.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"评论通知\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-02T16:12:10.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"邮件通知","slug":"邮件通知","link":"#邮件通知","children":[]},{"level":2,"title":"微信通知","slug":"微信通知","link":"#微信通知","children":[]},{"level":2,"title":"企业微信应用通知","slug":"企业微信应用通知","link":"#企业微信应用通知","children":[]},{"level":2,"title":"QQ 通知","slug":"qq-通知","link":"#qq-通知","children":[]},{"level":2,"title":"Telegram 通知","slug":"telegram-通知","link":"#telegram-通知","children":[]},{"level":2,"title":"PushPlus 通知","slug":"pushplus-通知","link":"#pushplus-通知","children":[]},{"level":2,"title":"Discord 通知","slug":"discord-通知","link":"#discord-通知","children":[]},{"level":2,"title":"飞书通知","slug":"飞书通知","link":"#飞书通知","children":[]},{"level":2,"title":"通知模板","slug":"通知模板","link":"#通知模板","children":[{"level":3,"title":"支持的变量","slug":"支持的变量","link":"#支持的变量","children":[]},{"level":3,"title":"默认模板","slug":"默认模板","link":"#默认模板","children":[]},{"level":3,"title":"附加说明","slug":"附加说明","link":"#附加说明","children":[]}]}],"git":{"createdTime":1669825130000,"updatedTime":1706890330000,"contributors":[{"name":"Albert","email":"linchengweiku@outlook.com","commits":1},{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":1},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":1},{"name":"钟意","email":"nepenthic@163.com","commits":1}]},"readingTime":{"minutes":6.99,"words":2096},"filePathRelative":"guide/features/notification.md","localizedDate":"2022年11月30日","autoDesc":true}');export{Ee as comp,ke as data};
