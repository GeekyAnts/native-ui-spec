import { Header, Leading, Trailing, Title } from "../../../types/commonSpec/Header";
export class NavigationBar implements Header {
	style: Object;
	title: Title;
	leading: Leading;
	trailing: Trailing;
	constructor() {
		this.style = {
			height: 44,
			paddingHorizontal: 8,
			backgroundColor: "#EFEFF4",
			flexDirection: "row",
			borderBottomWidth: 1,
			borderBottomColor: "#CECED2",
		};
		this.title = {
			style: {
				flexDirection: "column",
				alignItems: "center",
			},
			Title: {
				style: {
					color: "#000",
					fontSize: 17,
					fontWeight: "600",
				},
			},
			SubTitle: {
				style: {
					color: "#8e8e93",
					fontSize: 12,
					fontWeight: "normal",
				},
			},
		};
		this.leading = {
			style: {
				alignItems: "flex-start",
				flex: 1,
			},
			Button: {
				style: {
					alignItems: "center",
					backgroundColor: "transparent",
					flexDirection: "row",
				},
				Text: {
					style: {
						color: "#0076ff",
						fontSize: 17,
						fontWeight: "normal",
					},
				},
				Icon: {
					style: {
						color: "#0076ff",
						fontSize: 30,
						top: 1,
						paddingRight: 5,
						paddingLeft: 5,
					},
				},
			},
		};
		this.trailing = {
			style: {
				alignItems: "flex-end",
				flex: 1,
			},
			Button: {
				style: {
					alignItems: "center",
					backgroundColor: "transparent",
					flexDirection: "row",
				},
				Text: {
					style: {
						color: "#0076ff",
						fontSize: 17,
						fontWeight: "normal",
					},
				},
				Icon: {
					style: {
						color: "#0076ff",
						fontSize: 30,
						top: 1,
						paddingRight: 5,
						paddingLeft: 5,
					},
				},
			},
		};
	}
}
