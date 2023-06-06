import Link from 'next/link';
import carBrands from '../data/carBrands.json';
import carLabels from '../data/carLabels.json';
import carColors from '../data/carColors.json';
import carYears from '../data/carYears.json';
import carBodyTypes from '../data/carBodyTypes.json'

export default function CarStocksSearch() {
    return (
        <div>
            <div className='bt-solid'>
            <h3>
                <Link href = '/' className="underline">
                Home
                </Link> / Car Stocks
            </h3>
            <div>
                <h3>Quick Search/Filter</h3>
                <h4 className='underline'>Popular Searches:</h4>
                <ul className='flex gap-5 grid-cols-2'>
                {carBrands.map((brand, index) => (
                <li className='w-[50%]' key={index}>{brand}</li>
                ))}
            </ul>
            </div>
            <div>
                <div>
                    <select name="cars" id="cars">
                    {carLabels.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                    <input type='text'/>
                    <select name="colors" id="colors">
                    {carColors.map((color, index) => (
                    <option key={index} value={color.value}>{color.label}</option>
                    ))}
                    </select>
                    <select name="minYear" id="minYear">
                    {carYears.map((year, index) => (
                    <option key={index} value={year.value}>{year.label}</option>
                    ))}
                    </select>
                    <select name="maxYear" id="maxYear">
                    {carYears.map((year, index) => (
                    <option key={index} value={year.value}>{year.label}</option>
                    ))}
                    </select>

                    <select name="cars" id="cars">
                        {carLabels.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                    </select>
                    <select name="bodyType" id="bodyType">
                    {carBodyTypes.map((type, index) => (
                    <option key={index} value={type.value}>{type.label}</option>
                    ))}
                    </select>
                </div>
            

                <div className="flex gap-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg border border-black">
                        Search Cars
                    </button>
                    <button className="bg-transparent text-navy-blue px-4 py-2 rounded-lg border border-black">
                        Clear Search
                    </button>
                </div>


                <span className='underline'>
                    {carBrands.length} </span>
                cars found
            </div>
      </div>
        </div>
    );
  }