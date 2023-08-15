"use strict";(self.webpackChunkreact_typescript_template=self.webpackChunkreact_typescript_template||[]).push([[886],{4389:function(t,r,e){e.d(r,{Z:function(){return b}});var n=e(7689),a=e(1087);var o,i,s,c,u,l=function(t,r){return"/"===r.pathname?"movies/".concat(t):"".concat(t)},p=e(4163),d=e(168),h=e(1109),f=h.Z.ul(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 8px;\n"]))),g=h.Z.li(i||(i=(0,d.Z)(["\n  position: relative;\n\n  max-width: 220px;\n  padding: 8px;\n\n  text-align: center;\n\n  &:hover {\n    background-color: #e5e8e9;\n    border-radius: 5px;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 1px rgba(0, 0, 0, 0.14),\n      0 2px 1px rgba(0, 0, 0, 0.2);\n    overflow: hidden;\n  }\n"]))),x=h.Z.h2(s||(s=(0,d.Z)(["\n  color: black;\n"]))),v=h.Z.img(c||(c=(0,d.Z)(["\n  margin-bottom: 20px;\n"]))),k=h.Z.div(u||(u=(0,d.Z)(["\n  position: absolute;\n  top: 303px;\n  left: 5px;\n\n  width: 47px;\n"]))),m=e(184),b=function(t){var r=t.films,e=(0,n.TH)();return(0,m.jsx)(f,{children:r.map((function(t){var r=t.id,n=t.original_title,o=t.vote_average,i=t.poster_path,s=t.title;return(0,m.jsxs)(g,{children:[(0,m.jsxs)(a.rU,{to:l(r,e),state:{from:e},children:[(0,m.jsx)(v,{src:i,alt:s,width:220,height:330}),(0,m.jsx)(x,{children:n})]},r),(0,m.jsx)(k,{children:(0,m.jsx)(p.Z,{value:Math.round(10*o),text:"".concat(Math.round(10*o),"%")})})]},r)}))})}},4163:function(t,r,e){e.d(r,{Z:function(){return x}});var n=e(2791),a=function(t,r){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,r){t.__proto__=r}||function(t,r){for(var e in r)r.hasOwnProperty(e)&&(t[e]=r[e])},a(t,r)};var o=50,i=50;function s(t){var r=t.className,e=t.counterClockwise,a=t.dashRatio,o=t.pathRadius,i=t.strokeWidth,s=t.style;return(0,n.createElement)("path",{className:r,style:Object.assign({},s,u({pathRadius:o,dashRatio:a,counterClockwise:e})),d:c({pathRadius:o,counterClockwise:e}),strokeWidth:i,fillOpacity:0})}function c(t){var r=t.pathRadius,e=t.counterClockwise?1:0;return"\n      M "+o+","+i+"\n      m 0,-"+r+"\n      a "+r+","+r+" "+e+" 1 1 0,"+2*r+"\n      a "+r+","+r+" "+e+" 1 1 0,-"+2*r+"\n    "}function u(t){var r=t.counterClockwise,e=t.dashRatio,n=t.pathRadius,a=2*Math.PI*n,o=(1-e)*a;return{strokeDasharray:a+"px "+a+"px",strokeDashoffset:(r?-o:o)+"px"}}var l=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return function(t,r){function e(){this.constructor=t}a(t,r),t.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)}(r,t),r.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},r.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},r.prototype.getPathRatio=function(){var t=this.props,r=t.value,e=t.minValue,n=t.maxValue;return(Math.min(Math.max(r,e),n)-e)/(n-e)},r.prototype.render=function(){var t=this.props,r=t.circleRatio,e=t.className,a=t.classes,c=t.counterClockwise,u=t.styles,l=t.strokeWidth,p=t.text,d=this.getPathRadius(),h=this.getPathRatio();return(0,n.createElement)("svg",{className:a.root+" "+e,style:u.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,n.createElement)("circle",{className:a.background,style:u.background,cx:o,cy:i,r:50}):null,(0,n.createElement)(s,{className:a.trail,counterClockwise:c,dashRatio:r,pathRadius:d,strokeWidth:l,style:u.trail}),(0,n.createElement)(s,{className:a.path,counterClockwise:c,dashRatio:h*r,pathRadius:d,strokeWidth:l,style:u.path}),p?(0,n.createElement)("text",{className:a.text,style:u.text,x:o,y:i},p):null)},r.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},r}(n.Component);function p(t){var r=t.rotation,e=t.strokeLinecap,n=t.textColor,a=t.textSize,o=t.pathColor,i=t.pathTransition,s=t.pathTransitionDuration,c=t.trailColor,u=t.backgroundColor,l=null==r?void 0:"rotate("+r+"turn)",p=null==r?void 0:"center center";return{root:{},path:d({stroke:o,strokeLinecap:e,transform:l,transformOrigin:p,transition:i,transitionDuration:null==s?void 0:s+"s"}),trail:d({stroke:c,strokeLinecap:e,transform:l,transformOrigin:p}),text:d({fill:n,fontSize:a}),background:d({fill:u})}}function d(t){return Object.keys(t).forEach((function(r){null==t[r]&&delete t[r]})),t}var h=function(t){switch(!0){case t>=75:return"#21d07a";case t<=75&&t>=25:return"#d2d531";case t<=25&&0!==t:return"#db2360";default:return"gray"}},f=function(t){switch(!0){case t>=75:return"#204529";case t<=75&&t>=25:return"#423d0f";case t<=25&&0!==t:return"#571435";default:return"gray"}},g=e(184),x=function(t){var r=t.value,e=t.text;return(0,g.jsx)(l,{value:r,text:e,background:!0,backgroundPadding:6,styles:p({textColor:"white",pathColor:h(r),trailColor:f(r),backgroundColor:"#081c22",textSize:"35px"})})}},3524:function(t,r){r.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4886:function(t,r,e){e.r(r),e.d(r,{default:function(){return v}});var n=e(4165),a=e(3433),o=e(5861),i=e(9439),s=e(2791),c=e(1243);function u(){return(u=(0,o.Z)((0,n.Z)().mark((function t(r){var e;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=a89ed47e53c22ac07455246c7a19999d",{signal:r.signal});case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){var r=t.id,e=t.original_title,n=t.vote_average,a=t.poster_path,o=t.title;return{id:r,original_title:e,vote_average:n,poster_path:a?"https://image.tmdb.org/t/p/w220_and_h330_face".concat(a):"https://via.placeholder.com/220x330",title:o}})));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l,p=function(t){return u.apply(this,arguments)},d=e(4389),h=e(168),f=e(1109).Z.section(l||(l=(0,h.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),g=e(3524),x=e(184),v=function(){var t=(0,s.useState)([]),r=(0,i.Z)(t,2),e=r[0],c=r[1],u=(0,s.useState)(g.Z.IDLE),l=(0,i.Z)(u,2),h=l[0],v=l[1];return(0,s.useEffect)((function(){var t=new AbortController;return function(){var r=(0,o.Z)((0,n.Z)().mark((function r(){var e;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return v(g.Z.PENDING),r.prev=1,r.next=4,p(t);case 4:e=r.sent,c((0,a.Z)(e)),v(g.Z.RESOLVED),r.next=13;break;case 9:r.prev=9,r.t0=r.catch(1),v(g.Z.REJECTED),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})));return function(){return r.apply(this,arguments)}}()(),function(){t.abort()}}),[]),(0,x.jsxs)(f,{children:[0!==e.length&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("h2",{children:"Tranding today"}),(0,x.jsx)(d.Z,{films:e})]}),h===g.Z.REJECTED&&(0,x.jsx)("h2",{children:"An error occurred, we could not upload the data, please try reloading the page and try again :)"})]})}}}]);
//# sourceMappingURL=886.5c43c79f.chunk.js.map