(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{1088:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(s){i=!0,o=s}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=r(2784))&&a.__esModule?a:{default:a},i=r(4e3),s=r(2203),c=r(8599);function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var f={};function d(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;f[t+"%"+r+(o?"%"+o:"")]=!0}}var p=u.default.forwardRef((function(e,t){var r,n=e.legacyBehavior,a=void 0===n?!0!==Boolean(!1):n,p=e.href,y=e.as,m=e.children,v=e.prefetch,b=e.passHref,h=e.replace,g=e.shallow,j=e.scroll,O=e.locale,_=e.onClick,w=e.onMouseEnter,x=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,a&&"string"===typeof r&&(r=u.default.createElement("a",null,r));var S,P=!1!==v,E=s.useRouter(),C=u.default.useMemo((function(){var e=o(i.resolveHref(E,p,!0),2),t=e[0],r=e[1];return{href:t,as:y?i.resolveHref(E,y):r||t}}),[E,p,y]),k=C.href,M=C.as,T=u.default.useRef(k),I=u.default.useRef(M);a&&(S=u.default.Children.only(r));var R=a?S&&"object"===typeof S&&S.ref:t,A=o(c.useIntersection({rootMargin:"200px"}),3),L=A[0],$=A[1],D=A[2],q=u.default.useCallback((function(e){I.current===M&&T.current===k||(D(),I.current=M,T.current=k),L(e),R&&("function"===typeof R?R(e):"object"===typeof R&&(R.current=e))}),[M,R,k,D,L]);u.default.useEffect((function(){var e=$&&P&&i.isLocalURL(k),t="undefined"!==typeof O?O:E&&E.locale,r=f[k+"%"+M+(t?"%"+t:"")];e&&!r&&d(E,k,M,{locale:t})}),[M,k,$,O,P,E]);var N={ref:q,onClick:function(e){a||"function"!==typeof _||_(e),a&&S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,u,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:s,scroll:u}))}(e,E,k,M,h,g,j,O)},onMouseEnter:function(e){a||"function"!==typeof w||w(e),a&&S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),i.isLocalURL(k)&&d(E,k,M,{priority:!0})}};if(!a||b||"a"===S.type&&!("href"in S.props)){var V="undefined"!==typeof O?O:E&&E.locale,Q=E&&E.isLocaleDomain&&i.getDomainLocale(M,V,E&&E.locales,E&&E.domainLocales);N.href=Q||i.addBasePath(i.addLocale(M,V,E&&E.defaultLocale))}return a?u.default.cloneElement(S,N):u.default.createElement("a",Object.assign({},x,N),r)}));t.default=p,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},8599:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],u=!0,i=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(s){i=!0,o=s}finally{try{u||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,l=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],y=o(a.useState(t?t.current:null),2),m=y[0],v=y[1],b=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=s.get(n):(t=s.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,u=n.elements;return u.set(e,t),a.observe(e),function(){if(u.delete(e),a.unobserve(e),0===u.size){a.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:m,rootMargin:r}))}),[n,m,r,d]),h=a.useCallback((function(){p(!1)}),[]);return a.useEffect((function(){if(!i&&!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[b,d,h]};var a=r(2784),u=r(1424),i="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5263:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};u=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](u):u instanceof s)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=o({},n,e));var u,s;var c=n=o({},n,t);if(c.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(c.suspense)return r(c);n.loadableGenerated&&delete(n=o({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,i(r,n);delete n.ssr}return r(n)},t.noSSR=i;u(r(2784));var a=u(r(5933));function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},4798:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((n=r(2784))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=o},5933:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){o(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,i=(u=r(2784))&&u.__esModule?u:{default:u},s=r(1219),c=r(4798);var l=[],f=[],d=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,o;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),o&&n(t,o),e}();function m(e){return function(e,t){var r=function(){if(!o){var t=new y(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=i.default.lazy(n.loader));var o=null;if(!d&&!n.suspense){var u=n.webpack?n.webpack():n.modules;u&&f.push((function(e){var t=!0,n=!1,o=void 0;try{for(var a,i=u[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return r()}}catch(c){n=!0,o=c}finally{try{t||null==i.return||i.return()}finally{if(n)throw o}}}))}var l=n.suspense?function(e,t){return i.default.createElement(n.lazy,a({},e,{ref:t}))}:function(e,t){r();var a=i.default.useContext(c.LoadableContext),u=s.useSubscription(o);return i.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),i.default.useMemo((function(){return u.loading||u.error?i.default.createElement(n.loading,{isLoading:u.loading,pastDelay:u.pastDelay,timedOut:u.timedOut,error:u.error,retry:o.retry}):u.loaded?i.default.createElement(function(e){return e&&e.__esModule?e.default:e}(u.loaded),e):null}),[e,u])};return l.preload=function(){return!n.suspense&&r()},l.displayName="LoadableComponent",i.default.forwardRef(l)}(p,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}m.preloadAll=function(){return new Promise((function(e,t){v(l).then(e,t)}))},m.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return d=!0,t()};v(f,e).then(r,r)}))},window.__NEXT_PRELOADREADY=m.preloadReady;var b=m;t.default=b},1219:function(e,t,r){!function(){"use strict";var t={800:function(e){var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;var n=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,a){for(var u,i,s=o(e),c=1;c<arguments.length;c++){for(var l in u=Object(arguments[c]))r.call(u,l)&&(s[l]=u[l]);if(t){i=t(u);for(var f=0;f<i.length;f++)n.call(u,i[f])&&(s[i[f]]=u[i[f]])}}return s}},569:function(e,t,r){0},403:function(e,t,r){var n=r(800),o=r(522);t.useSubscription=function(e){var t=e.getCurrentValue,r=e.subscribe,a=o.useState((function(){return{getCurrentValue:t,subscribe:r,value:t()}}));e=a[0];var u=a[1];return a=e.value,e.getCurrentValue===t&&e.subscribe===r||(a=t(),u({getCurrentValue:t,subscribe:r,value:a})),o.useDebugValue(a),o.useEffect((function(){function e(){if(!o){var e=t();u((function(o){return o.getCurrentValue!==t||o.subscribe!==r||o.value===e?o:n({},o,{value:e})}))}}var o=!1,a=r(e);return e(),function(){o=!0,a()}}),[t,r]),a}},138:function(e,t,r){e.exports=r(403)},522:function(e){e.exports=r(2784)}},n={};function o(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}},u=!0;try{t[e](a,a.exports,o),u=!1}finally{u&&delete n[e]}return a.exports}o.ab="//";var a=o(138);e.exports=a}()},5237:function(e,t,r){e.exports=r(5263)},9097:function(e,t,r){e.exports=r(1088)},5632:function(e,t,r){e.exports=r(2203)},7160:function(e,t,r){var n;n=e=>(()=>{var t={"./node_modules/css-mediaquery/index.js":(e,t)=>{"use strict";t.match=function(e,t){return i(e).some((function(e){var r=e.inverse,n="all"===e.type||t.type===e.type;if(n&&r||!n&&!r)return!1;var o=e.expressions.every((function(e){var r=e.feature,n=e.modifier,o=e.value,a=t[r];if(!a)return!1;switch(r){case"orientation":case"scan":return a.toLowerCase()===o.toLowerCase();case"width":case"height":case"device-width":case"device-height":o=l(o),a=l(a);break;case"resolution":o=c(o),a=c(a);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":o=s(o),a=s(a);break;case"grid":case"color":case"color-index":case"monochrome":o=parseInt(o,10)||1,a=parseInt(a,10)||0}switch(n){case"min":return a>=o;case"max":return a<=o;default:return a===o}}));return o&&!r||!o&&r}))},t.parse=i;var r=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,n=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,o=/^(?:(min|max)-)?(.+)/,a=/(em|rem|px|cm|mm|in|pt|pc)?$/,u=/(dpi|dpcm|dppx)?$/;function i(e){return e.split(",").map((function(e){var t=(e=e.trim()).match(r),a=t[1],u=t[2],i=t[3]||"",s={};return s.inverse=!!a&&"not"===a.toLowerCase(),s.type=u?u.toLowerCase():"all",i=i.match(/\([^\)]+\)/g)||[],s.expressions=i.map((function(e){var t=e.match(n),r=t[1].toLowerCase().match(o);return{modifier:r[1],feature:r[2],value:t[2]}})),s}))}function s(e){var t,r=Number(e);return r||(r=(t=e.match(/^(\d+)\s*\/\s*(\d+)$/))[1]/t[2]),r}function c(e){var t=parseFloat(e);switch(String(e).match(u)[1]){case"dpcm":return t/2.54;case"dppx":return 96*t;default:return t}}function l(e){var t=parseFloat(e);switch(String(e).match(a)[1]){case"em":case"rem":return 16*t;case"cm":return 96*t/2.54;case"mm":return 96*t/2.54/10;case"in":return 96*t;case"pt":return 72*t;case"pc":return 72*t/12;default:return t}}},"./node_modules/hyphenate-style-name/index.js":(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i});var n=/[A-Z]/g,o=/^ms-/,a={};function u(e){return"-"+e.toLowerCase()}const i=function(e){if(a.hasOwnProperty(e))return a[e];var t=e.replace(n,u);return a[e]=o.test(t)?"-"+t:t}},"./node_modules/matchmediaquery/index.js":(e,t,r)=>{"use strict";var n=r("./node_modules/css-mediaquery/index.js").match,o="undefined"!==typeof window?window.matchMedia:null;function a(e,t,r){var a=this;if(o&&!r){var u=o.call(window,e);this.matches=u.matches,this.media=u.media,u.addListener(i)}else this.matches=n(e,t),this.media=e;function i(e){a.matches=e.matches,a.media=e.media}this.addListener=function(e){u&&u.addListener(e)},this.removeListener=function(e){u&&u.removeListener(e)},this.dispose=function(){u&&u.removeListener(i)}}e.exports=function(e,t,r){return new a(e,t,r)}},"./node_modules/object-assign/index.js":e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(e,a){for(var u,i,s=o(e),c=1;c<arguments.length;c++){for(var l in u=Object(arguments[c]))r.call(u,l)&&(s[l]=u[l]);if(t){i=t(u);for(var f=0;f<i.length;f++)n.call(u,i[f])&&(s[i[f]]=u[i[f]])}}return s}},"./node_modules/prop-types/checkPropTypes.js":(e,t,r)=>{"use strict";var n=function(){},o=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),a={},u=r("./node_modules/prop-types/lib/has.js");function i(e,t,r,i,s){for(var c in e)if(u(e,c)){var l;try{if("function"!==typeof e[c]){var f=Error((i||"React class")+": "+r+" type `"+c+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[c]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw f.name="Invariant Violation",f}l=e[c](t,c,i,r,null,o)}catch(p){l=p}if(!l||l instanceof Error||n((i||"React class")+": type specification of "+r+" `"+c+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in a)){a[l.message]=!0;var d=s?s():"";n("Failed "+r+" type: "+l.message+(null!=d?d:""))}}}n=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},i.resetWarningCache=function(){a={}},e.exports=i},"./node_modules/prop-types/factoryWithTypeCheckers.js":(e,t,r)=>{"use strict";var n=r("./node_modules/react-is/index.js"),o=r("./node_modules/object-assign/index.js"),a=r("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),u=r("./node_modules/prop-types/lib/has.js"),i=r("./node_modules/prop-types/checkPropTypes.js"),s=function(){};function c(){return null}s=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(r){}},e.exports=function(e,t){var r="function"===typeof Symbol&&Symbol.iterator,l="<<anonymous>>",f={array:m("array"),bigint:m("bigint"),bool:m("boolean"),func:m("function"),number:m("number"),object:m("object"),string:m("string"),symbol:m("symbol"),any:y(c),arrayOf:function(e){return y((function(t,r,n,o,u){if("function"!==typeof e)return new p("Property `"+u+"` of component `"+n+"` has invalid PropType notation inside arrayOf.");var i=t[r];if(!Array.isArray(i))return new p("Invalid "+o+" `"+u+"` of type `"+h(i)+"` supplied to `"+n+"`, expected an array.");for(var s=0;s<i.length;s++){var c=e(i,s,n,o,u+"["+s+"]",a);if(c instanceof Error)return c}return null}))},element:y((function(t,r,n,o,a){var u=t[r];return e(u)?null:new p("Invalid "+o+" `"+a+"` of type `"+h(u)+"` supplied to `"+n+"`, expected a single ReactElement.")})),elementType:y((function(e,t,r,o,a){var u=e[t];return n.isValidElementType(u)?null:new p("Invalid "+o+" `"+a+"` of type `"+h(u)+"` supplied to `"+r+"`, expected a single ReactElement type.")})),instanceOf:function(e){return y((function(t,r,n,o,a){if(!(t[r]instanceof e)){var u=e.name||l;return new p("Invalid "+o+" `"+a+"` of type `"+((i=t[r]).constructor&&i.constructor.name?i.constructor.name:l)+"` supplied to `"+n+"`, expected instance of `"+u+"`.")}var i;return null}))},node:y((function(e,t,r,n,o){return b(e[t])?null:new p("Invalid "+n+" `"+o+"` supplied to `"+r+"`, expected a ReactNode.")})),objectOf:function(e){return y((function(t,r,n,o,i){if("function"!==typeof e)return new p("Property `"+i+"` of component `"+n+"` has invalid PropType notation inside objectOf.");var s=t[r],c=h(s);if("object"!==c)return new p("Invalid "+o+" `"+i+"` of type `"+c+"` supplied to `"+n+"`, expected an object.");for(var l in s)if(u(s,l)){var f=e(s,l,n,o,i+"."+l,a);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return s(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),c;function t(t,r,n,o,a){for(var u=t[r],i=0;i<e.length;i++)if(d(u,e[i]))return null;var s=JSON.stringify(e,(function(e,t){return"symbol"===g(t)?String(t):t}));return new p("Invalid "+o+" `"+a+"` of value `"+String(u)+"` supplied to `"+n+"`, expected one of "+s+".")}return y(t)},oneOfType:function(e){if(!Array.isArray(e))return s("Invalid argument supplied to oneOfType, expected an instance of array."),c;for(var t=0;t<e.length;t++){var r=e[t];if("function"!==typeof r)return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+j(r)+" at index "+t+"."),c}return y((function(t,r,n,o,i){for(var s=[],c=0;c<e.length;c++){var l=(0,e[c])(t,r,n,o,i,a);if(null==l)return null;l.data&&u(l.data,"expectedType")&&s.push(l.data.expectedType)}return new p("Invalid "+o+" `"+i+"` supplied to `"+n+"`"+(s.length>0?", expected one of type ["+s.join(", ")+"]":"")+".")}))},shape:function(e){return y((function(t,r,n,o,u){var i=t[r],s=h(i);if("object"!==s)return new p("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+n+"`, expected `object`.");for(var c in e){var l=e[c];if("function"!==typeof l)return v(n,o,u,c,g(l));var f=l(i,c,n,o,u+"."+c,a);if(f)return f}return null}))},exact:function(e){return y((function(t,r,n,i,s){var c=t[r],l=h(c);if("object"!==l)return new p("Invalid "+i+" `"+s+"` of type `"+l+"` supplied to `"+n+"`, expected `object`.");var f=o({},t[r],e);for(var d in f){var y=e[d];if(u(e,d)&&"function"!==typeof y)return v(n,i,s,d,g(y));if(!y)return new p("Invalid "+i+" `"+s+"` key `"+d+"` supplied to `"+n+"`.\nBad object: "+JSON.stringify(t[r],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var m=y(c,d,n,i,s+"."+d,a);if(m)return m}return null}))}};function d(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function p(e,t){this.message=e,this.data=t&&"object"===typeof t?t:{},this.stack=""}function y(e){var r={},n=0;function o(o,u,i,c,f,d,y){if(c=c||l,d=d||i,y!==a){if(t){var m=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw m.name="Invariant Violation",m}if("undefined"!==typeof console){var v=c+":"+i;!r[v]&&n<3&&(s("You are manually calling a React.PropTypes validation function for the `"+d+"` prop on `"+c+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),r[v]=!0,n++)}}return null==u[i]?o?null===u[i]?new p("The "+f+" `"+d+"` is marked as required in `"+c+"`, but its value is `null`."):new p("The "+f+" `"+d+"` is marked as required in `"+c+"`, but its value is `undefined`."):null:e(u,i,c,f,d)}var u=o.bind(null,!1);return u.isRequired=o.bind(null,!0),u}function m(e){return y((function(t,r,n,o,a,u){var i=t[r];return h(i)!==e?new p("Invalid "+o+" `"+a+"` of type `"+g(i)+"` supplied to `"+n+"`, expected `"+e+"`.",{expectedType:e}):null}))}function v(e,t,r,n,o){return new p((e||"React class")+": "+t+" type `"+r+"."+n+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+o+"`.")}function b(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(b);if(null===t||e(t))return!0;var n=function(e){var t=e&&(r&&e[r]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!n)return!1;var o,a=n.call(t);if(n!==t.entries){for(;!(o=a.next()).done;)if(!b(o.value))return!1}else for(;!(o=a.next()).done;){var u=o.value;if(u&&!b(u[1]))return!1}return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function g(e){if("undefined"===typeof e||null===e)return""+e;var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function j(e){var t=g(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return p.prototype=Error.prototype,f.checkPropTypes=i,f.resetWarningCache=i.resetWarningCache,f.PropTypes=f,f}},"./node_modules/prop-types/index.js":(e,t,r)=>{var n=r("./node_modules/react-is/index.js");e.exports=r("./node_modules/prop-types/factoryWithTypeCheckers.js")(n.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/prop-types/lib/has.js":e=>{e.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(e,t)=>{"use strict";!function(){var e="function"===typeof Symbol&&Symbol.for,r=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,s=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,g=e?Symbol.for("react.scope"):60119;function j(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:var p=e.type;switch(p){case c:case l:case o:case u:case a:case d:return p;default:var v=p&&p.$$typeof;switch(v){case s:case f:case m:case y:case i:return v;default:return t}}case n:return t}}}var O=c,_=l,w=s,x=i,S=r,P=f,E=o,C=m,k=y,M=n,T=u,I=a,R=d,A=!1;function L(e){return j(e)===l}t.AsyncMode=O,t.ConcurrentMode=_,t.ContextConsumer=w,t.ContextProvider=x,t.Element=S,t.ForwardRef=P,t.Fragment=E,t.Lazy=C,t.Memo=k,t.Portal=M,t.Profiler=T,t.StrictMode=I,t.Suspense=R,t.isAsyncMode=function(e){return A||(A=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),L(e)||j(e)===c},t.isConcurrentMode=L,t.isContextConsumer=function(e){return j(e)===s},t.isContextProvider=function(e){return j(e)===i},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return j(e)===f},t.isFragment=function(e){return j(e)===o},t.isLazy=function(e){return j(e)===m},t.isMemo=function(e){return j(e)===y},t.isPortal=function(e){return j(e)===n},t.isProfiler=function(e){return j(e)===u},t.isStrictMode=function(e){return j(e)===a},t.isSuspense=function(e){return j(e)===d},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===l||e===u||e===a||e===d||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===i||e.$$typeof===s||e.$$typeof===f||e.$$typeof===b||e.$$typeof===h||e.$$typeof===g||e.$$typeof===v)},t.typeOf=j}()},"./node_modules/react-is/index.js":(e,t,r)=>{"use strict";e.exports=r("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(e,t,r)=>{"use strict";function n(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=Object.keys(e),n=Object.keys(t),o=r.length;if(n.length!==o)return!1;for(var a=0;a<o;a++){var u=r[a];if(e[u]!==t[u]||!Object.prototype.hasOwnProperty.call(t,u))return!1}return!0}function o(e,t){if(e===t)return!0;if(!e||!t)return!1;var r=e.length;if(t.length!==r)return!1;for(var n=0;n<r;n++)if(e[n]!==t[n])return!1;return!0}r.r(t),r.d(t,{shallowEqualArrays:()=>o,shallowEqualObjects:()=>n})},"./src/Component.ts":function(e,t,r){"use strict";var n=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=o(r("./src/useMediaQuery.ts"));t.default=function(e){var t=e.children,r=e.device,o=e.onChange,u=n(e,["children","device","onChange"]),i=(0,a.default)(u,r,o);return"function"===typeof t?t(i):i?t:null}},"./src/Context.ts":(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=(0,r("react").createContext)(void 0);t.default=n},"./src/index.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Context=t.toQuery=t.useMediaQuery=t.default=void 0;var o=n(r("./src/useMediaQuery.ts"));t.useMediaQuery=o.default;var a=n(r("./src/Component.ts"));t.default=a.default;var u=n(r("./src/toQuery.ts"));t.toQuery=u.default;var i=n(r("./src/Context.ts"));t.Context=i.default},"./src/mediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var u=a(r("./node_modules/prop-types/index.js")),i=u.default.oneOfType([u.default.string,u.default.number]),s={all:u.default.bool,grid:u.default.bool,aural:u.default.bool,braille:u.default.bool,handheld:u.default.bool,print:u.default.bool,projection:u.default.bool,screen:u.default.bool,tty:u.default.bool,tv:u.default.bool,embossed:u.default.bool},c={orientation:u.default.oneOf(["portrait","landscape"]),scan:u.default.oneOf(["progressive","interlace"]),aspectRatio:u.default.string,deviceAspectRatio:u.default.string,height:i,deviceHeight:i,width:i,deviceWidth:i,color:u.default.bool,colorIndex:u.default.bool,monochrome:u.default.bool,resolution:i,type:Object.keys(s)},l=o(c,["type"]),f=n({minAspectRatio:u.default.string,maxAspectRatio:u.default.string,minDeviceAspectRatio:u.default.string,maxDeviceAspectRatio:u.default.string,minHeight:i,maxHeight:i,minDeviceHeight:i,maxDeviceHeight:i,minWidth:i,maxWidth:i,minDeviceWidth:i,maxDeviceWidth:i,minColor:u.default.number,maxColor:u.default.number,minColorIndex:u.default.number,maxColorIndex:u.default.number,minMonochrome:u.default.number,maxMonochrome:u.default.number,minResolution:i,maxResolution:i},l),d=n(n({},s),f);t.default={all:d,types:s,matchers:c,features:f}},"./src/toQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r("./node_modules/hyphenate-style-name/index.js")),a=n(r("./src/mediaQuery.ts"));t.default=function(e){var t=[];return Object.keys(a.default.all).forEach((function(r){var n=e[r];null!=n&&t.push(function(e,t){var r=(0,o.default)(e);return"number"===typeof t&&(t="".concat(t,"px")),!0===t?r:!1===t?"not ".concat(r):"(".concat(r,": ").concat(t,")")}(r,n))})),t.join(" and ")}},"./src/useMediaQuery.ts":function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r("react"),a=n(r("./node_modules/matchmediaquery/index.js")),u=n(r("./node_modules/hyphenate-style-name/index.js")),i=r("./node_modules/shallow-equal/dist/index.esm.js"),s=n(r("./src/toQuery.ts")),c=n(r("./src/Context.ts")),l=function(e){if(e)return Object.keys(e).reduce((function(t,r){return t[(0,u.default)(r)]=e[r],t}),{})},f=function(){var e=(0,o.useRef)(!1);return(0,o.useEffect)((function(){e.current=!0}),[]),e.current},d=function(e){var t=function(){return function(e){return e.query||(0,s.default)(e)}(e)},r=(0,o.useState)(t),n=r[0],a=r[1];return(0,o.useEffect)((function(){var e=t();n!==e&&a(e)}),[e]),n};t.default=function(e,t,r){var n=function(e){var t=(0,o.useContext)(c.default),r=function(){return l(e)||l(t)},n=(0,o.useState)(r),a=n[0],u=n[1];return(0,o.useEffect)((function(){var e=r();(0,i.shallowEqualObjects)(a,e)||u(e)}),[e,t]),a}(t),u=d(e);if(!u)throw new Error("Invalid or missing MediaQuery!");var s=function(e,t){var r=function(){return(0,a.default)(e,t||{},!!t)},n=(0,o.useState)(r),u=n[0],i=n[1],s=f();return(0,o.useEffect)((function(){if(s){var e=r();return i(e),function(){e&&e.dispose()}}}),[e,t]),u}(u,n),p=function(e){var t=(0,o.useState)(e.matches),r=t[0],n=t[1];return(0,o.useEffect)((function(){var t=function(e){n(e.matches)};return e.addListener(t),n(e.matches),function(){e.removeListener(t)}}),[e]),r}(s),y=f();return(0,o.useEffect)((function(){y&&r&&r(p)}),[p]),(0,o.useEffect)((function(){return function(){s&&s.dispose()}}),[]),p}},react:t=>{"use strict";t.exports=e}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}return n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/index.ts")})(),e.exports=n(r(2784))}}]);