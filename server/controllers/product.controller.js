import Product from '../models/product.model.js'
	import extend from 'lodash/extend.js'
	import errorHandler from './error.controller.js'
import mongoose from 'mongoose'

//const Product = mongoose.model('Product', productSchema); //productSchema undefined and crashed app // now saying app not defined 

app.post('/products', async (req, res) => {
	try {
		const product = new Product(req.body);
		await product.save();
		res.status(201).json(product);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create product' });
	}
});

app.get('/products/:id', async (req, res) => {
	try {
		const product = await Product.findById(req.params.id);
		if(!product) {
			res.status(404).json({ error: 'Product not found' });
			return;
		}
		res.json(product);
	} catch (error) {
		res.status(500).json({ error: 'Failed to retrieve product' });
	}
});

app.put('/products/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		if (!product) {
			res.status(404).json({ error: 'Product not found' });
			return;
		}
		res.json(product);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update product' });
	}
});

app.delete('/products/:id', async (req, res) => {
	try {
		const product = await Product.findByIdAndRemove(req.params.id);
		if(!product) {
			res.status(404).json({ error:'Product not found' });
			return;
		}
		res.json({ message: 'Product deleted' });
	} catch (error) {
		res.status(500).json({ error: 'Failed to delete product' });
	}
});

app.listen(port, () => {
	console.log('Server running on port ${port}');
});