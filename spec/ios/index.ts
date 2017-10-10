import { Layout } from "./Layout/Layout";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { StatusBar } from "./StatusBar/StatusBar";
import { TabBar } from "./TabBar/TabBar";
import { Text } from "./Text/Text";
import { Icon } from "./Icon/Icon";
import { Button } from "./Button/Button";
import { IOSSpec as IIOSSpec } from "../../types/IOSSpec/index";
import { Content } from "../../types/CommonSpec/Content";
import { Footer } from "../../types/CommonSpec/Footer";
import { Header } from "../../types/CommonSpec/Header";
import { StatusBar as StatusBarType } from "../../types/CommonSpec/StatusBar";
import { Text as TextType } from "../../types/CommonSpec/Text";
import { Icon as IconType } from "../../types/CommonSpec/Icon";
import { Button as ButtonType } from "../../types/CommonSpec/Button";

export class IOSSpec implements IIOSSpec {
	Layout: Content;
	TabBar: Footer;
	StatusBar: StatusBarType;
	NavigationBar: Header;
	Text: TextType;
	Icon: IconType;
	Button: ButtonType;
	constructor() {
		this.Layout = new Layout();
		this.TabBar = new TabBar();
		this.NavigationBar = new NavigationBar();
		this.StatusBar = new StatusBar();
		this.Text = new Text();
		this.Icon = new Icon();
		this.Button = new Button();
	}
}
