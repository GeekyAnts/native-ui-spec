"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BottomBar = /** @class */ (function () {
    function BottomBar() {
        this.style = {
            backgroundColor: "#FFF",
            flexDirection: "row",
            alignItems: "center",
            height: 56,
            elevation: 8,
        };
        this.Button = {
            style: {
                flex: 1,
                alignItems: "center",
                height: 56,
                justifyContent: "center",
            },
            Text: {
                style: {
                    fontSize: 12,
                    color: "#9e9e9e",
                },
            },
            // Badge: {
            // 	style: {
            // 		backgroundColor: "red",
            // 		position: "absolute",
            // 		top: 3,
            // 		right: -5,
            // 		height: 18,
            // 		width: 18,
            // 		borderRadius: 18,
            // 		alignItems: "center",
            // 		justifyContent: "center",
            // 	},
            // 	Text: {
            // 		style: {
            // 			fontSize: 12,
            // 			color: "#FFF",
            // 		},
            // 	},
            // },
            Icon: {
                style: {
                    fontSize: 24,
                    color: "#9e9e9e",
                },
            },
            active: {
                Text: {
                    style: {
                        color: "#3F51B5",
                        fontSize: 14,
                    },
                },
                Icon: {
                    style: {
                        color: "#3F51B5",
                    },
                },
            },
        };
    }
    return BottomBar;
}());
exports.BottomBar = BottomBar;
