Ext.define('Ekis.view.main.Toolbar', {
    extend: 'Ext.Toolbar',
    xtype: 'maintoolbar',
    items: [
        {
            iconCls: 'toolbar-icon',
            listeners: {
                tap: 'onToggleNavigationSize'
            }
        },
        {
            xtype: 'spacer'
        },
        {
            xtype: 'button',
            cls: 'btn-logout',
            text: 'Выход'
        }
    ]

})