sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], (Controller, MessageToast) => {
   "use strict";

   return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
      onShowHello() {
         // read msg from i18n model
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMessage", [sRecipient]);

         // show message
         MessageToast.show(sMsg);
      },

      onOpenDialog: function () {
         this.getOwnerComponent().openHelloDialog();
      }

   });
});