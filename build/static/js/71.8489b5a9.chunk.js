(this["webpackJsonptheta-demo"]=this["webpackJsonptheta-demo"]||[]).push([[71],{2122:function(e,a,t){"use strict";t.r(a);var n=t(111),r=t(10),l=t(12),s=t(14),i=t(15),o=t(0),c=t.n(o),m=t(615),u=t(612),d=t(45),b=t(6),p=t.n(b),f=t(25),h=t(30),g=t(557),v=u.object().shape({email:u.string().email("Invalid email").required("email is required"),password:u.string().min(8,"Password must be 8 character long").required("password is required")}),E=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var l=arguments.length,s=new Array(l),i=0;i<l;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).state={email:"watson@example.com",password:"12345678"},e.handleChange=function(a){a.persist(),e.setState(Object(n.a)({},a.target.name,a.target.value))},e.handleSubmit=function(a,t){t.isSubmitting;e.props.loginWithEmailAndPassword(a)},e}return Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"auth-layout-wrap",style:{backgroundImage:"url(/assets/images/photo-wide-4.jpg)"}},c.a.createElement("div",{className:"auth-content"},c.a.createElement("div",{className:"card o-hidden"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"p-4"},c.a.createElement("div",{className:"auth-logo text-center mb-4"},c.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),c.a.createElement("h1",{className:"mb-3 text-18"},"Sign In"),c.a.createElement(m.b,{initialValues:this.state,validationSchema:v,onSubmit:this.handleSubmit},(function(e){var a=e.values,t=e.errors,n=(e.touched,e.handleChange),r=e.handleBlur,l=e.handleSubmit;e.isSubmitting;return c.a.createElement("form",{onSubmit:l},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"email"},"Email address"),c.a.createElement("input",{className:"form-control form-control-rounded position-relative",type:"email",name:"email",onChange:n,onBlur:r,value:a.email}),t.email&&c.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.email)),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{htmlFor:"password"},"Password"),c.a.createElement("input",{className:"form-control form-control-rounded",type:"password",name:"password",onChange:n,onBlur:r,value:a.password}),t.password&&c.a.createElement("div",{className:"text-danger mt-1 ml-2"},t.password)),c.a.createElement("button",{className:"btn btn-rounded btn-primary btn-block mt-2",type:"submit"},"Sign In"))})),c.a.createElement("div",{className:"mt-3 text-center"},c.a.createElement(h.a,{to:"/session/forgot-password",className:"text-muted"},c.a.createElement("u",null,"Forgot Password?"))))),c.a.createElement("div",{className:"col-md-6 text-center ",style:{backgroundSize:"cover",backgroundImage:"url(/assets/images/photo-long-3.jpg)"}},c.a.createElement("div",{className:"pr-3 auth-right"},c.a.createElement(h.a,{to:"/session/signup",className:"btn btn-rounded btn-outline-primary btn-outline-email btn-block btn-icon-text"},c.a.createElement("i",{className:"i-Mail-with-At-Sign"})," Sign up with Email"),c.a.createElement(g.a,{className:"btn btn-rounded btn-outline-google btn-block btn-icon-text"},c.a.createElement("i",{className:"i-Google-Plus"})," Sign up with Google"),c.a.createElement(g.a,{className:"btn btn-rounded btn-block btn-icon-text btn-outline-facebook"},c.a.createElement("i",{className:"i-Facebook-2"})," Sign up with Facebook")))))))}}]),t}(o.Component);a.default=Object(f.b)((function(e){return{loginWithEmailAndPassword:p.a.func.isRequired,user:e.user}}),{loginWithEmailAndPassword:d.e})(E)},525:function(e,a,t){"use strict";a.a=function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];return a.filter((function(e){return null!=e})).reduce((function(e,a){if("function"!==typeof a)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?a:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e.apply(this,n),a.apply(this,n)}}),null)}},526:function(e,a,t){"use strict";var n=t(2),r=t(7),l=t(0),s=t.n(l),i=t(525),o=["as","disabled","onKeyDown"];function c(e){return!e||"#"===e.trim()}var m=s.a.forwardRef((function(e,a){var t=e.as,l=void 0===t?"a":t,m=e.disabled,u=e.onKeyDown,d=Object(r.a)(e,o),b=function(e){var a=d.href,t=d.onClick;(m||c(a))&&e.preventDefault(),m?e.stopPropagation():t&&t(e)};return c(d.href)&&(d.role=d.role||"button",d.href=d.href||"#"),m&&(d.tabIndex=-1,d["aria-disabled"]=!0),s.a.createElement(l,Object(n.a)({ref:a},d,{onClick:b,onKeyDown:Object(i.a)((function(e){" "===e.key&&(e.preventDefault(),b(e))}),u)}))}));m.displayName="SafeAnchor",a.a=m},557:function(e,a,t){"use strict";var n=t(2),r=t(7),l=t(13),s=t.n(l),i=t(0),o=t.n(i),c=t(23),m=t(526),u=["bsPrefix","variant","size","active","className","block","type","as"],d=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.variant,i=e.size,d=e.active,b=e.className,p=e.block,f=e.type,h=e.as,g=Object(r.a)(e,u),v=Object(c.a)(t,"btn"),E=s()(b,v,d&&"active",l&&v+"-"+l,p&&v+"-block",i&&v+"-"+i);if(g.href)return o.a.createElement(m.a,Object(n.a)({},g,{as:h,ref:a,className:s()(E,g.disabled&&"disabled")}));a&&(g.ref=a),f?g.type=f:h||(g.type="button");var w=h||"button";return o.a.createElement(w,Object(n.a)({},g,{className:E}))}));d.displayName="Button",d.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=d}}]);
//# sourceMappingURL=71.8489b5a9.chunk.js.map