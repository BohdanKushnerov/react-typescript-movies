"use strict";(self.webpackChunkreact_typescript_template=self.webpackChunkreact_typescript_template||[]).push([[919],{3919:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r,a,i,c=n(4165),o=n(3433),u=n(5861),p=n(9439),s=n(2791),l=n(7689),d=n(4312),h=n(168),f=n(1109),g=f.Z.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n"]))),v=f.Z.li(a||(a=(0,h.Z)(["\n  max-width: 138px;\n\n  background-color: #e5e8e9;\n  text-align: center;\n  border-radius: 5px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n    0 2px 1px rgba(0, 0, 0, 0.2);\n"]))),m=f.Z.p(i||(i=(0,h.Z)(["\n  font-weight: 500;\n"]))),x=n(184),Z=function(t){var e=t.state;return(0,x.jsx)(g,{children:e.map((function(t){var e=t.profile_path,n=t.name,r=t.id;return(0,x.jsxs)(v,{children:[(0,x.jsx)("img",{src:e,alt:n,width:138,height:175}),(0,x.jsx)(m,{children:n})]},r)}))})},_=n(8519),w=function(){var t=(0,s.useState)([]),e=(0,p.Z)(t,2),n=e[0],r=e[1],a=(0,s.useState)(_.Z.IDLE),i=(0,p.Z)(a,2),h=i[0],f=i[1],g=(0,l.UO)().movieId;return(0,s.useEffect)((function(){var t=new AbortController,e=function(){var e=(0,u.Z)((0,c.Z)().mark((function e(){var n;return(0,c.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(_.Z.PENDING),e.prev=1,e.next=4,(0,d.xc)(g,t);case 4:n=e.sent,r((0,o.Z)(n)),f(_.Z.RESOLVED),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),f(_.Z.REJECTED),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return e(),function(){t.abort()}}),[g]),(0,x.jsxs)("section",{children:[h===_.Z.RESOLVED&&(0,x.jsx)(Z,{state:n}),!n.length&&h===_.Z.RESOLVED&&(0,x.jsx)("h2",{children:"We don't have any cast added to this movie"}),h===_.Z.REJECTED&&(0,x.jsx)("h2",{children:"An error occurred, we could not upload the data, please try reloading the page and try again :)"})]})}},8519:function(t,e){e.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4312:function(t,e,n){n.d(e,{Ai:function(){return u},Bt:function(){return d},Ny:function(){return f},Tg:function(){return c},xc:function(){return s}});var r=n(4165),a=n(5861),i=n(1243);function c(t){return o.apply(this,arguments)}function o(){return(o=(0,a.Z)((0,r.Z)().mark((function t(e){var n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d",{signal:e.signal});case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){var e=t.id,n=t.original_title,r=t.vote_average,a=t.poster_path,i=t.title;return{id:e,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:i}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function u(t,e){return p.apply(this,arguments)}function p(){return(p=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=a89ed47e53c22ac07455246c7a19999d&query=".concat(e),{signal:n.signal});case 2:return a=t.sent,t.abrupt("return",a.data.results.map((function(t){var e=t.id,n=t.original_title,r=t.vote_average,a=t.poster_path,i=t.title;return{id:e,original_title:n,vote_average:r,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:i}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function s(t,e){return l.apply(this,arguments)}function l(){return(l=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 2:return a=t.sent,t.abrupt("return",a.data.cast.map((function(t){var e=t.profile_path,n=t.name,r=t.id;return{profile_path:e?"https://image.tmdb.org/t/p/w138_and_h175_face".concat(e):"https://via.placeholder.com/138x175",name:n,id:r}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,e){return h.apply(this,arguments)}function h(){return(h=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US&page=1"),{signal:n.signal});case 2:return a=t.sent,t.abrupt("return",a.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id,url:t.url}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,e){return g.apply(this,arguments)}function g(){return(g=(0,a.Z)((0,r.Z)().mark((function t(e,n){var a,c,o,u,p,s,l,d;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return d=function(t){return t.reduce((function(t,e){return t+e.name}),"").split(/(?=[A-Z])/).join(", ")},t.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a89ed47e53c22ac07455246c7a19999d&language=en-US"),{signal:n.signal});case 3:return a=t.sent,c=a.data,o=c.vote_average,u=c.overview,p=c.title,s=c.genres,l=c.poster_path,t.abrupt("return",{vote_average:o,overview:u,title:p,genres:d(s),poster_path:l?"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(l):"https://via.placeholder.com/300x450"});case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=919.e12336e9.chunk.js.map