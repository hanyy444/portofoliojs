import{r as i,l as T,g as C,a as V,s as j,c as y,u as F,b as O,_ as S,j as b,d as k,e as L,R as N}from"./index-7d67269f.js";function J(e){return e&&e.ownerDocument||document}function P(e,t){typeof e=="function"?e(t):e&&(e.current=t)}function Q(e){const t=i.useRef(e);return T(()=>{t.current=e}),i.useCallback((...n)=>(0,t.current)(...n),[])}function Y(...e){return i.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{P(n,t)})},e)}let v=!0,x=!1,R;const A={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function B(e){const{type:t,tagName:n}=e;return!!(n==="INPUT"&&A[t]&&!e.readOnly||n==="TEXTAREA"&&!e.readOnly||e.isContentEditable)}function M(e){e.metaKey||e.altKey||e.ctrlKey||(v=!0)}function g(){v=!1}function D(){this.visibilityState==="hidden"&&x&&(v=!0)}function K(e){e.addEventListener("keydown",M,!0),e.addEventListener("mousedown",g,!0),e.addEventListener("pointerdown",g,!0),e.addEventListener("touchstart",g,!0),e.addEventListener("visibilitychange",D,!0)}function U(e){const{target:t}=e;try{return t.matches(":focus-visible")}catch{}return v||B(t)}function Z(){const e=i.useCallback(o=>{o!=null&&K(o.ownerDocument)},[]),t=i.useRef(!1);function n(){return t.current?(x=!0,window.clearTimeout(R),R=window.setTimeout(()=>{x=!1},100),t.current=!1,!0):!1}function r(o){return U(o)?(t.current=!0,!0):!1}return{isFocusVisibleRef:t,onFocus:r,onBlur:n,ref:e}}function W(e){return C("MuiSvgIcon",e)}V("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const G=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],X=e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root",t!=="inherit"&&`color${y(t)}`,`fontSize${y(n)}`]};return L(o,W,r)},q=j("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.color!=="inherit"&&t[`color${y(n.color)}`],t[`fontSize${y(n.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var n,r,o,f,m,u,h,d,p,l,a,c,s;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(n=e.transitions)==null||(r=n.create)==null?void 0:r.call(n,"fill",{duration:(o=e.transitions)==null||(o=o.duration)==null?void 0:o.shorter}),fontSize:{inherit:"inherit",small:((f=e.typography)==null||(m=f.pxToRem)==null?void 0:m.call(f,20))||"1.25rem",medium:((u=e.typography)==null||(h=u.pxToRem)==null?void 0:h.call(u,24))||"1.5rem",large:((d=e.typography)==null||(p=d.pxToRem)==null?void 0:p.call(d,35))||"2.1875rem"}[t.fontSize],color:(l=(a=(e.vars||e).palette)==null||(a=a[t.color])==null?void 0:a.main)!=null?l:{action:(c=(e.vars||e).palette)==null||(c=c.action)==null?void 0:c.active,disabled:(s=(e.vars||e).palette)==null||(s=s.action)==null?void 0:s.disabled,inherit:void 0}[t.color]}}),z=i.forwardRef(function(t,n){const r=F({props:t,name:"MuiSvgIcon"}),{children:o,className:f,color:m="inherit",component:u="svg",fontSize:h="medium",htmlColor:d,inheritViewBox:p=!1,titleAccess:l,viewBox:a="0 0 24 24"}=r,c=O(r,G),s=i.isValidElement(o)&&o.type==="svg",w=S({},r,{color:m,component:u,fontSize:h,instanceFontSize:t.fontSize,inheritViewBox:p,viewBox:a,hasSvgAsChild:s}),$={};p||($.viewBox=a);const I=X(w);return b.jsxs(q,S({as:u,className:k(I.root,f),focusable:"false",color:d,"aria-hidden":l?void 0:!0,role:l?"img":void 0,ref:n},$,c,s&&o.props,{ownerState:w,children:[s?o.props.children:o,l?b.jsx("title",{children:l}):null]}))});z.muiName="SvgIcon";const E=z;function ee(e,t){function n(r,o){return b.jsx(E,S({"data-testid":`${t}Icon`,ref:o},r,{children:e}))}return n.muiName=E.muiName,i.memo(i.forwardRef(n))}function _(e,t){return _=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,o){return r.__proto__=o,r},_(e,t)}function te(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,_(e,t)}const ne=N.createContext(null);export{ne as T,te as _,Q as a,Z as b,ee as c,J as o,P as s,Y as u};
