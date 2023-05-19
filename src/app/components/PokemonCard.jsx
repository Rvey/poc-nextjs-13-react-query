import React from "react";

const PokemonCard = ({ brand, model, weight = null, height = null }) => {
	return (
		<div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-16 py-8">
			<div className="flex flex-col items-center pb-10 justify-center text-gray-900 dark:text-white">
				
				<h5 className="mb-1 text-xl font-medium">{brand} - {model} </h5>
				{weight && <p>Weight: {weight}</p>}
				{height && <p>Height: {height}</p>}
			</div>
		</div>
	);
};

export default PokemonCard;
