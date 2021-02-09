Ext.define('Ekis.view.navigation.NavigationView', {
    extend: 'Ext.Container',
    xtype: 'navigationview',
    layout: 'vbox',
    cls: 'nav',
    items: [
        {
            xtype: 'header-menu',
            reference: 'header-menu'
        },
        {
            xtype: 'menuview',
            reference: 'menuview',
            cls: 'nav-menu'
        },
        {
            xtype: 'spacer'
        },
        {
            xtype: 'container',
            padding: '10',
            cls: 'bottom-text',
            layout: 'center',
            bind: '<div>2020 Разработка и поддержка</div><div class="bottom-text">ГАО ДПО МЦКО</div>',
        }
    ],
})