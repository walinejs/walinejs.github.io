import{m as V,g as F,h as D,i as H,o as x,c as j,a as m,t as A,u as S,j as L,v as Q,k as N,e as z,p as P,l as R}from"./app.dbaac125.js";import{_ as U}from"./plugin-vue_export-helper.21dcd24c.js";const E=t=>{const s=document.createEvent("MouseEvents");s.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),t.dispatchEvent(s)},J=(t,s)=>{const u=window.URL||window.webkitURL||window,l=new Blob([s]),c=document.createElementNS("http://www.w3.org/1999/xhtml","a");c.href=u.createObjectURL(l),c.download=t,E(c)},B={"/":{from:"\u4ECE",to:"\u8FC1\u79FB\u81F3",storage:"\u5B58\u50A8\u670D\u52A1",placeholder:"\u8BF7\u5C06\u6E90\u6587\u4EF6\u7C98\u8D34\u81F3\u6B64",convert:"\u8F6C\u6362",title:"\u53CB\u60C5\u63D0\u793A",typeecho:`Typecho \u7528\u6237\u53EF\u4EE5\u4F7F\u7528
        <a
          href="https://github.com/lizheming/typecho-export-valine"
          target="_blank"
          >Export2Valine</a
        >
        \u63D2\u4EF6\u5C06\u8BC4\u8BBA\u6570\u636E\u5BFC\u51FA\u6210 Valine \u6570\u636E\u540E\u76F4\u63A5\u4F7F\u7528\u3002`,tip:"Waline \u548C Valine \u7684 LeanCloud \u914D\u7F6E\u662F\u53EF\u4EE5\u5171\u7528\u7684\uFF0C\u4E0D\u9700\u8981\u8FDB\u884C\u6570\u636E\u8F6C\u6362\u54E6\uFF01"},"/en/":{from:"Migrate from",to:"to",storage:"Storage service",placeholder:"Please paste your source file here",convert:"Convert",title:"Tip",typeecho:`Typecho users can use
        <a
          href="https://github.com/lizheming/typecho-export-valine"
          target="_blank"
          >Export2Valine Plugin</a
        >
        to export comment data to Valine format.`,tip:"The LeanCloud configuration of Waline and Valine can be shared, no data conversion is required!"}},W=t=>{const s=document.createElement("a");return s.href=t,s.pathname||t},I=t=>{t=JSON.parse(t);const s={},u={};for(let l=0;l<t.length;l++)s[t[l].id]=t[l].rid;for(let l=0;l<t.length;l++){if(!t[l].rid)continue;let c=t[l].rid;for(;s[c];)c=s[c];u[t[l].id]=c}return{results:t.map(({content:l,date:c,email:f,id:e,ip:r,link:i,nick:o,page_key:n,rid:a,ua:d})=>{const p=new Date(c.replace(/-/g,"/")).toISOString(),h=W(n);return{objectId:e,QQAvatar:"",comment:V.parse(l),insertedAt:{__type:"Date",iso:p},mail:f,createdAt:p,updatedAt:p,ip:r,link:i,nick:o,ua:d,url:h,pid:a||null,rid:u[e]||null,status:"approved"}})}},M=t=>{const s=JSON.parse(t),{comments:u}=s,l={},c={},f={};return Array.isArray(s.commenters)&&s.commenters.forEach(e=>{l[e.commenterHex]={nick:e.name,mail:e.email,link:e.link!=="undefined"?e.link:void 0}}),u.filter(e=>e.parentHex&&e.parentHex!=="root").forEach(e=>{c[e.commentHex]=e.parentHex}),u.filter(e=>e.parentHex&&e.parentHex!=="root").forEach(e=>{let r=e.parentHex;for(;c[r];)r=c[r];f[e.commentHex]=r}),{results:u.filter(({deleted:e})=>!e).map(({commentHex:e,commenterHex:r,parentHex:i,creationDate:o,html:n,markdown:a,url:d,state:p})=>{const h=l[r]||{nick:"Anonymous",mail:"",link:""};return Object.assign({objectId:e,QQAvatar:"",comment:n||a,insertedAt:{__type:"Date",iso:o},createdAt:o,updatedAt:o,ip:"",ua:"",url:d,pid:i!=="root"?i:"",rid:f[e]?f[e]:"",status:p==="approved"?"approved":"waiting"},h)})}},C=t=>{const u=new DOMParser().parseFromString(t,"application/xml"),l=Array.from(u.querySelectorAll("post")).filter(o=>o.querySelector("isDeleted").textContent.toLowerCase()==="false"),c=Array.from(u.querySelectorAll("disqus > thread")),f={};c.forEach(o=>{const n=o.querySelector("link").textContent,a=new URL(n),d=o.getAttribute("dsq:id");f[d]=a.pathname});const e={};l.forEach(o=>{const n=o.getAttribute("dsq:id");if(!o.querySelector("parent"))return;const a=o.querySelector("parent").getAttribute("dsq:id");e[n]=a});const r={};return l.filter(o=>o.querySelector("parent")).forEach(o=>{const n=o.getAttribute("dsq:id");let a=o.querySelector("parent").getAttribute("dsq:id");for(;e[a];)a=e[a];r[n]=a}),{results:l.map(o=>{const n=o.getAttribute("dsq:id"),a=o.querySelector("message").textContent,d=new Date(o.querySelector("createdAt").textContent).toISOString(),p=o.querySelector("author name").textContent,h=o.querySelector("thread").getAttribute("dsq:id"),y=f[h],g=o.querySelector("parent"),v=g?g.getAttribute("dsq:id"):null,k=g?r[n]:null,b=o.querySelector("isSpam").textContent.toLowerCase()!=="false";return{objectId:n,QQAvatar:"",comment:a,insertedAt:{__type:"Date",iso:d},createdAt:d,updatedAt:d,ip:"",link:"",mail:"",nick:p,ua:"",url:y,pid:v,rid:k,status:b?"spam":"approved"}})}};var $={};(function(t){t.__type__="csv";var s=typeof jQuery!="undefined"&&jQuery.Deferred||typeof _!="undefined"&&_.Deferred||function(){var e,r,i=new Promise(function(o,n){e=o,r=n});return{resolve:e,reject:r,promise:function(){return i}}};t.fetch=function(e){var r=new s;if(e.file){var i=new FileReader,o=e.encoding||"UTF-8";i.onload=function(a){var d=t.extractFields(t.parse(a.target.result,e),e);d.useMemoryStore=!0,d.metadata={filename:e.file.name},r.resolve(d)},i.onerror=function(a){r.reject({error:{message:"Failed to load file. Code: "+a.target.error.code}})},i.readAsText(e.file,o)}else if(e.data){var n=t.extractFields(t.parse(e.data,e),e);n.useMemoryStore=!0,r.resolve(n)}else e.url&&(window.fetch||function(a){var d=jQuery.get(a),p={then:function(h){return d.done(h),p},catch:function(h){return d.fail(h),p}};return p})(e.url).then(function(a){return a.text?a.text():a}).then(function(a){var d=t.extractFields(t.parse(a,e),e);d.useMemoryStore=!0,r.resolve(d)}).catch(function(a,d){r.reject({error:{message:"Failed to load file. "+a.statusText+". Code: "+a.status,request:a}})});return r.promise()},t.extractFields=function(e,r){return r.noHeaderRow!==!0&&0<e.length?{fields:e[0],records:e.slice(1)}:{records:e}},t.normalizeDialectOptions=function(e){var r={delimiter:",",doublequote:!0,lineterminator:`
`,quotechar:'"',skipinitialspace:!0,skipinitialrows:0};for(var i in e)i==="trim"?r.skipinitialspace=e.trim:r[i.toLowerCase()]=e[i];return r},t.parse=function(e,r){r&&(!r||r.lineterminator)||(e=t.normalizeLineTerminator(e,r));var i,o,n=t.normalizeDialectOptions(r);i=e,o=n.lineterminator,e=i.charAt(i.length-o.length)!==o?i:i.substring(0,i.length-o.length);var a,d,p="",h=!1,y=!1,g="",v=[],k=[];for(d=function(b){return y!==!0&&(b===""?b=null:n.skipinitialspace===!0&&(b=f(b)),u.test(b)?b=parseInt(b,10):l.test(b)&&(b=parseFloat(b,10))),b},a=0;a<e.length;a+=1)p=e.charAt(a),h!==!1||p!==n.delimiter&&p!==n.lineterminator?p!==n.quotechar?g+=p:h?e.charAt(a+1)===n.quotechar?(g+=n.quotechar,a+=1):h=!1:y=h=!0:(g=d(g),v.push(g),p===n.lineterminator&&(k.push(v),v=[]),g="",y=!1);return g=d(g),v.push(g),k.push(v),n.skipinitialrows&&(k=k.slice(n.skipinitialrows)),k},t.normalizeLineTerminator=function(e,r){return(r=r||{}).lineterminator?e:e.replace(/(\r\n|\n|\r)/gm,`
`)},t.objectToArray=function(e){for(var r=[],i=[],o=[],n=0;n<e.fields.length;n++){var a=e.fields[n].id;o.push(a);var d=e.fields[n].label?e.fields[n].label:a;i.push(d)}for(r.push(i),n=0;n<e.records.length;n++){for(var p=[],h=e.records[n],y=0;y<o.length;y++)p.push(h[o[y]]);r.push(p)}return r},t.serialize=function(e,r){var i=null;i=e instanceof Array?e:t.objectToArray(e);var o,n,a,d=t.normalizeDialectOptions(r),p="",h="",y="",g="";for(a=function(v){return v===null?v="":typeof v=="string"&&c.test(v)?(d.doublequote&&(v=v.replace(/"/g,'""')),v=d.quotechar+v+d.quotechar):typeof v=="number"&&(v=v.toString(10)),v},o=0;o<i.length;o+=1)for(p=i[o],n=0;n<p.length;n+=1)h=a(p[n]),n===p.length-1?(g+=(y+=h)+d.lineterminator,y=""):y+=h+d.delimiter,h="";return g};var u=/^\d+$/,l=/^\d*\.\d+$|^\d+\.\d*$/,c=/^\s|\s$|,|"|\n/,f=String.prototype.trim?function(e){return e.trim()}:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}})($);const w=t=>{const s=["id","nick","updatedAt","mail","ua","ip","status","insertedAt","createdAt","comment","pid","rid","link","url","user_id"],u={},l=r=>{if(r.hasOwnProperty("objectId"))return r.objectId;if(typeof r._id!="string"&&r._id.$oid)return r._id.$oid};let c=1;t.results.forEach(r=>{const i=l(r);i&&(u[i]=c),c+=1});const f=[];return t.results.forEach(r=>{const i=l(r);i&&(r.id=u[i].toString()),r.pid=u[r.pid],r.rid=u[r.rid],r.status=r.status||"approved";const o={};for(let n=0;n<s.length;n++){const a=s[n];switch(a){case"insertedAt":o[a]=r[a].iso.replace("T"," ").replace(/.\d{3}Z$/i,"");break;case"createdAt":case"updatedAt":o[a]=r[a].replace("T"," ").replace(/.\d{3}Z$/i,"");break;case"rid":case"pid":o[a]=r[a]||null;break;default:o[a]=r[a]||"";break}}f.push(o)}),$.serialize({fields:s.map(r=>({id:r,label:r})),records:f})},q=t=>t.results.map(s=>(s.hasOwnProperty("objectId")?(s._id=s.objectId,delete s.objectId):typeof s._id!="string"&&s._id.$oid&&(s._id=s._id.$oid),typeof s.insertedAt=="object"&&s.insertedAt.iso&&(s.insertedAt={$date:s.insertedAt.iso}),delete s.ACL,JSON.stringify(s))).join(`\r
`),O=t=>({results:t.trim().split(/[\r\n]+/).filter(u=>u).map(u=>{const{_id:l,comment:c,created:f,updated:e,ip:r,link:i,mail:o,nick:n,ua:a,url:d,pid:p,rid:h,isSpam:y}=JSON.parse(u);return{objectId:typeof l=="string"?l:l.$oid,QQAvatar:"",comment:c,insertedAt:{__type:"Date",iso:new Date(f).toISOString()},createdAt:new Date(f).toISOString(),updatedAt:new Date(e).toISOString(),ip:r,link:i,mail:o,nick:n,ua:a,url:d,pid:p,rid:h,status:y?"spam":"approved"}})}),Z={disqus:{wleancloud:C,wcloudbase(t){return q(C(t))},wsql(t){return w(C(t))},wgithub(t){return w(C(t))}},valine:{wcloudbase:q,wsql:w,wgithub:w},twikoo:{wleancloud:O,wcloudbase(t){return q(O(t))},wsql(t){return w(O(t))},wgithub(t){return w(O(t))}},artalk:{wleancloud:I,wcloudbase(t){return q(I(t))},wsql(t){return w(I(t))},wgithub(t){return w(I(t))}},commento:{wleancloud:M,wcloudbase(t){return q(M(t))},wsql(t){return w(M(t))},wgithub(t){return w(M(t))}}};const T=t=>(P("data-v-7ca2faa4"),t=t(),R(),t),G={style:{"margin-bottom":"20px"}},K={class:"input-group"},X={for:"from"},Y=z('<option value="valine" data-v-7ca2faa4>Valine</option><option value="disqus" data-v-7ca2faa4>Disqus</option><option value="twikoo" data-v-7ca2faa4>Twikoo</option><option value="typecho" data-v-7ca2faa4>Typecho</option><option value="artalk" data-v-7ca2faa4>Artalk</option><option value="commento" data-v-7ca2faa4>Commento</option>',6),ee=[Y],te={class:"input-group"},re={for:"to"},oe=T(()=>m("option",{value:"wleancloud"},"Waline LeanCloud",-1)),ae=T(()=>m("option",{value:"wcloudbase"},"Waline CloudBase",-1)),ne=T(()=>m("option",{value:"wsql"},"Waline MySQL/PostgreSQL/SQLite",-1)),ie=T(()=>m("option",{value:"wgithub"},"Github",-1)),se=[oe,ae,ne,ie],le={class:"input-group"},ce={key:0,class:"warning custom-block"},de={class:"custom-block-title"},ue=["innerHTML"],pe={key:1,class:"warning custom-block"},fe={class:"custom-block-title"},he=["textContent"],ve={key:2},me=["placeholder"],ge={setup(t){const s=F(),u=D("valine"),l=D("wcloudbase"),c=D(""),f=H(()=>B[s.value]),e=r=>{if(r.preventDefault(),!c.value)return alert("\u8BF7\u8F93\u5165\u5185\u5BB9");u.value==="valine"&&(c.value=c.value.trim(),c.value.match(/},[\r\n]+/)?c.value=JSON.parse(c.value):c.value=JSON.parse(`{"results":[ ${c.value.split(/[\r\n]+/).join(",")} ]}`));const i=Z[u.value][l.value];if(typeof i=="function"){let o=i(c.value);console.log(o),typeof o!="string"&&(o=JSON.stringify(o,null,"	")),J("output."+(l.value!=="wsql"?"json":"csv"),o)}};return(r,i)=>(x(),j("form",null,[m("div",G,[m("div",K,[m("label",X,A(S(f).from),1),L(m("select",{id:"from","onUpdate:modelValue":i[0]||(i[0]=o=>u.value=o)},ee,512),[[Q,u.value]])]),m("div",te,[m("label",re,A(S(f).to),1),L(m("select",{id:"to","onUpdate:modelValue":i[1]||(i[1]=o=>l.value=o)},se,512),[[Q,l.value]])]),m("div",le,A(S(f).storage),1)]),u.value==="typecho"?(x(),j("div",ce,[m("p",de,A(S(f).tip),1),m("p",{innerHTML:S(f).typeecho},null,8,ue)])):u.value==="valine"&&l.value==="wleancloud"?(x(),j("div",pe,[m("p",fe,A(S(f).tip),1),m("p",{textContent:A(S(f).tip)},null,8,he)])):(x(),j("div",ve,[L(m("textarea",{placeholder:S(f).placeholder,"onUpdate:modelValue":i[2]||(i[2]=o=>c.value=o)},null,8,me),[[N,c.value]]),m("button",{onClick:e},A(S(f).convert),1)]))]))}};var be=U(ge,[["__scopeId","data-v-7ca2faa4"],["__file","MigrationTool.vue"]]);export{be as M};
