(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8538],{6884:(e,n,a)=>{"use strict";a.r(n),a.d(n,{data:()=>t});const t={key:"v-eff96fe2",path:"/en/guide/get-started.html",title:"Get Started",lang:"en-US",frontmatter:{},excerpt:'<h1 id="get-started"><a class="header-anchor" href="#get-started">#</a> Get Started</h1>\n<p>Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.</p>\n',headers:[{level:2,title:"LeanCloud settings (Database)",slug:"leancloud-settings-database",children:[]},{level:2,title:"Deploy to Vercel (Server)",slug:"deploy-to-vercel-server",children:[]},{level:2,title:"Importing in HTML (Client)",slug:"importing-in-html-client",children:[]},{level:2,title:"Comment management (Management)",slug:"comment-management-management",children:[]}],filePathRelative:"en/guide/get-started.md",git:{updatedTime:1623632787e3,contributors:[]}}},7548:(e,n,a)=>{"use strict";a.r(n),a.d(n,{default:()=>E});var t=a(8917);const s=(0,t.Wm)("h1",{id:"get-started"},[(0,t.Wm)("a",{class:"header-anchor",href:"#get-started"},"#"),(0,t.Uk)(" Get Started")],-1),l=(0,t.Wm)("p",null,"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.",-1),o=(0,t.Wm)("h2",{id:"leancloud-settings-database"},[(0,t.Wm)("a",{class:"header-anchor",href:"#leancloud-settings-database"},"#"),(0,t.Uk)(" LeanCloud settings (Database)")],-1),p={href:"https://console.leancloud.app/login.html#/signin",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("sign in"),i=(0,t.Uk)(" or "),r={href:"https://console.leancloud.app/login.html#/signup",target:"_blank",rel:"noopener noreferrer"},u=(0,t.Uk)("sign up"),d=(0,t.Uk)(" LeanCloud and enter "),m={href:"https://console.leancloud.app/applist.html#/apps",target:"_blank",rel:"noopener noreferrer"},g=(0,t.Uk)("Console"),h=(0,t.Uk)("."),k=(0,t.Uk)("Click "),b={href:"https://console.leancloud.app/applist.html#/newapp",target:"_blank",rel:"noopener noreferrer"},v=(0,t.Uk)("Create app"),f=(0,t.Uk)(" button to create a new app and enter a name you like:"),y=(0,t.Wm)("p",null,[(0,t.Wm)("img",{src:"https://i.loli.net/2019/06/21/5d0c995c86fac81746.jpg",alt:"Create App"})],-1),w=(0,t.uE)('<li><p>Enter the app, then select <code>Settings</code> &gt; <code>App Keys</code> at the left bottom corner. You will see <code>APP ID</code>, <code>APP Key</code> and <code>Master Key</code> of your app. We will use them later</p><p><img src="https://i.loli.net/2019/06/21/5d0c997a60baa24436.jpg" alt="ID and Key"></p></li>',1),W=(0,t.Wm)("h2",{id:"deploy-to-vercel-server"},[(0,t.Wm)("a",{class:"header-anchor",href:"#deploy-to-vercel-server"},"#"),(0,t.Uk)(" Deploy to Vercel (Server)")],-1),C={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},U=(0,t.Wm)("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),A=(0,t.uE)('<ol><li><p>Click the blue button above, it will redirect you to vercel to deploy with waline template.</p></li><li><p>If you haven&#39;t logined, we recommend you to sign in with GitHub.</p></li><li><p>Input your Vercel project name then click <code>Continue</code>.</p><p><img src="https://p2.ssl.qhimg.com/t018cd2a91a8896a555.png" alt="Create project"></p></li><li><p>Input your new GitHub repo name then click <code>Continue</code>. So that repo will be created and initiallized automatically base on waline example template by Vercel.</p><p><img src="https://p4.ssl.qhimg.com/t01bb30e74f85ddf5b3.png" alt="Select repo"></p></li><li><p>After repo is initialized, enter <code>Environment Variables</code> and set <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code>. The variables&#39; value should be the ones you got in the previous step. <code>APP ID</code> is the value of <code>LEAN_ID</code>, and <code>APP Key</code> to <code>LEAN_KEY</code>, <code>Master Key</code> to <code>LEAN_MASTER_KEY</code>.</p><p><img src="https://p5.ssl.qhimg.com/t019aec05e3e5fea5cc.png" alt="Set environment variables"></p></li><li><p>Click <code>Deploy</code> button, and after one minute or two, vercel should finish the deployment. Click <code>Visit</code> button to visit the site. This link is your server address.</p><p><img src="https://p0.ssl.qhimg.com/t0142b58c2e8f886b28.png" alt="Deploy"></p></li></ol><h2 id="importing-in-html-client"><a class="header-anchor" href="#importing-in-html-client">#</a> Importing in HTML (Client)</h2><p>Make the following settings on your web page:</p><ol><li><p>Use CDN to import Waline: <code>///cdn.jsdelivr.net/npm/@waline/client</code>.</p></li><li><p>Create a <code>&lt;script&gt;</code> tag and initialize with <code>Waline()</code> while passing in the necessary <code>el</code> and <code>serverURL</code> options.</p><ul><li>The <code>el</code> option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.</li><li><code>serverURL</code> is the link of the server, which you just got.</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n  ..\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n  ...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n  ...\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">\n    <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      el<span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>\n      serverURL<span class="token operator">:</span> <span class="token string">&#39;https://your-domain.vercel.app&#39;</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>The comment service will now run successfully on your website 🎉</p></li></ol><h2 id="comment-management-management"><a class="header-anchor" href="#comment-management-management">#</a> Comment management (Management)</h2><ol><li>After the deployment is complete, please visit <code>&lt;serverURL&gt;/ui/register</code> to register. The first person to register will be set as an administrator.</li><li>After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here.</li><li>Users can also register their account in the comment box, and they will be redirected to their profile page after logging in.</li></ol>',6),E={render:function(e,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.j4)(t.HY,null,[s,l,o,(0,t.Wm)("ol",null,[(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[(0,t.Wm)("a",p,[c,(0,t.Wm)(a)]),i,(0,t.Wm)("a",r,[u,(0,t.Wm)(a)]),d,(0,t.Wm)("a",m,[g,(0,t.Wm)(a)]),h])]),(0,t.Wm)("li",null,[(0,t.Wm)("p",null,[k,(0,t.Wm)("a",b,[v,(0,t.Wm)(a)]),f]),y]),w]),W,(0,t.Wm)("p",null,[(0,t.Wm)("a",C,[U,(0,t.Wm)(a)])]),A],64)}}}}]);