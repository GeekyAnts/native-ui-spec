import { Title as ITitle } from "../../../types/commonSpec/Title";
export class Title implements ITitle {
	style: Object;
	constructor() {
		this.style = {
			fontSize: 17,
			color: "#000",
			fontWeight: "bold",
			fontFamily: "System",
		};
	}
}
