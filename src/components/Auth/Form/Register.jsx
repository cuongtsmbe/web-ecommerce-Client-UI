import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import { userPostFetch } from '../../../redux/action';

export class ComponentFormRegister extends PureComponent {
  state = {
    username: '',
    password: '',
    email: '',
    phone: ''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.userPostFetch(this.state)
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
        </div>
        <input className="btn btn-danger" type="submit" name="dangky" value="Đăng Ký" />
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(ComponentFormRegister);