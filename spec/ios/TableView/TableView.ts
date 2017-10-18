import { TableView as ITableView, Leading, Trailing, Title, Variation } from "../../../types/IOSSpec/TableView";
export class TableView implements ITableView {
	style: Object;
	title: Title;
	leading: Leading;
	trailing: Trailing;
	variation: Variation;
	constructor() {
		this.style = {
			height: 43,
			backgroundColor: "#FFF",
			flexDirection: "row",
			alignItems: "center",
			paddingLeft: 15,
		};
		this.title = {
			style: {
				flex: 1,
				height: 43,
				justifyContent: "center",
				borderBottomWidth: 0.6,
				borderBottomColor: "#CECED2",
			},
			Text: {
				style: {
					color: "#000",
					fontSize: 17,
					fontWeight: "normal",
				},
			},
		};
		this.leading = {
			style: {
				width: 29,
				height: 29,
				alignItems: "center",
				justifyContent: "center",
				borderRadius: 5,
				backgroundColor: "#0076ff",
				marginRight: 15,
			},
			Icon: {
				style: {
					color: "#FFF",
					fontSize: 22,
				},
			},
		};
		this.trailing = {
			style: {
				borderBottomWidth: 0.6,
				borderBottomColor: "#CECED2",
				height: 43,
				alignItems: "center",
				flexDirection: "row",
				paddingRight: 15,
			},
			Icon: {
				style: {
					color: "#CECED2",
					fontSize: 24,
				},
			},
			Text: {
				style: {
					color: "#8e8e93",
					fontSize: 17,
					fontWeight: "normal",
					paddingRight: 8,
				},
			},
		};
		this.variation = {
			grouped: {
				header: {
					style: {
						height: 40,
						backgroundColor: "#EFEFF4",
						paddingLeft: 15,
						alignItems: "center",
					},
					Text: {
						style: {
							fontSize: 13,
							color: "#8e8e93",
							top: 5,
							fontWeight: "normal",
						},
					},
				},
				footer: {
					style: {
						height: 60,
						backgroundColor: "#EFEFF4",
						paddingLeft: 15,
					},
					Text: {
						style: {
							fontSize: 13,
							color: "#8e8e93",
							top: 8,
							fontWeight: "normal",
						},
					},
				},
			},
			subtitle: {
				Text: {
					style: {
						fontSize: 15,
					},
					note: {
						style: {
							fontSize: 13,
							color: "#8e8e93",
						},
					},
				},
			},
			large: {
				style: {
					height: 60,
				},
			},
		};
	}
}
