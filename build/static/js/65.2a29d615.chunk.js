(this["webpackJsonptheta-demo"]=this["webpackJsonptheta-demo"]||[]).push([[65],{2184:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(12),l=a(14),s=a(15),i=a(0),c=a.n(i),o=a(2),u=a(7),m=a(13),f=a.n(m),d=a(102),b=a(72),v=a(23),p=a(75),h=a(986),y=a(91),E=a(28),C=a(526),g=["bsPrefix","show","closeLabel","className","children","variant","onClose","dismissible","transition"],O=Object(y.a)("h4");O.displayName="DivStyledAsH4";var j=Object(E.a)("alert-heading",{Component:O}),w=Object(E.a)("alert-link",{Component:C.a}),N={show:!0,transition:p.a,closeLabel:"Close alert"},k=c.a.forwardRef((function(e,t){var a=Object(d.a)(e,{show:"onClose"}),n=a.bsPrefix,r=a.show,l=a.closeLabel,s=a.className,i=a.children,m=a.variant,y=a.onClose,E=a.dismissible,C=a.transition,O=Object(u.a)(a,g),j=Object(v.a)(n,"alert"),w=Object(b.a)((function(e){y&&y(!1,e)})),N=!0===C?p.a:C,k=c.a.createElement("div",Object(o.a)({role:"alert"},N?void 0:O,{ref:t,className:f()(s,j,m&&j+"-"+m,E&&j+"-dismissible")}),E&&c.a.createElement(h.a,{onClick:w,label:l}),i);return N?c.a.createElement(N,Object(o.a)({unmountOnExit:!0},O,{ref:void 0,in:r}),k):r?k:null}));k.displayName="Alert",k.defaultProps=N,k.Link=w,k.Heading=j;var A=k,S=a(557),D=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={variantList:["primary","secondary","success","danger","warning","info","light","dark"],showCustomAlert:!0},e.handleClose=function(t){var a=e.state.variantList.filter((function(e,a){return a!==t}));e.setState({variantList:a})},e.closeCustomAlert=function(){e.setState({showCustomAlert:!1})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.variantList,n=t.showCustomAlert;return c.a.createElement(i.Fragment,null,n&&c.a.createElement(A,{className:"text-center alert-card",variant:"warning",dismissible:!0,onClose:this.closeCustomAlert},"Gull makes developent life easier!",c.a.createElement(S.a,{variant:"warning",className:"btn-rounded ml-3"},"Buy Now")),a.map((function(t,a){return c.a.createElement(A,{key:a,variant:t,dismissible:!0,onClose:function(){return e.handleClose(a)}},"This is a ",t," alert\u2014check it out!")})))}}]),a}(i.Component),x=a(47),L=function(){var e=Object(i.useState)(!0),t=Object(x.a)(e,2),a=t[0],n=t[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(A,{show:a,variant:"success"},c.a.createElement(A.Heading,null,"How's it going?!"),c.a.createElement("p",null,"Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum."),c.a.createElement("hr",{className:"my-3"}),c.a.createElement("div",{className:"d-flex justify-content-end"},c.a.createElement(S.a,{onClick:function(){return n(!1)},variant:"outline-success"},"Close me ya'll!"))),!a&&c.a.createElement(S.a,{onClick:function(){return n(!0)}},"Show Alert"))},P=function(){var e=c.a.useState(!0),t=Object(x.a)(e,2),a=t[0],n=t[1];return c.a.createElement(i.Fragment,null,a&&c.a.createElement(A,{variant:"danger",dismissible:!0,onClose:function(){return n(!1)}},c.a.createElement(A.Heading,null,"Oh snap! You got an error!"),c.a.createElement("p",null,"Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.")),!a&&c.a.createElement(S.a,{variant:"success",onClick:function(){return n(!0)}},"Show Alert"))},H=a(101),R=function(e){Object(l.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(H.a,{routeSegments:[{name:"UI Kits",path:"/uikits"},{name:"Alerts"}]}),c.a.createElement("div",{className:"mb-4"},c.a.createElement(D,null)),c.a.createElement("div",{className:"mb-4"},c.a.createElement("h4",{className:"mb-3"},"Success Alert"),c.a.createElement(L,null)),c.a.createElement("div",{className:"mb-4"},c.a.createElement("h4",{className:"mb-3"},"Danger Alert"),c.a.createElement(P,null)))}}]),a}(i.Component);t.default=R},525:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},526:function(e,t,a){"use strict";var n=a(2),r=a(7),l=a(0),s=a.n(l),i=a(525),c=["as","disabled","onKeyDown"];function o(e){return!e||"#"===e.trim()}var u=s.a.forwardRef((function(e,t){var a=e.as,l=void 0===a?"a":a,u=e.disabled,m=e.onKeyDown,f=Object(r.a)(e,c),d=function(e){var t=f.href,a=f.onClick;(u||o(t))&&e.preventDefault(),u?e.stopPropagation():a&&a(e)};return o(f.href)&&(f.role=f.role||"button",f.href=f.href||"#"),u&&(f.tabIndex=-1,f["aria-disabled"]=!0),s.a.createElement(l,Object(n.a)({ref:t},f,{onClick:d,onKeyDown:Object(i.a)((function(e){" "===e.key&&(e.preventDefault(),d(e))}),m)}))}));u.displayName="SafeAnchor",t.a=u},557:function(e,t,a){"use strict";var n=a(2),r=a(7),l=a(13),s=a.n(l),i=a(0),c=a.n(i),o=a(23),u=a(526),m=["bsPrefix","variant","size","active","className","block","type","as"],f=c.a.forwardRef((function(e,t){var a=e.bsPrefix,l=e.variant,i=e.size,f=e.active,d=e.className,b=e.block,v=e.type,p=e.as,h=Object(r.a)(e,m),y=Object(o.a)(a,"btn"),E=s()(d,y,f&&"active",l&&y+"-"+l,b&&y+"-block",i&&y+"-"+i);if(h.href)return c.a.createElement(u.a,Object(n.a)({},h,{as:p,ref:t,className:s()(E,h.disabled&&"disabled")}));t&&(h.ref=t),v?h.type=v:p||(h.type="button");var C=p||"button";return c.a.createElement(C,Object(n.a)({},h,{className:E}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=f},986:function(e,t,a){"use strict";var n=a(2),r=a(7),l=a(6),s=a.n(l),i=a(0),c=a.n(i),o=a(13),u=a.n(o),m=["label","onClick","className"],f={label:s.a.string.isRequired,onClick:s.a.func},d=c.a.forwardRef((function(e,t){var a=e.label,l=e.onClick,s=e.className,i=Object(r.a)(e,m);return c.a.createElement("button",Object(n.a)({ref:t,type:"button",className:u()("close",s),onClick:l},i),c.a.createElement("span",{"aria-hidden":"true"},"\xd7"),c.a.createElement("span",{className:"sr-only"},a))}));d.displayName="CloseButton",d.propTypes=f,d.defaultProps={label:"Close"},t.a=d}}]);
//# sourceMappingURL=65.2a29d615.chunk.js.map