sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
],
    (Controller, MessageToast, JSONModel, ResourceModel) => {
        "use strict";
        return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

            onInit: function () {
                // Set the data model on the view
                var oData = {
                    recipient: {
                        name: "UI5"
                    }
                };
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);

                // Set the i18n model
                var i18nModel = new ResourceModel({
                    bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                    supportedLocales: ["", "en", "de"],
                    fallbackLocale: "en"
                });
                this.getView().setModel(i18nModel, "i18n");
            },

            onShowHello: function () {

                //read the message from i18n model
                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMessage", [sRecipient]);

                MessageToast.show(sMsg);
            },

            onExit: function () {
                // This method is called when the controller is destroyed
                // You can perform cleanup tasks here
            }
        });
    });