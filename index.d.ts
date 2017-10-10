import { IOSSpec as IIOSSpec } from "./types/IOSSpec/index.d";
import { AndroidSpec as IAndroidSpec } from "./types/AndroidSpec/index.d";
import { CommonSpec as ICommonSpec } from "./types/CommonSpec/index.d";
export declare class Specs {
    IOSSpec: IIOSSpec;
    AndroidSpec: IAndroidSpec;
    CommonSpec: ICommonSpec;
    constructor();
}
export declare let Spec: Specs;
