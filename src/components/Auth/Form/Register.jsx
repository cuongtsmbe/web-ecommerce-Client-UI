import React, { PureComponent } from 'react'
import ComponentAuthFieldUserName from '../Field/UserName';
import ComponentAuthFieldEmail from '../Field/Email';
import ComponentAuthFieldPassword from "../Field/Password";
import ComponentAuthFieldPhone from "../Field/Phone";

export class ComponentFormRegister extends PureComponent {
  render() {
    return (
        <form method="post" action="index.php?act=register" style={{ textAlign: "center" }}>
        <br></br>
        <h3 className="title">ĐĂNG KÝ TÀI KHOẢN</h3>
        <ComponentAuthFieldUserName />
        <ComponentAuthFieldPassword />
        <ComponentAuthFieldEmail />
        <ComponentAuthFieldPhone />
        <input className="btn btn-danger" type="submit" name="dangky" value="Đăng Ký" />
    </form>
    )
  }
}

export default ComponentFormRegister