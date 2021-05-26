(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9688],{7421:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-09c7ed44",path:"/en/client/i18n.html",title:"i18n Support",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Basic Usage",slug:"basic-usage",children:[]},{level:2,title:"Customize",slug:"customize",children:[]}],filePathRelative:"en/client/i18n.md",git:{updatedTime:1622031844e3,contributors:[]}}},7142:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>e});const p=(0,a(8917).uE)('<h1 id="i18n-support"><a class="header-anchor" href="#i18n-support">#</a> i18n Support</h1><p>Waline&#39;s multi-language translations and fields all follow Valine&#39;s configuration, thank you very much!</p><h2 id="basic-usage"><a class="header-anchor" href="#basic-usage">#</a> Basic Usage</h2><p>Waline Multilingual support has been supported.<br> Default built-in:</p><ul><li><code>zh</code></li><li><code>zh-CN</code></li><li><code>zh-TW</code></li><li><code>en</code></li><li><code>en-US</code></li><li><code>jp</code></li><li><code>jp-JP</code></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span> <span class="token comment">// setting here</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="customize"><a class="header-anchor" href="#customize">#</a> Customize</h2><p>Customization only takes two steps:</p><ol><li>Define <code>langName</code> and <code>locale</code></li><li>Initialization Waline</li></ol><blockquote><p>Please write in strict accordance with the following <code>locale</code> format:</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.Define langName and locale</span>\n<span class="token keyword">var</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  nick<span class="token operator">:</span> <span class="token string">&#39;NickName&#39;</span><span class="token punctuation">,</span>\n  nickError<span class="token operator">:</span> <span class="token string">&#39;NickName cannot be less than 3 bytes.&#39;</span><span class="token punctuation">,</span>\n  mail<span class="token operator">:</span> <span class="token string">&#39;E-Mail&#39;</span><span class="token punctuation">,</span>\n  mailError<span class="token operator">:</span> <span class="token string">&#39;Please confirm your email address.&#39;</span><span class="token punctuation">,</span>\n  link<span class="token operator">:</span> <span class="token string">&#39;Website&#39;</span><span class="token punctuation">,</span>\n  placeholder<span class="token operator">:</span> <span class="token string">&#39;Comment here...&#39;</span><span class="token punctuation">,</span>\n  sofa<span class="token operator">:</span> <span class="token string">&#39;No comment yet.&#39;</span><span class="token punctuation">,</span>\n  submit<span class="token operator">:</span> <span class="token string">&#39;Submit&#39;</span><span class="token punctuation">,</span>\n  reply<span class="token operator">:</span> <span class="token string">&#39;Reply&#39;</span><span class="token punctuation">,</span>\n  cancelReply<span class="token operator">:</span> <span class="token string">&#39;Cancel reply&#39;</span><span class="token punctuation">,</span>\n  comment<span class="token operator">:</span> <span class="token string">&#39;Comments&#39;</span><span class="token punctuation">,</span>\n  more<span class="token operator">:</span> <span class="token string">&#39;Load More...&#39;</span><span class="token punctuation">,</span>\n  preview<span class="token operator">:</span> <span class="token string">&#39;Preview&#39;</span><span class="token punctuation">,</span>\n  emoji<span class="token operator">:</span> <span class="token string">&#39;Emoji&#39;</span><span class="token punctuation">,</span>\n  expand<span class="token operator">:</span> <span class="token string">&#39;See more....&#39;</span><span class="token punctuation">,</span>\n  seconds<span class="token operator">:</span> <span class="token string">&#39;seconds ago&#39;</span><span class="token punctuation">,</span>\n  minutes<span class="token operator">:</span> <span class="token string">&#39;minutes ago&#39;</span><span class="token punctuation">,</span>\n  hours<span class="token operator">:</span> <span class="token string">&#39;hours ago&#39;</span><span class="token punctuation">,</span>\n  days<span class="token operator">:</span> <span class="token string">&#39;days ago&#39;</span><span class="token punctuation">,</span>\n  now<span class="token operator">:</span> <span class="token string">&#39;just now&#39;</span><span class="token punctuation">,</span>\n  uploading<span class="token operator">:</span> <span class="token string">&#39;Uploading&#39;</span><span class="token punctuation">,</span>\n  login<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>\n  logout<span class="token operator">:</span> <span class="token string">&#39;logout&#39;</span><span class="token punctuation">,</span>\n  admin<span class="token operator">:</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">,</span>\n  word<span class="token operator">:</span> <span class="token string">&#39;Words&#39;</span><span class="token punctuation">,</span>\n  wordHint<span class="token operator">:</span>\n    <span class="token string">&#39;Please input comments between $0 and $1 words!\\n Current word number: $2&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment">// 2.Initialization Waline</span>\n<span class="token keyword">new</span> <span class="token class-name">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  path<span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>\n  locale<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br></div></div>',11),e={render:function(n,s){return p}}}}]);