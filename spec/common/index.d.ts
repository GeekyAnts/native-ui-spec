import { CommonSpec as ICommonSpec } from "../../types/CommonSpec/index";
import { Content as ContentType } from "../../types/CommonSpec/Content";
import { Footer as FooterType } from "../../types/CommonSpec/Footer";
import { Header as HeaderType } from "../../types/CommonSpec/Header";
import { StatusBar as StatusBarType } from "../../types/CommonSpec/StatusBar";
import { Text as TextType } from "../../types/CommonSpec/Text";
import { Icon as IconType } from "../../types/CommonSpec/Icon";
import { Button as ButtonType } from "../../types/CommonSpec/Button";
import { Badge as BadgeType } from "../../types/CommonSpec/Badge";
export declare class CommonSpec implements ICommonSpec {
    Content: ContentType;
    Footer: FooterType;
    StatusBar: StatusBarType;
    Header: HeaderType;
    Text: TextType;
    Icon: IconType;
    Button: ButtonType;
    Badge: BadgeType;
    resolvePlatform: () => void;
    constructor();
}
