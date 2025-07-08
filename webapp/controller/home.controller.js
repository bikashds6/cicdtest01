sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.sony.testcicd.controller.home", {
        onInit() {
        },
        onPressBtn: function(oEvt){
            prompt("Hello CI/CD");
            /* Deploy app into BTP */
        }
    });
});