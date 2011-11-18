/**
 * Created by IntelliJ IDEA.
 * User: julioalbertodehoyosmartinez
 * Date: 18/11/11
 * Time: 16:24
 * To change this template use File | Settings | File Templates.
 */
Ext.define('Siscolsi.Panel',{

    alias       : 'widget.siscolpanel',

    extend      : 'Ext.panel.Panel',

    constructor : function(config){
        Ext.apply(config,{
            dockedItems: [{
               xtype : 'toolbar',
               dock  : 'top',
               items :  this.armaToolbar()
            }]
        });

        this.callParent(arguments);
    },

    armaToolbar : function(){
        return  ['->',{
            text    : 'Nuevo',
            iconCls : 'nuevo',
            handler : this.fnNuevo
        },'-',{
            text    : 'Modificar',
            iconCls : 'modificar'
        },'-',{
            text    : 'Eliminar',
            iconCls : 'eliminar'
        }]
    },

    fnNuevo   : function(){
        console.log('Nuevo Item');
    }
});
