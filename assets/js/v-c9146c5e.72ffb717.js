"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[188],{3562:(e,a,l)=>{l.r(a),l.d(a,{data:()=>i});const i={key:"v-c9146c5e",path:"/reference/client.html",title:"前端配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"serverURL",slug:"serverurl",children:[]},{level:2,title:"path",slug:"path",children:[]},{level:2,title:"lang",slug:"lang",children:[]},{level:2,title:"visitor",slug:"visitor",children:[]},{level:2,title:"emoji",slug:"emoji",children:[]},{level:2,title:"dark",slug:"dark",children:[]},{level:2,title:"meta",slug:"meta",children:[]},{level:2,title:"requiredMeta",slug:"requiredmeta",children:[]},{level:2,title:"login",slug:"login",children:[]},{level:2,title:"wordLimit",slug:"wordlimit",children:[]},{level:2,title:"pageSize",slug:"pagesize",children:[]},{level:2,title:"uploadImage",slug:"uploadimage",children:[]},{level:2,title:"highlight",slug:"highlight",children:[]},{level:2,title:"math",slug:"math",children:[]},{level:2,title:"copyright",slug:"copyright",children:[]},{level:2,title:"废弃的 API",slug:"废弃的-api",children:[{level:3,title:"langMode",slug:"langmode",children:[]},{level:3,title:"placeholder",slug:"placeholder",children:[]},{level:3,title:"emojiCDN",slug:"emojicdn",children:[]},{level:3,title:"emojiMaps",slug:"emojimaps",children:[]},{level:3,title:"requiredFields",slug:"requiredfields",children:[]},{level:3,title:"avatar",slug:"avatar",children:[]},{level:3,title:"avatarForce",slug:"avatarforce",children:[]},{level:3,title:"avatarCDN",slug:"avatarcdn",children:[]},{level:3,title:"anonymous",slug:"anonymous",children:[]}]},{level:2,title:"mathTagSupport",slug:"mathtagsupport",children:[{level:3,title:"copyRight",slug:"copyright-1",children:[]}]}],filePathRelative:"reference/client.md",git:{updatedTime:1642226291e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},4438:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Z});var i=l(8917);const o=(0,i.uE)('<h1 id="前端配置" tabindex="-1"><a class="header-anchor" href="#前端配置" aria-hidden="true">#</a> 前端配置</h1><h2 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h2><ul><li>类型: <code>string | HTMLElement</code></li><li>必填: 否</li></ul><p>Waline 的初始化挂载器。必须是一个有效的 <strong>CSS 选择器</strong> 或 HTMLELement 对象。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你只想使用浏览量统计功能，请不要设置该项。</p></div><h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>Waline 的服务端地址。</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>window.location.pathname</code></li><li>必填: 否</li></ul><p>当前 <em>文章页</em> 路径，用于区分不同的 <em>文章页</em>，以保证正确读取该 <em>文章页</em> 下的评论列表。</p><p>可选值:</p><ul><li><code>window.location.pathname</code> (默认值，推荐)</li><li><code>window.location.href</code></li><li>自定义</li></ul><blockquote><p>I. 请保证每个 <em>文章页</em> 路径的唯一性，否则可能会出现不同 <em>文章页</em> 下加载相同评论列表的情况。</p><p>II. 如果值为 <code>window.location.href</code>，可能会出现随便加 <em>不同参数</em> 进入该页面，而被判断成新页面的情况。</p></blockquote><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;zh-CN&#39;</code></li><li>必填: 否</li></ul><p>多语言支持。</p><p>可选值:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',19),t=(0,i.Uk)("如需 "),n=(0,i._)("em",null,"自定义语言",-1),d=(0,i.Uk)("，请参考 "),c=(0,i.Uk)("i18n"),r=(0,i.Uk)("。"),s=(0,i.uE)('<h2 id="visitor" tabindex="-1"><a class="header-anchor" href="#visitor" aria-hidden="true">#</a> visitor</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>文章访问量统计。</p><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> emoji</h2><ul><li>类型: <code>(string | EmojiInfo)[]</code></li><li>默认值: <code>[&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo&#39;]</code></li></ul>',5),h=(0,i.Uk)("表情设置，详见 "),p=(0,i.Uk)("自定义表情"),u=(0,i.uE)('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>暗黑模式适配。</p><ul><li>设置 <code>&#39;auto&#39;</code> 会根据设备暗黑模式自适应。</li><li>填入 CSS 选择器会在对应选择器生效时启用夜间模式。</li></ul><div class="custom-container tip"><p class="custom-container-title">针对不同主题的例子</p><ul><li><p><strong>Docusaurus</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-theme=&quot;dark&quot;</code> 开启暗黑模式，那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>hexo-theme-fluid</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-user-color-scheme=&quot;dark&quot;</code> 开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>vuepress-theme-hope</strong>: 它会在 <code>&lt;body&gt;</code> 上添加<code>theme-dark</code> class 来开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>body.theme-dark</code>。</p></li></ul></div>',5),g=(0,i.Uk)("自定义样式与暗黑模式详见 "),m=(0,i.Uk)("自定义样式"),k=(0,i.Uk)("。"),v=(0,i.uE)('<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[&#39;nick&#39;, &#39;mail&#39;, &#39;link&#39;]</code></li><li>必填: 否</li></ul><p>评论者相关属性。可选值: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[]</code></li><li>必填: 否</li></ul><p>设置<strong>必填项</strong>，默认匿名，可选值:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;, &#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;enable&#39;</code></li><li>必填: 否</li></ul><p>登录模式状态，可选值:</p><ul><li><code>&#39;enable&#39;</code>: 启用登录 (默认)</li><li><code>&#39;disable&#39;</code>: 禁用登录，用户只能填写信息评论</li><li><code>&#39;force&#39;</code>: 强制登录，用户必须注册并登录才可发布评论</li></ul><h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>类型: <code>number | [number, number]</code></li><li>默认值: <code>0</code></li><li>必要性: <code>false</code></li></ul><p>评论字数限制。填入单个数字时为最大字数限制。设置为 <code>0</code> 时无限制。</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>10</code></li><li>必填: 否</li></ul><p>评论列表分页，每页条数。</p><h2 id="uploadimage" tabindex="-1"><a class="header-anchor" href="#uploadimage" aria-hidden="true">#</a> uploadImage</h2><ul><li>类型: <code>Function | false</code></li><li>必填: 否</li></ul><p>自定义图片上传方法，方便更好的存储图片。方法执行时会将图片对象传入。</p><p>你可以设置为 <code>false</code> 以禁用图片上传功能。</p><h2 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> highlight</h2><ul><li>类型: <code>Highlighter | false</code></li><li>必填: 否</li></ul><p><strong>代码高亮</strong>，默认使用 <code>hanabi</code>，你可以传入一个自己的代码高亮器。</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span>\n\n<span class="token comment">// 或</span>\n\n<span class="token punctuation">(</span>\n  code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n  callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>\n<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">;</span>\n</code></pre></div><p>你可以设置为 <code>false</code> 以禁用代码高亮功能。</p><h2 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> math</h2><ul><li>类型: <code>(blockMode: boolean, tex: string) =&gt; string | false</code></li><li>必填: 否</li></ul>',28),f=(0,i.Uk)("自定义数学公式的渲染方法，方便更好的预览数学公式。更多请参考 "),b={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},w=(0,i.Uk)("KaTeX API"),x=(0,i.Uk)(" 或 "),U={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},j=(0,i.Uk)("MathJax API"),_=(0,i.Uk)("。"),y=(0,i.uE)('<p>你可以设置为 <code>false</code> 以禁止预览数学公式。</p><h2 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>必填: 否</li></ul><p>是否显示页脚版权信息。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>我们希望你保持打开以支持 Waline</p></div><h2 id="废弃的-api" tabindex="-1"><a class="header-anchor" href="#废弃的-api" aria-hidden="true">#</a> 废弃的 API</h2><p>以下 API 仍然有效，但它们会在 V2 版本中移除</p><h3 id="langmode" tabindex="-1"><a class="header-anchor" href="#langmode" aria-hidden="true">#</a> langMode</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>locale</code></p></div><ul><li>类型: <code>Locale</code></li><li>必填: 否</li></ul><p>自定义语言。</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>locale.placeholder</code></p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;Just Go GO&#39;</code></li><li>必填: 否</li></ul><p>评论框 <strong>占位提示符</strong>。</p><h3 id="emojicdn" tabindex="-1"><a class="header-anchor" href="#emojicdn" aria-hidden="true">#</a> emojiCDN</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>emoji</code></p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/</code></li><li>必填: 否</li></ul>',18),q=(0,i.Uk)("设置"),A=(0,i._)("strong",null,"表情包 CDN",-1),W=(0,i.Uk)("，参考"),C=(0,i.Uk)("自定义表情"),E=(0,i.uE)('<h3 id="emojimaps" tabindex="-1"><a class="header-anchor" href="#emojimaps" aria-hidden="true">#</a> emojiMaps</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>emoji</code></p></div><ul><li>类型: <code>Object</code></li><li>默认值: <code>微博表情包</code></li><li>必填: 否</li></ul>',3),I=(0,i.Uk)("设置"),R=(0,i._)("strong",null,"表情包映射",-1),z=(0,i.Uk)("，参考"),M=(0,i.Uk)("自定义表情"),P=(0,i.uE)('<h3 id="requiredfields" tabindex="-1"><a class="header-anchor" href="#requiredfields" aria-hidden="true">#</a> requiredFields</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>requiredMeta</code></p></div><h3 id="avatar" tabindex="-1"><a class="header-anchor" href="#avatar" aria-hidden="true">#</a> avatar</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>建议配合最新版本的服务端，通过服务端的 <code>AVATAR_PROXY</code> 配置。</p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>mp</code></li><li>必填: 否</li></ul>',5),L={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},T=(0,i.Uk)("Gravatar"),N=(0,i.Uk)(" 头像展示方式。"),S=(0,i.uE)("<p>可选值:</p><ul><li><code>&#39;&#39;</code></li><li><code>&#39;mp&#39;</code></li><li><code>&#39;identicon&#39;</code></li><li><code>&#39;monsterid&#39;</code></li><li><code>&#39;wavatar&#39;</code></li><li><code>&#39;retro&#39;</code></li><li><code>&#39;robohash&#39;</code></li><li><code>&#39;hide&#39;</code></li></ul>",2),D=(0,i.Uk)("更多信息，请查看 "),O=(0,i.Uk)("头像配置"),F=(0,i.Uk)("。"),G=(0,i.uE)('<h3 id="avatarforce" tabindex="-1"><a class="header-anchor" href="#avatarforce" aria-hidden="true">#</a> avatarForce</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>建议配合最新版本的服务端，通过服务端的 <code>AVATAR_PROXY</code> 配置。</p></div><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>每次访问是否<strong>强制</strong>拉取最新的<em>评论列表头像</em></p><blockquote><p>不推荐设置为 <code>true</code>，目前的<em>评论列表头像</em>会自动带上 <code>Waline</code> 的版本号</p></blockquote><h3 id="avatarcdn" tabindex="-1"><a class="header-anchor" href="#avatarcdn" aria-hidden="true">#</a> avatarCDN</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>建议配合最新版本的服务端，通过服务端的 <code>AVATAR_PROXY</code> 配置。</p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>https://seccdn.libravatar.org/avatar/</code></li><li>必填: 否</li></ul>',8),H=(0,i.Uk)("设置头像 CDN 地址。可使用任何与 "),V={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},X=(0,i.Uk)("Gravatar"),Y=(0,i.Uk)(" API 兼容的服务。"),J=(0,i.uE)('<h3 id="anonymous" tabindex="-1"><a class="header-anchor" href="#anonymous" aria-hidden="true">#</a> anonymous</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>login</code></p></div><ul><li>类型: <code>boolean</code></li><li>必填: 否</li></ul><p>是否允许登录评论。默认情况是两者都支持，设置为 <code>true</code> 表示仅支持匿名评论，<code>false</code> 表示仅支持登录评论。</p><h2 id="mathtagsupport" tabindex="-1"><a class="header-anchor" href="#mathtagsupport" aria-hidden="true">#</a> mathTagSupport</h2><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请在服务端使用 mathjax 渲染公式。</p></div><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>是否注入核外样式以兼容 <code>&lt;math&gt;</code> 显示。</p><h3 id="copyright-1" tabindex="-1"><a class="header-anchor" href="#copyright-1" aria-hidden="true">#</a> copyRight</h3><div class="custom-container danger"><p class="custom-container-title">已废弃</p><p>请使用 <code>copyright</code></p></div>',10),K={},Z=(0,l(6959).Z)(K,[["render",function(e,a){const l=(0,i.up)("RouterLink"),K=(0,i.up)("OutboundLink");return(0,i.wg)(),(0,i.iD)(i.HY,null,[o,(0,i._)("p",null,[t,n,d,(0,i.Wm)(l,{to:"/guide/client/i18n.html"},{default:(0,i.w5)((()=>[c])),_:1}),r]),s,(0,i._)("p",null,[h,(0,i.Wm)(l,{to:"/guide/client/emoji.html"},{default:(0,i.w5)((()=>[p])),_:1})]),u,(0,i._)("p",null,[g,(0,i.Wm)(l,{to:"/guide/client/style.html"},{default:(0,i.w5)((()=>[m])),_:1}),k]),v,(0,i._)("p",null,[f,(0,i._)("a",b,[w,(0,i.Wm)(K)]),x,(0,i._)("a",U,[j,(0,i.Wm)(K)]),_]),y,(0,i._)("p",null,[q,A,W,(0,i.Wm)(l,{to:"/guide/client/emoji.html"},{default:(0,i.w5)((()=>[C])),_:1})]),E,(0,i._)("p",null,[I,R,z,(0,i.Wm)(l,{to:"/guide/client/emoji.html"},{default:(0,i.w5)((()=>[M])),_:1})]),P,(0,i._)("p",null,[(0,i._)("a",L,[T,(0,i.Wm)(K)]),N]),S,(0,i._)("p",null,[D,(0,i.Wm)(l,{to:"/guide/client/avatar.html"},{default:(0,i.w5)((()=>[O])),_:1}),F]),G,(0,i._)("p",null,[H,(0,i._)("a",V,[X,(0,i.Wm)(K)]),Y]),J],64)}]])}}]);