Ext.define('Ekis.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  config: {
    showNavigationview: true,
    showMenu: true
  },
  init: function () {
    this.topMenu = Ext.Viewport.setMenu(this.getMenuCfg('top'), {side: 'top'})
  },

  destroy: function() {
    Ext.destroyMembers(this, 'topMenu')
    this.callParent()
  },

  getMenuCfg: function(side) {
    const cfg = {
      side: side,
      items: [{
        text: 'Settings',
        iconCls: 'x-fa fa-cog',
        handler: () => {
          Ext.Viewport.hideMenu(side)
        }
      }]
    }
    return cfg
  },

  toggleMenu: function(side) {
    Ext.Viewport.setMenu(this[side + 'Menu'], {
      side: side
    })

    Ext.Viewport.toggleMenu(side)
  },




  onButtonClick: function (button) {
    this.lookupReference('df').setValue(Date.now())
  },

  onToggleNavigationSize: function () {
    const treeList = this.lookupReference('navigationview')
    treeList.setHideMode('offsets')
    treeList.setHidden(this.getShowMenu())
    this.setShowMenu(!this.getShowMenu())
  },

  getAnimation: function() {
    return {
      type: 'slide',
      direction: 'left',
      duration: 500
    }
  },

  getMenuWidth: function(treelist) {
    return treelist.toolsElement.getWidth()
  }

})
