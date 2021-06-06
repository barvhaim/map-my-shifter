(this["webpackJsonpmap-my-shifter"]=this["webpackJsonpmap-my-shifter"]||[]).push([[0],{39:function(e,a,t){e.exports={tile__btn:"welcome_tile__btn__1S4p7"}},54:function(e,a,t){e.exports=t(68)},59:function(e,a,t){},64:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(28),l=t.n(i),c=(t(59),t(16)),m=t(7),o=t(6),s=t(86),u=(t(64),t(72)),d=t(73),p=t(74),_=t(75),f=t(76),E=function(){return r.a.createElement(u.a,{"aria-label":"Carbon Tutorial"},r.a.createElement(d.a,null),r.a.createElement(p.a,{element:c.b,to:"/",prefix:"MAP"},"My Shifter"),r.a.createElement(_.a,{"aria-label":"Side navigation"},r.a.createElement(f.a,{element:c.b,to:"/from_stix"},"From STIX"),r.a.createElement(f.a,{element:c.b,to:"/to_stix"},"To STIX"),r.a.createElement(f.a,{element:c.b,to:"/about"},"About")))},b=t(77),g=t(39),v=t.n(g),y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bx--grid"},r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("p",null,"This tool is used for generating mapping file for `STIX-Shifter` project"))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col-sm-2"},r.a.createElement(c.b,{to:"/from_stix"},r.a.createElement(b.a,{className:v.a.tile__btn},'Generate "From STIX" File'))),r.a.createElement("div",{className:"bx--col-sm-2"},r.a.createElement(c.b,{to:"/to_stix"},r.a.createElement(b.a,{className:v.a.tile__btn},'Generate "To STIX" File'))))))},h=t(69),x=t(8),N=t.n(x);var j=t(78),O=function(e){var a=e.title,t=e.type,n=e.items,i=Object(o.b)();return r.a.createElement(j.a,{title:a},r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("li",{key:e.name,onClick:function(){i(function(e,a){return{type:"ADD_FIELD",payload:{type:e,key:a}}}(t,e.name))},className:N.a.field__item},e.name," ",e.required?"(*)":"")}))))},q=t(90),S=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.fromStix.fieldSearch}));return r.a.createElement(q.a,{light:!0,labelText:"search",size:"sm",value:a,onChange:function(a){e({type:"UPDATE_SEARCH_FIELD_VALUE",payload:{value:a.target.value}})},placeHolderText:"Search field\u2026"})},w=function(){var e=Object(o.c)((function(e){return e.fromStix.stixFields}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("h4",{className:"section-title"},"Select Fields"))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col ".concat(N.a.full_height__col," ").concat(N.a.add_fields__col)},r.a.createElement(S,null),r.a.createElement(h.a,null,e.map((function(e){return r.a.createElement(O,{key:e.title,title:e.title,type:e.type,items:e.items})}))))))},A=t(88),T=t(80),I=t(47),L=t(82),F=function(e){var a=e.title,t=Object(o.c)((function(e){return e.fromStix.mapping[a]})),n=Object(o.b)();return r.a.createElement("li",{className:N.a.mapping__item},r.a.createElement("div",{className:"bx--row",style:{marginBottom:".5rem"}},r.a.createElement("div",{className:"bx--col-sm-3"},r.a.createElement("h1",{className:N.a.mapping_item__title},a)),r.a.createElement("div",{className:"bx--col-sm-1 ".concat(N.a.mapping_item__btn_top)},r.a.createElement(T.a,{className:"".concat(N.a.mapping_item__btn),style:{border:"1px solid #000000",marginRight:".5rem"},onClick:function(){n({type:"ADD_VALUE",payload:{field:a}})}}),r.a.createElement(I.d,{className:"".concat(N.a.mapping_item__btn),style:{border:"1px solid #000000"},onClick:function(){n({type:"DELETE_FIELD",payload:{field:a}})}}))),t.length>0?t.map((function(e){return r.a.createElement("div",{key:"".concat(a,"_").concat(e.id),className:"bx--row",style:{marginBottom:"1rem"}},r.a.createElement("div",{className:"bx--col-sm-3"},r.a.createElement(A.a,{id:"".concat(a,"_").concat(e.id),labelText:"",autoComplete:"off",value:e.value,onChange:function(t){var r,i,l;n((r=a,i=e.id,l=t.target.value,{type:"UPDATE_VALUE",payload:{field:r,id:i,value:l}}))}})),r.a.createElement("div",{className:"bx--col-sm-1",style:{margin:"auto"}},r.a.createElement(L.a,{className:"".concat(N.a.mapping_item__btn),onClick:function(){var t,r;n((t=a,r=e.id,{type:"DELETE_VALUE",payload:{field:t,id:r}}))}})))})):r.a.createElement("div",{className:N.a.mapping__item_empty},"Use the [+] button to add values."))},D=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.fromStix.fieldMappingFilter}));return r.a.createElement(A.a,{light:!0,value:a,onChange:function(a){e({type:"UPDATE_MAPPINGS_FILTER_FIELD_VALUE",payload:{value:a.target.value}})},labelText:"",id:"mappings-filter-input",placeholder:"Filter field\u2026"})},C=t(42),k=t(89);function P(e){return function(e){var a={};return e?(Object.keys(e).forEach((function(t){if("fields"in e[t]){var n=e[t].fields;Object.keys(n).forEach((function(e){a["".concat(t,":").concat(e)]=n[e].map((function(e){return{value:e,id:Object(k.a)()}}))}))}})),a):a}(e)}function U(e,a){if(!a||""===a)return e;var t=a.toLowerCase(),n=e.filter((function(e){return e.title.toLowerCase().includes(t)||e.type.includes(t)}));return n=n.filter((function(e){return e.items.length>0}))}var M=function(){var e=Object(o.b)(),a=Object(o.c)((function(e){return e.fromStix.mapping})),t=Object(o.c)((function(e){return e.fromStix.fieldMappingFilter}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("h4",{className:"section-title"},Object.keys(a).length," Total Fields"," ",r.a.createElement("span",{onClick:function(){e({type:"CLEAR_MAPPINGS"})},className:N.a.mappings_clear__btn},"(Clear)")))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement(D,null))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col ".concat(N.a.full_height__col," ").concat(N.a.mapping__col)},r.a.createElement("ul",null,Object.keys(function(e,a){if(!a||""===a)return e;var t=a.toLowerCase();return Object.keys(e).filter((function(e){return e.toLowerCase().includes(t)})).reduce((function(a,t){return a[t]=e[t],a}),{})}(a,t)).map((function(e){return r.a.createElement(F,{key:e,title:e})}))))))},X=t(43),R=t(83),V=t(79),B=function(){var e=Object(n.useState)(""),a=Object(X.a)(e,2),t=a[0],i=a[1],l=Object(o.c)((function(e){return e.fromStix.mapping}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("h4",{className:"section-title"},"Save Configuration"))),r.a.createElement("div",{className:"bx--row",style:{marginBottom:".75rem"}},r.a.createElement("div",{className:"bx--col ".concat(N.a.export__col)},r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement(A.a,{autoComplete:"off",id:"export-filename",labelText:"Filename",value:t,onChange:function(e){i(e.target.value)}}))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col",style:{textAlign:"right"}},r.a.createElement(R.a,{disabled:0===t.length,renderIcon:V.a,onClick:function(){!function(e,a){var t=new Blob([JSON.stringify(a,null,2)],{type:"application/json"});Object(C.saveAs)(t,e)}("".concat(t,".json"),function(e){var a={};return Object.keys(e).forEach((function(t){var n=t.split(":")[0],r=t.split(":")[1];n in a||(a[n]={fields:{}}),a[n].fields[r]=e[t].map((function(e){return e.value}))})),a}(l))}},"Save"))))))},G=t(87),H=function(){var e=Object(o.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("h4",{className:"section-title"},"Load Configuration"))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col ".concat(N.a.import__col)},r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement(G.a,{accept:[".json"],buttonKind:"primary",buttonLabel:"Load file",filenameStatus:"edit",multiple:!1,onDelete:function(){e({type:"CLEAR_MAPPINGS"})},onChange:function(a){var t=new FileReader;t.onload=function(a){if(a&&"target"in a&&"result"in a.target){var t=P(JSON.parse(a.target.result));e(function(e){return{type:"UPDATE_MAPPINGS_FROM_FILE",payload:{mappings:e}}}(t))}},t.readAsText(a.target.files[0])},iconDescription:"Clear file",labelDescription:"Select configuration .json file",labelTitle:""}))))))},J=function(){return r.a.createElement("div",{className:"bx--grid"},r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("h1",{className:"page-title"},"From STIX"))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col-sm-1"},r.a.createElement(w,null)),r.a.createElement("div",{className:"bx--col-sm-2"},r.a.createElement(M,null)),r.a.createElement("div",{className:"bx--col-sm-1"},r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col-sm-4"},r.a.createElement(B,null))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col-sm-4"},r.a.createElement(H,null))))))},z=function(){return r.a.createElement("h1",null,"TO stix page ")},W=t(84),K=t(85),Q=(t(67),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement("img",{src:"https://user-images.githubusercontent.com/16198896/114301821-0653e000-9acf-11eb-923d-baeec7ba80dc.png",alt:"logo"}),r.a.createElement("h4",null,"STIX-Shifter Connector's Mapping Builder"))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col"},r.a.createElement(h.a,{align:"start"},r.a.createElement(j.a,{title:"Introduction",open:!0},r.a.createElement("p",null,"The map-my-shifter (MMS) project provides a visual way for building mapping files for"," ",r.a.createElement("a",{href:"https://github.com/opencybersecurityalliance/stix-shifter"},"STIX-Shifter")," ","project."),r.a.createElement(W.a,null,r.a.createElement(K.a,null,"From STIX pattern mapping - When building the data source query from STIX query, the STIX fields, for examples `file:name`, is mapped to the target data source's field.",r.a.createElement("a",{href:"https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-2-edit-the-from_stix_map-json-files"},"Read more...")),r.a.createElement(K.a,null,"To STIX object mapping - When results object is back from the data source, this object should be displayed in the final results as STIX object. For examples ","{",'"filename": "xxxxx"} should be translated to STIX object of type `file`.',r.a.createElement("a",{href:"https://github.com/opencybersecurityalliance/stix-shifter/blob/master/adapter-guide/develop-translation-module.md#step-4-edit-the-to_stix_map-json-file"},"Read more...")))),r.a.createElement(j.a,{title:"Use-cases",open:!0},r.a.createElement(W.a,null,r.a.createElement(K.a,null,"Create mapping file from scratch."),r.a.createElement(K.a,null,"Load existing mapping file, edit the file and save it to a new file"))),r.a.createElement(j.a,{title:"Authors",open:!0},r.a.createElement(W.a,null,r.a.createElement(K.a,null,r.a.createElement("a",{href:"https://github.com/barvhaim"},"Bar Haim")),r.a.createElement(K.a,null,r.a.createElement("a",{href:"https://github.com/idohersko"},"Ido Hersko")))),r.a.createElement(j.a,{title:"Licensing",open:!0},r.a.createElement("p",null,"map-my-shifter is licensed under the Apache License, Version 2.0. See"," ",r.a.createElement("a",{href:"https://github.com/barvhaim/map-my-shifter/blob/master/LICENSE"},"LICENSE")," ","for the full license text."))))),r.a.createElement("div",{className:"bx--row"},r.a.createElement("div",{className:"bx--col footer"},r.a.createElement("p",null,"Built with ",r.a.createElement("span",{className:"heart"},"\u2764")," from"," ",r.a.createElement("a",{href:"https://www.research.ibm.com/haifa/ccoe/"},"IBM Cyber Security Center of Excellence (CCoE)")))))}),Y=t(23),Z=t(44),$=t(46),ee=t(45),ae=t(22),te=t(4),ne=[{title:"Artifact",type:"artifact",items:[{name:"mime_type",required:!1},{name:"payload_bin",required:!1},{name:"url",required:!1},{name:"hashes",required:!1}]},{title:"AS",type:"autonomous-system",items:[{name:"number",required:!0},{name:"name",required:!1},{name:"rir",required:!1}]},{title:"Directory",type:"directory",items:[{name:"path",required:!0},{name:"path_enc",required:!1},{name:"created",required:!1},{name:"modified",required:!1},{name:"accessed",required:!1}]},{title:"Domain Name",type:"domain-name",items:[{name:"value",required:!0}]},{title:"Email Address",type:"email-addr",items:[{name:"value",required:!0},{name:"display_name",required:!1}]},{title:"Email Message",type:"email-message",items:[{name:"is_multipart",required:!0},{name:"date",required:!1},{name:"content_type",required:!1},{name:"subject",required:!1},{name:"body",required:!1}]},{title:"File",type:"file",items:[{name:"hashes",required:!1},{name:"size",required:!1},{name:"name",required:!1},{name:"name_enc",required:!1},{name:"magic_number_hex",required:!1},{name:"mime_type",required:!1},{name:"created",required:!1},{name:"modified",required:!1},{name:"accessed",required:!1},{name:"parent_directory_ref",required:!1},{name:"is_encrypted",required:!1}]},{title:"IPv4 Address",type:"ipv4-addr",items:[{name:"value",required:!0}]},{title:"IPv6 Address",type:"ipv6-addr",items:[{name:"value",required:!0}]},{title:"MAC Address",type:"mac-addr",items:[{name:"value",required:!0}]},{title:"Network Traffic",type:"network-traffic",items:[{name:"src_ref",required:!1},{name:"dst_ref",required:!1},{name:"src_port",required:!1},{name:"dst_port",required:!1},{name:"protocols",required:!1}]},{title:"Process",type:"process",items:[{name:"pid",required:!1},{name:"name",required:!1},{name:"created",required:!1},{name:"command_line",required:!1},{name:"opened_connection_refs",required:!1},{name:"creator_user_ref",required:!1},{name:"binary_ref",required:!1},{name:"parent_ref",required:!1}]},{title:"Software",type:"software",items:[{name:"name",required:!0},{name:"cpe",required:!1},{name:"vendor",required:!1},{name:"version",required:!1}]},{title:"URL",type:"url",items:[{name:"value",required:!0}]},{title:"User Account",type:"user-account",items:[{name:"user_id",required:!0},{name:"account_login",required:!1},{name:"account_type",required:!1},{name:"display_name",required:!1},{name:"is_service_account",required:!1},{name:"is_privileged",required:!1},{name:"is_disabled",required:!1}]},{title:"Windows\u2122 Registry Key",type:"windows-registry-key",items:[{name:"key",required:!0},{name:"values",required:!1},{name:"modified",required:!1},{name:"creator_user_ref",required:!1},{name:"number_of_subkeys",required:!1}]}],re={mapping:{},stixFields:ne,fieldSearch:"",fieldMappingFilter:""},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_FIELD":var t="".concat(a.payload.type,":").concat(a.payload.key);return Object(te.a)(Object(te.a)({},e),{},{mapping:Object(te.a)(Object(te.a)({},e.mapping),{},Object(ae.a)({},t,[]))});case"DELETE_FIELD":if(a.payload.field in e.mapping){var n=e.mapping,r=a.payload.field,i=(n[r],Object($.a)(n,[r].map(ee.a)));return Object(te.a)(Object(te.a)({},e),{},{mapping:i})}return e;case"ADD_VALUE":return a.payload.field in e.mapping?Object(te.a)(Object(te.a)({},e),{},{mapping:Object(te.a)(Object(te.a)({},e.mapping),{},Object(ae.a)({},a.payload.field,[].concat(Object(Z.a)(e.mapping[a.payload.field]),[{value:"",id:Object(k.a)()}])))}):e;case"DELETE_VALUE":return a.payload.field in e.mapping?Object(te.a)(Object(te.a)({},e),{},{mapping:Object(te.a)(Object(te.a)({},e.mapping),{},Object(ae.a)({},a.payload.field,e.mapping[a.payload.field].filter((function(e){return e.id!==a.payload.id}))))}):e;case"UPDATE_VALUE":return a.payload.field in e.mapping?Object(te.a)(Object(te.a)({},e),{},{mapping:Object(te.a)(Object(te.a)({},e.mapping),{},Object(ae.a)({},a.payload.field,e.mapping[a.payload.field].map((function(e){return e.id===a.payload.id?Object(te.a)(Object(te.a)({},e),{},{value:a.payload.value}):e}))))}):e;case"UPDATE_SEARCH_FIELD_VALUE":return Object(te.a)(Object(te.a)({},e),{},{fieldSearch:a.payload.value,stixFields:U(ne,a.payload.value)});case"UPDATE_MAPPINGS_FILTER_FIELD_VALUE":return Object(te.a)(Object(te.a)({},e),{},{fieldMappingFilter:a.payload.value});case"UPDATE_MAPPINGS_FROM_FILE":return Object(te.a)(Object(te.a)({},e),{},{mapping:a.payload.mappings});case"CLEAR_MAPPINGS":return Object(te.a)(Object(te.a)({},e),{},{mapping:{}});default:return e}},le=Object(Y.b)({fromStix:ie}),ce=Object(Y.c)(le,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());var me=function(){return r.a.createElement(o.a,{store:ce},r.a.createElement(c.a,null,r.a.createElement(E,null),r.a.createElement(s.a,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/from_stix"},r.a.createElement(J,null)),r.a.createElement(m.a,{path:"/to_stix"},r.a.createElement(z,null)),r.a.createElement(m.a,{path:"/about"},r.a.createElement(Q,null)),r.a.createElement(m.a,{path:"/"},r.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports={full_height__col:"from_stix_full_height__col__1eQ-_",add_fields__col:"from_stix_add_fields__col__zcGEM",field__item:"from_stix_field__item__1A6Jc",mappings_clear__btn:"from_stix_mappings_clear__btn__2uZYz",mapping__col:"from_stix_mapping__col__2hj1M",mapping__item:"from_stix_mapping__item__2zbU-",mapping__item_empty:"from_stix_mapping__item_empty__2ASue",mapping_item__title:"from_stix_mapping_item__title__3lf6b",mapping_item__btn:"from_stix_mapping_item__btn__2F3K3",mapping_item__btn_top:"from_stix_mapping_item__btn_top__1uHP6",export__col:"from_stix_export__col__eJkaX",import__col:"from_stix_import__col__-Iooq"}}},[[54,1,2]]]);
//# sourceMappingURL=main.546387d8.chunk.js.map