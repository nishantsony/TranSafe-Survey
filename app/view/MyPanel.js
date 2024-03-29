/*
 * File: app/view/MyPanel.js
 *
 * This file was generated by Sencha Architect version 3.0.2.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TranSafe.view.MyPanel', {
    extend: 'Ext.Panel',

    requires: [
        'Ext.Img',
        'Ext.Container',
        'Ext.Button',
        'TranSafe.view.MyNavigationView'
    ],

    config: {
        cls: 'home',
        html: '<h1>Welcome to TranSafe</h1><p>Synopsis</p><h2>TranSafe (0.0.1)</h2>',
        id: 'logoPanel',
        style: 'background-color: #FFF',
        items: [
            {
                xtype: 'image',
                height: 201,
                src: 'transafe_logo.png'
            },
            {
                xtype: 'container',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            //Ext.Viewport.add(Ext.create('TranSafe.view.MyNavigationView'));
                            console.log('The user is ' + localStorage.getItem('ifLogged'));
                            Ext.Viewport.setActiveItem('mynavigationview',{
                                type: "slide",
                                direction: "left"
                            });

                        },
                        docked: 'right',
                        hidden: true,
                        id: 'start',
                        ui: 'action-round',
                        text: 'Continue'
                    },
                    {
                        xtype: 'button',
                        handler: function(button, e) {
                            //Ext.Viewport.add(Ext.create('TranSafe.view.addVenuePanel'));
                            Ext.Viewport.setActiveItem('surveypanel',{
                                type: "slide",
                                direction: "left"
                            });

                        },
                        docked: 'left',
                        hidden: true,
                        itemId: 'addVenue',
                        ui: 'action-round',
                        text: 'Add venue'
                    }
                ]
            }
        ]
    }

});