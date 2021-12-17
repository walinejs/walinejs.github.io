"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[839],{994:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-704e8e37",path:"/en/guide/client/i18n.html",title:"I18n Support",lang:"en-US",frontmatter:{},excerpt:'<h1 id="i18n-support" tabindex="-1"><a class="header-anchor" href="#i18n-support" aria-hidden="true">#</a> I18n Support</h1>\n<p>Waline has built-in multi-language support, and you can also customize Waline\'s locale config.</p>\n',headers:[{level:2,title:"Basic Usage",slug:"basic-usage",children:[]},{level:2,title:"Customize",slug:"customize",children:[{level:3,title:"locale option",slug:"locale-option",children:[]},{level:3,title:"Example",slug:"example",children:[]}]}],filePathRelative:"en/guide/client/i18n.md",git:{updatedTime:163970187e4,contributors:[{name:"dependabot[bot]",email:"49699333+dependabot[bot]@users.noreply.github.com",commits:1}]}}},7413:(n,a,s)=>{s.r(a),s.d(a,{default:()=>k});var e=s(8917);const o=(0,e.uE)('<h1 id="i18n-support" tabindex="-1"><a class="header-anchor" href="#i18n-support" aria-hidden="true">#</a> I18n Support</h1><p>Waline has built-in multi-language support, and you can also customize Waline&#39;s locale config.</p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p>You can set the language used by Waline through the <code>lang</code> option. The supported languages are:</p><ul><li><code>zh</code></li><li><code>zh-CN</code></li><li><code>zh-TW</code></li><li><code>en</code></li><li><code>en-US</code></li><li><code>jp</code></li><li><code>jp-JP</code></li></ul><p>E.g.:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  lang<span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',7),t={class:"custom-container tip"},p=(0,e._)("p",{class:"custom-container-title"},"Tip",-1),l=(0,e.Uk)("If you want to help Waline add more language support, we welcome you to send a PR to "),c={href:"https://github.com/walinejs/waline/tree/main/packages/client/src/config/i18n",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("client/config/i18n"),r=(0,e.Uk)("."),u=(0,e.uE)('<h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> Customize</h2><p>You can customize the language through the <code>locale</code> option, or set some fields to overwrite the existing UI text.</p><h3 id="locale-option" tabindex="-1"><a class="header-anchor" href="#locale-option" aria-hidden="true">#</a> <code>locale</code> option</h3><ul><li><p>UI related:</p><ul><li><code>nick</code>: nickname</li><li><code>mail</code>: Email</li><li><code>link</code>: Link</li><li><code>placeholder</code>: Default text of comment box</li><li><code>sofa</code>: Display text when the comment area is empty</li><li><code>submit</code>: Submit button text</li><li><code>comment</code>: Comment button text</li><li><code>more</code>: Load more button text</li><li><code>uploading</code>: display text when uploading</li><li><code>login</code>: login button text</li><li><code>admin</code>: The label of the administrator</li><li><code>word</code>: word</li></ul><div class="custom-container warning"><p class="custom-container-title">Note</p><p>The text in this category will be displayed in page, so you should configure them carefully.</p></div></li><li><p>Prompt information related:</p><ul><li><code>nickError</code>: Error message that the nickname does not meet the conditions</li><li><code>mailError</code>: The error message that the mailbox does not meet the conditions</li><li><code>wordHint</code>: Error prompt for comment word count, where <code>$0</code> <code>$1</code> <code>$2</code> will be automatically replaced with the lower limit of the allowed word count, the upper limit of the allowed word count, and the current word count.</li></ul></li><li><p>Comment time related:</p><ul><li><code>seconds</code>: seconds ago</li><li><code>minutes</code>: minutes ago</li><li><code>hours</code>: hours ago</li><li><code>days</code>: days ago</li><li><code>now</code>: just now</li></ul></li><li><p>Accessibility related:</p><ul><li><code>reply</code>: the label text of the reply button</li><li><code>cancelReply</code>: the label text of the cancel reply button</li><li><code>preview</code>: Preview button label text</li><li><code>emoji</code>: the label text of the emoji button</li><li><code>uploadImage</code>: the label text of the upload image button</li><li><code>logout</code>: the label text of the logout button</li></ul><div class="custom-container tip"><p class="custom-container-title">Tip</p><p>These texts are only used to enhance accessibility services and will not be displayed on the page.</p></div></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  nick<span class="token operator">:</span> <span class="token string">&#39;NickName&#39;</span><span class="token punctuation">,</span>\n  nickError<span class="token operator">:</span> <span class="token string">&#39;NickName cannot be less than 3 bytes.&#39;</span><span class="token punctuation">,</span>\n  mail<span class="token operator">:</span> <span class="token string">&#39;E-Mail&#39;</span><span class="token punctuation">,</span>\n  mailError<span class="token operator">:</span> <span class="token string">&#39;Please confirm your email address.&#39;</span><span class="token punctuation">,</span>\n  link<span class="token operator">:</span> <span class="token string">&#39;Website&#39;</span><span class="token punctuation">,</span>\n  placeholder<span class="token operator">:</span> <span class="token string">&#39;Comment here...&#39;</span><span class="token punctuation">,</span>\n  sofa<span class="token operator">:</span> <span class="token string">&#39;No comment yet.&#39;</span><span class="token punctuation">,</span>\n  submit<span class="token operator">:</span> <span class="token string">&#39;Submit&#39;</span><span class="token punctuation">,</span>\n  reply<span class="token operator">:</span> <span class="token string">&#39;Reply&#39;</span><span class="token punctuation">,</span>\n  cancelReply<span class="token operator">:</span> <span class="token string">&#39;Cancel reply&#39;</span><span class="token punctuation">,</span>\n  comment<span class="token operator">:</span> <span class="token string">&#39;Comments&#39;</span><span class="token punctuation">,</span>\n  more<span class="token operator">:</span> <span class="token string">&#39;Load More...&#39;</span><span class="token punctuation">,</span>\n  preview<span class="token operator">:</span> <span class="token string">&#39;Preview&#39;</span><span class="token punctuation">,</span>\n  emoji<span class="token operator">:</span> <span class="token string">&#39;Emoji&#39;</span><span class="token punctuation">,</span>\n  uploadImage<span class="token operator">:</span> <span class="token string">&#39;Upload Image&#39;</span><span class="token punctuation">,</span>\n  seconds<span class="token operator">:</span> <span class="token string">&#39;seconds ago&#39;</span><span class="token punctuation">,</span>\n  minutes<span class="token operator">:</span> <span class="token string">&#39;minutes ago&#39;</span><span class="token punctuation">,</span>\n  hours<span class="token operator">:</span> <span class="token string">&#39;hours ago&#39;</span><span class="token punctuation">,</span>\n  days<span class="token operator">:</span> <span class="token string">&#39;days ago&#39;</span><span class="token punctuation">,</span>\n  now<span class="token operator">:</span> <span class="token string">&#39;just now&#39;</span><span class="token punctuation">,</span>\n  uploading<span class="token operator">:</span> <span class="token string">&#39;Uploading&#39;</span><span class="token punctuation">,</span>\n  login<span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>\n  logout<span class="token operator">:</span> <span class="token string">&#39;logout&#39;</span><span class="token punctuation">,</span>\n  admin<span class="token operator">:</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">,</span>\n  word<span class="token operator">:</span> <span class="token string">&#39;Words&#39;</span><span class="token punctuation">,</span>\n  wordHint<span class="token operator">:</span>\n    <span class="token string">&#39;Please input comments between $0 and $1 words!\\n Current word number: $2&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  path<span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>\n  serverURL<span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  locale<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',6),d={},k=(0,s(6959).Z)(d,[["render",function(n,a){const s=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,(0,e._)("div",t,[p,(0,e._)("p",null,[l,(0,e._)("a",c,[i,(0,e.Wm)(s)]),r])]),u],64)}]])}}]);