import{_ as t,r as o,o as p,a as l,b as n,d as c,F as r,f as s,e as a}from"./app.0120c46f.js";const i={},u=s(`<p>Waline has built-in multi-language support, and you can also customize Waline&#39;s locale config.</p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p>You can set the language used by Waline through the <code>lang</code> option. The supported languages are:</p><ul><li><code>zh</code></li><li><code>zh-CN</code></li><li><code>zh-TW</code></li><li><code>en</code></li><li><code>en-US</code></li><li><code>jp</code></li><li><code>jp-JP</code></li></ul><p>E.g.:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,6),d={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"Tips",-1),m=a("If you want to help Waline add more language support, we welcome you to send a PR to "),h={href:"https://github.com/walinejs/waline/tree/main/packages/client/src/config/i18n",target:"_blank",rel:"noopener noreferrer"},g=a("client/config/i18n"),y=a("."),b=s(`<h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> Customize</h2><p>You can customize the language through the <code>locale</code> option, or set some fields to overwrite the existing UI text.</p><h3 id="locale-option" tabindex="-1"><a class="header-anchor" href="#locale-option" aria-hidden="true">#</a> <code>locale</code> option</h3><ul><li><p>UI related:</p><ul><li><code>nick</code>: nickname</li><li><code>mail</code>: Email</li><li><code>link</code>: Link</li><li><code>placeholder</code>: Default text of comment box</li><li><code>sofa</code>: Display text when the comment area is empty</li><li><code>submit</code>: Submit button text</li><li><code>comment</code>: Comment button text</li><li><code>more</code>: Load more button text</li><li><code>uploading</code>: display text when uploading</li><li><code>login</code>: login button text</li><li><code>admin</code>: The label of the administrator</li><li><code>word</code>: word</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>The above text will be displayed in page.</p></div></li><li><p>Prompt information related:</p><ul><li><code>nickError</code>: Error message that the nickname does not meet the conditions</li><li><code>mailError</code>: The error message that the mailbox does not meet the conditions</li><li><code>wordHint</code>: Error prompt for comment word count, where <code>$0</code> <code>$1</code> <code>$2</code> will be automatically replaced with the lower limit of the allowed word count, the upper limit of the allowed word count, and the current word count.</li></ul></li><li><p>Comment time related:</p><ul><li><code>seconds</code>: seconds ago</li><li><code>minutes</code>: minutes ago</li><li><code>hours</code>: hours ago</li><li><code>days</code>: days ago</li><li><code>now</code>: just now</li></ul></li><li><p>Accessibility related:</p><ul><li><code>reply</code>: the label text of the reply button</li><li><code>cancelReply</code>: the label text of the cancel reply button</li><li><code>preview</code>: Preview button label text</li><li><code>emoji</code>: the label text of the emoji button</li><li><code>uploadImage</code>: the label text of the upload image button</li><li><code>logout</code>: the label text of the logout button</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>These texts are only for accessibility purpose and will not be displayed on the page.</p></div></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token comment">// en default</span>
<span class="token keyword">const</span> locale <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">nick</span><span class="token operator">:</span> <span class="token string">&#39;NickName&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">nickError</span><span class="token operator">:</span> <span class="token string">&#39;NickName cannot be less than 3 bytes.&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mail</span><span class="token operator">:</span> <span class="token string">&#39;E-Mail&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">mailError</span><span class="token operator">:</span> <span class="token string">&#39;Please confirm your email address.&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">link</span><span class="token operator">:</span> <span class="token string">&#39;Website&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;Comment here...&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">sofa</span><span class="token operator">:</span> <span class="token string">&#39;No comment yet.&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">submit</span><span class="token operator">:</span> <span class="token string">&#39;Submit&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">reply</span><span class="token operator">:</span> <span class="token string">&#39;Reply&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">cancelReply</span><span class="token operator">:</span> <span class="token string">&#39;Cancel reply&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">comment</span><span class="token operator">:</span> <span class="token string">&#39;Comments&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">more</span><span class="token operator">:</span> <span class="token string">&#39;Load More...&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">preview</span><span class="token operator">:</span> <span class="token string">&#39;Preview&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">emoji</span><span class="token operator">:</span> <span class="token string">&#39;Emoji&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">uploadImage</span><span class="token operator">:</span> <span class="token string">&#39;Upload Image&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">seconds</span><span class="token operator">:</span> <span class="token string">&#39;seconds ago&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">minutes</span><span class="token operator">:</span> <span class="token string">&#39;minutes ago&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">hours</span><span class="token operator">:</span> <span class="token string">&#39;hours ago&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">days</span><span class="token operator">:</span> <span class="token string">&#39;days ago&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">now</span><span class="token operator">:</span> <span class="token string">&#39;just now&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">uploading</span><span class="token operator">:</span> <span class="token string">&#39;Uploading&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">login</span><span class="token operator">:</span> <span class="token string">&#39;Login&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">logout</span><span class="token operator">:</span> <span class="token string">&#39;logout&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">admin</span><span class="token operator">:</span> <span class="token string">&#39;Admin&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">word</span><span class="token operator">:</span> <span class="token string">&#39;Words&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">wordHint</span><span class="token operator">:</span>
    <span class="token string">&#39;Please input comments between $0 and $1 words!\\n Current word number: $2&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> location<span class="token punctuation">.</span>pathname<span class="token punctuation">,</span>
  <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;YOUR_SERVER_URL&#39;</span><span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
  locale<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,6);function f(w,x){const e=o("ExternalLinkIcon");return p(),l(r,null,[u,n("div",d,[k,n("p",null,[m,n("a",h,[g,c(e)]),y])]),b],64)}var v=t(i,[["render",f],["__file","i18n.html.vue"]]);export{v as default};