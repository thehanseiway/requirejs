define(['ui_strings', 'knockout'], function(uiStrings, ko) {
    'use strict';

    function App() {
        this.title = uiStrings.welcome;
        this.createText = uiStrings.createText;
        this.placeholderText = uiStrings.placeholderText;
        this.noListsText = uiStrings.noListsText;
        this.loadText = uiStrings.addText;

        this.enableAdd = ko.observable(false);
        this.enableLoad = ko.observable(false);
    }

    return App;
});
