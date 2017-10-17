"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.style = {
            height: 36,
            backgroundColor: "#3F51B5",
            borderRadius: 2,
            alignSelf: "flex-start",
            alignItems: "center",
            justifyContent: "center",
            paddingHorizontal: 16,
            elevation: 2,
            flexDirection: "row",
        };
        this.background = "rgba(255,255,255,0.3)";
        this.Icon = {
            style: {
                color: "#FFF",
                fontSize: 24,
                paddingLeft: 8,
                paddingRight: 8,
            },
        };
        this.Text = {
            style: {
                fontSize: 14,
                color: "#FFF",
                fontWeight: "normal",
                fontFamily: "System",
            },
        };
        this.variation = {
            Floating: {
                style: {
                    height: 48,
                    width: 48,
                    borderRadius: 48,
                    backgroundColor: "#3F51B5",
                    alignItems: "center",
                    justifyContent: "center",
                    elevation: 8,
                },
                background: "rgba(255,255,255,0.3)",
                Icon: {
                    style: {
                        color: "#FFF",
                        fontSize: 24,
                    },
                },
            },
            Flat: {
                style: {
                    backgroundColor: "transparent",
                    elevation: 0,
                },
                background: "rgba(63, 81, 181, 0.3)",
                Text: {
                    style: {
                        color: "#3F51B5",
                    },
                },
                Icon: {
                    style: {
                        color: "#3F51B5",
                    },
                },
            },
            Disabled: {
                style: {
                    backgroundColor: "#9e9e9e",
                    elevation: 2,
                },
                Text: {
                    style: {
                        color: "#000",
                    },
                },
                Icon: {
                    style: {
                        color: "#000",
                    },
                },
            },
        };
    }
    return Button;
}());
exports.Button = Button;
