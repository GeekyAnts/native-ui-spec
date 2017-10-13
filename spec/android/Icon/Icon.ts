import { Icon as IIcon } from "../../../types/commonSpec/Icon";
export class Icon implements IIcon {
	style: Object;
	constructor() {
		this.style = {
			fontSize: 29,
			color: "#000",
		};
	}
}
