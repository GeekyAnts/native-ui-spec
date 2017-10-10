import { Header } from "../../../types/commonSpec/Header";
export class NavigationBar implements Header {
	style: Object;
	constructor() {
		this.style = {
			height: 44,
			paddingHorizontal: 8,
			backgroundColor: "#EEE",
		};
	}
}
