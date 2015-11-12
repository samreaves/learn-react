import React from 'react';
import CartSummary from './cart-summary';
import Catalog from '../catalog/catalog'
import { Link } from 'react-router';

export default () => {
	return (
		<div 
			className="row" 
			style={{borderBottom: '1px solid #ccc'}}>
			<div 
				className="col-sm-2">
				<Link 
					to="/" 
					component={ Catalog }
					style={{textDecoration: 'none', color: '#000'}}>
					<h1>
						Store
					</h1>
				</Link>
			</div>
			<div 
				className="col-sm-10 text-right">
				<CartSummary />
			</div>
		</div>
	);
}