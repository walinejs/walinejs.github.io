(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[188],{3562:(e,l,i)=>{"use strict";i.r(l),i.d(l,{data:()=>a});const a={key:"v-c9146c5e",path:"/reference/client.html",title:"前端配置",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"el",slug:"el",children:[]},{level:2,title:"serverURL",slug:"serverurl",children:[]},{level:2,title:"path",slug:"path",children:[]},{level:2,title:"lang",slug:"lang",children:[]},{level:2,title:"visitor",slug:"visitor",children:[]},{level:2,title:"emoji",slug:"emoji",children:[]},{level:2,title:"dark",slug:"dark",children:[]},{level:2,title:"meta",slug:"meta",children:[]},{level:2,title:"requiredMeta",slug:"requiredmeta",children:[]},{level:2,title:"login",slug:"login",children:[]},{level:2,title:"avatar",slug:"avatar",children:[]},{level:2,title:"wordLimit",slug:"wordlimit",children:[]},{level:2,title:"pageSize",slug:"pagesize",children:[]},{level:2,title:"avatarCDN",slug:"avatarcdn",children:[]},{level:2,title:"avatarForce",slug:"avatarforce",children:[]},{level:2,title:"uploadImage",slug:"uploadimage",children:[]},{level:2,title:"highlight",slug:"highlight",children:[]},{level:2,title:"mathTagSupport",slug:"mathtagsupport",children:[]},{level:2,title:"copyright",slug:"copyright",children:[]},{level:2,title:"废弃的 API",slug:"废弃的-api",children:[{level:3,title:"langMode",slug:"langmode",children:[]},{level:3,title:"placeholder",slug:"placeholder",children:[]},{level:3,title:"emojiCDN",slug:"emojicdn",children:[]},{level:3,title:"emojiMaps",slug:"emojimaps",children:[]},{level:3,title:"requiredFields",slug:"requiredfields",children:[]},{level:3,title:"anonymous",slug:"anonymous",children:[]},{level:3,title:"copyRight",slug:"copyright-1",children:[]}]}],filePathRelative:"reference/client.md",git:{updatedTime:1627223214e3,contributors:[]}}},7798:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>_});var a=i(8917);const d=(0,a.uE)('<h1 id="前端配置" tabindex="-1"><a class="header-anchor" href="#前端配置" aria-hidden="true">#</a> 前端配置</h1><h2 id="el" tabindex="-1"><a class="header-anchor" href="#el" aria-hidden="true">#</a> el</h2><ul><li>类型: <code>string | HTMLElement</code></li><li>必填: 否</li></ul><p>Waline 的初始化挂载器。必须是一个有效的 <strong>CSS 选择器</strong> 或 HTMLELement 对象。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>如果你只想使用浏览量统计功能，请不要设置该项。</p></div><h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>类型: <code>string</code></li><li>必填: 是</li></ul><p>Waline 的服务端地址。</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>window.location.pathname</code></li><li>必填: 否</li></ul><p>当前 <em>文章页</em> 路径，用于区分不同的 <em>文章页</em>，以保证正确读取该 <em>文章页</em> 下的评论列表。</p><p>可选值:</p><ul><li><code>window.location.pathname</code> (默认值，推荐)</li><li><code>window.location.href</code></li><li>自定义</li></ul><blockquote><p>I. 请保证每个 <em>文章页</em> 路径的唯一性，否则可能会出现不同 <em>文章页</em> 下加载相同评论列表的情况。</p><p>II. 如果值为 <code>window.location.href</code>，可能会出现随便加 <em>不同参数</em> 进入该页面，而被判断成新页面的情况。</p></blockquote><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;zh-CN&#39;</code></li><li>必填: 否</li></ul><p>多语言支持。</p><p>可选值:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',19),o=(0,a.Uk)("如需 "),c=(0,a.Wm)("em",null,"自定义语言",-1),t=(0,a.Uk)("，请参考 "),r=(0,a.Uk)("i18n"),n=(0,a.Uk)("。"),h=(0,a.uE)('<h2 id="visitor" tabindex="-1"><a class="header-anchor" href="#visitor" aria-hidden="true">#</a> visitor</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>文章访问量统计。</p><h2 id="emoji" tabindex="-1"><a class="header-anchor" href="#emoji" aria-hidden="true">#</a> emoji</h2><ul><li>类型: <code>(string | EmojiInfo)[]</code></li><li>默认值: <code>[&#39;https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo&#39;]</code></li></ul>',5),s=(0,a.Uk)("表情设置，详见 "),u=(0,a.Uk)("自定义表情"),p=(0,a.uE)('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>类型: <code>string</code></li><li>必填: 否</li></ul><p>暗黑模式适配。</p><ul><li>设置 <code>&#39;auto&#39;</code> 会根据设备暗黑模式自适应。</li><li>填入 CSS 选择器会在对应选择器生效时启用夜间模式。</li></ul><div class="custom-container tip"><p class="custom-container-title">针对不同主题的例子</p><ul><li><p><strong>Docusaurus</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-theme=&quot;dark&quot;</code> 开启暗黑模式，那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>hexo-theme-fluid</strong>: 它会在 <code>&lt;html&gt;</code> 上通过设置 <code>data-user-color-scheme=&quot;dark&quot;</code> 开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>。</p></li><li><p><strong>vuepress-theme-hope</strong>: 它会在 <code>&lt;body&gt;</code> 上添加<code>theme-dark</code> class 来开启暗黑模式。那么你需要将 <code>dark</code> 选项设置为 <code>body.theme-dark</code>。</p></li></ul></div>',5),m=(0,a.Uk)("自定义样式与暗黑模式详见 "),g=(0,a.Uk)("自定义样式"),v=(0,a.Uk)("。"),f=(0,a.uE)('<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[&#39;nick&#39;, &#39;mail&#39;, &#39;link&#39;]</code></li><li>必填: 否</li></ul><p>评论者相关属性。可选值: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>类型: <code>string[]</code></li><li>默认值: <code>[]</code></li><li>必填: 否</li></ul><p>设置<strong>必填项</strong>，默认匿名，可选值:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;, &#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;enable&#39;</code></li><li>必填: 否</li></ul><p>登录模式状态，可选值:</p><ul><li><code>&#39;enable&#39;</code>: 启用登录 (默认)</li><li><code>&#39;disable&#39;</code>: 禁用登录，用户只能填写信息评论</li><li><code>&#39;force&#39;</code>: 强制登录，用户必须注册并登录才可发布评论</li></ul><h2 id="avatar" tabindex="-1"><a class="header-anchor" href="#avatar" aria-hidden="true">#</a> avatar</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>mp</code></li><li>必填: 否</li></ul>',13),b={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},k=(0,a.Uk)("Gravatar"),x=(0,a.Uk)(" 头像展示方式。"),w=(0,a.uE)("<p>可选值:</p><ul><li><code>&#39;&#39;</code></li><li><code>&#39;mp&#39;</code></li><li><code>&#39;identicon&#39;</code></li><li><code>&#39;monsterid&#39;</code></li><li><code>&#39;wavatar&#39;</code></li><li><code>&#39;retro&#39;</code></li><li><code>&#39;robohash&#39;</code></li><li><code>&#39;hide&#39;</code></li></ul>",2),j=(0,a.Uk)("更多信息，请查看 "),q=(0,a.Uk)("头像配置"),U=(0,a.Uk)("。"),W=(0,a.uE)('<h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>类型: <code>number | [number, number]</code></li><li>默认值: <code>0</code></li><li>必要性: <code>false</code></li></ul><p>评论字数限制。填入单个数字时为最大字数限制。设置为 <code>0</code> 时无限制。</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>类型: <code>number</code></li><li>默认值: <code>10</code></li><li>必填: 否</li></ul><p>评论列表分页，每页条数。</p><h2 id="avatarcdn" tabindex="-1"><a class="header-anchor" href="#avatarcdn" aria-hidden="true">#</a> avatarCDN</h2><ul><li>类型: <code>string</code></li><li>默认值: <code>https://sdn.geekzu.org/avatar/</code></li><li>必填: 否</li></ul><p>设置 Gravatar 头像 CDN 地址。</p><h2 id="avatarforce" tabindex="-1"><a class="header-anchor" href="#avatarforce" aria-hidden="true">#</a> avatarForce</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>每次访问是否<strong>强制</strong>拉取最新的<em>评论列表头像</em></p><blockquote><p>不推荐设置为 <code>true</code>，目前的<em>评论列表头像</em>会自动带上 <code>Waline</code> 的版本号</p></blockquote><h2 id="uploadimage" tabindex="-1"><a class="header-anchor" href="#uploadimage" aria-hidden="true">#</a> uploadImage</h2><ul><li>类型: <code>Function</code></li><li>必填: 否</li></ul><p>自定义图片上传方法，方便更好的存储图片。方法执行时会将图片对象传入。</p><h2 id="highlight" tabindex="-1"><a class="header-anchor" href="#highlight" aria-hidden="true">#</a> highlight</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>必填: 否</li></ul><p><strong>代码高亮</strong>，默认开启，若不需要，请手动关闭</p><h2 id="mathtagsupport" tabindex="-1"><a class="header-anchor" href="#mathtagsupport" aria-hidden="true">#</a> mathTagSupport</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>false</code></li><li>必填: 否</li></ul><p>是否注入核外样式以兼容 <code>&lt;math&gt;</code> 显示。</p><h2 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h2><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li><li>必填: 否</li></ul><p>是否显示页脚版权信息。</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>我们希望你保持打开以支持 Waline</p></div><h2 id="废弃的-api" tabindex="-1"><a class="header-anchor" href="#废弃的-api" aria-hidden="true">#</a> 废弃的 API</h2><p>以下 API 仍然有效，但它们会在 V2 版本中移除</p><h3 id="langmode" tabindex="-1"><a class="header-anchor" href="#langmode" aria-hidden="true">#</a> langMode</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>locale</code></p></div><ul><li>类型: <code>Locale</code></li><li>必填: 否</li></ul><p>自定义语言。</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> placeholder</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>locale.placeholder</code></p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;Just Go GO&#39;</code></li><li>必填: 否</li></ul><p>评论框 <strong>占位提示符</strong>。</p><h3 id="emojicdn" tabindex="-1"><a class="header-anchor" href="#emojicdn" aria-hidden="true">#</a> emojiCDN</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>emoji</code></p></div><ul><li>类型: <code>string</code></li><li>默认值: <code>https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/</code></li><li>必填: 否</li></ul>',39),y=(0,a.Uk)("设置"),C=(0,a.Wm)("strong",null,"表情包 CDN",-1),z=(0,a.Uk)("，参考"),E=(0,a.Uk)("自定义表情"),L=(0,a.uE)('<h3 id="emojimaps" tabindex="-1"><a class="header-anchor" href="#emojimaps" aria-hidden="true">#</a> emojiMaps</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>emoji</code></p></div><ul><li>类型: <code>Object</code></li><li>默认值: <code>微博表情包</code></li><li>必填: 否</li></ul>',3),I=(0,a.Uk)("设置"),M=(0,a.Wm)("strong",null,"表情包映射",-1),N=(0,a.Uk)("，参考"),S=(0,a.Uk)("自定义表情"),D=(0,a.uE)('<h3 id="requiredfields" tabindex="-1"><a class="header-anchor" href="#requiredfields" aria-hidden="true">#</a> requiredFields</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>requiredMeta</code></p></div><h3 id="anonymous" tabindex="-1"><a class="header-anchor" href="#anonymous" aria-hidden="true">#</a> anonymous</h3><div class="custom-container warning"><p class="custom-container-title">已过时</p><p>请使用 <code>login</code></p></div><ul><li>类型: <code>boolean</code></li><li>必填: 否</li></ul><p>是否允许登录评论。默认情况是两者都支持，设置为 <code>true</code> 表示仅支持匿名评论，<code>false</code> 表示仅支持登录评论。</p><h3 id="copyright-1" tabindex="-1"><a class="header-anchor" href="#copyright-1" aria-hidden="true">#</a> copyRight</h3><div class="custom-container danger"><p class="custom-container-title">已废弃</p><p>请使用 <code>copyright</code></p></div>',8),_={render:function(e,l){const i=(0,a.up)("RouterLink"),_=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.j4)(a.HY,null,[d,(0,a.Wm)("p",null,[o,c,t,(0,a.Wm)(i,{to:"/guide/client/i18n.html"},{default:(0,a.w5)((()=>[r])),_:1}),n]),h,(0,a.Wm)("p",null,[s,(0,a.Wm)(i,{to:"/guide/client/emoji.html"},{default:(0,a.w5)((()=>[u])),_:1})]),p,(0,a.Wm)("p",null,[m,(0,a.Wm)(i,{to:"/guide/client/style.html"},{default:(0,a.w5)((()=>[g])),_:1}),v]),f,(0,a.Wm)("p",null,[(0,a.Wm)("a",b,[k,(0,a.Wm)(_)]),x]),w,(0,a.Wm)("p",null,[j,(0,a.Wm)(i,{to:"/guide/client/avatar.html"},{default:(0,a.w5)((()=>[q])),_:1}),U]),W,(0,a.Wm)("p",null,[y,C,z,(0,a.Wm)(i,{to:"/guide/client/emoji.html"},{default:(0,a.w5)((()=>[E])),_:1})]),L,(0,a.Wm)("p",null,[I,M,N,(0,a.Wm)(i,{to:"/guide/client/emoji.html"},{default:(0,a.w5)((()=>[S])),_:1})]),D],64)}}}}]);