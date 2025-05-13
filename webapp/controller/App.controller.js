sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
],
    (Controller, MessageToast, JSONModel) => {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

            onInit: function () {
                // Set the data model on the view
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },

            onShowHello: function () {

                MessageToast.show("Hello there!");
            },

            onExit: function () {
                // This method is called when the controller is destroyed
                // You can perform cleanup tasks here
            }
        });
    });