(this["webpackJsonptheta-demo"]=this["webpackJsonptheta-demo"]||[]).push([[119],{2120:function(t,a,e){"use strict";e.r(a);var n=e(5),i=e(10),s=e(12),r=e(14),d=e(15),l=e(0),c=e.n(l),o=e(1775),h=function(t){Object(r.a)(e,t);var a=Object(d.a)(e);function e(){var t;Object(i.a)(this,e);for(var s=arguments.length,r=new Array(s),d=0;d<s;d++)r[d]=arguments[d];return(t=a.call.apply(a,[this].concat(r))).state={tags:[{id:"USA",text:"USA"},{id:"Germany",text:"Germany"},{id:"Austria",text:"Austria"},{id:"Costa Rica",text:"Costa Rica"},{id:"Sri Lanka",text:"Sri Lanka"},{id:"Thailand",text:"Thailand"}],suggestions:[{id:"USA",text:"USA"},{id:"Germany",text:"Germany"},{id:"Austria",text:"Austria"},{id:"Costa Rica",text:"Costa Rica"},{id:"Sri Lanka",text:"Sri Lanka"},{id:"Thailand",text:"Thailand"}]},t.handleDelete=function(a){var e=t.state.tags;t.setState({tags:e.filter((function(t,e){return e!==a}))})},t.handleAddition=function(a){t.setState((function(t){return{tags:[].concat(Object(n.a)(t.tags),[a])}}))},t.handleDrag=function(a,e,i){if(i){var s=Object(n.a)(t.state.tags);s.splice(e,1),s.splice(i,0,a),t.setState({tags:s})}},t}return Object(s.a)(e,[{key:"render",value:function(){var t=this.state,a=t.tags,e=t.suggestions;return c.a.createElement("div",null,c.a.createElement(o.WithContext,{tags:a,suggestions:e,handleDelete:this.handleDelete,handleAddition:this.handleAddition,handleDrag:this.handleDrag,allowDragDrop:!1,delimiters:[188,13]}))}}]),e}(l.Component);a.default=h}}]);
//# sourceMappingURL=119.4c489990.chunk.js.map