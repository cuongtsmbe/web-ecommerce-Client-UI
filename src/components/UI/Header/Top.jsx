import { PureComponent } from 'react';
class TopHeader extends PureComponent {
    render() {
        return (
            // <!-- TOP HEADER -->
            <div id="top-header">

                <div className="container">
                    <ul className="header-links pull-left">
                        <li><a><i className="fa fa-phone"></i> 0987654321</a></li>
                        <li><a><i className="fa fa-envelope-o"></i> gnine@nineg.com.vn</a></li>
                        <li><a><i className="fa fa-map-marker"></i> ABC, Việt Nam</a></li>
                    </ul>
                    <ul className="header-links pull-right">
                        <li><a><i className="fa fa-dollar"></i> VNĐ</a></li>
                        <li><a href="index.php?act=register"><i className="fa fa-user-o"></i> Tạo tài khoản</a></li>
                        {/* <?php
                        if(isset($_SESSION['ten_dangnhap'])){
                            $ten_dangnhap = $_SESSION['ten_dangnhap'];
                        echo '<li><a href="?act=my_account"><i className="fa fa-user-o"></i> Xin chào, '.$ten_dangnhap.'!</a></li>';
                        }
                        else echo '<li><a href="index.php?act=register"><i className="fa fa-user-o"></i> Tạo tài khoản</a></li>';
                    ?> */}

                    </ul>
                </div>
            </div>
            // <!-- /TOP HEADER -->
        );
    }
}

export default TopHeader