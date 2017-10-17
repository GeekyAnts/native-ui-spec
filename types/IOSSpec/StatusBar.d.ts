export type StatusBarStyle = "default" | "light-content" | "dark-content";

export interface StatusBar {
	barStyle?: StatusBarStyle;
	style?: Style;
}
export interface Style {
	height?: number;
	marginHorizontal?: number | string;
}
