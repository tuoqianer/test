
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.store=e()}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=window.localStorage,i=function(){};function f(t){return"object"===(void 0===t?"undefined":e(t))&&"[object object]"===Object.prototype.toString.call(t).toLowerCase()&&!t.length}function u(t){return"[object Function]"==={}.toString.call(t)}function c(){if(!(this instanceof c))return new c}function s(t,e){var n=arguments,r=c(),o=null;if(0===n.length)return r.get();if(1===n.length){if("string"==typeof t)return r.get(t);if(f(t))return r.set(t)}if(2===n.length&&"string"==typeof t){if(!e)return r.remove(t);if(e&&"string"==typeof e)return r.set(t,e);if(e&&u(e))return o=null,(o=e(t,r.get(t)))?s.set(t,o):s}if(2===n.length&&t instanceof Array&&u(e)){for(var i=0;i<t.length;i++)o=e(t[i],r.get(t[i])),s.set(t[i],o);return s}}for(var t in o=function(e){var t="_Is_Incognit";try{e.setItem(t,"yes")}catch(t){if("QuotaExceededError"===t.name){var n=function(){};e.__proto__={setItem:n,getItem:n,removeItem:n,clear:n}}}finally{"yes"===e.getItem(t)&&e.removeItem(t)}return e}(o),c.prototype={set:function(t,e){if(i("set",t,e),t&&!f(t))o.setItem(t,void 0===(r=e)||"function"==typeof r?r+"":JSON.stringify(r));else if(t&&f(t)&&!e)for(var n in t)this.set(n,t[n]);var r;return this},get:function(t){if(!t){var n={};return this.forEach(function(t,e){return n[t]=e}),n}return"?"===t.charAt(0)?this.has(t.substr(1)):function(e){if("string"==typeof e)try{return JSON.parse(e)}catch(t){return e||void 0}}(o.getItem(t))},clear:function(){return this.forEach(function(t,e){i("clear",t,e)}),o.clear(),this},remove:function(t){var e=this.get(t);return o.removeItem(t),i("remove",t,e),e},has:function(t){return{}.hasOwnProperty.call(this.get(),t)},keys:function(){var e=[];return this.forEach(function(t){e.push(t)}),e},size:function(){return this.keys().length},forEach:function(t){for(var e=0;e<o.length;e++){var n=o.key(e);if(!1===t(n,this.get(n)))break}return this},search:function(t){for(var e=this.keys(),n={},r=0;r<e.length;r++)-1<e[r].indexOf(t)&&(n[e[r]]=this.get(e[r]));return n},onStorage:function(t){return t&&u(t)&&(i=t),this}})s[t]=c.prototype[t];return s});