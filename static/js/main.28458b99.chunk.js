(this.webpackJsonpcosmostipbot=this.webpackJsonpcosmostipbot||[]).push([[0],{48:function(e,t,a){e.exports=a(65)},53:function(e,t,a){e.exports=a.p+"static/media/Roboto-Regular.11eabca2.ttf"},55:function(e,t,a){},56:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(22),o=a.n(r),c=(a(53),a(54),a(55),a(56),a(8)),u=a(9),i=a(11),m=a(10),s=a(31),p=a(38),h=a(27),d=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(s.a,{bg:"light",expand:"lg"},l.a.createElement(s.a.Brand,{href:"#home"},"@cosmostipbot"),l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"mr-auto"},l.a.createElement(p.a.Link,{href:"/"},"Home"),l.a.createElement(p.a.Link,{href:"/howto"},"How-To"),l.a.createElement(h.a,{title:"About",id:"basic-nav-dropdown"},l.a.createElement(h.a.Item,{href:"/faq"},"FAQ"),l.a.createElement(h.a.Item,{href:"/terms"},"Terms"),l.a.createElement(h.a.Divider,null),l.a.createElement(h.a.Item,{href:"/about"},"About Us"))))))}}]),a}(n.Component),E=a(46),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement("div",{className:"header-div"},l.a.createElement("img",{src:"/img/background.png",className:"header-img",alt:"comostipbot logo"}))))}}]),a}(n.Component),f={display:"block",padding:"20px",height:"60px",width:"100%"},g={backgroundColor:"#F8F8F8",borderTop:"1px solid #E7E7E7",textAlign:"left",padding:"20px",position:"fixed",left:"0",bottom:"0",height:"60px",width:"100%"},v={color:"grey"},w=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{style:f},l.a.createElement("footer",{style:g},l.a.createElement("span",null,"\xa9 All rights reserved. @cosmostipbot 2020"),l.a.createElement("span",{className:"float-right"},l.a.createElement("a",{href:"/terms",style:v},l.a.createElement("span",{className:"ml-4"},"Terms & Conditions")),l.a.createElement("a",{href:"/privacy",style:v},l.a.createElement("span",{className:"ml-4"},"Privacy Policy")))))}}]),a}(l.a.Component),y=a(36),O=a(6),j=a(17),x=a(12),T=a(13),k=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"About Us")))))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"FAQ")))))}}]),a}(n.Component),A=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"Commands"))),l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("b",null,"Tweet / Group Message Commands"),l.a.createElement("br",null),l.a.createElement("i",null,"Tips are sent through public tweets. These are processed in real time."),l.a.createElement("br",null),l.a.createElement("br",null))),l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("div",{className:"commands"},l.a.createElement("ul",null,["!tip: Tips are sent through public tweets. On Twitter: Tag @cosmos_tipbot in a tweet and mention !tip <amount> <@username>. Example:\n        @cosmos_tipbot !tip 5 @toschdev\n        would send a 5 ATOM tip to user @toschdev."].map((function(e){return l.a.createElement("li",null,e)})))))),l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("b",null,"DM / PM Commands"))),l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("div",{className:"commands"},l.a.createElement("ul",null,["!help: The tip bot will respond to your DM with a list of commands and their functions. If you forget something, use this to get a hint of how to do it!","!register: Registers your user ID for an account that is tied to it.  This is used to store your tips. Make sure to withdraw to a private wallet, as the tip bot is not meant to be a long term storage device for ATOM.","!balance: This returns the balance of the account linked with your user ID.","!account: Returns the account number that is tied to your user ID (currently unique to platform).  You can use this to deposit more ATOM to tip from your personal wallet.","!withdraw: Proper usage is !withdraw cosmosxxxxxxxx.  This will send the full balance of your tip account to the provided Cosmos account.  Optional: You can include an amount to withdraw by sending !withdraw <amount> <account>.  Example: !withdraw 1 cosmosxxxxx would withdraw 1 ATOM to account cosmosxxxxx.","!donate: Proper usage is !donate 1234.  This will send the requested donation to the Cosmos Tip Bot donation account to help fund development efforts.",'!setlanguage: Used to change the default language of the bot.  A list of available languages is provided in the !languages command.  Proper use is "!setlanguage German" to change your language to German.',"!languages: Returns a list of languages available for translation"].map((function(e){return l.a.createElement("li",null,e)}))))))))}}]),a}(n.Component),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"HowTo")))))}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"Privacy Policy")))))}}]),a}(n.Component),I=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.a,null,l.a.createElement(x.a,null,l.a.createElement(T.a,null,l.a.createElement("h1",null,"Terms")))))}}]),a}(n.Component);var P=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement(b,null),l.a.createElement(y.a,null,l.a.createElement(O.a,{exact:!0,path:"/",component:A}),l.a.createElement(O.a,{path:"/about",component:k}),l.a.createElement(O.a,{path:"/faq",component:C}),l.a.createElement(O.a,{path:"/howto",component:M}),l.a.createElement(O.a,{path:"/privacy",component:N}),l.a.createElement(O.a,{path:"/terms",component:I})),l.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(y.a,null,l.a.createElement(P,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.28458b99.chunk.js.map