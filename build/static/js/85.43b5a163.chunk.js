(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[85],{2110:function(e,a,t){"use strict";t.r(a);var n=t(10),r=t(12),l=t(14),i=t(15),s=t(0),c=t.n(s),m=t(101),o=t(104),b=t(635),d=function(e){Object(l.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=a.call.apply(a,[this].concat(l))).state={},e.variantList=["primary","success","info","warning","danger"],e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(m.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Progress Bar"}]}),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-6 mb-4"},c.a.createElement(o.a,{title:"Basic Progress Bar"},[25,50,75,100].map((function(e){return c.a.createElement(b.a,{key:e,now:e,className:"mb-3"})})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{title:"Basic Progress Bar With Label"},[25,50,75,100].map((function(e){return c.a.createElement(b.a,{key:e,now:e,label:"".concat(e,"%"),className:"mb-3"})}))))),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-6 mb-4"},c.a.createElement(o.a,{title:"Basic Progress Bar With diff. Background"},[10,25,50,75,100].map((function(a,t){return c.a.createElement(b.a,{key:a,now:a,variant:e.variantList[t],className:"mb-3"})})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{title:"Labeled Progress Bar With diff. background"},[10,25,50,75,100].map((function(a,t){return c.a.createElement(b.a,{key:a,now:a,label:"".concat(a,"%"),variant:e.variantList[t],className:"mb-3"})}))))),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-6 mb-4"},c.a.createElement(o.a,{title:"Progress Bar With Multiple bars"},c.a.createElement(b.a,{className:"mb-3"},c.a.createElement(b.a,{variant:"",now:10,key:1}),c.a.createElement(b.a,{variant:"success",now:25,key:2}),c.a.createElement(b.a,{variant:"info",now:50,key:3})),c.a.createElement(b.a,{className:"mb-3"},c.a.createElement(b.a,{variant:"",now:20,label:"20%",key:1}),c.a.createElement(b.a,{variant:"",now:35,label:"35%",key:2}),c.a.createElement(b.a,{variant:"danger",now:40,label:"40%",key:3})),c.a.createElement(b.a,{className:"mb-3"},c.a.createElement(b.a,{variant:"success",now:15,label:"15%",key:1}),c.a.createElement(b.a,{variant:"info",now:25,label:"25%",key:2}),c.a.createElement(b.a,{variant:"warning",now:30,label:"30%",key:3})),c.a.createElement(b.a,{className:"mb-3"},c.a.createElement(b.a,{variant:"warning",now:20,label:"20%",key:1}),c.a.createElement(b.a,{variant:"",now:20,label:"20%",key:2}),c.a.createElement(b.a,{variant:"danger",now:50,label:"50%",key:3})),c.a.createElement(b.a,{className:"mb-3"},c.a.createElement(b.a,{striped:!0,variant:"success",now:15,label:"15%",key:1}),c.a.createElement(b.a,{striped:!0,variant:"info",now:25,label:"25%",key:2}),c.a.createElement(b.a,{striped:!0,variant:"warning",now:30,label:"30%",key:3})))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement(o.a,{title:"Striped Progress Bar"},[10,25,50,75,100].map((function(a,t){return c.a.createElement(b.a,{key:a,now:a,striped:!0,label:"".concat(a,"%"),variant:e.variantList[t],className:"mb-3"})}))))),c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-md-12 mb-4"},c.a.createElement(o.a,{title:"Animated stripes Progress Bar"},[10,25,50,75,100].map((function(a,t){return c.a.createElement(b.a,{key:a,now:a,animated:!0,striped:!0,variant:e.variantList[t],className:"mb-3"})}))))))}}]),t}(s.Component);a.default=d},534:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return i}));var n=t(0),r=t.n(n);function l(e,a){var t=0;return r.a.Children.map(e,(function(e){return r.a.isValidElement(e)?a(e,t++):e}))}function i(e,a){var t=0;r.a.Children.forEach(e,(function(e){r.a.isValidElement(e)&&a(e,t++)}))}},635:function(e,a,t){"use strict";var n=t(2),r=t(7),l=t(13),i=t.n(l),s=t(0),c=t.n(s),m=t(23),o=t(534),b=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],d=["isChild"],u=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function v(e,a,t){var n=(e-a)/(t-a)*100;return Math.round(1e3*n)/1e3}function E(e,a){var t,l=e.min,s=e.now,m=e.max,o=e.label,d=e.srOnly,u=e.striped,E=e.animated,f=e.className,w=e.style,p=e.variant,y=e.bsPrefix,N=Object(r.a)(e,b);return c.a.createElement("div",Object(n.a)({ref:a},N,{role:"progressbar",className:i()(f,y+"-bar",(t={},t["bg-"+p]=p,t[y+"-bar-animated"]=E,t[y+"-bar-striped"]=E||u,t)),style:Object(n.a)({width:v(s,l,m)+"%"},w),"aria-valuenow":s,"aria-valuemin":l,"aria-valuemax":m}),d?c.a.createElement("span",{className:"sr-only"},o):o)}var f=c.a.forwardRef((function(e,a){var t=e.isChild,l=Object(r.a)(e,d);if(l.bsPrefix=Object(m.a)(l.bsPrefix,"progress"),t)return E(l,a);var b=l.min,v=l.now,f=l.max,w=l.label,p=l.srOnly,y=l.striped,N=l.animated,k=l.bsPrefix,g=l.variant,h=l.className,O=l.children,P=Object(r.a)(l,u);return c.a.createElement("div",Object(n.a)({ref:a},P,{className:i()(h,k)}),O?Object(o.b)(O,(function(e){return Object(s.cloneElement)(e,{isChild:!0})})):E({min:b,now:v,max:f,label:w,srOnly:p,striped:y,animated:N,bsPrefix:k,variant:g},a))}));f.displayName="ProgressBar",f.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=f}}]);
//# sourceMappingURL=85.43b5a163.chunk.js.map