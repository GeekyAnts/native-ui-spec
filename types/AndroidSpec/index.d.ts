import { StatusBar } from "./StatusBar.d";
import { ToolBar } from "./ToolBar.d";
import { Content } from "./Content.d";
import { BottomBar } from "./BottomBar.d";
import { Text } from "./Text.d";
import { Icon } from "./Icon.d";
import { Button } from "./Button.d";
import { ListItem } from "./ListItem.d";
export interface AndroidSpec {
	StatusBar: StatusBar;
	Content: Content;
	ToolBar: ToolBar;
	BottomBar: BottomBar;
	Text?: Text;
	Icon?: Icon;
	Button?: Button;
	ListItem?: ListItem;
}
