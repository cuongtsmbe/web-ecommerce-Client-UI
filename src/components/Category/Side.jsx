import React, { PureComponent } from "react";

class ComponentCategorySide extends PureComponent {
    listBranchLaptop = ['MacBook', 'Asus', 'HP', 'Lenovo', 'Acer', 'DELL', 'MSI', 'LG', 'GIGABYTE'];
    render() {
        return (
            // <!-- ASIDE -->
            <div id="aside" className="col-md-3">
                {/* <!-- aside Widget --> */}
                <div className="aside">
                    <h3 className="aside-title">Thương Hiệu</h3>
                    <div className="checkbox-filter" id="chkBrand">
                        {this.listBranchLaptop.map((branch, index) => <div key={index} className="input-checkbox">
                            <input className="checkBrand" type="checkbox" id={index} value={branch} />
                            <label for={index}>
                                <span></span>
                                {branch}
                            </label>
                        </div>)}                        
                    </div>
                </div>
                {/* <!-- /aside Widget --> */}

                {/* <!-- aside Widget --> */}
                <div className="aside">
                    <h3 className="aside-title">Giá</h3>
                    <small>Chọn khoảng giá</small><br /><br />
                    <div className="price-filter">
                        <div id="price-slider"></div>
                        <div className="input-number price-min">
                            <input id="price-min" type="number" />
                            <span className="qty-up">+</span>
                            <span className="qty-down">-</span>
                        </div>
                        <span>-</span>
                        <div className="input-number price-max">
                            <input id="price-max" type="number" />
                            <span className="qty-up">+</span>
                            <span className="qty-down">-</span>
                        </div>
                        <br /><br />
                        <button className="btn" id="btn_gia">Áp Dụng</button>
                    </div>
                </div>
                {/* <!-- /aside Widget --> */}

                {/* <!-- aside Widget --> */}
                <div className="aside">
                    {/* <!-- <h3 className="aside-title">Đơn Vị</h3>
							<div className="checkbox-filter" id="chkDv">
									<?php
										$list=['Chai','Lon','Ly','Hộp','Thùng','Lốc'];
										foreach($list as $key => $value){
											echo '<div className="input-checkbox">
                                            <input className="checkDv" type="checkbox" id="'.'Dv'.$key.'" value="'.$value.'">
                                            <label for="'.'Dv'.$key.'">
                                                <span></span>
                                                '.$value.'
                                            </label>
                                        </div>';
										}
									?>
								
							</div> --> */}
                </div>
                {/* <!-- /aside Widget --> */}
            </div>
            // {/* <!-- /ASIDE --> */}
        )
    }
}

export default ComponentCategorySide