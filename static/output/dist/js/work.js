(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{334:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),l=a(10),o=a.n(l),c=a(340),i=a(341),s=a(13),p=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}();function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=c.a.Header,m=c.a.Sider,d=c.a.Content,y=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),o=0;o<r;o++)l[o]=arguments[o];return a=n=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n.state={collapsed:!1},n.toggle=function(){n.setState({collapsed:!n.state.collapsed})},u(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.a.Component),p(t,[{key:"render",value:function(){return r.a.createElement(c.a,{style:{height:"100%"}},r.a.createElement(m,{trigger:null,collapsible:!0,collapsed:this.state.collapsed},r.a.createElement("div",{className:"logo"}),r.a.createElement(i.a,{theme:"dark",mode:"inline",defaultSelectedKeys:["1"]},r.a.createElement(i.a.Item,{key:"1"},r.a.createElement(s.a,{type:"user"}),r.a.createElement("span",{className:"nav-text"},"nav 1")),r.a.createElement(i.a.Item,{key:"2"},r.a.createElement(s.a,{type:"video-camera"}),r.a.createElement("span",{className:"nav-text"},"nav 2")),r.a.createElement(i.a.Item,{key:"3"},r.a.createElement(s.a,{type:"upload"}),r.a.createElement("span",{className:"nav-text"},"nav 3")))),r.a.createElement(c.a,null,r.a.createElement(f,{style:{background:"#fff",padding:0}},r.a.createElement(s.a,{className:"trigger",type:this.state.collapsed?"menu-unfold":"menu-fold",onClick:this.toggle})),r.a.createElement(d,{style:{margin:"24px 16px",padding:24,background:"#fff",minHeight:280}},"Content")))}}]),t}();o.a.render(r.a.createElement(y,null),document.getElementById("app"))}},[[334,7,0]]]);