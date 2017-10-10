import { AndroidSpec as IAndroidSpec } from "../../types/AndroidSpec/index";
import { Content as ContentType } from "../../types/AndroidSpec/Content";
import { BottomBar as BottomBarType } from "../../types/AndroidSpec/BottomBar";
import { ToolBar as ToolBarType } from "../../types/AndroidSpec/ToolBar";
import { StatusBar as StatusBarType } from "../../types/AndroidSpec/StatusBar";
export declare class AndroidSpec implements IAndroidSpec {
    Content: ContentType;
    BottomBar: BottomBarType;
    StatusBar: StatusBarType;
    ToolBar: ToolBarType;
    constructor();
}
