(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{5792:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return n(9979)}])},2626:function(e,r,n){"use strict";var t=n(2322),a=n(2784),l=n(7164),s=n(609),i=n.n(s);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){o(e,r,n[r])}))}return e}function d(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=function(e,r){var n=e.variant,s=void 0===n?"input":n,o=e.placeholder,u=e.disabled,f=void 0!==u&&u,h=e.message,p=void 0===h?"":h,v=e.state,b=void 0===v?"none":v,j=e.label,x=e.rightIcon,m=e.leftIcon,g=e.type,y=void 0===g?"text":g,_=e.handleInputChange,O=e.style,N=e.inputWrapperClassname,w=d(e,["variant","placeholder","disabled","message","state","label","rightIcon","leftIcon","type","handleInputChange","style","inputWrapperClassname"]),I=(0,a.useState)(f),S=I[0],C=I[1],P=(0,a.useState)(""),z=P[0],E=P[1],k=(0,a.useState)(b),F=k[0],X=k[1],A=(0,a.useState)(p),R=A[0],W=A[1],D=(0,a.useState)(y),T=D[0],U=D[1],M=(0,a.useState)(null),Q=M[0],G=M[1];(0,a.useEffect)((function(){G((0,l.x0)(6))}),[]);var H=(0,a.useCallback)((function(e){E(e.target.value),_&&_(e)}),[_]),L=(0,a.useCallback)((function(){W(""),X("focused")}),[]),Z=(0,a.useCallback)((function(){X("none")}),[]);return(0,a.useImperativeHandle)(r,(function(){return{handleInputChange:H,setMessage:W,setValue:E,setState:X,setType:U,type:T,setDisabled:C,value:z,id:Q}})),(0,t.jsxs)("div",{className:"".concat(i().inputWrapper),"data-disabled":S,"data-state":F,"data-errored":!!R,style:O,children:[j&&(0,t.jsx)("label",{htmlFor:"input-".concat(Q),children:j}),(0,t.jsxs)("div",{className:"".concat(i().inputInnerWrapper," ").concat(N),children:[m&&(0,t.jsx)("div",{className:i().leftIcon,children:m}),"input"===s&&(0,t.jsx)("input",c({id:"input-".concat(Q),type:T,style:{paddingLeft:m?"var(--size-600)":"var(--size-200)",paddingRight:x?"var(--size-400)":"var(--size-200)"},value:z,placeholder:o,disabled:S,onFocus:L,onBlur:Z,onChange:H},w)),"textarea"===s&&(0,t.jsx)("textarea",c({id:"input-".concat(Q),style:{paddingLeft:m?"var(--size-400)":"var(--size-200)",paddingRight:x?"var(--size-400)":"var(--size-200)"},value:z,placeholder:o,disabled:S,rows:10,onFocus:L,onBlur:Z,onChange:H},w)),x&&(0,t.jsx)("div",{className:i().rightIcon,children:x})]}),j&&(0,t.jsx)("span",{className:i().message,children:R})]})};r.Z=(0,a.forwardRef)(u)},9979:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return N}});var t=n(2322),a=n(5237),l=n.n(a),s=n(8596),i=n(2784),o=n(23),c=n(3721),d=n(2626),u=n(7595),f=n(9984),h=n(1420),p=n.n(h),v=n(3668),b=function(){return(0,t.jsx)("div",{className:"folder",children:(0,t.jsxs)("div",{className:"folder__back",children:[(0,t.jsx)("div",{className:"paper"}),(0,t.jsx)("div",{className:"paper"}),(0,t.jsx)("div",{className:"paper"}),(0,t.jsx)("div",{className:"folder__front"}),(0,t.jsx)("div",{className:"folder__front right"})]})})},j=n(5632),x=n(4267);function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function g(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function y(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){g(e,r,n[r])}))}return e}function _(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var t,a,l=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(t=n.next()).done)&&(l.push(t.value),!r||l.length!==r);s=!0);}catch(o){i=!0,a=o}finally{try{s||null==n.return||n.return()}finally{if(i)throw a}}return l}}(e,r)||function(e,r){if(!e)return;if("string"===typeof e)return m(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var O=l()((function(){return n.e(903).then(n.bind(n,1903))}),{loadableGenerated:{webpack:function(){return[1903]}}}),N=function(){var e=(0,j.useRouter)().push,r=(0,i.useContext)(x.V),n=r.user,a=r.handleCreateFile,l=r.handleUpdateFilesOrder,h=(0,i.useState)((null===n||void 0===n?void 0:n.files)||[]),m=h[0],g=h[1];(0,i.useEffect)((function(){g((null===n||void 0===n?void 0:n.files)||[])}),[null===n||void 0===n?void 0:n.files]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(O,{title:"Files",defaultTitle:"Dashboard Encryptr"}),(0,t.jsxs)("main",{className:p().container,children:[(0,t.jsx)(c.Y,{}),(0,t.jsxs)("section",{children:[(0,t.jsx)("header",{children:(0,t.jsx)(d.Z,{leftIcon:(0,t.jsx)(s.jRj,{color:"var(--color-gray-600)",size:24}),placeholder:"Search Anything"})}),(0,t.jsxs)("div",{className:p().breadcrumbs,children:[(0,t.jsx)(v.r,{href:"/dashboard",className:p().headingMuted,children:(0,t.jsx)(u.X,{variant:"small",children:"Dashboard"})}),(0,t.jsx)("span",{className:p().cog,children:(0,t.jsx)(f.O,{})}),(0,t.jsx)(v.r,{href:"/dashboard/files",className:p().headingActive,children:(0,t.jsx)(u.X,{variant:"small",children:"Files"})})]}),(0,t.jsxs)("div",{className:p().folders,children:[(0,t.jsx)(u.X,{variant:"small",weight:"bold",children:"Folders"}),(0,t.jsxs)("ul",{children:[null===n||void 0===n?void 0:n.folders.map((function(e){var r=e.id,n=e.label;return(0,t.jsx)("li",{children:(0,t.jsxs)("button",{"data-folder-parent":"true",className:p().folder,children:[(0,t.jsx)(s.QoU,{size:32}),(0,t.jsx)(b,{}),(0,t.jsx)(u.X,{variant:"small",children:n})]})},r)})),(0,t.jsx)("li",{children:(0,t.jsxs)(v.r,{href:"/dashboard/folder/create",className:p().create,children:[(0,t.jsx)(s.QoU,{size:32}),(0,t.jsx)(u.X,{variant:"small",children:"Create new +"})]})})]})]}),(0,t.jsxs)("div",{className:p().files,children:[(0,t.jsx)(u.X,{variant:"small",weight:"bold",children:"Files"}),(0,t.jsx)(o.Z5,{onDragEnd:function(e,r){var n;if(e.destination){var t=Array.from(m),a=_(t.splice(e.source.index,1),1)[0];t.splice(null===(n=e.destination)||void 0===n?void 0:n.index,0,a),g(t),l(t)}},children:(0,t.jsx)(o.bK,{direction:"horizontal",droppableId:"files",children:function(r){return(0,t.jsxs)("ul",y({},r.droppableProps,{ref:r.innerRef,children:[null===m||void 0===m?void 0:m.map((function(e,r){var n=e.id,a=e.label;return(0,t.jsx)(o._l,{draggableId:n,index:r,children:function(e){return(0,t.jsx)("li",y({},e.draggableProps,{ref:e.innerRef},e.dragHandleProps,{children:(0,t.jsxs)(v.r,{draggable:!0,href:"/dashboard/file/".concat(n),className:p().file,children:[(0,t.jsx)(s.tHe,{size:32}),(0,t.jsx)(u.X,{variant:"small",children:a.slice(0,10)+"..."||0})]})}))}},n)})),r.placeholder,(0,t.jsx)("li",{children:(0,t.jsxs)("button",{onClick:function(){var r=a();e("/dashboard/file/".concat(r.id))},className:p().create,children:[(0,t.jsx)(s.QoU,{size:32}),(0,t.jsx)(u.X,{variant:"small",children:"Create new +"})]})})]}))}})})]})]})]})]})}},609:function(e){e.exports={inputWrapper:"styles_inputWrapper__0rRTn",inputInnerWrapper:"styles_inputInnerWrapper__rilSe",leftIcon:"styles_leftIcon__LYEoM",rightIcon:"styles_rightIcon__GOdG0",message:"styles_message__Qnc9N"}}},function(e){e.O(0,[139,656,237,596,364,370,774,888,179],(function(){return r=5792,e(e.s=r);var r}));var r=e.O();_N_E=r}]);