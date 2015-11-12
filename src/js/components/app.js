import React from 'react';
import Catalog from './catalog/catalog';
import Cart from './cart/cart';
import Template from './template/template';
import { Router, Route, IndexRoute } from 'react-router';

export default () => {
	return (
		<Router>
			<Route path="/" component={ Template }>
				<IndexRoute component={ Catalog }/>
				<Route path="/cart" component={ Cart }/>
			</Route>
		</Router>
	);
}