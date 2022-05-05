import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as l,c as d,a as t,b as n,w as c,F as h,e as a,d as e}from"./app.8ac41142.js";var p="/assets/vercel-update.e26735c2.png",u="/assets/cloudbase-update.b3d7aca8.jpg";const m={},g=a('<p>Waline has a very clear position since its birth:</p><div class="custom-container info"><p class="custom-container-title">A simple comment system with backend.</p></div><p>All versions released afterwards are modifications made around this position.</p><h2 id="what-is-the-relationship-with-valine" tabindex="-1"><a class="header-anchor" href="#what-is-the-relationship-with-valine" aria-hidden="true">#</a> What is the relationship with Valine?</h2><div class="custom-container info"><p class="custom-container-title">Waline = With backend Valine</p></div><p>Consulting with the open source version of Valine, the comment list in frontend is rewritten with React. The style and structure as well as some internal tools and methods are all from Valine.</p><h2 id="do-i-still-need-to-deploy-valine-admin-on-leancloud" tabindex="-1"><a class="header-anchor" href="#do-i-still-need-to-deploy-valine-admin-on-leancloud" aria-hidden="true">#</a> Do I still need to deploy Valine-Admin on LeanCloud?</h2><p>No. Waline is a three-in-one deployment of data storage, server, and client. The server interface is already equivalent to Valine&#39;s LeanCloud cloud engine. The server already includes comment management and email notifications feature provided by the previous cloud engine. It doesn&#39;t need the additional LeanCloud cloud engine, so it won&#39;t be restricted by the LeanCloud cloud engine&#39;s sleep strategy.</p><h2 id="how-can-i-upgrade" tabindex="-1"><a class="header-anchor" href="#how-can-i-upgrade" aria-hidden="true">#</a> How can I upgrade?</h2><p>Waline is mainly composed of two parts: the frontend and the server.</p><h3 id="frontend" tabindex="-1"><a class="header-anchor" href="#frontend" aria-hidden="true">#</a> Frontend</h3><p>The front end inserts comment lists and comment boxes by including JS scripts in the web page. In most scenarios, the link will use the address of the latest version of the online CDN, and the latest version will be automatically applied, without the need for users to manually update.</p><div class="custom-container note"><p class="custom-container-title">Need manually update in following situations</p><ol><li>The version number is forcibly specified in the CDN address. In this situation, you need to manually modify the version number to be the latest.</li><li>Use NPM to require and pack the module into code. In this situation, you need to modify the version number in the dependency to ensure that the latest version of the dependency can be obtained during installation.</li></ol></div><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server" aria-hidden="true">#</a> Server</h3><p>The server refers to the backend service corresponding to the <code>serverURL</code> configured in frontend script, and its update will be slightly different depending on different deployment environments. Server updates will be more frequent.</p><h4 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h4><p>Go to the corresponding GitHub repository and modify the version number of <code>@waline/vercel</code> in the package.json file to the latest.</p><p><img src="'+p+'" alt="vercel"></p><h4 id="deta" tabindex="-1"><a class="header-anchor" href="#deta" aria-hidden="true">#</a> Deta</h4>',19),f=e("Deta - How to update?"),b=a('<h4 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h4><p>Enter the code editing page, click <kbd>Save and reinstall dependencies</kbd>. If it still doesn\u2019t work, enter <kbd>My Application</kbd> and select <kbd>Deploy</kbd> to redeploy.</p><div class="custom-container danger"><p class="custom-container-title">Warning</p><p>Redeployment will clear the previous files. If there is a configuration in the previous file, it needs to be backed up first.</p></div><p><img src="'+u+'" alt="cloudBase"></p><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h4><p>Run <code>docker pull lizheming/waline</code> directly to pull the latest image.</p><h2 id="why-posting-comments-are-slow" tabindex="-1"><a class="header-anchor" href="#why-posting-comments-are-slow" aria-hidden="true">#</a> Why posting comments are slow?</h2><p>Due to some technical reasons, spam detection and comment notification are all serial operations when posting comments. The spam detection uses the service provided by Akismet abroad, which may be slow to access. Users can turn off the spam detection function through the <code>AKISMET_KEY=false</code> environment variable. Beside the spam detection service, the email notification in the comment notification may also cause a timeout. You can turn off the comment notification to test whether it is caused by this feature.</p><h2 id="how-to-add-lightbox-effects" tabindex="-1"><a class="header-anchor" href="#how-to-add-lightbox-effects" aria-hidden="true">#</a> How to add lightbox effects?</h2>',9),y=e("There has many plugin can implement it. Here we give a simple example for "),v={href:"https://www.lightgalleryjs.com/",target:"_blank",rel:"noopener noreferrer"},w=e("lightGallery"),_=e(", "),x={href:"https://www.digitalia.be/software/slimbox2/",target:"_blank",rel:"noopener noreferrer"},k=e("Slimbox2"),q=e(", "),I={href:"https://lokeshdhakar.com/projects/lightbox2/",target:"_blank",rel:"noopener noreferrer"},L=e("lightbox2"),V=e(" and "),W={href:"https://fancyapps.com/docs/ui/fancybox/",target:"_blank",rel:"noopener noreferrer"},C=e("Fancybox"),N=e("."),T=a(`<h3 id="lightgallery" tabindex="-1"><a class="header-anchor" href="#lightgallery" aria-hidden="true">#</a> LightGallery</h3><p>Insert following code before <code>&lt;head&gt;</code> tag in your html content. <code>#waline-coment</code> is your Waline comment element selector, you need replace it by yourself.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;link
  rel=&quot;stylesheet&quot;
  href=&quot;https://unpkg.com/lightgallery@v2/css/lightgallery-bundle.css&quot;
/&gt;
&lt;script src=&quot;https://unpkg.com/lightgallery@v2/lightgallery.umd.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  document.addEventListener(&#39;click&#39;, (e) =&gt; {
    const imgs = [].slice
      .call(document.querySelectorAll(&#39;#waline-comment .vcontent img&#39;))
      .filter((img) =&gt; img.width &gt; 20);

    if (imgs.indexOf(e.target) === -1) {
      return;
    }
    if (!e.target.gallery) {
      e.target.gallery = window.lightGallery(e.target.parentNode);
    }
    e.target.gallery.openGallery(0);
  });
&lt;/script&gt;
</code></pre></div><h3 id="lightbox2" tabindex="-1"><a class="header-anchor" href="#lightbox2" aria-hidden="true">#</a> Lightbox2</h3><p>Insert following code before <code>&lt;head&gt;</code> tag in your html content. <code>#waline-coment</code> is your Waline comment element selector, you need replace it by yourself.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;link
  rel=&quot;stylesheet&quot;
  href=&quot;https://unpkg.com/lightbox2@v2/dist/css/lightbox.min.css&quot;
/&gt;
&lt;script src=&quot;https://unpkg.com/lightbox2@v2/dist/js/lightbox-plus-jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script&gt;
  document.addEventListener(&#39;click&#39;, (e) =&gt; {
    const lightbox = new Lightbox();
    const imgs = [].slice
      .call(document.querySelectorAll(&#39;#waline-comment .vcontent img&#39;))
      .filter((img) =&gt; img.width &gt; 20);

    if (imgs.indexOf(e.target) === -1) {
      return;
    }

    const $link = $(&#39;&lt;a /&gt;&#39;, {
      href: e.target.src,
      &#39;data-title&#39;: e.target.alt,
      rel: &#39;lightbox&#39;,
    });
    lightbox.start($link);
  });
&lt;/script&gt;
</code></pre></div><h3 id="fancybox" tabindex="-1"><a class="header-anchor" href="#fancybox" aria-hidden="true">#</a> Fancybox</h3><p>Insert following code before <code>&lt;head&gt;</code> tag in your html content. <code>#waline-coment</code> is your Waline comment element selector, you need replace it by yourself.</p><div class="language-html ext-html"><pre class="language-html"><code>&lt;script src=&quot;https://unpkg.com/@fancyapps/ui/dist/fancybox.umd.js&quot;&gt;&lt;/script&gt;
&lt;link
  rel=&quot;stylesheet&quot;
  href=&quot;https://unpkg.com/@fancyapps/ui/dist/fancybox.css&quot;
/&gt;
&lt;script&gt;
  Fancybox.bind(&#39;#waline-comment .vcontent img&#39;);
&lt;/script&gt;
</code></pre></div>`,9);function j(S,A){const s=i("RouterLink"),o=i("ExternalLinkIcon");return l(),d(h,null,[g,t("p",null,[n(s,{to:"/en/guide/server/deta.html#how-to-update"},{default:c(()=>[f]),_:1})]),b,t("p",null,[y,t("a",v,[w,n(o)]),_,t("a",x,[k,n(o)]),q,t("a",I,[L,n(o)]),V,t("a",W,[C,n(o)]),N]),T],64)}var B=r(m,[["render",j],["__file","faq.html.vue"]]);export{B as default};
