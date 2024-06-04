import{bh as p,bG as h,bQ as l,m as E,bo as g,p as c,T as f,n as k,bR as C,bp as y}from"./app-DyklgEOl.js";import{R as A}from"./vidstack-Ccp8mxka-CdW6_zkV.js";import{g as v,a as L,b,h as m,l as S,c as j}from"./vidstack-54Jpr2Lq-QV5Ue3K-.js";class w{constructor(t){this.$a=new chrome.cast.media.MediaInfo(t.src,t.type)}build(){return this.$a}lj(t){return t.includes("live")?this.$a.streamType=chrome.cast.media.StreamType.LIVE:this.$a.streamType=chrome.cast.media.StreamType.BUFFERED,this}mj(t){return this.$a.tracks=t.map(this.nj),this}oj(t,e){return this.$a.metadata=new chrome.cast.media.GenericMediaMetadata,this.$a.metadata.title=t,this.$a.metadata.images=[{url:e}],this}nj(t,e){const s=new chrome.cast.media.Track(e,chrome.cast.media.TrackType.TEXT);return s.name=t.label,s.trackContentId=t.src,s.trackContentType="text/vtt",s.language=t.language,s.subtype=t.kind.toUpperCase(),s}}const d=chrome.cast.media.TrackType.TEXT,T=chrome.cast.media.TrackType.AUDIO;class P{constructor(t,e,s){this.od=t,this.b=e,this.Ae=s}he(){const t=this.ug.bind(this);f(this.b.audioTracks,"change",t),f(this.b.textTracks,"mode-change",t),k(this.pj.bind(this))}nd(){return this.b.$state.textTracks().filter(t=>t.src&&t.type==="vtt")}vg(){return this.b.$state.audioTracks()}xc(t){var s;const e=((s=this.od.mediaInfo)==null?void 0:s.tracks)??[];return t?e.filter(i=>i.type===t):e}qj(){const t=[],e=this.vg().find(i=>i.selected),s=this.nd().filter(i=>i.mode==="showing");if(e){const i=this.xc(T),r=this.ze(i,e);r&&t.push(r.trackId)}if(s!=null&&s.length){const i=this.xc(d);if(i.length)for(const r of s){const a=this.ze(i,r);a&&t.push(a.trackId)}}return t}pj(){const t=this.nd();if(!this.od.isMediaLoaded)return;const e=this.xc(d);for(const s of t)if(!this.ze(e,s)){C(()=>{var r;return(r=this.Ae)==null?void 0:r.call(this)});break}}rj(t){if(!this.od.isMediaLoaded)return;const e=this.vg(),s=this.nd(),i=this.xc(T),r=this.xc(d);for(const a of i){if(this.wg(e,a))continue;const n={id:a.trackId.toString(),label:a.name,language:a.language,kind:a.subtype??"main",selected:!1};this.b.audioTracks[y.da](n,t)}for(const a of r){if(this.wg(s,a))continue;const n={id:a.trackId.toString(),src:a.trackContentId,label:a.name,language:a.language,kind:a.subtype.toLowerCase()};this.b.textTracks.add(n,t)}}ug(t){if(!this.od.isMediaLoaded)return;const e=this.qj(),s=new chrome.cast.media.EditTracksInfoRequest(e);this.sj(s).catch(i=>{})}sj(t){const e=b();return new Promise((s,i)=>e==null?void 0:e.editTracksInfo(t,s,i))}wg(t,e){return t.find(s=>this.xg(s,e))}ze(t,e){return t.find(s=>this.xg(e,s))}xg(t,e){return e.name===t.label&&e.language===t.language&&e.subtype.toLowerCase()===t.kind.toLowerCase()}}class M{constructor(t,e){this.f=t,this.b=e,this.$$PROVIDER_TYPE="GOOGLE_CAST",this.scope=p(),this.K=null,this.za="disconnected",this.ua=0,this.ga=0,this.ba=new h(0,0),this.Aa=new h(0,0),this.fa=new A(this.kc.bind(this)),this.Pa=null,this.Be=!1,this.va=new P(this.f,this.b,this.Ae.bind(this))}get c(){return this.b.delegate.c}get type(){return"google-cast"}get currentSrc(){return this.K}get player(){return this.f}get cast(){return v()}get session(){return L()}get media(){return b()}get hasActiveSession(){return m(this.K)}setup(){this.tj(),this.uj(),this.va.he(),this.c("provider-setup",this)}tj(){S(cast.framework.CastContextEventType.CAST_STATE_CHANGED,this.zg.bind(this))}uj(){const t=cast.framework.RemotePlayerEventType,e={[t.IS_CONNECTED_CHANGED]:this.zg,[t.IS_MEDIA_LOADED_CHANGED]:this.Ag,[t.CAN_CONTROL_VOLUME_CHANGED]:this.Bg,[t.CAN_SEEK_CHANGED]:this.Cg,[t.DURATION_CHANGED]:this.de,[t.IS_MUTED_CHANGED]:this.Na,[t.VOLUME_LEVEL_CHANGED]:this.Na,[t.IS_PAUSED_CHANGED]:this.vj,[t.LIVE_SEEKABLE_RANGE_CHANGED]:this.nb,[t.PLAYER_STATE_CHANGED]:this.wj};this.yg=e;const s=this.xj.bind(this);for(const i of l(e))this.f.controller.addEventListener(i,s);E(()=>{for(const i of l(e))this.f.controller.removeEventListener(i,s)})}async play(){var t;if(!(!this.f.isPaused&&!this.Be)){if(this.Be){await this.Dg(!1,0);return}(t=this.f.controller)==null||t.playOrPause()}}async pause(){var t;this.f.isPaused||(t=this.f.controller)==null||t.playOrPause()}getMediaStatus(t){return new Promise((e,s)=>{var i;(i=this.media)==null||i.getStatus(t,e,s)})}setMuted(t){var s;(t&&!this.f.isMuted||!t&&this.f.isMuted)&&((s=this.f.controller)==null||s.muteOrUnmute())}setCurrentTime(t){var e;this.f.currentTime=t,this.c("seeking",t),(e=this.f.controller)==null||e.seek()}setVolume(t){var e;this.f.volumeLevel=t,(e=this.f.controller)==null||e.setVolumeLevel()}async loadSource(t){var i;if(((i=this.Pa)==null?void 0:i.src)!==t&&(this.Pa=null),m(t)){this.yj(),this.K=t;return}this.c("load-start");const e=this.zj(t),s=await this.session.loadMedia(e);if(s){this.K=null,this.c("error",Error(j(s)));return}this.K=t}destroy(){this.z(),this.Eg()}z(){this.Pa||(this.ga=0,this.ba=new h(0,0),this.Aa=new h(0,0)),this.fa.$(),this.ua=0,this.Pa=null}yj(){const t=new g("resume-session",{detail:this.session});this.Ag(t);const{muted:e,volume:s,savedState:i}=this.b.$state,r=i();this.setCurrentTime(Math.max(this.f.currentTime,(r==null?void 0:r.currentTime)??0)),this.setMuted(e()),this.setVolume(s()),(r==null?void 0:r.paused)===!1&&this.play()}Eg(){this.cast.endCurrentSession(!0);const{remotePlaybackLoader:t}=this.b.$state;t.set(null)}Aj(){const{savedState:t}=this.b.$state;t.set({paused:this.f.isPaused,currentTime:this.f.currentTime}),this.Eg()}kc(){this.Bj()}xj(t){this.yg[t.type].call(this,t)}zg(t){const e=this.cast.getCastState(),s=e===cast.framework.CastState.CONNECTED?"connected":e===cast.framework.CastState.CONNECTING?"connecting":"disconnected";if(this.za===s)return;const i={type:"google-cast",state:s},r=this.ab(t);this.za=s,this.c("remote-playback-change",i,r),s==="disconnected"&&this.Aj()}Ag(t){if(!!!this.f.isMediaLoaded)return;const s=c(this.b.$state.source);Promise.resolve().then(()=>{if(s!==c(this.b.$state.source)||!this.f.isMediaLoaded)return;this.z();const i=this.f.duration;this.Aa=new h(0,i);const r={provider:this,duration:i,buffered:this.ba,seekable:this.Fg()},a=this.ab(t);this.c("loaded-metadata",void 0,a),this.c("loaded-data",void 0,a),this.c("can-play",r,a),this.Bg(),this.Cg(t);const{volume:o,muted:n}=this.b.$state;this.setVolume(o()),this.setMuted(n()),this.fa.Xa(),this.va.rj(a),this.va.ug(a)})}Bg(){this.b.$state.canSetVolume.set(this.f.canControlVolume)}Cg(t){const e=this.ab(t);this.c("stream-type-change",this.Cj(),e)}Cj(){var e;return((e=this.f.mediaInfo)==null?void 0:e.streamType)===chrome.cast.media.StreamType.LIVE?this.f.canSeek?"live:dvr":"live":"on-demand"}Bj(){if(this.Pa)return;const t=this.f.currentTime;if(t===this.ua)return;const e=this.ga,s=this.uc(t),i={currentTime:t,played:s};this.c("time-update",i),t>e&&this.nb(),this.b.$state.seeking()&&this.c("seeked",t),this.ua=t}uc(t){return this.ga>=t?this.ba:this.ba=new h(0,this.ga=t)}de(t){if(!this.f.isMediaLoaded||this.Pa)return;const e=this.f.duration,s=this.ab(t);this.Aa=new h(0,e),this.c("duration-change",e,s)}Na(t){if(!this.f.isMediaLoaded)return;const e={muted:this.f.isMuted,volume:this.f.volumeLevel},s=this.ab(t);this.c("volume-change",e,s)}vj(t){const e=this.ab(t);this.f.isPaused?this.c("pause",void 0,e):this.c("play",void 0,e)}nb(t){const e={seekable:this.Fg(),buffered:this.ba},s=t?this.ab(t):void 0;this.c("progress",e,s)}wj(t){const e=this.f.playerState,s=chrome.cast.media.PlayerState;if(this.Be=e===s.IDLE,e===s.PAUSED)return;const i=this.ab(t);switch(e){case s.PLAYING:this.c("playing",void 0,i);break;case s.BUFFERING:this.c("waiting",void 0,i);break;case s.IDLE:this.fa.$(),this.c("pause"),this.c("end");break}}Fg(){return this.f.liveSeekableRange?new h(this.f.liveSeekableRange.start,this.f.liveSeekableRange.end):this.Aa}ab(t){return t instanceof Event?t:new g(t.type,{detail:t})}Dj(t){const{streamType:e,title:s,poster:i}=this.b.$state;return new w(t).oj(s(),i()).lj(e()).mj(this.va.nd()).build()}zj(t){var r,a;const e=this.Dj(t),s=new chrome.cast.media.LoadRequest(e),i=this.b.$state.savedState();return s.autoplay=(((r=this.Pa)==null?void 0:r.paused)??(i==null?void 0:i.paused))===!1,s.currentTime=((a=this.Pa)==null?void 0:a.time)??(i==null?void 0:i.currentTime)??0,s}async Dg(t,e){const s=c(this.b.$state.source);this.Pa={src:s,paused:t,time:e},await this.loadSource(s)}Ae(){this.Dg(this.f.isPaused,this.f.currentTime).catch(t=>{})}}export{M as GoogleCastProvider};
