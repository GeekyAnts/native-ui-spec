"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Layout_1 = require("../ios/Layout/Layout");
var Content_1 = require("../android/Content/Content");
var NavigationBar_1 = require("../ios/NavigationBar/NavigationBar");
var ToolBar_1 = require("../android/ToolBar/ToolBar");
var TabBar_1 = require("../ios/TabBar/TabBar");
var BottomBar_1 = require("../android/BottomBar/BottomBar");
var StatusBar_1 = require("../ios/StatusBar/StatusBar");
var StatusBar_2 = require("../android/StatusBar/StatusBar");
var CommonSpec = /** @class */ (function () {
    function CommonSpec() {
        var _this = this;
        this.resolvePlatform = function () {
            if (react_native_1.Platform.OS === "ios") {
                _this.Content = new Layout_1.Layout();
                _this.Footer = new TabBar_1.TabBar();
                _this.Header = new NavigationBar_1.NavigationBar();
                _this.StatusBar = new StatusBar_1.StatusBar();
            }
            else if (react_native_1.Platform.OS === "android") {
                _this.Content = new Content_1.Content();
                _this.Footer = new BottomBar_1.BottomBar();
                _this.Header = new ToolBar_1.ToolBar();
                _this.StatusBar = new StatusBar_2.StatusBar();
            }
        };
        this.resolvePlatform();
    }
    return CommonSpec;
}());
exports.CommonSpec = CommonSpec;
