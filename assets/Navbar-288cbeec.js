import{g as V,a as H,s as j,c as y,_ as c,r as m,u as U,b as A,j as i,d as B,e as Y,f as O,h as sr,B as lr,S as Q,i as cr}from"./index-cd53475d.js";import{d as pr,r as dr,i as ur}from"./createSvgIcon-857bfddd.js";import{B as P}from"./Button-214e1d08.js";import{I as fr}from"./IconButton-c84c885d.js";import{M as gr}from"./Modal-e4949b5b.js";import{P as J}from"./Paper-42448a04.js";import{T as mr,r as xr,g as X}from"./Portal-1a10b74b.js";import{u as hr}from"./TransitionGroupContext-60cba11c.js";import{o as Z}from"./ownerWindow-dade367e.js";import{h as vr}from"./hexToRgba-40d8eaf7.js";import{c as kr}from"./createSvgIcon-03e133ad.js";import"./ownerDocument-613eb639.js";import"./useControlled-3c372627.js";import"./ButtonBase-40ca0a5b.js";import"./isHostComponent-73d6e646.js";function br(r){return V("MuiAppBar",r)}H("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent"]);const yr=["className","color","enableColorOnDark","position"],Cr=r=>{const{color:o,position:e,classes:t}=r,n={root:["root",`color${y(o)}`,`position${y(e)}`]};return Y(n,br,t)},_=(r,o)=>r?`${r==null?void 0:r.replace(")","")}, ${o})`:o,Br=j(J,{name:"MuiAppBar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,o[`position${y(e.position)}`],o[`color${y(e.color)}`]]}})(({theme:r,ownerState:o})=>{const e=r.palette.mode==="light"?r.palette.grey[100]:r.palette.grey[900];return c({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(r.vars||r).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!r.vars&&c({},o.color==="default"&&{backgroundColor:e,color:r.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:r.palette[o.color].main,color:r.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},r.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&c({backgroundColor:"transparent",color:"inherit"},r.palette.mode==="dark"&&{backgroundImage:"none"})),r.vars&&c({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette.AppBar.defaultBg:_(r.vars.palette.AppBar.darkBg,r.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?r.vars.palette.text.primary:_(r.vars.palette.AppBar.darkColor,r.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?r.vars.palette[o.color].main:_(r.vars.palette.AppBar.darkBg,r.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?r.vars.palette[o.color].contrastText:_(r.vars.palette.AppBar.darkColor,r.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),Er=m.forwardRef(function(o,e){const t=U({props:o,name:"MuiAppBar"}),{className:n,color:u="primary",enableColorOnDark:d=!1,position:p="fixed"}=t,s=A(t,yr),l=c({},t,{color:u,position:p,enableColorOnDark:d}),f=Cr(l);return i.jsx(Br,c({square:!0,component:"header",ownerState:l,elevation:4,className:B(f.root,n,p==="fixed"&&"mui-fixed"),ref:e},s))}),Tr=Er,Dr=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Pr(r,o,e){const t=o.getBoundingClientRect(),n=e&&e.getBoundingClientRect(),u=Z(o);let d;if(o.fakeTransform)d=o.fakeTransform;else{const l=u.getComputedStyle(o);d=l.getPropertyValue("-webkit-transform")||l.getPropertyValue("transform")}let p=0,s=0;if(d&&d!=="none"&&typeof d=="string"){const l=d.split("(")[1].split(")")[0].split(",");p=parseInt(l[4],10),s=parseInt(l[5],10)}return r==="left"?n?`translateX(${n.right+p-t.left}px)`:`translateX(${u.innerWidth+p-t.left}px)`:r==="right"?n?`translateX(-${t.right-n.left-p}px)`:`translateX(-${t.left+t.width-p}px)`:r==="up"?n?`translateY(${n.bottom+s-t.top}px)`:`translateY(${u.innerHeight+s-t.top}px)`:n?`translateY(-${t.top-n.top+t.height-s}px)`:`translateY(-${t.top+t.height-s}px)`}function Ar(r){return typeof r=="function"?r():r}function S(r,o,e){const t=Ar(e),n=Pr(r,o,t);n&&(o.style.webkitTransform=n,o.style.transform=n)}const jr=m.forwardRef(function(o,e){const t=O(),n={enter:t.transitions.easing.easeOut,exit:t.transitions.easing.sharp},u={enter:t.transitions.duration.enteringScreen,exit:t.transitions.duration.leavingScreen},{addEndListener:d,appear:p=!0,children:s,container:l,direction:f="down",easing:$=n,in:k,onEnter:R,onEntered:E,onEntering:T,onExit:z,onExited:M,onExiting:w,style:b,timeout:D=u,TransitionComponent:C=mr}=o,I=A(o,Dr),x=m.useRef(null),q=hr(s.ref,x,e),h=a=>g=>{a&&(g===void 0?a(x.current):a(x.current,g))},v=h((a,g)=>{S(f,a,l),xr(a),R&&R(a,g)}),N=h((a,g)=>{const G=X({timeout:D,style:b,easing:$},{mode:"enter"});a.style.webkitTransition=t.transitions.create("-webkit-transform",c({},G)),a.style.transition=t.transitions.create("transform",c({},G)),a.style.webkitTransform="none",a.style.transform="none",T&&T(a,g)}),L=h(E),er=h(w),nr=h(a=>{const g=X({timeout:D,style:b,easing:$},{mode:"exit"});a.style.webkitTransition=t.transitions.create("-webkit-transform",g),a.style.transition=t.transitions.create("transform",g),S(f,a,l),z&&z(a)}),ar=h(a=>{a.style.webkitTransition="",a.style.transition="",M&&M(a)}),ir=a=>{d&&d(x.current,a)},F=m.useCallback(()=>{x.current&&S(f,x.current,l)},[f,l]);return m.useEffect(()=>{if(k||f==="down"||f==="right")return;const a=pr(()=>{x.current&&S(f,x.current,l)}),g=Z(x.current);return g.addEventListener("resize",a),()=>{a.clear(),g.removeEventListener("resize",a)}},[f,k,l]),m.useEffect(()=>{k||F()},[k,F]),i.jsx(C,c({nodeRef:x,onEnter:v,onEntered:L,onEntering:N,onExit:nr,onExited:ar,onExiting:er,addEndListener:ir,appear:p,in:k,timeout:D},I,{children:(a,g)=>m.cloneElement(s,c({ref:q,style:c({visibility:a==="exited"&&!k?"hidden":void 0},b,s.props.style)},g))}))}),$r=jr;function Rr(r){return V("MuiDrawer",r)}H("MuiDrawer",["root","docked","paper","paperAnchorLeft","paperAnchorRight","paperAnchorTop","paperAnchorBottom","paperAnchorDockedLeft","paperAnchorDockedRight","paperAnchorDockedTop","paperAnchorDockedBottom","modal"]);const zr=["BackdropProps"],Mr=["anchor","BackdropProps","children","className","elevation","hideBackdrop","ModalProps","onClose","open","PaperProps","SlideProps","TransitionComponent","transitionDuration","variant"],rr=(r,o)=>{const{ownerState:e}=r;return[o.root,(e.variant==="permanent"||e.variant==="persistent")&&o.docked,o.modal]},wr=r=>{const{classes:o,anchor:e,variant:t}=r,n={root:["root"],docked:[(t==="permanent"||t==="persistent")&&"docked"],modal:["modal"],paper:["paper",`paperAnchor${y(e)}`,t!=="temporary"&&`paperAnchorDocked${y(e)}`]};return Y(n,Rr,o)},Ir=j(gr,{name:"MuiDrawer",slot:"Root",overridesResolver:rr})(({theme:r})=>({zIndex:(r.vars||r).zIndex.drawer})),K=j("div",{shouldForwardProp:sr,name:"MuiDrawer",slot:"Docked",skipVariantsResolver:!1,overridesResolver:rr})({flex:"0 0 auto"}),Nr=j(J,{name:"MuiDrawer",slot:"Paper",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.paper,o[`paperAnchor${y(e.anchor)}`],e.variant!=="temporary"&&o[`paperAnchorDocked${y(e.anchor)}`]]}})(({theme:r,ownerState:o})=>c({overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:(r.vars||r).zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},o.anchor==="left"&&{left:0},o.anchor==="top"&&{top:0,left:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="right"&&{right:0},o.anchor==="bottom"&&{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},o.anchor==="left"&&o.variant!=="temporary"&&{borderRight:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="top"&&o.variant!=="temporary"&&{borderBottom:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="right"&&o.variant!=="temporary"&&{borderLeft:`1px solid ${(r.vars||r).palette.divider}`},o.anchor==="bottom"&&o.variant!=="temporary"&&{borderTop:`1px solid ${(r.vars||r).palette.divider}`})),or={left:"right",right:"left",top:"down",bottom:"up"};function Lr(r){return["left","right"].indexOf(r)!==-1}function _r(r,o){return r.direction==="rtl"&&Lr(o)?or[o]:o}const Sr=m.forwardRef(function(o,e){const t=U({props:o,name:"MuiDrawer"}),n=O(),u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{anchor:d="left",BackdropProps:p,children:s,className:l,elevation:f=16,hideBackdrop:$=!1,ModalProps:{BackdropProps:k}={},onClose:R,open:E=!1,PaperProps:T={},SlideProps:z,TransitionComponent:M=$r,transitionDuration:w=u,variant:b="temporary"}=t,D=A(t.ModalProps,zr),C=A(t,Mr),I=m.useRef(!1);m.useEffect(()=>{I.current=!0},[]);const x=_r(n,d),h=c({},t,{anchor:d,elevation:f,open:E,variant:b},C),v=wr(h),N=i.jsx(Nr,c({elevation:b==="temporary"?f:0,square:!0},T,{className:B(v.paper,T.className),ownerState:h,children:s}));if(b==="permanent")return i.jsx(K,c({className:B(v.root,v.docked,l),ownerState:h,ref:e},C,{children:N}));const L=i.jsx(M,c({in:E,direction:or[x],timeout:w,appear:I.current},z,{children:N}));return b==="persistent"?i.jsx(K,c({className:B(v.root,v.docked,l),ownerState:h,ref:e},C,{children:L})):i.jsx(Ir,c({BackdropProps:c({},p,k,{transitionDuration:w}),className:B(v.root,v.modal,l),open:E,ownerState:h,onClose:R,hideBackdrop:$,ref:e},C,D,{children:L}))}),Or=Sr;function Vr(r){return V("MuiToolbar",r)}H("MuiToolbar",["root","gutters","regular","dense"]);const Hr=["className","component","disableGutters","variant"],Ur=r=>{const{classes:o,disableGutters:e,variant:t}=r;return Y({root:["root",!e&&"gutters",t]},Vr,o)},Yr=j("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(r,o)=>{const{ownerState:e}=r;return[o.root,!e.disableGutters&&o.gutters,o[e.variant]]}})(({theme:r,ownerState:o})=>c({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:r.spacing(2),paddingRight:r.spacing(2),[r.breakpoints.up("sm")]:{paddingLeft:r.spacing(3),paddingRight:r.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:r,ownerState:o})=>o.variant==="regular"&&r.mixins.toolbar),Wr=m.forwardRef(function(o,e){const t=U({props:o,name:"MuiToolbar"}),{className:n,component:u="div",disableGutters:d=!1,variant:p="regular"}=t,s=A(t,Hr),l=c({},t,{component:u,disableGutters:d,variant:p}),f=Ur(l);return i.jsx(Yr,c({as:u,className:B(f.root,n),ref:e,ownerState:l},s))}),qr=Wr;var W={},Fr=ur;Object.defineProperty(W,"__esModule",{value:!0});var tr=W.default=void 0,Gr=Fr(dr()),Xr=i,Kr=(0,Gr.default)((0,Xr.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");tr=W.default=Kr;function Qr({links:r,setOpenResume:o,showResume:e}){const t=O(),[n,u]=m.useState(!1),d=r.map(p=>i.jsx(P,{onClick:()=>{u(!1),o(!1)},size:"large",variant:"text",href:`#${p}`,sx:{fontSize:"2rem",color:t.palette.primary.main,"&:hover":{color:t.palette.secondary.main,background:"none"}},children:p},p));return i.jsxs(i.Fragment,{children:[i.jsx(fr,{edge:"start",onClick:()=>u(!0),children:i.jsx(tr,{fontSize:"large",htmlColor:t.palette.secondary.main,sx:{fill:t.palette.primary.main}})}),i.jsx(Or,{anchor:"right",open:n,elevation:10,onClose:()=>u(!1),children:i.jsx(lr,{p:4,width:"25rem",textAlign:"center",role:"presentation",sx:{background:t.palette.background.default},height:"100%",children:i.jsxs(Q,{component:"nav",height:"100%",alignItems:"center",justifyContent:"space-evenly",children:[d,e&&i.jsx(P,{onClick:()=>{u(!1),o(!0)},size:"large",variant:"text",sx:{fontSize:"2rem",color:t.palette.primary.main,"&:hover":{color:t.palette.secondary.main,background:"none"}},children:"Resume"})]})})})]})}function Jr(){const[r,o]=m.useState(0);return m.useEffect(()=>{const e=()=>{const t=window.scrollY;o(t)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]),r}const Zr=kr(i.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),ro=["experience","skills","projects","contact"];function ho({setOpenResume:r,showExperience:o,showResume:e}){const t=O(),n=cr("(max-width: 60em)"),u=Jr(),d=()=>{const p=ro.filter(s=>s==="experience"?o:s==="resume"?e:!0);return n?i.jsx(Qr,{links:p,showResume:e,setOpenResume:r}):i.jsxs(Q,{component:"nav",spacing:4,direction:"row",children:[p.map(s=>i.jsx(P,{variant:"text",href:`#${s}`,onClick:()=>r(!1),sx:{fontSize:"1.5rem",color:t.palette.primary.main,"&:hover":{background:"none",color:t.palette.secondary.main}},children:s},s)),e&&i.jsx(P,{variant:"text",onClick:()=>r(!0),sx:{fontSize:"1.5rem",color:t.palette.primary.main,"&:hover":{color:t.palette.primary.contrastText}},children:"Resume"})]})};return i.jsx(Tr,{style:{background:u>0?vr(t.palette.background.default,.75):t.palette.background.default},children:i.jsxs(qr,{sx:{justifyContent:"space-between",mx:n?void 0:"4rem"},children:[i.jsx(P,{href:"#about",onClick:()=>r(!1),sx:{"&:hover":{background:"none","& svg":{fill:t.palette.secondary.main}}},children:i.jsx(Zr,{fontSize:"large",sx:{fill:t.palette.primary.main}})}),d()]})})}export{ho as default};