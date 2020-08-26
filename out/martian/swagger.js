// Compiled by ClojureScript 1.10.520 {}
goog.provide('martian.swagger');
goog.require('cljs.core');
goog.require('camel_snake_kebab.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('martian.schema');
goog.require('schema.core');
goog.require('cljs.reader');
martian.swagger.body_schema = (function martian$swagger$body_schema(definitions,swagger_params){
var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__9589_SHARP_){
return cljs.core._EQ_.call(null,"body",new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__9589_SHARP_));
}),swagger_params));
if(cljs.core.truth_(temp__5735__auto__)){
var body_params = temp__5735__auto__;
return martian.schema.schemas_for_parameters.call(null,definitions,body_params);
} else {
return null;
}
});
martian.swagger.form_schema = (function martian$swagger$form_schema(definitions,swagger_params){
var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__9590_SHARP_){
return cljs.core._EQ_.call(null,"formData",new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__9590_SHARP_));
}),swagger_params));
if(cljs.core.truth_(temp__5735__auto__)){
var form_params = temp__5735__auto__;
return martian.schema.schemas_for_parameters.call(null,definitions,form_params);
} else {
return null;
}
});
martian.swagger.path_schema = (function martian$swagger$path_schema(definitions,swagger_params){
var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__9591_SHARP_){
return cljs.core._EQ_.call(null,"path",new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__9591_SHARP_));
}),swagger_params));
if(cljs.core.truth_(temp__5735__auto__)){
var path_params = temp__5735__auto__;
return martian.schema.schemas_for_parameters.call(null,definitions,path_params);
} else {
return null;
}
});
martian.swagger.query_schema = (function martian$swagger$query_schema(definitions,swagger_params){
var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__9592_SHARP_){
return cljs.core._EQ_.call(null,"query",new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__9592_SHARP_));
}),swagger_params));
if(cljs.core.truth_(temp__5735__auto__)){
var query_params = temp__5735__auto__;
return martian.schema.schemas_for_parameters.call(null,definitions,query_params);
} else {
return null;
}
});
martian.swagger.headers_schema = (function martian$swagger$headers_schema(definitions,swagger_params){
var temp__5735__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,(function (p1__9593_SHARP_){
return cljs.core._EQ_.call(null,"header",new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(p1__9593_SHARP_));
}),swagger_params));
if(cljs.core.truth_(temp__5735__auto__)){
var header_params = temp__5735__auto__;
return martian.schema.schemas_for_parameters.call(null,definitions,header_params);
} else {
return null;
}
});
martian.swagger.response_schemas = (function martian$swagger$response_schemas(definitions,swagger_responses){
var iter__4523__auto__ = (function martian$swagger$response_schemas_$_iter__9594(s__9595){
return (new cljs.core.LazySeq(null,(function (){
var s__9595__$1 = s__9595;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__9595__$1);
if(temp__5735__auto__){
var s__9595__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9595__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__9595__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__9597 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__9596 = (0);
while(true){
if((i__9596 < size__4522__auto__)){
var vec__9598 = cljs.core._nth.call(null,c__4521__auto__,i__9596);
var status = cljs.core.nth.call(null,vec__9598,(0),null);
var response = cljs.core.nth.call(null,vec__9598,(1),null);
var status_code = ((typeof status === 'number')?status:cljs.reader.read_string.call(null,cljs.core.name.call(null,status)));
cljs.core.chunk_append.call(null,b__9597,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),schema.core.eq.call(null,status_code),new cljs.core.Keyword(null,"body","body",-2049205669),martian.schema.make_schema.call(null,definitions,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"required","required",1807647006),true))], null));

var G__9604 = (i__9596 + (1));
i__9596 = G__9604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9597),martian$swagger$response_schemas_$_iter__9594.call(null,cljs.core.chunk_rest.call(null,s__9595__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9597),null);
}
} else {
var vec__9601 = cljs.core.first.call(null,s__9595__$2);
var status = cljs.core.nth.call(null,vec__9601,(0),null);
var response = cljs.core.nth.call(null,vec__9601,(1),null);
var status_code = ((typeof status === 'number')?status:cljs.reader.read_string.call(null,cljs.core.name.call(null,status)));
return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),schema.core.eq.call(null,status_code),new cljs.core.Keyword(null,"body","body",-2049205669),martian.schema.make_schema.call(null,definitions,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"required","required",1807647006),true))], null),martian$swagger$response_schemas_$_iter__9594.call(null,cljs.core.rest.call(null,s__9595__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,swagger_responses);
});
martian.swagger.sanitise = (function martian$swagger$sanitise(x){
if(typeof x === 'string'){
return x;
} else {
return clojure.string.replace_first.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),":","");
}
});
martian.swagger.tokenise_path = (function martian$swagger$tokenise_path(url_pattern){
var url_pattern__$1 = martian.swagger.sanitise.call(null,url_pattern);
var parts = cljs.core.map.call(null,cljs.core.first,cljs.core.re_seq.call(null,/([^{}]+|\{.+?\})/,url_pattern__$1));
return cljs.core.map.call(null,((function (url_pattern__$1,parts){
return (function (p1__9605_SHARP_){
var temp__5733__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^\{(.*)\}/,p1__9605_SHARP_));
if(cljs.core.truth_(temp__5733__auto__)){
var param_name = temp__5733__auto__;
return cljs.core.keyword.call(null,param_name);
} else {
return p1__9605_SHARP_;
}
});})(url_pattern__$1,parts))
,parts);
});
martian.swagger.__GT_handler = (function martian$swagger$__GT_handler(p__9606,path_item_parameters,url_pattern,p__9607){
var map__9608 = p__9606;
var map__9608__$1 = (((((!((map__9608 == null))))?(((((map__9608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9608):map__9608);
var swagger_map = map__9608__$1;
var definitions = cljs.core.get.call(null,map__9608__$1,new cljs.core.Keyword(null,"definitions","definitions",167529986));
var vec__9609 = p__9607;
var method = cljs.core.nth.call(null,vec__9609,(0),null);
var swagger_definition = cljs.core.nth.call(null,vec__9609,(1),null);
var temp__5735__auto__ = (function (){var G__9613 = new cljs.core.Keyword(null,"operationId","operationId",-1797978402).cljs$core$IFn$_invoke$arity$1(swagger_definition);
if((G__9613 == null)){
return null;
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword.call(null,G__9613);
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var route_name = temp__5735__auto__;
var path_parts = martian.swagger.tokenise_path.call(null,url_pattern);
var uri = clojure.string.join.call(null,cljs.core.map.call(null,cljs.core.str,path_parts));
var parameters = cljs.core.concat.call(null,path_item_parameters,new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(swagger_definition));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"produces","produces",321755657),new cljs.core.Keyword(null,"path-schema","path-schema",1697292009),new cljs.core.Keyword(null,"query-schema","query-schema",2036375498),new cljs.core.Keyword(null,"form-schema","form-schema",-489345139),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"headers-schema","headers-schema",-1938636402),new cljs.core.Keyword(null,"consumes","consumes",-138432145),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"swagger-definition","swagger-definition",-987864623),new cljs.core.Keyword(null,"body-schema","body-schema",303179830),new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"response-schemas","response-schemas",-387115364)],[uri,method,cljs.core.some.call(null,new cljs.core.Keyword(null,"produces","produces",321755657),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swagger_definition,swagger_map], null)),martian.swagger.path_schema.call(null,definitions,parameters),martian.swagger.query_schema.call(null,definitions,parameters),martian.swagger.form_schema.call(null,definitions,parameters),path_parts,martian.swagger.headers_schema.call(null,definitions,parameters),cljs.core.some.call(null,new cljs.core.Keyword(null,"consumes","consumes",-138432145),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [swagger_definition,swagger_map], null)),new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(swagger_definition),swagger_definition,martian.swagger.body_schema.call(null,definitions,parameters),route_name,martian.swagger.response_schemas.call(null,definitions,new cljs.core.Keyword(null,"responses","responses",1257546453).cljs$core$IFn$_invoke$arity$1(swagger_definition))]);
} else {
return null;
}
});
martian.swagger.swagger__GT_handlers = (function martian$swagger$swagger__GT_handlers(swagger_json){
var swagger_spec = clojure.walk.keywordize_keys.call(null,swagger_json);
return cljs.core.reduce_kv.call(null,((function (swagger_spec){
return (function (handlers,url_pattern,swagger_handlers){
return cljs.core.into.call(null,handlers,cljs.core.keep.call(null,cljs.core.partial.call(null,martian.swagger.__GT_handler,swagger_spec,new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(swagger_handlers),url_pattern),swagger_handlers));
});})(swagger_spec))
,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(swagger_spec));
});
