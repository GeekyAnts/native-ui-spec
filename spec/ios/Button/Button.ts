import { Button as IButton } from "../../../types/commonSpec/Button";
import { Text as IText } from "../../../types/commonSpec/Text";
import { Icon as IIcon } from "../../../types/commonSpec/Icon";
export class Button implements IButton {
	style: Object;
	Text?: IText;
	Icon?: IIcon;
	constructor() {
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
}
