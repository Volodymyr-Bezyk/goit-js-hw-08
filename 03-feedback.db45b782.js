!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=f||c||Function("return this")(),g=Object.prototype.toString,m=Math.max,d=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var i,r,a,u,l,f,c=0,s=!1,g=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function h(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function O(e){return c=e,l=setTimeout(j,t),s?h(e):u}function S(e){var n=e-f;return void 0===f||n>=t||n<0||g&&e-c>=a}function j(){var e=v();if(S(e))return T(e);l=setTimeout(j,function(e){var n=t-(e-f);return g?d(n,a-(e-c)):n}(e))}function T(e){return l=void 0,p&&i?h(e):(i=r=void 0,u)}function w(){var e=v(),n=S(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return O(f);if(g)return l=setTimeout(j,t),h(f)}return void 0===l&&(l=setTimeout(j,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(g="maxWait"in n)?m(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),w.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=f=r=l=void 0},w.flush=function(){return void 0===l?u:T(v())},w}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}function h(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(e){console.log("ERROR:",e.message)}}function O(e){try{localStorage.removeItem(e)}catch(e){console.log("ERROR:",e.message)}}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:i,maxWait:t,trailing:r})};const S=document.querySelector(".feedback-form"),j="feedback-form-state",T=null===localStorage.getItem(j);let w=T?{}:function(e){try{return JSON.parse(localStorage.getItem(e))}catch(e){console.log("ERROR:",e.message)}}(j);var R;console.log(w),S.addEventListener("input",e(t)((function(e){w[e.target.name]=e.target.value,h(j,w)}),500)),S.addEventListener("submit",(function(e){e.preventDefault(),console.log(null===localStorage.getItem(j)?"No information in Local Storage":localStorage.getItem(j)),e.currentTarget.reset(),w={},O(j)})),T||((R=S).elements.email.value=void 0===w.email?"":w.email,R.elements.message.value=void 0===w.message?"":w.message)}();
//# sourceMappingURL=03-feedback.db45b782.js.map
