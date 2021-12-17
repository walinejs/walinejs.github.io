"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[194],{5718:(e,a,i)=>{i.r(a),i.d(a,{data:()=>l});const l={key:"v-6b4d4a3d",path:"/en/reference/client.html",title:"Client Configuration",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"serverURL",slug:"serverurl",children:[]},{level:2,title:"path",slug:"path",children:[]},{level:2,title:"lang",slug:"lang",children:[]},{level:2,title:"visitor",slug:"visitor",children:[]},{level:2,title:"emoji",slug:"emoji",children:[]},{level:2,title:"dark",slug:"dark",children:[]},{level:2,title:"meta",slug:"meta",children:[]},{level:2,title:"requiredMeta",slug:"requiredmeta",children:[]},{level:2,title:"login",slug:"login",children:[]},{level:2,title:"wordLimit",slug:"wordlimit",children:[]},{level:2,title:"pageSize",slug:"pagesize",children:[]},{level:2,title:"uploadImage",slug:"uploadimage",children:[]},{level:2,title:"highlight",slug:"highlight",children:[]},{level:2,title:"math",slug:"math",children:[{level:3,title:"copyright",slug:"copyright",children:[]}]},{level:2,title:"Deprecated API",slug:"deprecated-api",children:[{level:3,title:"langMode",slug:"langmode",children:[]},{level:3,title:"placeholder",slug:"placeholder",children:[]},{level:3,title:"emojiCDN",slug:"emojicdn",children:[]},{level:3,title:"emojiMaps",slug:"emojimaps",children:[]},{level:3,title:"requiredFields",slug:"requiredfields",children:[]},{level:3,title:"anonymous",slug:"anonymous",children:[]},{level:3,title:"avatarCDN",slug:"avatarcdn",children:[]},{level:3,title:"avatar",slug:"avatar",children:[]},{level:3,title:"avatarForce",slug:"avatarforce",children:[]}]},{level:2,title:"mathTagSupport",slug:"mathtagsupport",children:[{level:3,title:"copyRight",slug:"copyright-1",children:[]}]}],filePathRelative:"en/reference/client.md",git:{updatedTime:163970187e4,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},9913:(e,a,i)=>{i.r(a),i.d(a,{default:()=>z});var l=i(8917);const t=(0,l.uE)('<h1 id="client-configuration" tabindex="-1"><a class="header-anchor" href="#client-configuration" aria-hidden="true">#</a> Client Configuration</h1><h2 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h2><ul><li>Type: <code>string | HTMLElement</code></li><li>Default: <code>&#39;#waline&#39;</code></li></ul><p>The DOM element to be mounted on initialization. It must be a valid <strong>CSS selector string</strong> or HTMLElement Object.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>If you only want to use the pageview statistics feature, DO NOT set it.</p></div><h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Waline server address url</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>Type: <code>string</code></li><li>Default: <code>window.location.pathname</code></li><li>Required: No</li></ul><p>Article path id. Used to distinguish different <em>article pages</em> to ensure loading the correct comment list under the <em>article page</em>.</p><p>Optional value:</p><ul><li><code>window.location.pathname</code> (default, recommended)</li><li><code>window.location.href</code></li><li>customize</li></ul><blockquote><p>I. Please ensure the uniqueness of each <em>article page</em> path, otherwise the same comment list may be loaded under different <em>article pages</em>.</p><p>II. If the value is <code>window.location.href</code>, it may appear that adding <em>different parameters</em> to enter the page, and it will be judged as a new page.</p></blockquote><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;zh-CN&#39;</code></li><li>Required: No</li></ul><p>Display language.</p><p>Optional value:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',19),o=(0,l.Uk)("If you need a custom language, please refer to "),n=(0,l.Uk)("i18n"),d=(0,l.Uk)("."),r=(0,l.uE)('<h2 id="visitor" tabindex="-1"><a class="header-anchor" href="#visitor" aria-hidden="true">#</a> visitor</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Required: No</li></ul><p>Article reading statistics.</p><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> emoji</h2><ul><li>Type: <code>(string | EmojiInfo)[]</code></li><li>Default: <code>[&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo&#39;]</code></li></ul>',5),s=(0,l.Uk)("Emoji settings, for details see "),c=(0,l.Uk)("Custom Emoji"),u=(0,l.uE)('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>Type: <code>string</code></li><li>Required: No</li></ul><p>Darkmode support</p><ul><li>Set it to <code>&#39;auto&#39;</code> will display darkmode due to device settings.</li><li>Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.</li></ul><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>Docusaurus</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>vuepress-theme-hope</strong>: It will enable darkmode by setting <code>theme-dark</code> class on the <code>&lt;body&gt;</code> tag itself. So you need to set <code>&#39;body.theme-dark&#39;</code> as <code>dark</code> option.</p></li></ul></div>',5),p=(0,l.Uk)("For details of custom style and darkmode, please see "),h=(0,l.Uk)("Custom Style"),m=(0,l.Uk)("."),g=(0,l.uE)('<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[&#39;nick&#39;,&#39;mail&#39;,&#39;link&#39;]</code></li><li>Required: No</li></ul><p>Reviewer attributes. Optional values: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[]</code></li><li>Required: No</li></ul><p>Set required fields, default anonymous, optional values:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;,&#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>Type: <code>string</code></li><li>Default value: <code>&#39;enable&#39;</code></li><li>Required: No</li></ul><p>Login mode status, optional values:</p><ul><li><code>&#39;enable&#39;</code>: enable login (default)</li><li><code>&#39;disable&#39;</code>: Login is disabled, users should fill in infomation to comment</li><li><code>&#39;force&#39;</code>: Forced login, users must login to comment</li></ul><h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>Type: <code>number | [number, number]</code></li><li>Default: <code>0</code></li><li>Required: <code>false</code></li></ul><p>Comment word s limit. When a single number is filled in, it &#39;s the maximum number of comment words. No limit when set to <code>0</code>.</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>Type: <code>number</code></li><li>Default: <code>10</code></li><li>Required: No</li></ul><p>number of comments per page.</p><h2 id="uploadimage" tabindex="-1"><a class="header-anchor" href="#uploadimage" aria-hidden="true">#</a> uploadImage</h2><ul><li>Type: <code>Function | false</code></li><li>Required: No</li></ul><p>Custom image upload callback to manage picture by yourself. We will pass a picture file object when execute it.</p><p>If you set it to <code>false</code>, image upload feature will be disabled.</p><h2 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> highlight</h2><ul><li>Type: <code>Highlighter | false</code></li><li>Required: No</li></ul><p><strong>Code highlighting</strong>, <code>hanabi</code> is used by default, and you can pass in a code highlighter of your own.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>\n\n<span class="token comment">// or</span>\n\n<span class="token punctuation">(</span>\n  code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre></div><p>You can set it to <code>false</code> to disable the code highlighting.</p><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> math</h2><ul><li>Type: <code>(blockMode: boolean, tex: string) =&gt; string | false</code></li><li>Required: No</li></ul>',28),f=(0,l.Uk)("Custom the rendering method of math to facilitate better preview of math. For details, please refer to "),b={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},v=(0,l.Uk)("KaTeX API"),k=(0,l.Uk)(" or "),y={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},w=(0,l.Uk)("MathJax API"),q=(0,l.Uk)("."),x=(0,l.uE)('<p>If you set it to &#39;false&#39;, math preview feature will be disabled.</p><h3 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h3><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li><li>Required: No</li></ul><p>Whether show copyright and version in footer.</p><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>We hope you can keep it on to support Waline.</p></div><h2 id="deprecated-api" tabindex="-1"><a class="header-anchor" href="#deprecated-api" aria-hidden="true">#</a> Deprecated API</h2><p>The following APIs are still valid, but they will be removed in V2.</p><h3 id="langmode" tabindex="-1"><a class="header-anchor" href="#langmode" aria-hidden="true">#</a> langMode</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>locale</code> instead.</p></div><ul><li>Type: <code>Locale</code></li><li>Required: No</li></ul><p>Custom I18N.</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>locale.placeholder</code> instead.</p></div><ul><li>Type: <code>string</code></li><li>Default: <code>Just go go...</code></li><li>Required: No</li></ul><p>Comment box placeholder</p><h3 id="emojicdn" tabindex="-1"><a class="header-anchor" href="#emojicdn" aria-hidden="true">#</a> emojiCDN</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>emoji</code> instead.</p></div><ul><li>Type: <code>string</code></li><li>Default: <code>https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/</code></li><li>Required: No</li></ul>',18),j=(0,l.Uk)("Set "),T=(0,l._)("strong",null,"Emoji Pack CDN",-1),R=(0,l.Uk)(", refer to "),D=(0,l.Uk)("Custom Emoji"),N=(0,l.uE)('<h3 id="emojimaps" tabindex="-1"><a class="header-anchor" href="#emojimaps" aria-hidden="true">#</a> emojiMaps</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>emoji</code> instead.</p></div><ul><li>Type: <code>Object</code></li><li>Default: <code>null</code></li><li>Required: No</li></ul>',3),U=(0,l.Uk)("Set `Emoji Packet Mapping’, refer to "),C=(0,l.Uk)("Custom Emoji"),_=(0,l.uE)('<h3 id="requiredfields" tabindex="-1"><a class="header-anchor" href="#requiredfields" aria-hidden="true">#</a> requiredFields</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>requiredMeta</code> instead.</p></div><h3 id="anonymous" tabindex="-1"><a class="header-anchor" href="#anonymous" aria-hidden="true">#</a> anonymous</h3><div class="custom-container warning"><p class="custom-container-title">Obsolete</p><p>Please use <code>login</code> instead.</p></div><ul><li>Type: <code>boolean</code></li><li>Required: No</li></ul><p>Whether to allow login comments. Both supported by default, set to <code>true</code> means only support anonymous comments, <code>false</code> means only support login comments.</p><h3 id="avatarcdn" tabindex="-1"><a class="header-anchor" href="#avatarcdn" aria-hidden="true">#</a> avatarCDN</h3><p>::: waring Obsolete</p><p>We recommand you to use lastest server and config it with <code>AVATAR_PROXY</code>.</p><p>:::</p><ul><li>Type: <code>string</code></li><li>Default: <code>https://seccdn.libravatar.org/avatar/</code></li><li>Required: No</li></ul><p>Avatar provider baseURL. Supports Gravatar-compatible APIs.</p><h3 id="avatar" tabindex="-1"><a class="header-anchor" href="#avatar" aria-hidden="true">#</a> avatar</h3><p>::: waring Obsolete</p><p>We recommand you to use lastest server and config it with <code>AVATAR_PROXY</code>.</p><p>:::</p><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;mp&#39;</code></li><li>Required: No</li></ul>',17),O={href:"http://gravatar.com/",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("Gravatar"),I=(0,l.Uk)(" type."),P=(0,l.uE)("<p>Optional value:</p><ul><li><code>&#39;&#39;</code> (Empty string)</li><li><code>&#39;mp&#39;</code></li><li><code>&#39;identicon&#39;</code></li><li><code>&#39;monsterid&#39;</code></li><li><code>&#39;wavatar&#39;</code></li><li><code>&#39;retro&#39;</code></li><li><code>&#39;robohash&#39;</code></li><li><code>&#39;hide&#39;</code></li></ul>",2),E=(0,l.Uk)("See the "),S=(0,l.Uk)("Avatar setting"),A=(0,l.Uk)(" for more details."),M=(0,l.uE)('<h3 id="avatarforce" tabindex="-1"><a class="header-anchor" href="#avatarforce" aria-hidden="true">#</a> avatarForce</h3><p>::: waring Obsolete</p><p>We recommand you to use lastest server and config it with <code>AVATAR_PROXY</code>.</p><p>:::</p><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Required: No</li></ul><p>Whether <strong>force</strong> pulling the latest avatar each time.</p><h2 id="mathtagsupport" tabindex="-1"><a class="header-anchor" href="#mathtagsupport" aria-hidden="true">#</a> mathTagSupport</h2><p>::: waring Obsolete</p><p>We recommand you to use mathjax on server.</p><p>:::</p><ul><li>Type: <code>boolean</code></li><li>Default: <code>false</code></li><li>Required: No</li></ul><p>Whether inject extra styles to display <code>&lt;math&gt;</code> block</p><h3 id="copyright-1" tabindex="-1"><a class="header-anchor" href="#copyright-1" aria-hidden="true">#</a> copyRight</h3><div class="custom-container danger"><p class="custom-container-title">Deprecated</p><p>Please use <code>copyright</code> instead.</p></div>',14),L={},z=(0,i(6959).Z)(L,[["render",function(e,a){const i=(0,l.up)("RouterLink"),L=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[t,(0,l._)("p",null,[o,(0,l.Wm)(i,{to:"/en/guide/client/i18n.html"},{default:(0,l.w5)((()=>[n])),_:1}),d]),r,(0,l._)("p",null,[s,(0,l.Wm)(i,{to:"/en/guide/client/emoji.html"},{default:(0,l.w5)((()=>[c])),_:1})]),u,(0,l._)("p",null,[p,(0,l.Wm)(i,{to:"/en/guide/client/style.html"},{default:(0,l.w5)((()=>[h])),_:1}),m]),g,(0,l._)("p",null,[f,(0,l._)("a",b,[v,(0,l.Wm)(L)]),k,(0,l._)("a",y,[w,(0,l.Wm)(L)]),q]),x,(0,l._)("p",null,[j,T,R,(0,l.Wm)(i,{to:"/en/guide/client/emoji.html"},{default:(0,l.w5)((()=>[D])),_:1})]),N,(0,l._)("p",null,[U,(0,l.Wm)(i,{to:"/en/guide/client/emoji.html"},{default:(0,l.w5)((()=>[C])),_:1})]),_,(0,l._)("p",null,[(0,l._)("a",O,[W,(0,l.Wm)(L)]),I]),P,(0,l._)("p",null,[E,(0,l.Wm)(i,{to:"/en/guide/client/avatar.html"},{default:(0,l.w5)((()=>[S])),_:1}),A]),M],64)}]])}}]);