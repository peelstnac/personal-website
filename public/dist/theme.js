(()=>{"use strict";var e={913:(e,t,o)=>{o.d(t,{j:()=>n});const n=e=>{e&&e["front-title-page"]&&(document.getElementById("front-title-page").classList.add("no-transition"),document.querySelectorAll(".icon").forEach((e=>{e.classList.add("no-transition")})),setTimeout((()=>{document.getElementById("front-title-page").classList.remove("no-transition"),document.querySelectorAll(".icon").forEach((e=>{e.classList.remove("no-transition")}))}),100));var t=localStorage.getItem("theme");null===t&&(t="light",localStorage.setItem("theme",t)),"dark"===t?(r(),document.getElementById("toggle-theme-input").checked=!0):document.getElementById("toggle-theme-input").checked=!1,document.getElementById("toggle-theme-input").addEventListener("change",(()=>{r()}))},r=()=>{document.body.classList.contains("light")?(localStorage.setItem("theme","dark"),document.body.classList.replace("light","dark")):(localStorage.setItem("theme","light"),document.body.classList.replace("dark","light"))}}},t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n](r,r.exports,o),r.exports}o.m=e,o.x=e=>{},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={505:0},t=[[913]],n=e=>{},r=(r,l)=>{for(var a,s,[c,i,d,u]=l,m=0,g=[];m<c.length;m++)s=c[m],o.o(e,s)&&e[s]&&g.push(e[s][0]),e[s]=0;for(a in i)o.o(i,a)&&(o.m[a]=i[a]);for(d&&d(o),r&&r(l);g.length;)g.shift()();return u&&t.push.apply(t,u),n()},l=self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[];function a(){for(var n,r=0;r<t.length;r++){for(var l=t[r],a=!0,s=1;s<l.length;s++){var c=l[s];0!==e[c]&&(a=!1)}a&&(t.splice(r--,1),n=o(o.s=l[0]))}return 0===t.length&&(o.x(),o.x=e=>{}),n}l.forEach(r.bind(null,0)),l.push=r.bind(null,l.push.bind(l));var s=o.x;o.x=()=>(o.x=s||(e=>{}),(n=a)())})(),o.x()})();