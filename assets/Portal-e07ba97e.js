import{F as g,b as I,R as y,_ as d,r as c,d as k,l as O,j as R,p as L}from"./index-e5b6ef87.js";import{_ as U,T as w,u as F,s as D}from"./TransitionGroupContext-acde068d.js";import{i as H}from"./isHostComponent-73d6e646.js";const _={disabled:!1};var j=function(r){return r.scrollTop},N="unmounted",h="exited",E="entering",v="entered",T="exiting",p=function(o){U(r,o);function r(n,e){var t;t=o.call(this,n,e)||this;var i=e,a=i&&!i.isMounting?n.enter:n.appear,l;return t.appearStatus=null,n.in?a?(l=h,t.appearStatus=E):l=v:n.unmountOnExit||n.mountOnEnter?l=N:l=h,t.state={status:l},t.nextCallback=null,t}r.getDerivedStateFromProps=function(e,t){var i=e.in;return i&&t.status===N?{status:h}:null};var s=r.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(e){var t=null;if(e!==this.props){var i=this.state.status;this.props.in?i!==E&&i!==v&&(t=E):(i===E||i===v)&&(t=T)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var e=this.props.timeout,t,i,a;return t=i=a=e,e!=null&&typeof e!="number"&&(t=e.exit,i=e.enter,a=e.appear!==void 0?e.appear:i),{exit:t,enter:i,appear:a}},s.updateStatus=function(e,t){if(e===void 0&&(e=!1),t!==null)if(this.cancelNextCallback(),t===E){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);i&&j(i)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===h&&this.setState({status:N})},s.performEnter=function(e){var t=this,i=this.props.enter,a=this.context?this.context.isMounting:e,l=this.props.nodeRef?[a]:[g.findDOMNode(this),a],u=l[0],f=l[1],m=this.getTimeouts(),S=a?m.appear:m.enter;if(!e&&!i||_.disabled){this.safeSetState({status:v},function(){t.props.onEntered(u)});return}this.props.onEnter(u,f),this.safeSetState({status:E},function(){t.props.onEntering(u,f),t.onTransitionEnd(S,function(){t.safeSetState({status:v},function(){t.props.onEntered(u,f)})})})},s.performExit=function(){var e=this,t=this.props.exit,i=this.getTimeouts(),a=this.props.nodeRef?void 0:g.findDOMNode(this);if(!t||_.disabled){this.safeSetState({status:h},function(){e.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:T},function(){e.props.onExiting(a),e.onTransitionEnd(i.exit,function(){e.safeSetState({status:h},function(){e.props.onExited(a)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},s.setNextCallback=function(e){var t=this,i=!0;return this.nextCallback=function(a){i&&(i=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},s.onTransitionEnd=function(e,t){this.setNextCallback(t);var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),a=e==null&&!this.props.addEndListener;if(!i||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],u=l[0],f=l[1];this.props.addEndListener(u,f)}e!=null&&setTimeout(this.nextCallback,e)},s.render=function(){var e=this.state.status;if(e===N)return null;var t=this.props,i=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=I(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return y.createElement(w.Provider,{value:null},typeof i=="function"?i(e,a):y.cloneElement(y.Children.only(i),a))},r}(y.Component);p.contextType=w;p.propTypes={};function x(){}p.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x};p.UNMOUNTED=N;p.EXITED=h;p.ENTERING=E;p.ENTERED=v;p.EXITING=T;const K=p,Q=o=>o.scrollTop;function Y(o,r){var s,n;const{timeout:e,easing:t,style:i={}}=o;return{duration:(s=i.transitionDuration)!=null?s:typeof e=="number"?e:e[r.mode]||0,easing:(n=i.transitionTimingFunction)!=null?n:typeof t=="object"?t[r.mode]:t,delay:i.transitionDelay}}function G(o,r,s){return o===void 0||H(o)?r:d({},r,{ownerState:d({},r.ownerState,s)})}const W={disableDefaultClasses:!1},X=c.createContext(W);function tt(o){const{disableDefaultClasses:r}=c.useContext(X);return s=>r?"":o(s)}function $(o,r=[]){if(o===void 0)return{};const s={};return Object.keys(o).filter(n=>n.match(/^on[A-Z]/)&&typeof o[n]=="function"&&!r.includes(n)).forEach(n=>{s[n]=o[n]}),s}function A(o,r,s){return typeof o=="function"?o(r,s):o}function M(o){if(o===void 0)return{};const r={};return Object.keys(o).filter(s=>!(s.match(/^on[A-Z]/)&&typeof o[s]=="function")).forEach(s=>{r[s]=o[s]}),r}function V(o){const{getSlotProps:r,additionalProps:s,externalSlotProps:n,externalForwardedProps:e,className:t}=o;if(!r){const b=k(e==null?void 0:e.className,n==null?void 0:n.className,t,s==null?void 0:s.className),P=d({},s==null?void 0:s.style,e==null?void 0:e.style,n==null?void 0:n.style),C=d({},s,e,n);return b.length>0&&(C.className=b),Object.keys(P).length>0&&(C.style=P),{props:C,internalRef:void 0}}const i=$(d({},e,n)),a=M(n),l=M(e),u=r(i),f=k(u==null?void 0:u.className,s==null?void 0:s.className,t,e==null?void 0:e.className,n==null?void 0:n.className),m=d({},u==null?void 0:u.style,s==null?void 0:s.style,e==null?void 0:e.style,n==null?void 0:n.style),S=d({},u,s,l,a);return f.length>0&&(S.className=f),Object.keys(m).length>0&&(S.style=m),{props:S,internalRef:u.ref}}const Z=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function et(o){var r;const{elementType:s,externalSlotProps:n,ownerState:e,skipResolvingSlotProps:t=!1}=o,i=I(o,Z),a=t?{}:A(n,e),{props:l,internalRef:u}=V(d({},i,{externalSlotProps:a})),f=F(u,a==null?void 0:a.ref,(r=o.additionalProps)==null?void 0:r.ref);return G(s,d({},l,{ref:f}),e)}function q(o){return typeof o=="function"?o():o}const nt=c.forwardRef(function(r,s){const{children:n,container:e,disablePortal:t=!1}=r,[i,a]=c.useState(null),l=F(c.isValidElement(n)?n.ref:null,s);if(O(()=>{t||a(q(e)||document.body)},[e,t]),O(()=>{if(i&&!t)return D(s,i),()=>{D(s,null)}},[s,i,t]),t){if(c.isValidElement(n)){const u={ref:l};return c.cloneElement(n,u)}return R.jsx(c.Fragment,{children:n})}return R.jsx(c.Fragment,{children:i&&L.createPortal(n,i)})});export{nt as P,K as T,tt as a,G as b,A as c,$ as e,Y as g,Q as r,et as u};
