(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,n,t){e.exports=t(12)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var i=t(0),o=t.n(i),r=t(3),a=t.n(r),c=(t(10),t(1)),s=(t(11),function(){return{width:window.innerWidth,height:window.innerHeight}}),l=function(e){var n=e.center,t=e.width,i=e.height,r=e.GridSpacing,a=0-r+n.x%r,c=0-r+n.y%r;return o.a.createElement("g",{id:"grid"},Array.from({length:Math.ceil(t/r)}).map(function(e,n){return a+=r,o.a.createElement("line",{key:n,className:"gline",x1:a,y1:0,x2:a,y2:i})}),Array.from({length:Math.ceil(i/r)}).map(function(e,n){return c+=r,o.a.createElement("line",{className:"gline",key:n,x1:0,y1:c,x2:t,y2:c})}))},u=function(){var e=Object(i.useState)(s()),n=Object(c.a)(e,2),t=n[0],r=n[1],a=t.width,u=t.height,d={x:a/2,y:u/2},h=a/21,f=Object(i.useState)(0),w=Object(c.a)(f,2),g=w[0],v=w[1],m=a/(h/10);return Object(i.useEffect)(function(){requestAnimationFrame(function(){v(g>m?0:g+2*Math.PI/(a/h*10)*.25)})},[g]),Object(i.useEffect)(function(){window.addEventListener("resize",function(){r(s())})},[]),o.a.createElement("div",{id:"App"},o.a.createElement("span",{className:"percentage"},"".concat(Number(g/m*100).toFixed(2),"%")),o.a.createElement("svg",{width:a,height:u},o.a.createElement(l,{width:a,height:u,GridSpacing:h,center:d}),Array.from({length:10*Math.floor(a/h)+h}).map(function(e,n){var t=n*h/10,i=Math.sin(2*Math.PI*g/(a/t));return o.a.createElement("circle",{key:n,cx:t,cy:d.y+u/2*i,r:n%10,style:{fill:"hsla(".concat(-180*i,", 100%, 50%)")}})})))},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function h(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.render(o.a.createElement(u,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/waves",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/waves","/service-worker.js");d?(function(e,n){fetch(e).then(function(t){var i=t.headers.get("content-type");404===t.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):h(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):h(n,e)})}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.f4d981f5.chunk.js.map