ko.subscription=function(e,t,n){this._target=e,this.callback=t,this.disposeCallback=n,this.isDisposed=!1,ko.exportProperty(this,"dispose",this.dispose)},ko.subscription.prototype.dispose=function(){this.isDisposed=!0,this.disposeCallback()},ko.subscribable=function(){ko.utils.setPrototypeOfOrExtend(this,ko.subscribable.fn),this._subscriptions={},this._versionNumber=1};var defaultEvent="change",ko_subscribable_fn={subscribe:function(e,t,n){var r=this;n=n||defaultEvent;var i=t?e.bind(t):e,s=new ko.subscription(r,i,function(){ko.utils.arrayRemoveItem(r._subscriptions[n],s),r.afterSubscriptionRemove&&r.afterSubscriptionRemove(n)});return r.beforeSubscriptionAdd&&r.beforeSubscriptionAdd(n),r._subscriptions[n]||(r._subscriptions[n]=[]),r._subscriptions[n].push(s),s},notifySubscribers:function(e,t){t=t||defaultEvent,t===defaultEvent&&this.updateVersion();if(this.hasSubscriptionsForEvent(t))try{ko.dependencyDetection.begin();for(var n=this._subscriptions[t].slice(0),r=0,i;i=n[r];++r)i.isDisposed||i.callback(e)}finally{ko.dependencyDetection.end()}},getVersion:function(){return this._versionNumber},hasChanged:function(e){return this.getVersion()!==e},updateVersion:function(){++this._versionNumber},limit:function(e){var t=this,n=ko.isObservable(t),r,i,s,o="beforeChange";t._origNotifySubscribers||(t._origNotifySubscribers=t.notifySubscribers,t.notifySubscribers=function(e,n){!n||n===defaultEvent?t._rateLimitedChange(e):n===o?t._rateLimitedBeforeChange(e):t._origNotifySubscribers(e,n)});var u=e(function(){n&&s===t&&(s=t()),r=!1,t.isDifferent(i,s)&&t._origNotifySubscribers(i=s)});t._rateLimitedChange=function(e){r=!0,s=e,u()},t._rateLimitedBeforeChange=function(e){r||(i=e,t._origNotifySubscribers(e,o))}},hasSubscriptionsForEvent:function(e){return this._subscriptions[e]&&this._subscriptions[e].length},getSubscriptionsCount:function(e){if(e)return this._subscriptions[e]&&this._subscriptions[e].length||0;var t=0;return ko.utils.objectForEach(this._subscriptions,function(e,n){t+=n.length}),t},isDifferent:function(e,t){return!this.equalityComparer||!this.equalityComparer(e,t)},extend:applyExtenders};ko.exportProperty(ko_subscribable_fn,"subscribe",ko_subscribable_fn.subscribe),ko.exportProperty(ko_subscribable_fn,"extend",ko_subscribable_fn.extend),ko.exportProperty(ko_subscribable_fn,"getSubscriptionsCount",ko_subscribable_fn.getSubscriptionsCount),ko.utils.canSetPrototype&&ko.utils.setPrototypeOf(ko_subscribable_fn,Function.prototype),ko.subscribable.fn=ko_subscribable_fn,ko.isSubscribable=function(e){return e!=null&&typeof e.subscribe=="function"&&typeof e["notifySubscribers"]=="function"},ko.exportSymbol("subscribable",ko.subscribable),ko.exportSymbol("isSubscribable",ko.isSubscribable);