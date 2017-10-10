import { StatusBar } from "./StatusBar.d";
import { Header } from "./Header.d";
import { Content } from "./Content.d";
import { Footer } from "./Footer.d";
export interface CommonSpec {
	StatusBar: StatusBar;
	Content: Content;
	Header: Header;
	Footer: Footer;
}
