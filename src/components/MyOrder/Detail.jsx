import React, { PureComponent } from "react";

class ComponentOderDetail extends PureComponent {
    render() {
        return (
            <div className="col col-lg-10 col-sm-12">
                <div className="section-title">
                    <h3 className="title">Chi tiết đơn hàng #HĐ{this.props.idOrder}</h3>
                </div>
                <table width="100%">
                    <tbody>
                        <tr height="50px">
                            <td>ĐỊA CHỈ NGƯỜI NHẬN</td>
                            <td />
                        </tr>
                        <tr style={{ backgroundColor: '#fbfbfb' }}>
                            <td>
                                <strong>{/*?=$info['ten_kh']?*/}</strong>
                                <p>Địa chỉ: {/*?=$info['dia_chi']?*/}</p>
                                <p>Điện thoại: {/*?=$info['phone']?*/}</p>
                            </td>
                            <td align="right">Ngày đặt hàng: {/*?= $hoadon-*/}</td>
                        </tr>
                    </tbody>
                </table><br /><br />
                <table width="100%">
                    <tbody>
                        <tr>
                            <th />
                            <th width="50%">Sản phẩm</th>
                            <th>Giá</th>
                            <th width="10%" style={{ textAlign: 'center' }}>Số lượng</th>
                            <th width="15%" style={{ textAlign: 'right' }}>Thành tiền</th>
                        </tr>
                    </tbody>
                </table><br /><br />
                <table width="100%" style={{ backgroundColor: '#f2f1f194' }}>
                    <tbody>
                        <tr>
                            <td align="right"><strong>Tạm tính</strong></td>
                            <td width="15%" align="right">{/*?=currency_format($tongtien)?*/}</td>
                        </tr>
                        <tr>
                            <td align="right"><strong>Phí vận chuyển</strong></td>
                            <td align="right">FREE</td>
                        </tr>
                        <tr>
                            <td align="right"><strong>Tổng cộng</strong></td>
                            <td align="right" style={{ color: 'red' }}><strong>{/*?=currency_format($tongtien)?*/}</strong></td>
                        </tr>
                        <tr>
                            <td><a href="index.php?act=my_bill"><i style={{ color: 'red' }}> <span>
                                &lt;&lt;&lt;&lt;&lt;Quay lại, Đơn hàng của tôi </span></i> </a></td>
                            <td />
                        </tr>
                    </tbody>
                </table>
            </div>

        )
    }
}

export default ComponentOderDetail