(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{37:function(e,t,n){},71:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(0),i=n.n(r),c=n(5),a=n.n(c),s=(n(37),n(25)),l=n(26),u=n(30),j=n(29);function h(){return Object(o.jsx)("h2",{style:{fontFamily:"monospace",fontWeight:"bolder",fontSize:"250%",textDecoration:"underline overline",color:"#A35CFF",backgroundColor:"#F3FFE1"},align:"center",id:"authors",children:"Mike Lavlinskiy and Olga Ilinskaya production, var. 67125, P3214"})}var f=n(10),d=n(14),b={token:localStorage.getItem("login")};var g=Object(d.b)((function(e,t){switch(t.type){case"change":return localStorage.setItem("login",t.value),{login:t.value};default:return e}}),b),v=n(20),x=n(11);var m=function(){var e=Object(r.useState)(""),t=Object(f.a)(e,2),n=t[0],i=t[1],c=Object(r.useState)(""),a=Object(f.a)(c,2),s=a[0],l=a[1];return Object(o.jsx)("div",{className:"login_form",children:Object(o.jsxs)("form",{children:[Object(o.jsx)(v.InputText,{type:"text",id:"username",value:n,onChange:function(e){return i(e.target.value)}}),Object(o.jsx)(v.InputText,{type:"password",id:"password",value:s,onChange:function(e){return l(e.target.value)}}),Object(o.jsx)(x.Button,{type:"button",onClick:function(e){var t={login:n,password:s},o=[];for(var r in t)o.push(r+"="+t[r]);console.log(o),o="?"+o.join("&"),fetch("/register"+o,{method:"POST"}).then((function(e){return e.json().then((function(t){e.ok?(console.log(t),console.log(t.login)):alert("\u041e\u0448\u0438\u0431\u043a\u0430!")}))}))},children:"\u044f \u043d\u043e\u0432\u0435\u043d\u044c\u043a\u0438\u0439"}),Object(o.jsx)(x.Button,{type:"button",onClick:function(e){var t={login:n,password:s},o=[];for(var r in t)o.push(r+"="+t[r]);console.log(o),o="?"+o.join("&"),fetch("/login"+o,{method:"POST"}).then((function(e){return e.json().then((function(t){e.ok?(console.log(t),console.log(t.login),g.dispatch({type:"change",value:t.login})):alert("\u041e\u0448\u0438\u0431\u043a\u0430!")}))}))},children:"\u044f \u0443\u0436\u0435 \u0441\u043c\u0435\u0448\u0430\u0440\u0438\u043a"})]})})},O=n(15);var p=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{id:"form",children:[Object(o.jsx)(O.InputNumber,{value:e.x_form,onValueChange:function(t){return e.setX(t.value)},mode:"decimal",min:-3,max:3,minFractionDigits:1,maxFractionDigits:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 X(-3 .. 3)"}),Object(o.jsx)(O.InputNumber,{value:e.y_form,onValueChange:function(t){return e.setY(t.value)},mode:"decimal",min:-3,max:3,minFractionDigits:1,maxFractionDigits:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 Y(-3 .. 3)"}),Object(o.jsx)(O.InputNumber,{value:e.r_form,onValueChange:function(t){return e.setY(t.value)},mode:"decimal",min:0,max:3,minFractionDigits:1,maxFractionDigits:5,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 R(0 .. 3)"}),Object(o.jsx)(x.Button,{type:"button",onClick:function(){var t={login:g.getState().login,x:e.x_form,y:e.y_form,r:e.r_form},n=[];for(var o in t)n.push(o+"="+t[o]);console.log(n),n="?"+n.join("&"),e.validate()&&fetch("/point"+n,{method:"POST"}).then((function(t){return t.text().then((function(t){console.log(JSON.parse(t)),e.setChecks(JSON.parse(t))}))}))},icon:"pi"})]})})};var k=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(m,{})})};var y=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{id:"but",type:"button",onClick:function(e){g.dispatch({type:"change",value:null}),console.log("\u0431\u0430\u0431\u0430\u043b\u0438\u0442\u0438")},children:"logout"})})},T=n(28),S=n(12);var C=function(e){return Object(o.jsxs)(T.DataTable,{id:"resultTable",value:e.checks,children:[Object(o.jsx)(S.Column,{header:"X",field:"x"}),Object(o.jsx)(S.Column,{header:"Y",field:"y"}),Object(o.jsx)(S.Column,{header:"R",field:"r"}),Object(o.jsx)(S.Column,{header:"Hit or miss?",field:"result"})]})};function F(e,t){e.canvas.width=e.canvas.offsetWidth,e.canvas.height=e.canvas.offsetHeight;var n=e.canvas.width,o=e.canvas.height,r=t+"",i=t/2+"";e.clearRect(0,0,n,o),e.fillStyle="#E8D7FF",e.fillRect(150,50,100,200),e.beginPath(),e.moveTo(250,250),e.lineTo(350,250),e.lineTo(250,50),e.fill(),e.moveTo(250,250),e.arc(250,250,100,Math.PI/2,Math.PI),e.fill(),e.beginPath(),e.strokeStyle="#FF47A0",e.lineWidth=2,e.moveTo(0,250),e.lineTo(500,250),e.stroke(),e.beginPath(),e.strokeStyle="#FF47A0",e.lineWidth=2,e.moveTo(250,500),e.lineTo(250,0),e.stroke(),e.strokeText(i,350,250),e.strokeText(r,450,250),e.strokeText(i,250,350),e.strokeText(r,250,450),e.strokeText(i,150,250),e.strokeText(i,250,150),e.strokeText(r,250,50),e.strokeText(i,350,250),e.strokeText(r,50,250),e.strokeText("Y",250,10),e.strokeText("X",490,250)}var w=function(e){var t=Object(r.useRef)();return Object(r.useEffect)((function(){F(t.current.getContext("2d"),e.r)}),[F,e]),Object(o.jsx)("div",{children:Object(o.jsx)("canvas",{id:"canvas",ref:t,onClick:function(t){!function(e,t,n){var o=parseFloat(t);isNaN(o)&&(o=1);var r=document.getElementById("canvas"),i=(e.pageX-r.offsetLeft-250)*t/200,c=(250-(e.pageY-r.offsetTop))*t/200,a=function(e,t,n){return e>t&&e<n};if(a(o,0,3)&&a(i,-3,3)&&a(c,-3,3)){var s={login:g.getState().login,x:i,y:c,r:o},l=[];for(var u in s)l.push(u+"="+s[u]);console.log(l),l="?"+l.join("&"),fetch("/point"+l,{method:"POST"}).then((function(e){return e.json().then((function(e){}))}))}}(t,e.r,e.setChecks)},style:{width:"500px",height:"500px",textAlign:"center",margin:"0 auto"}})})};n(71);var I=function(){var e=function(e,t,n){return e>t&&e<n},t=Object(r.useState)("0"),n=Object(f.a)(t,2),i=n[0],c=n[1],a=Object(r.useState)("0"),s=Object(f.a)(a,2),l=s[0],u=s[1],j=Object(r.useState)("1"),h=Object(f.a)(j,2),d=h[0],b=h[1],g=Object(r.useState)("5"),v=Object(f.a)(g,2),x=v[0],m=v[1];return Object(o.jsxs)("div",{children:[Object(o.jsx)(w,{r:d,setChecks:m}),Object(o.jsx)(p,{validate:function(){return e(i,-3,3)&&e(l,-3,3)&&e(d,0,3)},x_form:i,y_form:l,r_form:d,setX:c,setY:u,setR:b,setChecks:m,checks:x,showChecks:void console.log(x)}),Object(o.jsx)(C,{checks:x}),Object(o.jsx)(y,{})]})},P=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.store.subscribe((function(){e.setState({reduxState:e.props.store.getState()})}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:"firstPage",style:{backgroundImage:"url(images/wallpaper.jpg)",backgroundSize:"45%",backgroundRepeat:"repeat"},children:[Object(o.jsx)(h,{}),Object(o.jsx)("br",{}),null==this.props.store.getState().login?Object(o.jsx)(k,{}):Object(o.jsx)(I,{})]})}}]),n}(r.Component);n(73),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(P,{store:g})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.ca2eda16.chunk.js.map