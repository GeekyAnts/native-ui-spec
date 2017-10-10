export declare type StatusBarStyle = "default" | "light-content" | "dark-content";
import { StatusBar as IStatusBar } from "../../../types/commonSpec/StatusBar";
export declare class StatusBar implements IStatusBar {
    style: Object;
    barStyle: StatusBarStyle;
    constructor();
}
