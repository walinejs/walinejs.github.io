import{a5 as m,m as d,ar as i}from"./app-47lnWMq3.js";import{I as r}from"./vidstack-DQ6dSZwe-BTtv5vWE.js";const l=i('<svg viewBox="0 0 32 32" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"></svg>');function g(a,s){const o=m(l);o.innerHTML=r,a.append(o);const e=document.createElement("span");e.classList.add("vds-google-cast-info"),a.append(e);const n=document.createElement("span");n.classList.add("vds-google-cast-device-name"),d(()=>{const{remotePlaybackInfo:c}=s,t=c();return t!=null&&t.deviceName&&(n.textContent=t.deviceName,e.append("Google Cast on ",n)),()=>{e.textContent=""}})}export{g as insertContent};
