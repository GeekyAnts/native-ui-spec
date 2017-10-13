import { Platform } from "react-native";

import { Content } from "../android/Content/Content";
import { ToolBar } from "../android/ToolBar/ToolBar";
import { BottomBar } from "../android/BottomBar/BottomBar";
import { StatusBar as AStatusBar } from "../android/StatusBar/StatusBar";
import { Text as AText } from "../android/Text/Text";
import { Icon as AIcon } from "../android/Icon/Icon";
import { Button as AButton } from "../android/Button/Button";
import { Badge as ABadge } from "../android/Badge/Badge";

import { NavigationBar } from "../ios/NavigationBar/NavigationBar";
import { TabBar } from "../ios/TabBar/TabBar";
import { Layout } from "../ios/Layout/Layout";
import { StatusBar } from "../ios/StatusBar/StatusBar";
import { Text } from "../ios/Text/Text";
import { Icon } from "../ios/Icon/Icon";
import { Button } from "../ios/Button/Button";
import { Badge } from "../ios/Badge/Badge";

import { CommonSpec as ICommonSpec } from "../../types/CommonSpec/index";
import { Content as ContentType } from "../../types/CommonSpec/Content";
import { Footer as FooterType } from "../../types/CommonSpec/Footer";
import { Header as HeaderType } from "../../types/CommonSpec/Header";
import { StatusBar as StatusBarType } from "../../types/CommonSpec/StatusBar";
import { Text as TextType } from "../../types/CommonSpec/Text";
import { Icon as IconType } from "../../types/CommonSpec/Icon";
import { Button as ButtonType } from "../../types/CommonSpec/Button";
import { Badge as BadgeType } from "../../types/CommonSpec/Badge";

export class CommonSpec implements ICommonSpec {
	Content: ContentType;
	Footer: FooterType;
	StatusBar: StatusBarType;
	Header: HeaderType;
	Text: TextType;
	Icon: IconType;
	Button: ButtonType;
	Badge: BadgeType;
	resolvePlatform = () => {
		if (Platform.OS === "ios") {
			this.Content = new Layout();
			this.Footer = new TabBar();
			this.Header = new NavigationBar();
			this.StatusBar = new StatusBar();
			this.Text = new Text();
			this.Icon = new Icon();
			this.Button = new Button();
			this.Badge = new Badge();
		} else if (Platform.OS === "android") {
			this.Content = new Content();
			this.Footer = new BottomBar();
			this.Header = new ToolBar();
			this.StatusBar = new AStatusBar();
			this.Text = new AText();
			this.Icon = new AIcon();
			this.Button = new AButton();
			this.Badge = new ABadge();
		}
	};
	constructor() {
		this.resolvePlatform();
	}
}
