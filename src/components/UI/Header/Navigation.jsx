import React,{ PureComponent } from "react";
import { Link } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi'

class UIHeaderNavigation extends PureComponent{
    state = {
		categories: []
	}
	async componentDidMount() {
		
	}
	render() {
		return (
			<div>Thanh dieu huong</div>
		)
	}
}

export default UIHeaderNavigation