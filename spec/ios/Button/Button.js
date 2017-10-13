"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button() {
        this.style = {
            height: 44,
            backgroundColor: "#007AFF",
            borderRadius: 5,
            alignSelf: "cenyter",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 6,
            paddingHorizontal: 16,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.2,
            shadowRadius: 1.2,
        };
        this.Icon = {
            style: {
                color: "#FFF",
                fontSize: 30,
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
        this.variations = {
            primary: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            info: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            success: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            danger: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            dark: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            light: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            warning: {
                style: {
                    backgroundColor: "#2874F0",
                },
            },
            small: {
                style: {
                    height: 30,
                },
            },
            large: {
                style: {
                    height: 60,
                },
            },
            block: {
                style: {
                    alignSelf: "stretch",
                },
            },
            full: {
                style: {
                    alignSelf: "stretch",
                    borderRadius: 0,
                },
            },
        };
    }
    return Button;
}());
exports.Button = Button;
