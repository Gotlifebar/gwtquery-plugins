function DraggableSample1(){var M='',nb='" for "gwt:onLoadErrorFn"',lb='" for "gwt:onPropertyErrorFn"',Y='"><\/script>',$='#',Vb='.cache.html',ab='/',Jb='1E44F7BB8E4CC6937311D882E855F4F9',Kb='205575CF86479301D0828F08C6C68AEA',Lb='209CD296A97C1C5BC15D31D100EBDDBF',Mb='22BBA436D6DF892E61C1BCAACA0CCAA0',Nb='3C8FAEDFA7C5AA044BF67EB1D4903674',Ob='45317D8B80D4021CD66887E77F101631',Pb='799E911C0DB4C83410A151984202CA4E',Xb='<script defer="defer">DraggableSample1.onInjectionDone(\'DraggableSample1\')<\/script>',X='<script id="',ib='=',_='?',Qb='BA24F228F3D5DEFC2794AE4DEDF989C9',Rb='BEA0F26541393751EA07522F65C18235',kb='Bad handler "',Sb='C794094921F89A84146867C7A19B5BC6',Wb='DOMContentLoaded',N='DraggableSample1',Tb='EC563BB306A8E1CA2CD44BBF4F19FC8C',Ub='F505AE31D9760826F4509390CD6352AA',Z='SCRIPT',W='__gwt_marker_DraggableSample1',tb='_selector_force_js',bb='base',Q='begin',P='bootstrap',db='clear.cache.gif',hb='content',V='end',Db='gecko',Eb='gecko1_8',R='gwt.codesvr=',S='gwt.hosted=',T='gwt.hybrid',mb='gwt:onLoadErrorFn',jb='gwt:onPropertyErrorFn',gb='gwt:property',Hb='hosted.html?DraggableSample1',Cb='ie6',Bb='ie8',ob='iframe',cb='img',pb="javascript:''",ub='js',Gb='loadExternalRefs',eb='meta',rb='moduleRequested',U='moduleStartup',Ab='msie',fb='name',vb='native',xb='opera',qb='position:absolute;width:0;height:0;border:none',zb='safari',Ib='selectingPermutation',sb='selectorCapability',O='startup',Fb='unknown',wb='user.agent',yb='webkit';var k=window,l=document,m=k.__gwtStatsEvent?function(a){return k.__gwtStatsEvent(a)}:null,n=k.__gwtStatsSessionId?k.__gwtStatsSessionId:null,o,p,q,r=M,s={},t=[],u=[],v=[],w,x;m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:P,millis:(new Date).getTime(),type:Q});if(!k.__gwt_stylesLoaded){k.__gwt_stylesLoaded={}}if(!k.__gwt_scriptsLoaded){k.__gwt_scriptsLoaded={}}function y(){var b=false;try{var c=k.location.search;return (c.indexOf(R)!=-1||(c.indexOf(S)!=-1||k.external&&k.external.gwtOnLoad))&&c.indexOf(T)==-1}catch(a){}y=function(){return b};return b}
function z(){if(o&&p){var b=l.getElementById(N);var c=b.contentWindow;if(y()){c.__gwt_getProperty=function(a){return F(a)}}DraggableSample1=null;c.gwtOnLoad(w,N,r);m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:U,millis:(new Date).getTime(),type:V})}}
function A(){var e,f=W,g;l.write(X+f+Y);g=l.getElementById(f);e=g&&g.previousSibling;while(e&&e.tagName!=Z){e=e.previousSibling}function h(a){var b=a.lastIndexOf($);if(b==-1){b=a.length}var c=a.indexOf(_);if(c==-1){c=a.length}var d=a.lastIndexOf(ab,Math.min(c,b));return d>=0?a.substring(0,d+1):M}
;if(e&&e.src){r=h(e.src)}if(r==M){var i=l.getElementsByTagName(bb);if(i.length>0){r=i[i.length-1].href}else{r=h(l.location.href)}}else if(r.match(/^\w+:\/\//)){}else{var j=l.createElement(cb);j.src=r+db;r=h(j.src)}if(g){g.parentNode.removeChild(g)}}
function B(){var b=document.getElementsByTagName(eb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(fb),g;if(f){if(f==gb){g=e.getAttribute(hb);if(g){var h,i=g.indexOf(ib);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=M}s[f]=h}}else if(f==jb){g=e.getAttribute(hb);if(g){try{x=eval(g)}catch(a){alert(kb+g+lb)}}}else if(f==mb){g=e.getAttribute(hb);if(g){try{w=eval(g)}catch(a){alert(kb+g+nb)}}}}}}
function E(a,b){var c=v;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function F(a){var b=u[a](),c=t[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(x){x(a,d,b)}throw null}
var G;function H(){if(!G){G=true;var a=l.createElement(ob);a.src=pb;a.id=N;a.style.cssText=qb;a.tabIndex=-1;l.body.appendChild(a);m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:U,millis:(new Date).getTime(),type:rb});a.contentWindow.location.replace(r+J)}}
u[sb]=function(){if(l.location.href.indexOf(tb)!=-1)return ub;if(l.querySelectorAll&&/native/.test(String(l.querySelectorAll)))return vb;return ub};t[sb]={js:0,'native':1};u[wb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(b.indexOf(xb)!=-1){return xb}else if(b.indexOf(yb)!=-1){return zb}else if(b.indexOf(Ab)!=-1){if(document.documentMode>=8){return Bb}else{var d=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){var e=c(d);if(e>=6000){return Cb}}}}else if(b.indexOf(Db)!=-1){var d=/rv:([0-9]+)\.([0-9]+)/.exec(b);if(d&&d.length==3){if(c(d)>=1008)return Eb}return Db}return Fb};t[wb]={gecko:0,gecko1_8:1,ie6:2,ie8:3,opera:4,safari:5};DraggableSample1.onScriptLoad=function(){if(G){p=true;z()}};DraggableSample1.onInjectionDone=function(){o=true;m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:Gb,millis:(new Date).getTime(),type:V});z()};A();var I;var J;if(y()){if(k.external&&(k.external.initModule&&k.external.initModule(N))){k.location.reload();return}J=Hb;I=M}B();m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:P,millis:(new Date).getTime(),type:Ib});if(!y()){try{E([vb,Bb],Jb);E([ub,zb],Kb);E([ub,Cb],Lb);E([vb,zb],Mb);E([vb,xb],Nb);E([ub,Db],Ob);E([vb,Db],Pb);E([vb,Cb],Qb);E([ub,xb],Rb);E([vb,Eb],Sb);E([ub,Eb],Tb);E([ub,Bb],Ub);I=v[F(sb)][F(wb)];J=I+Vb}catch(a){return}}var K;function L(){if(!q){q=true;z();if(l.removeEventListener){l.removeEventListener(Wb,L,false)}if(K){clearInterval(K)}}}
if(l.addEventListener){l.addEventListener(Wb,function(){H();L()},false)}var K=setInterval(function(){if(/loaded|complete/.test(l.readyState)){H();L()}},50);m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:P,millis:(new Date).getTime(),type:V});m&&m({moduleName:N,sessionId:n,subSystem:O,evtGroup:Gb,millis:(new Date).getTime(),type:Q});l.write(Xb)}
DraggableSample1();