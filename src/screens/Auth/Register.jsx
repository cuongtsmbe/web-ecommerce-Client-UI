import React, { PureComponent } from "react";
import ComponentFormRegister from "../../components/Auth/Form/Register";

class ScreenAuthRegister extends PureComponent {
    render() {
        return (
            <div className="row">
                <ComponentFormRegister/>
                <br></br><br></br>
            </div>
        )
    }
}

export default ScreenAuthRegister