import{ac as n,y as o,z as i,C as c,v as l,L as e,G as t,ae as a,ad as r,O as d}from"./framework-93eb3129.js";const u={},h=l("p",null,"你可以在评论中添加多样化的内容，包括经过扩展的 Markdown 语法和 HTML 标签。",-1),p=l("h2",{id:"格式支持",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#格式支持","aria-hidden":"true"},"#"),e(" 格式支持")],-1),m=l("p",null,"我们支持完整的 CommonMark (标准 Markdown 语法)，同时支持以下扩展:",-1),_=l("ul",null,[l("li",null,"GFM 风格的表格"),l("li",null,"GFM 风格的删除线"),l("li",null,"上下角标"),l("li",null,"Emoji 表情"),l("li",null,"代码块高亮"),l("li",null,[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mtext",null,"TeX")]),l("annotation",{encoding:"application/x-tex"},"\\TeX")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.8988em","vertical-align":"-0.2155em"}}),l("span",{class:"mord text"},[l("span",{class:"mord textrm"},"T"),l("span",{class:"mspace",style:{"margin-right":"-0.1667em"}}),l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.4678em"}},[l("span",{style:{top:"-2.7845em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord textrm"},"E")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.2155em"}},[l("span")])])]),l("span",{class:"mspace",style:{"margin-right":"-0.125em"}}),l("span",{class:"mord textrm"},"X")])])])]),e(" 公式")])],-1),x=l("div",{class:"custom-container info"},[l("p",{class:"custom-container-title"},"GFM"),l("p",null,"Github Flavored Markdown, 即 Github 风格语法")],-1),k=l("h2",{id:"有限的预览支持",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#有限的预览支持","aria-hidden":"true"},"#"),e(" 有限的预览支持")],-1),g=l("p",null,[e("为了控制客户端体积大小，我们仅在官方客户端 "),l("code",null,"@waline/client"),e(" 放置了小体积的 Markdown 解析器，这导致很多语法并"),l("strong",null,"不能在预览面板内正确显示"),e(" (它们可以"),l("strong",null,"正确的渲染在评论区"),e(")。")],-1),f=l("p",null,"这包含如下限制:",-1),v=l("li",null,[l("p",null,[e("标准的 emoji 语法 (如 🎉"),l("code",null,":tada:"),e(") 无法正确渲染")])],-1),w=l("li",null,[l("p",null,[e("上下角标 (如: "),l("code",null,"H~2~O"),e("、"),l("code",null,"x^2^"),e(") 无法正确渲染")])],-1),M=l("p",null,[e("Tex 语法，也就是数学公式 (如: "),l("code",null,"$a = 1$"),e(") 默认无法渲染。")],-1),b=l("code",null,"texRenderer",-1),y=l("p",null,"在默认的高亮器下，代码块将通过特定分隔符使用随机颜色进行高亮。",-1),E=l("code",null,"highlighter",-1),T=r('<h2 id="更多" tabindex="-1"><a class="header-anchor" href="#更多" aria-hidden="true">#</a> 更多</h2><div class="custom-container tip"><p class="custom-container-title">运行原理</p><ol><li><p>考虑到体积问题，客户端使用 <code>marked</code> 进行渲染并默认使用 &lt; 1kb 的高亮器进行高亮，同时不包含 Tex 渲染器，导致以上限制。</p></li><li><p>用户提交评论时，客户端嵌入自定义 Emoji 表情图片、并将评论原文会发送到服务端。</p></li><li><p>服务端接收到原文，使用 <code>markdown-it</code> 以相关插件对 markdown 进行正确的渲染，同时使用 <code>prism.js</code> 为代码块根据语言进行高亮，并按照用户设置进行 Tex 渲染，最后执行 XSS 处理。</p></li><li><p>处理完成后，服务端会将正确的渲染内容进行储存，并在需要时返回给客户端，保证评论区正常显示。</p></li></ol></div>',2);function C(G,L){const s=d("RouterLink");return o(),i("div",null,[h,c(" more "),p,m,_,x,l("p",null,[e("同时，你可以在不触发 "),t(s,{to:"/guide/features/safety.html#%E8%AF%84%E8%AE%BA%E5%AE%89%E5%85%A8"},{default:a(()=>[e("保护机制")]),_:1}),e(" 的情况下自由嵌入任何的 HTML 内容。")]),k,g,f,l("ul",null,[v,w,l("li",null,[M,l("p",null,[e("在官方客户端下，你可以通过设置 "),b,e(" 选项来设置预览时的 Tex 渲染,，参见 "),t(s,{to:"/cookbook/customize/tex-renderer.html"},{default:a(()=>[e("Cookbook → 使用自定义 TEX 渲染器")]),_:1}),e("。")])]),l("li",null,[y,l("p",null,[e("在官方客户端下，你可以通过设置 "),E,e(" 选项来设置预览时的代码高亮，参见 "),t(s,{to:"/cookbook/customize/highlighter.html"},{default:a(()=>[e("Cookbook → 自定义代码高亮")]),_:1}),e("。")])])]),T])}const F=n(u,[["render",C],["__file","syntax.html.vue"]]);export{F as default};
