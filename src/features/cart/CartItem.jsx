import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItemButton from './DeleteItemButton';
import UpdateItemQuantityButtons from './UpdateItemQuantityButtons';
import { getCurrentItemQuantity } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentItemQuantity(pizzaId));

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantityButtons
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItemButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
