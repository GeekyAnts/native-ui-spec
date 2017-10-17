import { ListItem as IListItem, Leading, Trailing, Title } from "../../../types/AndroidSpec/ListItem";
export class ListItem implements IListItem {
	style: Object;
	title: Title;
	leading: Leading;
	trailing: Trailing;
	constructor() {
		this.style = {
			height: 72,
			paddingHorizontal: 6,
			backgroundColor: "#3F51B5",
			flexDirection: "row",
			alignItems: "center",
			elevation: 4,
		};
		this.title = {
			style: {
				flex: 1,
				marginLeft: 16,
			},
			Title: {
				style: {
					color: "#FFF",
					fontSize: 20,
					fontWeight: "600",
				},
			},
		};
		this.leading = {
			style: {
				alignItems: "center",
				width: 38,
			},
			Button: {
				background: "rgba(255,255,255,0.3)",
				style: {
					paddingHorizontal: 10,
					paddingVertical: 8,
				},
				Icon: {
					style: {
						color: "#FFF",
						fontSize: 24,
					},
				},
			},
		};
		this.trailing = {
			style: {
				alignItems: "flex-end",
				flexDirection: "row",
			},
			Button: {
				style: {
					paddingHorizontal: 10,
					paddingVertical: 8,
				},
				Icon: {
					style: {
						color: "#FFF",
						fontSize: 24,
					},
				},
			},
		};
	}
}
