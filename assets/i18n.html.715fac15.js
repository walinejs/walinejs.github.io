import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as n,o as a,c,a as e,b as d,F as s,e as i,d as o}from"./app.bb1f4ca6.js";const r={},u=i(`<p>Waline has built-in multi-language support, and you can also customize Waline&#39;s locale config.</p><h2 id="basic-usage" tabindex="-1"><a class="header-anchor" href="#basic-usage" aria-hidden="true">#</a> Basic Usage</h2><p>You can set the language used by Waline through the <code>lang</code> option. The supported languages are:</p><ul><li>zh</li><li>zh-CN</li><li>zh-TW</li><li>en</li><li>en-US</li><li>jp</li><li>jp-JP</li><li>pt-BR</li><li>ru</li><li>ru-RU</li></ul><p>E.g.:</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>Waline.init({
  el: &#39;#waline&#39;,
  // ...
  lang: &#39;en&#39;,
});
</code></pre></div>`,6),m={class:"custom-container tip"},p=e("p",{class:"custom-container-title"},"Tips",-1),h=o("If you want to help Waline add more language support, we welcome you to send a PR to "),g={href:"https://github.com/walinejs/waline/tree/main/packages/client/src/config/i18n",target:"_blank",rel:"noopener noreferrer"},b=o("client/config/i18n"),f=o("."),w=i(`<h2 id="customize" tabindex="-1"><a class="header-anchor" href="#customize" aria-hidden="true">#</a> Customize</h2><p>You can customize the language through the <code>locale</code> option, or set some fields to overwrite the existing UI text.</p><h3 id="locale-option" tabindex="-1"><a class="header-anchor" href="#locale-option" aria-hidden="true">#</a> <code>locale</code> option</h3><ul><li><p>UI related:</p><ul><li><code>nick</code>: nickname</li><li><code>mail</code>: Email</li><li><code>link</code>: Link</li><li><code>placeholder</code>: Default text of comment box</li><li><code>sofa</code>: Display text when the comment area is empty</li><li><code>submit</code>: Submit button text</li><li><code>comment</code>: Comment button text</li><li><code>more</code>: Load more button text</li><li><code>uploading</code>: display text when uploading</li><li><code>login</code>: login button text</li><li><code>admin</code>: The label of the administrator</li><li><code>word</code>: word</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>The above text will be displayed in page.</p></div></li><li><p>Prompt information related:</p><ul><li><code>nickError</code>: Error message that the nickname does not meet the conditions</li><li><code>mailError</code>: The error message that the mailbox does not meet the conditions</li><li><code>wordHint</code>: Error prompt for comment word count, where <code>$0</code> <code>$1</code> <code>$2</code> will be automatically replaced with the lower limit of the allowed word count, the upper limit of the allowed word count, and the current word count.</li></ul></li><li><p>Comment time related:</p><ul><li><code>seconds</code>: seconds ago</li><li><code>minutes</code>: minutes ago</li><li><code>hours</code>: hours ago</li><li><code>days</code>: days ago</li><li><code>now</code>: just now</li></ul></li><li><p>Accessibility related:</p><ul><li><code>reply</code>: the label text of the reply button</li><li><code>cancelReply</code>: the label text of the cancel reply button</li><li><code>preview</code>: Preview button label text</li><li><code>emoji</code>: the label text of the emoji button</li><li><code>uploadImage</code>: the label text of the upload image button</li><li><code>logout</code>: the label text of the logout button</li></ul><div class="custom-container info"><p class="custom-container-title">Info</p><p>These texts are only for accessibility purpose and will not be displayed on the page.</p></div></li></ul><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><div class="language-javascript ext-js"><pre class="language-javascript"><code>// en default
const locale = {
  nick: &#39;NickName&#39;,
  nickError: &#39;NickName cannot be less than 3 bytes.&#39;,
  mail: &#39;E-Mail&#39;,
  mailError: &#39;Please confirm your email address.&#39;,
  link: &#39;Website&#39;,
  placeholder: &#39;Comment here...&#39;,
  sofa: &#39;No comment yet.&#39;,
  submit: &#39;Submit&#39;,
  reply: &#39;Reply&#39;,
  cancelReply: &#39;Cancel reply&#39;,
  comment: &#39;Comments&#39;,
  more: &#39;Load More...&#39;,
  preview: &#39;Preview&#39;,
  emoji: &#39;Emoji&#39;,
  uploadImage: &#39;Upload Image&#39;,
  seconds: &#39;seconds ago&#39;,
  minutes: &#39;minutes ago&#39;,
  hours: &#39;hours ago&#39;,
  days: &#39;days ago&#39;,
  now: &#39;just now&#39;,
  uploading: &#39;Uploading&#39;,
  login: &#39;Login&#39;,
  logout: &#39;logout&#39;,
  admin: &#39;Admin&#39;,
  word: &#39;Words&#39;,
  wordHint:
    &#39;Please input comments between $0 and $1 words!\\n Current word number: $2&#39;,
};

Waline.init({
  el: &#39;#waline&#39;,
  path: location.pathname,
  serverURL: &#39;YOUR_SERVER_URL&#39;,
  // ...
  locale,
});
</code></pre></div>`,6);function x(_,y){const t=n("ExternalLinkIcon");return a(),c(s,null,[u,e("div",m,[p,e("p",null,[h,e("a",g,[b,d(t)]),f])]),w],64)}var E=l(r,[["render",x],["__file","i18n.html.vue"]]);export{E as default};
