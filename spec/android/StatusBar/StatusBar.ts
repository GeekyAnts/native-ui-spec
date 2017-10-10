import { StatusBar as IStatusBar } from "../../../types/commonSpec/StatusBar";
export class StatusBar implements IStatusBar {
	style: Object;
	backgroundColor: string;
	constructor() {
		this.backgroundColor = "blue";
		this.style = {
			height: 20,
			marginHorizontal: 10,
		};
	}
}
