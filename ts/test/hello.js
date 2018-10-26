"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
var $ = require("jquery");
var StaticData = require("../StaticData");
var WorkOrder = /** @class */ (function () {
    function WorkOrder() {
    }
    return WorkOrder;
}());
window.onload = function () {
    $.get(StaticData.address + "TestList", {}, function (data) {
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var order = data_1[_i];
            $("ul").append("<li>" + order.time + "</li>");
            $("ul").append("<li>" + order.item + "</li>");
            $("ul").append("<li>" + order.repairerID + "</li>");
            $("ul").append("<li>" + order.studentID + "</li>");
            $("ul").append("<li>" + order.description + "</li>");
        }
    });
};
//# sourceMappingURL=hello.js.map