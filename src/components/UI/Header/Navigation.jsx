import React, { PureComponent } from "react";
import categoryApi from '../../../api/categoryApi'

class Navigation extends PureComponent {
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
							<li><a>Trang Chủ</a></li>
							<li><a>Tùy Chọn</a></li>
							{this.state.categories.map(category => <li><a>{category.ten_tl}</a></li>)}
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default Navigation