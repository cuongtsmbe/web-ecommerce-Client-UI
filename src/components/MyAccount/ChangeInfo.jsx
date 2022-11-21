import React, { PureComponent } from 'react'

export class ComponentMyAccountChangeInfo extends PureComponent {
    render() {
        return (
            <div className="col col-lg-9 col-sm-12">
                {/* Billing Details */}
                <div className="billing-details">
                    <div className="section-title">
                        <h3 className="title">Thông tin tài khoản</h3>
                    </div>
                    <form method="post">
                        <table width="100%">
                            <tbody><tr>
                                <td>Họ tên</td>
                                <td>
                                    <div className="form-group">
                                        <input className="input" type="text" name="name" placeholder="Nhập họ tên" defaultValue="<?=$info['ten_kh']?>" />
                                    </div>
                                </td>
                            </tr>
                                <tr>
                                    <td>Số điện thoại</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="tel" id="sdt" name="tel" placeholder="Nhập số điện thoại" defaultValue="<?=$info['phone']?>" onchange="checkPhone();" />
                                            <div style={{ color: 'red' }} id="thongbaoloisdt" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="email" name="email" placeholder="Nhập Email" defaultValue="<?=$info['email']?>" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Địa chỉ</td>
                                    <td>
                                        <div className="form-group">
                                            <input className="input" type="text" name="address" placeholder="Nhập địa chỉ" defaultValue="<?=$info['dia_chi']?>" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Giới tính</td>
                                    <td>
                                        <input type="radio" id="male" name="gender" defaultValue="male" defaultChecked />
                                        <label htmlFor="male">Nam</label>
                                        <input type="radio" id="female" name="gender" defaultValue="female" />
                                        <label htmlFor="female">Nữ</label>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Ngày sinh</td>
                                    <td />
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <div className="form-group">
                                            <div className="input-checkbox">
                                                <input type="checkbox" id="create-account" />
                                                <label htmlFor="create-account">
                                                    <span />
                                                    Thay đổi mật khẩu
                                                </label>
                                                <div className="caption">
                                                    <input type="text" id="pswd" style={{ display: 'none' }} defaultValue="<?=$info['mat_khau']?" />&gt;
                                                    <input className="input" id="passOld" type="password" name="passwordOld" placeholder="Nhập mật khẩu cũ" style={{ marginBottom: '5px' }} onchange="checkPass(1);" />
                                                    <div style={{ color: 'red' }} id="tb1" />
                                                    <input className="input" id="passNew1" type="password" name="passwordNew" placeholder="Nhập mật khẩu mới từ 6 đến 32 ký tự" style={{ marginBottom: '5px' }} onchange="checkPass(2);" />
                                                    <div style={{ color: 'red' }} id="tb2" />
                                                    <input className="input" id="passNew2" type="password" name="passwordNew2" placeholder="Nhập lại mật khẩu mới" onchange="checkPass(3);" />
                                                    <div style={{ color: 'red' }} id="tb3" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td />
                                    <td>
                                        <button className="primary-btn order-submit">Cập nhật</button>
                                    </td>
                                </tr>
                            </tbody></table>
                    </form>
                </div>
                {/* /Billing Details */}
            </div>

        )
    }
}

export default ComponentMyAccountChangeInfo