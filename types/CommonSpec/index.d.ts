import { StatusBar } from "./StatusBar.d";
import { Header } from "./Header.d";
import { Content } from "./Content.d";
import { Footer } from "./Footer.d";
import { Text } from "./Text";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Badge } from "./Badge";
export interface CommonSpec {
	StatusBar: StatusBar;
	Content: Content;
	Header: Header;
	Footer: Footer;
	Text: Text;
	Icon: Icon;
	Button: Button;
	Badge: Badge;
}
