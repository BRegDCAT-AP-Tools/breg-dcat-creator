//>>built
define("rdfjson/formats/converters",["exports","./rdfjson/util","../Graph","./rdfxml/terms","./rdfxml/Rdfparser"],function(g,s,n,l,t){var m={ical:"http://www.w3.org/2002/12/cal/ical#",role:"http://purl.org/role/terms/",dcat:"http://purl.org/dc/terms/",rdfs:"http://www.w3.org/2000/01/rdf-schema#",rdf:"http://www.w3.org/1999/02/22-rdf-syntax-ns#",owl:"http://www.w3.org/2002/07/owl#",vs:"http://www.w3.org/2003/06/sw-vocab-status/ns#",foaf:"http://xmlns.com/foaf/0.1/",wot:"http://xmlns.com/wot/0.1/",
dc:"http://purl.org/dc/elements/1.1/"},r=0;"undefined"!==typeof window&&("undefined"!==typeof window.DOMParser||"undefined"!==typeof ActiveXObject)?(g.xml2string=function(a){return a.xml},g.string2xml=function(a){var b;try{window.DOMParser?b=(new DOMParser).parseFromString(a,"text/xml"):(b=new ActiveXObject("Microsoft.XMLDOM"),b.async="false",b.loadXML(a))}catch(f){b=null}if(!b||!b.documentElement||b.getElementsByTagName("parsererror").length)throw"Could not parse text as xml";return b}):(g.xml2string=
function(a){return(new XMLSerializer).serializeToString(a)},require.has&&require.has("host-node")?require(["dojo/node!xmldom"],function(a){var b=a.DOMParser;g.string2xml=function(a){return(new b).parseFromString(a,"text/xml")}}):g.string2xml=function(a){return(new (require("xmldom").DOMParser)).parseFromString(a,"text/xml")});g.rdfxml2graph=function(a,b){s.isString(a)&&(a=g.string2xml(a));var f=b||new n({}),c=new l.RDFFormula;c.add=function(a,b,c){var k={};a instanceof l.RDFBlankNode?(a=a.toString(),
f.registerBNode(a)):a=a.uri;b instanceof l.RDFBlankNode?(b=b.toString(),f.registerBNode(b)):b=b.uri;c instanceof l.RDFLiteral?(k.type="literal",k.value=c.value,c.lang&&(k.lang=c.lang),c.datatype&&(k.datatype=c.datatype.uri)):c instanceof l.RDFSymbol?(k.type="uri",k.value=c.uri):c instanceof l.RDFBlankNode&&(k.value=c.toString(),f.registerBNode(k.value),k.type="bnode");f.create(a,b,k,!0)};(new t(c)).parse(a,"","");return f};g.rdfjson2rdfxml=function(a){a=a instanceof n?a:new n(a);var b=[],f,c,e,h,
g,k,d,l=a._graph||a,p={};a=[];for(f in l)if(l.hasOwnProperty(f)){"_:"===f.substr(0,2)?a.push('  \x3crdf:Description rdf:nodeID\x3d"_'+f.substring(2)+'"\x3e\n'):a.push('  \x3crdf:Description rdf:about\x3d"'+f+'"\x3e\n');g=l[f];for(c in g)if(g.hasOwnProperty(c)){k=g[c];a:{e=c;d=void 0;for(d in m)if(m.hasOwnProperty(d)&&0===e.indexOf(m[d])){p[d]||(b.push(d),p[d]=!0);e=d+":"+e.substring(m[d].length);break a}h=e.lastIndexOf("/");d=e.lastIndexOf("#");d>h&&(h=d);r++;d="ns"+r;m[d]=e.substring(0,h+1);b.push(d);
p[d]=!0;e=d+":"+e.substring(h+1)}for(d=0;d<k.length;d++)switch(h=k[d],h.type){case "literal":var q=h.value.replace("\x26","\x26amp;").replace("\x3c","\x26lt;");null!=h.lang?a.push("    \x3c"+e+' xml:lang\x3d"'+h.lang+'"\x3e'+q+"\x3c/"+e+"\x3e\n"):null!=h.datatype?a.push("    \x3c"+e+' rdf:datatype\x3d"'+h.datatype+'"\x3e'+q+"\x3c/"+e+"\x3e\n"):a.push("    \x3c"+e+"\x3e"+q+"\x3c/"+e+"\x3e\n");break;case "uri":a.push("    \x3c"+e+' rdf:resource\x3d"'+h.value+'"/\x3e\n');break;case "bnode":"_:"===h.value.substr(0,
2)?a.push("    \x3c"+e+' rdf:nodeID\x3d"_'+h.value.substring(2)+'"/\x3e\n'):a.push("    \x3c"+e+' rdf:nodeID\x3d"'+h.value+'"/\x3e\n')}}a.push("  \x3c/rdf:Description\x3e\n")}f=['\x3c?xml version\x3d"1.0"?\x3e\n\x3crdf:RDF xmlns:rdf\x3d"http://www.w3.org/1999/02/22-rdf-syntax-ns#"'];for(c=0;c<b.length;c++)"rdf"!==b[c]&&f.push("\n\txmlns:"+b[c]+'\x3d"'+m[b[c]]+'"');f.push("\x3e\n");a.unshift(f.join(""));a.push("\x3c/rdf:RDF\x3e");return a.join("")};g.detect=function(a){var b={};if("string"===typeof a)if(-1!==
a.substr(0,100).substr(0,100).toLowerCase().indexOf("\x3crdf:rdf")){b.format="rdf/xml";try{b.graph=g.rdfxml2graph(a)}catch(f){b.error="Invalid rdf/xml"}}else if('{"'===a.substring(0,2)){b.format="rdf/json";if("undefined"===typeof JSON||"function"!==typeof JSON.parse)throw"Cannot parse rdf/json since the standard JSON parser is not available.";try{var c=JSON.parse(this.rdfjson);b.graph=new n(c)}catch(e){b.error="Invalid json."}}else b.error="No RDF detected.";else a instanceof n?(b.format="rdf/json",
b.graph=a):lang.isObject(a)?(b.format="rdf/json",b.graph=new n(a)):b.error="unknown format";!b.error&&!b.graph.validate().valid&&(b.error="RDF/JSON is not valid.");return b};g.namespaces=function(){return m};g.addNamespace=function(a,b){m[a]=b}});
//# sourceMappingURL=converters.js.map