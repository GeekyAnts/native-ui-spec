type FlexAlignType = "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
import { Button as IButton } from "../CommonSpec/Button";
export interface Button extends IButton {
	style?: {
		height?: number;
		paddingVertical?: number | string;
		paddingHorizontal?: number | string;
		backgroundColor?: string;
		borderRadius?: number;
		alignItems?: FlexAlignType;
		alignSelf?: "auto" | FlexAlignType;
		justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around";
		flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
		shadowColor?: string;
		shadowOffset?: {
			width?: number;
			height?: number;
		};
		shadowOpacity?: number;
		shadowRadius?: number;
		marginHorizontal?: number;
	};
}
