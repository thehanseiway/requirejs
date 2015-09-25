require.config({
    baseUrl      : 'src',
    deps         : ['main'],
    enforceDefine: false,
    paths        : {
        'knockout'     : '../bower_components/knockout/dist/knockout',
        'smokesignals' : '../bower_components/smokesignals/smokesignals',
        'text'  : '../bower_components/text/text'
    },
    shim         : {
        'smokesignals' : {
            exports: 'smokesignals'
        }
    }
});
define();
