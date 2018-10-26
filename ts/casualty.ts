import * as $ from "jquery"
import * as StaticData from "./StaticData"
import * as requirejs from "requirejs"
//browserify casualty.js -o bundle/casualtyBundle.js
class Casualty {
    static predict(): void {
        $.post(StaticData.address + "Predict", function (data: string) {
            console.log("模型训练完成");
        });

    }

    static training(): void {
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
            }, type: "post", data: "formData",processData:false,contentType:false,
            error:function (err) {
                alert("上传失败");
            }
        })
    }
}