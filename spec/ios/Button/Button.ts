import { Button as IButton } from "../../../types/IOSSpec/Button";
import { Variations } from "../../../types/CommonSpec/Button";
import { Text as IText } from "../../../types/IOSSpec/Text";
import { Icon as IIcon } from "../../../types/CommonSpec/Button";
export class Button implements IButton {
	style: Object;
	Text?: IText;
	Icon?: IIcon;
	variations?: Variations;
	constructor() {
		this.style = {
			height: 44,
			backgroundColor: "#007AFF",
			borderRadius: 5,
			alignSelf: "flex-start",
			alignItems: "center",
			justifyContent: "center",
			paddingVertical: 6,
			paddingHorizontal: 16,
			shadowColor: "#000",
			shadowOffset: {
				width: 0,
				height: 2,
			},
			shadowOpacity: 0.2,
			shadowRadius: 1.2,
			flexDirection: "row",
		};
		this.Icon = {
			style: {
				color: "#FFF",
				fontSize: 30,
				paddingRight: 8,
				paddingLeft: 8,
			},
		};
		this.Text = {
			style: {
				fontSize: 17,
				color: "#FFF",
				fontWeight: "normal",
				fontFamily: "System",
			},
		};
		this.variations = {
			primary: {
				style: {
					backgroundColor: "#0076ff",
				},
			},
			info: {
				style: {
					backgroundColor: "#54c7fc",
				},
			},
			success: {
				style: {
					backgroundColor: "#44db5e",
				},
			},
			danger: {
				style: {
					backgroundColor: "#ff3824",
				},
			},
			dark: {
				style: {
					backgroundColor: "#000",
				},
			},
			light: {
				style: {
					backgroundColor: "#f4f4f4",
				},
			},
			disabled: {
				style: {
					backgroundColor: "#8e8e93",
				},
			},
			warning: {
				style: {
					backgroundColor: "#ffcd00",
				},
			},
			small: {
				style: {
					height: 30,
				},
				Text: {
					style: {
						fontSize: 14,
					},
				},
				Icon: {
					style: {
						fontSize: 22,
					},
				},
			},
			large: {
				style: {
					height: 60,
				},
				Text: {
					style: {
						fontSize: 22,
					},
				},
				Icon: {
					style: {
						fontSize: 40,
					},
				},
			},
			block: {
				style: {
					alignSelf: "stretch",
				},
			},
			full: {
				style: {
					alignSelf: "stretch",
					borderRadius: 0,
				},
			},
			transparent: {
				style: {
					backgroundColor: "transparent",
				},
				Icon: {
					style: {
						color: "#0076ff",
					},
				},
				Text: {
					style: {
						color: "#0076ff",
					},
				},
				primary: {
					Icon: {
						style: {
							color: "#0076ff",
						},
					},
					Text: {
						style: {
							color: "#0076ff",
						},
					},
				},
				info: {
					Icon: {
						style: {
							color: "#54c7fc",
						},
					},
					Text: {
						style: {
							color: "#54c7fc",
						},
					},
				},
				warning: {
					Icon: {
						style: {
							color: "#ffcd00",
						},
					},
					Text: {
						style: {
							color: "#ffcd00",
						},
					},
				},
				success: {
					Icon: {
						style: {
							color: "#44db5e",
						},
					},
					Text: {
						style: {
							color: "#44db5e",
						},
					},
				},
				danger: {
					Icon: {
						style: {
							color: "#ff3824",
						},
					},
					Text: {
						style: {
							color: "#ff3824",
						},
					},
				},
				light: {
					Icon: {
						style: {
							color: "#f4f4f4",
						},
					},
					Text: {
						style: {
							color: "#f4f4f4",
						},
					},
				},
				dark: {
					Icon: {
						style: {
							color: "#000",
						},
					},
					Text: {
						style: {
							color: "#000",
						},
					},
				},
				disabled: {
					Icon: {
						style: {
							color: "#8e8e93",
						},
					},
					Text: {
						style: {
							color: "#8e8e93",
						},
					},
				},
			},
			bordered: {
				style: {
					backgroundColor: "transparent",
					borderWidth: 1,
					borderColor: "#0076ff",
				},
				Icon: {
					style: {
						color: "#0076ff",
					},
				},
				Text: {
					style: {
						color: "#0076ff",
					},
				},
				primary: {
					style: {
						borderWidth: 1,
						borderColor: "#0076ff",
					},
					Icon: {
						style: {
							color: "#0076ff",
						},
					},
					Text: {
						style: {
							color: "#0076ff",
						},
					},
				},
				info: {
					Icon: {
						style: {
							color: "#54c7fc",
						},
					},
					Text: {
						style: {
							color: "#54c7fc",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#54c7fc",
					},
				},
				warning: {
					Icon: {
						style: {
							color: "#ffcd00",
						},
					},
					Text: {
						style: {
							color: "#ffcd00",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#ffcd00",
					},
				},
				success: {
					Icon: {
						style: {
							color: "#44db5e",
						},
					},
					Text: {
						style: {
							color: "#44db5e",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#44db5e",
					},
				},
				danger: {
					Icon: {
						style: {
							color: "#ff3824",
						},
					},
					Text: {
						style: {
							color: "#ff3824",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#ff3824",
					},
				},
				light: {
					Icon: {
						style: {
							color: "#f4f4f4",
						},
					},
					Text: {
						style: {
							color: "#f4f4f4",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#f4f4f4",
					},
				},
				dark: {
					Icon: {
						style: {
							color: "#000",
						},
					},
					Text: {
						style: {
							color: "#000",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#000",
					},
				},
				disabled: {
					Icon: {
						style: {
							color: "#8e8e93",
						},
					},
					Text: {
						style: {
							color: "#8e8e93",
						},
					},
					style: {
						borderWidth: 1,
						borderColor: "#8e8e93",
					},
				},
			},
			rounded: {
				style: {
					borderRadius: 50,
				},
			},
		};
	}
}
