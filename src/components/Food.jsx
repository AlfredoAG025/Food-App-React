import React, { useState } from "react";
import { data } from "../data/data";

export default function Food() {
	const [foods, setFoods] = useState(data);

	const filterFoods = (type, value) => {
		if (value === "all") {
			setFoods(data);
			return;
		}

		switch (type) {
			case "category":
				const foodsByCategory = data.filter((item) => {
					return item.category === value;
				});
				setFoods(foodsByCategory);
                break;
			case "price":
				const foodsByPrice = data.filter((item) => {
					return item.price === value;
				});

				setFoods(foodsByPrice);
                break;
		}
	};

	return (
		<div className="max-w-[1640px] m-auto px-4 py-12">
			<h1 className="text-orange-600 font-bold text-4xl text-center">
				Top Rated Menu Items
			</h1>

			{/* Filter Row */}
			<div className="flex flex-col lg:flex-row justify-between">
				{/* Filter Type */}
				<div>
					<p className="font-bold text-gray-700">Filter Type</p>
					<div className="flex justify-between flex-wrap">
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("category", "all");
							}}
						>
							All
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("category", "burger");
							}}
						>
							Burgers
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("category", "pizza");
							}}
						>
							Pizza
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("category", "salad");
							}}
						>
							Salads
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("category", "chicken");
							}}
						>
							Chiken
						</button>
					</div>
				</div>

				{/* Filter Price */}
				<div>
					<p className="font-bold text-gray-700">Filter Price</p>
					<div className="flex justify-between max-w-[390px] w-full">
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("price", "$");
							}}
						>
							$
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("price", "$$");
							}}
						>
							$$
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("price", "$$$");
							}}
						>
							$$$
						</button>
						<button
							className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white m-1"
							onClick={() => {
								filterFoods("price", "$$$$");
							}}
						>
							$$$$
						</button>
					</div>
				</div>
			</div>

			{/* Display foods */}
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
				{foods.map((item, index) => (
					<div
						className="cursor-pointer border shadow-lg rounded-lg hover:scale-105 duration-300"
						key={item.id}
					>
						<img
							className="w-full h-[200px] object-cover rounded-t-lg"
							src={item.image}
							alt={item.name}
						/>
						<div className="flex justify-between px-2 py-4">
							<p className="font-bold">{item.name}</p>
							<p>
								<span className=" bg-orange-500 text-white p-1 rounded-full">
									{item.price}
								</span>
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
