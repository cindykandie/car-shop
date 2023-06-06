import React from 'react';
import carStocks from '../data/carStocks.json';

export default function CarStocksSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-8">
      <h3 className="text-2xl font-bold mb-4">Latest Car Stocks Ready To Import</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {carStocks.map((car) => (
          <div key={car.carType} className="flex flex-col items-left">
            <img src={car.image} alt={car.carType} className="w-70 h-auto object-cover rounded-sm" />
            <h4 className="text-lg font-bold mt-2">{car.carType}</h4>
            <p className="text-gray-500">{car.year}</p>
            <p className="text-gray-500">{car.price}</p>
            <p className="text-gray-500">{car.port}</p>
          </div>
        ))}
      </div>
    </div>
  );
}