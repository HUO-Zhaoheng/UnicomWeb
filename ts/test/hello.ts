/// <reference path="../../node_modules/@types/jquery/index.d.ts" />
import * as $ from "jquery"
import * as StaticData from "../StaticData"
class WorkOrder{
    public time:string;
    public item:string;
    public repairerID:string;
    public studentID:string;
    public description:string;
}
window.onload = function () {
    $.get(StaticData.address+"TestList",{}, function (data:WorkOrder[]) {
        for(let order of data) {

            $("ul").append("<li>"+order.time+"</li>");
            $("ul").append("<li>"+order.item+"</li>");
            $("ul").append("<li>"+order.repairerID+"</li>");
            $("ul").append("<li>"+order.studentID+"</li>");
            $("ul").append("<li>"+order.description+"</li>");
        }

    })
}