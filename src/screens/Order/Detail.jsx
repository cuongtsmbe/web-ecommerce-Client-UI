import React,{ PureComponent } from "react";
import {withParams} from '../../utils/Params/componentWithParams';

class ScreenOderDetail extends PureComponent{
    state={
        idOrder:null
    }
    componentDidMount(){
        const {idOrder} = this.props.params;
        this.setState({idOrder});
    }
    render(){
        return(
            <div>Màn hình chi tiết đơn hàng ID: {this.state.idOrder}</div>
        )
    }
}

export default withParams(ScreenOderDetail)