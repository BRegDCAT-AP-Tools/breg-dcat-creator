//>>built
define("rdforms/model/PropertyGroupBinding","dojo/_base/declare ./GroupBinding ./PropertyChoiceBinding ./ValueBinding ./ChoiceBinding ../template/Group ../template/Choice".split(" "),function(e,d,f,g,h,k,l){return e(d,{getPredicateBinding:function(){return this._childBindings[0][0]},getObjectBinding:function(){return this._childBindings[1][0]},constructor:function(a){this._statement=void 0;this._validPredicate=!0;this._constraints=[];var c=this._item.getChildren(),b=c[1];a=b instanceof k?new d({item:b,
statement:a.statement,constraints:a.constraints}):b instanceof l?new h({item:b,statement:a.statement}):new g({item:b,statement:a.statement});c=new f({item:c[0],objectBinding:a});this.addChildBinding(c);this.addChildBinding(a)},getGraph:function(){return this.getObjectBinding().getGraph()}})});
//# sourceMappingURL=PropertyGroupBinding.js.map