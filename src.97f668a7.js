parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}var n={timerContainer:document.querySelector("#timer-1"),days:document.querySelector("[data-value='days']"),hours:document.querySelector("[data-value='hours']"),mins:document.querySelector("[data-value='mins']"),secs:document.querySelector("[data-value='secs']")},r=function(){function t(a){var n=a.targetDate;e(this,t),this.targetDate=n.getTime(),this.currentDate=null}return a(t,[{key:"start",value:function(){var e=this;this.currentDate=Date.now(),this.currentDate!==this.targetDate&&setInterval(function(){var t=e.initTime();e.createMarkupTimer(t)},1e3)}},{key:"initTime",value:function(){this.currentDate=Date.now();var e=this.targetDate-this.currentDate;return{days:Math.floor(e/864e5),hours:Math.floor(e%864e5/36e5),mins:Math.floor(e%36e5/6e4),secs:Math.floor(e%6e4/1e3)}}},{key:"createMarkupTimer",value:function(e){var t=e.days,a=e.hours,r=e.mins,o=e.secs;n.days.textContent=t<10?"0".concat(t):t,n.hours.textContent=a<10?"0".concat(a):a,n.mins.textContent=r<10?"0".concat(r):r,n.secs.textContent=o<10?"0".concat(o):o}}]),t}(),o=new r({targetDate:new Date("09 20, 2021")});o.start(),console.log(o);
},{}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-timer/src.97f668a7.js.map