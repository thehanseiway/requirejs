define(['knockout'], function( ko ) {
    'use strict';

    function TaskViewModel() {
        this.name = ko.observable('');
        this.completed = ko.observable(false);
    }

    return TaskViewModel;
});
