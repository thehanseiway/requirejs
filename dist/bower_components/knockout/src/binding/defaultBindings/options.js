var captionPlaceholder={};ko.bindingHandlers.options={init:function(e){if(ko.utils.tagNameLower(e)!=="select")throw new Error("options binding applies only to SELECT elements");while(e.length>0)e.remove(0);return{controlsDescendantBindings:!0}},update:function(e,t,n){function r(){return ko.utils.arrayFilter(e.options,function(e){return e.selected})}function d(e,t,n){var r=typeof t;return r=="function"?t(e):r=="string"?e[t]:n}function m(t,r,i){i.length&&(p=!a&&i[0].selected?[ko.selectExtensions.readValue(i[0])]:[],v=!0);var s=e.ownerDocument.createElement("option");if(t===captionPlaceholder)ko.utils.setTextContent(s,n.get("optionsCaption")),ko.selectExtensions.writeValue(s,undefined);else{var o=d(t,n.get("optionsValue"),t);ko.selectExtensions.writeValue(s,ko.utils.unwrapObservable(o));var u=d(t,n.get("optionsText"),o);ko.utils.setTextContent(s,u)}return[s]}function g(t,r){if(v&&a)ko.selectExtensions.writeValue(e,ko.utils.unwrapObservable(n.get("value")),!0);else if(p.length){var i=ko.utils.arrayIndexOf(p,ko.selectExtensions.readValue(r[0]))>=0;ko.utils.setOptionNodeSelectionState(r[0],i),v&&!i&&ko.dependencyDetection.ignore(ko.utils.triggerEvent,null,[e,"change"])}}var i=e.length==0,s=e.multiple,o=!i&&s?e.scrollTop:null,u=ko.utils.unwrapObservable(t()),a=n.get("valueAllowUnset")&&n.has("value"),f=n.get("optionsIncludeDestroyed"),l={},c,h,p=[];a||(s?p=ko.utils.arrayMap(r(),ko.selectExtensions.readValue):e.selectedIndex>=0&&p.push(ko.selectExtensions.readValue(e.options[e.selectedIndex]))),u&&(typeof u.length=="undefined"&&(u=[u]),h=ko.utils.arrayFilter(u,function(e){return f||e===undefined||e===null||!ko.utils.unwrapObservable(e._destroy)}),n.has("optionsCaption")&&(c=ko.utils.unwrapObservable(n.get("optionsCaption")),c!==null&&c!==undefined&&h.unshift(captionPlaceholder)));var v=!1;l.beforeRemove=function(t){e.removeChild(t)};var y=g;n.has("optionsAfterRender")&&typeof n.get("optionsAfterRender")=="function"&&(y=function(e,t){g(e,t),ko.dependencyDetection.ignore(n.get("optionsAfterRender"),null,[t[0],e!==captionPlaceholder?e:undefined])}),ko.utils.setDomNodeChildrenFromArrayMapping(e,h,m,l,y),ko.dependencyDetection.ignore(function(){if(a)ko.selectExtensions.writeValue(e,ko.utils.unwrapObservable(n.get("value")),!0);else{var t;s?t=p.length&&r().length<p.length:t=p.length&&e.selectedIndex>=0?ko.selectExtensions.readValue(e.options[e.selectedIndex])!==p[0]:p.length||e.selectedIndex>=0,t&&ko.utils.triggerEvent(e,"change")}}),ko.utils.ensureSelectElementIsRenderedCorrectly(e),o&&Math.abs(o-e.scrollTop)>20&&(e.scrollTop=o)}},ko.bindingHandlers.options.optionValueDomDataKey=ko.utils.domData.nextKey();