(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{3817:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/authentication/verificacion",function(){return t(1224)}])},1508:function(e,r,t){"use strict";var n=t(5893),i=t(7294);let s=e=>{let r=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let e=r.current;if(e.classList.contains("bg-img")){let t=e.parentElement,n=e.getAttribute("src");t.classList.add("bg-size"),e.style.display="none",t.setAttribute("style","\n        background-image: url(".concat(n,");\n        background-size:cover; \n        background-position: center;\n        background-repeat: no-repeat;\n        display: block;\n        "))}},[]),(0,n.jsx)("img",{ref:r,...e})};r.Z=s},1224:function(e,r,t){"use strict";t.r(r);var n=t(5893),i=t(2175);t(1664);var s=t(7294),a=t(4231),o=t(2774),l=t(9589),c=t(6564),u=t(2920),d=t(1163),m=t(1508),p=t(2355);let f=()=>{let e=(0,d.useRouter)(),[r,t]=(0,s.useState)();return(0,n.jsx)("div",{className:"authentication-box",children:(0,n.jsx)(c.W2,{fluid:!0,className:"container-fluid",children:(0,n.jsxs)(c.X2,{className:"log-in",children:[(0,n.jsx)(c.JX,{xxl:"3",xl:"4",lg:"5",md:"6",sm:"8",className:"form-login",children:(0,n.jsx)(c.Zb,{className:"card",children:(0,n.jsxs)(c.eW,{className:"card-body",children:[(0,n.jsx)("div",{className:"title-3 text-start",children:(0,n.jsx)("h2",{children:"Confirmaci\xf3n de Cuenta"})}),(0,n.jsx)(i.J9,{initialValues:{email:"",code:""},validationSchema:a.Ry().shape({email:a.Z_().required("Email valido"),code:a.Z_().required("Codigo de verificaci\xf3n")}),onSubmit(r){console.log(r);try{p.Z.verificar(r.email,r.code),u.Am.success("Cuenta confirmada con exito !",{position:u.Am.POSITION.TOP_RIGHT}),e.push("/authentication/login2")}catch(t){u.Am.error("Esta cuenta ya esta verificada o el codigo es invalido",{position:u.Am.POSITION.TOP_RIGHT})}},children(e){let{errors:r,touched:t}=e;return(0,n.jsxs)(i.l0,{children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("div",{className:"input-group-prepend",children:(0,n.jsx)(o.Z,{size:20})}),(0,n.jsx)(i.gN,{type:"email",className:"form-control ".concat(r.email&&t.email?"is-invalid":""),name:"email",placeholder:"Ingrese su email"})]}),r.email&&t.email&&(0,n.jsx)("div",{className:"text-danger ms-4",children:r.email})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsxs)("div",{className:"input-group",children:[(0,n.jsx)("div",{className:"input-group-prepend",children:(0,n.jsx)(l.Z,{size:20})}),(0,n.jsx)(i.gN,{type:"text",className:"form-control ".concat(r.code&&t.code?"is-invalid":""),name:"code",placeholder:"Ingrese el codigo"})]}),r.email&&t.code&&(0,n.jsx)("div",{className:"text-danger ms-4",children:r.code})]}),(0,n.jsx)("div",{children:(0,n.jsx)("button",{type:"submit",className:"btn btn-gradient btn-pill me-sm-3 me-2",children:"Verificar Cuenta"})})]})}})]})})}),(0,n.jsx)(c.JX,{xxl:"7",xl:"7",lg:"6",className:"offset-xxl-1 auth-img",children:(0,n.jsx)(m.Z,{src:"/assets/images/logo/calendario.png",alt:"",className:"bg-img"})})]})})})};r.default=f,f.getLayout=function(e){return(0,n.jsx)(n.Fragment,{children:e})}},9589:function(e,r,t){"use strict";var n=t(7294),i=t(5697),s=t.n(i);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=(0,n.forwardRef)(function(e,r){var t=e.color,i=e.size,s=void 0===i?24:i,o=function(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["color","size"]);return n.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),n.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))});o.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},o.displayName="Lock",r.Z=o},2774:function(e,r,t){"use strict";var n=t(7294),i=t(5697),s=t.n(i);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var o=(0,n.forwardRef)(function(e,r){var t=e.color,i=e.size,s=void 0===i?24:i,o=function(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],!(r.indexOf(t)>=0)&&Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}(e,["color","size"]);return n.createElement("svg",a({ref:r,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:void 0===t?"currentColor":t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),n.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),n.createElement("polyline",{points:"22,6 12,13 2,6"}))});o.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},o.displayName="Mail",r.Z=o}},function(e){e.O(0,[141,774,888,179],function(){return e(e.s=3817)}),_N_E=e.O()}]);