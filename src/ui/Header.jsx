import { Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5';

function Header() {
  return (
    <header className="flex justify-between p-5">
      <Link
        to="/"
        className="text-5xl font-bold uppercase underline decoration-rose-400"
      >
        Bubble Tea
      </Link>

      <Link to="cart">
        <IoCartOutline className=" h-10 w-10 hover:scale-150" />
      </Link>
    </header>
  );
}

export default Header;
