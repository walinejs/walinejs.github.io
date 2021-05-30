(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39],{9818:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>r});const r={key:"v-e64f5648",path:"/en/guide/client/avatar.html",title:"Avatar Configuration",lang:"en-US",frontmatter:{},excerpt:'<h1 id="avatar-configuration"><a class="header-anchor" href="#avatar-configuration">#</a> Avatar Configuration</h1>\n<p>Waline currently uses [Gravatar][1] as the comment list avatar.</p>\n<blockquote>\n<p>Thanks for the mirroring service provided by <a href="https://cdn.geekzu.org/cached.html" target="_blank" rel="noopener noreferrer">geekzu<OutboundLink/></a>, <a href="https://v2ex.com" target="_blank" rel="noopener noreferrer">v2ex<OutboundLink/></a>.</p>\n</blockquote>\n<p>Users should log in or register by themselves [Gravatar][1], then set or modify their avatar.When commenting, just leave the email address you used when registering in [Gravatar][1].</p>\n',headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Available Values",slug:"available-values",children:[]}],filePathRelative:"en/guide/client/avatar.md",git:{updatedTime:1622361811e3,contributors:[]}}},5880:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>z});var r=a(8917);const n=(0,r.Wm)("h1",{id:"avatar-configuration"},[(0,r.Wm)("a",{class:"header-anchor",href:"#avatar-configuration"},"#"),(0,r.Uk)(" Avatar Configuration")],-1),o=(0,r.Uk)("Waline currently uses "),s={href:"http://gravatar.com/",target:"_blank",rel:"noopener noreferrer"},d=(0,r.Uk)("Gravatar"),l=(0,r.Uk)(" as the comment list avatar."),c=(0,r.Uk)("Thanks for the mirroring service provided by "),i={href:"https://cdn.geekzu.org/cached.html",target:"_blank",rel:"noopener noreferrer"},g=(0,r.Uk)("geekzu"),u=(0,r.Uk)(", "),h={href:"https://v2ex.com",target:"_blank",rel:"noopener noreferrer"},p=(0,r.Uk)("v2ex"),f=(0,r.Uk)("."),m=(0,r.Uk)("Users should log in or register by themselves "),v={href:"http://gravatar.com/",target:"_blank",rel:"noopener noreferrer"},k=(0,r.Uk)("Gravatar"),b=(0,r.Uk)(", then set or modify their avatar.When commenting, just leave the email address you used when registering in "),y={href:"http://gravatar.com/",target:"_blank",rel:"noopener noreferrer"},x=(0,r.Uk)("Gravatar"),W=(0,r.Uk)("."),U=(0,r.uE)('<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2><p>You should use <code>avatar</code> option to set the default avatar image, e.g.:</p><p>Currently there are 7 types of <code>default values</code> for <code>non-custom avatar</code>:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  avatar<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="available-values"><a class="header-anchor" href="#available-values">#</a> Available Values</h2><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Demo</th><th>Style</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40" alt="Gravatar official graphics"></td><td>Gravatar official graphics</td></tr><tr><td style="text-align:center;"><code>&#39;mp&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=mp" alt="Mystic man (a grayhead)"></td><td>Mystic man (a grayhead)</td></tr><tr><td style="text-align:center;"><code>&#39;identicon&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=identicon" alt="Abstract geometry"></td><td>Abstract geometry</td></tr><tr><td style="text-align:center;"><code>&#39;monsterid&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=monsterid" alt="little monster"></td><td>little monster</td></tr><tr><td style="text-align:center;"><code>&#39;wavatar&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=wavatar" alt="A combination of different faces and backgrounds"></td><td>A combination of different faces and backgrounds</td></tr><tr><td style="text-align:center;"><code>&#39;robohash&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=robohash" alt="a generated robot with different colors, faces, etc"></td><td>a generated robot with different colors, faces, etc</td></tr><tr><td style="text-align:center;"><code>&#39;retro&#39;</code></td><td style="text-align:center;"><img src="//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=retro" alt="Eight-pixel retro portrait"></td><td>Eight-pixel retro portrait</td></tr><tr><td style="text-align:center;"><code>&#39;hide&#39;</code></td><td style="text-align:center;">N/A</td><td>Hidden avatar</td></tr></tbody></table>',6),z={render:function(e,t){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.j4)(r.HY,null,[n,(0,r.Wm)("p",null,[o,(0,r.Wm)("a",s,[d,(0,r.Wm)(a)]),l]),(0,r.Wm)("blockquote",null,[(0,r.Wm)("p",null,[c,(0,r.Wm)("a",i,[g,(0,r.Wm)(a)]),u,(0,r.Wm)("a",h,[p,(0,r.Wm)(a)]),f])]),(0,r.Wm)("p",null,[m,(0,r.Wm)("a",v,[k,(0,r.Wm)(a)]),b,(0,r.Wm)("a",y,[x,(0,r.Wm)(a)]),W]),U],64)}}}}]);