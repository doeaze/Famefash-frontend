'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
	id: number;
	name: string;
	description: string;
	price: number;
	image: string[];
	category: string;
	subCategory: string;
	sizes: string[];
}

export default function ProductListPage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState('');

	const sizes = ['S', 'M', 'L', 'XL'];
	const colors = [
		'#000000', '#ffffff', '#f87171', '#facc15', '#34d399',
		'#60a5fa', '#a78bfa', '#f472b6', '#f97316', '#22d3ee'
	];

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/product/list`);
				const data = await res.json();
				if (res.ok && data.success) {
					setProducts(data.products);
				} else {
					throw new Error('Invalid response structure');
				}
			} catch{
				setError('Failed to load products');
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="px-6 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
			{/* Filters */}
			<div className="space-y-6">
				<h1 className="text-3xl font-bold">ALL PRODUCTS</h1>

				{/* Sizes */}
				<div>
					<p className="font-semibold mb-2">Size</p>
					<div className="flex gap-2 flex-wrap">
						{sizes.map(size => (
							<button key={size} className="border px-3 py-1 text-sm hover:bg-black hover:text-white">
								{size}
							</button>
						))}
					</div>
				</div>

				{/* Colors */}
				<div>
					<p className="font-semibold mb-2">Colors</p>
					<div className="grid grid-cols-5 gap-2">
						{colors.map((color, idx) => (
							<div key={idx} className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }} />
						))}
					</div>
				</div>

				{/* Prices */}
				<div>
					<p className="font-semibold mb-2">Prices</p>
					<ul className="text-sm space-y-1 text-gray-600">
						<li>$0–$50</li>
						<li>$50–$100</li>
						<li>$100–$150</li>
						<li>$150–$200</li>
						<li>$200–$400</li>
					</ul>
				</div>

				{/* Brands */}
				<div>
					<p className="font-semibold mb-2">Brands</p>
					<ul className="text-sm space-y-1 text-gray-600">
						<li><input type="checkbox" /> Minimog</li>
						<li><input type="checkbox" /> Ratrolo Brook</li>
						<li><input type="checkbox" /> Lotus</li>
						<li><input type="checkbox" /> Vagabond</li>
						<li><input type="checkbox" /> Abby</li>
					</ul>
				</div>

				{/* Collections */}
				<div>
					<p className="font-semibold mb-2">Collections</p>
					<ul className="text-sm space-y-1 text-gray-600">
						<li>All products</li>
						<li>Best sellers</li>
						<li>New arrivals</li>
						<li>Accessories</li>
					</ul>
				</div>

				{/* Tags */}
				<div>
					<p className="font-semibold mb-2">Tags</p>
					<div className="flex flex-wrap gap-2 text-xs text-gray-600">
						<span className="px-2 py-1 border rounded">Fashion</span>
						<span className="px-2 py-1 border rounded">Hat</span>
						<span className="px-2 py-1 border rounded">Sneaker</span>
						<span className="px-2 py-1 border rounded">Sandal</span>
						<span className="px-2 py-1 border rounded">Denim</span>
					</div>
				</div>
			</div>

			{/* Product Grid */}
			<div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{loading && <p>Loading products...</p>}
				{error && <p className="text-red-600">{error}</p>}

				{!loading && !error && products.map(product => (
					<div key={product.id} className="space-y-2 group">
						<Link href={`/productdetail/${product.id}`}>
							<div className="relative aspect-[3/4] overflow-hidden cursor-pointer">
								<Image
									src={product.image?.[0] || '/placeholder.png'}
									alt={product.name}
									width={300}
									height={400}
									className="object-cover w-full h-full"
								/>
								<button className="absolute inset-0 bg-opacity-30 text-white opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
									Quick View
								</button>
							</div>
						</Link>
						<h3 className="font-medium text-sm">{product.name}</h3>
						<p className="text-sm text-gray-800">₹{product.price}</p>
						<div className="flex gap-1 mt-1">
							{product.sizes?.map((size, i) => (
								<span key={i} className="text-xs border px-2 py-0.5 rounded bg-gray-100">{size}</span>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
