"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9944],{7297:(e,t,i)=>{i.r(t),i.d(t,{data:()=>o});const o={key:"v-40608902",path:"/en/guide/server/notification.html",title:"Comment Notification",lang:"en-US",frontmatter:{title:"Comment Notification",icon:"notice",head:[["meta",{property:"og:url",content:"https://waline.js.org/en/guide/server/notification.html"}],["meta",{property:"og:title",content:"Comment Notification"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["script",{type:"application/ld+json"},'{"@context":"https://schema.org","@type":"NewsArticle","headline":"Comment Notification","image":[""],"datePublished":"","dateModified":"","author":[]}']]},excerpt:"<p>When a user posts a comment on the website or a user responds to a comment, Waline supports email or WeChat notification to the blogger and the author who responded to the comment. There are many types of blogger notifications, and only email notifications are supported for replying to comment authors.</p>\n",headers:[{level:2,title:"Email Notification",slug:"email-notification",children:[]},{level:2,title:"Wechat Notification",slug:"wechat-notification",children:[]},{level:2,title:"QQ Notification",slug:"qq-notification",children:[]},{level:2,title:"Telegram Notification",slug:"telegram-notification",children:[]},{level:2,title:"Notification Template",slug:"notification-template",children:[{level:3,title:"Supported variables",slug:"supported-variables",children:[]},{level:3,title:"Default template",slug:"default-template",children:[]},{level:3,title:"Addtional Info",slug:"addtional-info",children:[]}]}],git:{createdTime:1644683949e3,updatedTime:1644683949e3,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:3.13,words:938},filePathRelative:"en/guide/server/notification.md"}},1078:(e,t,i)=>{i.r(t),i.d(t,{default:()=>a});const o=(0,i(8917).uE)('<p>When a user posts a comment on the website or a user responds to a comment, Waline supports email or WeChat notification to the blogger and the author who responded to the comment. There are many types of blogger notifications, and only email notifications are supported for replying to comment authors.</p><h2 id="email-notification" tabindex="-1"><a class="header-anchor" href="#email-notification" aria-hidden="true">#</a> Email Notification</h2><p>Email notification needs the following environment variables to be configured:</p><ul><li><p><code>SMTP_SERVICE</code>: SMTP Mail delivery service provider</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>You can find all support provider in <a href="https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json" target="_blank" rel="noopener noreferrer">here</a>. If your provider is not listed, you must config <code>SMTP_HOST</code> and <code>SMTP_PORT</code>.</p><ul><li><code>SMTP_HOST</code>: SMTP server address, it can be found in mailbox&#39;s setting page generally.</li><li><code>SMTP_PORT</code>: SMTP server port, it can be found in mailbox&#39;s setting page generally.</li></ul></div></li><li><p><code>SMTP_USER</code>: SMTP Mail delivery service account, it&#39;s your email address.</p></li><li><p><code>SMTP_PASS</code>: SMTP Mail delivery service password, it&#39;s your email password.</p></li><li><p><code>SITE_NAME</code>: Your site name, will be displayed in notification message.</p></li><li><p><code>SITE_URL</code>: Your site url, will be displayed in notification message.</p></li></ul><p>The following environment variables are optional:</p><ul><li><code>SENDER_NAME</code>: Custom sender&#39;s name in notification</li><li><code>SENDER_EMAIL</code>: Custom sender&#39;s name in notification</li><li><code>MAIL_SUBJECT</code>: Custom comment reply email title</li><li><code>MAIL_TEMPLATE</code>: Custom reply email content</li><li><code>MAIL_SUBJECT_ADMIN</code>: Custom new comment notification email title</li><li><code>MAIL_TEMPLATE_ADMIN</code>: Custom new comment notification email content</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email, used to judge whether posted comment is posted by the blogger. If it is posted by the blogger, there will be no reminder notification.</li></ul><h2 id="wechat-notification" tabindex="-1"><a class="header-anchor" href="#wechat-notification" aria-hidden="true">#</a> Wechat Notification</h2><p>We use <a href="http://sc.ftqq.com/3.version" target="_blank" rel="noopener noreferrer">Mr. Server</a> to wechat notification. You need to set <code>SC_KEY</code> in env which applied in Mr. Server.</p><ul><li><code>SC_KEY</code>: Token applied in Mr. Server, It&#39;s required for this service.</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li></ul><h2 id="qq-notification" tabindex="-1"><a class="header-anchor" href="#qq-notification" aria-hidden="true">#</a> QQ Notification</h2><p>We use <a href="https://qmsg.zendee.cn" target="_blank" rel="noopener noreferrer">Mr. Qmsg</a> to send QQ notification. You need to set <code>QMSG_KEY</code> in env which applied in Mr. Qmsg.</p><ul><li><code>QMSG_KEY</code>: KEY applied in Mr. Qmsg, It&#39;s required for this service.</li><li><code>QQ_ID</code>: The QQ ID of the receiver(s), except for QQ group. If there are more than one QQ ID, use commas to separate multiple values, e.g. <code>1244453393,2952937634</code> (should all be included in your Mr. Qmsg&#39;s QQ ID list).</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li><li><code>QQ_TEMPLATE</code>: Notification template used by QQ. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.</li></ul><h2 id="telegram-notification" tabindex="-1"><a class="header-anchor" href="#telegram-notification" aria-hidden="true">#</a> Telegram Notification</h2><p>We use Telegram bot to send Telegram notification. You need to set the following env.</p><ul><li><code>TG_BOT_TOKEN</code>: Telegram bot token to access the HTTP API. Create a bot with <a href="https://t.me/BotFather" target="_blank" rel="noopener noreferrer">@BotFather</a> to get this token. It&#39;s required for this service.</li><li><code>TG_CHAT_ID</code>: The <code>chat_id</code> of the receiver. It can be an user, a channel or a group. <a href="https://t.me/userinfobot" target="_blank" rel="noopener noreferrer">@userinfobot</a> will display this <code>chat_id</code> when you forward a message to it. It&#39;s required for this service.</li><li><code>AUTHOR_EMAIL</code>: The blogger’s email is used to distinguish whether the posted comment is posted by the blogger himself. If it is posted by the blogger, there will be no reminder notification.</li><li><code>SITE_NAME</code>: Your site name, it will be displayed in notification message.</li><li><code>SITE_URL</code>: Your site url, it will be displayed in notification message.</li><li><code>TG_TEMPLATE</code>: Notification template used by Telegram. Variables and specific formats can be found in the notification template below. If not configured, the default template is used.</li></ul><h2 id="notification-template" tabindex="-1"><a class="header-anchor" href="#notification-template" aria-hidden="true">#</a> Notification Template</h2><p>Waline supports configuring your customized notification templates for each platform separately to achieve stronger customization capabilities and i18n compatibility.</p><h3 id="supported-variables" tabindex="-1"><a class="header-anchor" href="#supported-variables" aria-hidden="true">#</a> Supported variables</h3><p>The template passes parameters through <code>self</code>, <code>parent</code> and <code>site</code> objects, which contain the following variables respectively:</p><ul><li><p><code>self</code>: The comment itself</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>url</td><td>Article address</td></tr><tr><td>comment</td><td>Comment cotent</td></tr><tr><td><em>commentLink</em>*</td><td>Links in comments</td></tr></tbody></table><p>*: commentLink is only provided in Telegram notifications and will be automatically encapsulated in Markdown format.</p></li><li><p><code>parent</code>: Comment which is replied (parent comment).</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>nick</td><td>Commenter&#39;s nickname</td></tr><tr><td>mail</td><td>Commenter&#39;s email</td></tr><tr><td>link</td><td>Commenter&#39;s website</td></tr><tr><td>type</td><td>Commenter&#39;s type</td></tr><tr><td>comment</td><td>Comment content</td></tr></tbody></table></li><li><p><code>site</code>: Website configuration</p><table><thead><tr><th>variable</th><th>description</th></tr></thead><tbody><tr><td>name</td><td>Site name</td></tr><tr><td>url</td><td>Site URL</td></tr><tr><td>postUrl</td><td>Comment full address</td></tr></tbody></table></li></ul><h3 id="default-template" tabindex="-1"><a class="header-anchor" href="#default-template" aria-hidden="true">#</a> Default template</h3><p>The default template is attached here for your reference:</p><ul><li><p>QQ_TEMPLATE:</p><div class="language-plain ext-plain"><pre class="language-plain"><code>💬 {{site.name|safe}} 有新评论啦\n{{self.nick}} 评论道:\n{{self.comment}}\n邮箱: {{self.mail}}\n状态: {{self.status}}\n仅供评论预览，查看完整內容:\n{{site.postUrl}}\n</code></pre></div></li><li><p>TG_TEMPLATE:</p><div class="language-markdown ext-md"><pre class="language-markdown"><code>💬 <span class="token italic"><span class="token punctuation">_</span><span class="token content"><span class="token url">[<span class="token content">{{site.name}}</span>](<span class="token url">{{site.url}}</span>)</span> 有新评论啦</span><span class="token punctuation">_</span></span>\n\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">{{self.nick}}</span><span class="token punctuation">_</span></span> 回复说:\n\n<span class="token code"><span class="token punctuation">```</span>\n<span class="token code-block">{{self.comment-}}</span>\n<span class="token punctuation">```</span></span>\n\n{{-self.commentLink}}\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">邮箱: </span><span class="token punctuation">_</span></span>\\`{{self.mail}}\\`\n<span class="token italic"><span class="token punctuation">_</span><span class="token content">审核: </span><span class="token punctuation">_</span></span>{{self.status}}\n\n仅供评论预览，点击<span class="token url">[<span class="token content">查看完整內容</span>](<span class="token url">{{site.postUrl}}</span>)</span>\n</code></pre></div></li></ul><h3 id="addtional-info" tabindex="-1"><a class="header-anchor" href="#addtional-info" aria-hidden="true">#</a> Addtional Info</h3><ol><li>Vercel’s environment variable size is limited to <code>4KB</code>, so if your template is long, you should config if in main entry file, see <a href="https://github.com/walinejs/waline/issues/106" target="_blank" rel="noopener noreferrer">issue#106</a>.</li><li>The specific information of variables may change during the development process. The variable descriptions here are for reference only. Please refer to the specific code examples for specific content.</li></ol>',25),n={},a=(0,i(6959).Z)(n,[["render",function(e,t){return o}]])}}]);