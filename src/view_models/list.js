define([
    'list_manager',
    'knockout',
    'i18n!nls/ui_strings',
    'task_manager',
    'renderer',
    'view_models/task',
    'text!views/task.html'
],
function( listManager, ko, uiStrings, taskManager, renderer, TaskViewModel, taskView ) {
    'use strict';

    function ListViewModel() {
        this.placeholderText = uiStrings.placeholderText;
        this.addText = uiStrings.addText;
        this.saveText = uiStrings.saveText;

        this.listName = ko.observable('');
        this.enableAdd = ko.observable(false);
        this.taskName = ko.observable('');

        this.isButtonEnabled = ko.computed(function() {
            if ( this.taskName() !== '' ) {
                this.enableAdd(true);
            } else {
                this.enableAdd(false);
            }
        }, this);

        this.addTask = function () {
            var task = taskManager.createTask(this.taskName());
            var container = document.querySelector('.todo_app ul');
            var taskViewModel = new TaskViewModel();

            this.list.tasks.push(task);
            taskViewModel.id = 'task-' + ( this.list.tasks.length -1 );

            taskViewModel.name(task.name);
            taskViewModel.completed(false);

            renderer.render(container, taskView, taskViewModel, true);
            this.taskName('');
            console.log(taskViewModel);
            return taskViewModel;
        };

        this.addTaskHandler = this.addTask.bind(this);
    }

    return ListViewModel;
});
