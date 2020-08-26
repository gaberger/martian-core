// Compiled by ClojureScript 1.10.520 {}
goog.provide('linked.map');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.reader');

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
linked.map.Node = (function (value,left,right,__meta,__extmap,__hash){
this.value = value;
this.left = left;
this.right = right;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
linked.map.Node.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4385__auto__,k__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
return this__4385__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4386__auto__,null);
});

linked.map.Node.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4387__auto__,k4696,else__4388__auto__){
var self__ = this;
var this__4387__auto____$1 = this;
var G__4700 = k4696;
var G__4700__$1 = (((G__4700 instanceof cljs.core.Keyword))?G__4700.fqn:null);
switch (G__4700__$1) {
case "value":
return self__.value;

break;
case "left":
return self__.left;

break;
case "right":
return self__.right;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k4696,else__4388__auto__);

}
});

linked.map.Node.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4404__auto__,f__4405__auto__,init__4406__auto__){
var self__ = this;
var this__4404__auto____$1 = this;
return cljs.core.reduce.call(null,((function (this__4404__auto____$1){
return (function (ret__4407__auto__,p__4701){
var vec__4702 = p__4701;
var k__4408__auto__ = cljs.core.nth.call(null,vec__4702,(0),null);
var v__4409__auto__ = cljs.core.nth.call(null,vec__4702,(1),null);
return f__4405__auto__.call(null,ret__4407__auto__,k__4408__auto__,v__4409__auto__);
});})(this__4404__auto____$1))
,init__4406__auto__,this__4404__auto____$1);
});

linked.map.Node.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4399__auto__,writer__4400__auto__,opts__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
var pr_pair__4402__auto__ = ((function (this__4399__auto____$1){
return (function (keyval__4403__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,cljs.core.pr_writer,""," ","",opts__4401__auto__,keyval__4403__auto__);
});})(this__4399__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4400__auto__,pr_pair__4402__auto__,"#linked.map.Node{",", ","}",opts__4401__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"left","left",-399115937),self__.left],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"right","right",-452581833),self__.right],null))], null),self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__4695){
var self__ = this;
var G__4695__$1 = this;
return (new cljs.core.RecordIter((0),G__4695__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

linked.map.Node.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4383__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
return self__.__meta;
});

linked.map.Node.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4380__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,self__.__extmap,self__.__hash));
});

linked.map.Node.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4389__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4381__auto__){
var self__ = this;
var this__4381__auto____$1 = this;
var h__4243__auto__ = self__.__hash;
if((!((h__4243__auto__ == null)))){
return h__4243__auto__;
} else {
var h__4243__auto____$1 = ((function (h__4243__auto__,this__4381__auto____$1){
return (function (coll__4382__auto__){
return (-1739253980 ^ cljs.core.hash_unordered_coll.call(null,coll__4382__auto__));
});})(h__4243__auto__,this__4381__auto____$1))
.call(null,this__4381__auto____$1);
self__.__hash = h__4243__auto____$1;

return h__4243__auto____$1;
}
});

linked.map.Node.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this4697,other4698){
var self__ = this;
var this4697__$1 = this;
return (((!((other4698 == null)))) && ((this4697__$1.constructor === other4698.constructor)) && (cljs.core._EQ_.call(null,this4697__$1.value,other4698.value)) && (cljs.core._EQ_.call(null,this4697__$1.left,other4698.left)) && (cljs.core._EQ_.call(null,this4697__$1.right,other4698.right)) && (cljs.core._EQ_.call(null,this4697__$1.__extmap,other4698.__extmap)));
});

linked.map.Node.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4394__auto__,k__4395__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null),k__4395__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4394__auto____$1),self__.__meta),k__4395__auto__);
} else {
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4395__auto__)),null));
}
});

linked.map.Node.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4392__auto__,k__4393__auto__,G__4695){
var self__ = this;
var this__4392__auto____$1 = this;
var pred__4705 = cljs.core.keyword_identical_QMARK_;
var expr__4706 = k__4393__auto__;
if(cljs.core.truth_(pred__4705.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__4706))){
return (new linked.map.Node(G__4695,self__.left,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__4705.call(null,new cljs.core.Keyword(null,"left","left",-399115937),expr__4706))){
return (new linked.map.Node(self__.value,G__4695,self__.right,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__4705.call(null,new cljs.core.Keyword(null,"right","right",-452581833),expr__4706))){
return (new linked.map.Node(self__.value,self__.left,G__4695,self__.__meta,self__.__extmap,null));
} else {
return (new linked.map.Node(self__.value,self__.left,self__.right,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4393__auto__,G__4695),null));
}
}
}
});

linked.map.Node.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4397__auto__){
var self__ = this;
var this__4397__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"left","left",-399115937),self__.left,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"right","right",-452581833),self__.right,null))], null),self__.__extmap));
});

linked.map.Node.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4384__auto__,G__4695){
var self__ = this;
var this__4384__auto____$1 = this;
return (new linked.map.Node(self__.value,self__.left,self__.right,G__4695,self__.__extmap,self__.__hash));
});

linked.map.Node.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4390__auto__,entry__4391__auto__){
var self__ = this;
var this__4390__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4391__auto__)){
return this__4390__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4391__auto__,(0)),cljs.core._nth.call(null,entry__4391__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4390__auto____$1,entry__4391__auto__);
}
});

linked.map.Node.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"right","right",1187949694,null)], null);
});

linked.map.Node.cljs$lang$type = true;

linked.map.Node.cljs$lang$ctorPrSeq = (function (this__4428__auto__){
return (new cljs.core.List(null,"linked.map/Node",null,(1),null));
});

linked.map.Node.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__){
return cljs.core._write.call(null,writer__4429__auto__,"linked.map/Node");
});

/**
 * Positional factory function for linked.map/Node.
 */
linked.map.__GT_Node = (function linked$map$__GT_Node(value,left,right){
return (new linked.map.Node(value,left,right,null,null,null));
});

/**
 * Factory function for linked.map/Node, taking a map of keywords to field values.
 */
linked.map.map__GT_Node = (function linked$map$map__GT_Node(G__4699){
var extmap__4424__auto__ = (function (){var G__4708 = cljs.core.dissoc.call(null,G__4699,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833));
if(cljs.core.record_QMARK_.call(null,G__4699)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,G__4708);
} else {
return G__4708;
}
})();
return (new linked.map.Node(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__4699),new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(G__4699),new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(G__4699),null,cljs.core.not_empty.call(null,extmap__4424__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IReversible}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {linked.map.Object}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
linked.map.LinkedMap = (function (head,delegate_map){
this.head = head;
this.delegate_map = delegate_map;
this.cljs$lang$protocol_mask$partition0$ = 2314602255;
this.cljs$lang$protocol_mask$partition1$ = 8192;
});
linked.map.LinkedMap.prototype.toString = (function (){
var self__ = this;
var coll = this;
return ["{",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",(function (){var iter__4523__auto__ = ((function (coll){
return (function linked$map$iter__4724(s__4725){
return (new cljs.core.LazySeq(null,((function (coll){
return (function (){
var s__4725__$1 = s__4725;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__4725__$1);
if(temp__5735__auto__){
var s__4725__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__4725__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__4725__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__4727 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__4726 = (0);
while(true){
if((i__4726 < size__4522__auto__)){
var vec__4728 = cljs.core._nth.call(null,c__4521__auto__,i__4726);
var k = cljs.core.nth.call(null,vec__4728,(0),null);
var v = cljs.core.nth.call(null,vec__4728,(1),null);
cljs.core.chunk_append.call(null,b__4727,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__4734 = (i__4726 + (1));
i__4726 = G__4734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4727),linked$map$iter__4724.call(null,cljs.core.chunk_rest.call(null,s__4725__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__4727),null);
}
} else {
var vec__4731 = cljs.core.first.call(null,s__4725__$2);
var k = cljs.core.nth.call(null,vec__4731,(0),null);
var v = cljs.core.nth.call(null,vec__4731,(1),null);
return cljs.core.cons.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),linked$map$iter__4724.call(null,cljs.core.rest.call(null,s__4725__$2)));
}
} else {
return null;
}
break;
}
});})(coll))
,null,null));
});})(coll))
;
return iter__4523__auto__.call(null,coll);
})())),"}"].join('');
});

linked.map.LinkedMap.prototype.equiv = (function (other){
var self__ = this;
var this$ = this;
return cljs.core._equiv.call(null,this$,other);
});

linked.map.LinkedMap.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core._lookup.call(null,coll__$1,k,null);
});

linked.map.LinkedMap.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (coll,k,not_found){
var self__ = this;
var coll__$1 = this;
var temp__5733__auto__ = cljs.core.find.call(null,self__.delegate_map,k);
if(cljs.core.truth_(temp__5733__auto__)){
var entry = temp__5733__auto__;
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,entry));
} else {
return not_found;
}
});

linked.map.LinkedMap.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (coll,f,init){
var self__ = this;
var coll__$1 = this;
return cljs.core.reduce.call(null,((function (coll__$1){
return (function (p1__4711_SHARP_,p2__4712_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,f,p1__4711_SHARP_),p2__4712_SHARP_);
});})(coll__$1))
,init,cljs.core.seq.call(null,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (coll,writer,opts){
var self__ = this;
var coll__$1 = this;
return cljs.core._write.call(null,writer,["#linked/map ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,coll__$1))].join(''));
});

linked.map.LinkedMap.prototype.cljs$core$IMeta$_meta$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.meta.call(null,self__.delegate_map);
});

linked.map.LinkedMap.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new linked.map.LinkedMap(self__.head,self__.delegate_map));
});

linked.map.LinkedMap.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.count.call(null,self__.delegate_map);
});

linked.map.LinkedMap.prototype.cljs$core$IReversible$_rseq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return linked.map.rseq_STAR_.call(null,coll__$1);
});

linked.map.LinkedMap.prototype.cljs$core$IHash$_hash$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core.hash.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,coll__$1));
});

linked.map.LinkedMap.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (coll,other){
var self__ = this;
var coll__$1 = this;
return cljs.core.equiv_map.call(null,coll__$1,other);
});

linked.map.LinkedMap.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return cljs.core._with_meta.call(null,linked.map.empty_linked_map,cljs.core.meta.call(null,self__.delegate_map));
});

linked.map.LinkedMap.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return linked.map.dissoc_STAR_.call(null,coll__$1,k);
});

linked.map.LinkedMap.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (coll,k,v){
var self__ = this;
var coll__$1 = this;
return linked.map.assoc_STAR_.call(null,coll__$1,k,v);
});

linked.map.LinkedMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (coll,k){
var self__ = this;
var coll__$1 = this;
return cljs.core.contains_QMARK_.call(null,self__.delegate_map,k);
});

linked.map.LinkedMap.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var self__ = this;
var coll__$1 = this;
return linked.map.seq_STAR_.call(null,coll__$1);
});

linked.map.LinkedMap.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (coll,meta){
var self__ = this;
var coll__$1 = this;
return (new linked.map.LinkedMap(self__.head,cljs.core.with_meta.call(null,self__.delegate_map,meta)));
});

linked.map.LinkedMap.prototype.cljs$core$ICollection$_conj$arity$2 = (function (coll,entry){
var self__ = this;
var coll__$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry)){
return cljs.core._assoc.call(null,coll__$1,cljs.core._nth.call(null,entry,(0)),cljs.core._nth.call(null,entry,(1)));
} else {
var ret = coll__$1;
var es = cljs.core.seq.call(null,entry);
while(true){
if((es == null)){
return ret;
} else {
var e = cljs.core.first.call(null,es);
if(cljs.core.vector_QMARK_.call(null,e)){
var G__4735 = cljs.core._assoc.call(null,ret,cljs.core._nth.call(null,e,(0)),cljs.core._nth.call(null,e,(1)));
var G__4736 = cljs.core.next.call(null,es);
ret = G__4735;
es = G__4736;
continue;
} else {
throw (new Error("conj on a map takes map entries or seqables of map entries"));
}
}
break;
}
}
});

linked.map.LinkedMap.prototype.call = (function() {
var G__4737 = null;
var G__4737__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k);
});
var G__4737__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var coll = self____$1;
return cljs.core._lookup.call(null,coll,k,not_found);
});
G__4737 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__4737__2.call(this,self__,k);
case 3:
return G__4737__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__4737.cljs$core$IFn$_invoke$arity$2 = G__4737__2;
G__4737.cljs$core$IFn$_invoke$arity$3 = G__4737__3;
return G__4737;
})()
;

linked.map.LinkedMap.prototype.apply = (function (self__,args4713){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args4713)));
});

linked.map.LinkedMap.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k);
});

linked.map.LinkedMap.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var coll = this;
return cljs.core._lookup.call(null,coll,k,not_found);
});

linked.map.LinkedMap.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"head","head",869147608,null),new cljs.core.Symbol(null,"delegate-map","delegate-map",-1583449162,null)], null);
});

linked.map.LinkedMap.cljs$lang$type = true;

linked.map.LinkedMap.cljs$lang$ctorStr = "linked.map/LinkedMap";

linked.map.LinkedMap.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"linked.map/LinkedMap");
});

/**
 * Positional factory function for linked.map/LinkedMap.
 */
linked.map.__GT_LinkedMap = (function linked$map$__GT_LinkedMap(head,delegate_map){
return (new linked.map.LinkedMap(head,delegate_map));
});

linked.map.assoc_STAR_ = (function linked$map$assoc_STAR_(this$,k,v){
var head = this$.head;
var delegate_map = this$.delegate_map;
var temp__5733__auto__ = cljs.core.find.call(null,delegate_map,k);
if(cljs.core.truth_(temp__5733__auto__)){
var entry = temp__5733__auto__;
return (new linked.map.LinkedMap(head,cljs.core.assoc_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"value","value",305978217)], null),v)));
} else {
if(cljs.core.empty_QMARK_.call(null,delegate_map)){
return (new linked.map.LinkedMap(k,cljs.core.assoc.call(null,delegate_map,k,(new linked.map.Node(v,k,k,null,null,null)))));
} else {
var tail = cljs.core.get_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
return (new linked.map.LinkedMap(head,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,delegate_map,k,(new linked.map.Node(v,tail,head,null,null,null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null),k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tail,new cljs.core.Keyword(null,"right","right",-452581833)], null),k)));
}
}
});
linked.map.dissoc_STAR_ = (function linked$map$dissoc_STAR_(this$,k){
var head = this$.head;
var delegate_map = this$.delegate_map;
var temp__5733__auto__ = cljs.core.find.call(null,delegate_map,k);
if(cljs.core.truth_(temp__5733__auto__)){
var entry = temp__5733__auto__;
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,delegate_map))){
return cljs.core.empty.call(null,this$);
} else {
var rk = new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,entry));
var lk = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.val.call(null,entry));
var head__$1 = ((cljs.core._EQ_.call(null,k,head))?rk:head);
return (new linked.map.LinkedMap(head__$1,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,delegate_map,k),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rk,new cljs.core.Keyword(null,"left","left",-399115937)], null),lk),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lk,new cljs.core.Keyword(null,"right","right",-452581833)], null),rk)));
}
} else {
return this$;
}
});
linked.map.map_entry = (function linked$map$map_entry(k,v){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[k,v],null));
});
linked.map.visit_node = (function linked$map$visit_node(delegate_map,current,last,direction){
var vec__4738 = cljs.core.find.call(null,delegate_map,current);
var k = cljs.core.nth.call(null,vec__4738,(0),null);
var node = cljs.core.nth.call(null,vec__4738,(1),null);
var entry = linked.map.map_entry.call(null,k,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(node));
var next = direction.call(null,node);
if(cljs.core._EQ_.call(null,current,last)){
return (new cljs.core.List(null,entry,null,(1),null));
} else {
return cljs.core.cons.call(null,entry,(new cljs.core.LazySeq(null,((function (vec__4738,k,node,entry,next){
return (function (){
return linked.map.visit_node.call(null,delegate_map,next,last,direction);
});})(vec__4738,k,node,entry,next))
,null,null)));
}
});
linked.map.seq_STAR_ = (function linked$map$seq_STAR_(this$){
var delegate_map = this$.delegate_map;
var head = this$.head;
var tail = cljs.core.get_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.seq.call(null,delegate_map)){
return linked.map.visit_node.call(null,delegate_map,head,tail,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return null;
}
});
linked.map.rseq_STAR_ = (function linked$map$rseq_STAR_(this$){
var delegate_map = this$.delegate_map;
var head = this$.head;
var tail = cljs.core.get_in.call(null,delegate_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new cljs.core.Keyword(null,"left","left",-399115937)], null));
if(cljs.core.seq.call(null,delegate_map)){
return linked.map.visit_node.call(null,delegate_map,tail,head,new cljs.core.Keyword(null,"left","left",-399115937));
} else {
return null;
}
});
linked.map.empty_linked_map = (new linked.map.LinkedMap(null,cljs.core.PersistentHashMap.EMPTY));
linked.map.__GT_linked_map = cljs.core.partial.call(null,cljs.core.into,linked.map.empty_linked_map);
cljs.reader.register_tag_parser_BANG_.call(null,"linked/map",linked.map.__GT_linked_map);
