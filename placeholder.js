"use strict"

define(function (require) {
    const placeholderManager = require("core/placeholderManager");
    const ngComponent = require("core/ngComponent");

    const pdfMake = require('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/pdfmake.js');
    const pdfFonts = require('https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/vfs_fonts.js');
    const bwipjs = require('https://cdnjs.cloudflare.com/ajax/libs/bwip-js/3.0.0/bwip-js.js');


    var docDefinition;

    var placeHolder = function ($scope, $element, controlService) {

        //const _this = this;
        this.getItems = () => {
            var items = [{
                text: "Move to ShipWorks",  // Button name
                key: "placeholderPrintInvoiceTemplate",  // Button id (unique)
                icon: "fa fa-angle-double-up",  // Button icon
                content: {
                    moduleName: "placeholderShipWorksTemplate",
                    controlName: "placeholderShipWorksTemplate"
                }
            }];

            return items;
        };

        this.isEnabled = (itemKey) => {
            return true;
        };

        this.onClick = () => {
            var orders = $scope.viewStats.get_selected_orders();

            if (orders.length < 1) {
                alert('Please select at least one order');
                return;
            }
            
            var ids = [];
            for (var i = 0; i < orders.length; i++)
            {
                var id = orders[i].id;
                ids.push(id);
            }
            
            //alert(ids.length);
            var requestBody = { orderIDs: ids };
            var url = "https://cf62-46-119-185-221.ngrok.io/Order/addOrdersToShipWorks";
            
            

            //$scope.getOrderDataBySomeID();
        };

       
        };
      

    placeholderManager.register("OpenOrders_OrderControlButtons", placeHolder);

});
