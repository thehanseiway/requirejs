define(['knockout'], function(ko) {
    'use strict';

    function render(container, view, viewModel) {
        var intermediateContainer = document.createElement('div');
        intermediateContainer.innerHTML = view;
        container.appendChild(intermediateContainer);

        ko.applyBindings(viewModel, container);
    }

    return {
        render : render
    };
});
