(this["webpackJsonpreact-countdown-timer"]=this["webpackJsonpreact-countdown-timer"]||[]).push([[0],{10:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(3),u=n.n(o),i=(n(9),n(1));function r(e){var t=Object(c.useState)((new Date).getTime()+60*e.minutes*1e3),n=Object(i.a)(t,1)[0],o=Object(c.useState)(h()),u=Object(i.a)(o,2),r=u[0],s=u[1],l=Object(c.useState)(0),m=Object(i.a)(l,2),f=m[0],d=m[1],b=Object(c.useState)("00:00"),v=Object(i.a)(b,2),j=v[0],E=v[1];function O(){s(h())}function h(){return 1e3*Math.ceil((n-(new Date).getTime())/1e3)}return Object(c.useEffect)((function(){if(!(r<=0)){d(100-Math.floor(r/(60*e.minutes*1e3)*100)),E(Math.floor(r/1e3/60)+":"+("0"+r/1e3%60).substr(-2,2));var t=setTimeout(O,1e3);return function(){return clearTimeout(t)}}e.onFinish&&e.onFinish()}),[r,n]),Object(c.useEffect)((function(){e.onUpdate&&e.onUpdate(j)}),[j]),a.a.createElement("div",null,a.a.createElement("div",{className:"progress",style:{width:f+"%"}}),a.a.createElement("div",{className:"clock"},j))}function s(e){document.title=e}var l=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(i.a)(t,2),o=n[0],u=n[1],l=Object(c.useState)(25),m=Object(i.a)(l,2),f=m[0],d=m[1];function b(){localStorage.setItem("minutes",f),u(!0)}function v(){u(!1),s("Finished")}function j(e){return 27===e.keyCode&&v()}return Object(c.useEffect)((function(){var e=window.location.hash.match(/#(\d+)/);if(e)d(e[1]),u(!0);else{var t=localStorage.getItem("minutes");t&&d(t)}return document.addEventListener("keydown",j),function(){return document.removeEventListener("keydown",j)}}),[]),Object(c.useEffect)((function(){o||e.current.focus()}),[o]),a.a.createElement("div",null,o?a.a.createElement("div",{onClick:v,title:"click to stop",className:"hand"},a.a.createElement(r,{minutes:f,onUpdate:s,onFinish:v})):a.a.createElement("div",{className:"config"},a.a.createElement("input",{ref:e,onKeyDown:function(e){13===e.keyCode&&b()},type:"number",min:"1",max:"60",value:f,onChange:function(e){return d(e.target.value)}}),a.a.createElement("button",{onClick:b},"Start")))};u.a.render(a.a.createElement(l,null),document.getElementById("root"))},4:function(e,t,n){e.exports=n(10)},9:function(e,t,n){}},[[4,1,2]]]);
//# sourceMappingURL=main.5a06c8c7.chunk.js.map