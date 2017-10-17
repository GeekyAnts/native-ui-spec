import { AndroidSpec as IAndroidSpec } from "../../types/AndroidSpec/index";
import { Content as ContentType } from "../../types/AndroidSpec/Content";
import { BottomBar as BottomBarType } from "../../types/AndroidSpec/BottomBar";
import { ToolBar as ToolBarType } from "../../types/AndroidSpec/ToolBar";
import { StatusBar as StatusBarType } from "../../types/AndroidSpec/StatusBar";
import { Text as TextType } from "../../types/AndroidSpec/Text";
import { Icon as IconType } from "../../types/AndroidSpec/Icon";
import { Button as ButtonType } from "../../types/AndroidSpec/Button";
import { Badge as BadgeType } from "../../types/CommonSpec/Badge";
import { ListItem as ListItemType } from "../../types/AndroidSpec/ListItem";
export declare class AndroidSpec implements IAndroidSpec {
    Content: ContentType;
    BottomBar: BottomBarType;
    StatusBar: StatusBarType;
    ToolBar: ToolBarType;
    Text: TextType;
    Icon: IconType;
    Button: ButtonType;
    Badge: BadgeType;
    ListItem: ListItemType;
    constructor();
}
