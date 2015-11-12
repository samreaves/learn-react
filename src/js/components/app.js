import React from 'react';
import AppActions from '../actions/app-actions';
import Catalog from './catalog';
import Cart from './cart';

export default class App extends React.Component {
	render() {
		return  (
			<div className="container">
				<Catalog />
				<Cart />
			</div>
		)
	};
};