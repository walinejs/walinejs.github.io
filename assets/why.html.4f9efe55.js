import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r,o as s,c as l,a as t,b as o,F as d,d as e,e as a}from"./app.1819a339.js";const c={},h={href:"https://valine.js.org",target:"_blank",rel:"noopener noreferrer"},p=e("Valine"),u=e(" an exquisite style, simple operation, and efficient deployment review system. The first time I came into contact, I was attracted by its exquisite style and serverless characteristics. It doesn't require the backend service. The frontend interacts with the LeanCloud storage service directly, which is really cool! But as I understand deeper, I find out it's problems."),m=a(`<h2 id="problem-of-valine" tabindex="-1"><a class="header-anchor" href="#problem-of-valine" aria-hidden="true">#</a> Problem of Valine</h2><h3 id="not-open-source" tabindex="-1"><a class="header-anchor" href="#not-open-source" aria-hidden="true">#</a> Not Open Source</h3><p>The author only push the compiled files to the GitHub repository starting from version <code>1.4.0</code>, and the source code stop updating. May be the author have a broken heart in open source. While for users like me who want to add or modify project, this problem is a bit uncomfortable.</p><h3 id="xss" tabindex="-1"><a class="header-anchor" href="#xss" aria-hidden="true">#</a> XSS</h3><p>Since the very early version, users have reported Valine&#39;s XSS problems, and the community is also using various methods to fix these problems. Including the addition of verification codes, frontend XSS filtering and other methods. However, the author later realized that all the frontend verification can only prevent the gentleman, so the restriction such as verification code is removed.</p><p>Now when the frontend publishes a comment, Markdown will be converted into HTML, and then execute an XSS filter function on the frontend before be submitted to LeanCloud. After getting the data from LeanCloud, it is directly inserted to DOM. Obviously, the process is problematic. As long as the HTML is submitted directly and displayed directly after the HTML is obtained, XSS cannot be eradicated fundamentally.</p><div class="custom-container note"><p class="custom-container-title">Fundamental solution</p><p>For stored XSS attacks, we can use escape HTML codes to solve them permanently. Just like old BBCode, only markdown content is submit to the database. The frontend reads the content and encodes all HTML before displaying it after Markdown conversion.</p><div class="language-javascript ext-js"><pre class="language-javascript"><code>function encodeForHTML(str) {
  return (&#39;&#39; + str)
    .replace(/&amp;/g, &#39;&amp;amp;&#39;)
    .replace(/&lt;/g, &#39;&amp;lt;&#39;)
    .replace(/&gt;/g, &#39;&amp;gt;&#39;)
    .replace(/&quot;/g, &#39;&amp;quot;&#39;)
    .replace(/&#39;/g, &#39;&amp;#x27;&#39;)
    .replace(/\\//g, &#39;&amp;#x2F;&#39;);
}
</code></pre></div><p>Since Valine is a serverless system, attackers can directly reach the storage stage. All precautions before data storage are invalid and can only be processed during the displaying process. Because all HTML cannot be parsed after being escaped, we can ensure that the converted HTML has no chance of being inserted.</p><p>Since Valine is no longer open source, pull requests cannot be opened.</p></div><p>Since the above method will completely restrict users in the scope of Markdown, Waline inludes <code>DOMPurify</code> on the client side since <code>0.15.0</code> to prevent XSS. Besides the regular XSS sterilization:</p><ul><li><code>&lt;form&gt;</code> and <code>&lt;input&gt;</code> are disabled</li><li>style inject is disabled</li><li>autoplay of the media is disabled</li><li>all external links will be processed and opened in a new window with rel of <code>noopener noreferrer</code>.</li></ul><h3 id="privacy-leak" tabindex="-1"><a class="header-anchor" href="#privacy-leak" aria-hidden="true">#</a> Privacy Leak</h3><p>Besides direct access to storage, the attacker can also read any data directly. If a database field has read permission to everyone, the content of the field is completely transparent to the attacker.</p>`,11),f=e("In the comment data, the two fields IP and mailbox contain the user's sensitive data. Mr.Deng wrote an article specifically to criticize the problem "),b={href:"https://ttys3.net/post/hugo/please-stop-using-valine-js-comment-system-until-it-fixed-the-privacy-leaking-problem/",target:"_blank",rel:"noopener noreferrer"},v=e("Please stop using the Valine.js comment system immediately unless it fixes the user privacy leak"),y=e(". Even when the "),g={href:"https://juejin.cn",target:"_blank",rel:"noopener noreferrer"},_=e("JueJin"),w=e(" community used LeanCloud in early years, the security problem of "),k={href:"https://m.weibo.cn/detail/4568007327622344?cid=4568044392682999",target:"_blank",rel:"noopener noreferrer"},S=e("disclosed user's mobile phone number"),x=e(" was exposed."),I=t("p",null,[e("In order to circumvent this problem, the author of Valine added the "),t("code",null,"recordIP"),e(" configuration to set whether to allow recording of user IP. Since there is no server, it can only be solved by not storing the value.")],-1),T=t("p",null,"There is still a problem with this option: Whether to record ip is based on the site owner's config, while commenters have no right to manage their own privacy.",-1),V=t("p",null,"Leaking of email address are another major privacy issue. It is completely feasible to calculate and report the md5 of the user's email at frontend to obtain the Gravatar avatar. But if sending email notification when a comment being replyed is needed, it is inevitable to store the original value of the user's email address. This problem can theoretically be solved by RSA encryption. The private key can be stored in the environment variable of LeanCloud. The client reports both the email md5 and the email encrypted by the public key. When LeanCloud wants to send email notifications, it reads the private key in the environment in the cloud function, and then decrypt to get the user email. However, considering the size and performance of the frontend RSA encryption library, it's not actual. Adding a server layer to filter sensitive information through the server side is definitely a better practice.",-1),j=t("h3",{id:"read-statistics-tampering",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#read-statistics-tampering","aria-hidden":"true"},"#"),e(" Read Statistics Tampering")],-1),L=e("Valien 1.2.0 adds the function of article reading statistics, the user visits the page and records the number of visits according to the url in the counter table in the background. Since the data needs to be updated every time the page is accessed, the permissions must be set to be writable in order to perform subsequent field updates. This creates a problem. In fact, the data can be updated to any value. If you interested in it, you can open the "),M={href:"https://valine.js.org/visitor.html",target:"_blank",rel:"noopener noreferrer"},B=e("https://valine.js.org/visitor.html"),H=e(" official website and enter the console and enter the following code to try. Remember to change the number back after trying it~"),C=a(`<div class="language-javascript ext-js"><pre class="language-javascript"><code>const counter = new AV.Query(&#39;Counter&#39;);
const resp = await counter.equalTo(&#39;url&#39;, &#39;/visitor.html&#39;).find();
resp[0].set(&#39;time&#39;, -100000).save();
location.reload();
</code></pre></div><p>Fortunately, the value of the <code>time</code> field is of type Number, so other values cannot be inserted. If the <code>time</code> field is of string type, it may be an XSS vulnerability. A possible solution to this problem is not to use the accumulative storage method. Changed to store a read-only access record for each visit, and use the <code>count()</code> method for statistics when reading. In this way, all data is read-only, which solves the problem of tampering. This solution also has a problem: when the amount of data is relatively large, it will cause a certain pressure on the query.</p><p>If it is based on remaining the original data, only server layer can be added to isolate the modification permissions.</p><h2 id="born-of-waline" tabindex="-1"><a class="header-anchor" href="#born-of-waline" aria-hidden="true">#</a> Born of Waline</h2><p>Based on the above reasons, Waline was born. Waline&#39;s original goal was only to add backend to Valine, but because Valine is not open source, it can only be implemented with frontend. Of course, many codes and logic of the frontend have reference Valine in order to be consistent with Valine&#39;s configuration. Even in the project&#39;s name, I derived it from Valine, so that everyone can understand that this project is a derivative of Valine.</p><p>Besides solving the above-mentioned security problems. the addition of the server side implement many features previously limited by no server side, including email notifications, spam comment filtering, etc.</p>`,6);function q(X,A){const n=r("ExternalLinkIcon");return s(),l(d,null,[t("p",null,[t("a",h,[p,o(n)]),u]),m,t("p",null,[f,t("a",b,[v,o(n)]),y,t("a",g,[_,o(n)]),w,t("a",k,[S,o(n)]),x]),I,T,V,j,t("p",null,[L,t("a",M,[B,o(n)]),H]),C],64)}var P=i(c,[["render",q],["__file","why.html.vue"]]);export{P as default};
