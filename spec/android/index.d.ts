import { AndroidSpec as IAndroidSpec } from "../../types/AndroidSpec/index";
import { Content as ContentType } from "../../types/AndroidSpec/Content";
import { BottomBar as BottomBarType } from "../../types/AndroidSpec/BottomBar";
import { ToolBar as ToolBarType } from "../../types/AndroidSpec/ToolBar";
import { StatusBar as StatusBarType } from "../../types/AndroidSpec/StatusBar";
import { Text as TextType } from "../../types/CommonSpec/Text";
import { Icon as IconType } from "../../types/CommonSpec/Icon";
import { Button as ButtonType } from "../../types/CommonSpec/Button";
import { Badge as BadgeType } from "../../types/CommonSpec/Badge";
export declare class AndroidSpec implements IAndroidSpec {
    Content: ContentType;
    BottomBar: BottomBarType;
    StatusBar: StatusBarType;
    ToolBar: ToolBarType;
    Text: TextType;
    Icon: IconType;
    Button: ButtonType;
    Badge: BadgeType;
    constructor();
}
