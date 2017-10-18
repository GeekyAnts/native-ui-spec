import { Toolbar as IToolbar, Button as IButton } from "../../../types/IOSSpec/Toolbar";
export class Toolbar implements IToolbar {
	style: Object;
	Button: IButton;
	constructor() {
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
}
