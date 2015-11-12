import React from 'react';
import Catalog from './catalog/catalog';
import Cart from './cart/cart';
import CatalogDetail from './product/catalog-detail';
import Template from './template/template';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
	return (
		<Router>
			<Route path="/" component={ Template }>
				<IndexRoute component={ Catalog }/>
				<Route path="/cart" component={ Cart }/>
				<Route path="/item/:item" component={ CatalogDetail }/>
			</Route>
		</Router>
	);
}