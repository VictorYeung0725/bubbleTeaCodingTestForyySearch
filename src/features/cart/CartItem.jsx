import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdatedItemQuantity from './UpdatedItemQuantity';

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="px-3 text-sm font-bold">{formatCurrency(totalPrice)}</p>

        <UpdatedItemQuantity id={id} currentQuantity={quantity} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
