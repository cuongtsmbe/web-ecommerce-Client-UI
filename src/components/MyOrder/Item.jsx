import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class ComponentOrderItem extends PureComponent {
    statusOfOrder() {
        switch (this.props.infoOrder.Trang_thai) {
            case 0:
                return <td align="center" style={{color:"red"}}>Đang xử lý</td>                
            case 1:
                return <td align="center" style={{color:"#4187e8"}}>Đang đóng gói</td>
            case 2:
                return <td align="center" style={{color:"#f86402"}}>Đang giao</td>
            default:
                return <td align="center" style={{color:"#07ea03"}}>Thành công</td>
        }
    }
    actionOfOrder() {
        switch (this.props.infoOrder.Trang_thai) {
            case 0:                
                return <td><button class="btn btn-sm btn-danger">Hủy đơn</button></td>
            case 1:
                return <td></td>
            case 2:
                return  <td><button class="btn btn-sm btn-success" >Đã nhận hàng</button></td>
            default:
                return <td></td>
        }
    }
    render() {
        return (
            <tr height="80px">
                <td align="center" ><Link to={`${this.props.infoOrder.Ma_don_hang}`}><strong style={{ color: "#2374e1" }}><u>{this.props.infoOrder.Ma_don_hang}</u></strong></Link></td>
                <td>Ten San pham</td>
                <td>Don gia</td>
                {this.statusOfOrder()}
                {this.actionOfOrder()}
            </tr>
        )
    }
}

export default ComponentOrderItem