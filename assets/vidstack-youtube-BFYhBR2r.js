import{az as m,x as v,aM as y,m as k,q as g,at as w,aq as r,bw as n,z as I}from"./app-CyJp_fm7.js";import{E as R,t as p}from"./vidstack-Bil9YQCV-DJgjIAOd.js";import{resolveYouTubeVideoId as f}from"./vidstack-Zc3I7oOd-CA6XwpqT.js";const c={Om:-1,pg:0,qg:1,gj:2,hj:3,ij:5};class P extends R{constructor(t,s){super(t),this.b=s,this.$$PROVIDER_TYPE="YOUTUBE",this.scope=m(),this.ha=v(""),this.za=-1,this.md=-1,this.vc=!1,this.K=null,this.I=null,this.R=null,this.language="en",this.color="red",this.cookies=!1}get c(){return this.b.delegate.c}get currentSrc(){return this.K}get type(){return"youtube"}get videoId(){return this.ha()}preconnect(){y(this.Nb())}setup(){super.setup(),k(this.we.bind(this)),this.c("provider-setup",this)}async play(){const{paused:t}=this.b.$state;return this.I||(this.I=p(()=>{if(this.I=null,t())return"Timed out."}),this.t("playVideo")),this.I.promise}Hn(t){var s;(s=this.I)==null||s.reject(t),this.I=null}async pause(){const{paused:t}=this.b.$state;return this.R||(this.R=p(()=>{this.R=null,t()}),this.t("pauseVideo")),this.R.promise}In(t){var s;(s=this.R)==null||s.reject(t),this.R=null}setMuted(t){t?this.t("mute"):this.t("unMute")}setCurrentTime(t){this.vc=this.b.$state.paused(),this.t("seekTo",t),this.c("seeking",t)}setVolume(t){this.t("setVolume",t*100)}setPlaybackRate(t){this.t("setPlaybackRate",t)}async loadSource(t){if(!g(t.src)){this.K=null,this.ha.set("");return}const s=f(t.src);this.ha.set(s??""),this.K=t}Nb(){return this.cookies?"https://www.youtube.com":"https://www.youtube-nocookie.com"}we(){this.z();const t=this.ha();if(!t){this.sc.set("");return}this.sc.set(`${this.Nb()}/embed/${t}`),this.c("load-start")}mg(){const{keyDisabled:t}=this.b.$props,{muted:s,playsInline:i,nativeControls:h}=this.b.$state,e=h();return{autoplay:0,cc_lang_pref:this.language,cc_load_policy:e?1:void 0,color:this.color,controls:e?1:0,disablekb:!e||t()?1:0,enablejsapi:1,fs:1,hl:this.language,iv_load_policy:e?1:3,mute:s()?1:0,playsinline:i()?1:0}}t(t,s){this.se({event:"command",func:t,args:s?[s]:void 0})}gd(){window.setTimeout(()=>this.se({event:"listening"}),100)}kd(t){this.c("loaded-metadata"),this.c("loaded-data"),this.b.delegate.Ga(void 0,t)}ib(t){var s;(s=this.R)==null||s.resolve(),this.R=null,this.c("pause",void 0,t)}mc(t,s){const{duration:i,realCurrentTime:h}=this.b.$state,e=this.za===c.pg,a=e?i():t;this.c("time-change",a,s),!e&&Math.abs(a-h())>1&&this.c("seeking",a,s)}nb(t,s,i){const h={buffered:new n(0,t),seekable:s};this.c("progress",h,i);const{seeking:e,realCurrentTime:a}=this.b.$state;e()&&t>a()&&this.ob(i)}ob(t){const{paused:s,realCurrentTime:i}=this.b.$state;window.clearTimeout(this.md),this.md=window.setTimeout(()=>{this.c("seeked",i(),t),this.md=-1},s()?100:0),this.vc=!1}lc(t){const{seeking:s}=this.b.$state;s()&&this.ob(t),this.c("pause",void 0,t),this.c("end",void 0,t)}ie(t,s){var d;const{started:i,paused:h,seeking:e}=this.b.$state,a=t===c.qg,o=t===c.hj,l=(h()||this.I)&&(o||a);if(o&&this.c("waiting",void 0,s),e()&&a&&this.ob(s),!i()&&l&&this.vc){this.Hn("invalid internal play operation"),a&&(this.pause(),this.vc=!1);return}switch(l&&((d=this.I)==null||d.resolve(),this.I=null,this.c("play",void 0,s)),t){case c.Om:this.Hn("provider rejected"),this.In("provider rejected"),this.c("pause",void 0,s);break;case c.ij:this.kd(s);break;case c.qg:this.c("playing",void 0,s);break;case c.gj:this.ib(s);break;case c.pg:this.lc(s);break}this.za=t}te({info:t},s){var a;if(!t)return;const{title:i,intrinsicDuration:h,playbackRate:e}=this.b.$state;if(w(t.videoData)&&t.videoData.title!==i()&&this.c("title-change",t.videoData.title,s),r(t.duration)&&t.duration!==h()){if(r(t.videoLoadedFraction)){const o=((a=t.progressState)==null?void 0:a.loaded)??t.videoLoadedFraction*t.duration,l=new n(0,t.duration);this.nb(o,l,s)}this.c("duration-change",t.duration,s)}if(r(t.playbackRate)&&t.playbackRate!==e()&&this.c("rate-change",t.playbackRate,s),t.progressState){const{current:o,seekableStart:l,seekableEnd:d,loaded:b,duration:u}=t.progressState;this.mc(o,s),this.nb(b,new n(l,d),s),u!==h()&&this.c("duration-change",u,s)}if(r(t.volume)&&I(t.muted)){const o={muted:t.muted,volume:t.volume/100};this.c("volume-change",o,s)}r(t.playerState)&&t.playerState!==this.za&&this.ie(t.playerState,s)}z(){this.za=-1,this.md=-1,this.I=null,this.R=null,this.vc=!1}}export{P as YouTubeProvider};
