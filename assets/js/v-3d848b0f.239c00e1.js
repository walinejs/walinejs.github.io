(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4482],{6431:(e,t,n)=>{"use strict";n.r(t),n.d(t,{data:()=>i});const i={key:"v-3d848b0f",path:"/en/server/notification.html",title:"Comment Notification",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Email Notification",slug:"email-notification",children:[]},{level:2,title:"Wechat Notification",slug:"wechat-notification",children:[]},{level:2,title:"QQ Notification",slug:"qq-notification",children:[]},{level:2,title:"Telegram Notification",slug:"telegram-notification",children:[]},{level:2,title:"Notification Template",slug:"notification-template",children:[{level:3,title:"Supported variables",slug:"supported-variables",children:[]},{level:3,title:"Default template",slug:"default-template",children:[]},{level:3,title:"Addtional Info",slug:"addtional-info",children:[]}]}],filePathRelative:"en/server/notification.md",git:{updatedTime:1622031844e3,contributors:[]}}},1511:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>le});var i=n(8917);const a=(0,i.Wm)("h1",{id:"comment-notification"},[(0,i.Wm)("a",{class:"header-anchor",href:"#comment-notification"},"#"),(0,i.Uk)(" Comment Notification")],-1),o=(0,i.Wm)("p",null,"When a user posts a comment on the website or a user responds to a comment, Waline supports email or WeChat notification to the blogger and the author who responded to the comment. There are many types of blogger notifications, and only email notifications are supported for replying to comment authors.",-1),l=(0,i.Wm)("h2",{id:"email-notification"},[(0,i.Wm)("a",{class:"header-anchor",href:"#email-notification"},"#"),(0,i.Uk)(" Email Notification")],-1),s=(0,i.Wm)("p",null,"Email notification needs to configure the following in the environment variables:",-1),r=(0,i.Wm)("li",null,[(0,i.Wm)("code",null,"AUTHOR_EMAIL"),(0,i.Uk)(": The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.")],-1),c=(0,i.Wm)("code",null,"SMTP_SERVICE",-1),d=(0,i.Uk)(": SMTP Mail delivery service provider，You can find all support provider in "),m={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},p=(0,i.Uk)("here"),u=(0,i.Uk)(". If your provider is not on the list, you can also configure "),h=(0,i.Wm)("code",null,"SMTP_HOST",-1),f=(0,i.Uk)(" and "),b=(0,i.Wm)("code",null,"SMTP_PORT",-1),g=(0,i.Uk)(" to custom it."),k=(0,i.uE)("<li><code>SMTP_HOST</code>: SMTP server address, it can be found in mailbox&#39;s setting page generally. It&#39;s required if you have not configure <code>SMTP_SERVICE</code>.</li><li><code>SMTP_PORT</code>: SMTP server port, it can be found in mailbox&#39;s setting page generally. It&#39;s required if you have not configure <code>SMTP_SERVICE</code>.</li><li><code>SMTP_USER</code>: SMTP Mail delivery service account, it&#39;s always your email address.</li><li><code>SMTP_PASS</code>: SMTP Mail delivery service password, it&#39;s always your mailbox login password.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li><li><code>SENDER_NAME</code>: Optional custom notification name from user.</li><li><code>SENDER_EMAIL</code>: Optional custom notification email from user.</li><li><code>MAIL_SUBJECT</code>: Comment reply email title customization.</li><li><code>MAIL_TEMPLATE</code>: Comment reply email content customization.</li><li><code>MAIL_SUBJECT_ADMIN</code>: New comment notification email title customization.</li><li><code>MAIL_TEMPLATE_ADMIN</code>: New comment notification email content customization.</li>",12),T=(0,i.Wm)("h2",{id:"wechat-notification"},[(0,i.Wm)("a",{class:"header-anchor",href:"#wechat-notification"},"#"),(0,i.Uk)(" Wechat Notification")],-1),v=(0,i.Uk)("We use "),y={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},W=(0,i.Uk)("Server Chan"),_=(0,i.Uk)(" to wechat notification. You need to set "),E=(0,i.Wm)("code",null,"SC_KEY",-1),w=(0,i.Uk)(" in env which applied in Server Chan."),U=(0,i.uE)('<ul><li><code>SC_KEY</code>: Token applied in Server Chan, It&#39;s required for this service.</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li></ul><h2 id="qq-notification"><a class="header-anchor" href="#qq-notification">#</a> QQ Notification</h2>',2),S=(0,i.Uk)("We use "),I={href:"https://qmsg.zendee.cn",target:"_blank",rel:"noopener noreferrer"},M=(0,i.Uk)("Qmsg Chan"),C=(0,i.Uk)(" to send QQ notification. You need to set "),A=(0,i.Wm)("code",null,"QMSG_KEY",-1),Q=(0,i.Uk)(" in env which applied in Qmsg Chan."),P=(0,i.uE)('<ul><li><code>QMSG_KEY</code>: KEY applied in Qmsg Chan, It&#39;s required for this service.</li><li><code>QQ_ID</code>: The QQ ID of the receiver(s), except for QQ group. If there are more than one QQ ID, use commas to separate multiple values, e.g. <code>1244453393,2952937634</code> (should all be included in your Qmsg Chan&#39;s QQ ID list).</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li><li><code>QQ_TEMPLATE</code>: Notification template used by QQ. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.</li></ul><h2 id="telegram-notification"><a class="header-anchor" href="#telegram-notification">#</a> Telegram Notification</h2><p>We use Telegram bot to send Telegram notification. You need to set the following env first.</p>',3),N=(0,i.Wm)("code",null,"TG_BOT_TOKEN",-1),L=(0,i.Uk)(": Telegram bot token to access the HTTP API. Create a bot with "),R={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},Y=(0,i.Uk)("@BotFather"),q=(0,i.Uk)(" to get this token. It's required for this service."),O=(0,i.Wm)("code",null,"TG_CHAT_ID",-1),D=(0,i.Uk)(": The "),z=(0,i.Wm)("code",null,"chat_id",-1),H=(0,i.Uk)(" of the receiver. It can be an user, a channel or a group. "),x={href:"https://t.me/userinfobot",target:"_blank",rel:"noopener noreferrer"},K=(0,i.Uk)("@userinfobot"),B=(0,i.Uk)(" will display this "),G=(0,i.Wm)("code",null,"chat_id",-1),V=(0,i.Uk)(" when you forward a message to it. It's required for this service."),j=(0,i.Wm)("li",null,[(0,i.Wm)("code",null,"AUTHOR_EMAIL"),(0,i.Uk)(": The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.")],-1),F=(0,i.Wm)("li",null,[(0,i.Wm)("code",null,"SITE_NAME"),(0,i.Uk)(": Your site name, it will be displayed in notification message.")],-1),J=(0,i.Wm)("li",null,[(0,i.Wm)("code",null,"SITE_URL"),(0,i.Uk)(": Your site url, it will be displayed in notification message.")],-1),X=(0,i.Wm)("li",null,[(0,i.Wm)("code",null,"TG_TEMPLATE"),(0,i.Uk)(": Notification template used by Telegram. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.")],-1),Z=(0,i.uE)('<h2 id="notification-template"><a class="header-anchor" href="#notification-template">#</a> Notification Template</h2><p>Waline supports configuring your customized notification templates for each platform separately to achieve stronger customization capabilities and i18n compatibility.</p><h3 id="supported-variables"><a class="header-anchor" href="#supported-variables">#</a> Supported variables</h3><p>The template passes parameters through <code>self</code>, <code>parent</code> and <code>site</code> objects, which contain the following variables respectively:</p><ul><li><p>self: The comment itself</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>url</td><td>Article address</td></tr><tr><td>comment</td><td>Comment cotent</td></tr><tr><td><em>commentLink</em>*</td><td>Links in comments</td></tr></tbody></table><p>*: commentLink is only provided in Telegram notifications and will be automatically encapsulated in Markdown format.</p></li><li><p>parent: Comment which is replied (parent comment).</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>type</td><td>Commenter&#39;s type</td></tr><tr><td>comment</td><td>Comment content</td></tr></tbody></table></li><li><p>site: Website configuration</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>name</td><td>Site name</td></tr><tr><td>url</td><td>Site URL</td></tr><tr><td>postUrl</td><td>Comment full address</td></tr></tbody></table></li></ul><h3 id="default-template"><a class="header-anchor" href="#default-template">#</a> Default template</h3><p>The default template is attached here for your reference:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain ext-plain line-numbers-mode"><pre class="language-plain"><code>💬 {{site.name|safe}} 有新评论啦\n{{self.nick}} 评论道:\n{{self.comment}}\n邮箱: {{self.mail}}\n状态: {{self.status}}\n仅供评论预览，查看完整內容:\n{{site.postUrl}}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>💬 <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> 有新评论啦</span><span class="token punctuation">_</span></span>\n\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> 回复说:\n\n<span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">{{self.comment-}}</span>\n<span class="token punctuation">```</span></span>\n\n{{-self.commentLink}}\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">邮箱: </span><span class="token punctuation">_</span></span>\\<span class="token code keyword">`{{self.mail}}\\`</span>\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">审核: </span><span class="token punctuation">_</span></span>{{self.status}}\n\n仅供评论预览，点击<span class="token url">[<span class="token content">查看完整內容</span>](<span class="token url">{{site.postUrl}}</span>)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div></li></ul><h3 id="addtional-info"><a class="header-anchor" href="#addtional-info">#</a> Addtional Info</h3>',9),$=(0,i.Uk)("Vercel’s environment variable size is limited to "),ee=(0,i.Wm)("code",null,"4KB",-1),te=(0,i.Uk)(", so if your template storage needs are large, you can directly use the code configuration, see "),ne={href:"https://github.com/lizheming/waline/issues/106",target:"_blank",rel:"noopener noreferrer"},ie=(0,i.Uk)("issue#106"),ae=(0,i.Uk)("."),oe=(0,i.Wm)("li",null,"The specific information of variables may change during the development process. The variable descriptions here are for reference only. Please refer to the specific code examples for specific content.",-1),le={render:function(e,t){const n=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.j4)(i.HY,null,[a,o,l,s,(0,i.Wm)("ul",null,[r,(0,i.Wm)("li",null,[c,d,(0,i.Wm)("a",m,[p,(0,i.Wm)(n)]),u,h,f,b,g]),k]),T,(0,i.Wm)("p",null,[v,(0,i.Wm)("a",y,[W,(0,i.Wm)(n)]),_,E,w]),U,(0,i.Wm)("p",null,[S,(0,i.Wm)("a",I,[M,(0,i.Wm)(n)]),C,A,Q]),P,(0,i.Wm)("ul",null,[(0,i.Wm)("li",null,[N,L,(0,i.Wm)("a",R,[Y,(0,i.Wm)(n)]),q]),(0,i.Wm)("li",null,[O,D,z,H,(0,i.Wm)("a",x,[K,(0,i.Wm)(n)]),B,G,V]),j,F,J,X]),Z,(0,i.Wm)("ol",null,[(0,i.Wm)("li",null,[$,ee,te,(0,i.Wm)("a",ne,[ie,(0,i.Wm)(n)]),ae]),oe])],64)}}}}]);