type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

import { Text } from "./Text";
export interface Header {
	style?: Style;
	leading?: Leading;
	title?: Title;
	trailing?: Trailing;
}

export interface Style {
	height?: number;
	paddingHorizontal?: number | string;
	paddingTop?: number | string;
	backgroundColor?: string;
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: FlexAlignType;
}

export interface Leading {
	style?: {
		flex?: number;
		alignItems?: FlexAlignType;
	};
	Button?: Button;
}

export interface Title {
	style?: {
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
		alignItems?: FlexAlignType;
	};
	Title?: {
		style?: {
			fontSize?: number;
			color?: string;
			fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
			fontFamily?: string;
		};
	};
	SubTitle?: {
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
		flex?: number;
		alignItems?: FlexAlignType;
	};
	Button?: Button;
}

export interface Button {
	style?: {
		alignItems?: FlexAlignType;
		backgroundColor?: string;
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	};
	Icon?: Icon;
	Text?: Text;
}

export interface Icon {
	style?: {
		fontSize?: number;
		color?: string;
		paddingLeft?: number;
		paddingRight?: number;
		top?: number;
	};
}
