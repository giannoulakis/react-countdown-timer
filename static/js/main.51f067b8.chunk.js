(this["webpackJsonpreact-countdown-timer"]=this["webpackJsonpreact-countdown-timer"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(3),r=n.n(i),a=(n(9),n(1));function s(e){var t=Object(o.useState)((new Date).getTime()+60*e.minutes*1e3),n=Object(a.a)(t,1)[0],i=Object(o.useState)(p()),r=Object(a.a)(i,2),s=r[0],u=r[1],l=Object(o.useState)(0),f=Object(a.a)(l,2),d=f[0],m=f[1],v=Object(o.useState)("00:00"),h=Object(a.a)(v,2),w=h[0],g=h[1];function b(){u(p())}function p(){return 1e3*Math.ceil((n-(new Date).getTime())/1e3)}return Object(o.useEffect)((function(){if(!(s<=0)){m(100-Math.floor(s/(60*e.minutes*1e3)*100)),g(Math.floor(s/1e3/60)+":"+("0"+s/1e3%60).substr(-2,2));var t=setTimeout(b,1e3);return function(){return clearTimeout(t)}}e.onFinish&&e.onFinish()}),[s,n]),Object(o.useEffect)((function(){e.onUpdate&&e.onUpdate(w)}),[w]),Object(o.useEffect)((function(){var e;return window.navigator.requestWakeLock&&(e=window.navigator.requestWakeLock("screen")),function(){return e&&e.unlock()}}),[]),c.a.createElement("div",null,c.a.createElement("div",{className:"progress",style:{width:d+"%"}}),c.a.createElement("div",{className:"clock"},w))}function u(e){document.title=e}var l=function(){var e=Object(o.useRef)(null),t=Object(o.useState)(!1),n=Object(a.a)(t,2),i=n[0],r=n[1],l=Object(o.useState)(25),f=Object(a.a)(l,2),d=f[0],m=f[1];function v(){localStorage.setItem("minutes",d),r(!0)}function h(){r(!1),u("Finished")}function w(e){return 27===e.keyCode&&h()}return Object(o.useEffect)((function(){var e=window.location.hash.match(/#(\d+)/);if(e)m(e[1]),r(!0);else{var t=localStorage.getItem("minutes");t&&m(t)}return document.addEventListener("keydown",w),function(){return document.removeEventListener("keydown",w)}}),[]),Object(o.useEffect)((function(){i||e.current.focus()}),[i]),c.a.createElement("div",null,i?c.a.createElement("div",{onClick:h,title:"click to stop",className:"hand"},c.a.createElement(s,{minutes:d,onUpdate:u,onFinish:h})):c.a.createElement("div",{className:"config"},c.a.createElement("input",{ref:e,onKeyDown:function(e){13===e.keyCode&&v()},type:"number",min:"1",max:"60",value:d,onChange:function(e){return m(e.target.value)}}),c.a.createElement("button",{onClick:v},"Start")))},f=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}r.a.render(c.a.createElement(l,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-countdown-timer",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/react-countdown-timer","/service-worker.js");f?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(t,e)}))}}()},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.51f067b8.chunk.js.map