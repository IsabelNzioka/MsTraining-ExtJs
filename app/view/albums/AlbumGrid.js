Ext.define('MsTraining.view.albums.AlbumGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'albumgrid',
    store: {
        type: 'albums'
    },
    columns: [
        {dataIndex: 'id', text: 'ID' },
        {dataIndex: 'title', text: 'TITLE' , flex: 2 },
        {dataIndex: 'userId', text: 'User Id' },
    ],

    selModel: {
        selType: 'checkboxmodel'
    }
})