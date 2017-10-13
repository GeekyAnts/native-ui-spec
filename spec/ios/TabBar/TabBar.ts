import { TabBar as ITabBar } from "../../../types/IOSSpec/TabBar";
import { Text as IText } from "../../../types/IOSSpec/Text";
import { Icon as IIcon } from "../../../types/IOSSpec/Icon";
import { Button as IButton } from "../../../types/IOSSpec/Button";
export class TabBar implements ITabBar {
	style: Object;
	Text: IText;
	Icon: IIcon;
	constructor() {
		this.style = {
			backgroundColor: "#EEE",
			// marginHorizontal: 10,
			flexDirection: "row",
			justifyContent: "center",
			height: 49,
		};
		this.Text = {
			style: {
				color: "#007AFF",
			},
		};
		this.Icon = {
			style: {
				color: "#007AFF",
			},
		};
	}
}
