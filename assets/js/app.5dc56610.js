"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2143],{5293:(e,t,n)=>{n.d(t,{g:()=>V});var i=n(165),a=n(9641),d=n(4660),r=n(5564),o=n(4900),c=n(8917),l=n(3053),s=n(996);const u=e=>((0,c.dD)("data-v-24fec36c"),e=e(),(0,c.Cn)(),e),m={style:{"margin-bottom":"20px"}},v={class:"input-group"},h={for:"from"},g=[(0,c.uE)('<option value="valine" data-v-24fec36c>Valine</option><option value="disqus" data-v-24fec36c>Disqus</option><option value="twikoo" data-v-24fec36c>Twikoo</option><option value="typecho" data-v-24fec36c>Typecho</option><option value="artalk" data-v-24fec36c>Artalk</option><option value="commento" data-v-24fec36c>Commento</option>',6)],b={class:"input-group"},f={for:"to"},p=[u((()=>(0,c._)("option",{value:"wleancloud"},"Waline LeanCloud",-1))),u((()=>(0,c._)("option",{value:"wcloudbase"},"Waline CloudBase",-1))),u((()=>(0,c._)("option",{value:"wsql"},"Waline MySQL/PostgreSQL/SQLite",-1))),u((()=>(0,c._)("option",{value:"wgithub"},"Github",-1)))],w={class:"input-group"},y={key:0,class:"warning custom-block"},C={class:"custom-block-title"},x=["innerHTML"],k={key:1,class:"warning custom-block"},R={class:"custom-block-title"},A=["textContent"],S={key:2},q=["placeholder"];var L=n(1334);const D={"/":{from:"从",to:"迁移至",storage:"存储服务",placeholder:"请将源文件粘贴至此",convert:"转换",title:"友情提示",typeecho:'Typecho 用户可以使用\n        <a\n          href="https://github.com/lizheming/typecho-export-valine"\n          target="_blank"\n          >Export2Valine</a\n        >\n        插件将评论数据导出成 Valine 数据后直接使用。',tip:"Waline 和 Valine 的 LeanCloud 配置是可以共用的，不需要进行数据转换哦！"},"/en/":{from:"Migrate from",to:"to",storage:"Storage service",placeholder:"Please paste your source file here",convert:"Convert",title:"Tip",typeecho:'Typecho users can use\n        <a\n          href="https://github.com/lizheming/typecho-export-valine"\n          target="_blank"\n          >Export2Valine Plugin</a\n        >\n        to export comment data to Valine format.',tip:"The LeanCloud configuration of Waline and Valine can be shared, no data conversion is required!"}};var T=n(2584);const E=e=>{e=JSON.parse(e);const t={};for(let n=0;n<e.length;n++)t[e[n].id]=e[n].rid;const n={};for(let i=0;i<e.length;i++){if(!e[i].rid)continue;let a=e[i].rid;for(;t[a];)a=t[a];n[e[i].id]=a}return{results:e.map((({content:e,date:t,email:i,id:a,ip:d,link:r,nick:o,page_key:c,rid:l,ua:s})=>{const u=new Date(t.replace(/-/g,"/")).toISOString(),m=(e=>{const t=document.createElement("a");return t.href=e,t.pathname||e})(c);return{objectId:a,QQAvatar:"",comment:T.TU.parse(e),insertedAt:{__type:"Date",iso:u},mail:i,createdAt:u,updatedAt:u,ip:d,link:r,nick:o,ua:s,url:m,pid:l||null,rid:n[a]||null,status:"approved"}}))}},j=e=>{const t=(e=JSON.parse(e)).comments,n={};Array.isArray(e.commenters)&&e.commenters.forEach((e=>{n[e.commenterHex]={nick:e.name,mail:e.email,link:"undefined"!==e.link?e.link:void 0}}));const i={};t.filter((e=>e.parentHex&&"root"!==e.parentHex)).forEach((e=>{i[e.commentHex]=e.parentHex}));const a={};return t.filter((e=>e.parentHex&&"root"!==e.parentHex)).forEach((e=>{let t=e.parentHex;for(;i[t];)t=i[t];a[e.commentHex]=t})),{results:t.filter((e=>!e.deleted)).map((e=>{const t=n[e.commenterHex]?n[e.commenterHex]:{nick:"Anonymous",mail:"",link:""};return Object.assign({objectId:e.commentHex,QQAvatar:"",comment:e.html||e.markdown,insertedAt:{__type:"Date",iso:e.creationDate},createdAt:e.creationDate,updatedAt:e.creationDate,ip:"",ua:"",url:e.url,pid:"root"!==e.parentHex?e.parentHex:"",rid:a[e.commentHex]?a[e.commentHex]:"",status:"approved"===e.state?"approved":"waiting"},t)}))}},M=e=>{const t=(new DOMParser).parseFromString(e,"application/xml"),n=Array.from(t.querySelectorAll("post")).filter((e=>"false"===e.querySelector("isDeleted").textContent.toLowerCase())),i=Array.from(t.querySelectorAll("disqus > thread")),a={};i.forEach((e=>{const t=e.querySelector("link").textContent,n=new URL(t),i=e.getAttribute("dsq:id");a[i]=n.pathname}));const d={};n.forEach((e=>{const t=e.getAttribute("dsq:id");if(!e.querySelector("parent"))return;const n=e.querySelector("parent").getAttribute("dsq:id");d[t]=n}));const r={};return n.filter((e=>e.querySelector("parent"))).forEach((e=>{const t=e.getAttribute("dsq:id");let n=e.querySelector("parent").getAttribute("dsq:id");for(;d[n];)n=d[n];r[t]=n})),{results:n.map((e=>{const t=e.getAttribute("dsq:id"),n=e.querySelector("message").textContent,i=new Date(e.querySelector("createdAt").textContent).toISOString(),d=e.querySelector("author name").textContent,o=e.querySelector("thread").getAttribute("dsq:id"),c=a[o],l=e.querySelector("parent");return{objectId:t,QQAvatar:"",comment:n,insertedAt:{__type:"Date",iso:i},createdAt:i,updatedAt:i,ip:"",link:"",mail:"",nick:d,ua:"",url:c,pid:l?l.getAttribute("dsq:id"):null,rid:l?r[t]:null,status:"false"!==e.querySelector("isSpam").textContent.toLowerCase()?"spam":"approved"}}))}};var H={};!function(e){e.__type__="csv";var t="undefined"!=typeof jQuery&&jQuery.Deferred||"undefined"!=typeof _&&_.Deferred||function(){var e,t,n=new Promise((function(n,i){e=n,t=i}));return{resolve:e,reject:t,promise:function(){return n}}};e.fetch=function(n){var i=new t;if(n.file){var a=new FileReader,d=n.encoding||"UTF-8";a.onload=function(t){var a=e.extractFields(e.parse(t.target.result,n),n);a.useMemoryStore=!0,a.metadata={filename:n.file.name},i.resolve(a)},a.onerror=function(e){i.reject({error:{message:"Failed to load file. Code: "+e.target.error.code}})},a.readAsText(n.file,d)}else if(n.data){var r=e.extractFields(e.parse(n.data,n),n);r.useMemoryStore=!0,i.resolve(r)}else n.url&&(window.fetch||function(e){var t=jQuery.get(e),n={then:function(e){return t.done(e),n},catch:function(e){return t.fail(e),n}};return n})(n.url).then((function(e){return e.text?e.text():e})).then((function(t){var a=e.extractFields(e.parse(t,n),n);a.useMemoryStore=!0,i.resolve(a)})).catch((function(e,t){i.reject({error:{message:"Failed to load file. "+e.statusText+". Code: "+e.status,request:e}})}));return i.promise()},e.extractFields=function(e,t){return!0!==t.noHeaderRow&&0<e.length?{fields:e[0],records:e.slice(1)}:{records:e}},e.normalizeDialectOptions=function(e){var t={delimiter:",",doublequote:!0,lineterminator:"\n",quotechar:'"',skipinitialspace:!0,skipinitialrows:0};for(var n in e)"trim"===n?t.skipinitialspace=e.trim:t[n.toLowerCase()]=e[n];return t},e.parse=function(t,a){a&&(!a||a.lineterminator)||(t=e.normalizeLineTerminator(t,a));var r,o,c=e.normalizeDialectOptions(a);r=t,o=c.lineterminator,t=r.charAt(r.length-o.length)!==o?r:r.substring(0,r.length-o.length);var l,s,u="",m=!1,v=!1,h="",g=[],b=[];for(s=function(e){return!0!==v&&(""===e?e=null:!0===c.skipinitialspace&&(e=d(e)),n.test(e)?e=parseInt(e,10):i.test(e)&&(e=parseFloat(e,10))),e},l=0;l<t.length;l+=1)u=t.charAt(l),!1!==m||u!==c.delimiter&&u!==c.lineterminator?u!==c.quotechar?h+=u:m?t.charAt(l+1)===c.quotechar?(h+=c.quotechar,l+=1):m=!1:v=m=!0:(h=s(h),g.push(h),u===c.lineterminator&&(b.push(g),g=[]),h="",v=!1);return h=s(h),g.push(h),b.push(g),c.skipinitialrows&&(b=b.slice(c.skipinitialrows)),b},e.normalizeLineTerminator=function(e,t){return(t=t||{}).lineterminator?e:e.replace(/(\r\n|\n|\r)/gm,"\n")},e.objectToArray=function(e){for(var t=[],n=[],i=[],a=0;a<e.fields.length;a++){var d=e.fields[a].id;i.push(d);var r=e.fields[a].label?e.fields[a].label:d;n.push(r)}for(t.push(n),a=0;a<e.records.length;a++){for(var o=[],c=e.records[a],l=0;l<i.length;l++)o.push(c[i[l]]);t.push(o)}return t},e.serialize=function(t,n){var i;i=t instanceof Array?t:e.objectToArray(t);var d,r,o,c=e.normalizeDialectOptions(n),l="",s="",u="",m="";for(o=function(e){return null===e?e="":"string"==typeof e&&a.test(e)?(c.doublequote&&(e=e.replace(/"/g,'""')),e=c.quotechar+e+c.quotechar):"number"==typeof e&&(e=e.toString(10)),e},d=0;d<i.length;d+=1)for(l=i[d],r=0;r<l.length;r+=1)s=o(l[r]),r===l.length-1?(m+=(u+=s)+c.lineterminator,u=""):u+=s+c.delimiter,s="";return m};var n=/^\d+$/,i=/^\d*\.\d+$|^\d+\.\d*$/,a=/^\s|\s$|,|"|\n/,d=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}(H);const I=H,G=e=>{const t=["id","nick","updatedAt","mail","ua","ip","status","insertedAt","createdAt","comment","pid","rid","link","url","user_id"],n={},i=e=>e.hasOwnProperty("objectId")?e.objectId:"string"!=typeof e._id&&e._id.$oid?e._id.$oid:void 0;let a=1;e.results.forEach((e=>{const t=i(e);t&&(n[t]=a),a+=1}));const d=[];return e.results.forEach((e=>{const a=i(e);a&&(e.id=n[a].toString()),e.pid=n[e.pid],e.rid=n[e.rid],e.status=e.status||"approved";const r={};for(let n=0;n<t.length;n++){const i=t[n];switch(i){case"insertedAt":r[i]=e[i].iso.replace("T"," ").replace(/.\d{3}Z$/i,"");break;case"createdAt":case"updatedAt":r[i]=e[i].replace("T"," ").replace(/.\d{3}Z$/i,"");break;case"rid":case"pid":r[i]=e[i]||null;break;default:r[i]=e[i]||""}}d.push(r)})),I.serialize({fields:t.map((e=>({id:e,label:e}))),records:d})},O=e=>e.results.map((e=>(e.hasOwnProperty("objectId")?(e._id=e.objectId,delete e.objectId):"string"!=typeof e._id&&e._id.$oid&&(e._id=e._id.$oid),"object"==typeof e.insertedAt&&e.insertedAt.iso&&(e.insertedAt={$date:e.insertedAt.iso}),delete e.ACL,JSON.stringify(e)))).join("\r\n"),W=e=>({results:e.trim().split(/[\r\n]+/).filter((e=>e)).map((e=>{const t=JSON.parse(e);return{objectId:t._id,QQAvatar:"",comment:t.comment,insertedAt:{__type:"Date",iso:new Date(t.created).toISOString()},createdAt:new Date(t.created).toISOString(),updatedAt:new Date(t.updated).toISOString(),ip:t.ip,link:t.link,mail:t.mail,nick:t.nick,ua:t.ua,url:t.url,pid:t.pid,rid:t.rid,status:t.isSpam?"spam":"approved"}}))}),z={disqus:{wleancloud:M,wcloudbase:e=>O(M(e)),wsql:e=>G(M(e)),wgithub:e=>G(M(e))},valine:{wcloudbase:O,wsql:G,wgithub:G},twikoo:{wleancloud:W,wcloudbase:e=>O(W(e)),wsql:e=>G(W(e)),wgithub:e=>G(W(e))},artalk:{wleancloud:E,wcloudbase:e=>O(E(e)),wsql:e=>G(E(e)),wgithub:e=>G(E(e))},commento:{wleancloud:j,wcloudbase:e=>O(j(e)),wsql:e=>G(j(e)),wgithub:e=>G(j(e))}},F=(0,c.aZ)({name:"MigrationTool",setup(){const e=(0,o.I)(),t=(0,L.iH)("valine"),n=(0,L.iH)("wcloudbase"),i=(0,L.iH)("");return{click:e=>{if(e.preventDefault(),!i.value)return alert("请输入内容");"valine"===t.value&&(i.value=i.value.trim(),i.value.match(/},[\r\n]+/)?i.value=JSON.parse(i.value):i.value=JSON.parse(`{"results":[ ${i.value.split(/[\r\n]+/).join(",")} ]}`));const a=z[t.value][n.value];if("function"==typeof a){let e=a(i.value);console.log(e),"string"!=typeof e&&(e=JSON.stringify(e,null,"\t")),((e,t)=>{const n=window.URL||window.webkitURL||window,i=new Blob([t]),a=document.createElementNS("http://www.w3.org/1999/xhtml","a");a.href=n.createObjectURL(i),a.download=e,(e=>{const t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),e.dispatchEvent(t)})(a)})("output."+("wsql"!==n.value?"json":"csv"),e)}},i18n:(0,L.Fl)((()=>D[e.value])),from:t,to:n,source:i}}}),Q=(0,n(6959).Z)(F,[["render",function(e,t,n,i,a,d){return(0,c.wg)(),(0,c.iD)("form",null,[(0,c._)("div",m,[(0,c._)("div",v,[(0,c._)("label",h,(0,l.zw)(e.i18n.from),1),(0,c.wy)((0,c._)("select",{id:"from","onUpdate:modelValue":t[0]||(t[0]=t=>e.from=t)},g,512),[[s.bM,e.from]])]),(0,c._)("div",b,[(0,c._)("label",f,(0,l.zw)(e.i18n.to),1),(0,c.wy)((0,c._)("select",{id:"to","onUpdate:modelValue":t[1]||(t[1]=t=>e.to=t)},p,512),[[s.bM,e.to]])]),(0,c._)("div",w,(0,l.zw)(e.i18n.storage),1)]),"typecho"===e.from?((0,c.wg)(),(0,c.iD)("div",y,[(0,c._)("p",C,(0,l.zw)(e.i18n.tip),1),(0,c._)("p",{innerHTML:e.i18n.typeecho},null,8,x)])):"valine"===e.from&&"wleancloud"===e.to?((0,c.wg)(),(0,c.iD)("div",k,[(0,c._)("p",R,(0,l.zw)(e.i18n.tip),1),(0,c._)("p",{textContent:(0,l.zw)(e.i18n.tip)},null,8,A)])):((0,c.wg)(),(0,c.iD)("div",S,[(0,c.wy)((0,c._)("textarea",{placeholder:e.i18n.placeholder,"onUpdate:modelValue":t[2]||(t[2]=t=>e.source=t)},null,8,q),[[s.nr,e.source]]),(0,c._)("button",{onClick:t[3]||(t[3]=(...t)=>e.click&&e.click(...t))},(0,l.zw)(e.i18n.convert),1)]))])}],["__scopeId","data-v-24fec36c"]]),U=(0,o.vW)((({app:e})=>{e.component("MigrationTool",Q)})),V=[i.Z,a.Z,d.Z,r.Z,U]},3718:(e,t,n)=>{n.d(t,{p:()=>d});var i=n(4002),a=n(6697);const d=[i.Z,a.Z]},2868:(e,t,n)=>{n.d(t,{l:()=>o});var i=n(2327),a=n(9072),d=n(9369),r=n(2316);const o=[i.Z,a.Z,d.Z,r.Z]},3513:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(8917);const a={404:(0,i.RC)((()=>n.e(5455).then(n.bind(n,5455)))),Layout:(0,i.RC)((()=>Promise.all([n.e(959),n.e(801),n.e(5950)]).then(n.bind(n,5950))))}},5214:(e,t,n)=>{n.d(t,{b:()=>a});var i=n(8917);const a={"v-8daa1a0e":(0,i.RC)((()=>n.e(2509).then(n.bind(n,5224)))),"v-e4322366":(0,i.RC)((()=>n.e(1863).then(n.bind(n,7146)))),"v-533c70f7":(0,i.RC)((()=>n.e(6047).then(n.bind(n,3180)))),"v-271aae61":(0,i.RC)((()=>n.e(2551).then(n.bind(n,9825)))),"v-8dba60f6":(0,i.RC)((()=>n.e(2605).then(n.bind(n,8078)))),"v-2d0a870d":(0,i.RC)((()=>n.e(3835).then(n.bind(n,7901)))),"v-5ceabafb":(0,i.RC)((()=>n.e(9679).then(n.bind(n,9400)))),"v-4fe1dc58":(0,i.RC)((()=>n.e(775).then(n.bind(n,2783)))),"v-7af875a7":(0,i.RC)((()=>n.e(8955).then(n.bind(n,7874)))),"v-aecc6e00":(0,i.RC)((()=>n.e(1956).then(n.bind(n,4892)))),"v-a1a49808":(0,i.RC)((()=>n.e(5943).then(n.bind(n,4399)))),"v-c9146c5e":(0,i.RC)((()=>n.e(188).then(n.bind(n,4438)))),"v-61377328":(0,i.RC)((()=>n.e(3653).then(n.bind(n,6255)))),"v-50cb2a87":(0,i.RC)((()=>n.e(5702).then(n.bind(n,2947)))),"v-7898f959":(0,i.RC)((()=>n.e(2589).then(n.bind(n,9223)))),"v-743ff88e":(0,i.RC)((()=>n.e(2207).then(n.bind(n,9312)))),"v-2945f13a":(0,i.RC)((()=>n.e(5221).then(n.bind(n,2746)))),"v-396f59cd":(0,i.RC)((()=>n.e(5974).then(n.bind(n,1499)))),"v-514365f1":(0,i.RC)((()=>n.e(4104).then(n.bind(n,6012)))),"v-eff96fe2":(0,i.RC)((()=>n.e(8538).then(n.bind(n,8879)))),"v-b032db80":(0,i.RC)((()=>n.e(7476).then(n.bind(n,3030)))),"v-e565bdda":(0,i.RC)((()=>n.e(3897).then(n.bind(n,104)))),"v-7871496c":(0,i.RC)((()=>n.e(2656).then(n.bind(n,3467)))),"v-1b1feb10":(0,i.RC)((()=>n.e(3825).then(n.bind(n,2988)))),"v-6b4d4a3d":(0,i.RC)((()=>n.e(194).then(n.bind(n,9913)))),"v-de867450":(0,i.RC)((()=>n.e(2628).then(n.bind(n,592)))),"v-ee77801a":(0,i.RC)((()=>n.e(318).then(n.bind(n,4509)))),"v-487079c5":(0,i.RC)((()=>n.e(1410).then(n.bind(n,1369)))),"v-74a28670":(0,i.RC)((()=>n.e(7608).then(n.bind(n,6557)))),"v-756ec2fc":(0,i.RC)((()=>n.e(6537).then(n.bind(n,2166)))),"v-2fad59ab":(0,i.RC)((()=>n.e(9684).then(n.bind(n,7932)))),"v-45360123":(0,i.RC)((()=>n.e(4011).then(n.bind(n,1534)))),"v-058f99fc":(0,i.RC)((()=>n.e(5074).then(n.bind(n,2863)))),"v-4dec5b45":(0,i.RC)((()=>n.e(9247).then(n.bind(n,3146)))),"v-583b3d0d":(0,i.RC)((()=>n.e(6153).then(n.bind(n,1673)))),"v-0b556720":(0,i.RC)((()=>n.e(3894).then(n.bind(n,4999)))),"v-a7534f04":(0,i.RC)((()=>n.e(7287).then(n.bind(n,4077)))),"v-547fb6c3":(0,i.RC)((()=>n.e(9550).then(n.bind(n,5877)))),"v-0418d6cb":(0,i.RC)((()=>n.e(4195).then(n.bind(n,956)))),"v-d8d70e1a":(0,i.RC)((()=>n.e(2367).then(n.bind(n,8327)))),"v-82949f3e":(0,i.RC)((()=>n.e(2187).then(n.bind(n,750)))),"v-740dc7ea":(0,i.RC)((()=>n.e(7837).then(n.bind(n,5747)))),"v-3c8a3984":(0,i.RC)((()=>n.e(8839).then(n.bind(n,2707)))),"v-38007666":(0,i.RC)((()=>n.e(6898).then(n.bind(n,5236)))),"v-66cc4fee":(0,i.RC)((()=>n.e(6129).then(n.bind(n,4809)))),"v-fbe3c888":(0,i.RC)((()=>n.e(6734).then(n.bind(n,7476)))),"v-356c0ac4":(0,i.RC)((()=>n.e(656).then(n.bind(n,7610)))),"v-e64f5648":(0,i.RC)((()=>n.e(39).then(n.bind(n,460)))),"v-057c9824":(0,i.RC)((()=>n.e(5175).then(n.bind(n,6575)))),"v-67a66f17":(0,i.RC)((()=>n.e(5354).then(n.bind(n,861)))),"v-704e8e37":(0,i.RC)((()=>n.e(839).then(n.bind(n,7413)))),"v-668d9be0":(0,i.RC)((()=>n.e(4427).then(n.bind(n,4751)))),"v-f4351e9e":(0,i.RC)((()=>n.e(478).then(n.bind(n,3677)))),"v-27d47a79":(0,i.RC)((()=>n.e(9423).then(n.bind(n,3648)))),"v-2812bd79":(0,i.RC)((()=>n.e(6785).then(n.bind(n,2423)))),"v-434e7c8c":(0,i.RC)((()=>n.e(682).then(n.bind(n,7908)))),"v-737ff092":(0,i.RC)((()=>n.e(6962).then(n.bind(n,2727)))),"v-ffe3a066":(0,i.RC)((()=>n.e(14).then(n.bind(n,5500)))),"v-1ddcadc2":(0,i.RC)((()=>n.e(8525).then(n.bind(n,7550)))),"v-1bf8da39":(0,i.RC)((()=>n.e(9437).then(n.bind(n,7729)))),"v-40608902":(0,i.RC)((()=>n.e(9944).then(n.bind(n,1026)))),"v-bfd0f3b0":(0,i.RC)((()=>n.e(107).then(n.bind(n,8865)))),"v-4f0168b2":(0,i.RC)((()=>n.e(8328).then(n.bind(n,9137)))),"v-de155fda":(0,i.RC)((()=>n.e(7456).then(n.bind(n,5216)))),"v-81cb4dce":(0,i.RC)((()=>n.e(7011).then(n.bind(n,258)))),"v-6d93dbb2":(0,i.RC)((()=>n.e(285).then(n.bind(n,3188)))),"v-4819d2f6":(0,i.RC)((()=>n.e(2574).then(n.bind(n,8794)))),"v-3706649a":(0,i.RC)((()=>n.e(88).then(n.bind(n,6120))))}},5719:(e,t,n)=>{n.d(t,{T:()=>i});const i={"v-8daa1a0e":()=>n.e(2509).then(n.bind(n,4958)).then((({data:e})=>e)),"v-e4322366":()=>n.e(1863).then(n.bind(n,7142)).then((({data:e})=>e)),"v-533c70f7":()=>n.e(6047).then(n.bind(n,6329)).then((({data:e})=>e)),"v-271aae61":()=>n.e(2551).then(n.bind(n,9023)).then((({data:e})=>e)),"v-8dba60f6":()=>n.e(2605).then(n.bind(n,4305)).then((({data:e})=>e)),"v-2d0a870d":()=>n.e(3835).then(n.bind(n,2403)).then((({data:e})=>e)),"v-5ceabafb":()=>n.e(9679).then(n.bind(n,7973)).then((({data:e})=>e)),"v-4fe1dc58":()=>n.e(775).then(n.bind(n,965)).then((({data:e})=>e)),"v-7af875a7":()=>n.e(8955).then(n.bind(n,3664)).then((({data:e})=>e)),"v-aecc6e00":()=>n.e(1956).then(n.bind(n,3265)).then((({data:e})=>e)),"v-a1a49808":()=>n.e(5943).then(n.bind(n,3356)).then((({data:e})=>e)),"v-c9146c5e":()=>n.e(188).then(n.bind(n,3562)).then((({data:e})=>e)),"v-61377328":()=>n.e(3653).then(n.bind(n,4954)).then((({data:e})=>e)),"v-50cb2a87":()=>n.e(5702).then(n.bind(n,510)).then((({data:e})=>e)),"v-7898f959":()=>n.e(2589).then(n.bind(n,6533)).then((({data:e})=>e)),"v-743ff88e":()=>n.e(2207).then(n.bind(n,6417)).then((({data:e})=>e)),"v-2945f13a":()=>n.e(5221).then(n.bind(n,721)).then((({data:e})=>e)),"v-396f59cd":()=>n.e(5974).then(n.bind(n,4069)).then((({data:e})=>e)),"v-514365f1":()=>n.e(4104).then(n.bind(n,3106)).then((({data:e})=>e)),"v-eff96fe2":()=>n.e(8538).then(n.bind(n,6884)).then((({data:e})=>e)),"v-b032db80":()=>n.e(7476).then(n.bind(n,2722)).then((({data:e})=>e)),"v-e565bdda":()=>n.e(3897).then(n.bind(n,937)).then((({data:e})=>e)),"v-7871496c":()=>n.e(2656).then(n.bind(n,2168)).then((({data:e})=>e)),"v-1b1feb10":()=>n.e(3825).then(n.bind(n,5142)).then((({data:e})=>e)),"v-6b4d4a3d":()=>n.e(194).then(n.bind(n,5718)).then((({data:e})=>e)),"v-de867450":()=>n.e(2628).then(n.bind(n,646)).then((({data:e})=>e)),"v-ee77801a":()=>n.e(318).then(n.bind(n,7246)).then((({data:e})=>e)),"v-487079c5":()=>n.e(1410).then(n.bind(n,2622)).then((({data:e})=>e)),"v-74a28670":()=>n.e(7608).then(n.bind(n,9083)).then((({data:e})=>e)),"v-756ec2fc":()=>n.e(6537).then(n.bind(n,3944)).then((({data:e})=>e)),"v-2fad59ab":()=>n.e(9684).then(n.bind(n,2165)).then((({data:e})=>e)),"v-45360123":()=>n.e(4011).then(n.bind(n,4645)).then((({data:e})=>e)),"v-058f99fc":()=>n.e(5074).then(n.bind(n,5698)).then((({data:e})=>e)),"v-4dec5b45":()=>n.e(9247).then(n.bind(n,5843)).then((({data:e})=>e)),"v-583b3d0d":()=>n.e(6153).then(n.bind(n,9874)).then((({data:e})=>e)),"v-0b556720":()=>n.e(3894).then(n.bind(n,2521)).then((({data:e})=>e)),"v-a7534f04":()=>n.e(7287).then(n.bind(n,2889)).then((({data:e})=>e)),"v-547fb6c3":()=>n.e(9550).then(n.bind(n,6340)).then((({data:e})=>e)),"v-0418d6cb":()=>n.e(4195).then(n.bind(n,8238)).then((({data:e})=>e)),"v-d8d70e1a":()=>n.e(2367).then(n.bind(n,1467)).then((({data:e})=>e)),"v-82949f3e":()=>n.e(2187).then(n.bind(n,7824)).then((({data:e})=>e)),"v-740dc7ea":()=>n.e(7837).then(n.bind(n,9708)).then((({data:e})=>e)),"v-3c8a3984":()=>n.e(8839).then(n.bind(n,9743)).then((({data:e})=>e)),"v-38007666":()=>n.e(6898).then(n.bind(n,4120)).then((({data:e})=>e)),"v-66cc4fee":()=>n.e(6129).then(n.bind(n,9112)).then((({data:e})=>e)),"v-fbe3c888":()=>n.e(6734).then(n.bind(n,8478)).then((({data:e})=>e)),"v-356c0ac4":()=>n.e(656).then(n.bind(n,8206)).then((({data:e})=>e)),"v-e64f5648":()=>n.e(39).then(n.bind(n,9818)).then((({data:e})=>e)),"v-057c9824":()=>n.e(5175).then(n.bind(n,8065)).then((({data:e})=>e)),"v-67a66f17":()=>n.e(5354).then(n.bind(n,6011)).then((({data:e})=>e)),"v-704e8e37":()=>n.e(839).then(n.bind(n,994)).then((({data:e})=>e)),"v-668d9be0":()=>n.e(4427).then(n.bind(n,8565)).then((({data:e})=>e)),"v-f4351e9e":()=>n.e(478).then(n.bind(n,9019)).then((({data:e})=>e)),"v-27d47a79":()=>n.e(9423).then(n.bind(n,5302)).then((({data:e})=>e)),"v-2812bd79":()=>n.e(6785).then(n.bind(n,1527)).then((({data:e})=>e)),"v-434e7c8c":()=>n.e(682).then(n.bind(n,8798)).then((({data:e})=>e)),"v-737ff092":()=>n.e(6962).then(n.bind(n,5136)).then((({data:e})=>e)),"v-ffe3a066":()=>n.e(14).then(n.bind(n,1049)).then((({data:e})=>e)),"v-1ddcadc2":()=>n.e(8525).then(n.bind(n,6538)).then((({data:e})=>e)),"v-1bf8da39":()=>n.e(9437).then(n.bind(n,3891)).then((({data:e})=>e)),"v-40608902":()=>n.e(9944).then(n.bind(n,7297)).then((({data:e})=>e)),"v-bfd0f3b0":()=>n.e(107).then(n.bind(n,1829)).then((({data:e})=>e)),"v-4f0168b2":()=>n.e(8328).then(n.bind(n,7792)).then((({data:e})=>e)),"v-de155fda":()=>n.e(7456).then(n.bind(n,7329)).then((({data:e})=>e)),"v-81cb4dce":()=>n.e(7011).then(n.bind(n,7257)).then((({data:e})=>e)),"v-6d93dbb2":()=>n.e(285).then(n.bind(n,7152)).then((({data:e})=>e)),"v-4819d2f6":()=>n.e(2574).then(n.bind(n,4542)).then((({data:e})=>e)),"v-3706649a":()=>n.e(88).then(n.bind(n,8624)).then((({data:e})=>e))}},2456:(e,t,n)=>{n.d(t,{g:()=>a});var i=n(7961);const a=[["v-8daa1a0e","/","Waline",["/index.html","/README.md"]],["v-e4322366","/advanced/ecosystem.html","生态系统",["/advanced/ecosystem","/advanced/ecosystem.md"]],["v-533c70f7","/advanced/faq.html","FAQ",["/advanced/faq","/advanced/faq.md"]],["v-271aae61","/advanced/intro.html","介绍",["/advanced/intro","/advanced/intro.md"]],["v-8dba60f6","/advanced/why.html","源始",["/advanced/why","/advanced/why.md"]],["v-2d0a870d","/en/","Waline",["/en/index.html","/en/README.md"]],["v-5ceabafb","/guide/get-started.html","快速上手",["/guide/get-started","/guide/get-started.md"]],["v-4fe1dc58","/migration/client.html","Waline 客户端 v1 迁移指南",["/migration/client","/migration/client.md"]],["v-7af875a7","/migration/tool.html","数据迁移助手",["/migration/tool","/migration/tool.md"]],["v-aecc6e00","/migration/valine.html","从 Valine 迁移",["/migration/valine","/migration/valine.md"]],["v-a1a49808","/reference/api.html","API",["/reference/api","/reference/api.md"]],["v-c9146c5e","/reference/client.html","前端配置",["/reference/client","/reference/client.md"]],["v-61377328","/reference/contribution.html","贡献指南",["/reference/contribution","/reference/contribution.md"]],["v-50cb2a87","/reference/instance.html","客户端实例",["/reference/instance","/reference/instance.md"]],["v-7898f959","/reference/server.html","服务端配置",["/reference/server","/reference/server.md"]],["v-743ff88e","/en/advanced/ecosystem.html","Ecosystem",["/en/advanced/ecosystem","/en/advanced/ecosystem.md"]],["v-2945f13a","/en/advanced/faq.html","FAQ",["/en/advanced/faq","/en/advanced/faq.md"]],["v-396f59cd","/en/advanced/intro.html","Intro",["/en/advanced/intro","/en/advanced/intro.md"]],["v-514365f1","/en/advanced/why.html","Why Waline?",["/en/advanced/why","/en/advanced/why.md"]],["v-eff96fe2","/en/guide/get-started.html","Get Started",["/en/guide/get-started","/en/guide/get-started.md"]],["v-b032db80","/en/migration/client.html","Waline client v1 migration guide",["/en/migration/client","/en/migration/client.md"]],["v-e565bdda","/en/migration/tool.html","Migration Helper",["/en/migration/tool","/en/migration/tool.md"]],["v-7871496c","/en/migration/valine.html","Migration from Valine",["/en/migration/valine","/en/migration/valine.md"]],["v-1b1feb10","/en/reference/api.html","API",["/en/reference/api","/en/reference/api.md"]],["v-6b4d4a3d","/en/reference/client.html","Client Configuration",["/en/reference/client","/en/reference/client.md"]],["v-de867450","/en/reference/contribution.html","Development Guide",["/en/reference/contribution","/en/reference/contribution.md"]],["v-ee77801a","/en/reference/instance.html","Client instance",["/en/reference/instance","/en/reference/instance.md"]],["v-487079c5","/en/reference/server.html","Server Configuration",["/en/reference/server","/en/reference/server.md"]],["v-74a28670","/guide/client/avatar.html","头像配置",["/guide/client/avatar","/guide/client/avatar.md"]],["v-756ec2fc","/guide/client/count.html","浏览量统计",["/guide/client/count","/guide/client/count.md"]],["v-2fad59ab","/guide/client/emoji.html","自定义表情",["/guide/client/emoji","/guide/client/emoji.md"]],["v-45360123","/guide/client/i18n.html","多语言支持",["/guide/client/i18n","/guide/client/i18n.md"]],["v-058f99fc","/guide/client/import.html","引入客户端",["/guide/client/import","/guide/client/import.md"]],["v-4dec5b45","/guide/client/intro.html","客户端介绍",["/guide/client/intro","/guide/client/intro.md"]],["v-583b3d0d","/guide/client/spa.html","单页应用支持",["/guide/client/spa","/guide/client/spa.md"]],["v-0b556720","/guide/client/style.html","自定义样式",["/guide/client/style","/guide/client/style.md"]],["v-a7534f04","/guide/client/syntax.html","评论格式支持",["/guide/client/syntax","/guide/client/syntax.md"]],["v-547fb6c3","/guide/server/aliyun-fc.html","阿里云函数计算部署",["/guide/server/aliyun-fc","/guide/server/aliyun-fc.md"]],["v-0418d6cb","/guide/server/baidu-cfc.html","百度云函数计算部署",["/guide/server/baidu-cfc","/guide/server/baidu-cfc.md"]],["v-d8d70e1a","/guide/server/cloudbase.html","CloudBase 云开发部署",["/guide/server/cloudbase","/guide/server/cloudbase.md"]],["v-82949f3e","/guide/server/databases.html","多数据库服务支持",["/guide/server/databases","/guide/server/databases.md"]],["v-740dc7ea","/guide/server/deta.html","Deta 部署",["/guide/server/deta","/guide/server/deta.md"]],["v-3c8a3984","/guide/server/inspirecloud.html","轻服务部署",["/guide/server/inspirecloud","/guide/server/inspirecloud.md"]],["v-38007666","/guide/server/intro.html","服务端介绍",["/guide/server/intro","/guide/server/intro.md"]],["v-66cc4fee","/guide/server/notification.html","评论通知",["/guide/server/notification","/guide/server/notification.md"]],["v-fbe3c888","/guide/server/railway.html","Railway 部署",["/guide/server/railway","/guide/server/railway.md"]],["v-356c0ac4","/guide/server/vps-deploy.html","独立部署",["/guide/server/vps-deploy","/guide/server/vps-deploy.md"]],["v-e64f5648","/en/guide/client/avatar.html","Avatar Configuration",["/en/guide/client/avatar","/en/guide/client/avatar.md"]],["v-057c9824","/en/guide/client/count.html","Pageview statistics",["/en/guide/client/count","/en/guide/client/count.md"]],["v-67a66f17","/en/guide/client/emoji.html","Custom emoji",["/en/guide/client/emoji","/en/guide/client/emoji.md"]],["v-704e8e37","/en/guide/client/i18n.html","I18n Support",["/en/guide/client/i18n","/en/guide/client/i18n.md"]],["v-668d9be0","/en/guide/client/import.html","Importing Client",["/en/guide/client/import","/en/guide/client/import.md"]],["v-f4351e9e","/en/guide/client/intro.html","Client Intro",["/en/guide/client/intro","/en/guide/client/intro.md"]],["v-27d47a79","/en/guide/client/recentcomment.html","RecentComments Widget",["/en/guide/client/recentcomment","/en/guide/client/recentcomment.md"]],["v-2812bd79","/en/guide/client/spa.html","Single Page Application Support",["/en/guide/client/spa","/en/guide/client/spa.md"]],["v-434e7c8c","/en/guide/client/style.html","Custom style",["/en/guide/client/style","/en/guide/client/style.md"]],["v-737ff092","/en/guide/client/syntax.html","Comment Syntax Support",["/en/guide/client/syntax","/en/guide/client/syntax.md"]],["v-ffe3a066","/en/guide/server/databases.html","Multi-database service support",["/en/guide/server/databases","/en/guide/server/databases.md"]],["v-1ddcadc2","/en/guide/server/deta.html","Deta deployment",["/en/guide/server/deta","/en/guide/server/deta.md"]],["v-1bf8da39","/en/guide/server/intro.html","Server introduction",["/en/guide/server/intro","/en/guide/server/intro.md"]],["v-40608902","/en/guide/server/notification.html","Comment Notification",["/en/guide/server/notification","/en/guide/server/notification.md"]],["v-bfd0f3b0","/en/guide/server/railway.html","Railway Deployment",["/en/guide/server/railway","/en/guide/server/railway.md"]],["v-4f0168b2","/en/guide/server/vps-deploy.html","Independent deployment",["/en/guide/server/vps-deploy","/en/guide/server/vps-deploy.md"]],["v-de155fda","/guide/client/widget/","挂件",["/guide/client/widget/index.html","/guide/client/widget/README.md"]],["v-81cb4dce","/guide/client/widget/recent-comment.html","最新评论挂件",["/guide/client/widget/recent-comment","/guide/client/widget/recent-comment.md"]],["v-6d93dbb2","/en/guide/client/widget/","Widgets",["/en/guide/client/widget/index.html","/en/guide/client/widget/README.md"]],["v-4819d2f6","/en/guide/client/widget/recent-comment.html","Recent comment Widget",["/en/guide/client/widget/recent-comment","/en/guide/client/widget/recent-comment.md"]],["v-3706649a","/404.html","",["/404"]]].reduce(((e,[t,n,a,d])=>(e.push({name:t,path:n,component:i.Y,meta:{title:a}},...d.map((e=>({path:e,redirect:n})))),e)),[{name:"404",path:"/:catchAll(.*)",component:i.Y}])},4995:(e,t,n)=>{n.d(t,{H:()=>i});const i={base:"/",lang:"en-US",title:"Waline",description:"A Simple Comment System inspired by Valine.",head:[["link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/icon/favicon-16x16.png"}],["link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/icon/favicon-32x32.png"}],["link",{rel:"manifest",href:"/manifest.webmanifest"}],["meta",{name:"application-name",content:"Waline"}],["meta",{name:"apple-mobile-web-app-title",content:"Waline"}],["meta",{name:"apple-mobile-web-app-status-bar-style",content:"white"}],["link",{rel:"apple-touch-icon",href:"/assets/icon/apple-touch-icon.png"}],["meta",{name:"msapplication-TileColor",content:"#0066AE"}],["meta",{name:"theme-color",content:"#0066AE"}]],locales:{"/":{lang:"zh-CN",title:"Waline",description:"一款基于 Valine 衍生的简洁、安全的评论系统。"},"/en/":{lang:"en-US",title:"Waline",description:"A Simple Comment System inspired by Valine."}}}},8417:(e,t,n)=>{n.d(t,{f:()=>i});const i={logo:"/logo.png",repo:"walinejs/waline",docsDir:"docs",docsBranch:"main",locales:{"/":{navbar:[{text:"指南",link:"/guide/get-started.html"},{text:"了解更多",children:[{text:"介绍",link:"/advanced/intro.html"},{text:"源始",link:"/advanced/why.html"},{text:"生态系统",link:"/advanced/ecosystem.html"},{text:"常见问题",link:"/advanced/faq.html"}]},{text:"迁移",children:[{text:"迁移至 @waline/client@v1",link:"/migration/client.html"},{text:"从 Valine 迁移",link:"/migration/valine.html"},{text:"迁移助手",link:"/migration/tool.html"}]},{text:"参考",children:[{text:"客户端配置",link:"/reference/client.html"},{text:"客户端实例",link:"/reference/instance.html"},{text:"服务端配置",link:"/reference/server.html"},{text:"API",link:"/reference/api.html"},{text:"贡献指南",link:"/reference/contribution.html"}]}],sidebar:{"/guide/":[{isGroup:!0,text:"快速上手",children:["/guide/get-started.md"]},{isGroup:!0,text:"客户端",children:["/guide/client/intro.md","/guide/client/import.md","/guide/client/syntax.md","/guide/client/emoji.md","/guide/client/style.md","/guide/client/avatar.md","/guide/client/i18n.md","/guide/client/spa.md","/guide/client/count.md","/guide/client/widget/README.md"]},{isGroup:!0,text:"服务端",children:["/guide/server/intro.md","/guide/server/notification.md","/guide/server/databases.md","/guide/server/cloudbase.md","/guide/server/deta.md","/guide/server/railway.md","/guide/server/inspirecloud.md","/guide/server/baidu-cfc.md","/guide/server/aliyun-fc.md","/guide/server/vps-deploy.md"]}],"/":[{isGroup:!0,text:"指南",children:["/guide/get-started.md","/guide/client/intro.md","/guide/server/intro.md"]},{isGroup:!0,text:"更多",children:["/advanced/intro.md","/advanced/why.md","/advanced/ecosystem.md","/advanced/faq.md"]},{isGroup:!0,text:"迁移",children:["/migration/client.md","/migration/valine.md","/migration/tool.md"]},{isGroup:!0,text:"参考",children:["/reference/client.md","/reference/instance.md","/reference/server.md","/reference/api.md","/reference/contribution.md"]}]},selectLanguageName:"简体中文",selectLanguageText:"选择语言",selectLanguageAriaLabel:"选择语言",contributorsText:"贡献者",editLinkText:"在 GitHub 上编辑此页",lastUpdatedText:"上次更新于",tip:"提示",warning:"注意",danger:"警告",notFound:["未找到页面"],backToHome:"返回主页",openInNewWindow:"在新窗口打开"},"/en/":{navbar:[{text:"Guide",link:"/en/guide/get-started.html"},{text:"Learn More",children:[{text:"Intro",link:"/en/advanced/intro.html"},{text:"Original Goal",link:"/en/advanced/why.html"},{text:"Ecosystem",link:"/en/advanced/ecosystem.html"},{text:"FAQ",link:"/en/advanced/faq.html"}]},{text:"Migration",children:[{text:"Migrate to @waline/client@v1",link:"/en/migration/client.html"},{text:"Migrate from Valine",link:"/en/migration/valine.html"},{text:"Migration Helper",link:"/en/migration/tool.html"}]},{text:"Reference",children:[{text:"Client Config",link:"/en/reference/client.html"},{text:"Client Instance",link:"/en/reference/instance.html"},{text:"Server Config",link:"/en/reference/server.html"},{text:"API",link:"/en/reference/api.html"},{text:"Contribution Guide",link:"/en/reference/contribution.html"}]}],sidebar:{"/en/guide/":[{isGroup:!0,text:"Get Started",children:["/en/guide/get-started.md"]},{isGroup:!0,text:"Client",children:["/en/guide/client/intro.md","/en/guide/client/import.md","/en/guide/client/syntax.md","/en/guide/client/emoji.md","/en/guide/client/style.md","/en/guide/client/avatar.md","/en/guide/client/i18n.md","/en/guide/client/spa.md","/en/guide/client/count.md","/en/guide/client/widget/README.md"]},{isGroup:!0,text:"Server",children:["/en/guide/server/intro.md","/en/guide/server/notification.md","/en/guide/server/databases.md","/en/guide/server/deta.md","/en/guide/server/railway.md","/en/guide/server/vps-deploy.md"]}],"/en/":[{isGroup:!0,text:"Guide",children:["/en/guide/get-started.md","/en/guide/client/intro.md","/en/guide/server/intro.md"]},{isGroup:!0,text:"Lear More",children:["/en/advanced/intro.md","/en/advanced/why.md","/en/advanced/ecosystem.md","/en/advanced/faq.md"]},{isGroup:!0,text:"Migration",children:["/en/migration/client.md","/en/migration/valine.md","/en/migration/tool.md"]},{isGroup:!0,text:"Reference",children:["/en/reference/client.md","/en/reference/instance.md","/en/reference/server.md","/en/reference/api.md","/en/reference/contribution.md"]}]},selectLanguageName:"English",selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",editLinkText:"Edit this page on GitHub",lastUpdatedText:"Last Updated",tip:"Tip",warning:"Note",danger:"Warn"}},navbar:[],darkMode:!0,selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",sidebar:"auto",sidebarDepth:2,editLink:!0,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributors:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window",toggleDarkMode:"toggle dark mode",toggleSidebar:"toggle sidebar"}}},e=>{e.O(0,[471,6725],(()=>(3045,e(e.s=3045)))),e.O()}]);