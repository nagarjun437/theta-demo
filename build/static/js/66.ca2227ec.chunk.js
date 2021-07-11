(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[66],{2188:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(5),c=a(10),s=a(12),o=a(14),i=a(15),l=a(0),m=a.n(l),d=a(168),u=a(8),f=a.n(u),p=function(e){return f.a.get("/api/chat/contacts",{data:e})},h=function(e){return f.a.get("/api/chat/contacts/recent",{data:e})},b=function(e,t){return f.a.get("/api/chat/chat-room",{data:{currentUser:e,contactId:t}})},v=function(e){return f.a.post("/api/chat/add",e)},g=a(47),E=a(112),N=a.n(E),w=a(876),x=function(e){var t=e.open,a=(e.currentUser,e.contactList),n=void 0===a?[]:a,r=e.recentContactList,c=void 0===r?[]:r,s=e.handleContactClick,o=e.toggleSidenav,i=Object(l.useState)(""),d=Object(g.a)(i,2),u=d[0],f=d[1];return m.a.createElement("div",{className:"chat-sidebar-wrap sidebar",style:{left:t?0:"-260px"}},m.a.createElement("div",{className:"border-right"},m.a.createElement("div",{className:"pt-2 pb-2 pl-3 pr-3 d-flex align-items-center o-hidden box-shadow-1 chat-topbar"},m.a.createElement("span",{className:"link-icon d-md-none",onClick:o},m.a.createElement("i",{className:"icon-regular ml-0 mr-3 i-Left"})),m.a.createElement("div",{className:"form-group m-0 flex-grow-1"},m.a.createElement("input",{type:"text",className:"form-control form-control-rounded",id:"search",placeholder:"Search contacts",value:u,onChange:function(e){var t=e.target.value;return f(t)}}))),m.a.createElement(N.a,{className:"contacts-scrollable"},m.a.createElement("div",{className:"mt-4 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"},"Recent"),c.filter((function(e){return e.name.toLocaleLowerCase().match(u.toLocaleLowerCase())})).map((function(e){return m.a.createElement("div",{key:e.id,onClick:function(){return s(e.id)},className:"p-3 d-flex align-items-center border-bottom contact ".concat(e.status)},m.a.createElement("img",{src:e.avatar,className:"avatar-sm rounded-circle mr-3",alt:""}),m.a.createElement("div",null,m.a.createElement("h6",{className:"m-0"},e.name),m.a.createElement("span",{className:"text-muted text-small"},Object(w.default)(new Date(e.lastChatTime).getTime(),"dd MMM, yyyy"))))})),m.a.createElement("div",{className:"mt-3 pb-2 pl-3 pr-3 font-weight-bold text-muted border-bottom"},"Contacts"),n.filter((function(e){return e.name.toLocaleLowerCase().match(u.toLocaleLowerCase())})).map((function(e){return m.a.createElement("div",{key:e.id,onClick:function(){return s(e.id)},className:"p-3 d-flex border-bottom align-items-center contact online"},m.a.createElement("img",{src:e.avatar,className:"avatar-sm rounded-circle mr-3",alt:""}),m.a.createElement("h6",{className:""},e.name))})))))},y=a(557),C=a(22),L=function(){return m.a.createElement("div",{className:"d-flex flex-column justify-content-center align-items-center h-100"},m.a.createElement("div",{className:"card bg-white d-flex justify-content-center align-items-center",style:{height:"220px",width:"220px",borderRadius:"50%"}},m.a.createElement("i",{className:"i-Mail-Reply text-64 text-primary font-weight-900"}," ")),m.a.createElement("p",{className:"py-3"},"Click on a contact to start chat"))},R=function(e){e.currentUser;var t=e.toggleSidenav,a=(e.currentChatRoom,e.opponentUser),n=void 0===a?{}:a,r=e.messageList,c=void 0===r?[]:r,s=e.setBottomRef,o=e.handleMessageSend,i=e.isMobile,l=m.a.useState(""),d=Object(g.a)(l,2),u=d[0],f=d[1];return m.a.createElement("div",{className:"chat-content-wrap sidebar-content",style:{marginLeft:i?0:"260px"}},m.a.createElement("div",{className:"d-flex pl-3 pr-3 pt-2 pb-2 o-hidden box-shadow-1 chat-topbar"},m.a.createElement("span",{className:"link-icon d-md-none",onClick:t},m.a.createElement("i",{className:"icon-regular i-Right ml-0 mr-3"})),n&&m.a.createElement("div",{className:"d-flex align-items-center"},m.a.createElement("img",{src:n.avatar,alt:"",className:"avatar-sm rounded-circle mr-2"}),m.a.createElement("p",{className:"m-0 text-title text-16 flex-grow-1"},n.name))),n?m.a.createElement(m.a.Fragment,null,m.a.createElement(N.a,{className:"chat-content",containerRef:function(e){s(e)}},c.map((function(e,t){return e.contactId===n.id?m.a.createElement("div",{key:t,className:"d-flex mb-4"},m.a.createElement("div",{className:"message flex-grow-1"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("p",{className:"mb-1 text-title text-16 flex-grow-1"},e.name),m.a.createElement("span",{className:"text-small text-muted"},Object(C.c)(new Date(e.time))," ago")),m.a.createElement("p",{className:"m-0 white-space-pre-line"},e.text)),m.a.createElement("img",{src:e.avatar,alt:"",className:"avatar-sm rounded-circle ml-3"})):m.a.createElement("div",{key:t,className:"d-flex mb-4 user"},m.a.createElement("img",{src:e.avatar,alt:"",className:"avatar-sm rounded-circle ml-3"}),m.a.createElement("div",{className:"message flex-grow-1"},m.a.createElement("div",{className:"d-flex"},m.a.createElement("p",{className:"mb-1 text-title text-16 flex-grow-1"},e.name),m.a.createElement("span",{className:"text-small text-muted"},Object(C.c)(new Date(e.time))," ago")),m.a.createElement("p",{className:"m-0 white-space-pre-line"},e.text)))}))),m.a.createElement("div",{className:"pl-3 pr-3 pt-3 pb-3 box-shadow-1 chat-input-area"},m.a.createElement("form",{className:"inputForm"},m.a.createElement("div",{className:"form-group"},m.a.createElement("textarea",{className:"form-control form-control-rounded",placeholder:"Type your message",name:"message",id:"message",cols:"30",rows:"3",onChange:function(e){return f(e.target.value)},onKeyUp:function(e){"Enter"!==e.key||e.shiftKey||(""!==(u=u.trim())&&o(u),f(""))},value:u})),m.a.createElement("div",{className:"d-flex"},m.a.createElement("div",{className:"flex-grow-1"}),m.a.createElement(y.a,{className:"btn btn-icon btn-rounded mr-2",variant:"primary",onClick:function(){""!==u.trim()&&o(u),f("")}},m.a.createElement("i",{className:"i-Paper-Plane"})),m.a.createElement("label",{htmlFor:"attachment",className:"mb-0"},m.a.createElement(y.a,{type:"button",className:"mr-2",as:"span",variant:"outline-primary"},m.a.createElement("i",{className:"i-Add-File"}))),m.a.createElement("input",{onChange:function(e){console.log(e.target.files[0])},className:"d-none",id:"attachment",type:"file"}))))):m.a.createElement(L,null))},j=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),i=0;i<s;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={currentUser:{id:"7863a6802ez0e277a0f98534"},contactList:[],recentContactList:[],messageList:[],currentChatRoom:"",opponentUser:null,open:!0,isMobile:!1},e.bottomRef=m.a.createRef(),e.updateRecentContactList=function(){var t=e.state.currentUser.id;h(t).then((function(t){e.setState({recentContactList:Object(r.a)(t.data)})}))},e.scrollToBottom=function(){e.bottomRef.current.scrollIntoView({behavior:"smooth"})},e.handleContactClick=function(t){Object(C.d)()&&e.toggleSidenav(),p(t).then((function(t){var a=t.data;e.setState({opponentUser:Object(n.a)({},a)})})),b(e.state.currentUser.id,t).then((function(t){var a=t.data,n=a.chatId,r=a.messageList,c=a.recentListUpdated;console.log(n),e.setState({currentChatRoom:n,messageList:r},(function(){e.bottomRef.scrollTop=9999999999999})),c&&e.updateRecentContactList()}))},e.handleMessageSend=function(t){var a=e.state.currentUser.id,n=e.state,c=n.currentChatRoom,s=n.opponentUser;""!==c&&v({chatId:c,text:t,contactId:a,time:new Date}).then((function(t){e.setState({messageList:Object(r.a)(t.data)},(function(){e.bottomRef.scrollTop=9999999999999})),setTimeout((function(){v({chatId:c,text:"Hi, I'm ".concat(s.name,". Your imaginary friend."),contactId:s.id,time:new Date}).then((function(t){e.setState({messageList:Object(r.a)(t.data)},(function(){e.bottomRef.scrollTop=9999999999999}))}))}),750)}))},e.setBottomRef=function(t){e.bottomRef=t},e.toggleSidenav=function(){return e.setState({open:!e.state.open})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,t=this,a=this.state.currentUser.id;p(a).then((function(e){t.setState({currentUser:Object(n.a)({},e.data)})})),(e=this.state.currentUser.id,f.a.get("/api/chat/contacts/all",{data:e})).then((function(e){return t.setState({contactList:Object(r.a)(e.data)})})),this.updateRecentContactList(),Object(C.d)()&&this.setState({open:!1,isMobile:!0}),window&&(this.windowResizeListener=window.addEventListener("resize",(function(e){Object(C.d)()?t.setState({open:!1,isMobile:!0}):t.setState({open:!0,isMobile:!1})})))}},{key:"componentWillUnmount",value:function(){window&&window.removeEventListener("resize",this.windowResizeListener)}},{key:"render",value:function(){var e=this.state,t=e.open,a=e.isMobile,n=e.currentUser,r=e.contactList,c=e.recentContactList,s=e.messageList,o=e.opponentUser,i=e.currentChatRoom;return m.a.createElement(d.a,{className:"chat-sidebar-container sidebar-container"},m.a.createElement(x,{open:t,isMobile:a,toggleSidenav:this.toggleSidenav,contactList:r,recentContactList:c,handleContactClick:this.handleContactClick}),m.a.createElement(R,{open:t,isMobile:a,toggleSidenav:this.toggleSidenav,messageList:s,currentUser:n,opponentUser:o,currentChatRoom:i,setBottomRef:this.setBottomRef,handleMessageSend:this.handleMessageSend}))}}]),a}(l.Component);t.default=j},525:function(e,t,a){"use strict";t.a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];e.apply(this,n),t.apply(this,n)}}),null)}},526:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(0),s=a.n(c),o=a(525),i=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var m=s.a.forwardRef((function(e,t){var a=e.as,c=void 0===a?"a":a,m=e.disabled,d=e.onKeyDown,u=Object(r.a)(e,i),f=function(e){var t=u.href,a=u.onClick;(m||l(t))&&e.preventDefault(),m?e.stopPropagation():a&&a(e)};return l(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),m&&(u.tabIndex=-1,u["aria-disabled"]=!0),s.a.createElement(c,Object(n.a)({ref:t},u,{onClick:f,onKeyDown:Object(o.a)((function(e){" "===e.key&&(e.preventDefault(),f(e))}),d)}))}));m.displayName="SafeAnchor",t.a=m},557:function(e,t,a){"use strict";var n=a(2),r=a(7),c=a(13),s=a.n(c),o=a(0),i=a.n(o),l=a(23),m=a(526),d=["bsPrefix","variant","size","active","className","block","type","as"],u=i.a.forwardRef((function(e,t){var a=e.bsPrefix,c=e.variant,o=e.size,u=e.active,f=e.className,p=e.block,h=e.type,b=e.as,v=Object(r.a)(e,d),g=Object(l.a)(a,"btn"),E=s()(f,g,u&&"active",c&&g+"-"+c,p&&g+"-block",o&&g+"-"+o);if(v.href)return i.a.createElement(m.a,Object(n.a)({},v,{as:b,ref:t,className:s()(E,v.disabled&&"disabled")}));t&&(v.ref=t),h?v.type=h:b||(v.type="button");var N=b||"button";return i.a.createElement(N,Object(n.a)({},v,{className:E}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=u}}]);
//# sourceMappingURL=66.ca2227ec.chunk.js.map