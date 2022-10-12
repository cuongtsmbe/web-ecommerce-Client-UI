import React, { PureComponent } from 'react';
import {  Route, Routes } from 'react-router-dom';
import ScreenCart from './Cart';
import ScreenCategory from './Category';
import ScreenDetailProduct from './DetailProduct';

import ScreenHome from './Home';
import ScreenOderDetail from './Order/Detail';
import ScreenOderList from './Order/List';
import ScreenRegister from './Register';
import ScreenSigin from './SignIn';

class ScreensRoot extends PureComponent {
    render() {
        return (            
                <Routes>                   
                   <Route path='PTPMNMN/' element={<ScreenHome/>} />
                   <Route path='PTPMNMN/home' element={<ScreenHome/>} />
                   <Route path='PTPMNMN/categories' element={<ScreenCategory/>} />
                   <Route path='PTPMNMN/categories/:idCategory' element={<ScreenCategory/>} />
                   <Route path='PTPMNMN/cart' element={<ScreenCart/>} />
                   <Route path='PTPMNMN/product/:idProduct' element={<ScreenDetailProduct/>} />
                   <Route path='PTPMNMN/register' element={<ScreenRegister/>} />
                   <Route path='PTPMNMN/signin' element={<ScreenSigin/>} />
                   <Route path='PTPMNMN/myorders' element={<ScreenOderList/>} />
                   <Route path='PTPMNMN/myorders/:idOder' element={<ScreenOderDetail/>} />
                </Routes>            
        )
    }
}

export default ScreensRoot;
