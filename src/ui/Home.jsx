import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center text-xl font-semibold">
      <h1 className="mb-8 text-xl font-semibold">
        Welcome to <span className="text-yellow-500">Bubble Tea Shop</span>,
        <br />
        where you can find the Best Bubble Tean in Town
      </h1>

      <button>
        <Link to="menu">Order</Link>
      </button>
    </div>
  );
}

export default Home;
