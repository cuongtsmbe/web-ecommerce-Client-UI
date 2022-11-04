import React,{ PureComponent } from "react";

class ComponentCategoryStoreFillter extends PureComponent{
    render(){
        return(            
            // {/* <!-- store top filter --> */}
            <div className="store-filter clearfix">
            <div className="store-sort">
                <label>
                    <select className="input-select" id="sap_xep">
                        <option value="-1">SẮP XẾP</option>
                        <option value="0">Bán Chạy</option>
                        <option value="1">Giá cao</option>
                        <option value="2">Giá thấp</option>
                    </select>
                    <select className="input-select" id="man_hinh">
                        <option value="-1">MÀN HÌNH</option>
                        <option value="0">13.3 inch</option>
                        <option value="1">13.4 inch</option>
                        <option value="2">13.5 inch</option>
                        <option value="3">14 inch</option>
                        <option value="4">15.6 inch</option>
                        <option value="5">16 inch</option>
                        <option value="6">16.1 inch</option>
                        <option value="7">17 inch</option>
                        <option value="8">17.3 inch</option>
                    </select>
                    <select className="input-select" id="cpu">
                        <option value="-1">CPU</option>
                        <option value="0">Intel Core i9</option>
                        <option value="1">Intel Core i7</option>
                        <option value="2">Intel Core i5</option>
                        <option value="3">Intel Core i3</option>
                        <option value="4">Intel Celeron/Pentium</option>
                        <option value="5">AMD</option>
                    </select>
                    <select className="input-select" id="ram">
                        <option value="-1">RAM</option>
                        <option value="0">32 GB</option>
                        <option value="1">16 GB</option>
                        <option value="2">8 GB</option>
                        <option value="3">4 GB</option>
                    </select>
                    <select className="input-select" id="card">
                        <option value="-1">CARD ĐỒ HỌA</option>
                        <option value="0">GeForce GTX</option>
                        <option value="1">GeForce RTX</option>
                        <option value="2">GeForce MX</option>
                        <option value="3">GeForce Quadro</option>
                        <option value="4">Radeon RX</option>
                    </select>
                    <select className="input-select" id="o_cung">
                        <option value="-1">Ổ CỨNG</option>
                        <option value="0">SSD 2 TB</option>
                        <option value="1">SSD 1 TB</option>
                        <option value="2">SSD 512 GB</option>
                        <option value="3">SSD 256 GB</option>
                        <option value="4">HDD 1 TB trở lên</option>
                    </select>
                    <select className="input-select" id="do_phan_giai">
                        <option value="-1">ĐỘ PHÂN GIẢI</option>
                        <option value="0">4K</option>
                        <option value="1">2K</option>
                        <option value="2">Retina</option>
                        <option value="3">Full HD</option>
                        <option value="4">HD</option>
                    </select>
                    <select className="input-select" id="tan_so">
                        <option value="-1">TẦN SỐ QUÉT</option>
                        <option value="0">120 Hz</option>
                        <option value="1">144 Hz</option>
                        <option value="2">165 Hz</option>
                        <option value="3">240 Hz</option>
                        <option value="4">300 Hz</option>
                        <option value="5">360 Hz</option>
                    </select>
                </label>
            </div>                                    
        </div>
        // {/* <!-- /store top filter --> */}
        )
    }
}

export default ComponentCategoryStoreFillter