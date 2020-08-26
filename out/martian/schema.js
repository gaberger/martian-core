// Compiled by ClojureScript 1.10.520 {}
goog.provide('martian.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('goog.Uri');
goog.require('schema.coerce');
goog.require('clojure.walk');
martian.schema.keyword__GT_string = (function martian$schema$keyword__GT_string(s){
if((s instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,s);
} else {
return s;
}
});
martian.schema.string_enum_matcher = (function martian$schema$string_enum_matcher(schema__$1){
if((((((schema__$1 instanceof schema.core.EnumSchema)) && (cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,schema__$1.vs)))) || ((((schema__$1 instanceof schema.core.EqSchema)) && (typeof schema__$1.v === 'string'))))){
return martian.schema.keyword__GT_string;
} else {
return null;
}
});
martian.schema.coercion_matchers = (function martian$schema$coercion_matchers(schema__$1){
var or__4131__auto__ = schema.coerce.string_coercion_matcher.call(null,schema__$1);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return martian.schema.string_enum_matcher.call(null,schema__$1);
}
});
martian.schema.from_maybe = (function martian$schema$from_maybe(s){
if((s instanceof schema.core.Maybe)){
return new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(s);
} else {
return s;
}
});
martian.schema.unalias_parameters = (function martian$schema$unalias_parameters(data,parameter_aliases){
return clojure.walk.postwalk_replace.call(null,parameter_aliases,data);
});
/**
 * Extracts the data referred to by the schema's keys and coerces it
 */
martian.schema.coerce_data = (function martian$schema$coerce_data(var_args){
var args__4736__auto__ = [];
var len__4730__auto___9475 = arguments.length;
var i__4731__auto___9476 = (0);
while(true){
if((i__4731__auto___9476 < len__4730__auto___9475)){
args__4736__auto__.push((arguments[i__4731__auto___9476]));

var G__9477 = (i__4731__auto___9476 + (1));
i__4731__auto___9476 = G__9477;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return martian.schema.coerce_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

martian.schema.coerce_data.cljs$core$IFn$_invoke$arity$variadic = (function (schema__$1,data,p__9469){
var vec__9470 = p__9469;
var parameter_aliases = cljs.core.nth.call(null,vec__9470,(0),null);
var temp__5735__auto__ = martian.schema.from_maybe.call(null,schema__$1);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
if((s instanceof schema.core.AnythingSchema)){
return schema.coerce.coercer_BANG_.call(null,schema__$1,martian.schema.coercion_matchers).call(null,data);
} else {
if(cljs.core.map_QMARK_.call(null,s)){
if(cljs.core.every_QMARK_.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,s))){
var G__9473 = cljs.core.keys.call(null,s);
var G__9473__$1 = (((G__9473 == null))?null:cljs.core.map.call(null,schema.core.explicit_schema_key,G__9473));
var G__9473__$2 = (((G__9473__$1 == null))?null:cljs.core.select_keys.call(null,martian.schema.unalias_parameters.call(null,data,parameter_aliases),G__9473__$1));
if((G__9473__$2 == null)){
return null;
} else {
return schema.coerce.coercer_BANG_.call(null,schema__$1,martian.schema.coercion_matchers).call(null,G__9473__$2);
}
} else {
var G__9474 = martian.schema.unalias_parameters.call(null,data,parameter_aliases);
if((G__9474 == null)){
return null;
} else {
return schema.coerce.coercer_BANG_.call(null,schema__$1,martian.schema.coercion_matchers).call(null,G__9474);
}
}
} else {
if(cljs.core.coll_QMARK_.call(null,s)){
return schema.coerce.coercer_BANG_.call(null,schema__$1,martian.schema.coercion_matchers).call(null,cljs.core.map.call(null,((function (s,temp__5735__auto__,vec__9470,parameter_aliases){
return (function (p1__9465_SHARP_){
if(cljs.core.map_QMARK_.call(null,p1__9465_SHARP_)){
return martian.schema.unalias_parameters.call(null,p1__9465_SHARP_,parameter_aliases);
} else {
return p1__9465_SHARP_;
}
});})(s,temp__5735__auto__,vec__9470,parameter_aliases))
,data));
} else {
return schema.coerce.coercer_BANG_.call(null,schema__$1,martian.schema.coercion_matchers).call(null,data);

}
}
}
} else {
return null;
}
});

martian.schema.coerce_data.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
martian.schema.coerce_data.cljs$lang$applyTo = (function (seq9466){
var G__9467 = cljs.core.first.call(null,seq9466);
var seq9466__$1 = cljs.core.next.call(null,seq9466);
var G__9468 = cljs.core.first.call(null,seq9466__$1);
var seq9466__$2 = cljs.core.next.call(null,seq9466__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__9467,G__9468,seq9466__$2);
});

martian.schema.extract_keys_from_map_schema = (function martian$schema$extract_keys_from_map_schema(schema__$1){
return cljs.core.map.call(null,schema.core.explicit_schema_key,cljs.core.filter.call(null,schema.core.specific_key_QMARK_,cljs.core.keys.call(null,schema__$1)));
});
martian.schema.parameter_keys = (function martian$schema$parameter_keys(schemas){
return cljs.core.mapcat.call(null,(function (schema__$1){
var temp__5735__auto__ = martian.schema.from_maybe.call(null,schema__$1);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
if(((cljs.core.map_QMARK_.call(null,s)) && ((!(cljs.core.record_QMARK_.call(null,s)))))){
return cljs.core.concat.call(null,martian.schema.extract_keys_from_map_schema.call(null,s),martian.schema.parameter_keys.call(null,cljs.core.vals.call(null,s)));
} else {
if(cljs.core.coll_QMARK_.call(null,s)){
return martian.schema.parameter_keys.call(null,s);
} else {
return null;

}
}
} else {
return null;
}
}),schemas);
});
/**
 * Given a collection of swagger parameters returns a schema map
 */
martian.schema.schemas_for_parameters = (function martian$schema$schemas_for_parameters(definitions,parameters){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__9478){
var map__9479 = p__9478;
var map__9479__$1 = (((((!((map__9479 == null))))?(((((map__9479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9479):map__9479);
var param = map__9479__$1;
var name = cljs.core.get.call(null,map__9479__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var required = cljs.core.get.call(null,map__9479__$1,new cljs.core.Keyword(null,"required","required",1807647006));
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(function (){var G__9481 = cljs.core.keyword.call(null,name);
if(cljs.core.not.call(null,required)){
return schema.core.optional_key.call(null,G__9481);
} else {
return G__9481;
}
})(),martian.schema.make_schema.call(null,definitions,param)]);
}),parameters));
});
martian.schema.resolve_ref = (function martian$schema$resolve_ref(definitions,ref){
var G__9482 = ref;
var G__9482__$1 = (((G__9482 == null))?null:cljs.core.re_find.call(null,/#\/definitions\/(.*)/,G__9482));
var G__9482__$2 = (((G__9482__$1 == null))?null:cljs.core.second.call(null,G__9482__$1));
var G__9482__$3 = (((G__9482__$2 == null))?null:cljs.core.keyword.call(null,G__9482__$2));
if((G__9482__$3 == null)){
return null;
} else {
return definitions.call(null,G__9482__$3);
}
});
martian.schema.URI = goog.Uri;
martian.schema.schema_type = (function martian$schema$schema_type(definitions,p__9483){
var map__9484 = p__9483;
var map__9484__$1 = (((((!((map__9484 == null))))?(((((map__9484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9484):map__9484);
var param = map__9484__$1;
var type = cljs.core.get.call(null,map__9484__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var enum$ = cljs.core.get.call(null,map__9484__$1,new cljs.core.Keyword(null,"enum","enum",1679018432));
var format = cljs.core.get.call(null,map__9484__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var $ref = cljs.core.get.call(null,map__9484__$1,new cljs.core.Keyword(null,"$ref","$ref",841290683));
if(cljs.core.truth_(enum$)){
return cljs.core.apply.call(null,schema.core.enum$,enum$);
} else {
if(cljs.core._EQ_.call(null,"string",type)){
var G__9486 = format;
switch (G__9486) {
case "uuid":
return schema.core.cond_pre.call(null,schema.core.Str,schema.core.Uuid);

break;
case "uri":
return schema.core.cond_pre.call(null,schema.core.Str,martian.schema.URI);

break;
default:
return schema.core.Str;

}
} else {
if(cljs.core._EQ_.call(null,"integer",type)){
return schema.core.Int;
} else {
if(cljs.core._EQ_.call(null,"boolean",type)){
return schema.core.Bool;
} else {
if(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core._EQ_.call(null,"object",type);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return $ref;
}
})())){
return martian.schema.make_schema.call(null,definitions,param);
} else {
return schema.core.Any;

}
}
}
}
}
});
martian.schema._STAR_visited_refs_STAR_ = cljs.core.PersistentHashSet.EMPTY;
/**
 * Takes a swagger parameter and returns a schema
 */
martian.schema.make_schema = (function martian$schema$make_schema(definitions,p__9488){
var map__9489 = p__9488;
var map__9489__$1 = (((((!((map__9489 == null))))?(((((map__9489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9489.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9489):map__9489);
var param = map__9489__$1;
var items = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var $ref = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"$ref","$ref",841290683));
var required = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"required","required",1807647006));
var enum$ = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"enum","enum",1679018432));
var properties = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"properties","properties",685819552));
var additionalProperties = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392));
var schema__$1 = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var name = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.call(null,map__9489__$1,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_((function (){var ref = (function (){var or__4131__auto__ = $ref;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"$ref","$ref",841290683).cljs$core$IFn$_invoke$arity$1(schema__$1);
}
})();
var and__4120__auto__ = ref;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.contains_QMARK_.call(null,martian.schema._STAR_visited_refs_STAR_,ref);
} else {
return and__4120__auto__;
}
})())){
return schema.core.Any;
} else {
if(cljs.core.truth_($ref)){
var _STAR_visited_refs_STAR__orig_val__9491 = martian.schema._STAR_visited_refs_STAR_;
var _STAR_visited_refs_STAR__temp_val__9492 = cljs.core.conj.call(null,martian.schema._STAR_visited_refs_STAR_,$ref);
martian.schema._STAR_visited_refs_STAR_ = _STAR_visited_refs_STAR__temp_val__9492;

try{return martian.schema.make_schema.call(null,definitions,cljs.core.merge.call(null,cljs.core.dissoc.call(null,param,new cljs.core.Keyword(null,"$ref","$ref",841290683)),martian.schema.resolve_ref.call(null,definitions,$ref)));
}finally {martian.schema._STAR_visited_refs_STAR_ = _STAR_visited_refs_STAR__orig_val__9491;
}} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"$ref","$ref",841290683).cljs$core$IFn$_invoke$arity$1(schema__$1))){
var _STAR_visited_refs_STAR__orig_val__9493 = martian.schema._STAR_visited_refs_STAR_;
var _STAR_visited_refs_STAR__temp_val__9494 = cljs.core.conj.call(null,martian.schema._STAR_visited_refs_STAR_,new cljs.core.Keyword(null,"$ref","$ref",841290683).cljs$core$IFn$_invoke$arity$1(schema__$1));
martian.schema._STAR_visited_refs_STAR_ = _STAR_visited_refs_STAR__temp_val__9494;

try{return martian.schema.make_schema.call(null,definitions,cljs.core.merge.call(null,cljs.core.dissoc.call(null,param,new cljs.core.Keyword(null,"schema","schema",-1582001791)),martian.schema.resolve_ref.call(null,definitions,new cljs.core.Keyword(null,"$ref","$ref",841290683).cljs$core$IFn$_invoke$arity$1(schema__$1))));
}finally {martian.schema._STAR_visited_refs_STAR_ = _STAR_visited_refs_STAR__orig_val__9493;
}} else {
var G__9495 = ((cljs.core._EQ_.call(null,"array",type))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [martian.schema.schema_type.call(null,definitions,cljs.core.assoc.call(null,items,new cljs.core.Keyword(null,"required","required",1807647006),true))], null):((cljs.core._EQ_.call(null,"array",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema__$1)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [martian.schema.schema_type.call(null,definitions,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(schema__$1),new cljs.core.Keyword(null,"required","required",1807647006),true))], null):((cljs.core._EQ_.call(null,"object",type))?(function (){var G__9496 = martian.schema.schemas_for_parameters.call(null,definitions,cljs.core.map.call(null,((function (map__9489,map__9489__$1,param,items,$ref,required,enum$,properties,additionalProperties,schema__$1,name,type){
return (function (p__9497){
var vec__9498 = p__9497;
var name__$1 = cljs.core.nth.call(null,vec__9498,(0),null);
var p = cljs.core.nth.call(null,vec__9498,(1),null);
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"name","name",1843675177),name__$1);
});})(map__9489,map__9489__$1,param,items,$ref,required,enum$,properties,additionalProperties,schema__$1,name,type))
,properties));
if(cljs.core.truth_(additionalProperties)){
return cljs.core.assoc.call(null,G__9496,schema.core.Any,schema.core.Any);
} else {
return G__9496;
}
})():martian.schema.schema_type.call(null,definitions,param)
)));
if(((cljs.core.not.call(null,required)) && (cljs.core.not_EQ_.call(null,"array",type)) && (cljs.core.not_EQ_.call(null,"array",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(schema__$1))))){
return schema.core.maybe.call(null,G__9495);
} else {
return G__9495;
}

}
}
}
});
