"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7608],{9083:(t,a,e)=>{e.r(a),e.d(a,{data:()=>r});const r={key:"v-74a28670",path:"/guide/client/avatar.html",title:"头像配置",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="头像配置" tabindex="-1"><a class="header-anchor" href="#头像配置" aria-hidden="true">#</a> 头像配置</h1>\n<p>Waline 目前使用 [Libravatar][1] 获取评论列表头像。</p>\n<p>Libravatar 是自由、开放原始码的头像服务，支持联邦托管并与 [Gravatar][2] 兼容。</p>\n<p>用户需要请自行登录或注册 [Libravatar][1]，然后设置或修改自己的头像。评论的时候，留下在 [Libravatar][1] 注册时所使用的邮箱即可。当未能从 Libravatar 查询到头像时，将会自动转为从 [Gravatar][2] 查询。</p>\n',headers:[{level:2,title:"配置方式",slug:"配置方式",children:[]},{level:2,title:"可选值",slug:"可选值",children:[]},{level:2,title:"注意事项",slug:"注意事项",children:[]}],filePathRelative:"guide/client/avatar.md",git:{updatedTime:162993858e4,contributors:[]}}},2438:(t,a,e)=>{e.r(a),e.d(a,{default:()=>U});var r=e(8917);const n=(0,r._)("h1",{id:"头像配置",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#头像配置","aria-hidden":"true"},"#"),(0,r.Uk)(" 头像配置")],-1),d=(0,r.Uk)("Waline 目前使用 "),c={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("Libravatar"),l=(0,r.Uk)(" 获取评论列表头像。"),i=(0,r.Uk)("Libravatar 是自由、开放原始码的头像服务，支持联邦托管并与 "),o={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("Gravatar"),h=(0,r.Uk)(" 兼容。"),g=(0,r.Uk)("用户需要请自行登录或注册 "),v={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("Libravatar"),u=(0,r.Uk)("，然后设置或修改自己的头像。评论的时候，留下在 "),f={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},k=(0,r.Uk)("Libravatar"),m=(0,r.Uk)(" 注册时所使用的邮箱即可。当未能从 Libravatar 查询到头像时，将会自动转为从 "),x={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("Gravatar"),w=(0,r.Uk)(" 查询。"),_=(0,r.uE)('<h2 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h2><p>你可以通过 <code>avatar</code> 选项配置默认头像，如:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  avatar<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="可选值" tabindex="-1"><a class="header-anchor" href="#可选值" aria-hidden="true">#</a> 可选值</h2><table><thead><tr><th style="text-align:center;">参数值</th><th style="text-align:center;">表现形式</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40" alt="Libavatar 官方图形"></td><td>Libavatar 官方图形</td></tr><tr><td style="text-align:center;"><code>&#39;mp&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=mp" alt="神秘人(一个灰白头像)"></td><td>神秘人(一个灰白头像)</td></tr><tr><td style="text-align:center;"><code>&#39;identicon&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=identicon" alt="抽象几何图形"></td><td>抽象几何图形</td></tr><tr><td style="text-align:center;"><code>&#39;monsterid&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=monsterid" alt="小怪物"></td><td>小怪物</td></tr><tr><td style="text-align:center;"><code>&#39;wavatar&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=wavatar" alt="用不同面孔和背景组合生成的头像"></td><td>用不同面孔和背景组合生成的头像</td></tr><tr><td style="text-align:center;"><code>&#39;retro&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=retro" alt="八位像素复古头像"></td><td>八位像素复古头像</td></tr><tr><td style="text-align:center;"><code>&#39;robohash&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=robohash" alt="机器人"></td><td>一种具有不同颜色、面部等的机器人</td></tr><tr><td style="text-align:center;"><code>&#39;hide&#39;</code></td><td style="text-align:center;">N/A</td><td>不显示头像</td></tr></tbody></table><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意，尽管诸如谷歌、QQ 等邮件提供商对电子邮件不区分大小写，但是您仍需要保证 Gravatar 注册的邮箱和填入的邮箱地址对应。</p><p>虽然全球大部分大型邮件提供商均不对电子邮件用户名区分大小写，但是根据 RFC 5231 的规定，电子邮件是区分大小写的。</p><p>这意味着邮件提供商可以将 <code>abc@xxx.com</code> 和 <code>ABC@xxx.com</code> 视为不同的账号，而且也的确有邮件提供商这样处理。</p><p>所以为防止使用此类邮件提供商的用户无法收到邮件或显示错误的头像，我们并不会对邮箱进行大小写转换。</p></div>',7),U={render:function(t,a){const e=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,(0,r._)("p",null,[d,(0,r._)("a",c,[s,(0,r.Wm)(e)]),l]),(0,r._)("p",null,[i,(0,r._)("a",o,[p,(0,r.Wm)(e)]),h]),(0,r._)("p",null,[g,(0,r._)("a",v,[b,(0,r.Wm)(e)]),u,(0,r._)("a",f,[k,(0,r.Wm)(e)]),m,(0,r._)("a",x,[y,(0,r.Wm)(e)]),w]),_],64)}}}}]);