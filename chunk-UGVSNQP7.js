import{b as B,c as J}from"./chunk-OUPSPUM6.js";import{Q as y,R as W,S as $,X as P,Z,fb as q,ga as Q,gb as H,hb as K,ua as G}from"./chunk-N7CYLKED.js";import{Hc as A,Ma as I,Mb as O,Nb as l,Ob as F,Pb as m,Qa as x,Rb as j,Uc as U,Xc as z,Yb as C,bc as g,cc as u,dc as _,ec as v,fc as w,ha as a,ma as N,mc as h,oa as D,pb as c,q as k,qb as r,rc as L,sc as R,tc as V,w as E,x as f,xb as M,yb as T,yc as b,zc as S}from"./chunk-RMUD5EVW.js";var se=["switchElement"];function re(i,s){i&1&&_(0,"nz-icon",3)}function ae(i,s){if(i&1&&(v(0),b(1),w()),i&2){let o=h(2);c(),S(o.nzCheckedChildren)}}function ce(i,s){if(i&1&&l(0,ae,2,1,"ng-container",6),i&2){let o=h();m("nzStringTemplateOutlet",o.nzCheckedChildren)}}function le(i,s){if(i&1&&(v(0),b(1),w()),i&2){let o=h(2);c(),S(o.nzUnCheckedChildren)}}function he(i,s){if(i&1&&l(0,le,2,1,"ng-container",6),i&2){let o=h();m("nzStringTemplateOutlet",o.nzUnCheckedChildren)}}var de="switch",me=(()=>{let i,s=[],o=[];return class p{static{let e=typeof Symbol=="function"&&Symbol.metadata?Object.create(null):void 0;i=[$()],E(null,null,i,{kind:"field",name:"nzSize",static:!1,private:!1,access:{has:t=>"nzSize"in t,get:t=>t.nzSize,set:(t,n)=>{t.nzSize=n}},metadata:e},s,o),e&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:e})}updateValue(e){this.isChecked!==e&&(this.isChecked=e,this.onChange(this.isChecked))}focus(){this.focusMonitor.focusVia(this.switchElement.nativeElement,"keyboard")}blur(){this.switchElement.nativeElement.blur()}constructor(e,t,n,d,Y,ee){this.nzConfigService=e,this.host=t,this.ngZone=n,this.cdr=d,this.focusMonitor=Y,this.directionality=ee,this._nzModuleName=de,this.isChecked=!1,this.onChange=()=>{},this.onTouched=()=>{},this.nzLoading=!1,this.nzDisabled=!1,this.nzControl=!1,this.nzCheckedChildren=null,this.nzUnCheckedChildren=null,this.nzSize=f(this,s,"default"),this.nzId=(f(this,o),null),this.dir="ltr",this.destroy$=new k,this.isNzDisableFirstChange=!0}ngOnInit(){this.directionality.change.pipe(a(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.dir=this.directionality.value,y(this.host.nativeElement,"click").pipe(a(this.destroy$)).subscribe(e=>{e.preventDefault(),!(this.nzControl||this.nzDisabled||this.nzLoading)&&this.ngZone.run(()=>{this.updateValue(!this.isChecked),this.cdr.markForCheck()})}),y(this.switchElement.nativeElement,"keydown").pipe(a(this.destroy$)).subscribe(e=>{if(this.nzControl||this.nzDisabled||this.nzLoading)return;let{keyCode:t}=e;t!==37&&t!==39&&t!==32&&t!==13||(e.preventDefault(),this.ngZone.run(()=>{t===37?this.updateValue(!1):t===39?this.updateValue(!0):(t===32||t===13)&&this.updateValue(!this.isChecked),this.cdr.markForCheck()}))})}ngAfterViewInit(){this.focusMonitor.monitor(this.switchElement.nativeElement,!0).pipe(a(this.destroy$)).subscribe(e=>{e||Promise.resolve().then(()=>this.onTouched())})}ngOnDestroy(){this.focusMonitor.stopMonitoring(this.switchElement.nativeElement),this.destroy$.next(),this.destroy$.complete()}writeValue(e){this.isChecked=e,this.cdr.markForCheck()}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this.nzDisabled=this.isNzDisableFirstChange&&this.nzDisabled||e,this.isNzDisableFirstChange=!1,this.cdr.markForCheck()}static{this.\u0275fac=function(t){return new(t||p)(r(W),r(x),r(I),r(U),r(G),r(Q))}}static{this.\u0275cmp=M({type:p,selectors:[["nz-switch"]],viewQuery:function(t,n){if(t&1&&L(se,7),t&2){let d;R(d=V())&&(n.switchElement=d.first)}},inputs:{nzLoading:[2,"nzLoading","nzLoading",z],nzDisabled:[2,"nzDisabled","nzDisabled",z],nzControl:[2,"nzControl","nzControl",z],nzCheckedChildren:"nzCheckedChildren",nzUnCheckedChildren:"nzUnCheckedChildren",nzSize:"nzSize",nzId:"nzId"},exportAs:["nzSwitch"],features:[A([{provide:K,useExisting:N(()=>p),multi:!0}]),O],decls:8,vars:15,consts:[["switchElement",""],["nz-wave","","type","button",1,"ant-switch",3,"disabled","nzWaveExtraNode"],[1,"ant-switch-handle"],["nzType","loading",1,"ant-switch-loading-icon"],[1,"ant-switch-inner"],[1,"ant-click-animating-node"],[4,"nzStringTemplateOutlet"]],template:function(t,n){t&1&&(g(0,"button",1,0)(2,"span",2),l(3,re,1,0,"nz-icon",3),u(),g(4,"span",4),l(5,ce,1,1,"ng-container")(6,he,1,1,"ng-container"),u(),_(7,"div",5),u()),t&2&&(j("ant-switch-checked",n.isChecked)("ant-switch-loading",n.nzLoading)("ant-switch-disabled",n.nzDisabled)("ant-switch-small",n.nzSize==="small")("ant-switch-rtl",n.dir==="rtl"),m("disabled",n.nzDisabled)("nzWaveExtraNode",!0),F("id",n.nzId),c(3),C(n.nzLoading?3:-1),c(2),C(n.isChecked?5:6))},dependencies:[J,B,Z,P,H,q],encapsulation:2,changeDetection:0})}}})(),Le=(()=>{class i{static{this.\u0275fac=function(X){return new(X||i)}}static{this.\u0275mod=T({type:i})}static{this.\u0275inj=D({imports:[me]})}}return i})();export{me as a,Le as b};
