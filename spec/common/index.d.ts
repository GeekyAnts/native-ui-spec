import { CommonSpec as ICommonSpec } from "../../types/CommonSpec/index";
import { Content as ContentType } from "../../types/CommonSpec/Content";
import { Footer as FooterType } from "../../types/CommonSpec/Footer";
import { Header as HeaderType } from "../../types/CommonSpec/Header";
import { StatusBar as StatusBarType } from "../../types/CommonSpec/StatusBar";
export declare class CommonSpec implements ICommonSpec {
    Content: ContentType;
    Footer: FooterType;
    StatusBar: StatusBarType;
    Header: HeaderType;
    resolvePlatform: () => void;
    constructor();
}
