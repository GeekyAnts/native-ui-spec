type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

import { Text as IText } from "./Text";
export interface TabBar {
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
}

export interface Button {
	style?: {
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
		flex?: number;
		alignItems?: FlexAlignType;
		height?: number;
		backgroundColor?: string;
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
	};
	Text?: Text;
	Badge?: {
		style?: {
			backgroundColor?: string;
			position?: "absolute" | "relative";
			right?: number | string;
			top?: number | string;
			height?: number | string;
			width?: number | string;
			borderRadius?: number;
			alignItems?: FlexAlignType;
			justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
		};
		Text?: {
			style?: {
				fontSize?: number;
				color?: string;
			};
		};
	};
	Icon?: {
		style?: {
			fontSize?: number;
			color?: string;
			height?: number;
		};
		active?: {
			style?: {
				color?: string;
			};
		};
	};
}

export interface Text extends IText {
	active?: {
		style?: {
			color?: string;
		};
	};
}
