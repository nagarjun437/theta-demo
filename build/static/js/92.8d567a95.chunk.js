(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[92],{2196:function(e,t,a){"use strict";a.r(t);var n=a(10),s=a(12),c=a(14),i=a(15),o=a(0),l=a.n(o),r=a(122),m=a(1046),u=a(2182),d=a(904),p=a(22),g=a(905),h=a(30),v=a(6),f=a.n(v),b=a(25),E=a(27),S=a(29),N=a(9),y=a(17),w=(a(1047),function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={shorcutMenuList:[{icon:"i-Shop-4",link:"#",text:"Home"},{icon:"i-Library",link:"#",text:"Ui Kits"},{icon:"i-Drop",link:"#",text:"Apps"},{icon:"i-File-Clipboard-File--Text",link:"#",text:"Form"},{icon:"i-Checked-User",link:"#",text:"Sessions"},{icon:"i-Ambulance",link:"#",text:"Support"}],notificationList:[{icon:"i-Speach-Bubble-6",title:"New message",description:"James: Hey! are you busy?",time:"2019-10-30T02:10:18.931Z",color:"primary",status:"New"},{icon:"i-Receipt-3",title:"New order received",description:"1 Headphone, 3 iPhone",time:"2019-03-10T02:10:18.931Z",color:"success",status:"New"},{icon:"i-Empty-Box",title:"Product out of stock",description:"1 Headphone, 3 iPhone",time:"2019-05-10T02:10:18.931Z",color:"danger",status:"3"},{icon:"i-Data-Power",title:"Server up!",description:"Server rebooted successfully",time:"2019-03-10T02:10:18.931Z",color:"success",status:"3"}],showSearchBox:!1},e.handleMenuClick=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(y.merge)({},n,{layout2Settings:{leftSidebar:{open:!n.layout2Settings.leftSidebar.open,secondaryNavOpen:!n.layout2Settings.leftSidebar.open}}}))},e.toggleFullScreen=function(){document.fullscreenEnabled&&(document.fullscreen?document.exitFullscreen():document.documentElement.requestFullscreen())},e.handleSearchBoxOpen=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(y.merge)({},n,{layout2Settings:{searchBox:{open:!0}}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.shorcutMenuList,a=void 0===t?[]:t,n=e.notificationList,s=void 0===n?[]:n;return l.a.createElement("div",{className:"main-header"},l.a.createElement("div",{className:"logo"},l.a.createElement("img",{src:"/assets/images/logo.png",alt:"",onClick:this.handleMenuClick})),l.a.createElement("div",{style:{margin:"auto"}}),l.a.createElement("div",{className:"header-part-right"},l.a.createElement("i",{className:"i-Full-Screen header-icon d-none d-sm-inline-block","data-fullscreen":!0,onClick:this.toggleFullScreen}),l.a.createElement(u.a,null,l.a.createElement(u.a.Toggle,{variant:"link",className:"toggle-hidden"},l.a.createElement("i",{className:"i-Safe-Box text-muted header-icon",role:"button"})),l.a.createElement(u.a.Menu,null,l.a.createElement("div",{className:"menu-icon-grid"},a.map((function(e){return l.a.createElement(h.a,{key:e.text,to:e.link},l.a.createElement("i",{className:e.icon})," ",e.text)}))))),l.a.createElement(u.a,null,l.a.createElement(u.a.Toggle,{variant:"link",className:"toggle-hidden"},l.a.createElement("div",{className:"badge-top-container",role:"button",id:"dropdownNotification","data-toggle":"dropdown"},l.a.createElement("span",{className:"badge badge-primary"},"3"),l.a.createElement("i",{className:"i-Bell text-muted header-icon"}))),l.a.createElement(d.a,{className:"notification-dropdown rtl-ps-none"},s.map((function(e,t){return l.a.createElement("div",{key:t,className:"dropdown-item d-flex"},l.a.createElement("div",{className:"notification-icon"},l.a.createElement("i",{className:"".concat(e.icon," text-").concat(e.color," mr-1")})),l.a.createElement("div",{className:"notification-details flex-grow-1"},l.a.createElement("p",{className:"m-0 d-flex align-items-center"},l.a.createElement("span",null,e.title),l.a.createElement("span",{className:"badge badge-pill badge-".concat(e.color," ml-1 mr-1")},e.status),l.a.createElement("span",{className:"flex-grow-1"}),l.a.createElement("span",{className:"text-small text-muted ml-auto"},Object(p.c)(new Date(e.time))," ago")),l.a.createElement("p",{className:"text-small text-muted m-0"},e.description)))})))),l.a.createElement("div",{className:"user col align-self-end"},l.a.createElement(u.a,null,l.a.createElement(g.a,{variant:"link",className:"toggle-hidden"},l.a.createElement("img",{src:"/assets/images/faces/1.jpg",id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})),l.a.createElement(d.a,null,l.a.createElement("div",{className:"dropdown-header"},l.a.createElement("i",{className:"i-Lock-User mr-1"})," Timothy Carlson"),l.a.createElement("span",{className:"dropdown-item cursor-pointer"},"Account settings"),l.a.createElement("span",{className:"dropdown-item cursor-pointer"},"Billing history"),l.a.createElement("span",{className:"dropdown-item cursor-pointer",onClick:this.props.logoutUser},"Sign out"))))))}}]),a}(o.Component)),O=Object(N.g)(Object(b.b)((function(e){return{setDefaultSettings:f.a.func.isRequired,setLayoutSettings:f.a.func.isRequired,logoutUser:f.a.func.isRequired,user:e.user,settings:e.layout.settings}}),{setLayoutSettings:E.d,setDefaultSettings:E.c,logoutUser:S.d})(w)),x=a(1),j=a(1045),k=a(112),L=a.n(k),C=a(101),M=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).windowListener=null,e.state={selectedItem:{},navOpen:!0,secondaryNavOpen:!1},e.onMainItemMouseEnter=function(t){e.setSelected(t)},e.findSelecteditem=function(){j.a.forEach((function(t){t.sub?t.sub.forEach((function(a){a.sub?a.sub.forEach((function(a){a.path==e.props.history.location.pathname&&e.setSelected(t)})):a.path==e.props.history.location.pathname&&e.setSelected(t)})):t.path==e.props.history.location.pathname&&e.setSelected(t)}))},e.onMainItemMouseLeave=function(){},e.setSelected=function(t){e.setState({selectedItem:t})},e.removeSelected=function(){e.setState({selectedItem:null})},e.closeSecNav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings,s={};Object(p.d)()&&(s.open=!1),a(Object(y.merge)({},n,{layout2Settings:{leftSidebar:Object(x.a)(Object(x.a)({},s),{},{secondaryNavOpen:!1})}}))},e.openSecNav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(y.merge)({},n,{layout2Settings:{leftSidebar:{open:!0,secondaryNavOpen:!0}}}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.findSelecteditem()})),window&&(window.innerWidth<1200?this.closeSecNav():this.openSecNav()),this.windowListener=window.addEventListener("resize",(function(){window.innerWidth<1200?e.closeSecNav():e.openSecNav()}))}},{key:"componentWillUnmount",value:function(){this.windowListener&&window.removeEventListener("resize",this.windowListener)}},{key:"render",value:function(){var e=this,t=this.props.settings,a=this.state.selectedItem;return l.a.createElement("div",{className:"side-content-wrap"},l.a.createElement(L.a,{className:Object(p.a)({"sidebar-left o-hidden rtl-ps-none":!0,open:t.layout2Settings.leftSidebar.open})},l.a.createElement("ul",{className:"navigation-left"},j.a.map((function(t,n){return l.a.createElement("li",{className:Object(p.a)({"nav-item":!0,active:t.name===a.name}),onMouseEnter:function(){e.onMainItemMouseEnter(t)},onMouseLeave:e.onMainItemMouseLeave,key:n},t.path&&"extLink"!==t.type&&l.a.createElement(h.b,{className:"nav-item-hold",to:t.path},l.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),l.a.createElement("span",{className:"nav-text"},t.name)),t.path&&"extLink"===t.type&&l.a.createElement("a",{className:"nav-item-hold",href:t.path},l.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),l.a.createElement("span",{className:"nav-text"},t.name)),!t.path&&l.a.createElement("div",{className:"nav-item-hold"},l.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),l.a.createElement("span",{className:"nav-text"},t.name)),l.a.createElement("div",{className:"triangle"}))})))),l.a.createElement(L.a,{className:Object(p.a)({"sidebar-left-secondary o-hidden rtl-ps-none":!0,open:t.layout2Settings.leftSidebar.secondaryNavOpen})},l.a.createElement("i",{className:"sidebar-close i-Close",onClick:this.closeSecNav}),l.a.createElement("div",{className:"logo ml-4 mb-4"},l.a.createElement("img",{src:"/assets/images/logo-text.png",alt:"logo"})),l.a.createElement("div",{className:"header mb-3 ml-4"},l.a.createElement("h5",{className:"font-weight-bold mb-1"},a.name),l.a.createElement("p",null,a.description)),a&&a.sub&&l.a.createElement(C.c,{menu:a.sub,closeSecSidenav:this.closeSecNav})),l.a.createElement("div",{className:Object(p.a)({"sidebar-overlay":!0,open:t.layout2Settings.leftSidebar.secondaryNavOpen})}))}}]),a}(o.Component),B=Object(N.g)(Object(b.b)((function(e){return{setLayoutSettings:f.a.func.isRequired,settings:e.layout.settings}}),{setLayoutSettings:E.d})(M)),T=a(1048),F=a(60),I=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={},e.handleSearchBoxClose=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(y.merge)({},n,{layout2Settings:{searchBox:{open:!1}}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.settings,a=e.routes;return l.a.createElement("div",null,l.a.createElement("div",{className:"".concat(Object(p.a)({"app-admin-wrap layout-sidebar-compact clearfix":!0,"sidenav-open":t.layout2Settings.leftSidebar.open})," ").concat(t.layout2Settings.leftSidebar.theme)},l.a.createElement(B,null),l.a.createElement("div",{className:Object(p.a)({"main-content-wrap d-flex flex-column":!0,"sidenav-open":t.layout2Settings.leftSidebar.open})},t.layout2Settings.header.show&&l.a.createElement(O,null),l.a.createElement(o.Suspense,{fallback:l.a.createElement(F.a,null)},l.a.createElement("div",{className:"main-content"},Object(r.a)(a))),l.a.createElement(m.a,null))),l.a.createElement(T.a,{open:t.layout2Settings.searchBox.open,handleClose:this.handleSearchBoxClose}))}}]),a}(o.Component);t.default=Object(b.b)((function(e){return{settings:e.layout.settings}}),{setLayoutSettings:E.d})(I)}}]);
//# sourceMappingURL=92.8d567a95.chunk.js.map