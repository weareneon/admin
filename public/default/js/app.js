$(function(){!function(){var e=window.location.href;e=e.replace(window.location.search,""),e=e.replace(/\/create$/,""),e=e.replace(/\/([0-9]+)\/edit/,"");var a=$('#side-menu a[href="'+window.location.href+'"]');a.length||(a=$('#side-menu a[href="'+e+'"]')),a.addClass("active").parents("li").addClass("active").end().parents("ul").addClass("collapse").addClass("in")}(),function(){$("html").tooltip({selector:"[data-toggle=tooltip]",container:"body"})}(),function(){$('input[type="text"]:first').focus()}()});
window.columnFilters={};
window.columnFilters.range=function(a,e){var t=$(a),r=t.find("input"),n=r.filter(":first"),d=r.filter(":last"),I=t.closest("td").data("index");n.data("ajax-data-name","from"),d.data("ajax-data-name","to"),$.fn.dataTable.ext.search.push(function(a,t,r){if(e.settings()[0].sTableId!=a.sTableId)return!0;var i=e.data()[r][I];void 0!==i["@data-order"]&&(i=i["@data-order"]);var s=n.val(),c=d.val();return n.closest(".datepicker").length>0&&d.closest(".datepicker").length>0?(s=""!=s?n.closest(".datepicker").data("DateTimePicker").getDate():Number.NEGATIVE_INFINITY,c=""!=c?d.closest(".datepicker").data("DateTimePicker").getDate():Number.POSITIVE_INFINITY,i=moment(i)):(i=parseInt(i),s=""!=s?parseInt(s):Number.NEGATIVE_INFINITY,c=""!=c?parseInt(c):Number.POSITIVE_INFINITY),i>=s&&c>=i}),r.on("keyup change",function(){e.draw()})};
window.columnFilters.select=function(n,c){var a=$(n),e=a.closest("td").data("index");a.on("change",function(){c.column(e).search(a.val()).draw()})};
window.columnFilters.text=function(n,t){var a=$(n),c=a.closest("td").data("index");a.on("keyup change",function(){t.column(c).search(a.val()).draw()})};
$(function(){$(".adminCheckboxAll").change(function(){var c=$(this).is(":checked");$(".adminCheckboxRow").prop("checked",c).filter(":first").change()}),$(document).delegate(".adminCheckboxRow","change",function(){var c=[];$(".adminCheckboxRow:checked").each(function(){c.push($(this).val())}),$(".tableActions .btnAction").each(function(){var e=$(this),n=e.data("href")+c.join(",");e.attr("href",n)})})});
$(function(){$(document).delegate(".btn-delete","click",function(e){e.preventDefault();var o=$(this).closest("form");bootbox.confirm(window.admin.lang.table["delete-confirm"],function(e){e&&o.submit()})}),bootbox.setDefaults("locale",window.admin.locale)});
$(function(){$(document).delegate('*[data-toggle="lightbox"]',"click",function(t){t.preventDefault(),$(this).ekkoLightbox({always_show_close:!1})})});
$.extend(!0,$.fn.dataTable.defaults,{sDom:"<'row'<'col-sm-6'l><'col-sm-6'f>r>t<'row'<'col-sm-6'i><'col-sm-6'p>>",oLanguage:{sLengthMenu:"_MENU_ records per page"}}),$.extend($.fn.dataTableExt.oStdClasses,{sWrapper:"dataTables_wrapper form-inline",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"}),$.fn.dataTable.Api?($.fn.dataTable.defaults.renderer="bootstrap",$.fn.dataTable.ext.renderer.pageButton.bootstrap=function(a,e,t,i,l,n){var s,o,r=new $.fn.dataTable.Api(a),d=a.oClasses,c=a.oLanguage.oPaginate,f=function(e,i){var p,b,g,T,u=function(a){a.preventDefault(),"ellipsis"!==a.data.action&&r.page(a.data.action).draw(!1)};for(p=0,b=i.length;b>p;p++)if(T=i[p],$.isArray(T))f(e,T);else{switch(s="",o="",T){case"ellipsis":s="&hellip;",o="disabled";break;case"first":s=c.sFirst,o=T+(l>0?"":" disabled");break;case"previous":s=c.sPrevious,o=T+(l>0?"":" disabled");break;case"next":s=c.sNext,o=T+(n-1>l?"":" disabled");break;case"last":s=c.sLast,o=T+(n-1>l?"":" disabled");break;default:s=T+1,o=l===T?"active":""}s&&(g=$("<li>",{"class":d.sPageButton+" "+o,"aria-controls":a.sTableId,tabindex:a.iTabIndex,id:0===t&&"string"==typeof T?a.sTableId+"_"+T:null}).append($("<a>",{href:"#"}).html(s)).appendTo(e),a.oApi._fnBindAction(g,{action:T},u))}};f($(e).empty().html('<ul class="pagination"/>').children("ul"),i)}):($.fn.dataTable.defaults.sPaginationType="bootstrap",$.fn.dataTableExt.oApi.fnPagingInfo=function(a){return{iStart:a._iDisplayStart,iEnd:a.fnDisplayEnd(),iLength:a._iDisplayLength,iTotal:a.fnRecordsTotal(),iFilteredTotal:a.fnRecordsDisplay(),iPage:-1===a._iDisplayLength?0:Math.ceil(a._iDisplayStart/a._iDisplayLength),iTotalPages:-1===a._iDisplayLength?0:Math.ceil(a.fnRecordsDisplay()/a._iDisplayLength)}},$.extend($.fn.dataTableExt.oPagination,{bootstrap:{fnInit:function(a,e,t){var i=a.oLanguage.oPaginate,l=function(e){e.preventDefault(),a.oApi._fnPageChange(a,e.data.action)&&t(a)};$(e).append('<ul class="pagination"><li class="prev disabled"><a href="#">&larr; '+i.sPrevious+'</a></li><li class="next disabled"><a href="#">'+i.sNext+" &rarr; </a></li></ul>");var n=$("a",e);$(n[0]).bind("click.DT",{action:"previous"},l),$(n[1]).bind("click.DT",{action:"next"},l)},fnUpdate:function(a,e){var t,i,l,n,s,o,r=5,d=a.oInstance.fnPagingInfo(),c=a.aanFeatures.p,f=Math.floor(r/2);for(d.iTotalPages<r?(s=1,o=d.iTotalPages):d.iPage<=f?(s=1,o=r):d.iPage>=d.iTotalPages-f?(s=d.iTotalPages-r+1,o=d.iTotalPages):(s=d.iPage-f+1,o=s+r-1),t=0,i=c.length;i>t;t++){for($("li:gt(0)",c[t]).filter(":not(:last)").remove(),l=s;o>=l;l++)n=l==d.iPage+1?'class="active"':"",$("<li "+n+'><a href="#">'+l+"</a></li>").insertBefore($("li:last",c[t])[0]).bind("click",function(t){t.preventDefault(),a._iDisplayStart=(parseInt($("a",this).text(),10)-1)*d.iLength,e(a)});0===d.iPage?$("li:first",c[t]).addClass("disabled"):$("li:first",c[t]).removeClass("disabled"),d.iPage===d.iTotalPages-1||0===d.iTotalPages?$("li:last",c[t]).addClass("disabled"):$("li:last",c[t]).removeClass("disabled")}}}})),$.fn.DataTable.TableTools&&($.extend(!0,$.fn.DataTable.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info modal"},select:{row:"active"}}),$.extend(!0,$.fn.DataTable.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}));
$(function(){$.fn.dataTable.ext.errMode=function(){$.notify(window.admin.lang.table.error,"error")},$(".datatables").each(function(){var a=$(this),t={language:window.admin.lang.table,stateSave:!0,lengthMenu:[[10,25,50,-1],[10,25,50,window.admin.lang.table.all]]};t=$.extend(t,a.data("attributes"));var n;(n=a.data("url"))&&(t.serverSide=!0,t.processing=!0,t.ajax={url:n,data:function(t){a.find(".column-filter").each(function(){var a=$(this),n=a.closest("td").data("index");(name=a.data("ajax-data-name"))&&(t.columns[n].search[name]=a.val())})}});var e=a.DataTable(t);a.find(".column-filter").each(function(){if(!($(this).parent().closest(".column-filter").length>0)){var a=$(this).data("type");window.columnFilters[a](this,e)}})})});
$(function(){$(".datepicker").each(function(){var a=$(this);a.datetimepicker({language:window.admin.locale,icons:{time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-arrow-up",down:"fa fa-arrow-down"}}).trigger("dp.change").on("dp.change",function(){a.find("input").change()})})});
$(function(){function n(){$("#dynamic-content .position").each(function(n){$(this).val(n)})}$(".addContent").on("click",function(e){e.preventDefault();var t=$("#dynamic-content"),o=window.admin.dynamicblock,i=o.replace("DUMMYID",$("#selectContentType option:selected").val());$.get(i,function(e){var o=$(e).hide();t.append(o).find(".empty").remove(),o.fadeIn().find("[data-toggle=collapse]").trigger("click"),$("html, body").animate({scrollTop:o.offset().top},600),n()})}),$(document).on("click",".removeContent",function(e){var t=$(this).closest(".panel");bootbox.confirm("Are you sure you want to remove this content?",function(e){e&&(t.remove(),n())})}),$(document).on("click",".moveDown",function(e){var t=$(this).parents(".panel");if(t.is(":last-child")===!1){var o=t.find(".ckeditor").attr("id"),i=CKEDITOR.instances[o];i.destroy(),t.next().after(t),CKEDITOR.replace(o)}n()}),$(document).on("click",".moveUp",function(e){var t=$(this).parents(".panel");if(t.is(":first-child")===!1){var o=t.find(".ckeditor").attr("id"),i=CKEDITOR.instances[o];i.destroy(),t.prev().before(t),CKEDITOR.replace(o)}n()}),n()});
!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=t():"undefined"!=typeof Package?Sortable=t():window.Sortable=t()}(function(){"use strict";function t(t,e){this.el=t,this.options=e=v({},e),t[Y]=this;var i={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(t.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0};for(var o in i)!(o in e)&&(e[o]=i[o]);var a=e.group;a&&"object"==typeof a||(a=e.group={name:a}),["pull","put"].forEach(function(t){t in a||(a[t]=!0)}),e.groups=" "+a.name+(a.put.join?" "+a.put.join(" "):"")+" ";for(var s in this)"_"===s.charAt(0)&&(this[s]=n(this,this[s]));r(t,"mousedown",this._onTapStart),r(t,"touchstart",this._onTapStart),r(t,"dragover",this),r(t,"dragenter",this),H.push(this._onDragOver),e.store&&this.sort(e.store.get(this))}function e(t){D&&D.state!==t&&(l(D,"display",t?"none":""),!t&&D.state&&b.insertBefore(D,m),D.state=t)}function n(t,e){var n=k.call(arguments,2);return e.bind?e.bind.apply(e,[t].concat(n)):function(){return e.apply(t,n.concat(k.call(arguments)))}}function i(t,e,n){if(t){n=n||X,e=e.split(".");var i=e.shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")\\s","g");do if(">*"===i&&t.parentNode===n||(""===i||t.nodeName.toUpperCase()==i)&&(!e.length||((" "+t.className+" ").match(o)||[]).length==e.length))return t;while(t!==n&&(t=t.parentNode))}return null}function o(t){t.dataTransfer.dropEffect="move",t.preventDefault()}function r(t,e,n){t.addEventListener(e,n,!1)}function a(t,e,n){t.removeEventListener(e,n,!1)}function s(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var i=(" "+t.className+" ").replace(O," ").replace(" "+e+" "," ");t.className=(i+(n?" "+e:"")).replace(O," ")}}function l(t,e,n){var i=t&&t.style;if(i){if(void 0===n)return X.defaultView&&X.defaultView.getComputedStyle?n=X.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in i||(e="-webkit-"+e),i[e]=n+("string"==typeof n?"":"px")}}function d(t,e,n){if(t){var i=t.getElementsByTagName(e),o=0,r=i.length;if(n)for(;r>o;o++)n(i[o],o);return i}return[]}function u(t){t.draggable=!1}function c(){U=!1}function h(t,e){var n=t.lastElementChild,i=n.getBoundingClientRect();return e.clientY-(i.top+i.height)>5&&n}function f(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,i=0;n--;)i+=e.charCodeAt(n);return i.toString(36)}function p(t){for(var e=0;t&&(t=t.previousElementSibling);)"TEMPLATE"!==t.nodeName.toUpperCase()&&e++;return e}function g(t,e){var n,i;return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?t.call(i,n[0]):t.apply(i,n),n=void 0},e))}}function v(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}var m,_,D,b,y,S,w,T,C,x,E,N,B,A,I={},O=/\s+/g,Y="Sortable"+(new Date).getTime(),R=window,X=R.document,M=R.parseInt,L=!!("draggable"in X.createElement("div")),U=!1,P=function(t,e,n,i,o,r,a){var s=X.createEvent("Event"),l=(t||e[Y]).options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.item=i||e,s.from=o||e,s.clone=D,s.oldIndex=r,s.newIndex=a,l[d]&&l[d].call(t,s),e.dispatchEvent(s)},W=Math.abs,k=[].slice,H=[],j=g(function(t,e,n){if(n&&e.scroll){var i,o,r,a,s=e.scrollSensitivity,l=e.scrollSpeed,d=t.clientX,u=t.clientY,c=window.innerWidth,h=window.innerHeight;if(w!==n&&(S=e.scroll,w=n,S===!0)){S=n;do if(S.offsetWidth<S.scrollWidth||S.offsetHeight<S.scrollHeight)break;while(S=S.parentNode)}S&&(i=S,o=S.getBoundingClientRect(),r=(W(o.right-d)<=s)-(W(o.left-d)<=s),a=(W(o.bottom-u)<=s)-(W(o.top-u)<=s)),r||a||(r=(s>=c-d)-(s>=d),a=(s>=h-u)-(s>=u),(r||a)&&(i=R)),(I.vx!==r||I.vy!==a||I.el!==i)&&(I.el=i,I.vx=r,I.vy=a,clearInterval(I.pid),i&&(I.pid=setInterval(function(){i===R?R.scrollTo(R.pageXOffset+r*l,R.pageYOffset+a*l):(a&&(i.scrollTop+=a*l),r&&(i.scrollLeft+=r*l))},24)))}},30);return t.prototype={constructor:t,_onTapStart:function(t){var e=this,n=this.el,o=this.options,r=t.type,a=t.touches&&t.touches[0],s=(a||t).target,l=s,d=o.filter;if(!("mousedown"===r&&0!==t.button||o.disabled)&&(s=i(s,o.draggable,n))){if(x=p(s),"function"==typeof d){if(d.call(this,t,s,this))return P(e,l,"filter",s,n,x),void t.preventDefault()}else if(d&&(d=d.split(",").some(function(t){return t=i(l,t.trim(),n),t?(P(e,t,"filter",s,n,x),!0):void 0})))return void t.preventDefault();(!o.handle||i(l,o.handle,n))&&this._prepareDragStart(t,a,s)}},_prepareDragStart:function(t,e,n){var i,o=this,a=o.el,s=o.options,l=a.ownerDocument;n&&!m&&n.parentNode===a&&(B=t,b=a,m=n,y=m.nextSibling,N=s.group,i=function(){o._disableDelayedDrag(),m.draggable=!0,s.ignore.split(",").forEach(function(t){d(m,t.trim(),u)}),o._triggerDragStart(e)},r(l,"mouseup",o._onDrop),r(l,"touchend",o._onDrop),r(l,"touchcancel",o._onDrop),s.delay?(r(l,"mousemove",o._disableDelayedDrag),r(l,"touchmove",o._disableDelayedDrag),o._dragStartTimer=setTimeout(i,s.delay)):i())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),a(t,"mousemove",this._disableDelayedDrag),a(t,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(t){t?(B={target:m,clientX:t.clientX,clientY:t.clientY},this._onDragStart(B,"touch")):L?(r(m,"dragend",this),r(b,"dragstart",this._onDragStart)):this._onDragStart(B,!0);try{X.selection?X.selection.empty():window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){b&&m&&(s(m,this.options.ghostClass,!0),t.active=this,P(this,b,"start",m,b,x))},_emulateDragOver:function(){if(A){l(_,"display","none");var t=X.elementFromPoint(A.clientX,A.clientY),e=t,n=" "+this.options.group.name,i=H.length;if(e)do{if(e[Y]&&e[Y].options.groups.indexOf(n)>-1){for(;i--;)H[i]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);l(_,"display","")}},_onTouchMove:function(t){if(B){var e=t.touches?t.touches[0]:t,n=e.clientX-B.clientX,i=e.clientY-B.clientY,o=t.touches?"translate3d("+n+"px,"+i+"px,0)":"translate("+n+"px,"+i+"px)";A=e,l(_,"webkitTransform",o),l(_,"mozTransform",o),l(_,"msTransform",o),l(_,"transform",o),t.preventDefault()}},_onDragStart:function(t,e){var n=t.dataTransfer,i=this.options;if(this._offUpEvents(),"clone"==N.pull&&(D=m.cloneNode(!0),l(D,"display","none"),b.insertBefore(D,m)),e){var o,a=m.getBoundingClientRect(),s=l(m);_=m.cloneNode(!0),l(_,"top",a.top-M(s.marginTop,10)),l(_,"left",a.left-M(s.marginLeft,10)),l(_,"width",a.width),l(_,"height",a.height),l(_,"opacity","0.8"),l(_,"position","fixed"),l(_,"zIndex","100000"),b.appendChild(_),o=_.getBoundingClientRect(),l(_,"width",2*a.width-o.width),l(_,"height",2*a.height-o.height),"touch"===e?(r(X,"touchmove",this._onTouchMove),r(X,"touchend",this._onDrop),r(X,"touchcancel",this._onDrop)):(r(X,"mousemove",this._onTouchMove),r(X,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,150)}else n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,m)),r(X,"drop",this);setTimeout(this._dragStarted,0)},_onDragOver:function(t){var n,o,r,a=this.el,s=this.options,d=s.group,u=d.put,f=N===d,p=s.sort;if(void 0!==t.preventDefault&&(t.preventDefault(),!s.dragoverBubble&&t.stopPropagation()),N&&!s.disabled&&(f?p||(r=!b.contains(m)):N.pull&&u&&(N.name===d.name||u.indexOf&&~u.indexOf(N.name)))&&(void 0===t.rootEl||t.rootEl===this.el)){if(j(t,s,this.el),U)return;if(n=i(t.target,s.draggable,a),o=m.getBoundingClientRect(),r)return e(!0),void(D||y?b.insertBefore(m,D||y):p||b.appendChild(m));if(0===a.children.length||a.children[0]===_||a===t.target&&(n=h(a,t))){if(n){if(n.animated)return;v=n.getBoundingClientRect()}e(f),a.appendChild(m),this._animate(o,m),n&&this._animate(v,n)}else if(n&&!n.animated&&n!==m&&void 0!==n.parentNode[Y]){T!==n&&(T=n,C=l(n));var g,v=n.getBoundingClientRect(),S=v.right-v.left,w=v.bottom-v.top,x=/left|right|inline/.test(C.cssFloat+C.display),E=n.offsetWidth>m.offsetWidth,B=n.offsetHeight>m.offsetHeight,A=(x?(t.clientX-v.left)/S:(t.clientY-v.top)/w)>.5,I=n.nextElementSibling;U=!0,setTimeout(c,30),e(f),g=x?n.previousElementSibling===m&&!E||A&&E:I!==m&&!B||A&&B,g&&!I?a.appendChild(m):n.parentNode.insertBefore(m,g?I:n),this._animate(o,m),this._animate(v,n)}}},_animate:function(t,e){var n=this.options.animation;if(n){var i=e.getBoundingClientRect();l(e,"transition","none"),l(e,"transform","translate3d("+(t.left-i.left)+"px,"+(t.top-i.top)+"px,0)"),e.offsetWidth,l(e,"transition","all "+n+"ms"),l(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=setTimeout(function(){l(e,"transition",""),l(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;a(X,"touchmove",this._onTouchMove),a(t,"mouseup",this._onDrop),a(t,"touchend",this._onDrop),a(t,"touchcancel",this._onDrop)},_onDrop:function(e){var n=this.el,i=this.options;clearInterval(this._loopId),clearInterval(I.pid),clearTimeout(this.dragStartTimer),a(X,"drop",this),a(X,"mousemove",this._onTouchMove),a(n,"dragstart",this._onDragStart),this._offUpEvents(),e&&(e.preventDefault(),!i.dropBubble&&e.stopPropagation(),_&&_.parentNode.removeChild(_),m&&(a(m,"dragend",this),u(m),s(m,this.options.ghostClass,!1),b!==m.parentNode?(E=p(m),P(null,m.parentNode,"sort",m,b,x,E),P(this,b,"sort",m,b,x,E),P(null,m.parentNode,"add",m,b,x,E),P(this,b,"remove",m,b,x,E)):(D&&D.parentNode.removeChild(D),m.nextSibling!==y&&(E=p(m),P(this,b,"update",m,b,x,E),P(this,b,"sort",m,b,x,E))),t.active&&P(this,b,"end",m,b,x,E)),b=m=_=y=D=S=w=B=A=T=C=N=t.active=null,this.save())},handleEvent:function(t){var e=t.type;"dragover"===e||"dragenter"===e?m&&(this._onDragOver(t),o(t)):("drop"===e||"dragend"===e)&&this._onDrop(t)},toArray:function(){for(var t,e=[],n=this.el.children,o=0,r=n.length,a=this.options;r>o;o++)t=n[o],i(t,a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||f(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,o){var r=n.children[o];i(r,this.options.draggable,n)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return i(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;return void 0===e?n[t]:void(n[t]=e)},destroy:function(){var t=this.el;t[Y]=null,a(t,"mousedown",this._onTapStart),a(t,"touchstart",this._onTapStart),a(t,"dragover",this),a(t,"dragenter",this),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),H.splice(H.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},t.utils={on:r,off:a,css:l,find:d,bind:n,is:function(t,e){return!!i(t,e,t)},extend:v,throttle:g,closest:i,toggleClass:s,index:p},t.version="1.2.0",t.create=function(e,n){return new t(e,n)},t});
!function(e,t,i){"use strict";function s(t){if(this.support=!("undefined"==typeof File||"undefined"==typeof Blob||"undefined"==typeof FileList||!Blob.prototype.slice&&!Blob.prototype.webkitSlice&&!Blob.prototype.mozSlice),this.support){this.supportDirectory=/WebKit/.test(e.navigator.userAgent),this.files=[],this.defaults={chunkSize:1048576,forceChunkSize:!1,simultaneousUploads:3,singleFile:!1,fileParameterName:"file",progressCallbacksInterval:500,speedSmoothingFactor:.1,query:{},headers:{},withCredentials:!1,preprocess:null,method:"multipart",testMethod:"GET",uploadMethod:"POST",prioritizeFirstAndLastChunk:!1,target:"/",testChunks:!0,generateUniqueIdentifier:null,maxChunkRetries:0,chunkRetryInterval:null,permanentErrors:[404,415,500,501],successStatuses:[200,201,202],onDropStopPropagation:!1},this.opts={},this.events={};var i=this;this.onDrop=function(e){i.opts.onDropStopPropagation&&e.stopPropagation(),e.preventDefault();var t=e.dataTransfer;t.items&&t.items[0]&&t.items[0].webkitGetAsEntry?i.webkitReadDataTransfer(e):i.addFiles(t.files,e)},this.preventEvent=function(e){e.preventDefault()},this.opts=s.extend({},this.defaults,t||{})}}function n(e,t){this.flowObj=e,this.file=t,this.name=t.fileName||t.name,this.size=t.size,this.relativePath=t.relativePath||t.webkitRelativePath||this.name,this.uniqueIdentifier=e.generateUniqueIdentifier(t),this.chunks=[],this.paused=!1,this.error=!1,this.averageSpeed=0,this.currentSpeed=0,this._lastProgressCallback=Date.now(),this._prevUploadedSize=0,this._prevProgress=0,this.bootstrap()}function r(e,t,i){this.flowObj=e,this.fileObj=t,this.fileObjSize=t.size,this.offset=i,this.tested=!1,this.retries=0,this.pendingRetry=!1,this.preprocessState=0,this.loaded=0,this.total=0;var s=this.flowObj.opts.chunkSize;this.startByte=this.offset*s,this.endByte=Math.min(this.fileObjSize,(this.offset+1)*s),this.xhr=null,this.fileObjSize-this.endByte<s&&!this.flowObj.opts.forceChunkSize&&(this.endByte=this.fileObjSize);var n=this;this.event=function(e,t){t=Array.prototype.slice.call(arguments),t.unshift(n),n.fileObj.chunkEvent.apply(n.fileObj,t)},this.progressHandler=function(e){e.lengthComputable&&(n.loaded=e.loaded,n.total=e.total),n.event("progress",e)},this.testHandler=function(){var e=n.status(!0);"error"===e?(n.event(e,n.message()),n.flowObj.uploadNextChunk()):"success"===e?(n.tested=!0,n.event(e,n.message()),n.flowObj.uploadNextChunk()):n.fileObj.paused||(n.tested=!0,n.send())},this.doneHandler=function(){var e=n.status();if("success"===e||"error"===e)n.event(e,n.message()),n.flowObj.uploadNextChunk();else{n.event("retry",n.message()),n.pendingRetry=!0,n.abort(),n.retries++;var t=n.flowObj.opts.chunkRetryInterval;null!==t?setTimeout(function(){n.send()},t):n.send()}}}function o(e,t){var i=e.indexOf(t);i>-1&&e.splice(i,1)}function h(e,t){return"function"==typeof e&&(t=Array.prototype.slice.call(arguments),e=e.apply(null,t.slice(1))),e}function a(e,t){setTimeout(e.bind(t),0)}function u(e){return l(arguments,function(t){t!==e&&l(t,function(t,i){e[i]=t})}),e}function l(e,t,i){if(e){var s;if("undefined"!=typeof e.length){for(s=0;s<e.length;s++)if(t.call(i,e[s],s)===!1)return}else for(s in e)if(e.hasOwnProperty(s)&&t.call(i,e[s],s)===!1)return}}var f=e.navigator.msPointerEnabled;s.prototype={on:function(e,t){e=e.toLowerCase(),this.events.hasOwnProperty(e)||(this.events[e]=[]),this.events[e].push(t)},off:function(e,t){e!==i?(e=e.toLowerCase(),t!==i?this.events.hasOwnProperty(e)&&o(this.events[e],t):delete this.events[e]):this.events={}},fire:function(e,t){t=Array.prototype.slice.call(arguments),e=e.toLowerCase();var i=!1;return this.events.hasOwnProperty(e)&&l(this.events[e],function(e){i=e.apply(this,t.slice(1))===!1||i},this),"catchall"!=e&&(t.unshift("catchAll"),i=this.fire.apply(this,t)===!1||i),!i},webkitReadDataTransfer:function(e){function t(e){o+=e.length,l(e,function(e){if(e.isFile){var n=e.fullPath;e.file(function(e){i(e,n)},s)}else e.isDirectory&&e.createReader().readEntries(t,s)}),n()}function i(e,t){e.relativePath=t.substring(1),h.push(e),n()}function s(e){throw e}function n(){0==--o&&r.addFiles(h,e)}var r=this,o=e.dataTransfer.items.length,h=[];l(e.dataTransfer.items,function(e){var r=e.webkitGetAsEntry();return r?void(r.isFile?i(e.getAsFile(),r.fullPath):r.createReader().readEntries(t,s)):void n()})},generateUniqueIdentifier:function(e){var t=this.opts.generateUniqueIdentifier;if("function"==typeof t)return t(e);var i=e.relativePath||e.webkitRelativePath||e.fileName||e.name;return e.size+"-"+i.replace(/[^0-9a-zA-Z_-]/gim,"")},uploadNextChunk:function(e){var t=!1;if(this.opts.prioritizeFirstAndLastChunk&&(l(this.files,function(e){return!e.paused&&e.chunks.length&&"pending"===e.chunks[0].status()&&0===e.chunks[0].preprocessState?(e.chunks[0].send(),t=!0,!1):!e.paused&&e.chunks.length>1&&"pending"===e.chunks[e.chunks.length-1].status()&&0===e.chunks[0].preprocessState?(e.chunks[e.chunks.length-1].send(),t=!0,!1):void 0}),t))return t;if(l(this.files,function(e){return e.paused||l(e.chunks,function(e){return"pending"===e.status()&&0===e.preprocessState?(e.send(),t=!0,!1):void 0}),t?!1:void 0}),t)return!0;var i=!1;return l(this.files,function(e){return e.isComplete()?void 0:(i=!0,!1)}),i||e||a(function(){this.fire("complete")},this),!1},assignBrowse:function(e,i,s,n){"undefined"==typeof e.length&&(e=[e]),l(e,function(e){var r;"INPUT"===e.tagName&&"file"===e.type?r=e:(r=t.createElement("input"),r.setAttribute("type","file"),u(r.style,{visibility:"hidden",position:"absolute"}),e.appendChild(r),e.addEventListener("click",function(){r.click()},!1)),this.opts.singleFile||s||r.setAttribute("multiple","multiple"),i&&r.setAttribute("webkitdirectory","webkitdirectory"),l(n,function(e,t){r.setAttribute(t,e)});var o=this;r.addEventListener("change",function(e){o.addFiles(e.target.files,e),e.target.value=""},!1)},this)},assignDrop:function(e){"undefined"==typeof e.length&&(e=[e]),l(e,function(e){e.addEventListener("dragover",this.preventEvent,!1),e.addEventListener("dragenter",this.preventEvent,!1),e.addEventListener("drop",this.onDrop,!1)},this)},unAssignDrop:function(e){"undefined"==typeof e.length&&(e=[e]),l(e,function(e){e.removeEventListener("dragover",this.preventEvent),e.removeEventListener("dragenter",this.preventEvent),e.removeEventListener("drop",this.onDrop)},this)},isUploading:function(){var e=!1;return l(this.files,function(t){return t.isUploading()?(e=!0,!1):void 0}),e},_shouldUploadNext:function(){var e=0,t=!0,i=this.opts.simultaneousUploads;return l(this.files,function(s){l(s.chunks,function(s){return"uploading"===s.status()&&(e++,e>=i)?(t=!1,!1):void 0})}),t&&e},upload:function(){var e=this._shouldUploadNext();if(e!==!1){this.fire("uploadStart");for(var t=!1,i=1;i<=this.opts.simultaneousUploads-e;i++)t=this.uploadNextChunk(!0)||t;t||a(function(){this.fire("complete")},this)}},resume:function(){l(this.files,function(e){e.resume()})},pause:function(){l(this.files,function(e){e.pause()})},cancel:function(){for(var e=this.files.length-1;e>=0;e--)this.files[e].cancel()},progress:function(){var e=0,t=0;return l(this.files,function(i){e+=i.progress()*i.size,t+=i.size}),t>0?e/t:0},addFile:function(e,t){this.addFiles([e],t)},addFiles:function(e,t){var i=[];l(e,function(e){if((!f||f&&e.size>0)&&(e.size%4096!==0||"."!==e.name&&"."!==e.fileName)&&!this.getFromUniqueIdentifier(this.generateUniqueIdentifier(e))){var s=new n(this,e);this.fire("fileAdded",s,t)&&i.push(s)}},this),this.fire("filesAdded",i,t)&&l(i,function(e){this.opts.singleFile&&this.files.length>0&&this.removeFile(this.files[0]),this.files.push(e)},this),this.fire("filesSubmitted",i,t)},removeFile:function(e){for(var t=this.files.length-1;t>=0;t--)this.files[t]===e&&(this.files.splice(t,1),e.abort())},getFromUniqueIdentifier:function(e){var t=!1;return l(this.files,function(i){i.uniqueIdentifier===e&&(t=i)}),t},getSize:function(){var e=0;return l(this.files,function(t){e+=t.size}),e},sizeUploaded:function(){var e=0;return l(this.files,function(t){e+=t.sizeUploaded()}),e},timeRemaining:function(){var e=0,t=0;return l(this.files,function(i){i.paused||i.error||(e+=i.size-i.sizeUploaded(),t+=i.averageSpeed)}),e&&!t?Number.POSITIVE_INFINITY:e||t?Math.floor(e/t):0}},n.prototype={measureSpeed:function(){var e=Date.now()-this._lastProgressCallback;if(e){var t=this.flowObj.opts.speedSmoothingFactor,i=this.sizeUploaded();this.currentSpeed=Math.max((i-this._prevUploadedSize)/e*1e3,0),this.averageSpeed=t*this.currentSpeed+(1-t)*this.averageSpeed,this._prevUploadedSize=i}},chunkEvent:function(e,t,i){switch(t){case"progress":if(Date.now()-this._lastProgressCallback<this.flowObj.opts.progressCallbacksInterval)break;this.measureSpeed(),this.flowObj.fire("fileProgress",this,e),this.flowObj.fire("progress"),this._lastProgressCallback=Date.now();break;case"error":this.error=!0,this.abort(!0),this.flowObj.fire("fileError",this,i,e),this.flowObj.fire("error",i,this,e);break;case"success":if(this.error)return;this.measureSpeed(),this.flowObj.fire("fileProgress",this,e),this.flowObj.fire("progress"),this._lastProgressCallback=Date.now(),this.isComplete()&&(this.currentSpeed=0,this.averageSpeed=0,this.flowObj.fire("fileSuccess",this,i,e));break;case"retry":this.flowObj.fire("fileRetry",this,e)}},pause:function(){this.paused=!0,this.abort()},resume:function(){this.paused=!1,this.flowObj.upload()},abort:function(e){this.currentSpeed=0,this.averageSpeed=0;var t=this.chunks;e&&(this.chunks=[]),l(t,function(e){"uploading"===e.status()&&(e.abort(),this.flowObj.uploadNextChunk())},this)},cancel:function(){this.flowObj.removeFile(this)},retry:function(){this.bootstrap(),this.flowObj.upload()},bootstrap:function(){this.abort(!0),this.error=!1,this._prevProgress=0;for(var e=this.flowObj.opts.forceChunkSize?Math.ceil:Math.floor,t=Math.max(e(this.file.size/this.flowObj.opts.chunkSize),1),i=0;t>i;i++)this.chunks.push(new r(this.flowObj,this,i))},progress:function(){if(this.error)return 1;if(1===this.chunks.length)return this._prevProgress=Math.max(this._prevProgress,this.chunks[0].progress()),this._prevProgress;var e=0;l(this.chunks,function(t){e+=t.progress()*(t.endByte-t.startByte)});var t=e/this.size;return this._prevProgress=Math.max(this._prevProgress,t>.9999?1:t),this._prevProgress},isUploading:function(){var e=!1;return l(this.chunks,function(t){return"uploading"===t.status()?(e=!0,!1):void 0}),e},isComplete:function(){var e=!1;return l(this.chunks,function(t){var i=t.status();return"pending"===i||"uploading"===i||1===t.preprocessState?(e=!0,!1):void 0}),!e},sizeUploaded:function(){var e=0;return l(this.chunks,function(t){e+=t.sizeUploaded()}),e},timeRemaining:function(){if(this.paused||this.error)return 0;var e=this.size-this.sizeUploaded();return e&&!this.averageSpeed?Number.POSITIVE_INFINITY:e||this.averageSpeed?Math.floor(e/this.averageSpeed):0},getType:function(){return this.file.type&&this.file.type.split("/")[1]},getExtension:function(){return this.name.substr((~-this.name.lastIndexOf(".")>>>0)+2).toLowerCase()}},r.prototype={getParams:function(){return{flowChunkNumber:this.offset+1,flowChunkSize:this.flowObj.opts.chunkSize,flowCurrentChunkSize:this.endByte-this.startByte,flowTotalSize:this.fileObjSize,flowIdentifier:this.fileObj.uniqueIdentifier,flowFilename:this.fileObj.name,flowRelativePath:this.fileObj.relativePath,flowTotalChunks:this.fileObj.chunks.length}},getTarget:function(e,t){return e+=e.indexOf("?")<0?"?":"&",e+t.join("&")},test:function(){this.xhr=new XMLHttpRequest,this.xhr.addEventListener("load",this.testHandler,!1),this.xhr.addEventListener("error",this.testHandler,!1);var e=h(this.flowObj.opts.testMethod,this.fileObj,this),t=this.prepareXhrRequest(e,!0);this.xhr.send(t)},preprocessFinished:function(){this.preprocessState=2,this.send()},send:function(){var e=this.flowObj.opts.preprocess;if("function"==typeof e)switch(this.preprocessState){case 0:return this.preprocessState=1,void e(this);case 1:return}if(this.flowObj.opts.testChunks&&!this.tested)return void this.test();this.loaded=0,this.total=0,this.pendingRetry=!1;var t=this.fileObj.file.slice?"slice":this.fileObj.file.mozSlice?"mozSlice":this.fileObj.file.webkitSlice?"webkitSlice":"slice",i=this.fileObj.file[t](this.startByte,this.endByte,this.fileObj.file.type);this.xhr=new XMLHttpRequest,this.xhr.upload.addEventListener("progress",this.progressHandler,!1),this.xhr.addEventListener("load",this.doneHandler,!1),this.xhr.addEventListener("error",this.doneHandler,!1);var s=h(this.flowObj.opts.uploadMethod,this.fileObj,this),n=this.prepareXhrRequest(s,!1,this.flowObj.opts.method,i);this.xhr.send(n)},abort:function(){var e=this.xhr;this.xhr=null,e&&e.abort()},status:function(e){return this.pendingRetry||1===this.preprocessState?"uploading":this.xhr?this.xhr.readyState<4?"uploading":this.flowObj.opts.successStatuses.indexOf(this.xhr.status)>-1?"success":this.flowObj.opts.permanentErrors.indexOf(this.xhr.status)>-1||!e&&this.retries>=this.flowObj.opts.maxChunkRetries?"error":(this.abort(),"pending"):"pending"},message:function(){return this.xhr?this.xhr.responseText:""},progress:function(){if(this.pendingRetry)return 0;var e=this.status();return"success"===e||"error"===e?1:"pending"===e?0:this.total>0?this.loaded/this.total:0},sizeUploaded:function(){var e=this.endByte-this.startByte;return"success"!==this.status()&&(e=this.progress()*e),e},prepareXhrRequest:function(e,t,i,s){var n=h(this.flowObj.opts.query,this.fileObj,this,t);n=u(this.getParams(),n);var r=h(this.flowObj.opts.target,this.fileObj,this,t),o=null;if("GET"===e||"octet"===i){var a=[];l(n,function(e,t){a.push([encodeURIComponent(t),encodeURIComponent(e)].join("="))}),r=this.getTarget(r,a),o=s||null}else o=new FormData,l(n,function(e,t){o.append(t,e)}),o.append(this.flowObj.opts.fileParameterName,s,this.fileObj.file.name);return this.xhr.open(e,r,!0),this.xhr.withCredentials=this.flowObj.opts.withCredentials,l(h(this.flowObj.opts.headers,this.fileObj,this,t),function(e,t){this.xhr.setRequestHeader(t,e)},this),o}},s.evalOpts=h,s.extend=u,s.each=l,s.FlowFile=n,s.FlowChunk=r,s.version="2.9.0","object"==typeof module&&module&&"object"==typeof module.exports?module.exports=s:(e.Flow=s,"function"==typeof define&&define.amd&&define("flow",[],function(){return s}))}(window,document);
function ImageUpload(e,a){if(!this instanceof ImageUpload)throw new SyntaxError("ImageUpload constructor called without 'new' keyword!");var n=$(e);if(!n.length)throw new ReferenceError("ImageUpload() - Argument #1. container selector matches no elements");this.$container=n,this.container=n[0],$.extend(this,a),this.init()}ImageUpload.prototype={constructor:ImageUpload,init:function(){this.setup()},setup:function(){this.$container.each(function(e,a){var n=$(a),o=n.closest(".form-group"),t=n.find(".errors"),i=n.find(".no-value"),r=n.find(".has-value"),s=n.find(".thumbnail img.has-value"),l=n.find(".imageValue"),d=n.find(".imageBrowse"),c=Ladda.create(d[0]),u=new Flow({target:n.data("target"),testChunks:!1,chunkSize:1073741824,query:{_token:n.data("token")}});u.assignBrowse(d[0],!1,!0),u.on("filesSubmitted",function(e){u.upload()}),u.on("fileSuccess",function(e,a){u.removeFile(e),t.html(""),o.removeClass("has-error");var n=$.parseJSON(a);s.attr("src",n.url),r.find("span").text(n.value),l.val(n.value),i.addClass("hidden"),r.removeClass("hidden")}),u.on("progress",function(e){u.progress()>=1&&c.stop()}),u.on("complete",function(e){c.stop()}),u.on("fileError",function(e,a){u.removeFile(e);var n=$.parseJSON(a),i="";$.each(n,function(e,a){i+='<p class="help-block">'+a+"</p>"}),t.html(i),o.addClass("has-error"),c.stop()}),u.on("uploadStart",function(e){c=Ladda.create(d[0]),c.start()}),n.find(".imageRemove").on("click",function(){l.val(""),i.removeClass("hidden"),r.addClass("hidden")})})}},$(function(){$(".imageUpload").length&&(window.imageupload=new ImageUpload(".imageUpload"))});
function ImageUploadMultiple(e,t){if(!this instanceof ImageUploadMultiple)throw new SyntaxError("ImageUploadMultiple constructor called without 'new' keyword!");var a=$(e);if(!a.length)throw new ReferenceError("ImageUploadMultiple() - Argument #1. container selector matches no elements");this.$container=a,this.container=a[0],$.extend(this,t),this.init()}ImageUploadMultiple.prototype={constructor:ImageUploadMultiple,init:function(){this.setup()},setup:function(){this.$container.each(function(e,t){var a=$(t),i=a.closest(".form-group"),o=a.find(".form-group"),n=a.find(".errors"),l=a.find(".imageBrowse"),s=Ladda.create(l[0]),r=new Flow({target:a.data("target"),testChunks:!1,chunkSize:1073741824,query:{_token:a.data("token")}}),c=function(){$(t).find(".image_position").each(function(e){$(this).val(e)})};r.assignBrowse(l),r.on("filesSubmitted",function(e){r.upload()}),r.on("fileSuccess",function(e,t){r.removeFile(e),n.html(""),i.removeClass("has-error");var a=$.parseJSON(t),l=$.now();o.append('<div class="col-xs-12 col-sm-6 col-md-3 imageThumbnail"><div class="thumbnail"><div class="img-container push"><img data-value="'+a.value+'" src="'+a.url+'" /></div><div class="push-lg"><input type="hidden" name="_image['+l+'][position]" value="" class="image_position" /><input type="hidden" name="_image['+l+'][path]" value="'+a.value+'" class="image_path" /><input name="_image['+l+'][alt_title]" value="" class="form-control" placeholder="Alt Title" /></div><div class="text-right"><button class="btn btn-danger btn-sm imageRemove" type="button"><i class="fa fa-remove"></i> Remove</button></div></div>'),c()}),r.on("progress",function(e){r.progress()>=1&&s.stop()}),r.on("complete",function(e){s.stop()}),r.on("fileError",function(e,t){r.removeFile(e);var a=$.parseJSON(t),o="";$.each(a,function(e,t){o+='<p class="help-block">'+t+"</p>"}),n.html(o),i.addClass("has-error"),s.stop()}),r.on("uploadStart",function(e){s=Ladda.create(l[0]),s.start()}),a.on("click",".imageRemove",function(e){e.preventDefault(),$(this).closest(".imageThumbnail").remove(),c()}),o.sortable({onUpdate:function(){c()}})})}},$(function(){$(".imageUploadMultiple").length&&(window.imageuploadMultiple=new ImageUploadMultiple(".imageUploadMultiple"))});
!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){"use strict";t.fn.sortable=function(e){var i;return this.each(function(){var n=t(this),a=n.data("sortable");if(a||!(e instanceof Object)&&e||(a=new Sortable(this,e),n.data("sortable",a)),a){if("widget"===e)return a;"destroy"===e?(a.destroy(),n.removeData("sortable")):e in a&&(i=a[a].apply(a,[].slice.call(arguments,1)))}}),void 0===i?this:i}});
$(function(){$(".multiselect").each(function(){var e=$(this),l=e.data("nullable");e.chosen({width:"auto",allow_single_deselect:l,no_results_text:window.admin.lang.select.nothing,placeholder_text_single:window.admin.lang.select.placeholder,placeholder_text_multiple:window.admin.lang.select.placeholder})})});
function toUri(t){return t.replace(/[^a-zA-Z0-9 \-\/]+/g,"").replace(/[ ]/g,"-").toLowerCase()}$(function(){var t=$(".slug"),n=t.parent().prev().find("input"),a=""==t.val()?!1:!0;n.keyup(function(){if((!a||""==$(this).val())&&t.length>0){var n=toUri($(this).val());t.val(n),a=!1}}),t.keyup(function(){$(this).val()&&(a=!0)})});