import LatestImports from '../../components/latestImports'
import CarStocksSearch from '../../components/carStocksFind.js';


export default function CarStocks() {
  return (
    <main className="flex flex-col items-center justify-between p-4">
      <CarStocksSearch/>
      <LatestImports />
    </main>
  )
}
