import React,{ PureComponent } from "react";
import { Link } from 'react-router-dom';

class UIHeaderTop extends PureComponent{
    render(){
        return(      
            <>
            {/* TOP HEADER */}
            <div id="top-header">
              <div className="container">
                <ul className="header-links pull-left">
                  <li>
                    <a to="#">
                      <i className="fa fa-phone" /> 0987654321
                    </a>
                  </li>
                  <li>
                    <a to="#">
                      <i className="fa fa-envelope-o" /> gnine@nineg.com.vn
                    </a>
                  </li>
                  <li>
                    <a to="#">
                      <i className="fa fa-map-marker" /> ABC, Việt Nam
                    </a>
                  </li>
                </ul>
                <ul className="header-links pull-right">
                  <li>
                    <a to="#">
                      <i className="fa fa-dollar" /> VNĐ
                    </a>
                  </li>
                  <li>
                  {/*?php 
                                      if(isset($_SESSION['ten_dangnhap'])){
                                           $ten_dangnhap=$_SESSION['ten_dangnhap'];
                                           echo '<li*/}
                  <a to="?act=my_account">
                    <i className="fa fa-user-o" /> Xin chào {/*}, '.$ten_dangnhap.'! */}
                  </a>
                  </li>
                  {/* ';
                  {"}"}
                  else echo ' */}
                  <li>
                    <a to="index.php?act=register">
                      <i className="fa fa-user-o" /> Tạo tài khoản
                    </a>
                  </li>
                  {/* '; ?&gt; */}
                </ul>
              </div>
            </div>
            {/* /TOP HEADER */}
          </>          
        )
    }
}

export default UIHeaderTop