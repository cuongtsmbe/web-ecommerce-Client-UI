import React, { PureComponent } from "react";

class UIFooter extends PureComponent {
    render() {
        return (
            <>
                {/* FOOTER */}
                <footer id="footer">
                    {/* top footer */}
                    <div className="section">
                        {/* container */}
                        <div className="container">
                            {/* row */}
                            <div className="row">
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Liên Hệ</h3>
                                        <p>
                                            “Thất bại chỉ là một nơi để nghỉ ngơi. Đó là cơ hội để bạn bắt
                                            đầu lại theo cách thông minh hơn” - Henry Ford
                                        </p>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-map-marker" />
                                                    173 An Dương Vương
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-phone" />
                                                    0987654321
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-envelope-o" />
                                                    email@email.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Danh Mục Sản Phẩm</h3>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="#">Hot deals</a>
                                            </li>   
                                            <li>
                                                <a href="#"> Macbook</a>
                                            </li>
                                            <li>
                                                <a href="#"> Học tập-văn phòng</a>
                                            </li>
                                            <li>
                                                <a href="#"> Gaming</a>
                                            </li>
                                            <li>
                                                <a href="#"> Mỏng nhẹ</a>
                                            </li>
                                            {/*?php
										// $sql='select id, ten_tl from theloai';
										// $list=executeResult($sql);
										$theloai = new theloai();
										$list = $theloai-*/}
                                            {/* getAll(); foreach($list as $item){"{"}
                                            echo ' */}
                                            <li>
                                                <a href="index.php?act=category&id='.$item['id'].'">
                                                    {/* '.$item['ten_tl'].' */}
                                                </a>
                                            </li>
                                           
                                        
                                        </ul>
                                    </div>
                                </div>
                                <div className="clearfix visible-xs" />
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Thông Tin Về</h3>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="#">Giới Thiệu</a>
                                            </li>
                                            <li>
                                                <a href="#">Tuyển Dụng</a>
                                            </li>
                                            <li>
                                                <a href="#">Điều Khoản Sử Dụng</a>
                                            </li>
                                            <li>
                                                <a href="#">Chính Sách Đổi Trả</a>
                                            </li>
                                            <li>
                                                <a href="#">Bán Hàng Doanh Nghiệp</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-3 col-xs-6">
                                    <div className="footer">
                                        <h3 className="footer-title">Hổ Trợ</h3>
                                        <ul className="footer-links">
                                            <li>
                                                <a href="#">Tài Khoản Của Tôi</a>
                                            </li>
                                            <li>
                                                <a href="#">Giỏ Hàng</a>
                                            </li>
                                            <li>
                                                <a href="#">Yêu Thích</a>
                                            </li>
                                            <li>
                                                <a href="#">Bảo Mật</a>
                                            </li>
                                            <li>
                                                <a href="#">Trợ Giúp</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* /row */}
                        </div>
                        {/* /container */}
                    </div>
                    {/* /top footer */}
                </footer>
                {/* /FOOTER */}
            </>

        )
    }
}

export default UIFooter