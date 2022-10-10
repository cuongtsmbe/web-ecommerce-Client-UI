import React,{ PureComponent } from "react";
import categoryApi from "../../api/categoryApi";

class Footer extends PureComponent {
    state = {
		categories: []
	}
	async componentDidMount() {
		try {
			const response = await categoryApi.getAll();
			const categories = response.data;
			this.setState({ categories });
		} catch (error) {
			console.log('Failed to fetch category list:', error);
		}
	}
    render() {
        return (
            < footer id="footer" >
                < div className="section" >
                    < div className="container" >
                        < div className="row" >
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Liên Hệ</h3>
                                    <p>“Thất bại chỉ là một nơi để nghỉ ngơi. Đó là cơ hội để bạn bắt đầu lại theo cách thông minh hơn”
                                        - Henry Ford</p>
                                    <ul className="footer-links">
                                        <li><a href="#"><i className="fa fa-map-marker" />173 An Dương Vương</a></li>
                                        <li><a href="#"><i className="fa fa-phone" />0987654321</a></li>
                                        <li><a href="#"><i className="fa fa-envelope-o" />email@email.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Danh Mục Sản Phẩm</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">Hot deals</a></li>
                                        {this.state.categories.map(category => <li><a>{category.ten_tl}</a></li>)}
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix visible-xs" />
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Thông Tin Về</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">Giới Thiệu</a></li>
                                        <li><a href="#">Tuyển Dụng</a></li>
                                        <li><a href="#">Điều Khoản Sử Dụng</a></li>
                                        <li><a href="#">Chính Sách Đổi Trả</a></li>
                                        <li><a href="#">Bán Hàng Doanh Nghiệp</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3 col-xs-6">
                                <div className="footer">
                                    <h3 className="footer-title">Hổ Trợ</h3>
                                    <ul className="footer-links">
                                        <li><a href="#">Tài Khoản Của Tôi</a></li>
                                        <li><a href="#">Giỏ Hàng</a></li>
                                        <li><a href="#">Yêu Thích</a></li>
                                        <li><a href="#">Bảo Mật</a></li>
                                        <li><a href="#">Trợ Giúp</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </footer >
        )
    }
}

export default Footer