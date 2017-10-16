export interface TableView {
	style?: Style;
	leading?: Leading;
	title?: Title;
	trailing?: Trailing;
}

export interface Style {
	height?: number;
	marginLeft?: number | string;
}

export interface Leading {
	style: {};
}

export interface Title {
	style: {};
}

export interface Trailing {
	style: {};
}
