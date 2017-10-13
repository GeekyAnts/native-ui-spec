import { Button as IButton } from "../../../types/commonSpec/Button";
import { Text as IText } from "../../../types/commonSpec/Text";
import { Icon as IIcon } from "../../../types/commonSpec/Icon";
export class Button implements IButton {
	style: Object;
	Text?: IText;
	Icon?: IIcon;
	primaryColor?: string;
	constructor() {
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
}
