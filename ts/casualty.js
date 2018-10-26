"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var $ = require("jquery");
var StaticData = require("./StaticData");
//browserify casualty.js -o bundle/casualtyBundle.js
var Casualty = /** @class */ (function () {
    function Casualty() {
    }
    Casualty.predict = function () {
        $.post(StaticData.address + "Predict", function (data) {
            console.log("模型训练完成");
        });
    };
    Casualty.training = function () {
        /*
                $.post(StaticData.address+"Training",function (data:string) {
                    console.log("预测完成，点击下载");
                });
        */
        $.ajax(StaticData.address + "Training", {
            success: function (res) {
                if (res) {
                    alert("上传成功");
                }
            }, type: "post", data: "formData", processData: false, contentType: false,
            error: function (err) {
                alert("上传失败");
            }
        });
    };
    return Casualty;
}());
//# sourceMappingURL=casualty.js.map