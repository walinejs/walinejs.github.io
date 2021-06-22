(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7608],{9083:(t,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>r});const r={key:"v-74a28670",path:"/guide/client/avatar.html",title:"头像配置",lang:"zh-CN",frontmatter:{},excerpt:'<h1 id="头像配置"><a class="header-anchor" href="#头像配置">#</a> 头像配置</h1>\n<p>Waline 目前使用 [Gravatar][1] 获取评论列表头像。</p>\n<blockquote>\n<p>感谢 <a href="https://cdn.geekzu.org/cached.html" target="_blank" rel="noopener noreferrer">极客族<OutboundLink/></a>、<a href="https://v2ex.com" target="_blank" rel="noopener noreferrer">v2ex<OutboundLink/></a> 提供的镜像服务。</p>\n</blockquote>\n<p>用户需要请自行登录或注册 [Gravatar][1]，然后设置或修改自己的头像。评论的时候，留下在 [Gravatar][1] 注册时所使用的邮箱即可。</p>\n',headers:[{level:2,title:"配置方式",slug:"配置方式",children:[]},{level:2,title:"可选值",slug:"可选值",children:[]}],filePathRelative:"guide/client/avatar.md",git:{updatedTime:1624326323e3,contributors:[]}}},733:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>z});var r=a(8917);const n=(0,r.Wm)("h1",{id:"头像配置"},[(0,r.Wm)("a",{class:"header-anchor",href:"#头像配置"},"#"),(0,r.Uk)(" 头像配置")],-1),d=(0,r.Uk)("Waline 目前使用 "),c={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},s=(0,r.Uk)("Gravatar"),l=(0,r.Uk)(" 获取评论列表头像。"),o=(0,r.Uk)("感谢 "),i={href:"https://cdn.geekzu.org/cached.html",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("极客族"),g=(0,r.Uk)("、"),h={href:"https://v2ex.com",target:"_blank",rel:"noopener noreferrer"},u=(0,r.Uk)("v2ex"),k=(0,r.Uk)(" 提供的镜像服务。"),m=(0,r.Uk)("用户需要请自行登录或注册 "),f={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},v=(0,r.Uk)("Gravatar"),b=(0,r.Uk)("，然后设置或修改自己的头像。评论的时候，留下在 "),x={href:"http://cn.gravatar.com/",target:"_blank",rel:"noopener noreferrer"},y=(0,r.Uk)("Gravatar"),W=(0,r.Uk)(" 注册时所使用的邮箱即可。"),U=(0,r.uE)('<h2 id="配置方式"><a class="header-anchor" href="#配置方式">#</a> 配置方式</h2><p>你可以通过 <code>avatar</code> 选项配置默认头像，如:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  avatar<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="可选值"><a class="header-anchor" href="#可选值">#</a> 可选值</h2><table><thead><tr><th style="text-align:center;">参数值</th><th style="text-align:center;">表现形式</th><th>备注</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40" alt="Gravatar官方图形"></td><td>Gravatar 官方图形</td></tr><tr><td style="text-align:center;"><code>&#39;mp&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=mp" alt="神秘人(一个灰白头像)"></td><td>神秘人(一个灰白头像)</td></tr><tr><td style="text-align:center;"><code>&#39;identicon&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=identicon" alt="抽象几何图形"></td><td>抽象几何图形</td></tr><tr><td style="text-align:center;"><code>&#39;monsterid&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=monsterid" alt="小怪物"></td><td>小怪物</td></tr><tr><td style="text-align:center;"><code>&#39;wavatar&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=wavatar" alt="用不同面孔和背景组合生成的头像"></td><td>用不同面孔和背景组合生成的头像</td></tr><tr><td style="text-align:center;"><code>&#39;retro&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=retro" alt="八位像素复古头像"></td><td>八位像素复古头像</td></tr><tr><td style="text-align:center;"><code>&#39;robohash&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=robohash" alt="机器人"></td><td>一种具有不同颜色、面部等的机器人</td></tr><tr><td style="text-align:center;"><code>&#39;hide&#39;</code></td><td style="text-align:center;">N/A</td><td>不显示头像</td></tr></tbody></table>',5),z={render:function(t,e){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[n,(0,r.Wm)("p",null,[d,(0,r.Wm)("a",c,[s,(0,r.Wm)(a)]),l]),(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,[o,(0,r.Wm)("a",i,[p,(0,r.Wm)(a)]),g,(0,r.Wm)("a",h,[u,(0,r.Wm)(a)]),k])]),(0,r.Wm)("p",null,[m,(0,r.Wm)("a",f,[v,(0,r.Wm)(a)]),b,(0,r.Wm)("a",x,[y,(0,r.Wm)(a)]),W]),U],64)}}}}]);