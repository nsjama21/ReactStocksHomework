import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav>
      <Link to="/"><h1>Stocks</h1></Link>
      <div className='stocks-about'>
        <Link to="/stocks"><h3>Stocks</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
      </div>
    </nav>
  )
}