import React, { PureComponent } from "react";
import orderApi from "../../api/orderApi";
import ComponentOrderItem from '../../components/MyOrder/Item'

class ComponentOderList extends PureComponent {
    state = {
        listOrder: [],
    }
    async getListOrderByID() {
        try {
            const response = await orderApi.getMyOrders()
            const listOrder = response.data;
            this.setState({ listOrder })
        } catch (error) {
            console.log('Fail to get list my order', error)
        }
    }

    async componentDidMount() {        
        await this.getListOrderByID(this.props.idCustomer)
    }

    render() {
        return (
            <div className="col col-lg-10 col-sm-12">
                <div className="section-title">
                    <h3 className="title" id="testdate">Đơn hàng của tôi</h3>
                </div>
                <table width="100%">
                    <tbody>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Mã đơn hàng</th>
                            <th style={{ textAlign: 'center' }}>Sản phẩm</th>
                            <th>Tổng tiền</th>
                            <th style={{ textAlign: 'center' }}>Trạng thái đơn hàng</th>
                        </tr>
                        {this.state.listOrder.map((order,index)=> <ComponentOrderItem infoOrder={order}/> )}
                        
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ComponentOderList