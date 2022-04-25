import{r as l,o as c,c as i,a,b as n,w as o,F as r,e as t,d as s}from"./app.99c90d0a.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const d={},k=t('<h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Waline server address url</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>Type: <code>string</code></li><li>Default: <code>window.location.pathname</code></li></ul><p>Article path id. Used to distinguish different <em>article pages</em> to ensure loading the correct comment list under the <em>article page</em>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please ensure the uniqueness of each <em>article page</em> path, otherwise the same comment list may be loaded .</p><p>For example: If on your site <code>/example/path/</code> and <code>/example/path</code> is the same page, you should probably set <code>window.location.pathname.replace(/\\/$/,&#39;&#39;)</code>.</p></div><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;zh-CN&#39;</code></li></ul><p>Display language.</p><p>Optional value:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li></ul>',12),h=s("If you need a custom language, please refer to "),g=s("i18n"),m=s("."),f=a("h2",{id:"emoji",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),s(" emoji")],-1),y=a("ul",null,[a("li",null,[s("Type: "),a("code",null,"(string | EmojiInfo)[]")]),a("li",null,[s("Default: "),a("code",null,"['https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo']")])],-1),v=s("Emoji settings, for details see "),b=s("Custom Emoji"),x=t('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>Type: <code>string | boolean</code></li><li>Default: <code>false</code></li></ul><p>Darkmode support</p><ul><li>Setting a boolean will set the dark mode according to its value.</li><li>Set it to <code>&#39;auto&#39;</code> will display darkmode due to device settings.</li><li>Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.</li></ul><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>Docusaurus</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>vuepress-theme-hope</strong>: It will enable darkmode by setting <code>theme-dark</code> class on the <code>&lt;body&gt;</code> tag itself. So you need to set <code>&#39;body.theme-dark&#39;</code> as <code>dark</code> option.</p></li></ul></div>',5),_=s("For details of custom style and darkmode, please see "),w=s("Custom Style"),q=s("."),T=t(`<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[&#39;nick&#39;,&#39;mail&#39;,&#39;link&#39;]</code></li></ul><p>Reviewer attributes. Optional values: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[]</code></li></ul><p>Set required fields, default anonymous, optional values:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;,&#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>Type: <code>string</code></li><li>Default value: <code>&#39;enable&#39;</code></li></ul><p>Login mode status, optional values:</p><ul><li><code>&#39;enable&#39;</code>: enable login (default)</li><li><code>&#39;disable&#39;</code>: Login is disabled, users should fill in infomation to comment</li><li><code>&#39;force&#39;</code>: Forced login, users must login to comment</li></ul><h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>Type: <code>number | [number, number]</code></li><li>Default: <code>0</code></li></ul><p>Comment word s limit. When a single number is filled in, it &#39;s the maximum number of comment words. No limit when set to <code>0</code>.</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>Type: <code>number</code></li><li>Default: <code>10</code></li></ul><p>number of comments per page.</p><h2 id="imageuploader" tabindex="-1"><a class="header-anchor" href="#imageuploader" aria-hidden="true">#</a> imageUploader</h2><ul><li><p>Type: <code>WalineImageUploader | false</code></p></li><li><p>Required: No</p></li><li><p>Details:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineImageUploader</span> <span class="token operator">=</span> <span class="token punctuation">(</span>image<span class="token operator">:</span> File<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">&gt;</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><p>Custom image upload method. The function should receive an image object and return a Promise that provides the image address.</p><p>The default behavior is to embed images Base 64 encoded, you can set this to <code>false</code> to disable image uploading.</p><h2 id="highlighter" tabindex="-1"><a class="header-anchor" href="#highlighter" aria-hidden="true">#</a> highlighter</h2><ul><li><p>Type: <code>WalineHighlighter | false</code></p></li><li><p>Required: No</p></li><li><p>Details:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineHighlighter</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
  <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>
      code<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      lang<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>
      callback<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> code<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
    <span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div></li></ul><p><strong>Code highlighting</strong>, use <code>hanabi</code> by default. The function passes in original content of code block and language of the code block. You should trigger the callback function or return a string directly.</p><p>You can pass in a code highlighter of your own, or set to <code>false</code> to disable code highlighting.</p><p>::: Details Demo</p><p>A demo using prismjs to highlight code blocks.</p><div class="language-html ext-html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Waline highlighter demo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/@waline/client@v1/dist/waline.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/@waline/client@v1/dist/waline.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/prismjs@v1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">data-manual</span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/prismjs@v1/plugins/autoloader/prism-autoloader.min.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span>
      <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/prismjs@v1/themes/prism-tomorrow.min.css<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">max-width</span><span class="token punctuation">:</span> 800px<span class="token punctuation">;</span> <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
      <span class="token keyword">const</span> waline <span class="token operator">=</span> Waline<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;https://waline.vercel.app&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">lang</span><span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">highlighter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> lang</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>window<span class="token punctuation">.</span>Prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            window<span class="token punctuation">.</span>Prism<span class="token punctuation">.</span>plugins<span class="token punctuation">.</span>autoloader<span class="token punctuation">.</span><span class="token function">loadLanguages</span><span class="token punctuation">(</span>lang<span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

          <span class="token keyword">return</span> window<span class="token punctuation">.</span>Prism<span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>
            code<span class="token punctuation">,</span>
            window<span class="token punctuation">.</span>Prism<span class="token punctuation">.</span>languages<span class="token punctuation">[</span>lang<span class="token punctuation">]</span> <span class="token operator">||</span> window<span class="token punctuation">.</span>Prism<span class="token punctuation">.</span>languages<span class="token punctuation">.</span>text<span class="token punctuation">,</span>
            lang
          <span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>:::</p><h2 id="texrenderer" tabindex="-1"><a class="header-anchor" href="#texrenderer" aria-hidden="true">#</a> texRenderer</h2><ul><li><p>Type: <code>WalineTexRenderer | false</code></p></li><li><p>Required: No</p></li><li><p>Details:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">WalineTexRenderer</span> <span class="token operator">=</span> <span class="token punctuation">(</span>blockMode<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> tex<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
</code></pre></div></li></ul>`,31),j=a("p",null,[s("Customize "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mtext",null,"TeX")]),a("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),a("span",{class:"mord text"},[a("span",{class:"mord textrm"},"T"),a("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.4678em"}},[a("span",{style:{top:"-2.7845em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord textrm"},"E")])])]),a("span",{class:"vlist-s"},"\u200B")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.2155em"}},[a("span")])])]),a("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),a("span",{class:"mord textrm"},"X")])])])]),s(" rendering, the default behavior is to prompt that the preview mode does not support "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mtext",null,"TeX")]),a("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),a("span",{class:"mord text"},[a("span",{class:"mord textrm"},"T"),a("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.4678em"}},[a("span",{style:{top:"-2.7845em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord textrm"},"E")])])]),a("span",{class:"vlist-s"},"\u200B")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.2155em"}},[a("span")])])]),a("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),a("span",{class:"mord textrm"},"X")])])])]),s(". The function provides two parameters, the first parameter indicates whether it should be rendered in block level, and the second parameter is the string of the "),a("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Undefined control sequence: \\Tex at position 1: \\\u0332T\u0332e\u0332x\u0332"},"\\Tex"),s(" content, and return a HTML string as render result.")],-1),D=s("You can import "),P=a("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Undefined control sequence: \\Tex at position 1: \\\u0332T\u0332e\u0332x\u0332"},"\\Tex",-1),W=s(" renderer to provide preview feature. We recommend you to use Katex or MathJax, or you can set to "),E=a("code",null,"false",-1),L=s(" to disable parsing "),S=a("span",{class:"katex-error",title:"ParseError: KaTeX parse error: Undefined control sequence: \\Tex at position 1: \\\u0332T\u0332e\u0332x\u0332"},"\\Tex",-1),C=s(". For more information, please refer to "),I={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},R=s("KaTeX API"),U=s(" or "),M={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},N=s("MathJax API"),X=s("."),F=t('<h2 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show copyright and version in footer.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>We hope you can keep it on to support Waline.</p></div>',4);function z(K,Y){const e=l("RouterLink"),p=l("ExternalLinkIcon");return c(),i(r,null,[k,a("p",null,[h,n(e,{to:"/en/guide/client/i18n.html"},{default:o(()=>[g]),_:1}),m]),f,y,a("p",null,[v,n(e,{to:"/en/guide/client/emoji.html"},{default:o(()=>[b]),_:1})]),x,a("p",null,[_,n(e,{to:"/en/guide/client/style.html"},{default:o(()=>[w]),_:1}),q]),T,j,a("p",null,[D,P,W,E,L,S,C,a("a",I,[R,n(p)]),U,a("a",M,[N,n(p)]),X]),F],64)}var V=u(d,[["render",z],["__file","component.html.vue"]]);export{V as default};
