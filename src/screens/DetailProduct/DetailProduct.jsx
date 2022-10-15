import React,{ PureComponent } from "react";
import {withParams} from '../../utils/Params/componentWithParams';

class ScreenDetailProduct extends PureComponent{
    state = {
        idProduct:null
    }
    componentDidMount(){
        const {idProduct} = this.props.params;
        this.setState({idProduct})
    }
    render(){
        return(
            <div>Màn hình chi tiết sản phẩm ID: {this.state.idProduct}</div>
        )
    }
}

export default withParams(ScreenDetailProduct)