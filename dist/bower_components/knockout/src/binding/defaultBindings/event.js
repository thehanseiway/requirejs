function makeEventHandlerShortcut(e){ko.bindingHandlers[e]={init:function(t,n,r,i,s){var o=function(){var t={};return t[e]=n(),t};return ko.bindingHandlers.event.init.call(this,t,o,r,i,s)}}}ko.bindingHandlers.event={init:function(e,t,n,r,i){var s=t()||{};ko.utils.objectForEach(s,function(s){typeof s=="string"&&ko.utils.registerEventHandler(e,s,function(e){var o,u=t()[s];if(!u)return;try{var a=ko.utils.makeArray(arguments);r=i.$data,a.unshift(r),o=u.apply(r,a)}finally{o!==!0&&(e.preventDefault?e.preventDefault():e.returnValue=!1)}var f=n.get(s+"Bubble")!==!1;f||(e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation())})})}};