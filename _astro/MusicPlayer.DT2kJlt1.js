import{o as Mt,a as It,p as et,b as F,g as Nt,s as A,d as Lt}from"./disclose-version.x0avWqeP.js";import{i as Kt}from"./legacy.BjYMrsBj.js";import{an as jt,E as Xt,bq as Ot,br as Wt,o as Ut,u as qt,bs as Yt,bt as Gt,$ as Qt,bp as ot,bu as zt,c as it,aa as mt,p as xt,d as g,g as n,e as P,r as d,a as C,b as nt,s as st,f as E,ad as ut,ae as rt,t as R,a6 as J,a9 as D,af as ft,m as Jt,ab as Zt,bv as $t,am as te,Q as bt}from"./utils.rgxtgsju.js";import{a as ee,s as j}from"./render.CzXsKnqY.js";import{i as H}from"./if.DmcWQ1pC.js";import{I as V}from"./Icon.Cj4FlseJ.js";import{m as ht}from"./musicConfig.FtgwtCi5.js";import"./navBarConfig.DhxDCSZI.js";import{m as w}from"./musicPlayerStore.DQeShOk6.js";import{S as re,a as ie,b as ne,c as ae,d as oe,C as pt,P as le,e as se,N as ue}from"./SidebarTrackInfo.BUNGj5Hd.js";import{I as $}from"./zh_TW.vPeSsvua.js";import{i as tt}from"./translation.Cy1isCvR.js";import{s as ce}from"./snippet.Iwhhp99k.js";import{a as de}from"./actions.BoGPqx9Y.js";import{e as kt,i as _t}from"./each.C2X2S7zn.js";const ge=()=>performance.now(),Q={tick:r=>requestAnimationFrame(r),now:()=>ge(),tasks:new Set};function Dt(){const r=Q.now();Q.tasks.forEach(t=>{t.c(r)||(Q.tasks.delete(t),t.f())}),Q.tasks.size!==0&&Q.tick(Dt)}function ve(r){let t;return Q.tasks.size===0&&Q.tick(Dt),{promise:new Promise(e=>{Q.tasks.add(t={c:r,f:e})}),abort(){Q.tasks.delete(t)}}}function vt(r,t){zt(()=>{r.dispatchEvent(new CustomEvent(t))})}function me(r){if(r==="float")return"cssFloat";if(r==="offset")return"cssOffset";if(r.startsWith("--"))return r;const t=r.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(e=>e[0].toUpperCase()+e.slice(1)).join("")}function Pt(r){const t={},e=r.split(";");for(const o of e){const[a,l]=o.split(":");if(!a||l===void 0)break;const h=me(a.trim());t[h]=l.trim()}return t}const fe=r=>r;function Rt(r,t,e,o){var a=(r&Yt)!==0,l="both",h,v=t.inert,x=t.style.overflow,i,c;function u(){return zt(()=>h??=e()(t,o?.()??{},{direction:l}))}var b={is_global:a,in(){t.inert=v,i=wt(t,u(),c,1,()=>{vt(t,"introstart")},()=>{vt(t,"introend"),i?.abort(),i=h=void 0,t.style.overflow=x})},out(_){t.inert=!0,c=wt(t,u(),i,0,()=>{vt(t,"outrostart")},()=>{vt(t,"outroend"),_?.()})},stop:()=>{i?.abort(),c?.abort()}},p=jt;if((p.nodes.t??=[]).push(b),ee){var k=a;if(!k){for(var s=p.parent;s&&(s.f&Xt)!==0;)for(;(s=s.parent)&&(s.f&Ot)===0;);k=!s||(s.f&Wt)!==0}k&&Ut(()=>{qt(()=>b.in())})}}function wt(r,t,e,o,a,l){var h=o===1;if(Gt(t)){var v,x=!1;return Qt(()=>{if(!x){var y=t({direction:h?"in":"out"});v=wt(r,y,e,o,a,l)}}),{abort:()=>{x=!0,v?.abort()},deactivate:()=>v.deactivate(),reset:()=>v.reset(),t:()=>v.t()}}if(e?.deactivate(),!t?.duration&&!t?.delay)return a(),l(),{abort:ot,deactivate:ot,reset:ot,t:()=>o};const{delay:i=0,css:c,tick:u,easing:b=fe}=t;var p=[];if(h&&e===void 0&&(u&&u(0,1),c)){var k=Pt(c(0,1));p.push(k,k)}var s=()=>1-o,_=r.animate(p,{duration:i,fill:"forwards"});return _.onfinish=()=>{_.cancel(),a();var y=e?.t()??1-o;e?.abort();var M=o-y,f=t.duration*Math.abs(M),m=[];if(f>0){var T=!1;if(c)for(var I=Math.ceil(f/16.666666666666668),X=0;X<=I;X+=1){var O=y+M*b(X/I),at=Pt(c(O,1-O));m.push(at),T||=at.overflow==="hidden"}T&&(r.style.overflow="hidden"),s=()=>{var q=_.currentTime;return y+M*b(q/f)},u&&ve(()=>{if(_.playState!=="running")return!1;var q=s();return u(q,1-q),!0})}_=r.animate(m,{duration:f,fill:"forwards"}),_.onfinish=()=>{s=()=>o,u?.(o,1-o),l()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=ot)},deactivate:()=>{l=ot},reset:()=>{o===0&&u?.(1,0)},t:()=>s()}}function ye(r){const t=r-1;return t*t*t+1}function Vt(r){const t=r-1;return t*t*t+1}function Ct(r){const t=typeof r=="string"&&r.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[r,"px"]}function be(r,{delay:t=0,duration:e=400,easing:o=Vt,x:a=0,y:l=0,opacity:h=0}={}){const v=getComputedStyle(r),x=+v.opacity,i=v.transform==="none"?"":v.transform,c=x*(1-h),[u,b]=Ct(a),[p,k]=Ct(l);return{delay:t,duration:e,easing:o,css:(s,_)=>`
			transform: ${i} translate(${(1-s)*u}${b}, ${(1-s)*p}${k});
			opacity: ${x-c*_}`}}function he(r,{delay:t=0,duration:e=400,easing:o=Vt,axis:a="y"}={}){const l=getComputedStyle(r),h=+l.opacity,v=a==="y"?"height":"width",x=parseFloat(l[v]),i=a==="y"?["top","bottom"]:["left","right"],c=i.map(y=>`${y[0].toUpperCase()}${y.slice(1)}`),u=parseFloat(l[`padding${c[0]}`]),b=parseFloat(l[`padding${c[1]}`]),p=parseFloat(l[`margin${c[0]}`]),k=parseFloat(l[`margin${c[1]}`]),s=parseFloat(l[`border${c[0]}Width`]),_=parseFloat(l[`border${c[1]}Width`]);return{delay:t,duration:e,easing:o,css:y=>`overflow: hidden;opacity: ${Math.min(y*20,1)*h};${v}: ${y*x}px;padding-${i[0]}: ${y*u}px;padding-${i[1]}: ${y*b}px;margin-${i[0]}: ${y*p}px;margin-${i[1]}: ${y*k}px;border-${i[0]}-width: ${y*s}px;border-${i[1]}-width: ${y*_}px;min-${v}: 0`}}var xe=E('<div class="fab-music-panel card-base shadow-xl rounded-2xl p-4 w-[20rem] max-w-[80vw] svelte-1lty5dg"><div class="fab-music-header svelte-1lty5dg"><!> <!></div> <!> <!> <!></div>');function pe(r,t){it(t,!0);let e=mt(xt(w.getState())),o=mt(!1);function a(T){const I=T;I.detail&&st(e,I.detail,!0)}Mt(()=>{window.addEventListener("music-sidebar:state",a)}),It(()=>{typeof window<"u"&&window.removeEventListener("music-sidebar:state",a)});function l(){w.toggle()}function h(){w.prev()}function v(){w.next()}function x(){w.toggleMode()}function i(){st(o,!n(o))}function c(T){w.playIndex(T)}function u(T){w.seek(T)}function b(){w.toggleMute()}function p(T){w.setVolume(T)}var k=xe(),s=g(k),_=g(s);re(_,{get currentSong(){return n(e).currentSong},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading}});var y=P(_,2);ie(y,{get currentSong(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get volume(){return n(e).volume},get isMuted(){return n(e).isMuted},onToggleMute:b,onSetVolume:p}),d(s);var M=P(s,2);ne(M,{get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},onSeek:u});var f=P(M,2);ae(f,{get isPlaying(){return n(e).isPlaying},get isShuffled(){return n(e).isShuffled},get repeatMode(){return n(e).isRepeating},onToggleMode:x,onPrev:h,onNext:v,onTogglePlay:l,onTogglePlaylist:i});var m=P(f,2);oe(m,{get playlist(){return n(e).playlist},get currentIndex(){return n(e).currentIndex},get isPlaying(){return n(e).isPlaying},get show(){return n(o)},onClose:i,onPlaySong:c}),d(k),C(r,k),nt()}var we=E('<div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div>'),ke=E('<div class="text-xs text-30 mt-1"> </div>'),_e=E('<div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <!></div>');function St(r,t){it(t,!0);const e=et(t,"showTime",3,!1),o=et(t,"size",3,"mini");function a(i){if(!Number.isFinite(i)||i<0)return"0:00";const c=Math.floor(i/60),u=Math.floor(i%60);return`${c}:${u.toString().padStart(2,"0")}`}var l=ut(),h=rt(l);{var v=i=>{var c=we(),u=g(c),b=g(u,!0);d(u);var p=P(u,2),k=g(p,!0);d(p),d(c),R(()=>{j(b,t.song.title),j(k,t.song.artist)}),C(i,c)},x=i=>{var c=_e(),u=g(c),b=g(u,!0);d(u);var p=P(u,2),k=g(p,!0);d(p);var s=P(p,2);{var _=y=>{var M=ke(),f=g(M);d(M),R((m,T)=>j(f,`${m??""} / ${T??""}`),[()=>a(t.currentTime),()=>a(t.duration)]),C(y,M)};H(s,y=>{e()&&y(_)})}d(c),R(()=>{j(b,t.song.title),j(k,t.song.artist)}),C(i,c)};H(h,i=>{o()==="mini"?i(v):i(x,-1)})}C(r,l),nt()}var Pe=E('<!> <div class="flex-1 min-w-0 cursor-pointer" role="button" tabindex="0"><!></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div>',1),Ce=E('<div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button> <button><!></button></div>'),Se=E("<!> <!> <!>",1),Te=E("<div><!></div>");function Ht(r,t){it(t,!0);const e=et(t,"size",3,"mini"),o=et(t,"showControls",3,!1),a=et(t,"showPlaylist",3,!1);var l=Te(),h=g(l);{var v=i=>{var c=Pe(),u=rt(c);pt(u,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",interactive:!0,get onclick(){return t.onCoverClick}});var b=P(u,2),p=g(b);St(p,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},size:"mini"}),d(b);var k=P(b,2),s=g(k),_=g(s);V(_,{icon:"material-symbols:visibility-off",class:"text-lg"}),d(s);var y=P(s,2),M=g(y);V(M,{icon:"material-symbols:expand-less",class:"text-lg"}),d(y),d(k),R((f,m)=>{A(b,"aria-label",f),A(s,"title",m)},[()=>tt($.musicPlayerExpand),()=>tt($.musicPlayerHide)]),D("click",b,function(...f){t.onInfoClick?.apply(this,f)}),D("keydown",b,f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),t.onInfoClick?.())}),D("click",s,f=>{f.stopPropagation(),t.onHideClick?.()}),D("click",y,f=>{f.stopPropagation(),t.onExpandClick?.()}),C(i,c)},x=i=>{var c=Se(),u=rt(c);pt(u,{get cover(){return t.song.cover},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded"});var b=P(u,2);St(b,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},showTime:!0,size:"expanded"});var p=P(b,2);{var k=s=>{var _=Ce(),y=g(_),M=g(y);V(M,{icon:"material-symbols:visibility-off",class:"text-lg"}),d(y);var f=P(y,2);let m;var T=g(f);V(T,{icon:"material-symbols:queue-music",class:"text-lg"}),d(f),d(_),R((I,X)=>{A(y,"title",I),m=F(f,1,"btn-plain w-8 h-8 rounded-lg flex items-center justify-center",null,m,{"text-[var(--primary)]":a()}),A(f,"title",X)},[()=>tt($.musicPlayerHide),()=>tt($.musicPlayerPlaylist)]),D("click",y,function(...I){t.onHideClick?.apply(this,I)}),D("click",f,function(...I){t.onPlaylistClick?.apply(this,I)}),C(s,_)};H(p,s=>{o()&&s(k)})}C(i,c)};H(h,i=>{e()==="mini"?i(v):i(x,-1)})}d(l),R(()=>F(l,1,Nt(e()==="mini"?"flex items-center gap-3 mb-0":"flex items-center gap-4 mb-4"))),C(r,l),nt()}J(["click","keydown"]);var Ee=E("<div><!></div>");function Me(r,t){var e=Ee();let o;var a=g(e);Ht(a,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"mini",get onCoverClick(){return t.onCoverClick},get onInfoClick(){return t.onInfoClick},get onHideClick(){return t.onHideClick},get onExpandClick(){return t.onExpandClick}}),d(e),R(()=>o=F(e,1,"mini-player card-base shadow-xl rounded-2xl p-3 absolute bottom-0 right-0 w-[17.5rem] svelte-g9ac72",null,o,{"mini-enter":!t.isHidden,"mini-leave":t.isHidden,"pointer-events-none":t.isHidden})),C(r,e)}var Tt=E("<button><!></button>");function Et(r,t){const e=et(t,"repeatMode",3,0),o=et(t,"disabled",3,!1);var a=ut(),l=rt(a);{var h=x=>{var i=Tt();let c;var u=g(i);V(u,{icon:"material-symbols:shuffle",class:"text-lg"}),d(i),R(()=>{c=F(i,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":t.isActive,"btn-plain":!t.isActive}),i.disabled=o()}),D("click",i,function(...b){t.onclick?.apply(this,b)}),C(x,i)},v=x=>{var i=Tt();let c;var u=g(i);{var b=s=>{V(s,{icon:"material-symbols:repeat-one",class:"text-lg"})},p=s=>{V(s,{icon:"material-symbols:repeat",class:"text-lg"})},k=s=>{V(s,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};H(u,s=>{e()===1?s(b):e()===2?s(p,1):s(k,-1)})}d(i),R(()=>c=F(i,1,"w-10 h-10 rounded-lg",null,c,{"btn-regular":t.isActive,"btn-plain":!t.isActive})),D("click",i,function(...s){t.onclick?.apply(this,s)}),C(x,i)};H(l,x=>{t.mode==="shuffle"?x(h):x(v,-1)})}C(r,a)}J(["click"]);var Ie=E('<div class="controls flex items-center justify-center gap-2 mb-4"><!> <!> <!> <!> <!></div>');function Le(r,t){var e=Ie(),o=g(e);Et(o,{mode:"shuffle",get isActive(){return t.isShuffled},get onclick(){return t.onShuffleClick}});var a=P(o,2);le(a,{get onclick(){return t.onPrevClick},disabled:!1});var l=P(a,2);se(l,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get onclick(){return t.onPlayClick}});var h=P(l,2);ue(h,{get onclick(){return t.onNextClick},disabled:!1});var v=P(h,2);{let x=ft(()=>t.isRepeating>0);Et(v,{mode:"repeat",get isActive(){return n(x)},get repeatMode(){return t.isRepeating},get onclick(){return t.onRepeatClick}})}d(e),C(r,e)}var ze=E('<div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div>');function De(r,t){it(t,!0);var e=ze(),o=g(e);d(e),R(a=>{A(e,"aria-label",a),A(e,"aria-valuenow",t.duration>0?t.currentTime/t.duration*100:0),Lt(o,`width: ${t.duration>0?t.currentTime/t.duration*100:0}%`)},[()=>tt($.musicPlayerProgress)]),D("click",e,function(...a){t.onclick?.apply(this,a)}),D("keydown",e,function(...a){t.onkeydown?.apply(this,a)}),C(r,e),nt()}J(["click","keydown"]);var Re=E('<div class="progress-section mb-4"><!></div>');function Ve(r,t){var e=Re(),o=g(e);De(o,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onclick(){return t.onProgressClick},get onkeydown(){return t.onProgressKeyDown}}),d(e),C(r,e)}var He=E('<button class="btn-plain w-8 h-8 rounded-lg"><!></button>');function Be(r,t){var e=He(),o=g(e);{var a=v=>{V(v,{icon:"material-symbols:volume-off",class:"text-lg"})},l=v=>{V(v,{icon:"material-symbols:volume-down",class:"text-lg"})},h=v=>{V(v,{icon:"material-symbols:volume-up",class:"text-lg"})};H(o,v=>{t.isMuted||t.volume===0?v(a):t.volume<.5?v(l,1):v(h,-1)})}d(e),D("click",e,function(...v){t.onclick?.apply(this,v)}),C(r,e)}J(["click"]);var Ae=E('<div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer touch-none" role="slider" tabindex="0" aria-valuemin="0" aria-valuemax="100"><div></div></div>');function Fe(r,t){var e=Ae(),o=g(e);let a;d(e),de(e,l=>t.volumeBarRef?.(l)),R(()=>{A(e,"aria-label",t.ariaLabel),A(e,"aria-valuenow",t.volume*100),a=F(o,1,"h-full bg-[var(--primary)] rounded-full transition-all",null,a,{"duration-100":!t.isVolumeDragging,"duration-0":t.isVolumeDragging}),Lt(o,`width: ${t.volume*100}%`)}),D("pointerdown",e,function(...l){t.onpointerdown?.apply(this,l)}),D("keydown",e,function(...l){t.onkeydown?.apply(this,l)}),C(r,e)}J(["pointerdown","keydown"]);var Ne=E('<div class="bottom-controls flex items-center gap-2"><!> <!> <!></div>');function Ke(r,t){var e=Ne(),o=g(e);Be(o,{get volume(){return t.volume},get isMuted(){return t.isMuted},get onclick(){return t.onVolumeButtonClick}});var a=P(o,2);{let h=ft(()=>t.isMuted?0:t.volume);Fe(a,{get volume(){return n(h)},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onpointerdown(){return t.onSliderPointerDown},get onkeydown(){return t.onSliderKeyDown},get ariaLabel(){return t.ariaLabel}})}var l=P(a,2);ce(l,()=>t.children??ot),d(e),C(r,e)}var je=E('<button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button>'),Xe=E("<div><!> <!> <!> <!></div>");function Oe(r,t){it(t,!0);var e=Xe();let o;var a=g(e);Ht(a,{get song(){return t.song},get currentTime(){return t.currentTime},get duration(){return t.duration},get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},size:"expanded",showControls:!0,get showPlaylist(){return t.showPlaylist},get onHideClick(){return t.onHideClick},get onPlaylistClick(){return t.onPlaylistClick}});var l=P(a,2);Ve(l,{get currentTime(){return t.currentTime},get duration(){return t.duration},get onProgressClick(){return t.onProgressClick},get onProgressKeyDown(){return t.onProgressKeyDown}});var h=P(l,2);Le(h,{get isPlaying(){return t.isPlaying},get isLoading(){return t.isLoading},get isShuffled(){return t.isShuffled},get isRepeating(){return t.isRepeating},get onPlayClick(){return t.onPlayClick},get onPrevClick(){return t.onPrevClick},get onNextClick(){return t.onNextClick},get onShuffleClick(){return t.onShuffleClick},get onRepeatClick(){return t.onRepeatClick}});var v=P(h,2);{let x=ft(()=>tt($.musicPlayerVolume));Ke(v,{get volume(){return t.volume},get isMuted(){return t.isMuted},get isVolumeDragging(){return t.isVolumeDragging},get volumeBarRef(){return t.volumeBarRef},get onVolumeButtonClick(){return t.onVolumeButtonClick},get onSliderPointerDown(){return t.onSliderPointerDown},get onSliderKeyDown(){return t.onSliderKeyDown},get ariaLabel(){return n(x)},children:(i,c)=>{var u=je(),b=g(u);V(b,{icon:"material-symbols:expand-more",class:"text-lg"}),d(u),R(p=>A(u,"title",p),[()=>tt($.musicPlayerCollapse)]),D("click",u,function(...p){t.onCollapseClick?.apply(this,p)}),C(i,u)}})}d(e),R(()=>o=F(e,1,"expanded-player card-base shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out absolute bottom-0 right-0 w-80",null,o,{"opacity-0":t.isHidden,"scale-95":t.isHidden,"pointer-events-none":t.isHidden})),C(r,e),nt()}J(["click"]);var We=E('<span class="text-sm text-[var(--content-meta)]"> </span>'),Ue=E('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img decoding="async" class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>');function qe(r,t){it(t,!0);const e=et(t,"lazy",3,!0);function o(m){return m.startsWith("http://")||m.startsWith("https://")||m.startsWith("/")?m:`/${m}`}var a=Ue();let l;var h=g(a),v=g(h);{var x=m=>{V(m,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},i=m=>{V(m,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},c=m=>{var T=We(),I=g(T,!0);d(T),R(()=>j(I,t.index+1)),C(m,T)};H(v,m=>{t.isCurrent&&t.isPlaying?m(x):t.isCurrent?m(i,1):m(c,-1)})}d(h);var u=P(h,2),b=g(u);d(u);var p=P(u,2),k=g(p);let s;var _=g(k,!0);d(k);var y=P(k,2);let M;var f=g(y,!0);d(y),d(p),d(a),R(m=>{l=F(a,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,l,{"bg-[var(--btn-plain-bg)]":t.isCurrent,"text-[var(--primary)]":t.isCurrent}),A(a,"aria-label",`播放 ${t.song.title??""} - ${t.song.artist??""}`),A(b,"src",m),A(b,"alt",t.song.title),A(b,"loading",e()?"lazy":"eager"),s=F(k,1,"font-medium truncate",null,s,{"text-[var(--primary)]":t.isCurrent,"text-90":!t.isCurrent}),j(_,t.song.title),M=F(y,1,"text-sm text-[var(--content-meta)] truncate",null,M,{"text-[var(--primary)]":t.isCurrent}),j(f,t.song.artist)},[()=>o(t.song.cover)]),D("click",a,function(...m){t.onclick?.apply(this,m)}),D("keydown",a,m=>{(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),t.onclick())}),C(r,a),nt()}J(["click","keydown"]);var Ye=E("<button> </button>"),Ge=E('<div class="playlist-tabs svelte-1v267om"></div>'),Qe=E('<div class="playlist-panel card-base-transparent fixed bottom-70 right-4 w-80 max-h-96 overflow-hidden z-50 svelte-1v267om"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80 hide-scrollbar" role="presentation"><!> <!></div></div>');function Je(r,t){it(t,!0);let e=mt(xt(w.getPlaylistInfo())),o=mt(xt(w.getState().currentPlaylistIndex));async function a(x){await w.switchPlaylist(x),st(e,w.getPlaylistInfo(),!0),st(o,w.getState().currentPlaylistIndex,!0)}var l=ut(),h=rt(l);{var v=x=>{var i=Qe(),c=g(i),u=g(c),b=g(u,!0);d(u);var p=P(u,2),k=g(p);V(k,{icon:"material-symbols:close",class:"text-lg"}),d(p),d(c);var s=P(c,2),_=g(s);{var y=f=>{var m=Ge();kt(m,21,()=>n(e),_t,(T,I,X)=>{var O=Ye();let at;var q=g(O,!0);d(O),R(()=>{at=F(O,1,"playlist-tab svelte-1v267om",null,at,{active:X===n(o)}),j(q,n(I).name)}),D("click",O,()=>a(X)),C(T,O)}),d(m),C(f,m)};H(_,f=>{n(e).length>1&&f(y)})}var M=P(_,2);kt(M,17,()=>t.playlist,_t,(f,m,T)=>{{let I=ft(()=>T===t.currentIndex);qe(f,{get song(){return n(m)},index:T,get isCurrent(){return n(I)},get isPlaying(){return t.isPlaying},onclick:()=>t.onPlaySong(T),lazy:T!==0})}}),d(s),d(i),R(f=>j(b,f),[()=>tt($.musicPlayerPlaylist)]),D("click",p,function(...f){t.onClose?.apply(this,f)}),Rt(3,i,()=>he,()=>({duration:300,axis:"y"})),C(x,i)};H(h,x=>{t.show&&x(v)})}C(r,l),nt()}J(["click"]);var Ze=E('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),$e=E('<div class="music-player-fab-anchor fixed z-[55]"><div class="music-player-fab-shell"><!></div></div>'),tr=E("<div><div><!></div> <!> <!> <!></div>"),er=E(`<!> <!> <style>.music-player-fab-anchor {
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
		}</style>`,1);function br(r,t){it(t,!1);let e=Jt(w.getState());const o=ht.showFloatingPlayer,l=(ht.floatingEntryMode??"default")==="fab",h=o&&ht.enable;let v;function x(){w.toggle()}function i(){w.prev()}function c(){w.next()}function u(){w.toggleShuffle()}function b(){w.toggleRepeat()}function p(S){w.playIndex(S)}function k(S){const L=S.currentTarget;if(!L)return;const Y=L.getBoundingClientRect(),W=(S.clientX-Y.left)/Y.width;w.setProgress(W)}function s(S){(S.key==="Enter"||S.key===" ")&&(S.preventDefault(),w.setProgress(.5))}function _(){w.toggleMute()}function y(){w.toggleMute()}function M(S){const L=S.currentTarget;if(!L)return;const Y=z=>{const N=L.getBoundingClientRect();if(N.width<=0)return;const K=Math.max(0,Math.min(1,(z-N.left)/N.width));w.setVolume(K)};Y(S.clientX);const W=S.pointerId;L.setPointerCapture(W);const ct=z=>{z.pointerId===W&&Y(z.clientX)},dt=()=>{L.removeEventListener("pointermove",ct),L.removeEventListener("pointerup",gt),L.removeEventListener("pointercancel",B),L.hasPointerCapture(W)&&L.releasePointerCapture(W)},gt=z=>{z.pointerId===W&&(Y(z.clientX),dt())},B=z=>{z.pointerId===W&&dt()};L.addEventListener("pointermove",ct),L.addEventListener("pointerup",gt),L.addEventListener("pointercancel",B)}function f(S){const L=S.target;if(!(L?.tagName==="INPUT"||L?.tagName==="TEXTAREA"||L?.contentEditable==="true")){if(S.key==="ArrowLeft"||S.key==="ArrowDown"){S.preventDefault(),w.setVolume(n(e).volume-.05);return}if(S.key==="ArrowRight"||S.key==="ArrowUp"){S.preventDefault(),w.setVolume(n(e).volume+.05);return}(S.key==="Enter"||S.key===" "||S.key==="m"||S.key==="M")&&(S.preventDefault(),_())}}function m(){w.togglePlaylist()}function T(){w.toggleExpanded()}function I(){w.toggleHidden()}function X(){w.hideError()}function O(S){}function at(){return w.canSkip()}Mt(()=>{v=w.subscribe(S=>{st(e,S)}),w.initialize()}),It(()=>{v&&v(),w.destroy()}),Kt();var q=ut();Zt("keydown",$t,f);var Bt=rt(q);{var At=S=>{var L=er(),Y=rt(L);{var W=B=>{var z=Ze(),N=g(z),K=g(N);V(K,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var G=P(K,2),Z=g(G,!0);d(G);var U=P(G,2),lt=g(U);V(lt,{icon:"material-symbols:close",class:"text-lg"}),d(U),d(N),d(z),R(()=>j(Z,n(e).errorMessage)),D("click",U,X),C(B,z)};H(Y,B=>{n(e).showError&&B(W)})}var ct=P(Y,2);{var dt=B=>{var z=ut(),N=rt(z);{var K=G=>{var Z=$e(),U=g(Z),lt=g(U);pe(lt,{}),d(U),d(Z),Rt(3,U,()=>be,()=>({y:16,duration:280,opacity:.12,easing:ye})),C(G,Z)};H(N,G=>{n(e).isExpanded&&G(K)})}C(B,z)},gt=B=>{var z=tr();let N;var K=g(z),G=g(K);pt(G,{get cover(){return n(e).currentSong.cover},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},size:"orb",onclick:I}),d(K);var Z=P(K,2);{let yt=bt(()=>n(e).isExpanded||n(e).isHidden);Me(Z,{get song(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},get isHidden(){return n(yt)},onCoverClick:x,onInfoClick:T,onHideClick:I,onExpandClick:T})}var U=P(Z,2);{let yt=bt(at),Ft=bt(()=>!n(e).isExpanded);Oe(U,{get song(){return n(e).currentSong},get currentTime(){return n(e).currentTime},get duration(){return n(e).duration},get isPlaying(){return n(e).isPlaying},get isLoading(){return n(e).isLoading},get isShuffled(){return n(e).isShuffled},get isRepeating(){return n(e).isRepeating},get showPlaylist(){return n(e).showPlaylist},get canSkip(){return n(yt)},get volume(){return n(e).volume},get isMuted(){return n(e).isMuted},isVolumeDragging:!1,get isHidden(){return n(Ft)},volumeBarRef:O,onPlayClick:x,onPrevClick:i,onNextClick:()=>c(),onShuffleClick:u,onRepeatClick:b,onProgressClick:k,onProgressKeyDown:s,onVolumeButtonClick:y,onSliderPointerDown:M,onSliderKeyDown:f,onHideClick:I,onPlaylistClick:m,onCollapseClick:T})}var lt=P(U,2);Je(lt,{get playlist(){return n(e).playlist},get currentIndex(){return n(e).currentIndex},get isPlaying(){return n(e).isPlaying},get show(){return n(e).showPlaylist},onClose:m,onPlaySong:p}),d(z),R(()=>{N=F(z,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,N,{expanded:n(e).isExpanded,"hidden-mode":n(e).isHidden}),F(K,1,`orb-player-container ${n(e).isHidden?"orb-enter pointer-events-auto":"orb-leave pointer-events-none"}`)}),C(B,z)};H(ct,B=>{l?B(dt):B(gt,-1)})}te(2),C(S,L)};H(Bt,S=>{h&&S(At)})}C(r,q),nt()}J(["click"]);export{br as default};
