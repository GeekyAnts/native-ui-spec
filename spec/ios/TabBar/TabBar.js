"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TabBar = /** @class */ (function () {
    function TabBar() {
        this.style = {
            backgroundColor: "#EFEFF4",
            flexDirection: "row",
            alignItems: "center",
            height: 49,
            borderTopWidth: 1,
            borderTopColor: "#CECED2",
        };
        this.Button = {
            style: {
                flex: 1,
                flexDirection: "column",
                alignItems: "center",
                height: 49,
                backgroundColor: "transparent",
                justifyContent: "center",
            },
            Text: {
                style: {
                    fontSize: 10,
                    color: "#8e8e93",
                },
                active: {
                    style: {
                        color: "#0076ff",
                    },
                },
            },
            Badge: {
                style: {
                    backgroundColor: "red",
                    position: "absolute",
                    top: 3,
                    right: -5,
                    height: 18,
                    width: 18,
                    borderRadius: 18,
                    alignItems: "center",
                    justifyContent: "center",
                },
                Text: {
                    style: {
                        fontSize: 12,
                        color: "#FFF",
                    },
                },
            },
            Icon: {
                style: {
                    fontSize: 32,
                    color: "#8e8e93",
                    height: 30,
                },
                active: {
                    style: {
                        color: "#0076ff",
                    },
                },
            },
        };
    }
    return TabBar;
}());
exports.TabBar = TabBar;
