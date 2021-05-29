(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[188],{3562:(e,l,i)=>{"use strict";i.r(l),i.d(l,{data:()=>o});const o={key:"v-c9146c5e",path:"/reference/client.html",title:"前端配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"serverURL",slug:"serverurl",children:[]},{level:2,title:"path",slug:"path",children:[]},{level:2,title:"lang",slug:"lang",children:[]},{level:2,title:"visitor",slug:"visitor",children:[]},{level:2,title:"emoji",slug:"emoji",children:[]},{level:2,title:"dark",slug:"dark",children:[]},{level:2,title:"meta",slug:"meta",children:[]},{level:2,title:"requiredMeta",slug:"requiredmeta",children:[]},{level:2,title:"login",slug:"login",children:[]},{level:2,title:"avatar",slug:"avatar",children:[]},{level:2,title:"wordLimit",slug:"wordlimit",children:[]},{level:2,title:"pageSize",slug:"pagesize",children:[]},{level:2,title:"avatarCDN",slug:"avatarcdn",children:[]},{level:2,title:"avatarForce",slug:"avatarforce",children:[]},{level:2,title:"uploadImage",slug:"uploadimage",children:[]},{level:2,title:"highlight",slug:"highlight",children:[]},{level:2,title:"copyright",slug:"copyright",children:[]},{level:2,title:"废弃的 API",slug:"废弃的-api",children:[{level:3,title:"langMode",slug:"langmode",children:[]},{level:3,title:"placeholder",slug:"placeholder",children:[]},{level:3,title:"emojiCDN",slug:"emojicdn",children:[]},{level:3,title:"emojiMaps",slug:"emojimaps",children:[]},{level:3,title:"requiredFields",slug:"requiredfields",children:[]},{level:3,title:"anonymous",slug:"anonymous",children:[]},{level:3,title:"copyRight",slug:"copyright-1",children:[]}]}],filePathRelative:"reference/client.md",git:{updatedTime:162229853e4,contributors:[]}}},4533:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>R});var o=i(8917);const c=(0,o.uE)('<h1 id="前端配置"><a class="header-anchor" href="#前端配置">#</a> 前端配置</h1><h2 id="el"><a class="header-anchor" href="#el">#</a> el</h2><ul><li>类型: <code>string | HTMLElement | null</code></li><li>默认值: <code>&#39;#waline&#39;</code></li></ul><p>Waline 的初始化挂载器。必须是一个有效的 <strong>CSS 选择器</strong> 或 HTMLELement 对象。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你只想使用浏览量统计功能，请显式指定为 <code>null</code>。</p></div><h2 id="serverurl"><a class="header-anchor" href="#serverurl">#</a> serverURL</h2><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>Waline 的服务端地址。</p><h2 id="path"><a class="header-anchor" href="#path">#</a> path</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>window.location.pathname</code></li><li>必填: 否</li></ul><p>当前 <em>文章页</em> 路径，用于区分不同的 <em>文章页</em>，以保证正确读取该 <em>文章页</em> 下的评论列表。</p><p>可选值:</p><ul><li><code>window.location.pathname</code> (默认值，推荐)</li><li><code>window.location.href</code></li><li>自定义</li></ul><blockquote><p>I. 请保证每个 <em>文章页</em> 路径的唯一性，否则可能会出现不同 <em>文章页</em> 下加载相同评论列表的情况。</p><p>II. 如果值为 <code>window.location.href</code>，可能会出现随便加 <em>不同参数</em> 进入该页面，而被判断成新页面的情况。</p></blockquote><h2 id="lang"><a class="header-anchor" href="#lang">#</a> lang</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;zh-CN&#39;</code></li><li>必填: 否</li></ul><p>多语言支持。</p><p>可选值:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',19),d=(0,o.Uk)("如需 "),a=(0,o.Wm)("em",null,"自定义语言",-1),t=(0,o.Uk)("，请参考 "),r=(0,o.Uk)("i18n"),n=(0,o.Uk)("。"),s=(0,o.uE)('<h2 id="visitor"><a class="header-anchor" href="#visitor">#</a> visitor</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>文章访问量统计。</p><h2 id="emoji"><a class="header-anchor" href="#emoji">#</a> emoji</h2><ul><li>类型: <code>(string | EmojiInfo)[]</code></li><li>默认值: <code>[&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo&#39;]</code></li></ul>',5),h=(0,o.Uk)("表情设置，详见 "),u=(0,o.Uk)("自定义表情"),p=(0,o.uE)('<h2 id="dark"><a class="header-anchor" href="#dark">#</a> dark</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>暗黑模式适配。</p><ul><li>设置 <code>&#39;auto&#39;</code> 会根据设备暗黑模式自适应。</li><li>填入 CSS 选择器会在对应选择器生效时启用夜间模式。</li></ul><div class="custom-container tip"><p class="custom-container-title">针对不同主题的例子</p><ul><li><p><strong>Docusaurus</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-theme=&quot;dark&quot;</code> 开启暗黑模式，那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>hexo-theme-fluid</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-user-color-scheme=&quot;dark&quot;</code> 开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>vuepress-theme-hope</strong>: 它会在 <code>&lt;body&gt;</code> 上添加<code>theme-dark</code> class 来开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>body.theme-dark</code>。</p></li></ul></div>',5),m=(0,o.Uk)("自定义样式与暗黑模式详见 "),g=(0,o.Uk)("自定义样式"),v=(0,o.Uk)("。"),f=(0,o.uE)('<h2 id="meta"><a class="header-anchor" href="#meta">#</a> meta</h2><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[&#39;nick&#39;, &#39;mail&#39;, &#39;link&#39;]</code></li><li>必填: 否</li></ul><p>评论者相关属性。可选值: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta"><a class="header-anchor" href="#requiredmeta">#</a> requiredMeta</h2><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[]</code></li><li>必填: 否</li></ul><p>设置<strong>必填项</strong>，默认匿名，可选值:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;, &#39;mail&#39;]</code></li></ul><h2 id="login"><a class="header-anchor" href="#login">#</a> login</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;enabled&#39;</code></li><li>必填: 否</li></ul><p>登录模式状态，可选值:</p><ul><li><code>&#39;enable&#39;</code>: 启用登录 (默认)</li><li><code>&#39;disable&#39;</code>: 禁用登录，用户只能填写信息评论</li><li><code>&#39;force&#39;</code>: 强制登录，用户必须注册并登录才可发布评论</li></ul><h2 id="avatar"><a class="header-anchor" href="#avatar">#</a> avatar</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>mp</code></li><li>必填: 否</li></ul>',13),k={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},w=(0,o.Uk)("Gravatar"),j=(0,o.Uk)(" 头像展示方式。"),b=(0,o.uE)("<p>可选值:</p><ul><li><code>&#39;&#39;</code></li><li><code>&#39;mp&#39;</code></li><li><code>&#39;identicon&#39;</code></li><li><code>&#39;monsterid&#39;</code></li><li><code>&#39;wavatar&#39;</code></li><li><code>&#39;retro&#39;</code></li><li><code>&#39;robohash&#39;</code></li><li><code>&#39;hide&#39;</code></li></ul>",2),q=(0,o.Uk)("更多信息，请查看 "),U=(0,o.Uk)("头像配置"),W=(0,o.Uk)("。"),y=(0,o.uE)('<h2 id="wordlimit"><a class="header-anchor" href="#wordlimit">#</a> wordLimit</h2><ul><li>类型: <code>number | [number, number]</code></li><li>默认值: <code>0</code></li><li>必要性: <code>false</code></li></ul><p>评论字数限制。填入单个数字时为最大字数限制。设置为 <code>0</code> 时无限制。</p><h2 id="pagesize"><a class="header-anchor" href="#pagesize">#</a> pageSize</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>10</code></li><li>必填: 否</li></ul><p>评论列表分页，每页条数。</p><h2 id="avatarcdn"><a class="header-anchor" href="#avatarcdn">#</a> avatarCDN</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>https://sdn.geekzu.org/avatar/</code></li><li>必填: 否</li></ul><p>设置 Gravatar 头像 CDN 地址。</p><h2 id="avatarforce"><a class="header-anchor" href="#avatarforce">#</a> avatarForce</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>每次访问是否<strong>强制</strong>拉取最新的<em>评论列表头像</em></p><blockquote><p>不推荐设置为 <code>true</code>，目前的<em>评论列表头像</em>会自动带上 <code>Waline</code> 的版本号</p></blockquote><h2 id="uploadimage"><a class="header-anchor" href="#uploadimage">#</a> uploadImage</h2><ul><li>类型: <code>Function</code></li><li>必填: 否</li></ul><p>自定义图片上传方法，方便更好的存储图片。方法执行时会将图片对象传入。</p><h2 id="highlight"><a class="header-anchor" href="#highlight">#</a> highlight</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>必填: 否</li></ul><p><strong>代码高亮</strong>，默认开启，若不需要，请手动关闭</p><h2 id="copyright"><a class="header-anchor" href="#copyright">#</a> copyright</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>必填: 否</li></ul><p>是否显示页脚版权信息。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>我们希望你保持打开以支持 Waline</p></div><h2 id="废弃的-api"><a class="header-anchor" href="#废弃的-api">#</a> 废弃的 API</h2><p>以下 API 仍然有效，但它们会在 V2 版本中移除</p><h3 id="langmode"><a class="header-anchor" href="#langmode">#</a> langMode</h3><div class="custom-container warning"><p class="custom-container-title">已废弃</p><p>请使用 <code>locale</code></p></div><ul><li>类型: <code>Locale</code></li><li>必填: 否</li></ul><p>自定义语言。</p><h3 id="placeholder"><a class="header-anchor" href="#placeholder">#</a> placeholder</h3><div class="custom-container warning"><p class="custom-container-title">已废弃</p><p>请使用 <code>locale.placeholder</code></p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;Just Go GO&#39;</code></li><li>必填: 否</li></ul><p>评论框 <strong>占位提示符</strong>。</p><h3 id="emojicdn"><a class="header-anchor" href="#emojicdn">#</a> emojiCDN</h3><div class="custom-container warning"><p class="custom-container-title">已废弃</p><p>请使用 <code>emoji</code></p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/</code></li><li>必填: 否</li></ul>',36),C=(0,o.Uk)("设置"),z=(0,o.Wm)("strong",null,"表情包 CDN",-1),E=(0,o.Uk)("，参考"),L=(0,o.Uk)("自定义表情"),I=(0,o.uE)('<h3 id="emojimaps"><a class="header-anchor" href="#emojimaps">#</a> emojiMaps</h3><div class="custom-container warning"><p class="custom-container-title">已废弃</p><p>请使用 <code>emoji</code></p></div><ul><li>类型: <code>Object</code></li><li>默认值: <code>微博表情包</code></li><li>必填: 否</li></ul>',3),M=(0,o.Uk)("设置"),N=(0,o.Wm)("strong",null,"表情包映射",-1),D=(0,o.Uk)("，参考"),S=(0,o.Uk)("自定义表情"),_=(0,o.uE)('<h3 id="requiredfields"><a class="header-anchor" href="#requiredfields">#</a> requiredFields</h3><div class="custom-container warning"><p class="custom-container-title">已废弃</p><p>请使用 <code>requiredMeta</code></p></div><h3 id="anonymous"><a class="header-anchor" href="#anonymous">#</a> anonymous</h3><div class="custom-container warning"><p class="custom-container-title">已废弃</p><p>请使用 <code>login</code></p></div><ul><li>类型: <code>boolean</code></li><li>必填: 否</li></ul><p>是否允许登录评论。默认情况是两者都支持，设置为 <code>true</code> 表示仅支持匿名评论，<code>false</code> 表示仅支持登录评论。</p><h3 id="copyright-1"><a class="header-anchor" href="#copyright-1">#</a> copyRight</h3><div class="custom-container danger"><p class="custom-container-title">已移除</p><p>请使用 <code>copyright</code></p></div>',8),R={render:function(e,l){const i=(0,o.up)("RouterLink"),R=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[c,(0,o.Wm)("p",null,[d,a,t,(0,o.Wm)(i,{to:"/guide/client/i18n.html"},{default:(0,o.w5)((()=>[r])),_:1}),n]),s,(0,o.Wm)("p",null,[h,(0,o.Wm)(i,{to:"/guide/client/emoji.html"},{default:(0,o.w5)((()=>[u])),_:1})]),p,(0,o.Wm)("p",null,[m,(0,o.Wm)(i,{to:"/guide/client/style.html"},{default:(0,o.w5)((()=>[g])),_:1}),v]),f,(0,o.Wm)("p",null,[(0,o.Wm)("a",k,[w,(0,o.Wm)(R)]),j]),b,(0,o.Wm)("p",null,[q,(0,o.Wm)(i,{to:"/guide/client/avatar.html"},{default:(0,o.w5)((()=>[U])),_:1}),W]),y,(0,o.Wm)("p",null,[C,z,E,(0,o.Wm)(i,{to:"/guide/client/emoji.html"},{default:(0,o.w5)((()=>[L])),_:1})]),I,(0,o.Wm)("p",null,[M,N,D,(0,o.Wm)(i,{to:"/guide/client/emoji.html"},{default:(0,o.w5)((()=>[S])),_:1})]),_],64)}}}}]);