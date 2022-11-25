import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import userApi from '../../../api/userApi';

export class ComponentAuthFormResetPassword extends PureComponent {
    state = {
        email: undefined,
        error: undefined,
        step: 1
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await userApi.resetPassword({ email: this.state.email, urlUI: 'http://localhost:3006/forgot_password'})                
            if(response.status && response.status === 200) this.setState({step:2})
        } catch (error) {
            console.log('Fail to call api forgotpassword!');
        }
        
    }
    render() {
        if (this.state.step === 2) {
            return (
                <form style={{ textAlign: "center" }} className="dangnhap">
                    <br></br>
                    <h3 className="title">ĐẶT LẠI MẬT KHẨU</h3><br></br>
                    <div><i className="fa fa-envelope-o fa-5x"></i></div>
                    <div>Mã xác minh đã được gửi đến địa chỉ email</div>
                    <div style={{ color: "red" }}>{this.state.email}</div>
                    <div>Vui lòng xác minh.</div>

                    <input className="btn btn-danger button" type='button' name="dangnhap" value='OK' style={{ margin: '5px' ,width:'250px'}} /><br></br>
                    <br></br><span>Nhập lại email.</span> <Link onClick={()=>{this.setState({step:1})}}>Quay lại.</Link><br></br>
                </form>
            )
        } else
            if (this.state.step === 1)
                return (
                    <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }} className="dangnhap">
                        <br></br>
                        <h3 className="title">ĐẶT LẠI MẬT KHẨU</h3><br></br>
                        <input
                            style={{ width: "250px" }}
                            className="input"
                            type='text1'
                            name='email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            placeholder="Email"
                        />
                        <br></br>

                        {this.state.error && <div style={{ color: "red" }}>{this.state.error}</div>}

                        <input className="btn btn-danger button" type='submit' name="dangnhap" value='Tiếp theo' style={{ margin: '5px',width:'250px' }} /><br></br>
                        <br></br><span>Quay lại trang đăng nhập.</span> <Link to='/signin'>Đăng nhập</Link><br></br>
                    </form>
                )
    }
}

export default ComponentAuthFormResetPassword