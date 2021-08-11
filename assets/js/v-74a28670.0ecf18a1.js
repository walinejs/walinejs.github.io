(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7608],{9083:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>r});const r={key:"v-74a28670",path:"/guide/client/avatar.html",title:"头像配置",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="头像配置" tabindex="-1"><a class="header-anchor" href="#头像配置" aria-hidden="true">#</a> 头像配置</h1>\n<p>Waline 目前使用 [Gravatar][1] 获取评论列表头像。</p>\n<blockquote>\n<p>感谢 <a href="https://cdn.geekzu.org/cached.html" target="_blank" rel="noopener noreferrer">极客族<OutboundLink/></a>、<a href="https://v2ex.com" target="_blank" rel="noopener noreferrer">v2ex<OutboundLink/></a> 提供的镜像服务。</p>\n</blockquote>\n<p>用户需要请自行登录或注册 [Gravatar][1]，然后设置或修改自己的头像。评论的时候，留下在 [Gravatar][1] 注册时所使用的邮箱即可。</p>\n',headers:[{level:2,title:"配置方式",slug:"配置方式",children:[]},{level:2,title:"可选值",slug:"可选值",children:[]},{level:2,title:"注意事项",slug:"注意事项",children:[]}],filePathRelative:"guide/client/avatar.md",git:{updatedTime:1628645986e3,contributors:[]}}},6040:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>z});var r=a(8917);const n=(0,r.Wm)("h1",{id:"头像配置",tabindex:"-1"},[(0,r.Wm)("a",{class:"header-anchor",href:"#头像配置","aria-hidden":"true"},"#"),(0,r.Uk)(" 头像配置")],-1),d=(0,r.Uk)("Waline 目前使用 "),c={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("Gravatar"),l=(0,r.Uk)(" 获取评论列表头像。"),o=(0,r.Uk)("感谢 "),i={href:"https://cdn.geekzu.org/cached.html",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("极客族"),h=(0,r.Uk)("、"),g={href:"https://v2ex.com",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("v2ex"),k=(0,r.Uk)(" 提供的镜像服务。"),m=(0,r.Uk)("用户需要请自行登录或注册 "),v={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},f=(0,r.Uk)("Gravatar"),b=(0,r.Uk)("，然后设置或修改自己的头像。评论的时候，留下在 "),x={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("Gravatar"),W=(0,r.Uk)(" 注册时所使用的邮箱即可。"),U=(0,r.uE)('<h2 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h2><p>你可以通过 <code>avatar</code> 选项配置默认头像，如:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  avatar<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="可选值" tabindex="-1"><a class="header-anchor" href="#可选值" aria-hidden="true">#</a> 可选值</h2><table><thead><tr><th style="text-align:center;">参数值</th><th style="text-align:center;">表现形式</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40" alt="Gravatar官方图形"></td><td>Gravatar 官方图形</td></tr><tr><td style="text-align:center;"><code>&#39;mp&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=mp" alt="神秘人(一个灰白头像)"></td><td>神秘人(一个灰白头像)</td></tr><tr><td style="text-align:center;"><code>&#39;identicon&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=identicon" alt="抽象几何图形"></td><td>抽象几何图形</td></tr><tr><td style="text-align:center;"><code>&#39;monsterid&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=monsterid" alt="小怪物"></td><td>小怪物</td></tr><tr><td style="text-align:center;"><code>&#39;wavatar&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=wavatar" alt="用不同面孔和背景组合生成的头像"></td><td>用不同面孔和背景组合生成的头像</td></tr><tr><td style="text-align:center;"><code>&#39;retro&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=retro" alt="八位像素复古头像"></td><td>八位像素复古头像</td></tr><tr><td style="text-align:center;"><code>&#39;robohash&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=robohash" alt="机器人"></td><td>一种具有不同颜色、面部等的机器人</td></tr><tr><td style="text-align:center;"><code>&#39;hide&#39;</code></td><td style="text-align:center;">N/A</td><td>不显示头像</td></tr></tbody></table><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>请注意，尽管诸如谷歌、QQ 等邮件提供商对电子邮件不区分大小写，但是您仍需要保证 gravatar 注册的邮箱和填入的邮箱地址对应。</p><p>虽然全球大部分大型邮件提供商均不对电子邮件用户名区分大小写，但是根据 RFC 5231 的规定，电子邮件是区分大小写的。</p><p>这意味着邮件提供商可以将 <code>abc@xxx.com</code> 和 <code>ABC@xxx.com</code> 视为不同的账号，而且也的确有邮件提供商这样处理。</p><p>所以为防止使用此类邮件提供商的用户无法收到邮件或显示错误的头像，我们并不会对邮箱进行大小写转换。</p></div>',7),z={render:function(e,t){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[n,(0,r.Wm)("p",null,[d,(0,r.Wm)("a",c,[s,(0,r.Wm)(a)]),l]),(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,[o,(0,r.Wm)("a",i,[p,(0,r.Wm)(a)]),h,(0,r.Wm)("a",g,[u,(0,r.Wm)(a)]),k])]),(0,r.Wm)("p",null,[m,(0,r.Wm)("a",v,[f,(0,r.Wm)(a)]),b,(0,r.Wm)("a",x,[y,(0,r.Wm)(a)]),W]),U],64)}}}}]);