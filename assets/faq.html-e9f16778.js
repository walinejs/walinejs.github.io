import{ac as d,y as i,z as n,v as c,G as t,ae as r,ad as e,O as o,L as s}from"./framework-93eb3129.js";const l="/assets/vercel-update-e26735c2.png",h="/assets/cloudbase-update-b3d7aca8.jpg",p={},u=e('<p>Waline 诞生之初就已经作了很明确的定位:</p><div class="custom-container info"><p class="custom-container-title">一款带后端的极简风评论系统。</p></div><p>之后发布的所有版本都是围绕这个定位的修改。</p><h2 id="和-valine-是什么关系" tabindex="-1"><a class="header-anchor" href="#和-valine-是什么关系" aria-hidden="true">#</a> 和 Valine 是什么关系？</h2><div class="custom-container info"><p class="custom-container-title">Waline = With backend Valine</p></div><h2 id="是否需要在-leancloud-上部署-valine-admin" tabindex="-1"><a class="header-anchor" href="#是否需要在-leancloud-上部署-valine-admin" aria-hidden="true">#</a> 是否需要在 LeanCloud 上部署 Valine-Admin？</h2><p>不需要。Waline 是数据存储，服务端以及客户端三位一体的部署，其中服务端相当于 Valine 的 LeanCloud 云引擎。服务端包含了 Valine 所用云引擎提供的评论管理和邮件通知等相关的功能，不依赖额外的 LeanCloud 云引擎，所以不会受到 LeanCloud 云引擎休眠策略的限制。</p><h2 id="如何升级" tabindex="-1"><a class="header-anchor" href="#如何升级" aria-hidden="true">#</a> 如何升级？</h2><p>Waline 主要由前端和服务端两部分组成。</p><h3 id="前端" tabindex="-1"><a class="header-anchor" href="#前端" aria-hidden="true">#</a> 前端</h3><p>前端通过在网页引入 JS 脚本来插入评论列表和评论框。大部分场景下，链接会使用线上 CDN 最新版的地址，会自动应用最新版本，无需使用者手动更新。</p><div class="custom-container note"><p class="custom-container-title">以下情形需要手动更新</p><ol><li>CDN 地址中强制指定了版本号，这时候需要手动修改版本号为最新。</li><li>使用了 NPM 引入最终将模块打包到了代码中，这时候需要修改依赖中的版本号保证依赖在安装的时候能获取到最新版本。</li></ol></div><h3 id="服务端" tabindex="-1"><a class="header-anchor" href="#服务端" aria-hidden="true">#</a> 服务端</h3><p>服务端指的是在前端脚本中配置的 <code>serverURL</code> 对应的后端服务，其更新视不同的部署环境会略有区别。服务端的更新会比较频繁。</p><h4 id="vercel" tabindex="-1"><a class="header-anchor" href="#vercel" aria-hidden="true">#</a> Vercel</h4><p>进入到对应的 GitHub 仓库中，修改 package.json 文件中的 <code>@waline/vercel</code> 版本号为最新版本即可。</p><p><img src="'+l+'" alt="vercel"></p><h4 id="deta" tabindex="-1"><a class="header-anchor" href="#deta" aria-hidden="true">#</a> Deta</h4>',18),m=e('<h4 id="cloudbase" tabindex="-1"><a class="header-anchor" href="#cloudbase" aria-hidden="true">#</a> CloudBase</h4><p>进入代码编辑界面，点击 <kbd>保存并重新安装依赖</kbd> 即可。如果还不行，则进入 <kbd>我的应用</kbd> 选择 <kbd>部署</kbd> 进行重新部署。</p><div class="custom-container danger"><p class="custom-container-title">警告</p><p>重新部署会清空之前的文件，如果之前文件中有配置的话需要先行备份。</p></div><p><img src="'+h+'" alt="cloudBase"></p><h4 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h4><p>直接运行 <code>docker pull lizheming/waline</code> 拉取最新的镜像即可。</p><h2 id="发布评论很慢怎么办" tabindex="-1"><a class="header-anchor" href="#发布评论很慢怎么办" aria-hidden="true">#</a> 发布评论很慢怎么办？</h2><p>因为一些技术性原因，在发布评论的时垃圾邮件检测、评论通知都是串联操作。其中垃圾邮件检测使用的是国外 Akismet 提供的服务，可能访问很慢，用户可以通过 <code>AKISMET_KEY=false</code> 环境变量关闭垃圾评论检测功能。除了垃圾评论检测服务，评论通知中的邮件通知也有可能造成超时，可以通过关闭评论通知测试是否是该功能导致的。</p>',8);function f(_,b){const a=o("RouterLink");return i(),n("div",null,[u,c("p",null,[t(a,{to:"/guide/deploy/deta.html#%E5%A6%82%E4%BD%95%E6%9B%B4%E6%96%B0"},{default:r(()=>[s("Deta - 如何更新")]),_:1})]),m])}const k=d(p,[["render",f],["__file","faq.html.vue"]]);export{k as default};
