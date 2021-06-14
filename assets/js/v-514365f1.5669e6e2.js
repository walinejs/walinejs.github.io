(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4104],{3106:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>s});const s={key:"v-514365f1",path:"/en/advanced/why.html",title:"Why Waline?",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Problem of Valine",slug:"problem-of-valine",children:[{level:3,title:"Not Open Source",slug:"not-open-source",children:[]},{level:3,title:"XSS",slug:"xss",children:[]},{level:3,title:"Privacy Leak",slug:"privacy-leak",children:[]},{level:3,title:"Read Statistics Tampering",slug:"read-statistics-tampering",children:[]}]},{level:2,title:"Born of Waline",slug:"born-of-waline",children:[]}],filePathRelative:"en/advanced/why.md",git:{updatedTime:1623665832e3,contributors:[]}}},9631:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>L});var s=a(8917);const t=(0,s.Wm)("h1",{id:"why-waline"},[(0,s.Wm)("a",{class:"header-anchor",href:"#why-waline"},"#"),(0,s.Uk)(" Why Waline?")],-1),o={href:"https://valine.js.org",target:"_blank",rel:"noopener noreferrer"},i=(0,s.Uk)("Valine"),r=(0,s.Uk)(" an exquisite style, simple operation, and efficient deployment review system. The first time I came into contact, I was attracted by its exquisite style and serverless characteristics. It doesn't require the backend service. The frontend interacts with the LeanCloud storage service directly, which is really cool! But as I understand deeper, I find out it's problems."),p=(0,s.uE)('<h2 id="problem-of-valine"><a class="header-anchor" href="#problem-of-valine">#</a> Problem of Valine</h2><h3 id="not-open-source"><a class="header-anchor" href="#not-open-source">#</a> Not Open Source</h3><p>The author only push the compiled files to the GitHub repository starting from version <code>1.4.0</code>, and the source code stop updating. May be the author have a broken heart in open source. While for users like me who want to add or modify project, this problem is a bit uncomfortable.</p><h3 id="xss"><a class="header-anchor" href="#xss">#</a> XSS</h3><p>Since the very early version, users have reported Valine&#39;s XSS problems, and the community is also using various methods to fix these problems. Including the addition of verification codes, frontend XSS filtering and other methods. However, the author later realized that all the frontend verification can only prevent the gentleman, so the restriction such as verification code is removed.</p><p>Now when the frontend publishes a comment, Markdown will be converted into HTML, and then execute an XSS filter function on the frontend before be submitted to LeanCloud. After getting the data from LeanCloud, it is directly inserted to DOM. Obviously, the process is problematic. As long as the HTML is submitted directly and displayed directly after the HTML is obtained, XSS cannot be eradicated fundamentally.</p><div class="custom-container tip"><p class="custom-container-title">Fundamental solution</p><p>For stored XSS attacks, we can use escape HTML codes to solve them permanently. Just like old BBCode, only markdown content is submit to the database. The frontend reads the content and encodes all HTML before displaying it after Markdown conversion.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">encodeForHTML</span><span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token string">&#39;&#39;</span> <span class="token operator">+</span> str<span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&amp;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;amp;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;lt;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&gt;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;gt;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&quot;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;quot;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&#39;</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;#x27;&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\/</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&amp;#x2F;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div><p>Since Valine is a serverless system, attackers can directly reach the storage stage. All precautions before data storage are invalid and can only be processed during the displaying process. Because all HTML cannot be parsed after being escaped, we can ensure that the converted HTML has no chance of being inserted.</p><p>Since Valine is no longer open source, pull requests cannot be opened.</p></div><p>Since the above method will completely restrict users in the scope of Markdown, Waline inludes <code>DOMPurify</code> on the client side since <code>0.15.0</code> to prevent XSS. Besides the regular XSS sterilization, <code>&lt;form&gt;</code> and <code>&lt;input&gt;</code> are disabled, and autoplay of the media are also disabled. At the same time, all external links will be processed and opened in a new window with rel of <code>noopener noreferrer</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>We will pay extra attention to this change. If you encounter unfriendly comments that can bypass the existing protection during usage, feel free to give us feedback.</p></div><h3 id="privacy-leak"><a class="header-anchor" href="#privacy-leak">#</a> Privacy Leak</h3><p>Besides direct access to storage, the attacker can also read any data directly. If a database field has read permission to everyone, the content of the field is completely transparent to the attacker.</p>',11),l=(0,s.Uk)("In the comment data, the two fields IP and mailbox contain the user's sensitive data. Mr.Deng wrote an article specifically to criticize the problem "),c={href:"https://ttys3.net/post/hugo/please-stop-using-valine-js-comment-system-until-it-fixed-the-privacy-leaking-problem/",target:"_blank",rel:"noopener noreferrer"},u=(0,s.Uk)("Please stop using the Valine.js comment system immediately unless it fixes the user privacy leak"),d=(0,s.Uk)(". Even when the "),h={href:"https://juejin.cn",target:"_blank",rel:"noopener noreferrer"},m=(0,s.Uk)("JueJin"),k=(0,s.Uk)(" community used LeanCloud in early years, the security problem of "),g={href:"https://m.weibo.cn/detail/4568007327622344?cid=4568044392682999",target:"_blank",rel:"noopener noreferrer"},f=(0,s.Uk)("disclosed user's mobile phone number"),b=(0,s.Uk)(" was exposed."),v=(0,s.Wm)("p",null,[(0,s.Uk)("In order to circumvent this problem, the author of Valine added the "),(0,s.Wm)("code",null,"recordIP"),(0,s.Uk)(" configuration to set whether to allow recording of user IP. Since there is no server, it can only be solved by not storing the value.")],-1),y=(0,s.Wm)("p",null,"There is still a problem with this option: Whether to record ip is based on the site owner's config, while commenters have no right to manage their own privacy.",-1),w=(0,s.Wm)("p",null,"Leaking of email address are another major privacy issue. It is completely feasible to calculate and report the md5 of the user's email at frontend to obtain the Gravatar avatar. But if sending email notification when a comment being replyed is needed, it is inevitable to store the original value of the user's email address. This problem can theoretically be solved by RSA encryption. The private key can be stored in the environment variable of LeanCloud. The client reports both the email md5 and the email encrypted by the public key. When LeanCloud wants to send email notifications, it reads the private key in the environment in the cloud function, and then decrypt to get the user email. However, considering the size and performance of the frontend RSA encryption library, it's not actual. Adding a server layer to filter sensitive information through the server side is definitely a better practice.",-1),x=(0,s.Wm)("h3",{id:"read-statistics-tampering"},[(0,s.Wm)("a",{class:"header-anchor",href:"#read-statistics-tampering"},"#"),(0,s.Uk)(" Read Statistics Tampering")],-1),W=(0,s.Uk)("Valien 1.2.0 adds the function of article reading statistics, the user visits the page and records the number of visits according to the url in the counter table in the background. Since the data needs to be updated every time the page is accessed, the permissions must be set to be writable in order to perform subsequent field updates. This creates a problem. In fact, the data can be updated to any value. If you interested in it, you can open the "),S={href:"https://valine.js.org/visitor.html",target:"_blank",rel:"noopener noreferrer"},T=(0,s.Uk)("https://valine.js.org/visitor.html"),I=(0,s.Uk)(" official website and enter the console and enter the following code to try. Remember to change the number back after trying it~"),j=(0,s.uE)('<div class="language-javascript ext-js"><pre class="language-javascript"><code><span class="token keyword">const</span> counter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AV<span class="token punctuation">.</span>Query</span><span class="token punctuation">(</span><span class="token string">&#39;Counter&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> resp <span class="token operator">=</span> <span class="token keyword">await</span> counter<span class="token punctuation">.</span><span class="token function">equalTo</span><span class="token punctuation">(</span><span class="token string">&#39;url&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/visitor.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nresp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&#39;time&#39;</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">100000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">save</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nlocation<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div><p>Fortunately, the value of the <code>time</code> field is of type Number, so other values cannot be inserted. If the <code>time</code> field is of string type, it may be an XSS vulnerability. A possible solution to this problem is not to use the accumulative storage method. Changed to store a read-only access record for each visit, and use the <code>count()</code> method for statistics when reading. In this way, all data is read-only, which solves the problem of tampering. This solution also has a problem: when the amount of data is relatively large, it will cause a certain pressure on the query.</p><p>If it is based on remaining the original data, only server layer can be added to isolate the modification permissions.</p><h2 id="born-of-waline"><a class="header-anchor" href="#born-of-waline">#</a> Born of Waline</h2><p>Based on the above reasons, Waline was born. Waline&#39;s original goal was only to add backend to Valine, but because Valine is not open source, it can only be implemented with frontend. Of course, many codes and logic of the frontend have reference Valine in order to be consistent with Valine&#39;s configuration. Even in the project&#39;s name, I derived it from Valine, so that everyone can understand that this project is a derivative of Valine.</p><p>Besides solving the above-mentioned security problems. the addition of the server side implement many features previously limited by no server side, including email notifications, spam comment filtering, etc.</p>',6),L={render:function(e,n){const a=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[t,(0,s.Wm)("p",null,[(0,s.Wm)("a",o,[i,(0,s.Wm)(a)]),r]),p,(0,s.Wm)("p",null,[l,(0,s.Wm)("a",c,[u,(0,s.Wm)(a)]),d,(0,s.Wm)("a",h,[m,(0,s.Wm)(a)]),k,(0,s.Wm)("a",g,[f,(0,s.Wm)(a)]),b]),v,y,w,x,(0,s.Wm)("p",null,[W,(0,s.Wm)("a",S,[T,(0,s.Wm)(a)]),I]),j],64)}}}}]);