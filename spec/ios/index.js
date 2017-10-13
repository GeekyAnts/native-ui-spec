"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Layout_1 = require("./Layout/Layout");
var NavigationBar_1 = require("./NavigationBar/NavigationBar");
var StatusBar_1 = require("./StatusBar/StatusBar");
var TabBar_1 = require("./TabBar/TabBar");
var Text_1 = require("./Text/Text");
var Icon_1 = require("./Icon/Icon");
var Button_1 = require("./Button/Button");
var Badge_1 = require("./Badge/Badge");
var IOSSpec = /** @class */ (function () {
    function IOSSpec() {
        this.Layout = new Layout_1.Layout();
        this.TabBar = new TabBar_1.TabBar();
        this.NavigationBar = new NavigationBar_1.NavigationBar();
        this.StatusBar = new StatusBar_1.StatusBar();
        this.Text = new Text_1.Text();
        this.Icon = new Icon_1.Icon();
        this.Button = new Button_1.Button();
        this.Badge = new Badge_1.Badge();
    }
    return IOSSpec;
}());
exports.IOSSpec = IOSSpec;
