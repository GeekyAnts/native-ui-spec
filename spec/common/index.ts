import { Platform } from "react-native";
import { Layout } from "../ios/Layout/Layout";
import { Content } from "../android/Content/Content";
import { NavigationBar } from "../ios/NavigationBar/NavigationBar";
import { ToolBar } from "../android/ToolBar/ToolBar";
import { TabBar } from "../ios/TabBar/TabBar";
import { BottomBar } from "../android/BottomBar/BottomBar";
import { StatusBar } from "../ios/StatusBar/StatusBar";
import { StatusBar as AStatusBar } from "../android/StatusBar/StatusBar";
import { CommonSpec as ICommonSpec } from "../../types/CommonSpec/index";
import { Content as ContentType } from "../../types/CommonSpec/Content";
import { Footer as FooterType } from "../../types/CommonSpec/Footer";
import { Header as HeaderType } from "../../types/CommonSpec/Header";
import { StatusBar as StatusBarType } from "../../types/CommonSpec/StatusBar";

export class CommonSpec implements ICommonSpec {
	Content: ContentType;
	Footer: FooterType;
	StatusBar: StatusBarType;
	Header: HeaderType;
	resolvePlatform = () => {
		if (Platform.OS === "ios") {
			this.Content = new Layout();
			this.Footer = new TabBar();
			this.Header = new NavigationBar();
			this.StatusBar = new StatusBar();
		} else if (Platform.OS === "android") {
			this.Content = new Content();
			this.Footer = new BottomBar();
			this.Header = new ToolBar();
			this.StatusBar = new AStatusBar();
		}
	};
	constructor() {
		this.resolvePlatform();
	}
}
