/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MsTraining.view.main.MainBackup', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main-backup',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MsTraining.view.main.MainController',
        'MsTraining.view.main.MainModel',
        'MsTraining.view.main.List'
    ],

    controller: 'main',
    plugins: 'viewport',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        },
        items: [{
            text: 'Logout',
            handler: 'onLogout'
        }]
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        {
            title: 'Static Data Management',
            iconCls: 'fa-solid fa-table',
            items: [{
                xtype: 'parentpanel'
            }]
        },
        {
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, 
    {
        title: 'Users',
        iconCls: 'fa-user',
        items: [
            {
                xtype: 'usertodosgrid'
            }
        ]
    }, 
    {
        title: 'Todos',
        iconCls: 'fa-solid fa-list',
        items: [
            {
                // xtype: 'todogrid'
                xtype: 'todosgrid'
            }
        ]
    }, 
    
    {
        title: 'Employees',
        iconCls: 'fa-user',
       items: [
        {
            xtype: 'employeegrid'
        }
       ]
    },
    {
        title: 'Albums',
        iconCls: 'fa-light fa-images',
       items: [
        {
            xtype: 'albumgrid'
        }
       ]
    },
   
    
    // <i class="fa-solid fa-clipboard-list"></i>
    {
        title: 'Checkout',
        iconCls: 'fa-solid fa-cart-plus',
        items: [{
           xtype: 'checkoutform'
        }]
    }, {
        title: 'Summary',
        iconCls: 'fa-solid fa-clipboard-list',
        items: [{
            xtype: 'summarygrid'
         }]
    }]
});
