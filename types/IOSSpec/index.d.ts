import { StatusBar } from "./StatusBar.d";
import { TabBar } from "./TabBar.d";
import { Layout } from "./Layout.d";
import { NavigationBar } from "./NavigationBar.d";
import { Text } from "./Text.d";
import { Icon } from "./Icon.d";
import { Button } from "./Button.d";
export interface IOSSpec {
	StatusBar?: StatusBar;
	Layout?: Layout;
	TabBar?: TabBar;
	NavigationBar?: NavigationBar;
	Text?: Text;
	Icon?: Icon;
	Button?: Button;
}
