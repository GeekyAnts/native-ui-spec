type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

import { Text as IText } from "./Text";
export interface BottomBar {
	style?: Style;
	Button?: Button;
}

export interface Style {
	backgroundColor?: string;
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: FlexAlignType;
	height?: number;
	elevation?: number;
}

export interface Button {
	style?: {
		flex?: number;
		alignItems?: FlexAlignType;
		height?: number;
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
	};
	Text?: IText;
	// Badge?: {
	// 	style?: {
	// 		backgroundColor?: string;
	// 		position?: "absolute" | "relative";
	// 		right?: number | string;
	// 		top?: number | string;
	// 		height?: number | string;
	// 		width?: number | string;
	// 		borderRadius?: number;
	// 		alignItems?: FlexAlignType;
	// 		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
	// 	};
	// 	Text?: {
	// 		style?: {
	// 			fontSize?: number;
	// 			color?: string;
	// 		};
	// 	};
	// };
	Icon?: {
		style?: {
			fontSize?: number;
			color?: string;
		};
	};
	active?: {
		Text?: {
			style?: {
				color?: string;
				fontSize?: number;
			};
		};
		Icon?: {
			style?: {
				color?: string;
			};
		};
	};
}
