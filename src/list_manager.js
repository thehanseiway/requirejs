define(['list'], function( List ) {
    'use strict';

    function createList( listId ) {
        return new List(listId);
    }

    return {
        createList : createList
    };
});
