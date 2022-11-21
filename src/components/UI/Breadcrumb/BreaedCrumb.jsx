import React, { PureComponent } from "react";

class UIBreadCrumb extends PureComponent {
    render() {
        return (
            // <!-- BREADCRUMB -->
            <div id="breadcrumb" className="section">
                {/* <!-- container --> */}
                <div className="container">
                    {/* <!-- row --> */}
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="breadcrumb-tree">
                                <li><a href="index.php">Trang Chủ</a></li>
                                <li><a href="?act=category">Danh Mục Sản Phẩm</a></li>
                                <li className="active">ABCEF</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- /row --> */}
                </div>
                {/* <!-- /container --> */}
            </div>
            // <!-- /BREADCRUMB -->
        )
    }
}

export default UIBreadCrumb