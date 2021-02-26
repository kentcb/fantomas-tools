import { Union } from "../fable-library.3.1.1/Types.js";
import { union_type, obj_type, list_type, class_type, string_type } from "../fable-library.3.1.1/Reflection.js";
import { keyValueList } from "../fable-library.3.1.1/MapUtil.js";
import { choose, collect } from "../fable-library.3.1.1/Seq.js";
import { empty } from "../fable-library.3.1.1/List.js";
import * as react from "../../../../_snowpack/pkg/react.js";
import { InputGroupAddon } from "../../../../_snowpack/pkg/reactstrap.js";

export class InputGroupAddonProps extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["AddonType", "Custom", "Tag"];
    }
}

export function InputGroupAddonProps$reflection() {
    return union_type("Reactstrap.InputGroupAddon.InputGroupAddonProps", [], InputGroupAddonProps, () => [[["Item", string_type]], [["Item", list_type(class_type("Fable.React.Props.IHTMLProp"))]], [["Item", obj_type]]]);
}

export function inputGroupAddon(props, elems) {
    const customProps = keyValueList(collect((_arg1) => {
        if (_arg1.tag === 1) {
            return _arg1.fields[0];
        }
        else {
            return empty();
        }
    }, props), 1);
    const typeProps = keyValueList(choose((_arg2) => {
        if (_arg2.tag === 1) {
            return void 0;
        }
        else {
            return _arg2;
        }
    }, props), 1);
    return react.createElement(InputGroupAddon, Object.assign({}, customProps, typeProps), ...elems);
}
