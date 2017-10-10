import { Content } from "../../../types/commonSpec/Content";
export class Layout implements Content {
	style: Object;
	constructor() {
		this.style = {
			height: 20,
			marginHorizontal: 10,
		};
	}
}
