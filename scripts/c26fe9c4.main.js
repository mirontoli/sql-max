"use strict";!function(){var a={result:document.getElementById("result"),totalram:document.getElementById("totalram"),cores:document.getElementById("cores"),architecture:document.getElementById("architecture"),otherram:document.getElementById("otherram")},b={totalram:a.totalram.value,cores:a.cores.value,architecture:a.architecture.value,otherram:a.otherram.value},c=function(){var a=1024,c=b.architecture,d=parseInt(b.totalram)*a,e=parseInt(b.cores),f=parseInt(b.otherram),g={x86:1,x64:2,IA64:4},h=g[c],i=20*a>d?.2:.125,j=d*i,k=e>4?0:e,l=256+8*(k-4),m=e/4,n=d-j-f-l*h-1024*Math.ceil(m);return n},d=function(d){var e=d.target.id;b[e]=a[e].value,a.result.innerText=c()};a.architecture.addEventListener("change",d),a.totalram.addEventListener("change",d),a.cores.addEventListener("change",d),a.otherram.addEventListener("change",d)}();