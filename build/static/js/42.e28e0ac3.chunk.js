(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[42],{2126:function(e,a,t){"use strict";t.r(a);var r=t(10),n=t(12),i=t(14),l=t(15),c=t(0),s=t.n(c),o=t(101),m=t(581),d=t.n(m),h=t(987),u=t(988),b=t(989),f=t(990),p=t(991),g=t(992),v=t(993),E=t(994),w=t(995),N=t(996),y=t(635),O=t(782),x=function(e){Object(i.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=a.call.apply(a,[this].concat(i))).state={cardList1:[{icon:"i-Car-Items",title:"New Leads",amount:205},{icon:"i-Data-Download",title:"Download",amount:4021},{icon:"i-Cube-Molecule-2",title:"Feedback",amount:80},{icon:"i-File-Horizontal-Text",title:"Option",amount:1200}],chartList1:[{title:"INCOME",amount:1e3,chart:O.a},{title:"APPROVE",amount:500,chart:O.l},{title:"TRANSACTION",amount:44909,chart:O.q},{title:"SALES",amount:500,chart:O.r}],chartList2:[{icon:"i-Like-2",title:"Approve",amount:55e3,chart:O.s},{icon:"i-File-Horizontal-Text",title:"Comments",amount:500,chart:O.t},{icon:"i-Cube-Molecule-2",title:"Contribution",amount:46e3,chart:O.u},{icon:"i-Eye",title:"Watch",amount:7e4,chart:O.v}],chartList3:[{title:"People",amount:2750,chart:O.w},{title:"Use",amount:"75%",chart:O.b},{title:"Views",amount:2750,chart:O.c},{title:"Growth",amount:6760,chart:O.d}],chartList4:[{amount:698212,chart:O.e},{amount:369212,chart:O.f},{amount:369212,chart:O.g},{amount:369212,chart:O.h}],cardList2:[{icon:"i-Building",color:"text-primary",title:"Assets",amount:"46,025"},{icon:"i-Bar-Chart",color:"text-danger",title:"Progression",amount:"80%"},{icon:"i-Full-Cart",color:"text-success",title:"Total Profit",amount:"\u09f3 2000"},{icon:"i-Bookmark",color:"text-warning",title:"Lease",amount:"5,417"}],chartList5:[{title:"People Choice Rate",chart:O.i},{title:"Item Pending",chart:O.j},{title:"Total Profit",chart:O.k},{title:"Total Revenue",chart:O.m}],chartList6:[{title:"Orders Received",chart:O.n,amount:697},{title:"Total Marketing",chart:O.o,amount:"5,767"},{title:"Total Earning",chart:O.p,amount:"$5,767"}],cardList3:[{title:"Server status region 1",subtitle:"Last down 4 days ago",icon:"i-Arrow-Up-in-Circle",color:"success",message:"Up"},{title:"Server status region 2",subtitle:"Last down 8 days ago",icon:"i-Arrow-Up-in-Circle",color:"success",message:"Up"},{title:"Server status region 3",subtitle:"Last down 22 days ago",icon:"i-Arrow-Down-in-Circle",color:"danger",message:"Down"},{title:"Server status region 4",subtitle:"Last down 2 days ago",icon:"i-Arrow-Down-in-Circle",color:"danger",message:"Down"}]},e}return Object(n.a)(t,[{key:"render",value:function(){var e=this.state,a=e.cardList1,t=e.cardList2,r=e.cardList3,n=e.chartList1,i=e.chartList2,l=e.chartList3,c=e.chartList4,m=e.chartList5,O=e.chartList6;return s.a.createElement("div",null,s.a.createElement(o.a,{routeSegments:[{name:"Widgets",path:"/widgets"},{name:"Statistics"}]}),s.a.createElement("section",{className:"ul-widget-stat-s1"},s.a.createElement("div",{className:"row"},a.map((function(e,a){return s.a.createElement("div",{key:a,className:"col-lg-3 col-md-6 col-sm-6"},s.a.createElement("div",{className:"card card-icon-bg card-icon-bg-primary o-hidden mb-4"},s.a.createElement("div",{className:"card-body text-center"},s.a.createElement("i",{className:e.icon}),s.a.createElement("div",{className:"content"},s.a.createElement("p",{className:"text-muted mt-2 mb-0"},e.title),s.a.createElement("p",{className:"text-primary text-24 line-height-1 mb-2"},e.amount)))))})))),s.a.createElement("section",{className:"ul-widget-stat-s2"},s.a.createElement("div",{className:"row"},n.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-3 col-lg-3"},s.a.createElement("div",{className:"card mb-4  o-hidden"},s.a.createElement("div",{className:"card-body ul-card__widget-chart"},s.a.createElement("div",{className:"ul-widget__chart-info"},s.a.createElement("h5",{className:"heading"},e.title),s.a.createElement("div",{className:"ul-widget__chart-number"},s.a.createElement("h2",{className:"t-font-boldest"},"$",e.amount),s.a.createElement("small",{className:"text-muted"},"46% compared to last year"))),s.a.createElement(d.a,{options:e.chart,series:e.chart.series,type:"area",height:"100"}))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},i.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-3 col-lg-3"},s.a.createElement("div",{className:"card mb-4  o-hidden"},s.a.createElement("div",{className:"card-body ul-card__widget-chart"},s.a.createElement("div",{className:"ul-widget__chart-info"},s.a.createElement("h5",{className:"heading text-20  line-height-1 mb-3"},s.a.createElement("i",{className:e.icon})," ",e.title),s.a.createElement("div",{className:"ul-widget__chart-number"},s.a.createElement("h6",{className:""},e.amount.toLocaleString()))),s.a.createElement(d.a,{options:e.chart,series:e.chart.series,type:"area",height:"100"}))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},l.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-3 col-lg-3"},s.a.createElement("div",{className:"card mb-4  o-hidden h-100"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"ul-widget__row"},s.a.createElement(d.a,{options:e.chart,series:e.chart.series,type:e.chart.chart.type}),s.a.createElement("div",{className:"ul-widget__content"},s.a.createElement("p",{className:" text-mute m-0"},e.title),s.a.createElement("h4",{className:"heading"},e.amount))))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},c.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-3 col-lg-3"},s.a.createElement("div",{className:"card mb-4  o-hidden"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"ul-widget__row-v2"},s.a.createElement(d.a,{options:e.chart,series:e.chart.series,type:e.chart.chart.type,height:"100"}),s.a.createElement("div",{className:"ul-widget__content-v2"},s.a.createElement("h4",{className:"heading mt-3"},e.amount),s.a.createElement("small",{className:" text-muted m-0"},"50% Average"))))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},t.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-3 col-lg-3"},s.a.createElement("div",{className:"card mb-2"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"ul-widget__row"},s.a.createElement("div",{className:"ul-widget-stat__font"},s.a.createElement("i",{className:"".concat(e.icon," ").concat(e.color)})),s.a.createElement("div",{className:"ul-widget__content"},s.a.createElement("p",{className:" m-0"},e.title),s.a.createElement("h4",{className:"heading"},e.amount))))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},m.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-3 col-lg-3"},s.a.createElement("div",{className:"card mt-4 mb-4  o-hidden"},s.a.createElement("div",{className:"card-body"},s.a.createElement("div",{className:"ul-widget__row-v2"},s.a.createElement(d.a,{options:e.chart,series:e.chart.series,type:e.chart.chart.type}),s.a.createElement("div",{className:"ul-widget__content-v2"},s.a.createElement("h4",{className:"heading mt-3"},e.title))))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},O.map((function(e,a){return s.a.createElement("div",{key:a,className:" col-md-4 col-lg-4"},s.a.createElement("div",{className:"card mb-4  o-hidden"},s.a.createElement("div",{className:"card-body ul-card__widget-chart"},s.a.createElement("div",{className:"ul-widget__row-v2"},s.a.createElement("div",{className:"ul-widget__content-v2"},s.a.createElement("h3",{className:"heading mt-3"},e.amount),s.a.createElement("small",{className:" text-muted m-0"},e.title)),s.a.createElement(d.a,{options:e.chart,series:e.chart.series,type:e.chart.chart.type,height:"100"})))))})))),s.a.createElement("section",{className:"ul-widget-stat-s3"},s.a.createElement("div",{className:"row"},r.map((function(e,a){return s.a.createElement("div",{key:a,className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-3"},e.title),s.a.createElement("p",{className:"text-20 text-".concat(e.color," line-height-1 mb-3")},s.a.createElement("i",{className:"i-Arrow-Down-in-Circle"})," ",e.message),s.a.createElement("small",{className:"text-muted"},e.subtitle))))})))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-1"},"Taffic in last 24h"),s.a.createElement("p",{className:"text-22 text-success font-weight-light mb-1"},"13000"),s.a.createElement(h.a,{height:"65px"})))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-1"},"Taffic in last week"),s.a.createElement("p",{className:"text-22 text-danger font-weight-light mb-1"},"65058"),s.a.createElement(u.a,{height:"65px"})))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-1"},"Taffic in last month"),s.a.createElement("p",{className:"text-22 text-success font-weight-light mb-1"},"165058"),s.a.createElement(b.a,{height:"65px"})))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-1"},"Taffic in last 3 months"),s.a.createElement("p",{className:"text-22 text-danger font-weight-light mb-1"},"1065058"),s.a.createElement(f.a,{height:"65px"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-2 text-muted"},"Storage Usage"),s.a.createElement("p",{className:"mb-1 text-22 font-weight-light"},"50%"),s.a.createElement(y.a,{variant:"success",now:50,style:{height:"4px"}}),s.a.createElement("small",{className:"text-muted"},"Most data used in last 3 days")))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-2 text-muted"},"Bandwith Usage"),s.a.createElement("p",{className:"mb-1 text-22 font-weight-light"},"90%"),s.a.createElement(y.a,{variant:"danger",now:90,style:{height:"4px"}}),s.a.createElement("small",{className:"text-muted"},"Most data used in last 7 days")))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-2 text-muted"},"Data Usage"),s.a.createElement("p",{className:"mb-1 text-22 font-weight-light"},"60%"),s.a.createElement(y.a,{variant:"warning",now:60,style:{height:"4px"}}),s.a.createElement("small",{className:"text-muted"},"Most data used in last 5 days")))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card mb-4"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-2 text-muted"},"Data Usage"),s.a.createElement("p",{className:"mb-1 text-22 font-weight-light"},"60%"),s.a.createElement(y.a,{variant:"info",now:60,style:{height:"4px"}}),s.a.createElement("small",{className:"text-muted"},"Most data used in last 4 days"))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-0 text-muted"},"Registration/Subscription"),s.a.createElement("p",{className:"text-22 font-weight-light mb-1"},"20/80"),s.a.createElement(p.a,{height:"140px"})))),s.a.createElement("div",{className:"col-md-3 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-0 text-muted"},"Project Running/Completed"),s.a.createElement("p",{className:"text-22 font-weight-light mb-1"},"40/60"),s.a.createElement(g.a,{height:"140px"})))),s.a.createElement("div",{className:"col-md-3 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-0 text-muted"},"Registration/Subscription"),s.a.createElement("p",{className:"text-22 font-weight-light mb-1"},"20/80"),s.a.createElement(v.a,{height:"140px"})))),s.a.createElement("div",{className:"col-md-3 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-0 text-muted"},"Project Running/Completed"),s.a.createElement("p",{className:"text-22 font-weight-light mb-1"},"40/60"),s.a.createElement(E.a,{height:"140px"}))))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-3 mb-4"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-2 text-muted"},"Project Completion Rate"),s.a.createElement("p",{className:"text-22 font-weight-light mb-1"},s.a.createElement("i",{className:"i-Up text-success"})," 15%"),s.a.createElement(w.a,{height:"60px"})))),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("div",{className:"card"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h6",{className:"mb-2 text-muted"},"Project Completion Rate"),s.a.createElement("p",{className:"text-22 font-weight-light mb-1"},s.a.createElement("i",{className:"i-Down text-danger"})," 15%"),s.a.createElement(N.a,{height:"60px"}))))))}}]),t}(c.Component);a.default=x},534:function(e,a,t){"use strict";t.d(a,"b",(function(){return i})),t.d(a,"a",(function(){return l}));var r=t(0),n=t.n(r);function i(e,a){var t=0;return n.a.Children.map(e,(function(e){return n.a.isValidElement(e)?a(e,t++):e}))}function l(e,a){var t=0;n.a.Children.forEach(e,(function(e){n.a.isValidElement(e)&&a(e,t++)}))}},635:function(e,a,t){"use strict";var r=t(2),n=t(7),i=t(13),l=t.n(i),c=t(0),s=t.n(c),o=t(23),m=t(534),d=["min","now","max","label","srOnly","striped","animated","className","style","variant","bsPrefix"],h=["isChild"],u=["min","now","max","label","srOnly","striped","animated","bsPrefix","variant","className","children"];function b(e,a,t){var r=(e-a)/(t-a)*100;return Math.round(1e3*r)/1e3}function f(e,a){var t,i=e.min,c=e.now,o=e.max,m=e.label,h=e.srOnly,u=e.striped,f=e.animated,p=e.className,g=e.style,v=e.variant,E=e.bsPrefix,w=Object(n.a)(e,d);return s.a.createElement("div",Object(r.a)({ref:a},w,{role:"progressbar",className:l()(p,E+"-bar",(t={},t["bg-"+v]=v,t[E+"-bar-animated"]=f,t[E+"-bar-striped"]=f||u,t)),style:Object(r.a)({width:b(c,i,o)+"%"},g),"aria-valuenow":c,"aria-valuemin":i,"aria-valuemax":o}),h?s.a.createElement("span",{className:"sr-only"},m):m)}var p=s.a.forwardRef((function(e,a){var t=e.isChild,i=Object(n.a)(e,h);if(i.bsPrefix=Object(o.a)(i.bsPrefix,"progress"),t)return f(i,a);var d=i.min,b=i.now,p=i.max,g=i.label,v=i.srOnly,E=i.striped,w=i.animated,N=i.bsPrefix,y=i.variant,O=i.className,x=i.children,j=Object(n.a)(i,u);return s.a.createElement("div",Object(r.a)({ref:a},j,{className:l()(O,N)}),x?Object(m.b)(x,(function(e){return Object(c.cloneElement)(e,{isChild:!0})})):f({min:d,now:b,max:p,label:g,srOnly:v,striped:E,animated:w,bsPrefix:N,variant:y},a))}));p.displayName="ProgressBar",p.defaultProps={min:0,max:100,animated:!1,isChild:!1,srOnly:!1,striped:!1},a.a=p},782:function(e,a,t){"use strict";t.d(a,"a",(function(){return i})),t.d(a,"l",(function(){return l})),t.d(a,"q",(function(){return c})),t.d(a,"r",(function(){return s})),t.d(a,"s",(function(){return o})),t.d(a,"t",(function(){return m})),t.d(a,"u",(function(){return d})),t.d(a,"v",(function(){return h})),t.d(a,"w",(function(){return u})),t.d(a,"b",(function(){return b})),t.d(a,"c",(function(){return f})),t.d(a,"d",(function(){return p})),t.d(a,"e",(function(){return g})),t.d(a,"f",(function(){return v})),t.d(a,"g",(function(){return E})),t.d(a,"h",(function(){return w})),t.d(a,"i",(function(){return N})),t.d(a,"j",(function(){return y})),t.d(a,"k",(function(){return O})),t.d(a,"m",(function(){return x})),t.d(a,"n",(function(){return j})),t.d(a,"o",(function(){return k})),t.d(a,"p",(function(){return S}));var r=t(1),n={chart:{type:"area",zoom:{enabled:!1},sparkline:{enabled:!0},toolbar:{show:!1,tools:{download:!1}}},dataLabels:{enabled:!1}},i=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"straight",width:1},series:[{name:"income 1",data:[31,40,28,51,42,109,100]},{name:"income 2",data:[11,32,45,32,34,52,41]}],colors:["#6ed3cf","#4caf50"]}),l=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"smooth",width:1},series:[{name:"approve 1",data:[90,40,28,51,42,109,100]},{name:"approve 2",data:[11,90,45,32,34,52,41]}],colors:["#6ed3cf","#9068be"]}),c=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"smooth",width:1},series:[{name:"transaction 1",data:[11,40,28,51,42,109,100]},{name:"transaction 2",data:[100,40,45,32,34,0,41]}],colors:["#fae596","#3fb0ac"]}),s=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"straight",width:1},series:[{name:"sales 1",data:[31,40,28,51,42,109,100]},{name:"sales 2",data:[11,32,90,32,34,52,41]}],colors:["#f44336","#e05038"]}),o=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"straight",width:1},series:[{name:"approve 1",data:[31,40,28,51,42,109,100]}],colors:["#639","#e97d23"]}),m=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"straight",width:1},series:[{name:"Comments",data:[60,20,28,51,15,40,50]}],colors:["#98dafc"]}),d=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"straight",width:1},series:[{name:"Contribution",data:[30,20,90,2,15,40,50]}],colors:["#bcd5d1"]}),h=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"straight",width:1},series:[{name:"Watch",data:[65,90,10,45,15,75,50]}],colors:["#6534ff"]}),u={chart:{type:"bar",width:"70%",height:150,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60%",endingShape:"rounded"}},colors:["#08e5e8"],series:[{data:[12,14,2,47,42,15,47,75,65,19,14,30,50]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},b={chart:{height:150,width:"60%",type:"radialBar"},plotOptions:{radialBar:{startAngle:-90,endAngle:90,track:{background:"#e7e7e7",strokeWidth:"100%",margin:5,shadow:{enabled:!0,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{offsetY:1,fontSize:"10px"}}}},stroke:{curve:"smooth",lineCap:"round"},lebels:{show:!1},series:[75],labels:["Average Results"]},f={chart:{type:"bar",width:"70%",height:150,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"60%"}},colors:["#e05038"],series:[{data:[12,14,2,47,-42,-15,47,75,65,19,-14,30,50]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},p={chart:{type:"line",width:"100%",height:150,sparkline:{enabled:!0}},series:[{data:[25,66,41,89,63,25,44,12,36,9,54]}],tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},g={chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%"}},colors:["#c43235"],series:[{data:[5,15,25,35,55,75,100,75,55,35,25,15,5]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},v={chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%"}},colors:["#6534ff"],series:[{data:[5,15,15,35,35,75,90,75,35,35,15,15,5]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},E={chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%"}},colors:["#e6af4b"],series:[{data:[5,15,25,35,25,15,5,10,20,30,45,65,45,30,20,10]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},w={chart:{type:"bar",width:"70%",height:100,sparkline:{enabled:!0}},plotOptions:{bar:{columnWidth:"30%"}},colors:["#259b24"],series:[{data:[100,85,75,55,35,25,15,5,15,25,35,55,75,85,90,100]}],labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],xaxis:{crosshairs:{width:1}},tooltip:{fixed:{enabled:!1},x:{show:!1},y:{title:{formatter:function(e){return""}}},marker:{show:!1}}},N={chart:{height:250,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{showOn:"always",name:{offsetY:1,show:!0,color:"#888",fontSize:"15px"},value:{formatter:function(e){return parseInt(e)},color:"#111",fontSize:"12px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#ABE5A1"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[75],stroke:{lineCap:"round"},labels:["Choice"]},y={chart:{height:250,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{showOn:"always",name:{offsetY:1,show:!0,color:"#888",fontSize:"15px"},value:{formatter:function(e){return parseInt(e)},color:"#111",fontSize:"12px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#e6af4b"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[55],stroke:{lineCap:"round"},labels:["Pending"]},O={chart:{height:250,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{showOn:"always",name:{offsetY:1,show:!0,color:"#888",fontSize:"15px"},value:{formatter:function(e){return parseInt(e)},color:"#111",fontSize:"12px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#e05038"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[12],stroke:{lineCap:"round"},labels:["Profit"]},x={chart:{height:250,type:"radialBar",toolbar:{show:!0}},plotOptions:{radialBar:{startAngle:-135,endAngle:225,hollow:{margin:0,size:"70%",background:"#fff",image:void 0,imageOffsetX:0,imageOffsetY:0,position:"front",dropShadow:{enabled:!0,top:3,left:0,blur:4,opacity:.24}},track:{background:"#fff",strokeWidth:"67%",margin:0,dropShadow:{enabled:!0,top:-3,left:0,blur:4,opacity:.35}},dataLabels:{showOn:"always",name:{offsetY:1,show:!0,color:"#888",fontSize:"15px"},value:{formatter:function(e){return parseInt(e)},color:"#111",fontSize:"12px",show:!0}}}},fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#c0dfd9"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},series:[100],stroke:{lineCap:"round"},labels:["Revenue"]},j=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"smooth",width:1},series:[{name:"Orders",data:[10,20,28,51,15,40,20]}],colors:["#e62739"]}),k=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"smooth",width:1},series:[{name:"Marketing",data:[50,20,0,51,15,30,70]}],colors:["#ffeb3b"]}),S=Object(r.a)(Object(r.a)({},n),{},{stroke:{curve:"smooth",width:1},series:[{name:"Earning",data:[100,20,20,51,35,10,70]}],colors:["#4caf50"]})},987:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[Object(r.a)(Object(r.a)({data:[30,40,20,50,40,80,90]},s.i.smoothLine),{},{lineStyle:Object(r.a)({color:"#4CAF50"},s.i.lineShadow),itemStyle:{color:"#4CAF50"}})]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},988:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[Object(r.a)(Object(r.a)({data:[6,4,7,4,6,4,1]},s.i.smoothLine),{},{lineStyle:Object(r.a)({color:"#df0029"},s.i.lineShadow),itemStyle:{color:"#df0029"}})]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},989:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[Object(r.a)(Object(r.a)({data:[2,2,7,4,6,4,8]},s.i.smoothLine),{},{lineStyle:Object(r.a)({color:"#4CAF50"},s.i.lineShadow),itemStyle:{color:"#4CAF50"}})]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},990:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[Object(r.a)(Object(r.a)({data:[2,2,7,4,6,4,4]},s.i.smoothLine),{},{lineStyle:Object(r.a)({color:"#df0029"},s.i.lineShadow),itemStyle:{color:"#df0029"}})]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},991:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[{type:"pie",itemStyle:s.i.pieLineStyle,data:[Object(r.a)(Object(r.a)({name:"Email Subscription",value:80},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#4CAF50"}}),Object(r.a)(Object(r.a)({name:"Registration",value:20},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#df0029"}})]}]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},992:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[{type:"pie",itemStyle:s.i.pieLineStyle,data:[Object(r.a)(Object(r.a)({name:"Running",value:40},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#ff9800"}}),Object(r.a)(Object(r.a)({name:"Completed",value:60},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#4CAF50"}})]}]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},993:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[{type:"pie",itemStyle:s.i.pieLineStyle,data:[Object(r.a)(Object(r.a)({name:"Email Subscription",value:80},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#4CAF50"}}),Object(r.a)(Object(r.a)({name:"Registration",value:20},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#df0029"}})]}]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},994:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[{type:"pie",itemStyle:s.i.pieLineStyle,data:[Object(r.a)(Object(r.a)({name:"Running",value:40},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#ff9800"}}),Object(r.a)(Object(r.a)({name:"Completed",value:60},s.i.pieLabelOff),{},{itemStyle:{borderColor:"#4CAF50"}})]}]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},995:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[{type:"bar",barWidth:6,itemStyle:Object(r.a)({color:"#ff9800"},s.i.lineShadow),data:[{name:"Bar 1",value:40},{name:"Bar 2",value:60,itemStyle:{color:"#4CAF50"}},{name:"Bar 3",value:80},{name:"Bar 4",value:70},{name:"Bar 5",value:60},{name:"Bar 6",value:70},{name:"Bar 7",value:80},{name:"Bar 8",value:40},{name:"Bar 9",value:70,itemStyle:{color:"#4CAF50"}}]}]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}},996:function(e,a,t){"use strict";var r=t(1),n=t(0),i=t.n(n),l=t(543),c=t.n(l),s=t(101),o=Object(r.a)(Object(r.a)({},s.i.defaultOptions),{series:[{type:"bar",barWidth:6,itemStyle:Object(r.a)({color:"#ff9800"},s.i.lineShadow),data:[{name:"Bar 1",value:40},{name:"Bar 2",value:60,itemStyle:{color:"#4CAF50"}},{name:"Bar 3",value:80},{name:"Bar 4",value:70},{name:"Bar 5",value:60},{name:"Bar 6",value:70},{name:"Bar 7",value:80},{name:"Bar 8",value:40},{name:"Bar 9",value:70,itemStyle:{color:"#4CAF50"}}]}]});a.a=function(e){var a=e.height;return i.a.createElement(c.a,{style:{height:a},option:o})}}}]);
//# sourceMappingURL=42.e28e0ac3.chunk.js.map