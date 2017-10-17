"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Content_1 = require("./Content/Content");
var ToolBar_1 = require("./ToolBar/ToolBar");
var StatusBar_1 = require("./StatusBar/StatusBar");
var BottomBar_1 = require("./BottomBar/BottomBar");
var Text_1 = require("./Text/Text");
var Icon_1 = require("./Icon/Icon");
var Button_1 = require("./Button/Button");
var Badge_1 = require("./Badge/Badge");
var ListItem_1 = require("./ListItem/ListItem");
var AndroidSpec = /** @class */ (function () {
    function AndroidSpec() {
        this.Content = new Content_1.Content();
        this.BottomBar = new BottomBar_1.BottomBar();
        this.ToolBar = new ToolBar_1.ToolBar();
        this.StatusBar = new StatusBar_1.StatusBar();
        this.Text = new Text_1.Text();
        this.Icon = new Icon_1.Icon();
        this.Button = new Button_1.Button();
        this.Badge = new Badge_1.Badge();
        this.ListItem = new ListItem_1.ListItem();
    }
    return AndroidSpec;
}());
exports.AndroidSpec = AndroidSpec;
