var $s=Object.defineProperty;var In=e=>{throw TypeError(e)};var Es=(e,t,r)=>t in e?$s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var Me=(e,t,r)=>Es(e,typeof t!="symbol"?t+"":t,r),jr=(e,t,r)=>t.has(e)||In("Cannot "+r);var c=(e,t,r)=>(jr(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?In("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),N=(e,t,r,n)=>(jr(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),V=(e,t,r)=>(jr(e,t,"access private method"),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=r(i);fetch(i.href,s)}})();const ks=!1;var fn=Array.isArray,Ss=Array.prototype.indexOf,qt=Array.prototype.includes,Cr=Array.from,As=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,ii=Object.getOwnPropertyDescriptors,Ps=Object.prototype,Ns=Array.prototype,cn=Object.getPrototypeOf,Ln=Object.isExtensible;function Qt(e){return typeof e=="function"}const Ts=()=>{};function Ms(e){return e()}function Hr(e){for(var t=0;t<e.length;t++)e[t]()}function si(){var e,t,r=new Promise((n,i)=>{e=n,t=i});return{promise:r,resolve:e,reject:t}}function Cs(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const r=[];for(const n of e)if(r.push(n),r.length===t)break;return r}const Q=2,Bt=4,vr=8,dn=1<<24,bt=16,De=32,vt=64,Gr=128,$e=512,G=1024,ie=2048,Ve=4096,ge=8192,Ee=16384,Ct=32768,Rn=1<<25,ht=65536,jn=1<<17,Os=1<<18,Ot=1<<19,oi=1<<20,qe=1<<25,Mt=65536,Wr=1<<21,vn=1<<22,ft=1<<23,tt=Symbol("$state"),ai=Symbol("legacy props"),Is=Symbol(""),Ye=new class extends Error{constructor(){super(...arguments);Me(this,"name","StaleReactionError");Me(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ti;const li=!!((ti=globalThis.document)!=null&&ti.contentType)&&globalThis.document.contentType.includes("xml");function Ls(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Rs(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function js(e,t,r){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ds(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function zs(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Fs(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Us(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function qs(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bs(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Vs(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Hs(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Gs(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}const Ws=1,Ys=2,ui=4,Ks=8,Js=16,Xs=1,Qs=2,fi=4,Zs=8,eo=16,to=1,ro=2,K=Symbol(),ci="http://www.w3.org/1999/xhtml",no="http://www.w3.org/2000/svg",io="@attach";function so(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function oo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function di(e){return e===this.v}function ao(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function vi(e){return!ao(e,this.v)}let Kt=!1,lo=!1;function uo(){Kt=!0}let q=null;function Vt(e){q=e}function He(e,t=!1,r){q={p:q,i:!1,c:null,e:null,s:e,x:null,r:I,l:Kt&&!t?{s:null,u:null,$:[]}:null}}function Ge(e){var t=q,r=t.e;if(r!==null){t.e=null;for(var n of r)Ri(n)}return t.i=!0,q=t.p,{}}function hr(){return!Kt||q!==null&&q.l===null}let xt=[];function hi(){var e=xt;xt=[],Hr(e)}function rt(e){if(xt.length===0&&!nr){var t=xt;queueMicrotask(()=>{t===xt&&hi()})}xt.push(e)}function fo(){for(;xt.length>0;)hi()}function pi(e){var t=I;if(t===null)return C.f|=ft,e;if(!(t.f&Ct)&&!(t.f&Bt))throw e;lt(e,t)}function lt(e,t){for(;t!==null;){if(t.f&Gr){if(!(t.f&Ct))throw e;try{t.b.error(e);return}catch(r){e=r}}t=t.parent}throw e}const co=-7169;function H(e,t){e.f=e.f&co|t}function hn(e){e.f&$e||e.deps===null?H(e,G):H(e,Ve)}function _i(e){if(e!==null)for(const t of e)!(t.f&Q)||!(t.f&Mt)||(t.f^=Mt,_i(t.deps))}function mi(e,t,r){e.f&ie?t.add(e):e.f&Ve&&r.add(e),_i(e.deps),H(e,G)}let wr=!1;function vo(e){var t=wr;try{return wr=!1,[e(),wr]}finally{wr=t}}const It=new Set;let P=null,te=null,Yr=null,nr=!1,Dr=!1,Lt=null,Er=null;var Dn=0;let ho=1;var Rt,jt,Dt,zt,lr,pe,kt,Ke,Je,Ft,se,Kr,Jr,Xr,Qr,gi;const Nr=class Nr{constructor(){L(this,se);Me(this,"id",ho++);Me(this,"current",new Map);Me(this,"previous",new Map);L(this,Rt,new Set);L(this,jt,new Set);L(this,Dt,0);L(this,zt,0);L(this,lr,null);L(this,pe,[]);L(this,kt,new Set);L(this,Ke,new Set);L(this,Je,new Map);Me(this,"is_fork",!1);L(this,Ft,!1)}skip_effect(t){c(this,Je).has(t)||c(this,Je).set(t,{d:[],m:[]})}unskip_effect(t){var r=c(this,Je).get(t);if(r){c(this,Je).delete(t);for(var n of r.d)H(n,ie),this.schedule(n);for(n of r.m)H(n,Ve),this.schedule(n)}}capture(t,r){r!==K&&!this.previous.has(t)&&this.previous.set(t,r),t.f&ft||(this.current.set(t,t.v),te==null||te.set(t,t.v))}activate(){P=this}deactivate(){P=null,te=null}flush(){try{Dr=!0,P=this,V(this,se,Jr).call(this)}finally{Dn=0,Yr=null,Lt=null,Er=null,Dr=!1,P=null,te=null,dt.clear()}}discard(){for(const t of c(this,jt))t(this);c(this,jt).clear()}increment(t){N(this,Dt,c(this,Dt)+1),t&&N(this,zt,c(this,zt)+1)}decrement(t,r){N(this,Dt,c(this,Dt)-1),t&&N(this,zt,c(this,zt)-1),!(c(this,Ft)||r)&&(N(this,Ft,!0),rt(()=>{N(this,Ft,!1),this.flush()}))}transfer_effects(t,r){for(const n of t)c(this,kt).add(n);for(const n of r)c(this,Ke).add(n);t.clear(),r.clear()}oncommit(t){c(this,Rt).add(t)}ondiscard(t){c(this,jt).add(t)}settled(){return(c(this,lr)??N(this,lr,si())).promise}static ensure(){if(P===null){const t=P=new Nr;Dr||(It.add(P),nr||rt(()=>{P===t&&t.flush()}))}return P}apply(){{te=null;return}}schedule(t){var i;if(Yr=t,(i=t.b)!=null&&i.is_pending&&t.f&(Bt|vr|dn)&&!(t.f&Ct)){t.b.defer_effect(t);return}for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if(Lt!==null&&r===I&&(C===null||!(C.f&Q)))return;if(n&(vt|De)){if(!(n&G))return;r.f^=G}}c(this,pe).push(r)}};Rt=new WeakMap,jt=new WeakMap,Dt=new WeakMap,zt=new WeakMap,lr=new WeakMap,pe=new WeakMap,kt=new WeakMap,Ke=new WeakMap,Je=new WeakMap,Ft=new WeakMap,se=new WeakSet,Kr=function(){return this.is_fork||c(this,zt)>0},Jr=function(){var a,u;if(Dn++>1e3&&(It.delete(this),_o()),!V(this,se,Kr).call(this)){for(const l of c(this,kt))c(this,Ke).delete(l),H(l,ie),this.schedule(l);for(const l of c(this,Ke))H(l,Ve),this.schedule(l)}const t=c(this,pe);N(this,pe,[]),this.apply();var r=Lt=[],n=[],i=Er=[];for(const l of t)try{V(this,se,Xr).call(this,l,r,n)}catch(f){throw xi(l),f}if(P=null,i.length>0){var s=Nr.ensure();for(const l of i)s.schedule(l)}if(Lt=null,Er=null,V(this,se,Kr).call(this)){V(this,se,Qr).call(this,n),V(this,se,Qr).call(this,r);for(const[l,f]of c(this,Je))wi(l,f)}else{c(this,Dt)===0&&It.delete(this),c(this,kt).clear(),c(this,Ke).clear();for(const l of c(this,Rt))l(this);c(this,Rt).clear(),zn(n),zn(r),(a=c(this,lr))==null||a.resolve()}var o=P;if(c(this,pe).length>0){const l=o??(o=this);c(l,pe).push(...c(this,pe).filter(f=>!c(l,pe).includes(f)))}o!==null&&(It.add(o),V(u=o,se,Jr).call(u)),It.has(this)||V(this,se,gi).call(this)},Xr=function(t,r,n){t.f^=G;for(var i=t.first;i!==null;){var s=i.f,o=(s&(De|vt))!==0,a=o&&(s&G)!==0,u=a||(s&ge)!==0||c(this,Je).has(i);if(!u&&i.fn!==null){o?i.f^=G:s&Bt?r.push(i):gr(i)&&(s&bt&&c(this,Ke).add(i),Wt(i));var l=i.first;if(l!==null){i=l;continue}}for(;i!==null;){var f=i.next;if(f!==null){i=f;break}i=i.parent}}},Qr=function(t){for(var r=0;r<t.length;r+=1)mi(t[r],c(this,kt),c(this,Ke))},gi=function(){var u;for(const l of It){var t=l.id<this.id,r=[];for(const[f,v]of this.current){if(l.current.has(f))if(t&&v!==l.current.get(f))l.current.set(f,v);else continue;r.push(f)}if(r.length!==0){var n=[...l.current.keys()].filter(f=>!this.current.has(f));if(n.length>0){l.activate();var i=new Set,s=new Map;for(var o of r)bi(o,n,i,s);if(c(l,pe).length>0){l.apply();for(var a of c(l,pe))V(u=l,se,Xr).call(u,a,[],[]);N(l,pe,[])}l.deactivate()}}}};let pt=Nr;function po(e){var t=nr;nr=!0;try{for(var r;;){if(fo(),P===null)return r;P.flush()}}finally{nr=t}}function _o(){try{Us()}catch(e){lt(e,Yr)}}let Ce=null;function zn(e){var t=e.length;if(t!==0){for(var r=0;r<t;){var n=e[r++];if(!(n.f&(Ee|ge))&&gr(n)&&(Ce=new Set,Wt(n),n.deps===null&&n.first===null&&n.nodes===null&&n.teardown===null&&n.ac===null&&Ui(n),(Ce==null?void 0:Ce.size)>0)){dt.clear();for(const i of Ce){if(i.f&(Ee|ge))continue;const s=[i];let o=i.parent;for(;o!==null;)Ce.has(o)&&(Ce.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const u=s[a];u.f&(Ee|ge)||Wt(u)}}Ce.clear()}}Ce=null}}function bi(e,t,r,n){if(!r.has(e)&&(r.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;s&Q?bi(i,t,r,n):s&(vn|bt)&&!(s&ie)&&yi(i,t,n)&&(H(i,ie),pn(i))}}function yi(e,t,r){const n=r.get(e);if(n!==void 0)return n;if(e.deps!==null)for(const i of e.deps){if(qt.call(t,i))return!0;if(i.f&Q&&yi(i,t,r))return r.set(i,!0),!0}return r.set(e,!1),!1}function pn(e){P.schedule(e)}function wi(e,t){if(!(e.f&De&&e.f&G)){e.f&ie?t.d.push(e):e.f&Ve&&t.m.push(e),H(e,G);for(var r=e.first;r!==null;)wi(r,t),r=r.next}}function xi(e){H(e,G);for(var t=e.first;t!==null;)xi(t),t=t.next}function mo(e){let t=0,r=_t(0),n;return()=>{mn()&&(p(r),gn(()=>(t===0&&(n=gt(()=>e(()=>ir(r)))),t+=1,()=>{rt(()=>{t-=1,t===0&&(n==null||n(),n=void 0,ir(r))})})))}}var go=ht|Ot;function bo(e,t,r,n){new yo(e,t,r,n)}var we,un,ze,St,fe,Fe,_e,Oe,Xe,At,at,Ut,ur,fr,Qe,Tr,W,wo,xo,$o,Zr,kr,Sr,en;class yo{constructor(t,r,n,i){L(this,W);Me(this,"parent");Me(this,"is_pending",!1);Me(this,"transform_error");L(this,we);L(this,un,null);L(this,ze);L(this,St);L(this,fe);L(this,Fe,null);L(this,_e,null);L(this,Oe,null);L(this,Xe,null);L(this,At,0);L(this,at,0);L(this,Ut,!1);L(this,ur,new Set);L(this,fr,new Set);L(this,Qe,null);L(this,Tr,mo(()=>(N(this,Qe,_t(c(this,At))),()=>{N(this,Qe,null)})));var s;N(this,we,t),N(this,ze,r),N(this,St,o=>{var a=I;a.b=this,a.f|=Gr,n(o)}),this.parent=I.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),N(this,fe,mr(()=>{V(this,W,Zr).call(this)},go))}defer_effect(t){mi(t,c(this,ur),c(this,fr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,ze).pending}update_pending_count(t,r){V(this,W,en).call(this,t,r),N(this,At,c(this,At)+t),!(!c(this,Qe)||c(this,Ut))&&(N(this,Ut,!0),rt(()=>{N(this,Ut,!1),c(this,Qe)&&Ht(c(this,Qe),c(this,At))}))}get_effect_pending(){return c(this,Tr).call(this),p(c(this,Qe))}error(t){var r=c(this,ze).onerror;let n=c(this,ze).failed;if(!r&&!n)throw t;c(this,Fe)&&(X(c(this,Fe)),N(this,Fe,null)),c(this,_e)&&(X(c(this,_e)),N(this,_e,null)),c(this,Oe)&&(X(c(this,Oe)),N(this,Oe,null));var i=!1,s=!1;const o=()=>{if(i){oo();return}i=!0,s&&Gs(),c(this,Oe)!==null&&Nt(c(this,Oe),()=>{N(this,Oe,null)}),V(this,W,Sr).call(this,()=>{V(this,W,Zr).call(this)})},a=u=>{try{s=!0,r==null||r(u,o),s=!1}catch(l){lt(l,c(this,fe)&&c(this,fe).parent)}n&&N(this,Oe,V(this,W,Sr).call(this,()=>{try{return de(()=>{var l=I;l.b=this,l.f|=Gr,n(c(this,we),()=>u,()=>o)})}catch(l){return lt(l,c(this,fe).parent),null}}))};rt(()=>{var u;try{u=this.transform_error(t)}catch(l){lt(l,c(this,fe)&&c(this,fe).parent);return}u!==null&&typeof u=="object"&&typeof u.then=="function"?u.then(a,l=>lt(l,c(this,fe)&&c(this,fe).parent)):a(u)})}}we=new WeakMap,un=new WeakMap,ze=new WeakMap,St=new WeakMap,fe=new WeakMap,Fe=new WeakMap,_e=new WeakMap,Oe=new WeakMap,Xe=new WeakMap,At=new WeakMap,at=new WeakMap,Ut=new WeakMap,ur=new WeakMap,fr=new WeakMap,Qe=new WeakMap,Tr=new WeakMap,W=new WeakSet,wo=function(){try{N(this,Fe,de(()=>c(this,St).call(this,c(this,we))))}catch(t){this.error(t)}},xo=function(t){const r=c(this,ze).failed;r&&N(this,Oe,de(()=>{r(c(this,we),()=>t,()=>()=>{})}))},$o=function(){const t=c(this,ze).pending;t&&(this.is_pending=!0,N(this,_e,de(()=>t(c(this,we)))),rt(()=>{var r=N(this,Xe,document.createDocumentFragment()),n=Be();r.append(n),N(this,Fe,V(this,W,Sr).call(this,()=>de(()=>c(this,St).call(this,n)))),c(this,at)===0&&(c(this,we).before(r),N(this,Xe,null),Nt(c(this,_e),()=>{N(this,_e,null)}),V(this,W,kr).call(this,P))}))},Zr=function(){try{if(this.is_pending=this.has_pending_snippet(),N(this,at,0),N(this,At,0),N(this,Fe,de(()=>{c(this,St).call(this,c(this,we))})),c(this,at)>0){var t=N(this,Xe,document.createDocumentFragment());wn(c(this,Fe),t);const r=c(this,ze).pending;N(this,_e,de(()=>r(c(this,we))))}else V(this,W,kr).call(this,P)}catch(r){this.error(r)}},kr=function(t){this.is_pending=!1,t.transfer_effects(c(this,ur),c(this,fr))},Sr=function(t){var r=I,n=C,i=q;Ae(c(this,fe)),Se(c(this,fe)),Vt(c(this,fe).ctx);try{return pt.ensure(),t()}catch(s){return pi(s),null}finally{Ae(r),Se(n),Vt(i)}},en=function(t,r){var n;if(!this.has_pending_snippet()){this.parent&&V(n=this.parent,W,en).call(n,t,r);return}N(this,at,c(this,at)+t),c(this,at)===0&&(V(this,W,kr).call(this,r),c(this,_e)&&Nt(c(this,_e),()=>{N(this,_e,null)}),c(this,Xe)&&(c(this,we).before(c(this,Xe)),N(this,Xe,null)))};function $i(e,t,r,n){const i=hr()?pr:Or;var s=e.filter(d=>!d.settled);if(r.length===0&&s.length===0){n(t.map(i));return}var o=I,a=Eo(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(d=>d.promise)):null;function l(d){a();try{n(d)}catch(b){o.f&Ee||lt(b,o)}Pr()}if(r.length===0){u.then(()=>l(t.map(i)));return}var f=Ei();function v(){Promise.all(r.map(d=>ko(d))).then(d=>l([...t.map(i),...d])).catch(d=>lt(d,o)).finally(()=>f())}u?u.then(()=>{a(),v(),Pr()}):v()}function Eo(){var e=I,t=C,r=q,n=P;return function(s=!0){Ae(e),Se(t),Vt(r),s&&!(e.f&Ee)&&(n==null||n.activate(),n==null||n.apply())}}function Pr(e=!0){Ae(null),Se(null),Vt(null),e&&(P==null||P.deactivate())}function Ei(){var e=I.b,t=P,r=e.is_rendered();return e.update_pending_count(1,t),t.increment(r),(n=!1)=>{e.update_pending_count(-1,t),t.decrement(r,n)}}function pr(e){var t=Q|ie,r=C!==null&&C.f&Q?C:null;return I!==null&&(I.f|=Ot),{ctx:q,deps:null,effects:null,equals:di,f:t,fn:e,reactions:null,rv:0,v:K,wv:0,parent:r??I,ac:null}}function ko(e,t,r){let n=I;n===null&&Rs();var i=void 0,s=_t(K),o=!C,a=new Map;return zo(()=>{var b;var u=I,l=si();i=l.promise;try{Promise.resolve(e()).then(l.resolve,l.reject).finally(Pr)}catch(_){l.reject(_),Pr()}var f=P;if(o){if(u.f&Ct)var v=Ei();if(n.b.is_rendered())(b=a.get(f))==null||b.reject(Ye),a.delete(f);else{for(const _ of a.values())_.reject(Ye);a.clear()}a.set(f,l)}const d=(_,y=void 0)=>{if(v){var h=y===Ye;v(h)}if(!(y===Ye||u.f&Ee)){if(f.activate(),y)s.f|=ft,Ht(s,y);else{s.f&ft&&(s.f^=ft),Ht(s,_);for(const[m,E]of a){if(a.delete(m),m===f)break;E.reject(Ye)}}f.deactivate()}};l.promise.then(d,_=>d(null,_||"unknown"))}),Lr(()=>{for(const u of a.values())u.reject(Ye)}),new Promise(u=>{function l(f){function v(){f===i?u(s):l(i)}f.then(v,v)}l(i)})}function ct(e){const t=pr(e);return Vi(t),t}function Or(e){const t=pr(e);return t.equals=vi,t}function So(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)X(t[r])}}function Ao(e){for(var t=e.parent;t!==null;){if(!(t.f&Q))return t.f&Ee?null:t;t=t.parent}return null}function _n(e){var t,r=I;Ae(Ao(e));try{e.f&=~Mt,So(e),t=Yi(e)}finally{Ae(r)}return t}function ki(e){var t=e.v,r=_n(e);if(!e.equals(r)&&(e.wv=Gi(),(!(P!=null&&P.is_fork)||e.deps===null)&&(e.v=r,P==null||P.capture(e,t),e.deps===null))){H(e,G);return}mt||(te!==null?(mn()||P!=null&&P.is_fork)&&te.set(e,r):hn(e))}function Po(e){var t,r;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),(r=n.ac)==null||r.abort(Ye),n.teardown=Ts,n.ac=null,or(n,0),bn(n))}function Si(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&Wt(t)}let tn=new Set;const dt=new Map;let Ai=!1;function _t(e,t){var r={f:0,v:e,reactions:null,equals:di,rv:0,wv:0};return r}function F(e,t){const r=_t(e);return Vi(r),r}function No(e,t=!1,r=!0){var i;const n=_t(e);return t||(n.equals=vi),Kt&&r&&q!==null&&q.l!==null&&((i=q.l).s??(i.s=[])).push(n),n}function T(e,t,r=!1){C!==null&&(!Le||C.f&jn)&&hr()&&C.f&(Q|bt|vn|jn)&&(ke===null||!qt.call(ke,e))&&Hs();let n=r?xe(t):t;return Ht(e,n,Er)}function Ht(e,t,r=null){if(!e.equals(t)){var n=e.v;mt?dt.set(e,t):dt.set(e,n),e.v=t;var i=pt.ensure();if(i.capture(e,n),e.f&Q){const s=e;e.f&ie&&_n(s),te===null&&hn(s)}e.wv=Gi(),Pi(e,ie,r),hr()&&I!==null&&I.f&G&&!(I.f&(De|vt))&&(ye===null?qo([e]):ye.push(e)),!i.is_fork&&tn.size>0&&!Ai&&To()}return t}function To(){Ai=!1;for(const e of tn)e.f&G&&H(e,Ve),gr(e)&&Wt(e);tn.clear()}function Fn(e,t=1){var r=p(e),n=t===1?r++:r--;return T(e,r),n}function ir(e){T(e,e.v+1)}function Pi(e,t,r){var n=e.reactions;if(n!==null)for(var i=hr(),s=n.length,o=0;o<s;o++){var a=n[o],u=a.f;if(!(!i&&a===I)){var l=(u&ie)===0;if(l&&H(a,t),u&Q){var f=a;te==null||te.delete(f),u&Mt||(u&$e&&(a.f|=Mt),Pi(f,Ve,r))}else if(l){var v=a;u&bt&&Ce!==null&&Ce.add(v),r!==null?r.push(v):pn(v)}}}}function xe(e){if(typeof e!="object"||e===null||tt in e)return e;const t=cn(e);if(t!==Ps&&t!==Ns)return e;var r=new Map,n=fn(e),i=F(0),s=Tt,o=a=>{if(Tt===s)return a();var u=C,l=Tt;Se(null),Hn(s);var f=a();return Se(u),Hn(l),f};return n&&r.set("length",F(e.length)),new Proxy(e,{defineProperty(a,u,l){(!("value"in l)||l.configurable===!1||l.enumerable===!1||l.writable===!1)&&Bs();var f=r.get(u);return f===void 0?o(()=>{var v=F(l.value);return r.set(u,v),v}):T(f,l.value,!0),!0},deleteProperty(a,u){var l=r.get(u);if(l===void 0){if(u in a){const f=o(()=>F(K));r.set(u,f),ir(i)}}else T(l,K),ir(i);return!0},get(a,u,l){var b;if(u===tt)return e;var f=r.get(u),v=u in a;if(f===void 0&&(!v||(b=ut(a,u))!=null&&b.writable)&&(f=o(()=>{var _=xe(v?a[u]:K),y=F(_);return y}),r.set(u,f)),f!==void 0){var d=p(f);return d===K?void 0:d}return Reflect.get(a,u,l)},getOwnPropertyDescriptor(a,u){var l=Reflect.getOwnPropertyDescriptor(a,u);if(l&&"value"in l){var f=r.get(u);f&&(l.value=p(f))}else if(l===void 0){var v=r.get(u),d=v==null?void 0:v.v;if(v!==void 0&&d!==K)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return l},has(a,u){var d;if(u===tt)return!0;var l=r.get(u),f=l!==void 0&&l.v!==K||Reflect.has(a,u);if(l!==void 0||I!==null&&(!f||(d=ut(a,u))!=null&&d.writable)){l===void 0&&(l=o(()=>{var b=f?xe(a[u]):K,_=F(b);return _}),r.set(u,l));var v=p(l);if(v===K)return!1}return f},set(a,u,l,f){var S;var v=r.get(u),d=u in a;if(n&&u==="length")for(var b=l;b<v.v;b+=1){var _=r.get(b+"");_!==void 0?T(_,K):b in a&&(_=o(()=>F(K)),r.set(b+"",_))}if(v===void 0)(!d||(S=ut(a,u))!=null&&S.writable)&&(v=o(()=>F(void 0)),T(v,xe(l)),r.set(u,v));else{d=v.v!==K;var y=o(()=>xe(l));T(v,y)}var h=Reflect.getOwnPropertyDescriptor(a,u);if(h!=null&&h.set&&h.set.call(f,l),!d){if(n&&typeof u=="string"){var m=r.get("length"),E=Number(u);Number.isInteger(E)&&E>=m.v&&T(m,E+1)}ir(i)}return!0},ownKeys(a){p(i);var u=Reflect.ownKeys(a).filter(v=>{var d=r.get(v);return d===void 0||d.v!==K});for(var[l,f]of r)f.v!==K&&!(l in a)&&u.push(l);return u},setPrototypeOf(){Vs()}})}function Un(e){try{if(e!==null&&typeof e=="object"&&tt in e)return e[tt]}catch{}return e}function Mo(e,t){return Object.is(Un(e),Un(t))}var qn,Ni,Ti,Mi;function Co(){if(qn===void 0){qn=window,Ni=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ti=ut(t,"firstChild").get,Mi=ut(t,"nextSibling").get,Ln(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),Ln(r)&&(r.__t=void 0)}}function Be(e=""){return document.createTextNode(e)}function Gt(e){return Ti.call(e)}function _r(e){return Mi.call(e)}function g(e,t){return Gt(e)}function B(e,t=!1){{var r=Gt(e);return r instanceof Comment&&r.data===""?_r(r):r}}function $(e,t=1,r=!1){let n=e;for(;t--;)n=_r(n);return n}function Oo(e){e.textContent=""}function Ci(){return!1}function Oi(e,t,r){return document.createElementNS(t??ci,e,void 0)}function Io(e,t){if(t){const r=document.body;e.autofocus=!0,rt(()=>{document.activeElement===r&&e.focus()})}}let Bn=!1;function Lo(){Bn||(Bn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function Ir(e){var t=C,r=I;Se(null),Ae(null);try{return e()}finally{Se(t),Ae(r)}}function Ii(e,t,r,n=r){e.addEventListener(t,()=>Ir(r));const i=e.__on_r;i?e.__on_r=()=>{i(),n(!0)}:e.__on_r=()=>n(!0),Lo()}function Li(e){I===null&&(C===null&&Fs(),zs()),mt&&Ds()}function Ro(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Pe(e,t){var r=I;r!==null&&r.f&ge&&(e|=ge);var n={ctx:q,deps:null,nodes:null,f:e|ie|$e,first:null,fn:t,last:null,next:null,parent:r,b:r&&r.b,prev:null,teardown:null,wv:0,ac:null},i=n;if(e&Bt)Lt!==null?Lt.push(n):pt.ensure().schedule(n);else if(t!==null){try{Wt(n)}catch(o){throw X(n),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&Ot)&&(i=i.first,e&bt&&e&ht&&i!==null&&(i.f|=ht))}if(i!==null&&(i.parent=r,r!==null&&Ro(i,r),C!==null&&C.f&Q&&!(e&vt))){var s=C;(s.effects??(s.effects=[])).push(i)}return n}function mn(){return C!==null&&!Le}function Lr(e){const t=Pe(vr,null);return H(t,G),t.teardown=e,t}function sr(e){Li();var t=I.f,r=!C&&(t&De)!==0&&(t&Ct)===0;if(r){var n=q;(n.e??(n.e=[])).push(e)}else return Ri(e)}function Ri(e){return Pe(Bt|oi,e)}function jo(e){return Li(),Pe(vr|oi,e)}function ji(e){pt.ensure();const t=Pe(vt|Ot,e);return()=>{X(t)}}function Do(e){pt.ensure();const t=Pe(vt|Ot,e);return(r={})=>new Promise(n=>{r.outro?Nt(t,()=>{X(t),n(void 0)}):(X(t),n(void 0))})}function Di(e){return Pe(Bt,e)}function zo(e){return Pe(vn|Ot,e)}function gn(e,t=0){return Pe(vr|t,e)}function nt(e,t=[],r=[],n=[]){$i(n,t,r,i=>{Pe(vr,()=>e(...i.map(p)))})}function mr(e,t=0){var r=Pe(bt|t,e);return r}function zi(e,t=0){var r=Pe(dn|t,e);return r}function de(e){return Pe(De|Ot,e)}function Fi(e){var t=e.teardown;if(t!==null){const r=mt,n=C;Vn(!0),Se(null);try{t.call(null)}finally{Vn(r),Se(n)}}}function bn(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){const i=r.ac;i!==null&&Ir(()=>{i.abort(Ye)});var n=r.next;r.f&vt?r.parent=null:X(r,t),r=n}}function Fo(e){for(var t=e.first;t!==null;){var r=t.next;t.f&De||X(t),t=r}}function X(e,t=!0){var r=!1;(t||e.f&Os)&&e.nodes!==null&&e.nodes.end!==null&&(Uo(e.nodes.start,e.nodes.end),r=!0),H(e,Rn),bn(e,t&&!r),or(e,0);var n=e.nodes&&e.nodes.t;if(n!==null)for(const s of n)s.stop();Fi(e),e.f^=Rn,e.f|=Ee;var i=e.parent;i!==null&&i.first!==null&&Ui(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=null}function Uo(e,t){for(;e!==null;){var r=e===t?null:_r(e);e.remove(),e=r}}function Ui(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function Nt(e,t,r=!0){var n=[];qi(e,n,!0);var i=()=>{r&&X(e),t&&t()},s=n.length;if(s>0){var o=()=>--s||i();for(var a of n)a.out(o)}else i()}function qi(e,t,r){if(!(e.f&ge)){e.f^=ge;var n=e.nodes&&e.nodes.t;if(n!==null)for(const a of n)(a.is_global||r)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next,o=(i.f&ht)!==0||(i.f&De)!==0&&(e.f&bt)!==0;qi(i,t,o?r:!1),i=s}}}function yn(e){Bi(e,!0)}function Bi(e,t){if(e.f&ge){e.f^=ge,e.f&G||(H(e,ie),pt.ensure().schedule(e));for(var r=e.first;r!==null;){var n=r.next,i=(r.f&ht)!==0||(r.f&De)!==0;Bi(r,i?t:!1),r=n}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function wn(e,t){if(e.nodes)for(var r=e.nodes.start,n=e.nodes.end;r!==null;){var i=r===n?null:_r(r);t.append(r),r=i}}let Ar=!1,mt=!1;function Vn(e){mt=e}let C=null,Le=!1;function Se(e){C=e}let I=null;function Ae(e){I=e}let ke=null;function Vi(e){C!==null&&(ke===null?ke=[e]:ke.push(e))}let ce=null,he=0,ye=null;function qo(e){ye=e}let Hi=1,$t=0,Tt=$t;function Hn(e){Tt=e}function Gi(){return++Hi}function gr(e){var t=e.f;if(t&ie)return!0;if(t&Q&&(e.f&=~Mt),t&Ve){for(var r=e.deps,n=r.length,i=0;i<n;i++){var s=r[i];if(gr(s)&&ki(s),s.wv>e.wv)return!0}t&$e&&te===null&&H(e,G)}return!1}function Wi(e,t,r=!0){var n=e.reactions;if(n!==null&&!(ke!==null&&qt.call(ke,e)))for(var i=0;i<n.length;i++){var s=n[i];s.f&Q?Wi(s,t,!1):t===s&&(r?H(s,ie):s.f&G&&H(s,Ve),pn(s))}}function Yi(e){var y;var t=ce,r=he,n=ye,i=C,s=ke,o=q,a=Le,u=Tt,l=e.f;ce=null,he=0,ye=null,C=l&(De|vt)?null:e,ke=null,Vt(e.ctx),Le=!1,Tt=++$t,e.ac!==null&&(Ir(()=>{e.ac.abort(Ye)}),e.ac=null);try{e.f|=Wr;var f=e.fn,v=f();e.f|=Ct;var d=e.deps,b=P==null?void 0:P.is_fork;if(ce!==null){var _;if(b||or(e,he),d!==null&&he>0)for(d.length=he+ce.length,_=0;_<ce.length;_++)d[he+_]=ce[_];else e.deps=d=ce;if(mn()&&e.f&$e)for(_=he;_<d.length;_++)((y=d[_]).reactions??(y.reactions=[])).push(e)}else!b&&d!==null&&he<d.length&&(or(e,he),d.length=he);if(hr()&&ye!==null&&!Le&&d!==null&&!(e.f&(Q|Ve|ie)))for(_=0;_<ye.length;_++)Wi(ye[_],e);if(i!==null&&i!==e){if($t++,i.deps!==null)for(let h=0;h<r;h+=1)i.deps[h].rv=$t;if(t!==null)for(const h of t)h.rv=$t;ye!==null&&(n===null?n=ye:n.push(...ye))}return e.f&ft&&(e.f^=ft),v}catch(h){return pi(h)}finally{e.f^=Wr,ce=t,he=r,ye=n,C=i,ke=s,Vt(o),Le=a,Tt=u}}function Bo(e,t){let r=t.reactions;if(r!==null){var n=Ss.call(r,e);if(n!==-1){var i=r.length-1;i===0?r=t.reactions=null:(r[n]=r[i],r.pop())}}if(r===null&&t.f&Q&&(ce===null||!qt.call(ce,t))){var s=t;s.f&$e&&(s.f^=$e,s.f&=~Mt),hn(s),Po(s),or(s,0)}}function or(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Bo(e,r[n])}function Wt(e){var t=e.f;if(!(t&Ee)){H(e,G);var r=I,n=Ar;I=e,Ar=!0;try{t&(bt|dn)?Fo(e):bn(e),Fi(e);var i=Yi(e);e.teardown=typeof i=="function"?i:null,e.wv=Hi;var s;ks&&lo&&e.f&ie&&e.deps}finally{Ar=n,I=r}}}async function Vo(){await Promise.resolve(),po()}function p(e){var t=e.f,r=(t&Q)!==0;if(C!==null&&!Le){var n=I!==null&&(I.f&Ee)!==0;if(!n&&(ke===null||!qt.call(ke,e))){var i=C.deps;if(C.f&Wr)e.rv<$t&&(e.rv=$t,ce===null&&i!==null&&i[he]===e?he++:ce===null?ce=[e]:ce.push(e));else{(C.deps??(C.deps=[])).push(e);var s=e.reactions;s===null?e.reactions=[C]:qt.call(s,C)||s.push(C)}}}if(mt&&dt.has(e))return dt.get(e);if(r){var o=e;if(mt){var a=o.v;return(!(o.f&G)&&o.reactions!==null||Ji(o))&&(a=_n(o)),dt.set(o,a),a}var u=(o.f&$e)===0&&!Le&&C!==null&&(Ar||(C.f&$e)!==0),l=(o.f&Ct)===0;gr(o)&&(u&&(o.f|=$e),ki(o)),u&&!l&&(Si(o),Ki(o))}if(te!=null&&te.has(e))return te.get(e);if(e.f&ft)throw e.v;return e.v}function Ki(e){if(e.f|=$e,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),t.f&Q&&!(t.f&$e)&&(Si(t),Ki(t))}function Ji(e){if(e.v===K)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(dt.has(t)||t.f&Q&&Ji(t))return!0;return!1}function gt(e){var t=Le;try{return Le=!0,e()}finally{Le=t}}function yt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(tt in e)rn(e);else if(!Array.isArray(e))for(let t in e){const r=e[t];typeof r=="object"&&r&&tt in r&&rn(r)}}}function rn(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{rn(e[n],t)}catch{}const r=cn(e);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const n=ii(r);for(let i in n){const s=n[i].get;if(s)try{s.call(e)}catch{}}}}}function Ho(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Go=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Wo(e){return Go.includes(e)}const Yo={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ko(e){return e=e.toLowerCase(),Yo[e]??e}const Jo=["touchstart","touchmove"];function Xo(e){return Jo.includes(e)}const Et=Symbol("events"),Xi=new Set,nn=new Set;function Qi(e,t,r,n={}){function i(s){if(n.capture||sn.call(t,s),!s.cancelBubble)return Ir(()=>r==null?void 0:r.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?rt(()=>{t.addEventListener(e,i,n)}):t.addEventListener(e,i,n),i}function Zi(e,t,r,n,i){var s={capture:n,passive:i},o=Qi(e,t,r,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Lr(()=>{t.removeEventListener(e,o,s)})}function Re(e,t,r){(t[Et]??(t[Et]={}))[e]=r}function Jt(e){for(var t=0;t<e.length;t++)Xi.add(e[t]);for(var r of nn)r(e)}let Gn=null;function sn(e){var h,m;var t=this,r=t.ownerDocument,n=e.type,i=((h=e.composedPath)==null?void 0:h.call(e))||[],s=i[0]||e.target;Gn=e;var o=0,a=Gn===e&&e[Et];if(a){var u=i.indexOf(a);if(u!==-1&&(t===document||t===window)){e[Et]=t;return}var l=i.indexOf(t);if(l===-1)return;u<=l&&(o=u)}if(s=i[o]||e.target,s!==t){As(e,"currentTarget",{configurable:!0,get(){return s||r}});var f=C,v=I;Se(null),Ae(null);try{for(var d,b=[];s!==null;){var _=s.assignedSlot||s.parentNode||s.host||null;try{var y=(m=s[Et])==null?void 0:m[n];y!=null&&(!s.disabled||e.target===s)&&y.call(s,e)}catch(E){d?b.push(E):d=E}if(e.cancelBubble||_===t||_===null)break;s=_}if(d){for(let E of b)queueMicrotask(()=>{throw E});throw d}}finally{e[Et]=t,delete e.currentTarget,Se(f),Ae(v)}}}var ri;const zr=((ri=globalThis==null?void 0:globalThis.window)==null?void 0:ri.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Qo(e){return(zr==null?void 0:zr.createHTML(e))??e}function es(e){var t=Oi("template");return t.innerHTML=Qo(e.replaceAll("<!>","<!---->")),t.content}function Yt(e,t){var r=I;r.nodes===null&&(r.nodes={start:e,end:t,a:null,t:null})}function U(e,t){var r=(t&to)!==0,n=(t&ro)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=es(s?e:"<!>"+e),r||(i=Gt(i)));var o=n||Ni?document.importNode(i,!0):i.cloneNode(!0);if(r){var a=Gt(o),u=o.lastChild;Yt(a,u)}else Yt(o,o);return o}}function Zo(e,t,r="svg"){var n=!e.startsWith("<!>"),i=`<${r}>${n?e:"<!>"+e}</${r}>`,s;return()=>{if(!s){var o=es(i),a=Gt(o);s=Gt(a)}var u=s.cloneNode(!0);return Yt(u,u),u}}function ea(e,t){return Zo(e,t,"svg")}function ta(e=""){{var t=Be(e+"");return Yt(t,t),t}}function Y(){var e=document.createDocumentFragment(),t=document.createComment(""),r=Be();return e.append(t,r),Yt(t,r),e}function A(e,t){e!==null&&e.before(t)}function ve(e,t){var r=t==null?"":typeof t=="object"?`${t}`:t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=`${r}`)}function ra(e,t){return na(e,t)}const xr=new Map;function na(e,{target:t,anchor:r,props:n={},events:i,context:s,intro:o=!0,transformError:a}){Co();var u=void 0,l=Do(()=>{var f=r??t.appendChild(Be());bo(f,{pending:()=>{}},b=>{He({});var _=q;s&&(_.c=s),i&&(n.$$events=i),u=e(b,n)||{},Ge()},a);var v=new Set,d=b=>{for(var _=0;_<b.length;_++){var y=b[_];if(!v.has(y)){v.add(y);var h=Xo(y);for(const S of[t,document]){var m=xr.get(S);m===void 0&&(m=new Map,xr.set(S,m));var E=m.get(y);E===void 0?(S.addEventListener(y,sn,{passive:h}),m.set(y,1)):m.set(y,E+1)}}}};return d(Cr(Xi)),nn.add(d),()=>{var h;for(var b of v)for(const m of[t,document]){var _=xr.get(m),y=_.get(b);--y==0?(m.removeEventListener(b,sn),_.delete(b),_.size===0&&xr.delete(m)):_.set(b,y)}nn.delete(d),f!==r&&((h=f.parentNode)==null||h.removeChild(f))}});return ia.set(u,l),u}let ia=new WeakMap;var Ie,Ue,me,Pt,cr,dr,Mr;class xn{constructor(t,r=!0){Me(this,"anchor");L(this,Ie,new Map);L(this,Ue,new Map);L(this,me,new Map);L(this,Pt,new Set);L(this,cr,!0);L(this,dr,t=>{if(c(this,Ie).has(t)){var r=c(this,Ie).get(t),n=c(this,Ue).get(r);if(n)yn(n),c(this,Pt).delete(r);else{var i=c(this,me).get(r);i&&(c(this,Ue).set(r,i.effect),c(this,me).delete(r),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),n=i.effect)}for(const[s,o]of c(this,Ie)){if(c(this,Ie).delete(s),s===t)break;const a=c(this,me).get(o);a&&(X(a.effect),c(this,me).delete(o))}for(const[s,o]of c(this,Ue)){if(s===r||c(this,Pt).has(s))continue;const a=()=>{if(Array.from(c(this,Ie).values()).includes(s)){var l=document.createDocumentFragment();wn(o,l),l.append(Be()),c(this,me).set(s,{effect:o,fragment:l})}else X(o);c(this,Pt).delete(s),c(this,Ue).delete(s)};c(this,cr)||!n?(c(this,Pt).add(s),Nt(o,a,!1)):a()}}});L(this,Mr,t=>{c(this,Ie).delete(t);const r=Array.from(c(this,Ie).values());for(const[n,i]of c(this,me))r.includes(n)||(X(i.effect),c(this,me).delete(n))});this.anchor=t,N(this,cr,r)}ensure(t,r){var n=P,i=Ci();if(r&&!c(this,Ue).has(t)&&!c(this,me).has(t))if(i){var s=document.createDocumentFragment(),o=Be();s.append(o),c(this,me).set(t,{effect:de(()=>r(o)),fragment:s})}else c(this,Ue).set(t,de(()=>r(this.anchor)));if(c(this,Ie).set(n,t),i){for(const[a,u]of c(this,Ue))a===t?n.unskip_effect(u):n.skip_effect(u);for(const[a,u]of c(this,me))a===t?n.unskip_effect(u.effect):n.skip_effect(u.effect);n.oncommit(c(this,dr)),n.ondiscard(c(this,Mr))}else c(this,dr).call(this,n)}}Ie=new WeakMap,Ue=new WeakMap,me=new WeakMap,Pt=new WeakMap,cr=new WeakMap,dr=new WeakMap,Mr=new WeakMap;function je(e,t,r=!1){var n=new xn(e),i=r?ht:0;function s(o,a){n.ensure(o,a)}mr(()=>{var o=!1;t((a,u=0)=>{o=!0,s(u,a)}),o||s(-1,null)},i)}function $n(e,t){return t}function sa(e,t,r){for(var n=[],i=t.length,s,o=t.length,a=0;a<i;a++){let v=t[a];Nt(v,()=>{if(s){if(s.pending.delete(v),s.done.add(v),s.pending.size===0){var d=e.outrogroups;on(e,Cr(s.done)),d.delete(s),d.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var u=n.length===0&&r!==null;if(u){var l=r,f=l.parentNode;Oo(f),f.append(l),e.items.clear()}on(e,t,!u)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function on(e,t,r=!0){var n;if(e.pending.size>0){n=new Set;for(const o of e.pending.values())for(const a of o)n.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var s=t[i];if(n!=null&&n.has(s)){s.f|=qe;const o=document.createDocumentFragment();wn(s,o)}else X(t[i],r)}}var Wn;function br(e,t,r,n,i,s=null){var o=e,a=new Map,u=(t&ui)!==0;if(u){var l=e;o=l.appendChild(Be())}var f=null,v=Or(()=>{var S=r();return fn(S)?S:S==null?[]:Cr(S)}),d,b=new Map,_=!0;function y(S){E.effect.f&Ee||(E.pending.delete(S),E.fallback=f,oa(E,d,o,t,n),f!==null&&(d.length===0?f.f&qe?(f.f^=qe,rr(f,null,o)):yn(f):Nt(f,()=>{f=null})))}function h(S){E.pending.delete(S)}var m=mr(()=>{d=p(v);for(var S=d.length,w=new Set,x=P,k=Ci(),M=0;M<S;M+=1){var R=d[M],D=n(R,M),z=_?null:a.get(D);z?(z.v&&Ht(z.v,R),z.i&&Ht(z.i,M),k&&x.unskip_effect(z.e)):(z=aa(a,_?o:Wn??(Wn=Be()),R,D,M,i,t,r),_||(z.e.f|=qe),a.set(D,z)),w.add(D)}if(S===0&&s&&!f&&(_?f=de(()=>s(o)):(f=de(()=>s(Wn??(Wn=Be()))),f.f|=qe)),S>w.size&&js(),!_)if(b.set(x,w),k){for(const[le,be]of a)w.has(le)||x.skip_effect(be.e);x.oncommit(y),x.ondiscard(h)}else y(x);p(v)}),E={effect:m,items:a,pending:b,outrogroups:null,fallback:f};_=!1}function Zt(e){for(;e!==null&&!(e.f&De);)e=e.next;return e}function oa(e,t,r,n,i){var z,le,be,We,it,O,j,ee,ue;var s=(n&Ks)!==0,o=t.length,a=e.items,u=Zt(e.effect.first),l,f=null,v,d=[],b=[],_,y,h,m;if(s)for(m=0;m<o;m+=1)_=t[m],y=i(_,m),h=a.get(y).e,h.f&qe||((le=(z=h.nodes)==null?void 0:z.a)==null||le.measure(),(v??(v=new Set)).add(h));for(m=0;m<o;m+=1){if(_=t[m],y=i(_,m),h=a.get(y).e,e.outrogroups!==null)for(const Ne of e.outrogroups)Ne.pending.delete(h),Ne.done.delete(h);if(h.f&qe)if(h.f^=qe,h===u)rr(h,null,r);else{var E=f?f.next:u;h===e.effect.last&&(e.effect.last=h.prev),h.prev&&(h.prev.next=h.next),h.next&&(h.next.prev=h.prev),st(e,f,h),st(e,h,E),rr(h,E,r),f=h,d=[],b=[],u=Zt(f.next);continue}if(h.f&ge&&(yn(h),s&&((We=(be=h.nodes)==null?void 0:be.a)==null||We.unfix(),(v??(v=new Set)).delete(h))),h!==u){if(l!==void 0&&l.has(h)){if(d.length<b.length){var S=b[0],w;f=S.prev;var x=d[0],k=d[d.length-1];for(w=0;w<d.length;w+=1)rr(d[w],S,r);for(w=0;w<b.length;w+=1)l.delete(b[w]);st(e,x.prev,k.next),st(e,f,x),st(e,k,S),u=S,f=k,m-=1,d=[],b=[]}else l.delete(h),rr(h,u,r),st(e,h.prev,h.next),st(e,h,f===null?e.effect.first:f.next),st(e,f,h),f=h;continue}for(d=[],b=[];u!==null&&u!==h;)(l??(l=new Set)).add(u),b.push(u),u=Zt(u.next);if(u===null)continue}h.f&qe||d.push(h),f=h,u=Zt(h.next)}if(e.outrogroups!==null){for(const Ne of e.outrogroups)Ne.pending.size===0&&(on(e,Cr(Ne.done)),(it=e.outrogroups)==null||it.delete(Ne));e.outrogroups.size===0&&(e.outrogroups=null)}if(u!==null||l!==void 0){var M=[];if(l!==void 0)for(h of l)h.f&ge||M.push(h);for(;u!==null;)!(u.f&ge)&&u!==e.fallback&&M.push(u),u=Zt(u.next);var R=M.length;if(R>0){var D=n&ui&&o===0?r:null;if(s){for(m=0;m<R;m+=1)(j=(O=M[m].nodes)==null?void 0:O.a)==null||j.measure();for(m=0;m<R;m+=1)(ue=(ee=M[m].nodes)==null?void 0:ee.a)==null||ue.fix()}sa(e,M,D)}}s&&rt(()=>{var Ne,Xt;if(v!==void 0)for(h of v)(Xt=(Ne=h.nodes)==null?void 0:Ne.a)==null||Xt.apply()})}function aa(e,t,r,n,i,s,o,a){var u=o&Ws?o&Js?_t(r):No(r,!1,!1):null,l=o&Ys?_t(i):null;return{v:u,i:l,e:de(()=>(s(t,u??r,l??i,a),()=>{e.delete(n)}))}}function rr(e,t,r){if(e.nodes)for(var n=e.nodes.start,i=e.nodes.end,s=t&&!(t.f&qe)?t.nodes.start:r;n!==null;){var o=_r(n);if(s.before(n),n===i)return;n=o}}function st(e,t,r){t===null?e.effect.first=r:t.next=r,r===null?e.effect.last=t:r.prev=t}function re(e,t,r,n,i){var a;var s=(a=t.$$slots)==null?void 0:a[r],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>n:n)}function ts(e,t,r){var n=new xn(e);mr(()=>{var i=t()??null;n.ensure(i,i&&(s=>r(s,i)))},ht)}function la(e,t,r,n,i,s){var o=null,a=e,u=new xn(a,!1);mr(()=>{const l=t()||null;var f=no;if(l===null){u.ensure(null,null);return}return u.ensure(l,v=>{if(l){if(o=Oi(l,f),Yt(o,o),n){var d=o.appendChild(Be());n(o,d)}I.nodes.end=o,v.before(o)}}),()=>{}},ht),Lr(()=>{})}function ua(e,t){var r=void 0,n;zi(()=>{r!==(r=t())&&(n&&(X(n),n=null),r&&(n=de(()=>{Di(()=>r(e))})))})}function rs(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(r=rs(e[t]))&&(n&&(n+=" "),n+=r)}else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function fa(){for(var e,t,r=0,n="",i=arguments.length;r<i;r++)(e=arguments[r])&&(t=rs(e))&&(n&&(n+=" "),n+=t);return n}function ca(e){return typeof e=="object"?fa(e):e??""}const Yn=[...` 	
\r\f \v\uFEFF`];function da(e,t,r){var n=e==null?"":""+e;if(t&&(n=n?n+" "+t:t),r){for(var i of Object.keys(r))if(r[i])n=n?n+" "+i:i;else if(n.length)for(var s=i.length,o=0;(o=n.indexOf(i,o))>=0;){var a=o+s;(o===0||Yn.includes(n[o-1]))&&(a===n.length||Yn.includes(n[a]))?n=(o===0?"":n.substring(0,o))+n.substring(a+1):o=a}}return n===""?null:n}function Kn(e,t=!1){var r=t?" !important;":";",n="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(n+=" "+i+": "+s+r)}return n}function Fr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function va(e,t){if(t){var r="",n,i;if(Array.isArray(t)?(n=t[0],i=t[1]):n=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,o=0,a=!1,u=[];n&&u.push(...Object.keys(n).map(Fr)),i&&u.push(...Object.keys(i).map(Fr));var l=0,f=-1;const y=e.length;for(var v=0;v<y;v++){var d=e[v];if(a?d==="/"&&e[v-1]==="*"&&(a=!1):s?s===d&&(s=!1):d==="/"&&e[v+1]==="*"?a=!0:d==='"'||d==="'"?s=d:d==="("?o++:d===")"&&o--,!a&&s===!1&&o===0){if(d===":"&&f===-1)f=v;else if(d===";"||v===y-1){if(f!==-1){var b=Fr(e.substring(l,f).trim());if(!u.includes(b)){d!==";"&&v++;var _=e.substring(l,v).trim();r+=" "+_+";"}}l=v+1,f=-1}}}}return n&&(r+=Kn(n)),i&&(r+=Kn(i,!0)),r=r.trim(),r===""?null:r}return e==null?null:String(e)}function yr(e,t,r,n,i,s){var o=e.__className;if(o!==r||o===void 0){var a=da(r,n,s);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e.__className=r}else if(s&&i!==s)for(var u in s){var l=!!s[u];(i==null||l!==!!i[u])&&e.classList.toggle(u,l)}return s}function Ur(e,t={},r,n){for(var i in r){var s=r[i];t[i]!==s&&(r[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,n))}}function ha(e,t,r,n){var i=e.__style;if(i!==t){var s=va(t,n);s==null?e.removeAttribute("style"):e.style.cssText=s,e.__style=t}else n&&(Array.isArray(n)?(Ur(e,r==null?void 0:r[0],n[0]),Ur(e,r==null?void 0:r[1],n[1],"important")):Ur(e,r,n));return n}function an(e,t,r=!1){if(e.multiple){if(t==null)return;if(!fn(t))return so();for(var n of e.options)n.selected=t.includes(Jn(n));return}for(n of e.options){var i=Jn(n);if(Mo(i,t)){n.selected=!0;return}}(!r||t!==void 0)&&(e.selectedIndex=-1)}function pa(e){var t=new MutationObserver(()=>{an(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Lr(()=>{t.disconnect()})}function Jn(e){return"__value"in e?e.__value:e.value}const er=Symbol("class"),tr=Symbol("style"),ns=Symbol("is custom element"),is=Symbol("is html"),_a=li?"option":"OPTION",ma=li?"select":"SELECT";function ga(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ar(e,t,r,n){var i=ss(e);i[t]!==(i[t]=r)&&(t==="loading"&&(e[Is]=r),r==null?e.removeAttribute(t):typeof r!="string"&&os(e).includes(t)?e[t]=r:e.setAttribute(t,r))}function ba(e,t,r,n,i=!1,s=!1){var o=ss(e),a=o[ns],u=!o[is],l=t||{},f=e.nodeName===_a;for(var v in t)v in r||(r[v]=null);r.class?r.class=ca(r.class):r[er]&&(r.class=null),r[tr]&&(r.style??(r.style=null));var d=os(e);for(const w in r){let x=r[w];if(f&&w==="value"&&x==null){e.value=e.__value="",l[w]=x;continue}if(w==="class"){var b=e.namespaceURI==="http://www.w3.org/1999/xhtml";yr(e,b,x,n,t==null?void 0:t[er],r[er]),l[w]=x,l[er]=r[er];continue}if(w==="style"){ha(e,x,t==null?void 0:t[tr],r[tr]),l[w]=x,l[tr]=r[tr];continue}var _=l[w];if(!(x===_&&!(x===void 0&&e.hasAttribute(w)))){l[w]=x;var y=w[0]+w[1];if(y!=="$$")if(y==="on"){const k={},M="$$"+w;let R=w.slice(2);var h=Wo(R);if(Ho(R)&&(R=R.slice(0,-7),k.capture=!0),!h&&_){if(x!=null)continue;e.removeEventListener(R,l[M],k),l[M]=null}if(h)Re(R,e,x),Jt([R]);else if(x!=null){let D=function(z){l[w].call(this,z)};var S=D;l[M]=Qi(R,e,D,k)}}else if(w==="style")ar(e,w,x);else if(w==="autofocus")Io(e,!!x);else if(!a&&(w==="__value"||w==="value"&&x!=null))e.value=e.__value=x;else if(w==="selected"&&f)ga(e,x);else{var m=w;u||(m=Ko(m));var E=m==="defaultValue"||m==="defaultChecked";if(x==null&&!a&&!E)if(o[w]=null,m==="value"||m==="checked"){let k=e;const M=t===void 0;if(m==="value"){let R=k.defaultValue;k.removeAttribute(m),k.defaultValue=R,k.value=k.__value=M?R:null}else{let R=k.defaultChecked;k.removeAttribute(m),k.defaultChecked=R,k.checked=M?R:!1}}else e.removeAttribute(w);else E||d.includes(m)&&(a||typeof x!="string")?(e[m]=x,m in o&&(o[m]=K)):typeof x!="function"&&ar(e,m,x)}}}return l}function Xn(e,t,r=[],n=[],i=[],s,o=!1,a=!1){$i(i,r,n,u=>{var l=void 0,f={},v=e.nodeName===ma,d=!1;if(zi(()=>{var _=t(...u.map(p)),y=ba(e,l,_,s,o,a);d&&v&&"value"in _&&an(e,_.value);for(let m of Object.getOwnPropertySymbols(f))_[m]||X(f[m]);for(let m of Object.getOwnPropertySymbols(_)){var h=_[m];m.description===io&&(!l||h!==l[m])&&(f[m]&&X(f[m]),f[m]=de(()=>ua(e,()=>h))),y[m]=h}l=y}),v){var b=e;Di(()=>{an(b,l.value,!0),pa(b)})}d=!0})}function ss(e){return e.__attributes??(e.__attributes={[ns]:e.nodeName.includes("-"),[is]:e.namespaceURI===ci})}var Qn=new Map;function os(e){var t=e.getAttribute("is")||e.nodeName,r=Qn.get(t);if(r)return r;Qn.set(t,r=[]);for(var n,i=e,s=Element.prototype;s!==i;){n=ii(i);for(var o in n)n[o].set&&r.push(o);i=cn(i)}return r}function ot(e,t,r=t){var n=new WeakSet;Ii(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=qr(e)?Br(s):s,r(s),P!==null&&n.add(P),await Vo(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,u=e.value.length;if(e.value=s??"",a!==null){var l=e.value.length;o===a&&a===u&&l>u?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(a,l))}}}),gt(t)==null&&e.value&&(r(qr(e)?Br(e.value):e.value),P!==null&&n.add(P)),gn(()=>{var i=t();if(e===document.activeElement){var s=P;if(n.has(s))return}qr(e)&&i===Br(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function ya(e,t,r=t){Ii(e,"change",n=>{var i=n?e.defaultChecked:e.checked;r(i)}),gt(t)==null&&r(e.checked),gn(()=>{var n=t();e.checked=!!n})}function qr(e){var t=e.type;return t==="number"||t==="range"}function Br(e){return e===""?null:+e}function En(e=!1){const t=q,r=t.l.u;if(!r)return;let n=()=>yt(t.s);if(e){let i=0,s={};const o=pr(()=>{let a=!1;const u=t.s;for(const l in u)u[l]!==s[l]&&(s[l]=u[l],a=!0);return a&&i++,i});n=()=>p(o)}r.b.length&&jo(()=>{Zn(t,n),Hr(r.b)}),sr(()=>{const i=gt(()=>r.m.map(Ms));return()=>{for(const s of i)typeof s=="function"&&s()}}),r.a.length&&sr(()=>{Zn(t,n),Hr(r.a)})}function Zn(e,t){if(e.l.s)for(const r of e.l.s)p(r);t()}const wa={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,r){if(!(t in e.special)){var n=I;try{Ae(e.parent_effect),e.special[t]=wt({get[t](){return e.props[t]}},t,fi)}finally{Ae(n)}}return e.special[t](r),Fn(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Fn(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Z(e,t){return new Proxy({props:e,exclude:t,special:{},version:_t(0),parent_effect:I},wa)}const xa={get(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Qt(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n)return n[t]}},set(e,t,r){let n=e.props.length;for(;n--;){let i=e.props[n];Qt(i)&&(i=i());const s=ut(i,t);if(s&&s.set)return s.set(r),!0}return!1},getOwnPropertyDescriptor(e,t){let r=e.props.length;for(;r--;){let n=e.props[r];if(Qt(n)&&(n=n()),typeof n=="object"&&n!==null&&t in n){const i=ut(n,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===tt||t===ai)return!1;for(let r of e.props)if(Qt(r)&&(r=r()),r!=null&&t in r)return!0;return!1},ownKeys(e){const t=[];for(let r of e.props)if(Qt(r)&&(r=r()),!!r){for(const n in r)t.includes(n)||t.push(n);for(const n of Object.getOwnPropertySymbols(r))t.includes(n)||t.push(n)}return t}};function oe(...e){return new Proxy({props:e},xa)}function wt(e,t,r,n){var S;var i=!Kt||(r&Qs)!==0,s=(r&Zs)!==0,o=(r&eo)!==0,a=n,u=!0,l=()=>(u&&(u=!1,a=o?gt(n):n),a);let f;if(s){var v=tt in e||ai in e;f=((S=ut(e,t))==null?void 0:S.set)??(v&&t in e?w=>e[t]=w:void 0)}var d,b=!1;s?[d,b]=vo(()=>e[t]):d=e[t],d===void 0&&n!==void 0&&(d=l(),f&&(i&&qs(),f(d)));var _;if(i?_=()=>{var w=e[t];return w===void 0?l():(u=!0,w)}:_=()=>{var w=e[t];return w!==void 0&&(a=void 0),w===void 0?a:w},i&&!(r&fi))return _;if(f){var y=e.$$legacy;return function(w,x){return arguments.length>0?((!i||!x||y||b)&&f(x?_():w),w):_()}}var h=!1,m=(r&Xs?pr:Or)(()=>(h=!1,_()));s&&p(m);var E=I;return function(w,x){if(arguments.length>0){const k=x?p(m):i&&s?xe(w):w;return T(m,k),h=!0,a!==void 0&&(a=k),w}return mt&&h||E.f&Ee?m.v:p(m)}}function as(e){q===null&&Ls(),Kt&&q.l!==null?$a(q).m.push(e):sr(()=>{const t=gt(e);if(typeof t=="function")return t})}function $a(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Ea="5";var ni;typeof window<"u"&&((ni=window.__svelte??(window.__svelte={})).v??(ni.v=new Set)).add(Ea);function ka(){let e=F(xe(localStorage.getItem("token"))),t=F(null);return ji(()=>{sr(()=>{p(e)?localStorage.setItem("token",p(e)):localStorage.removeItem("token")})}),{get token(){return p(e)},set token(r){T(e,r,!0)},get user(){return p(t)},set user(r){T(t,r,!0)},get isAuthenticated(){return!!p(e)},get isAdmin(){var r;return((r=p(t))==null?void 0:r.role)==="admin"},logout(){T(e,null),T(t,null)}}}const J=ka();function Sa(){let e=F(xe(window.location.hash.slice(1)||"/"));return ji(()=>{window.addEventListener("hashchange",()=>{T(e,window.location.hash.slice(1)||"/",!0)})}),{get path(){return p(e)},navigate(t){window.location.hash=t}}}const Ze=Sa();uo();/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Aa={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Pa=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2026 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ei=(...e)=>e.filter((t,r,n)=>!!t&&t.trim()!==""&&n.indexOf(t)===r).join(" ").trim();var Na=ea("<svg><!><!></svg>");function ae(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]),n=Z(r,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);He(t,!1);let i=wt(t,"name",8,void 0),s=wt(t,"color",8,"currentColor"),o=wt(t,"size",8,24),a=wt(t,"strokeWidth",8,2),u=wt(t,"absoluteStrokeWidth",8,!1),l=wt(t,"iconNode",24,()=>[]);En();var f=Na();Xn(f,(b,_,y)=>({...Aa,...b,...n,width:o(),height:o(),stroke:s(),"stroke-width":_,class:y}),[()=>Pa(n)?void 0:{"aria-hidden":"true"},()=>(yt(u()),yt(a()),yt(o()),gt(()=>u()?Number(a())*24/Number(o()):a())),()=>(yt(ei),yt(i()),yt(r),gt(()=>ei("lucide-icon","lucide",i()?`lucide-${i()}`:"",r.class)))]);var v=g(f);br(v,1,l,$n,(b,_)=>{var y=ct(()=>Cs(p(_),2));let h=()=>p(y)[0],m=()=>p(y)[1];var E=Y(),S=B(E);la(S,h,!0,(w,x)=>{Xn(w,()=>({...m()}))}),A(b,E)});var d=$(v);re(d,t,"default",{}),A(e,f),Ge()}function Ta(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ae(e,oe({name:"circle-alert"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Ma(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];ae(e,oe({name:"circle-check-big"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Ca(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]];ae(e,oe({name:"info"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function kn(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56"}]];ae(e,oe({name:"loader-circle"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Oa(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m16 17 5-5-5-5"}],["path",{d:"M21 12H9"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}]];ae(e,oe({name:"log-out"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Ia(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];ae(e,oe({name:"mail"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ln(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21"}]];ae(e,oe({name:"monitor"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function La(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ae(e,oe({name:"plus"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Ra(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ae(e,oe({name:"search"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ls(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];ae(e,oe({name:"shield"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ja(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"}]];ae(e,oe({name:"square-pen"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Da(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor"}]];ae(e,oe({name:"tag"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function us(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ae(e,oe({name:"trash-2"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Sn(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{cx:"12",cy:"7",r:"4"}]];ae(e,oe({name:"user"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function za(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87"}],["circle",{cx:"9",cy:"7",r:"4"}]];ae(e,oe({name:"users"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Fa(e,t){const r=Z(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v0.577.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2026 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2026.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The MIT License (MIT) (for portions derived from Feather)
 *
 * Copyright (c) 2013-2026 Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const n=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ae(e,oe({name:"x"},()=>r,{get iconNode(){return n},children:(i,s)=>{var o=Y(),a=B(o);re(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}var Ua=U("<a><!> </a>"),qa=U('<nav class="bg-primary-600 text-white shadow-md"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div class="flex items-center justify-between h-16"><div class="flex items-center space-x-8"><button class="flex-shrink-0 flex items-center font-bold text-xl cursor-pointer hover:opacity-80"><!> PC Components</button> <div class="hidden md:block"><div class="flex items-baseline space-x-4"></div></div></div> <div class="flex items-center"><span class="text-sm mr-4 text-primary-100 hidden sm:block"> </span> <button class="flex items-center px-3 py-2 rounded-md text-sm font-medium text-primary-100 hover:bg-primary-500 hover:text-white transition-colors"><!> Salir</button></div></div></div></nav>');function Ba(e,t){He(t,!0);function r(){J.logout(),Ze.navigate("/login")}let n=ct(()=>()=>{let a=[{path:"/",label:"Productos",icon:ln},{path:"/profile",label:"Perfil",icon:Sn}];return J.isAdmin&&a.push({path:"/admin",label:"Usuarios",icon:za}),a});var i=Y(),s=B(i);{var o=a=>{var u=qa(),l=g(u),f=g(l),v=g(f),d=g(v),b=g(d);ln(b,{class:"mr-2"});var _=$(d,2),y=g(_);br(y,21,()=>p(n)(),$n,(x,k)=>{const M=ct(()=>p(k).icon);var R=Ua(),D=g(R);ts(D,()=>p(M),(le,be)=>{be(le,{class:"w-4 h-4 mr-2"})});var z=$(D);nt(()=>{ar(R,"href",`#${p(k).path??""}`),yr(R,1,`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${Ze.path===p(k).path?"bg-primary-800 text-white":"text-primary-100 hover:bg-primary-500 hover:text-white"}`),ve(z,` ${p(k).label??""}`)}),A(x,R)});var h=$(v,2),m=g(h),E=g(m),S=$(m,2),w=g(S);Oa(w,{class:"w-4 h-4 mr-2"}),nt(()=>{var x;return ve(E,`Hola, ${(((x=J.user)==null?void 0:x.email)||"Usuario")??""}`)}),Re("click",d,()=>Ze.navigate("/")),Re("click",S,r),A(a,u)};je(s,a=>{J.isAuthenticated&&a(o)})}A(e,i),Ge()}Jt(["click"]);function Va(){let e=F(xe([])),t=0;function r(i,s="info",o=3e3){const a=t++;T(e,[...p(e),{id:a,message:i,type:s}],!0),o>0&&setTimeout(()=>{n(a)},o)}function n(i){T(e,p(e).filter(s=>s.id!==i),!0)}return{get toasts(){return p(e)},add:r,remove:n,success:(i,s)=>r(i,"success",s),error:(i,s)=>r(i,"error",s),info:(i,s)=>r(i,"info",s)}}const ne=Va();var Ha=U('<div><!> <p class="flex-grow text-sm font-medium"> </p> <button class="ml-3 hover:opacity-75"><!></button></div>'),Ga=U('<div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2"></div>');function Wa(e,t){He(t,!1);const r={success:Ma,error:Ta,info:Ca},n={success:"bg-green-100 text-green-800 border-green-300",error:"bg-red-100 text-red-800 border-red-300",info:"bg-blue-100 text-blue-800 border-blue-300"};En();var i=Ga();br(i,5,()=>ne.toasts,s=>s.id,(s,o)=>{const a=Or(()=>r[p(o).type]);var u=Ha(),l=g(u);p(a)(l,{class:"w-5 h-5 mr-3 flex-shrink-0"});var f=$(l,2),v=g(f),d=$(f,2),b=g(d);Fa(b,{class:"w-4 h-4"}),nt(()=>{yr(u,1,`flex items-center p-4 border rounded-lg shadow-lg ${n[p(o).type]??""} min-w-[300px] animate-fade-in`,"svelte-1q7l584"),ve(v,p(o).message)}),Re("click",d,()=>ne.remove(p(o).id)),A(s,u)}),A(e,i),Ge()}Jt(["click"]);const Ya="http://localhost:3000/api";async function et(e,t={}){const r={"Content-Type":"application/json",...t.headers||{}};J.token&&(r.Authorization=`Bearer ${J.token}`);const n=await fetch(`${Ya}${e}`,{...t,headers:r});if(!n.ok){n.status===401&&J.logout();const i=await n.json().catch(()=>null);throw new Error((i==null?void 0:i.message)||(i==null?void 0:i.error)||"Error en la petición")}return n.json()}var Ka=U("<!> Iniciando sesión...",1),Ja=U('<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"><div class="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md border border-gray-100"><div class="flex flex-col items-center"><div class="p-3 bg-primary-100 rounded-full text-primary-600 mb-4"><!></div> <h2 class="text-center text-3xl font-extrabold text-gray-900">Inicia sesión</h2> <p class="mt-2 text-center text-sm text-gray-600">en tu tienda de componentes</p></div> <form class="mt-8 space-y-6"><div class="rounded-md shadow-sm space-y-4"><div><label for="username" class="block text-sm font-medium text-gray-700">Usuario</label> <input id="username" type="text" required="" class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm disabled:opacity-50" placeholder="usuario123"/></div> <div><label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label> <input id="password" type="password" required="" class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 sm:text-sm disabled:opacity-50" placeholder="••••••••"/></div></div> <div><button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-70 transition-colors"><!></button></div></form></div></div>');function Xa(e,t){He(t,!0);let r=F(""),n=F(""),i=F(!1);async function s(k){if(k.preventDefault(),!p(r)||!p(n)){ne.error("Por favor, completa todos los campos");return}T(i,!0);try{const M=await et("/auth/login",{method:"POST",body:JSON.stringify({username:p(r),password:p(n)})});J.token=M.token,J.user=M.user,ne.success("¡Bienvenido!"),Ze.navigate("/")}catch(M){ne.error(M.message||"Error al iniciar sesión")}finally{T(i,!1)}}var o=Ja(),a=g(o),u=g(a),l=g(u),f=g(l);ln(f,{size:40});var v=$(u,2),d=g(v),b=g(d),_=$(g(b),2),y=$(b,2),h=$(g(y),2),m=$(d,2),E=g(m),S=g(E);{var w=k=>{var M=Ka(),R=B(M);kn(R,{class:"animate-spin -ml-1 mr-2 h-5 w-5"}),A(k,M)},x=k=>{var M=ta("Ingresar");A(k,M)};je(S,k=>{p(i)?k(w):k(x,-1)})}nt(()=>{_.disabled=p(i),h.disabled=p(i),E.disabled=p(i)}),Zi("submit",v,s),ot(_,()=>p(r),k=>T(r,k)),ot(h,()=>p(n),k=>T(n,k)),A(e,o),Ge()}const $r={async getAll(){return et("/productos")},async getById(e){return et(`/productos/${e}`)},async create(e){return et("/productos",{method:"POST",body:JSON.stringify(e)})},async update(e,t){return et(`/productos/${e}`,{method:"PUT",body:JSON.stringify(t)})},async delete(e){return et(`/productos/${e}`,{method:"DELETE"})}};var Qa=U('<img class="w-full h-full object-cover"/>'),Za=U('<div class="w-full h-full flex items-center justify-center text-gray-400">Sin imagen</div>'),el=U('<div class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Inactivo</div>'),tl=U('<div class="mt-4 pt-4 border-t border-gray-100 flex justify-end space-x-2"><button class="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors" title="Editar"><!></button> <button class="p-2 text-red-600 hover:bg-red-50 rounded transition-colors" title="Borrar"><!></button></div>'),rl=U('<div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"><div class="h-48 bg-gray-100 relative"><!> <!></div> <div class="p-4"><div class="flex justify-between items-start"><h3 class="text-lg font-semibold text-gray-900 line-clamp-1"> </h3> <span class="text-lg font-bold text-primary-600"> </span></div> <p class="mt-1 text-sm text-gray-500 line-clamp-2 min-h-[40px]"> </p> <div class="mt-4 flex items-center justify-between"><div class="flex items-center text-sm text-gray-500"><!> </div> <div> </div></div> <!></div></div>');function nl(e,t){He(t,!0);var r=rl(),n=g(r),i=g(n);{var s=D=>{var z=Qa();nt(()=>{ar(z,"src",t.product.imagen),ar(z,"alt",t.product.nombre)}),A(D,z)},o=D=>{var z=Za();A(D,z)};je(i,D=>{t.product.imagen?D(s):D(o,-1)})}var a=$(i,2);{var u=D=>{var z=el();A(D,z)};je(a,D=>{t.product.activo||D(u)})}var l=$(n,2),f=g(l),v=g(f),d=g(v),b=$(v,2),_=g(b),y=$(f,2),h=g(y),m=$(y,2),E=g(m),S=g(E);Da(S,{class:"w-4 h-4 mr-1"});var w=$(S),x=$(E,2),k=g(x),M=$(m,2);{var R=D=>{var z=tl(),le=g(z),be=g(le);ja(be,{class:"w-4 h-4"});var We=$(le,2),it=g(We);us(it,{class:"w-4 h-4"}),Re("click",le,()=>t.onEdit(t.product)),Re("click",We,()=>t.onDelete(t.product.id)),A(D,z)};je(M,D=>{J.isAdmin&&D(R)})}nt(()=>{ve(d,t.product.nombre),ve(_,`$${t.product.precio??""}`),ve(h,t.product.descripcion),ve(w,` ${(t.product.categoria||"General")??""}`),yr(x,1,`text-sm font-medium ${t.product.stock>0?"text-green-600":"text-red-500"}`),ve(k,`${t.product.stock??""} en stock`)}),A(e,r),Ge()}Jt(["click"]);var il=U('<button class="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-colors"><!> Nuevo</button>'),sl=U('<div class="flex justify-center items-center py-20"><!></div>'),ol=U('<div class="text-center py-20 bg-white rounded-lg border border-gray-200"><p class="text-gray-500 text-lg">No se encontraron productos.</p></div>'),al=U('<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"></div>'),ll=U('<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true"><div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"><div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div> <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span> <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"><form><div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"><h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title"> </h3> <div class="space-y-4"><div><label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label> <input type="text" id="nombre" required="" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"/></div> <div><label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label> <textarea id="descripcion" required="" rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea></div> <div class="grid grid-cols-2 gap-4"><div><label for="precio" class="block text-sm font-medium text-gray-700">Precio</label> <input type="number" id="precio" required="" min="0" step="0.01" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"/></div> <div><label for="stock" class="block text-sm font-medium text-gray-700">Stock</label> <input type="number" id="stock" required="" min="0" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"/></div></div> <div><label for="categoria" class="block text-sm font-medium text-gray-700">Categoría</label> <input type="text" id="categoria" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"/></div> <div class="flex items-center"><input id="activo" type="checkbox" class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"/> <label for="activo" class="ml-2 block text-sm text-gray-900">Producto Activo</label></div></div></div> <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse"><button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50"> </button> <button type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Cancelar</button></div></form></div></div></div>'),ul=U('<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4"><h1 class="text-3xl font-bold text-gray-900">Catálogo de Productos</h1> <div class="flex w-full sm:w-auto gap-4"><div class="relative flex-grow sm:w-64"><div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><!></div> <input type="text" placeholder="Buscar por nombre o categoría..." class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"/></div> <!></div></div> <!></div> <!>',1);function Vr(e,t){He(t,!0);let r=F(xe([])),n=F(!0),i=F(""),s=F(!1),o=F(xe({activo:!0})),a=F(!1),u=ct(()=>()=>{if(!p(i))return p(r);const O=p(i).toLowerCase();return p(r).filter(j=>j.nombre.toLowerCase().includes(O)||j.categoria&&j.categoria.toLowerCase().includes(O))});async function l(){T(n,!0);try{T(r,await $r.getAll(),!0)}catch(O){ne.error(O.message||"Error al cargar productos")}finally{T(n,!1)}}as(()=>{l()});function f(){T(o,{activo:!0,stock:0,precio:0},!0),T(s,!0)}function v(O){T(o,{...O},!0),T(s,!0)}async function d(O){if(confirm("¿Estás seguro de que quieres borrar este producto?"))try{await $r.delete(O),ne.success("Producto borrado"),T(r,p(r).filter(j=>j.id!==O),!0)}catch(j){ne.error(j.message||"Error al borrar")}}async function b(O){O.preventDefault(),T(a,!0);try{if(p(o).id){const j=await $r.update(p(o).id,p(o));T(r,p(r).map(ee=>ee.id===j.id?j:ee),!0),ne.success("Producto actualizado")}else{const j=await $r.create(p(o));T(r,[...p(r),j],!0),ne.success("Producto creado")}T(s,!1)}catch(j){ne.error(j.message||"Error al guardar")}finally{T(a,!1)}}var _=ul(),y=B(_),h=g(y),m=$(g(h),2),E=g(m),S=g(E),w=g(S);Ra(w,{class:"h-5 w-5 text-gray-400"});var x=$(S,2),k=$(E,2);{var M=O=>{var j=il(),ee=g(j);La(ee,{class:"w-5 h-5 mr-1"}),Re("click",j,f),A(O,j)};je(k,O=>{J.isAdmin&&O(M)})}var R=$(h,2);{var D=O=>{var j=sl(),ee=g(j);kn(ee,{class:"w-10 h-10 animate-spin text-primary-600"}),A(O,j)},z=O=>{var j=ol();A(O,j)},le=ct(()=>p(u)().length===0),be=O=>{var j=al();br(j,21,()=>p(u)(),ee=>ee.id,(ee,ue)=>{nl(ee,{get product(){return p(ue)},onEdit:v,onDelete:d})}),A(O,j)};je(R,O=>{p(n)?O(D):p(le)?O(z,1):O(be,-1)})}var We=$(y,2);{var it=O=>{var j=ll(),ee=g(j),ue=g(ee),Ne=$(ue,4),Xt=g(Ne),An=g(Xt),Pn=g(An),fs=g(Pn),cs=$(Pn,2),Nn=g(cs),ds=$(g(Nn),2),Tn=$(Nn,2),vs=$(g(Tn),2),Mn=$(Tn,2),Cn=g(Mn),hs=$(g(Cn),2),ps=$(Cn,2),_s=$(g(ps),2),On=$(Mn,2),ms=$(g(On),2),gs=$(On,2),bs=g(gs),ys=$(An,2),Rr=g(ys),ws=g(Rr),xs=$(Rr,2);nt(()=>{ve(fs,p(o).id?"Editar Producto":"Nuevo Producto"),Rr.disabled=p(a),ve(ws,p(a)?"Guardando...":"Guardar")}),Re("click",ue,()=>T(s,!1)),Zi("submit",Xt,b),ot(ds,()=>p(o).nombre,Te=>p(o).nombre=Te),ot(vs,()=>p(o).descripcion,Te=>p(o).descripcion=Te),ot(hs,()=>p(o).precio,Te=>p(o).precio=Te),ot(_s,()=>p(o).stock,Te=>p(o).stock=Te),ot(ms,()=>p(o).categoria,Te=>p(o).categoria=Te),ya(bs,()=>p(o).activo,Te=>p(o).activo=Te),Re("click",xs,()=>T(s,!1)),A(O,j)};je(We,O=>{p(s)&&O(it)})}ot(x,()=>p(i),O=>T(i,O)),A(e,_),Ge()}Jt(["click"]);var fl=U('<div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div class="bg-white shadow overflow-hidden sm:rounded-lg"><div class="px-4 py-5 sm:px-6 flex items-center"><div class="h-16 w-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-4"><!></div> <div><h3 class="text-lg leading-6 font-medium text-gray-900">Perfil de Usuario</h3> <p class="mt-1 max-w-2xl text-sm text-gray-500">Detalles personales y configuración.</p></div></div> <div class="border-t border-gray-200 px-4 py-5 sm:p-0"><dl class="sm:divide-y sm:divide-gray-200"><div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500 flex items-center"><!> Correo electrónico</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"> </dd></div> <div class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6"><dt class="text-sm font-medium text-gray-500 flex items-center"><!> Rol</dt> <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2"><span> </span></dd></div></dl></div></div></div>');function cl(e,t){He(t,!1),En();var r=fl(),n=g(r),i=g(n),s=g(i),o=g(s);Sn(o,{size:32});var a=$(i,2),u=g(a),l=g(u),f=g(l),v=g(f);Ia(v,{class:"w-4 h-4 mr-2"});var d=$(f,2),b=g(d),_=$(l,2),y=g(_),h=g(y);ls(h,{class:"w-4 h-4 mr-2"});var m=$(y,2),E=g(m),S=g(E);nt(()=>{var w,x;ve(b,(w=J.user)==null?void 0:w.email),yr(E,1,`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${J.isAdmin?"bg-purple-100 text-purple-800":"bg-green-100 text-green-800"}`),ve(S,((x=J.user)==null?void 0:x.role)||"usuario")}),A(e,r),Ge()}var dl=U('<div class="flex justify-center items-center py-20"><!></div>'),vl=U('<li><div class="px-4 py-4 flex items-center sm:px-6"><div class="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between"><div class="flex items-center"><div class="flex-shrink-0"><!></div> <div class="ml-4"><p class="font-medium text-primary-600 truncate"> </p> <p class="mt-1 flex items-center text-sm text-gray-500"><span class="truncate"> </span></p></div></div></div> <div class="ml-5 flex-shrink-0 flex space-x-2"><button class="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50">Cambiar Rol</button> <button class="p-2 border border-transparent rounded-md text-red-600 hover:bg-red-50" title="Eliminar"><!></button></div></div></li>'),hl=U('<div class="bg-white shadow overflow-hidden sm:rounded-md"><ul class="divide-y divide-gray-200"></ul></div>'),pl=U('<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"><div class="mb-8"><h1 class="text-3xl font-bold text-gray-900">Gestión de Usuarios</h1> <p class="mt-2 text-sm text-gray-600">Administra los usuarios registrados en el sistema.</p></div> <!></div>');function _l(e,t){He(t,!0);let r=F(xe([])),n=F(!0);async function i(){try{T(r,await et("/users"),!0)}catch(v){ne.error(v.message||"Error al cargar usuarios")}finally{T(n,!1)}}as(()=>{i()});async function s(v){const d=v.role==="admin"?"usuario":"admin";try{await et(`/users/${v.id}`,{method:"PUT",body:JSON.stringify({...v,role:d})}),T(r,p(r).map(b=>b.id===v.id?{...b,role:d}:b),!0),ne.success("Rol actualizado")}catch(b){ne.error(b.message||"Error al actualizar rol")}}async function o(v){if(confirm("¿Seguro que quieres eliminar este usuario?"))try{await et(`/users/${v}`,{method:"DELETE"}),T(r,p(r).filter(d=>d.id!==v),!0),ne.success("Usuario eliminado")}catch(d){ne.error(d.message||"Error al eliminar usuario")}}var a=pl(),u=$(g(a),2);{var l=v=>{var d=dl(),b=g(d);kn(b,{class:"w-10 h-10 animate-spin text-primary-600"}),A(v,d)},f=v=>{var d=hl(),b=g(d);br(b,21,()=>p(r),$n,(_,y)=>{var h=vl(),m=g(h),E=g(m),S=g(E),w=g(S),x=g(w);{var k=ue=>{ls(ue,{class:"h-10 w-10 text-purple-500 bg-purple-100 rounded-full p-2"})},M=ue=>{Sn(ue,{class:"h-10 w-10 text-gray-400 bg-gray-100 rounded-full p-2"})};je(x,ue=>{p(y).role==="admin"?ue(k):ue(M,-1)})}var R=$(w,2),D=g(R),z=g(D),le=$(D,2),be=g(le),We=g(be),it=$(E,2),O=g(it),j=$(O,2),ee=g(j);us(ee,{class:"w-5 h-5"}),nt(()=>{ve(z,p(y).email),ve(We,`Rol: ${p(y).role??""}`)}),Re("click",O,()=>s(p(y))),Re("click",j,()=>o(p(y).id)),A(_,h)}),A(v,d)};je(u,v=>{p(n)?v(l):v(f,-1)})}A(e,a),Ge()}Jt(["click"]);var ml=U('<div class="min-h-screen flex flex-col"><!> <main class="flex-grow"><!></main> <!></div>');function gl(e,t){He(t,!0);let r=ct(()=>()=>{if(!J.isAuthenticated)return Xa;switch(Ze.path){case"/":case"/products":return Vr;case"/profile":return cl;case"/admin":return J.isAdmin?_l:Vr;default:return Vr}});sr(()=>{!J.isAuthenticated&&Ze.path!=="/login"?Ze.navigate("/login"):J.isAuthenticated&&Ze.path==="/login"&&Ze.navigate("/")});var n=ml(),i=g(n);Ba(i,{});var s=$(i,2),o=g(s);{var a=f=>{const v=ct(()=>p(r)());var d=Y(),b=B(d);ts(b,()=>p(v),(_,y)=>{y(_,{})}),A(f,d)},u=ct(()=>p(r)());je(o,f=>{p(u)&&f(a)})}var l=$(s,2);Wa(l,{}),A(e,n),Ge()}ra(gl,{target:document.getElementById("app")});
