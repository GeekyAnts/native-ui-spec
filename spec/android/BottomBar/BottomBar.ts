import { Footer } from "../../../types/commonSpec/Footer";
export class BottomBar implements Footer {
	style: Object;
	constructor() {
		this.style = {
			backgroundColor: "#EEE",
			marginHorizontal: 10,
		};
	}
}
