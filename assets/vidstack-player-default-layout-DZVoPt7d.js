const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/vidstack-BEi14iNw2-B-6GFLV3.js","assets/vidstack-D9mvYVIz-Dmv6-Efn.js"])))=>i.map(i=>d[i]);
import{At as e,Ct as t,Dt as n,Ft as r,G as i,H as a,It as o,K as s,Mt as c,Ot as l,Pt as u,St as d,Tt as f,W as p,X as m,Y as h,at as g,ct as _,it as v,jt as y,n as ee,nt as te,o as b,pt as x,rt as ne,tt as S,vt as re,wt as ie,xt as ae,yt as C}from"./vidstack-D9mvYVIz-Dmv6-Efn.js";import{F as oe,I as se,L as ce,O as le,R as ue,S as de,_ as w,a as T,g as E,v as fe}from"./vidstack-player-BLECUjfz.js";import{a as pe,i as me,n as D,o as O,r as he,t as ge}from"./vidstack-DM8v4Khu-B-ZM-eGf.js";import{n as _e,t as ve}from"./vidstack-DmKKlMSK-CyDQc1BJ.js";import{n as ye}from"./vidstack-B1Z6f96t-BTC2paMa.js";import{t as be}from"./preload-helper-BLdHbfdN.js";var{I:xe}=pe,Se=e=>e.strings===void 0,Ce={},we=(e,t=Ce)=>e._$AH=t,k={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},A=e=>(...t)=>({_$litDirective$:e,values:t}),Te=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},j=(e,t)=>{var n,r;let i=e._$AN;if(i===void 0)return!1;for(let e of i)(r=(n=e)._$AO)==null||r.call(n,t,!1),j(e,t);return!0},M=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ee=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),ke(t)}};function De(e){this._$AN===void 0?this._$AM=e:(M(this),this._$AM=e,Ee(this))}function Oe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)j(r[e],!1),M(r[e]);else r!=null&&(j(r,!1),M(r))}else j(this,e)}}var ke=e=>{var t,n;e.type==k.CHILD&&((t=e)._$AP??(t._$AP=Oe),(n=e)._$AQ??(n._$AQ=De))},Ae=class extends Te{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ee(this),this.isConnected=e._$AU}_$AO(e,t=!0){var n,r;e!==this.isConnected&&(this.isConnected=e,e?(n=this.reconnected)==null||n.call(this):(r=this.disconnected)==null||r.call(this)),t&&(j(this,e),M(this))}setValue(e){if(Se(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},je=e=>e??D,Me=class extends Te{constructor(e){if(super(e),this.et=D,e.type!==k.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===D||e==null)return this.ft=void 0,this.et=e;if(e===me)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.et)return this.ft;this.et=e;let t=[e];return t.raw=t,this.ft={_$litType$:this.constructor.resultType,strings:t,values:[]}}};Me.directiveName=`unsafeHTML`,Me.resultType=1;var Ne=class extends Me{};Ne.directiveName=`unsafeSVG`,Ne.resultType=2;var Pe=A(Ne),Fe=class extends Ae{#e=null;#t=!1;#n=null;constructor(e){super(e),this.#t=e.type===k.ATTRIBUTE||e.type===k.BOOLEAN_ATTRIBUTE}render(e){return e!==this.#e&&(this.disconnected(),this.#e=e,this.isConnected&&this.#r()),this.#e?this.#i(t(this.#e)):D}reconnected(){this.#r()}disconnected(){this.#n?.(),this.#n=null}#r(){this.#e&&(this.#n=m(this.#o.bind(this)))}#i(e){return this.#t?je(e):e}#a(e){this.setValue(this.#i(e))}#o(){this.#a(this.#e?.())}};function N(e){return A(Fe)(i(e))}var Ie=class{#e;#t;elements=new Set;constructor(e,t){this.#e=e,this.#t=t}connect(){this.#r();let e=new MutationObserver(this.#n);for(let t of this.#e)e.observe(t,{childList:!0,subtree:!0});d(()=>e.disconnect()),d(this.disconnect.bind(this))}disconnect(){this.elements.clear()}assign(e,t){ne(e)?(t.textContent=``,t.append(e)):(he(null,t),he(e,t)),t.style.display||(t.style.display=`contents`);let n=t.firstElementChild;if(!n)return;let r=t.getAttribute(`data-class`);r&&n.classList.add(...r.split(` `))}#n=a(this.#r.bind(this));#r(e){if(e&&!e.some(e=>e.addedNodes.length))return;let t=!1,n=this.#e.flatMap(e=>[...e.querySelectorAll(`slot`)]);for(let e of n)e.hasAttribute(`name`)&&!this.elements.has(e)&&(this.elements.add(e),t=!0);t&&this.#t(this.elements)}},Le=0,P=`data-slot-id`,Re=class{#e;slots;constructor(e){this.#e=e,this.slots=new Ie(e,this.#n.bind(this))}connect(){this.slots.connect(),this.#n();let e=new MutationObserver(this.#t);for(let t of this.#e)e.observe(t,{childList:!0});d(()=>e.disconnect())}#t=a(this.#n.bind(this));#n(){for(let e of this.#e)for(let t of e.children){if(t.nodeType!==1)continue;let e=t.getAttribute(`slot`);if(!e)continue;t.style.display=`none`;let n=t.getAttribute(P);n||t.setAttribute(P,n=++Le+``);for(let r of this.slots.elements){if(r.getAttribute(`name`)!==e||r.getAttribute(P)===n)continue;let i=document.importNode(t,!0);e.includes(`-icon`)&&i.classList.add(`vds-icon`),i.style.display=``,i.removeAttribute(`slot`),this.slots.assign(i,r),r.setAttribute(P,n)}}}};function ze({name:e,class:t,state:n,paths:r,viewBox:i=`0 0 32 32`}){return O`<svg
    class="${`vds-icon`+(t?` ${t}`:``)}"
    viewBox="${i}"
    fill="none"
    aria-hidden="true"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    data-icon=${je(e??n)}
  >
    ${x(r)?Pe(r):N(r)}
  </svg>`}var Be=class{#e={};#t=!1;slots;constructor(e){this.slots=new Ie(e,this.#r.bind(this))}connect(){this.slots.connect()}load(){this.loadIcons().then(e=>{this.#e=e,this.#t=!0,this.#r()})}*#n(){for(let e of Object.keys(this.#e)){let t=`${e}-icon`;for(let n of this.slots.elements)n.name===t&&(yield{icon:this.#e[e],slot:n})}}#r(){if(this.#t)for(let{icon:e,slot:t}of this.#n())this.slots.assign(e,t)}},Ve=class extends Be{connect(){super.connect();let{player:e}=E();if(!e.el)return;let t,n=new IntersectionObserver(e=>{e[0]?.isIntersecting&&(t?.(),t=void 0,this.load())});n.observe(e.el),t=d(()=>n.disconnect())}},F=new WeakMap,I=A(class extends Ae{render(e){return D}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.dt=e.options?.host,this.ot(this.lt=e.element)),D}ot(e){if(typeof this.G==`function`){let t=this.dt??globalThis,n=F.get(t);n===void 0&&(n=new WeakMap,F.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.dt,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.dt,e)}else this.G.value=e}get rt(){return typeof this.G==`function`?F.get(this.dt??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),He=s();function L(){return o(He)}var Ue={colorScheme:`system`,download:null,customIcons:!1,disableTimeSlider:!1,menuContainer:null,menuGroup:`bottom`,noAudioGain:!1,noGestures:!1,noKeyboardAnimations:!1,noModal:!1,noScrubGesture:!1,playbackRates:{min:0,max:2,step:.25},audioGains:{min:0,max:300,step:25},seekStep:10,sliderChaptersMinWidth:325,hideQualityBitrate:!1,smallWhen:!1,thumbnails:null,translations:null,when:!1},R=class extends ee{static props=Ue;#e;#t=i(()=>{let e=this.$props.when();return this.#r(e)});#n=i(()=>{let e=this.$props.smallWhen();return this.#r(e)});get isMatch(){return this.#t()}get isSmallLayout(){return this.#n()}onSetup(){this.#e=E(),this.setAttributes({"data-match":this.#t,"data-sm":()=>this.#n()?``:null,"data-lg":()=>this.#n()?null:``,"data-size":()=>this.#n()?`sm`:`lg`,"data-no-scrub-gesture":this.$props.noScrubGesture}),f(He,{...this.$props,when:this.#t,smallWhen:this.#n,userPrefersAnnouncements:e(!0),userPrefersKeyboardAnimations:e(!0),menuPortal:e(null)})}onAttach(e){ue(e,this.$props.colorScheme)}#r(e){return e!==`never`&&(te(e)?e:i(()=>e(this.#e.player.state))())}},We=R.prototype;ie(We,`isMatch`),ie(We,`isSmallLayout`);function Ge(e,t){m(()=>{let{player:n}=E(),r=n.el;return r&&l(r,`data-layout`,t()&&e),()=>r?.removeAttribute(`data-layout`)})}function z(e,t){return e()?.[t]??t}function B(){return N(()=>{let{translations:e,userPrefersAnnouncements:t}=L();return t()?O`<media-announcer .translations=${N(e)}></media-announcer>`:null})}function V(e,t=``){return O`<slot
    name=${`${e}-icon`}
    data-class=${`vds-icon vds-${e}-icon${t?` ${t}`:``}`}
  ></slot>`}function H(e){return e.map(e=>V(e))}function U(e,t){return N(()=>z(e,t))}function W({tooltip:e}){let{translations:t}=L(),{remotePlaybackState:n}=w(),i=N(()=>`${z(t,`AirPlay`)} ${r(n())}`),a=U(t,`AirPlay`);return O`
    <media-tooltip class="vds-airplay-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-airplay-button class="vds-airplay-button vds-button" aria-label=${i}>
          ${V(`airplay`)}
        </media-airplay-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-airplay-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ke({tooltip:e}){let{translations:t}=L(),{remotePlaybackState:n}=w(),i=N(()=>`${z(t,`Google Cast`)} ${r(n())}`),a=U(t,`Google Cast`);return O`
    <media-tooltip class="vds-google-cast-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-google-cast-button class="vds-google-cast-button vds-button" aria-label=${i}>
          ${V(`google-cast`)}
        </media-google-cast-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-google-cast-tooltip-text">${a}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function G({tooltip:e}){let{translations:t}=L(),n=U(t,`Play`),r=U(t,`Pause`);return O`
    <media-tooltip class="vds-play-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-play-button
          class="vds-play-button vds-button"
          aria-label=${U(t,`Play`)}
        >
          ${H([`play`,`pause`,`replay`])}
        </media-play-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-play-tooltip-text">${n}</span>
        <span class="vds-pause-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function qe({tooltip:e,ref:t=ae}){let{translations:n}=L(),r=U(n,`Mute`),i=U(n,`Unmute`);return O`
    <media-tooltip class="vds-mute-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-mute-button
          class="vds-mute-button vds-button"
          aria-label=${U(n,`Mute`)}
          ${I(t)}
        >
          ${H([`mute`,`volume-low`,`volume-high`])}
        </media-mute-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-mute-tooltip-text">${i}</span>
        <span class="vds-unmute-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Je({tooltip:e}){let{translations:t}=L(),n=U(t,`Closed-Captions On`),r=U(t,`Closed-Captions Off`);return O`
    <media-tooltip class="vds-caption-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-caption-button
          class="vds-caption-button vds-button"
          aria-label=${U(t,`Captions`)}
        >
          ${H([`cc-on`,`cc-off`])}
        </media-caption-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-cc-on-tooltip-text">${r}</span>
        <span class="vds-cc-off-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ye(){let{translations:e}=L(),t=U(e,`Enter PiP`),n=U(e,`Exit PiP`);return O`
    <media-tooltip class="vds-pip-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-pip-button
          class="vds-pip-button vds-button"
          aria-label=${U(e,`PiP`)}
        >
          ${H([`pip-enter`,`pip-exit`])}
        </media-pip-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content">
        <span class="vds-pip-enter-tooltip-text">${t}</span>
        <span class="vds-pip-exit-tooltip-text">${n}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Xe({tooltip:e}){let{translations:t}=L(),n=U(t,`Enter Fullscreen`),r=U(t,`Exit Fullscreen`);return O`
    <media-tooltip class="vds-fullscreen-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-fullscreen-button
          class="vds-fullscreen-button vds-button"
          aria-label=${U(t,`Fullscreen`)}
        >
          ${H([`fs-enter`,`fs-exit`])}
        </media-fullscreen-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${e}>
        <span class="vds-fs-enter-tooltip-text">${n}</span>
        <span class="vds-fs-exit-tooltip-text">${r}</span>
      </media-tooltip-content>
    </media-tooltip>
  `}function Ze({backward:e,tooltip:t}){let{translations:n,seekStep:r}=L(),i=e?`Seek Backward`:`Seek Forward`,a=U(n,i);return O`
    <media-tooltip class="vds-seek-tooltip vds-tooltip">
      <media-tooltip-trigger>
        <media-seek-button
          class="vds-seek-button vds-button"
          seconds=${N(()=>(e?-1:1)*r())}
          aria-label=${a}
        >
          ${V(e?`seek-backward`:`seek-forward`)}
        </media-seek-button>
      </media-tooltip-trigger>
      <media-tooltip-content class="vds-tooltip-content" placement=${t}>
        ${U(n,i)}
      </media-tooltip-content>
    </media-tooltip>
  `}function Qe(){let{translations:e}=L(),{live:t}=w(),n=U(e,`Skip To Live`),r=U(e,`LIVE`);return t()?O`
        <media-live-button class="vds-live-button" aria-label=${n}>
          <span class="vds-live-button-text">${r}</span>
        </media-live-button>
      `:null}function $e(){return N(()=>{let{download:e,translations:t}=L(),n=e();if(_(n))return null;let{source:r,title:i}=w(),a=r(),o=_e({title:i(),src:a,download:n});return x(o?.url)?O`
          <media-tooltip class="vds-download-tooltip vds-tooltip">
            <media-tooltip-trigger>
              <a
                role="button"
                class="vds-download-button vds-button"
                aria-label=${U(t,`Download`)}
                href=${ve(o.url,{download:o.name})}
                download=${o.name}
                target="_blank"
              >
                <slot name="download-icon" data-class="vds-icon" />
              </a>
            </media-tooltip-trigger>
            <media-tooltip-content class="vds-tooltip-content" placement="top">
              ${U(t,`Download`)}
            </media-tooltip-content>
          </media-tooltip>
        `:null})}function et(){let{translations:e}=L();return O`
    <media-captions
      class="vds-captions"
      .exampleText=${U(e,`Captions look like this`)}
    ></media-captions>
  `}function K(){return O`<div class="vds-controls-spacer"></div>`}function tt(e,t){return O`
    <media-menu-portal .container=${N(e)} disabled="fullscreen">
      ${t}
    </media-menu-portal>
  `}function nt(e,t,n,r){let i=x(t)?document.querySelector(t):t;i||=e?.closest(`dialog`),i||=document.body;let a=document.createElement(`div`);a.style.display=`contents`,a.classList.add(n),i.append(a),m(()=>{if(!a)return;let{viewType:e}=w(),t=r();l(a,`data-view-type`,e()),l(a,`data-sm`,t),l(a,`data-lg`,!t),l(a,`data-size`,t?`sm`:`lg`)});let{colorScheme:o}=L();return ue(a,o),a}function rt({placement:t,tooltip:n,portal:r}){let{textTracks:a}=E(),{viewType:o,seekableStart:s,seekableEnd:c}=w(),{translations:l,thumbnails:d,menuPortal:f,noModal:p,menuGroup:m,smallWhen:h}=L();if(i(()=>{let t=s(),n=c(),r=e(null);return ye(a,`chapters`,r.set),!r()?.cues.filter(e=>e.startTime<=n&&e.endTime>=t)?.length})())return null;let g=i(()=>p()?u(t):h()?null:u(t)),_=i(()=>!h()&&m()===`bottom`&&o()===`video`?26:0),y=e(!1);function ee(){y.set(!0)}function te(){y.set(!1)}let b=O`
    <media-menu-items
      class="vds-chapters-menu-items vds-menu-items"
      placement=${N(g)}
      offset=${N(_)}
    >
      ${N(()=>y()?O`
          <media-chapters-radio-group
            class="vds-chapters-radio-group vds-radio-group"
            .thumbnails=${N(d)}
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
  `;return O`
    <media-menu class="vds-chapters-menu vds-menu" @open=${ee} @close=${te}>
      <media-tooltip class="vds-tooltip">
        <media-tooltip-trigger>
          <media-menu-button
            class="vds-menu-button vds-button"
            aria-label=${U(l,`Chapters`)}
          >
            ${V(`menu-chapters`)}
          </media-menu-button>
        </media-tooltip-trigger>
        <media-tooltip-content
          class="vds-tooltip-content"
          placement=${v(n)?N(n):n}
        >
          ${U(l,`Chapters`)}
        </media-tooltip-content>
      </media-tooltip>
      ${r?tt(f,b):b}
    </media-menu>
  `}function it(e){let{style:t}=new Option;return t.color=e,t.color.match(/\((.*?)\)/)[1].replace(/,/g,` `)}var at={type:`color`},ot={type:`radio`,values:{"Monospaced Serif":`mono-serif`,"Proportional Serif":`pro-serif`,"Monospaced Sans-Serif":`mono-sans`,"Proportional Sans-Serif":`pro-sans`,Casual:`casual`,Cursive:`cursive`,"Small Capitals":`capitals`}},st={type:`slider`,min:0,max:400,step:25,upIcon:null,downIcon:null},ct={type:`slider`,min:0,max:100,step:5,upIcon:null,downIcon:null},lt={type:`radio`,values:[`None`,`Drop Shadow`,`Raised`,`Depressed`,`Outline`]},q={fontFamily:`pro-sans`,fontSize:`100%`,textColor:`#ffffff`,textOpacity:`100%`,textShadow:`none`,textBg:`#000000`,textBgOpacity:`100%`,displayBg:`#000000`,displayBgOpacity:`0%`},J=Object.keys(q).reduce((t,n)=>({...t,[n]:e(q[n])}),{});for(let e of Object.keys(J)){let t=T.getItem(`vds-player:${p(e)}`);x(t)&&J[e].set(t)}function ut(){for(let e of Object.keys(J)){let t=q[e];J[e].set(t)}}var dt=!1,ft=new Set;function pt(){let{player:e}=E();ft.add(e),mt(e),d(()=>ft.delete(e)),dt||=(n(()=>{for(let e of re(J)){let t=J[e],n=q[e],r=`vds-player:${p(e)}`;m(()=>{let i=t(),a=i===n;for(let t of ft)ht(t,e,i);a?T.removeItem(r):T.setItem(r,i)})}},null),!0)}function mt(e){for(let t of re(J))ht(e,t,J[t]())}function ht(e,t,n){let r=q[t],i=`--media-user-${p(t)}`,a=n===r?null:gt(t,n);if(t===`fontFamily`){let t=n===`capitals`?`small-caps`:null;e.el?.style.setProperty(`--media-user-font-variant`,t)}e.el?.style.setProperty(i,a)}function gt(e,t){switch(e){case`fontFamily`:return vt(t);case`fontSize`:case`textOpacity`:case`textBgOpacity`:case`displayBgOpacity`:return _t(t);case`textColor`:return`rgb(${it(t)} / var(--media-user-text-opacity, 1))`;case`textShadow`:return yt(t);case`textBg`:return`rgb(${it(t)} / var(--media-user-text-bg-opacity, 1))`;case`displayBg`:return`rgb(${it(t)} / var(--media-user-display-bg-opacity, 1))`}}function _t(e){return(parseInt(e)/100).toString()}function vt(e){switch(e){case`mono-serif`:return`"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace`;case`mono-sans`:return`"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace`;case`pro-sans`:return`Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif`;case`casual`:return`"Comic Sans MS", Impact, Handlee, fantasy`;case`cursive`:return`"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive`;case`capitals`:return`"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps`;default:return`"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif`}}function yt(e){switch(e){case`drop shadow`:return`rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px`;case`raised`:return`rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px`;case`depressed`:return`rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px`;case`outline`:return`rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px`;default:return``}}var bt=0;function Y({label:e=``,value:t=``,children:n}){if(!e)return O`
      <div class="vds-menu-section">
        <div class="vds-menu-section-body">${n}</div>
      </div>
    `;let r=`vds-menu-section-${++bt}`;return O`
    <section class="vds-menu-section" role="group" aria-labelledby=${r}>
      <div class="vds-menu-section-title">
        <header id=${r}>${e}</header>
        ${t?O`<div class="vds-menu-section-value">${t}</div>`:null}
      </div>
      <div class="vds-menu-section-body">${n}</div>
    </section>
  `}function xt({label:e,children:t}){return O`
    <div class="vds-menu-item">
      <div class="vds-menu-item-label">${e}</div>
      ${t}
    </div>
  `}function X({label:e,icon:t,hint:n}){return O`
    <media-menu-button class="vds-menu-item">
      ${V(`menu-arrow-left`,`vds-menu-close-icon`)}
      ${t?V(t,`vds-menu-item-icon`):null}
      <span class="vds-menu-item-label">${N(e)}</span>
      <span class="vds-menu-item-hint" data-part="hint">${n?N(n):null} </span>
      ${V(`menu-arrow-right`,`vds-menu-open-icon`)}
    </media-menu-button>
  `}function St({value:e=null,options:t,hideLabel:n=!1,children:r=null,onChange:i=null}){function a(e){let{value:t,label:i}=e;return O`
      <media-radio class="vds-radio" value=${t}>
        ${V(`menu-radio-check`)}
        ${n?null:O`
              <span class="vds-radio-label" data-part="label">
                ${x(i)?i:N(i)}
              </span>
            `}
        ${v(r)?r(e):r}
      </media-radio>
    `}return O`
    <media-radio-group
      class="vds-radio-group"
      value=${x(e)?e:e?N(e):``}
      @change=${i}
    >
      ${S(t)?t.map(a):N(()=>t().map(a))}
    </media-radio-group>
  `}function Ct(e){return S(e)?e.map(e=>({label:e,value:e.toLowerCase()})):Object.keys(e).map(t=>({label:t,value:e[t]}))}function wt(){return O`
    <div class="vds-slider-track"></div>
    <div class="vds-slider-track-fill vds-slider-track"></div>
    <div class="vds-slider-thumb"></div>
  `}function Tt(){return O`
    <media-slider-steps class="vds-slider-steps">
      <template>
        <div class="vds-slider-step"></div>
      </template>
    </media-slider-steps>
  `}function Et({label:e=null,value:t=null,upIcon:n=``,downIcon:r=``,children:i,isMin:a,isMax:o}){let s=e||t,c=[r?V(r,`down`):null,i,n?V(n,`up`):null];return O`
    <div
      class=${`vds-menu-item vds-menu-slider-item${s?` group`:``}`}
      data-min=${N(()=>a()?``:null)}
      data-max=${N(()=>o()?``:null)}
    >
      ${s?O`
            <div class="vds-menu-slider-title">
              ${[e?O`<div>${e}</div>`:null,t?O`<div>${t}</div>`:null]}
            </div>
            <div class="vds-menu-slider-body">${c}</div>
          `:c}
    </div>
  `}var Dt={...st,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`},Ot={...ct,upIcon:`menu-opacity-up`,downIcon:`menu-opacity-down`};function kt(){return N(()=>{let{hasCaptions:e}=w(),{translations:t}=L();return e()?O`
      <media-menu class="vds-font-menu vds-menu">
        ${X({label:()=>z(t,`Caption Styles`)})}
        <media-menu-items class="vds-menu-items">
          ${[Y({label:U(t,`Font`),children:[At(),jt()]}),Y({label:U(t,`Text`),children:[Mt(),Pt(),Nt()]}),Y({label:U(t,`Text Background`),children:[Ft(),It()]}),Y({label:U(t,`Display Background`),children:[Lt(),Rt()]}),Y({children:[zt()]})]}
        </media-menu-items>
      </media-menu>
    `:null})}function At(){return Z({label:`Family`,option:ot,type:`fontFamily`})}function jt(){return Z({label:`Size`,option:Dt,type:`fontSize`})}function Mt(){return Z({label:`Color`,option:at,type:`textColor`})}function Nt(){return Z({label:`Opacity`,option:Ot,type:`textOpacity`})}function Pt(){return Z({label:`Shadow`,option:lt,type:`textShadow`})}function Ft(){return Z({label:`Color`,option:at,type:`textBg`})}function It(){return Z({label:`Opacity`,option:Ot,type:`textBgOpacity`})}function Lt(){return Z({label:`Color`,option:at,type:`displayBg`})}function Rt(){return Z({label:`Opacity`,option:Ot,type:`displayBgOpacity`})}function zt(){let{translations:e}=L();return O`
    <button class="vds-menu-item" role="menuitem" @click=${ut}>
      <span class="vds-menu-item-label">${N(()=>z(e,`Reset`))}</span>
    </button>
  `}function Z({label:e,option:t,type:n}){let{player:r}=E(),{translations:i}=L(),a=J[n],o=()=>z(i,e);function s(){y(),r.dispatchEvent(new Event(`vds-font-change`))}if(t.type===`color`){function e(e){a.set(e.target.value),s()}return xt({label:N(o),children:O`
        <input
          class="vds-color-picker"
          type="color"
          .value=${N(a)}
          @input=${e}
        />
      `})}if(t.type===`slider`){let{min:e,max:n,step:r,upIcon:i,downIcon:c}=t;function l(e){a.set(e.detail+`%`),s()}return Et({label:N(o),value:N(a),upIcon:i,downIcon:c,isMin:()=>a()===e+`%`,isMax:()=>a()===n+`%`,children:O`
        <media-slider
          class="vds-slider"
          min=${e}
          max=${n}
          step=${r}
          key-step=${r}
          .value=${N(()=>parseInt(a()))}
          aria-label=${N(o)}
          @value-change=${l}
          @drag-value-change=${l}
        >
          ${wt()}${Tt()}
        </media-slider>
      `})}let c=Ct(t.values);return O`
    <media-menu class=${`vds-${p(n)}-menu vds-menu`}>
      ${X({label:o,hint:()=>{let e=a(),t=c.find(t=>t.value===e)?.label||``;return z(i,x(t)?t:t())}})}
      <media-menu-items class="vds-menu-items">
        ${St({value:a,options:c,onChange({detail:e}){a.set(e),s()}})}
      </media-menu-items>
    </media-menu>
  `}function Bt({label:n,checked:r,defaultChecked:i=!1,storageKey:a,onChange:o}){let{translations:s}=L(),c=e(!!((a?T.getItem(a):null)??i)),l=e(!1),u=N(fe(c)),d=U(s,n);a&&o(t(c)),r&&m(()=>void c.set(r()));function f(e){e?.button!==1&&(c.set(e=>!e),a&&T.setItem(a,c()?`1`:``),o(c(),e),l.set(!1))}function p(e){g(e)&&f()}function h(e){e.button===0&&l.set(!0)}return O`
    <div
      class="vds-menu-checkbox"
      role="menuitemcheckbox"
      tabindex="0"
      aria-label=${d}
      aria-checked=${u}
      data-active=${N(()=>l()?``:null)}
      @pointerup=${f}
      @pointerdown=${h}
      @keydown=${p}
    ></div>
  `}function Vt(){return N(()=>{let{translations:e}=L();return O`
      <media-menu class="vds-accessibility-menu vds-menu">
        ${X({label:()=>z(e,`Accessibility`),icon:`menu-accessibility`})}
        <media-menu-items class="vds-menu-items">
          ${[Y({children:[Ht(),Ut()]}),Y({children:[kt()]})]}
        </media-menu-items>
      </media-menu>
    `})}function Ht(){let{userPrefersAnnouncements:e,translations:t}=L(),n=`Announcements`;return xt({label:U(t,n),children:Bt({label:n,storageKey:`vds-player::announcements`,onChange(t){e.set(t)}})})}function Ut(){return N(()=>{let{translations:e,userPrefersKeyboardAnimations:t,noKeyboardAnimations:n}=L(),{viewType:r}=w();if(i(()=>r()!==`video`||n())())return null;let a=`Keyboard Animations`;return xt({label:U(e,a),children:Bt({label:a,defaultChecked:!0,storageKey:`vds-player::keyboard-animations`,onChange(e){t.set(e)}})})})}function Wt(){return N(()=>{let{noAudioGain:e,translations:t}=L(),{audioTrack:n,audioTracks:r,canSetAudioGain:a}=w();return i(()=>!(a()&&!e())&&r().length<=1)()?null:O`
      <media-menu class="vds-audio-menu vds-menu">
        ${X({label:()=>z(t,`Audio`),icon:`menu-audio`,hint:()=>n()?.label??``})}
        <media-menu-items class="vds-menu-items">
          ${[Gt(),Kt()]}
        </media-menu-items>
      </media-menu>
    `})}function Gt(){return N(()=>{let{translations:e}=L(),{audioTracks:t}=w(),n=U(e,`Default`);return i(()=>t().length<=1)()?null:Y({children:O`
        <media-menu class="vds-audio-tracks-menu vds-menu">
          ${X({label:()=>z(e,`Track`)})}
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
      `})})}function Kt(){return N(()=>{let{noAudioGain:e,translations:t}=L(),{canSetAudioGain:n}=w();if(i(()=>!n()||e())())return null;let{audioGain:r}=w();return Y({label:U(t,`Boost`),value:N(()=>Math.round(((r()??1)-1)*100)+`%`),children:[Et({upIcon:`menu-audio-boost-up`,downIcon:`menu-audio-boost-down`,children:qt(),isMin:()=>((r()??1)-1)*100<=Jt(),isMax:()=>((r()??1)-1)*100===Yt()})]})})}function qt(){let{translations:e}=L(),t=U(e,`Boost`),n=Jt,r=Yt,i=Xt;return O`
    <media-audio-gain-slider
      class="vds-audio-gain-slider vds-slider"
      aria-label=${t}
      min=${N(n)}
      max=${N(r)}
      step=${N(i)}
      key-step=${N(i)}
    >
      ${wt()}${Tt()}
    </media-audio-gain-slider>
  `}function Jt(){let{audioGains:e}=L(),t=e();return S(t)?t[0]??0:t.min}function Yt(){let{audioGains:e}=L(),t=e();return S(t)?t[t.length-1]??300:t.max}function Xt(){let{audioGains:e}=L(),t=e();return S(t)?t[1]-t[0]||25:t.step}function Zt(){return N(()=>{let{translations:e}=L(),{hasCaptions:t}=w(),n=U(e,`Off`);return t()?O`
      <media-menu class="vds-captions-menu vds-menu">
        ${X({label:()=>z(e,`Captions`),icon:`menu-captions`})}
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
    `:null})}function Qt(){return N(()=>{let{hideQualityBitrate:e,translations:t}=L(),{canSetQuality:n,qualities:r}=w();if(!n()||r().length<=1)return null;let i=U(t,`Auto`);return O`
      <media-menu class="vds-quality-menu vds-menu">
        ${X({label:()=>z(t,`Quality`),icon:`menu-quality-up`})}
        <media-menu-items class="vds-menu-items">
          <media-quality-radio-group
            class="vds-quality-radio-group vds-radio-group"
            auto-label=${i}
            ?hide-bitrate=${N(e)}
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
    `})}function $t(){return N(()=>{let{translations:e}=L(),{canSetPlaybackRate:t,playbackRate:n}=w();return t()?O`
      <media-menu class="vds-speed-menu vds-menu">
        ${X({label:()=>z(e,`Speed`),icon:`menu-speed-up`,hint:()=>n()===1?z(e,`Normal`):n()+`x`})}
        <media-menu-items class="vds-menu-items">
          ${Y({label:U(e,`Speed`),value:N(()=>n()===1?z(e,`Normal`):n()+`x`),children:Et({upIcon:`menu-font-size-up`,downIcon:`menu-font-size-down`,children:rn(),isMin:()=>n()===en(),isMax:()=>n()===tn()})})}
        </media-menu-items>
      </media-menu>
    `:null})}function en(){let{playbackRates:e}=L(),t=e();return S(t)?t[0]??0:t.min}function tn(){let{playbackRates:e}=L(),t=e();return S(t)?t[t.length-1]??2:t.max}function nn(){let{playbackRates:e}=L(),t=e();return S(t)?t[1]-t[0]||.25:t.step}function rn(){let{translations:e}=L(),t=U(e,`Speed`),n=en,r=tn,i=nn;return O`
    <media-speed-slider
      class="vds-speed-slider vds-slider"
      aria-label=${t}
      min=${N(n)}
      max=${N(r)}
      step=${N(i)}
      key-step=${N(i)}
    >
      ${wt()}${Tt()}
    </media-speed-slider>
  `}function an({placement:t,portal:n,tooltip:r}){return N(()=>{let{viewType:a}=w(),{translations:o,menuPortal:s,noModal:c,menuGroup:l,smallWhen:d}=L(),f=i(()=>c()?u(t):d()?null:u(t)),p=i(()=>!d()&&l()===`bottom`&&a()===`video`?26:0),m=e(!1);pt();function h(){m.set(!0)}function g(){m.set(!1)}let _=O`
      <media-menu-items
        class="vds-settings-menu-items vds-menu-items"
        placement=${N(f)}
        offset=${N(p)}
      >
        ${N(()=>m()?[$t(),Qt(),Vt(),Wt(),Zt()]:null)}
      </media-menu-items>
    `;return O`
      <media-menu class="vds-settings-menu vds-menu" @open=${h} @close=${g}>
        <media-tooltip class="vds-tooltip">
          <media-tooltip-trigger>
            <media-menu-button
              class="vds-menu-button vds-button"
              aria-label=${U(o,`Settings`)}
            >
              ${V(`menu-settings`,`vds-rotate-icon`)}
            </media-menu-button>
          </media-tooltip-trigger>
          <media-tooltip-content
            class="vds-tooltip-content"
            placement=${v(r)?N(r):r}
          >
            ${U(o,`Settings`)}
          </media-tooltip-content>
        </media-tooltip>
        ${n?tt(s,_):_}
      </media-menu>
    `})}function on({orientation:t,tooltip:n}){return N(()=>{let{pointer:r,muted:i,canSetVolume:a}=w();if(r()===`coarse`&&!i())return null;if(!a())return qe({tooltip:n});let o=e(void 0);return O`
      <div class="vds-volume" ?data-active=${N(oe(o))} ${I(o.set)}>
        ${qe({tooltip:n})}
        <div class="vds-volume-popup">${sn({orientation:t})}</div>
      </div>
    `})}function sn({orientation:e}={}){let{translations:t}=L();return O`
    <media-volume-slider
      class="vds-volume-slider vds-slider"
      aria-label=${U(t,`Volume`)}
      orientation=${je(e)}
    >
      <div class="vds-slider-track"></div>
      <div class="vds-slider-track-fill vds-slider-track"></div>
      <media-slider-preview class="vds-slider-preview" no-clamp>
        <media-slider-value class="vds-slider-value"></media-slider-value>
      </media-slider-preview>
      <div class="vds-slider-thumb"></div>
    </media-volume-slider>
  `}function cn(){let t=e(void 0),n=e(0),{thumbnails:r,translations:i,sliderChaptersMinWidth:a,disableTimeSlider:o,seekStep:s,noScrubGesture:c}=L(),l=U(i,`Seek`),u=N(o),d=N(()=>n()<a()),f=N(r);return se(t,()=>{let e=t();e&&n.set(e.clientWidth)}),O`
    <media-time-slider
      class="vds-time-slider vds-slider"
      aria-label=${l}
      key-step=${N(s)}
      ?disabled=${u}
      ?no-swipe-gesture=${N(c)}
      ${I(t.set)}
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
  `}function ln(){return O`
    <div class="vds-time-group">
      ${N(()=>{let{duration:e}=w();return e()?[O`<media-time class="vds-time" type="current"></media-time>`,O`<div class="vds-time-divider">/</div>`,O`<media-time class="vds-time" type="duration"></media-time>`]:null})}
    </div>
  `}function un(){return N(()=>{let{live:e,duration:t}=w();return e()?Qe():t()?O`<media-time class="vds-time" type="current" toggle remainder></media-time>`:null})}function dn(){return N(()=>{let{live:e}=w();return e()?Qe():ln()})}function fn(){return N(()=>{let{textTracks:t}=E(),{title:n,started:r}=w(),i=e(null);return ye(t,`chapters`,i.set),i()&&(r()||!n())?pn():O`<media-title class="vds-chapter-title"></media-title>`})}function pn(){return O`<media-chapter-title class="vds-chapter-title"></media-chapter-title>`}var mn=class extends Ve{async loadIcons(){let e=(await be(async()=>{let{icons:e}=await import(`./vidstack-BEi14iNw2-B-6GFLV3.js`);return{icons:e}},__vite__mapDeps([0,1]))).icons,t={};for(let n of Object.keys(e))t[n]=ze({name:n,paths:e[n]});return t}},hn=class extends R{static props={...super.props,when:({viewType:e})=>e===`audio`,smallWhen:({width:e})=>e<576}};function gn(){return[B(),et(),O`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[Ze({backward:!0,tooltip:`top start`}),G({tooltip:`top`}),Ze({tooltip:`top`}),_n(),cn(),un(),on({orientation:`vertical`,tooltip:`top`}),Je({tooltip:`top`}),$e(),W({tooltip:`top`}),vn()]}
        </media-controls-group>
      </media-controls>
    `]}function _n(){return N(()=>{let t=e(void 0),n=e(!1),r=E(),{title:i,started:a,currentTime:o,ended:s}=w(),{translations:l}=L(),u=ce(t),d=()=>a()||o()>0,f=()=>`${z(l,s()?`Replay`:d()?`Continue`:`Play`)}: ${i()}`;m(()=>{u()&&document.activeElement===document.body&&r.player.el?.focus({preventScroll:!0})});function p(){let e=t(),r=!!e&&!u()&&e.clientWidth<e.children[0].clientWidth;e&&c(e,`vds-marquee`,r),n.set(r)}function h(){return O`
        <span class="vds-title-text">
          ${N(f)}${N(()=>d()?pn():null)}
        </span>
      `}return se(t,p),i()?O`
          <span class="vds-title" title=${N(f)} ${I(t.set)}>
            ${[h(),N(()=>n()&&!u()?h():null)]}
          </span>
        `:K()})}function vn(){let e=`top end`;return[rt({tooltip:`top`,placement:e,portal:!0}),an({tooltip:`top end`,placement:e,portal:!0})]}var yn=class extends b(ge,hn){static tagName=`media-audio-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;#t=e(!1);onSetup(){this.forwardKeepAlive=!1,this.#e=E(),this.#r(),this.#a()}onConnect(){this.#r(),Ge(`audio`,()=>this.isMatch),this.#i()}render(){return N(this.#n.bind(this))}#n(){return this.isMatch?gn():null}#r(){this.classList.add(`vds-audio-layout`)}#i(){let{menuPortal:e}=L();m(()=>{if(!this.isMatch)return;let t=nt(this,this.menuContainer,`vds-audio-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new Re(n):new mn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#a(){let{pointer:e}=this.#e.$state;m(()=>{e()===`coarse`&&m(this.#o.bind(this))})}#o(){this.#t()?(C(this,`pointerdown`,e=>e.stopPropagation()),C(window,`pointerdown`,this.#c.bind(this))):C(this,`pointerdown`,this.#s.bind(this),{capture:!0})}#s(e){let{target:t}=e;le(t)&&t.closest(`.vds-time-slider`)&&(e.stopImmediatePropagation(),this.setAttribute(`data-scrubbing`,``),this.#t.set(!0))}#c(){this.#t.set(!1),this.removeAttribute(`data-scrubbing`)}},bn=A(class extends Te{constructor(){super(...arguments),this.key=D}render(e,t){return this.key=e,t}update(e,[t,n]){return t!==this.key&&(we(e),this.key=t),n}}),xn=class extends R{static props={...super.props,when:({viewType:e})=>e===`video`,smallWhen:({width:e,height:t})=>e<576||t<380}};function Sn(){return N(()=>{let t=E(),{noKeyboardAnimations:n,userPrefersKeyboardAnimations:r}=L();if(i(()=>n()||!r())())return null;let a=e(!1),{lastKeyboardAction:o}=t.$state;m(()=>{a.set(!!o());let e=setTimeout(()=>a.set(!1),500);return()=>{a.set(!1),window.clearTimeout(e)}});let s=i(()=>{let e=o()?.action;return e&&a()?p(e):null}),c=i(()=>`vds-kb-action${a()?``:` hidden`}`),l=i(Cn),u=i(()=>{let e=Tn();return e?de(e):null});function d(){let e=u();return e?O`
        <div class="vds-kb-bezel">
          <div class="vds-kb-icon">${e}</div>
        </div>
      `:null}return O`
      <div class=${N(c)} data-action=${N(s)}>
        <div class="vds-kb-text-wrapper">
          <div class="vds-kb-text">${N(l)}</div>
        </div>
        ${N(()=>bn(o(),d()))}
      </div>
    `})}function Cn(){let{$state:e}=E(),t=e.lastKeyboardAction()?.action,n=e.audioGain()??1;switch(t){case`toggleMuted`:return e.muted()?`0%`:wn(e.volume(),n);case`volumeUp`:case`volumeDown`:return wn(e.volume(),n);default:return``}}function wn(e,t){return`${Math.round(e*t*100)}%`}function Tn(){let{$state:e}=E();switch(e.lastKeyboardAction()?.action){case`togglePaused`:return e.paused()?`kb-pause-icon`:`kb-play-icon`;case`toggleMuted`:return e.muted()||e.volume()===0?`kb-mute-icon`:e.volume()>=.5?`kb-volume-up-icon`:`kb-volume-down-icon`;case`toggleFullscreen`:return`kb-fs-${e.fullscreen()?`enter`:`exit`}-icon`;case`togglePictureInPicture`:return`kb-pip-${e.pictureInPicture()?`enter`:`exit`}-icon`;case`toggleCaptions`:return e.hasCaptions()?`kb-cc-${e.textTrack()?`on`:`off`}-icon`:null;case`volumeUp`:return`kb-volume-up-icon`;case`volumeDown`:return`kb-volume-down-icon`;case`seekForward`:return`kb-seek-forward-icon`;case`seekBackward`:return`kb-seek-backward-icon`;default:return null}}function En(){return[B(),Mn(),Q(),Sn(),et(),O`<div class="vds-scrim"></div>`,O`
      <media-controls class="vds-controls">
        ${[On(),K(),O`<media-controls-group class="vds-controls-group"></media-controls-group>`,K(),O`
            <media-controls-group class="vds-controls-group">
              ${cn()}
            </media-controls-group>
          `,O`
            <media-controls-group class="vds-controls-group">
              ${[G({tooltip:`top start`}),on({orientation:`horizontal`,tooltip:`top`}),dn(),fn(),Je({tooltip:`top`}),Dn(),W({tooltip:`top`}),Ke({tooltip:`top`}),$e(),Ye(),Xe({tooltip:`top end`})]}
            </media-controls-group>
          `]}
      </media-controls>
    `]}function Dn(){return N(()=>{let{menuGroup:e}=L();return e()===`bottom`?$():null})}function On(){return O`
    <media-controls-group class="vds-controls-group">
      ${N(()=>{let{menuGroup:e}=L();return e()===`top`?[K(),$()]:null})}
    </media-controls-group>
  `}function kn(){return[B(),Mn(),Q(),et(),Sn(),O`<div class="vds-scrim"></div>`,O`
      <media-controls class="vds-controls">
        <media-controls-group class="vds-controls-group">
          ${[W({tooltip:`top start`}),Ke({tooltip:`bottom start`}),K(),Je({tooltip:`bottom`}),$e(),$(),on({orientation:`vertical`,tooltip:`bottom end`})]}
        </media-controls-group>

        ${K()}

        <media-controls-group class="vds-controls-group" style="pointer-events: none;">
          ${[K(),G({tooltip:`top`}),K()]}
        </media-controls-group>

        ${K()}

        <media-controls-group class="vds-controls-group">
          ${[dn(),fn(),Xe({tooltip:`top end`})]}
        </media-controls-group>

        <media-controls-group class="vds-controls-group">
          ${cn()}
        </media-controls-group>
      </media-controls>
    `,jn()]}function An(){return O`
    <div class="vds-load-container">
      ${[Q(),G({tooltip:`top`})]}
    </div>
  `}function jn(){return N(()=>{let{duration:e}=w();return e()===0?null:O`
      <div class="vds-start-duration">
        <media-time class="vds-time" type="duration"></media-time>
      </div>
    `})}function Q(){return O`
    <div class="vds-buffering-indicator">
      <media-spinner class="vds-buffering-spinner"></media-spinner>
    </div>
  `}function $(){let{menuGroup:e,smallWhen:t}=L(),n=()=>e()===`top`||t()?`bottom`:`top`,r=i(()=>`${n()} ${e()===`top`?`end`:`center`}`),a=i(()=>`${n()} end`);return[rt({tooltip:r,placement:a,portal:!0}),an({tooltip:r,placement:a,portal:!0})]}function Mn(){return N(()=>{let{noGestures:e}=L();return e()?null:O`
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
    `})}var Nn=class extends b(ge,xn){static tagName=`media-video-layout`;static attrs={smallWhen:{converter(e){return e!==`never`&&!!e}}};#e;onSetup(){this.forwardKeepAlive=!1,this.#e=E(),this.#t()}onConnect(){this.#t(),Ge(`video`,()=>this.isMatch),this.#n()}render(){return N(this.#r.bind(this))}#t(){this.classList.add(`vds-video-layout`)}#n(){let{menuPortal:e}=L();m(()=>{if(!this.isMatch)return;let t=nt(this,this.menuContainer,`vds-video-layout`,()=>this.isSmallLayout),n=t?[this,t]:[this];return(this.$props.customIcons()?new Re(n):new mn(n)).connect(),e.set(t),()=>{t.remove(),e.set(null)}})}#r(){let{load:e}=this.#e.$props,{canLoad:t,streamType:n,nativeControls:r}=this.#e.$state;return!r()&&this.isMatch?e()===`play`&&!t()?An():n()===`unknown`?Q():this.isSmallLayout?kn():En():null}};h(yn),h(Nn);