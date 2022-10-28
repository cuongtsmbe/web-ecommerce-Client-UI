import React,{ PureComponent } from "react";
import { Link } from 'react-router-dom';
import usersCogSolid from '../../../data/image/users-cog-solid.svg';

class UIHeaderMain extends PureComponent{
    render(){
        return(
<<<<<<< HEAD
            <div>Mani header</div>
=======
             //    <!-- MAIN HEADER -->
             <div id="header">
             {/* <!-- container --> */}
             <div className="container">
                 {/* <!-- row --> */}
                 <div className="row">
                     {/* <!-- LOGO --> */}
                     <div className="col-md-3">
                         <div className="header-logo">
                             <Link to='/home' className="logo">
                                 {/* <!-- <img src="./img/lg.png" alt="" width=100px> --> */}
                                 <h1 style={{color: 'white', marginTop: '12px'}}>GninE</h1>
                             </Link>
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
                                 <Link to='/cart'>
                                     <i className="fa fa-shopping-cart"></i>
                                     <span>Giỏ Hàng</span>
                                     <div className="qty" id="qtyPro">20</div>
                                 </Link>
                             </div>

                             {/* <!-- /Cart --> */}

                             {/* <!-- Cài đặt --> */}
                             <div className="dropdown">
                                 <Link className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                     <i><img src={usersCogSolid} alt="XYZ" style={{filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)', width: '30px'}} /></i>
                                     <span>Cài Đặt</span>
                                 </Link>
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
                                         <Link to="/signin">Đăng Nhập</Link>
                                         <Link to="/register">Đăng Ký</Link>
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
                                 <Link>
                                     <i className="fa fa-bars"></i>
                                     <span>Menu</span>
                                 </Link>
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
>>>>>>> 50ffe0e8eba3eec655f3b76333ce54a1de50d13d
        )
    }
}

export default UIHeaderMain