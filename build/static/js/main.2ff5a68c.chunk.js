(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(15),r=n.n(a),o=n(4),i=(n(23),n(16)),l=n.n(i),u=n(17),j=n(0),b=n(18),d=n(2);var h=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(o.a)(a,2),i=r[0],h=r[1],p=Object(c.useState)(!1),O=Object(o.a)(p,2),x=O[0],f=O[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"userInput",children:[Object(d.jsx)("input",{type:"url",name:"longUrl",id:"longUrl",placeholder:"Enter the url here...",required:!0,onChange:function(e){s(e.target.value)}}),Object(d.jsx)("button",{type:"submit",onClick:function(){l.a.post("https://genshort.herokuapp.com/api/url/shorten",{userInput:n}).then((function(e){h(e.data)})).catch((function(e){console.log("Error in axios POST\n"+e)}))},children:"Create short URL"})]}),Object(d.jsxs)("div",{className:"output-container",children:[Object(d.jsx)("textarea",{className:"shortUrl",readOnly:!0,value:i}),Object(d.jsx)(u.CopyToClipboard,{text:i,onCopy:function(){f(!0),setTimeout((function(){f(!1)}),800)},children:Object(d.jsx)("div",{className:"copy-area",children:Object(d.jsxs)("div",{className:"copyClipboard",children:[Object(d.jsx)(j.b.Provider,{value:{color:"white",size:"20px"},children:Object(d.jsx)(b.a,{})}),Object(d.jsx)("span",{className:"copy-feedback",children:x?"\u2713":""})]})})})]})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),s(e),a(e),r(e)}))};r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),p()}},[[47,1,2]]]);
//# sourceMappingURL=main.2ff5a68c.chunk.js.map