Ext.define('Ekis.view.navigation.menu.MenuView', {
    extend: 'Ext.list.Tree',
    xtype: 'menuview',
    controller: 'mainviewcontroller',
    ui: 'nav',
    requires: [
        'Ext.data.TreeStore'
    ],
    scrollable: true,
    store: 'NavigationTree',
    expanderFirst: false,
    expanderOnly: false,
    // indent: 300
})