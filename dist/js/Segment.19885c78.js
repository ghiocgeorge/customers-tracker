(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Segment"],{"103c":function(e,t,a){},"205b":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:"",id:"containerAll"}},[a("h1",[e._v("This is a Filter Contacts page with id "+e._s(e.id))]),a("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search for a contact","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{attrs:{headers:e.config,items:e.tableData,"items-per-page":5,search:e.search,"hide-default-footer":!0},scopedSlots:e._u([{key:"top",fn:function(e){var t=e.pagination,n=e.options,i=e.updateOptions;return[a("v-data-footer",{attrs:{pagination:t,options:n,"items-per-page-text":"Contacts per page:"},on:{"update:options":i}})]}}])})],1)},i=[],o=a("1f66"),r={props:["id"],components:{},data:function(){return{page:1,tableData:o["a"],pagination:{},search:"",config:[{value:"email",text:"Email"},{text:"Source"},{value:"familyName",text:"First Name"},{value:"givenName",text:"Last Name"},{value:"applicationStatus",text:"App Status"},{text:"Profile Status"},{value:"value",text:"Value"},{value:"mortgageRenewalDate",text:"Renewal Date",sortable:!1},{value:"referrer.familyName",text:"Referrer"},{text:"OPT-IN"}]}}},l=r,s=(a("390a"),a("2877")),c=a("6544"),u=a.n(c),p=a("a523"),f=a("f41f"),d=a("8fea"),m=a("8654"),v=Object(s["a"])(l,n,i,!1,null,null,null);t["default"]=v.exports;u()(v,{VContainer:p["a"],VDataFooter:f["a"],VDataTable:d["a"],VTextField:m["a"]})},"390a":function(e,t,a){"use strict";a("103c")}}]);
//# sourceMappingURL=Segment.19885c78.js.map