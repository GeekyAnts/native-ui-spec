import { Header as IHeader } from "../../../types/commonSpec/Header";
export class ToolBar implements IHeader {
	style: Object;
	constructor() {
		this.style = {
			height: 55,
			marginHorizontal: 10,
			backgroundColor: "blue",
		};
	}
}
