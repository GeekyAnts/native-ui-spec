import { Text as IText } from "../../../types/commonSpec/Text";
export class Text implements IText {
	style: Object;
	constructor() {
		this.style = {
			fontSize: 17,
			color: "#000",
			fontWeight: "normal",
			fontFamily: "System",
		};
	}
}
