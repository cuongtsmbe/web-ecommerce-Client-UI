import React, { PureComponent } from "react";
import UIColection from '../../components/UI/Colection/Colection';
import ComponentProductCard from '../../components/Product/Cart';

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
                                               {/* <ComponentProductCard/>
											   <ComponentProductCard/>
											   <ComponentProductCard/>
											   <ComponentProductCard/>
											   <ComponentProductCard/>
											   <ComponentProductCard/> */}
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