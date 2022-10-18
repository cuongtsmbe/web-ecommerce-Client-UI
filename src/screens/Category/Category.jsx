import React, { PureComponent } from "react";
import { withParams } from '../../utils/Params/componentWithParams';
import UIBreadCrumb from '../../components/UI/Breadcrumb/BreaedCrumb';
import ComponentCategorySide from '../../components/Category/Side';
import ComponentCategoryStoreFillter from '../../components/Category/Store/Filter';
import ComponentCategoryStoreListProduct from '../../components/Category/Store/ListProduct';

class ScreenCategory extends PureComponent {
    state = {
        idCategory: null
    }
    // componentDidMount() {
    //     const { idCategory } = this.props.params;
    //     this.setState({ idCategory })
    // }
    componentDidUpdate() {
        const { idCategory } = this.props.params;
        this.setState({ idCategory })
    }


    render() {
        return (
            <div>
                {/* Màn hình trang thể loại {this.state.idCategory} phía client */}
                <UIBreadCrumb />

                {/* <!-- SECTION --> */}
                <div className="section">
                    {/* <!-- container --> */}
                    <div className="container">
                        {/* <!-- row --> */}
                        <div className="row">
                            {/* <!-- ASIDE --> */}
                            <ComponentCategorySide />
                            {/* <!-- /ASIDE --> */}

                            {/* <!-- STORE --> */}
                            <div id="store" className="col-md-9">
                                {/* <!-- store top filter --> */}
                                <ComponentCategoryStoreFillter/>
                                {/* <!-- /store top filter --> */}

                                {/* <!-- store products --> */}
                                <div className="row" id="phan_trang">
                                <ComponentCategoryStoreListProduct/>
                                </div>
                                {/* <!-- /store products --> */}

                                {/* <!-- store bottom filter --> */}

                                {/* <!-- /store bottom filter --> */}
                            </div>
                            {/* <!-- /STORE --> */}
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

export default withParams(ScreenCategory)