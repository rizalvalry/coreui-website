(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{aPNi:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return m}));var o=n("Valr"),i=n("KZaR"),r=n("DUip"),c=n("TYT/");function a(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"c-col",5),c["\u0275\u0275element"](1,"c-icon",6),c["\u0275\u0275elementStart"](2,"div"),c["\u0275\u0275text"](3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,o=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("name",n[0]),c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate"](o.toKebabCase(n[0]))}}var s=function(){function e(e,t){this.route=e,this.iconSet=t,this.title="CoreUI Icons",this.icons=[]}return e.prototype.ngOnInit=function(){var e=this.route.routeConfig.path,t="cil";"coreui-icons"===e?(this.title=this.title+" - Free",t="cil"):"brands"===e?(this.title=this.title+" - Brands",t="cib"):"flags"===e&&(this.title=this.title+" - Flags",t="cif"),this.icons=this.getIconsView(t)},e.prototype.toKebabCase=function(e){return e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase()},e.prototype.getIconsView=function(e){return Object.entries(this.iconSet.icons).filter((function(t){return t[0].startsWith(e)}))},e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](r.a),c["\u0275\u0275directiveInject"](i.t))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ng-component"]],decls:11,vars:2,consts:[[1,"fade-in"],["href","https://coreui.io/icons","rel","noreferrer noopener","target","_blank",1,"card-header-action"],[1,"text-muted"],[1,"text-center"],["class","mb-5","xs","6","sm","4","md","3","xl","2",4,"ngFor","ngForOf"],["xs","6","sm","4","md","3","xl","2",1,"mb-5"],["size","3xl",3,"name"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"c-card"),c["\u0275\u0275elementStart"](2,"c-card-header"),c["\u0275\u0275text"](3),c["\u0275\u0275elementStart"](4,"c-card-header-actions"),c["\u0275\u0275elementStart"](5,"a",1),c["\u0275\u0275elementStart"](6,"small",2),c["\u0275\u0275text"](7,"download"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"c-card-body"),c["\u0275\u0275elementStart"](9,"c-row",3),c["\u0275\u0275template"](10,a,4,2,"c-col",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate1"](" ",t.title," "),c["\u0275\u0275advance"](7),c["\u0275\u0275property"]("ngForOf",t.icons))},directives:[i.Kb,i.Ob,i.Pb,i.Lb,i.eb,o.n,i.fb,i.gb],encapsulation:2}),e}(),l=[{path:"",data:{title:"Icons"},children:[{path:"",redirectTo:"coreui-icons"},{path:"coreui-icons",component:s,data:{title:"CoreUI Icons"}},{path:"brands",component:s,data:{title:"Brands"}},{path:"flags",component:s,data:{title:"Flags"}}]}],d=function(){function e(){}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[r.g.forChild(l)],r.g]}),e}(),m=function(){function e(){}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[d,i.h,i.o,i.r,o.c]]}),e}()}}]);