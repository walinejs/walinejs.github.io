import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as p,c as h,a as e,b as s,w as a,F as m,e as n,d as t}from"./app.aeb891c7.js";const g={},u=n('<h2 id="serverurl" tabindex="-1"><a class="header-anchor" href="#serverurl" aria-hidden="true">#</a> serverURL</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u5FC5\u586B: \u662F</li></ul><p>Waline \u7684\u670D\u52A1\u7AEF\u5730\u5740\u3002</p><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>window.location.pathname</code></li></ul><p>\u5F53\u524D <em>\u6587\u7AE0\u9875</em> \u8DEF\u5F84\uFF0C\u7528\u4E8E\u533A\u5206\u4E0D\u540C\u7684 <em>\u6587\u7AE0\u9875</em>\uFF0C\u4EE5\u4FDD\u8BC1\u6B63\u786E\u8BFB\u53D6\u8BE5 <em>\u6587\u7AE0\u9875</em> \u4E0B\u7684\u8BC4\u8BBA\u5217\u8868\u3002</p><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u8BF7\u4FDD\u8BC1\u6BCF\u4E2A <em>\u6587\u7AE0\u9875</em> \u8DEF\u5F84\u7684\u552F\u4E00\u6027\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u4E0D\u540C <em>\u6587\u7AE0\u9875</em> \u4E0B\u52A0\u8F7D\u76F8\u540C\u8BC4\u8BBA\u5217\u8868\u7684\u60C5\u51B5\u3002</p><p>\u4F8B\u5B50: \u5982\u679C\u4F60\u7AD9\u70B9\u7684 <code>/example/path/</code> \u548C <code>/example/path</code> \u5BF9\u5E94\u540C\u4E00\u4E2A\u9875\u9762\uFF0C\u4F60\u6700\u597D\u5C06\u5176\u8BBE\u7F6E\u4E3A <code>window.location.pathname.replace(/\\/$/,&#39;&#39;)</code>\u3002</p></div><h2 id="lang" tabindex="-1"><a class="header-anchor" href="#lang" aria-hidden="true">#</a> lang</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;zh-CN&#39;</code></li></ul><p>\u591A\u8BED\u8A00\u652F\u6301\u3002</p><p>\u53EF\u9009\u503C:</p><ul><li><code>&#39;zh&#39;</code></li><li><code>&#39;zh-CN&#39;</code></li><li><code>&#39;zh-TW&#39;</code></li><li><code>&#39;en&#39;</code></li><li><code>&#39;en-US&#39;</code></li><li><code>&#39;jp&#39;</code></li><li><code>&#39;jp-JP&#39;</code></li><li><code>&#39;pt-BR&#39;</code></li><li><code>&#39;ru&#39;</code></li><li><code>&#39;ru-RU&#39;</code></li></ul>',12),x=t("\u5982\u9700 "),v=e("em",null,"\u81EA\u5B9A\u4E49\u8BED\u8A00",-1),w=t("\uFF0C\u8BF7\u53C2\u8003 "),_=t("i18n"),y=t("\u3002"),k=e("h2",{id:"emoji",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#emoji","aria-hidden":"true"},"#"),t(" emoji")],-1),f=e("ul",null,[e("li",null,[t("\u7C7B\u578B: "),e("code",null,"(string | WalineEmojiInfo)[] | false")]),e("li",null,[t("\u9ED8\u8BA4\u503C: "),e("code",null,"['https://cdn.jsdelivr.net/gh/walinejs/emojis/weibo']")])],-1),b=t("\u8868\u60C5\u8BBE\u7F6E\uFF0C\u8BE6\u89C1 "),q=t("\u81EA\u5B9A\u4E49\u8868\u60C5"),T=n('<h2 id="dark" tabindex="-1"><a class="header-anchor" href="#dark" aria-hidden="true">#</a> dark</h2><ul><li>\u7C7B\u578B: <code>string | boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>false</code></li></ul><p>\u6697\u9ED1\u6A21\u5F0F\u9002\u914D\u3002</p><ul><li>\u8BBE\u7F6E\u5E03\u5C14\u503C\u4F1A\u6839\u636E\u5176\u503C\u6765\u8BBE\u7F6E\u6697\u9ED1\u6A21\u5F0F\u3002</li><li>\u8BBE\u7F6E <code>&#39;auto&#39;</code> \u4F1A\u6839\u636E\u8BBE\u5907\u6697\u9ED1\u6A21\u5F0F\u81EA\u9002\u5E94\u3002</li><li>\u586B\u5165 CSS \u9009\u62E9\u5668\u4F1A\u5728\u5BF9\u5E94\u9009\u62E9\u5668\u751F\u6548\u65F6\u542F\u7528\u591C\u95F4\u6A21\u5F0F\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u9488\u5BF9\u4E0D\u540C\u4E3B\u9898\u7684\u4F8B\u5B50</p><ul><li><p><strong>Docusaurus</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-theme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\uFF0C\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-theme=&quot;dark&quot;]&#39;</code>\u3002</p></li><li><p><strong>hexo-theme-fluid</strong>: \u5B83\u4F1A\u5728 <code>&lt;html&gt;</code> \u4E0A\u901A\u8FC7\u8BBE\u7F6E <code>data-user-color-scheme=&quot;dark&quot;</code> \u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\u3002\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>&#39;html[data-user-color-scheme=&quot;dark&quot;]&#39;</code>\u3002</p></li><li><p><strong>vuepress-theme-hope</strong>: \u5B83\u4F1A\u5728 <code>&lt;body&gt;</code> \u4E0A\u6DFB\u52A0<code>theme-dark</code> class \u6765\u5F00\u542F\u6697\u9ED1\u6A21\u5F0F\u3002\u90A3\u4E48\u4F60\u9700\u8981\u5C06 <code>dark</code> \u9009\u9879\u8BBE\u7F6E\u4E3A <code>body.theme-dark</code>\u3002</p></li></ul></div>',5),M=t("\u81EA\u5B9A\u4E49\u6837\u5F0F\u4E0E\u6697\u9ED1\u6A21\u5F0F\u8BE6\u89C1 "),j=t("\u81EA\u5B9A\u4E49\u6837\u5F0F"),U=t("\u3002"),L=n(`<h2 id="meta" tabindex="-1"><a class="header-anchor" href="#meta" aria-hidden="true">#</a> meta</h2><ul><li>\u7C7B\u578B: <code>string[]</code></li><li>\u9ED8\u8BA4\u503C: <code>[&#39;nick&#39;, &#39;mail&#39;, &#39;link&#39;]</code></li></ul><p>\u8BC4\u8BBA\u8005\u76F8\u5173\u5C5E\u6027\u3002\u53EF\u9009\u503C: <code>&#39;nick&#39;</code>, <code>&#39;mail&#39;</code>, <code>&#39;link&#39;</code></p><h2 id="requiredmeta" tabindex="-1"><a class="header-anchor" href="#requiredmeta" aria-hidden="true">#</a> requiredMeta</h2><ul><li>\u7C7B\u578B: <code>string[]</code></li><li>\u9ED8\u8BA4\u503C: <code>[]</code></li></ul><p>\u8BBE\u7F6E<strong>\u5FC5\u586B\u9879</strong>\uFF0C\u9ED8\u8BA4\u533F\u540D\uFF0C\u53EF\u9009\u503C:</p><ul><li><code>[]</code></li><li><code>[&#39;nick&#39;]</code></li><li><code>[&#39;nick&#39;, &#39;mail&#39;]</code></li></ul><h2 id="login" tabindex="-1"><a class="header-anchor" href="#login" aria-hidden="true">#</a> login</h2><ul><li>\u7C7B\u578B: <code>string</code></li><li>\u9ED8\u8BA4\u503C: <code>&#39;enable&#39;</code></li></ul><p>\u767B\u5F55\u6A21\u5F0F\u72B6\u6001\uFF0C\u53EF\u9009\u503C:</p><ul><li><code>&#39;enable&#39;</code>: \u542F\u7528\u767B\u5F55 (\u9ED8\u8BA4)</li><li><code>&#39;disable&#39;</code>: \u7981\u7528\u767B\u5F55\uFF0C\u7528\u6237\u53EA\u80FD\u586B\u5199\u4FE1\u606F\u8BC4\u8BBA</li><li><code>&#39;force&#39;</code>: \u5F3A\u5236\u767B\u5F55\uFF0C\u7528\u6237\u5FC5\u987B\u6CE8\u518C\u5E76\u767B\u5F55\u624D\u53EF\u53D1\u5E03\u8BC4\u8BBA</li></ul><h2 id="wordlimit" tabindex="-1"><a class="header-anchor" href="#wordlimit" aria-hidden="true">#</a> wordLimit</h2><ul><li>\u7C7B\u578B: <code>number | [number, number]</code></li><li>\u9ED8\u8BA4\u503C: <code>0</code></li></ul><p>\u8BC4\u8BBA\u5B57\u6570\u9650\u5236\u3002\u586B\u5165\u5355\u4E2A\u6570\u5B57\u65F6\u4E3A\u6700\u5927\u5B57\u6570\u9650\u5236\u3002\u8BBE\u7F6E\u4E3A <code>0</code> \u65F6\u65E0\u9650\u5236\u3002</p><h2 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h2><ul><li>\u7C7B\u578B: <code>number</code></li><li>\u9ED8\u8BA4\u503C: <code>10</code></li></ul><p>\u8BC4\u8BBA\u5217\u8868\u5206\u9875\uFF0C\u6BCF\u9875\u6761\u6570\u3002</p><h2 id="imageuploader" tabindex="-1"><a class="header-anchor" href="#imageuploader" aria-hidden="true">#</a> imageUploader</h2><ul><li><p>\u7C7B\u578B: <code>WalineImageUploader | false</code></p></li><li><p>\u5FC5\u586B: \u5426</p></li><li><p>\u8BE6\u60C5:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineImageUploader = (image: File) =&gt; Promise&lt;string&gt;;
</code></pre></div></li></ul><p>\u81EA\u5B9A\u4E49\u56FE\u7247\u4E0A\u4F20\u65B9\u6CD5\u3002\u9ED8\u8BA4\u884C\u4E3A\u662F\u5C06\u56FE\u7247 Base 64 \u7F16\u7801\u5D4C\u5165\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>false</code> \u4EE5\u7981\u7528\u56FE\u7247\u4E0A\u4F20\u529F\u80FD\u3002</p><p>\u51FD\u6570\u5E94\u8BE5\u63A5\u6536\u56FE\u7247\u5BF9\u8C61\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u63D0\u4F9B\u56FE\u7247\u5730\u5740\u7684 Promise\u3002</p><details class="custom-block details"><summary>\u6848\u4F8B</summary><p>\u4E00\u4E2A\u4F7F\u7528<code>lsky - pro</code>\u56FE\u5E8A\u7684\u6848\u4F8B\u3002</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Waline imageUploader \u6848\u4F8B&lt;/title&gt;
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
        imageUploader: function(file) {
          let formData = new FormData();
          let headers = new Headers();

          formData.append(&#39;file&#39;, file);
          headers.append(&#39;Authorization&#39;, &#39;!{API TOKEN}&#39;);
          headers.append(&#39;Accept&#39;, &#39;application/json&#39;);

          return fetch(&#39;!{API URL}&#39;, {
            method: &#39;POST&#39;,
            headers: headers,
            body: formData
          }).then(resp =&gt; resp.json()).then(resp =&gt; resp.data.links.url);
        }
      });
    &lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre></div></details><h2 id="highlighter" tabindex="-1"><a class="header-anchor" href="#highlighter" aria-hidden="true">#</a> highlighter</h2><ul><li><p>\u7C7B\u578B: <code>WalineHighlighter | false</code></p></li><li><p>\u5FC5\u586B: \u5426</p></li><li><p>\u8BE6\u60C5:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineHighlighter = (code: string, lang: string) =&gt; string;
</code></pre></div></li></ul><p><strong>\u4EE3\u7801\u9AD8\u4EAE</strong>\uFF0C\u9ED8\u8BA4\u4F7F\u7528\u4E00\u4E2A &lt; 1kb \u7684\u7B80\u5355\u9AD8\u4EAE\u5668\u3002\u51FD\u6570\u4F20\u5165\u4EE3\u7801\u5757\u7684\u539F\u59CB\u5B57\u7B26\u548C\u4EE3\u7801\u5757\u7684\u8BED\u8A00\u3002\u4F60\u5E94\u8BE5\u89E6\u53D1\u56DE\u8C03\u51FD\u6570\u6216\u8005\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u3002</p><p>\u4F60\u53EF\u4EE5\u4F20\u5165\u4E00\u4E2A\u81EA\u5DF1\u7684\u4EE3\u7801\u9AD8\u4EAE\u5668\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>false</code> \u4EE5\u7981\u7528\u4EE3\u7801\u9AD8\u4EAE\u529F\u80FD\u3002</p><details class="custom-block details"><summary>\u6848\u4F8B</summary><p>\u4E00\u4E2A\u4F7F\u7528 PrismJS \u9AD8\u4EAE\u4EE3\u7801\u5757\u7684\u6848\u4F8B\u3002</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot; /&gt;
    &lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1.0&quot; /&gt;
    &lt;title&gt;Waline highlighter \u6848\u4F8B&lt;/title&gt;
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
</code></pre></div></details><h2 id="texrenderer" tabindex="-1"><a class="header-anchor" href="#texrenderer" aria-hidden="true">#</a> texRenderer</h2><ul><li><p>\u7C7B\u578B: <code>WalineTexRenderer | false</code></p></li><li><p>\u5FC5\u586B: \u5426</p></li><li><p>\u8BE6\u60C5:</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code>type WalineTexRenderer = (blockMode: boolean, tex: string) =&gt; string;
</code></pre></div></li></ul>`,29),P=e("p",null,[t("\u81EA\u5B9A\u4E49 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])]),t(" \u6E32\u67D3\uFF0C\u9ED8\u8BA4\u884C\u4E3A\u662F\u63D0\u793A\u9884\u89C8\u6A21\u5F0F\u4E0D\u652F\u6301 "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])]),t("\u3002\u51FD\u6570\u63D0\u4F9B\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u8868\u793A\u6E32\u67D3\u6A21\u5F0F\u662F\u5426\u4E3A\u5757\u7EA7\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F "),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])]),t(" \u7684\u5B57\u7B26\u4E32\uFF0C\u5E76\u8FD4\u56DE\u4E00\u6BB5 HTML \u5B57\u7B26\u4E32\u4F5C\u4E3A\u6E32\u67D3\u7ED3\u679C\u3002")],-1),W=t("\u4F60\u53EF\u4EE5\u81EA\u884C\u5F15\u5165 "),X=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])],-1),E=t(" \u6E32\u67D3\u5668\u5E76\u63D0\u4F9B\u9884\u89C8\u6E32\u67D3\uFF0C\u5EFA\u8BAE\u4F7F\u7528 Katex \u6216 MathJax\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A "),R=e("code",null,"false",-1),C=t(" \u4EE5\u7981\u6B62\u6E32\u67D3 "),I=e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"TeX")]),e("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),e("span",{class:"mord text"},[e("span",{class:"mord textrm"},"T"),e("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.4678em"}},[e("span",{style:{top:"-2.7845em"}},[e("span",{class:"pstrut",style:{height:"3em"}}),e("span",{class:"mord"},[e("span",{class:"mord textrm"},"E")])])]),e("span",{class:"vlist-s"},"\u200B")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.2155em"}},[e("span")])])]),e("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),e("span",{class:"mord textrm"},"X")])])])],-1),S=t("\u3002\u66F4\u591A\u8BF7\u53C2\u8003 "),D={href:"https://katex.org/docs/api.html#server-side-rendering-or-rendering-to-a-string",target:"_blank",rel:"noopener noreferrer"},z=t("KaTeX API"),F=t(" \u6216 "),J={href:"http://docs.mathjax.org/en/latest/web/typeset.html#converting-a-math-string-to-other-formats",target:"_blank",rel:"noopener noreferrer"},N=t("MathJax API"),O=t("\u3002"),A={class:"custom-block details"},B=e("summary",null,"\u6848\u4F8B",-1),H=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<!DOCTYPE html>
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
`)])],-1),G=e("div",{class:"language-html ext-html"},[e("pre",{class:"language-html"},[e("code",null,`<!DOCTYPE html>
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
`)])],-1),K=n('<h2 id="copyright" tabindex="-1"><a class="header-anchor" href="#copyright" aria-hidden="true">#</a> copyright</h2><ul><li>\u7C7B\u578B: <code>boolean</code></li><li>\u9ED8\u8BA4\u503C: <code>true</code></li><li>\u5FC5\u586B: \u5426</li></ul><p>\u662F\u5426\u663E\u793A\u9875\u811A\u7248\u6743\u4FE1\u606F\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u6211\u4EEC\u5E0C\u671B\u4F60\u4FDD\u6301\u6253\u5F00\u4EE5\u652F\u6301 Waline</p></div>',4);function V(Y,$){const i=l("RouterLink"),o=l("ExternalLinkIcon"),c=l("CodeGroupItem"),r=l("CodeGroup");return p(),h(m,null,[u,e("p",null,[x,v,w,s(i,{to:"/guide/client/i18n.html"},{default:a(()=>[_]),_:1}),y]),k,f,e("p",null,[b,s(i,{to:"/guide/client/emoji.html"},{default:a(()=>[q]),_:1})]),T,e("p",null,[M,s(i,{to:"/guide/client/style.html"},{default:a(()=>[j]),_:1}),U]),L,P,e("p",null,[W,X,E,R,C,I,S,e("a",D,[z,s(o)]),F,e("a",J,[N,s(o)]),O]),e("details",A,[B,s(r,null,{default:a(()=>[s(c,{title:"KaTex"},{default:a(()=>[H]),_:1}),s(c,{title:"MathJax"},{default:a(()=>[G]),_:1})]),_:1})]),K],64)}var ee=d(g,[["render",V],["__file","component.html.vue"]]);export{ee as default};
