var classesWrittenByBindingKey="__ko__cssValue";ko.bindingHandlers.css={update:function(e,t){var n=ko.utils.unwrapObservable(t());n!==null&&typeof n=="object"?ko.utils.objectForEach(n,function(t,n){n=ko.utils.unwrapObservable(n),ko.utils.toggleDomNodeCssClass(e,t,n)}):(n=String(n||""),ko.utils.toggleDomNodeCssClass(e,e[classesWrittenByBindingKey],!1),e[classesWrittenByBindingKey]=n,ko.utils.toggleDomNodeCssClass(e,n,!0))}};