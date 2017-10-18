type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

import { Text as IText } from "./Text";
export interface Toolbar {
	style?: Style;
	Button?: Button;
}

export interface Style {
	backgroundColor?: string;
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: FlexAlignType;
	height?: number;
	borderTopWidth?: number;
	borderTopColor?: string;
	position?: "absolute" | "relative";
	bottom?: number;
	left?: number;
	right?: number;
}

export interface Button {
	style?: {
		flex?: number;
		alignItems?: FlexAlignType;
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
		backgroundColor?: string;
	};
	Icon?: {
		style?: {
			fontSize?: number;
			color?: string;
			backgroundColor?: string;
		};
	};
}
