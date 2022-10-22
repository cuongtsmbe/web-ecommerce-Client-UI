import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export class ComponentFormSignIn extends PureComponent {
    render() {
        return (
            <form action='index.php?act=login' style={{ textAlign: "center" }} className="dangnhap" method='POST'>
                <br></br>
                <h3 className="title">ĐĂNG NHẬP TÀI KHOẢN</h3><br></br>
                <input style={{ width: "250px" }} className="input" type='text1' name='username' placeholder="Username" /> <br></br><br></br>
                <input style={{ width: "250px" }} className="input" type='password' name='password' placeholder="Password" /> <br></br><br></br>
                <input className="btn btn-danger button" type='submit' name="dangnhap" value='Đăng nhập' /><br></br>
                <br></br><span>Bạn chưa có tài khoản?</span> <Link to='/register' title='Đăng ký'>Đăng ký</Link><br></br>
            </form>
        )
    }
}

export default ComponentFormSignIn