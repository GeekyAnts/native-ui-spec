import { Content } from "./Content/Content";
import { ToolBar } from "./ToolBar/ToolBar";
import { StatusBar } from "./StatusBar/StatusBar";
import { BottomBar } from "./BottomBar/BottomBar";
import { AndroidSpec as IAndroidSpec } from "../../types/AndroidSpec/index";
import { Content as ContentType } from "../../types/AndroidSpec/Content";
import { BottomBar as BottomBarType } from "../../types/AndroidSpec/BottomBar";
import { ToolBar as ToolBarType } from "../../types/AndroidSpec/ToolBar";
import { StatusBar as StatusBarType } from "../../types/AndroidSpec/StatusBar";

export class AndroidSpec implements IAndroidSpec {
	Content: ContentType;
	BottomBar: BottomBarType;
	StatusBar: StatusBarType;
	ToolBar: ToolBarType;
	constructor() {
		this.Content = new Content();
		this.BottomBar = new BottomBar();
		this.ToolBar = new ToolBar();
		this.StatusBar = new StatusBar();
	}
}
