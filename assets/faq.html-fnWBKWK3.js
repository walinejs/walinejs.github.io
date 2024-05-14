import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o as i,c as o,b as s,d as r,w as l,a as e,e as d}from"./app-8cbFISj1.js";const c="/assets/vercel-update-BK9A4Fr6.png",h="/assets/cloudbase-update-CZ1hUh8H.jpg",p={},m=e('<p>Waline has a very clear position since its birth:</p><div class="hint-container info"><p class="hint-container-title">A simple comment system with backend.</p></div><p>All versions released afterwards are modifications made around this position.</p><h2 id="what-is-the-relationship-with-valine" tabindex="-1"><a class="header-anchor" href="#what-is-the-relationship-with-valine"><span>What is the relationship with Valine?</span></a></h2><div class="hint-container info"><p class="hint-container-title">Waline = With backend Valine</p></div><p>Consulting with the open source version of Valine, the comment list in frontend is rewritten with React. The style and structure as well as some internal tools and methods are all from Valine.</p><h2 id="do-i-still-need-to-deploy-valine-admin-on-leancloud" tabindex="-1"><a class="header-anchor" href="#do-i-still-need-to-deploy-valine-admin-on-leancloud"><span>Do I still need to deploy Valine-Admin on LeanCloud?</span></a></h2><p>No. Waline is a three-in-one deployment of data storage, server, and client. The server interface is already equivalent to Valine&#39;s LeanCloud cloud engine. The server already includes comment management and email notifications feature provided by the previous cloud engine. It doesn&#39;t need the additional LeanCloud cloud engine, so it won&#39;t be restricted by the LeanCloud cloud engine&#39;s sleep strategy.</p><h2 id="how-can-i-upgrade" tabindex="-1"><a class="header-anchor" href="#how-can-i-upgrade"><span>How can I upgrade?</span></a></h2><p>Waline is mainly composed of two parts: the frontend and the server.</p><h3 id="frontend" tabindex="-1"><a class="header-anchor" href="#frontend"><span>Frontend</span></a></h3><p>The front end inserts comment lists and comment boxes by including JS scripts in the web page. In most scenarios, the link will use the address of the latest version of the online CDN, and the latest version will be automatically applied, without the need for users to manually update.</p><div class="hint-container note"><p class="hint-container-title">Need manually update in following situations</p><ol><li>The version number is forcibly specified in the CDN address. In this situation, you need to manually modify the version number to be the latest.</li><li>Use NPM to require and pack the module into code. In this situation, you need to modify the version number in the dependency to ensure that the latest version of the dependency can be obtained during installation.</li></ol></div><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server"><span>Server</span></a></h3><p>The server refers to the backend service corresponding to the <code>serverURL</code> configured in frontend script, and its update will be slightly different depending on different deployment environments. Server updates will be more frequent.</p><h4 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel"><span>Vercel</span></a></h4><p>Go to the corresponding GitHub repository and modify the version number of <code>@waline/vercel</code> in the package.json file to the latest.</p><figure><img src="'+c+'" alt="vercel" tabindex="0"><figcaption>vercel</figcaption></figure><h4 id="deta" tabindex="-1"><a class="header-anchor" href="#deta"><span>Deta</span></a></h4>',19),u=e('<h4 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase"><span>CloudBase</span></a></h4><p>Enter the code editing page, click <kbd>Save and reinstall dependencies</kbd>. If it still doesn’t work, enter <kbd>My Application</kbd> and select <kbd>Deploy</kbd> to redeploy.</p><div class="hint-container caution"><p class="hint-container-title">Caution</p><p>Redeployment will clear the previous files. If there is a configuration in the previous file, it needs to be backed up first.</p></div><figure><img src="'+h+'" alt="cloudBase" tabindex="0"><figcaption>cloudBase</figcaption></figure><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker"><span>Docker</span></a></h4><p>Run <code>docker pull lizheming/waline</code> directly to pull the latest image.</p><h2 id="why-posting-comments-are-slow" tabindex="-1"><a class="header-anchor" href="#why-posting-comments-are-slow"><span>Why posting comments are slow?</span></a></h2><p>Due to some technical reasons, spam detection and comment notification are all serial operations when posting comments. The spam detection uses the service provided by Akismet abroad, which may be slow to access. Users can turn off the spam detection function through the <code>AKISMET_KEY=false</code> environment variable. Beside the spam detection service, the email notification in the comment notification may also cause a timeout. You can turn off the comment notification to test whether it is caused by this feature.</p>',8);function f(v,g){const t=a("RouteLink");return i(),o("div",null,[m,s("p",null,[r(t,{to:"/en/guide/deploy/deta.html#how-to-update"},{default:l(()=>[d("Deta - How to update?")]),_:1})]),u])}const b=n(p,[["render",f],["__file","faq.html.vue"]]),k=JSON.parse('{"path":"/en/advanced/faq.html","title":"FAQ","lang":"en-US","frontmatter":{"title":"FAQ","icon":"faq","description":"Waline has a very clear position since its birth: A simple comment system with backend. All versions released afterwards are modifications made around this position. What is the...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://waline.js.org/advanced/faq.html"}],["meta",{"property":"og:url","content":"https://waline.js.org/en/advanced/faq.html"}],["meta",{"property":"og:site_name","content":"Waline"}],["meta",{"property":"og:title","content":"FAQ"}],["meta",{"property":"og:description","content":"Waline has a very clear position since its birth: A simple comment system with backend. All versions released afterwards are modifications made around this position. What is the..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-05T07:37:32.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-05T07:37:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"FAQ\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-05T07:37:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"What is the relationship with Valine?","slug":"what-is-the-relationship-with-valine","link":"#what-is-the-relationship-with-valine","children":[]},{"level":2,"title":"Do I still need to deploy Valine-Admin on LeanCloud?","slug":"do-i-still-need-to-deploy-valine-admin-on-leancloud","link":"#do-i-still-need-to-deploy-valine-admin-on-leancloud","children":[]},{"level":2,"title":"How can I upgrade?","slug":"how-can-i-upgrade","link":"#how-can-i-upgrade","children":[{"level":3,"title":"Frontend","slug":"frontend","link":"#frontend","children":[]},{"level":3,"title":"Server","slug":"server","link":"#server","children":[]}]},{"level":2,"title":"Why posting comments are slow?","slug":"why-posting-comments-are-slow","link":"#why-posting-comments-are-slow","children":[]}],"git":{"createdTime":1605627304000,"updatedTime":1701761852000,"contributors":[{"name":"Mr.Hope","email":"mister-hope@outlook.com","commits":4},{"name":"Mr.Hope","email":"zhangbowang1998@gmail.com","commits":4}]},"readingTime":{"minutes":1.69,"words":508},"filePathRelative":"en/advanced/faq.md","localizedDate":"November 17, 2020","autoDesc":true}');export{b as comp,k as data};
