(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[194],{5718:(e,l,i)=>{"use strict";i.r(l),i.d(l,{data:()=>o});const o={key:"v-6b4d4a3d",path:"/en/reference/client.html",title:"Client Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"serverURL",slug:"serverurl",children:[]},{level:2,title:"path",slug:"path",children:[]},{level:2,title:"lang",slug:"lang",children:[]},{level:2,title:"visitor",slug:"visitor",children:[]},{level:2,title:"emoji",slug:"emoji",children:[]},{level:2,title:"dark",slug:"dark",children:[]},{level:2,title:"meta",slug:"meta",children:[]},{level:2,title:"requiredMeta",slug:"requiredmeta",children:[]},{level:2,title:"login",slug:"login",children:[]},{level:2,title:"avatar",slug:"avatar",children:[]},{level:2,title:"wordLimit",slug:"wordlimit",children:[]},{level:2,title:"pageSize",slug:"pagesize",children:[]},{level:2,title:"avatarCDN",slug:"avatarcdn",children:[]},{level:2,title:"avatarForce",slug:"avatarforce",children:[]},{level:2,title:"uploadImage",slug:"uploadimage",children:[]},{level:2,title:"highlight",slug:"highlight",children:[{level:3,title:"copyright",slug:"copyright",children:[]}]},{level:2,title:"Deprecated API",slug:"deprecated-api",children:[{level:3,title:"langMode",slug:"langmode",children:[]},{level:3,title:"placeholder",slug:"placeholder",children:[]},{level:3,title:"emojiCDN",slug:"emojicdn",children:[]},{level:3,title:"emojiMaps",slug:"emojimaps",children:[]},{level:3,title:"requiredFields",slug:"requiredfields",children:[]},{level:3,title:"anonymous",slug:"anonymous",children:[]},{level:3,title:"copyRight",slug:"copyright-1",children:[]}]}],filePathRelative:"en/reference/client.md",git:{updatedTime:1623646391e3,contributors:[]}}},759:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>I});var o=i(8917);const a=(0,o.uE)('<h1 id="client-configuration"><a class="header-anchor" href="#client-configuration">#</a> Client Configuration</h1><h2 id="el"><a class="header-anchor" href="#el">#</a> el</h2><ul><li>Type: <code>string | HTMLElement</code></li><li>Default: <code>&#39;#waline&#39;</code></li></ul><p>The DOM element to be mounted on initialization. It must be a valid <strong>CSS selector string</strong> or HTMLElement Object.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If you only want to use the pageview statistics feature, DO NOT set it.</p></div><h2 id="serverurl"><a class="header-anchor" href="#serverurl">#</a> serverURL</h2><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Waline server address url</p><h2 id="path"><a class="header-anchor" href="#path">#</a> path</h2><ul><li>Type: <code>string</code></li><li>Default: <code>window.location.pathname</code></li><li>Required: No</li></ul><p>Article path id. Used to distinguish different <em>article pages</em> to ensure loading the correct comment list under the <em>article page</em>.</p><p>Optional value:</p><ul><li><code>window.location.pathname</code> (default, recommended)</li><li><code>window.location.href</code></li><li>customize</li></ul><blockquote><p>I. Please ensure the uniqueness of each <em>article page</em> path, otherwise the same comment list may be loaded under different <em>article pages</em>.</p><p>II. If the value is <code>window.location.href</code>, it may appear that adding <em>different parameters</em> to enter the page, and it will be judged as a new page.</p></blockquote><h2 id="lang"><a class="header-anchor" href="#lang">#</a> lang</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;zh-CN&#39;</code></li><li>Required: No</li></ul><p>Display language.</p><p>Optional value:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',19),t=(0,o.Uk)("If you need a custom language, please refer to "),d=(0,o.Uk)("i18n"),c=(0,o.Uk)("."),r=(0,o.uE)('<h2 id="visitor"><a class="header-anchor" href="#visitor">#</a> visitor</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Required: No</li></ul><p>Article reading statistics.</p><h2 id="emoji"><a class="header-anchor" href="#emoji">#</a> emoji</h2><ul><li>Type: <code>(string | EmojiInfo)[]</code></li><li>Default: <code>[&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo&#39;]</code></li></ul>',5),n=(0,o.Uk)("Emoji settings, for details see "),s=(0,o.Uk)("Custom Emoji"),u=(0,o.uE)('<h2 id="dark"><a class="header-anchor" href="#dark">#</a> dark</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Darkmode support</p><ul><li>Set it to <code>&#39;auto&#39;</code> will display darkmode due to device settings.</li><li>Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.</li></ul><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>Docusaurus</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>vuepress-theme-hope</strong>: It will enable darkmode by setting <code>theme-dark</code> class on the <code>&lt;body&gt;</code> tag itself. So you need to set <code>&#39;body.theme-dark&#39;</code> as <code>dark</code> option.</p></li></ul></div>',5),h=(0,o.Uk)("For details of custom style and darkmode, please see "),p=(0,o.Uk)("Custom Style"),m=(0,o.Uk)("."),g=(0,o.uE)('<h2 id="meta"><a class="header-anchor" href="#meta">#</a> meta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[&#39;nick&#39;,&#39;mail&#39;,&#39;link&#39;]</code></li><li>Required: No</li></ul><p>Reviewer attributes. Optional values: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta"><a class="header-anchor" href="#requiredmeta">#</a> requiredMeta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[]</code></li><li>Required: No</li></ul><p>Set required fields, default anonymous, optional values:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;,&#39;mail&#39;]</code></li></ul><h2 id="login"><a class="header-anchor" href="#login">#</a> login</h2><ul><li>Type: <code>string</code></li><li>Default value: <code>&#39;enable&#39;</code></li><li>Required: No</li></ul><p>Login mode status, optional values:</p><ul><li><code>&#39;enable&#39;</code>: enable login (default)</li><li><code>&#39;disable&#39;</code>: Login is disabled, users should fill in infomation to comment</li><li><code>&#39;force&#39;</code>: Forced login, users must login to comment</li></ul><h2 id="avatar"><a class="header-anchor" href="#avatar">#</a> avatar</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;mp&#39;</code></li><li>Required: No</li></ul>',13),f={href:"http://gravatar.com/",target:"_blank",rel:"noopener noreferrer"},v=(0,o.Uk)("Gravatar"),y=(0,o.Uk)(" type."),k=(0,o.uE)("<p>Optional value:</p><ul><li><code>&#39;&#39;</code> (Empty string)</li><li><code>&#39;mp&#39;</code></li><li><code>&#39;identicon&#39;</code></li><li><code>&#39;monsterid&#39;</code></li><li><code>&#39;wavatar&#39;</code></li><li><code>&#39;retro&#39;</code></li><li><code>&#39;robohash&#39;</code></li><li><code>&#39;hide&#39;</code></li></ul>",2),b=(0,o.Uk)("See the "),w=(0,o.Uk)("Avatar setting"),q=(0,o.Uk)(" for more details."),j=(0,o.uE)('<h2 id="wordlimit"><a class="header-anchor" href="#wordlimit">#</a> wordLimit</h2><ul><li>Type: <code>number | [number, number]</code></li><li>Default: <code>0</code></li><li>Required: <code>false</code></li></ul><p>Comment word s limit. When a single number is filled in, it &#39;s the maximum number of comment words. No limit when set to <code>0</code>.</p><h2 id="pagesize"><a class="header-anchor" href="#pagesize">#</a> pageSize</h2><ul><li>Type: <code>number</code></li><li>Default: <code>10</code></li><li>Required: No</li></ul><p>number of comments per page.</p><h2 id="avatarcdn"><a class="header-anchor" href="#avatarcdn">#</a> avatarCDN</h2><ul><li>Type: <code>string</code></li><li>Default: <code>https://sdn.geekzu.org/avatar/</code></li><li>Required: No</li></ul><p>Gravatar CDN baseURL.</p><h2 id="avatarforce"><a class="header-anchor" href="#avatarforce">#</a> avatarForce</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Required: No</li></ul><p>Whether <strong>force</strong> pulling the latest avatar each time.</p><h2 id="uploadimage"><a class="header-anchor" href="#uploadimage">#</a> uploadImage</h2><ul><li>Type: <code>Function</code></li><li>Required: No</li></ul><p>Custom image upload callback to manage picture by yourself. We will pass a picture file object when execute it.</p><h2 id="highlight"><a class="header-anchor" href="#highlight">#</a> highlight</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Required: No</li></ul><p><strong>Code highlighting</strong>, it’s enabled by default, please close it selectively.</p><h3 id="copyright"><a class="header-anchor" href="#copyright">#</a> copyright</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Required: No</li></ul><p>Whether show copyright and version in footer.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>We hope you can keep it on to support Waline.</p></div><h2 id="deprecated-api"><a class="header-anchor" href="#deprecated-api">#</a> Deprecated API</h2><p>The following APIs are still valid, but they will be removed in V2.</p><h3 id="langmode"><a class="header-anchor" href="#langmode">#</a> langMode</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>locale</code> instead.</p></div><ul><li>Type: <code>Locale</code></li><li>Required: No</li></ul><p>Custom I18N.</p><h3 id="placeholder"><a class="header-anchor" href="#placeholder">#</a> placeholder</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>locale.placeholder</code> instead.</p></div><ul><li>Type: <code>string</code></li><li>Default: <code>Just go go...</code></li><li>Required: No</li></ul><p>Comment box placeholder</p><h3 id="emojicdn"><a class="header-anchor" href="#emojicdn">#</a> emojiCDN</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>emoji</code> instead.</p></div><ul><li>Type: <code>string</code></li><li>Default: <code>https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/</code></li><li>Required: No</li></ul>',35),D=(0,o.Uk)("Set "),T=(0,o.Wm)("strong",null,"Emoji Pack CDN",-1),N=(0,o.Uk)(", refer to "),R=(0,o.Uk)("Custom Emoji"),C=(0,o.uE)('<h3 id="emojimaps"><a class="header-anchor" href="#emojimaps">#</a> emojiMaps</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>emoji</code> instead.</p></div><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li><li>Required: No</li></ul>',3),W=(0,o.Uk)("Set `Emoji Packet Mapping’, refer to "),U=(0,o.Uk)("Custom Emoji"),E=(0,o.uE)('<h3 id="requiredfields"><a class="header-anchor" href="#requiredfields">#</a> requiredFields</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>requiredMeta</code> instead.</p></div><h3 id="anonymous"><a class="header-anchor" href="#anonymous">#</a> anonymous</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>login</code> instead.</p></div><ul><li>Type: <code>boolean</code></li><li>Required: No</li></ul><p>Whether to allow login comments. Both supported by default, set to <code>true</code> means only support anonymous comments, <code>false</code> means only support login comments.</p><h3 id="copyright-1"><a class="header-anchor" href="#copyright-1">#</a> copyRight</h3><div class="custom-container danger"><p class="custom-container-title">Deprecated</p><p>Please use <code>copyright</code> instead.</p></div>',8),I={render:function(e,l){const i=(0,o.up)("RouterLink"),I=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[a,(0,o.Wm)("p",null,[t,(0,o.Wm)(i,{to:"/en/guide/client/i18n.html"},{default:(0,o.w5)((()=>[d])),_:1}),c]),r,(0,o.Wm)("p",null,[n,(0,o.Wm)(i,{to:"/en/guide/client/emoji.html"},{default:(0,o.w5)((()=>[s])),_:1})]),u,(0,o.Wm)("p",null,[h,(0,o.Wm)(i,{to:"/en/guide/client/style.html"},{default:(0,o.w5)((()=>[p])),_:1}),m]),g,(0,o.Wm)("p",null,[(0,o.Wm)("a",f,[v,(0,o.Wm)(I)]),y]),k,(0,o.Wm)("p",null,[b,(0,o.Wm)(i,{to:"/en/guide/client/avatar.html"},{default:(0,o.w5)((()=>[w])),_:1}),q]),j,(0,o.Wm)("p",null,[D,T,N,(0,o.Wm)(i,{to:"/en/guide/client/emoji.html"},{default:(0,o.w5)((()=>[R])),_:1})]),C,(0,o.Wm)("p",null,[W,(0,o.Wm)(i,{to:"/en/guide/client/emoji.html"},{default:(0,o.w5)((()=>[U])),_:1})]),E],64)}}}}]);