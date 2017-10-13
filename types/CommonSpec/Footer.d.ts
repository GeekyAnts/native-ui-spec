import { Text } from "./Text";
import { Icon } from "./Icon";
export interface Footer {
	style?: Style;
	Button?: Button;
	Text?: Text;
	Icon?: Icon;
}

export interface Style {
	marginHorizontal?: number | string;
	backgroundColor?: string;
	flexDirection?: string;
	justifyContent?: string;
	height?: number;
	// elevation?: number; // for android
}

export interface Button {
	style?: {
		alignSelf?: string;
		flex?: number;
	};
}
