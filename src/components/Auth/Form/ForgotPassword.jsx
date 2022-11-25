import React, { PureComponent } from 'react'
import userApi from '../../../api/userApi';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { withParams } from '../../../utils/Params/componentWithParams';

export class ComponentAuthFromForgotPassword extends PureComponent {
    state = {
        password: undefined,
        errors: undefined,
        token: new URLSearchParams(window.location.search).get('token')
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
        if(this.state.errors) this.setState({errors:undefined})
    }

    handleSubmit = async event => {
        event.preventDefault();
        try {
            const respone = await userApi.updatePassword({ password: this.state.password }, this.state.token);console.log(respone)
            if (!respone.error && respone.status && respone.status === 200) {
                swal({
                    text: "Thay đổi Mật khẩu thành công!",
                    icon: "success",
                    buttons: false,
                    timer: 800
                });
                window.location.href = '/signin';
            }
            if(respone.error){
                const errors = respone.errorValidate;
                this.setState({errors})
            }
        } catch (error) {
            console.log('Fail to call api update passowrd')
        }

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }} className="dangnhap">
                <br></br>
                <h3 className="title">Thiết Lập Mật Khẩu</h3><br></br>
                <div>Nhập mật khẩu mới</div>
                <div style={{ color: "red" }}>{this.state.email}</div>

                <input
                    style={{ width: "250px" }}
                    className="input"
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                /><br />
                {this.state.errors && this.state.errors.map(error =><div style={{color: "red"}}>{error.message}</div>)}
<br/>
                <input className="btn btn-danger button" type='submit' name="dangnhap" value='OK' style={{ margin: '5px', width: '250px' }} /><br></br>
                <br></br><span>Quay lại trang đăng nhập.</span> <Link to='/signin'>Đăng nhập</Link><br></br>
            </form>
        )
    }
}

export default withParams(ComponentAuthFromForgotPassword)