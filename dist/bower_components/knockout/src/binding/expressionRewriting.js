ko.expressionRewriting=function(){function n(n){if(ko.utils.arrayIndexOf(e,n)>=0)return!1;var r=n.match(t);return r===null?!1:r[1]?"Object("+r[1]+")"+r[2]:n}function h(e){var t=ko.utils.stringTrim(e);t.charCodeAt(0)===123&&(t=t.slice(1,-1));var n=[],r=t.match(f),i,s=[],o=0;if(r){r.push(",");for(var u=0,a;a=r[u];++u){var h=a.charCodeAt(0);if(h===44){if(o<=0){n.push(i&&s.length?{key:i,value:s.join("")}:{unknown:i||s.join("")}),i=o=0,s=[];continue}}else if(h===58){if(!o&&!i&&s.length===1){i=s.pop();continue}}else if(h===47&&u&&a.length>1){var p=r[u-1].match(l);p&&!c[p[0]]&&(t=t.substr(t.indexOf(a)+1),r=t.match(f),r.push(","),u=-1,a="/")}else h===40||h===123||h===91?++o:h===41||h===125||h===93?--o:!i&&!s.length&&(h===34||h===39)&&(a=a.slice(1,-1));s.push(a)}}return n}function d(e,t){function r(e,t){function f(n){return n&&n.preprocess?t=n.preprocess(t,e,r):!0}var a;if(!u){if(!f(ko.getBindingHandler(e)))return;p[e]&&(a=n(t))&&s.push("'"+e+"':function(_z){"+a+"=_z}")}o&&(t="function(){return "+t+" }"),i.push("'"+e+"':"+t)}t=t||{};var i=[],s=[],o=t.valueAccessors,u=t.bindingParams,a=typeof e=="string"?h(e):e;return ko.utils.arrayForEach(a,function(e){r(e.key||e.unknown,e.value)}),s.length&&r("_ko_property_writers","{"+s.join(",")+" }"),i.join(",")}var e=["true","false","null","undefined"],t=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,r='"(?:[^"\\\\]|\\\\.)*"',i="'(?:[^'\\\\]|\\\\.)*'",s="/(?:[^/\\\\]|\\\\.)*/w*",o=",\"'{}()/:[\\]",u="[^\\s:,/][^"+o+"]*[^\\s"+o+"]",a="[^\\s]",f=RegExp(r+"|"+i+"|"+s+"|"+u+"|"+a,"g"),l=/[\])"'A-Za-z0-9_$]+$/,c={"in":1,"return":1,"typeof":1},p={};return{bindingRewriteValidators:[],twoWayBindings:p,parseObjectLiteral:h,preProcessBindings:d,keyValueArrayContainsKey:function(e,t){for(var n=0;n<e.length;n++)if(e[n]["key"]==t)return!0;return!1},writeValueToProperty:function(e,t,n,r,i){if(!e||!ko.isObservable(e)){var s=t.get("_ko_property_writers");s&&s[n]&&s[n](r)}else ko.isWriteableObservable(e)&&(!i||e.peek()!==r)&&e(r)}}}(),ko.exportSymbol("expressionRewriting",ko.expressionRewriting),ko.exportSymbol("expressionRewriting.bindingRewriteValidators",ko.expressionRewriting.bindingRewriteValidators),ko.exportSymbol("expressionRewriting.parseObjectLiteral",ko.expressionRewriting.parseObjectLiteral),ko.exportSymbol("expressionRewriting.preProcessBindings",ko.expressionRewriting.preProcessBindings),ko.exportSymbol("expressionRewriting._twoWayBindings",ko.expressionRewriting.twoWayBindings),ko.exportSymbol("jsonExpressionRewriting",ko.expressionRewriting),ko.exportSymbol("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",ko.expressionRewriting.preProcessBindings);