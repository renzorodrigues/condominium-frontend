(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{420:function(t,n,e){"use strict";e.d(n,"a",(function(){return c})),e.d(n,"b",(function(){return v})),e.d(n,"c",(function(){return d})),e.d(n,"d",(function(){return l}));var r=e(422),o=e(1),c=Object(o.i)("v-card__actions"),v=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),l=Object(o.i)("v-card__title");r.a},500:function(t,n,e){"use strict";e.r(n);var r={props:{condominium:{type:Object,required:!0}},data:function(){return{items:[{text:"Configuração",icon:"mdi-cogs"},{text:"Excluir",icon:"mdi-trash-can",color:"error"}]}}},o=e(92),c=e(93),v=e.n(c),d=e(403),l=e(422),m=e(420),_=e(186),f=e(159),x=e(187),V=e(122),h=e(71),w=e(106),C=e(505),j=e(417),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-card",{staticClass:"mx-auto",attrs:{"max-width":"344"}},[e("v-img",{attrs:{src:"https://images.unsplash.com/photo-1616474655260-de945dff1b31?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",height:"200px"}}),t._v(" "),e("v-card-title",[t._v(" "+t._s(t.condominium.name)+" ")]),t._v(" "),e("v-card-subtitle",[t._v(" "+t._s(t.condominium.address.district)+" ")]),t._v(" "),e("v-card-actions",[e("v-btn",{attrs:{color:"orange lighten-2",text:""}},[t._v(" Explore ")]),t._v(" "),e("v-spacer"),t._v(" "),e("v-menu",{attrs:{bottom:"",left:""},scopedSlots:t._u([{key:"activator",fn:function(n){var r=n.on,o=n.attrs;return[e("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[e("v-icon",[t._v("mdi-dots-vertical")])],1)]}}])},[t._v(" "),e("v-list",{attrs:{nav:"",dense:""}},[e("v-list-item",{attrs:{link:""},on:{click:function(n){return t.$router.push({path:"/admin/condominiums/"+t.condominium.id})}}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-cogs")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{attrs:{link:""}},[t._v("Configuração")])],1)],1),t._v(" "),e("v-list-item",{attrs:{link:""}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-delete")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v("Excluir")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports;v()(component,{VBtn:d.a,VCard:l.a,VCardActions:m.a,VCardSubtitle:m.b,VCardTitle:m.d,VIcon:_.a,VImg:f.a,VList:x.a,VListItem:V.a,VListItemContent:h.a,VListItemIcon:w.a,VListItemTitle:h.b,VMenu:C.a,VSpacer:j.a})}}]);