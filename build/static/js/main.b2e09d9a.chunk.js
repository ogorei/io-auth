(this["webpackJsonpauth0-ionic-react"]=this["webpackJsonpauth0-ionic-react"]||[]).push([[1],{69:function(n,e,t){var r={"./ion-action-sheet.entry.js":[94,5],"./ion-alert.entry.js":[95,6],"./ion-app_8.entry.js":[96,7],"./ion-avatar_3.entry.js":[97,17],"./ion-back-button.entry.js":[98,18],"./ion-backdrop.entry.js":[99,45],"./ion-button_2.entry.js":[100,19],"./ion-card_5.entry.js":[101,20],"./ion-checkbox.entry.js":[102,21],"./ion-chip.entry.js":[103,22],"./ion-col_3.entry.js":[104,46],"./ion-datetime_3.entry.js":[105,10],"./ion-fab_3.entry.js":[106,23],"./ion-img.entry.js":[107,47],"./ion-infinite-scroll_2.entry.js":[108,48],"./ion-input.entry.js":[109,24],"./ion-item-option_3.entry.js":[110,25],"./ion-item_8.entry.js":[111,26],"./ion-loading.entry.js":[112,27],"./ion-menu_3.entry.js":[113,28],"./ion-modal.entry.js":[114,8],"./ion-nav_2.entry.js":[115,14],"./ion-popover.entry.js":[116,9],"./ion-progress-bar.entry.js":[117,29],"./ion-radio_2.entry.js":[118,30],"./ion-range.entry.js":[119,31],"./ion-refresher_2.entry.js":[120,11],"./ion-reorder_2.entry.js":[121,16],"./ion-ripple-effect.entry.js":[122,49],"./ion-route_4.entry.js":[123,32],"./ion-searchbar.entry.js":[124,33],"./ion-segment_2.entry.js":[125,34],"./ion-select_3.entry.js":[126,35],"./ion-slide_2.entry.js":[127,50],"./ion-spinner.entry.js":[128,13],"./ion-split-pane.entry.js":[129,51],"./ion-tab-bar_2.entry.js":[130,36],"./ion-tab_2.entry.js":[131,15],"./ion-text.entry.js":[132,37],"./ion-textarea.entry.js":[133,38],"./ion-toast.entry.js":[134,39],"./ion-toggle.entry.js":[135,12],"./ion-virtual-scroll.entry.js":[136,52]};function i(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],i=e[0];return t.e(e[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(r)},i.id=69,n.exports=i},71:function(n,e,t){var r={"./ion-icon.entry.js":[137,59]};function i(n){if(!t.o(r,n))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[n],i=e[0];return t.e(e[1]).then((function(){return t(i)}))}i.keys=function(){return Object.keys(r)},i.id=71,n.exports=i},79:function(n,e,t){},91:function(n,e,t){},92:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),o=t(29),c=t.n(o),s=t(19),a=t(2),j=t.n(a),u=t(10),l=t(22),d=t(7),b=t(51),h=t(56),f=t(28),y="https://5af212ee.auth.dev.upbond.io",p=(Object(d.s)("ios")||Object(d.s)("android"),"http://localhost:3001"),O=(t(79),t(5)),x=function(){var n=Object(s.b)().buildAuthorizeUrl,e=function(){var e=Object(u.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,e.next=5,f.a.open({url:t,windowName:"_self"});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)(d.c,{onClick:e,children:"\u30ed\u30b0\u30a4\u30f3\u3059\u308b"})},v=function(){var n=Object(s.b)(),e=n.buildLogoutUrl,t=n.logout,r=function(){var n=Object(u.a)(j.a.mark((function n(){return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.a.open({url:e({returnTo:p}),windowName:"_self"});case 2:t({localOnly:!0});case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.jsx)(d.c,{onClick:r,children:"Log out"})},m=function(){var n=Object(s.b)(),e=n.user;return n.isLoading?Object(O.jsx)("div",{children:"Loading ..."}):e?Object(O.jsxs)("div",{className:"profile-container",children:[Object(O.jsx)(d.b,{className:"avatar",children:Object(O.jsx)("img",{src:"http://placekitten.com/g/200/300"})}),Object(O.jsx)("h2",{children:e.name}),Object(O.jsx)("p",{children:e.email})]}):null},_=function(){var n=Object(s.b)(),e=n.isLoading,t=n.isAuthenticated;return e?null:Object(O.jsxs)(d.f,{children:[Object(O.jsx)(d.e,{children:Object(O.jsx)(d.j,{children:Object(O.jsx)(d.i,{children:"FDCP APP"})})}),Object(O.jsxs)(d.d,{children:[Object(O.jsx)("div",{className:"ion-content"}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(m,{}),t?Object(O.jsx)(v,{}):Object(O.jsx)(x,{})]})]})]})},g=(t(81),t(82),t(83),t(84),t(85),t(86),t(87),t(88),t(89),t(90),t(91),function(){var n=Object(s.b)().handleRedirectCallback;return Object(r.useEffect)((function(){h.a.addListener("appUrlOpen",function(){var e=Object(u.a)(j.a.mark((function e(t){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=t.url).startsWith(p)){e.next=7;break}if(!r.includes("state")||!r.includes("code")&&!r.includes("error")){e.next=5;break}return e.next=5,n(r);case 5:return e.next=7,f.a.close();case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[n]),Object(O.jsx)(d.a,{children:Object(O.jsx)(b.a,{children:Object(O.jsxs)(d.h,{children:[Object(O.jsx)(l.b,{exact:!0,path:"/home",children:Object(O.jsx)(_,{})}),Object(O.jsx)(l.b,{exact:!0,path:"/",children:Object(O.jsx)(l.a,{to:"/home"})})]})})})});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var w=function(n){n&&n instanceof Function&&t.e(60).then(t.bind(null,156)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,c=e.getTTFB;t(n),r(n),i(n),o(n),c(n)}))};c.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(s.a,{domain:y,clientId:"mpyrI32eB7-3mvVozFBVM",redirectUri:p,children:Object(O.jsx)(g,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)})),w()}},[[92,3,4]]]);
//# sourceMappingURL=main.b2e09d9a.chunk.js.map