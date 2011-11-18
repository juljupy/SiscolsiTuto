/**
 * Created by IntelliJ IDEA.
 * User: julioalbertodehoyosmartinez
 * Date: 18/11/11
 * Time: 15:49
 * To change this template use File | Settings | File Templates.
 */
Ext.Loader.setConfig({
    enabled : true
});
Ext.require('Siscolsi.Panel');
Ext.onReady(function(){
//Ext.get('mybtn').on('click',function(){
  Ext.create('Ext.Viewport',{
      layout     : 'border',
        defaults   : {
          xtype : 'siscolpanel',
          split : true
        },
        items      : [{
            html  : 'Toolbar',
            region: 'north'
        },{
            title      : 'Panel',
            html       : 'lalala',
            region     : 'center',
            buttons: [{
                text    : 'Guardar',
                handler : function(){
                   console.log('Guardando');
                }
            },{
                text    : 'Cancelar',
                handler : function(){
                    console.log('Cancelar');
                }
            }]
        },{
            title : 'Panel',
            html  : 'Sur',
            region: 'south'
        },{
            title : 'Panel',
            html  : 'Occidente',
            region: 'west'
        },{
            title : 'Panel',
            html  : 'Oriente',
            region: 'east'
        }]
  });
  /*Ext.create('Ext.panel.Panel', {
        title      : 'Hola Mundo',
        width      : 800,
        height     : 400,
        layout     : 'border',
        defaults   : {
            xtype : 'panel'/*,
            split  : true*
        },
        items      : [{
            //title : 'Panel',
            html  : 'Toolbar',
            region: 'north'
        },{
            title : 'Panel',
            html  : 'Centro',
            region: 'center'
        },{
            title : 'Panel',
            html  : 'Sur',
            region: 'south'
        },{
            title : 'Panel',
            collapsible: true,
            width : 200,
            region: 'west',
            defaults : {
                xtype : 'panel'
            },
            layout : 'accordion',
            items : [{
              title : 'Config',
               html : 'config'
            },{
               title : 'Params',
                html : 'params'
            }],
            split : true
        },{
            title  : 'Panel',
            html   : 'Oriente',
            region : 'east',
            split  : true,
            margins: '5 5 5 0'
        }],
        renderTo   : 'mydiv'
    });

    /*Ext.create('Ext.Window',{
        title      : 'Hola Mundo',
        width      : 800,
        height     : 400,
        layout     : 'anchor',
        defaults   : {
            xtype : 'panel',
            border: false
        },
        items      : [{
            //xtype : 'panel',
            title : 'Panel',
            html  : 'Panel Fit'
        },{
            //xtype : 'panel',
            title : 'Panel',
            html  : 'Panel Fit'
        }]
    }).show();*/
//});
});
