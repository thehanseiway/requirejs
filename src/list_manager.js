define(['list', 'storage'], function( List, storage ) {
    'use strict';

    function createList( listId ) {
        return new List(listId);
    }

    function saveList( list ) {
        storage.save(list);
    }
    return {
        createList : createList,
        saveList : saveList
    };
});
