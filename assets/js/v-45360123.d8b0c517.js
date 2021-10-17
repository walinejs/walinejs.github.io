"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4011],{4645:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-45360123",path:"/guide/client/i18n.html",title:"多语言支持",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1>\n<p>Waline 内置多种语言支持，你也可以自定义 Waline 的语言配置。</p>\n',headers:[{level:2,title:"设置语言",slug:"设置语言",children:[]},{level:2,title:"自定义语言",slug:"自定义语言",children:[{level:3,title:"locale 选项",slug:"locale-选项",children:[]},{level:3,title:"例子",slug:"例子",children:[]}]}],filePathRelative:"guide/client/i18n.md",git:{updatedTime:1634442456e3,contributors:[]}}},6141:(n,a,s)=>{s.r(a),s.d(a,{default:()=>d});var e=s(8917);const o=(0,e.uE)('<h1 id="多语言支持" tabindex="-1"><a class="header-anchor" href="#多语言支持" aria-hidden="true">#</a> 多语言支持</h1><p>Waline 内置多种语言支持，你也可以自定义 Waline 的语言配置。</p><h2 id="设置语言" tabindex="-1"><a class="header-anchor" href="#设置语言" aria-hidden="true">#</a> 设置语言</h2><p>你可以通过 <code>lang</code> 选项设置 Waline 所用的语言，支持的语言有:</p><ul><li><code>zh</code></li><li><code>zh-CN</code></li><li><code>zh-TW</code></li><li><code>en</code></li><li><code>en-US</code></li><li><code>jp</code></li><li><code>jp-JP</code></li></ul><p>例如:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',7),p={class:"custom-container tip"},t=(0,e._)("p",{class:"custom-container-title"},"提示",-1),c=(0,e.Uk)("如果你想要帮助 Waline 添加更多语言支持，我们欢迎你发送 PR 到 "),l={href:"https://github.com/walinejs/waline/tree/main/packages/client/src/config/i18n",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("client/config/i18n"),r=(0,e.Uk)("。"),u=(0,e.uE)('<h2 id="自定义语言" tabindex="-1"><a class="header-anchor" href="#自定义语言" aria-hidden="true">#</a> 自定义语言</h2><p>你可以通过 <code>locale</code> 选项自定义语言，或者设置其中的几项对现有的 UI 文字进行覆盖。</p><h3 id="locale-选项" tabindex="-1"><a class="header-anchor" href="#locale-选项" aria-hidden="true">#</a> <code>locale</code> 选项</h3><ul><li><p>UI 相关:</p><ul><li><code>nick</code>: 昵称</li><li><code>mail</code>: 邮箱</li><li><code>link</code>: 网址</li><li><code>placeholder</code>: 评论框默认文字</li><li><code>sofa</code>: 评论区为空时的显示文字</li><li><code>submit</code>: 提交按钮文字</li><li><code>comment</code>: 评论按钮文字</li><li><code>more</code>: 加载更多按钮文字</li><li><code>uploading</code>: 上传时显示文字</li><li><code>login</code>: 登录按钮文字</li><li><code>admin</code>: 管理员的标签</li><li><code>word</code>: 字</li></ul><div class="custom-container warning"><p class="custom-container-title">注意</p><p>此分类内的文字会显示在页面上，所以你应该仔细配置它们。</p></div></li><li><p>提示信息相关:</p><ul><li><code>nickError</code>: 昵称不满足条件的错误信息</li><li><code>mailError</code>: 邮箱不满足条件的错误信息</li><li><code>wordHint</code>: 评论字数的错误提示，其中 <code>$0</code> <code>$1</code> <code>$2</code> 会被自动替换为字数允许下限、字数允许上限、当前字数。</li></ul></li><li><p>评论时间相关:</p><ul><li><code>seconds</code>: 秒前</li><li><code>minutes</code>: 分钟前</li><li><code>hours</code>: 小时前</li><li><code>days</code>: 天前</li><li><code>now</code>: 刚刚</li></ul></li><li><p>无障碍相关:</p><ul><li><code>reply</code>: 回复按钮的标签文字</li><li><code>cancelReply</code>: 取消回复按钮的标签文字</li><li><code>preview</code>: 预览按钮的标签文字</li><li><code>emoji</code>: 表情按钮的标签文字</li><li><code>uploadImage</code>: 上传图片按钮的标签文字</li><li><code>logout</code>: 退出登录按钮的标签文字</li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><p>这些文字只用于无障碍服务增强，不会显示在页面中。</p></div></li></ul><h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// 中文默认</span>\n<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  nick<span class="token operator">:</span> <span class="token string">&#39;昵称&#39;</span><span class="token punctuation">,</span>\n  nickError<span class="token operator">:</span> <span class="token string">&#39;昵称不能少于3个字符&#39;</span><span class="token punctuation">,</span>\n  mail<span class="token operator">:</span> <span class="token string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>\n  mailError<span class="token operator">:</span> <span class="token string">&#39;请填写正确的邮件地址&#39;</span><span class="token punctuation">,</span>\n  link<span class="token operator">:</span> <span class="token string">&#39;网址&#39;</span><span class="token punctuation">,</span>\n  placeholder<span class="token operator">:</span> <span class="token string">&#39;欢迎评论&#39;</span><span class="token punctuation">,</span>\n  sofa<span class="token operator">:</span> <span class="token string">&#39;来发评论吧~&#39;</span><span class="token punctuation">,</span>\n  submit<span class="token operator">:</span> <span class="token string">&#39;提交&#39;</span><span class="token punctuation">,</span>\n  reply<span class="token operator">:</span> <span class="token string">&#39;回复&#39;</span><span class="token punctuation">,</span>\n  cancelReply<span class="token operator">:</span> <span class="token string">&#39;取消回复&#39;</span><span class="token punctuation">,</span>\n  comment<span class="token operator">:</span> <span class="token string">&#39;评论&#39;</span><span class="token punctuation">,</span>\n  more<span class="token operator">:</span> <span class="token string">&#39;加载更多...&#39;</span><span class="token punctuation">,</span>\n  preview<span class="token operator">:</span> <span class="token string">&#39;预览&#39;</span><span class="token punctuation">,</span>\n  emoji<span class="token operator">:</span> <span class="token string">&#39;表情&#39;</span><span class="token punctuation">,</span>\n  uploadImage<span class="token operator">:</span> <span class="token string">&#39;上传图片&#39;</span><span class="token punctuation">,</span>\n  seconds<span class="token operator">:</span> <span class="token string">&#39;秒前&#39;</span><span class="token punctuation">,</span>\n  minutes<span class="token operator">:</span> <span class="token string">&#39;分钟前&#39;</span><span class="token punctuation">,</span>\n  hours<span class="token operator">:</span> <span class="token string">&#39;小时前&#39;</span><span class="token punctuation">,</span>\n  days<span class="token operator">:</span> <span class="token string">&#39;天前&#39;</span><span class="token punctuation">,</span>\n  now<span class="token operator">:</span> <span class="token string">&#39;刚刚&#39;</span><span class="token punctuation">,</span>\n  uploading<span class="token operator">:</span> <span class="token string">&#39;正在上传&#39;</span><span class="token punctuation">,</span>\n  login<span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>\n  logout<span class="token operator">:</span> <span class="token string">&#39;退出&#39;</span><span class="token punctuation">,</span>\n  admin<span class="token operator">:</span> <span class="token string">&#39;博主&#39;</span><span class="token punctuation">,</span>\n  word<span class="token operator">:</span> <span class="token string">&#39;字&#39;</span><span class="token punctuation">,</span>\n  wordHint<span class="token operator">:</span> <span class="token string">&#39;评论字数应在 $0 到 $1 字之间！\\n当前字数：$2&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>\n  path<span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  locale<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',6),d={render:function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e._)("div",p,[t,(0,e._)("p",null,[c,(0,e._)("a",l,[i,(0,e.Wm)(s)]),r])]),u],64)}}}}]);