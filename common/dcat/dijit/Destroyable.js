//>>built
define("dijit/Destroyable",["dojo/_base/array","dojo/aspect","dojo/_base/declare"],function(a,d,c){return c("dijit.Destroyable",null,{destroy:function(b){this._destroyed=!0},own:function(){a.forEach(arguments,function(b){var e="destroyRecursive"in b?"destroyRecursive":"destroy"in b?"destroy":"remove",a=d.before(this,"destroy",function(a){b[e](a)}),c=d.after(b,e,function(){a.remove();c.remove()},!0)},this);return arguments}})});
//# sourceMappingURL=Destroyable.js.map