_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=l,t.useAmp=function(){return l(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery,l=void 0!==o&&o;return n||r&&l}},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=s();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},l=n("lwAK"),i=n("FYa8"),c=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var l=r.key.slice(r.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var i=0,c=f.length;i<c;i++){var s=f[i];if(r.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?o=!1:n.add(s);else{var u=r.props[s],p=a[s]||new Set;p.has(u)?o=!1:(p.add(u),a[s]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,r.useContext)(l.AmpStateContext),a=(0,r.useContext)(i.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var v=m;t.default=v},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),l=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||l()}},RNiq:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return X})),n.d(t,"default",(function(){return Z}));var a=n("q1tI"),r=n.n(a),o=n("8Kt/"),l=n.n(o),i=n("/MKj");function c(e,t){return e===t}function s(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var a=t.length,r=0;r<a;r++)if(!e(t[r],n[r]))return!1;return!0}function u(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var p=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return function(){for(var t=arguments.length,a=Array(t),r=0;r<t;r++)a[r]=arguments[r];var o=0,l=a.pop(),i=u(a),c=e.apply(void 0,[function(){return o++,l.apply(null,arguments)}].concat(n)),s=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return c.apply(null,e)}));return s.resultFunc=l,s.dependencies=i,s.recomputations=function(){return o},s.resetRecomputations=function(){return o=0},s}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c,n=null,a=null;return function(){return s(t,n,arguments)||(a=e.apply(null,arguments)),n=arguments,a}}));var f=function(e){return e.aSide.lang},d=function(e){return e.aSide.theme},m=p(f,(function(e){return e.page.data}),(function(e,t){return t[e]})),v=r.a.createElement;var _=Object(i.b)((function(e){return m(e).aboutMe}),null)((function(e){var t=e.title,n=e.facts;return v("section",{className:"Section","aria-label":t},v("h2",{className:"H H_level_2"},t),n.map((function(e,t){return v("p",{key:t},"- ",e)})))})),h=r.a.createElement;var y=Object(i.b)((function(e){return m(e).aboutApp}),null)((function(e){var t=e.title,n=e.description;return h("section",{className:"Section","aria-label":t},h("h2",{className:"H H_level_2"},t),h("p",null,n," ",h("a",{href:"https://github.com/miyaokamarina/cv"},"https://github.com/miyaokamarina/cv")),h("p",null,"Built with\xa0React, Redux and Next.JS"))})),b=r.a.createElement;var g=Object(i.b)((function(e){return m(e).projectList}),null)((function(e){var t=e.title,n=e.items;return b("section",{className:"Section","aria-label":t},b("h2",{className:"H H_level_2"},t),b("section",{className:"Section"},n.map((function(e){return b(r.a.Fragment,{key:e.groupName},b("h3",{className:"H H_level_3"},e.groupName),b("ul",{className:"Ul"},e.projects.map((function(e){return b("li",{className:"Ul__Item",key:e.name},b("a",{href:e.link},e.name),": ",e.description)}))))}))))})),N=r.a.createElement;var k=Object(i.b)((function(e){return m(e).workExperience}),null)((function(e){var t=e.title,n=e.list,a=e.responsibilities,o=e.techStack;return N("section",{className:"Section","aria-label":t},N("h2",{className:"H H_level_2"},t),n.map((function(e){return N("section",{className:"Section","aria-label":e.specialization,key:e.name},N("h3",{className:"H H_level_3"},e.specialization,N("div",{className:"Subtitle"},N("a",{href:e.link},e.name),", ",e.duration)),N("p",null,N("strong",{className:"Xps__Strong"},a,":")),N("p",null,e.description),e.stack&&e.stack.length&&N(r.a.Fragment,null,N("br",null),N("p",null,o,":"),e.stack.map((function(e,t){return N("p",{key:t},"- ",e)}))))})))})),P=r.a.createElement;var S=Object(i.b)((function(e){return m(e).keywords}),null)((function(e){var t=e.title,n=e.buzzWords;return P("section",{className:"Section","aria-label":t},P("h2",{className:"H H_level_2"},t),P("ul",{className:"Chips Buzzwords"},n.map((function(e){return P("li",{className:"static Chips__Item ".concat(e.status),key:e.name},e.name)}))))})),w=r.a.createElement;var I=Object(i.b)((function(e){return m(e).profile}),null)((function(e){var t=e.age.birthDate,n=Object(a.useMemo)((function(){return function(e){var t=new Date(e),n=new Date,a=n.getYear()-t.getYear();return n.getMonth()>t.getMonth()||n.getMonth()===t.getMonth()&&n.getDate()>=t.getDate()?a:a-1}(t)}),[t]);return w(r.a.Fragment,null,w("div",{className:"Split__Item"},w("dl",{className:"Properties"},w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.name.key,":"),w("dd",{className:"Properties__V"},e.name.value)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.age.key,":"),w("dd",{className:"Properties__V"},n)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.city.key,":"),w("dd",{className:"Properties__V"},e.city.value)),e.socialMedia.map((function(e){return w("div",{className:"Properties__Item",key:e.key},w("dt",{className:"Properties__K"},e.key,":"),w("dd",{className:"Properties__V"},w("a",{href:e.url},e.value)))})))),w("div",{className:"Split__Item"},w("dl",{className:"Properties"},w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.level.key,":"),w("dd",{className:"Properties__V"},e.level.value)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.english.key,":"),w("dd",{className:"Properties__V"},e.english.value)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.specialization.key,":"),w("dd",{className:"Properties__V"},e.specialization.value)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.salary.key,":"),w("dd",{className:"Properties__V"},e.salary.value)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.employment.key,":"),w("dd",{className:"Properties__V"},e.employment.value)),w("div",{className:"Properties__Item"},w("dt",{className:"Properties__K"},e.location.key,":"),w("dd",{className:"Properties__V"},e.location.value)))))})),x=r.a.createElement;function M(){return x("div",{className:"Split"},x("div",{className:"Split__Item"},x("div",{className:"Avatar"})),x(I,null))}var O=r.a.createElement;function C(){return O(r.a.Fragment,null,O("div",{className:"Center"},O("div",{className:"Center__Inner"},O("div",{className:"Avatar"}))),O("div",{className:"Center"},O("div",{className:"Center__Inner"},O("div",{className:"Split"},O(I,null)))))}var E=r.a.createElement;var j=Object(i.b)((function(e){return m(e).profile}),null)((function(e){return E("section",{className:"Section HeadingSection","aria-label":"".concat(e.name.value," CV (").concat(e.specialization.value," Developer)")},E("h1",{className:"H H_level_1"},e.name.value," ","CV (",e.specialization.value," ","Developer)"),E("div",{className:"print"},E(M,null)),E("div",{className:"no-print lte-s"},E(C,null)),E("div",{className:"no-print gte-m"},E(C,null)))})),A=r.a.createElement;function H(){return A("div",{className:"Page"},A("article",{className:"Page__Article"},A(j,null),A("div",{className:"no-print"},A(S,null),A(k,null),A(g,null),A(_,null),A(y,null)),A("div",{className:"print"},A(_,null),A(g,null),A(k,null))))}var D=n("aOBL"),R=function(e){return{type:D.a,lang:e}},K=function(e){return{type:D.b,theme:e}},V=r.a.createElement;var B=Object(i.b)((function(e){return{locale:m(e).aside,lang:f(e)}}),(function(e){return{setEnglish:function(){return e(R("en"))},setRussian:function(){return e(R("ru"))}}}))((function(e){var t=e.lang,n=e.locale,a=e.setRussian,r=e.setEnglish;return V("section",{className:"Section language","aria-label":n.lang},V("h2",{className:"H H_level_2"},n.lang),V("div",{className:"Buttons primary"},V("span",{role:"button",tabIndex:"0",onClick:a,className:"Buttons__Item LangSwitcher__Item_lang_ru ".concat("ru"===t?"checked":"")},"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"),V("span",{role:"button",tabIndex:"0",onClick:r,className:"Buttons__Item LangSwitcher__Item_lang_en ".concat("en"===t?"checked":"")},"English")))})),F=r.a.createElement;var T=Object(i.b)((function(e){return{locale:m(e).aside,theme:d(e)}}),(function(e){return{setDarkTheme:function(){return e(K("dark"))},setLightTheme:function(){return e(K("light"))}}}))((function(e){var t=e.locale,n=e.theme,a=e.setDarkTheme,r=e.setLightTheme;return F("section",{className:"Section scheme","aria-label":t.theme.title},F("h2",{className:"H H_level_2"},t.theme.title),F("div",{className:"Buttons primary"},F("span",{role:"button",tabIndex:"0","data-scheme":n,className:"Buttons__Item ".concat("dark"===n?"checked":""),onClick:a},t.theme.dark),F("span",{role:"button",tabIndex:"0","data-scheme":n,className:"Buttons__Item ".concat("light"===n?"checked":""),onClick:r},t.theme.light)))})),q=r.a.createElement;var W=Object(i.b)((function(e){return{locale:m(e).aside}}))((function(e){var t=e.locale;return q("section",{className:"Section","aria-label":t.downloadCv},q("div",{className:"Center Download"},q("div",{className:"Center__Inner"},q("a",{tabIndex:"0",role:"button",className:"Button secondary",href:"/assets/cv.aleksandr_loktionov.net-developer.pdf",download:"cv.aleksandr_loktionov.net-developer.pdf"},t.downloadCv))))})),z=r.a.createElement;function L(){return z("aside",{className:"Aside no-print gte-l1"},z(B,null),z(T,null),z(W,null))}var J=r.a.createElement;function Y(){return J(r.a.Fragment,null,J(H,null),J(L,null))}var U=r.a.createElement,X=!0;function Z(){return U(r.a.Fragment,null,U(l.a,null,U("title",null,"Aleksandr Loktionov's CV (Full Stack .NET Developer)")),U(Y,null))}},SksO:function(e,t){function n(t,a){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,a)}e.exports=n},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}e.exports=function(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),l=(n("PJYZ"),n("7W2i")),i=n("a1gu"),c=n("Nsbk");function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var r=c(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("q1tI"),p=function(e){l(n,e);var t=s(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=p},ZhPi:function(e,t,n){var a=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])}},[["vlRD",0,1,2]]]);