type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";

export interface TableView {
	style?: Style;
	leading?: Leading;
	title?: Title;
	trailing?: Trailing;
	variation?: Variation;
}

export interface Style {
	height?: number;
	backgroundColor?: string;
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
	alignItems?: FlexAlignType;
	paddingLeft?: number;
}

export interface Leading {
	style?: {
		width?: number;
		height?: number;
		alignItems?: FlexAlignType;
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
		backgroundColor?: string;
		marginRight?: number;
		borderRadius?: number;
	};
	Icon?: {
		style?: {
			color?: string;
			fontSize?: number;
		};
	};
}

export interface Title {
	style?: {
		borderBottomWidth?: number;
		borderBottomColor?: string;
		height?: number;
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
		flex?: number;
	};
	Text?: {
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
		borderBottomWidth?: number;
		borderBottomColor?: string;
		height?: number;
		alignItems?: FlexAlignType;
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
		paddingRight?: number;
	};
	Icon?: {
		style?: {
			color?: string;
			fontSize?: number;
		};
	};
	Text?: {
		style?: {
			fontSize?: number;
			color?: string;
			fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
			fontFamily?: string;
			paddingRight?: number;
		};
	};
}

export interface Variation {
	grouped?: {
		header?: {
			style?: {
				height?: number;
				backgroundColor?: string;
				paddingLeft?: number;
				alignItems?: FlexAlignType;
			};
			Text?: {
				style?: {
					fontSize?: number;
					color?: string;
					fontWeight?:
						| "normal"
						| "bold"
						| "100"
						| "200"
						| "300"
						| "400"
						| "500"
						| "600"
						| "700"
						| "800"
						| "900";
					fontFamily?: string;
					top?: number;
				};
			};
		};
		footer?: {
			style?: {
				height?: number;
				backgroundColor?: string;
				flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
				paddingLeft?: number;
			};
			Text?: {
				style?: {
					fontSize?: number;
					color?: string;
					fontWeight?:
						| "normal"
						| "bold"
						| "100"
						| "200"
						| "300"
						| "400"
						| "500"
						| "600"
						| "700"
						| "800"
						| "900";
					fontFamily?: string;
					top?: number;
				};
			};
		};
	};
	subtitle?: {
		Text?: {
			style?: {
				fontSize?: number;
			};
			note?: {
				style?: {
					fontSize?: number;
					color?: string;
				};
			};
		};
	};
	large?: {
		style?: {
			height?: number;
		};
	};
}
