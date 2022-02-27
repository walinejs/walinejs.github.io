"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[775],{9011:(e,i,a)=>{a.r(i),a.d(i,{data:()=>o});const o={key:"v-4fe1dc58",path:"/migration/client.html",title:"Waline 客户端 V1 迁移指南",lang:"zh-CN",frontmatter:{title:"Waline 客户端 V1 迁移指南",icon:"migration",summary:"V1 有数处更改，破坏性变更详见 初始化变更 和 挂件更改。 新功能 Emoji 预设支持: 你现在可以直接填入 Emoji 预设链接完成 Emoji 的配置; 多 Emoji 选项卡: 现在 Emoji 可以包含含有多个选项卡，以便添加多种不同类型的 Emoji; 图片上传优化: 我们添加了图片上传按钮，以提示访客可以上传图片; 拖拽支持: 你现在可以直接",head:[["meta",{property:"og:url",content:"https://waline.js.org/migration/client.html"}],["meta",{property:"og:title",content:"Waline 客户端 V1 迁移指南"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"",headers:[{level:2,title:"新功能",slug:"新功能",children:[]},{level:2,title:"体积减小",slug:"体积减小",children:[]},{level:2,title:"选项变更",slug:"选项变更",children:[]},{level:2,title:"选项重命名",slug:"选项重命名",children:[]},{level:2,title:"行为变更",slug:"行为变更",children:[{level:3,title:"响应式",slug:"响应式",children:[]},{level:3,title:"初始化变更",slug:"初始化变更",children:[]}]},{level:2,title:"挂件更改",slug:"挂件更改",children:[]}],git:{createdTime:164597585e4,updatedTime:164597585e4,contributors:[{name:"Mr.Hope",email:"zhangbowang1998@gmail.com",commits:1}]},readingTime:{minutes:2.45,words:734},filePathRelative:"migration/client.md"}},6965:(e,i,a)=>{a.r(i),a.d(i,{default:()=>s});var o=a(8917);const l=(0,o.uE)('<p>V1 有数处更改，破坏性变更详见 <a href="#%E5%88%9D%E5%A7%8B%E5%8C%96%E5%8F%98%E6%9B%B4">初始化变更</a> 和 <a href="#%E6%8C%82%E4%BB%B6%E6%9B%B4%E6%94%B9">挂件更改</a>。</p><h2 id="新功能" tabindex="-1"><a class="header-anchor" href="#新功能" aria-hidden="true">#</a> 新功能</h2><ul><li>Emoji 预设支持: 你现在可以直接填入 Emoji 预设链接完成 Emoji 的配置</li><li>多 Emoji 选项卡: 现在 Emoji 可以包含含有多个选项卡，以便添加多种不同类型的 Emoji</li><li>图片上传优化: 我们添加了图片上传按钮，以提示访客可以上传图片</li><li>拖拽支持: 你现在可以直接将文字或图片拖拽到评论框中完成文字的输入或图片的添加。</li><li>响应式与 SPA: 现在 Waline 将返回一个响应式的实例，并支持 SPA 应用，详见 <a href="#%E5%93%8D%E5%BA%94%E5%BC%8F">响应式</a></li></ul><h2 id="体积减小" tabindex="-1"><a class="header-anchor" href="#体积减小" aria-hidden="true">#</a> 体积减小</h2><p>v1 版本是基于 Vue 与 TypeScript 的完全重写，所以大小从 78.4kb 减小至 54.0kb (gzip)。</p><h2 id="选项变更" tabindex="-1"><a class="header-anchor" href="#选项变更" aria-hidden="true">#</a> 选项变更</h2><p>以下选项标记为 <code>废弃</code>，相关兼容兼容将在 v2 移除。</p><ul><li><p><code>placeholder</code> → 请通过 <code>locale.placeholder</code> 选项设置</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此改动是为了让默认的 placeholder 可以适配多语言</p></div></li><li><p><code>emojiCDN</code>、<code>emojiMaps</code>→ 请使用新的 <code>emoji</code> 选项</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>我们带来了多 Emoji 选项卡和 Emoji 预设支持。Emoji 配置将对大多数使用者来说更为简单。</p></div></li><li><p><code>anonymous</code> → 请使用新的 <code>login</code> 选项</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>由于 Waline 带来了登录支持，我们将先前的</p><ul><li><code>anonymous: undefined</code>:匿名评论和登录均可</li><li><code>anonymous: true</code>: 禁用登录</li><li><code>anonymous: false</code>: 无法匿名评论，即只有登录后才能评论</li></ul><p>改为了</p><ul><li><code>login: &#39;enable&#39;</code>: 启用登录</li><li><code>login: &#39;disable&#39;</code>: 禁用登录</li><li><code>login: &#39;force&#39;</code>: 强制登录</li></ul><p>此选项应该更加直观。</p></div></li></ul><h2 id="选项重命名" tabindex="-1"><a class="header-anchor" href="#选项重命名" aria-hidden="true">#</a> 选项重命名</h2><p>原先的选项存在含义不明，Chinglish 或命名不一致等问题。下列是重命名的选项，其行为与先前保持一致。旧选项同样标记为 <code>废弃</code>，相关兼容兼容将在 v2 移除。</p><ul><li><p><code>langmode</code> → 重命名为 <code>locale</code></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此改动改进了选项的英文翻译。</p></div></li><li><p><code>requiredFields</code> → 重命名为 <code>requiredMeta</code></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>此改动是为了与 <code>meta</code> 选项进行对齐。</p></div></li></ul><h2 id="行为变更" tabindex="-1"><a class="header-anchor" href="#行为变更" aria-hidden="true">#</a> 行为变更</h2><h3 id="响应式" tabindex="-1"><a class="header-anchor" href="#响应式" aria-hidden="true">#</a> 响应式</h3><p>现在 Waline 将是完全响应式的，调用 Waline 将会返回一个 <code>WalineInstance</code> 实例，你可以通过调用 <code>WalineInstance</code> 上的 <code>update()</code> 方法更新 Waline 的选项，或是使用 <code>WalineInstance</code> 上的 <code>destroy()</code> 方法销毁实例。</p>',14),t=(0,o.Uk)("此改变将使 Waline 支持 SPA 应用，详情请见 "),c=(0,o.Uk)("SPA 支持"),n=(0,o.Uk)("。"),d=(0,o.uE)('<h3 id="初始化变更" tabindex="-1"><a class="header-anchor" href="#初始化变更" aria-hidden="true">#</a> 初始化变更</h3><p>由于 Waline 函数现在返回一个 Waline 实例，我们在 Waline 初始化时加强了检测。如果 Waline 不能正确的挂载。我们会返回 <code>WalineErrorInstance</code> 实例，实例上只有一个 <code>errMsg</code> 表明初始化的错误原因。</p><div class="custom-container warning"><p class="custom-container-title">BREAKING CHANGE</p><p>如果你只是想让 Waline 更新页面内的评论数与浏览量，而<strong>不需要 Waline 挂载到当前页面时</strong>，请<strong>不要设置选项 <code>el</code></strong>。</p></div><h2 id="挂件更改" tabindex="-1"><a class="header-anchor" href="#挂件更改" aria-hidden="true">#</a> 挂件更改</h2><div class="custom-container warning"><p class="custom-container-title">BREAKING CHANGE</p><p><code>RecentComments</code> 现在将返回 <code>Promise &lt;{comment: commentData[], destroy: () =&gt; void}&gt;</code> 而不是 <code>Promise&lt;CommentData[]&gt;</code>。</p></div>',5),r={},s=(0,a(6959).Z)(r,[["render",function(e,i){const a=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o._)("p",null,[t,(0,o.Wm)(a,{to:"/guide/client/spa.html"},{default:(0,o.w5)((()=>[c])),_:1}),n]),d],64)}]])}}]);