"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./spec/ios/index");
var index_2 = require("./spec/android/index");
var index_3 = require("./spec/common/index");
var Specs = /** @class */ (function () {
    function Specs() {
        this.IOSSpec = new index_1.IOSSpec();
        this.AndroidSpec = new index_2.AndroidSpec();
        this.CommonSpec = new index_3.CommonSpec();
    }
    return Specs;
}());
exports.Specs = Specs;
exports.Spec = new Specs();
