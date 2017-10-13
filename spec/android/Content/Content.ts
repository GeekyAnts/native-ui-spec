import { Content as IContent } from "../../../types/commonSpec/Content";
export class Content implements IContent {
	style: Object;
	constructor() {
		this.style = {
			flex: 1,
			backgroundColor: "transparent",
		};
	}
}
