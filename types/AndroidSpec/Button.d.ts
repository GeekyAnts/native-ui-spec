type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
export interface Button {
	style?: Style;
	background?: string;
	Text?: Text;
	Icon?: Icon;
	variation?: Variation;
}

export interface Variation {
	Flat?: {
		style?: {
			backgroundColor?: string;
			elevation?: number;
		};
		background?: string;
		Text?: {
			style?: {
				color?: string;
			};
		};
		Icon?: {
			style?: {
				color?: string;
			};
		};
	};
	Disabled?: {
		style?: {
			backgroundColor?: string;
			elevation?: number;
		};
		background?: string;
		Text?: {
			style?: {
				color?: string;
			};
		};
		Icon?: {
			style?: {
				color?: string;
			};
		};
	};
	Floating?: {
		style?: {
			height?: number;
			width?: number;
			backgroundColor?: string;
			borderRadius?: number;
			alignItems?: FlexAlignType;
			justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
			elevation?: number;
		};
		background?: string;
		Icon?: {
			style?: {
				fontSize?: number;
				color?: string;
			};
		};
	};
}

export interface Style {
	height?: number;
	paddingHorizontal?: number | string;
	backgroundColor?: string;
	borderRadius?: number;
	alignItems?: FlexAlignType;
	alignSelf?: "auto" | FlexAlignType;
	justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	elevation?: number;
}

export interface Text {
	style?: {
		fontSize?: number;
		color?: string;
		fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
		fontFamily?: string;
	};
}

export interface Icon {
	style?: {
		fontSize?: number;
		color?: string;
		paddingLeft?: number;
		paddingRight?: number;
	};
}
