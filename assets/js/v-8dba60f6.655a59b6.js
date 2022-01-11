"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2605],{4305:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-8dba60f6",path:"/advanced/why.html",title:"源始",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Valine",slug:"valine",children:[]},{level:2,title:"Valine 的问题",slug:"valine-的问题",children:[{level:3,title:"源码不开放",slug:"源码不开放",children:[]},{level:3,title:"XSS 安全",slug:"xss-安全",children:[]},{level:3,title:"隐私泄露",slug:"隐私泄露",children:[]},{level:3,title:"阅读统计篡改",slug:"阅读统计篡改",children:[]}]},{level:2,title:"Waline 的诞生",slug:"waline-的诞生",children:[]}],filePathRelative:"advanced/why.md",git:{updatedTime:1641861984e3,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},8078:(n,a,s)=>{s.r(a),s.d(a,{default:()=>S});var e=s(8917);const t=(0,e.uE)('<h1 id="源始" tabindex="-1"><a class="header-anchor" href="#源始" aria-hidden="true">#</a> 源始</h1><h2 id="valine" tabindex="-1"><a class="header-anchor" href="#valine" aria-hidden="true">#</a> Valine</h2><p>Valine 是一款样式精美，操作简单，部署高效的评论系统。第一次接触便被它精美的样式，无服务端的特性给吸引了。它不含服务端，前端直接和 LeanCloud 存储服务交互，真是太酷了！但是随着深入了解，我发现它存在着一些问题。</p><h2 id="valine-的问题" tabindex="-1"><a class="header-anchor" href="#valine-的问题" aria-hidden="true">#</a> Valine 的问题</h2><h3 id="源码不开放" tabindex="-1"><a class="header-anchor" href="#源码不开放" aria-hidden="true">#</a> 源码不开放</h3><p>作者不知为何从 <code>1.4.0</code> 版本开始只推送编译后的文件到 GitHub 仓库中，源文件停止更新。可能是被开源伤了心吧。对于我这种想增加或者修改功能的用户来说，这个问题就有点难受了。</p><h3 id="xss-安全" tabindex="-1"><a class="header-anchor" href="#xss-安全" aria-hidden="true">#</a> XSS 安全</h3><p>从很早的版本开始就有用户报告了 Valine 的 XSS 问题，社区也在使用各种方法在修复这些问题。包括增加验证码、前端 XSS 过滤等方式。不过后来作者才明白，前端的一切验证都只能防君子，所以又去除了验证码之类的限制。</p><p>现有的逻辑里，前端发布评论的时候会将 Markdown 转换成 HTML 然后走一下前端的一个 XSS 过滤方法最后提交到 LeanCloud 中。从 LeanCloud 中拿到数据之后因为是 HTML 直接插入进行显示即可。很明显，这个流程是存在问题的。只要直接提交的是 HTML 而且拿到 HTML 之后直接进行展示的话，XSS 从根本上是无法根除的。</p><div class="custom-container tip"><p class="custom-container-title">根本的解决办法</p><p>针对存储型的 XSS 攻击，我们可以使用转义 HTML 编码一劳永逸的解决。只需效仿早前 BBCode 的做法，提交到数据库的是 Markdown 内容。前端读取到内容对所有 HTML 进行编码后再进行 Markdown 转换后展示。</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">encodeForHTML</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span> <span class="token operator">+</span> str<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&amp;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;amp;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;lt;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;gt;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&quot;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;quot;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&#39;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;#x27;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;#x2F;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>由于 Serverless 攻击者是可以直达存储阶段，所以数据存储之前的一切防范是无效的，只能在读取展示过程处理。由于所有的 HTML 转义后无法解析，Markdown 相当于我们根据自定义的语法解析成 HTML，保证转换后的 HTML 没有被插入的机会。由于 Valine 没有开放源代码，所以无法进行 Pull Request。</p></div><p>由于上述办法会完全将用户限制在 Markdown 的范围内，目前 Waline 在客户端自 <code>0.15.0</code> 后引入了 <code>DOMPurify</code> 来阻止 XSS。除常规的 XSS 过滤外，针对性的禁用了 <code>&lt;form&gt;</code> 和 <code>&lt;input&gt;</code>，同时禁用了自动拖动属性与媒体的自动播放。同时，所有的外部链接均会被处理，以 <code>noopener noreferrer</code> 的形式在新窗口打开。</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>我们会密切关注这一改动，如果你在使用中遇到了可以绕过现有防护的不友善评论，欢迎反馈给我们。</p></div><h3 id="隐私泄露" tabindex="-1"><a class="header-anchor" href="#隐私泄露" aria-hidden="true">#</a> 隐私泄露</h3><p>攻击者除了可以任意存储，也可以任意读取，数据库的字段开放读取权限后，该字段的内容对攻击者是完全透明的。</p>',14),p=(0,e.Uk)("在评论数据中，IP 和邮箱两个字段包含了用户的敏感数据。灯大甚至专门写了一篇文章来批判该问题 "),o={href:"https://ttys3.net/post/hugo/please-stop-using-valine-js-comment-system-until-it-fixed-the-privacy-leaking-problem/",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("《请马上停止使用 Valine.js 评论系统，除非它修复了用户隐私泄露问题》"),c=(0,e.Uk)("。甚至掘金社区在早期使用 LeanCloud 的时候也暴出过 "),i={href:"https://m.weibo.cn/detail/4568007327622344?cid=4568044392682999",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("泄露用户手机号"),u=(0,e.Uk)(" 的安全问题。"),k=(0,e._)("p",null,[(0,e.Uk)("为了规避这个问题，Valine 作者增加了 "),(0,e._)("code",null,"recordIP"),(0,e.Uk)(" 配置用来设置是否允许记录用户 IP。由于无服务端，只能通过不存储的方式解决。")],-1),d=(0,e._)("p",null,"该配置项仍存在一个问题: 记录配置权在网站，评论者无权管理自己的隐私。",-1),g=(0,e._)("p",null,"邮箱泄露是另一个重大隐私问题。在前端计算并上报用户邮箱的 md5 用来获取 Gravatar 头像是完全可行的。但是如果需要当评论被回复时发送邮件通知，就不可避免的要存储用户邮箱的原始值。这个问题理论上可以通过 RSA 加密来解决，私钥存储在 LeanCloud 的环境变量中，客户端同时上报邮箱 md5 和公钥加密后的邮箱，LeanCloud 在发送邮件通知时在云函数中通过环境中的私钥解密得到用户邮箱。但是考虑到前端 RSA 加密库的体积与性能，实际应用可行性很小。增加一层服务端，通过服务端过滤敏感信息是一个较优的做法。",-1),h=(0,e._)("h3",{id:"阅读统计篡改",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#阅读统计篡改","aria-hidden":"true"},"#"),(0,e.Uk)(" 阅读统计篡改")],-1),m=(0,e.Uk)("Valien 1.2.0 增加了文章阅读统计的功能，用户访问页面就会在后台 Counter 表中根据 url 记录访问次数。由于每次访问页面都需要更新数据，所以在权限上必须设置成可写，才能进行后续的字段更新。这样就造成了一个问题，实际上该条数据是可以被更新成任意值的。感兴趣的同学可以打开 "),x={href:"https://valine.js.org/visitor.html",target:"_blank",rel:"noopener noreferrer"},f=(0,e.Uk)("https://valine.js.org/visitor.html"),v=(0,e.Uk)(" 官网页面后进入控制台输入以下代码试试。试完了记得把数改回去哈~"),b=(0,e.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AV<span class="token punctuation">.</span>Query</span><span class="token punctuation">(</span><span class="token string">&#39;Counter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> counter<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/visitor.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlocation<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>值得庆幸的是 <code>time</code> 字段的值是 Number 类型的，这样其它的值无法插入。如果 <code>time</code> 字段是字符串类型会产生新的 XSS 漏洞。该问题有一个可行解决办法，就是不使用次数累加的存储方式。更改为每次访问都存储一条只读的访问记录，读取的时候使用 <code>count()</code> 方法进行统计。这样所有数据都是只读的，解决了篡改的问题。这种解决方案也存在问题: 数据量比较大时对查询会造成一定压力。</p><p>如果需要保持原数据结构，只能增加一层服务端进行修改权限的隔离。</p><h2 id="waline-的诞生" tabindex="-1"><a class="header-anchor" href="#waline-的诞生" aria-hidden="true">#</a> Waline 的诞生</h2><p>基于以上原因，Waline 横空出世了。Waline 最初的目标仅仅是为 Valine 增加上服务端中间层，但是由于 Valine 的不开源所以只能连带前端也实现一遍。当然前端的很多代码和逻辑为了和 Valine 的配置保持一致都有参考 Valine。甚至在名字上，我也是从 Valine 上衍生的，让大家能明白这个项目是 Valine 的衍生版。</p><p>增加了服务端除了解决了上述的安全问题，之前 Valine 受限于无服务端的很多功能也可以实现了。包括但不限于邮件通知、垃圾评论过滤等。</p>',6),w={},S=(0,s(6959).Z)(w,[["render",function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("p",null,[p,(0,e._)("a",o,[l,(0,e.Wm)(s)]),c,(0,e._)("a",i,[r,(0,e.Wm)(s)]),u]),k,d,g,h,(0,e._)("p",null,[m,(0,e._)("a",x,[f,(0,e.Wm)(s)]),v]),b],64)}]])}}]);