(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[109],{2154:function(e,t,n){"use strict";n.r(t);var a=n(111),o=n(10),r=n(12),i=n(14),l=n(15),c=n(0),s=n.n(c),u=n(205),m=n(101),f=n(1982),h=n.n(f),b=n(805),g=n.n(b),w=n(563),p=n(538),A=n(557),C=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={basic1:!1,basic2:!1,success:!1,error:!1,warning:!1,question:!1,info:!1,other1:!1,other2:!1,other3:!1},e.toggleAlert=function(t){e.setState(Object(a.a)({},t,!e.state[t]))},e.closeAlert=function(t){e.setState(Object(a.a)({},t,!1))},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.basic1,a=t.basic2,o=t.success,r=t.error,i=t.info,l=t.warning,c=t.question,f=t.other1;t.other2,t.other3;return s.a.createElement("div",null,s.a.createElement(m.a,{routeSegments:[{name:"Home",path:"/"},{name:"Extra Kits",path:"/extra-kits"},{name:"Sweet Alert"}]}),s.a.createElement(w.a,null,s.a.createElement(p.a,{lg:6,md:6,sm:6,xs:12,className:"mb-4"},s.a.createElement(m.h,{title:"Basic Alert",className:"h-100"},s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){return e.toggleAlert("basic1")}},"Alert with title"),s.a.createElement(h.a,{show:n,title:"Title",text:"Here's a message!",onConfirm:function(){return e.toggleAlert("basic1")}}),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){return e.toggleAlert("basic2")}},"Alert with HTML"),s.a.createElement(h.a,{show:a,title:"Demo",html:Object(u.renderToStaticMarkup)(s.a.createElement("h1",null,"Message from html")),onConfirm:function(){return e.toggleAlert("basic2")}}))),s.a.createElement(p.a,{lg:6,md:6,sm:6,xs:12,className:"mb-4"},s.a.createElement(m.h,{title:"Alert Types",className:"h-100"},s.a.createElement(A.a,{className:"btn-block mb-2",variant:"success",onClick:function(){return e.toggleAlert("success")}},"Success"),s.a.createElement(h.a,{show:o,title:"Alert Title",type:"success",text:"SweetAlert in React",onConfirm:function(){return e.toggleAlert("success")}}),s.a.createElement(A.a,{className:"btn-block mb-2",variant:"info",onClick:function(){return e.toggleAlert("info")}},"info"),s.a.createElement(h.a,{show:i,title:"Alert Title",type:"info",text:"SweetAlert in React",onConfirm:function(){return e.toggleAlert("info")}}),s.a.createElement(A.a,{className:"btn-block mb-2",variant:"warning",onClick:function(){return e.toggleAlert("warning")}},"warning"),s.a.createElement(h.a,{show:l,title:"Alert Title",type:"warning",text:"SweetAlert in React",onConfirm:function(){return e.toggleAlert("warning")}}),s.a.createElement(A.a,{className:"btn-block mb-2",variant:"danger",onClick:function(){return e.toggleAlert("error")}},"error"),s.a.createElement(h.a,{show:r,title:"Alert Title",type:"error",text:"SweetAlert in React",onConfirm:function(){return e.toggleAlert("error")}}),s.a.createElement(A.a,{className:"btn-block mb-2",variant:"success",onClick:function(){return e.toggleAlert("question")}},"question"),s.a.createElement(h.a,{show:c,title:"Alert Title",type:"question",text:"SweetAlert in React",onConfirm:function(){return e.toggleAlert("question")}}))),s.a.createElement(p.a,{lg:6,md:6,sm:6,xs:12,className:"mb-4"},s.a.createElement(m.h,{title:"Other Options",className:"h-100"},s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){return e.toggleAlert("other1")}},"Alert with Cancel"),s.a.createElement(h.a,{show:f,title:"Title with Cancel",text:"SweetAlert in React",showCancelButton:!0,onConfirm:function(){console.log("confirm"),e.closeAlert("other1")},onCancel:function(){console.log("cancel"),e.closeAlert("other1")},onClose:function(){return e.closeAlert("other1")}}),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",type:"question",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",cancelButtonText:"No"}).then((function(e){e.value?g.a.fire("Deleted!","Your file has been deleted.","success"):g.a.fire("Cancelled!","Permission denied.","error")}))}},"Confirm Dialog"),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/photo-wide-4.jpg",imageWidth:400,imageHeight:200,imageAlt:"Custom image"})}},"Alert with Custo Image"),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){var e;g.a.fire({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,onBeforeOpen:function(){g.a.showLoading(),e=setInterval((function(){g.a.getContent().querySelector("b").textContent=g.a.getTimerLeft()}),100)},onClose:function(){clearInterval(e)}}).then((function(e){e.dismiss===g.a.DismissReason.timer&&console.log("I was closed by the timer")}))}},"Self Closing Alert"))),s.a.createElement(p.a,{lg:6,md:6,sm:6,xs:12,className:"mb-4"},s.a.createElement(m.h,{title:"Special Alerts",className:"h-100"},s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.fire({title:"Submit your Github username",input:"text",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Look up",showLoaderOnConfirm:!0,preConfirm:function(e){return fetch("//api.github.com/users/".concat(e)).then((function(e){if(!e.ok)throw new Error(e.statusText);return e.json()})).catch((function(e){g.a.showValidationMessage("Request failed: ".concat(e))}))},allowOutsideClick:function(){return!g.a.isLoading()}}).then((function(e){e.value&&g.a.fire({title:"".concat(e.value.login,"'s avatar"),imageUrl:e.value.avatar_url})}))}},"Alert with Server Request"),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.mixin({input:"text",confirmButtonText:"Next &rarr;",showCancelButton:!0,progressSteps:["1","2","3"]}).queue([{title:"Question 1",text:"Chaining swal2 modals is easy"},"Question 2","Question 3"]).then((function(e){if(e.value){var t=JSON.stringify(e.value);g.a.fire({title:"All done!",html:"\n          Your answers:\n          <pre><code>".concat(t,"</code></pre>\n        "),confirmButtonText:"Lovely!"})}}))}},"Alert with Stepper"),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.queue([{title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,preConfirm:function(){return fetch("//api.ipify.org?format=json").then((function(e){return e.json()})).then((function(e){return g.a.insertQueueStep(e.ip)})).catch((function(){g.a.insertQueueStep({icon:"error",title:"Unable to get your public IP"})}))}}])}},"Alert with Stepper"))),s.a.createElement(p.a,{lg:6,md:6,sm:6,xs:12,className:"mb-4"},s.a.createElement(m.h,{title:"Positioning with Animation",className:"h-100"},s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.fire({title:"Custom Position",confirmButtonText:"Ok",position:"top-end",icon:"success",text:"Your public IP will be received via AJAX request",footer:'<a href="https://daneden.github.io/animate.css/">positions?</a>'})}},"Alert with Positioning"),s.a.createElement(A.a,{className:"btn-block mb-2",onClick:function(){g.a.fire({title:"Custom animation with Animate.css",showClass:{popup:"animated fadeInDown  faster"},hideClass:{popup:"animated fadeOutUp  slower"}})}},"Alert with Animation")))))}}]),n}(c.Component);t.default=C}}]);
//# sourceMappingURL=109.deb01d20.chunk.js.map