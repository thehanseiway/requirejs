define(['task'], function( Task ) {
    'use strict';

    function createTask(name) {
        return new Task(name);
    }

    return {
        createTask : createTask
    };
});
