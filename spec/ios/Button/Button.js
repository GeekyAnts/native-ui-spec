"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.style = {
            height: 44,
            paddingVertical: 6,
            backgroundColor: "#007AFF",
            borderRadius: 5,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.2,
            alignItems: "center",
        };
        this.Icon = {
            style: {
                color: "#FFF",
                fontSize: 29,
            },
        };
        this.Text = {
            style: {
                fontSize: 17,
                color: "#FFF",
                fontWeight: "normal",
                fontFamily: "System",
            },
        };
    }
    return Button;
}());
exports.Button = Button;
