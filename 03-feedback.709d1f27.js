!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o),o.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}}));var i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t){return u.default(e)||a.default(e,t)||l.default(e,t)||f.default()};var u=c(o("8slrw")),a=c(o("7AJDX")),f=c(o("ifqQW")),l=c(o("auk6i"));function c(e){return e&&e.__esModule?e:{default:e}}var s={save:function(e,t){try{var r=JSON.stringify(t);localStorage.setItem(e,r)}catch(e){console.error("Set state error: ",e.message)}},load:function(e){try{var t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}},remove:function(e){try{localStorage.removeItem(e)}catch(e){console.error("Get state error: ",e.message)}}},d={},v={};Object.defineProperty(v,"__esModule",{value:!0}),v.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var p="Expected a function",m=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,g=/^0o[0-7]+$/i,O=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,x=_||j||Function("return this")(),h=Object.prototype.toString,w=Math.max,S=Math.min,M=function(){return x.Date.now()};function T(e,t,r){var n,o,i,u,a,f,l=0,c=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(p);function v(t){var r=n,i=o;return n=o=void 0,l=t,u=e.apply(i,r)}function m(e){return l=e,a=setTimeout(b,t),c?v(e):u}function y(e){var r=e-f;return void 0===f||r>=t||r<0||s&&e-l>=i}function b(){var e=M();if(y(e))return g(e);a=setTimeout(b,function(e){var r=t-(e-f);return s?S(r,i-(e-l)):r}(e))}function g(e){return a=void 0,d&&n?v(e):(n=o=void 0,u)}function O(){var e=M(),r=y(e);if(n=arguments,o=this,f=e,r){if(void 0===a)return m(f);if(s)return a=setTimeout(b,t),v(f)}return void 0===a&&(a=setTimeout(b,t)),u}return t=k(t)||0,N(r)&&(c=!!r.leading,i=(s="maxWait"in r)?w(k(r.maxWait)||0,t):i,d="trailing"in r?!!r.trailing:d),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,n=f=o=a=void 0},O.flush=function(){return void 0===a?u:g(M())},O}function N(t){var r=void 0===t?"undefined":e(v)(t);return!!t&&("object"==r||"function"==r)}function k(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(v)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(m,"");var n=b.test(t);return n||g.test(t)?O(t.slice(2),n?2:8):y.test(t)?NaN:+t}d=function(e,t,r){var n=!0,o=!0;if("function"!=typeof e)throw new TypeError(p);return N(r)&&(n="leading"in r?!!r.leading:n,o="trailing"in r?!!r.trailing:o),T(e,t,{leading:n,maxWait:t,trailing:o})};var A=document.querySelector(".feedback-form");!function(){var t=s.load("feedback-form-state");if(!t)return;Object.entries(t).forEach((function(t){var r=e(i)(t,2),n=r[0],o=r[1];A.elements[n].value=o}))}(),A.addEventListener("input",d((function e(t){var r=t.target,n=r.name,o=r.value,i=s.load("feedback-form-state");(i=i||{})[n]=o,s.save("feedback-form-state",i),console.log(e)}),500)),A.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,r=t.email,n=t.message;console.log({email:r.value,message:n.value}),e.currentTarget.reset(),s.remove("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.709d1f27.js.map
