Ext.define('Ekis.view.header.HeaderView', {
    extend: 'Ext.Toolbar',
    xtype: 'headerview',
    viewModel: {},
    items: [
        '->',
        {
            xtype: 'button',
            ui: 'headerbutton',
            reference: 'detailtoggle',
            handler: 'onHeaderViewDetailToggle',
            iconCls: 'x-fa fa-arrow-left'
        }
    ]
})