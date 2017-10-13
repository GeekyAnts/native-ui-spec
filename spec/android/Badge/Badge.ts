import { Badge as IBadge } from "../../../types/commonSpec/Badge";
import { Text as IText } from "../../../types/commonSpec/Badge";
export class Badge implements IBadge {
	style: Object;
	Text: IText;
	constructor() {
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
}
