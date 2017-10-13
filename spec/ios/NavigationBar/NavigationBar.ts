import { Header } from "../../../types/commonSpec/Header";
import { Text } from "../../../types/commonSpec/Text";
export class NavigationBar implements Header {
	style: Object;
	Text: Text;
	constructor() {
		this.style = {
			height: 44,
			paddingHorizontal: 8,
			backgroundColor: "#EEE",
			flexDirection: "row",
		};
		this.Text = {
			style: {
				color: "#007AFF",
				fontSize: 17,
			},
		};
	}
}
