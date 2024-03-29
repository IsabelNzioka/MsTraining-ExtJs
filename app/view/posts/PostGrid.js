Ext.define('MsTraining.view.posts.PostGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'postgrid',
    reference: 'postgrid',

    controller: "postgridviewcontroller",
    
    store: {
        type: 'posts'
    },
    tbar:[{
        text: 'Add Post',
        listeners: {
            click: 'onAddPostClicked'
        }
    },
    {
        text: 'Edit/View Post',
        iconCls: 'fas fa-pencil-alt',
        listeners: {
            click: 'onEditClicked'
        }
    },
    {
        text: 'Delete Post',
        iconCls: 'far fa-trash-alt',
        listeners: {
            click: 'onDeleteClicked'
        }
    },
    // {
    //     text: 'Form fields',
    //     listeners: {
    //         click: 'onFormFieldsClicked'
    //     }
    // },
     {
        text: 'VTypes',
        listeners: {
            click: 'onVTypesClicked'
        }
    },
],
    columns: [
        {dataIndex: '_id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 1},
       
        {dataIndex: 'body', text: 'BODY', flex: 2 , sortable: false},
        {dataIndex: 'userId', text: 'User Id'},
        // {dataIndex: 'userId', text: 'User Id', hidden: true },
    ],

    selModel: {
        mode: 'SINGLE'
    },
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },
    scrollable:true,
    // height: 600
})

