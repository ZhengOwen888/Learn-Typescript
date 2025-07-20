// Modules import/export
import { simple as complexFunc} from "../math/complex/util";
import simpleFunc from "../math/simple/util";

// Namespaces
namespace Utils {
    export class MyClass {

    }

    export function myFunc() {
        return {name: NAME}
    }

    export const NAME = "Joe";

    export interface NewType {
        name: string;
    }
}

const result: Utils.NewType = Utils.myFunc();