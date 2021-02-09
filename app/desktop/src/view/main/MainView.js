Ext.define('Ekis.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  cls: 'mainview',
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: {
    type: 'vbox'
  },
  requires: [
    'Ext.Toolbar',
  ],
  items: [
    { xtype: 'navigationview', docked: 'left', reference: 'navigationview', minWidth: '20%'},
    { xtype: 'maintoolbar', docked: 'top' },
  ]
})
