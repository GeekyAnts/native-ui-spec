import { Icon } from "./Icon";
import { Text } from "./Text";
export interface Button {
	style?: Style;
	Text?: Text;
	Icon?: Icon;
}

export interface Style {
	height?: number;
	paddingHorizontal?: number | string;
	paddingVertical?: number | string;
	backgroundColor?: string;
	borderWidth?: number;
	borderRadius?: number;
	borderColor?: string;
	shadowColor?: string;
	shadowOffset?: Object;
	shadowOpacity?: number;
	shadowRadius?: number;
	alignItems?: string;
}
