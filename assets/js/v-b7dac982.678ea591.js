"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7755],{668:(e,t,i)=>{i.r(t),i.d(t,{data:()=>n});const n={key:"v-b7dac982",path:"/en/guide/server/socials.html",title:"Social account login",lang:"en-US",frontmatter:{},excerpt:'<h1 id="social-account-login" tabindex="-1"><a class="header-anchor" href="#social-account-login" aria-hidden="true">#</a> Social account login</h1>\n<p>The latest version of Waline adds the login feature for comment. Besides ordinary account login, waline also supports direct login using third-party social accounts.</p>\n<p>Currently, we support login by the following social account.</p>\n<div class="custom-container warning"><p class="custom-container-title">Note</p>\n<p>Social account login feature is not enabled by default, extra configuration is needed.</p>\n</div>\n',headers:[{level:2,title:"GitHub",slug:"github",children:[]}],filePathRelative:"en/guide/server/socials.md",git:{updatedTime:163106626e4,contributors:[]}}},3065:(e,t,i)=>{i.r(t),i.d(t,{default:()=>d});var n=i(8917);const o=(0,n.uE)('<h1 id="social-account-login" tabindex="-1"><a class="header-anchor" href="#social-account-login" aria-hidden="true">#</a> Social account login</h1><p>The latest version of Waline adds the login feature for comment. Besides ordinary account login, waline also supports direct login using third-party social accounts.</p><p>Currently, we support login by the following social account.</p><div class="custom-container warning"><p class="custom-container-title">Note</p><p>Social account login feature is not enabled by default, extra configuration is needed.</p></div><h2 id="github" tabindex="-1"><a class="header-anchor" href="#github" aria-hidden="true">#</a> GitHub</h2>',5),a=(0,n.Uk)("To enable the GitHub account login feature, you need to configure the GitHub OAuth key. Click "),l={href:"https://github.com/settings/applications/new",target:"_blank",rel:"noopener noreferrer"},r=(0,n.Uk)("Register a new OAuth application"),c=(0,n.Uk)(" to enter the GitHub OAuth application application page. Then fill in the following configurations:"),s=(0,n.uE)("<ul><li>Application name: The application name, will be displayed when authorizing. Blog name is recommended.</li><li>Homepage URL: The application homepage link, will be displayed when authorizing. Blog address is recommended.</li><li>Appcation description: The description of the application, optional, will be displayed when the authorizing.</li><li>Authorization callback URL: The callback address of the application, which is required for login. Fill in <code>&lt;serverURL&gt;/oauth/github</code> where <code>&lt;serverURL&gt;</code> is your Waline server address.</li></ul><p>When you are finished, click <kbd>Register application</kbd> to create, and you will see the Client ID on the page. Click <kbd>Generate a new client secret</kbd> button on the right side of the Client secrets column to get the Client secrets of the application.</p><p>Configure these environment variables using the infomation above, then make a redeployment to log in with GitHub.</p><table><thead><tr><th>Environment Variable</th><th>Description</th></tr></thead><tbody><tr><td><code>GITHUB_ID</code></td><td>Corresponding to the Client ID in GitHub OAuth App</td></tr><tr><td><code>GITHUB_SECRET</code></td><td>Corresponding to Client secrets in GitHub OAuth App</td></tr></tbody></table>",4),d={render:function(e,t){const i=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("p",null,[a,(0,n._)("a",l,[r,(0,n.Wm)(i)]),c]),s],64)}}}}]);