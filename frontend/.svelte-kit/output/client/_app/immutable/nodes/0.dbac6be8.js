import{C as Be,S as Y,i as Z,s as p,D as O,k as w,a as q,l as B,m as I,c as G,h as L,n as u,b as A,E as V,g as b,v as N,d as D,f as y,F as z,G as U,H as j,I as we,J as Q,K as W,L as J,M as X,q as le,r as te,N as Ae,e as ne,O as ce,P as Oe,Q as ze,R as ue,T as $,U as Ue,V as je,o as qe,W as Ge,y as se,z as ae,A as ie,B as oe}from"../chunks/index.ddb9a552.js";import{w as Ne}from"../chunks/index.7be621fd.js";const x={};function de(l){return l==="local"?localStorage:sessionStorage}function re(l,e,s){const a=(s==null?void 0:s.serializer)??JSON,o=(s==null?void 0:s.storage)??"local";function t(i,r){de(o).setItem(i,a.stringify(r))}if(!x[l]){const i=Ne(e,H=>{const g=de(o).getItem(l);g&&H(a.parse(g));{const m=F=>{F.key===l&&H(F.newValue?a.parse(F.newValue):null)};return window.addEventListener("storage",m),()=>window.removeEventListener("storage",m)}}),{subscribe:r,set:h}=i;x[l]={set(H){t(l,H),h(H)},update(H){const g=H(Be(i));t(l,g),h(g)},subscribe:r}}return x[l]}const ye=re("modeOsPrefers",!1),Je=re("modeUserPrefers",void 0),ee=re("modeCurrent",!1);function Ke(){const l=window.matchMedia("(prefers-color-scheme: light)").matches;return ye.set(l),l}function Qe(l){Je.set(l)}function he(l){const e=document.documentElement.classList,s="dark";l===!0?e.remove(s):e.add(s),ee.set(l)}function We(){const l=document.documentElement.classList,e=localStorage.getItem("modeUserPrefers")==="false",s=!("modeUserPrefers"in localStorage),a=window.matchMedia("(prefers-color-scheme: dark)").matches;e||s&&a?l.add("dark"):l.remove("dark")}const Xe=l=>({}),ge=l=>({}),Ye=l=>({}),_e=l=>({}),Ze=l=>({}),me=l=>({});function be(l){let e,s,a;const o=l[22].lead,t=O(o,l,l[21],me);return{c(){e=w("div"),t&&t.c(),this.h()},l(i){e=B(i,"DIV",{class:!0});var r=I(e);t&&t.l(r),r.forEach(L),this.h()},h(){u(e,"class",s="app-bar-slot-lead "+l[4])},m(i,r){A(i,e,r),t&&t.m(e,null),a=!0},p(i,r){t&&t.p&&(!a||r&2097152)&&z(t,o,i,i[21],a?j(o,i[21],r,Ze):U(i[21]),me),(!a||r&16&&s!==(s="app-bar-slot-lead "+i[4]))&&u(e,"class",s)},i(i){a||(b(t,i),a=!0)},o(i){D(t,i),a=!1},d(i){i&&L(e),t&&t.d(i)}}}function ke(l){let e,s,a;const o=l[22].trail,t=O(o,l,l[21],_e);return{c(){e=w("div"),t&&t.c(),this.h()},l(i){e=B(i,"DIV",{class:!0});var r=I(e);t&&t.l(r),r.forEach(L),this.h()},h(){u(e,"class",s="app-bar-slot-trail "+l[2])},m(i,r){A(i,e,r),t&&t.m(e,null),a=!0},p(i,r){t&&t.p&&(!a||r&2097152)&&z(t,o,i,i[21],a?j(o,i[21],r,Ye):U(i[21]),_e),(!a||r&4&&s!==(s="app-bar-slot-trail "+i[2]))&&u(e,"class",s)},i(i){a||(b(t,i),a=!0)},o(i){D(t,i),a=!1},d(i){i&&L(e),t&&t.d(i)}}}function ve(l){let e,s,a;const o=l[22].headline,t=O(o,l,l[21],ge);return{c(){e=w("div"),t&&t.c(),this.h()},l(i){e=B(i,"DIV",{class:!0});var r=I(e);t&&t.l(r),r.forEach(L),this.h()},h(){u(e,"class",s="app-bar-row-headline "+l[5])},m(i,r){A(i,e,r),t&&t.m(e,null),a=!0},p(i,r){t&&t.p&&(!a||r&2097152)&&z(t,o,i,i[21],a?j(o,i[21],r,Xe):U(i[21]),ge),(!a||r&32&&s!==(s="app-bar-row-headline "+i[5]))&&u(e,"class",s)},i(i){a||(b(t,i),a=!0)},o(i){D(t,i),a=!1},d(i){i&&L(e),t&&t.d(i)}}}function pe(l){let e,s,a,o,t,i,r,h,H,g,m=l[8].lead&&be(l);const F=l[22].default,S=O(F,l,l[21],null);let v=l[8].trail&&ke(l),E=l[8].headline&&ve(l);return{c(){e=w("div"),s=w("div"),m&&m.c(),a=q(),o=w("div"),S&&S.c(),i=q(),v&&v.c(),h=q(),E&&E.c(),this.h()},l(f){e=B(f,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var n=I(e);s=B(n,"DIV",{class:!0});var _=I(s);m&&m.l(_),a=G(_),o=B(_,"DIV",{class:!0});var T=I(o);S&&S.l(T),T.forEach(L),i=G(_),v&&v.l(_),_.forEach(L),h=G(n),E&&E.l(n),n.forEach(L),this.h()},h(){u(o,"class",t="app-bar-slot-default "+l[3]),u(s,"class",r="app-bar-row-main "+l[6]),u(e,"class",H="app-bar "+l[7]),u(e,"data-testid","app-bar"),u(e,"role","toolbar"),u(e,"aria-label",l[0]),u(e,"aria-labelledby",l[1])},m(f,n){A(f,e,n),V(e,s),m&&m.m(s,null),V(s,a),V(s,o),S&&S.m(o,null),V(s,i),v&&v.m(s,null),V(e,h),E&&E.m(e,null),g=!0},p(f,[n]){f[8].lead?m?(m.p(f,n),n&256&&b(m,1)):(m=be(f),m.c(),b(m,1),m.m(s,a)):m&&(N(),D(m,1,1,()=>{m=null}),y()),S&&S.p&&(!g||n&2097152)&&z(S,F,f,f[21],g?j(F,f[21],n,null):U(f[21]),null),(!g||n&8&&t!==(t="app-bar-slot-default "+f[3]))&&u(o,"class",t),f[8].trail?v?(v.p(f,n),n&256&&b(v,1)):(v=ke(f),v.c(),b(v,1),v.m(s,null)):v&&(N(),D(v,1,1,()=>{v=null}),y()),(!g||n&64&&r!==(r="app-bar-row-main "+f[6]))&&u(s,"class",r),f[8].headline?E?(E.p(f,n),n&256&&b(E,1)):(E=ve(f),E.c(),b(E,1),E.m(e,null)):E&&(N(),D(E,1,1,()=>{E=null}),y()),(!g||n&128&&H!==(H="app-bar "+f[7]))&&u(e,"class",H),(!g||n&1)&&u(e,"aria-label",f[0]),(!g||n&2)&&u(e,"aria-labelledby",f[1])},i(f){g||(b(m),b(S,f),b(v),b(E),g=!0)},o(f){D(m),D(S,f),D(v),D(E),g=!1},d(f){f&&L(e),m&&m.d(),S&&S.d(f),v&&v.d(),E&&E.d()}}}const xe="flex flex-col",$e="grid items-center",el="",ll="flex-none flex justify-between items-center",tl="flex-auto",sl="flex-none flex items-center space-x-4";function al(l,e,s){let a,o,t,i,r,h,{$$slots:H={},$$scope:g}=e;const m=we(H);let{background:F="bg-surface-100-800-token"}=e,{border:S=""}=e,{padding:v="p-4"}=e,{shadow:E=""}=e,{spacing:f="space-y-4"}=e,{gridColumns:n="grid-cols-[auto_1fr_auto]"}=e,{gap:_="gap-4"}=e,{regionRowMain:T=""}=e,{regionRowHeadline:C=""}=e,{slotLead:R=""}=e,{slotDefault:M=""}=e,{slotTrail:d=""}=e,{label:k=""}=e,{labelledby:P=""}=e;return l.$$set=c=>{s(23,e=Q(Q({},e),W(c))),"background"in c&&s(9,F=c.background),"border"in c&&s(10,S=c.border),"padding"in c&&s(11,v=c.padding),"shadow"in c&&s(12,E=c.shadow),"spacing"in c&&s(13,f=c.spacing),"gridColumns"in c&&s(14,n=c.gridColumns),"gap"in c&&s(15,_=c.gap),"regionRowMain"in c&&s(16,T=c.regionRowMain),"regionRowHeadline"in c&&s(17,C=c.regionRowHeadline),"slotLead"in c&&s(18,R=c.slotLead),"slotDefault"in c&&s(19,M=c.slotDefault),"slotTrail"in c&&s(20,d=c.slotTrail),"label"in c&&s(0,k=c.label),"labelledby"in c&&s(1,P=c.labelledby),"$$scope"in c&&s(21,g=c.$$scope)},l.$$.update=()=>{s(7,a=`${xe} ${F} ${S} ${f} ${v} ${E} ${e.class??""}`),l.$$.dirty&114688&&s(6,o=`${$e} ${n} ${_} ${T}`),l.$$.dirty&131072&&s(5,t=`${el} ${C}`),l.$$.dirty&262144&&s(4,i=`${ll} ${R}`),l.$$.dirty&524288&&s(3,r=`${tl} ${M}`),l.$$.dirty&1048576&&s(2,h=`${sl} ${d}`)},e=W(e),[k,P,h,r,i,t,o,a,m,F,S,v,E,f,n,_,T,C,R,M,d,g,H]}class il extends Y{constructor(e){super(),Z(this,e,al,pe,p,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const ol=l=>({}),Le=l=>({}),rl=l=>({}),Se=l=>({}),fl=l=>({}),Ee=l=>({}),nl=l=>({}),De=l=>({}),cl=l=>({}),Pe=l=>({}),ul=l=>({}),He=l=>({});function Re(l){let e,s,a;const o=l[18].header,t=O(o,l,l[17],He);return{c(){e=w("header"),t&&t.c(),this.h()},l(i){e=B(i,"HEADER",{id:!0,class:!0});var r=I(e);t&&t.l(r),r.forEach(L),this.h()},h(){u(e,"id","shell-header"),u(e,"class",s="flex-none "+l[7])},m(i,r){A(i,e,r),t&&t.m(e,null),a=!0},p(i,r){t&&t.p&&(!a||r&131072)&&z(t,o,i,i[17],a?j(o,i[17],r,ul):U(i[17]),He),(!a||r&128&&s!==(s="flex-none "+i[7]))&&u(e,"class",s)},i(i){a||(b(t,i),a=!0)},o(i){D(t,i),a=!1},d(i){i&&L(e),t&&t.d(i)}}}function Fe(l){let e,s;const a=l[18].sidebarLeft,o=O(a,l,l[17],Pe);return{c(){e=w("aside"),o&&o.c(),this.h()},l(t){e=B(t,"ASIDE",{id:!0,class:!0});var i=I(e);o&&o.l(i),i.forEach(L),this.h()},h(){u(e,"id","sidebar-left"),u(e,"class",l[6])},m(t,i){A(t,e,i),o&&o.m(e,null),s=!0},p(t,i){o&&o.p&&(!s||i&131072)&&z(o,a,t,t[17],s?j(a,t[17],i,cl):U(t[17]),Pe),(!s||i&64)&&u(e,"class",t[6])},i(t){s||(b(o,t),s=!0)},o(t){D(o,t),s=!1},d(t){t&&L(e),o&&o.d(t)}}}function Me(l){let e,s,a;const o=l[18].pageHeader,t=O(o,l,l[17],De),i=t||dl();return{c(){e=w("header"),i&&i.c(),this.h()},l(r){e=B(r,"HEADER",{id:!0,class:!0});var h=I(e);i&&i.l(h),h.forEach(L),this.h()},h(){u(e,"id","page-header"),u(e,"class",s="flex-none "+l[4])},m(r,h){A(r,e,h),i&&i.m(e,null),a=!0},p(r,h){t&&t.p&&(!a||h&131072)&&z(t,o,r,r[17],a?j(o,r[17],h,nl):U(r[17]),De),(!a||h&16&&s!==(s="flex-none "+r[4]))&&u(e,"class",s)},i(r){a||(b(i,r),a=!0)},o(r){D(i,r),a=!1},d(r){r&&L(e),i&&i.d(r)}}}function dl(l){let e;return{c(){e=le("(slot:header)")},l(s){e=te(s,"(slot:header)")},m(s,a){A(s,e,a)},d(s){s&&L(e)}}}function Ce(l){let e,s,a;const o=l[18].pageFooter,t=O(o,l,l[17],Ee),i=t||hl();return{c(){e=w("footer"),i&&i.c(),this.h()},l(r){e=B(r,"FOOTER",{id:!0,class:!0});var h=I(e);i&&i.l(h),h.forEach(L),this.h()},h(){u(e,"id","page-footer"),u(e,"class",s="flex-none "+l[2])},m(r,h){A(r,e,h),i&&i.m(e,null),a=!0},p(r,h){t&&t.p&&(!a||h&131072)&&z(t,o,r,r[17],a?j(o,r[17],h,fl):U(r[17]),Ee),(!a||h&4&&s!==(s="flex-none "+r[2]))&&u(e,"class",s)},i(r){a||(b(i,r),a=!0)},o(r){D(i,r),a=!1},d(r){r&&L(e),i&&i.d(r)}}}function hl(l){let e;return{c(){e=le("(slot:footer)")},l(s){e=te(s,"(slot:footer)")},m(s,a){A(s,e,a)},d(s){s&&L(e)}}}function Ie(l){let e,s;const a=l[18].sidebarRight,o=O(a,l,l[17],Se);return{c(){e=w("aside"),o&&o.c(),this.h()},l(t){e=B(t,"ASIDE",{id:!0,class:!0});var i=I(e);o&&o.l(i),i.forEach(L),this.h()},h(){u(e,"id","sidebar-right"),u(e,"class",l[5])},m(t,i){A(t,e,i),o&&o.m(e,null),s=!0},p(t,i){o&&o.p&&(!s||i&131072)&&z(o,a,t,t[17],s?j(a,t[17],i,rl):U(t[17]),Se),(!s||i&32)&&u(e,"class",t[5])},i(t){s||(b(o,t),s=!0)},o(t){D(o,t),s=!1},d(t){t&&L(e),o&&o.d(t)}}}function Te(l){let e,s,a;const o=l[18].footer,t=O(o,l,l[17],Le);return{c(){e=w("footer"),t&&t.c(),this.h()},l(i){e=B(i,"FOOTER",{id:!0,class:!0});var r=I(e);t&&t.l(r),r.forEach(L),this.h()},h(){u(e,"id","shell-footer"),u(e,"class",s="flex-none "+l[1])},m(i,r){A(i,e,r),t&&t.m(e,null),a=!0},p(i,r){t&&t.p&&(!a||r&131072)&&z(t,o,i,i[17],a?j(o,i[17],r,ol):U(i[17]),Le),(!a||r&2&&s!==(s="flex-none "+i[1]))&&u(e,"class",s)},i(i){a||(b(t,i),a=!0)},o(i){D(t,i),a=!1},d(i){i&&L(e),t&&t.d(i)}}}function gl(l){let e,s,a,o,t,i,r,h,H,g,m,F,S,v,E,f=l[9].header&&Re(l),n=l[9].sidebarLeft&&Fe(l),_=l[9].pageHeader&&Me(l);const T=l[18].default,C=O(T,l,l[17],null);let R=l[9].pageFooter&&Ce(l),M=l[9].sidebarRight&&Ie(l),d=l[9].footer&&Te(l);return{c(){e=w("div"),f&&f.c(),s=q(),a=w("div"),n&&n.c(),o=q(),t=w("div"),_&&_.c(),i=q(),r=w("main"),C&&C.c(),H=q(),R&&R.c(),m=q(),M&&M.c(),F=q(),d&&d.c(),this.h()},l(k){e=B(k,"DIV",{id:!0,class:!0,"data-testid":!0});var P=I(e);f&&f.l(P),s=G(P),a=B(P,"DIV",{class:!0});var c=I(a);n&&n.l(c),o=G(c),t=B(c,"DIV",{id:!0,class:!0});var K=I(t);_&&_.l(K),i=G(K),r=B(K,"MAIN",{id:!0,class:!0});var fe=I(r);C&&C.l(fe),fe.forEach(L),H=G(K),R&&R.l(K),K.forEach(L),m=G(c),M&&M.l(c),c.forEach(L),F=G(P),d&&d.l(P),P.forEach(L),this.h()},h(){u(r,"id","page-content"),u(r,"class",h="flex-auto "+l[3]),u(t,"id","page"),u(t,"class",g=l[0]+" "+Ve),u(a,"class","flex-auto "+ml),u(e,"id","appShell"),u(e,"class",l[8]),u(e,"data-testid","app-shell")},m(k,P){A(k,e,P),f&&f.m(e,null),V(e,s),V(e,a),n&&n.m(a,null),V(a,o),V(a,t),_&&_.m(t,null),V(t,i),V(t,r),C&&C.m(r,null),V(t,H),R&&R.m(t,null),V(a,m),M&&M.m(a,null),V(e,F),d&&d.m(e,null),S=!0,v||(E=J(t,"scroll",l[19]),v=!0)},p(k,[P]){k[9].header?f?(f.p(k,P),P&512&&b(f,1)):(f=Re(k),f.c(),b(f,1),f.m(e,s)):f&&(N(),D(f,1,1,()=>{f=null}),y()),k[9].sidebarLeft?n?(n.p(k,P),P&512&&b(n,1)):(n=Fe(k),n.c(),b(n,1),n.m(a,o)):n&&(N(),D(n,1,1,()=>{n=null}),y()),k[9].pageHeader?_?(_.p(k,P),P&512&&b(_,1)):(_=Me(k),_.c(),b(_,1),_.m(t,i)):_&&(N(),D(_,1,1,()=>{_=null}),y()),C&&C.p&&(!S||P&131072)&&z(C,T,k,k[17],S?j(T,k[17],P,null):U(k[17]),null),(!S||P&8&&h!==(h="flex-auto "+k[3]))&&u(r,"class",h),k[9].pageFooter?R?(R.p(k,P),P&512&&b(R,1)):(R=Ce(k),R.c(),b(R,1),R.m(t,null)):R&&(N(),D(R,1,1,()=>{R=null}),y()),(!S||P&1&&g!==(g=k[0]+" "+Ve))&&u(t,"class",g),k[9].sidebarRight?M?(M.p(k,P),P&512&&b(M,1)):(M=Ie(k),M.c(),b(M,1),M.m(a,null)):M&&(N(),D(M,1,1,()=>{M=null}),y()),k[9].footer?d?(d.p(k,P),P&512&&b(d,1)):(d=Te(k),d.c(),b(d,1),d.m(e,null)):d&&(N(),D(d,1,1,()=>{d=null}),y()),(!S||P&256)&&u(e,"class",k[8])},i(k){S||(b(f),b(n),b(_),b(C,k),b(R),b(M),b(d),S=!0)},o(k){D(f),D(n),D(_),D(C,k),D(R),D(M),D(d),S=!1},d(k){k&&L(e),f&&f.d(),n&&n.d(),_&&_.d(),C&&C.d(k),R&&R.d(),M&&M.d(),d&&d.d(),v=!1,E()}}}const _l="w-full h-full flex flex-col overflow-hidden",ml="w-full h-full flex overflow-hidden",Ve="flex-1 overflow-x-hidden flex flex-col",bl="flex-none overflow-x-hidden overflow-y-auto",kl="flex-none overflow-x-hidden overflow-y-auto";function vl(l,e,s){let a,o,t,i,r,h,H,g,{$$slots:m={},$$scope:F}=e;const S=we(m);let{regionPage:v=""}=e,{slotHeader:E="z-10"}=e,{slotSidebarLeft:f="w-auto"}=e,{slotSidebarRight:n="w-auto"}=e,{slotPageHeader:_=""}=e,{slotPageContent:T=""}=e,{slotPageFooter:C=""}=e,{slotFooter:R=""}=e;function M(d){X.call(this,l,d)}return l.$$set=d=>{s(20,e=Q(Q({},e),W(d))),"regionPage"in d&&s(0,v=d.regionPage),"slotHeader"in d&&s(10,E=d.slotHeader),"slotSidebarLeft"in d&&s(11,f=d.slotSidebarLeft),"slotSidebarRight"in d&&s(12,n=d.slotSidebarRight),"slotPageHeader"in d&&s(13,_=d.slotPageHeader),"slotPageContent"in d&&s(14,T=d.slotPageContent),"slotPageFooter"in d&&s(15,C=d.slotPageFooter),"slotFooter"in d&&s(16,R=d.slotFooter),"$$scope"in d&&s(17,F=d.$$scope)},l.$$.update=()=>{s(8,a=`${_l} ${e.class??""}`),l.$$.dirty&1024&&s(7,o=`${E}`),l.$$.dirty&2048&&s(6,t=`${bl} ${f}`),l.$$.dirty&4096&&s(5,i=`${kl} ${n}`),l.$$.dirty&8192&&s(4,r=`${_}`),l.$$.dirty&16384&&s(3,h=`${T}`),l.$$.dirty&32768&&s(2,H=`${C}`),l.$$.dirty&65536&&s(1,g=`${R}`)},e=W(e),[v,g,H,h,r,i,t,o,a,S,E,f,n,_,T,C,R,F,m,M]}class Ll extends Y{constructor(e){super(),Z(this,e,vl,gl,p,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function Sl(l){let e,s=`<script nonce="%sveltekit.nonce%">(${We.toString()})();<\/script>`,a,o,t,i,r,h,H,g,m,F,S,v,E;return{c(){e=new Ae(!1),a=ne(),o=q(),t=w("div"),i=w("div"),r=ce("svg"),h=ce("path"),this.h()},l(f){const n=Oe("svelte-gewkj4",document.head);e=ze(n,!1),a=ne(),n.forEach(L),o=G(f),t=B(f,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var _=I(t);i=B(_,"DIV",{class:!0});var T=I(i);r=ue(T,"svg",{class:!0,xmlns:!0,viewBox:!0});var C=I(r);h=ue(C,"path",{d:!0}),I(h).forEach(L),C.forEach(L),T.forEach(L),_.forEach(L),this.h()},h(){e.a=a,u(h,"d",H=l[0]?l[4].sun:l[4].moon),u(r,"class",g="lightswitch-icon "+l[1]),u(r,"xmlns","http://www.w3.org/2000/svg"),u(r,"viewBox","0 0 512 512"),u(i,"class",m="lightswitch-thumb "+l[2]),u(t,"class",F="lightswitch-track "+l[3]),u(t,"role","switch"),u(t,"aria-label","Light Switch"),u(t,"aria-checked",l[0]),u(t,"title",S="Toggle "+(l[0]===!0?"Dark":"Light")+" Mode"),u(t,"tabindex","0")},m(f,n){e.m(s,document.head),V(document.head,a),A(f,o,n),A(f,t,n),V(t,i),V(i,r),V(r,h),v||(E=[J(t,"click",l[5]),J(t,"click",l[18]),J(t,"keydown",Hl),J(t,"keydown",l[19]),J(t,"keyup",l[20]),J(t,"keypress",l[21])],v=!0)},p(f,[n]){n&1&&H!==(H=f[0]?f[4].sun:f[4].moon)&&u(h,"d",H),n&2&&g!==(g="lightswitch-icon "+f[1])&&u(r,"class",g),n&4&&m!==(m="lightswitch-thumb "+f[2])&&u(i,"class",m),n&8&&F!==(F="lightswitch-track "+f[3])&&u(t,"class",F),n&1&&u(t,"aria-checked",f[0]),n&1&&S!==(S="Toggle "+(f[0]===!0?"Dark":"Light")+" Mode")&&u(t,"title",S)},i:$,o:$,d(f){L(a),f&&e.d(),f&&L(o),f&&L(t),v=!1,Ue(E)}}}const El="cursor-pointer",Dl="aspect-square scale-[0.8] flex justify-center items-center",Pl="w-[70%] aspect-square";function Hl(l){["Enter","Space"].includes(l.code)&&(l.preventDefault(),l.currentTarget.click())}function Rl(l,e,s){let a,o,t,i,r,h,H,g;je(l,ee,c=>s(0,g=c));let{bgLight:m="bg-surface-50"}=e,{bgDark:F="bg-surface-900"}=e,{fillLight:S="fill-surface-50"}=e,{fillDark:v="fill-surface-900"}=e,{width:E="w-12"}=e,{height:f="h-6"}=e,{ring:n="ring-[1px] ring-surface-500/30"}=e,{rounded:_="rounded-token"}=e;const T="transition-all duration-[200ms]",C={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function R(){Ge(ee,g=!g,g),Qe(g),he(g)}qe(()=>{"modeCurrent"in localStorage||he(Ke())});function M(c){X.call(this,l,c)}function d(c){X.call(this,l,c)}function k(c){X.call(this,l,c)}function P(c){X.call(this,l,c)}return l.$$set=c=>{s(23,e=Q(Q({},e),W(c))),"bgLight"in c&&s(6,m=c.bgLight),"bgDark"in c&&s(7,F=c.bgDark),"fillLight"in c&&s(8,S=c.fillLight),"fillDark"in c&&s(9,v=c.fillDark),"width"in c&&s(10,E=c.width),"height"in c&&s(11,f=c.height),"ring"in c&&s(12,n=c.ring),"rounded"in c&&s(13,_=c.rounded)},l.$$.update=()=>{l.$$.dirty&193&&s(17,a=g===!0?m:F),l.$$.dirty&193&&s(16,o=g===!0?F:m),l.$$.dirty&1&&s(15,t=g===!0?"translate-x-[100%]":""),l.$$.dirty&769&&s(14,i=g===!0?S:v),s(3,r=`${El} ${T} ${E} ${f} ${n} ${_} ${a} ${e.class??""}`),l.$$.dirty&108544&&s(2,h=`${Dl} ${T} ${f} ${_} ${o} ${t}`),l.$$.dirty&16384&&s(1,H=`${Pl} ${i}`)},e=W(e),[g,H,h,r,C,R,m,F,S,v,E,f,n,_,i,t,o,a,M,d,k,P]}class Fl extends Y{constructor(e){super(),Z(this,e,Rl,Sl,p,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Ml(l){let e;const s=l[0].default,a=O(s,l,l[1],null);return{c(){a&&a.c()},l(o){a&&a.l(o)},m(o,t){a&&a.m(o,t),e=!0},p(o,t){a&&a.p&&(!e||t&2)&&z(a,s,o,o[1],e?j(s,o[1],t,null):U(o[1]),null)},i(o){e||(b(a,o),e=!0)},o(o){D(a,o),e=!1},d(o){a&&a.d(o)}}}function Cl(l){let e,s;return{c(){e=w("strong"),s=le("Gerty"),this.h()},l(a){e=B(a,"STRONG",{class:!0});var o=I(e);s=te(o,"Gerty"),o.forEach(L),this.h()},h(){u(e,"class","text-xl uppercase")},m(a,o){A(a,e,o),V(e,s)},p:$,d(a){a&&L(e)}}}function Il(l){let e,s;return e=new Fl({}),{c(){se(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,o){ie(e,a,o),s=!0},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){D(e.$$.fragment,a),s=!1},d(a){oe(e,a)}}}function Tl(l){let e,s;return e=new il({props:{$$slots:{trail:[Il],lead:[Cl]},$$scope:{ctx:l}}}),{c(){se(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,o){ie(e,a,o),s=!0},p(a,o){const t={};o&2&&(t.$$scope={dirty:o,ctx:a}),e.$set(t)},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){D(e.$$.fragment,a),s=!1},d(a){oe(e,a)}}}function Vl(l){let e,s;return e=new Ll({props:{$$slots:{header:[Tl],default:[Ml]},$$scope:{ctx:l}}}),{c(){se(e.$$.fragment)},l(a){ae(e.$$.fragment,a)},m(a,o){ie(e,a,o),s=!0},p(a,[o]){const t={};o&2&&(t.$$scope={dirty:o,ctx:a}),e.$set(t)},i(a){s||(b(e.$$.fragment,a),s=!0)},o(a){D(e.$$.fragment,a),s=!1},d(a){oe(e,a)}}}function wl(l,e,s){let{$$slots:a={},$$scope:o}=e;return l.$$set=t=>{"$$scope"in t&&s(1,o=t.$$scope)},[a,o]}class Ol extends Y{constructor(e){super(),Z(this,e,wl,Vl,p,{})}}export{Ol as component};
