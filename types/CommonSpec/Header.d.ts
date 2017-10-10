import { Icon } from "./Icon";
import { Text } from "./Text";
import { Title } from "./Title";
import { Button } from "./Button";
export interface Header {
	style?: Style;
	Text?: Text;
	Icon?: Icon;
	Title?: Title;
	Button?: Button;
}

export interface Style {
	height?: number;
	paddingHorizontal?: number | string;
	paddingVertical?: number | string;
	backgroundColor?: string;
}
