(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{136:function(n,t,r){"use strict";function l(n){return"/"===n.charAt(0)}function g(n,t){for(var r=t,o=r+1,i=n.length;o<i;r+=1,o+=1)n[r]=n[o];n.pop()}t.a=function(n,t){void 0===t&&(t="");var r,o,i=n&&n.split("/")||[],e=t&&t.split("/")||[],u=n&&l(n),f=t&&l(t),p=u||f;if(n&&l(n)?e=i:i.length&&(e.pop(),e=e.concat(i)),!e.length)return"/";o=!!e.length&&("."===(r=e[e.length-1])||".."===r||""===r);for(var s=0,a=e.length;0<=a;a--){var c=e[a];"."===c?g(e,a):".."===c?(g(e,a),s++):s&&(g(e,a),s--)}if(!p)for(;s--;)e.unshift("..");!p||""===e[0]||e[0]&&l(e[0])||e.unshift("");var h=e.join("/");return o&&"/"!==h.substr(-1)&&(h+="/"),h}}}]);