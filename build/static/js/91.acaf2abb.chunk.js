(this["webpackJsonptheta-demo"]=this["webpackJsonptheta-demo"]||[]).push([[91],{2195:function(e,t,a){"use strict";a.r(t);var n=a(10),s=a(12),i=a(14),o=a(15),c=a(0),l=a.n(c),r=(a(39),a(122)),m=a(1),u=a(30),d=a(1045),p=a(17),g=a(22),v=a(112),S=a.n(v),f=a(101),h=a(6),E=a.n(h),b=a(25),y=a(27),N=a(29),w=a(9),O=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).windowListener=null,e.state={selectedItem:null,navOpen:!0,secondaryNavOpen:!1},e.onMainItemMouseEnter=function(t){"dropDown"===t.type?(e.setSelected(t),e.openSecSidenav()):(e.setSelected(t),e.closeSecSidenav())},e.onMainItemMouseLeave=function(){},e.setSelected=function(t){e.setState({selectedItem:t})},e.removeSelected=function(){e.setState({selectedItem:null})},e.openSecSidenav=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{secondaryNavOpen:!0}}}))},e.closeSecSidenav=function(){console.log("closing sec sidenav");var t=e.props,a=t.setLayoutSettings,n=t.settings,s={};Object(g.d)()&&(s.open=!1),a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:Object(m.a)(Object(m.a)({},s),{},{secondaryNavOpen:!1})}}))},e.closeSidenav=function(){console.log("closing sidenav");var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{open:!1,secondaryNavOpen:!1}}}))},e.openSidenav=function(){console.log("opening sidenav");var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{open:!0}}}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;null===this.state.selectedItem&&this.closeSecSidenav(),window&&(window.innerWidth<1200?this.closeSidenav():this.openSidenav()),this.windowListener=window.addEventListener("resize",(function(t){t.target;window.innerWidth<1200?e.closeSidenav():e.openSidenav()}))}},{key:"componentWillUnmount",value:function(){this.windowListener&&window.removeEventListener("resize",this.windowListener)}},{key:"render",value:function(){var e=this,t=this.props.settings;return l.a.createElement("div",{className:"side-content-wrap"},l.a.createElement(S.a,{className:Object(g.a)({"sidebar-left o-hidden rtl-ps-none":!0,open:t.layout1Settings.leftSidebar.open})},l.a.createElement("ul",{className:"navigation-left"},d.a.map((function(t,a){return l.a.createElement("li",{className:Object(g.a)({"nav-item":!0,active:e.state.selectedItem===t}),onMouseEnter:function(){e.onMainItemMouseEnter(t)},onMouseLeave:e.onMainItemMouseLeave,key:a},t.path&&"extLink"!==t.type&&l.a.createElement(u.b,{className:"nav-item-hold",to:t.path},l.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),l.a.createElement("span",{className:"nav-text"},t.name)),t.path&&"extLink"===t.type&&l.a.createElement("a",{className:"nav-item-hold",href:t.path},l.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),l.a.createElement("span",{className:"nav-text"},t.name)),!t.path&&l.a.createElement("div",{className:"nav-item-hold"},l.a.createElement("i",{className:"nav-icon ".concat(t.icon)}),l.a.createElement("span",{className:"nav-text"},t.name)),l.a.createElement("div",{className:"triangle"}))})))),l.a.createElement(S.a,{className:Object(g.a)({"sidebar-left-secondary o-hidden rtl-ps-none":!0,open:t.layout1Settings.leftSidebar.secondaryNavOpen})},this.state.selectedItem&&this.state.selectedItem.sub&&l.a.createElement(f.c,{menu:this.state.selectedItem.sub,closeSecSidenav:this.closeSecSidenav}),l.a.createElement("span",null)),l.a.createElement("div",{onMouseEnter:this.closeSecSidenav,className:Object(g.a)({"sidebar-overlay":!0,open:t.layout1Settings.leftSidebar.secondaryNavOpen})}))}}]),a}(c.Component),x=Object(w.g)(Object(b.b)((function(e){return{setDefaultSettings:E.a.func.isRequired,setLayoutSettings:E.a.func.isRequired,logoutUser:E.a.func.isRequired,user:e.user,settings:e.layout.settings}}),{setLayoutSettings:y.d,setDefaultSettings:y.c,logoutUser:N.d})(O)),j=a(1046),L=a(2182),k=a(904),M=a(905),C=(a(1047),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={shorcutMenuList:[{icon:"i-Shop-4",link:"#",text:"Home"},{icon:"i-Library",link:"#",text:"Ui Kits"},{icon:"i-Drop",link:"#",text:"Apps"},{icon:"i-File-Clipboard-File--Text",link:"#",text:"Form"},{icon:"i-Checked-User",link:"#",text:"Sessions"},{icon:"i-Ambulance",link:"#",text:"Support"}],notificationList:[{icon:"i-Speach-Bubble-6",title:"New message",description:"James: Hey! are you busy?",time:"2019-10-30T02:10:18.931Z",color:"primary",status:"New"},{icon:"i-Receipt-3",title:"New order received",description:"1 Headphone, 3 iPhone",time:"2019-03-10T02:10:18.931Z",color:"success",status:"New"},{icon:"i-Empty-Box",title:"Product out of stock",description:"1 Headphone, 3 iPhone",time:"2019-05-10T02:10:18.931Z",color:"danger",status:"3"},{icon:"i-Data-Power",title:"Server up!",description:"Server rebooted successfully",time:"2019-03-10T02:10:18.931Z",color:"success",status:"3"}],showSearchBox:!1},e.handleMenuClick=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{leftSidebar:{open:!!n.layout1Settings.leftSidebar.secondaryNavOpen||!n.layout1Settings.leftSidebar.open,secondaryNavOpen:!1}}}))},e.toggleFullScreen=function(){document.fullscreenEnabled&&(document.fullscreen?document.exitFullscreen():document.documentElement.requestFullscreen())},e.handleSearchBoxOpen=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{searchBox:{open:!0}}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.shorcutMenuList,a=void 0===t?[]:t,n=e.notificationList,s=void 0===n?[]:n;return l.a.createElement("div",{className:"main-header"},l.a.createElement("div",{className:"logo",onClick:this.handleMenuClick},l.a.createElement("img",{src:"/assets/images/logo.png",alt:""})),l.a.createElement("div",{style:{margin:"auto"}}),l.a.createElement("div",{className:"header-part-right"},l.a.createElement("i",{className:"i-Full-Screen header-icon d-none d-sm-inline-block","data-fullscreen":!0,onClick:this.toggleFullScreen}),l.a.createElement(L.a,null,l.a.createElement(L.a.Toggle,{as:"span",className:"toggle-hidden"},l.a.createElement("i",{className:"i-Safe-Box text-muted header-icon",role:"button"})),l.a.createElement(L.a.Menu,null,l.a.createElement("div",{className:"menu-icon-grid"},a.map((function(e){return l.a.createElement(u.a,{key:e.text,to:e.link},l.a.createElement("i",{className:e.icon})," ",e.text)}))))),l.a.createElement(L.a,null,l.a.createElement(L.a.Toggle,{as:"span",className:"toggle-hidden cursor-pointer"},l.a.createElement("div",{className:"badge-top-container",role:"button",id:"dropdownNotification","data-toggle":"dropdown"},l.a.createElement("span",{className:"badge badge-primary"},"3"),l.a.createElement("i",{className:"i-Bell text-muted header-icon"}))),l.a.createElement(k.a,{className:"notification-dropdown rtl-ps-none"},s.map((function(e,t){return l.a.createElement("div",{key:t,className:"dropdown-item d-flex"},l.a.createElement("div",{className:"notification-icon"},l.a.createElement("i",{className:"".concat(e.icon," text-").concat(e.color," mr-1")})),l.a.createElement("div",{className:"notification-details flex-grow-1"},l.a.createElement("p",{className:"m-0 d-flex align-items-center"},l.a.createElement("span",null,e.title),l.a.createElement("span",{className:"badge badge-pill badge-".concat(e.color," ml-1 mr-1")},e.status),l.a.createElement("span",{className:"flex-grow-1"}),l.a.createElement("span",{className:"text-small text-muted ml-auto"},Object(g.c)(new Date(e.time))," ago")),l.a.createElement("p",{className:"text-small text-muted m-0"},e.description)))})))),l.a.createElement("div",{className:"user col align-self-end"},l.a.createElement(L.a,null,l.a.createElement(M.a,{as:"span",className:"toggle-hidden cursor-pointer"},l.a.createElement("img",{src:"/assets/images/faces/1.jpg",id:"userDropdown",alt:"","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"})),l.a.createElement(k.a,null,l.a.createElement("div",{className:"dropdown-header"},l.a.createElement("i",{className:"i-Lock-User mr-1"})," Timothy Carlson"),l.a.createElement(u.a,{to:"/",className:"dropdown-item cursor-pointer"},"Account settings"),l.a.createElement(u.a,{to:"/",className:"dropdown-item cursor-pointer"},"Billing history"),l.a.createElement(u.a,{to:"/",className:"dropdown-item cursor-pointer",onClick:this.props.logoutUser},"Sign out"))))))}}]),a}(c.Component)),B=Object(w.g)(Object(b.b)((function(e){return{setDefaultSettings:E.a.func.isRequired,setLayoutSettings:E.a.func.isRequired,logoutUser:E.a.func.isRequired,user:e.user,settings:e.layout.settings}}),{setLayoutSettings:y.d,setDefaultSettings:y.c,logoutUser:N.d})(C)),I=a(1048),D=a(60),U=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e.handleSearchBoxClose=function(){var t=e.props,a=t.setLayoutSettings,n=t.settings;a(Object(p.merge)({},n,{layout1Settings:{searchBox:{open:!1}}}))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props,t=e.settings,a=e.routes;return l.a.createElement("div",null,l.a.createElement("div",{className:"app-admin-wrap layout-sidebar-large"},l.a.createElement(B,null),l.a.createElement(x,null),l.a.createElement("div",{className:Object(g.a)({"main-content-wrap d-flex flex-column":!0,"sidenav-open":t.layout1Settings.leftSidebar.open})},l.a.createElement(c.Suspense,{fallback:l.a.createElement(D.a,null)},l.a.createElement("div",{className:"main-content"},Object(r.a)(a))),t.footer.show&&l.a.createElement(j.a,null))),l.a.createElement(I.a,{open:t.layout1Settings.searchBox.open,handleClose:this.handleSearchBoxClose}))}}]),a}(c.Component);t.default=Object(b.b)((function(e){return{setLayoutSettings:E.a.func.isRequired,settings:e.layout.settings}}),{setLayoutSettings:y.d})(U)}}]);
//# sourceMappingURL=91.acaf2abb.chunk.js.map