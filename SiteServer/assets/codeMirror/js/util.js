function method(t,e){return function(){t[e].apply(t,arguments)}}function forEach(t,e){if(t.next)try{for(;;)e(t.next())}catch(t){if(t!=StopIteration)throw t}else for(var n=0;n<t.length;n++)e(t[n])}function map(t,e){var n=[];return forEach(t,function(t){n.push(e(t))}),n}function matcher(t){return function(e){return t.test(e)}}function hasClass(t,e){var n=t.className;return n&&new RegExp("(^| )"+e+"($| )").test(n)}function insertAfter(t,e){return e.parentNode.insertBefore(t,e.nextSibling),t}function removeElement(t){t.parentNode&&t.parentNode.removeChild(t)}function clearElement(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function isAncestor(t,e){for(;e=e.parentNode;)if(t==e)return!0;return!1}function normalizeEvent(t){return t.stopPropagation||(t.stopPropagation=function(){this.cancelBubble=!0},t.preventDefault=function(){this.returnValue=!1}),t.stop||(t.stop=function(){this.stopPropagation(),this.preventDefault()}),"keypress"==t.type&&(t.code=null==t.charCode?t.keyCode:t.charCode,t.character=String.fromCharCode(t.code)),t}function addEventHandler(t,e,n,r){function o(t){n(normalizeEvent(t||window.event))}if("function"==typeof t.addEventListener){if(t.addEventListener(e,o,!1),r)return function(){t.removeEventListener(e,o,!1)}}else if(t.attachEvent("on"+e,o),r)return function(){t.detachEvent("on"+e,o)}}function nodeText(t){return t.innerText||t.textContent||t.nodeValue||""}var internetExplorer=document.selection&&window.ActiveXObject&&/MSIE/.test(navigator.userAgent),webkit=/AppleWebKit/.test(navigator.userAgent),StopIteration={toString:function(){return"StopIteration"}},nbsp=" ",matching={"{":"}","[":"]","(":")","}":"{","]":"[",")":"("};