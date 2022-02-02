import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
	{
		id: 'p1',
		name: 'My first book',
		price: 6,
		description: 'The first book I ever wrote'
	},
	{
		id: 'p2',
		name: 'My second book',
		price: 5,
		description: 'The second book I ever wrote'
	}
];

const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => (
					<ProductItem key={product.id} title={product.name} price={product.price} description={product.description} />
				))}
			</ul>
		</section>
	);
};

export default Products;
