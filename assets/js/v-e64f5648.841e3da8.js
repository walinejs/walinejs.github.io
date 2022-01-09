"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[39],{9818:(e,t,a)=>{a.r(t),a.d(t,{data:()=>r});const r={key:"v-e64f5648",path:"/en/guide/client/avatar.html",title:"Avatar Configuration",lang:"en-US",frontmatter:{},excerpt:'<h1 id="avatar-configuration" tabindex="-1"><a class="header-anchor" href="#avatar-configuration" aria-hidden="true">#</a> Avatar Configuration</h1>\n<p>::: waring Obsolete</p>\n<p>We recommand you to use lastest server and config it with <code>AVATAR_PROXY</code>.</p>\n<p>:::</p>\n<p>Waline currently uses [Libravatar][1] as the comment list avatar.</p>\n<p>Libravatar is a free, open-source avatar provider features federated hosting and Gravatar-compatible APIs.</p>\n<p>Users should log in or register by themselves [Libravatar][1], then set or modify their avatar. When commenting, just leave the email address you used when registering in [Libravatar][1]. Note that if an image is not found in the [Libravatar][1] database and the hash algorithm used was MD5, then Libravatar will first redirect to [Gravatar][2] in case the image exists there.</p>\n',headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Available Values",slug:"available-values",children:[]},{level:2,title:"Attentions",slug:"attentions",children:[]}],filePathRelative:"en/guide/client/avatar.md",git:{updatedTime:1641701588e3,contributors:[{name:"lizheming",email:"i@imnerd.org",commits:1}]}}},460:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var r=a(8917);const n=(0,r._)("h1",{id:"avatar-configuration",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#avatar-configuration","aria-hidden":"true"},"#"),(0,r.Uk)(" Avatar Configuration")],-1),i=(0,r._)("p",null,"::: waring Obsolete",-1),s=(0,r._)("p",null,[(0,r.Uk)("We recommand you to use lastest server and config it with "),(0,r._)("code",null,"AVATAR_PROXY"),(0,r.Uk)(".")],-1),o=(0,r._)("p",null,":::",-1),d=(0,r.Uk)("Waline currently uses "),l={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},c=(0,r.Uk)("Libravatar"),h=(0,r.Uk)(" as the comment list avatar."),p=(0,r._)("p",null,"Libravatar is a free, open-source avatar provider features federated hosting and Gravatar-compatible APIs.",-1),g=(0,r.Uk)("Users should log in or register by themselves "),u={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},v=(0,r.Uk)("Libravatar"),m=(0,r.Uk)(", then set or modify their avatar. When commenting, just leave the email address you used when registering in "),f={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},b=(0,r.Uk)("Libravatar"),y=(0,r.Uk)(". Note that if an image is not found in the "),k={href:"https://www.libravatar.org/",target:"_blank",rel:"noopener noreferrer"},w=(0,r.Uk)("Libravatar"),x=(0,r.Uk)(" database and the hash algorithm used was MD5, then Libravatar will first redirect to "),A={href:"http://gravatar.com/",target:"_blank",rel:"noopener noreferrer"},_=(0,r.Uk)("Gravatar"),U=(0,r.Uk)(" in case the image exists there."),L=(0,r.uE)('<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>You should use <code>avatar</code> option to set the default avatar image, e.g.:</p><p>Currently there are 7 types of <code>default values</code> for <code>non-custom avatar</code>:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  avatar<span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="available-values" tabindex="-1"><a class="header-anchor" href="#available-values" aria-hidden="true">#</a> Available Values</h2><table><thead><tr><th style="text-align:center;">Value</th><th style="text-align:center;">Demo</th><th>Style</th></tr></thead><tbody><tr><td style="text-align:center;"><code>&#39;&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40" alt="Libravatar official graphics"></td><td>Libravatar official graphics</td></tr><tr><td style="text-align:center;"><code>&#39;mp&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=mp" alt="Mystic man (a grayhead)"></td><td>Mystic man (a grayhead)</td></tr><tr><td style="text-align:center;"><code>&#39;identicon&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=identicon" alt="Abstract geometry"></td><td>Abstract geometry</td></tr><tr><td style="text-align:center;"><code>&#39;monsterid&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=monsterid" alt="little monster"></td><td>little monster</td></tr><tr><td style="text-align:center;"><code>&#39;wavatar&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=wavatar" alt="A combination of different faces and backgrounds"></td><td>A combination of different faces and backgrounds</td></tr><tr><td style="text-align:center;"><code>&#39;robohash&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=robohash" alt="a generated robot with different colors, faces, etc"></td><td>a generated robot with different colors, faces, etc</td></tr><tr><td style="text-align:center;"><code>&#39;retro&#39;</code></td><td style="text-align:center;"><img src="//seccdn.libravatar.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&amp;d=retro" alt="Eight-pixel retro portrait"></td><td>Eight-pixel retro portrait</td></tr><tr><td style="text-align:center;"><code>&#39;hide&#39;</code></td><td style="text-align:center;">N/A</td><td>Hidden avatar</td></tr></tbody></table><h2 id="attentions" tabindex="-1"><a class="header-anchor" href="#attentions" aria-hidden="true">#</a> Attentions</h2><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please note that though email providers such as Google and QQ do not distinguish upper and lower case user names, you still need to ensure that the email address registered on Gravatar corresponds to the email address inputed.</p><p>Although most large mail providers in the world do not distinguish case-sensitive email user names, according to RFC 5231, emails are case-sensitive.</p><p>This means that the email provider can treat <code>abc@xxx.com</code> and <code>ABC@xxx.com</code> as different accounts, and there are indeed email providers that handle in this way.</p><p>Therefore, in order to prevent users who use such email providers from being unable to receive emails or displaying wrong avatars, we do not perform case conversion on mailboxes.</p></div>',8),W={},C=(0,a(6959).Z)(W,[["render",function(e,t){const a=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[n,i,s,o,(0,r._)("p",null,[d,(0,r._)("a",l,[c,(0,r.Wm)(a)]),h]),p,(0,r._)("p",null,[g,(0,r._)("a",u,[v,(0,r.Wm)(a)]),m,(0,r._)("a",f,[b,(0,r.Wm)(a)]),y,(0,r._)("a",k,[w,(0,r.Wm)(a)]),x,(0,r._)("a",A,[_,(0,r.Wm)(a)]),U]),L],64)}]])}}]);