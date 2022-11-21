import React, { PureComponent } from "react";
import usersCogSolid from '../../../data/image/users-cog-solid.svg';
import categoryApi from './../../../api/categoryApi';
import { Link } from "react-router-dom";
class UIHeaderMain extends PureComponent {
  state = {
    categories: [],
    selected:-1,
    seaechInput:""
  }
  async componentDidMount() {
    console.log("componentDidMount");
    try {
      const response = await categoryApi.getAll();
      const categories = response.data;
      this.setState({ categories });
    } catch (error) {
      console.log('Failed to fetch category list:', error);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.selected !== this.state.selected) {
     //api san pham : loc san pham
    }
  }
  
  render() {
console.log("render");
    return (


      < div id="header" >

        < div className="container" >

          < div className="row" >

            < div className="col-md-3" >
              <div className="header-logo">
                <Link to="/" className="logo">
                  
                  <h1 style={{ color: 'white', marginTop: '12px' }}>GninE</h1>
                </Link>
              </div>
            </div>

            {/* SEARCH BAR */}
            <div className="col-md-6">
              <div className="header-search">
                <form method="get">
               
                  
                  <select className="input-select" onChange={(e)=>this.setState({selected:e.target.value})}>
                    <option value="-1">Danh Mục Sản Phẩm</option>
                    
                     {this.state.categories.map((item,index)=> 
                                        <option key={index} value={item.id}>{item.ten_the_loai}</option>
                                       
                                              
                                        
                                        )}
                 
                   
                  </select>
                  <input className="input" name="search" placeholder="Tên sản phẩm......" required />
                  <button className="search-btn">Tìm</button>
                </form>
              </div>
            </div>
            
            <div className="col-md-3 clearfix">
              <div className="header-ctn">
                
                <div>
                  <a href="?act=cart">
                    <i className="fa fa-shopping-cart" />
                    <span>Giỏ Hàng</span>
                    <div className="qty" id="qtyPro">{/*?=$qty?*/}</div>
                  </a>
                </div>
                {/* /Cart */}
                {/* Cài đặt */}
                <div className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                    <i><img src={usersCogSolid} alt="anhchuahienthi" style={{ filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)', width: '30px' }} /></i>
                    <span>Cài Đặt</span>
                  </a>
                  <div className="cart-dropdown">

                    {/* <div class="cart"><div className="product-widget">
              <a href="index.php?act=my_account">Quản Lý Tài Khoản</a>
            </div>
            <div className="product-widget">
              <a href="index.php?act=my_bill">Quản Lý Đơn Hàng</a>
            </div> 
          </div>  */}
                    <div className="cart-btns">
                      <a href="index.php?act=login">Đăng Nhập</a>

                      {/* <a href="frontend/logout.php">  Đăng Xuất <i className="fa fa-arrow-circle-right" /></a> */}
                      <a href="index.php?act=register">Đăng Ký</a>

                    </div>
                  </div>
                </div>
                {/* /Cài đặt */}
                {/* Menu Toogle */}
                <div className="menu-toggle">
                  <a href="#">
                    <i className="fa fa-bars" />
                    <span>Menu</span>
                  </a>
                </div>
                {/* /Menu Toogle */}
              </div>
            </div >

          </div >

        </div >
</div>

        )
  }
}

        export default UIHeaderMain