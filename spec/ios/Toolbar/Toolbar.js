"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Toolbar = /** @class */ (function () {
    function Toolbar() {
        this.style = {
            backgroundColor: "rgba(255,255,255,0.8)",
            height: 44,
            flexDirection: "row",
            alignItems: "center",
            borderTopWidth: 0.6,
            borderTopColor: "#CECED2",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
        };
        this.Button = {
            style: {
                alignItems: "center",
                justifyContent: "center",
                flex: 1,
            },
            Icon: {
                style: {
                    fontSize: 32,
                    color: "#8e8e93",
                },
            },
        };
    }
    return Toolbar;
}());
exports.Toolbar = Toolbar;
