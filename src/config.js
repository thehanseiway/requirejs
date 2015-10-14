require.config({
    baseUrl      : 'src',
    deps         : ['main'],
    enforceDefine: true,
    paths        : {
        'knockout'     : '../bower_components/knockout/dist/knockout',
        'smokesignals' : '../bower_components/smokesignals/smokesignals',
        'text'         : '../bower_components/text/text',
        'views'        : '../views',
        'i18n'         : '../bower_components/i18n/i18n'
    },
    shim         : {
        'smokesignals' : {
            exports: 'smokesignals'
        }
    }
});
define();
