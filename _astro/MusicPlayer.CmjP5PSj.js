import{o as Lt,a as _t,p as et,b as F,g as Nt,s as H,d as zt}from"./disclose-version.x0avWqeP.js";import{i as Kt}from"./legacy.BjYMrsBj.js";import{an as jt,E as Xt,bq as Ot,br as Wt,o as Ut,u as qt,bs as Yt,bt as Gt,$ as Qt,bp as ot,bu as Dt,c as it,aa as mt,p as pt,d as v,g as n,e as _,r as d,a as C,b as nt,s as lt,f as E,ad as ut,ae as rt,t as R,a6 as J,a9 as D,af as ft,m as Jt,ab as Zt,bv as $t,am as te,Q as ht}from"./utils.rgxtgsju.js";import{a as ee,s as O}from"./render.CzXsKnqY.js";import{i as B}from"./if.DmcWQ1pC.js";import{I as V}from"./Icon.Cj4FlseJ.js";import{m as xt}from"./musicConfig.BhOHVN07.js";import"./navBarConfig.DhxDCSZI.js";import{m as x}from"./musicPlayerStore.B6RioqTZ.js";import{S as re,a as ie,b as ne,c as ae,d as oe,C as wt,P as le,e as se,N as ue}from"./SidebarTrackInfo.Bd_HWO_e.js";import{I as $}from"./zh_TW.vPeSsvua.js";import{i as tt}from"./translation.Cy1isCvR.js";import{s as ce}from"./snippet.Iwhhp99k.js";import{a as de}from"./actions.BoGPqx9Y.js";import{e as Pt,i as Ct}from"./each.C2X2S7zn.js";const ge=()=>performance.now(),Q={tick:r=>requestAnimationFrame(r),now:()=>ge(),tasks:new Set};function Rt(){const r=Q.now();Q.tasks.forEach(t=>{t.c(r)||(Q.tasks.delete(t),t.f())}),Q.tasks.size!==0&&Q.tick(Rt)}function ve(r){let t;return Q.tasks.size===0&&Q.tick(Rt),{promise:new Promise(e=>{Q.tasks.add(t={c:r,f:e})}),abort(){Q.tasks.delete(t)}}}function vt(r,t){Dt(()=>{r.dispatchEvent(new CustomEvent(t))})}function me(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const t=r.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function St(r){const t={},e=r.split(";");for(const o of e){const[a,l]=o.split(":");if(!a||l===void 0)break;const y=me(a.trim());t[y]=l.trim()}return t}const fe=r=>r;function Vt(r,t,e,o){var a=(r&Yt)!==0,l="both",y,m=t.inert,P=t.style.overflow,i,s;function c(){return Dt(()=>y??=e()(t,o?.()??{},{direction:l}))}var b={is_global:a,in(){t.inert=m,i=kt(t,c(),s,1,()=>{vt(t,"introstart")},()=>{vt(t,"introend"),i?.abort(),i=y=void 0,t.style.overflow=P})},out(w){t.inert=!0,s=kt(t,c(),i,0,()=>{vt(t,"outrostart")},()=>{vt(t,"outroend"),w?.()})},stop:()=>{i?.abort(),s?.abort()}},p=jt;if((p.nodes.t??=[]).push(b),ee){var h=a;if(!h){for(var u=p.parent;u&&(u.f&Xt)!==0;)for(;(u=u.parent)&&(u.f&Ot)===0;);h=!u||(u.f&Wt)!==0}h&&Ut(()=>{qt(()=>b.in())})}}function kt(r,t,e,o,a,l){var y=o===1;if(Gt(t)){var m,P=!1;return Qt(()=>{if(!P){var f=t({direction:y?"in":"out"});m=kt(r,f,e,o,a,l)}}),{abort:()=>{P=!0,m?.abort()},deactivate:()=>m.deactivate(),reset:()=>m.reset(),t:()=>m.t()}}if(e?.deactivate(),!t?.duration&&!t?.delay)return a(),l(),{abort:ot,deactivate:ot,reset:ot,t:()=>o};const{delay:i=0,css:s,tick:c,easing:b=fe}=t;var p=[];if(y&&e===void 0&&(c&&c(0,1),s)){var h=St(s(0,1));p.push(h,h)}var u=()=>1-o,w=r.animate(p,{duration:i,fill:"forwards"});return w.onfinish=()=>{w.cancel(),a();var f=e?.t()??1-o;e?.abort();var I=o-f,k=t.duration*Math.abs(I),g=[];if(k>0){var T=!1;if(s)for(var M=Math.ceil(k/16.666666666666668),N=0;N<=M;N+=1){var at=f+I*b(N/M),K=St(s(at,1-at));g.push(K),T||=K.overflow==="hidden"}T&&(r.style.overflow="hidden"),u=()=>{var W=w.currentTime;return f+I*b(W/k)},c&&ve(()=>{if(w.playState!=="running")return!1;var W=u();return c(W,1-W),!0})}w=r.animate(g,{duration:k,fill:"forwards"}),w.onfinish=()=>{u=()=>o,c?.(o,1-o),l()}},{abort:()=>{w&&(w.cancel(),w.effect=null,w.onfinish=ot)},deactivate:()=>{l=ot},reset:()=>{o===0&&c?.(1,0)},t:()=>u()}}function be(r){const t=r-1;return t*t*t+1}function Ht(r){const t=r-1;return t*t*t+1}function Tt(r){const t=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[r,"px"]}function ye(r,{delay:t=0,duration:e=400,easing:o=Ht,x:a=0,y:l=0,opacity:y=0}={}){const m=getComputedStyle(r),P=+m.opacity,i=m.transform==="none"?"":m.transform,s=P*(1-y),[c,b]=Tt(a),[p,h]=Tt(l);return{delay:t,duration:e,easing:o,css:(u,w)=>`
			transform: ${i} translate(${(1-u)*c}${b}, ${(1-u)*p}${h});
			opacity: ${P-s*w}`}}function he(r,{delay:t=0,duration:e=400,easing:o=Ht,axis:a="y"}={}){const l=getComputedStyle(r),y=+l.opacity,m=a==="y"?"height":"width",P=parseFloat(l[m]),i=a==="y"?["top","bottom"]:["left","right"],s=i.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),c=parseFloat(l[`padding${s[0]}`]),b=parseFloat(l[`padding${s[1]}`]),p=parseFloat(l[`margin${s[0]}`]),h=parseFloat(l[`margin${s[1]}`]),u=parseFloat(l[`border${s[0]}Width`]),w=parseFloat(l[`border${s[1]}Width`]);return{delay:t,duration:e,easing:o,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*y};${m}: ${f*P}px;padding-${i[0]}: ${f*c}px;padding-${i[1]}: ${f*b}px;margin-${i[0]}: ${f*p}px;margin-${i[1]}: ${f*h}px;border-${i[0]}-width: ${f*u}px;border-${i[1]}-width: ${f*w}px;min-${m}: 0`}}var xe=E('<div class="fab-music-panel card-base shadow-xl rounded-2xl p-4 w-[20rem] max-w-[80vw] svelte-1lty5dg"><div class="fab-music-header svelte-1lty5dg"><!> <!></div> <!> <!> <!></div>');function pe(r,t){it(t,!0);let e=mt(pt(x.getState())),o=mt(!1);function a(T){const M=T;M.detail&&lt(e,M.detail,!0)}Lt(()=>{window.addEventListener("music-sidebar:state",a)}),_t(()=>{typeof window<"u"&&window.removeEventListener("music-sidebar:state",a)});function l(){x.toggle()}function y(){x.prev()}function m(){x.next()}function P(){x.toggleMode()}function i(){lt(o,!n(o))}function s(T){x.playIndex(T)}function c(T){x.seek(T)}function b(){x.toggleMute()}function p(T){x.setVolume(T)}var h=xe(),u=v(h),w=v(u);re(w,{get currentSong(){return n(e).currentSong},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading}});var f=_(w,2);ie(f,{get currentSong(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get volume(){return n(e).volume},get isMuted(){return n(e).isMuted},onToggleMute:b,onSetVolume:p}),d(u);var I=_(u,2);ne(I,{get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},onSeek:c});var k=_(I,2);ae(k,{get isPlaying(){return n(e).isPlaying},get isShuffled(){return n(e).isShuffled},get repeatMode(){return n(e).isRepeating},onToggleMode:P,onPrev:y,onNext:m,onTogglePlay:l,onTogglePlaylist:i});var g=_(k,2);oe(g,{get playlist(){return n(e).playlist},get currentIndex(){return n(e).currentIndex},get isPlaying(){return n(e).isPlaying},get show(){return n(o)},onClose:i,onPlaySong:s}),d(h),C(r,h),nt()}var we=E('<div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div>'),ke=E('<div class="text-xs text-30 mt-1"> </div>'),_e=E('<div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <!></div>');function Et(r,t){it(t,!0);const e=et(t,"showTime",3,!1),o=et(t,"size",3,"mini");function a(i){if(!Number.isFinite(i)||i<0)return"0:00";const s=Math.floor(i/60),c=Math.floor(i%60);return`${s}:${c.toString().padStart(2,"0")}`}var l=ut(),y=rt(l);{var m=i=>{var s=we(),c=v(s),b=v(c,!0);d(c);var p=_(c,2),h=v(p,!0);d(p),d(s),R(()=>{O(b,t.song.title),O(h,t.song.artist)}),C(i,s)},P=i=>{var s=_e(),c=v(s),b=v(c,!0);d(c);var p=_(c,2),h=v(p,!0);d(p);var u=_(p,2);{var w=f=>{var I=ke(),k=v(I);d(I),R((g,T)=>O(k,`${g??""} / ${T??""}`),[()=>a(t.currentTime),()=>a(t.duration)]),C(f,I)};B(u,f=>{e()&&f(w)})}d(s),R(()=>{O(b,t.song.title),O(h,t.song.artist)}),C(i,s)};B(y,i=>{o()==="mini"?i(m):i(P,-1)})}C(r,l),nt()}var Pe=E('<!> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><!></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div>',1),Ce=E('<div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div>'),Se=E("<!> <!> <!>",1),Te=E("<div><!></div>");function Bt(r,t){it(t,!0);const e=et(t,"size",3,"mini"),o=et(t,"showControls",3,!1),a=et(t,"showPlaylist",3,!1);var l=Te(),y=v(l);{var m=i=>{var s=Pe(),c=rt(s);wt(c,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",interactive:!0,get onclick(){return t.onCoverClick}});var b=_(c,2),p=v(b);Et(p,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},size:"mini"}),d(b);var h=_(b,2),u=v(h),w=v(u);V(w,{icon:"material-symbols:visibility-off",class:"text-lg"}),d(u);var f=_(u,2),I=v(f);V(I,{icon:"material-symbols:expand-less",class:"text-lg"}),d(f),d(h),R((k,g)=>{H(b,"aria-label",k),H(u,"title",g)},[()=>tt($.musicPlayerExpand),()=>tt($.musicPlayerHide)]),D("click",b,function(...k){t.onInfoClick?.apply(this,k)}),D("keydown",b,k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),t.onInfoClick?.())}),D("click",u,k=>{k.stopPropagation(),t.onHideClick?.()}),D("click",f,k=>{k.stopPropagation(),t.onExpandClick?.()}),C(i,s)},P=i=>{var s=Se(),c=rt(s);wt(c,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded"});var b=_(c,2);Et(b,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},showTime:!0,size:"expanded"});var p=_(b,2);{var h=u=>{var w=Ce(),f=v(w),I=v(f);V(I,{icon:"material-symbols:visibility-off",class:"text-lg"}),d(f);var k=_(f,2);let g;var T=v(k);V(T,{icon:"material-symbols:queue-music",class:"text-lg"}),d(k),d(w),R((M,N)=>{H(f,"title",M),g=F(k,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,g,{"text-[var(--primary)]":a()}),H(k,"title",N)},[()=>tt($.musicPlayerHide),()=>tt($.musicPlayerPlaylist)]),D("click",f,function(...M){t.onHideClick?.apply(this,M)}),D("click",k,function(...M){t.onPlaylistClick?.apply(this,M)}),C(u,w)};B(p,u=>{o()&&u(h)})}C(i,s)};B(y,i=>{e()==="mini"?i(m):i(P,-1)})}d(l),R(()=>F(l,1,Nt(e()==="mini"?"flex items-center gap-3 mb-0":"flex items-center gap-4 mb-4"))),C(r,l),nt()}J(["click","keydown"]);var Ee=E("<div><!></div>");function Me(r,t){var e=Ee();let o;var a=v(e);Bt(a,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",get onCoverClick(){return t.onCoverClick},get onInfoClick(){return t.onInfoClick},get onHideClick(){return t.onHideClick},get onExpandClick(){return t.onExpandClick}}),d(e),R(()=>o=F(e,1,"mini-player card-base shadow-xl rounded-2xl p-3 absolute bottom-0 right-0 w-[17.5rem] svelte-g9ac72",null,o,{"mini-enter":!t.isHidden,"mini-leave":t.isHidden,"pointer-events-none":t.isHidden})),C(r,e)}var Mt=E("<button><!></button>");function It(r,t){const e=et(t,"repeatMode",3,0),o=et(t,"disabled",3,!1);var a=ut(),l=rt(a);{var y=P=>{var i=Mt();let s;var c=v(i);V(c,{icon:"material-symbols:shuffle",class:"text-lg"}),d(i),R(()=>{s=F(i,1,"w-10 h-10 rounded-lg",null,s,{"btn-regular":t.isActive,"btn-plain":!t.isActive}),i.disabled=o()}),D("click",i,function(...b){t.onclick?.apply(this,b)}),C(P,i)},m=P=>{var i=Mt();let s;var c=v(i);{var b=u=>{V(u,{icon:"material-symbols:repeat-one",class:"text-lg"})},p=u=>{V(u,{icon:"material-symbols:repeat",class:"text-lg"})},h=u=>{V(u,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};B(c,u=>{e()===1?u(b):e()===2?u(p,1):u(h,-1)})}d(i),R(()=>s=F(i,1,"w-10 h-10 rounded-lg",null,s,{"btn-regular":t.isActive,"btn-plain":!t.isActive})),D("click",i,function(...u){t.onclick?.apply(this,u)}),C(P,i)};B(l,P=>{t.mode==="shuffle"?P(y):P(m,-1)})}C(r,a)}J(["click"]);var Ie=E('<div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <!> <!> <!></div>');function Le(r,t){var e=Ie(),o=v(e);It(o,{mode:"shuffle",get isActive(){return t.isShuffled},get onclick(){return t.onShuffleClick}});var a=_(o,2);le(a,{get onclick(){return t.onPrevClick},disabled:!1});var l=_(a,2);se(l,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get onclick(){return t.onPlayClick}});var y=_(l,2);ue(y,{get onclick(){return t.onNextClick},disabled:!1});var m=_(y,2);{let P=ft(()=>t.isRepeating>0);It(m,{mode:"repeat",get isActive(){return n(P)},get repeatMode(){return t.isRepeating},get onclick(){return t.onRepeatClick}})}d(e),C(r,e)}var ze=E('<div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>');function De(r,t){it(t,!0);var e=ze(),o=v(e);d(e),R(a=>{H(e,"aria-label",a),H(e,"aria-valuenow",t.duration>0?t.currentTime/t.duration*100:0),zt(o,`width: ${t.duration>0?t.currentTime/t.duration*100:0}%`)},[()=>tt($.musicPlayerProgress)]),D("click",e,function(...a){t.onclick?.apply(this,a)}),D("keydown",e,function(...a){t.onkeydown?.apply(this,a)}),C(r,e),nt()}J(["click","keydown"]);var Re=E('<div class="progress-section mb-4"><!></div>');function Ve(r,t){var e=Re(),o=v(e);De(o,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onclick(){return t.onProgressClick},get onkeydown(){return t.onProgressKeyDown}}),d(e),C(r,e)}var He=E('<button class="btn-plain w-8 h-8 rounded-lg"><!></button>');function Be(r,t){var e=He(),o=v(e);{var a=m=>{V(m,{icon:"material-symbols:volume-off",class:"text-lg"})},l=m=>{V(m,{icon:"material-symbols:volume-down",class:"text-lg"})},y=m=>{V(m,{icon:"material-symbols:volume-up",class:"text-lg"})};B(o,m=>{t.isMuted||t.volume===0?m(a):t.volume<.5?m(l,1):m(y,-1)})}d(e),D("click",e,function(...m){t.onclick?.apply(this,m)}),C(r,e)}J(["click"]);var Ae=E('<div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div>');function Fe(r,t){var e=Ae(),o=v(e);let a;d(e),de(e,l=>t.volumeBarRef?.(l)),R(()=>{H(e,"aria-label",t.ariaLabel),H(e,"aria-valuenow",t.volume*100),a=F(o,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,a,{"duration-100":!t.isVolumeDragging,"duration-0":t.isVolumeDragging}),zt(o,`width: ${t.volume*100}%`)}),D("pointerdown",e,function(...l){t.onpointerdown?.apply(this,l)}),D("keydown",e,function(...l){t.onkeydown?.apply(this,l)}),C(r,e)}J(["pointerdown","keydown"]);var Ne=E('<div class="bottom-controls flex items-center gap-2"><!> <!> <!></div>');function Ke(r,t){var e=Ne(),o=v(e);Be(o,{get volume(){return t.volume},get isMuted(){return t.isMuted},get onclick(){return t.onVolumeButtonClick}});var a=_(o,2);{let y=ft(()=>t.isMuted?0:t.volume);Fe(a,{get volume(){return n(y)},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onpointerdown(){return t.onSliderPointerDown},get onkeydown(){return t.onSliderKeyDown},get ariaLabel(){return t.ariaLabel}})}var l=_(a,2);ce(l,()=>t.children??ot),d(e),C(r,e)}var je=E('<button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button>'),Xe=E("<div><!> <!> <!> <!></div>");function Oe(r,t){it(t,!0);var e=Xe();let o;var a=v(e);Bt(a,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded",showControls:!0,get showPlaylist(){return t.showPlaylist},get onHideClick(){return t.onHideClick},get onPlaylistClick(){return t.onPlaylistClick}});var l=_(a,2);Ve(l,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onProgressClick(){return t.onProgressClick},get onProgressKeyDown(){return t.onProgressKeyDown}});var y=_(l,2);Le(y,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get isShuffled(){return t.isShuffled},get isRepeating(){return t.isRepeating},get onPlayClick(){return t.onPlayClick},get onPrevClick(){return t.onPrevClick},get onNextClick(){return t.onNextClick},get onShuffleClick(){return t.onShuffleClick},get onRepeatClick(){return t.onRepeatClick}});var m=_(y,2);{let P=ft(()=>tt($.musicPlayerVolume));Ke(m,{get volume(){return t.volume},get isMuted(){return t.isMuted},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onVolumeButtonClick(){return t.onVolumeButtonClick},get onSliderPointerDown(){return t.onSliderPointerDown},get onSliderKeyDown(){return t.onSliderKeyDown},get ariaLabel(){return n(P)},children:(i,s)=>{var c=je(),b=v(c);V(b,{icon:"material-symbols:expand-more",class:"text-lg"}),d(c),R(p=>H(c,"title",p),[()=>tt($.musicPlayerCollapse)]),D("click",c,function(...p){t.onCollapseClick?.apply(this,p)}),C(i,c)}})}d(e),R(()=>o=F(e,1,"expanded-player card-base shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out absolute bottom-0 right-0 w-80",null,o,{"opacity-0":t.isHidden,"scale-95":t.isHidden,"pointer-events-none":t.isHidden})),C(r,e),nt()}J(["click"]);var We=E('<span class="text-sm text-[var(--content-meta)]"> </span>'),Ue=E('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img decoding="async" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>');function qe(r,t){it(t,!0);const e=et(t,"lazy",3,!0);function o(g){return g.startsWith("http://")||g.startsWith("https://")||g.startsWith("/")?g:`/${g}`}var a=Ue();let l;var y=v(a),m=v(y);{var P=g=>{V(g,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},i=g=>{V(g,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},s=g=>{var T=We(),M=v(T,!0);d(T),R(()=>O(M,t.index+1)),C(g,T)};B(m,g=>{t.isCurrent&&t.isPlaying?g(P):t.isCurrent?g(i,1):g(s,-1)})}d(y);var c=_(y,2),b=v(c);d(c);var p=_(c,2),h=v(p);let u;var w=v(h,!0);d(h);var f=_(h,2);let I;var k=v(f,!0);d(f),d(p),d(a),R(g=>{l=F(a,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,l,{"bg-[var(--btn-plain-bg)]":t.isCurrent,"text-[var(--primary)]":t.isCurrent}),H(a,"aria-label",`播放 ${t.song.title??""} - ${t.song.artist??""}`),H(b,"src",g),H(b,"alt",t.song.title),H(b,"loading",e()?"lazy":"eager"),u=F(h,1,"font-medium truncate",null,u,{"text-[var(--primary)]":t.isCurrent,"text-90":!t.isCurrent}),O(w,t.song.title),I=F(f,1,"text-sm text-[var(--content-meta)] truncate",null,I,{"text-[var(--primary)]":t.isCurrent}),O(k,t.song.artist)},[()=>o(t.song.cover)]),D("click",a,function(...g){t.onclick?.apply(this,g)}),D("keydown",a,g=>{(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),t.onclick())}),C(r,a),nt()}J(["click","keydown"]);var Ye=E("<button> </button>"),Ge=E('<div class="playlist-tabs svelte-1v267om"></div>'),Qe=E('<div class="playlist-panel card-base-transparent fixed bottom-70 right-4 w-80 max-h-96 overflow-hidden z-50 svelte-1v267om"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar" role="presentation"><!> <!></div></div>');function Je(r,t){it(t,!0);let e=mt(pt(x.getPlaylistInfo())),o=mt(pt(x.getState().currentPlaylistIndex));const a=x.subscribePlaylistInfo((i,s)=>{lt(e,i,!0),lt(o,s,!0)});_t(()=>{a()});async function l(i){await x.switchPlaylist(i),lt(o,x.getState().currentPlaylistIndex,!0)}var y=ut(),m=rt(y);{var P=i=>{var s=Qe(),c=v(s),b=v(c),p=v(b,!0);d(b);var h=_(b,2),u=v(h);V(u,{icon:"material-symbols:close",class:"text-lg"}),d(h),d(c);var w=_(c,2),f=v(w);{var I=g=>{var T=Ge();Pt(T,21,()=>n(e),Ct,(M,N,at)=>{var K=Ye();let W;var bt=v(K,!0);d(K),R(()=>{W=F(K,1,"playlist-tab svelte-1v267om",null,W,{active:at===n(o)}),H(K,"title",n(N).name),O(bt,n(N).name)}),D("click",K,()=>l(at)),C(M,K)}),d(T),C(g,T)};B(f,g=>{n(e).length>1&&g(I)})}var k=_(f,2);Pt(k,17,()=>t.playlist,Ct,(g,T,M)=>{{let N=ft(()=>M===t.currentIndex);qe(g,{get song(){return n(T)},index:M,get isCurrent(){return n(N)},get isPlaying(){return t.isPlaying},onclick:()=>t.onPlaySong(M),lazy:M!==0})}}),d(w),d(s),R(g=>O(p,g),[()=>tt($.musicPlayerPlaylist)]),D("click",h,function(...g){t.onClose?.apply(this,g)}),Vt(3,s,()=>he,()=>({duration:300,axis:"y"})),C(i,s)};B(m,i=>{t.show&&i(P)})}C(r,y),nt()}J(["click"]);var Ze=E('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),$e=E('<div class="music-player-fab-anchor fixed z-[55]"><div class="music-player-fab-shell"><!></div></div>'),tr=E("<div><div><!></div> <!> <!> <!></div>"),er=E(`<!> <!> <style>.music-player-fab-anchor {
			right: var(--fab-group-right, 1.5rem);
			bottom: calc(
				var(--fab-group-bottom, 10rem) +
					(
						var(--fab-button-size, 3rem) *
							var(--fab-visible-count, 1)
					) +
					(
						var(--fab-group-gap, 0.5rem) *
							(var(--fab-visible-count, 1) - 1)
					)
			);
			width: 0;
			height: 0;
			pointer-events: none;
		}

		.music-player-fab-shell {
			position: absolute;
			right: 0;
			bottom: 0.75rem;
			transform-origin: bottom right;
			pointer-events: auto;
			will-change: transform, opacity;
		}

		.orb-player-container {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		.orb-enter {
			animation: orbElasticIn 460ms cubic-bezier(0.22, 1.25, 0.36, 1)
				forwards;
		}

		.orb-leave {
			animation: orbElasticOut 360ms cubic-bezier(0.4, 0, 1, 1) forwards;
		}

		@keyframes orbElasticIn {
			0% {
				opacity: 0;
				transform: translateX(0) scale(0.55);
			}
			70% {
				opacity: 1;
				transform: translateX(0) scale(1.12);
			}
			100% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
		}

		@keyframes orbElasticOut {
			0% {
				opacity: 1;
				transform: translateX(0) scale(1);
			}
			100% {
				opacity: 0;
				transform: translateX(0) scale(0.6);
			}
		}

		.music-player.hidden-mode {
			width: 3rem;
			height: 3rem;
		}

		.music-player {
			width: 20rem;
			max-width: 20rem;
			min-width: 20rem;
			user-select: none;
		}

		:global(.mini-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.expanded-player) {
			position: absolute;
			bottom: 0;
			right: 0;
		}

		:global(.orb-player) {
			position: relative;
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}

		:global(.orb-player::before) {
			content: "";
			position: absolute;
			inset: -0.125rem;
			background: linear-gradient(
				45deg,
				var(--primary),
				transparent,
				var(--primary)
			);
			border-radius: 50%;
			z-index: -1;
			opacity: 0;
			transition: opacity 0.3s ease;
		}

		:global(.orb-player:hover::before) {
			opacity: 0.3;
			animation: rotate 2s linear infinite;
		}

		:global(.orb-player .animate-pulse) {
			animation: musicWave 1.5s ease-in-out infinite;
		}

		@keyframes rotate {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		@keyframes musicWave {
			0%,
			100% {
				transform: scaleY(0.5);
			}
			50% {
				transform: scaleY(1);
			}
		}

		:global(.animate-pulse) {
			animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
		}

		@keyframes pulse {
			0%,
			100% {
				opacity: 1;
			}
			50% {
				opacity: 0.5;
			}
		}

		:global(.progress-section div:hover),
		:global(.bottom-controls > div:hover) {
			transform: scaleY(1.2);
			transition: transform 0.2s ease;
		}

		@media (max-width: 768px) {
			.music-player-fab-anchor {
				right: var(--fab-group-right, 0.75rem) !important;
				bottom: calc(
					var(--fab-group-bottom, 5rem) +
						(
							var(--fab-button-size, 2.75rem) *
								var(--fab-visible-count, 1)
						) +
						(
							var(--fab-group-gap, 0.5rem) *
								(var(--fab-visible-count, 1) - 1)
						)
				) !important;
			}

			.music-player-fab-shell {
				right: 0 !important;
				bottom: 0.75rem !important;
			}

			.music-player {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				bottom: 0.5rem !important;
				right: 0.5rem !important;
			}
			:global(.mini-player) {
				width: 280px !important;
			}
			:global(.expanded-player) {
				width: 280px !important;
				max-width: 280px !important;
			}
			.music-player.expanded {
				width: 280px !important;
				min-width: 280px !important;
				max-width: 280px !important;
				right: 0.5rem !important;
			}
			:global(.playlist-panel) {
				width: 280px !important;
				right: 0.5rem !important;
				max-width: 280px !important;
			}
			:global(.controls) {
				gap: 8px;
			}
			:global(.controls button) {
				width: 36px;
				height: 36px;
			}
			:global(.controls button:nth-child(3)) {
				width: 44px;
				height: 44px;
			}
		}

		@media (max-width: 480px) {
			.music-player-fab-anchor {
				right: var(--fab-group-right, 0.5rem) !important;
				bottom: calc(
					var(--fab-group-bottom, 4.5rem) +
						(
							var(--fab-button-size, 2.5rem) *
								var(--fab-visible-count, 1)
						) +
						(
							var(--fab-group-gap, 0.5rem) *
								(var(--fab-visible-count, 1) - 1)
						)
				) !important;
			}

			.music-player-fab-shell {
				right: 0 !important;
				bottom: 0.75rem !important;
			}

			.music-player {
				width: 260px !important;
				min-width: 260px !important;
				max-width: 260px !important;
			}
			:global(.expanded-player) {
				width: 260px !important;
				max-width: 260px !important;
			}
			:global(.playlist-panel) {
				width: 260px !important;
				max-width: 260px !important;
				right: 0.5rem !important;
			}
			:global(.song-title) {
				font-size: 14px;
			}
			:global(.song-artist) {
				font-size: 12px;
			}
			:global(.controls) {
				gap: 6px;
				margin-bottom: 12px;
			}
			:global(.controls button) {
				width: 32px;
				height: 32px;
			}
			:global(.controls button:nth-child(3)) {
				width: 40px;
				height: 40px;
			}
			:global(.playlist-item) {
				padding: 8px 12px;
			}
			:global(.playlist-item .w-10) {
				width: 32px;
				height: 32px;
			}
		}

		@keyframes slide-up {
			from {
				transform: translateY(100%);
				opacity: 0;
			}
			to {
				transform: translateY(0);
				opacity: 1;
			}
		}

		.animate-slide-up {
			animation: slide-up 0.3s ease-out;
		}

		@media (hover: none) and (pointer: coarse) {
			:global(.music-player button),
			:global(.playlist-item) {
				min-height: 44px;
			}
			:global(.progress-section > div),
			:global(.bottom-controls > div:nth-child(2)) {
				height: 12px;
			}
		}

		@keyframes spin-continuous {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}

		:global(.cover-container img) {
			animation: spin-continuous 3s linear infinite;
			animation-play-state: paused;
		}

		:global(.cover-container img.spinning) {
			animation-play-state: running;
		}

		:global(button.bg-\\\\[var\\\\(--primary\\\\)\\\\]) {
			box-shadow: 0 0 0 2px var(--primary);
			border: none;
		}</style>`,1);function yr(r,t){it(t,!1);let e=Jt(x.getState());const o=xt.showFloatingPlayer,l=(xt.floatingEntryMode??"default")==="fab",y=o&&xt.enable;let m;function P(){x.toggle()}function i(){x.prev()}function s(){x.next()}function c(){x.toggleShuffle()}function b(){x.toggleRepeat()}function p(S){x.playIndex(S)}function h(S){const L=S.currentTarget;if(!L)return;const Y=L.getBoundingClientRect(),U=(S.clientX-Y.left)/Y.width;x.setProgress(U)}function u(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),x.setProgress(.5))}function w(){x.toggleMute()}function f(){x.toggleMute()}function I(S){const L=S.currentTarget;if(!L)return;const Y=z=>{const j=L.getBoundingClientRect();if(j.width<=0)return;const X=Math.max(0,Math.min(1,(z-j.left)/j.width));x.setVolume(X)};Y(S.clientX);const U=S.pointerId;L.setPointerCapture(U);const ct=z=>{z.pointerId===U&&Y(z.clientX)},dt=()=>{L.removeEventListener("pointermove",ct),L.removeEventListener("pointerup",gt),L.removeEventListener("pointercancel",A),L.hasPointerCapture(U)&&L.releasePointerCapture(U)},gt=z=>{z.pointerId===U&&(Y(z.clientX),dt())},A=z=>{z.pointerId===U&&dt()};L.addEventListener("pointermove",ct),L.addEventListener("pointerup",gt),L.addEventListener("pointercancel",A)}function k(S){const L=S.target;if(!(L?.tagName==="INPUT"||L?.tagName==="TEXTAREA"||L?.contentEditable==="true")){if(S.key==="ArrowLeft"||S.key==="ArrowDown"){S.preventDefault(),x.setVolume(n(e).volume-.05);return}if(S.key==="ArrowRight"||S.key==="ArrowUp"){S.preventDefault(),x.setVolume(n(e).volume+.05);return}(S.key==="Enter"||S.key===" "||S.key==="m"||S.key==="M")&&(S.preventDefault(),w())}}function g(){x.togglePlaylist()}function T(){x.toggleExpanded()}function M(){x.toggleHidden()}function N(){x.hideError()}function at(S){}function K(){return x.canSkip()}Lt(()=>{m=x.subscribe(S=>{lt(e,S)}),x.initialize()}),_t(()=>{m&&m(),x.destroy()}),Kt();var W=ut();Zt("keydown",$t,k);var bt=rt(W);{var At=S=>{var L=er(),Y=rt(L);{var U=A=>{var z=Ze(),j=v(z),X=v(j);V(X,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var G=_(X,2),Z=v(G,!0);d(G);var q=_(G,2),st=v(q);V(st,{icon:"material-symbols:close",class:"text-lg"}),d(q),d(j),d(z),R(()=>O(Z,n(e).errorMessage)),D("click",q,N),C(A,z)};B(Y,A=>{n(e).showError&&A(U)})}var ct=_(Y,2);{var dt=A=>{var z=ut(),j=rt(z);{var X=G=>{var Z=$e(),q=v(Z),st=v(q);pe(st,{}),d(q),d(Z),Vt(3,q,()=>ye,()=>({y:16,duration:280,opacity:.12,easing:be})),C(G,Z)};B(j,G=>{n(e).isExpanded&&G(X)})}C(A,z)},gt=A=>{var z=tr();let j;var X=v(z),G=v(X);wt(G,{get cover(){return n(e).currentSong.cover},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},size:"orb",onclick:M}),d(X);var Z=_(X,2);{let yt=ht(()=>n(e).isExpanded||n(e).isHidden);Me(Z,{get song(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},get isHidden(){return n(yt)},onCoverClick:P,onInfoClick:T,onHideClick:M,onExpandClick:T})}var q=_(Z,2);{let yt=ht(K),Ft=ht(()=>!n(e).isExpanded);Oe(q,{get song(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},get isShuffled(){return n(e).isShuffled},get isRepeating(){return n(e).isRepeating},get showPlaylist(){return n(e).showPlaylist},get canSkip(){return n(yt)},get volume(){return n(e).volume},get isMuted(){return n(e).isMuted},isVolumeDragging:!1,get isHidden(){return n(Ft)},volumeBarRef:at,onPlayClick:P,onPrevClick:i,onNextClick:()=>s(),onShuffleClick:c,onRepeatClick:b,onProgressClick:h,onProgressKeyDown:u,onVolumeButtonClick:f,onSliderPointerDown:I,onSliderKeyDown:k,onHideClick:M,onPlaylistClick:g,onCollapseClick:T})}var st=_(q,2);Je(st,{get playlist(){return n(e).playlist},get currentIndex(){return n(e).currentIndex},get isPlaying(){return n(e).isPlaying},get show(){return n(e).showPlaylist},onClose:g,onPlaySong:p}),d(z),R(()=>{j=F(z,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,j,{expanded:n(e).isExpanded,"hidden-mode":n(e).isHidden}),F(X,1,`orb-player-container ${n(e).isHidden?"orb-enter pointer-events-auto":"orb-leave pointer-events-none"}`)}),C(A,z)};B(ct,A=>{l?A(dt):A(gt,-1)})}te(2),C(S,L)};B(bt,S=>{y&&S(At)})}C(r,W),nt()}J(["click"]);export{yr as default};
