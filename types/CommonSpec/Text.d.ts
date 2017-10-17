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
	fontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
	fontFamily?: string;
}
