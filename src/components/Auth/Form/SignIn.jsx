import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { SignInAction } from '../../../actions/signIn'
import userApi from '../../../api/userApi'
import swal from 'sweetalert'

export class ComponentFormSignIn extends PureComponent {
    state = {
        username: undefined,
        password: undefined,
        error: undefined,        
    }

    async componentDidMount() {       
        if(!localStorage.getItem('isGoogle'))localStorage.setItem('isGoogle', false)  
        if (localStorage.getItem('isGoogle')==='true')
            try {
                var response = await userApi.loginGoogle();
                console.log("login google");
                console.log(response)

                if (response.status === 200 && response.user) {
                    //save token 
                    var user = response.user;
                    localStorage.setItem('token', user.AccessToken);
                    localStorage.setItem('refreshToken', user.refreshToken);
                    localStorage.setItem('authenticated', true);
                    localStorage.setItem('username', user.name);
                    localStorage.setItem('isGoogle',false);
                    swal({
                        text: "Đăng nhập thành công!",
                        icon: "success",
                        buttons: false,
                        timer: 800
                    });
                    window.location.href='/';
                } else if (response.status === 500) {
                    swal({
                        text: "Đăng nhập không thành công!",
                        icon: "success",
                        buttons: false,
                        timer: 800
                    });
                    console.log('Fail response.status === 500')
                }
            } catch (error) {
                swal({
                    text: "Đăng nhập không thành công!",
                    icon: "success",
                    buttons: false,
                    timer: 800
                });
                console.log('login again ' + error);
            }
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async event => {
        event.preventDefault()
        try {
            const response = await userApi.signIn({ username: this.state.username, password: this.state.password });
            console.log(response)
            if (response.status === 201) {
                this.setState({ error: response.message })
            }
            if (response.status === 200) {
                localStorage.setItem('token', response.user.AccessToken)
                localStorage.setItem('authenticated', true)
                localStorage.setItem('refreshToken', response.user.refreshToken)
                swal({
                    text: "Đăng nhập thành công!",
                    icon: "success",
                    buttons: false,
                    timer: 800
                });
                window.location.reload();
            }
        } catch (error) {
            console.log('Fail to call api login')
        }
    }

    loginGoogle = e => {
        localStorage.setItem('isGoogle',true);
        window.open(`${process.env.REACT_APP_API_URL}/auth/google`, "_self");
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ textAlign: "center" }} className="dangnhap">
                <br></br>
                <h3 className="title">ĐĂNG NHẬP TÀI KHOẢN</h3><br></br>
                <input
                    style={{ width: "250px" }}
                    className="input"
                    type='text1'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                    placeholder="Username"
                />
                <br></br><br></br>
                {this.state.error && <div style={{ color: "red" }}>{this.state.error}</div>}
                <input
                    style={{ width: "250px" }}
                    className="input"
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                    placeholder="Password"
                />
                <br></br><br></br>
                <input className="btn btn-danger button" type='submit' name="dangnhap" value='Đăng nhập' style={{ width: '250px' }} /><br></br><br />
                <input className="btn btn-danger button" type='button' name="google" value='Đăng nhập với Google' style={{ width: '250px' }} onClick={this.loginGoogle} /><br></br><br />
                <Link to='/buyer/reset'>Quên mật khẩu?</Link><br />
                <br></br><span>Bạn chưa có tài khoản?</span> <Link to='/register' title='Đăng ký'>Đăng ký</Link><br></br>
            </form>
        )
    }
}

const mapStateToProps = (props) => {
    return {
        user: props.signIn,
    }
}

const mapDispatchToProps = dispatch => ({
    SignInAction: userInfo => dispatch(SignInAction(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ComponentFormSignIn)