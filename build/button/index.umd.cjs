(function(e,t){typeof exports=="object"&&typeof module<"u"?t(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],t):(e=typeof globalThis<"u"?globalThis:e||self,t(e.index={},e.vue))})(this,function(e,t){"use strict";const d={type:{type:String,default:"secondary"},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},n=t.defineComponent({name:"SButton",props:d,setup(o,{slots:u}){const{type:i,size:l,disabled:a}=t.toRefs(o);return()=>{const f=u.default?u.default():"按钮";return t.createVNode("button",{class:`s-btn s-btn--${i.value} s-btn--${l.value}`,disabled:a.value},[f])}}}),s={install(o){o.component(n.name,n)}};e.Button=n,e.default=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});