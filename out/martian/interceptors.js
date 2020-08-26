// Compiled by ClojureScript 1.10.520 {}
goog.provide('martian.interceptors');
goog.require('cljs.core');
goog.require('martian.schema');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('tripod.context');
goog.require('schema.core');
goog.require('camel_snake_kebab.core');
goog.require('martian.encoding');
goog.require('martian.encoders');
martian.interceptors.remove_stack = (function martian$interceptors$remove_stack(ctx){
return cljs.core.dissoc.call(null,tripod.context.terminate.call(null,ctx),new cljs.core.Keyword("tripod.context","stack","tripod.context/stack",1026657887));
});
martian.interceptors.request_only_handler = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","request-only-handler","martian.interceptors/request-only-handler",-1238634806),new cljs.core.Keyword(null,"leave","leave",1022579443),martian.interceptors.remove_stack], null);
martian.interceptors.create_only = (function martian$interceptors$create_only(m,k,v){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
martian.interceptors.insert_or_merge = (function martian$interceptors$insert_or_merge(m,k,v){
if(cljs.core.truth_(cljs.core.get.call(null,m,k))){
return cljs.core.update.call(null,m,k,(function (p1__9503_SHARP_){
return cljs.core.merge.call(null,v,p1__9503_SHARP_);
}));
} else {
if(cljs.core.truth_(cljs.core.not_empty.call(null,v))){
return cljs.core.assoc.call(null,m,k,v);
} else {
return m;

}
}
});
martian.interceptors.set_method = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","method","martian.interceptors/method",-34972788),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9504){
var map__9505 = p__9504;
var map__9505__$1 = (((((!((map__9505 == null))))?(((((map__9505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9505):map__9505);
var ctx = map__9505__$1;
var handler = cljs.core.get.call(null,map__9505__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"request","request",1772954723),martian.interceptors.create_only,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(handler));
})], null);
martian.interceptors.set_url = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","url","martian.interceptors/url",-366784462),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9507){
var map__9508 = p__9507;
var map__9508__$1 = (((((!((map__9508 == null))))?(((((map__9508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9508):map__9508);
var ctx = map__9508__$1;
var params = cljs.core.get.call(null,map__9508__$1,new cljs.core.Keyword(null,"params","params",710516235));
var url_for = cljs.core.get.call(null,map__9508__$1,new cljs.core.Keyword(null,"url-for","url-for",-1886539080));
var handler = cljs.core.get.call(null,map__9508__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"request","request",1772954723),martian.interceptors.create_only,new cljs.core.Keyword(null,"url","url",276297046),url_for.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717).cljs$core$IFn$_invoke$arity$1(handler),params));
})], null);
martian.interceptors.coerce_data = (function martian$interceptors$coerce_data(p__9510,schema_key,params){
var map__9511 = p__9510;
var map__9511__$1 = (((((!((map__9511 == null))))?(((((map__9511.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9511.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9511):map__9511);
var handler = map__9511__$1;
var parameter_aliases = cljs.core.get.call(null,map__9511__$1,new cljs.core.Keyword(null,"parameter-aliases","parameter-aliases",630387117));
return martian.schema.coerce_data.call(null,cljs.core.get.call(null,handler,schema_key),params,parameter_aliases);
});
martian.interceptors.keywordize_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","keywordize-params","martian.interceptors/keywordize-params",855034162),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (ctx){
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"params","params",710516235),clojure.walk.keywordize_keys);
})], null);
martian.interceptors.set_query_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","query-params","martian.interceptors/query-params",1456933178),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9513){
var map__9514 = p__9513;
var map__9514__$1 = (((((!((map__9514 == null))))?(((((map__9514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9514.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9514):map__9514);
var ctx = map__9514__$1;
var params = cljs.core.get.call(null,map__9514__$1,new cljs.core.Keyword(null,"params","params",710516235));
var handler = cljs.core.get.call(null,map__9514__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"request","request",1772954723),martian.interceptors.insert_or_merge,new cljs.core.Keyword(null,"query-params","query-params",900640534),martian.interceptors.coerce_data.call(null,handler,new cljs.core.Keyword(null,"query-schema","query-schema",2036375498),params));
})], null);
martian.interceptors.set_body_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","body-params","martian.interceptors/body-params",-7295574),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9516){
var map__9517 = p__9516;
var map__9517__$1 = (((((!((map__9517 == null))))?(((((map__9517.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9517.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9517):map__9517);
var ctx = map__9517__$1;
var params = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"params","params",710516235));
var handler = cljs.core.get.call(null,map__9517__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var temp__5733__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"body-schema","body-schema",303179830).cljs$core$IFn$_invoke$arity$1(handler));
if(cljs.core.truth_(temp__5733__auto__)){
var vec__9519 = temp__5733__auto__;
var body_key = cljs.core.nth.call(null,vec__9519,(0),null);
var body_schema = cljs.core.nth.call(null,vec__9519,(1),null);
var parameter_aliases = new cljs.core.Keyword(null,"parameter-aliases","parameter-aliases",630387117).cljs$core$IFn$_invoke$arity$1(handler);
var body_params = (function (){var or__4131__auto__ = new cljs.core.Keyword("martian.core","body","martian.core/body",1877373808).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = cljs.core.get.call(null,params,schema.core.explicit_schema_key.call(null,body_key));
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = cljs.core.get.call(null,params,camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,schema.core.explicit_schema_key.call(null,body_key)));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return params;
}
}
}
})();
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"request","request",1772954723),martian.interceptors.insert_or_merge,new cljs.core.Keyword(null,"body","body",-2049205669),martian.schema.coerce_data.call(null,body_schema,body_params,parameter_aliases));
} else {
return ctx;
}
})], null);
martian.interceptors.set_form_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","form-params","martian.interceptors/form-params",-957815049),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9522){
var map__9523 = p__9522;
var map__9523__$1 = (((((!((map__9523 == null))))?(((((map__9523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9523):map__9523);
var ctx = map__9523__$1;
var params = cljs.core.get.call(null,map__9523__$1,new cljs.core.Keyword(null,"params","params",710516235));
var handler = cljs.core.get.call(null,map__9523__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"request","request",1772954723),martian.interceptors.insert_or_merge,new cljs.core.Keyword(null,"form-params","form-params",1884296467),martian.interceptors.coerce_data.call(null,handler,new cljs.core.Keyword(null,"form-schema","form-schema",-489345139),params));
})], null);
martian.interceptors.set_header_params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","header-params","martian.interceptors/header-params",1496137126),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9525){
var map__9526 = p__9525;
var map__9526__$1 = (((((!((map__9526 == null))))?(((((map__9526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9526.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9526):map__9526);
var ctx = map__9526__$1;
var params = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword(null,"params","params",710516235));
var handler = cljs.core.get.call(null,map__9526__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.update.call(null,ctx,new cljs.core.Keyword(null,"request","request",1772954723),martian.interceptors.insert_or_merge,new cljs.core.Keyword(null,"headers","headers",-835030129),clojure.walk.stringify_keys.call(null,martian.interceptors.coerce_data.call(null,handler,new cljs.core.Keyword(null,"headers-schema","headers-schema",-1938636402),params)));
})], null);
martian.interceptors.enqueue_route_specific_interceptors = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","enqueue-route-specific-interceptors","martian.interceptors/enqueue-route-specific-interceptors",-102938935),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9529){
var map__9530 = p__9529;
var map__9530__$1 = (((((!((map__9530 == null))))?(((((map__9530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9530):map__9530);
var ctx = map__9530__$1;
var handler = cljs.core.get.call(null,map__9530__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var temp__5733__auto__ = new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951).cljs$core$IFn$_invoke$arity$1(handler);
if(cljs.core.truth_(temp__5733__auto__)){
var i = temp__5733__auto__;
return cljs.core.update.call(null,ctx,new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070),((function (i,temp__5733__auto__,map__9530,map__9530__$1,ctx,handler){
return (function (p1__9528_SHARP_){
return cljs.core.into.call(null,cljs.core.into.call(null,tripod.context.queue,i),p1__9528_SHARP_);
});})(i,temp__5733__auto__,map__9530,map__9530__$1,ctx,handler))
);
} else {
return ctx;
}
})], null);
martian.interceptors.encode_body = (function martian$interceptors$encode_body(encoders){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","encode-body","martian.interceptors/encode-body",22463536),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9532){
var map__9533 = p__9532;
var map__9533__$1 = (((((!((map__9533 == null))))?(((((map__9533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9533):map__9533);
var ctx = map__9533__$1;
var request = cljs.core.get.call(null,map__9533__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var handler = cljs.core.get.call(null,map__9533__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var content_type = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(and__4120__auto__)){
var and__4120__auto____$1 = cljs.core.not.call(null,cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null)));
if(and__4120__auto____$1){
return martian.encoding.choose_content_type.call(null,encoders,new cljs.core.Keyword(null,"consumes","consumes",-138432145).cljs$core$IFn$_invoke$arity$1(handler));
} else {
return and__4120__auto____$1;
}
} else {
return and__4120__auto__;
}
})();
var map__9535 = martian.encoding.find_encoder.call(null,encoders,content_type);
var map__9535__$1 = (((((!((map__9535 == null))))?(((((map__9535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9535):map__9535);
var encoder = map__9535__$1;
var encode = cljs.core.get.call(null,map__9535__$1,new cljs.core.Keyword(null,"encode","encode",-1753429702));
var G__9537 = ctx;
var G__9537__$1 = (cljs.core.truth_(cljs.core.get_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"body","body",-2049205669)], null)))?cljs.core.update_in.call(null,G__9537,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"body","body",-2049205669)], null),encode):G__9537);
if(cljs.core.truth_(content_type)){
return cljs.core.assoc_in.call(null,G__9537__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"headers","headers",-835030129),"Content-Type"], null),content_type);
} else {
return G__9537__$1;
}
})], null);
});
martian.interceptors.default_encode_body = martian.interceptors.encode_body.call(null,martian.encoders.default_encoders.call(null));
martian.interceptors.coerce_response = (function martian$interceptors$coerce_response(encoders){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("martian.interceptors","coerce-response","martian.interceptors/coerce-response",-676436674),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (p__9538){
var map__9539 = p__9538;
var map__9539__$1 = (((((!((map__9539 == null))))?(((((map__9539.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9539.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9539):map__9539);
var ctx = map__9539__$1;
var request = cljs.core.get.call(null,map__9539__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var handler = cljs.core.get.call(null,map__9539__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var content_type = (function (){var and__4120__auto__ = cljs.core.not.call(null,cljs.core.get_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"Accept"], null)));
if(and__4120__auto__){
return martian.encoding.choose_content_type.call(null,encoders,new cljs.core.Keyword(null,"produces","produces",321755657).cljs$core$IFn$_invoke$arity$1(handler));
} else {
return and__4120__auto__;
}
})();
var map__9541 = martian.encoding.find_encoder.call(null,encoders,content_type);
var map__9541__$1 = (((((!((map__9541 == null))))?(((((map__9541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9541):map__9541);
var as = cljs.core.get.call(null,map__9541__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"text","text",-1790561697));
var G__9543 = cljs.core.assoc_in.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"as","as",1148689641)], null),as);
if(cljs.core.truth_(content_type)){
return cljs.core.assoc_in.call(null,G__9543,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"headers","headers",-835030129),"Accept"], null),content_type);
} else {
return G__9543;
}
}),new cljs.core.Keyword(null,"leave","leave",1022579443),(function (p__9544){
var map__9545 = p__9544;
var map__9545__$1 = (((((!((map__9545 == null))))?(((((map__9545.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9545.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9545):map__9545);
var ctx = map__9545__$1;
var request = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var response = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var handler = cljs.core.get.call(null,map__9545__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"response","response",-1068424192),(function (){var content_type = (function (){var and__4120__auto__ = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(response);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,response,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null)));
} else {
return and__4120__auto__;
}
})();
var map__9547 = martian.encoding.find_encoder.call(null,encoders,content_type);
var map__9547__$1 = (((((!((map__9547 == null))))?(((((map__9547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9547):map__9547);
var encoder = map__9547__$1;
var matcher = cljs.core.get.call(null,map__9547__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995));
var decode = cljs.core.get.call(null,map__9547__$1,new cljs.core.Keyword(null,"decode","decode",-1306165281));
return cljs.core.update.call(null,response,new cljs.core.Keyword(null,"body","body",-2049205669),decode);
})());
})], null);
});
martian.interceptors.default_coerce_response = martian.interceptors.coerce_response.call(null,martian.encoders.default_encoders.call(null));
