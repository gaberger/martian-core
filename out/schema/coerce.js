// Compiled by ClojureScript 1.10.520 {}
goog.provide('schema.coerce');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('schema.core');
goog.require('schema.spec.core');
goog.require('schema.utils');
goog.require('clojure.string');
/**
 * A Schema for Schemas
 */
schema.coerce.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7399__7400__auto__){
if((!((p1__7399__7400__auto__ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__7399__7400__auto__.schema$core$Schema$)))){
return true;
} else {
if((!p1__7399__7400__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__7399__7400__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__7399__7400__auto__);
}
})], null));
/**
 * A function from schema to coercion function, or nil if no special coercion is needed.
 * The returned function is applied to the corresponding data before validation (or walking/
 * coercion of its sub-schemas, if applicable)
 */
schema.coerce.CoercionMatcher = schema.core.make_fn_schema.call(null,schema.core.maybe.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.coerce.Schema,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null));
var ufv___9404 = schema.utils.use_fn_validation;
var output_schema9397_9405 = schema.core.Any;
var input_schema9398_9406 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker9399_9407 = (new cljs.core.Delay(((function (ufv___9404,output_schema9397_9405,input_schema9398_9406){
return (function (){
return schema.core.checker.call(null,input_schema9398_9406);
});})(ufv___9404,output_schema9397_9405,input_schema9398_9406))
,null));
var output_checker9400_9408 = (new cljs.core.Delay(((function (ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407){
return (function (){
return schema.core.checker.call(null,output_schema9397_9405);
});})(ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407))
,null));
var ret__8259__auto___9409 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Produce a function that simultaneously coerces and validates a datum.  Returns
 * a coerced value, or a schema.utils.ErrorContainer describing the error.
 */
schema.coerce.coercer = ((function (ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408){
return (function schema$coerce$coercer(G__9401,G__9402){
var validate__6599__auto__ = cljs.core.deref.call(null,ufv___9404);
if(cljs.core.truth_(validate__6599__auto__)){
var args__6600__auto___9410 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9401,G__9402], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),input_schema9398_9406,cljs.core.deref.call(null,input_checker9399_9407),args__6600__auto___9410);
} else {
var temp__5735__auto___9411 = cljs.core.deref.call(null,input_checker9399_9407).call(null,args__6600__auto___9410);
if(cljs.core.truth_(temp__5735__auto___9411)){
var error__6601__auto___9412 = temp__5735__auto___9411;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.call(null,error__6601__auto___9412)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9398_9406,new cljs.core.Keyword(null,"value","value",305978217),args__6600__auto___9410,new cljs.core.Keyword(null,"error","error",-978969032),error__6601__auto___9412], null));
} else {
}
}
} else {
}

var o__6602__auto__ = (function (){var schema__$1 = G__9401;
var coercion_matcher = G__9402;
while(true){
return schema.spec.core.run_checker.call(null,((function (validate__6599__auto__,ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408){
return (function (s,params){
var c = schema.spec.core.checker.call(null,schema.core.spec.call(null,s),params);
var temp__5733__auto__ = coercion_matcher.call(null,s);
if(cljs.core.truth_(temp__5733__auto__)){
var coercer = temp__5733__auto__;
return ((function (coercer,temp__5733__auto__,c,validate__6599__auto__,ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408){
return (function (x){
try{var v = coercer.call(null,x);
if(schema.utils.error_QMARK_.call(null,v)){
return v;
} else {
return c.call(null,v);
}
}catch (e9403){if((e9403 instanceof Object)){
var t = e9403;
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,s,x,(new cljs.core.Delay(((function (t,coercer,temp__5733__auto__,c,validate__6599__auto__,ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408){
return (function (){
return t;
});})(t,coercer,temp__5733__auto__,c,validate__6599__auto__,ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408))
,null)),null));
} else {
throw e9403;

}
}});
;})(coercer,temp__5733__auto__,c,validate__6599__auto__,ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408))
} else {
return c;
}
});})(validate__6599__auto__,ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408))
,true,schema__$1);
break;
}
})();
if(cljs.core.truth_(validate__6599__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),output_schema9397_9405,cljs.core.deref.call(null,output_checker9400_9408),o__6602__auto__);
} else {
var temp__5735__auto___9413 = cljs.core.deref.call(null,output_checker9400_9408).call(null,o__6602__auto__);
if(cljs.core.truth_(temp__5735__auto___9413)){
var error__6601__auto___9414 = temp__5735__auto___9413;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer","coercer",-783242414,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Produce a function that simultaneously coerces and validates a datum.  Returns\n   a coerced value, or a schema.utils.ErrorContainer describing the error."], null)),cljs.core.pr_str.call(null,error__6601__auto___9414)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9397_9405,new cljs.core.Keyword(null,"value","value",305978217),o__6602__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6601__auto___9414], null));
} else {
}
}
} else {
}

return o__6602__auto__;
});})(ufv___9404,output_schema9397_9405,input_schema9398_9406,input_checker9399_9407,output_checker9400_9408))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.coercer),schema.core.__GT_FnSchema.call(null,output_schema9397_9405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9398_9406], null)));

var ufv___9421 = schema.utils.use_fn_validation;
var output_schema9415_9422 = schema.core.Any;
var input_schema9416_9423 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.coerce.CoercionMatcher,cljs.core.with_meta(new cljs.core.Symbol(null,"coercion-matcher","coercion-matcher",-1929420453,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)))], null);
var input_checker9417_9424 = (new cljs.core.Delay(((function (ufv___9421,output_schema9415_9422,input_schema9416_9423){
return (function (){
return schema.core.checker.call(null,input_schema9416_9423);
});})(ufv___9421,output_schema9415_9422,input_schema9416_9423))
,null));
var output_checker9418_9425 = (new cljs.core.Delay(((function (ufv___9421,output_schema9415_9422,input_schema9416_9423,input_checker9417_9424){
return (function (){
return schema.core.checker.call(null,output_schema9415_9422);
});})(ufv___9421,output_schema9415_9422,input_schema9416_9423,input_checker9417_9424))
,null));
var ret__8259__auto___9426 = /**
 * Inputs: [schema coercion-matcher :- CoercionMatcher]
 * 
 *   Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw).
 */
schema.coerce.coercer_BANG_ = ((function (ufv___9421,output_schema9415_9422,input_schema9416_9423,input_checker9417_9424,output_checker9418_9425){
return (function schema$coerce$coercer_BANG_(G__9419,G__9420){
var validate__6599__auto__ = cljs.core.deref.call(null,ufv___9421);
if(cljs.core.truth_(validate__6599__auto__)){
var args__6600__auto___9427 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9419,G__9420], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),input_schema9416_9423,cljs.core.deref.call(null,input_checker9417_9424),args__6600__auto___9427);
} else {
var temp__5735__auto___9428 = cljs.core.deref.call(null,input_checker9417_9424).call(null,args__6600__auto___9427);
if(cljs.core.truth_(temp__5735__auto___9428)){
var error__6601__auto___9429 = temp__5735__auto___9428;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.call(null,error__6601__auto___9429)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9416_9423,new cljs.core.Keyword(null,"value","value",305978217),args__6600__auto___9427,new cljs.core.Keyword(null,"error","error",-978969032),error__6601__auto___9429], null));
} else {
}
}
} else {
}

var o__6602__auto__ = (function (){var schema__$1 = G__9419;
var coercion_matcher = G__9420;
while(true){
var c = schema.coerce.coercer.call(null,schema__$1,coercion_matcher);
return ((function (c,validate__6599__auto__,ufv___9421,output_schema9415_9422,input_schema9416_9423,input_checker9417_9424,output_checker9418_9425){
return (function (value){
var coerced = c.call(null,value);
var temp__5735__auto___9430 = schema.utils.error_val.call(null,coerced);
if(cljs.core.truth_(temp__5735__auto___9430)){
var error_9431 = temp__5735__auto___9430;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Value cannot be coerced to match schema: %s",cljs.core.pr_str.call(null,error_9431)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),schema__$1,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"error","error",-978969032),error_9431], null));
} else {
}

return coerced;
});
;})(c,validate__6599__auto__,ufv___9421,output_schema9415_9422,input_schema9416_9423,input_checker9417_9424,output_checker9418_9425))
break;
}
})();
if(cljs.core.truth_(validate__6599__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),output_schema9415_9422,cljs.core.deref.call(null,output_checker9418_9425),o__6602__auto__);
} else {
var temp__5735__auto___9432 = cljs.core.deref.call(null,output_checker9418_9425).call(null,o__6602__auto__);
if(cljs.core.truth_(temp__5735__auto___9432)){
var error__6601__auto___9433 = temp__5735__auto___9432;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"coercer!","coercer!",1324120992,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Like `coercer`, but is guaranteed to return a value that satisfies schema (or throw)."], null)),cljs.core.pr_str.call(null,error__6601__auto___9433)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9415_9422,new cljs.core.Keyword(null,"value","value",305978217),o__6602__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6601__auto___9433], null));
} else {
}
}
} else {
}

return o__6602__auto__;
});})(ufv___9421,output_schema9415_9422,input_schema9416_9423,input_checker9417_9424,output_checker9418_9425))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.coercer_BANG_),schema.core.__GT_FnSchema.call(null,output_schema9415_9422,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9416_9423], null)));

var ufv___9440 = schema.utils.use_fn_validation;
var output_schema9435_9441 = schema.coerce.CoercionMatcher;
var input_schema9436_9442 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.coerce.CoercionMatcher], null),cljs.core.with_meta(new cljs.core.Symbol(null,"matchers","matchers",-39860883,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null)], null)], null)))], null);
var input_checker9437_9443 = (new cljs.core.Delay(((function (ufv___9440,output_schema9435_9441,input_schema9436_9442){
return (function (){
return schema.core.checker.call(null,input_schema9436_9442);
});})(ufv___9440,output_schema9435_9441,input_schema9436_9442))
,null));
var output_checker9438_9444 = (new cljs.core.Delay(((function (ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443){
return (function (){
return schema.core.checker.call(null,output_schema9435_9441);
});})(ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443))
,null));
var ret__8259__auto___9445 = /**
 * Inputs: [matchers :- [CoercionMatcher]]
 *   Returns: CoercionMatcher
 * 
 *   A matcher that takes the first match from matchers.
 */
schema.coerce.first_matcher = ((function (ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443,output_checker9438_9444){
return (function schema$coerce$first_matcher(G__9439){
var validate__6599__auto__ = cljs.core.deref.call(null,ufv___9440);
if(cljs.core.truth_(validate__6599__auto__)){
var args__6600__auto___9446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__9439], null);
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"input","input",556931961),cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),input_schema9436_9442,cljs.core.deref.call(null,input_checker9437_9443),args__6600__auto___9446);
} else {
var temp__5735__auto___9447 = cljs.core.deref.call(null,input_checker9437_9443).call(null,args__6600__auto___9446);
if(cljs.core.truth_(temp__5735__auto___9447)){
var error__6601__auto___9448 = temp__5735__auto___9447;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.call(null,error__6601__auto___9448)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema9436_9442,new cljs.core.Keyword(null,"value","value",305978217),args__6600__auto___9446,new cljs.core.Keyword(null,"error","error",-978969032),error__6601__auto___9448], null));
} else {
}
}
} else {
}

var o__6602__auto__ = (function (){var matchers = G__9439;
while(true){
return ((function (validate__6599__auto__,ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443,output_checker9438_9444){
return (function (schema__$1){
return cljs.core.first.call(null,cljs.core.keep.call(null,((function (validate__6599__auto__,ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443,output_checker9438_9444){
return (function (p1__9434_SHARP_){
return p1__9434_SHARP_.call(null,schema__$1);
});})(validate__6599__auto__,ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443,output_checker9438_9444))
,matchers));
});
;})(validate__6599__auto__,ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443,output_checker9438_9444))
break;
}
})();
if(cljs.core.truth_(validate__6599__auto__)){
if(cljs.core.truth_(schema.core.fn_validator)){
schema.core.fn_validator.call(null,new cljs.core.Keyword(null,"output","output",-1105869043),cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),output_schema9435_9441,cljs.core.deref.call(null,output_checker9438_9444),o__6602__auto__);
} else {
var temp__5735__auto___9449 = cljs.core.deref.call(null,output_checker9438_9444).call(null,o__6602__auto__);
if(cljs.core.truth_(temp__5735__auto___9449)){
var error__6601__auto___9450 = temp__5735__auto___9449;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: \n\n\t \u001B[0;33m  %s \u001B[0m \n\n",cljs.core.with_meta(new cljs.core.Symbol(null,"first-matcher","first-matcher",-2060940642,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"CoercionMatcher","CoercionMatcher",1341105319,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"A matcher that takes the first match from matchers."], null)),cljs.core.pr_str.call(null,error__6601__auto___9450)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema9435_9441,new cljs.core.Keyword(null,"value","value",305978217),o__6602__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6601__auto___9450], null));
} else {
}
}
} else {
}

return o__6602__auto__;
});})(ufv___9440,output_schema9435_9441,input_schema9436_9442,input_checker9437_9443,output_checker9438_9444))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,schema.coerce.first_matcher),schema.core.__GT_FnSchema.call(null,output_schema9435_9441,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema9436_9442], null)));

schema.coerce.string__GT_keyword = (function schema$coerce$string__GT_keyword(s){
if(typeof s === 'string'){
return cljs.core.keyword.call(null,s);
} else {
return s;
}
});
/**
 * returns true for strings that are equal, ignoring case, to the string 'true'
 * (following java.lang.Boolean/parseBoolean semantics)
 */
schema.coerce.string__GT_boolean = (function schema$coerce$string__GT_boolean(s){
if(typeof s === 'string'){
return cljs.core._EQ_.call(null,"true",clojure.string.lower_case.call(null,s));
} else {
return s;
}
});
schema.coerce.keyword_enum_matcher = (function schema$coerce$keyword_enum_matcher(schema__$1){
if((((((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,schema__$1.vs)))) || ((((schema__$1 instanceof schema.core.EqSchema)) && ((schema__$1.v instanceof cljs.core.Keyword)))))){
return schema.coerce.string__GT_keyword;
} else {
return null;
}
});
schema.coerce.set_matcher = (function schema$coerce$set_matcher(schema__$1){
if((schema__$1 instanceof cljs.core.PersistentHashSet)){
return (function (x){
if(cljs.core.sequential_QMARK_.call(null,x)){
return cljs.core.set.call(null,x);
} else {
return x;
}
});
} else {
return null;
}
});
/**
 * Take a single-arg function f, and return a single-arg function that acts as identity
 * if f throws an exception, and like f otherwise.  Useful because coercers are not explicitly
 * guarded for exceptions, and failing to coerce will generally produce a more useful error
 * in this case.
 */
schema.coerce.safe = (function schema$coerce$safe(f){
return (function (x){
try{return f.call(null,x);
}catch (e9451){if((e9451 instanceof Object)){
var e = e9451;
return x;
} else {
throw e9451;

}
}});
});
/**
 * Returns instance of UUID if input is a string.
 * Note: in CLJS, this does not guarantee a specific UUID string representation,
 *       similar to #uuid reader
 */
schema.coerce.string__GT_uuid = (function schema$coerce$string__GT_uuid(p1__9452_SHARP_){
if(typeof p1__9452_SHARP_ === 'string'){
return (new cljs.core.UUID(p1__9452_SHARP_));
} else {
return p1__9452_SHARP_;
}
});
schema.coerce._PLUS_json_coercions_PLUS_ = cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Keyword,schema.coerce.string__GT_keyword,schema.core.Bool,schema.coerce.string__GT_boolean,schema.core.Uuid,schema.coerce.string__GT_uuid]));
/**
 * A matcher that coerces keywords and keyword eq/enums from strings, and longs and doubles
 *   from numbers on the JVM (without losing precision)
 */
schema.coerce.json_coercion_matcher = (function schema$coerce$json_coercion_matcher(schema__$1){
var or__4131__auto__ = schema.coerce._PLUS_json_coercions_PLUS_.call(null,schema__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = schema.coerce.keyword_enum_matcher.call(null,schema__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return schema.coerce.set_matcher.call(null,schema__$1);
}
}
});
/**
 * Reads one object from a string. Returns nil when string is nil or empty
 */
schema.coerce.edn_read_string = cljs.reader.read_string;
schema.coerce._PLUS_string_coercions_PLUS_ = cljs.core.merge.call(null,schema.coerce._PLUS_json_coercions_PLUS_,cljs.core.PersistentArrayMap.createAsIfByAssoc([schema.core.Num,schema.coerce.safe.call(null,schema.coerce.edn_read_string),schema.core.Int,schema.coerce.safe.call(null,schema.coerce.edn_read_string)]));
/**
 * A matcher that coerces keywords, keyword eq/enums, s/Num and s/Int,
 *   and long and doubles (JVM only) from strings.
 */
schema.coerce.string_coercion_matcher = (function schema$coerce$string_coercion_matcher(schema__$1){
var or__4131__auto__ = schema.coerce._PLUS_string_coercions_PLUS_.call(null,schema__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = schema.coerce.keyword_enum_matcher.call(null,schema__$1);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return schema.coerce.set_matcher.call(null,schema__$1);
}
}
});
