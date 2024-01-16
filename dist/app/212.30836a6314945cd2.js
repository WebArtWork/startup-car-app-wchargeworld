"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[212],{5212:(et,u,_)=>{_.r(u),_.d(u,{ConstructorModule:()=>tt});var h=_(7605),a=_(6814),d=_(95),t=_(4946),p=_(1883);let g=(()=>{class o{new(){return{sections:[]}}new_section(){return{folder:"",field:{},components:[]}}new_component(){return{folder:"",field:{}}}constructor(e,c,n){this.mongo=e,this.alert=c,this._http=n,this.templates=[],this.constructors=[],this._constructors={},this.constructors=e.get("constructor",{replace:{components:(i,s)=>{i||(i=[]);for(const r of i)r.field||(r.field={});s(i)},sections:(i,s)=>{i||(i=[]);for(const r of i){r.field||(r.field={}),r.components||(r.components=[]);for(const m of r.components)m.field||(m.field={})}s(i)},field:e.beObj}},(i,s)=>{this._constructors=s}),this._http.get("/api/constructor",i=>this.templates=i),setTimeout(()=>{console.log(this.templates)},1e3)}create(e=this.new(),c=(i=>{}),n="constructor has been created."){e._id?this.save(e):this.mongo.create("constructor",e,i=>{c(i),this.alert.show({text:n})})}doc(e){return this._constructors[e]||(this._constructors[e]=this.mongo.fetch("constructor",{query:{_id:e}})),this._constructors[e]}update(e,c=(i=>{}),n="constructor has been updated."){this.mongo.afterWhile(e,()=>{this.save(e,c,n)})}save(e,c=(i=>{}),n="constructor has been updated."){this.mongo.update("constructor",e,()=>{n&&this.alert.show({text:n,unique:e})})}delete(e,c=(i=>{}),n="constructor has been deleted."){this.mongo.delete("constructor",e,()=>{n&&this.alert.show({text:n})})}static#t=this.\u0275fac=function(c){return new(c||o)(t.LFG(p.rm),t.LFG(p.c9),t.LFG(p.OE))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var x=_(2812),f=_(6626);const C=["e_search"];function w(o,l){if(1&o&&(t.TgZ(0,"div",15),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Oqu(e.label)}}function v(o,l){1&o&&(t.TgZ(0,"div"),t._uU(1,"No values"),t.qZA())}function b(o,l){if(1&o&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&o){const e=l.$implicit,c=t.oxw(3);t.xp6(1),t.hij(" ",c._items[e][c.name]," ")}}function O(o,l){if(1&o&&(t.TgZ(0,"div",18),t.YNc(1,v,2,0,"div",19),t.YNc(2,b,2,1,"div",20),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e._values.length),t.xp6(1),t.Q6J("ngForOf",e._values)}}function M(o,l){if(1&o&&(t.TgZ(0,"div",18),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij(" ",e._selected||e.placeholder," ")}}function T(o,l){if(1&o&&(t.TgZ(0,"div",16),t.YNc(1,O,3,2,"div",17),t.YNc(2,M,2,1,"div",17),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.multiple),t.xp6(1),t.Q6J("ngIf",!e.multiple)}}function Z(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",27)(1,"input",28,29),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw(3);return t.KtG(i.search=n)}),t.qZA(),t.O4$(),t.TgZ(3,"svg",30),t._UZ(4,"path",31),t.qZA()()}if(2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngModel",e.search)}}function k(o,l){if(1&o&&(t.TgZ(0,"div"),t.GkF(1,9),t.YNc(2,Z,5,1,"ng-template",null,26,t.W1O),t.qZA()),2&o){const e=t.MAs(3),c=t.oxw(2);t.xp6(1),t.Q6J("ngTemplateOutlet",c.t_search?c.t_search:e)}}const P=function(o){return{item:o}};function J(o,l){if(1&o&&t.GkF(0,32),2&o){const e=l.$implicit;t.oxw();const c=t.MAs(8),n=t.oxw();t.Q6J("ngTemplateOutlet",n.t_item?n.t_item:c)("ngTemplateOutletContext",t.VKq(2,P,e))}}function y(o,l){1&o&&(t.TgZ(0,"div",33),t._uU(1," Nothing was found "),t.qZA())}function N(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div",34),t.NdJ("click",function(){const i=t.CHM(e).item,s=t.oxw(2);return t.KtG(s.item_onclick(i))}),t.TgZ(1,"div",35),t._uU(2),t.qZA()()}if(2&o){const e=l.item,c=t.oxw(2);t.ekj("disabled",-1!==c._values.indexOf(e.value)),t.xp6(1),t.ekj("selected",-1!==c._values.indexOf(e[c.value])),t.xp6(1),t.hij(" ",e.name," ")}}function $(o,l){if(1&o&&(t.O4$(),t.kcU(),t.TgZ(0,"div",21),t.YNc(1,k,4,1,"div",19),t.TgZ(2,"div",22),t.YNc(3,J,1,4,"ng-container",23),t.ALo(4,"search"),t.YNc(5,y,2,0,"div",24),t.ALo(6,"search"),t.qZA(),t.YNc(7,N,3,5,"ng-template",null,25,t.W1O),t.qZA()),2&o){const e=t.oxw();t.ekj("_search",e.searchable),t.xp6(1),t.Q6J("ngIf",e.searchable),t.xp6(2),t.Q6J("ngForOf",t.xi3(4,5,e.items,e.search)),t.xp6(2),t.Q6J("ngIf",!t.xi3(6,8,e.items,e.search).length)}}let A=(()=>{class o{constructor(){this.update=new t.vpe,this.placeholder="",this.items=[],this._items={},this.disabled=!1,this.name="name",this.value="_id",this.multiple=!1,this.label="",this.searchable=!1,this.modelChange=new t.vpe,this._values=[],this._names=[],this.select={},this.search=""}focus_search(){this.search="",this.searchable&&!this.t_search&&(this.e_search?this.e_search.nativeElement.focus():setTimeout(this.focus_search.bind(this),100))}ngOnInit(){for(let e=0;e<this.items.length;e++)"string"==typeof this.items[e]&&(this.items[e]={name:this.items[e]},this.items[e][this.value]=this.items[e].name),this._items[this.items[e][this.value]]=this.items[e];this._selected=this.multiple?0==this._names.length?this.placeholder:this._names.join(", "):this._items[this.select]?this._items[this.select][this.name]:this.select}item_onclick(e){this.multiple?(-1!=this._values.indexOf(e[this.value])?this._values.splice(this._values.indexOf(e[this.value]),1):this._values.push(e[this.value]),-1!=this._names.indexOf(e[this.name])?this._names.splice(this._names.indexOf(e[this.name]),1):this._names.push(e[this.name]),this._selected=0==this._names.length?this.placeholder:this._names.join(", "),this.modelChange.emit(this._values)):(this._selected=e[this.name],this.selectShow=!1,this.modelChange.emit(e[this.value]))}static#t=this.\u0275fac=function(c){return new(c||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["wselect"]],viewQuery:function(c,n){if(1&c&&t.Gf(C,5),2&c){let i;t.iGM(i=t.CRH())&&(n.e_search=i.first)}},inputs:{placeholder:"placeholder",items:"items",disabled:"disabled",name:"name",value:"value",multiple:"multiple",label:"label",searchable:"searchable",select:"select",t_view:["view","t_view"],t_item:["item","t_item"],t_search:["search","t_search"]},outputs:{update:"update",modelChange:"modelChange"},decls:17,vars:7,consts:[[1,"w-select",2,"color","black"],["class","w-select__label",4,"ngIf"],[1,"w-select__body",3,"clickOutside"],[1,"w-select__header",3,"click"],["width","20","height","20","viewBox","0 0 20 20","fill","none","xmlns","http://www.w3.org/2000/svg"],["clip-path","url(#clip0_137_2)"],["d","M5.0001 5C5.0001 3.84766 5.72332 2.85156 6.78581 2.30859V10H8.92867V1.875H11.0715V10H13.2144V2.30859C14.2769 2.85156 15.0001 3.84766 15.0001 5V10H17.143V5C17.143 2.23828 14.5849 0 11.4287 0H8.57153C5.41528 0 2.85724 2.23828 2.85724 5V10H5.0001V5ZM19.9242 13.3555L19.4465 12.1055C19.2501 11.5937 18.7055 11.25 18.0894 11.25H1.90635C1.29028 11.25 0.745637 11.5937 0.549208 12.1055L0.0715298 13.3555C-0.232042 14.1641 0.455458 15 1.42867 15V19.375C1.42867 19.7188 1.7501 20 2.14296 20H3.57153C3.96439 20 4.28582 19.7188 4.28582 19.375V15H15.7144V19.375C15.7144 19.7188 16.0358 20 16.4287 20H17.8572C18.2501 20 18.5715 19.7188 18.5715 19.375V15C19.5447 15 20.2322 14.1641 19.9242 13.3555Z","fill","#666666"],["id","clip0_137_2"],["width","20","height","20","fill","white"],[3,"ngTemplateOutlet"],["defaultView",""],[1,"w-select__arrow",3,"click"],["width","7","height","7","viewBox","0 0 7 7","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M3.50226 3.64385L1.31728 1.45897C1.20637 1.34795 1.07073 1.29257 0.910362 1.29257C0.750011 1.29257 0.61443 1.34797 0.50354 1.45897L0.166303 1.79609C0.0554449 1.90694 0 2.0426 0 2.2029C0 2.3632 0.0554449 2.4988 0.166303 2.60982L3.09309 5.54106C3.204 5.65198 3.33963 5.70744 3.50001 5.70744C3.66039 5.70744 3.79591 5.652 3.90686 5.54106L6.83365 2.60983C6.94455 2.49882 7 2.36324 7 2.20292C7 2.0426 6.94455 1.90695 6.83365 1.79611L6.49648 1.45898C6.38563 1.34797 6.25076 1.29258 6.09183 1.29258C5.93302 1.29258 5.79663 1.34798 5.68275 1.45898L3.50226 3.64385Z","fill","#717171"],["class","w-select__popup",3,"_search",4,"ngIf"],[1,"w-select__label"],[1,"w-select__text"],["class","text-overflow",4,"ngIf"],[1,"text-overflow"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"w-select__popup"],[1,"popup-block"],[3,"ngTemplateOutlet","ngTemplateOutletContext",4,"ngFor","ngForOf"],["class","popup-block__empty-search",4,"ngIf"],["defaultItem",""],["defaultSearch",""],[1,"w-select__search"],["type","search","placeholder","Search",1,"search-input",3,"ngModel","ngModelChange"],["e_search",""],["width","10","height","10","viewBox","0 0 10 10","fill","none","xmlns","http://www.w3.org/2000/svg",1,"search-icon"],["d","M9.68051 9.10842L7.3005 6.63308C7.91244 5.90563 8.24773 4.99035 8.24773 4.0375C8.24773 1.81126 6.43647 0 4.21023 0C1.98399 0 0.172737 1.81126 0.172737 4.0375C0.172737 6.26374 1.98399 8.07499 4.21023 8.07499C5.04599 8.07499 5.84243 7.82291 6.52337 7.34438L8.92146 9.8385C9.0217 9.9426 9.15652 10 9.30099 10C9.43774 10 9.56746 9.94786 9.66594 9.85307C9.87519 9.65172 9.88186 9.31784 9.68051 9.10842ZM4.21023 1.05326C5.85578 1.05326 7.19447 2.39195 7.19447 4.0375C7.19447 5.68304 5.85578 7.02173 4.21023 7.02173C2.56469 7.02173 1.226 5.68304 1.226 4.0375C1.226 2.39195 2.56469 1.05326 4.21023 1.05326Z","fill","#717171"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"popup-block__empty-search"],[1,"item",3,"click"],[1,"item__text"]],template:function(c,n){if(1&c&&(t.TgZ(0,"div",0),t.YNc(1,w,2,1,"div",1),t.TgZ(2,"div",2),t.NdJ("clickOutside",function(){return n.selectShow=!1}),t.TgZ(3,"div",3),t.NdJ("click",function(){return n.selectShow=!n.selectShow,n.focus_search()}),t.O4$(),t.TgZ(4,"svg",4)(5,"g",5),t._UZ(6,"path",6),t.qZA(),t.TgZ(7,"defs")(8,"clipPath",7),t._UZ(9,"rect",8),t.qZA()()(),t.kcU(),t.GkF(10,9),t.YNc(11,T,3,2,"ng-template",null,10,t.W1O),t.qZA(),t.TgZ(13,"div",11),t.NdJ("click",function(){return n.selectShow=!n.selectShow,n.focus_search()}),t.O4$(),t.TgZ(14,"svg",12),t._UZ(15,"path",13),t.qZA()(),t.YNc(16,$,9,11,"div",14),t.qZA()()),2&c){const i=t.MAs(12);t.xp6(1),t.Q6J("ngIf",n.label),t.xp6(1),t.ekj("_active",n.selectShow),t.xp6(8),t.Q6J("ngTemplateOutlet",n.t_view?n.t_view:i),t.xp6(3),t.ekj("_active",n.selectShow),t.xp6(3),t.Q6J("ngIf",n.selectShow)}},dependencies:[d.Fj,d.JJ,d.On,a.sg,a.O5,a.tP,p._k,p.Cf],styles:['[_nghost-%COMP%]{display:block}[_ngcontent-%COMP%]:root{--c-white: #fff;--c-black: #000;--c-grey: #e7e7e7;--c-grey-dark: #bfbfbf;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-warn: #e67e22;--c-error: #e74c3c;--c-error-hover: #d62c1a;--c-success: #14c76e;--c-info: #17a2b8;--container: 1210px;--b-radius: 8px;--b-radius-card: 10px;--b-radius-btn: 10px;--b-radius-img: 50%;--padding: 10px;--fs: 16px;--ff-bold: bold;--ff-base: "Poppins", sans-serif;--letter-spacing: .3px;--transition: .3s all ease-in-out}html.dark[_ngcontent-%COMP%]:root{--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}.w-select[_ngcontent-%COMP%]{width:100%}.w-select__label[_ngcontent-%COMP%]{margin-bottom:5px}.w-select__body[_ngcontent-%COMP%]{position:relative;cursor:pointer;display:flex;min-height:50px;height:50px;align-items:center;border:2px solid #173B59;border-radius:12px;transition:.3s all ease-in-out;background:#fff}.w-select__body._active[_ngcontent-%COMP%]{border-color:#3498db}@media screen and (max-width: 479px){.w-select__body[_ngcontent-%COMP%]{height:50px}}.w-select__header[_ngcontent-%COMP%]{display:flex;align-items:center;width:100%;overflow:hidden;white-space:nowrap;padding:14px 10px 14px 40px;color:#666;position:relative}.w-select__header[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;left:10px;top:50%;transform:translateY(-50%)}.w-select__text[_ngcontent-%COMP%]{margin-right:10px;flex-grow:1;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.w-select__text[_ngcontent-%COMP%]   .text-overflow[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;word-break:keep-all}.w-select__arrow[_ngcontent-%COMP%]{margin-right:15px;transition:.3s all ease-in-out;width:13px;min-width:13px;min-height:13px;height:13px;display:flex;align-items:center;justify-content:center;border-radius:50%}.w-select__arrow._active[_ngcontent-%COMP%]{transform:rotate(180deg)}.w-select[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{padding:10px;transition:.3s all ease-in-out;border-bottom:1px solid transparent}.w-select[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover{background:#f3f3f3;border-bottom:1px solid #1ac5eb;color:#1ac5eb}.w-select__popup[_ngcontent-%COMP%]{z-index:9;width:100%;left:0;position:absolute;top:calc(100% + 10px);background:#ffffff;box-shadow:0 0 4px #e5e5e5;border-radius:10px;border:2px solid #173B59;background:#f8f6f6;color:#666;padding-bottom:15px;padding-top:15px}.w-select__popup._search[_ngcontent-%COMP%]{padding-top:60px}.w-select__popup[_ngcontent-%COMP%]   .popup-block[_ngcontent-%COMP%]{max-height:180px;overflow-y:auto;padding:0 15px}.w-select__popup[_ngcontent-%COMP%]   .popup-block__empty-search[_ngcontent-%COMP%]{padding:15px;text-align:center;color:#717171}.w-select__popup[_ngcontent-%COMP%]   .popup-group[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.w-select__popup[_ngcontent-%COMP%]   .popup-group__title[_ngcontent-%COMP%]{font-size:12px;line-height:14px;color:#717171}.w-select__popup[_ngcontent-%COMP%]   .popup-group__item[_ngcontent-%COMP%]{margin-top:5px}.w-select__search[_ngcontent-%COMP%]{top:10px;position:absolute;display:flex;justify-content:center;align-items:center;width:100%;left:0;padding:0 15px}.w-select__search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]{outline:none;width:100%;cursor:pointer;display:flex;padding:10px 30px 10px 10px;align-items:center;border:1px solid #E5E5E5;border-radius:10px;transition:.3s all ease-in-out}.w-select__search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%]{position:absolute;top:50%;right:25px;transform:translateY(-50%)}.w-select[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px;height:5px;background-color:#fff}.w-select[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:10px;background-color:#e5e5e5}.w-select[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]{display:inline-flex;-webkit-user-select:none;user-select:none;cursor:pointer;padding:6px 8px;color:#333;border-radius:6px;overflow:hidden;transition:.3s all ease-in-out}.w-select[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]:not(:last-child){margin-right:6px}.w-select[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]:hover{background:rgba(52,152,219,.09)}.w-select[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]:hover   .checkbox__svg[_ngcontent-%COMP%]{border-color:#3498db}.w-select[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]{display:none}.w-select[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]:checked + .checkbox__body[_ngcontent-%COMP%]   .checkbox__svg[_ngcontent-%COMP%]{background:#3498DB;border-color:#3498db;animation:_ngcontent-%COMP%_wave .4s ease}.w-select[_ngcontent-%COMP%]   .checkbox__input[_ngcontent-%COMP%]:checked + .checkbox__body[_ngcontent-%COMP%]   .checkbox__svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{stroke-dashoffset:0}.w-select[_ngcontent-%COMP%]   .checkbox__svg[_ngcontent-%COMP%]{position:relative;min-width:18px;min-height:18px;width:18px;height:18px;display:inline-block;border-radius:4px;transform:scale(1);border:1px solid #E5E5E5;transition:.3s all ease-in-out;box-shadow:0 1px 1px #f3f3f3}.w-select[_ngcontent-%COMP%]   .checkbox__svg[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{position:absolute;top:3px;left:2px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;transition:all .3s ease;transition-delay:.1s;transform:translateZ(0)}.w-select[_ngcontent-%COMP%]   .checkbox__text[_ngcontent-%COMP%]{padding-left:8px;line-height:18px;text-overflow:ellipsis;overflow:hidden}.w-select[_ngcontent-%COMP%]   .checkbox__svg-icon[_ngcontent-%COMP%]{position:absolute;width:0;height:0;pointer-events:none;-webkit-user-select:none;user-select:none}@keyframes _ngcontent-%COMP%_wave{50%{transform:scale(.9)}}.selected[_ngcontent-%COMP%]{font-weight:700}']})}return o})();function F(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"winput",1),t.NdJ("wChange",function(n){const s=t.CHM(e).$implicit,r=t.oxw();return r.field[s.name]=n,t.KtG(r.update.emit())}),t.qZA()()}if(2&o){const e=l.$implicit,c=t.oxw();t.xp6(1),t.Q6J("placeholder","fill value for"+e.name)("value",c.field[e.name])("label",e.name)}}let Q=(()=>{class o{constructor(){this.update=new t.vpe}static#t=this.\u0275fac=function(c){return new(c||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["constructor-field"]],inputs:{field:"field",fields:"fields"},outputs:{update:"update"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"placeholder","value","label","wChange"]],template:function(c,n){1&c&&t.YNc(0,F,2,3,"div",0),2&c&&t.Q6J("ngForOf",n.fields)},dependencies:[a.sg,f.a]})}return o})();function S(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"wselect",9),t.NdJ("modelChange",function(n){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw();return i.template=n.name,t.KtG(s.cs.update(i))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw();t.Q6J("select",e.template)("items",c.cs.templates)}}function q(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"wselect",13),t.NdJ("modelChange",function(n){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw(2).$implicit,r=t.oxw();return i.folder=n.name,t.KtG(r.cs.update(s))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(2).$implicit,n=t.oxw();t.Q6J("items",n.template(c.template).components)("select",e.folder)}}function H(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"constructor-field",10),t.NdJ("update",function(){t.CHM(e);const n=t.oxw(3).$implicit,i=t.oxw();return t.KtG(i.cs.update(n))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(2).$implicit,n=t.oxw();t.Q6J("fields",n.templateComponent(c.template,e.folder).fields)("field",e.field)}}function Y(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,q,1,2,"wselect",11),t.YNc(2,H,1,2,"constructor-field",12),t.TgZ(3,"wbutton",0),t.NdJ("click",function(){const i=t.CHM(e).index,s=t.oxw(2).$implicit,r=t.oxw();return s.components.splice(i,1),t.KtG(r.cs.update(s))}),t._uU(4,"Delete component"),t.qZA()()}if(2&o){const e=l.$implicit,c=t.oxw(2).$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.template(c.template).components?null:n.template(c.template).components.length),t.xp6(1),t.Q6J("ngIf",e.folder&&n.templateComponent(c.template,e.folder))}}function G(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"wselect",15),t.NdJ("modelChange",function(n){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw(3).$implicit,r=t.oxw();return i.folder=n.name,t.KtG(r.cs.update(s))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(3).$implicit,n=t.oxw();t.Q6J("items",n.template(c.template).components)("select",e.folder)}}function I(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"constructor-field",10),t.NdJ("update",function(){t.CHM(e);const n=t.oxw(4).$implicit,i=t.oxw();return t.KtG(i.cs.update(n))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(3).$implicit,n=t.oxw();t.Q6J("fields",n.templateComponent(c.template,e.folder).fields)("field",e.field)}}function E(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,G,1,2,"wselect",14),t.YNc(2,I,1,2,"constructor-field",12),t.TgZ(3,"wbutton",0),t.NdJ("click",function(){const i=t.CHM(e).index,s=t.oxw().$implicit,r=t.oxw(2).$implicit,m=t.oxw();return s.components.splice(i,1),t.KtG(m.cs.update(r))}),t._uU(4,"Delete component"),t.qZA()()}if(2&o){const e=l.$implicit,c=t.oxw(3).$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",null==n.template(c.template).components?null:n.template(c.template).components.length),t.xp6(1),t.Q6J("ngIf",e.folder&&n.templateComponent(c.template,e.folder))}}function K(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"wselect",15),t.NdJ("modelChange",function(n){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw(2).$implicit,r=t.oxw();return i.folder=n.name,t.KtG(r.cs.update(s))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(2).$implicit,n=t.oxw();t.Q6J("items",n.template(c.template).sections)("select",e.folder)}}function U(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"constructor-field",10),t.NdJ("update",function(){t.CHM(e);const n=t.oxw(3).$implicit,i=t.oxw();return t.KtG(i.cs.update(n))}),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw(2).$implicit,n=t.oxw();t.Q6J("fields",n.templateSection(c.template,e.folder).fields)("field",e.field)}}function j(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.YNc(1,E,5,2,"div",1),t.YNc(2,K,1,2,"wselect",14),t.YNc(3,U,1,2,"constructor-field",12),t.TgZ(4,"wbutton",0),t.NdJ("click",function(){const i=t.CHM(e).index,s=t.oxw(2).$implicit,r=t.oxw();return s.sections.splice(i,1),t.KtG(r.cs.update(s))}),t._uU(5,"Delete section"),t.qZA()()}if(2&o){const e=l.$implicit,c=t.oxw(2).$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.components),t.xp6(1),t.Q6J("ngIf",null==n.template(c.template).sections?null:n.template(c.template).sections.length),t.xp6(1),t.Q6J("ngIf",e.folder&&n.templateSection(c.template,e.folder))}}function L(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"constructor-field",10),t.NdJ("update",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw();return t.KtG(i.cs.update(n))}),t.qZA(),t.TgZ(2,"wbutton",0),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw();return n.components.push(i.cs.new_component()),t.KtG(i.cs.update(n))}),t._uU(3," Add component "),t.qZA(),t.YNc(4,Y,5,2,"div",1),t.TgZ(5,"wbutton",0),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw();return n.sections.push(i.cs.new_section()),t.KtG(i.cs.update(n))}),t._uU(6,"Add section"),t.qZA(),t.YNc(7,j,6,3,"div",1),t.qZA()}if(2&o){const e=t.oxw().$implicit,c=t.oxw();t.xp6(1),t.Q6J("fields",c.template(e.template).fields)("field",e.field),t.xp6(3),t.Q6J("ngForOf",e.components),t.xp6(3),t.Q6J("ngForOf",e.sections)}}function V(o,l){if(1&o&&(t.TgZ(0,"a",16),t._uU(1,"Preview"),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("href",(e.domain.includes("localhost")?"http://":"https://")+e.domain+e.url,t.LSH)}}function B(o,l){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"winput",2),t.NdJ("wChange",function(n){const s=t.CHM(e).$implicit,r=t.oxw();return s.name=n,t.KtG(r.cs.update(s))}),t.qZA(),t.TgZ(2,"winput",3),t.NdJ("wChange",function(n){const s=t.CHM(e).$implicit,r=t.oxw();return s.domain=n,t.KtG(r.cs.update(s))}),t.qZA(),t.TgZ(3,"winput",4),t.NdJ("wChange",function(n){const s=t.CHM(e).$implicit,r=t.oxw();return s.url=n,t.KtG(r.cs.update(s))}),t.qZA(),t.TgZ(4,"winput",5),t.NdJ("wChange",function(n){const s=t.CHM(e).$implicit,r=t.oxw();return s.description=n,t.KtG(r.cs.update(s))}),t.qZA(),t.YNc(5,S,1,2,"wselect",6),t.YNc(6,L,8,4,"div",7),t.YNc(7,V,2,1,"a",8),t.TgZ(8,"wbutton",0),t.NdJ("click",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.cs.delete(i))}),t._uU(9,"Delete construction"),t.qZA()()}if(2&o){const e=l.$implicit,c=t.oxw();t.xp6(1),t.Q6J("value",e.name),t.xp6(1),t.Q6J("value",e.domain),t.xp6(1),t.Q6J("value",e.url),t.xp6(1),t.Q6J("value",e.description),t.xp6(1),t.Q6J("ngIf",c.cs.templates.length),t.xp6(1),t.Q6J("ngIf",e.template),t.xp6(1),t.Q6J("ngIf",e.domain&&e.url)}}let D=(()=>{class o{template(e){return this.cs.templates&&this.cs.templates[this.cs.templates?.map(c=>c.name).indexOf(e)]||{}}templateComponent(e,c){const n=this.template(e);return n.components&&n.components[n.components?.map(i=>i.name).indexOf(c)]||{}}templateSection(e,c){const n=this.template(e);return n.sections[n.sections.map(i=>i.folder).indexOf(c)]||{}}constructor(e){this.cs=e}static#t=this.\u0275fac=function(c){return new(c||o)(t.Y36(g))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["ng-component"]],decls:3,vars:1,consts:[[3,"click"],[4,"ngFor","ngForOf"],["placeholder","fill name of the constructor","label","Name",3,"value","wChange"],["placeholder","fill domain of the constructor","label","Domain",3,"value","wChange"],["placeholder","fill url of the constructor","label","Url",3,"value","wChange"],["placeholder","fill description of the constructor","label","Description",3,"value","wChange"],["placeholder","Select template","value","name",3,"select","items","modelChange",4,"ngIf"],[4,"ngIf"],["target","_blank",3,"href",4,"ngIf"],["placeholder","Select template","value","name",3,"select","items","modelChange"],[3,"fields","field","update"],["placeholder","Select component","value","name",3,"items","select","modelChange",4,"ngIf"],[3,"fields","field","update",4,"ngIf"],["placeholder","Select component","value","name",3,"items","select","modelChange"],["placeholder","Select section","value","name",3,"items","select","modelChange",4,"ngIf"],["placeholder","Select section","value","name",3,"items","select","modelChange"],["target","_blank",3,"href"]],template:function(c,n){1&c&&(t.TgZ(0,"wbutton",0),t.NdJ("click",function(){return n.cs.create()}),t._uU(1,"Create construction"),t.qZA(),t.YNc(2,B,10,7,"div",1)),2&c&&(t.xp6(2),t.Q6J("ngForOf",n.cs.constructors))},dependencies:[a.sg,a.O5,x.r,f.a,A,Q]})}return o})();var z=_(7793),W=_(9469),X=_(1534);const R=[{path:"",component:D}];let tt=(()=>{class o{static#t=this.\u0275fac=function(c){return new(c||o)};static#e=this.\u0275mod=t.oAB({type:o});static#n=this.\u0275inj=t.cJS({imports:[h.Bz.forChild(R),a.ez,z.h,d.u5,p.lj,W.g,X.A]})}return o})()}}]);