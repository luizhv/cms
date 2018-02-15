!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueRouter=e()}(this,function(){"use strict";function t(t,e){if(!t)throw new Error("[vue-router] "+e)}function e(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function r(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}var n={name:"router-view",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,r){var n=r.props,o=r.children,i=r.parent,a=r.data;a.routerView=!0;for(var u=i.$createElement,s=n.name,c=i.$route,p=i._routerViewCache||(i._routerViewCache={}),f=0,h=!1;i&&i._routerRoot!==i;)i.$vnode&&i.$vnode.data.routerView&&f++,i._inactive&&(h=!0),i=i.$parent;if(a.routerViewDepth=f,h)return u(p[s],a,o);var l=c.matched[f];if(!l)return p[s]=null,u();var d=p[s]=l.components[s];a.registerRouteInstance=function(t,e){var r=l.instances[s];(e&&r!==t||!e&&r===t)&&(l.instances[s]=e)},(a.hook||(a.hook={})).prepatch=function(t,e){l.instances[s]=e.componentInstance};var v=a.props=function(t,r){switch(typeof r){case"undefined":return;case"object":return r;case"function":return r(t);case"boolean":return r?t.params:void 0;default:e(!1,'props in "'+t.path+'" is a '+typeof r+", expecting an object, function or boolean.")}}(c,l.props&&l.props[s]);if(v){v=a.props=function(t,e){for(var r in e)t[r]=e[r];return t}({},v);var y=a.attrs=a.attrs||{};for(var m in v)d.props&&m in d.props||(y[m]=v[m],delete v[m])}return u(d,a,o)}};var o=/[!'()*]/g,i=function(t){return"%"+t.charCodeAt(0).toString(16)},a=/%2C/g,u=function(t){return encodeURIComponent(t).replace(o,i).replace(a,",")},s=decodeURIComponent;function c(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach(function(t){var r=t.replace(/\+/g," ").split("="),n=s(r.shift()),o=r.length>0?s(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]}),e):e}function p(t){var e=t?Object.keys(t).map(function(e){var r=t[e];if(void 0===r)return"";if(null===r)return u(e);if(Array.isArray(r)){var n=[];return r.forEach(function(t){void 0!==t&&(null===t?n.push(u(e)):n.push(u(e)+"="+u(t)))}),n.join("&")}return u(e)+"="+u(r)}).filter(function(t){return t.length>0}).join("&"):null;return e?"?"+e:""}var f=/\/?$/;function h(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=l(i)}catch(t){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:v(e,o),matched:t?function(t){var e=[];for(;t;)e.unshift(t),t=t.parent;return e}(t):[]};return r&&(a.redirectedFrom=v(r,o)),Object.freeze(a)}function l(t){if(Array.isArray(t))return t.map(l);if(t&&"object"==typeof t){var e={};for(var r in t)e[r]=l(t[r]);return e}return t}var d=h(null,{path:"/"});function v(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;return void 0===o&&(o=""),(r||"/")+(e||p)(n)+o}function y(t,e){return e===d?t===e:!!e&&(t.path&&e.path?t.path.replace(f,"")===e.path.replace(f,"")&&t.hash===e.hash&&m(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&m(t.query,e.query)&&m(t.params,e.params)))}function m(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every(function(r){var n=t[r],o=e[r];return"object"==typeof n&&"object"==typeof o?m(n,o):String(n)===String(o)})}var g,b=[String,Object],w=[String,Array],x={name:"router-link",props:{to:{type:b,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,event:{type:w,default:"click"}},render:function(t){var e,r,n=this,o=this.$router,i=this.$route,a=o.resolve(this.to,i,this.append),u=a.location,s=a.route,c=a.href,p={},l=o.options.linkActiveClass,d=o.options.linkExactActiveClass,v=null==l?"router-link-active":l,m=null==d?"router-link-exact-active":d,b=null==this.activeClass?v:this.activeClass,w=null==this.exactActiveClass?m:this.exactActiveClass,x=u.path?h(null,u,null,o):s;p[w]=y(i,x),p[b]=this.exact?p[w]:(r=x,0===(e=i).path.replace(f,"/").indexOf(r.path.replace(f,"/"))&&(!r.hash||e.hash===r.hash)&&function(t,e){for(var r in e)if(!(r in t))return!1;return!0}(e.query,r.query));var R=function(t){k(t)&&(n.replace?o.replace(u):o.push(u))},E={click:k};Array.isArray(this.event)?this.event.forEach(function(t){E[t]=R}):E[this.event]=R;var O={class:p};if("a"===this.tag)O.on=E,O.attrs={href:c};else{var j=function t(e){if(e)for(var r,n=0;n<e.length;n++){if("a"===(r=e[n]).tag)return r;if(r.children&&(r=t(r.children)))return r}}(this.$slots.default);if(j){j.isStatic=!1;var C=g.util.extend;(j.data=C({},j.data)).on=E,(j.data.attrs=C({},j.data.attrs)).href=c}else O.on=E}return t(this.tag,O,this.$slots.default)}};function k(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function R(t){if(!R.installed||g!==t){R.installed=!0,g=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("router-view",n),t.component("router-link",x);var o=t.config.optionMergeStrategies;o.beforeRouteEnter=o.beforeRouteLeave=o.beforeRouteUpdate=o.created}}var E="undefined"!=typeof window;function O(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function j(t){return t.replace(/\/\//g,"/")}var C=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},A=I,_=L,S=function(t,e){return U(L(t,e))},T=U,$=H,q=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function L(t,e){for(var r,n,o=[],i=0,a=0,u="",s=e&&e.delimiter||"/";null!=(r=q.exec(t));){var c=r[0],p=r[1],f=r.index;if(u+=t.slice(a,f),a=f+c.length,p)u+=p[1];else{var h=t[a],l=r[2],d=r[3],v=r[4],y=r[5],m=r[6],g=r[7];u&&(o.push(u),u="");var b=null!=l&&null!=h&&h!==l,w="+"===m||"*"===m,x="?"===m||"*"===m,k=r[2]||s,R=v||y;o.push({name:d||i++,prefix:l||"",delimiter:k,optional:x,repeat:w,partial:b,asterisk:!!g,pattern:R?(n=R,n.replace(/([=!:$\/()])/g,"\\$1")):g?".*":"[^"+M(k)+"]+?"})}}return a<t.length&&(u+=t.substr(a)),u&&o.push(u),o}function P(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function U(t){for(var e=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(e[r]=new RegExp("^(?:"+t[r].pattern+")$"));return function(r,n){for(var o="",i=r||{},a=(n||{}).pretty?P:encodeURIComponent,u=0;u<t.length;u++){var s=t[u];if("string"!=typeof s){var c,p=i[s.name];if(null==p){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(C(p)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var f=0;f<p.length;f++){if(c=a(p[f]),!e[u].test(c))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(c)+"`");o+=(0===f?s.prefix:s.delimiter)+c}}else{if(c=s.asterisk?encodeURI(p).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):a(p),!e[u].test(c))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+c+'"');o+=s.prefix+c}}else o+=s}return o}}function M(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function V(t,e){return t.keys=e,t}function B(t){return t.sensitive?"":"i"}function H(t,e,r){C(e)||(r=e||r,e=[]);for(var n=(r=r||{}).strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"==typeof u)i+=M(u);else{var s=M(u.prefix),c="(?:"+u.pattern+")";e.push(u),u.repeat&&(c+="(?:"+s+c+")*"),i+=c=u.optional?u.partial?s+"("+c+")?":"(?:"+s+"("+c+"))?":s+"("+c+")"}}var p=M(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",V(new RegExp("^"+i,B(r)),e)}function I(t,e,r){return C(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?function(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return V(t,e)}(t,e):C(t)?function(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(I(t[o],e,r).source);return V(new RegExp("(?:"+n.join("|")+")",B(r)),e)}(t,e,r):(n=e,H(L(t,o=r),n,o));var n,o}A.parse=_,A.compile=S,A.tokensToFunction=T,A.tokensToRegExp=$;var z=Object.create(null);function D(t,r,n){try{return(z[t]||(z[t]=A.compile(t)))(r||{},{pretty:!0})}catch(t){return e(!1,"missing param for "+n+": "+t.message),""}}function F(r,n,o,i){var a=n||[],u=o||Object.create(null),s=i||Object.create(null);r.forEach(function(r){!function r(n,o,i,a,u,s){var c=a.path;var p=a.name;t(null!=c,'"path" is required in a route configuration.'),t("string"!=typeof a.component,'route config "component" for path: '+String(c||p)+" cannot be a string id. Use an actual component instead.");var f=a.pathToRegexpOptions||{};var h=function(t,e,r){r||(t=t.replace(/\/$/,""));if("/"===t[0])return t;if(null==e)return t;return j(e.path+"/"+t)}(c,u,f.strict);"boolean"==typeof a.caseSensitive&&(f.sensitive=a.caseSensitive);var l={path:h,regex:(d=h,v=f,y=A(d,[],v),m=Object.create(null),y.keys.forEach(function(t){e(!m[t.name],'Duplicate param keys in route with path: "'+d+'"'),m[t.name]=!0}),y),components:a.components||{default:a.component},instances:{},name:p,parent:u,matchAs:s,redirect:a.redirect,beforeEnter:a.beforeEnter,meta:a.meta||{},props:null==a.props?{}:a.components?a.props:{default:a.props}};var d,v,y,m;a.children&&(a.name&&!a.redirect&&a.children.some(function(t){return/^\/?$/.test(t.path)})&&e(!1,"Named Route '"+a.name+"' has a default child route. When navigating to this named route (:to=\"{name: '"+a.name+"'\"), the default child route will not be rendered. Remove the name from this route and use the name of the default child route for named links instead."),a.children.forEach(function(t){var e=s?j(s+"/"+t.path):void 0;r(n,o,i,t,l,e)}));if(void 0!==a.alias){var g=Array.isArray(a.alias)?a.alias:[a.alias];g.forEach(function(t){var e={path:t,children:a.children};r(n,o,i,e,u,l.path||"/")})}o[l.path]||(n.push(l.path),o[l.path]=l);p&&(i[p]?s||e(!1,'Duplicate named routes definition: { name: "'+p+'", path: "'+l.path+'" }'):i[p]=l)}(a,u,s,r)});for(var c=0,p=a.length;c<p;c++)"*"===a[c]&&(a.push(a.splice(c,1)[0]),p--,c--);return{pathList:a,pathMap:u,nameMap:s}}function N(t,r,n,o){var i="string"==typeof t?{path:t}:t;if(i.name||i._normalized)return i;if(!i.path&&i.params&&r){(i=J({},i))._normalized=!0;var a=J(J({},r.params),i.params);if(r.name)i.name=r.name,i.params=a;else if(r.matched.length){var u=r.matched[r.matched.length-1].path;i.path=D(u,a,"path "+r.path)}else e(!1,"relative params navigation requires a current route.");return i}var s=function(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}(i.path||""),p=r&&r.path||"/",f=s.path?O(s.path,p,n||i.append):p,h=function(t,r,n){void 0===r&&(r={});var o,i=n||c;try{o=i(t||"")}catch(t){e(!1,t.message),o={}}for(var a in r)o[a]=r[a];return o}(s.query,i.query,o&&o.options.parseQuery),l=i.hash||s.hash;return l&&"#"!==l.charAt(0)&&(l="#"+l),{_normalized:!0,path:f,query:h,hash:l}}function J(t,e){for(var r in e)t[r]=e[r];return t}function K(r,n){var o=F(r),i=o.pathList,a=o.pathMap,u=o.nameMap;function s(t,r,o){var s=N(t,r,!1,n),c=s.name;if(c){var f=u[c];if(e(f,"Route with name '"+c+"' does not exist"),!f)return p(null,s);var h=f.regex.keys.filter(function(t){return!t.optional}).map(function(t){return t.name});if("object"!=typeof s.params&&(s.params={}),r&&"object"==typeof r.params)for(var l in r.params)!(l in s.params)&&h.indexOf(l)>-1&&(s.params[l]=r.params[l]);if(f)return s.path=D(f.path,s.params,'named route "'+c+'"'),p(f,s,o)}else if(s.path){s.params={};for(var d=0;d<i.length;d++){var v=i[d],y=a[v];if(Q(y.regex,s.path,s.params))return p(y,s,o)}}return p(null,s)}function c(r,o){var i=r.redirect,a="function"==typeof i?i(h(r,o,null,n)):i;if("string"==typeof a&&(a={path:a}),!a||"object"!=typeof a)return e(!1,"invalid redirect option: "+JSON.stringify(a)),p(null,o);var c,f=a,l=f.name,d=f.path,v=o.query,y=o.hash,m=o.params;if(v=f.hasOwnProperty("query")?f.query:v,y=f.hasOwnProperty("hash")?f.hash:y,m=f.hasOwnProperty("params")?f.params:m,l)return t(u[l],'redirect failed: named route "'+l+'" not found.'),s({_normalized:!0,name:l,query:v,hash:y,params:m},void 0,o);if(d){var g=O(d,(c=r).parent?c.parent.path:"/",!0);return s({_normalized:!0,path:D(g,m,'redirect route with path "'+g+'"'),query:v,hash:y},void 0,o)}return e(!1,"invalid redirect option: "+JSON.stringify(a)),p(null,o)}function p(t,e,r){return t&&t.redirect?c(t,r||e):t&&t.matchAs?function(t,e,r){var n=s({_normalized:!0,path:D(r,e.params,'aliased route with path "'+r+'"')});if(n){var o=n.matched,i=o[o.length-1];return e.params=n.params,p(i,e)}return p(null,e)}(0,e,t.matchAs):h(t,e,r,n)}return{match:s,addRoutes:function(t){F(t,i,a,u)}}}function Q(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"==typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name]=u)}return!0}var W=Object.create(null);function X(){window.history.replaceState({key:st()},""),window.addEventListener("popstate",function(t){var e;G(),t.state&&t.state.key&&(e=t.state.key,at=e)})}function Y(e,r,n,o){if(e.app){var i=e.options.scrollBehavior;i&&(t("function"==typeof i,"scrollBehavior must be a function"),e.app.$nextTick(function(){var e=function(){var t=st();if(t)return W[t]}(),a=i(r,n,o?e:null);a&&("function"==typeof a.then?a.then(function(t){rt(t,e)}).catch(function(e){t(!1,e.toString())}):rt(a,e))}))}}function G(){var t=st();t&&(W[t]={x:window.pageXOffset,y:window.pageYOffset})}function Z(t){return et(t.x)||et(t.y)}function tt(t){return{x:et(t.x)?t.x:window.pageXOffset,y:et(t.y)?t.y:window.pageYOffset}}function et(t){return"number"==typeof t}function rt(t,e){var r,n,o,i,a,u="object"==typeof t;if(u&&"string"==typeof t.selector){var s=document.querySelector(t.selector);if(s){var c=t.offset&&"object"==typeof t.offset?t.offset:{};c={x:et((a=c).x)?a.x:0,y:et(a.y)?a.y:0},r=s,n=c,o=document.documentElement.getBoundingClientRect(),e={x:(i=r.getBoundingClientRect()).left-o.left-n.x,y:i.top-o.top-n.y}}else Z(t)&&(e=tt(t))}else u&&Z(t)&&(e=tt(t));e&&window.scrollTo(e.x,e.y)}var nt,ot=E&&((-1===(nt=window.navigator.userAgent).indexOf("Android 2.")&&-1===nt.indexOf("Android 4.0")||-1===nt.indexOf("Mobile Safari")||-1!==nt.indexOf("Chrome")||-1!==nt.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history),it=E&&window.performance&&window.performance.now?window.performance:Date,at=ut();function ut(){return it.now().toFixed(3)}function st(){return at}function ct(t,e){G();var r=window.history;try{e?r.replaceState({key:at},"",t):(at=ut(),r.pushState({key:at},"",t))}catch(r){window.location[e?"replace":"assign"](t)}}function pt(t){ct(t,!0)}function ft(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],function(){n(o+1)}):n(o+1)};n(0)}function ht(t){return function(n,o,i){var a=!1,u=0,s=null;lt(t,function(t,n,o,c){if("function"==typeof t&&void 0===t.cid){a=!0,u++;var p,f=yt(function(e){var r;((r=e).__esModule||vt&&"Module"===r[Symbol.toStringTag])&&(e=e.default),t.resolved="function"==typeof e?e:g.extend(e),o.components[c]=e,--u<=0&&i()}),h=yt(function(t){var n="Failed to resolve async component "+c+": "+t;e(!1,n),s||(s=r(t)?t:new Error(n),i(s))});try{p=t(f,h)}catch(t){h(t)}if(p)if("function"==typeof p.then)p.then(f,h);else{var l=p.component;l&&"function"==typeof l.then&&l.then(f,h)}}}),a||i()}}function lt(t,e){return dt(t.map(function(t){return Object.keys(t.components).map(function(r){return e(t.components[r],t.instances[r],t,r)})}))}function dt(t){return Array.prototype.concat.apply([],t)}var vt="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function yt(t){var e=!1;return function(){for(var r=[],n=arguments.length;n--;)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var mt=function(t,e){this.router=t,this.base=function(t){if(!t)if(E){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";"/"!==t.charAt(0)&&(t="/"+t);return t.replace(/\/$/,"")}(e),this.current=d,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[]};function gt(t,e,r,n){var o=lt(t,function(t,n,o,i){var a=function(t,e){"function"!=typeof t&&(t=g.extend(t));return t.options[e]}(t,e);if(a)return Array.isArray(a)?a.map(function(t){return r(t,n,o,i)}):r(a,n,o,i)});return dt(n?o.reverse():o)}function bt(t,e){if(e)return function(){return t.apply(e,arguments)}}mt.prototype.listen=function(t){this.cb=t},mt.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},mt.prototype.onError=function(t){this.errorCbs.push(t)},mt.prototype.transitionTo=function(t,e,r){var n=this,o=this.router.match(t,this.current);this.confirmTransition(o,function(){n.updateRoute(o),e&&e(o),n.ensureURL(),n.ready||(n.ready=!0,n.readyCbs.forEach(function(t){t(o)}))},function(t){r&&r(t),t&&!n.ready&&(n.ready=!0,n.readyErrorCbs.forEach(function(e){e(t)}))})},mt.prototype.confirmTransition=function(t,n,o){var i=this,a=this.current,u=function(t){r(t)&&(i.errorCbs.length?i.errorCbs.forEach(function(e){e(t)}):(e(!1,"uncaught error during route navigation:"),console.error(t))),o&&o(t)};if(y(t,a)&&t.matched.length===a.matched.length)return this.ensureURL(),u();var s=function(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n&&t[r]===e[r];r++);return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}(this.current.matched,t.matched),c=s.updated,p=s.deactivated,f=s.activated,h=[].concat(gt(p,"beforeRouteLeave",bt,!0),this.router.beforeHooks,gt(c,"beforeRouteUpdate",bt),f.map(function(t){return t.beforeEnter}),ht(f));this.pending=t;var l=function(e,n){if(i.pending!==t)return u();try{e(t,a,function(t){!1===t||r(t)?(i.ensureURL(!0),u(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(u(),"object"==typeof t&&t.replace?i.replace(t):i.push(t)):n(t)})}catch(t){u(t)}};ft(h,l,function(){var e,r,o=[];ft((e=o,r=function(){return i.current===t},gt(f,"beforeRouteEnter",function(t,n,o,i){return a=t,u=o,s=i,c=e,p=r,function(t,e,r){return a(t,e,function(t){r(t),"function"==typeof t&&c.push(function(){!function t(e,r,n,o){r[n]?e(r[n]):o()&&setTimeout(function(){t(e,r,n,o)},16)}(t,u.instances,s,p)})})};var a,u,s,c,p})).concat(i.router.resolveHooks),l,function(){if(i.pending!==t)return u();i.pending=null,n(t),i.router.app&&i.router.app.$nextTick(function(){o.forEach(function(t){t()})})})})},mt.prototype.updateRoute=function(t){var e=this.current;this.current=t,this.cb&&this.cb(t),this.router.afterHooks.forEach(function(r){r&&r(t,e)})};var wt=function(t){function e(e,r){var n=this;t.call(this,e,r);var o=e.options.scrollBehavior;o&&X();var i=xt(this.base);window.addEventListener("popstate",function(t){var r=n.current,a=xt(n.base);n.current===d&&a===i||n.transitionTo(a,function(t){o&&Y(e,t,r,!0)})})}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){ct(j(n.base+t.fullPath)),Y(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){pt(j(n.base+t.fullPath)),Y(n.router,t,o,!1),e&&e(t)},r)},e.prototype.ensureURL=function(t){if(xt(this.base)!==this.current.fullPath){var e=j(this.base+this.current.fullPath);t?ct(e):pt(e)}},e.prototype.getCurrentLocation=function(){return xt(this.base)},e}(mt);function xt(t){var e=window.location.pathname;return t&&0===e.indexOf(t)&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var kt=function(t){function e(e,r,n){t.call(this,e,r),n&&function(t){var e=xt(t);if(!/^\/#/.test(e))return window.location.replace(j(t+"/#"+e)),!0}(this.base)||Rt()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this,e=this.router.options.scrollBehavior,r=ot&&e;r&&X(),window.addEventListener(ot?"popstate":"hashchange",function(){var e=t.current;Rt()&&t.transitionTo(Et(),function(n){r&&Y(t.router,n,e,!0),ot||Ct(n.fullPath)})})},e.prototype.push=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){jt(t.fullPath),Y(n.router,t,o,!1),e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this,o=this.current;this.transitionTo(t,function(t){Ct(t.fullPath),Y(n.router,t,o,!1),e&&e(t)},r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;Et()!==e&&(t?jt(e):Ct(e))},e.prototype.getCurrentLocation=function(){return Et()},e}(mt);function Rt(){var t=Et();return"/"===t.charAt(0)||(Ct("/"+t),!1)}function Et(){var t=window.location.href,e=t.indexOf("#");return-1===e?"":t.slice(e+1)}function Ot(t){var e=window.location.href,r=e.indexOf("#");return(r>=0?e.slice(0,r):e)+"#"+t}function jt(t){ot?ct(Ot(t)):window.location.hash=t}function Ct(t){ot?pt(Ot(t)):window.location.replace(Ot(t))}var At=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)},r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)},r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,function(){e.index=r,e.updateRoute(n)})}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(mt),_t=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=K(e.routes||[],this);var r=e.mode||"hash";switch(this.fallback="history"===r&&!ot&&!1!==e.fallback,this.fallback&&(r="hash"),E||(r="abstract"),this.mode=r,r){case"history":this.history=new wt(this,e.base);break;case"hash":this.history=new kt(this,e.base,this.fallback);break;case"abstract":this.history=new At(this,e.base);break;default:t(!1,"invalid mode: "+r)}},St={currentRoute:{configurable:!0}};function Tt(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}return _t.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},St.currentRoute.get=function(){return this.history&&this.history.current},_t.prototype.init=function(e){var r=this;if(t(R.installed,"not installed. Make sure to call `Vue.use(VueRouter)` before creating root instance."),this.apps.push(e),!this.app){this.app=e;var n=this.history;if(n instanceof wt)n.transitionTo(n.getCurrentLocation());else if(n instanceof kt){var o=function(){n.setupListeners()};n.transitionTo(n.getCurrentLocation(),o,o)}n.listen(function(t){r.apps.forEach(function(e){e._route=t})})}},_t.prototype.beforeEach=function(t){return Tt(this.beforeHooks,t)},_t.prototype.beforeResolve=function(t){return Tt(this.resolveHooks,t)},_t.prototype.afterEach=function(t){return Tt(this.afterHooks,t)},_t.prototype.onReady=function(t,e){this.history.onReady(t,e)},_t.prototype.onError=function(t){this.history.onError(t)},_t.prototype.push=function(t,e,r){this.history.push(t,e,r)},_t.prototype.replace=function(t,e,r){this.history.replace(t,e,r)},_t.prototype.go=function(t){this.history.go(t)},_t.prototype.back=function(){this.go(-1)},_t.prototype.forward=function(){this.go(1)},_t.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map(function(t){return Object.keys(t.components).map(function(e){return t.components[e]})})):[]},_t.prototype.resolve=function(t,e,r){var n,o,i,a,u=N(t,e||this.history.current,r,this),s=this.match(u,e),c=s.redirectedFrom||s.fullPath,p=this.history.base;return{location:u,route:s,href:(n=p,o=c,i=this.mode,a="hash"===i?"#"+o:o,n?j(n+"/"+a):a),normalizedTo:u,resolved:s}},_t.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==d&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(_t.prototype,St),_t.install=R,_t.version="2.8.1",E&&window.Vue&&window.Vue.use(_t),_t});
//# sourceMappingURL=vue-router.js.map