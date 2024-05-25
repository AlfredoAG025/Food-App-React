import React from "react";

const HeadlineCards = () => {
	return (
		<div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
			{/* Card */}
			<div className="rounded-xl relative">
				{/* Overlay */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="text-2xl font-bold px-2 pt-4">
						New Tacos
					</p>
					<p className="px-2">Through 8/26</p>
					<button className="border-white bg-white text-black mx-2 absolute bottom-4">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/3264572/pexels-photo-3264572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>

            {/* Card */}
			<div className="rounded-xl relative">
				{/* Overlay */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="text-2xl font-bold px-2 pt-4">
						Best Spicy Sauce
					</p>
					<p className="px-2">Too Hot! 🔥</p>
					<button className="border-white bg-white text-black mx-2 absolute bottom-4">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/5737247/pexels-photo-5737247.jpeg"
					alt=""
				/>
			</div>

            {/* Card */}
			<div className="rounded-xl relative">
				{/* Overlay */}
				<div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
					<p className="text-2xl font-bold px-2 pt-4">
						Red or Green Pozole?
					</p>
					<p className="px-2">Added Daily</p>
					<button className="border-white bg-white text-black mx-2 absolute bottom-4">
						Order Now
					</button>
				</div>
				<img
					className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
					src="https://images.pexels.com/photos/14179986/pexels-photo-14179986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
				/>
			</div>
		</div>
	);
};

export default HeadlineCards;
