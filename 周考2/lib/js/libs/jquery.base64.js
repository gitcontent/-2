!function(r){for(var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",t="",o=[256],u=[256],e=0,a=function(r){return r.replace(/[\u0080-\u07ff]/g,function(r){var e=r.charCodeAt(0);return String.fromCharCode(192|e>>6,128|63&e)}).replace(/[\u0800-\uffff]/g,function(r){var e=r.charCodeAt(0);return String.fromCharCode(224|e>>12,128|e>>6&63,128|63&e)})},f=function(r){return r.replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,function(r){var e=(15&r.charCodeAt(0))<<12|(63&r.charCodeAt(1))<<6|63&r.charCodeAt(2);return String.fromCharCode(e)}).replace(/[\u00c0-\u00df][\u0080-\u00bf]/g,function(r){var e=(31&r.charCodeAt(0))<<6|63&r.charCodeAt(1);return String.fromCharCode(e)})};e<256;){var c=String.fromCharCode(e);t+=c,u[e]=e,o[e]=n.indexOf(c),++e}function i(r,e,n,t,o,u){for(var a=0,f=0,c=(r=String(r)).length,i="",d=0;f<c;){var h=r.charCodeAt(f);for(a=(a<<o)+(h=h<256?n[h]:-1),d+=o;u<=d;){var C=a>>(d-=u);i+=t.charAt(C),a^=C<<d}++f}return!e&&0<d&&(i+=t.charAt(a<<u-d)),i}var d=r.base64=function(r,e,n){return e?d[r](e,n):r?null:this};d.btoa=d.encode=function(r,e){return(r=i(r=!1===d.raw||d.utf8encode||e?a(r):r,!1,u,n,8,6))+"====".slice(r.length%4||4)},d.atob=d.decode=function(r,e){r=r.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var n=(r=String(r).split("=")).length;r[--n]=i(r[n],!0,o,t,6,8),0<n;);return r=r.join(""),!1===d.raw||d.utf8decode||e?f(r):r}}(jQuery);