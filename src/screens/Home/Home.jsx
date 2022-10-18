import React, { PureComponent } from "react";
import UIColection from '../../components/UI/Colection/Colection';

class ScreenHome extends PureComponent {
    render() {
        return (
            <div>
                <UIColection />
                {/* <!-- SECTION --> */}
                <div class="section">
                    {/* <!-- container --> */}
                    <div class="container">
                        {/* <!-- row --> */}
                        <div class="row">

                            {/* <!-- section title --> */}
                            <div class="col-md-12">
                                <div class="section-title">
                                    <h3 class="title">ĐƯỢC LỰA CHỌN NHIỀU NHẤT</h3>

                                </div>
                            </div>
                            {/* <!-- /section title --> */}

                            {/* <!-- Products tab & slick --> */}
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="products-tabs">
                                        {/* <!-- tab --> */}
                                        <div id="tab1" class="tab-pane active">
                                            <div class="products-slick" data-nav="#slick-nav-1">
                                                {/* <!-- product --> */}
                                                {/* <?php                                        
										$sanpham = new sanpham();
										$list = $sanpham->getListLimit(4,5);
                                        foreach($list as $item){
											if($item['so_luong']==0 && $item['trangthai']==0){ // Hết hàng 
												echo '
												<div class="product">
												<div class="product-img" style="height:250px">
													<img src="'.$item['hinh_anh'].'" alt="" style="height:100%">
													<div class="product-label">
														
														<span class="new">HẾT HÀNG</span>
													</div>
												</div>
												<div class="product-body">
													<p class="product-category">SẢN PHẨM</p>
													<h3 class="product-name"><a href="?act=product&id='.$item['id'].'">'.$item['ten_sp'].'</a></h3>
													<button class="btn btn-sm">'.$item['ram'].'</button><button class="btn btn-sm">'.$item['oCung'].'</button>
													<h4 class="product-price">'.currency_format($item['don_gia']).' </h4>
													<div class="product-rating">
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
														<i class="fa fa-star"></i>
													</div>
													
												</div>
												<div class="add-to-cart">
													<button class="add-to-cart-btn" >SẢN PHẨM ĐÃ HẾT</button>
												</div>
											</div>';
											}else if($item['trangthai']==0)// Còn hàng
                                            echo '<div class="product" >
											<div class="product-img" style="height:250px" onclick="location=\'index.php?act=product&id='.$item['id'].'\'">
												<img src="'.$item['hinh_anh'].'" alt="" style="height:100%">
												<div class="product-label">													
													<span class="new">NEW</span>
												</div>
											</div>
											<div class="product-body">
												<p class="product-category"><small>'.$item['sl_da_ban'].' đã bán</small></p>
												<h3 class="product-name"><a href="?act=product&id='.$item['id'].'">'.$item['ten_sp'].'</a></h3>
												<button class="btn btn-sm">'.$item['ram'].'</button><button class="btn btn-sm">'.$item['oCung'].'</button>
												<h4 class="product-price">'.currency_format($item['don_gia']).'</h4>
												<div class="product-rating">
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
												</div>
												
											</div>
											<div class="add-to-cart">
												<button class="add-to-cart-btn" onclick="addCart('.$item['id'].',1);themThanhCong('.$item['id'].');"><i class="fa fa-shopping-cart"></i> <span id="messAddCart'.$item['id'].'">thêm vào giỏ</span></button>
											</div>
										</div>';
                                        }
                                        ?> */}
                                                {/* <!-- /product --> */}

                                            </div>
                                            <div id="slick-nav-1" class="products-slick-nav"></div>
                                        </div>
                                        {/* <!-- /tab --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Products tab & slick --> */}
                        </div>
                        {/* <!-- /row --> */}
                    </div>
                    {/* <!-- /container --> */}
                </div>
                {/* <!-- /SECTION --> */}

            </div>
        )
    }
}

export default ScreenHome