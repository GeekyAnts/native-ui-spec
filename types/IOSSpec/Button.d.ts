import { Button as IButton } from "../CommonSpec/Button";
export interface Button extends IButton {
	shadowColor?: string;
	shadowOffset?: {
		width?: number;
		height?: number;
	};
	shadowOpacity?: number;
	shadowRadius?: number;
}
