Ext.define("MsTraining.view.posts.PostGridViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.postgridviewcontroller',

    mixins: ['MsTraining.mixin.GridMixin'],

    onAddPostClicked: function(btn, e, eOpts) {
        console.log(btn.getText() + " was clicked");

        var wd = Ext.create({
            xtype: 'postformwindow',

        });
        wd.show();
    },

    onEditClicked: function (btn, e, eOpts) {

    },
    onDeleteClicked: function (btn, e, eOpts) {
        let me=this;
        let record = this.getSelectedRecordByXType('postgrid');
        let grid = me.getView()

       if (record){
            let recordId = record.get('_id');
            Ext.Msg.confirm('Delete Operation', `Are you sure you want to delete the post with id ${recordId}`, function (btn, text) {
                if (btn == 'yes') {
                    Ext.Ajax.request({
                        url: `http://localhost:3000/posts/${recordId}`,
                        method: 'DELETE',
                        success: function (response, opts) {
                            var obj = Ext.decode(response.responseText);
                            me.showToast("Operation successful")
                            grid.getStore().reload()
                        },

                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        }
                    });
                }else{
                    Ext.Msg.alert('Cancellation', 'Alright. Thank you!!!');
                }
            });
            
        }
    },

    onVTypesClicked: function (btn, e, eOpts) {
        Ext.create({
            xtype: "formfieldvtypevalidation",
        });
    },
    // onPostSave: function() {
    //     var form = this.getView().down("form").getForm();
    //     console.log("Saving data to: https://jsonplaceholder.typicode.com/posts");
    //     console.log("Data: " + form.getValues())
    //     form.reset(true)
    // }

})