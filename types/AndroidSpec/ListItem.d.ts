type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

import { Text } from "./Text";
export interface ListItem {
	style?: Style;
	leading?: Leading;
	title?: Title;
	trailing?: Trailing;
}

export interface Style {
	height?: number;
	paddingHorizontal?: number | string;
	backgroundColor?: string;
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: FlexAlignType;
	elevation?: number;
}

export interface Leading {
	style?: {
		width?: number;
		alignItems?: FlexAlignType;
	};
	Button?: Button;
}

export interface Title {
	style?: {
		flex?: number;
		marginLeft?: number;
	};
	Title?: {
		style?: {
			fontSize?: number;
			color?: string;
			fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
			fontFamily?: string;
		};
	};
}

export interface Trailing {
	style?: {
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
		alignItems?: FlexAlignType;
	};
	Button?: Button;
}

export interface Button {
	background?: string;
	style?: {
		paddingHorizontal?: number;
		paddingVertical?: number;
	};
	Icon?: Icon;
}

export interface Icon {
	style?: {
		fontSize?: number;
		color?: string;
	};
}
