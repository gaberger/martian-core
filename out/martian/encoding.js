// Compiled by ClojureScript 1.10.520 {}
goog.provide('martian.encoding');
goog.require('cljs.core');
goog.require('clojure.string');
martian.encoding.choose_content_type = (function martian$encoding$choose_content_type(encoders,options){
return cljs.core.some.call(null,cljs.core.set.call(null,options),cljs.core.keys.call(null,encoders));
});
martian.encoding.auto_encoder = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"encode","encode",-1753429702),cljs.core.identity,new cljs.core.Keyword(null,"decode","decode",-1306165281),cljs.core.identity,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"auto","auto",-566279492)], null);
martian.encoding.find_encoder = (function martian$encoding$find_encoder(encoders,content_type){
if(clojure.string.blank_QMARK_.call(null,content_type)){
return martian.encoding.auto_encoder;
} else {
var encoders__$1 = encoders;
while(true){
var vec__8817 = cljs.core.first.call(null,encoders__$1);
var ct = cljs.core.nth.call(null,vec__8817,(0),null);
var encoder = cljs.core.nth.call(null,vec__8817,(1),null);
if(cljs.core.not.call(null,content_type)){
return martian.encoding.auto_encoder;
} else {
if(cljs.core.not.call(null,encoder)){
return martian.encoding.auto_encoder;
} else {
if(clojure.string.includes_QMARK_.call(null,content_type,ct)){
return encoder;
} else {
var G__8820 = cljs.core.rest.call(null,encoders__$1);
encoders__$1 = G__8820;
continue;

}
}
}
break;
}
}
});
