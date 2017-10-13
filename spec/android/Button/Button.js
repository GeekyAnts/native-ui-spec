"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.style = {
            height: 44,
            backgroundColor: "#3F51B5",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 6,
            paddingHorizontal: 16,
            elevation: 1,
        };
        this.Icon = {
            style: {
                color: "#FFF",
                fontSize: 28,
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
        this.primaryColor = "red";
    }
    return Button;
}());
exports.Button = Button;
