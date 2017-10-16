import { Button as IButton } from "../../../types/androidSpec/Button";
import { Variations } from "../../../types/CommonSpec/Button";
import { Text as IText } from "../../../types/androidSpec/Text";
import { Icon as IIcon } from "../../../types/CommonSpec/Button";
export declare class Button implements IButton {
    style: Object;
    Text?: IText;
    Icon?: IIcon;
    variations?: Variations;
    constructor();
}
