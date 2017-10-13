"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_native_1 = require("react-native");
var Content_1 = require("../android/Content/Content");
var ToolBar_1 = require("../android/ToolBar/ToolBar");
var BottomBar_1 = require("../android/BottomBar/BottomBar");
var StatusBar_1 = require("../android/StatusBar/StatusBar");
var Text_1 = require("../android/Text/Text");
var Icon_1 = require("../android/Icon/Icon");
var Button_1 = require("../android/Button/Button");
var Badge_1 = require("../android/Badge/Badge");
var NavigationBar_1 = require("../ios/NavigationBar/NavigationBar");
var TabBar_1 = require("../ios/TabBar/TabBar");
var Layout_1 = require("../ios/Layout/Layout");
var StatusBar_2 = require("../ios/StatusBar/StatusBar");
var Text_2 = require("../ios/Text/Text");
var Icon_2 = require("../ios/Icon/Icon");
var Button_2 = require("../ios/Button/Button");
var Badge_2 = require("../ios/Badge/Badge");
var CommonSpec = /** @class */ (function () {
    function CommonSpec() {
        var _this = this;
        this.resolvePlatform = function () {
            if (react_native_1.Platform.OS === "ios") {
                _this.Content = new Layout_1.Layout();
                _this.Footer = new TabBar_1.TabBar();
                _this.Header = new NavigationBar_1.NavigationBar();
                _this.StatusBar = new StatusBar_2.StatusBar();
                _this.Text = new Text_2.Text();
                _this.Icon = new Icon_2.Icon();
                _this.Button = new Button_2.Button();
                _this.Badge = new Badge_2.Badge();
            }
            else if (react_native_1.Platform.OS === "android") {
                _this.Content = new Content_1.Content();
                _this.Footer = new BottomBar_1.BottomBar();
                _this.Header = new ToolBar_1.ToolBar();
                _this.StatusBar = new StatusBar_1.StatusBar();
                _this.Text = new Text_1.Text();
                _this.Icon = new Icon_1.Icon();
                _this.Button = new Button_1.Button();
                _this.Badge = new Badge_1.Badge();
            }
        };
        this.resolvePlatform();
    }
    return CommonSpec;
}());
exports.CommonSpec = CommonSpec;
