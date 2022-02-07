"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9944],{7297:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-40608902",path:"/en/guide/server/notification.html",title:"Comment Notification",lang:"en-US",frontmatter:{},excerpt:'<h1 id="comment-notification" tabindex="-1"><a class="header-anchor" href="#comment-notification" aria-hidden="true">#</a> Comment Notification</h1>\n<p>When a user posts a comment on the website or a user responds to a comment, Waline supports email or WeChat notification to the blogger and the author who responded to the comment. There are many types of blogger notifications, and only email notifications are supported for replying to comment authors.</p>\n',headers:[{level:2,title:"Email Notification",slug:"email-notification",children:[]},{level:2,title:"Wechat Notification",slug:"wechat-notification",children:[]},{level:2,title:"QQ Notification",slug:"qq-notification",children:[]},{level:2,title:"Telegram Notification",slug:"telegram-notification",children:[]},{level:2,title:"Notification Template",slug:"notification-template",children:[{level:3,title:"Supported variables",slug:"supported-variables",children:[]},{level:3,title:"Default template",slug:"default-template",children:[]},{level:3,title:"Addtional Info",slug:"addtional-info",children:[]}]}],filePathRelative:"en/guide/server/notification.md",git:{updatedTime:1644247333e3,contributors:[{name:"AHdark",email:"ahdark@outlook.com",commits:1}]}}},1026:(e,t,i)=>{i.r(t),i.d(t,{default:()=>de});var n=i(8917);const o=(0,n._)("h1",{id:"comment-notification",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#comment-notification","aria-hidden":"true"},"#"),(0,n.Uk)(" Comment Notification")],-1),a=(0,n._)("p",null,"When a user posts a comment on the website or a user responds to a comment, Waline supports email or WeChat notification to the blogger and the author who responded to the comment. There are many types of blogger notifications, and only email notifications are supported for replying to comment authors.",-1),l=(0,n._)("h2",{id:"email-notification",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#email-notification","aria-hidden":"true"},"#"),(0,n.Uk)(" Email Notification")],-1),s=(0,n._)("p",null,"Email notification needs the following environment variables to be configured:",-1),r=(0,n._)("p",null,[(0,n._)("code",null,"SMTP_SERVICE"),(0,n.Uk)(": SMTP Mail delivery service provider")],-1),d={class:"custom-container tip"},c=(0,n._)("p",{class:"custom-container-title"},"Tip",-1),p=(0,n.Uk)("You can find all support provider in "),m={href:"https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json",target:"_blank",rel:"noopener noreferrer"},u=(0,n.Uk)("here"),h=(0,n.Uk)(". If your provider is not listed, you must config "),f=(0,n._)("code",null,"SMTP_HOST",-1),g=(0,n.Uk)(" and "),b=(0,n._)("code",null,"SMTP_PORT",-1),_=(0,n.Uk)("."),k=(0,n._)("ul",null,[(0,n._)("li",null,[(0,n._)("code",null,"SMTP_HOST"),(0,n.Uk)(": SMTP server address, it can be found in mailbox's setting page generally.")]),(0,n._)("li",null,[(0,n._)("code",null,"SMTP_PORT"),(0,n.Uk)(": SMTP server port, it can be found in mailbox's setting page generally.")])],-1),T=(0,n.uE)("<li><p><code>SMTP_USER</code>: SMTP Mail delivery service account, it&#39;s your email address.</p></li><li><p><code>SMTP_PASS</code>: SMTP Mail delivery service password, it&#39;s your email password.</p></li><li><p><code>SITE_NAME</code>: Your site name, will be displayed in notification message.</p></li><li><p><code>SITE_URL</code>: Your site url, will be displayed in notification message.</p></li>",4),v=(0,n.uE)('<p>The following environment variables are optional:</p><ul><li><code>SENDER_NAME</code>: Custom sender&#39;s name in notification</li><li><code>SENDER_EMAIL</code>: Custom sender&#39;s name in notification</li><li><code>MAIL_SUBJECT</code>: Custom comment reply email title</li><li><code>MAIL_TEMPLATE</code>: Custom reply email content</li><li><code>MAIL_SUBJECT_ADMIN</code>: Custom new comment notification email title</li><li><code>MAIL_TEMPLATE_ADMIN</code>: Custom new comment notification email content</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email, used to judge whether posted comment is posted by the blogger. If it is posted by the blogger, there will be no reminder notification.</li></ul><h2 id="wechat-notification" tabindex="-1"><a class="header-anchor" href="#wechat-notification" aria-hidden="true">#</a> Wechat Notification</h2>',3),y=(0,n.Uk)("We use "),w={href:"http://sc.ftqq.com/3.version",target:"_blank",rel:"noopener noreferrer"},E=(0,n.Uk)("Mr. Server"),U=(0,n.Uk)(" to wechat notification. You need to set "),M=(0,n._)("code",null,"SC_KEY",-1),S=(0,n.Uk)(" in env which applied in Mr. Server."),I=(0,n.uE)('<ul><li><code>SC_KEY</code>: Token applied in Mr. Server, It&#39;s required for this service.</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li></ul><h2 id="qq-notification" tabindex="-1"><a class="header-anchor" href="#qq-notification" aria-hidden="true">#</a> QQ Notification</h2>',2),A=(0,n.Uk)("We use "),C={href:"https://qmsg.zendee.cn",target:"_blank",rel:"noopener noreferrer"},Q=(0,n.Uk)("Mr. Qmsg"),L=(0,n.Uk)(" to send QQ notification. You need to set "),N=(0,n._)("code",null,"QMSG_KEY",-1),P=(0,n.Uk)(" in env which applied in Mr. Qmsg."),W=(0,n.uE)('<ul><li><code>QMSG_KEY</code>: KEY applied in Mr. Qmsg, It&#39;s required for this service.</li><li><code>QQ_ID</code>: The QQ ID of the receiver(s), except for QQ group. If there are more than one QQ ID, use commas to separate multiple values, e.g. <code>1244453393,2952937634</code> (should all be included in your Mr. Qmsg&#39;s QQ ID list).</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li><li><code>QQ_TEMPLATE</code>: Notification template used by QQ. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.</li></ul><h2 id="telegram-notification" tabindex="-1"><a class="header-anchor" href="#telegram-notification" aria-hidden="true">#</a> Telegram Notification</h2><p>We use Telegram bot to send Telegram notification. You need to set the following env.</p>',3),Y=(0,n._)("code",null,"TG_BOT_TOKEN",-1),x=(0,n.Uk)(": Telegram bot token to access the HTTP API. Create a bot with "),R={href:"https://t.me/BotFather",target:"_blank",rel:"noopener noreferrer"},q=(0,n.Uk)("@BotFather"),D=(0,n.Uk)(" to get this token. It's required for this service."),O=(0,n._)("code",null,"TG_CHAT_ID",-1),H=(0,n.Uk)(": The "),K=(0,n._)("code",null,"chat_id",-1),B=(0,n.Uk)(" of the receiver. It can be an user, a channel or a group. "),G={href:"https://t.me/userinfobot",target:"_blank",rel:"noopener noreferrer"},j=(0,n.Uk)("@userinfobot"),z=(0,n.Uk)(" will display this "),V=(0,n._)("code",null,"chat_id",-1),F=(0,n.Uk)(" when you forward a message to it. It's required for this service."),J=(0,n._)("li",null,[(0,n._)("code",null,"AUTHOR_EMAIL"),(0,n.Uk)(": The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.")],-1),Z=(0,n._)("li",null,[(0,n._)("code",null,"SITE_NAME"),(0,n.Uk)(": Your site name, it will be displayed in notification message.")],-1),X=(0,n._)("li",null,[(0,n._)("code",null,"SITE_URL"),(0,n.Uk)(": Your site url, it will be displayed in notification message.")],-1),$=(0,n._)("li",null,[(0,n._)("code",null,"TG_TEMPLATE"),(0,n.Uk)(": Notification template used by Telegram. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.")],-1),ee=(0,n.uE)('<h2 id="notification-template" tabindex="-1"><a class="header-anchor" href="#notification-template" aria-hidden="true">#</a> Notification Template</h2><p>Waline supports configuring your customized notification templates for each platform separately to achieve stronger customization capabilities and i18n compatibility.</p><h3 id="supported-variables" tabindex="-1"><a class="header-anchor" href="#supported-variables" aria-hidden="true">#</a> Supported variables</h3><p>The template passes parameters through <code>self</code>, <code>parent</code> and <code>site</code> objects, which contain the following variables respectively:</p><ul><li><p><code>self</code>: The comment itself</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>url</td><td>Article address</td></tr><tr><td>comment</td><td>Comment cotent</td></tr><tr><td><em>commentLink</em>*</td><td>Links in comments</td></tr></tbody></table><p>*: commentLink is only provided in Telegram notifications and will be automatically encapsulated in Markdown format.</p></li><li><p><code>parent</code>: Comment which is replied (parent comment).</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>type</td><td>Commenter&#39;s type</td></tr><tr><td>comment</td><td>Comment content</td></tr></tbody></table></li><li><p><code>site</code>: Website configuration</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>name</td><td>Site name</td></tr><tr><td>url</td><td>Site URL</td></tr><tr><td>postUrl</td><td>Comment full address</td></tr></tbody></table></li></ul><h3 id="default-template" tabindex="-1"><a class="header-anchor" href="#default-template" aria-hidden="true">#</a> Default template</h3><p>The default template is attached here for your reference:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>💬 {{site.name|safe}} 有新评论啦\n{{self.nick}} 评论道:\n{{self.comment}}\n邮箱: {{self.mail}}\n状态: {{self.status}}\n仅供评论预览，查看完整內容:\n{{site.postUrl}}\n</code></pre></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>💬 <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> 有新评论啦</span><span class="token punctuation">_</span></span>\n\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> 回复说:\n\n<span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">{{self.comment-}}</span>\n<span class="token punctuation">```</span></span>\n\n{{-self.commentLink}}\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">邮箱: </span><span class="token punctuation">_</span></span>\\`{{self.mail}}\\`\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">审核: </span><span class="token punctuation">_</span></span>{{self.status}}\n\n仅供评论预览，点击<span class="token url">[<span class="token content">查看完整內容</span>](<span class="token url">{{site.postUrl}}</span>)</span>\n</code></pre></div></li></ul><h3 id="addtional-info" tabindex="-1"><a class="header-anchor" href="#addtional-info" aria-hidden="true">#</a> Addtional Info</h3>',9),te=(0,n.Uk)("Vercel’s environment variable size is limited to "),ie=(0,n._)("code",null,"4KB",-1),ne=(0,n.Uk)(", so if your template is long, you should config if in main entry file, see "),oe={href:"https://github.com/walinejs/waline/issues/106",target:"_blank",rel:"noopener noreferrer"},ae=(0,n.Uk)("issue#106"),le=(0,n.Uk)("."),se=(0,n._)("li",null,"The specific information of variables may change during the development process. The variable descriptions here are for reference only. Please refer to the specific code examples for specific content.",-1),re={},de=(0,i(6959).Z)(re,[["render",function(e,t){const i=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,a,l,s,(0,n._)("ul",null,[(0,n._)("li",null,[r,(0,n._)("div",d,[c,(0,n._)("p",null,[p,(0,n._)("a",m,[u,(0,n.Wm)(i)]),h,f,g,b,_]),k])]),T]),v,(0,n._)("p",null,[y,(0,n._)("a",w,[E,(0,n.Wm)(i)]),U,M,S]),I,(0,n._)("p",null,[A,(0,n._)("a",C,[Q,(0,n.Wm)(i)]),L,N,P]),W,(0,n._)("ul",null,[(0,n._)("li",null,[Y,x,(0,n._)("a",R,[q,(0,n.Wm)(i)]),D]),(0,n._)("li",null,[O,H,K,B,(0,n._)("a",G,[j,(0,n.Wm)(i)]),z,V,F]),J,Z,X,$]),ee,(0,n._)("ol",null,[(0,n._)("li",null,[te,ie,ne,(0,n._)("a",oe,[ae,(0,n.Wm)(i)]),le]),se])],64)}]])}}]);