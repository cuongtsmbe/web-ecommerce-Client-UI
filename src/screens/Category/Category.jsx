import React, { PureComponent } from "react";
import { withParams } from '../../utils/Params/componentWithParams';
import UIBreadCrumb from '../../components/UI/Breadcrumb/BreaedCrumb';
import ComponentCategorySide from '../../components/Category/Side';
import ComponentCategoryStoreFillter from '../../components/Category/Store/Filter';
import ComponentCategoryStoreListProduct from '../../components/Category/Store/ListProduct';
import productApi from "../../api/productApi";
import swal from "sweetalert";
import ComponentCategoryStorePaging from "../../components/Category/Store/Paging";

class ScreenCategory extends PureComponent {

    state = {
        listProducts: [],
        page: 1,
        tensp: undefined,
        idtheloai: this.props.params.idCategory,
        cpu: undefined,
        ram: undefined,
        card: undefined,
        manHinh: undefined,
        idThuongHieu: undefined,
        Ocung: undefined,
        price_start: undefined,
        price_end: undefined
    };


    async setListProduct() {
        var params = {
            page: this.state.page,
            tensp: this.state.tensp,
            idtheloai: this.props.params.idCategory,
            cpu: this.state.cpu,
            ram: this.state.ram,
            card: this.state.card,
            manHinh: this.state.manHinh,
            idThuongHieu: this.state.idThuongHieu,
            Ocung: this.state.Ocung,
            price_start: this.state.price_start,
            price_end: this.state.price_end
        }
        try {
            const response = await productApi.getAll(params);
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
    brands = [];
    handleClickBrand = async (e) => {
        const status = e.target.checked;
        const value = e.target.value;
        if (status) {
            this.brands.push(value)
            // swal(`${this.brands}`);
        } else {
            const index = this.brands.indexOf(value);
            if (index > -1) {
                this.brands.splice(index, 1);
            }
            // swal(`${this.brands}`);
        }
        await this.setState({ idThuongHieu: this.brands })
        await this.setListProduct();
    }

    async handleApplyPrice(minprice, maxprice) {
        // swal(`Min: ${minprice}, Max: ${maxprice}`);
        await this.setState({ price_start: minprice, price_end: maxprice });
        await this.setListProduct();
    }

    handleSort = async e => {
        const value = e.target.value;
        // await this.setState({sort:value==='-1'?undefined:value})
        swal(e.target.value)
        await this.setListProduct();
    }

    handleSreen = async e => {
        const value = e.target.value;
        await this.setState({ manHinh: value === '-1' ? undefined : value });
        swal(e.target.value)
        await this.setListProduct();
    }

    handleCpu = async e => {
        const value = e.target.value;
        await this.setState({ cpu: value === '-1' ? undefined : value });
        swal(e.target.value)
        await this.setListProduct();
    }

    handleRam = async e => {
        const value = e.target.value;
        await this.setState({ ram: value === '-1' ? undefined : value });
        swal(e.target.value)
        await this.setListProduct();
    }

    handleCard = async e => {
        const value = e.target.value;
        await this.setState({ card: value === '-1' ? undefined : value });
        swal(e.target.value)
        await this.setListProduct();
    }

    handleDrive = async e => {
        const value = e.target.value;
        await this.setState({ Ocung: value === '-1' ? undefined : value });
        swal(e.target.value)
        await this.setListProduct();
    }

    handleResolution = async e => {
        const value = e.target.value;
        // await this.setState({resolution:value==='-1'?undefined:value});
        swal(e.target.value)
        await this.setListProduct();
    }

    handleRefreshRate = async e => {
        const value = e.target.value;
        // await this.setState({refreshRate:value==='-1'?undefined:value});
        swal(e.target.value)
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
                            <ComponentCategorySide
                                handleClickBrand={this.handleClickBrand}
                                handleApplyPrice={(a, b) => this.handleApplyPrice(a, b)}
                            />
                            {/* <!-- /ASIDE --> */}

                            {/* <!-- STORE --> */}
                            <div id="store" className="col-md-9">
                                {/* <!-- store top filter --> */}
                                <ComponentCategoryStoreFillter
                                    handleSort={this.handleSort}
                                    handleSreen={this.handleSreen}
                                    handleCpu={this.handleCpu}
                                    handleRam={this.handleRam}
                                    handleCard={this.handleCard}
                                    handleDrive={this.handleDrive}
                                    handleResolution={this.handleResolution}
                                    handleRefreshRate={this.handleRefreshRate}
                                />
                                {/* <!-- /store top filter --> */}

                                {/* <!-- store products --> */}
                                <div className="row" id="phan_trang">
                                    <ComponentCategoryStoreListProduct products={this.state.listProducts} />
                                    <ComponentCategoryStorePaging/>
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