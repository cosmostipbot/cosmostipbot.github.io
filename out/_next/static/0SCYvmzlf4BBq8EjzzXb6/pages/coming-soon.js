(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"1OyB":function(t,n,e){"use strict";function o(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}e.d(n,"a",(function(){return o}))},JX7q:function(t,n,e){"use strict";function o(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}e.d(n,"a",(function(){return o}))},Ji7U:function(t,n,e){"use strict";function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function r(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}e.d(n,"a",(function(){return r}))},Qetd:function(t,n,e){"use strict";var o=Object.assign.bind(Object);t.exports=o,t.exports.default=t.exports},foSv:function(t,n,e){"use strict";function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}e.d(n,"a",(function(){return o}))},grO0:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/coming-soon",function(){return e("w/X4")}])},md7G:function(t,n,e){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t){return(r="function"===typeof Symbol&&"symbol"===o(Symbol.iterator)?function(t){return o(t)}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":o(t)})(t)}e.d(n,"a",(function(){return i}));var c=e("JX7q");function i(t,n){return!n||"object"!==r(n)&&"function"!==typeof n?Object(c.a)(t):n}},rePB:function(t,n,e){"use strict";function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return o}))},vuIU:function(t,n,e){"use strict";function o(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function r(t,n,e){return n&&o(t.prototype,n),e&&o(t,e),t}e.d(n,"a",(function(){return r}))},"w/X4":function(t,n,e){"use strict";e.r(n);var o=e("1OyB"),r=e("vuIU"),c=e("JX7q"),i=e("md7G"),u=e("foSv"),a=e("Ji7U"),s=e("rePB"),f=e("q1tI"),l=e.n(f).a.createElement;function p(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}var y=function(t){Object(a.a)(f,t);var n,e=(n=f,function(){var t,e=Object(u.a)(n);if(p()){var o=Object(u.a)(this).constructor;t=Reflect.construct(e,arguments,o)}else t=e.apply(this,arguments);return Object(i.a)(this,t)});function f(){var t;Object(o.a)(this,f);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r)),Object(s.a)(Object(c.a)(t),"state",{days:"",hours:"",minutes:"",seconds:""}),Object(s.a)(Object(c.a)(t),"commingSoonTime",(function(){var n=new Date("2020-05-18 14:00 GMT+1"),e=Date.parse(n)/1e3,o=new Date,r=e-Date.parse(o)/1e3,c=Math.floor(r/86400),i=Math.floor((r-86400*c)/3600),u=Math.floor((r-86400*c-3600*i)/60),a=Math.floor(r-86400*c-3600*i-60*u);i<"10"&&(i="0"+i),u<"10"&&(u="0"+u),a<"10"&&(a="0"+a),t.setState({days:c,hours:i,minutes:u,seconds:a})})),Object(s.a)(Object(c.a)(t),"onSubmit",(function(t){t.preventDefault()})),t}return Object(r.a)(f,[{key:"componentDidMount",value:function(){var t=this;this.myInterval=setInterval((function(){t.commingSoonTime()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.myInterval)}},{key:"render",value:function(){return l("div",{className:"coming-soon-area"},l("div",{className:"d-table"},l("div",{className:"d-table-cell"},l("div",{className:"container"},l("div",{className:"coming-soon-content"},l("h1",null,"Coming Soon"),l("p",null,"Beta will commence in"),l("div",{id:"timer"},l("div",{id:"days"},this.state.days," ",l("span",null,"Days")),l("div",{id:"hours"},this.state.hours," ",l("span",null,"Hours")),l("div",{id:"minutes"},this.state.minutes," ",l("span",null,"Minutes")),l("div",{id:"seconds"},this.state.seconds," ",l("span",null,"Seconds"))))))))}}]),f}(f.Component);n.default=y}},[["grO0",0,1]]]);