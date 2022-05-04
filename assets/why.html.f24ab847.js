import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as l,c as s,a as e,b as t,F as d,e as o,d as a}from"./app.1819a339.js";const c={},p=o(`<h2 id="valine" tabindex="-1"><a class="header-anchor" href="#valine" aria-hidden="true">#</a> Valine</h2><p>Valine \u662F\u4E00\u6B3E\u6837\u5F0F\u7CBE\u7F8E\uFF0C\u64CD\u4F5C\u7B80\u5355\uFF0C\u90E8\u7F72\u9AD8\u6548\u7684\u8BC4\u8BBA\u7CFB\u7EDF\u3002\u7B2C\u4E00\u6B21\u63A5\u89E6\u4FBF\u88AB\u5B83\u7CBE\u7F8E\u7684\u6837\u5F0F\uFF0C\u65E0\u670D\u52A1\u7AEF\u7684\u7279\u6027\u7ED9\u5438\u5F15\u4E86\u3002\u5B83\u4E0D\u542B\u670D\u52A1\u7AEF\uFF0C\u524D\u7AEF\u76F4\u63A5\u548C LeanCloud \u5B58\u50A8\u670D\u52A1\u4EA4\u4E92\uFF0C\u771F\u662F\u592A\u9177\u4E86\uFF01\u4F46\u662F\u968F\u7740\u6DF1\u5165\u4E86\u89E3\uFF0C\u6211\u53D1\u73B0\u5B83\u5B58\u5728\u7740\u4E00\u4E9B\u95EE\u9898\u3002</p><h2 id="valine-\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#valine-\u7684\u95EE\u9898" aria-hidden="true">#</a> Valine \u7684\u95EE\u9898</h2><h3 id="\u6E90\u7801\u4E0D\u5F00\u653E" tabindex="-1"><a class="header-anchor" href="#\u6E90\u7801\u4E0D\u5F00\u653E" aria-hidden="true">#</a> \u6E90\u7801\u4E0D\u5F00\u653E</h3><p>\u4F5C\u8005\u4E0D\u77E5\u4E3A\u4F55\u4ECE <code>1.4.0</code> \u7248\u672C\u5F00\u59CB\u53EA\u63A8\u9001\u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u5230 GitHub \u4ED3\u5E93\u4E2D\uFF0C\u6E90\u6587\u4EF6\u505C\u6B62\u66F4\u65B0\u3002\u53EF\u80FD\u662F\u88AB\u5F00\u6E90\u4F24\u4E86\u5FC3\u5427\u3002\u5BF9\u4E8E\u6211\u8FD9\u79CD\u60F3\u589E\u52A0\u6216\u8005\u4FEE\u6539\u529F\u80FD\u7684\u7528\u6237\u6765\u8BF4\uFF0C\u8FD9\u4E2A\u95EE\u9898\u5C31\u6709\u70B9\u96BE\u53D7\u4E86\u3002</p><h3 id="xss-\u5B89\u5168" tabindex="-1"><a class="header-anchor" href="#xss-\u5B89\u5168" aria-hidden="true">#</a> XSS \u5B89\u5168</h3><p>\u4ECE\u5F88\u65E9\u7684\u7248\u672C\u5F00\u59CB\u5C31\u6709\u7528\u6237\u62A5\u544A\u4E86 Valine \u7684 XSS \u95EE\u9898\uFF0C\u793E\u533A\u4E5F\u5728\u4F7F\u7528\u5404\u79CD\u65B9\u6CD5\u5728\u4FEE\u590D\u8FD9\u4E9B\u95EE\u9898\u3002\u5305\u62EC\u589E\u52A0\u9A8C\u8BC1\u7801\u3001\u524D\u7AEF XSS \u8FC7\u6EE4\u7B49\u65B9\u5F0F\u3002\u4E0D\u8FC7\u540E\u6765\u4F5C\u8005\u624D\u660E\u767D\uFF0C\u524D\u7AEF\u7684\u4E00\u5207\u9A8C\u8BC1\u90FD\u53EA\u80FD\u9632\u541B\u5B50\uFF0C\u6240\u4EE5\u53C8\u53BB\u9664\u4E86\u9A8C\u8BC1\u7801\u4E4B\u7C7B\u7684\u9650\u5236\u3002</p><p>\u73B0\u6709\u7684\u903B\u8F91\u91CC\uFF0C\u524D\u7AEF\u53D1\u5E03\u8BC4\u8BBA\u7684\u65F6\u5019\u4F1A\u5C06 Markdown \u8F6C\u6362\u6210 HTML \u7136\u540E\u8D70\u4E00\u4E0B\u524D\u7AEF\u7684\u4E00\u4E2A XSS \u8FC7\u6EE4\u65B9\u6CD5\u6700\u540E\u63D0\u4EA4\u5230 LeanCloud \u4E2D\u3002\u4ECE LeanCloud \u4E2D\u62FF\u5230\u6570\u636E\u4E4B\u540E\u56E0\u4E3A\u662F HTML \u76F4\u63A5\u63D2\u5165\u8FDB\u884C\u663E\u793A\u5373\u53EF\u3002\u5F88\u660E\u663E\uFF0C\u8FD9\u4E2A\u6D41\u7A0B\u662F\u5B58\u5728\u95EE\u9898\u7684\u3002\u53EA\u8981\u76F4\u63A5\u63D0\u4EA4\u7684\u662F HTML \u800C\u4E14\u62FF\u5230 HTML \u4E4B\u540E\u76F4\u63A5\u8FDB\u884C\u5C55\u793A\u7684\u8BDD\uFF0CXSS \u4ECE\u6839\u672C\u4E0A\u662F\u65E0\u6CD5\u6839\u9664\u7684\u3002</p><div class="custom-container info"><p class="custom-container-title">\u6839\u672C\u7684\u89E3\u51B3\u529E\u6CD5</p><p>\u9488\u5BF9\u5B58\u50A8\u578B\u7684 XSS \u653B\u51FB\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u8F6C\u4E49 HTML \u7F16\u7801\u4E00\u52B3\u6C38\u9038\u7684\u89E3\u51B3\u3002\u53EA\u9700\u6548\u4EFF\u65E9\u524D BBCode \u7684\u505A\u6CD5\uFF0C\u63D0\u4EA4\u5230\u6570\u636E\u5E93\u7684\u662F Markdown \u5185\u5BB9\u3002\u524D\u7AEF\u8BFB\u53D6\u5230\u5185\u5BB9\u5BF9\u6240\u6709 HTML \u8FDB\u884C\u7F16\u7801\u540E\u518D\u8FDB\u884C Markdown \u8F6C\u6362\u540E\u5C55\u793A\u3002</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>function encodeForHTML(str) {
  return (&#39;&#39; + str)
    .replace(/&amp;/g, &#39;&amp;amp;&#39;)
    .replace(/&lt;/g, &#39;&amp;lt;&#39;)
    .replace(/&gt;/g, &#39;&amp;gt;&#39;)
    .replace(/&quot;/g, &#39;&amp;quot;&#39;)
    .replace(/&#39;/g, &#39;&amp;#x27;&#39;)
    .replace(/\\//g, &#39;&amp;#x2F;&#39;);
}
</code></pre></div><p>\u7531\u4E8E Serverless \u653B\u51FB\u8005\u662F\u53EF\u4EE5\u76F4\u8FBE\u5B58\u50A8\u9636\u6BB5\uFF0C\u6240\u4EE5\u6570\u636E\u5B58\u50A8\u4E4B\u524D\u7684\u4E00\u5207\u9632\u8303\u662F\u65E0\u6548\u7684\uFF0C\u53EA\u80FD\u5728\u8BFB\u53D6\u5C55\u793A\u8FC7\u7A0B\u5904\u7406\u3002\u7531\u4E8E\u6240\u6709\u7684 HTML \u8F6C\u4E49\u540E\u65E0\u6CD5\u89E3\u6790\uFF0CMarkdown \u76F8\u5F53\u4E8E\u6211\u4EEC\u6839\u636E\u81EA\u5B9A\u4E49\u7684\u8BED\u6CD5\u89E3\u6790\u6210 HTML\uFF0C\u4FDD\u8BC1\u8F6C\u6362\u540E\u7684 HTML \u6CA1\u6709\u88AB\u63D2\u5165\u7684\u673A\u4F1A\u3002\u7531\u4E8E Valine \u6CA1\u6709\u5F00\u653E\u6E90\u4EE3\u7801\uFF0C\u6240\u4EE5\u65E0\u6CD5\u8FDB\u884C Pull Request\u3002</p></div><p>\u7531\u4E8E\u4E0A\u8FF0\u529E\u6CD5\u4F1A\u5B8C\u5168\u5C06\u7528\u6237\u9650\u5236\u5728 Markdown \u7684\u8303\u56F4\u5185\uFF0C\u76EE\u524D Waline \u5728\u5BA2\u6237\u7AEF\u81EA <code>0.15.0</code> \u540E\u5F15\u5165\u4E86 <code>DOMPurify</code> \u6765\u963B\u6B62 XSS\u3002\u9664\u5E38\u89C4\u7684 XSS \u8FC7\u6EE4\u5916\uFF0C\u9488\u5BF9\u6027\u7684:</p><ul><li>\u7981\u7528 <code>&lt;form&gt;</code>\u3001<code>&lt;input&gt;</code> \u7B49\u8868\u5355\u63A7\u4EF6</li><li>\u7981\u7528\u7528\u6237\u6837\u5F0F\u7684\u6DFB\u52A0</li><li>\u7981\u7528\u81EA\u52A8\u62D6\u52A8\u5C5E\u6027\u4E0E\u5A92\u4F53\u7684\u81EA\u52A8\u64AD\u653E</li><li>\u6240\u6709\u7684\u5916\u90E8\u94FE\u63A5\u5747\u4F1A\u88AB\u5904\u7406\uFF0C\u4EE5 <code>noopener noreferrer</code> \u7684\u5F62\u5F0F\u5728\u65B0\u7A97\u53E3\u6253\u5F00</li></ul><h3 id="\u9690\u79C1\u6CC4\u9732" tabindex="-1"><a class="header-anchor" href="#\u9690\u79C1\u6CC4\u9732" aria-hidden="true">#</a> \u9690\u79C1\u6CC4\u9732</h3><p>\u653B\u51FB\u8005\u9664\u4E86\u53EF\u4EE5\u4EFB\u610F\u5B58\u50A8\uFF0C\u4E5F\u53EF\u4EE5\u4EFB\u610F\u8BFB\u53D6\uFF0C\u6570\u636E\u5E93\u7684\u5B57\u6BB5\u5F00\u653E\u8BFB\u53D6\u6743\u9650\u540E\uFF0C\u8BE5\u5B57\u6BB5\u7684\u5185\u5BB9\u5BF9\u653B\u51FB\u8005\u662F\u5B8C\u5168\u900F\u660E\u7684\u3002</p>`,13),h=a("\u5728\u8BC4\u8BBA\u6570\u636E\u4E2D\uFF0CIP \u548C\u90AE\u7BB1\u4E24\u4E2A\u5B57\u6BB5\u5305\u542B\u4E86\u7528\u6237\u7684\u654F\u611F\u6570\u636E\u3002\u706F\u5927\u751A\u81F3\u4E13\u95E8\u5199\u4E86\u4E00\u7BC7\u6587\u7AE0\u6765\u6279\u5224\u8BE5\u95EE\u9898 "),u={href:"https://ttys3.net/post/hugo/please-stop-using-valine-js-comment-system-until-it-fixed-the-privacy-leaking-problem/",target:"_blank",rel:"noopener noreferrer"},_=a("\u300A\u8BF7\u9A6C\u4E0A\u505C\u6B62\u4F7F\u7528 Valine.js \u8BC4\u8BBA\u7CFB\u7EDF\uFF0C\u9664\u975E\u5B83\u4FEE\u590D\u4E86\u7528\u6237\u9690\u79C1\u6CC4\u9732\u95EE\u9898\u300B"),m=a("\u3002\u751A\u81F3\u6398\u91D1\u793E\u533A\u5728\u65E9\u671F\u4F7F\u7528 LeanCloud \u7684\u65F6\u5019\u4E5F\u66B4\u51FA\u8FC7 "),f={href:"https://m.weibo.cn/detail/4568007327622344?cid=4568044392682999",target:"_blank",rel:"noopener noreferrer"},g=a("\u6CC4\u9732\u7528\u6237\u624B\u673A\u53F7"),v=a(" \u7684\u5B89\u5168\u95EE\u9898\u3002"),S=e("p",null,[a("\u4E3A\u4E86\u89C4\u907F\u8FD9\u4E2A\u95EE\u9898\uFF0CValine \u4F5C\u8005\u589E\u52A0\u4E86 "),e("code",null,"recordIP"),a(" \u914D\u7F6E\u7528\u6765\u8BBE\u7F6E\u662F\u5426\u5141\u8BB8\u8BB0\u5F55\u7528\u6237 IP\u3002\u7531\u4E8E\u65E0\u670D\u52A1\u7AEF\uFF0C\u53EA\u80FD\u901A\u8FC7\u4E0D\u5B58\u50A8\u7684\u65B9\u5F0F\u89E3\u51B3\u3002")],-1),x=e("p",null,"\u8BE5\u914D\u7F6E\u9879\u4ECD\u5B58\u5728\u4E00\u4E2A\u95EE\u9898: \u8BB0\u5F55\u914D\u7F6E\u6743\u5728\u7F51\u7AD9\uFF0C\u8BC4\u8BBA\u8005\u65E0\u6743\u7BA1\u7406\u81EA\u5DF1\u7684\u9690\u79C1\u3002",-1),V=e("p",null,"\u90AE\u7BB1\u6CC4\u9732\u662F\u53E6\u4E00\u4E2A\u91CD\u5927\u9690\u79C1\u95EE\u9898\u3002\u5728\u524D\u7AEF\u8BA1\u7B97\u5E76\u4E0A\u62A5\u7528\u6237\u90AE\u7BB1\u7684 md5 \u7528\u6765\u83B7\u53D6 Gravatar \u5934\u50CF\u662F\u5B8C\u5168\u53EF\u884C\u7684\u3002\u4F46\u662F\u5982\u679C\u9700\u8981\u5F53\u8BC4\u8BBA\u88AB\u56DE\u590D\u65F6\u53D1\u9001\u90AE\u4EF6\u901A\u77E5\uFF0C\u5C31\u4E0D\u53EF\u907F\u514D\u7684\u8981\u5B58\u50A8\u7528\u6237\u90AE\u7BB1\u7684\u539F\u59CB\u503C\u3002\u8FD9\u4E2A\u95EE\u9898\u7406\u8BBA\u4E0A\u53EF\u4EE5\u901A\u8FC7 RSA \u52A0\u5BC6\u6765\u89E3\u51B3\uFF0C\u79C1\u94A5\u5B58\u50A8\u5728 LeanCloud \u7684\u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u540C\u65F6\u4E0A\u62A5\u90AE\u7BB1 md5 \u548C\u516C\u94A5\u52A0\u5BC6\u540E\u7684\u90AE\u7BB1\uFF0CLeanCloud \u5728\u53D1\u9001\u90AE\u4EF6\u901A\u77E5\u65F6\u5728\u4E91\u51FD\u6570\u4E2D\u901A\u8FC7\u73AF\u5883\u4E2D\u7684\u79C1\u94A5\u89E3\u5BC6\u5F97\u5230\u7528\u6237\u90AE\u7BB1\u3002\u4F46\u662F\u8003\u8651\u5230\u524D\u7AEF RSA \u52A0\u5BC6\u5E93\u7684\u4F53\u79EF\u4E0E\u6027\u80FD\uFF0C\u5B9E\u9645\u5E94\u7528\u53EF\u884C\u6027\u5F88\u5C0F\u3002\u589E\u52A0\u4E00\u5C42\u670D\u52A1\u7AEF\uFF0C\u901A\u8FC7\u670D\u52A1\u7AEF\u8FC7\u6EE4\u654F\u611F\u4FE1\u606F\u662F\u4E00\u4E2A\u8F83\u4F18\u7684\u505A\u6CD5\u3002",-1),L=e("h3",{id:"\u9605\u8BFB\u7EDF\u8BA1\u7BE1\u6539",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9605\u8BFB\u7EDF\u8BA1\u7BE1\u6539","aria-hidden":"true"},"#"),a(" \u9605\u8BFB\u7EDF\u8BA1\u7BE1\u6539")],-1),M=a("Valien 1.2.0 \u589E\u52A0\u4E86\u6587\u7AE0\u9605\u8BFB\u7EDF\u8BA1\u7684\u529F\u80FD\uFF0C\u7528\u6237\u8BBF\u95EE\u9875\u9762\u5C31\u4F1A\u5728\u540E\u53F0 Counter \u8868\u4E2D\u6839\u636E url \u8BB0\u5F55\u8BBF\u95EE\u6B21\u6570\u3002\u7531\u4E8E\u6BCF\u6B21\u8BBF\u95EE\u9875\u9762\u90FD\u9700\u8981\u66F4\u65B0\u6570\u636E\uFF0C\u6240\u4EE5\u5728\u6743\u9650\u4E0A\u5FC5\u987B\u8BBE\u7F6E\u6210\u53EF\u5199\uFF0C\u624D\u80FD\u8FDB\u884C\u540E\u7EED\u7684\u5B57\u6BB5\u66F4\u65B0\u3002\u8FD9\u6837\u5C31\u9020\u6210\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u5B9E\u9645\u4E0A\u8BE5\u6761\u6570\u636E\u662F\u53EF\u4EE5\u88AB\u66F4\u65B0\u6210\u4EFB\u610F\u503C\u7684\u3002\u611F\u5174\u8DA3\u7684\u540C\u5B66\u53EF\u4EE5\u6253\u5F00 "),b={href:"https://valine.js.org/visitor.html",target:"_blank",rel:"noopener noreferrer"},k=a("https://valine.js.org/visitor.html"),w=a(" \u5B98\u7F51\u9875\u9762\u540E\u8FDB\u5165\u63A7\u5236\u53F0\u8F93\u5165\u4EE5\u4E0B\u4EE3\u7801\u8BD5\u8BD5\u3002\u8BD5\u5B8C\u4E86\u8BB0\u5F97\u628A\u6570\u6539\u56DE\u53BB\u54C8~"),T=o(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>const counter = new AV.Query(&#39;Counter&#39;);
const resp = await counter.equalTo(&#39;url&#39;, &#39;/visitor.html&#39;).find();
resp[0].set(&#39;time&#39;, -100000).save();
location.reload();
</code></pre></div><p>\u503C\u5F97\u5E86\u5E78\u7684\u662F <code>time</code> \u5B57\u6BB5\u7684\u503C\u662F Number \u7C7B\u578B\u7684\uFF0C\u8FD9\u6837\u5176\u5B83\u7684\u503C\u65E0\u6CD5\u63D2\u5165\u3002\u5982\u679C <code>time</code> \u5B57\u6BB5\u662F\u5B57\u7B26\u4E32\u7C7B\u578B\u4F1A\u4EA7\u751F\u65B0\u7684 XSS \u6F0F\u6D1E\u3002\u8BE5\u95EE\u9898\u6709\u4E00\u4E2A\u53EF\u884C\u89E3\u51B3\u529E\u6CD5\uFF0C\u5C31\u662F\u4E0D\u4F7F\u7528\u6B21\u6570\u7D2F\u52A0\u7684\u5B58\u50A8\u65B9\u5F0F\u3002\u66F4\u6539\u4E3A\u6BCF\u6B21\u8BBF\u95EE\u90FD\u5B58\u50A8\u4E00\u6761\u53EA\u8BFB\u7684\u8BBF\u95EE\u8BB0\u5F55\uFF0C\u8BFB\u53D6\u7684\u65F6\u5019\u4F7F\u7528 <code>count()</code> \u65B9\u6CD5\u8FDB\u884C\u7EDF\u8BA1\u3002\u8FD9\u6837\u6240\u6709\u6570\u636E\u90FD\u662F\u53EA\u8BFB\u7684\uFF0C\u89E3\u51B3\u4E86\u7BE1\u6539\u7684\u95EE\u9898\u3002\u8FD9\u79CD\u89E3\u51B3\u65B9\u6848\u4E5F\u5B58\u5728\u95EE\u9898: \u6570\u636E\u91CF\u6BD4\u8F83\u5927\u65F6\u5BF9\u67E5\u8BE2\u4F1A\u9020\u6210\u4E00\u5B9A\u538B\u529B\u3002</p><p>\u5982\u679C\u9700\u8981\u4FDD\u6301\u539F\u6570\u636E\u7ED3\u6784\uFF0C\u53EA\u80FD\u589E\u52A0\u4E00\u5C42\u670D\u52A1\u7AEF\u8FDB\u884C\u4FEE\u6539\u6743\u9650\u7684\u9694\u79BB\u3002</p><h2 id="waline-\u7684\u8BDE\u751F" tabindex="-1"><a class="header-anchor" href="#waline-\u7684\u8BDE\u751F" aria-hidden="true">#</a> Waline \u7684\u8BDE\u751F</h2><p>\u57FA\u4E8E\u4EE5\u4E0A\u539F\u56E0\uFF0CWaline \u6A2A\u7A7A\u51FA\u4E16\u4E86\u3002Waline \u6700\u521D\u7684\u76EE\u6807\u4EC5\u4EC5\u662F\u4E3A Valine \u589E\u52A0\u4E0A\u670D\u52A1\u7AEF\u4E2D\u95F4\u5C42\uFF0C\u4F46\u662F\u7531\u4E8E Valine \u7684\u4E0D\u5F00\u6E90\u6240\u4EE5\u53EA\u80FD\u8FDE\u5E26\u524D\u7AEF\u4E5F\u5B9E\u73B0\u4E00\u904D\u3002\u5F53\u7136\u524D\u7AEF\u7684\u5F88\u591A\u4EE3\u7801\u548C\u903B\u8F91\u4E3A\u4E86\u548C Valine \u7684\u914D\u7F6E\u4FDD\u6301\u4E00\u81F4\u90FD\u6709\u53C2\u8003 Valine\u3002\u751A\u81F3\u5728\u540D\u5B57\u4E0A\uFF0C\u6211\u4E5F\u662F\u4ECE Valine \u4E0A\u884D\u751F\u7684\uFF0C\u8BA9\u5927\u5BB6\u80FD\u660E\u767D\u8FD9\u4E2A\u9879\u76EE\u662F Valine \u7684\u884D\u751F\u7248\u3002</p><p>\u589E\u52A0\u4E86\u670D\u52A1\u7AEF\u9664\u4E86\u89E3\u51B3\u4E86\u4E0A\u8FF0\u7684\u5B89\u5168\u95EE\u9898\uFF0C\u4E4B\u524D Valine \u53D7\u9650\u4E8E\u65E0\u670D\u52A1\u7AEF\u7684\u5F88\u591A\u529F\u80FD\u4E5F\u53EF\u4EE5\u5B9E\u73B0\u4E86\u3002\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u90AE\u4EF6\u901A\u77E5\u3001\u5783\u573E\u8BC4\u8BBA\u8FC7\u6EE4\u7B49\u3002</p>`,6);function H(j,C){const n=i("ExternalLinkIcon");return l(),s(d,null,[p,e("p",null,[h,e("a",u,[_,t(n)]),m,e("a",f,[g,t(n)]),v]),S,x,V,L,e("p",null,[M,e("a",b,[k,t(n)]),w]),T],64)}var B=r(c,[["render",H],["__file","why.html.vue"]]);export{B as default};
