type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
export interface Button {
	style?: Style;
	Text?: Text;
	Icon?: Icon;
	variations?: Variations;
}

export interface Variations {
	block?: {
		style?: {
			alignSelf?: "auto" | FlexAlignType;
		};
	};
	full?: {
		style?: {
			alignSelf?: "auto" | FlexAlignType;
			borderRadius?: number;
		};
	};
	bordered?: BorderButton;
	small?: ButtonHeightVariations;
	large?: ButtonHeightVariations;
	rounded?: {
		style?: {
			borderRadius?: number;
		};
	};
	primary?: ButtonBGVariations;
	info?: ButtonBGVariations;
	success?: ButtonBGVariations;
	danger?: ButtonBGVariations;
	dark?: ButtonBGVariations;
	light?: ButtonBGVariations;
	warning?: ButtonBGVariations;
}

export interface ButtonBGVariations {
	style?: {
		backgroundColor?: string;
	};
}

export interface ButtonHeightVariations {
	style?: {
		height?: number;
	};
}

export interface BorderButton {
	style?: {
		borderWidth?: number;
		backgroundColor?: string;
		borderColor?: string;
	};
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
}

export interface Style {
	height?: number;
	paddingVertical?: number | string;
	paddingHorizontal?: number | string;
	backgroundColor?: string;
	borderRadius?: number;
	alignItems?: FlexAlignType;
	alignSelf?: "auto" | FlexAlignType;
	justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
	flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
}

export interface Text {
	style?: {
		fontFamily?: string;
		color?: string;
		fontSize?: number;
		fontWeight?: string | number;
	};
}

export interface Icon {
	style?: {
		color?: string;
		fontSize?: number;
		marginHorizontal?: number;
	};
}
