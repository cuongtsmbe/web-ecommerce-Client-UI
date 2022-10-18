import React,{ PureComponent } from "react";
import { Link } from 'react-router-dom';
import categoryApi from '../../../api/categoryApi'

class UIHeaderNavigation extends PureComponent{
    state = {
		categories: []
	}
	async componentDidMount() {
		try {
			const response = await categoryApi.getAll();
			const categories = response.data;
			this.setState({ categories });
		} catch (error) {
			console.log('Failed to fetch category list:', error);
		}
	}
	render() {
		return (
			<nav id="navigation">
				<div class="container">
					<div id="responsive-nav">
						<ul class="main-nav nav navbar-nav">
							<li><Link to='/'>Trang Chủ</Link></li>
							<li><Link to='/categories'>Tùy Chọn</Link></li>
							{this.state.categories.map(category => <li><Link to={`/categories/${category.id}`}>{category.ten_tl}</Link></li>)}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default UIHeaderNavigation