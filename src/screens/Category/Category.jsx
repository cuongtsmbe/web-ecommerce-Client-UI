import React, { PureComponent } from "react";
import {withParams} from '../../utils/Params/componentWithParams';

class ScreenCategory extends PureComponent {
    state = {
        idCategory: 9
    }
    componentDidMount() {
        const { idCategory } = this.props.params;        
        this.setState({ idCategory })        
    }

    render() {
        return (
            <div>Màn hình trang thể loại {this.state.idCategory} phía client</div>
        )
    }
}

export default withParams(ScreenCategory)