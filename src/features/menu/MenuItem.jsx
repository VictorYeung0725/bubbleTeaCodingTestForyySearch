import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addItem } from '../cart/cartSlice';

function MenuItem({ bubbleTea }) {
  const [isTeaAdded, setIsTeaAdded] = useState(true);

  const dispatch = useDispatch();

  const { id, assetPath, name, description, currency, price, labels } =
    bubbleTea;

  const notify = () => {
    toast(
      `Your ${name} has been added to the cart, 
      please click on top-right for details`,
    );
    setIsTeaAdded(false);
    dispatch(addItem(bubbleTea));
  };

  return (
    <div className="divide-x border-2 border-solid">
      <li className="rounded-1 flex  justify-between space-x-4 p-3 shadow-md">
        <div className="pl-2">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p>
            {currency} : {price}
          </p>
          {description && (
            <p className="py-1 text-xs text-slate-500	">{description}</p>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-20 w-20 rounded-full "
            src={`./Media/${assetPath}`}
            alt={name}
          />

          {isTeaAdded && (
            <button
              className="rounded border border-blue-500 bg-transparent px-4 py-2 text-blue-700 hover:border-transparent hover:bg-blue-500 hover:text-white"
              onClick={() => notify()}
            >
              Add to Cart
            </button>
          )}
        </div>
      </li>
    </div>
  );
}

export default MenuItem;
