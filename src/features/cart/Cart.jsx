import { useSelector, useDispatch } from 'react-redux';
import { clearCart, getCart } from './cartSlice';
import CartItem from './CartItem';
import Button from '../../ui/Button';
import EmptyCart from './EmptyCart';

const Cart = () => {
  const cart = useSelector(getCart);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    // Dispatch the clearCart action
    dispatch(clearCart());
  };

  if (cart.length === 0) return <EmptyCart />;

  return (
    <div>
      <h2 className="text-center text-lg font-bold">Your Cart</h2>
      <ul>
        {cart.map((item) => {
          console.log(item);
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/menu" type="primary">
          Order Bubble Tea
        </Button>

        <Button type="secondary" onClick={() => handleClearCart()}>
          Clear cart
        </Button>
      </div>
    </div>
  );
};

export default Cart;
