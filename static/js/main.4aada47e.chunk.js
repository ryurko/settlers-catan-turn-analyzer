(this.webpackJsonpsettlers=this.webpackJsonpsettlers||[]).push([[0],{172:function(e,t,n){e.exports=n(357)},178:function(e,t,n){},357:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),l=n(51),c=n.n(l),u=n(10),i=(n(177),n(178),n(360)),o=n(361),m=n(134),s=n(363),f=n(132),E=function e(t,n,a){Object(f.a)(this,e),e.id=e.id+1,this.id=e.id,this.player=t,this.time=n,this.roll=a};E.id=0;var d=E,v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Settlers of Catan Turn Analyzer"),r.a.createElement("div",null,"You ",r.a.createElement("strong",null,"really")," think that 4 came up more than the 8? "," ",'Tired of everyone "wrongly" claiming you take the longest turns? '," ",r.a.createElement("strong",null,"Only one way to find out!")),r.a.createElement("em",null,"By ",r.a.createElement("a",{href:"https://deanattali.com",target:"_blank",rel:"noopener noreferrer"},"Dean Attali")," "," ","\xb7 "," ","April 19, 2020 "," ","\xb7 "," ","Code ",r.a.createElement("a",{href:"https://github.com/daattali/settlers-catan-turn-analyzer",target:"_blank",rel:"noopener noreferrer"},"on GitHub")),r.a.createElement("hr",null))},b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return e.toString().padStart(t,"0")},h=function(e){var t=Math.round(Math.floor(e/60)),n=Math.round(e%60);return"".concat(b(t,1),":").concat(b(n,2))},g=function(e,t){return Array.from(new Array(t-e+1),(function(t,n){return n+e}))},p=function(e){var t=e.time,n=void 0===t?void 0:"".concat(b(t.getHours()),":").concat(b(t.getMinutes()));return r.a.createElement("div",null,"Game started: ",n)},y=function(e){var t=e.turns,n=e.players;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement("div",{key:e.id},e.id,". "," ",r.a.createElement("strong",null,n[e.player])," "," ","took ",e.time," seconds "," ",void 0===e.roll?null:"(rolled ".concat(e.roll,")"))})))},O=n(362),j=function(e){var t=e.initValue,n=void 0===t?"":t,l=e.setValue,c=Object(a.useState)(n),i=Object(u.a)(c,2),o=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement(O.a.Group,null,r.a.createElement(O.a.Label,null,"Enter player names ",r.a.createElement("strong",null,"in order of play"),", comma-separated"),r.a.createElement(O.a.Control,{type:"text",value:o,onChange:function(e){return m(e.target.value)}})),r.a.createElement(s.a,{variant:"primary",size:"lg",onClick:function(){return l(o.split(",").map((function(e){return e.trim()})).filter((function(e){return""!==e})))}},"Start!"))},k=function(e){var t=e.getValue,n=e.resetValue,l=e.initRunning,c=void 0===l||l,i=Object(a.useState)(c),o=Object(u.a)(i,2),m=o[0],f=o[1],E=Object(a.useState)(0),d=Object(u.a)(E,2),v=d[0],b=d[1];return Object(a.useEffect)((function(){var e=setInterval((function(){return m?b(v+1):{}}),1e3);return function(){return clearInterval(e)}}),[m,v]),Object(a.useEffect)((function(){return t(v)}),[v,t]),Object(a.useEffect)((function(){return b(0)}),[n]),r.a.createElement("div",{className:"timer-area"},r.a.createElement("span",{className:"timer-numbers"},h(v))," "," ",r.a.createElement(s.a,{variant:"outline-dark",size:"lg",className:"timer-btn",onClick:function(){return f(!m)}},m?r.a.createElement(r.a.Fragment,null,"\u275a\u275a"):r.a.createElement(r.a.Fragment,null,"\u25b6")))},S=function(e){var t=e.getValue,n=e.resetValue,l=g(2,12),c=Object(a.useState)(),i=Object(u.a)(c,2),o=i[0],m=i[1],f=function(e){var t=parseInt(e.target.value);o===t?m():m(t)};return Object(a.useEffect)((function(){return t(o)}),[o,t]),Object(a.useEffect)((function(){return m()}),[n]),r.a.createElement("div",{className:"rolls-selection"},l.map((function(e){return r.a.createElement(s.a,{variant:"outline-dark",size:"md",key:e,onClick:f,value:e,className:"roll ".concat(e===o?"active":"")},e)})))},w=n(359),V=function(e){var t=e.turns,n=e.players,a=e.currentPlayer,l="".concat(100/n.length,"%"),c=function(e){return t.filter((function(t){return t.player===e}))},u=n.map((function(e,t){var n=c(t);return 0===n.length?0:n.reduce((function(e,t){return t.time+e}),0)/n.length}));return r.a.createElement("div",{className:"turn-table"},r.a.createElement("h2",null,"Average Turn Length"),r.a.createElement(w.a,{striped:!0,bordered:!0,hover:!0,size:"sm",width:"100%"},r.a.createElement("thead",null,r.a.createElement("tr",null,n.map((function(e,t){return r.a.createElement("th",{width:l,key:e,className:"".concat(t===a?"active":"")},e)})))),r.a.createElement("tbody",null,r.a.createElement("tr",null,u.map((function(e,t){return r.a.createElement("td",{width:l,key:t},h(e))}))))))},C=n(32),N=function(e){var t=e.turns,n=g(2,12).map((function(e){var n=t.filter((function(t){return t.roll===e})).length;return{roll:e,freq:n}}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Dice Rolls"),r.a.createElement(C.b,{width:500,height:250,data:n},r.a.createElement(C.c,null),r.a.createElement(C.a,{dataKey:"freq",fill:"#8884d8"}),r.a.createElement(C.d,{dataKey:"roll"}),r.a.createElement(C.e,null)))},A=function(e){var t=e.defaultPlayers,n=Object(a.useState)([]),l=Object(u.a)(n,2),c=l[0],f=l[1],E=Object(a.useState)(0),b=Object(u.a)(E,2),h=b[0],g=b[1],O=Object(a.useState)([]),w=Object(u.a)(O,2),C=w[0],A=w[1],z=Object(a.useState)(),T=Object(u.a)(z,2),D=T[0],x=T[1],I=Object(a.useState)(!1),M=Object(u.a)(I,2),P=M[0],B=M[1],F=Object(a.useState)(0),G=Object(u.a)(F,2),H=G[0],R=G[1],q=Object(a.useState)(0),J=Object(u.a)(q,2),K=J[0],L=J[1],_=Object(a.useState)(0),Y=Object(u.a)(_,2),Q=Y[0],U=Y[1],W=Object(a.useState)(),X=Object(u.a)(W,2),Z=X[0],$=X[1];Object(a.useEffect)((function(){return x(new Date)}),[c]);return r.a.createElement(i.a,{fluid:!0},r.a.createElement(v,null),r.a.createElement(o.a,null,r.a.createElement(m.a,{md:6,xl:4},r.a.createElement("div",{className:"main-panel"},0===c.length?r.a.createElement(j,{initValue:t,setValue:f}):r.a.createElement("div",null,r.a.createElement(p,{time:D}),r.a.createElement("h3",null,c[h],"'s Turn"),r.a.createElement(k,{getValue:L,resetValue:H,initRunning:!1}),r.a.createElement(S,{getValue:$,resetValue:Q}),r.a.createElement("br",null),r.a.createElement(s.a,{variant:"primary",size:"lg",onClick:function(){return function(){var e=new d(h,K,Z);A(C.concat(e)),U(Q+1),R(H+1);var t=(h+1)%c.length;g(t)}()}},r.a.createElement("strong",null,"End Turn")))),0===c.length?null:r.a.createElement("div",{className:"details-section"},r.a.createElement(s.a,{variant:"link",onClick:function(){return B(!P)}},P?"Hide":"Show"," Turn Details"),P?r.a.createElement(y,{turns:C,players:c}):null)),r.a.createElement(m.a,{md:6,xl:8},0===c.length?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{turns:C,players:c,currentPlayer:h}),r.a.createElement(N,{turns:C})))))};c.a.render(r.a.createElement(A,{defaultPlayers:"Dean, Ben, Aidan, Aba"}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.4aada47e.chunk.js.map