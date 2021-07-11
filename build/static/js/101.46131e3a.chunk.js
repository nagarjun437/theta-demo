(this["webpackJsonpgull-react"]=this["webpackJsonpgull-react"]||[]).push([[101],{2181:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(12),l=a(14),i=a(15),c=a(0),o=a.n(c),s=a(101),u=a(2197),m=a(2084),d=a(2198),h=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={percent:0,data:e.getData(0)},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=25;this.setStateInterval=window.setInterval((function(){t=(t+=25)>100?0:t,e.setState({percent:t,data:e.getData(t)})}),2e3)}},{key:"componentWillUnmount",value:function(){this.setStateInterval&&window.clearInterval(this.setStateInterval)}},{key:"getData",value:function(e){return[{x:1,y:e},{x:2,y:100-e}]}},{key:"render",value:function(){return o.a.createElement("div",{style:{height:"320px"}},o.a.createElement("svg",{viewBox:"0 0 400 400",width:"100%",height:"100%"},o.a.createElement(u.a,{standalone:!1,animate:{duration:1e3},width:400,height:400,data:this.state.data,innerRadius:120,cornerRadius:25,labels:function(){return null},style:{data:{fill:function(e){var t=e.datum,a=t.y>30?"green":"red";return 1===t.x?a:"transparent"}}}}),o.a.createElement(m.a,{duration:1e3,data:this.state},(function(e){return o.a.createElement(d.a,{textAnchor:"middle",verticalAnchor:"middle",x:200,y:200,text:"".concat(Math.round(e.percent),"%"),style:{fontSize:45}})}))))}}]),a}(c.Component),v=a(1),f=a(2189),y=a(2199),p=a(2200),b=a(2225),g=a(2226),E=a(17),x={0:"E",45:"NE",90:"N",135:"NW",180:"W",225:"SW",270:"S",315:"SE"},k={base:"gold",highlight:"darkOrange"},O={base:"tomato",highlight:"orangeRed"},j=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.origin,t={stroke:O.base,strokeWidth:2,fill:k.base};return o.a.createElement("g",null,o.a.createElement("circle",{cx:e.x,cy:e.y,r:30,style:t}))}}]),a}(c.Component),w=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.datum,a=e.active,n=e.color,r=["".concat(x[t._x]),"".concat(Math.round(t._y1)," mph")],l={fill:n.highlight,textAnchor:"middle"},i=[Object(v.a)(Object(v.a)({},l),{},{fontSize:18,fontWeight:"bold"}),Object(v.a)(Object(v.a)({},l),{},{fontSize:12})];return a?o.a.createElement(d.a,{text:r,style:i,x:175,y:175,renderInPortal:!0}):null}}]),a}(c.Component),S=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={wind:r.getWindData()},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setStateInterval=window.setInterval((function(){e.setState({wind:e.getWindData()})}),4e3)}},{key:"componentWillUnmount",value:function(){this.setStateInterval&&window.clearInterval(this.setStateInterval)}},{key:"getWindData",value:function(){return E.keys(x).map((function(e){var t=Math.floor(17*E.random())+4;return{windSpeed:t,windGust:t+E.random(2,10),windBearing:+e}}))}},{key:"render",value:function(){return o.a.createElement(f.a,{style:{parent:{maxWidth:"320px"}},polar:!0,animate:{duration:500,onLoad:{duration:500}},theme:y.a.material,innerRadius:30,domainPadding:{y:10},events:[{childName:"all",target:"data",eventHandlers:{onMouseOver:function(){return[{target:"labels",mutation:function(){return{active:!0}}},{target:"data",mutation:function(){return{active:!0}}}]},onMouseOut:function(){return[{target:"labels",mutation:function(){return{active:!1}}},{target:"data",mutation:function(){return{active:!1}}}]}}}]},o.a.createElement(p.a,{dependentAxis:!0,labelPlacement:"vertical",style:{axis:{stroke:"none"}},tickFormat:function(){return""}}),o.a.createElement(p.a,{labelPlacement:"parallel",tickValues:E.keys(x).map((function(e){return+e})),tickFormat:E.values(x)}),o.a.createElement(b.a,null,o.a.createElement(g.a,{style:{data:{fill:function(e){return e.active?k.highlight:k.base},width:40}},data:this.state.wind,x:"windBearing",y:"windSpeed",labels:function(){return""},labelComponent:o.a.createElement(w,{color:k})}),o.a.createElement(g.a,{style:{data:{fill:function(e,t){return t?O.highlight:O.base},width:40}},data:this.state.wind,x:"windBearing",y:function(e){return e.windGust-e.windSpeed},labels:function(){return""},labelComponent:o.a.createElement(w,{color:O})})),o.a.createElement(j,null))}}]),a}(c.Component),C=a(2222),N=a(2183),D=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:r.getData()},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setStateInterval=window.setInterval((function(){e.setState({data:e.getData()})}),4e3)}},{key:"componentWillUnmount",value:function(){this.setStateInterval&&clearInterval(this.setStateInterval)}},{key:"getData",value:function(){return E.range(7).map((function(){return[{x:1,y:E.random(1,5)},{x:2,y:E.random(1,10)},{x:3,y:E.random(2,10)},{x:4,y:E.random(2,10)},{x:5,y:E.random(2,15)}]}))}},{key:"render",value:function(){this.props.theme;return o.a.createElement("div",{className:"h-320"},o.a.createElement(f.a,{width:700,containerComponent:o.a.createElement(C.a,{responsive:!0}),theme:y.a.material,animate:{duration:1e3},style:{label:{fontSize:45}}},o.a.createElement(b.a,{colorScale:"blue"},this.state.data.map((function(e,t){return o.a.createElement(N.a,{key:t,data:e,interpolation:"basis"})})))))}}]),a}(o.a.Component),W=a(5),I=a(2227),M=[{strength:1,intelligence:250,luck:1,stealth:40,charisma:50},{strength:2,intelligence:300,luck:2,stealth:80,charisma:90},{strength:5,intelligence:225,luck:3,stealth:60,charisma:120}],A=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:r.processData(M),maxima:r.getMaxima(M)},r}return Object(r.a)(a,[{key:"getMaxima",value:function(e){var t=Object.keys(e[0]).reduce((function(t,a){return t[a]=e.map((function(e){return e[a]})),t}),{});return Object.keys(t).reduce((function(e,a){return e[a]=Math.max.apply(Math,Object(W.a)(t[a])),e}),{})}},{key:"processData",value:function(e){var t=this.getMaxima(e);return e.map((function(e){return a=e,Object.keys(a).map((function(e){return{x:e,y:a[e]/t[e]}}));var a}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"h-320"},o.a.createElement(f.a,{style:{parent:{maxWidth:"320px"}},polar:!0,theme:y.a.material,domain:{y:[0,1]}},o.a.createElement(I.a,{colorScale:["gold","orange","tomato"],style:{data:{fillOpacity:.2,strokeWidth:2}}},this.state.data.map((function(e,t){return o.a.createElement(N.a,{key:t,data:e})}))),Object.keys(this.state.maxima).map((function(t,a){return o.a.createElement(p.a,{key:a,dependentAxis:!0,style:{axisLabel:{padding:10},axis:{stroke:"none"},grid:{stroke:"grey",strokeWidth:.25,opacity:.5}},tickLabelComponent:o.a.createElement(d.a,{labelPlacement:"vertical"}),labelPlacement:"perpendicular",axisValue:a+1,label:t,tickFormat:function(a){return Math.ceil(a*e.state.maxima[t])},tickValues:[.25,.5,.75]})})),o.a.createElement(p.a,{labelPlacement:"parallel",tickFormat:function(){return""},style:{axis:{stroke:"none"},grid:{stroke:"grey",opacity:.5}}})))}}]),a}(o.a.Component),P=a(2088),R=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).isAlive=!0,e.state={clicked:!1,isAlive:!0,style:{data:{fill:"tomato"}}},e}return Object(r.a)(a,[{key:"componentWillUnmount",value:function(){this.isAlive=!1}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"h-320"},o.a.createElement(f.a,{width:500,domainPadding:{x:50,y:[0,20]},scale:{x:"time"}},o.a.createElement(g.a,{dataComponent:o.a.createElement(P.a,{events:{onMouseOver:function(){var t=e.state.clicked?"blue":"tomato",a=!e.state.clicked;e.isAlive&&e.setState({clicked:a,style:{data:{fill:t}}})}}}),style:this.state.style,data:[{x:new Date(1986,1,1),y:2},{x:new Date(1996,1,1),y:3},{x:new Date(2006,1,1),y:5},{x:new Date(2016,1,1),y:4}]})))}}]),a}(c.Component),z=a(2228),B=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("g",null,o.a.createElement(d.a,this.props),o.a.createElement(z.a,Object.assign({},this.props,{text:"# ".concat(this.props.text),style:{fill:"white"},x:200,y:250,orientation:"top",pointerLength:0,cornerRadius:50,flyoutWidth:100,flyoutHeight:100,flyoutStyle:{fill:"black"}})))}}]),a}(o.a.Component);B.defaultEvents=z.a.defaultEvents;var F=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"flex flex-center"},o.a.createElement("div",{style:{width:"300px"}},o.a.createElement(u.a,{style:{labels:{fill:"white"}},innerRadius:100,labelRadius:120,labels:function(e){return e.y},labelComponent:o.a.createElement(B,null),data:[{x:1,y:5},{x:2,y:4},{x:3,y:2},{x:4,y:3},{x:5,y:1}]})))}}]),a}(c.Component),L=a(563),U=a(538),V=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,l=new Array(r),i=0;i<r;i++)l[i]=arguments[i];return(e=t.call.apply(t,[this].concat(l))).state={},e}return Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(s.a,{routeSegments:[{name:"Charts",path:"/charts"},{name:"Victory Charts"}]}),o.a.createElement(L.a,null,o.a.createElement(U.a,{lg:6,md:6,sm:12,xs:12,className:"mb-4"},o.a.createElement(s.h,{className:"h-100",title:"circular progress bar"},o.a.createElement(h,null))),o.a.createElement(U.a,{lg:6,md:6,sm:12,xs:12,className:"mb-4"},o.a.createElement(s.h,{className:"h-100",title:"stacked polar bar"},o.a.createElement(S,null))),o.a.createElement(U.a,{lg:6,md:6,sm:12,xs:12,className:"mb-4"},o.a.createElement(s.h,{className:"h-100",title:"area animation Chart"},o.a.createElement(D,null))),o.a.createElement(U.a,{lg:6,md:6,sm:12,xs:12,className:"mb-4"},o.a.createElement(s.h,{className:"h-100",title:"victory radar Chart"},o.a.createElement(A,null))),o.a.createElement(U.a,{lg:6,md:6,sm:12,xs:12,className:"mb-4"},o.a.createElement(s.h,{className:"h-100",title:"alternative events Chart"},o.a.createElement(R,null))),o.a.createElement(U.a,{lg:6,md:6,sm:12,xs:12,className:"mb-4"},o.a.createElement(s.h,{className:"h-100",title:"custom tooltip label"},o.a.createElement(F,null)))))}}]),a}(c.Component);t.default=V}}]);
//# sourceMappingURL=101.46131e3a.chunk.js.map