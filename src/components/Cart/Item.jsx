import React, { PureComponent } from 'react'

export class ComponentCartItem extends PureComponent {
    render() {
        return (
            <tr>
                <td width="60px">
                    <img src="'.$value['img'].'" width="100%" />
                </td>
                <td width="40%">Ten san pham</td>
                <td>Gia san pham</td>
                <td align="center" style={{ width: "100px" }}>
                    <div className="row" style={{ display: 'inline-block' }}>
                        <input type="button" defaultValue="-" />
                        <input style={{ width: '40px' }} type="number" id="soLuong'.$key.'" defaultValue="'.$value['qty'].'" min={1} readOnly />
                        <input type="button" defaultValue="+" />
                    </div>
                    <p id="tbQty'.$key.'" style={{ color: 'red' }} />
                </td>
                <td width="10%" align="right">
                    <button className="delete"><i className="fa fa-close fa-xs" /></button>
                </td>
            </tr>

        )
    }
}

export default ComponentCartItem