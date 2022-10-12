import React ,{ PureComponent } from "react";

class ScreenCategory extends PureComponent{
    state = {
        id:null
    }
    async componentDidMount(){
        const {idCategory} = this.props.categoriesIdCategory;
        this.setState({idCategory})
    }
    render(){
        return(
            <div>Màn hình thể loại, hiển thị các sản phẩm theo thể loại, điều kiện, vv.v. ID thể loại:{this.state.id}</div>
        )
    }
}

export default ScreenCategory