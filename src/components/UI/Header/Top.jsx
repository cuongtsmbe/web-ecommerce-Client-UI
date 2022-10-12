import { PureComponent } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

class TopHeader extends PureComponent {
    render() {
        return (            
            <div id="top-header">
                <div className="container">
                    <ul className="header-links pull-left">
                        <li><Link><i className="fa fa-phone"></i> 0987654321</Link></li>
                        <li><Link><i className="fa fa-envelope-o"></i> gnine@nineg.com.vn</Link></li>
                        <li><Link><i className="fa fa-map-marker"></i> ABC, Việt Nam</Link></li>
                    </ul>
                    <ul className="header-links pull-right">
                        <li><Link><i className="fa fa-dollar"></i> VNĐ</Link></li>
                        <li><Link><i className="fa fa-user-o"></i> Tạo tài khoản</Link></li>
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
            
        );
    }
}

export default TopHeader