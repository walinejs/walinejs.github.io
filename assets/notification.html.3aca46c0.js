import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as a,c as l,f as d,a as e,b as i,d as t,e as n,r}from"./app.8941d199.js";const c={},h=e("p",null,"When a user posts a comment on the website or a user responds to a comment, Waline supports email or WeChat notification to the blogger and the author who responded to the comment.",-1),p=e("ul",null,[e("li",null,"We support mutiple types notifications for blogger"),e("li",null,"We will email a visitor once his comment gets a reply.")],-1),u=e("h2",{id:"email-notification",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#email-notification","aria-hidden":"true"},"#"),t(" Email Notification")],-1),_=e("p",null,"Email notification needs the following environment variables to be configured:",-1),m=e("p",null,[e("code",null,"SMTP_SERVICE"),t(": SMTP Mail delivery service provider")],-1),f={class:"custom-container tip"},b=e("p",{class:"custom-container-title"},"Tips",-1),g=t("You can find all support provider in "),T={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},w=t("here"),E=t(". If your provider is not listed, you must config "),k=e("code",null,"SMTP_HOST",-1),S=t(" and "),y=e("code",null,"SMTP_PORT",-1),v=t("."),I=e("ul",null,[e("li",null,[e("code",null,"SMTP_HOST"),t(": SMTP server address, it can be found in mailbox's setting page generally.")]),e("li",null,[e("code",null,"SMTP_PORT"),t(": SMTP server port, it can be found in mailbox's setting page generally.")])],-1),M=n("<li><p><code>SMTP_USER</code>: SMTP Mail delivery service account, it&#39;s your email address.</p></li><li><p><code>SMTP_PASS</code>: SMTP Mail delivery service password, it&#39;s your email password.</p></li><li><p><code>SITE_NAME</code>: Your site name, will be displayed in notification message.</p></li><li><p><code>SITE_URL</code>: Your site url, will be displayed in notification message.</p></li>",4),A=n('<p>The following environment variables are optional:</p><ul><li><code>SENDER_NAME</code>: Custom sender&#39;s name in notification</li><li><code>SENDER_EMAIL</code>: Custom sender&#39;s name in notification</li><li><code>MAIL_SUBJECT</code>: Custom comment reply email title</li><li><code>MAIL_TEMPLATE</code>: Custom reply email content</li><li><code>MAIL_SUBJECT_ADMIN</code>: Custom new comment notification email title</li><li><code>MAIL_TEMPLATE_ADMIN</code>: Custom new comment notification email content</li><li><code>AUTHOR_EMAIL</code>: The blogger\u2019s email, used to judge whether posted comment is posted by the blogger. If it is posted by the blogger, there will be no reminder notification.</li></ul><h2 id="wechat-notification" tabindex="-1"><a class="header-anchor" href="#wechat-notification" aria-hidden="true">#</a> Wechat Notification</h2>',3),L=t("We use "),P={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},U=t("Mr. Server"),C=t(" to wechat notification. You need to set "),N=e("code",null,"SC_KEY",-1),Q=t(" in env which applied in Mr. Server."),Y=n('<ul><li><code>SC_KEY</code>: Token applied in Mr. Server, It&#39;s required for this service.</li><li><code>AUTHOR_EMAIL</code>: The blogger\u2019s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li></ul><h2 id="qq-notification" tabindex="-1"><a class="header-anchor" href="#qq-notification" aria-hidden="true">#</a> QQ Notification</h2>',2),H=t("We use "),x={href:"https://qmsg.zendee.cn",target:"_blank",rel:"noopener noreferrer"},R=t("Mr. Qmsg"),O=t(" to send QQ notification. You need to set "),D=e("code",null,"QMSG_KEY",-1),W=t(" in env which applied in Mr. Qmsg."),B=n('<ul><li><code>QMSG_KEY</code>: KEY applied in Mr. Qmsg, It&#39;s required for this service.</li><li><code>QQ_ID</code>: The QQ ID of the receiver(s), except for QQ group. If there are more than one QQ ID, use commas to separate multiple values, e.g. <code>1244453393,2952937634</code> (should all be included in your Mr. Qmsg&#39;s QQ ID list).</li><li><code>AUTHOR_EMAIL</code>: The blogger\u2019s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li><li><code>QQ_TEMPLATE</code>: Notification template used by QQ. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.</li></ul><h2 id="telegram-notification" tabindex="-1"><a class="header-anchor" href="#telegram-notification" aria-hidden="true">#</a> Telegram Notification</h2><p>We use Telegram bot to send Telegram notification. You need to set the following env.</p>',3),q=e("code",null,"TG_BOT_TOKEN",-1),K=t(": Telegram bot token to access the HTTP API. Create a bot with "),V={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},G=t("@BotFather"),F=t(" to get this token. It's required for this service."),j=e("code",null,"TG_CHAT_ID",-1),z=t(": The "),J=e("code",null,"chat_id",-1),X=t(" of the receiver. It can be an user, a channel or a group. "),Z={href:"https://t.me/userinfobot",target:"_blank",rel:"noopener noreferrer"},$=t("@userinfobot"),ee=t(" will display this "),te=e("code",null,"chat_id",-1),oe=t(" when you forward a message to it. It's required for this service."),ie=e("li",null,[e("code",null,"AUTHOR_EMAIL"),t(": The blogger\u2019s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.")],-1),ne=e("li",null,[e("code",null,"SITE_NAME"),t(": Your site name, it will be displayed in notification message.")],-1),se=e("li",null,[e("code",null,"SITE_URL"),t(": Your site url, it will be displayed in notification message.")],-1),ae=e("li",null,[e("code",null,"TG_TEMPLATE"),t(": Notification template used by Telegram. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.")],-1),le=e("h2",{id:"pushplus-notification",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#pushplus-notification","aria-hidden":"true"},"#"),t(" PushPlus Notification")],-1),de={href:"http://www.pushplus.plus/",target:"_blank",rel:"noopener noreferrer"},re=t("pushplus"),ce=t(" is a message push platform which supports many channels like wechat, wechat work, ding talk, sms or email. You need to set the following env. You can go to "),he={href:"http://www.pushplus.plus/doc/guide/api.html#%E4%B8%80%E3%80%81%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF%E6%8E%A5%E5%8F%A3",target:"_blank",rel:"noopener noreferrer"},pe=t("pushplus documentation"),ue=t(" to get more parameter format detail."),_e=n('<ul><li>PUSH_PLUS_KEY\uFF1A user token. It&#39;s required for this service.</li><li>PUSH_PLUS_TOPIC\uFF1Agroup id. Send yourself if it&#39;s empty. And It&#39;s unuseful if <code>PUSH_PLUS_CHANNEL</code> equals <code>webhook</code>.</li><li>PUSH_PLUS_TEMPLATE\uFF1ASend template</li><li>PUSH_PLUS_CHANNEL\uFF1ASend channel</li><li>PLUSH_PLUS_WEBHOOK\uFF1Awebhook is required if <code>PUSH_PLUS_CHANNEL</code> equals <code>webhook</code> or <code>cp</code>.</li><li>PUSH_PLUS_CALLBACKURL\uFF1Acallback url after send responsed.</li><li><code>AUTHOR_EMAIL</code>: The blogger\u2019s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li></ul><h2 id="discord-notification" tabindex="-1"><a class="header-anchor" href="#discord-notification" aria-hidden="true">#</a> Discord Notification</h2><p>We use Discord Webhook to send Discord notification. You need to set the following env.</p>',3),me=e("code",null,"DISCORD_WEBHOOK",-1),fe=t(": Discord Webhook url, "),be={href:"https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks",target:"_blank",rel:"noopener noreferrer"},ge=t("How to create Discord Webhook url"),Te=t("?"),we=e("li",null,[e("code",null,"DISCORD_TEMPLATE"),t(": Send template")],-1),Ee=e("li",null,[e("code",null,"AUTHOR_EMAIL"),t(": The blogger\u2019s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.")],-1),ke=e("li",null,[e("code",null,"SITE_NAME"),t(": Your site name, it will be displayed in notification message.")],-1),Se=e("li",null,[e("code",null,"SITE_URL"),t(": Your site url, it will be displayed in notification message.")],-1),ye=n(`<h2 id="notification-template" tabindex="-1"><a class="header-anchor" href="#notification-template" aria-hidden="true">#</a> Notification Template</h2><p>Waline supports configuring your customized notification templates for each platform separately to achieve stronger customization capabilities and i18n compatibility.</p><h3 id="supported-variables" tabindex="-1"><a class="header-anchor" href="#supported-variables" aria-hidden="true">#</a> Supported variables</h3><p>The template passes parameters through <code>self</code>, <code>parent</code> and <code>site</code> objects, which contain the following variables respectively:</p><ul><li><p><code>self</code>: The comment itself</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>url</td><td>Article address</td></tr><tr><td>comment</td><td>Comment cotent</td></tr><tr><td>browser</td><td>Browser name</td></tr><tr><td>os</td><td>Operate system name</td></tr><tr><td>avatar</td><td>avatar</td></tr><tr><td><em>commentLink</em>*</td><td>Links in comments</td></tr></tbody></table><p>*: commentLink is only provided in Telegram notifications and will be automatically encapsulated in Markdown format.</p></li><li><p><code>parent</code>: Comment which is replied (parent comment).</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>browser</td><td>Browser name</td></tr><tr><td>os</td><td>Operate system name</td></tr><tr><td>avatar</td><td>avatar</td></tr><tr><td>comment</td><td>Comment content</td></tr></tbody></table></li><li><p><code>site</code>: Website configuration</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>name</td><td>Site name</td></tr><tr><td>url</td><td>Site URL</td></tr><tr><td>postUrl</td><td>Comment full address</td></tr></tbody></table></li></ul><h3 id="default-template" tabindex="-1"><a class="header-anchor" href="#default-template" aria-hidden="true">#</a> Default template</h3><p>The default template is attached here for your reference:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>\u{1F4AC} {{site.name|safe}} \u6709\u65B0\u8BC4\u8BBA\u5566
{{self.nick}} \u8BC4\u8BBA\u9053:
{{self.comment}}
\u90AE\u7BB1: {{self.mail}}
\u72B6\u6001: {{self.status}}
\u4EC5\u4F9B\u8BC4\u8BBA\u9884\u89C8\uFF0C\u67E5\u770B\u5B8C\u6574\u5167\u5BB9:
{{site.postUrl}}
</code></pre></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>\u{1F4AC} <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> \u6709\u65B0\u8BC4\u8BBA\u5566</span><span class="token punctuation">_</span></span>

<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> \u56DE\u590D\u8BF4:

<span class="token code"><span class="token punctuation">\`\`\`</span>
<span class="token code-block">{{self.comment-}}</span>
<span class="token punctuation">\`\`\`</span></span>

{{-self.commentLink}}
<span class="token italic"><span class="token punctuation">_</span><span class="token content">\u90AE\u7BB1: </span><span class="token punctuation">_</span></span>\\\`{{self.mail}}\\\`
<span class="token italic"><span class="token punctuation">_</span><span class="token content">\u5BA1\u6838: </span><span class="token punctuation">_</span></span>{{self.status}}

\u4EC5\u4F9B\u8BC4\u8BBA\u9884\u89C8\uFF0C\u70B9\u51FB<span class="token url">[<span class="token content">\u67E5\u770B\u5B8C\u6574\u5167\u5BB9</span>](<span class="token url">{{site.postUrl}}</span>)</span>
</code></pre></div></li></ul><h3 id="addtional-info" tabindex="-1"><a class="header-anchor" href="#addtional-info" aria-hidden="true">#</a> Addtional Info</h3>`,9),ve=t("Vercel\u2019s environment variable size is limited to "),Ie=e("code",null,"4KB",-1),Me=t(", so if your template is long, you should config if in main entry file, see "),Ae={href:"https://github.com/walinejs/waline/issues/106",target:"_blank",rel:"noopener noreferrer"},Le=t("issue#106"),Pe=t("."),Ue=e("li",null,"The specific information of variables may change during the development process. The variable descriptions here are for reference only. Please refer to the specific code examples for specific content.",-1);function Ce(Ne,Qe){const o=r("ExternalLinkIcon");return a(),l("div",null,[h,p,d(" more "),u,_,e("ul",null,[e("li",null,[m,e("div",f,[b,e("p",null,[g,e("a",T,[w,i(o)]),E,k,S,y,v]),I])]),M]),A,e("p",null,[L,e("a",P,[U,i(o)]),C,N,Q]),Y,e("p",null,[H,e("a",x,[R,i(o)]),O,D,W]),B,e("ul",null,[e("li",null,[q,K,e("a",V,[G,i(o)]),F]),e("li",null,[j,z,J,X,e("a",Z,[$,i(o)]),ee,te,oe]),ie,ne,se,ae]),le,e("p",null,[e("a",de,[re,i(o)]),ce,e("a",he,[pe,i(o)]),ue]),_e,e("ul",null,[e("li",null,[me,fe,e("a",be,[ge,i(o)]),Te]),we,Ee,ke,Se]),ye,e("ol",null,[e("li",null,[ve,Ie,Me,e("a",Ae,[Le,i(o)]),Pe]),Ue])])}const xe=s(c,[["render",Ce],["__file","notification.html.vue"]]);export{xe as default};
