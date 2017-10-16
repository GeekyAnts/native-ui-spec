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
	disabled?: ButtonBGVariations;
	transparent?: TransparentButton;
}

export interface TransparentButton {
	style?: {
		backgroundColor?: string;
	};
	Icon?: {
		style?: {
			color?: string;
		};
	};
	Text?: {
		style?: {
			color?: string;
		};
	};
	primary?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	info?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	success?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	warning?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	danger?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	light?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	dark?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
	disabled?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
	};
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
	Text?: {
		style?: {
			fontSize?: number;
		};
	};
	Icon?: {
		style?: {
			fontSize?: number;
		};
	};
}

export interface BorderButton extends TransparentButton {
	style?: {
		borderWidth?: number;
		backgroundColor?: string;
		borderColor?: string;
	};
	primary?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	info?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	success?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	warning?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	danger?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	light?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	dark?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
		};
	};
	disabled?: {
		Icon?: {
			style?: {
				color?: string;
			};
		};
		Text?: {
			style?: {
				color?: string;
			};
		};
		style?: {
			borderWidth?: number;
			borderColor?: string;
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
		paddingRight?: number;
		paddingLeft?: number;
	};
}
