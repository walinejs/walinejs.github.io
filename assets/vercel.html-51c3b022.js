import{_ as i,a,b as n,c,d as r,e as l}from"./vercel-7-88df58c1.js";import{_ as d,a as s}from"./vercel-9-e945c6f8.js";import{_ as p,X as m,Y as u,Z as g,$ as e,a2 as h,a1 as o,a0 as f,D as _}from"./framework-ae42583a.js";const y={},b=e("p",null,[o("We released the "),e("code",null,"@waline/vercel"),o(" package as server package, Vercel deployment is also our most recommended way.")],-1),v=e("h2",{id:"how-to-deploy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-deploy","aria-hidden":"true"},"#"),o(" How to Deploy")],-1),w={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwalinejs%2Fwaline%2Ftree%2Fmain%2Fexample",target:"_blank",rel:"noopener noreferrer"},k=e("img",{src:"https://vercel.com/button",alt:"Vercel",tabindex:"0"},null,-1),x=e("figcaption",null,"Vercel",-1),A=f('<ol><li><p>Click the blue button above, it will redirect you to vercel to deploy with waline template.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>If you haven&#39;t logined, we recommend you to sign in with GitHub.</p></div></li><li><p>Input your Vercel project name then click <code>Create</code>.</p><figure><img src="'+i+'" alt="Create Project" tabindex="0"><figcaption>Create Project</figcaption></figure></li><li><p>Repo which named you input before will be created and initialized automatically base on waline example template by Vercel.</p><figure><img src="'+a+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure><p>After one minute or two, vercel should finish the deployment. Click <code>Go to Dashboard</code> button to redirect to your application dashboard.</p><figure><img src="'+n+'" alt="deploy" tabindex="0"><figcaption>deploy</figcaption></figure></li><li><p>Click <code>Settings</code> menu on the top, and <code>Environment Variables</code> button on the side to go to environment variables setting page. Then set <code>LEAN_ID</code>, <code>LEAN_KEY</code> and <code>LEAN_MASTER_KEY</code>. The variables&#39; value should be the ones you got in the previous step. <code>APP ID</code> is the value of <code>LEAN_ID</code>, and <code>APP Key</code> to <code>LEAN_KEY</code>, <code>Master Key</code> to <code>LEAN_MASTER_KEY</code>.</p><figure><img src="'+c+'" alt="set environment variables" tabindex="0"><figcaption>set environment variables</figcaption></figure></li><li><p>To let your environment variables setting active, you need redeploy your application. Click <code>Deployments</code> menu on the top and find the latest deployment at the top of list, click <code>Redeploy</code> button in the right dropdown menu.</p><figure><img src="'+r+'" alt="redeploy" tabindex="0"><figcaption>redeploy</figcaption></figure></li><li><p>If everything is ok, vercel will redirect to <code>Overview</code> page to start redeployment. Wait a moment the <code>STATUS</code> will change to <code>Ready</code>. Now you can click <code>Visit</code> to visit the site. This link is your server address.</p><figure><img src="'+l+'" alt="redeploy success" tabindex="0"><figcaption>redeploy success</figcaption></figure></li></ol><h2 id="assign-domain-optional" tabindex="-1"><a class="header-anchor" href="#assign-domain-optional" aria-hidden="true">#</a> Assign Domain (Optional)</h2><ol><li><p>Click <kbd>Settings</kbd> - <kbd>Domains</kbd> to go to domain setting page.</p></li><li><p>Input domain you want to assign and click <kbd>Add</kbd> button.</p><figure><img src="'+d+'" alt="Add domain" tabindex="0"><figcaption>Add domain</figcaption></figure></li><li><p>Add a new <code>CNAME</code> record in your domain service server.</p><table><thead><tr><th>Type</th><th>Name</th><th>Value</th></tr></thead><tbody><tr><td>CNAME</td><td>example</td><td>cname.vercel-dns.com</td></tr></tbody></table></li><li><p>You can use your own domain to visit waline comment system after go into effect. 🎉</p><ul><li>serverURL：example.your-domain.com</li><li>admin panel：example.your-domain.com/ui</li></ul><figure><img src="'+s+'" alt="success" tabindex="0"><figcaption>success</figcaption></figure></li></ol>',3);function E(N,V){const t=_("ExternalLinkIcon");return m(),u("div",null,[b,g(" more "),v,e("figure",null,[e("a",w,[k,h(t)]),x]),A])}const I=p(y,[["render",E],["__file","vercel.html.vue"]]);export{I as default};
