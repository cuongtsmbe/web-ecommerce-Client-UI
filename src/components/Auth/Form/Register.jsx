import React, { PureComponent } from 'react'
import userApi from '../../../api/userApi';
import swal from 'sweetalert';

export class ComponentFormRegister extends PureComponent {
  state = {
    ten_kh: '    ',
    dia_chi: '99 An Dương Vương, P16, Q8, HCM',
    username: undefined,
    password: undefined,
    email: undefined,
    phone: undefined,
    errorUsername: undefined,
    errorPassword: undefined,
    errorPhone: undefined,
    errorEmail: undefined,
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    if (this.state.errorEmail) this.setState({ errorEmail: undefined })
    if (this.state.errorPassword) this.setState({ errorPassword: undefined })
    if (this.state.errorPhone) this.setState({ errorPhone: undefined })
    if (this.state.errorUsername) this.setState({ errorUsername: undefined })
  }

  handleSubmit = async event => {
    event.preventDefault()
    try {
      const response = await userApi.register({ ten_kh: this.state.ten_kh, dia_chi: this.state.dia_chi, username: this.state.username, email: this.state.email, phone: this.state.phone, password: this.state.password })
      console.log(response)
      if (response.error && response.error === 'password') {
        this.setState({ errorPassword: response.errorValidate });
      }
      if (response.status === 201 && String(response.message).includes('Email')) {
        this.setState({ errorEmail: response.message });
      }
      if (response.status === 201 && String(response.message).includes('username')) {
        this.setState({ errorUsername: response.message });
      }
      if (response.user) {
        localStorage.setItem('token', response.user.AccessToken)
        localStorage.setItem('authenticated', true)
        localStorage.setItem('refreshToken', response.user.refreshToken)
        swal({
          text: "Đăng ký thành công!",
          icon: "success",
          buttons: false,
          timer: 800
      });
        window.location.reload();
      }
    } catch (error) {
      console.log('Fail to call api register!')
    }    
    
  }

  render() {
    return (
      <form style={{ textAlign: "center" }} onSubmit={this.handleSubmit}>
        <br></br>
        <h3 className="title">ĐĂNG KÝ TÀI KHOẢN</h3>
        <div className="form-group">Username <br></br>
          <input
            style={{ width: "250px" }}
            className="input"
            type="text"
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            required
            placeholder="Tên đăng nhập"
          /><br></br>
          <div style={{ color: "red" }}>{this.state.errorUsername}</div>
        </div>
        <div className="form-group">Password<br></br>
          <input style={{ width: "250px" }}
            className="input"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            required
            placeholder="Mật khẩu"
          /><br></br>
          {this.state.errorPassword && this.state.errorPassword.map(error => <div style={{ color: "red" }}>{error.message}</div>)}
        </div>
        <div className="form-group">Email <br></br>
          <input
            style={{ width: "250px" }}
            className="input"
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            placeholder="Email"
          /><br></br>
        </div>
        <div style={{ color: "red" }}>{this.state.errorEmail}</div>
        <div className="form-group">Phone <br></br>
          <input
            style={{ width: "250px" }}
            className="input"
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
            pattern="[0-9]{10}"
            id="phone"
            required
            placeholder="Số điện thoại"
          /><br></br>
          <div style={{ color: "red" }}>{ }</div>
        </div>
        <input className="btn btn-danger" type="submit" name="dangky" value="Đăng Ký" style={{ width: '250px' }} />
      </form>
    )
  }
}

export default ComponentFormRegister;