import { Link } from 'react-router-dom';
import Data from '../data';

export default function Dashboard() {
  return (
    <section>
      <h2>Most Active Stocks</h2>
      {
        Data.map((stock) => {
          const { name, symbol } = stock;

          return (
            <Link key={symbol} to={`/stocks/${symbol}`}>
              <h3>{name}</h3>
            </Link>
          );
        })
      }
    </section>
  )
}