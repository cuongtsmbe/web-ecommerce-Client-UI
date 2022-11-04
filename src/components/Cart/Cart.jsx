import React, { PureComponent } from 'react';
import cartApi from '../../api/cartApi';
import ComponentCartItem from './Item';
import { formatVND } from '../../utils/currencyVND';

export class CopomentCart extends PureComponent {
    state = {
        products: [],
        totalItems: 0,
        totalPrice: 0
    }

    async getCart() {
        const response = await cartApi.get();
        const { products, totalItems, totalPrice } = response
        this.setState({ products: products, totalItems: totalItems, totalPrice: totalPrice });
    }
    async componentDidMount() {
        await this.getCart();
    }
    async handleDelete(id) {
        try {
            await cartApi.remove(id);
        } catch (error) {
            console.log('Fail to remove item ' + id + 'in cart.' + error);
        }
        await this.getCart();
        this.forceUpdate();
    }

    async handleAdd(id) {
        try {
            await cartApi.add(id);
        } catch (error) {
            console.log('Fail to add item ' + id + 'in cart.' + error);
        }
        await this.getCart();
        this.forceUpdate();
    }

    async handleReduce(id) {
        try {
            await cartApi.reduce(id);
        } catch (error) {
            console.log('Fail to reduce item ' + id + 'in cart.' + error);
        }
        await this.getCart();
        this.forceUpdate();
    }
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
                                            {this.state.products.map(product =>
                                                <ComponentCartItem
                                                    key={product.item.id}
                                                    product={product}
                                                    handleDelete={(id) => this.handleDelete(id)}
                                                    handleAdd={(id) => this.handleAdd(id)}
                                                    handleReduce={(id) => this.handleReduce(id)}
                                                />)}
                                        </tbody>
                                    </table>
                                </div>
                                <div className="order-col">
                                    <div>PHÍ GIAO HÀNG</div>
                                    <div><strong>FREE</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>TỔNG TIỀN</strong></div>
                                    <div><strong className="order-total">{formatVND(this.state.totalPrice)}</strong></div>
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