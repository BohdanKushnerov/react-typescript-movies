"use strict";(self.webpackChunkreact_typescript_template=self.webpackChunkreact_typescript_template||[]).push([[990],{3524:function(n,e){e.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},9990:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t=r(4165),a=r(3433),o=r(5861),i=r(9439),c=r(2791),u=r(7689),s=r(1243);function l(){return(l=(0,o.Z)((0,t.Z)().mark((function n(e,r){var a;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1"),{signal:r.signal});case 2:return a=n.sent,n.abrupt("return",a.data.results.map((function(n){return{author:n.author,content:n.content,id:n.id,url:n.url}})));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var p,d,h,x=function(n,e){return l.apply(this,arguments)},f=r(168),g=r(1109),Z=g.Z.ul(p||(p=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),E=g.Z.li(d||(d=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 8px;\n  background-color: #e5e8e9;\n  border-radius: 5px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n    0 2px 1px rgba(0, 0, 0, 0.2);\n"]))),v=g.Z.a(h||(h=(0,f.Z)(["\n  display: block;\n  width: 50px;\n  font-weight: 500;\n  color: gray;\n  border-radius: 5px;\n  outline: 1px solid gray;\n  text-align: center;\n\n  :hover {\n    color: orangered;\n    outline: 1px solid orangered;\n  }\n"]))),b=r(184),y=function(n){var e=n.state;return(0,b.jsx)(Z,{children:e.map((function(n){var e=n.author,r=n.content,t=n.id,a=n.url;return(0,b.jsxs)(E,{children:[(0,b.jsxs)("h2",{children:["Author: ",e]}),(0,b.jsx)("p",{children:r}),(0,b.jsx)(v,{href:a,target:"_blank",children:"Link"})]},t)}))})},w=r(3524),k=function(){var n=(0,c.useState)([]),e=(0,i.Z)(n,2),r=e[0],s=e[1],l=(0,c.useState)(w.Z.IDLE),p=(0,i.Z)(l,2),d=p[0],h=p[1],f=(0,u.UO)().movieId;return(0,c.useEffect)((function(){var n=new AbortController;return function(){var e=(0,o.Z)((0,t.Z)().mark((function e(){var r;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(w.Z.PENDING),e.prev=1,e.next=4,x(f,n);case 4:r=e.sent,s((0,a.Z)(r)),h(w.Z.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),h(w.Z.REJECTED);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()(),function(){n.abort()}}),[f]),(0,b.jsxs)("section",{children:[d===w.Z.RESOLVED&&(0,b.jsx)(y,{state:r}),!r.length&&d===w.Z.RESOLVED&&(0,b.jsx)("h2",{children:"We don't have any reviews for this film"}),d===w.Z.REJECTED&&(0,b.jsx)("h2",{children:"An error occurred, we could not upload the data, please try reloading the page and try again :)"})]})}}}]);
//# sourceMappingURL=990.5122e030.chunk.js.map