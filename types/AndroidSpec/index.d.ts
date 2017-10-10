import { StatusBar } from "./StatusBar.d";
import { ToolBar } from "./ToolBar.d";
import { Content } from "./Content.d";
import { BottomBar } from "./BottomBar.d";
export interface AndroidSpec {
	StatusBar: StatusBar;
	Content: Content;
	ToolBar: ToolBar;
	BottomBar: BottomBar;
}
