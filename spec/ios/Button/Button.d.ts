import { Button as IButton } from "../../../types/IOSSpec/Button";
import { Variations } from "../../../types/CommonSpec/Button";
import { Text as IText } from "../../../types/IOSSpec/Text";
import { Icon as IIcon } from "../../../types/IOSSpec/Icon";
export declare class Button implements IButton {
    style: Object;
    Text?: IText;
    Icon?: IIcon;
    variations?: Variations;
    constructor();
}
