(function(){var t,e,n,i,r,o,c,a,l,s,u,f,d,h=[].slice,p={}.hasOwnProperty,m=function(t,e){for(var n in e){if(p.call(e,n))t[n]=e[n]}function i(){this.constructor=t}i.prototype=e.prototype;t.prototype=new i;t.__super__=e.prototype;return t};e={api:"https://api.github.com",anchorClass:"github-button",iconClass:"octicon",icon:"octicon-mark-github",scriptId:"github-bjs",styles:["default","mega"]};if(e.script=document.getElementById(e.scriptId)){e.url=e.script.src.replace(/buttons.js$/,"")}i=function(){var t;function e(){}e.flatten=function(e){var n,i;n=function(e,r){var o,c,a,l,s,u;switch(t.call(e)){case"[object Object]":for(a in e){l=e[a];n(l,r?""+r+"."+a:a)}break;case"[object Array]":for(o=s=0,u=e.length;s<u;o=++s){c=e[o];n(c,r?""+r+"["+o+"]":"["+o+"]")}break;default:i[r]=e}};i={};n(e);return i};e.expand=function(e){var n,i,r,o,c,a,l,s,u,f,d,h,p,m;c={};for(n in e){s=e[n];r=[];p=n.split(".");for(u=0,d=p.length;u<d;u++){i=p[u];o=i.match(/^(.*?)((?:\[[0-9]+\])*)$/);if(o[1]){r.push(o[1])}if(o[2]){m=o[2].replace(/^\[|\]$/g,"").split("][");for(f=0,h=m.length;f<h;f++){a=m[f];r.push(Number(a))}}}l=c;i="result";while(r.length){if(l[i]==null){switch(t.call(r[0])){case"[object String]":l[i]={};break;case"[object Number]":l[i]=[]}}l=l[i];i=r.shift()}l[i]=s}return c.result};t=Object.prototype.toString;return e}();a=function(){function t(){}t.stringify=function(t){var e,n,i;n=[];for(e in t){i=t[e];if(i==null){i=""}n.push(""+e+"="+i)}return n.join("&")};t.parse=function(t){var e,n,i,r,o,c,a,l;n={};a=t.split("&");for(o=0,c=a.length;o<c;o++){i=a[o];if(!(i!=="")){continue}l=i.split("="),e=l[0],r=2<=l.length?h.call(l,1):[];if(e!==""){n[e]=r.join("=")}}return n};return t}();c=function(){function t(){}t.encode=function(t){return"#"+encodeURIComponent(a.stringify(i.flatten(t)))};t.decode=function(t){if(t==null){t=document.location.hash}return i.expand(a.parse(decodeURIComponent(t.replace(/^#/,""))))};return t}();n=function(){var t,e,n,i,r,o,c;function a(t,e){this.element=document.createElement(t);if(e){e(this.element)}}a.prototype.on=function(t,n){e(this.element,t,n)};a.prototype.once=function(t,n){var i;i=function(e){return function(){c(e.element,t,i);n()}}(this);e(this.element,t,i)};a.prototype.addClass=function(e){if(!n(this.element,e)){t(this.element,e)}};a.prototype.removeClass=function(t){if(n(this.element,t)){o(this.element,t)}};a.prototype.hasClass=function(t){return n(this.element,t)};e=function(t,e,n){if(t.addEventListener){t.addEventListener(""+e,n)}else if(t.attachEvent){t.attachEvent("on"+e,n)}};c=function(t,e,n){if(t.removeEventListener){t.removeEventListener(""+e,n)}else if(t.detachEvent){t.detachEvent("on"+e,n)}};r=/[ \t\n\f\r]+/g;i=/^[ \t\n\f\r]+|[ \t\n\f\r]+$/g;t=function(t,e){t.className+=" "+e};o=function(t,e){t.className=(" "+t.className+" ").replace(r," ").replace(" "+e+" ","").replace(i,"")};n=function(t,e){return(" "+t.className+" ").replace(r," ").indexOf(" "+e+" ")>=0};return a}();t=function(){var t;function n(){}n.parse=function(n){return{href:t(n.href),text:n.getAttribute("data-text")||n.textContent||n.innerText,data:{count:{api:function(){var t;if(t=n.getAttribute("data-count-api")){if("/"!==t.charAt(0)){t="/"+t}return t}}(),href:function(){var e;if((e=n.getAttribute("data-count-href"))&&(e=t(e))){return e}else{return t(n.href)}}()},style:function(){var t,i,r,o,c;if(i=n.getAttribute("data-style")){c=e.styles;for(r=0,o=c.length;r<o;r++){t=c[r];if(t===i){return i}}}return e.styles[0]}(),icon:function(){var t;if(t=n.getAttribute("data-icon")){return t}}()}}};t=function(t){if(!/^\s*javascript:/i.test(t)){return t}};return n}();r=function(t){m(n,t);function n(){var t,i;i=arguments[0],t=2<=arguments.length?h.call(arguments,1):[];this.hash=i;this.callback=t;n.__super__.constructor.call(this,"iframe",function(e){var n,i,r,o;r={allowtransparency:true,scrolling:"no",frameBorder:0};for(n in r){i=r[n];e.setAttribute(n,i)}o={border:"none",height:"0",width:"1px"};for(n in o){i=o[n];e.style[n]=i}if(t[0]){t[0](e)}});this.once("load",function(t){return function(){var e,n;e=t.element.contentWindow.document;n=e.getElementsByTagName("script")[0];if(!n.readyState||/loaded|complete/.test(n.readyState)){setTimeout(function(){t.reload()},0)}else{t.on.call({element:n},"readystatechange",function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState)){t.reload()}})}}}(this));this.element.contentWindow.document.open();this.element.contentWindow.document.write('<!DOCTYPE html>\n<html>\n<head>\n<meta charset="utf-8">\n<title></title>\n<base target="_blank"><!--[if lte IE 6]></base><![endif]-->\n<link rel="stylesheet" href="'+e.url+'assets/css/buttons.css">\n<style>html{visibility:hidden;}</style>\n<script>document.location.hash = "'+this.hash+'";</script>\n</head>\n<body>\n<script src="'+e.script.src+'"></script>\n</body>\n</html>');this.element.contentWindow.document.close()}n.prototype.reload=function(){var t,n,i,r;n=this.element.contentWindow.document;i=n.documentElement;t=n.body;i.style.overflow=t.style.overflow="visible";r={height:""+t.scrollHeight+"px",width:""+t.scrollWidth+"px"};i.style.overflow=t.style.overflow="";this.once("load",function(t){return function(){var e,n;for(e in r){n=r[e];t.element.style[e]=n}if(t.callback[1]){t.callback[1](t.element)}}}(this));this.element.src=""+e.url+"buttons.html"+this.hash};return n}(n);o=function(){var t,r;function o(e){document.body.className=e.data.style;document.getElementsByTagName("base")[0].href=e.href;new t(e,function(t){document.body.appendChild(t)});new r(e,function(t){document.body.appendChild(t)})}t=function(t){m(i,t);function i(t,r){i.__super__.constructor.call(this,"a",function(i){i.className="button";if(t.href){i.href=t.href}new n("i",function(n){n=document.createElement("i");n.className=function(){var n;n=[t.data.icon||e.icon];if(e.iconClass){n.push(e.iconClass)}return n.join(" ")}();i.appendChild(n)});new n("span",function(e){if(t.text){e.appendChild(document.createTextNode(" "+t.text+" "))}i.appendChild(e)});if(r){r(i)}})}return i}(n);r=function(t){m(r,t);function r(t,o){var c;if(t.data.count.api){r.__super__.constructor.call(this,"a",function(e){e.className="count";if(t.data.count.href){e.href=t.data.count.href}new n("b",function(t){e.appendChild(t)});new n("i",function(t){e.appendChild(t)});new n("span",function(n){e.appendChild(n);window.callback=function(r){var c;window.callback=null;if(r.meta.status===200){c=i.flatten(r.data)[t.data.count.api.split("#").slice(1).join("#")];if(Object.prototype.toString.call(c)==="[object Number]"){c=c.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}n.appendChild(document.createTextNode(" "+c+" "));if(o){o(e)}}}})});c=function(){var e,n;n=t.data.count.api.split("#")[0];e=a.parse(n.split("?").slice(1).join("?"));e.callback="callback";return""+n.split("?")[0]+"?"+a.stringify(e)}();new n("script",function(t){var n;t.async=true;t.src=""+e.api+c;n=document.getElementsByTagName("head")[0];n.insertBefore(t,n.firstChild)})}}return r}(n);return o}();if(e.script){if(document.querySelectorAll){s=document.querySelectorAll("a."+e.anchorClass)}else{s=function(){var t,i,r,o;r=document.getElementsByTagName("a");o=[];for(t=0,i=r.length;t<i;t++){l=r[t];if(n.prototype.hasClass.call({element:l},e.anchorClass)){o.push(l)}}return o}()}u=function(e){new r(c.encode(t.parse(e)),function(t){e.parentNode.insertBefore(t,e)},function(){e.parentNode.removeChild(e)})};for(f=0,d=s.length;f<d;f++){l=s[f];u(l)}}else{new o(c.decode())}}).call(this);