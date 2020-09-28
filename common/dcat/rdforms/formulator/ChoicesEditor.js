//>>built
require({cache:{"url:rdforms/formulator/ChoicesEditorTemplate.html":'\x3cdiv\x3e\n    \x3cdiv data-dojo-type\x3d"dijit/layout/BorderContainer" data-dojo-attach-point\x3d"_bcDijit" style\x3d"height: 100%"\x3e\n        \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-attach-point\x3d"_controlDijit" data-dojo-props\x3d"region: \'top\', splitter: true" style\x3d"height: 25px"\x3e\n            \x3cdiv class\x3d"formulatorTable"\x3e\n                \x3cdiv class\x3d"row"\x3e\x3clabel for\x3d"${id}_inline"\x3eInline choices: \x3c/label\x3e\x3cdiv\x3e\x3cdiv\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_inlineDijit" id\x3d"${id}_inline" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onChange: _changeInline"\x3e\x3c/div\x3e\n                \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row dynamic"\x3e\x3clabel for\x3d"${id}_ontology"\x3eOntology URL:\x3c/label\x3e\x3cdiv\x3e\x3cdiv id\x3d"${id}_ontology" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"_ontologyDijit" data-dojo-attach-event\x3d"onChange: _changeOntologyUrl" data-dojo-props\x3d"intermediateChanges: true"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row dynamic"\x3e\x3clabel for\x3d"${id}_hproperty"\x3eHierarchy property:\x3c/label\x3e\x3cdiv\x3e\x3cdiv id\x3d"${id}_hproperty" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"_hpDijit" data-dojo-attach-event\x3d"onChange: _changeHProperty" data-dojo-props\x3d"intermediateChanges: true"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row dynamic"\x3e\x3clabel for\x3d"${id}_hpinv"\x3eis inverted: \x3c/label\x3e\x3cdiv\x3e\x3cdiv\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_hpinvDijit" id\x3d"${id}_hpinv" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onChange: _changeHPI"\x3e\x3c/div\x3e\n                \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row dynamic"\x3e\x3clabel for\x3d"${id}_pproperty"\x3eParent property:\x3c/label\x3e\x3cdiv\x3e\x3cdiv id\x3d"${id}_pproperty" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"_ppDijit" data-dojo-attach-event\x3d"onChange: _changePProperty" data-dojo-props\x3d"intermediateChanges: true"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row dynamic"\x3e\x3clabel for\x3d"${id}_ppinv"\x3eis inverted: \x3c/label\x3e\x3cdiv\x3e\x3cdiv\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_ppinvDijit" id\x3d"${id}_ppinv" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onChange: _changePPI"\x3e\x3c/div\x3e\n                \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'center\'"\x3e\n            \x3cdiv data-dojo-attach-point\x3d"_treeNode"\x3e\x3c/div\x3e\n        \x3c/div\x3e\n        \x3cdiv data-dojo-type\x3d"dijit/layout/ContentPane" data-dojo-props\x3d"region: \'bottom\', splitter: true" style\x3d"height: 35%"\x3e\n            \x3cdiv class\x3d"formulatorTable"\x3e\n                \x3cdiv class\x3d"row"\x3e\x3clabel for\x3d"${id}_value"\x3eValue:\x3c/label\x3e\x3cdiv\x3e\x3cdiv id\x3d"${id}_value" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"_valueDijit" data-dojo-attach-event\x3d"onChange: _changeValue" data-dojo-props\x3d"intermediateChanges: true, invalidMessage: \'Value must be unique.\'"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row"\x3e\x3clabel\x3eLabel: \x3cspan data-dojo-attach-point\x3d"_addLabel" class\x3d"addButton"\x3e+\x3c/span\x3e\x3c/label\x3e\x3cdiv\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_labelLangString" data-dojo-type\x3d"rdforms/formulator/LangString"\x3e\x3c/div\x3e\n                \x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row"\x3e\x3clabel\x3eDescription: \x3cspan data-dojo-attach-point\x3d"_addDesc" class\x3d"addButton"\x3e+\x3c/span\x3e\x3c/label\x3e\x3cdiv\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_descLangString" data-dojo-type\x3d"rdforms/formulator/LangString" data-dojo-props\x3d"multiline: true"\x3e\x3c/div\x3e\n                \x3c/div\x3e\x3c/div\x3e\n                \x3cdiv class\x3d"row"\x3e\x3clabel\x3eSelectable: \x3c/label\x3e\x3cdiv\x3e\x3cdiv\x3e\n                    \x3cdiv data-dojo-attach-point\x3d"_selectable" data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-event\x3d"onChange: _changeSelectable"\x3e\x3c/div\x3e\n                \x3c/div\x3e\x3c/div\x3e\x3c/div\x3e\n            \x3c/div\x3e\n        \x3c/div\x3e\n    \x3c/div\x3e\n\x3c/div\x3e\n'}});
define("rdforms/formulator/ChoicesEditor","dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/aspect dojo/on dojo/dom-class dojo/dom-construct dojo/dom-style dijit/registry dijit/layout/_LayoutWidget dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/Tree dijit/Menu dijit/MenuItem dijit/tree/dndSource ./ChoicesTreeModel dojo/text!./ChoicesEditorTemplate.html".split(" "),function(m,b,n,f,g,h,p,e,k,q,r,s,t,u,l,v,w,x){return m([q,r,s],{choices:[],templateString:x,postCreate:function(){this.choices=
this.item.getStaticChoices()||[];this.inherited("postCreate",arguments);var a=this.item.getBundle().isReadOnly();this.tree=new t({showRoot:!0,model:new w(this.choices),disabled:a,dndController:v,checkItemAcceptance:function(y,c,d){return!a&&"over"===d},betweenThreshold:5,onClick:b.hitch(this,this._editChoice)},p.create("div",null,this._treeNode));this.tree.startup();if(a)n.forEach("_valueDijit _labelLangString _descLangString _valueDijit _selectable _inlineDijit _ontologyDijit _ppDijit _ppinvDijit _hpDijit _hpinvDijit".split(" "),
function(a){this[a].set("disabled","true")},this);else{this._valueDijit.validator=b.hitch(this,function(a,c){var d=this.tree.get("model");return null==this._choice||this._choice.value===a?!0:d.isNameFree(a)});f.before(this._labelLangString,"onChange",b.hitch(this,"_setLabelMap"));g(this._addLabel,"click",b.hitch(this._labelLangString,this._labelLangString.add));f.before(this._descLangString,"onChange",b.hitch(this,"_setDescriptionMap"));g(this._addDesc,"click",b.hitch(this._descLangString,this._descLangString.add));
var c=this;this.menu=new u({targetNodeIds:[this.tree.id],selector:".dijitTreeNode"});this.menu.addChild(new l({label:"New Choice",iconClass:"dijitIconFile",onClick:function(){var a=k.byNode(this.getParent().currentTarget),b=c.tree.get("model"),d={value:""+(new Date).getTime()};b.newItem(d,a.item);b=c.tree.getNodesByItem(d)[0];a.expand();c.tree.focusNode(b);c.tree.set("selectedItem",d);c._editChoice(d)}}));this.menu.addChild(new l({label:"Remove choice",iconClass:"dijitEditorIcon dijitEditorIconDelete",
onClick:function(){var a=k.byNode(this.getParent().currentTarget);c.tree.get("model").removeItem(a.item,a.getParent().item);c._choicesChanged()}}));this.menu.startup()}this._inlineDijit.set("checked",null!=this.item.getStaticChoices());this._ontologyDijit.set("value",this.item.getOntologyUrl()||"");this._ppDijit.set("value",this.item.getParentProperty()||"");this._ppinvDijit.set("checked",this.item.isParentPropertyInverted()||!1);this._hpDijit.set("value",this.item.getHierarchyProperty()||"");this._hpinvDijit.set("checked",
this.item.isHierarchyPropertyInverted()||!1)},resize:function(){this.inherited("resize",arguments);this._bcDijit&&this._bcDijit.resize()},_choicesChanged:function(){this.tree.get("model").onChange(this._choice);this.onChange()},onChange:function(){},_editChoice:function(a){var b=this.tree.get("model");a!==b.root&&(this._choice=a,this._valueDijit.set("value",a.value),this._labelLangString.setMap(a.label),this._descLangString.setMap(a.description),this._selectable.set("checked",!1!==a.selectable))},
_changeInline:function(){this._inlineDijit.get("checked")?(this.item.setStaticChoices(this.choices),e.set(this.tree.domNode,"display",""),e.set(this._controlDijit.domNode,"height","25px"),h.add(this._controlDijit.domNode,"inlineState")):(this.item.setStaticChoices(),e.set(this.tree.domNode,"display","none"),e.set(this._controlDijit.domNode,"height","45%"),h.remove(this._controlDijit.domNode,"inlineState"));this._bcDijit.resize()},_changeOntologyUrl:function(){this.item.setOntologyUrl(this._ontologyDijit.get("value"))},
_changePProperty:function(){this.item.setParentProperty(this._ppDijit.get("value"))},_changePPI:function(){this.item.setParentPropertyInverted(this._ppinvDijit.get("checked"))},_changeHProperty:function(){this.item.setHierarchyProperty(this._hpDijit.get("value"))},_changeHPI:function(){this.item.setHierarchyPropertyInverted(this._hpinvDijit.get("checked"))},_changeSelectable:function(){!1===this._selectable.get("checked")?this._choice.selectable=!1:delete this._choice.selectable;this._choicesChanged()},
_setLabelMap:function(a){this._choice.label=a;this._choicesChanged()},_setDescriptionMap:function(a){this._choice.description=a;this._choicesChanged()},_changeValue:function(){this._valueTimer&&clearTimeout(this._valueTimer);this._valueTimer=setTimeout(b.hitch(this,function(){delete this._valueTimer;if(!this._destroyed){var a=this._valueDijit.get("value");null!=a&&this.tree.get("model").renameItem(this._choice,a);this._choicesChanged()}}),200)}})});
//# sourceMappingURL=ChoicesEditor.js.map