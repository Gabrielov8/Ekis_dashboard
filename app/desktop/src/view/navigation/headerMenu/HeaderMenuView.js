Ext.define('Ekis.view.navigation.headerMenu.HeaderMenuView', {
    extend: 'Ext.Container',
    xtype: 'header-menu',
    requires: [
        'Ext.layout.VBox'
    ],
    layout: {
        type: 'vbox'
    },
    cls: 'header',
    padding: 10,
    items: [
        {
            xtype: 'container',
            layout: {
                type: 'hbox',
            },
            cls: 'header__logo-container',
            items: [
                {
                    xtype: 'image',
                    src: 'resources/ekis-logo.svg',
                    height: 48,
                    width: 56
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    align: 'center',
                    width: '70%',
                    html: '<p class="header__text">Формы и отчётность</p>'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'vbox',
            cls: 'user',
            margin: '0 0 15 0',
            items: [
                {
                    xtype: 'component',
                    margin: '0 0 10 0',
                    bind: '<p class="header__text">Хромов Н.С.</p>'
                },
                {
                    xtype: 'component',
                    bind: '<p class="header__text">Сотрудник (ГАОУ ДПО МЦКО)</p>'
                }
            ]
        },
        {
            xtype: 'container',
            layout: 'hbox',
            cls: 'button-container',
            width: '100%',
            padding: '0 5 10 0',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'grid-icon',
                    cls: 'button',
                    margin: '0 2 0 0',
                    width: '33%'
                },
                {
                    xtype: 'button',
                    iconCls: 'star-icon',
                    cls: 'button',
                    margin: '0 2 0 0',
                    width: '33%'
                },
                {
                    xtype: 'button',
                    iconCls: 'magnifer-icon',
                    cls: 'button',
                    width: '33%'
                }
            ]
        }
    ]

})