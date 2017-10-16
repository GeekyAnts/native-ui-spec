type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

import { Text } from "./Text";
export interface Footer {
	style?: Style;
	Button?: Button;
}

export interface Style {
	backgroundColor?: string;
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: FlexAlignType;
	height?: number;
}

export interface Button {
	style?: {
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
		flex?: number;
		alignItems?: FlexAlignType;
		height?: number;
		backgroundColor?: string;
	};
	Text?: Text;
	Icon?: {
		style?: {
			fontSize?: number;
			color?: string;
			height?: number;
		};
	};
}
