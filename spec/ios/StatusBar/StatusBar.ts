export type StatusBarStyle = "default" | "light-content" | "dark-content";
import { StatusBar as IStatusBar } from "../../../types/commonSpec/StatusBar";
export class StatusBar implements IStatusBar {
	style: Object;
	barStyle: StatusBarStyle;
	constructor() {
		this.barStyle = "default";
		this.style = {
			height: 20,
			// marginHorizontal: 0,
		};
	}
}
