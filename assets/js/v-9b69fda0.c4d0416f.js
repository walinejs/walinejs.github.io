(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9301],{6929:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-9b69fda0",path:"/client/i18n.html",title:"多语言支持",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"基本用法",slug:"基本用法",children:[]},{level:2,title:"自定义语言",slug:"自定义语言",children:[]}],filePathRelative:"client/i18n.md",git:{updatedTime:1622044313e3,contributors:[]}}},1104:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(8917).uE)('<h1 id="多语言支持"><a class="header-anchor" href="#多语言支持">#</a> 多语言支持</h1><p>Waline 的多语言翻译以及字段都是沿用了 Valine 的配置，在此非常感谢！</p><h2 id="基本用法"><a class="header-anchor" href="#基本用法">#</a> 基本用法</h2><p>Waline 支持多语言。默认内置:</p><ul><li><code>zh</code></li><li><code>zh-CN</code></li><li><code>zh-TW</code></li><li><code>en</code></li><li><code>en-US</code></li><li><code>jp</code></li><li><code>jp-JP</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span> <span class="token comment">// 设置这里就 ok</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="自定义语言"><a class="header-anchor" href="#自定义语言">#</a> 自定义语言</h2><p>自定义语言只需两步:</p><ol><li>定义 <code>locale</code></li><li>初始化 Waline</li></ol><blockquote><p>请严格按照下面的 <code>locale</code> 格式书写内容:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.定义 locale</span>\n<span class="token keyword">var</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  nick<span class="token operator">:</span> <span class="token string">&#39;昵称&#39;</span><span class="token punctuation">,</span>\n  nickError<span class="token operator">:</span> <span class="token string">&#39;昵称不能少于3个字符&#39;</span><span class="token punctuation">,</span>\n  mail<span class="token operator">:</span> <span class="token string">&#39;邮箱&#39;</span><span class="token punctuation">,</span>\n  mailError<span class="token operator">:</span> <span class="token string">&#39;请填写正确的邮件地址&#39;</span><span class="token punctuation">,</span>\n  link<span class="token operator">:</span> <span class="token string">&#39;网址&#39;</span><span class="token punctuation">,</span>\n  placeholder<span class="token operator">:</span> <span class="token string">&#39;欢迎评论&#39;</span><span class="token punctuation">,</span>\n  sofa<span class="token operator">:</span> <span class="token string">&#39;来发评论吧~&#39;</span><span class="token punctuation">,</span>\n  submit<span class="token operator">:</span> <span class="token string">&#39;提交&#39;</span><span class="token punctuation">,</span>\n  reply<span class="token operator">:</span> <span class="token string">&#39;回复&#39;</span><span class="token punctuation">,</span>\n  cancelReply<span class="token operator">:</span> <span class="token string">&#39;取消回复&#39;</span><span class="token punctuation">,</span>\n  comment<span class="token operator">:</span> <span class="token string">&#39;评论&#39;</span><span class="token punctuation">,</span>\n  more<span class="token operator">:</span> <span class="token string">&#39;加载更多...&#39;</span><span class="token punctuation">,</span>\n  preview<span class="token operator">:</span> <span class="token string">&#39;预览&#39;</span><span class="token punctuation">,</span>\n  emoji<span class="token operator">:</span> <span class="token string">&#39;表情&#39;</span><span class="token punctuation">,</span>\n  expand<span class="token operator">:</span> <span class="token string">&#39;查看更多...&#39;</span><span class="token punctuation">,</span>\n  seconds<span class="token operator">:</span> <span class="token string">&#39;秒前&#39;</span><span class="token punctuation">,</span>\n  minutes<span class="token operator">:</span> <span class="token string">&#39;分钟前&#39;</span><span class="token punctuation">,</span>\n  hours<span class="token operator">:</span> <span class="token string">&#39;小时前&#39;</span><span class="token punctuation">,</span>\n  days<span class="token operator">:</span> <span class="token string">&#39;天前&#39;</span><span class="token punctuation">,</span>\n  now<span class="token operator">:</span> <span class="token string">&#39;刚刚&#39;</span><span class="token punctuation">,</span>\n  uploading<span class="token operator">:</span> <span class="token string">&#39;正在上传&#39;</span><span class="token punctuation">,</span>\n  login<span class="token operator">:</span> <span class="token string">&#39;登录&#39;</span><span class="token punctuation">,</span>\n  logout<span class="token operator">:</span> <span class="token string">&#39;退出&#39;</span><span class="token punctuation">,</span>\n  admin<span class="token operator">:</span> <span class="token string">&#39;博主&#39;</span><span class="token punctuation">,</span>\n  word<span class="token operator">:</span> <span class="token string">&#39;字&#39;</span><span class="token punctuation">,</span>\n  wordHint<span class="token operator">:</span> <span class="token string">&#39;评论字数应在 $0 到 $1 字之间！\\n当前字数：$2&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 2.初始化 Waline</span>\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  path<span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>\n  locale<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>',11),e={render:function(n,s){return p}}}}]);