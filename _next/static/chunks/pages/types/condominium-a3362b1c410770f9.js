(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[992],{952:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/types/condominium",function(){return a(6014)}])},6794:function(e,s,a){"use strict";var r=a(5893),l=a(1664),i=a.n(l);a(7294);var n=a(6564);let t=e=>{let{title:s,parent:a,titleText:l}=e;return(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsx)("div",{className:"page-header",children:(0,r.jsxs)(n.X2,{children:[(0,r.jsx)(n.JX,{sm:"6",children:(0,r.jsx)("div",{className:"page-header-left",children:(0,r.jsxs)("h3",{children:[s,(0,r.jsx)("small",{children:l})]})})}),(0,r.jsx)(n.JX,{sm:"6",children:(0,r.jsxs)("ol",{className:"breadcrumb pull-right",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)(i(),{href:"/dashboard",children:(0,r.jsx)("i",{className:"fa fa-home"})})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:a})]})})]})})})};s.Z=t},572:function(e,s,a){"use strict";a.d(s,{Z:function(){return f}});var r=a(5893),l=a(1664),i=a.n(l),n=a(7294),t=a(2596),c=a(7811),d=a(6066),o=a(7240);let h=e=>{let{images:s}=e;return(0,r.jsx)(d.Z,{className:"property-slider",dots:!0,infinite:!0,speed:500,arrows:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:null==s?void 0:s.map((e,s)=>(0,r.jsx)("div",{children:(0,r.jsx)("div",{children:(0,r.jsx)(o.Z,{src:e,className:"bg-img"})})},s))})};var m=a(7235),p=a(2920);let x=e=>{let{id:s}=e,a=()=>(0,p.Am)("This product added to compare list",{type:"success"});return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(m.Z,{onClick(){a()}})})},u=e=>{let{labels:s}=e;return(0,r.jsx)(r.Fragment,{children:Array.isArray(s)&&(null==s?void 0:s.map((e,s)=>(0,r.jsxs)(n.Fragment,{children:["sale"===e&&(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"label label-shadow",children:"Sale"})}),"no fees"===e||"For Rent"===e&&(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"label label-dark",children:e})}),"open house"===e||"Featured"===e&&(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"label label-success",children:e})}),"sold"===e&&(0,r.jsx)("div",{children:(0,r.jsx)("span",{className:"label label-shadow",children:"Sold"})})]},s)))})};var j=a(1163);let g=e=>{let{data:s}=e,a=(0,j.useRouter)(),l=()=>{p.Am.success("Add Favourites Successful.."),a.push("/myproperties/favourites")};return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"property-box",children:[(0,r.jsxs)("div",{className:"property-image",children:[(0,r.jsx)(h,{images:s.img}),(0,r.jsx)("div",{className:"labels-left",children:(0,r.jsx)(u,{labels:s.label})}),(0,r.jsxs)("div",{className:"seen-data",children:[(0,r.jsx)(t.Z,{}),(0,r.jsx)("span",{children:s.img.length||5})]}),(0,r.jsxs)("div",{className:"overlay-property-box",children:[(0,r.jsx)(i(),{href:"https://sheltos-react.vercel.app/pages/user-panel/compare-property",className:"effect-round",title:"Compare",children:(0,r.jsx)(x,{id:s.id})}),(0,r.jsx)("div",{className:"effect-round like",onClick(){l()},title:"wishlist",children:(0,r.jsx)(c.Z,{})})]})]}),(0,r.jsxs)("div",{className:"property-details",children:[(0,r.jsxs)("span",{className:"font-roboto",children:[s.country||"USA"," "]}),(0,r.jsx)(i(),{href:Array.isArray(s.img)?"/property/image-slider/?id=".concat(s.id):"/property/image-box/?id=".concat(s.id),children:(0,r.jsx)("h3",{children:s.title})}),(0,r.jsxs)("h6",{children:["$",(1*s.price).toFixed(2)||"48596","*"]}),(0,r.jsxs)("p",{className:"font-roboto",children:[s.details||"This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."," "]}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"/assets/images/svg/icon/double-bed.svg",className:"img-fluid",alt:""}),"Bed : ",s.bed||5]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"/assets/images/svg/icon/bathroom.svg",className:"img-fluid",alt:""}),"Baths : ",s.bath||5]}),(0,r.jsxs)("li",{children:[(0,r.jsx)("img",{src:"/assets/images/svg/icon/square-ruler-tool.svg",className:"img-fluid ruler-tool",alt:""}),"Sq Ft : ",s.sqft||5]})]}),(0,r.jsxs)("div",{className:"property-btn d-flex",children:[(0,r.jsx)("span",{children:s.date}),(0,r.jsx)(i(),{href:"https://sheltos-react.vercel.app/property/image-box",children:(0,r.jsx)("button",{type:"button",className:"btn btn-dashed btn-pill",children:"Details"})})]})]})]})})};var f=g},7240:function(e,s,a){"use strict";var r=a(5893),l=a(7294);let i=e=>{let s=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let a=s.current;if(a&&a.classList.contains("bg-img")){let r=a.parentElement,l=e.src;r.classList.add("bg-size"),a.style.display="none",r.setAttribute("style","\n        background-image: url(".concat(l,");\n        background-size:cover; \n        background-position: center;\n        background-repeat: no-repeat;\n        display: block;\n        "))}},[e.src]),(0,r.jsx)("img",{ref:s,...e,alt:""})};s.Z=i},8788:function(e,s,a){"use strict";a.d(s,{Y:function(){return l}});var r=a(6154);async function l(e){try{return await r.Z.get(e)}catch(s){console.error("Error",s)}}},6014:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var r=a(5893),l=a(7294),i=a(6564),n=a(6794),t=a(572),c=a(8788);let d=()=>{let[e,s]=(0,l.useState)();return(0,l.useEffect)(()=>{(0,c.Y)("".concat("http://localhost:4000/api","/property")).then(e=>{var a;s(null===(a=e.data)||void 0===a?void 0:a.CondominiumProperty)}).catch(e=>console.log("Error",e))},[]),(0,r.jsxs)(i.X2,{className:"property-2 row column-sm zoom-gallery property-label property-grid mt-0",children:[e&&e.map((e,s)=>(0,r.jsx)(i.JX,{xl:"4",md:"6 xl-6",children:(0,r.jsx)(t.Z,{data:e})},s)),(0,r.jsx)("nav",{className:"theme-pagination",children:(0,r.jsxs)("ul",{className:"pagination",children:[(0,r.jsx)("li",{className:"page-item",children:(0,r.jsxs)("a",{href:"#",className:"page-link","aria-label":"Previous",children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"\xab"}),(0,r.jsx)("span",{className:"sr-only",children:"Previous"})]})}),(0,r.jsx)("li",{className:"page-item active",children:(0,r.jsx)("a",{href:"#",className:"page-link",children:"1"})}),(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("a",{href:"#",className:"page-link",children:"2"})}),(0,r.jsx)("li",{className:"page-item",children:(0,r.jsx)("a",{href:"#",className:"page-link",children:"3"})}),(0,r.jsx)("li",{className:"page-item",children:(0,r.jsxs)("a",{href:"#",className:"page-link","aria-label":"Next",children:[(0,r.jsx)("span",{"aria-hidden":"true",children:"\xbb"}),(0,r.jsx)("span",{className:"sr-only",children:"Next"})]})})]})})]})},o=()=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Z,{title:"Condominium",titleText:"Welcome To Admin Panel",parent:"Types"}),(0,r.jsx)(i.W2,{fluid:!0,children:(0,r.jsx)(i.X2,{children:(0,r.jsx)(i.JX,{lg:"12",children:(0,r.jsx)("div",{className:"property-admin",children:(0,r.jsx)("div",{className:"property-section section-sm",children:(0,r.jsx)(i.X2,{className:"ratio_55 property-grid-2 property-map map-with-back",children:(0,r.jsx)(d,{})})})})})})})]});var h=o}},function(e){e.O(0,[308,774,888,179],function(){return e(e.s=952)}),_N_E=e.O()}]);