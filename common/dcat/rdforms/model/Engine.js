//>>built
define("rdforms/model/Engine","../template/Text ../template/Group ../template/Choice ../template/PropertyGroup ./GroupBinding ./PropertyGroupBinding ./ValueBinding ./ChoiceBinding ./system ../utils".split(" "),function(u,n,v,z,m,p,r,q,A,E){var w=function(a,b,c){if(b instanceof u){c=a.getGraph();b.getNodetype();var d={value:"",type:"literal"};"URI"===b.getNodetype()?d.type="uri":"DATATYPE_LITERAL"===b.getNodetype()&&(d.datatype=b.getDatatype());c=c.create(a.getChildrenRootUri(),b.getProperty(),d,!1);
b=new r({item:b,statement:c});a.addChildBinding(b);return b}if(b instanceof z)return F(a,b);if(b instanceof n){a:{c=c||{};var e;void 0!==b.getProperty()&&(e=a.getGraph(),d=e.create(a.getChildrenRootUri(),b.getProperty(),null,!1),e=B(e,d.getValue(),b));d=new m({item:b,statement:d,constraints:e});a.addChildBinding(d);if(a=b._source["@id"])if(c[a]){a=d;break a}else c[a]=!0;a=d}return a}if(b instanceof v){c=a.getGraph();d=b.getNodetype();e={type:"literal",value:""};if("DATATYPE_LITERAL"===d)e.datatype=
b.getDatatype();else if("RESOURCE"===d||"URI"===d)e.type="uri";c=c.create(a.getChildrenRootUri(),b.getProperty(),e,!1);b=new q({item:b,statement:c});a.addChildBinding(b);return b}},F=function(a,b){var c,d,e=b.getChildren()[1],f=a.getGraph();e instanceof n?(c=f.create(a.getChildrenRootUri(),"",null,!1),d=B(f,c.getSubject(),e)):c=e instanceof v?f.create(a.getChildrenRootUri(),"",{type:"uri",value:""},!1):f.create(a.getChildrenRootUri(),"",{type:"literal",value:""},!1);var g=new p({item:b,statement:c,
constraints:d});a.addChildBinding(g);e instanceof n&&dojo.forEach(e.getChildren(),function(b){w(g.getObjectBinding(),b)});return g},s=function(a){dojo.forEach(a.getItem().getChildren(),function(b){b instanceof u?G(a,b):b instanceof z?H(a,b):b instanceof n?I(a,b):b instanceof v&&J(a,b)})},I=function(a,b){var c,d,e,f,g=a.getGraph();void 0!==b.getProperty()?(c=g.find(a.getChildrenRootUri(),b.getProperty()),0<c.length&&(d=[],dojo.forEach(c,function(a){!0!==a._dibbs&&t(b,a)&&(e=C(g,a.getValue(),b),void 0!==
e&&(a._dibbs=!0,f=new m({item:b,statement:a,constraints:e}),d.push(f),s(f)))}),a.addChildBindings(d))):(f=new m({item:b}),a.addChildBindings([f]),s(f))},H=function(a,b){var c,d,e,f,g,h,l=b.getPropertyItem(),k=b.getObjectItem(),m=a.getGraph();c=m.find(a.getChildrenRootUri());0<c.length&&(e=[],dojo.forEach(c,function(a){!0!==a._dibbs&&t(k,a)&&(g=x(l,a.getPredicate(),a.getGraph()),void 0!==g&&(f=null,k instanceof n?(d=C(m,a.getValue(),k),void 0!==d&&(a._dibbs=!0,f=new p({item:b,statement:a,constraints:d}),
s(f.getObjectBinding()))):k instanceof q?(h=x(k,a.getValue(),a.getGraph()),void 0!==h&&(a._dibbs=!0,f=new p({item:b,statement:a}),f.getObjectBinding().setChoice(h))):(a._dibbs=!0,f=new p({item:b,statement:a})),null!==f&&(f.getPredicateBinding().setChoice(g),e.push(f))))}),a.addChildBindings(e))},G=function(a,b){var c,d;null!=b.getProperty()&&(c=a.getGraph().find(a.getChildrenRootUri(),b.getProperty()),0<c.length&&(d=[],dojo.forEach(c,function(a){!0!==a._dibbs&&t(b,a)&&(a._dibbs=!0,d.push(new r({item:b,
statement:a})))}),a.addChildBindings(d)))},J=function(a,b){var c,d,e;null!=b.getProperty()&&(c=a.getGraph().find(a.getChildrenRootUri(),b.getProperty()),0<c.length&&(d=[],dojo.forEach(c,function(a){!0!==a._dibbs&&t(b,a)&&(e=x(b,a.getValue(),a.getGraph()),void 0!==e&&(a._dibbs=!0,d.push(new q({item:b,statement:a,choice:e}))))}),a.addChildBindings(d)))},t=function(a,b){var c=b.getType();switch(a.getNodetype()){case "LITERAL":case "ONLY_LITERAL":case "PLAIN_LITERAL":case "LANGUAGE_LITERAL":return"literal"===
c;case "DATATYPE_LITERAL":return"literal"===c&&b.getDatatype()===a.getDatatype();case "RESOURCE":return"uri"===c||"bnode"===c;case "URI":return"uri"===c;case "BLANK":return"bnode"===c}return!1},C=function(a,b,c){var d,e=[];if(dojo.isObject(c.getConstraints())){d=c.getConstraints();for(var f in d)if(d.hasOwnProperty(f))if(c=a.find(b,f,{type:"uri",value:d[f]}),1==c.length)e.push(c[0]);else return;return e}return[]},B=function(a,b,c){var d=[];if(dojo.isObject(c.getConstraints())){c=c.getConstraints();
for(var e in c)c.hasOwnProperty(e)&&d.push(a.create(b,e,{type:"uri",value:c[e]},!1));return d}return[]},x=function(a,b,c){var d;if(a.hasChoices()){a=a.getChoices();for(d=0;d<a.length;d++)if(a[d].value===b)return a[d];return{value:b,label:{"":b},mismatch:!0}}var e=E.getLocalizedMap(c,b,[q.label]);d=c.findFirstValue(b,q.seeAlso);if(null!=e)return b={label:e,value:b},d&&(b.seeAlso=d),b;if(null!=A.getChoice)return A.getChoice(a,b,d,c)},D=function(a){var b,c,d=a.getItemGroupedChildBindings()||[];for(a=
0;a<d.length;a++){c=d[a];for(b=0;b<c.length;b++){var e=c[b];e._statement&&delete e._statement._dibbs;(e instanceof m||e instanceof p)&&D(e)}}},y=function(a,b){if(a instanceof r)return a;var c=a.getItemGroupedChildBindings();if(0<c.length){var d=a.getItem().getChildren()[0],c=c[0];if(0!==c.length){if(!d instanceof u)return y(c[0]);if("LANGUAGE_LITERAL"===d.getNodetype()){for(var d=c[0],e,f,g,h,l=0;l<c.length;l++){var k=c[l].getLanguage();null==k||(k===dojo.locale?e=c[l]:k.substring(0,1)===dojo.locale.substring(0,
1)?f=c[l]:-1!==k.indexOf("en")?g=c[l]:h=c[l])}return e||f||g||h||d}return c[0]}if(b)return e=w(a,d,{}),e instanceof r?(e.setLanguage(dojo.locale),e):y(e,!0)}};return{match:function(a,b,c){a=new m({item:c,childrenRootUri:b,graph:a});s(a);D(a);return a},constructTemplate:function(a,b,c,d){a=a.findProperties(b);var e=[],f={};if(null!=d){var g=function(a){null!=a.getProperty()?f[a.getProperty()]=!0:a instanceof n&&dojo.forEach(a.getChildren(),g)},h=function(a){null!=a&&(g(a),e.push(a))};dojo.forEach(d,
function(a){var b=c.getItem(a);null!=b?b instanceof n&&null==b.getProperty()?dojo.forEach(b.getChildren(),h):h(b):(b=c.getItemByProperty(a))&&h(b)})}dojo.forEach(a,function(a){f[a]||(a=c.getItemByProperty(a),null!=a&&e.push(a))},this);return c.createTemplateFromChildren(e)},create:w,findFirstValueBinding:y}});
//# sourceMappingURL=Engine.js.map