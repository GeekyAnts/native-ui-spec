import { Content } from "./Content/Content";
import { ToolBar } from "./ToolBar/ToolBar";
import { StatusBar } from "./StatusBar/StatusBar";
import { BottomBar } from "./BottomBar/BottomBar";
import { Text } from "./Text/Text";
import { Icon } from "./Icon/Icon";
import { Button } from "./Button/Button";
import { Badge } from "./Badge/Badge";
import { ListItem } from "./ListItem/ListItem";

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

export class AndroidSpec implements IAndroidSpec {
	Content: ContentType;
	BottomBar: BottomBarType;
	StatusBar: StatusBarType;
	ToolBar: ToolBarType;
	Text: TextType;
	Icon: IconType;
	Button: ButtonType;
	Badge: BadgeType;
	ListItem: ListItemType;
	constructor() {
		this.Content = new Content();
		this.BottomBar = new BottomBar();
		this.ToolBar = new ToolBar();
		this.StatusBar = new StatusBar();
		this.Text = new Text();
		this.Icon = new Icon();
		this.Button = new Button();
		this.Badge = new Badge();
		this.ListItem = new ListItem();
	}
}
