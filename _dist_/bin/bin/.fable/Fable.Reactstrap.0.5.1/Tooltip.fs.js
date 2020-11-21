import { Union } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/Types.js";
import { union_type, list_type, class_type, lambda_type, unit_type, bool_type, obj_type, string_type } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/Reflection.js";
import { choose, collect } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/Seq.js";
import { empty } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/List.js";
import { keyValueList } from "../../../.fable/fable-library.3.0.0-nagareyama-rc-008/MapUtil.js";
import * as react from "../../../../../web_modules/react.js";
import { Tooltip } from "../../../../../web_modules/reactstrap.js";

export class TooltipProps extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Trigger", "BoundariesElement", "IsOpen", "HideArrow", "Toggle", "Target", "Container", "Delay", "InnerClassName", "ArrowClassName", "Autohide", "Placement", "Modifiers", "Offset", "InnerRef", "Fade", "Flip", "Custom"];
    }
}

export function TooltipProps$reflection() {
    return union_type("Reactstrap.Tooltip.TooltipProps", [], TooltipProps, () => [[["Item", string_type]], [["Item", obj_type]], [["Item", bool_type]], [["Item", bool_type]], [["Item", lambda_type(unit_type, unit_type)]], [["Item", obj_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", string_type]], [["Item", string_type]], [["Item", bool_type]], [["Item", string_type]], [["Item", obj_type]], [["Item", obj_type]], [["Item", lambda_type(class_type("Browser.Types.Element"), unit_type)]], [["Item", bool_type]], [["Item", bool_type]], [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]]]);
}

export function tooltip(props, elems) {
    let customProps;
    let li;
    li = collect((_arg1) => {
        if (_arg1.tag === 17) {
            return _arg1.fields[0];
        }
        else {
            return empty();
        }
    }, props);
    customProps = keyValueList(li, 1);
    let typeProps;
    let li_1;
    li_1 = choose((_arg2) => {
        if (_arg2.tag === 17) {
            return void 0;
        }
        else {
            return _arg2;
        }
    }, props);
    typeProps = keyValueList(li_1, 1);
    const props_2 = Object.assign({}, customProps, typeProps);
    return react.createElement(Tooltip, props_2, ...elems);
}

