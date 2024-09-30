import{_ as t,a,b as s,c as n,d as l,e as o}from"./vercel-7-C05hTxaV.js";import{_ as r,a as p}from"./vercel-9-C1cg9w3y.js";import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as h,b as c,a as g,o as k,r as m}from"./app-0Jd65Pm6.js";const u="/assets/leancloud-1-BahJAcQU.png",y="/assets/leancloud-2-Ar5RJAgN.png",v={};function f(A,e){const i=m("VidStack");return k(),h("div",null,[e[0]||(e[0]=c('<p>Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your site.</p><h2 id="leancloud-settings-database" tabindex="-1"><a class="header-anchor" href="#leancloud-settings-database"><span>LeanCloud Settings (Database)</span></a></h2><ol><li><p><a href="https://console.leancloud.app/login" target="_blank" rel="noopener noreferrer">sign in</a> or <a href="https://console.leancloud.app/register" target="_blank" rel="noopener noreferrer">sign up</a> for LeanCloud and go to the <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">Console</a>.</p></li><li><p>Click the <a href="https://console.leancloud.app/apps" target="_blank" rel="noopener noreferrer">Create app</a> button to create a new app. Enter the app name of your choice, and select the Developer price plan:</p><figure><img src="'+u+'" alt="Create App" tabindex="0"><figcaption>Create App</figcaption></figure></li><li><p>Enter the app, then select <code>Settings</code> &gt; <code>App Keys</code> at the left bottom corner. You will see <code>APP ID</code>, <code>APP Key</code> and <code>Master Key</code> for your app. Note these credentials, as you will need them later.</p><figure><img src="'+y+'" alt="ID and Key" tabindex="0"><figcaption>ID and Key</figcaption></figure></li></ol><h2 id="deploy-to-vercel-server" tabindex="-1"><a class="header-anchor" href="#deploy-to-vercel-server"><span>Deploy to Vercel (Server)</span></a></h2><figure><a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample" target="_blank" rel="noopener noreferrer"><img src="https://vercel.com/button" alt="Vercel" tabindex="0"></a><figcaption>Vercel</figcaption></figure><ol><li><p>Click the &quot;Deploy&quot; button above. You will be redirected to Vercel to deploy the Waline template.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you haven&#39;t logged in, we recommend signing in with GitHub.</p></div></li><li><p>Enter a Vercel project name of your choice, then click <code>Create</code>.</p><figure><img src="'+t+'" alt="Create Project" tabindex="0"><figcaption>Create Project</figcaption></figure></li><li><p>Vercel will create a new repository based on the Waline template with the project name you entered earlier.</p><figure><img src="'+a+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure><p>After a minute or two, Vercel should finish the deployment. Click on the <code>Go to Dashboard</code> button to be redirected to your application dashboard.</p><figure><img src="'+s+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure></li><li><p>Click on your project&#39;s <code>Settings</code> tab at the top. On the left-hand sidebar, select <code>Environment Variables</code> to go to environment variables settings page. You will need to create three new environment variables: <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code>. The values of each variables correspond to the credentials saved from LeanCloud: <code>APP ID</code> is the value for the <code>LEAN_ID</code> variable, <code>APP Key</code> for <code>LEAN_KEY</code>, and <code>Master Key</code> for <code>LEAN_MASTER_KEY</code>. You can learn more about <a href="https://waline.js.org/en/reference/server/env.html" target="_blank" rel="noopener noreferrer">other variables here</a>.</p><figure><img src="'+n+'" alt="set environment variables" tabindex="0"><figcaption>set environment variables</figcaption></figure></li><li><p>Once the environment variables have been configured, you&#39;ll need to redeploy your application. Click on your project&#39;s <code>Deployments</code> tab at the top, find the latest deployment at the top of list, and select <code>Redeploy</code> in the dropdown menu on the right.</p><figure><img src="'+l+'" alt="redeploy" tabindex="0"><figcaption>redeploy</figcaption></figure></li><li><p>If everything is ok, Vercel will redirect you to the <code>Overview</code> page to start redeployment. Wait for the <code>STATUS</code> to change to <code>Ready</code>. You can now click <code>Visit</code> to visit the site. This link is your server address.</p><figure><img src="'+o+'" alt="redeploy success" tabindex="0"><figcaption>redeploy success</figcaption></figure></li></ol><h2 id="assign-domain-optional" tabindex="-1"><a class="header-anchor" href="#assign-domain-optional"><span>Assign Domain (Optional)</span></a></h2><ol><li><p>Go to <kbd>Settings</kbd> &gt; <kbd>Domains</kbd> to go to domain setting page.</p></li><li><p>Enter the domain you want to assign and click the <kbd>Add</kbd> button.</p><figure><img src="'+r+'" alt="Add domain" tabindex="0"><figcaption>Add domain</figcaption></figure></li><li><p>Add a new <code>CNAME</code> record in your domain name service provider.</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>Once that&#39;s set, you can visit your new waline comment system using your own domain. 🎉</p><ul><li>serverURL：example.your-domain.com</li><li>admin panel：example.your-domain.com/ui</li></ul><figure><img src="'+p+`" alt="success" tabindex="0"><figcaption>success</figcaption></figure></li></ol><h2 id="importing-in-html-client" tabindex="-1"><a class="header-anchor" href="#importing-in-html-client"><span>Importing in HTML (Client)</span></a></h2><p>Here is how you can add Waline to your web page or website:</p><ol><li><p>Import the stylesheet <code>https://unpkg.com/@waline/client@v3/dist/waline.css</code> in the <code>&lt;head&gt;</code></p></li><li><p>Create a <code>&lt;script&gt;</code> tag and initialize with <code>init()</code> from <code>https://unpkg.com/@waline/client@v3/dist/waline.js</code> while passing in the necessary <code>el</code> and <code>serverURL</code> options.</p><ul><li>The <code>el</code> option is the element used for Waline rendering. You can set a CSS selector in the form of a string or an HTMLElement object.</li><li><code>serverURL</code> is the link to your deployment server, which you just created in Vercel.</li><li>For more options, visit the <a href="https://waline.js.org/en/reference/client/props.html" target="_blank" rel="noopener noreferrer">Component Props page</a></li></ul><p>Here is an example:</p><div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  &lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">link</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;stylesheet&quot;</span></span>
<span class="line"><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">    href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://unpkg.com/@waline/client@v3/dist/waline.css&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">  &lt;!-- ... --&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> id</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;waline&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;module&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;https://unpkg.com/@waline/client@v3/dist/waline.js&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    init</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">({</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      el</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;#waline&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      serverURL</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;https://your-domain.vercel.app&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      lang</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;en&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    });</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  &lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The comment service will now run successfully on your website 🎉!</p></li></ol><h2 id="comment-management-management" tabindex="-1"><a class="header-anchor" href="#comment-management-management"><span>Comment Management (Management)</span></a></h2><ol><li><p>After the deployment is complete, please visit <code>&lt;serverURL&gt;/ui/register</code> to register. The first person to register will be set as an administrator.</p></li><li><p>After you log in as administrator, you&#39;ll be able to access the comment management dashboard. You can edit, mark or delete comments here.</p></li><li><p>Users can also register for an account via the comment box, and will be redirected to their profile page after logging in.</p></li></ol><h2 id="video-tutorial" tabindex="-1"><a class="header-anchor" href="#video-tutorial"><span>Video Tutorial</span></a></h2><p>An enthusiastic Waline user made the following video tutorial. If the instructions above aren&#39;t clear, you can refer to the video:</p>`,15)),g(i,{src:"https://www.youtube.com/watch?v=SzEHzsme8uY"})])}const F=d(v,[["render",f],["__file","index.html.vue"]]),E=JSON.parse('{"path":"/en/guide/get-started/","title":"Get Started","lang":"en-US","frontmatter":{"title":"Get Started","icon":"creative","dir":{"collapsible":false,"order":1},"description":"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your site. LeanCloud Settings (Database) sign in or sign up for LeanCloud and ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/guide/get-started/"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/guide/get-started/"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"Get Started"}],["meta",{"property":"og:description","content":"Welcome to Waline. In just a few steps, you can enable Waline to provide comments and pageviews on your site. LeanCloud Settings (Database) sign in or sign up for LeanCloud and ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://vercel.com/button"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Get Started\\",\\"image\\":[\\"https://vercel.com/button\\"],\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"LeanCloud Settings (Database)","slug":"leancloud-settings-database","link":"#leancloud-settings-database","children":[]},{"level":2,"title":"Deploy to Vercel (Server)","slug":"deploy-to-vercel-server","link":"#deploy-to-vercel-server","children":[]},{"level":2,"title":"Assign Domain (Optional)","slug":"assign-domain-optional","link":"#assign-domain-optional","children":[]},{"level":2,"title":"Importing in HTML (Client)","slug":"importing-in-html-client","link":"#importing-in-html-client","children":[]},{"level":2,"title":"Comment Management (Management)","slug":"comment-management-management","link":"#comment-management-management","children":[]},{"level":2,"title":"Video Tutorial","slug":"video-tutorial","link":"#video-tutorial","children":[]}],"readingTime":{"minutes":2.54,"words":763},"filePathRelative":"en/guide/get-started/README.md","autoDesc":true}');export{F as comp,E as data};
