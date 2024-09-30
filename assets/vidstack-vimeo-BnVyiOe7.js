var ue=Object.defineProperty;var N=r=>{throw TypeError(r)};var de=(r,c,e)=>c in r?ue(r,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[c]=e;var b=(r,c,e)=>de(r,typeof c!="symbol"?c+"":c,e),S=(r,c,e)=>c.has(r)||N("Cannot "+e);var t=(r,c,e)=>(S(r,c,"read from private field"),e?e.call(r):c.get(r)),f=(r,c,e)=>c.has(r)?N("Cannot add the same private member more than once"):c instanceof WeakSet?c.add(r):c.set(r,e),u=(r,c,e,i)=>(S(r,c,"write to private field"),i?i.call(r,e):c.set(r,e),e),o=(r,c,e)=>(S(r,c,"access private method"),e);import{b2 as fe,a1 as U,bz as C,bf as pe,Y as q,X as Q,V as ye,bA as Y,bk as R,ap as be,al as ke,bp as ve,bs as _}from"./app-0Jd65Pm6.js";import{R as me}from"./vidstack-DSYpsFWk-kqsUwSOG.js";import{E as we}from"./vidstack-BePVaxm4-CMWjS3q0.js";import{resolveVimeoVideoId as Pe,getVimeoVideoInfo as Te}from"./vidstack-krOAtKMi-C3UUF7YD.js";const Ce=["bufferend","bufferstart","durationchange","ended","enterpictureinpicture","error","fullscreenchange","leavepictureinpicture","loaded","playProgress","loadProgress","pause","play","playbackratechange","qualitychange","seeked","seeking","timeupdate","volumechange","waiting"];var a,y,k,w,g,E,v,V,A,P,m,$,s,z,W,X,G,T,H,J,K,x,Z,ee,te,se,ie,L,ne,ae,oe,F,he,O,re,D,ce,le,l,j,B;class Re extends we{constructor(e,i){super(e);f(this,s);b(this,"$$PROVIDER_TYPE","VIMEO");b(this,"scope",fe());b(this,"fullscreen");f(this,a);f(this,y,U(""));f(this,k,U(!1));f(this,w,null);f(this,g,null);f(this,E,!1);f(this,v,new C(0,0));f(this,V,new me(o(this,s,G).bind(this)));f(this,A,null);f(this,P,null);f(this,m,new Map);f(this,$,null);b(this,"cookies",!1);b(this,"title",!0);b(this,"byline",!0);b(this,"portrait",!0);b(this,"color","00ADEF");f(this,T,!1);u(this,a,i);const n=this;this.fullscreen={get active(){return t(n,E)},supported:!0,enter:()=>o(this,s,l).call(this,"requestFullscreen"),exit:()=>o(this,s,l).call(this,"exitFullscreen")}}get type(){return"vimeo"}get currentSrc(){return t(this,g)}get videoId(){return t(this,y).call(this)}get hash(){return t(this,w)}get isPro(){return t(this,k).call(this)}preconnect(){pe(this.getOrigin())}setup(){super.setup(),q(o(this,s,z).bind(this)),q(o(this,s,W).bind(this)),q(o(this,s,X).bind(this)),t(this,a).notify("provider-setup",this)}destroy(){o(this,s,j).call(this),this.fullscreen=void 0;const e="provider destroyed";for(const i of t(this,m).values())for(const{reject:n}of i)n(e);t(this,m).clear(),o(this,s,l).call(this,"destroy")}async play(){return o(this,s,l).call(this,"play")}async pause(){return o(this,s,l).call(this,"pause")}setMuted(e){o(this,s,l).call(this,"setMuted",e)}setCurrentTime(e){o(this,s,l).call(this,"seekTo",e),t(this,a).notify("seeking",e)}setVolume(e){o(this,s,l).call(this,"setVolume",e),o(this,s,l).call(this,"setMuted",Q(t(this,a).$state.muted))}setPlaybackRate(e){o(this,s,l).call(this,"setPlaybackRate",e)}async loadSource(e){if(!ye(e.src)){u(this,g,null),u(this,w,null),t(this,y).set("");return}const{videoId:i,hash:n}=Pe(e.src);t(this,y).set(i??""),u(this,w,n??null),u(this,g,e)}getOrigin(){return"https://player.vimeo.com"}buildParams(){const{keyDisabled:e}=t(this,a).$props,{playsInline:i,nativeControls:n}=t(this,a).$state,h=n();return{title:this.title,byline:this.byline,color:this.color,portrait:this.portrait,controls:h,h:this.hash,keyboard:h&&!e(),transparent:!0,playsinline:i(),dnt:!this.cookies}}onMessage(e,i){e.event?o(this,s,ce).call(this,e.event,e.data,i):e.method&&o(this,s,Z).call(this,e.method,e.value,i)}onLoad(){}}a=new WeakMap,y=new WeakMap,k=new WeakMap,w=new WeakMap,g=new WeakMap,E=new WeakMap,v=new WeakMap,V=new WeakMap,A=new WeakMap,P=new WeakMap,m=new WeakMap,$=new WeakMap,s=new WeakSet,z=function(){o(this,s,j).call(this);const e=t(this,y).call(this);if(!e){this.src.set("");return}this.src.set(`${this.getOrigin()}/video/${e}`),t(this,a).notify("load-start")},W=function(){const e=t(this,y).call(this);if(!e)return;const i=Y(),n=new AbortController;return u(this,$,i),Te(e,n,t(this,w)).then(h=>{i.resolve(h)}).catch(h=>{i.reject()}),()=>{i.reject(),n.abort()}},X=function(){const e=t(this,k).call(this),{$state:i,qualities:n}=t(this,a);if(i.canSetPlaybackRate.set(e),n[R.setReadonly](!e),e)return be(n,"change",()=>{var d;if(n.auto)return;const h=(d=n.selected)==null?void 0:d.id;h&&o(this,s,l).call(this,"setQuality",h)})},G=function(){o(this,s,l).call(this,"getCurrentTime")},T=new WeakMap,H=function(e,i){if(t(this,T)&&e===0)return;const{realCurrentTime:n,paused:h,bufferedEnd:d,seekableEnd:p,live:I}=t(this,a).$state;if(n()===e)return;const M=n();t(this,a).notify("time-change",e,i),Math.abs(M-e)>1.5&&(t(this,a).notify("seeking",e,i),!h()&&d()<e&&t(this,a).notify("waiting",void 0,i)),!I()&&p()-e<.01&&(t(this,a).notify("end",void 0,i),u(this,T,!0),setTimeout(()=>{u(this,T,!1)},500))},J=function(e,i){t(this,a).notify("seeked",e,i)},K=function(e){var n;const i=t(this,y).call(this);(n=t(this,$))==null||n.promise.then(h=>{if(!h)return;const{title:d,poster:p,duration:I,pro:M}=h;t(this,k).set(M),t(this,a).notify("title-change",d,e),t(this,a).notify("poster-change",p,e),t(this,a).notify("duration-change",I,e),o(this,s,x).call(this,I,e)}).catch(()=>{i===t(this,y).call(this)&&(o(this,s,l).call(this,"getVideoTitle"),o(this,s,l).call(this,"getDuration"))})},x=function(e,i){const{nativeControls:n}=t(this,a).$state,h=n();u(this,v,new C(0,e));const d={buffered:new C(0,0),seekable:t(this,v),duration:e};t(this,a).delegate.ready(d,i),h||o(this,s,l).call(this,"_hideOverlay"),o(this,s,l).call(this,"getQualities"),o(this,s,l).call(this,"getChapters")},Z=function(e,i,n){var h;switch(e){case"getVideoTitle":const d=i;t(this,a).notify("title-change",d,n);break;case"getDuration":const p=i;t(this,a).$state.canPlay()?t(this,a).notify("duration-change",p,n):o(this,s,x).call(this,p,n);break;case"getCurrentTime":o(this,s,H).call(this,i,n);break;case"getBuffered":ke(i)&&i.length&&o(this,s,L).call(this,i[i.length-1][1],n);break;case"setMuted":o(this,s,F).call(this,Q(t(this,a).$state.volume),i,n);break;case"getChapters":o(this,s,he).call(this,i);break;case"getQualities":o(this,s,re).call(this,i,n);break}(h=o(this,s,B).call(this,e))==null||h.resolve()},ee=function(){for(const e of Ce)o(this,s,l).call(this,"addEventListener",e)},te=function(e){t(this,V).stop(),t(this,a).notify("pause",void 0,e)},se=function(e){t(this,V).start(),t(this,a).notify("play",void 0,e)},ie=function(e){const{paused:i}=t(this,a).$state;!i()&&!t(this,T)&&t(this,a).notify("playing",void 0,e)},L=function(e,i){const n={buffered:new C(0,e),seekable:t(this,v)};t(this,a).notify("progress",n,i)},ne=function(e){t(this,a).notify("waiting",void 0,e)},ae=function(e){const{paused:i}=t(this,a).$state;i()||t(this,a).notify("playing",void 0,e)},oe=function(e){const{paused:i}=t(this,a).$state;i()&&t(this,a).notify("play",void 0,e),t(this,a).notify("waiting",void 0,e)},F=function(e,i,n){const h={volume:e,muted:i};t(this,a).notify("volume-change",h,n)},he=function(e){if(o(this,s,O).call(this),!e.length)return;const i=new ve({kind:"chapters",default:!0}),{seekableEnd:n}=t(this,a).$state;for(let h=0;h<e.length;h++){const d=e[h],p=e[h+1];i.addCue(new window.VTTCue(d.startTime,(p==null?void 0:p.startTime)??n(),d.title))}u(this,P,i),t(this,a).textTracks.add(i)},O=function(){t(this,P)&&(t(this,a).textTracks.remove(t(this,P)),u(this,P,null))},re=function(e,i){t(this,a).qualities[_.enableAuto]=e.some(n=>n.id==="auto")?()=>o(this,s,l).call(this,"setQuality","auto"):void 0;for(const n of e){if(n.id==="auto")continue;const h=+n.id.slice(0,-1);isNaN(h)||t(this,a).qualities[R.add]({id:n.id,width:h*(16/9),height:h,codec:"avc1,h.264",bitrate:-1},i)}o(this,s,D).call(this,e.find(n=>n.active),i)},D=function({id:e}={},i){if(!e)return;const n=e==="auto",h=t(this,a).qualities.getById(e);n?(t(this,a).qualities[_.setAuto](n,i),t(this,a).qualities[R.select](void 0,!0,i)):t(this,a).qualities[R.select](h??void 0,!0,i)},ce=function(e,i,n){switch(e){case"ready":o(this,s,ee).call(this);break;case"loaded":o(this,s,K).call(this,n);break;case"play":o(this,s,se).call(this,n);break;case"playProgress":o(this,s,ie).call(this,n);break;case"pause":o(this,s,te).call(this,n);break;case"loadProgress":o(this,s,L).call(this,i.seconds,n);break;case"waiting":o(this,s,oe).call(this,n);break;case"bufferstart":o(this,s,ne).call(this,n);break;case"bufferend":o(this,s,ae).call(this,n);break;case"volumechange":o(this,s,F).call(this,i.volume,Q(t(this,a).$state.muted),n);break;case"durationchange":u(this,v,new C(0,i.duration)),t(this,a).notify("duration-change",i.duration,n);break;case"playbackratechange":t(this,a).notify("rate-change",i.playbackRate,n);break;case"qualitychange":o(this,s,D).call(this,i,n);break;case"fullscreenchange":u(this,E,i.fullscreen),t(this,a).notify("fullscreen-change",i.fullscreen,n);break;case"enterpictureinpicture":t(this,a).notify("picture-in-picture-change",!0,n);break;case"leavepictureinpicture":t(this,a).notify("picture-in-picture-change",!1,n);break;case"ended":t(this,a).notify("end",void 0,n);break;case"error":o(this,s,le).call(this,i,n);break;case"seek":case"seeked":o(this,s,J).call(this,i.seconds,n);break}},le=function(e,i){var d;const{message:n,method:h}=e;h==="setPlaybackRate"&&t(this,k).set(!1),h&&((d=o(this,s,B).call(this,h))==null||d.reject(n))},l=async function(e,i){let n=Y(),h=t(this,m).get(e);return h||t(this,m).set(e,h=[]),h.push(n),this.postMessage({method:e,value:i}),n.promise},j=function(){t(this,V).stop(),u(this,v,new C(0,0)),u(this,$,null),u(this,A,null),t(this,k).set(!1),o(this,s,O).call(this)},B=function(e){var i;return(i=t(this,m).get(e))==null?void 0:i.shift()};export{Re as VimeoProvider};
