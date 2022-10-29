import React, { PureComponent } from "react";

class ScreenAuthRegister extends PureComponent {
    render() {
        return (
            <div classname="row">
                <form
                    method="post"
                    action="index.php?act=register"
                    style={{ textAlign: "center" }}
                >
                    <br />
                    <h3 classname="title">ĐĂNG KÝ TÀI KHOẢN</h3>
                    <div classname="form-group">
                        Username <br />
                        <input
                            style={{ width: 250 }}
                            classname="input"
                            type="text"
                            name="ten_dangnhap"
                            defaultValue=""
                            required=""
                            placeholder="Tên đăng nhập"
                        />
                        <br />
                    </div>
                    <div classname="form-group">
                        Password <br />
                        <input
                            style={{ width: 250 }}
                            classname="input"
                            type="password"
                            name="mat_khau"
                            defaultValue=""
                            required=""
                            placeholder="Mật khẩu"
                        />
                        <br />
                    </div>
                    <div classname="form-group">
                        Email <br />
                        <input
                            style={{ width: 250 }}
                            classname="input"
                            type="email"
                            name="email"
                            defaultValue=""
                            required=""
                            placeholder="Email"
                        />
                        <br />
                    </div>
                    <div classname="form-group">
                        Phone <br />
                        <input
                            style={{ width: 250 }}
                            classname="input"
                            type="text"
                            name="phone"
                            defaultValue=""
                            pattern="[0-9]{10}"
                            id="phone"
                            required=""
                            placeholder="Số điện thoại"
                        />
                        <br />
                    </div>
                    <input
                        classname="btn btn-danger"
                        type="submit"
                        name="dangky"
                        defaultValue="Đăng Ký"
                    />
                   {/*?php require 'xulydangky.php';?*/}
                </form>
            </div>

        )
    }
}

export default ScreenAuthRegister