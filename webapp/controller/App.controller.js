sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
], 
    (Controller, MessageToast) => {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

            onShowHello : function () {
                MessageToast.show("Hello there!");
            },

            onInit: function () {
                // This method is called when the controller is instantiated
                // You can perform initializati on tasks here
            },
            onExit: function () {
                // This method is called when the controller is destroyed
                // You can perform cleanup tasks here
            }
        }); 
    });