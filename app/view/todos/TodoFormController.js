Ext.define('MsTraining.view.todos.TodoFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.todoformcontroller',

    onSave: function(btn, e, eOpts) {

        let window = this.getView();
        let form = window.getReferences()['todoform'].getForm();
        // todoIdField
        let todoId = window.getReferences()['todoIdField'].getValue();
        let url = 'http://localhost:3000/todos';

        if(form.isValid()) {
            form.submit({
                method:  todoId === '' ? 'POST' : 'PUT',
                url: todoId === '' ? url : `http://localhost:3000/todos/${todoId}`,
                submitEmptyText: false,

                success: function(form, action) {
                    Ext.Msg.alert('Success', action.result.msg)
                    window.close();

                },
                failure: function(form, action) {
                    Ext.Msg.alert('Failed', action.result.msg)
                }
            })
        } else {
            Ext.Msg.alert('Invalid Data','Please coreect form errors')
        }
    
    }


})