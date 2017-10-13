export interface Text {
	style?: Style;
	note?: Note;
}

export interface Note {
	style: Style;
}

export interface Style {
	fontSize?: number;
	color?: string;
	fontWeight?: number | string;
	fontFamily?: string;
}
