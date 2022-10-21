import React, { PureComponent } from 'react';
import ComponentCartItem from './Item'

export class CopomentCart extends PureComponent {
    render() {
        return (

            <div className="section">

                <div className="container">

                    <div className="row " style={{ paddingRight: '5%', paddingLeft: '5%' }}>

                        <div className="col col-lg-12 order-details">
                            <div className="section-title text-center">
                                <h3 className="title">Giỏ Hàng</h3>
                            </div>
                            <div className="order-summary">
                                <div className="order-products">
                                    <table className="row" style={{ width: '100%', verticalAlign: 'middle' }}>
                                        <tbody>
                                            <tr>
                                                <td />
                                                <td><strong>SẢN PHẨM</strong></td>
                                                <td><strong>GIÁ</strong></td>
                                                <td align="center"><strong>SỐ LƯỢNG</strong></td>
                                                <td />
                                            </tr>                                           
                                            <ComponentCartItem/>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="order-col">
                                    <div>PHÍ GIAO HÀNG</div>
                                    <div><strong>FREE</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>TỔNG TIỀN</strong></div>
                                    <div><strong className="order-total">0</strong></div>
                                </div>
                            </div>


                            <button id="btnThanhToanThanhCong" style={{ width: '100%', display: 'none' }} className="btn-success btn order-submit">ĐẶT HÀNG THÀNH CÔNG</button>

                        </div>

                    </div>

                </div>

            </div>

        )
    }
}

export default CopomentCart