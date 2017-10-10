"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Content_1 = require("./Content/Content");
var ToolBar_1 = require("./ToolBar/ToolBar");
var StatusBar_1 = require("./StatusBar/StatusBar");
var BottomBar_1 = require("./BottomBar/BottomBar");
var AndroidSpec = /** @class */ (function () {
    function AndroidSpec() {
        this.Content = new Content_1.Content();
        this.BottomBar = new BottomBar_1.BottomBar();
        this.ToolBar = new ToolBar_1.ToolBar();
        this.StatusBar = new StatusBar_1.StatusBar();
    }
    return AndroidSpec;
}());
exports.AndroidSpec = AndroidSpec;
