import{o as Ie,_ as Ue,T as ue,u as ce,b as _e,a as W}from"./TransitionGroupContext-abb8b9ce.js";import{r as a,_ as X,b as ee,R as H,d as C,j as F,a as me,z as te,s as ne,u as be,g as ze,e as Oe}from"./index-7d67269f.js";function gt(...e){return e.reduce((o,s)=>s==null?o:function(...t){o.apply(this,t),s.apply(this,t)},()=>{})}function Rt(e){return Ie(e).defaultView||window}function Ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,o){var s=function(n){return o&&a.isValidElement(n)?o(n):n},l=Object.create(null);return e&&a.Children.map(e,function(t){return t}).forEach(function(t){l[t.key]=s(t)}),l}function Xe(e,o){e=e||{},o=o||{};function s(f){return f in o?o[f]:e[f]}var l=Object.create(null),t=[];for(var n in e)n in o?t.length&&(l[n]=t,t=[]):t.push(n);var i,c={};for(var u in o){if(l[u])for(i=0;i<l[u].length;i++){var p=l[u][i];c[l[u][i]]=s(p)}c[u]=s(u)}for(i=0;i<t.length;i++)c[t[i]]=s(t[i]);return c}function k(e,o,s){return s[o]!=null?s[o]:e.props[o]}function Ye(e,o){return oe(e.children,function(s){return a.cloneElement(s,{onExited:o.bind(null,s),in:!0,appear:k(s,"appear",e),enter:k(s,"enter",e),exit:k(s,"exit",e)})})}function Ae(e,o,s){var l=oe(e.children),t=Xe(o,l);return Object.keys(t).forEach(function(n){var i=t[n];if(a.isValidElement(i)){var c=n in o,u=n in l,p=o[n],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?t[n]=a.cloneElement(i,{onExited:s.bind(null,i),in:!0,exit:k(i,"exit",e),enter:k(i,"enter",e)}):!u&&c&&!f?t[n]=a.cloneElement(i,{in:!1}):u&&c&&a.isValidElement(p)&&(t[n]=a.cloneElement(i,{onExited:s.bind(null,i),in:p.props.in,exit:k(i,"exit",e),enter:k(i,"enter",e)}))}}),t}var We=Object.values||function(e){return Object.keys(e).map(function(o){return e[o]})},He={component:"div",childFactory:function(o){return o}},ie=function(e){Ue(o,e);function o(l,t){var n;n=e.call(this,l,t)||this;var i=n.handleExited.bind(Ke(n));return n.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},n}var s=o.prototype;return s.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},s.componentWillUnmount=function(){this.mounted=!1},o.getDerivedStateFromProps=function(t,n){var i=n.children,c=n.handleExited,u=n.firstRender;return{children:u?Ye(t,c):Ae(t,i,c),firstRender:!1}},s.handleExited=function(t,n){var i=oe(this.props.children);t.key in i||(t.props.onExited&&t.props.onExited(n),this.mounted&&this.setState(function(c){var u=X({},c.children);return delete u[t.key],{children:u}}))},s.render=function(){var t=this.props,n=t.component,i=t.childFactory,c=ee(t,["component","childFactory"]),u=this.state.contextValue,p=We(this.state.children).map(i);return delete c.appear,delete c.enter,delete c.exit,n===null?H.createElement(ue.Provider,{value:u},p):H.createElement(ue.Provider,{value:u},H.createElement(n,c,p))},o}(H.Component);ie.propTypes={};ie.defaultProps=He;const Ge=ie;function qe(e){const{className:o,classes:s,pulsate:l=!1,rippleX:t,rippleY:n,rippleSize:i,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=C(o,s.ripple,s.rippleVisible,l&&s.ripplePulsate),E={width:i,height:i,top:-(i/2)+n,left:-(i/2)+t},h=C(s.child,f&&s.childLeaving,l&&s.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),F.jsx("span",{className:b,style:E,children:F.jsx("span",{className:h})})}const Je=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),m=Je,Qe=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,Ze=80,et=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),tt=te(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),nt=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),ot=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),it=ne(qe,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,et,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,tt,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,nt,({theme:e})=>e.transitions.easing.easeInOut),rt=a.forwardRef(function(o,s){const l=be({props:o,name:"MuiTouchRipple"}),{center:t=!1,classes:n={},className:i}=l,c=ee(l,Qe),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),E=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{E.current&&clearTimeout(E.current)},[]);const U=a.useCallback(d=>{const{pulsate:M,rippleX:y,rippleY:S,rippleSize:I,cb:z}=d;p(T=>[...T,F.jsx(it,{classes:{ripple:C(n.ripple,m.ripple),rippleVisible:C(n.rippleVisible,m.rippleVisible),ripplePulsate:C(n.ripplePulsate,m.ripplePulsate),child:C(n.child,m.child),childLeaving:C(n.childLeaving,m.childLeaving),childPulsate:C(n.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:y,rippleY:S,rippleSize:I},f.current)]),f.current+=1,g.current=z},[n]),N=a.useCallback((d={},M={},y=()=>{})=>{const{pulsate:S=!1,center:I=t||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const T=z?null:R.current,B=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let V,P,D;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)V=Math.round(B.width/2),P=Math.round(B.height/2);else{const{clientX:L,clientY:v}=d.touches&&d.touches.length>0?d.touches[0]:d;V=Math.round(L-B.left),P=Math.round(v-B.top)}if(I)D=Math.sqrt((2*B.width**2+B.height**2)/3),D%2===0&&(D+=1);else{const L=Math.max(Math.abs((T?T.clientWidth:0)-V),V)*2+2,v=Math.max(Math.abs((T?T.clientHeight:0)-P),P)*2+2;D=Math.sqrt(L**2+v**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:S,rippleX:V,rippleY:P,rippleSize:D,cb:y})},E.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Ze)):U({pulsate:S,rippleX:V,rippleY:P,rippleSize:D,cb:y})},[t,U]),_=a.useCallback(()=>{N({},{pulsate:!0})},[N]),j=a.useCallback((d,M)=>{if(clearTimeout(E.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,E.current=setTimeout(()=>{j(d,M)});return}h.current=null,p(y=>y.length>0?y.slice(1):y),g.current=M},[]);return a.useImperativeHandle(s,()=>({pulsate:_,start:N,stop:j}),[_,N,j]),F.jsx(ot,X({className:C(m.root,n.root,i),ref:R},c,{children:F.jsx(Ge,{component:null,exit:!0,children:u})}))}),st=rt;function at(e){return ze("MuiButtonBase",e)}const lt=me("MuiButtonBase",["root","disabled","focusVisible"]),ut=lt,ct=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],pt=e=>{const{disabled:o,focusVisible:s,focusVisibleClassName:l,classes:t}=e,i=Oe({root:["root",o&&"disabled",s&&"focusVisible"]},at,t);return s&&l&&(i.root+=` ${l}`),i},dt=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,o)=>o.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${ut.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ft=a.forwardRef(function(o,s){const l=be({props:o,name:"MuiButtonBase"}),{action:t,centerRipple:n=!1,children:i,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:E="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:N,onFocus:_,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:y,onMouseLeave:S,onMouseUp:I,onTouchEnd:z,onTouchMove:T,onTouchStart:B,tabIndex:V=0,TouchRippleProps:P,touchRippleRef:D,type:L}=l,v=ee(l,ct),O=a.useRef(null),x=a.useRef(null),ge=ce(x,D),{isFocusVisibleRef:re,onFocus:Re,onBlur:Me,ref:ye}=_e(),[$,Y]=a.useState(!1);p&&$&&Y(!1),a.useImperativeHandle(t,()=>({focusVisible:()=>{Y(!0),O.current.focus()}}),[]);const[q,Te]=a.useState(!1);a.useEffect(()=>{Te(!0)},[]);const xe=q&&!f&&!p;a.useEffect(()=>{$&&b&&!f&&q&&x.current.pulsate()},[f,b,$,q]);function w(r,ae,je=g){return W(le=>(ae&&ae(le),!je&&x.current&&x.current[r](le),!0))}const Ce=w("start",y),Ee=w("stop",U),Ve=w("stop",N),ve=w("stop",I),we=w("stop",r=>{$&&r.preventDefault(),S&&S(r)}),Be=w("start",B),Pe=w("stop",z),De=w("stop",T),Se=w("stop",r=>{Me(r),re.current===!1&&Y(!1),h&&h(r)},!1),Le=W(r=>{O.current||(O.current=r.currentTarget),Re(r),re.current===!0&&(Y(!0),j&&j(r)),_&&_(r)}),J=()=>{const r=O.current;return u&&u!=="button"&&!(r.tagName==="A"&&r.href)},Q=a.useRef(!1),$e=W(r=>{b&&!Q.current&&$&&x.current&&r.key===" "&&(Q.current=!0,x.current.stop(r,()=>{x.current.start(r)})),r.target===r.currentTarget&&J()&&r.key===" "&&r.preventDefault(),d&&d(r),r.target===r.currentTarget&&J()&&r.key==="Enter"&&!p&&(r.preventDefault(),R&&R(r))}),ke=W(r=>{b&&r.key===" "&&x.current&&$&&!r.defaultPrevented&&(Q.current=!1,x.current.stop(r,()=>{x.current.pulsate(r)})),M&&M(r),R&&r.target===r.currentTarget&&J()&&r.key===" "&&!r.defaultPrevented&&R(r)});let A=u;A==="button"&&(v.href||v.to)&&(A=E);const K={};A==="button"?(K.type=L===void 0?"button":L,K.disabled=p):(!v.href&&!v.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const Fe=ce(s,ye,O),se=X({},l,{centerRipple:n,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:V,focusVisible:$}),Ne=pt(se);return F.jsxs(dt,X({as:A,className:C(Ne.root,c),ownerState:se,onBlur:Se,onClick:R,onContextMenu:Ee,onFocus:Le,onKeyDown:$e,onKeyUp:ke,onMouseDown:Ce,onMouseLeave:we,onMouseUp:ve,onDragLeave:Ve,onTouchEnd:Pe,onTouchMove:De,onTouchStart:Be,ref:Fe,tabIndex:p?-1:V,type:L},K,v,{children:[i,xe?F.jsx(st,X({ref:ge,center:n},P)):null]}))}),Mt=ft;export{Mt as B,gt as c,Rt as o};
