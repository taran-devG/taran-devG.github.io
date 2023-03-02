"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(t,e){"object"==("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).noUiSlider={})}(void 0,function(t){function e(t){return"object"==_typeof(t)&&"function"==typeof t.to}function r(t){t.parentElement.removeChild(t)}function n(t){return null!=t}function i(t){t.preventDefault()}function o(t){return"number"==typeof t&&!isNaN(t)&&isFinite(t)}function s(t,e,r){0<r&&(c(t,e),setTimeout(function(){p(t,e)},r))}function a(t){return Math.max(Math.min(t,100),0)}function l(t){return Array.isArray(t)?t:[t]}function u(t){return 1<(t=(t=String(t)).split(".")).length?t[1].length:0}function c(t,e){t.classList&&!/\s/.test(e)?t.classList.add(e):t.className+=" "+e}function p(t,e){t.classList&&!/\s/.test(e)?t.classList.remove(e):t.className=t.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function f(t){var e=void 0!==window.pageXOffset,r="CSS1Compat"===(t.compatMode||"");return{x:e?window.pageXOffset:(r?t.documentElement:t.body).scrollLeft,y:e?window.pageYOffset:(r?t.documentElement:t.body).scrollTop}}function d(t,e){return 100/(e-t)}function h(t,e,r){return 100*e/(t[r+1]-t[r])}function m(t,e){for(var r=1;t>=e[r];)r+=1;return r}t.PipsMode=void 0,($=t.PipsMode||(t.PipsMode={})).Range="range",$.Steps="steps",$.Positions="positions",$.Count="count",$.Values="values",t.PipsType=void 0,($=t.PipsType||(t.PipsType={}))[$.None=-1]="None",$[$.NoValue=0]="NoValue",$[$.LargeValue=1]="LargeValue",$[$.SmallValue=2]="SmallValue";var g=(b.prototype.getDistance=function(t){for(var e=[],r=0;r<this.xNumSteps.length-1;r++)e[r]=h(this.xVal,t,r);return e},b.prototype.getAbsoluteDistance=function(t,e,r){var n=0;if(t<this.xPct[this.xPct.length-1])for(;t>this.xPct[n+1];)n++;else t===this.xPct[this.xPct.length-1]&&(n=this.xPct.length-2);r||t!==this.xPct[n+1]||n++;for(var i,o=1,s=(e=null===e?[]:e)[n],a=0,l=0,u=0,c=r?(t-this.xPct[n])/(this.xPct[n+1]-this.xPct[n]):(this.xPct[n+1]-t)/(this.xPct[n+1]-this.xPct[n]);0<s;)i=this.xPct[n+1+u]-this.xPct[n+u],100<e[n+u]*o+100-100*c?(a=i*c,o=(s-100*c)/e[n+u],c=1):(a=e[n+u]*i/100*o,o=0),r?(l-=a,1<=this.xPct.length+u&&u--):(l+=a,1<=this.xPct.length-u&&u++),s=e[n+u]*o;return t+l},b.prototype.toStepping=function(t){return function(t,e,r){if(r>=t.slice(-1)[0])return 100;var n=t[(o=m(r,t))-1],i=t[o],o=(t=e[o-1],e[o]);return t+(r=r,h(i=[n,i],i[0]<0?r+Math.abs(i[0]):r-i[0],0)/d(t,o))}(this.xVal,this.xPct,t)},b.prototype.fromStepping=function(t){return function(t,e,r){if(100<=r)return t.slice(-1)[0];var n,i=t[(n=m(r,e))-1],o=t[n];return(r-(t=e[n-1]))*d(t,n=e[n])*((o=[i,o])[1]-o[0])/100+o[0]}(this.xVal,this.xPct,t)},b.prototype.getStep=function(t){return function(t,e,r,n){if(100===n)return n;var i=m(n,t),o=t[i-1],s=t[i];return r?(s-o)/2<n-o?s:o:e[i-1]?t[i-1]+(t=n-t[i-1],i=e[i-1],Math.round(t/i)*i):n}(this.xPct,this.xSteps,this.snap,t)},b.prototype.getDefaultStep=function(t,e,r){var n=m(t,this.xPct);return(100===t||e&&t===this.xPct[n-1])&&(n=Math.max(n-1,1)),(this.xVal[n]-this.xVal[n-1])/r},b.prototype.getNearbySteps=function(t){return t=m(t,this.xPct),{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},b.prototype.countStepDecimals=function(){var t=this.xNumSteps.map(u);return Math.max.apply(null,t)},b.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},b.prototype.convert=function(t){return this.getStep(this.toStepping(t))},b.prototype.handleEntryPoint=function(t,e){if(!o(t="min"===t?0:"max"===t?100:parseFloat(t))||!o(e[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(t),this.xVal.push(e[0]),e=Number(e[1]),t?this.xSteps.push(!isNaN(e)&&e):isNaN(e)||(this.xSteps[0]=e),this.xHighestCompleteStep.push(0)},b.prototype.handleStepPoint=function(t,e){e&&(this.xVal[t]!==this.xVal[t+1]?(this.xSteps[t]=h([this.xVal[t],this.xVal[t+1]],e,0)/d(this.xPct[t],this.xPct[t+1]),e=(this.xVal[t+1]-this.xVal[t])/this.xNumSteps[t],e=Math.ceil(Number(e.toFixed(3))-1),e=this.xVal[t]+this.xNumSteps[t]*e,this.xHighestCompleteStep[t]=e):this.xSteps[t]=this.xHighestCompleteStep[t]=this.xVal[t])},b);function b(t,e,r){var n;this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[r||!1],this.xNumSteps=[!1],this.snap=e;var i=[];for(Object.keys(t).forEach(function(e){i.push([l(t[e]),e])}),i.sort(function(t,e){return t[0][0]-e[0][0]}),n=0;n<i.length;n++)this.handleEntryPoint(i[n][1],i[n][0]);for(this.xNumSteps=this.xSteps.slice(0),n=0;n<this.xNumSteps.length;n++)this.handleStepPoint(n,this.xNumSteps[n])}var v={to:function(t){return void 0===t?"":t.toFixed(2)},from:Number},S={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},x={tooltips:".__tooltips",aria:".__aria"};function y(t,e){if(!o(e))throw new Error("noUiSlider: 'step' is not numeric.");t.singleStep=e}function w(t,e){if(!o(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");t.keyboardPageMultiplier=e}function E(t,e){if(!o(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");t.keyboardMultiplier=e}function P(t,e){if(!o(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");t.keyboardDefaultStep=e}function C(t,e){if("object"!=_typeof(e)||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(void 0===e.min||void 0===e.max)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");t.spectrum=new g(e,t.snap||!1,t.singleStep)}function N(t,e){if(e=l(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");t.handles=e.length,t.start=e}function V(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'snap' option must be a boolean.");t.snap=e}function A(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'animate' option must be a boolean.");t.animate=e}function k(t,e){if("number"!=typeof e)throw new Error("noUiSlider: 'animationDuration' option must be a number.");t.animationDuration=e}function M(t,e){var r,n=[!1];if("lower"===e?e=[!0,!1]:"upper"===e&&(e=[!1,!0]),!0===e||!1===e){for(r=1;r<t.handles;r++)n.push(e);n.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==t.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");n=e}t.connect=n}function U(t,e){switch(e){case"horizontal":t.ort=0;break;case"vertical":t.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function D(t,e){if(!o(e))throw new Error("noUiSlider: 'margin' option must be numeric.");0!==e&&(t.margin=t.spectrum.getDistance(e))}function O(t,e){if(!o(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(t.limit=t.spectrum.getDistance(e),!t.limit||t.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function L(t,e){var r;if(!o(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&2!==e.length&&!o(e[0])&&!o(e[1]))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(0!==e){for(Array.isArray(e)||(e=[e,e]),t.padding=[t.spectrum.getDistance(e[0]),t.spectrum.getDistance(e[1])],r=0;r<t.spectrum.xNumSteps.length-1;r++)if(t.padding[0][r]<0||t.padding[1][r]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var n=e[0]+e[1];e=t.spectrum.xVal[0];if(1<n/(t.spectrum.xVal[t.spectrum.xVal.length-1]-e))throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function T(t,e){switch(e){case"ltr":t.dir=0;break;case"rtl":t.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function j(t,e){if("string"!=typeof e)throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var r=0<=e.indexOf("tap"),n=0<=e.indexOf("drag"),i=0<=e.indexOf("fixed"),o=0<=e.indexOf("snap"),s=0<=e.indexOf("hover"),a=0<=e.indexOf("unconstrained"),l=0<=e.indexOf("drag-all");e=0<=e.indexOf("smooth-steps");if(i){if(2!==t.handles)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");D(t,t.start[1]-t.start[0])}if(a&&(t.margin||t.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");t.events={tap:r||o,drag:n,dragAll:l,smoothSteps:e,fixed:i,snap:o,hover:s,unconstrained:a}}function z(t,r){if(!1!==r)if(!0===r||e(r)){t.tooltips=[];for(var n=0;n<t.handles;n++)t.tooltips.push(r)}else{if((r=l(r)).length!==t.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");r.forEach(function(t){if("boolean"!=typeof t&&!e(t))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),t.tooltips=r}}function H(t,e){if(e.length!==t.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");t.handleAttributes=e}function F(t,r){if(!e(r))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");t.ariaFormat=r}function R(t,r){if(!e(n=r)||"function"!=typeof n.from)throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");var n;t.format=r}function _(t,e){if("boolean"!=typeof e)throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");t.keyboardSupport=e}function B(t,e){t.documentElement=e}function q(t,e){if("string"!=typeof e&&!1!==e)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");t.cssPrefix=e}function X(t,e){if("object"!=_typeof(e))throw new Error("noUiSlider: 'cssClasses' must be an object.");"string"==typeof t.cssPrefix?(t.cssClasses={},Object.keys(e).forEach(function(r){t.cssClasses[r]=t.cssPrefix+e[r]})):t.cssClasses=e}function Y(t){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:v,format:v},r={step:{r:!1,t:y},keyboardPageMultiplier:{r:!1,t:w},keyboardMultiplier:{r:!1,t:E},keyboardDefaultStep:{r:!1,t:P},start:{r:!0,t:N},connect:{r:!0,t:M},direction:{r:!0,t:T},snap:{r:!1,t:V},animate:{r:!1,t:A},animationDuration:{r:!1,t:k},range:{r:!0,t:C},orientation:{r:!1,t:U},margin:{r:!1,t:D},limit:{r:!1,t:O},padding:{r:!1,t:L},behaviour:{r:!0,t:j},ariaFormat:{r:!1,t:F},format:{r:!1,t:R},tooltips:{r:!1,t:z},keyboardSupport:{r:!0,t:_},documentElement:{r:!1,t:B},cssPrefix:{r:!0,t:q},cssClasses:{r:!0,t:X},handleAttributes:{r:!1,t:H}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:S,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};t.format&&!t.ariaFormat&&(t.ariaFormat=t.format),Object.keys(r).forEach(function(o){if(n(t[o])||void 0!==i[o])r[o].t(e,(n(t[o])?t:i)[o]);else if(r[o].r)throw new Error("noUiSlider: '"+o+"' is required.")}),e.pips=t.pips;var o=void 0!==(s=document.createElement("div")).style.msTransform,s=void 0!==s.style.transform;return e.transformRule=s?"transform":o?"msTransform":"webkitTransform",e.style=[["left","top"],["right","bottom"]][e.dir][e.ort],e}function I(e,o,u){var d,h,m,g,b,v,S=window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"},y=window.CSS&&CSS.supports&&CSS.supports("touch-action","none")&&function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}return t}(),w=e,E=o.spectrum,P=[],C=[],N=[],V=0,A={},k=e.ownerDocument,M=o.documentElement||k.documentElement,U=k.body,D="rtl"===k.dir||1===o.ort?0:100;function O(t,e){var r=k.createElement("div");return e&&c(r,e),t.appendChild(r),r}function L(t,e){t=O(t,o.cssClasses.origin);var r,n=O(t,o.cssClasses.handle);return O(n,o.cssClasses.touchArea),n.setAttribute("data-handle",String(e)),o.keyboardSupport&&(n.setAttribute("tabindex","0"),n.addEventListener("keydown",function(t){return function(t,e){if(z()||H(e))return!1;var r=["Left","Right"],n=["Down","Up"],i=["PageDown","PageUp"],s=["Home","End"];o.dir&&!o.ort?r.reverse():o.ort&&!o.dir&&(n.reverse(),i.reverse());var a=t.key.replace("Arrow",""),l=a===i[0],u=a===i[1];i=a===n[0]||a===r[0]||l,n=a===n[1]||a===r[1]||u,r=a===s[0],s=a===s[1];if(!(i||n||r||s))return!0;if(t.preventDefault(),n||i){var c=i?0:1;if(null===(c=pt(e)[c]))return!1;!1===c&&(c=E.getDefaultStep(C[e],i,o.keyboardDefaultStep)),c*=u||l?o.keyboardPageMultiplier:o.keyboardMultiplier,c=Math.max(c,1e-7),c*=i?-1:1,c=P[e]+c}else c=s?o.spectrum.xVal[o.spectrum.xVal.length-1]:o.spectrum.xVal[0];return st(e,E.toStepping(c),!0,!0),tt("slide",e),tt("update",e),tt("change",e),tt("set",e),!1}(t,e)})),void 0!==o.handleAttributes&&(r=o.handleAttributes[e],Object.keys(r).forEach(function(t){n.setAttribute(t,r[t])})),n.setAttribute("role","slider"),n.setAttribute("aria-orientation",o.ort?"vertical":"horizontal"),0===e?c(n,o.cssClasses.handleLower):e===o.handles-1&&c(n,o.cssClasses.handleUpper),t.handle=n,t}function T(t,e){return!!e&&O(t,o.cssClasses.connect)}function j(t,e){return!(!o.tooltips||!o.tooltips[e])&&O(t.firstChild,o.cssClasses.tooltip)}function z(){return w.hasAttribute("disabled")}function H(t){return h[t].hasAttribute("disabled")}function F(){b&&(Z("update"+x.tooltips),b.forEach(function(t){t&&r(t)}),b=null)}function R(){F(),b=h.map(j),Q("update"+x.tooltips,function(t,e,r){b&&o.tooltips&&!1!==b[e]&&(t=t[e],!0!==o.tooltips[e]&&(t=o.tooltips[e].to(r[e])),b[e].innerHTML=t)})}function _(t,e){return t.map(function(t){return E.fromStepping(e?E.getStep(t):t)})}function B(){g&&(r(g),g=null)}function q(e){B();var r=function(e){var r=function(e){if(e.mode===t.PipsMode.Range||e.mode===t.PipsMode.Steps)return E.xVal;if(e.mode!==t.PipsMode.Count)return e.mode===t.PipsMode.Positions?_(e.values,e.stepped):e.mode===t.PipsMode.Values?e.stepped?e.values.map(function(t){return E.fromStepping(E.getStep(E.toStepping(t)))}):e.values:[];if(e.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var r=e.values-1,n=100/r,i=[];r--;)i[r]=r*n;return i.push(100),_(i,e.stepped)}(e),n={},i=E.xVal[0],o=E.xVal[E.xVal.length-1],s=!1,a=!1,l=0;return(r=r.slice().sort(function(t,e){return t-e}).filter(function(t){return!this[t]&&(this[t]=!0)},{}))[0]!==i&&(r.unshift(i),s=!0),r[r.length-1]!==o&&(r.push(o),a=!0),r.forEach(function(i,o){i=i;var u,c,p,f,d,h,m,g,b=r[o+1],v=e.mode===t.PipsMode.Steps,S=(S=v?E.xNumSteps[o]:S)||b-i;for(void 0===b&&(b=i),S=Math.max(S,1e-7),u=i;u<=b;u=Number((u+S).toFixed(7))){for(h=(f=(p=E.toStepping(u))-l)/(e.density||1),g=f/(m=Math.round(h)),c=1;c<=m;c+=1)n[(d=l+c*g).toFixed(5)]=[E.fromStepping(d),0];h=-1<r.indexOf(u)?t.PipsType.LargeValue:v?t.PipsType.SmallValue:t.PipsType.NoValue,!o&&s&&u!==b&&(h=0),u===b&&a||(n[p.toFixed(5)]=[u,h]),l=p}}),n}(e),n=e.filter;e=e.format||{to:function(t){return String(Math.round(t))}};return g=w.appendChild(function(e,r,n){var i,s=k.createElement("div"),a=((i={})[t.PipsType.None]="",i[t.PipsType.NoValue]=o.cssClasses.valueNormal,i[t.PipsType.LargeValue]=o.cssClasses.valueLarge,i[t.PipsType.SmallValue]=o.cssClasses.valueSub,i),l=((i={})[t.PipsType.None]="",i[t.PipsType.NoValue]=o.cssClasses.markerNormal,i[t.PipsType.LargeValue]=o.cssClasses.markerLarge,i[t.PipsType.SmallValue]=o.cssClasses.markerSub,i),u=[o.cssClasses.valueHorizontal,o.cssClasses.valueVertical],p=[o.cssClasses.markerHorizontal,o.cssClasses.markerVertical];function f(t,e){var r=e===o.cssClasses.value;return e+" "+(r?u:p)[o.ort]+" "+(r?a:l)[t]}return c(s,o.cssClasses.pips),c(s,0===o.ort?o.cssClasses.pipsHorizontal:o.cssClasses.pipsVertical),Object.keys(e).forEach(function(i){var a,l,u;l=e[a=i][0],u=e[i][1],(u=r?r(l,u):u)!==t.PipsType.None&&((i=O(s,!1)).className=f(u,o.cssClasses.marker),i.style[o.style]=a+"%",u>t.PipsType.NoValue&&((i=O(s,!1)).className=f(u,o.cssClasses.value),i.setAttribute("data-value",String(l)),i.style[o.style]=a+"%",i.innerHTML=String(n.to(l))))}),s}(r,n,e))}function X(){var t=d.getBoundingClientRect(),e="offset"+["Width","Height"][o.ort];return 0===o.ort?t.width||d[e]:t.height||d[e]}function I(t,e,r,n){function i(i){var s,a=function(t,e,r){var n=0===t.type.indexOf("touch"),i=0===t.type.indexOf("mouse"),o=0===t.type.indexOf("pointer"),s=0,a=0;if(0===t.type.indexOf("MSPointer")&&(o=!0),"mousedown"===t.type&&!t.buttons&&!t.touches)return!1;if(n){var l=function(e){return(e=e.target)===r||r.contains(e)||t.composed&&t.composedPath().shift()===r};if("touchstart"===t.type){if(1<(n=Array.prototype.filter.call(t.touches,l)).length)return!1;s=n[0].pageX,a=n[0].pageY}else{if(!(l=Array.prototype.find.call(t.changedTouches,l)))return!1;s=l.pageX,a=l.pageY}}return e=e||f(k),(i||o)&&(s=t.clientX+e.x,a=t.clientY+e.y),t.pageOffset=e,t.points=[s,a],t.cursor=i||o,t}(i,n.pageOffset,n.target||e);return!!a&&!(z()&&!n.doNotReject)&&(s=w,i=o.cssClasses.tap,!((s.classList?s.classList.contains(i):new RegExp("\\b"+i+"\\b").test(s.className))&&!n.doNotReject)&&!(t===S.start&&void 0!==a.buttons&&1<a.buttons)&&(!n.hover||!a.buttons)&&(y||a.preventDefault(),a.calcPoint=a.points[o.ort],void r(a,n)))}var s=[];return t.split(" ").forEach(function(t){e.addEventListener(t,i,!!y&&{passive:!0}),s.push([t,i])}),s}function W(t){var e,r,n=a(n=100*(t-(n=d,e=o.ort,r=n.getBoundingClientRect(),n=(t=n.ownerDocument).documentElement,t=f(t),/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(t.x=0),e?r.top+t.y-n.clientTop:r.left+t.x-n.clientLeft))/X());return o.dir?100-n:n}function $(t,e){"mouseout"===t.type&&"HTML"===t.target.nodeName&&null===t.relatedTarget&&J(t,e)}function G(t,e){if(-1===navigator.appVersion.indexOf("MSIE 9")&&0===t.buttons&&0!==e.buttonsProperty)return J(t,e);nt(0<(t=(o.dir?-1:1)*(t.calcPoint-e.startCalcPoint)),100*t/e.baseSize,e.locations,e.handleNumbers,e.connect)}function J(t,e){e.handle&&(p(e.handle,o.cssClasses.active),--V),e.listeners.forEach(function(t){M.removeEventListener(t[0],t[1])}),0===V&&(p(w,o.cssClasses.drag),ot(),t.cursor&&(U.style.cursor="",U.removeEventListener("selectstart",i))),o.events.smoothSteps&&(e.handleNumbers.forEach(function(t){st(t,C[t],!0,!0,!1,!1)}),e.handleNumbers.forEach(function(t){tt("update",t)})),e.handleNumbers.forEach(function(t){tt("change",t),tt("set",t),tt("end",t)})}function K(t,e){var r,n,s,a;e.handleNumbers.some(H)||(1===e.handleNumbers.length&&(a=h[e.handleNumbers[0]].children[0],V+=1,c(a,o.cssClasses.active)),t.stopPropagation(),n=I(S.move,M,G,{target:t.target,handle:a,connect:e.connect,listeners:r=[],startCalcPoint:t.calcPoint,baseSize:X(),pageOffset:t.pageOffset,handleNumbers:e.handleNumbers,buttonsProperty:t.buttons,locations:C.slice()}),s=I(S.end,M,J,{target:t.target,handle:a,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),a=I("mouseout",M,$,{target:t.target,handle:a,listeners:r,doNotReject:!0,handleNumbers:e.handleNumbers}),r.push.apply(r,n.concat(s,a)),t.cursor&&(U.style.cursor=getComputedStyle(t.target).cursor,1<h.length&&c(w,o.cssClasses.drag),U.addEventListener("selectstart",i,!1)),e.handleNumbers.forEach(function(t){tt("start",t)}))}function Q(t,e){A[t]=A[t]||[],A[t].push(e),"update"===t.split(".")[0]&&h.forEach(function(t,e){tt("update",e)})}function Z(t){var e=t&&t.split(".")[0],r=e?t.substring(e.length):t;Object.keys(A).forEach(function(t){var n=t.split(".")[0],i=t.substring(n.length);e&&e!==n||r&&r!==i||((n=i)!==x.aria&&n!==x.tooltips||r===i)&&delete A[t]})}function tt(t,e,r){Object.keys(A).forEach(function(n){var i=n.split(".")[0];t===i&&A[n].forEach(function(t){t.call(ft,P.map(o.format.to),e,P.slice(),r||!1,C.slice(),ft)})})}function et(t,e,r,n,i,s,l){var u;return 1<h.length&&!o.events.unconstrained&&(n&&0<e&&(u=E.getAbsoluteDistance(t[e-1],o.margin,!1),r=Math.max(r,u)),i&&e<h.length-1&&(u=E.getAbsoluteDistance(t[e+1],o.margin,!0),r=Math.min(r,u))),1<h.length&&o.limit&&(n&&0<e&&(u=E.getAbsoluteDistance(t[e-1],o.limit,!1),r=Math.min(r,u)),i&&e<h.length-1&&(u=E.getAbsoluteDistance(t[e+1],o.limit,!0),r=Math.max(r,u))),o.padding&&(0===e&&(u=E.getAbsoluteDistance(0,o.padding[0],!1),r=Math.max(r,u)),e===h.length-1&&(u=E.getAbsoluteDistance(100,o.padding[1],!0),r=Math.min(r,u))),!((r=a(r=l?r:E.getStep(r)))===t[e]&&!s)&&r}function rt(t,e){var r=o.ort;return(r?e:t)+", "+(r?t:e)}function nt(t,e,r,n,i){var s=r.slice(),a=n[0],l=o.events.smoothSteps,u=[!t,t],c=[t,!t];n=n.slice(),t&&n.reverse(),1<n.length?n.forEach(function(t,r){!1===(r=et(s,t,s[t]+e,u[r],c[r],!1,l))?e=0:(e=r-s[t],s[t]=r)}):u=c=[!0];var p=!1;n.forEach(function(t,n){p=st(t,r[t]+e,u[n],c[n],!1,l)||p}),p&&(n.forEach(function(t){tt("update",t),tt("slide",t)}),null!=i&&tt("drag",a))}function it(t,e){return o.dir?100-t-e:t}function ot(){N.forEach(function(t){var e=50<C[t]?-1:1;e=3+(h.length+e*t);h[t].style.zIndex=String(e)})}function st(t,e,r,n,i,s){return!1!==(e=i?e:et(C,t,e,r,n,!1,s))&&(e=e,C[t=t]=e,P[t]=E.fromStepping(e),e="translate("+rt(it(e,0)-D+"%","0")+")",h[t].style[o.transformRule]=e,at(t),at(t+1),!0)}function at(t){var e,r;m[t]&&(r=100,e="translate("+rt(it(e=(e=0)!==t?C[t-1]:e,r=(r=t!==m.length-1?C[t]:r)-e)+"%","0")+")",r="scale("+rt(r/100,"1")+")",m[t].style[o.transformRule]=e+" "+r)}function lt(t,e){return null===t||!1===t||void 0===t?C[e]:("number"==typeof t&&(t=String(t)),!1===(t=!1!==(t=o.format.from(t))?E.toStepping(t):t)||isNaN(t)?C[e]:t)}function ut(t,e,r){var n=l(t);t=void 0===C[0];e=void 0===e||e,o.animate&&!t&&s(w,o.cssClasses.tap,o.animationDuration),N.forEach(function(t){st(t,lt(n[t],t),!0,!1,r)});var i,a=1===N.length?0:1;for(t&&E.hasNoSize()&&(r=!0,C[0]=0,1<N.length&&(i=100/(N.length-1),N.forEach(function(t){C[t]=t*i})));a<N.length;++a)N.forEach(function(t){st(t,C[t],!0,!0,r)});ot(),N.forEach(function(t){tt("update",t),null!==n[t]&&e&&tt("set",t)})}function ct(t){return(t=void 0!==t&&t)?1===P.length?P[0]:P.slice(0):1===(t=P.map(o.format.to)).length?t[0]:t}function pt(t){var e=C[t],r=E.getNearbySteps(e),n=P[t],i=r.thisStep.step;t=null;return o.snap?[n-r.stepBefore.startValue||null,r.stepAfter.startValue-n||null]:(!1!==i&&n+i>r.stepAfter.startValue&&(i=r.stepAfter.startValue-n),t=n>r.thisStep.startValue?r.thisStep.step:!1!==r.stepBefore.step&&n-r.stepBefore.highestStep,100===e?i=null:0===e&&(t=null),e=E.countStepDecimals(),null!==i&&!1!==i&&(i=Number(i.toFixed(e))),[t=null!==t&&!1!==t?Number(t.toFixed(e)):t,i])}c(e=w,o.cssClasses.target),0===o.dir?c(e,o.cssClasses.ltr):c(e,o.cssClasses.rtl),0===o.ort?c(e,o.cssClasses.horizontal):c(e,o.cssClasses.vertical),c(e,"rtl"===getComputedStyle(e).direction?o.cssClasses.textDirectionRtl:o.cssClasses.textDirectionLtr),d=O(e,o.cssClasses.base),function(t,e){var r=O(e,o.cssClasses.connects);h=[],(m=[]).push(T(r,t[0]));for(var n=0;n<o.handles;n++)h.push(L(e,n)),N[n]=n,m.push(T(r,t[n+1]))}(o.connect,d),(v=o.events).fixed||h.forEach(function(t,e){I(S.start,t.children[0],K,{handleNumbers:[e]})}),v.tap&&I(S.start,d,function(t){t.stopPropagation();var e,r,n,i=W(t.calcPoint),a=(e=i,n=!(r=100),h.forEach(function(t,i){var o,s;H(i)||(o=C[i],((s=Math.abs(o-e))<r||s<=r&&o<e||100===s&&100===r)&&(n=i,r=s))}),n);!1!==a&&(o.events.snap||s(w,o.cssClasses.tap,o.animationDuration),st(a,i,!0,!0),ot(),tt("slide",a,!0),tt("update",a,!0),o.events.snap?K(t,{handleNumbers:[a]}):(tt("change",a,!0),tt("set",a,!0)))},{}),v.hover&&I(S.move,d,function(t){t=W(t.calcPoint),t=E.getStep(t);var e=E.fromStepping(t);Object.keys(A).forEach(function(t){"hover"===t.split(".")[0]&&A[t].forEach(function(t){t.call(ft,e)})})},{hover:!0}),v.drag&&m.forEach(function(t,e){var r,n,i,s,a;!1!==t&&0!==e&&e!==m.length-1&&(r=h[e-1],n=h[e],i=[t],s=[r,n],a=[e-1,e],c(t,o.cssClasses.draggable),v.fixed&&(i.push(r.children[0]),i.push(n.children[0])),v.dragAll&&(s=h,a=N),i.forEach(function(e){I(S.start,e,K,{handles:s,handleNumbers:a,connect:t})}))}),ut(o.start),o.pips&&q(o.pips),o.tooltips&&R(),Z("update"+x.aria),Q("update"+x.aria,function(t,e,r,n,i){N.forEach(function(t){var e=h[t],n=et(C,t,0,!0,!0,!0),s=et(C,t,100,!0,!0,!0),a=i[t];t=String(o.ariaFormat.to(r[t])),n=E.fromStepping(n).toFixed(1),s=E.fromStepping(s).toFixed(1),a=E.fromStepping(a).toFixed(1);e.children[0].setAttribute("aria-valuemin",n),e.children[0].setAttribute("aria-valuemax",s),e.children[0].setAttribute("aria-valuenow",a),e.children[0].setAttribute("aria-valuetext",t)})});var ft={destroy:function(){for(Z(x.aria),Z(x.tooltips),Object.keys(o.cssClasses).forEach(function(t){p(w,o.cssClasses[t])});w.firstChild;)w.removeChild(w.firstChild);delete w.noUiSlider},steps:function(){return N.map(pt)},on:Q,off:Z,get:ct,set:ut,setHandle:function(t,e,r,n){if(!(0<=(t=Number(t))&&t<N.length))throw new Error("noUiSlider: invalid handle number, got: "+t);st(t,lt(e,t),!0,!0,n),tt("update",t),r&&tt("set",t)},reset:function(t){ut(o.start,t)},disable:function(t){null!=t?(h[t].setAttribute("disabled",""),h[t].handle.removeAttribute("tabindex")):(w.setAttribute("disabled",""),h.forEach(function(t){t.handle.removeAttribute("tabindex")}))},enable:function(t){null!=t?(h[t].removeAttribute("disabled"),h[t].handle.setAttribute("tabindex","0")):(w.removeAttribute("disabled"),h.forEach(function(t){t.removeAttribute("disabled"),t.handle.setAttribute("tabindex","0")}))},__moveHandles:function(t,e,r){nt(t,e,C,r)},options:u,updateOptions:function(t,e){var r=ct(),i=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips"];i.forEach(function(e){void 0!==t[e]&&(u[e]=t[e])});var s=Y(u);i.forEach(function(e){void 0!==t[e]&&(o[e]=s[e])}),E=s.spectrum,o.margin=s.margin,o.limit=s.limit,o.padding=s.padding,o.pips?q(o.pips):B(),(o.tooltips?R:F)(),C=[],ut(n(t.start)?t.start:r,e)},target:w,removePips:B,removeTooltips:F,getPositions:function(){return C.slice()},getTooltips:function(){return b},getOrigins:function(){return h},pips:q};return ft}function W(t,e){if(!t||!t.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+t);if(t.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");return e=I(t,Y(e),e),t.noUiSlider=e}var $={__spectrum:g,cssClasses:S,create:W};t.create=W,t.cssClasses=S,t.default=$,Object.defineProperty(t,"__esModule",{value:!0})});