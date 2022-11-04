import React, { PureComponent } from "react";
import { withParams } from '../../utils/Params/componentWithParams';
import UIBreadCrumb from '../../components/UI/Breadcrumb/BreaedCrumb';
import ComponentCategorySide from '../../components/Category/Side';
import ComponentCategoryStoreFillter from '../../components/Category/Store/Filter';
import ComponentCategoryStoreListProduct from '../../components/Category/Store/ListProduct';
import productApi from "../../api/productApi";

class ScreenCategory extends PureComponent {

    state = {
        listProducts: [],
    };


    async setListProduct() {
        try {
            const response = await productApi.getAll({ idtheloai: this.props.params.idCategory });
            const data = response.data;
            this.setState({ listProducts: data })
        } catch (error) {
            console.log('Failed to fetch product list:', error);
        }
    }

    async componentDidMount() {        
        await this.setListProduct();
    }
   
    async componentDidUpdate(prevProps) {
        if (prevProps.params.idCategory !== this.props.params.idCategory)
           await this.setListProduct();
    }

    render() {
        return (
            <div>
                {/* Màn hình trang thể loại { this.props.params.idCategory} phía client */}
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
                                <ComponentCategoryStoreFillter />
                                {/* <!-- /store top filter --> */}

                                {/* <!-- store products --> */}
                                <div className="row" id="phan_trang">
                                    <ComponentCategoryStoreListProduct products={this.state.listProducts} />
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