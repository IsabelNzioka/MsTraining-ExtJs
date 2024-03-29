Ext.define("MsTraining.view.users.UserViewController", {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userviewcontroller',

    init: function() {
        let grid = this.getView(),
        store = grid.getStore();
        store.load();
        // load data at demand instead of using autoLoad
    },


    onUserGridCellClick: function(grid, td, cellIndex, record, tr, rowIndex, e, eOpts) {

        // let userdetailsgrid = Ext.ComponentQuery.query('userdetailsgrid')[0];
        let userGrid = this.getView();
        console.log(record.get('_id'));

            let postsStore = Ext.ComponentQuery.query('postgrid')[0].getStore();
            let todosStore = Ext.ComponentQuery.query('todosgrid')[0].getStore();
            
    
            postsStore.reload({
                params:{
                    userId: record.get('_id')
                }
            });
            todosStore.reload({
                params:{
                    userId: record.get('_id')
                }
            });
        

       


        let me = this,
            view = me.getView(), 
            vm = me.getViewModel(), 
            refs=me.getReferences();
        console.log('getView ---Meeeeeeeeeeeeee' + view);
        vm.set("record", record)


    },

    onShowDetails: function(btn, state) {
        let userGrid = this.getView();

     let lowerPanel = Ext.ComponentQuery.query('staticdatamanagementtabpanel')[0];
        if(userGrid.getHeight() === 600){
            userGrid.setHeight(300)
            lowerPanel.setHeight(400)
            btn.setText("Hide Details")
        }else{
            userGrid.setHeight(600)
            lowerPanel.setHeight(0)
            btn.setText("Show Details")
        }
    },

    onModelBinding: function(btn, e, eOpts) {

        Ext.create({
            xtype: 'modelbindingform'
        })
    },


    onUserGridCellDblClick:function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
        console.log(record.get('username'));
    },
    onUserGridCellContextMenu: function (grid, td, cellIndex, record, tr, rowIndex, e, eOpts){
       
    }
 
})