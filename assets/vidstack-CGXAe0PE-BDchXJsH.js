var Qt=Object.defineProperty;var ot=n=>{throw TypeError(n)};var Xt=(n,t,s)=>t in n?Qt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var M=(n,t,s)=>Xt(n,typeof t!="symbol"?t+"":t,s),X=(n,t,s)=>t.has(n)||ot("Cannot "+s);var i=(n,t,s)=>(X(n,t,"read from private field"),s?s.call(n):t.get(n)),d=(n,t,s)=>t.has(n)?ot("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,s),c=(n,t,s,r)=>(X(n,t,"write to private field"),r?r.call(n,s):t.set(n,s),s),a=(n,t,s)=>(X(n,t,"access private method"),s);import{aA as Yt,k as ut,B,be as Zt,n as ti,a8 as nt,s as lt,bf as _,bg as ii,bh as ei,q as si,H as ai,W as rt,aw as dt,aG as ni,bi as Y,x as Z}from"./app-hYiCGIvL.js";import{R as ri}from"./vidstack-DSYpsFWk-C2YkGaqg.js";let j=null,K=[],z=[];function ht(){return j??(j=new AudioContext)}function hi(){const n=ht(),t=n.createGain();return t.connect(n.destination),K.push(t),t}function oi(n,t){const s=ht(),r=s.createMediaElementSource(n);return t&&r.connect(t),z.push(r),r}function di(n){const t=K.indexOf(n);t!==-1&&(K.splice(t,1),n.disconnect(),ft())}function ci(n){const t=z.indexOf(n);t!==-1&&(z.splice(t,1),n.disconnect(),ft())}function ft(){j&&K.length===0&&z.length===0&&j.close().then(()=>{j=null})}var R,A,m,p,P,mt,tt;class ui{constructor(t,s){d(this,P);d(this,R);d(this,A);d(this,m,null);d(this,p,null);c(this,R,t),c(this,A,s)}get currentGain(){var t,s;return((s=(t=i(this,m))==null?void 0:t.gain)==null?void 0:s.value)??null}get supported(){return!0}setGain(t){const s=this.currentGain;if(t!==this.currentGain){if(t===1&&s!==1){this.removeGain();return}i(this,m)||(c(this,m,hi()),i(this,p)&&i(this,p).connect(i(this,m))),i(this,p)||c(this,p,oi(i(this,R),i(this,m))),i(this,m).gain.value=t,i(this,A).call(this,t)}}removeGain(){i(this,m)&&(i(this,p)&&i(this,p).connect(ht().destination),a(this,P,tt).call(this),i(this,A).call(this,null))}destroy(){a(this,P,mt).call(this),a(this,P,tt).call(this)}}R=new WeakMap,A=new WeakMap,m=new WeakMap,p=new WeakMap,P=new WeakSet,mt=function(){if(i(this,p))try{ci(i(this,p))}catch{}finally{c(this,p,null)}},tt=function(){if(i(this,m))try{di(i(this,m))}catch{}finally{c(this,m,null)}};const li=["focus","blur","visibilitychange","pageshow","pagehide"];var k,E,O,J,pt;class fi{constructor(){d(this,J);d(this,k,Z(ct()));d(this,E,Z(document.visibilityState));d(this,O)}connect(){const t=new nt(window),s=a(this,J,pt).bind(this);for(const r of li)t.add(r,s);_&&t.add("beforeunload",r=>{c(this,O,setTimeout(()=>{r.defaultPrevented||r.returnValue.length>0||(i(this,k).set("hidden"),i(this,E).set("hidden"))},0))})}get pageState(){return i(this,k).call(this)}get visibility(){return i(this,E).call(this)}}k=new WeakMap,E=new WeakMap,O=new WeakMap,J=new WeakSet,pt=function(t){_&&window.clearTimeout(i(this,O)),(t.type!=="blur"||i(this,k).call(this)==="active")&&(i(this,k).set(ct(t)),i(this,E).set(document.visibilityState=="hidden"?"hidden":"visible"))};function ct(n){return(n==null?void 0:n.type)==="blur"||document.visibilityState==="hidden"?"hidden":document.hasFocus()?"active":"passive"}var D,h,b,x,L,S,H,G,e,o,yt,$,N,gt,bt,vt,Tt,Q,at,u,pi,T,kt,it,St,wt,Pt,W,Ct,At,Et,xt,Lt,Gt,$t,Nt,Mt,Rt,Ot,Dt,Ht,It,Ft,Ut,Vt,qt;class mi{constructor(t,s){d(this,e);d(this,D);d(this,h);d(this,b,!1);d(this,x,!1);d(this,L,!1);d(this,S,new ri(a(this,e,gt).bind(this)));d(this,H,new fi);d(this,G);d(this,$,0);d(this,N,-1);d(this,Q);d(this,at);c(this,D,t),c(this,h,s),c(this,G,new nt(t.media)),a(this,e,bt).call(this),i(this,H).connect(),lt(a(this,e,Mt).bind(this)),ut(a(this,e,yt).bind(this))}}D=new WeakMap,h=new WeakMap,b=new WeakMap,x=new WeakMap,L=new WeakMap,S=new WeakMap,H=new WeakMap,G=new WeakMap,e=new WeakSet,o=function(){return i(this,D).media},yt=function(){var t;c(this,x,!1),c(this,L,!1),i(this,S).stop(),i(this,G).abort(),(t=i(this,Q))==null||t.clear()},$=new WeakMap,N=new WeakMap,gt=function(){const t=i(this,e,o).currentTime;!(_&&t-i(this,N)<.35)&&i(this,$)!==t&&(a(this,e,T).call(this,t),c(this,$,t))},bt=function(){a(this,e,u).call(this,"loadstart",a(this,e,kt)),a(this,e,u).call(this,"abort",a(this,e,it)),a(this,e,u).call(this,"emptied",a(this,e,St)),a(this,e,u).call(this,"error",a(this,e,qt)),a(this,e,u).call(this,"volumechange",a(this,e,Dt))},vt=function(){i(this,x)||(a(this,e,u).call(this,"loadeddata",a(this,e,wt)),a(this,e,u).call(this,"loadedmetadata",a(this,e,Pt)),a(this,e,u).call(this,"canplay",a(this,e,Et)),a(this,e,u).call(this,"canplaythrough",a(this,e,xt)),a(this,e,u).call(this,"durationchange",a(this,e,Ot)),a(this,e,u).call(this,"play",a(this,e,Ct)),a(this,e,u).call(this,"progress",a(this,e,Ft)),a(this,e,u).call(this,"stalled",a(this,e,Gt)),a(this,e,u).call(this,"suspend",a(this,e,Ut)),a(this,e,u).call(this,"ratechange",a(this,e,Vt)),c(this,x,!0))},Tt=function(){i(this,L)||(a(this,e,u).call(this,"pause",a(this,e,At)),a(this,e,u).call(this,"playing",a(this,e,Lt)),a(this,e,u).call(this,"seeked",a(this,e,Ht)),a(this,e,u).call(this,"seeking",a(this,e,It)),a(this,e,u).call(this,"ended",a(this,e,Nt)),a(this,e,u).call(this,"waiting",a(this,e,$t)),c(this,L,!0))},Q=new WeakMap,at=new WeakMap,u=function(t,s){i(this,G).add(t,s.bind(this))},pi=function(t){},T=function(t,s){const r=Math.min(t,i(this,h).$state.seekableEnd());i(this,h).notify("time-change",r,s)},kt=function(t){if(i(this,e,o).networkState===3){a(this,e,it).call(this,t);return}a(this,e,vt).call(this),i(this,h).notify("load-start",void 0,t)},it=function(t){i(this,h).notify("abort",void 0,t)},St=function(){i(this,h).notify("emptied",void 0,event)},wt=function(t){i(this,h).notify("loaded-data",void 0,t)},Pt=function(t){c(this,$,0),c(this,N,-1),a(this,e,Tt).call(this),i(this,h).notify("loaded-metadata",void 0,t),(ii||_&&ei(i(this,h).$state.source()))&&i(this,h).delegate.ready(a(this,e,W).call(this),t)},W=function(){return{provider:si(i(this,h).$provider),duration:i(this,e,o).duration,buffered:i(this,e,o).buffered,seekable:i(this,e,o).seekable}},Ct=function(t){i(this,h).$state.canPlay&&i(this,h).notify("play",void 0,t)},At=function(t){i(this,e,o).readyState===1&&!i(this,b)||(c(this,b,!1),i(this,S).stop(),i(this,h).notify("pause",void 0,t))},Et=function(t){i(this,h).delegate.ready(a(this,e,W).call(this),t)},xt=function(t){i(this,h).$state.started()||i(this,h).notify("can-play-through",a(this,e,W).call(this),t)},Lt=function(t){i(this,e,o).paused||(c(this,b,!1),i(this,h).notify("playing",void 0,t),i(this,S).start())},Gt=function(t){i(this,h).notify("stalled",void 0,t),i(this,e,o).readyState<3&&(c(this,b,!0),i(this,h).notify("waiting",void 0,t))},$t=function(t){i(this,e,o).readyState<3&&(c(this,b,!0),i(this,h).notify("waiting",void 0,t))},Nt=function(t){i(this,S).stop(),a(this,e,T).call(this,i(this,e,o).duration,t),i(this,h).notify("end",void 0,t),i(this,h).$state.loop()&&ai(i(this,e,o).controls)&&(i(this,e,o).controls=!1)},Mt=function(){const t=i(this,h).$state.paused(),s=i(this,H).visibility==="hidden";(t||s)&&rt(i(this,e,o),"timeupdate",a(this,e,Rt).bind(this))},Rt=function(t){a(this,e,T).call(this,i(this,e,o).currentTime,t)},Ot=function(t){i(this,h).$state.ended()&&a(this,e,T).call(this,i(this,e,o).duration,t),i(this,h).notify("duration-change",i(this,e,o).duration,t)},Dt=function(t){const s={volume:i(this,e,o).volume,muted:i(this,e,o).muted};i(this,h).notify("volume-change",s,t)},Ht=function(t){c(this,N,i(this,e,o).currentTime),a(this,e,T).call(this,i(this,e,o).currentTime,t),i(this,h).notify("seeked",i(this,e,o).currentTime,t),Math.trunc(i(this,e,o).currentTime)===Math.trunc(i(this,e,o).duration)&&dt(i(this,e,o).duration)>dt(i(this,e,o).currentTime)&&(a(this,e,T).call(this,i(this,e,o).duration,t),i(this,e,o).ended||i(this,h).player.dispatch(new ni("media-play-request",{trigger:t})))},It=function(t){i(this,h).notify("seeking",i(this,e,o).currentTime,t)},Ft=function(t){const s={buffered:i(this,e,o).buffered,seekable:i(this,e,o).seekable};i(this,h).notify("progress",s,t)},Ut=function(t){i(this,h).notify("suspend",void 0,t)},Vt=function(t){i(this,h).notify("rate-change",i(this,e,o).playbackRate,t)},qt=function(t){const s=i(this,e,o).error;if(!s)return;const r={message:s.message,code:s.code,mediaError:s};i(this,h).notify("error",r,t)};var I,g,l,C,Bt,jt,Wt,et,_t;class yi{constructor(t,s){d(this,l);d(this,I);d(this,g);c(this,I,t),c(this,g,s),i(this,l,C).onaddtrack=a(this,l,Bt).bind(this),i(this,l,C).onremovetrack=a(this,l,jt).bind(this),i(this,l,C).onchange=a(this,l,Wt).bind(this),rt(i(this,g).audioTracks,"change",a(this,l,_t).bind(this))}}I=new WeakMap,g=new WeakMap,l=new WeakSet,C=function(){return i(this,I).media.audioTracks},Bt=function(t){const s=t.track;if(s.label==="")return;const r=s.id.toString()||`native-audio-${i(this,g).audioTracks.length}`,f={id:r,label:s.label,language:s.language,kind:s.kind,selected:!1};i(this,g).audioTracks[Y.add](f,t),s.enabled&&(f.selected=!0)},jt=function(t){const s=i(this,g).audioTracks.getById(t.track.id);s&&i(this,g).audioTracks[Y.remove](s,t)},Wt=function(t){let s=a(this,l,et).call(this);if(!s)return;const r=i(this,g).audioTracks.getById(s.id);r&&i(this,g).audioTracks[Y.select](r,!0,t)},et=function(){return Array.from(i(this,l,C)).find(t=>t.enabled)},_t=function(t){const{current:s}=t.detail;if(!s)return;const r=i(this,l,C).getTrackById(s.id);if(r){const f=a(this,l,et).call(this);f&&(f.enabled=!1),r.enabled=!0}};var F,st;class ki{constructor(t,s){d(this,F);M(this,"scope",Yt());M(this,"currentSrc",null);M(this,"audioGain");this.media=t,this.ctx=s,this.audioGain=new ui(t,r=>{this.ctx.notify("audio-gain-change",r)})}setup(){new mi(this,this.ctx),"audioTracks"in this.media&&new yi(this,this.ctx),ut(()=>{this.audioGain.destroy(),this.media.srcObject=null,this.media.removeAttribute("src");for(const t of this.media.querySelectorAll("source"))t.remove();this.media.load()})}get type(){return""}setPlaybackRate(t){this.media.playbackRate=t}async play(){return this.media.play()}async pause(){return this.media.pause()}setMuted(t){this.media.muted=t}setVolume(t){this.media.volume=t}setCurrentTime(t){this.media.currentTime=t}setPlaysInline(t){B(this.media,"playsinline",t)}async loadSource({src:t,type:s},r){this.media.preload=r||"",Zt(t)?(this.removeSource(),this.media.srcObject=t):(this.media.srcObject=null,ti(t)?s!=="?"?this.appendSource({src:t,type:s}):(this.removeSource(),this.media.src=a(this,F,st).call(this,t)):(this.removeSource(),this.media.src=window.URL.createObjectURL(t))),this.media.load(),this.currentSrc={src:t,type:s}}appendSource(t,s){const r=this.media.querySelector("source[data-vds]"),f=r??document.createElement("source");B(f,"src",a(this,F,st).call(this,t.src)),B(f,"type",t.type!=="?"?t.type:s),B(f,"data-vds",""),r||this.media.append(f)}removeSource(){var t;(t=this.media.querySelector("source[data-vds]"))==null||t.remove()}}F=new WeakSet,st=function(t){const{clipStartTime:s,clipEndTime:r}=this.ctx.$state,f=s(),q=r();return f>0&&q>0?`${t}#t=${f},${q}`:f>0?`${t}#t=${f}`:q>0?`${t}#t=0,${q}`:t};var y,U,V,w,v,Kt,zt,Jt;class gi{constructor(t,s){d(this,v);d(this,y);d(this,U);d(this,V);d(this,w,Z(!1));c(this,y,t),c(this,U,s),a(this,v,Kt).call(this)}get supported(){return i(this,w).call(this)}async prompt(){if(!this.supported)throw Error("Not supported on this platform.");return this.type==="airplay"&&i(this,y).webkitShowPlaybackTargetPicker?i(this,y).webkitShowPlaybackTargetPicker():i(this,y).remote.prompt()}}y=new WeakMap,U=new WeakMap,V=new WeakMap,w=new WeakMap,v=new WeakSet,Kt=function(){var t;!((t=i(this,y))!=null&&t.remote)||!this.canPrompt||(i(this,y).remote.watchAvailability(s=>{i(this,w).set(s)}).catch(()=>{i(this,w).set(!1)}),lt(a(this,v,zt).bind(this)))},zt=function(){if(!i(this,w).call(this))return;const t=["connecting","connect","disconnect"],s=a(this,v,Jt).bind(this);s(),rt(i(this,y),"playing",s);const r=new nt(i(this,y).remote);for(const f of t)r.add(f,s)},Jt=function(t){const s=i(this,y).remote.state;if(s===i(this,V))return;const r={type:this.type,state:s};i(this,U).notify("remote-playback-change",r,t),c(this,V,s)};class Si extends gi{constructor(){super(...arguments);M(this,"type","airplay")}get canPrompt(){return"WebKitPlaybackTargetAvailabilityEvent"in window}}export{ki as H,Si as a};
