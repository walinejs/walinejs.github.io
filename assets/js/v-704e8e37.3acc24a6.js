"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[839],{7574:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-704e8e37",path:"/en/guide/client/i18n.html",title:"I18n Support",lang:"en-US",frontmatter:{title:"I18n Support",icon:"i18n",head:[["meta",{property:"og:url",content:"https://waline.js.org/en/guide/client/i18n.html"}],["meta",{property:"og:title",content:"I18n Support"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"en-US"}],["meta",{property:"og:locale:alternate",content:"zh-CN"}],["meta",{name:"twitter:card",content:"summary_large_image"}]]},excerpt:"<p>Waline has built-in multi-language support, and you can also customize Waline's locale config.</p>\n",headers:[{level:2,title:"Basic Usage",slug:"basic-usage",children:[]},{level:2,title:"Customize",slug:"customize",children:[{level:3,title:"locale option",slug:"locale-option",children:[]},{level:3,title:"Example",slug:"example",children:[]}]}],git:{createdTime:1645711312e3,updatedTime:1645711312e3,contributors:[{name:"Starrah",email:"starrah@foxmail.com",commits:1}]},readingTime:{minutes:1.5,words:449},filePathRelative:"en/guide/client/i18n.md"}},2452:(n,a,s)=>{s.r(a),s.d(a,{default:()=>k});var e=s(8917);const t=(0,e.uE)('<p>Waline has built-in multi-language support, and you can also customize Waline&#39;s locale config.</p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p>You can set the language used by Waline through the <code>lang</code> option. The supported languages are:</p><ul><li><code>zh</code></li><li><code>zh-CN</code></li><li><code>zh-TW</code></li><li><code>en</code></li><li><code>en-US</code></li><li><code>jp</code></li><li><code>jp-JP</code></li></ul><p>E.g.:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',6),o={class:"custom-container tip"},p=(0,e._)("p",{class:"custom-container-title"},"Tips",-1),l=(0,e.Uk)("If you want to help Waline add more language support, we welcome you to send a PR to "),r={href:"https://github.com/walinejs/waline/tree/main/packages/client/src/config/i18n",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("client/config/i18n"),i=(0,e.Uk)("."),u=(0,e.uE)('<h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> Customize</h2><p>You can customize the language through the <code>locale</code> option, or set some fields to overwrite the existing UI text.</p><h3 id="locale-option" tabindex="-1"><a class="header-anchor" href="#locale-option" aria-hidden="true">#</a> <code>locale</code> option</h3><ul><li><p>UI related:</p><ul><li><code>nick</code>: nickname</li><li><code>mail</code>: Email</li><li><code>link</code>: Link</li><li><code>placeholder</code>: Default text of comment box</li><li><code>sofa</code>: Display text when the comment area is empty</li><li><code>submit</code>: Submit button text</li><li><code>comment</code>: Comment button text</li><li><code>more</code>: Load more button text</li><li><code>uploading</code>: display text when uploading</li><li><code>login</code>: login button text</li><li><code>admin</code>: The label of the administrator</li><li><code>word</code>: word</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>The above text will be displayed in page.</p></div></li><li><p>Prompt information related:</p><ul><li><code>nickError</code>: Error message that the nickname does not meet the conditions</li><li><code>mailError</code>: The error message that the mailbox does not meet the conditions</li><li><code>wordHint</code>: Error prompt for comment word count, where <code>$0</code> <code>$1</code> <code>$2</code> will be automatically replaced with the lower limit of the allowed word count, the upper limit of the allowed word count, and the current word count.</li></ul></li><li><p>Comment time related:</p><ul><li><code>seconds</code>: seconds ago</li><li><code>minutes</code>: minutes ago</li><li><code>hours</code>: hours ago</li><li><code>days</code>: days ago</li><li><code>now</code>: just now</li></ul></li><li><p>Accessibility related:</p><ul><li><code>reply</code>: the label text of the reply button</li><li><code>cancelReply</code>: the label text of the cancel reply button</li><li><code>preview</code>: Preview button label text</li><li><code>emoji</code>: the label text of the emoji button</li><li><code>uploadImage</code>: the label text of the upload image button</li><li><code>logout</code>: the label text of the logout button</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>These texts are only for accessibility purpose and will not be displayed on the page.</p></div></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// en default</span>\n<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token literal-property property">nick</span><span class="token operator">:</span> <span class="token string">&#39;NickName&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">nickError</span><span class="token operator">:</span> <span class="token string">&#39;NickName cannot be less than 3 bytes.&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">mail</span><span class="token operator">:</span> <span class="token string">&#39;E-Mail&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">mailError</span><span class="token operator">:</span> <span class="token string">&#39;Please confirm your email address.&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;Website&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Comment here...&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">sofa</span><span class="token operator">:</span> <span class="token string">&#39;No comment yet.&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">submit</span><span class="token operator">:</span> <span class="token string">&#39;Submit&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">reply</span><span class="token operator">:</span> <span class="token string">&#39;Reply&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">cancelReply</span><span class="token operator">:</span> <span class="token string">&#39;Cancel reply&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">&#39;Comments&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">more</span><span class="token operator">:</span> <span class="token string">&#39;Load More...&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token string">&#39;Preview&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;Emoji&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">uploadImage</span><span class="token operator">:</span> <span class="token string">&#39;Upload Image&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">seconds</span><span class="token operator">:</span> <span class="token string">&#39;seconds ago&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">minutes</span><span class="token operator">:</span> <span class="token string">&#39;minutes ago&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">hours</span><span class="token operator">:</span> <span class="token string">&#39;hours ago&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">days</span><span class="token operator">:</span> <span class="token string">&#39;days ago&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">now</span><span class="token operator">:</span> <span class="token string">&#39;just now&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">uploading</span><span class="token operator">:</span> <span class="token string">&#39;Uploading&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">logout</span><span class="token operator">:</span> <span class="token string">&#39;logout&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">&#39;Words&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">wordHint</span><span class="token operator">:</span>\n    <span class="token string">&#39;Please input comments between $0 and $1 words!\\n Current word number: $2&#39;</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n  <span class="token literal-property property">path</span><span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>\n  <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n  locale<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',6),d={},k=(0,s(6959).Z)(d,[["render",function(n,a){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,(0,e._)("div",o,[p,(0,e._)("p",null,[l,(0,e._)("a",r,[c,(0,e.Wm)(s)]),i])]),u],64)}]])}}]);