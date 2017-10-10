import { IOSSpec as IIOSSpec } from "./types/IOSSpec/index.d";
import { AndroidSpec as IAndroidSpec } from "./types/AndroidSpec/index.d";
import { CommonSpec as ICommonSpec } from "./types/CommonSpec/index.d";
import { IOSSpec } from "./spec/ios/index";
import { AndroidSpec } from "./spec/android/index";
import { CommonSpec } from "./spec/common/index";

export class Specs {
	IOSSpec: IIOSSpec;
	AndroidSpec: IAndroidSpec;
	CommonSpec: ICommonSpec;
	constructor() {
		this.IOSSpec = new IOSSpec();
		this.AndroidSpec = new AndroidSpec();
		this.CommonSpec = new CommonSpec();
	}
}
export let Spec = new Specs();
