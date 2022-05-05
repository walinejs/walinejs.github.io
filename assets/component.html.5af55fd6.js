import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as p,c as h,a as e,b as s,w as a,F as m,e as n,d as t}from"./app.e8231fd5.js";const u={},g=n('<h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>Type: <code>string</code></li><li>Required: Yes</li></ul><p>Waline server address url</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>Type: <code>string</code></li><li>Default: <code>window.location.pathname</code></li></ul><p>Article path id. Used to distinguish different <em>article pages</em> to ensure loading the correct comment list under the <em>article page</em>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Please ensure the uniqueness of each <em>article page</em> path, otherwise the same comment list may be loaded .</p><p>For example: If on your site <code>/example/path/</code> and <code>/example/path</code> is the same page, you should probably set <code>window.location.pathname.replace(/\\/$/,&#39;&#39;)</code>.</p></div><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>Type: <code>string</code></li><li>Default: <code>&#39;zh-CN&#39;</code></li></ul><p>Display language.</p><p>Optional value:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li><li><code>&#39;pt-BR&#39;</code></li><li><code>&#39;ru&#39;</code></li><li><code>&#39;ru-RU&#39;</code></li></ul>',12),v=t("If you need a custom language, please refer to "),x=t("i18n"),w=t("."),y=e("h2",{id:"emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),t(" emoji")],-1),f=e("ul",null,[e("li",null,[t("Type: "),e("code",null,"(string | WalineEmojiInfo)[] | false")]),e("li",null,[t("Default: "),e("code",null,"['https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo']")])],-1),_=t("Emoji settings, for details see "),k=t("Custom Emoji"),b=n('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>Type: <code>string | boolean</code></li><li>Default: <code>false</code></li></ul><p>Darkmode support</p><ul><li>Setting a boolean will set the dark mode according to its value.</li><li>Set it to <code>&#39;auto&#39;</code> will display darkmode due to device settings.</li><li>Filling in a CSS selector will enable darkmode only when the selector match waline ancestor nodes.</li></ul><div class="custom-container tip"><p class="custom-container-title">Examples</p><ul><li><p><strong>Docusaurus</strong>: It will enable darkmode by setting <code>data-theme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>hexo-theme-fluid</strong>: It will enable darkmode by setting <code>data-user-color-scheme=&quot;dark&quot;</code> on the <code>&lt;html&gt;</code> tag itself. So you need to set <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code> as <code>dark</code> option.</p></li><li><p><strong>vuepress-theme-hope</strong>: It will enable darkmode by setting <code>theme-dark</code> class on the <code>&lt;body&gt;</code> tag itself. So you need to set <code>&#39;body.theme-dark&#39;</code> as <code>dark</code> option.</p></li></ul></div>',5),q=t("For details of custom style and darkmode, please see "),T=t("Custom Style"),j=t("."),D=n(`<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[&#39;nick&#39;,&#39;mail&#39;,&#39;link&#39;]</code></li></ul><p>Reviewer attributes. Optional values: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>Type: <code>string[]</code></li><li>Default: <code>[]</code></li></ul><p>Set required fields, default anonymous, optional values:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;,&#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>Type: <code>string</code></li><li>Default value: <code>&#39;enable&#39;</code></li></ul><p>Login mode status, optional values:</p><ul><li><code>&#39;enable&#39;</code>: enable login (default)</li><li><code>&#39;disable&#39;</code>: Login is disabled, users should fill in infomation to comment</li><li><code>&#39;force&#39;</code>: Forced login, users must login to comment</li></ul><h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>Type: <code>number | [number, number]</code></li><li>Default: <code>0</code></li></ul><p>Comment word s limit. When a single number is filled in, it &#39;s the maximum number of comment words. No limit when set to <code>0</code>.</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>Type: <code>number</code></li><li>Default: <code>10</code></li></ul><p>number of comments per page.</p><h2 id="imageuploader" tabindex="-1"><a class="header-anchor" href="#imageuploader" aria-hidden="true">#</a> imageUploader</h2><ul><li><p>Type: <code>WalineImageUploader | false</code></p></li><li><p>Required: No</p></li><li><p>Details:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineImageUploader = (image: File) =&gt; Promise&lt;string&gt;;
</code></pre></div></li></ul><p>Custom image upload method. The default behavior is to embed images Base 64 encoded, you can set this to <code>false</code> to disable image uploading.</p><p>The function should receive an image object and return a Promise that provides the image address.</p><details class="custom-block details"><summary>Demo</summary><p>A demo using api of <code>lsky - pro</code>.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Waline imageUploader demo&lt;/title&gt;
    &lt;script src=&quot;https://unpkg.com/@waline/client@v1/dist/waline.js&quot;&gt;&lt;/script&gt;
    &lt;link
      rel=&quot;stylesheet&quot;
      href=&quot;https://unpkg.com/@waline/client@v1/dist/waline.css&quot;
    /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;waline&quot; style=&quot;max-width: 800px; margin: 0 auto&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
      const waline = Waline.init({
        el: &#39;#waline&#39;,
        serverURL: &#39;https://waline.vercel.app&#39;,
        path: &#39;/&#39;,
        lang: &#39;en-US&#39;,
        imageUploader: function (file) {
          let formData = new FormData();
          let headers = new Headers();

          formData.append(&#39;file&#39;, file);
          headers.append(&#39;Authorization&#39;, &#39;!{API TOKEN}&#39;);
          headers.append(&#39;Accept&#39;, &#39;application/json&#39;);

          return fetch(&#39;!{API URL}&#39;, {
            method: &#39;POST&#39;,
            headers: headers,
            body: formData,
          })
            .then((resp) =&gt; resp.json())
            .then((resp) =&gt; resp.data.links.url);
        },
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre></div></details><h2 id="highlighter" tabindex="-1"><a class="header-anchor" href="#highlighter" aria-hidden="true">#</a> highlighter</h2><ul><li><p>Type: <code>WalineHighlighter | false</code></p></li><li><p>Required: No</p></li><li><p>Details:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineHighlighter = (code: string, lang: string) =&gt; string;
</code></pre></div></li></ul><p><strong>Code highlighting</strong>, use <code>hanabi</code> by default. The function passes in original content of code block and language of the code block. You should trigger the callback function or return a string directly.</p><p>You can pass in a code highlighter of your own, or set to <code>false</code> to disable code highlighting.</p><details class="custom-block details"><summary>Demo</summary><p>A demo using prismjs to highlight code blocks.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Waline highlighter demo&lt;/title&gt;
    &lt;script src=&quot;https://unpkg.com/@waline/client@v1/dist/waline.js&quot;&gt;&lt;/script&gt;
    &lt;link
      rel=&quot;stylesheet&quot;
      href=&quot;https://unpkg.com/@waline/client@v1/dist/waline.css&quot;
    /&gt;
    &lt;script src=&quot;https://unpkg.com/prismjs@v1&quot; data-manual&gt;&lt;/script&gt;
    &lt;script src=&quot;https://unpkg.com/prismjs@v1/plugins/autoloader/prism-autoloader.min.js&quot;&gt;&lt;/script&gt;
    &lt;link
      rel=&quot;stylesheet&quot;
      href=&quot;https://unpkg.com/prismjs@v1/themes/prism-tomorrow.min.css&quot;
    /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&quot;waline&quot; style=&quot;max-width: 800px; margin: 0 auto&quot;&gt;&lt;/div&gt;
    &lt;script&gt;
      const waline = Waline.init({
        el: &#39;#waline&#39;,
        serverURL: &#39;https://waline.vercel.app&#39;,
        path: &#39;/&#39;,
        lang: &#39;en-US&#39;,
        highlighter: (code, lang) =&gt; {
          if (!window.Prism.languages[lang]) {
            window.Prism.plugins.autoloader.loadLanguages(lang);
          }

          return window.Prism.highlight(
            code,
            window.Prism.languages[lang] || window.Prism.languages.text,
            lang
          );
        },
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre></div></details><h2 id="texrenderer" tabindex="-1"><a class="header-anchor" href="#texrenderer" aria-hidden="true">#</a> texRenderer</h2><ul><li><p>Type: <code>WalineTexRenderer | false</code></p></li><li><p>Required: No</p></li><li><p>Details:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineTexRenderer = (blockMode: boolean, tex: string) =&gt; string;
</code></pre></div></li></ul>`,29),M=e("p",null,[t("Customize "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])]),t(" rendering, the default behavior is to prompt that the preview mode does not support "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])]),t(". The function provides two parameters, the first parameter indicates whether it should be rendered in block level, and the second parameter is the string of the "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])]),t(" content, and return a HTML string as render result.")],-1),U=t("You can import "),W=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])],-1),L=t(" renderer to provide preview feature. We recommend you to use Katex or MathJax, or you can set to "),R=e("code",null,"false",-1),C=t(" to disable parsing "),E=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])],-1),P=t(". For more information, please refer to "),S={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},I=t("KaTeX API"),X=t(" or "),F={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},N=t("MathJax API"),z=t("."),A={class:"custom-block details"},O=e("summary",null,"Demo",-1),Y=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Waline highlighter \u6848\u4F8B</title>
    <script src="https://unpkg.com/@waline/client@v1/dist/waline.js"><\/script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@waline/client@v1/dist/waline.css"
    />
    <script src="https://unpkg.com/katex@v0.15"><\/script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/katex@v0.15/dist/katex.min.css"
    />
  </head>
  <body>
    <div id="waline" style="max-width: 800px; margin: 0 auto"></div>
    <script>
      const waline = Waline.init({
        el: '#waline',
        serverURL: 'https://waline.vercel.app',
        path: '/',
        lang: 'en-US',
        texRenderer: (blockmode, tex) =>
          window.katex.renderToString(tex, {
            displayMode: blockmode,
            throwOnError: false,
          }),
      });
    <\/script>
  </body>
</html>
`)])],-1),J=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Waline highlighter \u6848\u4F8B</title>
    <script src="https://unpkg.com/@waline/client@v1/dist/waline.js"><\/script>
    <link
      rel="stylesheet"
      href="https://unpkg.com/@waline/client@v1/dist/waline.css"
    />
    <script src="https://unpkg.com/mathjax@v3/es5/tex-svg.js"><\/script>
  </head>
  <body>
    <div id="waline" style="max-width: 800px; margin: 0 auto"></div>
    <script>
      const waline = Waline.init({
        el: '#waline',
        serverURL: 'https://waline.vercel.app',
        path: '/',
        lang: 'en-US',
        texRenderer: (blockmode, tex) =>
          window.MathJax.startup.adaptor.outerHTML(
            window.MathJax.tex2svg(tex, {
              display: blockmode,
            })
          ),
      });
    <\/script>
  </body>
</html>
`)])],-1),B=n('<h2 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h2><ul><li>Type: <code>boolean</code></li><li>Default: <code>true</code></li></ul><p>Whether show copyright and version in footer.</p><div class="custom-container tip"><p class="custom-container-title">Tips</p><p>We hope you can keep it on to support Waline.</p></div>',4);function H(G,K){const i=l("RouterLink"),o=l("ExternalLinkIcon"),r=l("CodeGroupItem"),c=l("CodeGroup");return p(),h(m,null,[g,e("p",null,[v,s(i,{to:"/en/guide/client/i18n.html"},{default:a(()=>[x]),_:1}),w]),y,f,e("p",null,[_,s(i,{to:"/en/guide/client/emoji.html"},{default:a(()=>[k]),_:1})]),b,e("p",null,[q,s(i,{to:"/en/guide/client/style.html"},{default:a(()=>[T]),_:1}),j]),D,M,e("p",null,[U,W,L,R,C,E,P,e("a",S,[I,s(o)]),X,e("a",F,[N,s(o)]),z]),e("details",A,[O,s(c,null,{default:a(()=>[s(r,{title:"KaTex"},{default:a(()=>[Y]),_:1}),s(r,{title:"MathJax"},{default:a(()=>[J]),_:1})]),_:1})]),B],64)}var Q=d(u,[["render",H],["__file","component.html.vue"]]);export{Q as default};
