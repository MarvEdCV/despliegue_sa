(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[524],{8396:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/myproperties/favourites",function(){return r(8961)}])},6794:function(e,s,r){"use strict";var l=r(5893),a=r(1664),i=r.n(a);r(7294);var t=r(6564);let n=e=>{let{title:s,parent:r,titleText:a}=e;return(0,l.jsx)("div",{className:"container-fluid",children:(0,l.jsx)("div",{className:"page-header",children:(0,l.jsxs)(t.X2,{children:[(0,l.jsx)(t.JX,{sm:"6",children:(0,l.jsx)("div",{className:"page-header-left",children:(0,l.jsxs)("h3",{children:[s,(0,l.jsx)("small",{children:a})]})})}),(0,l.jsx)(t.JX,{sm:"6",children:(0,l.jsxs)("ol",{className:"breadcrumb pull-right",children:[(0,l.jsx)("li",{className:"breadcrumb-item",children:(0,l.jsx)(i(),{href:"/dashboard",children:(0,l.jsx)("i",{className:"fa fa-home"})})}),(0,l.jsx)("li",{className:"breadcrumb-item active",children:r})]})})]})})})};s.Z=n},572:function(e,s,r){"use strict";r.d(s,{Z:function(){return v}});var l=r(5893),a=r(1664),i=r.n(a),t=r(7294),n=r(2596),c=r(7811),d=r(6066),o=r(7240);let h=e=>{let{images:s}=e;return(0,l.jsx)(d.Z,{className:"property-slider",dots:!0,infinite:!0,speed:500,arrows:!0,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:null==s?void 0:s.map((e,s)=>(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)(o.Z,{src:e,className:"bg-img"})})},s))})};var p=r(7235),m=r(2920);let x=e=>{let{id:s}=e,r=()=>(0,m.Am)("This product added to compare list",{type:"success"});return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(p.Z,{onClick(){r()}})})},u=e=>{let{labels:s}=e;return(0,l.jsx)(l.Fragment,{children:Array.isArray(s)&&(null==s?void 0:s.map((e,s)=>(0,l.jsxs)(t.Fragment,{children:["sale"===e&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"label label-shadow",children:"Sale"})}),"no fees"===e||"For Rent"===e&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"label label-dark",children:e})}),"open house"===e||"Featured"===e&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"label label-success",children:e})}),"sold"===e&&(0,l.jsx)("div",{children:(0,l.jsx)("span",{className:"label label-shadow",children:"Sold"})})]},s)))})};var j=r(1163);let g=e=>{let{data:s}=e,r=(0,j.useRouter)(),a=()=>{m.Am.success("Add Favourites Successful.."),r.push("/myproperties/favourites")};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"property-box",children:[(0,l.jsxs)("div",{className:"property-image",children:[(0,l.jsx)(h,{images:s.img}),(0,l.jsx)("div",{className:"labels-left",children:(0,l.jsx)(u,{labels:s.label})}),(0,l.jsxs)("div",{className:"seen-data",children:[(0,l.jsx)(n.Z,{}),(0,l.jsx)("span",{children:s.img.length||5})]}),(0,l.jsxs)("div",{className:"overlay-property-box",children:[(0,l.jsx)(i(),{href:"https://sheltos-react.vercel.app/pages/user-panel/compare-property",className:"effect-round",title:"Compare",children:(0,l.jsx)(x,{id:s.id})}),(0,l.jsx)("div",{className:"effect-round like",onClick(){a()},title:"wishlist",children:(0,l.jsx)(c.Z,{})})]})]}),(0,l.jsxs)("div",{className:"property-details",children:[(0,l.jsxs)("span",{className:"font-roboto",children:[s.country||"USA"," "]}),(0,l.jsx)(i(),{href:Array.isArray(s.img)?"/property/image-slider/?id=".concat(s.id):"/property/image-box/?id=".concat(s.id),children:(0,l.jsx)("h3",{children:s.title})}),(0,l.jsxs)("h6",{children:["$",(1*s.price).toFixed(2)||"48596","*"]}),(0,l.jsxs)("p",{className:"font-roboto",children:[s.details||"This home provides wonderful entertaining spaces with a chef kitchen opening. Elegant retreat in a quiet Coral Gables setting.."," "]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"/assets/images/svg/icon/double-bed.svg",className:"img-fluid",alt:""}),"Bed : ",s.bed||5]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"/assets/images/svg/icon/bathroom.svg",className:"img-fluid",alt:""}),"Baths : ",s.bath||5]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("img",{src:"/assets/images/svg/icon/square-ruler-tool.svg",className:"img-fluid ruler-tool",alt:""}),"Sq Ft : ",s.sqft||5]})]}),(0,l.jsxs)("div",{className:"property-btn d-flex",children:[(0,l.jsx)("span",{children:s.date}),(0,l.jsx)(i(),{href:"https://sheltos-react.vercel.app/property/image-box",children:(0,l.jsx)("button",{type:"button",className:"btn btn-dashed btn-pill",children:"Details"})})]})]})]})})};var v=g},7240:function(e,s,r){"use strict";var l=r(5893),a=r(7294);let i=e=>{let s=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let r=s.current;if(r&&r.classList.contains("bg-img")){let l=r.parentElement,a=e.src;l.classList.add("bg-size"),r.style.display="none",l.setAttribute("style","\n        background-image: url(".concat(a,");\n        background-size:cover; \n        background-position: center;\n        background-repeat: no-repeat;\n        display: block;\n        "))}},[e.src]),(0,l.jsx)("img",{ref:s,...e,alt:""})};s.Z=i},8788:function(e,s,r){"use strict";r.d(s,{Y:function(){return a}});var l=r(6154);async function a(e){try{return await l.Z.get(e)}catch(s){console.error("Error",s)}}},8961:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return h}});var l=r(5893),a=r(7294),i=r(6564),t=r(6794),n=r(572),c=r(8788);let d=()=>{let[e,s]=(0,a.useState)();return(0,a.useEffect)(()=>{(0,c.Y)("".concat("http://localhost:4000/api","/property")).then(e=>{var r;s(null===(r=e.data)||void 0===r?void 0:r.LatestPropertyListingInEnterprise)}).catch(e=>console.log("Error",erroe))},[]),(0,l.jsx)(i.JX,{xl:"12",children:(0,l.jsx)(i.X2,{className:"property-2 column-sm property-label property-grid",children:e&&e.slice(0,6).map((e,s)=>(0,l.jsx)(i.JX,{xl:"4",md:"6 xl-6",children:(0,l.jsx)(n.Z,{data:e})},s))})})},o=()=>(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Z,{title:"Favourites",titleText:"Welcome To Admin Panel",parent:"My Properties"}),(0,l.jsx)(i.W2,{fluid:!0,children:(0,l.jsx)(i.X2,{children:(0,l.jsx)(i.JX,{lg:"12",children:(0,l.jsx)("div",{className:"property-admin mb-3",children:(0,l.jsx)("div",{className:"property-section section-sm",children:(0,l.jsxs)(i.X2,{className:"ratio_55 property-grid-2 property-map map-with-back",children:[(0,l.jsx)(i.JX,{className:"col-12",children:(0,l.jsx)("div",{className:"filter-panel",children:(0,l.jsxs)("div",{className:"listing-option",children:[(0,l.jsxs)("h5",{className:"mb-0",children:["Showing ",(0,l.jsx)("span",{children:"1-6 of 8"})," Listings"]}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"d-flex",children:[(0,l.jsx)("span",{className:"m-r-10",children:"Map view"}),(0,l.jsxs)(i.__,{className:"switch",children:[(0,l.jsx)(i.II,{type:"checkbox",className:"option-list",name:"step_1",defaultValue:"ani1",defaultChecked:!0}),(0,l.jsx)("span",{className:"switch-state"})]}),(0,l.jsx)("span",{className:"m-l-10",children:"List view"})]})})]})})}),(0,l.jsx)(d,{})]})})})})})})]});var h=o}},function(e){e.O(0,[308,774,888,179],function(){return e(e.s=8396)}),_N_E=e.O()}]);