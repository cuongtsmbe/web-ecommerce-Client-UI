import React,{ PureComponent } from 'react';
import usersCogSolid from '../../../data/image/users-cog-solid.svg';
class MainHeader extends PureComponent {
    render() {
        return (
            //    <!-- MAIN HEADER -->
            <div id="header">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        {/* <!-- LOGO --> */}
                        <div className="col-md-3">
                            <div className="header-logo">
                                <a href="index.php" className="logo">
                                    {/* <!-- <img src="./img/lg.png" alt="" width=100px> --> */}
                                    {/* <h1 style="color:white; margin-top: 12px;">GninE</h1> */}
                                </a>
                            </div>
                        </div>
                        {/* <!-- /LOGO --> */}

                        {/* <!-- SEARCH BAR --> */}
                        <div className="col-md-6">
                            <div className="header-search">
                                <form method="get">
                                    <select className="input-select" onchange="location = this.value;">
                                        <option value="0">Danh Mục Sản Phẩm</option>
                                        {/* <?php
										$theloai = new theloai();
										$list = $theloai->getAll();										
										foreach($list as $item){
											echo '<option value="?act=category&id='.$item['id'].'">'.$item['ten_tl'].'</option>';
										}
										?> */}
                                    </select>
                                    <input className="input" name="search" placeholder="Tên sản phẩm......" required />
                                    <button className="search-btn">Tìm</button>
                                </form>
                            </div>
                        </div>
                        {/* <!-- /SEARCH BAR --> */}

                        {/* <!-- ACCOUNT --> */}
                        <div className="col-md-3 clearfix">
                            <div className="header-ctn">


                                {/* <!-- Cart --> */}                            
                                <div>
                                    <a href="?act=cart">
                                        <i className="fa fa-shopping-cart"></i>
                                        <span>Giỏ Hàng</span>
                                        <div className="qty" id="qtyPro">20</div>
                                    </a>
                                </div>

                                {/* <!-- /Cart --> */}

                                {/* <!-- Cài đặt --> */}
                                <div className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                        <i><img src={usersCogSolid} alt="XYZ" style={{filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)', width: '30px'}} /></i>
                                        <span>Cài Đặt</span>
                                    </a>
                                    <div className="cart-dropdown">
                                        {/* <?php
											if(isset($_SESSION['ten_dangnhap'])){
												echo '<div className="cart">
														<div className="product-widget">
														<a href="index.php?act=my_account">Quản Lý Tài Khoản</a>
														</div>
														<div className="product-widget">
														<a href="index.php?act=my_bill">Quản Lý Đơn Hàng</a>											
														</div>
													</div>';
											}
										?> */}

                                        <div className="cart-btns">
                                            <a href="index.php?act=login">Đăng Nhập</a>
                                            {/* <?php
												if(isset($_SESSION['ten_dangnhap'])){
													echo '<a href="frontend/logout.php">Đăng Xuất <i className="fa fa-arrow-circle-right"></i></a>';
												}else echo '<a href="index.php?act=register">Đăng Ký</a>';
											?> */}

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- /Cài đặt --> */}

                                {/* <!-- Menu Toogle --> */}
                                <div className="menu-toggle">
                                    <a>
                                        <i className="fa fa-bars"></i>
                                        <span>Menu</span>
                                    </a>
                                </div>
                                {/* <!-- /Menu Toogle --> */}
                            </div>
                        </div>
                        {/* <!-- /ACCOUNT --> */}
                    </div>
                    {/* <!-- row --> */}
                </div>
                {/* <!-- container --> */}
            </div>
/* <!-- /MAIN HEADER --> */ 
        );
    }
}

export default MainHeader