// Compiled by ClojureScript 1.10.520 {}
goog.provide('martian.core');
goog.require('cljs.core');
goog.require('tripod.context');
goog.require('camel_snake_kebab.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('martian.interceptors');
goog.require('martian.schema');
goog.require('martian.swagger');
goog.require('schema.core');
goog.require('cljs.spec.alpha');
goog.require('martian.spec');
martian.core.default_interceptors = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [martian.interceptors.keywordize_params,martian.interceptors.set_method,martian.interceptors.set_url,martian.interceptors.set_query_params,martian.interceptors.set_body_params,martian.interceptors.set_form_params,martian.interceptors.set_header_params,martian.interceptors.enqueue_route_specific_interceptors], null);
martian.core.parameter_schemas = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-schema","path-schema",1697292009),new cljs.core.Keyword(null,"query-schema","query-schema",2036375498),new cljs.core.Keyword(null,"body-schema","body-schema",303179830),new cljs.core.Keyword(null,"form-schema","form-schema",-489345139),new cljs.core.Keyword(null,"headers-schema","headers-schema",-1938636402)], null);
martian.core.enrich_handler = (function martian$core$enrich_handler(handler){
return cljs.core.assoc.call(null,handler,new cljs.core.Keyword(null,"parameter-aliases","parameter-aliases",630387117),(function (){var ks = cljs.core.remove.call(null,(function (p1__11049_SHARP_){
return cljs.core._EQ_.call(null,p1__11049_SHARP_,schema.core.Any);
}),martian.schema.parameter_keys.call(null,cljs.core.map.call(null,handler,martian.core.parameter_schemas)));
return cljs.core.zipmap.call(null,cljs.core.map.call(null,camel_snake_kebab.core.__GT_kebab_case_keyword,ks),ks);
})());
});
martian.core.concise__GT_handlers = (function martian$core$concise__GT_handlers(concise_handlers,global_produces,global_consumes){
return cljs.core.map.call(null,cljs.core.comp.call(null,martian.core.enrich_handler,(function (handler){
return cljs.core.update.call(null,cljs.core.update.call(null,handler,new cljs.core.Keyword(null,"produces","produces",321755657),(function (p1__11050_SHARP_){
var or__4131__auto__ = p1__11050_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return global_produces;
}
})),new cljs.core.Keyword(null,"consumes","consumes",-138432145),(function (p1__11051_SHARP_){
var or__4131__auto__ = p1__11051_SHARP_;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return global_consumes;
}
}));
})),concise_handlers);
});
martian.core.find_handler = (function martian$core$find_handler(handlers,route_name){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__11052_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.keyword.call(null,route_name),new cljs.core.Keyword(null,"route-name","route-name",-932603717).cljs$core$IFn$_invoke$arity$1(p1__11052_SHARP_));
}),handlers));
});
martian.core.handler_for = (function martian$core$handler_for(m,route_name){
return martian.core.find_handler.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(m),route_name);
});
/**
 * Update a handler in the martian record with the provided route-name
 * e.g. add route-specific interceptors:
 * (update-handler m :load-pet assoc :interceptors [an-interceptor])
 */
martian.core.update_handler = (function martian$core$update_handler(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11061 = arguments.length;
var i__4731__auto___11062 = (0);
while(true){
if((i__4731__auto___11062 < len__4730__auto___11061)){
args__4736__auto__.push((arguments[i__4731__auto___11062]));

var G__11063 = (i__4731__auto___11062 + (1));
i__4731__auto___11062 = G__11063;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return martian.core.update_handler.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

martian.core.update_handler.cljs$core$IFn$_invoke$arity$variadic = (function (p__11058,route_name,update_fn,update_args){
var map__11059 = p__11058;
var map__11059__$1 = (((((!((map__11059 == null))))?(((((map__11059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11059):map__11059);
var m = map__11059__$1;
var handlers = cljs.core.get.call(null,map__11059__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.update.call(null,m,new cljs.core.Keyword(null,"handlers","handlers",79528781),((function (map__11059,map__11059__$1,m,handlers){
return (function (p1__11053_SHARP_){
return cljs.core.mapv.call(null,((function (map__11059,map__11059__$1,m,handlers){
return (function (handler){
if(cljs.core._EQ_.call(null,cljs.core.keyword.call(null,route_name),new cljs.core.Keyword(null,"route-name","route-name",-932603717).cljs$core$IFn$_invoke$arity$1(handler))){
return cljs.core.apply.call(null,update_fn,handler,update_args);
} else {
return handler;
}
});})(map__11059,map__11059__$1,m,handlers))
,p1__11053_SHARP_);
});})(map__11059,map__11059__$1,m,handlers))
);
});

martian.core.update_handler.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
martian.core.update_handler.cljs$lang$applyTo = (function (seq11054){
var G__11055 = cljs.core.first.call(null,seq11054);
var seq11054__$1 = cljs.core.next.call(null,seq11054);
var G__11056 = cljs.core.first.call(null,seq11054__$1);
var seq11054__$2 = cljs.core.next.call(null,seq11054__$1);
var G__11057 = cljs.core.first.call(null,seq11054__$2);
var seq11054__$3 = cljs.core.next.call(null,seq11054__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11055,G__11056,G__11057,seq11054__$3);
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
martian.core.Martian = (function (api_root,handlers,interceptors,__meta,__extmap,__hash){
this.api_root = api_root;
this.handlers = handlers;
this.interceptors = interceptors;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
martian.core.Martian.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

martian.core.Martian.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k11065,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__11069 = k11065;
var G__11069__$1 = (((G__11069 instanceof cljs.core.Keyword))?G__11069.fqn:null);
switch (G__11069__$1) {
case "api-root":
return self__.api_root;

break;
case "handlers":
return self__.handlers;

break;
case "interceptors":
return self__.interceptors;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k11065,else__4388__auto__);

}
});

martian.core.Martian.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__11070){
var vec__11071 = p__11070;
var k__4408__auto__ = cljs.core.nth.call(null,vec__11071,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__11071,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

martian.core.Martian.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#martian.core.Martian{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"api-root","api-root",1105336944),self__.api_root],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),self__.interceptors],null))], null),self__.__extmap));
});

martian.core.Martian.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__11064){
var self__ = this;
var G__11064__$1 = this;
return (new cljs.core.RecordIter((0),G__11064__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-root","api-root",1105336944),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

martian.core.Martian.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

martian.core.Martian.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new martian.core.Martian(self__.api_root,self__.handlers,self__.interceptors,self__.__meta,self__.__extmap,self__.__hash));
});

martian.core.Martian.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

martian.core.Martian.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-418887820 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

martian.core.Martian.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this11066,other11067){
var self__ = this;
var this11066__$1 = this;
return (((!((other11067 == null)))) && ((this11066__$1.constructor === other11067.constructor)) && (cljs.core._EQ_.call(null,this11066__$1.api_root,other11067.api_root)) && (cljs.core._EQ_.call(null,this11066__$1.handlers,other11067.handlers)) && (cljs.core._EQ_.call(null,this11066__$1.interceptors,other11067.interceptors)) && (cljs.core._EQ_.call(null,this11066__$1.__extmap,other11067.__extmap)));
});

martian.core.Martian.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"handlers","handlers",79528781),null,new cljs.core.Keyword(null,"api-root","api-root",1105336944),null,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new martian.core.Martian(self__.api_root,self__.handlers,self__.interceptors,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

martian.core.Martian.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__11064){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__11074 = cljs.core.keyword_identical_QMARK_;
var expr__11075 = k__4393__auto__;
if(cljs.core.truth_(pred__11074.call(null,new cljs.core.Keyword(null,"api-root","api-root",1105336944),expr__11075))){
return (new martian.core.Martian(G__11064,self__.handlers,self__.interceptors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11074.call(null,new cljs.core.Keyword(null,"handlers","handlers",79528781),expr__11075))){
return (new martian.core.Martian(self__.api_root,G__11064,self__.interceptors,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__11074.call(null,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),expr__11075))){
return (new martian.core.Martian(self__.api_root,self__.handlers,G__11064,self__.__meta,self__.__extmap,null));
} else {
return (new martian.core.Martian(self__.api_root,self__.handlers,self__.interceptors,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__11064),null));
}
}
}
});

martian.core.Martian.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"api-root","api-root",1105336944),self__.api_root,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handlers","handlers",79528781),self__.handlers,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),self__.interceptors,null))], null),self__.__extmap));
});

martian.core.Martian.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__11064){
var self__ = this;
var this__4384__auto____$1 = this;
return (new martian.core.Martian(self__.api_root,self__.handlers,self__.interceptors,G__11064,self__.__extmap,self__.__hash));
});

martian.core.Martian.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

martian.core.Martian.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"api-root","api-root",-1549098825,null),new cljs.core.Symbol(null,"handlers","handlers",1720060308,null),new cljs.core.Symbol(null,"interceptors","interceptors",93748576,null)], null);
});

martian.core.Martian.cljs$lang$type = true;

martian.core.Martian.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"martian.core/Martian",null,(1),null));
});

martian.core.Martian.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"martian.core/Martian");
});

/**
 * Positional factory function for martian.core/Martian.
 */
martian.core.__GT_Martian = (function martian$core$__GT_Martian(api_root,handlers,interceptors){
return (new martian.core.Martian(api_root,handlers,interceptors,null,null,null));
});

/**
 * Factory function for martian.core/Martian, taking a map of keywords to field values.
 */
martian.core.map__GT_Martian = (function martian$core$map__GT_Martian(G__11068){
var extmap__4424__auto__ = (function (){var G__11077 = cljs.core.dissoc.call(null,G__11068,new cljs.core.Keyword(null,"api-root","api-root",1105336944),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
if(cljs.core.record_QMARK_.call(null,G__11068)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__11077);
} else {
return G__11077;
}
})();
return (new martian.core.Martian(new cljs.core.Keyword(null,"api-root","api-root",1105336944).cljs$core$IFn$_invoke$arity$1(G__11068),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(G__11068),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951).cljs$core$IFn$_invoke$arity$1(G__11068),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});

martian.core.url_for = (function martian$core$url_for(var_args){
var G__11081 = arguments.length;
switch (G__11081) {
case 2:
return martian.core.url_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return martian.core.url_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

martian.core.url_for.cljs$core$IFn$_invoke$arity$2 = (function (martian__$1,route_name){
return martian.core.url_for.call(null,martian__$1,route_name,cljs.core.PersistentArrayMap.EMPTY);
});

martian.core.url_for.cljs$core$IFn$_invoke$arity$3 = (function (p__11082,route_name,params){
var map__11083 = p__11082;
var map__11083__$1 = (((((!((map__11083 == null))))?(((((map__11083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11083):map__11083);
var api_root = cljs.core.get.call(null,map__11083__$1,new cljs.core.Keyword(null,"api-root","api-root",1105336944));
var handlers = cljs.core.get.call(null,map__11083__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var temp__5735__auto__ = martian.core.find_handler.call(null,handlers,route_name);
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
var params__$1 = martian.interceptors.coerce_data.call(null,handler,new cljs.core.Keyword(null,"path-schema","path-schema",1697292009),clojure.walk.keywordize_keys.call(null,params));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(api_root),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,cljs.core.map.call(null,((function (params__$1,handler,temp__5735__auto__,map__11083,map__11083__$1,api_root,handlers){
return (function (p1__11079_SHARP_){
return cljs.core.get.call(null,params__$1,p1__11079_SHARP_,p1__11079_SHARP_);
});})(params__$1,handler,temp__5735__auto__,map__11083,map__11083__$1,api_root,handlers))
,new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(handler))))].join('');
} else {
return null;
}
});

martian.core.url_for.cljs$lang$maxFixedArity = 3;

martian.core.request_for = (function martian$core$request_for(var_args){
var G__11087 = arguments.length;
switch (G__11087) {
case 2:
return martian.core.request_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return martian.core.request_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

martian.core.request_for.cljs$core$IFn$_invoke$arity$2 = (function (martian__$1,route_name){
return martian.core.request_for.call(null,martian__$1,route_name,cljs.core.PersistentArrayMap.EMPTY);
});

martian.core.request_for.cljs$core$IFn$_invoke$arity$3 = (function (p__11088,route_name,params){
var map__11089 = p__11088;
var map__11089__$1 = (((((!((map__11089 == null))))?(((((map__11089.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11089.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11089):map__11089);
var martian__$1 = map__11089__$1;
var handlers = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var interceptors = cljs.core.get.call(null,map__11089__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var temp__5735__auto__ = martian.core.find_handler.call(null,handlers,route_name);
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
var ctx = tripod.context.enqueue_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.conj.call(null,cljs.core.vec.call(null,(function (){var or__4131__auto__ = interceptors;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return martian.core.default_interceptors;
}
})()),martian.interceptors.request_only_handler));
return new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(tripod.context.execute.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"url-for","url-for",-1886539080),cljs.core.partial.call(null,martian.core.url_for,martian__$1),new cljs.core.Keyword(null,"request","request",1772954723),(function (){var or__4131__auto__ = new cljs.core.Keyword("martian.core","request","martian.core/request",2007723416).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params)));
} else {
return null;
}
});

martian.core.request_for.cljs$lang$maxFixedArity = 3;

martian.core.response_for = (function martian$core$response_for(var_args){
var G__11093 = arguments.length;
switch (G__11093) {
case 2:
return martian.core.response_for.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return martian.core.response_for.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

martian.core.response_for.cljs$core$IFn$_invoke$arity$2 = (function (martian__$1,route_name){
return martian.core.response_for.call(null,martian__$1,route_name,cljs.core.PersistentArrayMap.EMPTY);
});

martian.core.response_for.cljs$core$IFn$_invoke$arity$3 = (function (p__11094,route_name,params){
var map__11095 = p__11094;
var map__11095__$1 = (((((!((map__11095 == null))))?(((((map__11095.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11095.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11095):map__11095);
var martian__$1 = map__11095__$1;
var handlers = cljs.core.get.call(null,map__11095__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var interceptors = cljs.core.get.call(null,map__11095__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var temp__5735__auto__ = martian.core.find_handler.call(null,handlers,route_name);
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
var ctx = tripod.context.enqueue_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var or__4131__auto__ = interceptors;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return martian.core.default_interceptors;
}
})());
return new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(tripod.context.execute.call(null,cljs.core.assoc.call(null,ctx,new cljs.core.Keyword(null,"url-for","url-for",-1886539080),cljs.core.partial.call(null,martian.core.url_for,martian__$1),new cljs.core.Keyword(null,"request","request",1772954723),(function (){var or__4131__auto__ = new cljs.core.Keyword("martian.core","request","martian.core/request",2007723416).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"params","params",710516235),params)));
} else {
return null;
}
});

martian.core.response_for.cljs$lang$maxFixedArity = 3;

martian.core.explore = (function martian$core$explore(var_args){
var G__11099 = arguments.length;
switch (G__11099) {
case 1:
return martian.core.explore.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return martian.core.explore.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

martian.core.explore.cljs$core$IFn$_invoke$arity$1 = (function (p__11100){
var map__11101 = p__11100;
var map__11101__$1 = (((((!((map__11101 == null))))?(((((map__11101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11101):map__11101);
var handlers = cljs.core.get.call(null,map__11101__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
return cljs.core.mapv.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"summary","summary",380847952)),handlers);
});

martian.core.explore.cljs$core$IFn$_invoke$arity$2 = (function (p__11103,route_name){
var map__11104 = p__11103;
var map__11104__$1 = (((((!((map__11104 == null))))?(((((map__11104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11104):map__11104);
var handlers = cljs.core.get.call(null,map__11104__$1,new cljs.core.Keyword(null,"handlers","handlers",79528781));
var temp__5735__auto__ = martian.core.find_handler.call(null,handlers,route_name);
if(cljs.core.truth_(temp__5735__auto__)){
var handler = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"summary","summary",380847952).cljs$core$IFn$_invoke$arity$1(handler),new cljs.core.Keyword(null,"parameters","parameters",-1229919748),(function (){var parameter_aliases = new cljs.core.Keyword(null,"parameter-aliases","parameter-aliases",630387117).cljs$core$IFn$_invoke$arity$1(handler);
return clojure.walk.postwalk_replace.call(null,cljs.core.zipmap.call(null,cljs.core.vals.call(null,parameter_aliases),cljs.core.keys.call(null,parameter_aliases)),cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,handler,martian.core.parameter_schemas)));
})(),new cljs.core.Keyword(null,"returns","returns",-615452578),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"status","status",-1997798413)),new cljs.core.Keyword(null,"body","body",-2049205669)),new cljs.core.Keyword(null,"response-schemas","response-schemas",-387115364).cljs$core$IFn$_invoke$arity$1(handler)))], null);
} else {
return null;
}
});

martian.core.explore.cljs$lang$maxFixedArity = 2;

martian.core.build_instance = (function martian$core$build_instance(api_root,handlers,p__11107){
var map__11108 = p__11107;
var map__11108__$1 = (((((!((map__11108 == null))))?(((((map__11108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11108):map__11108);
var interceptors = cljs.core.get.call(null,map__11108__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
return martian.core.__GT_Martian.call(null,api_root,handlers,(function (){var or__4131__auto__ = interceptors;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return martian.core.default_interceptors;
}
})());
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("martian.core","build-instance","martian.core/build-instance",-2126516770,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"api-root","api-root",1105336944),new cljs.core.Keyword("martian.spec","api-root","martian.spec/api-root",1340033785),new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159)),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("martian.spec","opts","martian.spec/opts",-1284686080))),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"api-root","api-root",1105336944),new cljs.core.Keyword("martian.spec","api-root","martian.spec/api-root",1340033785),new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159)),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("martian.spec","opts","martian.spec/opts",-1284686080)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-root","api-root",1105336944),new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.Keyword(null,"opts","opts",155075701)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("martian.spec","api-root","martian.spec/api-root",1340033785),cljs.spec.alpha.every_impl.call(null,new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159),new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__11110){
return cljs.core.coll_QMARK_.call(null,G__11110);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159))], null),null),new cljs.core.Keyword("martian.spec","opts","martian.spec/opts",-1284686080)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("martian.spec","api-root","martian.spec/api-root",1340033785),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159)),new cljs.core.Keyword("martian.spec","opts","martian.spec/opts",-1284686080)], null)),null,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"api-root","api-root",1105336944),new cljs.core.Keyword("martian.spec","api-root","martian.spec/api-root",1340033785),new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("martian.spec","handler","martian.spec/handler",-157000159)),new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword("martian.spec","opts","martian.spec/opts",-1284686080)),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
/**
 * Creates a martian instance from a swagger spec
 * 
 * (let [m (bootstrap-swagger "https://api.org" swagger-spec)]
 *   (url-for m :load-pet {:id 123}))
 * 
 * ;; => https://api.org/pets/123
 */
martian.core.bootstrap_swagger = (function martian$core$bootstrap_swagger(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11118 = arguments.length;
var i__4731__auto___11119 = (0);
while(true){
if((i__4731__auto___11119 < len__4730__auto___11118)){
args__4736__auto__.push((arguments[i__4731__auto___11119]));

var G__11120 = (i__4731__auto___11119 + (1));
i__4731__auto___11119 = G__11120;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return martian.core.bootstrap_swagger.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

martian.core.bootstrap_swagger.cljs$core$IFn$_invoke$arity$variadic = (function (api_root,swagger_json,p__11114){
var vec__11115 = p__11114;
var opts = cljs.core.nth.call(null,vec__11115,(0),null);
return martian.core.build_instance.call(null,api_root,cljs.core.map.call(null,martian.core.enrich_handler,martian.swagger.swagger__GT_handlers.call(null,swagger_json)),clojure.walk.keywordize_keys.call(null,opts));
});

martian.core.bootstrap_swagger.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
martian.core.bootstrap_swagger.cljs$lang$applyTo = (function (seq11111){
var G__11112 = cljs.core.first.call(null,seq11111);
var seq11111__$1 = cljs.core.next.call(null,seq11111);
var G__11113 = cljs.core.first.call(null,seq11111__$1);
var seq11111__$2 = cljs.core.next.call(null,seq11111__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11112,G__11113,seq11111__$2);
});

/**
 * Creates a martian instance from a martian description
 */
martian.core.bootstrap = (function martian$core$bootstrap(var_args){
var args__4736__auto__ = [];
var len__4730__auto___11130 = arguments.length;
var i__4731__auto___11131 = (0);
while(true){
if((i__4731__auto___11131 < len__4730__auto___11130)){
args__4736__auto__.push((arguments[i__4731__auto___11131]));

var G__11132 = (i__4731__auto___11131 + (1));
i__4731__auto___11131 = G__11132;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return martian.core.bootstrap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

martian.core.bootstrap.cljs$core$IFn$_invoke$arity$variadic = (function (api_root,concise_handlers,p__11124){
var vec__11125 = p__11124;
var map__11128 = cljs.core.nth.call(null,vec__11125,(0),null);
var map__11128__$1 = (((((!((map__11128 == null))))?(((((map__11128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11128):map__11128);
var opts = map__11128__$1;
var produces = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"produces","produces",321755657));
var consumes = cljs.core.get.call(null,map__11128__$1,new cljs.core.Keyword(null,"consumes","consumes",-138432145));
return martian.core.build_instance.call(null,api_root,martian.core.concise__GT_handlers.call(null,concise_handlers,produces,consumes),opts);
});

martian.core.bootstrap.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
martian.core.bootstrap.cljs$lang$applyTo = (function (seq11121){
var G__11122 = cljs.core.first.call(null,seq11121);
var seq11121__$1 = cljs.core.next.call(null,seq11121);
var G__11123 = cljs.core.first.call(null,seq11121__$1);
var seq11121__$2 = cljs.core.next.call(null,seq11121__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11122,G__11123,seq11121__$2);
});

