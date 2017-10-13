export interface Badge {
	style?: Style;
	Text?: Text;
}

export interface Style {
	backgroundColor?: string;
	padding?: number;
	paddingHorizontal?: number;
	alignSelf?: string;
	height?: number;
	borderRadius?: number;
}

export interface Text {
	style?: {
		color?: string;
		fontSize?: number;
		paddingHorizontal?: number;
		textAlign?: string;
		// lineHeight?: number;
	};
}
