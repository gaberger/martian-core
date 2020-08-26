// Compiled by ClojureScript 1.10.520 {}
goog.provide('martian.encoders');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('linked.core');
goog.require('cognitect.transit');
goog.require('cljs.reader');
martian.encoders.transit_decode = (function martian$encoders$transit_decode(body,type){
return cognitect.transit.read.call(null,cognitect.transit.reader.call(null,type,cljs.core.PersistentArrayMap.EMPTY),body);
});
martian.encoders.transit_encode = (function martian$encoders$transit_encode(body,type){
return cognitect.transit.write.call(null,cognitect.transit.writer.call(null,type,cljs.core.PersistentArrayMap.EMPTY),body);
});
martian.encoders.json_encode = (function martian$encoders$json_encode(body){
return JSON.stringify(cljs.core.clj__GT_js.call(null,body));
});
martian.encoders.json_decode = (function martian$encoders$json_decode(body,key_fn){
var temp__5733__auto__ = (((!(clojure.string.blank_QMARK_.call(null,body))))?JSON.parse(body):null);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),key_fn);
} else {
return null;
}
});
martian.encoders.default_encoders = (function martian$encoders$default_encoders(var_args){
var G__9327 = arguments.length;
switch (G__9327) {
case 0:
return martian.encoders.default_encoders.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return martian.encoders.default_encoders.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

martian.encoders.default_encoders.cljs$core$IFn$_invoke$arity$0 = (function (){
return martian.encoders.default_encoders.call(null,cljs.core.keyword);
});

martian.encoders.default_encoders.cljs$core$IFn$_invoke$arity$1 = (function (key_fn){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["application/transit+json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encode","encode",-1753429702),(function (p1__9323_SHARP_){
return martian.encoders.transit_encode.call(null,p1__9323_SHARP_,new cljs.core.Keyword(null,"json","json",1279968570));
}),new cljs.core.Keyword(null,"decode","decode",-1306165281),(function (p1__9324_SHARP_){
return martian.encoders.transit_decode.call(null,p1__9324_SHARP_,new cljs.core.Keyword(null,"json","json",1279968570));
})], null)], null),linked.core.map.call(null,"application/edn",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encode","encode",-1753429702),cljs.core.pr_str,new cljs.core.Keyword(null,"decode","decode",-1306165281),cljs.reader.read_string], null),"application/json",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"encode","encode",-1753429702),martian.encoders.json_encode,new cljs.core.Keyword(null,"decode","decode",-1306165281),(function (p1__9325_SHARP_){
return martian.encoders.json_decode.call(null,p1__9325_SHARP_,key_fn);
})], null)));
});

martian.encoders.default_encoders.cljs$lang$maxFixedArity = 1;

