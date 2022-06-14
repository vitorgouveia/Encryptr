(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[941],{1549:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/services/zenit",function(){return n(7308)}])},7308:function(e,t,n){"use strict";n.r(t);var r=n(4776),a=n.n(r),u=n(2322),i=n(2784),l=n(5237),o=n.n(l),s=n(8596),c=n(9730),f=n(7595),d=n(2626),v=n(6228),h=n(6796),x=n(6043),p=n(8110),b=n.n(p),w=n(4847),y=n.n(w);function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function k(e,t,n,r,a,u,i){try{var l=e[u](i),o=l.value}catch(s){return void n(s)}l.done?t(o):Promise.resolve(o).then(r,a)}function g(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function i(e){k(u,r,a,i,l,"next",e)}function l(e){k(u,r,a,i,l,"throw",e)}i(void 0)}))}}function j(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var _=o()((function(){return n.e(903).then(n.bind(n,1903))}),{loadableGenerated:{webpack:function(){return[1903]}}});t.default=function(){var e=(0,i.useState)(""),t=e[0],n=e[1],r=(0,i.useRef)(null),l=(0,i.useRef)(null),o=(0,i.useRef)(null),p=(0,i.useState)([]),w=p[0],m=p[1],k=(0,i.useState)(!1),S=k[0],C=(k[1],(0,i.useCallback)(g(a().mark((function e(){var t,u,i,s,c,f,d,v,h,p,b,y,k,g,_,S;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(t=r.current)||void 0===t?void 0:t.value){e.next=3;break}return e.abrupt("return");case 3:if(s=r.current.value.length<5,c=r.current.value.length>5,!s){e.next=10;break}return null===(f=r.current)||void 0===f||f.setState("warning"),null===(d=r.current)||void 0===d||d.setMessage("Word not big enough"),e.abrupt("return");case 10:if(!c){e.next=15;break}return null===(v=r.current)||void 0===v||v.setState("warning"),null===(h=r.current)||void 0===h||h.setMessage("Word too big"),e.abrupt("return");case 15:if(!w.find((function(e){var t;return(null===(t=r.current)||void 0===t?void 0:t.value)===e}))){e.next=21;break}return null===(p=r.current)||void 0===p||p.setState("error"),null===(b=r.current)||void 0===b||b.setMessage("That word is already on the list"),e.abrupt("return");case 21:if(y=r.current.value,m((function(e){return j(e).concat([y])})),null===(u=r.current)||void 0===u||u.setValue(""),w.length+1>1&&(null===(k=l.current)||void 0===k||k.setDisabled(!1),null===(g=o.current)||void 0===g||g.setDisabled(!1)),_=new x.VP({keys:j(w).concat([y])}),!(null===(i=l.current)||void 0===i?void 0:i.value)){e.next=31;break}return e.next=29,_.execute(l.current.value);case 29:S=e.sent,n(S);case 31:case"end":return e.stop()}}),e)}))),[w])),N=(0,i.useCallback)(function(){var e=g(a().mark((function e(t){var r,u,i,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m((function(e){return e.filter((function(e){return e!==t}))})),!(w.length-1<=1)){e.next=6;break}null===(r=l.current)||void 0===r||r.setDisabled(!0),null===(u=o.current)||void 0===u||u.setDisabled(!0),e.next=13;break;case 6:if(s=new x.VP({keys:w.filter((function(e){return e!==t}))}),!(null===(i=l.current)||void 0===i?void 0:i.value)){e.next=13;break}return e.next=11,s.execute(l.current.value);case 11:c=e.sent,n(c);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[w]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(_,{title:"Zenit"}),(0,u.jsx)(c.h,{}),(0,u.jsxs)("main",{className:y().container,children:[(0,u.jsxs)("header",{children:[(0,u.jsx)(f.X,{weight:"bold",variant:"title",children:"Zenit"}),(0,u.jsx)(f.X,{variant:"text",children:"Customizable Zenit"}),(0,u.jsx)(f.X,{variant:"text",children:"Add 2 or more keys for Zenit to work"})]}),(0,u.jsxs)("section",{children:[(0,u.jsxs)("form",{className:b().form,onSubmit:function(e){e.preventDefault(),C()},children:[(0,u.jsx)(d.Z,{ref:r,label:"Insert Key",placeholder:"any 5 letter word",type:"text"}),(0,u.jsx)(h.z,{onClick:C,variant:"outlined",children:"Add +"})]}),(0,u.jsx)("ul",{className:b().tagList,children:w.map((function(e){return(0,u.jsxs)("li",{children:[(0,u.jsx)(f.X,{variant:"text",weight:"bold",children:e}),(0,u.jsx)("button",{onClick:function(){return N(e)},children:(0,u.jsx)(s.We9,{size:24})})]},e)}))}),(0,u.jsx)(d.Z,{variant:"textarea",type:"text",disabled:!S,handleInputChange:function(){var e=g(a().mark((function e(t){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new x.VP({keys:w}),e.t0=n,e.next=4,r.execute(t.target.value);case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ref:l,placeholder:"",style:{width:"100%"}}),(0,u.jsx)(d.Z,{disabled:!S,style:{width:"100%"},variant:"textarea",label:"Result",type:"text",handleInputChange:function(){var e=g(a().mark((function e(t){var r,u;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u=new x.VP({keys:w}),n(t.target.value),null!==(r=l.current)&&void 0!==r){e.next=7;break}e.next=12;break;case 7:return e.t0=r,e.next=10,u.execute(t.target.value);case 10:e.t1=e.sent,e.t0.setValue.call(e.t0,e.t1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ref:o,value:t,placeholder:""})]})]}),(0,u.jsx)(v.$_,{})]})}},8110:function(e){e.exports={form:"zenit_form__UaNOo",tagList:"zenit_tagList__BNxyP"}}},function(e){e.O(0,[656,237,596,230,262,774,888,179],(function(){return t=1549,e(e.s=t);var t}));var t=e.O();_N_E=t}]);