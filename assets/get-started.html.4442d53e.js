import{_ as o,r as l,o as p,a as i,b as e,d as t,F as c,e as n,f as s}from"./app.6f7ef497.js";import{_ as r,a as d,b as u,c as m,d as h,e as g,f as k,g as b,h as _}from"./vercel-9.1758b41b.js";var y="/assets/leancloud-app-1.b4109b08.jpg",v="/assets/leancloud-app-2.735a3493.jpg";const f={},w=e("p",null,"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your website.",-1),A=e("h2",{id:"leancloud-settings-database",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#leancloud-settings-database","aria-hidden":"true"},"#"),n(" LeanCloud settings (Database)")],-1),C={href:"https://console.leancloud.app/login",target:"_blank",rel:"noopener noreferrer"},E=n("sign in"),x=n(" or "),L={href:"https://console.leancloud.app/register",target:"_blank",rel:"noopener noreferrer"},T=n("sign up"),N=n(" LeanCloud and enter "),I={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},S=n("Console"),V=n("."),j=n("Click "),D={href:"https://console.leancloud.app/apps",target:"_blank",rel:"noopener noreferrer"},K=n("Create app"),M=n(" button to create a new app and enter a name you like:"),R=e("p",null,[e("img",{src:y,alt:"Create App"})],-1),P=s('<li><p>Enter the app, then select <code>Settings</code> &gt; <code>App Keys</code> at the left bottom corner. You will see <code>APP ID</code>, <code>APP Key</code> and <code>Master Key</code> of your app. We will use them later</p><p><img src="'+v+'" alt="ID and Key"></p></li>',1),W=e("h2",{id:"deploy-to-vercel-server",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#deploy-to-vercel-server","aria-hidden":"true"},"#"),n(" Deploy to Vercel (Server)")],-1),U={href:"https://vercel.com/import/project?template=https://github.com/walinejs/waline/tree/main/example",target:"_blank",rel:"noopener noreferrer"},Y=e("img",{src:"https://vercel.com/button",alt:"Vercel"},null,-1),q=s('<ol><li><p>Click the blue button above, it will redirect you to vercel to deploy with waline template.</p></li><li><p>If you haven&#39;t logined, we recommend you to sign in with GitHub.</p></li><li><p>Input your Vercel project name then click <code>Create</code>.</p><p><img src="'+r+'" alt="Create Project"></p></li><li><p>Then Vercel will let you create Vercel Team account, click <code>Skip</code> and go on.</p><p><img src="'+d+'" alt="skip team"></p></li><li><p>Repo which named you input before will be created and initiallized automatically base on waline example template by Vercel.</p><p><img src="'+u+'" alt="deploy"></p><p>After one minute or two, vercel should finish the deployment. Click <code>Go to Dashboard</code> button to redirect to your application dashboard.</p><p><img src="'+m+'" alt="deploy"></p></li><li><p>Click <code>Settings</code> menu on the top, and <code>Environment Variables</code> button on the side to go to envrionment variables setting page. Then set <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code>. The variables&#39; value should be the ones you got in the previous step. <code>APP ID</code> is the value of <code>LEAN_ID</code>, and <code>APP Key</code> to <code>LEAN_KEY</code>, <code>Master Key</code> to <code>LEAN_MASTER_KEY</code>.</p><p><img src="'+h+'" alt="set environment variables"></p></li><li><p>To let your environment variables setting active, you need redeploy your application. Click <code>Deployments</code> menu on the top and find the latest deployment at the top of list, click <code>Redeploy</code> button in the right dropdown menu.</p><p><img src="'+g+'" alt="redeploy"></p></li><li><p>If everything is ok, vercel will redirect to <code>Overview</code> page to start redeployment. Wait a moment the <code>STATUS</code> will change to <code>Ready</code>. Now you can click <code>Visit</code> to visit the site. This link is your server address.</p><p><img src="'+k+'" alt="redeploy success"></p></li></ol><h2 id="assign-domain-optional" tabindex="-1"><a class="header-anchor" href="#assign-domain-optional" aria-hidden="true">#</a> Assign Domain (Optional)</h2><ol><li><p>Click <kbd>Settings</kbd> - <kbd>Domains</kbd> to go to domain setting page.</p></li><li><p>Input domain you want to assign and click <kbd>Add</kbd> button.</p><p><img src="'+b+'" alt="Add domain"></p></li><li><p>Add a new <code>CANME</code> record in your domain service server.</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>You can use your own domain to visit waline comment system after go into effect. \u{1F389}</p><ul><li>serverURL\uFF1Aexample.yourdomain.com</li><li>admin panel\uFF1Aexample.yourdomain.com/ui</li></ul><p><img src="'+_+`" alt="success"></p></li></ol><h2 id="importing-in-html-client" tabindex="-1"><a class="header-anchor" href="#importing-in-html-client" aria-hidden="true">#</a> Importing in HTML (Client)</h2><p>Make the following settings on your web page:</p><ol><li><p>Use CDN to import Waline: <code>///cdn.jsdelivr.net/npm/@waline/client</code>.</p></li><li><p>Create a <code>&lt;script&gt;</code> tag and initialize with <code>Waline()</code> while passing in the necessary <code>el</code> and <code>serverURL</code> options.</p><ul><li>The <code>el</code> option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.</li><li><code>serverURL</code> is the link of the server, which you just got.</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
  ..
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>//cdn.jsdelivr.net/npm/@waline/client<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
  ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
  ...
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>waline<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
    <span class="token function">Waline</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">&#39;#waline&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&#39;https://your-domain.vercel.app&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></li><li><p>The comment service will now run successfully on your website \u{1F389}!</p></li></ol><h2 id="comment-management-management" tabindex="-1"><a class="header-anchor" href="#comment-management-management" aria-hidden="true">#</a> Comment management (Management)</h2><ol><li>After the deployment is complete, please visit <code>&lt;serverURL&gt;/ui/register</code> to register. The first person to register will be set as an administrator.</li><li>After you log in as administrator, you can see the comment management interface. You can edit, mark or delete comments here.</li><li>Users can also register their account through comment box, and they will be redirected to their profile page after logging in.</li></ol>`,8);function B(H,z){const a=l("ExternalLinkIcon");return p(),i(c,null,[w,A,e("ol",null,[e("li",null,[e("p",null,[e("a",C,[E,t(a)]),x,e("a",L,[T,t(a)]),N,e("a",I,[S,t(a)]),V])]),e("li",null,[e("p",null,[j,e("a",D,[K,t(a)]),M]),R]),P]),W,e("p",null,[e("a",U,[Y,t(a)])]),q],64)}var O=o(f,[["render",B]]);export{O as default};
