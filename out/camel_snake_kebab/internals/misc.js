// Compiled by ClojureScript 1.10.520 {}
goog.provide('camel_snake_kebab.internals.misc');
goog.require('cljs.core');
goog.require('camel_snake_kebab.internals.string_separator');
goog.require('clojure.string');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4736__auto__ = [];
var len__4730__auto___8834 = arguments.length;
var i__4731__auto___8835 = (0);
while(true){
if((i__4731__auto___8835 < len__4730__auto___8834)){
args__4736__auto__.push((arguments[i__4731__auto___8835]));

var G__8836 = (i__4731__auto___8835 + (1));
i__4731__auto___8835 = G__8836;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((4) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4737__auto__);
});

camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__8828){
var map__8829 = p__8828;
var map__8829__$1 = (((((!((map__8829 == null))))?(((((map__8829.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8829.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8829):map__8829);
var separator = cljs.core.get.call(null,map__8829__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__8831 = camel_snake_kebab.internals.string_separator.split.call(null,separator,s);
var seq__8832 = cljs.core.seq.call(null,vec__8831);
var first__8833 = cljs.core.first.call(null,seq__8832);
var seq__8832__$1 = cljs.core.next.call(null,seq__8832);
var first = first__8833;
var rest = seq__8832__$1;
return clojure.string.join.call(null,sep,cljs.core.cons.call(null,first_fn.call(null,first),cljs.core.map.call(null,rest_fn,rest)));
});

camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4);

/** @this {Function} */
camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq8823){
var G__8824 = cljs.core.first.call(null,seq8823);
var seq8823__$1 = cljs.core.next.call(null,seq8823);
var G__8825 = cljs.core.first.call(null,seq8823__$1);
var seq8823__$2 = cljs.core.next.call(null,seq8823__$1);
var G__8826 = cljs.core.first.call(null,seq8823__$2);
var seq8823__$3 = cljs.core.next.call(null,seq8823__$2);
var G__8827 = cljs.core.first.call(null,seq8823__$3);
var seq8823__$4 = cljs.core.next.call(null,seq8823__$3);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__8824,G__8825,G__8826,G__8827,seq8823__$4);
});

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4131__auto__ = camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,clojure.string.upper_case.call(null,s));
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return clojure.string.capitalize.call(null,s);
}
});
