"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Badge = /** @class */ (function () {
    function Badge() {
        this.style = {
            backgroundColor: "blue",
            paddingHorizontal: 6,
            alignSelf: "flex-start",
            height: 27,
            borderRadius: 13.5,
        };
        this.Text = {
            style: {
                color: "#FFF",
                fontSize: 15,
                textAlign: "center",
                paddingHorizontal: 3,
            },
        };
    }
    return Badge;
}());
exports.Badge = Badge;
