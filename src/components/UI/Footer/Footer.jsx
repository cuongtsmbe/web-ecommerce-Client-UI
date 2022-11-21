import React, { PureComponent } from "react";
import { Link } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi'

class UIFooter extends PureComponent {
    state = {
        categories: []
    }
    async componentDidMount() {
       
    }
    render() {
        return (
           <div>Footer</div>
        )
    }
}

export default UIFooter