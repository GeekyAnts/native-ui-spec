import { StatusBar } from "../CommonSpec/StatusBar";
export type StatusBarStyle = "default" | "light-content" | "dark-content";

export interface StatusBar extends StatusBar {
	barStyle?: StatusBarStyle;
}
