import React, { PureComponent } from "react";
import { withParams } from "../../../utils/Params/componentWithParams";

class UIHeaderMain extends PureComponent{
    render(){
        return(
            <div>Mani header</div>
        )
    }
}

export default withParams(UIHeaderMain)