import{f as m,n as e,T as l,z as u,q as p,A as d,B as c,i as f,r,C as v,D as g}from"./app.73b7f2a0.js";import{S as h}from"./SkipLink.077eb570.js";var D=m({name:"FadeSlideY",setup(s,{slots:a}){const o=u(),t=o.resolve,i=o.pending;return()=>e(l,{name:"fade-slide-y",mode:"out-in",onBeforeEnter:t,onBeforeLeave:i},()=>{var n;return(n=a.default)==null?void 0:n.call(a)})}}),L=m({name:"Layout",setup(){const s=g(),a=p(),o=v(),t=d();return c(),f(()=>a.value.blog.sidebarDisplay||s.value.blog.sidebarDisplay||"mobile"),()=>[e(h),e(r("CommonWrapper"),{},{default:()=>t.value.home?e(r("HomePage")):e(D,()=>e(r("NormalPage"),{key:o.value.path}))})]}});export{L as default};
