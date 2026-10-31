const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BEi14iNw2-B-6GFLV3.js","assets/vidstack-D9mvYVIz-Dmv6-Efn.js"])))=>i.map(i=>d[i]);
import{At as e,Ct as t,Dt as n,Ft as r,G as i,H as a,It as o,K as s,Mt as c,Ot as l,Pt as u,St as d,Tt as f,W as p,X as m,Y as h,at as ee,ct as g,it as te,jt as _,n as ne,nt as re,o as v,pt as y,rt as ie,tt as b,vt as ae,wt as oe,xt as se,yt as x}from"./vidstack-D9mvYVIz-Dmv6-Efn.js";import{D as ce,F as le,I as ue,L as de,P as fe,_ as pe,g as S,h as C,x as me}from"./vidstack-player-DqRWJvsv.js";import{a as he,i as ge,n as w,o as T,r as _e,t as ve}from"./vidstack-DM8v4Khu-B-ZM-eGf.js";import{n as ye,t as be}from"./vidstack-mvRkf9tF-DlP_ziVy.js";import{n as xe}from"./vidstack-B1Z6f96t-BTC2paMa.js";import{t as Se}from"./preload-helper-BLdHbfdN.js";var{I:Ce}=he,we=e=>e.strings===void 0,Te={},Ee=(e,t=Te)=>e._$AH=t,E={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},D=e=>(...t)=>({_$litDirective$:e,values:t}),De=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},O=(e,t)=>{var n,r;let i=e._$AN;if(i===void 0)return!1;for(let e of i)(r=(n=e)._$AO)==null||r.call(n,t,!1),O(e,t);return!0},k=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Oe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),je(t)}};function ke(e){this._$AN===void 0?this._$AM=e:(k(this),this._$AM=e,Oe(this))}function Ae(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)O(r[e],!1),k(r[e]);else r!=null&&(O(r,!1),k(r))}else O(this,e)}}var je=e=>{var t,n;e.type==E.CHILD&&((t=e)._$AP??(t._$AP=Ae),(n=e)._$AQ??(n._$AQ=ke))},Me=class extends De{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Oe(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(O(this,e),k(this))}setValue(e){if(we(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},A=e=>e??w,Ne=class extends De{constructor(e){if(super(e),this.et=w,e.type!==E.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===w||e==null)return this.ft=void 0,this.et=e;if(e===ge)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Ne.directiveName=`unsafeHTML`,Ne.resultType=1;var Pe=class extends Ne{};Pe.directiveName=`unsafeSVG`,Pe.resultType=2;var Fe=D(Pe),Ie=class extends Me{#e=null;#t=!1;#n=null;constructor(e){super(e),this.#t=e.type===E.ATTRIBUTE||e.type===E.BOOLEAN_ATTRIBUTE}render(e){return e!==this.#e&&(this.disconnected(),this.#e=e,this.isConnected&&this.#r()),this.#e?this.#i(t(this.#e)):w}reconnected(){this.#r()}disconnected(){this.#n?.(),this.#n=null}#r(){this.#e&&(this.#n=m(this.#o.bind(this)))}#i(e){return this.#t?A(e):e}#a(e){this.setValue(this.#i(e))}#o(){this.#a(this.#e?.())}};function j(e){return D(Ie)(i(e))}var Le=class{#e;#t;elements=new Set;constructor(e,t){this.#e=e,this.#t=t}connect(){this.#r();let e=new MutationObserver(this.#n);for(let t of this.#e)e.observe(t,{childList:!0,subtree:!0});d(()=>e.disconnect()),d(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(e,t){ie(e)?(t.textContent=``,t.append(e)):(_e(null,t),_e(e,t)),t.style.display||(t.style.display=`contents`);let n=t.firstElementChild;if(!n)return;let r=t.getAttribute(`data-class`);r&&n.classList.add(...r.split(` `))}#n=a(this.#r.bind(this));#r(e){if(e&&!e.some(e=>e.addedNodes.length))return;let t=!1,n=this.#e.flatMap(e=>[...e.querySelectorAll(`slot`)]);for(let e of n)e.hasAttribute(`name`)&&!this.elements.has(e)&&(this.elements.add(e),t=!0);t&&this.#t(this.elements)}},Re=0,M=`data-slot-id`,ze=class{#e;slots;constructor(e){this.#e=e,this.slots=new Le(e,this.#n.bind(this))}connect(){this.slots.connect(),this.#n();let e=new MutationObserver(this.#t);for(let t of this.#e)e.observe(t,{childList:!0});d(()=>e.disconnect())}#t=a(this.#n.bind(this));#n(){for(let e of this.#e)for(let t of e.children){if(t.nodeType!==1)continue;let e=t.getAttribute(`slot`);if(!e)continue;t.style.display=`none`;let n=t.getAttribute(M);n||t.setAttribute(M,n=++Re+``);for(let r of this.slots.elements){if(r.getAttribute(`name`)!==e||r.getAttribute(M)===n)continue;let i=document.importNode(t,!0);e.includes(`-icon`)&&i.classList.add(`vds-icon`),i.style.display=``,i.removeAttribute(`slot`),this.slots.assign(i,r),r.setAttribute(M,n)}}}};function Be({name:e,class:t,state:n,paths:r,viewBox:i=`0 0 32 32`}){return T`<svg
    class="${`vds-icon`+(t?` ${t}`:``)}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${A(e??n)}
  >
    ${y(r)?Fe(r):j(r)}
  </svg>`}var Ve=class{#e={};#t=!1;slots;constructor(e){this.slots=new Le(e,this.#r.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(e=>{this.#e=e,this.#t=!0,this.#r()})}*#n(){for(let e of Object.keys(this.#e)){let t=`${e}-icon`;for(let n of this.slots.elements)n.name===t&&(yield{icon:this.#e[e],slot:n})}}#r(){if(this.#t)for(let{icon:e,slot:t}of this.#n())this.slots.assign(e,t)}},He=class extends Ve{connect(){super.connect();let{player:e}=C();if(!e.el)return;let t,n=new IntersectionObserver(e=>{e[0]?.isIntersecting&&(t?.(),t=void 0,this.load())});n.observe(e.el),t=d(()=>n.disconnect())}},N=new WeakMap,P=D(class extends Me{render(e){return w}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=e.options?.host,this.ot(this.lt=e.element)),w}ot(e){if(typeof this.G==`function`){let t=this.dt??globalThis,n=N.get(t);n===void 0&&(n=new WeakMap,N.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){return typeof this.G==`function`?N.get(this.dt??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),Ue=s();function F(){return o(Ue)}var We={colorScheme:`system`,download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:`bottom`,noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1},Ge=class extends ne{static props=We;#e;#t=i(()=>{let e=this.$props.when();return this.#r(e)});#n=i(()=>{let e=this.$props.smallWhen();return this.#r(e)});get isMatch(){return this.#t()}get isSmallLayout(){return this.#n()}onSetup(){this.#e=C(),this.setAttributes({"data-match":this.#t,"data-sm":()=>this.#n()?``:null,"data-lg":()=>this.#n()?null:``,"data-size":()=>this.#n()?`sm`:`lg`,"data-no-scrub-gesture":this.$props.noScrubGesture}),f(Ue,{...this.$props,when:this.#t,smallWhen:this.#n,userPrefersAnnouncements:e(!0),userPrefersKeyboardAnimations:e(!0),menuPortal:e(null)})}onAttach(e){de(e,this.$props.colorScheme)}#r(e){return e!==`never`&&(re(e)?e:i(()=>e(this.#e.player.state))())}},Ke=Ge.prototype;oe(Ke,`isMatch`),oe(Ke,`isSmallLayout`);function qe(e,t){m(()=>{let{player:n}=C(),r=n.el;return r&&l(r,`data-layout`,t()&&e),()=>r?.removeAttribute(`data-layout`)})}function I(e,t){return e()?.[t]??t}function L(){return j(()=>{let{translations:e,userPrefersAnnouncements:t}=F();return t()?T`<media-announcer .translations=${j(e)}></media-announcer>`:null})}function R(e,t=``){return T`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:``}`}
  ></slot>`}function z(e){return e.map(e=>R(e))}function B(e,t){return j(()=>I(e,t))}function Je({tooltip:e}){let{translations:t}=F(),{remotePlaybackState:n}=S(),i=j(()=>`${I(t,`AirPlay`)} ${r(n())}`),a=B(t,`AirPlay`);return T`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${i}>
          ${R(`airplay`)}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ye({tooltip:e}){let{translations:t}=F(),{remotePlaybackState:n}=S(),i=j(()=>`${I(t,`Google Cast`)} ${r(n())}`),a=B(t,`Google Cast`);return T`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${i}>
          ${R(`google-cast`)}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function V({tooltip:e}){let{translations:t}=F(),n=B(t,`Play`),r=B(t,`Pause`);return T`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${B(t,`Play`)}
        >
          ${z([`play`,`pause`,`replay`])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${n}</span>
        <span class="vds-pause-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Xe({tooltip:e,ref:t=se}){let{translations:n}=F(),r=B(n,`Mute`),i=B(n,`Unmute`);return T`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${B(n,`Mute`)}
          ${P(t)}
        >
          ${z([`mute`,`volume-low`,`volume-high`])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function H({tooltip:e}){let{translations:t}=F(),n=B(t,`Closed-Captions On`),r=B(t,`Closed-Captions Off`);return T`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${B(t,`Captions`)}
        >
          ${z([`cc-on`,`cc-off`])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${r}</span>
        <span class="vds-cc-off-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ze(){let{translations:e}=F(),t=B(e,`Enter PiP`),n=B(e,`Exit PiP`);return T`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${B(e,`PiP`)}
        >
          ${z([`pip-enter`,`pip-exit`])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Qe({tooltip:e}){let{translations:t}=F(),n=B(t,`Enter Fullscreen`),r=B(t,`Exit Fullscreen`);return T`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${B(t,`Fullscreen`)}
        >
          ${z([`fs-enter`,`fs-exit`])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${n}</span>
        <span class="vds-fs-exit-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function $e({backward:e,tooltip:t}){let{translations:n,seekStep:r}=F(),i=e?`Seek Backward`:`Seek Forward`,a=B(n,i);return T`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${j(()=>(e?-1:1)*r())}
          aria-label=${a}
        >
          ${R(e?`seek-backward`:`seek-forward`)}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${B(n,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function et(){let{translations:e}=F(),{live:t}=S(),n=B(e,`Skip To Live`),r=B(e,`LIVE`);return t()?T`
        <media-live-button class="vds-live-button" aria-label=${n}>
          <span class="vds-live-button-text">${r}</span>
        </media-live-button>
      `:null}function U(){return j(()=>{let{download:e,translations:t}=F(),n=e();if(g(n))return null;let{source:r,title:i}=S(),a=r(),o=ye({title:i(),src:a,download:n});return y(o?.url)?T`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${B(t,`Download`)}
                href=${be(o.url,{download:o.name})}
                download=${o.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${B(t,`Download`)}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function W(){let{translations:e}=F();return T`
    <media-captions
      class="vds-captions"
      .exampleText=${B(e,`Captions look like this`)}
    ></media-captions>
  `}function G(){return T`<div class="vds-controls-spacer"></div>`}function tt(e,t){return T`
    <media-menu-portal .container=${j(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function nt(e,t,n,r){let i=y(t)?document.querySelector(t):t;i||=e?.closest(`dialog`),i||=document.body;let a=document.createElement(`div`);a.style.display=`contents`,a.classList.add(n),i.append(a),m(()=>{if(!a)return;let{viewType:e}=S(),t=r();l(a,`data-view-type`,e()),l(a,`data-sm`,t),l(a,`data-lg`,!t),l(a,`data-size`,t?`sm`:`lg`)});let{colorScheme:o}=F();return de(a,o),a}function rt({placement:t,tooltip:n,portal:r}){let{textTracks:a}=C(),{viewType:o,seekableStart:s,seekableEnd:c}=S(),{translations:l,thumbnails:d,menuPortal:f,noModal:p,menuGroup:m,smallWhen:h}=F();if(i(()=>{let t=s(),n=c(),r=e(null);return xe(a,`chapters`,r.set),!r()?.cues.filter(e=>e.startTime<=n&&e.endTime>=t)?.length})())return null;let ee=i(()=>p()?u(t):h()?null:u(t)),g=i(()=>!h()&&m()===`bottom`&&o()===`video`?26:0),_=e(!1);function ne(){_.set(!0)}function re(){_.set(!1)}let v=T`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${j(ee)}
      offset=${j(g)}
    >
      ${j(()=>_()?T`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${j(d)}
          >
            <template>
              <media-radio class="vds-chapter-radio vds-radio">
                <media-thumbnail class="vds-thumbnail"></media-thumbnail>
                <div class="vds-chapter-radio-content">
                  <span class="vds-chapter-radio-label" data-part="label"></span>
                  <span class="vds-chapter-radio-start-time" data-part="start-time"></span>
                  <span class="vds-chapter-radio-duration" data-part="duration"></span>
                </div>
              </media-radio>
            </template>
          </media-chapters-radio-group>
        `:null)}
    </media-menu-items>
  `;return T`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ne} @close=${re}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${B(l,`Chapters`)}
          >
            ${R(`menu-chapters`)}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${te(n)?j(n):n}
        >
          ${B(l,`Chapters`)}
        </media-tooltip-content>
      </media-tooltip>
      ${r?tt(f,v):v}
    </media-menu>
  `}function K(e){let{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g,` `)}var it={type:`color`},at={type:`radio`,values:{"Monospaced Serif":`mono-serif`,"Proportional Serif":`pro-serif`,"Monospaced Sans-Serif":`mono-sans`,"Proportional Sans-Serif":`pro-sans`,Casual:`casual`,Cursive:`cursive`,"Small Capitals":`capitals`}},ot={type:`slider`,min:0,max:400,step:25,upIcon:null,downIcon:null},st={type:`slider`,min:0,max:100,step:5,upIcon:null,downIcon:null},ct={type:`radio`,values:[`None`,`Drop Shadow`,`Raised`,`Depressed`,`Outline`]},q={fontFamily:`pro-sans`,fontSize:`100%`,textColor:`#ffffff`,textOpacity:`100%`,textShadow:`none`,textBg:`#000000`,textBgOpacity:`100%`,displayBg:`#000000`,displayBgOpacity:`0%`},J=Object.keys(q).reduce((t,n)=>({...t,[n]:e(q[n])}),{});for(let e of Object.keys(J)){let t=localStorage.getItem(`vds-player:${p(e)}`);y(t)&&J[e].set(t)}function lt(){for(let e of Object.keys(J)){let t=q[e];J[e].set(t)}}var ut=!1,dt=new Set;function ft(){let{player:e}=C();dt.add(e),pt(e),d(()=>dt.delete(e)),ut||=(n(()=>{for(let e of ae(J)){let t=J[e],n=q[e],r=`vds-player:${p(e)}`;m(()=>{let i=t(),a=i===n;for(let t of dt)mt(t,e,i);a?localStorage.removeItem(r):localStorage.setItem(r,i)})}},null),!0)}function pt(e){for(let t of ae(J))mt(e,t,J[t]())}function mt(e,t,n){let r=q[t],i=`--media-user-${p(t)}`,a=n===r?null:ht(t,n);if(t===`fontFamily`){let t=n===`capitals`?`small-caps`:null;e.el?.style.setProperty(`--media-user-font-variant`,t)}e.el?.style.setProperty(i,a)}function ht(e,t){switch(e){case`fontFamily`:return _t(t);case`fontSize`:case`textOpacity`:case`textBgOpacity`:case`displayBgOpacity`:return gt(t);case`textColor`:return`rgb(${K(t)} / var(--media-user-text-opacity, 1))`;case`textShadow`:return vt(t);case`textBg`:return`rgb(${K(t)} / var(--media-user-text-bg-opacity, 1))`;case`displayBg`:return`rgb(${K(t)} / var(--media-user-display-bg-opacity, 1))`}}function gt(e){return(parseInt(e)/100).toString()}function _t(e){switch(e){case`mono-serif`:return`"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace`;case`mono-sans`:return`"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace`;case`pro-sans`:return`Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif`;case`casual`:return`"Comic Sans MS", Impact, Handlee, fantasy`;case`cursive`:return`"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive`;case`capitals`:return`"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps`;default:return`"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif`}}function vt(e){switch(e){case`drop shadow`:return`rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px`;case`raised`:return`rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px`;case`depressed`:return`rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px`;case`outline`:return`rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px`;default:return``}}var yt=0;function Y({label:e=``,value:t=``,children:n}){if(!e)return T`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${n}</div>
      </div>
    `;let r=`vds-menu-section-${++yt}`;return T`
    <section class="vds-menu-section" role="group" aria-labelledby=${r}>
      <div class="vds-menu-section-title">
        <header id=${r}>${e}</header>
        ${t?T`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${n}</div>
    </section>
  `}function bt({label:e,children:t}){return T`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function X({label:e,icon:t,hint:n}){return T`
    <media-menu-button class="vds-menu-item">
      ${R(`menu-arrow-left`,`vds-menu-close-icon`)}
      ${t?R(t,`vds-menu-item-icon`):null}
      <span class="vds-menu-item-label">${j(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${n?j(n):null} </span>
      ${R(`menu-arrow-right`,`vds-menu-open-icon`)}
    </media-menu-button>
  `}function xt({value:e=null,options:t,hideLabel:n=!1,children:r=null,onChange:i=null}){function a(e){let{value:t,label:i}=e;return T`
      <media-radio class="vds-radio" value=${t}>
        ${R(`menu-radio-check`)}
        ${n?null:T`
              <span class="vds-radio-label" data-part="label">
                ${y(i)?i:j(i)}
              </span>
            `}
        ${te(r)?r(e):r}
      </media-radio>
    `}return T`
    <media-radio-group
      class="vds-radio-group"
      value=${y(e)?e:e?j(e):``}
      @change=${i}
    >
      ${b(t)?t.map(a):j(()=>t().map(a))}
    </media-radio-group>
  `}function St(e){return b(e)?e.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function Ct(){return T`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function wt(){return T`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function Tt({label:e=null,value:t=null,upIcon:n=``,downIcon:r=``,children:i,isMin:a,isMax:o}){let s=e||t,c=[r?R(r,`down`):null,i,n?R(n,`up`):null];return T`
    <div
      class=${`vds-menu-item vds-menu-slider-item${s?` group`:``}`}
      data-min=${j(()=>a()?``:null)}
      data-max=${j(()=>o()?``:null)}
    >
      ${s?T`
            <div class="vds-menu-slider-title">
              ${[e?T`<div>${e}</div>`:null,t?T`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}var Et={...ot,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`},Z={...st,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`};function Dt(){return j(()=>{let{hasCaptions:e}=S(),{translations:t}=F();return e()?T`
      <media-menu class="vds-font-menu vds-menu">
        ${X({label:()=>I(t,`Caption Styles`)})}
        <media-menu-items class="vds-menu-items">
          ${[Y({label:B(t,`Font`),children:[Ot(),kt()]}),Y({label:B(t,`Text`),children:[At(),Mt(),jt()]}),Y({label:B(t,`Text Background`),children:[Nt(),Pt()]}),Y({label:B(t,`Display Background`),children:[Ft(),It()]}),Y({children:[Lt()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function Ot(){return Q({label:`Family`,option:at,type:`fontFamily`})}function kt(){return Q({label:`Size`,option:Et,type:`fontSize`})}function At(){return Q({label:`Color`,option:it,type:`textColor`})}function jt(){return Q({label:`Opacity`,option:Z,type:`textOpacity`})}function Mt(){return Q({label:`Shadow`,option:ct,type:`textShadow`})}function Nt(){return Q({label:`Color`,option:it,type:`textBg`})}function Pt(){return Q({label:`Opacity`,option:Z,type:`textBgOpacity`})}function Ft(){return Q({label:`Color`,option:it,type:`displayBg`})}function It(){return Q({label:`Opacity`,option:Z,type:`displayBgOpacity`})}function Lt(){let{translations:e}=F();return T`
    <button class="vds-menu-item" role="menuitem" @click=${lt}>
      <span class="vds-menu-item-label">${j(()=>I(e,`Reset`))}</span>
    </button>
  `}function Q({label:e,option:t,type:n}){let{player:r}=C(),{translations:i}=F(),a=J[n],o=()=>I(i,e);function s(){_(),r.dispatchEvent(new Event(`vds-font-change`))}if(t.type===`color`){function e(e){a.set(e.target.value),s()}return bt({label:j(o),children:T`
        <input
          class="vds-color-picker"
          type="color"
          .value=${j(a)}
          @input=${e}
        />
      `})}if(t.type===`slider`){let{min:e,max:n,step:r,upIcon:i,downIcon:c}=t;function l(e){a.set(e.detail+`%`),s()}return Tt({label:j(o),value:j(a),upIcon:i,downIcon:c,isMin:()=>a()===e+`%`,isMax:()=>a()===n+`%`,children:T`
        <media-slider
          class="vds-slider"
          min=${e}
          max=${n}
          step=${r}
          key-step=${r}
          .value=${j(()=>parseInt(a()))}
          aria-label=${j(o)}
          @value-change=${l}
          @drag-value-change=${l}
        >
          ${Ct()}${wt()}
        </media-slider>
      `})}let c=St(t.values);return T`
    <media-menu class=${`vds-${p(n)}-menu vds-menu`}>
      ${X({label:o,hint:()=>{let e=a(),t=c.find(t=>t.value===e)?.label||``;return I(i,y(t)?t:t())}})}
      <media-menu-items class="vds-menu-items">
        ${xt({value:a,options:c,onChange({detail:e}){a.set(e),s()}})}
      </media-menu-items>
    </media-menu>
  `}function Rt({label:n,checked:r,defaultChecked:i=!1,storageKey:a,onChange:o}){let{translations:s}=F(),c=e(!!((a?localStorage.getItem(a):null)??i)),l=e(!1),u=j(pe(c)),d=B(s,n);a&&o(t(c)),r&&m(()=>void c.set(r()));function f(e){e?.button!==1&&(c.set(e=>!e),a&&localStorage.setItem(a,c()?`1`:``),o(c(),e),l.set(!1))}function p(e){ee(e)&&f()}function h(e){e.button===0&&l.set(!0)}return T`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${d}
      aria-checked=${u}
      data-active=${j(()=>l()?``:null)}
      @pointerup=${f}
      @pointerdown=${h}
      @keydown=${p}
    ></div>
  `}function zt(){return j(()=>{let{translations:e}=F();return T`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${X({label:()=>I(e,`Accessibility`),icon:`menu-accessibility`})}
        <media-menu-items class="vds-menu-items">
          ${[Y({children:[Bt(),Vt()]}),Y({children:[Dt()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Bt(){let{userPrefersAnnouncements:e,translations:t}=F(),n=`Announcements`;return bt({label:B(t,n),children:Rt({label:n,storageKey:`vds-player::announcements`,onChange(t){e.set(t)}})})}function Vt(){return j(()=>{let{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:n}=F(),{viewType:r}=S();if(i(()=>r()!==`video`||n())())return null;let a=`Keyboard Animations`;return bt({label:B(e,a),children:Rt({label:a,defaultChecked:!0,storageKey:`vds-player::keyboard-animations`,onChange(e){t.set(e)}})})})}function Ht(){return j(()=>{let{noAudioGain:e,translations:t}=F(),{audioTrack:n,audioTracks:r,canSetAudioGain:a}=S();return i(()=>!(a()&&!e())&&r().length<=1)()?null:T`
      <media-menu class="vds-audio-menu vds-menu">
        ${X({label:()=>I(t,`Audio`),icon:`menu-audio`,hint:()=>n()?.label??``})}
        <media-menu-items class="vds-menu-items">
          ${[Ut(),Wt()]}
        </media-menu-items>
      </media-menu>
    `})}function Ut(){return j(()=>{let{translations:e}=F(),{audioTracks:t}=S(),n=B(e,`Default`);return i(()=>t().length<=1)()?null:Y({children:T`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${X({label:()=>I(e,`Track`)})}
          <media-menu-items class="vds-menu-items">
            <media-audio-radio-group
              class="vds-audio-track-radio-group vds-radio-group"
              empty-label=${n}
            >
              <template>
                <media-radio class="vds-audio-track-radio vds-radio">
                  <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                  <span class="vds-radio-label" data-part="label"></span>
                </media-radio>
              </template>
            </media-audio-radio-group>
          </media-menu-items>
        </media-menu>
      `})})}function Wt(){return j(()=>{let{noAudioGain:e,translations:t}=F(),{canSetAudioGain:n}=S();if(i(()=>!n()||e())())return null;let{audioGain:r}=S();return Y({label:B(t,`Boost`),value:j(()=>Math.round(((r()??1)-1)*100)+`%`),children:[Tt({upIcon:`menu-audio-boost-up`,downIcon:`menu-audio-boost-down`,children:Gt(),isMin:()=>((r()??1)-1)*100<=Kt(),isMax:()=>((r()??1)-1)*100===qt()})]})})}function Gt(){let{translations:e}=F(),t=B(e,`Boost`),n=Kt,r=qt,i=Jt;return T`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${j(n)}
      max=${j(r)}
      step=${j(i)}
      key-step=${j(i)}
    >
      ${Ct()}${wt()}
    </media-audio-gain-slider>
  `}function Kt(){let{audioGains:e}=F(),t=e();return b(t)?t[0]??0:t.min}function qt(){let{audioGains:e}=F(),t=e();return b(t)?t[t.length-1]??300:t.max}function Jt(){let{audioGains:e}=F(),t=e();return b(t)?t[1]-t[0]||25:t.step}function Yt(){return j(()=>{let{translations:e}=F(),{hasCaptions:t}=S(),n=B(e,`Off`);return t()?T`
      <media-menu class="vds-captions-menu vds-menu">
        ${X({label:()=>I(e,`Captions`),icon:`menu-captions`})}
        <media-menu-items class="vds-menu-items">
          <media-captions-radio-group
            class="vds-captions-radio-group vds-radio-group"
            off-label=${n}
          >
            <template>
              <media-radio class="vds-caption-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
              </media-radio>
            </template>
          </media-captions-radio-group>
        </media-menu-items>
      </media-menu>
    `:null})}function Xt(){return j(()=>{let{hideQualityBitrate:e,translations:t}=F(),{canSetQuality:n,qualities:r}=S();if(!n()||r().length<=1)return null;let i=B(t,`Auto`);return T`
      <media-menu class="vds-quality-menu vds-menu">
        ${X({label:()=>I(t,`Quality`),icon:`menu-quality-up`})}
        <media-menu-items class="vds-menu-items">
          <media-quality-radio-group
            class="vds-quality-radio-group vds-radio-group"
            auto-label=${i}
            ?hide-bitrate=${j(e)}
          >
            <template>
              <media-radio class="vds-quality-radio vds-radio">
                <slot name="menu-radio-check-icon" data-class="vds-icon"></slot>
                <span class="vds-radio-label" data-part="label"></span>
                <span class="vds-radio-hint" data-part="bitrate"></span>
              </media-radio>
            </template>
          </media-quality-radio-group>
        </media-menu-items>
      </media-menu>
    `})}function Zt(){return j(()=>{let{translations:e}=F(),{canSetPlaybackRate:t,playbackRate:n}=S();return t()?T`
      <media-menu class="vds-speed-menu vds-menu">
        ${X({label:()=>I(e,`Speed`),icon:`menu-speed-up`,hint:()=>n()===1?I(e,`Normal`):n()+`x`})}
        <media-menu-items class="vds-menu-items">
          ${Y({label:B(e,`Speed`),value:j(()=>n()===1?I(e,`Normal`):n()+`x`),children:Tt({upIcon:`menu-font-size-up`,downIcon:`menu-font-size-down`,children:tn(),isMin:()=>n()===Qt(),isMax:()=>n()===$t()})})}
        </media-menu-items>
      </media-menu>
    `:null})}function Qt(){let{playbackRates:e}=F(),t=e();return b(t)?t[0]??0:t.min}function $t(){let{playbackRates:e}=F(),t=e();return b(t)?t[t.length-1]??2:t.max}function en(){let{playbackRates:e}=F(),t=e();return b(t)?t[1]-t[0]||.25:t.step}function tn(){let{translations:e}=F(),t=B(e,`Speed`),n=Qt,r=$t,i=en;return T`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${j(n)}
      max=${j(r)}
      step=${j(i)}
      key-step=${j(i)}
    >
      ${Ct()}${wt()}
    </media-speed-slider>
  `}function nn({placement:t,portal:n,tooltip:r}){return j(()=>{let{viewType:a}=S(),{translations:o,menuPortal:s,noModal:c,menuGroup:l,smallWhen:d}=F(),f=i(()=>c()?u(t):d()?null:u(t)),p=i(()=>!d()&&l()===`bottom`&&a()===`video`?26:0),m=e(!1);ft();function h(){m.set(!0)}function ee(){m.set(!1)}let g=T`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${j(f)}
        offset=${j(p)}
      >
        ${j(()=>m()?[Zt(),Xt(),zt(),Ht(),Yt()]:null)}
      </media-menu-items>
    `;return T`
      <media-menu class="vds-settings-menu vds-menu" @open=${h} @close=${ee}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${B(o,`Settings`)}
            >
              ${R(`menu-settings`,`vds-rotate-icon`)}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${te(r)?j(r):r}
          >
            ${B(o,`Settings`)}
          </media-tooltip-content>
        </media-tooltip>
        ${n?tt(s,g):g}
      </media-menu>
    `})}function rn({orientation:t,tooltip:n}){return j(()=>{let{pointer:r,muted:i,canSetVolume:a}=S();if(r()===`coarse`&&!i())return null;if(!a())return Xe({tooltip:n});let o=e(void 0);return T`
      <div class="vds-volume" ?data-active=${j(fe(o))} ${P(o.set)}>
        ${Xe({tooltip:n})}
        <div class="vds-volume-popup">${an({orientation:t})}</div>
      </div>
    `})}function an({orientation:e}={}){let{translations:t}=F();return T`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${B(t,`Volume`)}
      orientation=${A(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function on(){let t=e(void 0),n=e(0),{thumbnails:r,translations:i,sliderChaptersMinWidth:a,disableTimeSlider:o,seekStep:s,noScrubGesture:c}=F(),l=B(i,`Seek`),u=j(o),d=j(()=>n()<a()),f=j(r);return le(t,()=>{let e=t();e&&n.set(e.clientWidth)}),T`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${l}
      key-step=${j(s)}
      ?disabled=${u}
      ?no-swipe-gesture=${j(c)}
      ${P(t.set)}
    >
      <media-slider-chapters class="vds-slider-chapters" ?disabled=${d}>
        <template>
          <div class="vds-slider-chapter">
            <div class="vds-slider-track"></div>
            <div class="vds-slider-track-fill vds-slider-track"></div>
            <div class="vds-slider-progress vds-slider-track"></div>
          </div>
        </template>
      </media-slider-chapters>
      <div class="vds-slider-thumb"></div>
      <media-slider-preview class="vds-slider-preview">
        <media-slider-thumbnail
          class="vds-slider-thumbnail vds-thumbnail"
          .src=${f}
        ></media-slider-thumbnail>
        <div class="vds-slider-chapter-title" data-part="chapter-title"></div>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
    </media-time-slider>
  `}function sn(){return T`
    <div class="vds-time-group">
      ${j(()=>{let{duration:e}=S();return e()?[T`<media-time class="vds-time" type="current"></media-time>`,T`<div class="vds-time-divider">/</div>`,T`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function cn(){return j(()=>{let{live:e,duration:t}=S();return e()?et():t()?T`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function ln(){return j(()=>{let{live:e}=S();return e()?et():sn()})}function un(){return j(()=>{let{textTracks:t}=C(),{title:n,started:r}=S(),i=e(null);return xe(t,`chapters`,i.set),i()&&(r()||!n())?dn():T`<media-title class="vds-chapter-title"></media-title>`})}function dn(){return T`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var fn=class extends He{async loadIcons(){let e=(await Se(async()=>{let{icons:e}=await import(`./vidstack-BEi14iNw2-B-6GFLV3.js`);return{icons:e}},__vite__mapDeps([0,1]))).icons,t={};for(let n of Object.keys(e))t[n]=Be({name:n,paths:e[n]});return t}},pn=class extends Ge{static props={...super.props,when:({viewType:e})=>e===`audio`,smallWhen:({width:e})=>e<576}};function mn(){return[L(),W(),T`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[$e({backward:!0,tooltip:`top start`}),V({tooltip:`top`}),$e({tooltip:`top`}),hn(),on(),cn(),rn({orientation:`vertical`,tooltip:`top`}),H({tooltip:`top`}),U(),Je({tooltip:`top`}),gn()]}
        </media-controls-group>
      </media-controls>
    `]}function hn(){return j(()=>{let t=e(void 0),n=e(!1),r=C(),{title:i,started:a,currentTime:o,ended:s}=S(),{translations:l}=F(),u=ue(t),d=()=>a()||o()>0,f=()=>`${I(l,s()?`Replay`:d()?`Continue`:`Play`)}: ${i()}`;m(()=>{u()&&document.activeElement===document.body&&r.player.el?.focus({preventScroll:!0})});function p(){let e=t(),r=!!e&&!u()&&e.clientWidth<e.children[0].clientWidth;e&&c(e,`vds-marquee`,r),n.set(r)}function h(){return T`
        <span class="vds-title-text">
          ${j(f)}${j(()=>d()?dn():null)}
        </span>
      `}return le(t,p),i()?T`
          <span class="vds-title" title=${j(f)} ${P(t.set)}>
            ${[h(),j(()=>n()&&!u()?h():null)]}
          </span>
        `:G()})}function gn(){let e=`top end`;return[rt({tooltip:`top`,placement:e,portal:!0}),nn({tooltip:`top end`,placement:e,portal:!0})]}var _n=class extends v(ve,pn){static tagName=`media-audio-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;#t=e(!1);onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.#r(),this.#a()}onConnect(){this.#r(),qe(`audio`,()=>this.isMatch),this.#i()}render(){return j(this.#n.bind(this))}#n(){return this.isMatch?mn():null}#r(){this.classList.add(`vds-audio-layout`)}#i(){let{menuPortal:e}=F();m(()=>{if(!this.isMatch)return;let t=nt(this,this.menuContainer,`vds-audio-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new ze(n):new fn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#a(){let{pointer:e}=this.#e.$state;m(()=>{e()===`coarse`&&m(this.#o.bind(this))})}#o(){this.#t()?(x(this,`pointerdown`,e=>e.stopPropagation()),x(window,`pointerdown`,this.#c.bind(this))):x(this,`pointerdown`,this.#s.bind(this),{capture:!0})}#s(e){let{target:t}=e;ce(t)&&t.closest(`.vds-time-slider`)&&(e.stopImmediatePropagation(),this.setAttribute(`data-scrubbing`,``),this.#t.set(!0))}#c(){this.#t.set(!1),this.removeAttribute(`data-scrubbing`)}},vn=D(class extends De{constructor(){super(...arguments),this.key=w}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(Ee(e),this.key=t),n}}),yn=class extends Ge{static props={...super.props,when:({viewType:e})=>e===`video`,smallWhen:({width:e,height:t})=>e<576||t<380}};function bn(){return j(()=>{let t=C(),{noKeyboardAnimations:n,userPrefersKeyboardAnimations:r}=F();if(i(()=>n()||!r())())return null;let a=e(!1),{lastKeyboardAction:o}=t.$state;m(()=>{a.set(!!o());let e=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(e)}});let s=i(()=>{let e=o()?.action;return e&&a()?p(e):null}),c=i(()=>`vds-kb-action${a()?``:` hidden`}`),l=i(xn),u=i(()=>{let e=Cn();return e?me(e):null});function d(){let e=u();return e?T`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${e}</div>
        </div>
      `:null}return T`
      <div class=${j(c)} data-action=${j(s)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${j(l)}</div>
        </div>
        ${j(()=>vn(o(),d()))}
      </div>
    `})}function xn(){let{$state:e}=C(),t=e.lastKeyboardAction()?.action,n=e.audioGain()??1;switch(t){case`toggleMuted`:return e.muted()?`0%`:Sn(e.volume(),n);case`volumeUp`:case`volumeDown`:return Sn(e.volume(),n);default:return``}}function Sn(e,t){return`${Math.round(e*t*100)}%`}function Cn(){let{$state:e}=C();switch(e.lastKeyboardAction()?.action){case`togglePaused`:return e.paused()?`kb-pause-icon`:`kb-play-icon`;case`toggleMuted`:return e.muted()||e.volume()===0?`kb-mute-icon`:e.volume()>=.5?`kb-volume-up-icon`:`kb-volume-down-icon`;case`toggleFullscreen`:return`kb-fs-${e.fullscreen()?`enter`:`exit`}-icon`;case`togglePictureInPicture`:return`kb-pip-${e.pictureInPicture()?`enter`:`exit`}-icon`;case`toggleCaptions`:return e.hasCaptions()?`kb-cc-${e.textTrack()?`on`:`off`}-icon`:null;case`volumeUp`:return`kb-volume-up-icon`;case`volumeDown`:return`kb-volume-down-icon`;case`seekForward`:return`kb-seek-forward-icon`;case`seekBackward`:return`kb-seek-backward-icon`;default:return null}}function wn(){return[L(),jn(),$(),bn(),W(),T`<div class="vds-scrim"></div>`,T`
      <media-controls class="vds-controls">
        ${[En(),G(),T`<media-controls-group class="vds-controls-group"></media-controls-group>`,G(),T`
            <media-controls-group class="vds-controls-group">
              ${on()}
            </media-controls-group>
          `,T`
            <media-controls-group class="vds-controls-group">
              ${[V({tooltip:`top start`}),rn({orientation:`horizontal`,tooltip:`top`}),ln(),un(),H({tooltip:`top`}),Tn(),Je({tooltip:`top`}),Ye({tooltip:`top`}),U(),Ze(),Qe({tooltip:`top end`})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Tn(){return j(()=>{let{menuGroup:e}=F();return e()===`bottom`?An():null})}function En(){return T`
    <media-controls-group class="vds-controls-group">
      ${j(()=>{let{menuGroup:e}=F();return e()===`top`?[G(),An()]:null})}
    </media-controls-group>
  `}function Dn(){return[L(),jn(),$(),W(),bn(),T`<div class="vds-scrim"></div>`,T`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Je({tooltip:`top start`}),Ye({tooltip:`bottom start`}),G(),H({tooltip:`bottom`}),U(),An(),rn({orientation:`vertical`,tooltip:`bottom end`})]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[G(),V({tooltip:`top`}),G()]}
        </media-controls-group>

        ${G()}

        <media-controls-group class="vds-controls-group">
          ${[ln(),un(),Qe({tooltip:`top end`})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${on()}
        </media-controls-group>
      </media-controls>
    `,kn()]}function On(){return T`
    <div class="vds-load-container">
      ${[$(),V({tooltip:`top`})]}
    </div>
  `}function kn(){return j(()=>{let{duration:e}=S();return e()===0?null:T`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function $(){return T`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function An(){let{menuGroup:e,smallWhen:t}=F(),n=()=>e()===`top`||t()?`bottom`:`top`,r=i(()=>`${n()} ${e()===`top`?`end`:`center`}`),a=i(()=>`${n()} end`);return[rt({tooltip:r,placement:a,portal:!0}),nn({tooltip:r,placement:a,portal:!0})]}function jn(){return j(()=>{let{noGestures:e}=F();return e()?null:T`
      <div class="vds-gestures">
        <media-gesture class="vds-gesture" event="pointerup" action="toggle:paused"></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="pointerup"
          action="toggle:controls"
        ></media-gesture>
        <media-gesture
          class="vds-gesture"
          event="dblpointerup"
          action="toggle:fullscreen"
        ></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:-10"></media-gesture>
        <media-gesture class="vds-gesture" event="dblpointerup" action="seek:10"></media-gesture>
      </div>
    `})}var Mn=class extends v(ve,yn){static tagName=`media-video-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;onSetup(){this.forwardKeepAlive=!1,this.#e=C(),this.#t()}onConnect(){this.#t(),qe(`video`,()=>this.isMatch),this.#n()}render(){return j(this.#r.bind(this))}#t(){this.classList.add(`vds-video-layout`)}#n(){let{menuPortal:e}=F();m(()=>{if(!this.isMatch)return;let t=nt(this,this.menuContainer,`vds-video-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new ze(n):new fn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#r(){let{load:e}=this.#e.$props,{canLoad:t,streamType:n,nativeControls:r}=this.#e.$state;return!r()&&this.isMatch?e()===`play`&&!t()?On():n()===`unknown`?$():this.isSmallLayout?Dn():wn():null}};h(_n),h(Mn);