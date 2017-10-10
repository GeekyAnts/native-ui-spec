import { Icon } from "./Icon";
export interface Toolbar {
	style?: Style;
	Icon?: Icon;
}

export interface Style {
	marginHorizontal?: number | string;
	backgroundColor?: string;
}
