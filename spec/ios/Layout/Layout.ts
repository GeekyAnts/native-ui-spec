import { Content } from "../../../types/commonSpec/Content";
export class Layout implements Content {
	style: Object;
	constructor() {
		this.style = {
			flex: 1,
			backgroundColor: "#FFF",
		};
	}
}
