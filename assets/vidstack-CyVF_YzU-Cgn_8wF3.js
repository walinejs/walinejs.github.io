import{S as h,aP as m,n as i,A as s}from"./app-DyklgEOl.js";const t=class t extends h(HTMLElement,m){constructor(){super(...arguments),this.Wm=document.createElement("img")}onSetup(){this.$state.img.set(this.Wm)}onConnect(){const{src:r,alt:n,crossOrigin:o}=this.$state;this.Wm.parentNode!==this&&this.prepend(this.Wm),i(()=>{s(this.Wm,"alt",n()),s(this.Wm,"crossorigin",o()),s(this.Wm,"src",r()||"")}),i(()=>{const{loading:a,hidden:c}=this.$state;this.Wm.style.display=a()||c()?"none":""})}};t.tagName="media-poster",t.attrs={crossOrigin:"crossorigin"};let e=t;export{e as MediaPosterElement};
